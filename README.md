# 🎮 English Learning Adventure

An interactive English learning game for Grade 5-6 learners (age 10-11), designed around a hybrid of UK and US curriculum goals.

## 🌟 Features

- **6 Learning Sections**:
  - Spelling Studio (with UK/US spelling variants)
  - Parts of Speech (noun, verb, adjective, adverb)
  - Sentence Builder
  - Tense Quest (past, present, future and advanced forms)
  - Punctuation Lab
  - Reading Mini Quiz
- **Stage-Based Progression**: Gentle age-level progression with 3 stages per module
- **Calm Learning Mode**: No timer, no pressure
- **Audio Support**: Voice prompts in spelling module
- **Instant Explanations**: Every answer gives feedback and learning notes
- **Parent Progress Tools**:
  - Score by module
  - Accuracy by topic
  - Mistake review list
  - Saved browser progress
  - Printable report

## 📊 Curriculum Direction (Hybrid UK + US)

The content focuses on common Year 5-6 / Grade 5-6 objectives:

- Grammar: parts of speech, sentence structure, punctuation
- Writing: clear sentence formation and tense control
- Spelling: accepted UK and US variants where appropriate
- Reading: inference, retrieval, and main idea

## 🎯 Progression Rules

- Each module is played in rounds of 5 questions
- Scoring rewards correct answers and mastery
- Stage increases when round accuracy reaches strong performance
- Mistakes are stored for review and reinforcement

## 🚀 How to Play

1. Select a section from Learning Sections
2. Answer each question and read the explanation
3. Complete a 5-question round
4. Track growth in the progress report and mistake review
5. Print progress for parent/guardian check-ins

## 💯 Scoring System

- Correct answer: +20 points
- Stars: awarded as mastery milestones
- Separate score tracking per module plus overall total

## 🎓 Educational Benefits

- Stronger grammar foundations for 10-11 year olds
- Better sentence quality and punctuation confidence
- Improved reading comprehension and inference skills
- Balanced spelling support for UK and US usage

## 🎮 Game Completion

Complete rounds across all modules to improve English confidence and track long-term progress.

---

**Perfect for**: Children ages 10-11, homeschool activities, classroom reinforcement, and parent-guided English practice.

## 🌐 Play Online

Once GitHub Pages finishes its first deployment (after the workflow run succeeds), the game will be live at:

https://jdhova.github.io/spelling-_game/

If the link 404s initially, wait for the Actions workflow ("Deploy to GitHub Pages") to complete, then refresh.

## 🔐 Secure AI Setup (Vercel + OpenAI)

For public websites, do not place OpenAI keys in browser JavaScript.

This project now supports a secure server route at `/api/teacher` for AI replies.

### 1) Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. In Vercel project settings, open Environment Variables.
3. Add key name: `Game`
4. Paste your OpenAI API key as the value.
5. Save and deploy.

### 2) In the app (Ask Teacher)

1. Open AI Teacher Mode.
2. Turn on Enable AI Teacher.
3. Set Backend endpoint to `/api/teacher`.
4. Set model to `gpt-4.1-mini` (recommended starter).
5. Click Save AI Settings.

### 3) Result

- The browser calls your Vercel server endpoint.
- The server reads `Game` from environment variables.
- The API key never appears in client code.

## 📝 License

Feel free to use this educational game for learning purposes!
