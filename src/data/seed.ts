import type { IQuestion } from "../types";

export const initialQuestions: IQuestion[] = [
  {
    id: crypto.randomUUID(),
    question: "What is TypeScript?",
    answer:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    difficulty: "junior",
    isLearned: false,
    category: "Basics",
    subCategory: "Intro",
  },
  {
    id: crypto.randomUUID(),
    question: "What is type inference?",
    answer:
      "Type inference is when TypeScript automatically determines a variable’s type.",
    difficulty: "junior",
    isLearned: false,
    category: "Basics",
    subCategory: "Types",
  },
  {
    id: crypto.randomUUID(),
    question: "What is a union type?",
    answer:
      "A union type allows a variable to hold multiple possible types using |.",
    difficulty: "junior",
    isLearned: false,
    category: "Types",
    subCategory: "Union",
  },
  {
    id: crypto.randomUUID(),
    question: "What is an intersection type?",
    answer: "An intersection type combines multiple types into one using &.",
    difficulty: "middle",
    isLearned: false,
    category: "Types",
    subCategory: "Intersection",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the unknown type?",
    answer:
      "Unknown is a type-safe alternative to any that requires type narrowing before use.",
    difficulty: "middle",
    isLearned: false,
    category: "Types",
    subCategory: "Special",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the never type?",
    answer:
      "Never represents values that never occur, such as functions that always throw.",
    difficulty: "middle",
    isLearned: false,
    category: "Types",
    subCategory: "Special",
  },
  {
    id: crypto.randomUUID(),
    question: "What is a tuple?",
    answer:
      "A tuple is an array with fixed length and defined types per position.",
    difficulty: "junior",
    isLearned: false,
    category: "Types",
    subCategory: "Tuple",
  },
  {
    id: crypto.randomUUID(),
    question: "What does readonly do?",
    answer: "Readonly makes a property immutable after initialization.",
    difficulty: "junior",
    isLearned: false,
    category: "Modifiers",
    subCategory: "Readonly",
  },
  {
    id: crypto.randomUUID(),
    question: "What is keyof?",
    answer: "Keyof produces a union of keys from a given object type.",
    difficulty: "middle",
    isLearned: false,
    category: "Operators",
    subCategory: "Keyof",
  },
  {
    id: crypto.randomUUID(),
    question: "What is typeof in TypeScript?",
    answer: "Typeof in TypeScript extracts the type of a variable.",
    difficulty: "middle",
    isLearned: false,
    category: "Operators",
    subCategory: "Typeof",
  },

  // ---------- FUNCTIONS ----------
  {
    id: crypto.randomUUID(),
    question: "How do you type a function in TypeScript?",
    answer: "You define parameter types and return type explicitly.",
    difficulty: "junior",
    isLearned: false,
    category: "Functions",
    subCategory: "Typing",
  },
  {
    id: crypto.randomUUID(),
    question: "What are optional parameters?",
    answer: "Optional parameters are marked with ? and may be omitted.",
    difficulty: "junior",
    isLearned: false,
    category: "Functions",
    subCategory: "Params",
  },
  {
    id: crypto.randomUUID(),
    question: "What are rest parameters?",
    answer:
      "Rest parameters collect multiple arguments into an array using ...",
    difficulty: "junior",
    isLearned: false,
    category: "Functions",
    subCategory: "Params",
  },
  {
    id: crypto.randomUUID(),
    question: "What are generics?",
    answer:
      "Generics allow reusable components that work with multiple types safely.",
    difficulty: "middle",
    isLearned: false,
    category: "Generics",
    subCategory: "Basics",
  },
  {
    id: crypto.randomUUID(),
    question: "What are generic constraints?",
    answer: "Generic constraints restrict generic types using extends.",
    difficulty: "senior",
    isLearned: false,
    category: "Generics",
    subCategory: "Advanced",
  },

  // ---------- ADVANCED ----------
  {
    id: crypto.randomUUID(),
    question: "What are mapped types?",
    answer:
      "Mapped types create new types by iterating over keys of another type.",
    difficulty: "senior",
    isLearned: false,
    category: "Advanced Types",
    subCategory: "Mapped",
  },
  {
    id: crypto.randomUUID(),
    question: "What are conditional types?",
    answer:
      "Conditional types use extends with a ternary operator to create dynamic types.",
    difficulty: "senior",
    isLearned: false,
    category: "Advanced Types",
    subCategory: "Conditional",
  },
  {
    id: crypto.randomUUID(),
    question: "What is infer in TypeScript?",
    answer: "Infer extracts a type inside conditional types.",
    difficulty: "senior",
    isLearned: false,
    category: "Advanced Types",
    subCategory: "Infer",
  },
  {
    id: crypto.randomUUID(),
    question: "What is utility type Partial?",
    answer: "Partial makes all properties optional.",
    difficulty: "middle",
    isLearned: false,
    category: "Utility Types",
    subCategory: "Partial",
  },
  {
    id: crypto.randomUUID(),
    question: "What does Required do?",
    answer: "Required makes all optional properties required.",
    difficulty: "middle",
    isLearned: false,
    category: "Utility Types",
    subCategory: "Required",
  },

  // ---------- OOP ----------
  {
    id: crypto.randomUUID(),
    question: "What are access modifiers?",
    answer:
      "Public, private, and protected control visibility of class members.",
    difficulty: "junior",
    isLearned: false,
    category: "OOP",
    subCategory: "Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is an abstract class?",
    answer:
      "An abstract class cannot be instantiated and may contain abstract methods.",
    difficulty: "middle",
    isLearned: false,
    category: "OOP",
    subCategory: "Abstract",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the difference between interface and abstract class?",
    answer:
      "Interfaces define structure, abstract classes can include implementation.",
    difficulty: "middle",
    isLearned: false,
    category: "OOP",
    subCategory: "Comparison",
  },

  // ---------- CONFIG ----------
  {
    id: crypto.randomUUID(),
    question: "What is tsconfig.json?",
    answer: "Tsconfig.json defines compiler options for TypeScript projects.",
    difficulty: "junior",
    isLearned: false,
    category: "Config",
    subCategory: "Compiler",
  },
  {
    id: crypto.randomUUID(),
    question: "What does strict mode do?",
    answer: "Strict mode enables all strict type-checking options.",
    difficulty: "middle",
    isLearned: false,
    category: "Config",
    subCategory: "Strict",
  },

  // ---------- REACT ----------
  {
    id: crypto.randomUUID(),
    question: "How do you type React props?",
    answer: "You define an interface or type and use it for component props.",
    difficulty: "junior",
    isLearned: false,
    category: "React",
    subCategory: "Props",
  },
  {
    id: crypto.randomUUID(),
    question: "How do you type useState?",
    answer: "Use generics like useState<Type>().",
    difficulty: "middle",
    isLearned: false,
    category: "React",
    subCategory: "Hooks",
  },

  // ---------- PATTERNS ----------
  {
    id: crypto.randomUUID(),
    question: "What is discriminated union?",
    answer:
      "A discriminated union uses a common literal property to narrow types safely.",
    difficulty: "senior",
    isLearned: false,
    category: "Patterns",
    subCategory: "Union",
  },
  {
    id: crypto.randomUUID(),
    question: "What is exhaustive checking?",
    answer:
      "Exhaustive checking ensures all union cases are handled, often using never.",
    difficulty: "senior",
    isLearned: false,
    category: "Patterns",
    subCategory: "Safety",
  },
];
