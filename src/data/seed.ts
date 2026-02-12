import type { IQuestion } from "../types";

export const initialQuestions: IQuestion[] = [
  {
    id: crypto.randomUUID(),
    question: "What is the difference between 'interface' and 'type'?",
    answer:
      "Interfaces are primarily for defining object shapes and support declaration merging. Types are more versatile, allowing unions, intersections, and aliases for primitives.",
    difficulty: "medium",
    isLearned: false,
    category: "Category",
    subCategory: "Subcategory",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the 'unknown' type and how does it differ from 'any'?",
    answer:
      "'any' disables all type checking. 'unknown' is the type-safe counterpart; you cannot perform operations on an 'unknown' value without first narrowing its type.",
    difficulty: "hard",
    isLearned: false,
    category: "Category",
    subCategory: "Subcategory",
  },
  {
    id: crypto.randomUUID(),
    question: "What are Generics in TypeScript?",
    answer:
      "Generics allow you to create reusable components that work with a variety of types rather than a single one, providing type safety without losing flexibility.",
    difficulty: "medium",
    isLearned: false,
    category: "Category",
    subCategory: "Subcategory",
  },
  {
    id: crypto.randomUUID(),
    question: "Explain 'Type Narrowing'.",
    answer:
      "It's the process of refining a broader type into a more specific one using conditional blocks (like typeof, instanceof, or custom type guards).",
    difficulty: "easy",
    isLearned: false,
    category: "Category",
    subCategory: "Subcategory",
  },
  {
    id: crypto.randomUUID(),
    question: "What does the 'readonly' modifier do?",
    answer:
      "It makes a property immutable after its initial assignment, preventing any further changes to that specific field.",
    difficulty: "easy",
    isLearned: false,
    category: "Category",
    subCategory: "Subcategory",
  },
  {
    id: crypto.randomUUID(),
    question: "What are 'Mapped Types'?",
    answer:
      "Mapped types allow you to create new types based on an existing one by iterating over keys, often used for utility types like Partial<T> or Readonly<T>.",
    difficulty: "hard",
    isLearned: false,
    category: "Category",
    subCategory: "Subcategory",
  },
  {
    id: crypto.randomUUID(),
    question: "What is a 'Tuple' in TypeScript?",
    answer:
      "A tuple is an array with a fixed number of elements where each element has a specifically defined type and order.",
    difficulty: "easy",
    isLearned: false,
    category: "Category",
    subCategory: "Subcategory",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the 'keyof' operator?",
    answer:
      "The 'keyof' operator takes an object type and produces a string or numeric literal union of its keys.",
    difficulty: "medium",
    isLearned: false,
    category: "Category",
    subCategory: "Subcategory",
  },
];
