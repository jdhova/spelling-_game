module.exports = async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const apiKey = process.env.Game || process.env.GAME || process.env.OPENAI_API_KEY;
    if (!apiKey) {
        res.status(500).json({ error: "Missing API key on server. Set Game in Vercel Environment Variables." });
        return;
    }

    try {
        const body = req.body || {};
        const model = String(body.model || "gpt-4.1-mini").trim();
        const question = String(body.question || "").trim();
        const moduleTitle = String(body.moduleTitle || body.moduleId || "English module").trim();
        const studentName = String(body.studentName || "Student").trim();
        const currentQuestionContext = String(body.currentQuestionContext || "No active question context.").trim();
        const recentMistakes = Array.isArray(body.recentMistakes) ? body.recentMistakes.slice(0, 3) : [];
        const history = Array.isArray(body.history) ? body.history.slice(-6) : [];

        if (!question) {
            res.status(400).json({ error: "Question is required" });
            return;
        }

        const systemPrompt = [
            "You are a warm, patient English teacher for a 10-11 year old child.",
            "Give concise, clear answers in simple language.",
            "Be specific and avoid repetitive generic replies.",
            "Use one short practical example when helpful.",
            "If the child is confused, provide step-by-step guidance.",
            "Use UK/US spelling notes only when relevant.",
            "Keep the answer under 120 words and end with one friendly check question."
        ].join(" ");

        const userContext = [
            "Teaching context:",
            `Module: ${moduleTitle}`,
            `Student name: ${studentName}`,
            `Current activity: ${currentQuestionContext}`,
            `Recent mistakes: ${recentMistakes.length ? recentMistakes.join(" | ") : "none"}`,
            `Student question: ${question}`
        ].join("\n");

        const messages = [{ role: "system", content: systemPrompt }];
        history.forEach((entry) => {
            if (!entry || !entry.role || !entry.text) return;
            const role = entry.role === "assistant" ? "assistant" : "user";
            messages.push({ role, content: String(entry.text) });
        });
        messages.push({ role: "user", content: userContext });

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model,
                temperature: 0.5,
                messages
            })
        });

        if (!response.ok) {
            const errorBody = await response.text();
            res.status(response.status).json({ error: "OpenAI request failed", details: errorBody.slice(0, 400) });
            return;
        }

        const data = await response.json();
        const answer = data?.choices?.[0]?.message?.content?.trim() || "";
        if (!answer) {
            res.status(502).json({ error: "Model returned an empty response" });
            return;
        }

        res.status(200).json({ answer });
    } catch (error) {
        res.status(500).json({ error: "Server error", details: error && error.message ? error.message : "Unknown error" });
    }
};
