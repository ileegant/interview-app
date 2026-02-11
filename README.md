QA Interview App 🚀

Level up your programming knowledge and crush your next Senior Developer interview.

✨ Features

Smart Progress Tracking – Visual progress bar to see how close you are to mastery.
Multi-level Difficulty – Filter questions by Easy, Medium, or Hard.
Dynamic Filtering – Instantly find questions you haven't mastered yet.
Safe Data Entry – Powered by Zod for schema validation (no more broken data).
Local Persistence – Your progress is automatically saved to localStorage.

🛠️ Tech Stack

Core: React 18 + TypeScript
Bundler: Vite
Styling: Tailwind CSS v4 (Engineered for performance)
Validation: Zod (Runtime type safety)

🚀 Quick Start

Clone the repo:

    git clone https://github.com/ileegant/interview-app.git

Install dependencies:

    npm install

Run development server:

    npm run dev

📂 Project Structure
Plaintext

src/
├── components/ # Atomic UI components (QuestionCard, Form, etc.)
├── data/ # Seed files & initial interview questions
├── types/ # Zod schemas & TypeScript interfaces
├── App.tsx # Main logic & State management
└── main.tsx # Entry point

🛡️ Data Validation

We use Zod to ensure every question added to the list meets our strict quality standards:
TypeScript

export const QuestionSchema = z.object({
id: z.string().uuid(),
question: z.string().min(5, "Question is too short"),
answer: z.string().min(10, "Provide a more detailed answer"),
difficulty: z.enum(["easy", "medium", "hard"]),
isLearned: z.boolean()
});

📸 UI Preview

Modern Cards: Glassmorphism-inspired design with hover effects.
Empty States: Intuitive feedback when no data matches your filters.

🤝 Contributing

Feel free to fork this repo and add your own tricky TypeScript questions!

Created with ❤️ for the Ukrainian Dev Community.
