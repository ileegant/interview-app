import type { IQuestion } from "../types";

export const initialQuestions: IQuestion[] = [
  {
    id: crypto.randomUUID(),
    question: "What is TypeScript?",
    answer:
      "TypeScript is a statically typed superset of JavaScript that adds a powerful type system on top of JS. It compiles to plain JavaScript and runs anywhere JS runs. Its main goal is to prevent runtime errors during development by catching them at compile time. It improves scalability, maintainability, and developer experience in large applications.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "How is TypeScript different from JavaScript?",
    answer:
      "TypeScript adds static typing, interfaces, generics, enums, access modifiers, and advanced type manipulation features. JavaScript is dynamically typed and errors are caught at runtime, while TypeScript catches many errors at compile time. TypeScript also provides better tooling, autocomplete, and refactoring support due to its type system.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What is type inference?",
    answer:
      "Type inference is when TypeScript automatically determines the type of a variable based on its assigned value. For example, if you write `let x = 5`, TS infers x as number. This reduces the need for explicit annotations while keeping type safety.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What are basic primitive types?",
    answer:
      "The basic primitive types in TypeScript are string, number, boolean, null, undefined, symbol, and bigint. These represent simple immutable values. TypeScript also includes special types like any, unknown, void, and never.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the difference between any and unknown?",
    answer:
      "`any` disables type checking completely — you can do anything with it. `unknown` is type-safe alternative to any. You must narrow or assert its type before using it. So unknown forces safer code, while any bypasses the type system entirely.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What is never type?",
    answer:
      "`never` represents values that never occur. It is used for functions that never return (like functions that throw errors or have infinite loops). It also appears in exhaustive type checks when all possible cases are handled.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What is void used for?",
    answer:
      "`void` represents the absence of a return value. It is typically used in functions that do not return anything. Unlike undefined, void explicitly signals that the function’s result should be ignored.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What are union types?",
    answer:
      "Union types allow a variable to hold multiple possible types using the `|` operator. For example, `string | number` means the value can be either. They are often combined with type narrowing for safe usage.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What are literal types?",
    answer:
      "Literal types allow you to specify exact values as types, like `'success' | 'error'`. They restrict values to specific constants and are useful for strict APIs and discriminated unions.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What is a tuple?",
    answer:
      "A tuple is a fixed-length array where each position has a specific type. For example, `[string, number]`. Unlike regular arrays, the order and types are strictly enforced.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What is an enum?",
    answer:
      "An enum is a way to define a set of named constants. It can be numeric or string-based. Enums improve readability and prevent magic values in code.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What is strict mode in TypeScript?",
    answer:
      "Strict mode is a set of compiler options that enable stricter type checking. It includes strictNullChecks, noImplicitAny, strictFunctionTypes, and others. It significantly improves code safety and is recommended for production projects.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "How does type widening work?",
    answer:
      "Type widening happens when TypeScript generalizes a literal type to a broader type. For example, `let x = 'hello'` becomes string instead of `'hello'`. Using `as const` prevents widening and keeps literal types.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the difference between null and undefined in TS?",
    answer:
      "`undefined` usually means a variable was declared but not assigned. `null` is an intentional absence of value. With strictNullChecks enabled, they are separate types and must be handled explicitly.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What is excess property checking?",
    answer:
      "Excess property checking happens when assigning object literals to typed objects. TypeScript ensures that no unexpected properties are included. It prevents accidental typos in object keys.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What is control flow analysis?",
    answer:
      "Control flow analysis is how TypeScript narrows types based on runtime conditions. For example, inside an `if (typeof x === 'string')`, x is treated as string. It makes union types safe to work with.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "How does structural typing work?",
    answer:
      "TypeScript uses structural typing, meaning compatibility is based on shape rather than explicit declarations. If two objects have the same structure, they are compatible, even if they were declared separately.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What are type assertions?",
    answer:
      "Type assertions tell the compiler to treat a value as a specific type. They do not change runtime behavior. They are used when the developer knows more about a value than TypeScript can infer.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the difference between compile-time and runtime?",
    answer:
      "Compile-time is when TypeScript checks types and transforms code into JavaScript. Runtime is when JavaScript executes in the browser or Node.js. TypeScript types exist only at compile-time and are erased after compilation.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "How does TypeScript handle backward compatibility?",
    answer:
      "TypeScript is designed to stay compatible with JavaScript. Any valid JavaScript file is valid TypeScript. New features are usually optional and introduced via compiler flags, ensuring gradual adoption without breaking existing codebases.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Basic",
  },
  {
    id: crypto.randomUUID(),
    question: "How do you type a function in TypeScript?",
    answer:
      "You type a function by annotating its parameters and return type. Example: `(a: number, b: number): number => a + b`. This ensures arguments and return values match expected types at compile time. It prevents incorrect usage and improves IntelliSense.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What are optional parameters?",
    answer:
      "Optional parameters are marked with `?` and may be omitted when calling the function. Example: `(name?: string)`. They must come after required parameters and are treated as possibly undefined inside the function.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What are default parameters?",
    answer:
      "Default parameters provide a fallback value if no argument is passed. Example: `(count: number = 0)`. They remove the need for manual undefined checks and are fully type-checked.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What are rest parameters?",
    answer:
      "Rest parameters collect multiple arguments into an array using `...args: Type[]`. They allow flexible argument counts while preserving type safety.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "How do you define return types?",
    answer:
      "Return types are defined after the parameter list using `: Type`. Example: `(): string`. If omitted, TypeScript infers it automatically, but explicit return types improve readability and maintainability.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What is a function type?",
    answer:
      "A function type describes the shape of a function, including parameter types and return type. Example: `type Add = (a: number, b: number) => number`. It allows functions to be passed as typed values.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What are call signatures?",
    answer:
      "Call signatures define how a function can be invoked inside object types or interfaces. Example: `{ (x: number): string }`. They describe callable objects.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What is function overloading?",
    answer:
      "Function overloading allows multiple function signatures for the same function name with different parameter types. Only one implementation exists, but multiple type definitions control how it's called.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "Difference between overload and union types?",
    answer:
      "Overloads define multiple distinct call signatures. Union types allow a parameter to accept multiple types in one signature. Overloads provide more precise return type control depending on inputs.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "How do generics work with functions?",
    answer:
      "Generics allow functions to work with different types while preserving type information. Example: `function identity<T>(value: T): T`. They ensure type consistency between inputs and outputs.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What is contextual typing?",
    answer:
      "Contextual typing occurs when TypeScript infers types based on surrounding context. For example, callback parameter types are inferred from the function signature they are assigned to.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What is this typing in functions?",
    answer:
      "You can explicitly type `this` in function parameters: `function f(this: SomeType)`. This is useful in callbacks and class-like patterns to ensure correct binding and usage.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What are arrow function differences in TS?",
    answer:
      "Arrow functions inherit `this` from their lexical scope, unlike regular functions. In TypeScript, they are typed similarly but are often safer for callbacks due to predictable `this` binding.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "How do you type async functions?",
    answer:
      "Async functions always return a Promise. Example: `async function f(): Promise<string>`. The resolved type must match the declared Promise generic.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What is higher-order function typing?",
    answer:
      "A higher-order function takes or returns another function. Proper typing ensures callback input/output types are preserved. Generics are often used for maximum flexibility.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "How do you type callbacks?",
    answer:
      "Callbacks are typed using function types. Example: `(callback: (result: string) => void)`. This ensures correct argument and return value expectations.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What are generic constraints in functions?",
    answer:
      "Generic constraints restrict the types that can be used with generics using `extends`. Example: `<T extends { id: number }>`. This ensures required structure exists.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "What is a type predicate?",
    answer:
      "A type predicate is a special return type like `value is string`. It allows custom type guards that narrow types safely after runtime checks.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "How does TypeScript infer function types?",
    answer:
      "TypeScript infers function parameter and return types from usage context, assignments, and return statements. If inference fails, explicit annotations are required.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "How would you design a fully type-safe function API?",
    answer:
      "I would use generics for flexibility, strict return types, overloads when needed, and type predicates for safe narrowing. I would avoid `any`, prefer `unknown`, and leverage utility types to ensure strong contracts. The goal is to make incorrect usage impossible at compile time.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Functions",
  },
  {
    id: crypto.randomUUID(),
    question: "How do you define an object type?",
    answer:
      "In TypeScript, object types can be defined using either type aliases or interfaces. You describe the exact shape of the object by declaring its properties and their types. This enables static validation, autocomplete, and safer refactoring. Object typing ensures that only correctly shaped data structures are allowed at compile time.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },
  {
    id: crypto.randomUUID(),
    question: "What are optional properties?",
    answer:
      "Optional properties are fields that may or may not exist on an object. They are marked with a question mark (?). TypeScript treats them as potentially undefined, which forces safer access patterns. This is extremely useful when modeling APIs, partial updates, or flexible configurations.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is a readonly property?",
    answer:
      "A readonly property cannot be reassigned after the object is created. It guarantees immutability at compile time, preventing accidental mutations. This is critical when working with state management or domain models where integrity must be preserved.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is an index signature?",
    answer:
      "An index signature allows you to describe objects with dynamic keys. It defines the type of keys and the type of their values. This is powerful for dictionaries, maps, or objects where keys are not known in advance but must still follow strict typing rules.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is excess property checking?",
    answer:
      "Excess property checking is a safety mechanism that prevents assigning objects with unexpected properties to a typed variable. It only applies to object literals and helps catch typos or invalid fields early. This ensures stricter validation and more predictable object shapes.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is the difference between type and interface for objects?",
    answer:
      "Both type and interface can describe object shapes. Interfaces support declaration merging and are often preferred for public APIs. Type aliases are more flexible because they can represent unions, intersections, and primitives. In most object cases they are interchangeable, but interfaces are more extensible by design.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is nested object typing?",
    answer:
      "Nested object typing means defining objects inside other objects with fully typed structures. This ensures deep structural validation and guarantees that every level of the object hierarchy matches the expected shape. It’s essential when modeling complex domain entities.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "How does object destructuring work with types?",
    answer:
      "When destructuring objects, TypeScript infers types from the source object or explicit annotations. You can also annotate destructured parameters directly in function signatures. This preserves strong typing while writing clean and modern JavaScript syntax.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is object type widening?",
    answer:
      "Object type widening happens when TypeScript generalizes literal types into broader types. For example, a string literal may widen to string unless 'as const' is used. Understanding widening is critical to maintaining precise types and preventing unintended generalization.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What are exact optional property types?",
    answer:
      "Exact optional property types ensure that an optional property truly means 'absent' rather than 'possibly undefined'. When enabled via compiler options, it enforces stricter semantics and prevents subtle bugs caused by undefined values being treated as missing fields.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is object intersection?",
    answer:
      "Object intersection combines multiple object types into one using '&'. The resulting type must satisfy all combined structures. This is extremely useful for composing complex types from smaller reusable building blocks.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is object union?",
    answer:
      "Object union allows a value to match one of several object shapes using '|'. Type narrowing is typically required to safely access properties. This pattern is heavily used in discriminated unions and state modeling.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is Record type?",
    answer:
      "Record<K, T> is a utility type that creates an object type with keys of type K and values of type T. It’s ideal for dictionaries with known key unions. It produces clean, predictable, and scalable object definitions.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "How to type dynamic keys?",
    answer:
      "Dynamic keys can be typed using index signatures, mapped types, or generics with keyof constraints. This allows flexibility while maintaining strict type safety. It ensures dynamic structures remain predictable and controlled.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is keyof on objects?",
    answer:
      "The keyof operator extracts the union of keys from an object type. It is fundamental for creating reusable and type-safe abstractions, especially in generic utilities and mapped types.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is a mapped object type?",
    answer:
      "A mapped type transforms each property of an existing type into a new type using a mapping rule. It’s the foundation behind utility types like Partial, Required, and Readonly. This enables powerful compile-time transformations of object structures.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "How does immutability work in objects?",
    answer:
      "Immutability in TypeScript is enforced using readonly properties or utility types like Readonly<T>. It prevents accidental mutation and makes state management more predictable. However, it’s only enforced at compile time and does not freeze objects at runtime.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What is deep readonly pattern?",
    answer:
      "The deep readonly pattern recursively applies readonly to all nested properties of an object. It’s usually implemented via recursive mapped types. This is crucial for guaranteeing full immutability in complex state structures.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "How do you enforce strict object shapes?",
    answer:
      "Strict object shapes can be enforced using excess property checks, exact optional property types, and never index signatures to forbid unknown keys. Advanced techniques include conditional types that reject extra fields. This ensures total control over domain models.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },

  {
    id: crypto.randomUUID(),
    question: "What are pitfalls of object typing?",
    answer:
      "Common pitfalls include unintended type widening, unsafe unions without narrowing, misuse of any, and misunderstanding structural typing. Another issue is assuming runtime guarantees from compile-time checks. senior engineers must understand how structural typing differs from nominal typing to avoid architectural mistakes.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Objects",
  },
  {
    id: crypto.randomUUID(),
    question: "What is an interface?",
    answer:
      "An interface in TypeScript defines the shape of an object or a contract. It specifies properties, methods, and their types, allowing strong typing and code reuse across multiple objects or classes.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "How do you define an interface?",
    answer:
      "You use the `interface` keyword. Example: `interface User { id: number; name: string; }`. This defines a type contract that objects can implement or adhere to.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "How to extend an interface?",
    answer:
      "Use the `extends` keyword to create a new interface based on another. Example: `interface Admin extends User { role: string; }`. This allows reuse and hierarchical typing.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "Can interfaces extend multiple interfaces?",
    answer:
      "Yes, interfaces can extend multiple interfaces using a comma-separated list: `interface SuperUser extends User, Permissions {}`. This merges properties and ensures the implementing object satisfies all contracts.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "What is declaration merging?",
    answer:
      "Declaration merging happens when multiple declarations with the same interface name are combined into a single type. TS merges properties, enabling flexible augmentation of existing interfaces, e.g., adding methods to third-party types.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "Difference between interface and type?",
    answer:
      "Interfaces are extensible and support declaration merging, making them ideal for OOP patterns. `type` aliases are more flexible (can represent unions, intersections, primitives) but cannot be merged. Interfaces are preferred for public API contracts.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "Can interface describe functions?",
    answer:
      "Yes, an interface can describe function signatures: `interface Fn { (a: number): string; }`. This is useful for typed callbacks or callable objects.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "Can interface describe arrays?",
    answer:
      "Yes, interfaces can describe array structures using index signatures: `interface StringArray { [index: number]: string; }`. This ensures type safety for array elements.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "What is hybrid type in interface?",
    answer:
      "A hybrid type is an interface that can act as both a function and an object with properties: `interface Counter { (): void; count: number; }`. Useful for libraries like jQuery-style APIs.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "What is interface merging use case?",
    answer:
      "A common use case is augmenting third-party libraries. For example, extending `Window` or `Request` interfaces to add custom properties without modifying the original type definitions.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "What is implements in classes?",
    answer:
      "The `implements` keyword ensures a class adheres to a specific interface contract. TS checks that all properties and methods are correctly defined: `class UserClass implements User { ... }`.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "Can interfaces extend classes?",
    answer:
      "Yes, interfaces can extend classes to inherit the class’s members. This allows type contracts based on class shapes without inheriting implementation.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "What are limitations of interfaces?",
    answer:
      "Interfaces cannot represent union or tuple types, primitive types, or mapped types. They also cannot contain implementation logic. Types are better for those scenarios.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "When to prefer interface over type?",
    answer:
      "Use interfaces for object shapes, OOP design, or public API contracts, especially when extension or merging is needed. Types are better for unions, intersections, tuples, or primitive aliases.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "Can interfaces use generics?",
    answer:
      "Yes, interfaces can be generic: `interface ApiResponse<T> { data: T; }`. This allows flexible typing while keeping the interface reusable across different data types.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "What is readonly in interface?",
    answer:
      "The `readonly` modifier ensures that properties cannot be reassigned after initialization. Example: `readonly id: number;` protects objects from accidental mutation.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "What is optional property in interface?",
    answer:
      "Optional properties are marked with `?`, allowing objects to omit them: `name?: string`. This is useful for partial data structures or optional configuration objects.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "How do interfaces behave in structural typing?",
    answer:
      "Interfaces are purely structural. Two interfaces with the same shape are compatible, even if declared separately. This enables flexible yet type-safe object compatibility.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "How to enforce strict contracts with interfaces?",
    answer:
      "Enforce strict contracts by combining `readonly`, required properties, and generics. Use `strict` mode and avoid `any` to prevent accidental type violations. This ensures objects fully adhere to the interface.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },
  {
    id: crypto.randomUUID(),
    question: "How to design scalable interface architecture?",
    answer:
      "Use interface segregation, generics, and modular design. Separate responsibilities, extend small interfaces, and avoid monolithic ones. This keeps the system maintainable and flexible for large applications.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Interfaces",
  },

  {
    id: crypto.randomUUID(),
    question: "What are conditional types?",
    answer:
      "Conditional types allow you to express types that depend on a condition, using the syntax `T extends U ? X : Y`. They enable highly dynamic type transformations at compile time, making TypeScript extremely powerful for generic programming and reusable abstractions.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What are mapped types?",
    answer:
      "Mapped types transform existing object types by applying a rule to each property. For example, `type Readonly<T> = { readonly [K in keyof T]: T[K] }`. They underpin utility types like Partial, Required, and Record, enabling flexible and reusable type transformations.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is indexed access type?",
    answer:
      "Indexed access types allow you to retrieve the type of a property from another type using `T[K]` syntax. This is essential for creating type-safe functions that operate on keys of objects or dynamic property lookups.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is keyof?",
    answer:
      "The `keyof` operator extracts the union of all keys from an object type. It is foundational for creating type-safe generic utilities and mapped types, allowing you to restrict values to valid property names.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is typeof in types?",
    answer:
      "`typeof` in TypeScript allows you to reference the type of a variable, constant, or function. This enables precise type inference and prevents duplication of type definitions, making your code DRY and type-safe.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What are template literal types?",
    answer:
      "Template literal types allow you to create string types based on other string types using interpolation, e.g., ``type Event = `${Action}Event` ``. They are useful for creating strongly typed keys, route paths, or event names dynamically.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is infer keyword?",
    answer:
      "The `infer` keyword is used inside conditional types to capture a type in the true branch. It allows extracting types from complex structures, like inferring the return type of a function or the element type of an array, enabling advanced type manipulation.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "How do distributive conditional types work?",
    answer:
      "Distributive conditional types automatically distribute over union types. For example, `T extends U ? X : Y` with `T = A | B` becomes `(A extends U ? X : Y) | (B extends U ? X : Y)`. This is critical for transforming unions element-wise in generic programming.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is type narrowing?",
    answer:
      "Type narrowing is the process of refining a broad type into a more specific one using control flow constructs like `if`, `typeof`, `instanceof`, or discriminated unions. It ensures safe access to properties and prevents runtime errors.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What are discriminated unions?",
    answer:
      "Discriminated unions combine multiple object types with a shared literal property (the 'discriminator') that uniquely identifies each variant. This pattern enables type-safe branching and exhaustive checking in TypeScript, commonly used in state machines and API responses.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is recursive type?",
    answer:
      "Recursive types are types that reference themselves, allowing you to model nested structures like trees, JSON objects, or linked lists. Properly defined, they enable deep type safety for hierarchical or infinitely nested data structures.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is intersection type?",
    answer:
      "Intersection types combine multiple types into one, requiring values to satisfy all included types. For example, `type A = X & Y` means any value must conform to both X and Y. This is widely used for mixins and composing reusable behaviors.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is union type?",
    answer:
      "Union types allow a variable to be one of several types, expressed with `|`. They are fundamental for modeling flexible data, optional values, or multiple possible outcomes in a type-safe way.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is utility type composition?",
    answer:
      "Utility type composition is the practice of combining multiple built-in or custom utility types (like Partial, Readonly, Record) to create new, complex types. This allows highly reusable and declarative type transformations.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is variance in types?",
    answer:
      "Variance describes how subtyping of complex types relates to subtyping of their components. Covariant types allow substitution with more specific types, contravariant types allow more general, and invariant types disallow both. Understanding variance is critical for safe API design.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is covariance vs contravariance?",
    answer:
      "Covariance allows a type to accept more derived types (output positions), while contravariance allows accepting more base types (input positions). Recognizing these behaviors prevents subtle bugs in function arguments and generic type assignments.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What are branded types?",
    answer:
      "Branded types create nominal-like typing by attaching a phantom type to a value. This prevents accidental mixing of structurally identical types, e.g., distinguishing UserId from ProductId, improving type safety in large codebases.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is nominal typing workaround?",
    answer:
      "TypeScript is structurally typed, but nominal typing can be simulated using branded types or unique symbols. This prevents accidental assignment between types that are structurally identical but conceptually distinct, adding stronger domain constraints.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What are edge cases of conditional types?",
    answer:
      "Edge cases include distributivity over unions, interactions with never or any, recursive conditional types, and type inference pitfalls. Understanding these helps avoid unexpected type widening, narrowing failures, or infinite recursion during compilation.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },

  {
    id: crypto.randomUUID(),
    question: "How to debug complex types?",
    answer:
      "Debugging complex types involves breaking them into smaller parts, using temporary type aliases, `as const` assertions, and TypeScript’s `type` inspection in editors. Tools like `ts-toolbelt` or the `typescript` playground can visualize types and uncover subtle inference issues.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Advanced Types",
  },
  {
    id: crypto.randomUUID(),
    question: "What are generics?",
    answer:
      "Generics allow you to write reusable code that works with multiple types while keeping type safety. Instead of hardcoding types, you use placeholders like `<T>` which are specified when the function, class, or interface is used.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "How to define generic function?",
    answer:
      "You define a generic function using angle brackets: `function identity<T>(value: T): T { return value; }`. The type `T` is inferred from the argument or specified explicitly when calling the function.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "How to define generic interface?",
    answer:
      "Use `<T>` in an interface: `interface ApiResponse<T> { data: T; status: number; }`. This allows the interface to work with different data types while preserving type safety.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What are generic constraints?",
    answer:
      "Constraints restrict what types a generic can accept. Example: `<T extends { id: number }>` ensures `T` has an `id` property. This prevents misuse while keeping generics flexible.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is extends in generics?",
    answer:
      "`extends` in generics sets a constraint. For example: `<T extends string | number>` allows only string or number types. It ensures compile-time type safety for generic operations.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is default generic type?",
    answer:
      "Default generic types provide a fallback if no type is specified: `function foo<T = string>(value: T) {}`. It improves usability while retaining type safety.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is generic inference?",
    answer:
      "TypeScript can infer the generic type from the arguments passed to a function or class. Example: `identity(42)` infers `T` as `number` without explicit annotation.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What are multiple generic parameters?",
    answer:
      "Functions, interfaces, or classes can have multiple generic parameters: `function merge<T, U>(a: T, b: U): T & U`. This allows type-safe operations involving multiple types.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is keyof with generics?",
    answer:
      "`keyof` allows you to get the keys of a type as a union. Combined with generics: `function getProp<T, K extends keyof T>(obj: T, key: K) { return obj[key]; }` ensures type-safe property access.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is conditional generics?",
    answer:
      "Conditional generics use type conditions to compute types dynamically: `T extends string ? string[] : number[]`. This enables highly flexible and type-safe APIs based on input types.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is infer with generics?",
    answer:
      "`infer` is used in conditional types to extract a type: `type ReturnType<T> = T extends (...args: any) => infer R ? R : any;`. It allows advanced type transformations and type introspection.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What are common generic patterns?",
    answer:
      "Common patterns include identity functions, type-safe APIs, collection wrappers, mapped types, utility types, and higher-order generic functions. They help create reusable, type-safe abstractions.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is generic utility type?",
    answer:
      "Generic utility types are built-in TS types that work with generics: `Partial<T>`, `Required<T>`, `Readonly<T>`, `Pick<T,K>`, `Omit<T,K>`. They simplify common type transformations.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is higher-order generic?",
    answer:
      "A higher-order generic is a generic that returns or accepts other generics. Example: `function wrap<T>(fn: (x: T) => T): (x: T) => T {}`. It allows creating flexible, composable, type-safe abstractions.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What are generic pitfalls?",
    answer:
      "Pitfalls include overusing `any` instead of generics, creating overly complex constraints, deep recursion, or incorrectly assuming inference will always work. Generics must balance flexibility with readability.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is variance in generics?",
    answer:
      "Variance describes how subtyping works in generics: covariant, contravariant, and invariant. Understanding variance ensures type safety when assigning generic types in function parameters or classes.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "How to create type-safe API using generics?",
    answer:
      "Use generics to parameterize endpoints, request/response types, and callbacks. Combine with keyof, constraints, and utility types to ensure the API cannot be misused at compile-time.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is recursive generic?",
    answer:
      "Recursive generics reference themselves to model nested structures. Example: `type NestedArray<T> = T | NestedArray<T>[]`. Useful for deeply nested, type-safe data structures.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is generic factory pattern?",
    answer:
      "A generic factory creates type-safe instances dynamically: `function createInstance<T>(c: new () => T): T { return new c(); }`. It ensures that the created object matches the expected type.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "How generics impact performance?",
    answer:
      "Generics are erased at compile-time, so they do not affect runtime performance. They only provide compile-time type safety. However, overly complex generics can slow down compilation.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Generics",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Partial?",
    answer:
      "Partial<T> makes all properties of type T optional. It’s useful when creating objects incrementally, for updates, or optional configuration objects. Example: `Partial<User>` allows omitting some User properties safely.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is Required?",
    answer:
      "Required<T> is the opposite of Partial; it makes all optional properties of T required. This is helpful when you want to ensure all fields are present, e.g., when validating a complete form submission object.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Pick?",
    answer:
      "Pick<T, K> constructs a type by selecting a subset of properties K from type T. It’s useful for creating smaller views of objects or DTOs that only include certain fields.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Omit?",
    answer:
      "Omit<T, K> creates a type by removing properties K from type T. It’s often used to exclude sensitive fields, like passwords, when sending user data externally.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Record?",
    answer:
      "Record<K, T> creates an object type with keys of type K and values of type T. It’s perfect for dictionaries, maps, or any structure where the keys are known and the values have uniform type.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Exclude?",
    answer:
      "Exclude<T, U> removes from type T all types that are assignable to U. It’s used to filter out unwanted members from a union type, ensuring stricter type control.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Extract?",
    answer:
      "Extract<T, U> is the opposite of Exclude: it selects from T all types assignable to U. This is useful when you want to narrow a union to a subset of types safely.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is NonNullable?",
    answer:
      "NonNullable<T> removes null and undefined from type T. It’s particularly useful for ensuring variables are always defined and avoiding runtime null errors.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is ReturnType?",
    answer:
      "ReturnType<T> extracts the return type of a function type T. It’s helpful when you want to reuse the exact output type of a function without duplicating type definitions.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is Parameters?",
    answer:
      "Parameters<T> extracts the types of all parameters of a function type T as a tuple. This allows you to reuse function signatures or create wrapper functions with type safety.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is InstanceType?",
    answer:
      "InstanceType<T> extracts the instance type of a class constructor type T. It’s essential for creating type-safe factories or dependency injection patterns.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is Awaited?",
    answer:
      "Awaited<T> extracts the resolved type from a Promise or a nested Promise. It’s useful for type-safe async functions and avoiding manually unwrapping nested Promises.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "How are utility types implemented?",
    answer:
      "Most utility types are implemented using mapped types, conditional types, and key remapping. TypeScript leverages compile-time transformations to create flexible, reusable type operations without runtime overhead.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "How to create custom utility type?",
    answer:
      "Custom utility types combine mapped types, conditional types, and keyof to transform existing types. For example, you can create DeepReadonly<T> to recursively make properties readonly or NullableKeys<T> to allow specific fields to be null.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is DeepPartial?",
    answer:
      "DeepPartial<T> recursively makes all properties of T optional. Unlike Partial, which only affects the top level, DeepPartial ensures nested objects can be partially defined, which is perfect for complex configuration or update scenarios.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is Readonly utility?",
    answer:
      "Readonly<T> marks all properties of T as readonly, preventing reassignment. This ensures compile-time immutability for object structures and is widely used in state management or immutable data patterns.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "How utility types use mapped types?",
    answer:
      "Utility types are mostly implemented using mapped types by iterating over all keys of a type with `[K in keyof T]` and transforming them. This enables compile-time transformations like Partial, Readonly, Pick, Omit, and more.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What is utility composition?",
    answer:
      "Utility composition is combining multiple utility types to create new types. For example, `Readonly<Partial<T>>` makes an object optional and immutable. This allows highly flexible and declarative type manipulation.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "What are limitations of utility types?",
    answer:
      "Limitations include inability to affect runtime behavior, sometimes limited recursion depth, inability to model nominal types directly, and potential complexity leading to harder-to-read types. Overusing utilities can reduce readability for newcomers.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },

  {
    id: crypto.randomUUID(),
    question: "When not to use utility types?",
    answer:
      "Avoid utility types when they obscure intent, make types too complex, or when runtime guarantees are required. For simple structures, explicit types are often clearer, and over-composing utilities can hinder maintainability.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Utility Types",
  },
  {
    id: crypto.randomUUID(),
    question: "How to define a class?",
    answer:
      "A class is defined using the `class` keyword: `class User { name: string; }`. It encapsulates data (properties) and behavior (methods) into a reusable blueprint.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is constructor?",
    answer:
      "A constructor is a special method used for initializing class instances. Example: `constructor(name: string) { this.name = name; }`. It runs automatically when a new object is created.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is readonly property?",
    answer:
      "A `readonly` property can only be assigned during declaration or in the constructor. Example: `readonly id: number;` ensures immutability of critical values.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is static member?",
    answer:
      "Static members belong to the class itself, not instances. Example: `static count = 0;`. Access them via `ClassName.member`, useful for shared data or utilities.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is method typing?",
    answer:
      "Methods can be typed by specifying parameters and return types: `greet(name: string): string { return 'Hello ' + name; }`. This ensures correct usage and auto-completion.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is implements?",
    answer:
      "`implements` ensures a class satisfies an interface: `class User implements IUser { ... }`. TypeScript checks that all required properties and methods are present.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is abstract class?",
    answer:
      "An abstract class cannot be instantiated and may contain abstract methods without implementation: `abstract class Animal { abstract makeSound(): void; }`. Subclasses must implement the abstract methods.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "Difference between abstract and interface?",
    answer:
      "Abstract classes can contain implementation and state, interfaces only define contracts. A class can implement multiple interfaces but extend only one abstract class. Abstract classes are ideal for shared logic.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What are parameter properties?",
    answer:
      "Parameter properties allow declaring and initializing class members directly in the constructor: `constructor(public name: string) {}`. This reduces boilerplate code.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What are getters and setters?",
    answer:
      "Getters and setters provide controlled access to properties: `get fullName() { return this.first + ' ' + this.last; } set age(value: number) { this._age = value; }`. Useful for encapsulation and validation.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is inheritance?",
    answer:
      "Inheritance allows a class to derive from another class using `extends`: `class Admin extends User {}`. The subclass inherits properties and methods from the parent class.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is super keyword?",
    answer:
      "`super` is used to call parent class constructors or methods: `super(name);`. It is required when extending a class with a constructor to properly initialize the base class.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is polymorphism?",
    answer:
      "Polymorphism allows objects of different types to be treated as a common base type. Methods can behave differently in subclasses, e.g., `makeSound()` in `Dog` vs `Cat`.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "How generics work with classes?",
    answer:
      "Classes can be generic to handle multiple types: `class Box<T> { content: T; constructor(content: T) { this.content = content; } }`. This allows type-safe reusable data structures.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is mixin pattern?",
    answer:
      "Mixins combine multiple behaviors into a single class. Example: `function Mixin<T extends Constructor>(Base: T) { return class extends Base { ... } }`. Useful to avoid deep inheritance and enhance composition.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "How decorators work with classes?",
    answer:
      "Decorators are functions that modify classes, methods, or properties at design time: `@sealed class MyClass {}`. They enable meta-programming, logging, validation, or dependency injection.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is class type vs instance type?",
    answer:
      "The class type refers to the constructor itself (`typeof MyClass`), while instance type refers to objects created from it (`MyClass`). Important for typing factories or static members separately.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What are class pitfalls in TS?",
    answer:
      "Pitfalls include excessive inheritance, overusing `any`, forgetting access modifiers, not using `readonly` for immutables, and confusion between instance vs static members. Classes should be used judiciously.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "How to design scalable class architecture?",
    answer:
      "Use SOLID principles, prefer composition over inheritance, segregate responsibilities, leverage generics, and avoid monolithic classes. This ensures maintainable, flexible, and testable architecture.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "When not to use classes?",
    answer:
      "Avoid classes for simple data structures, functional patterns, or when performance is critical. Functions, interfaces, or types may provide simpler, more maintainable, and more predictable solutions.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Classes",
  },
  {
    id: crypto.randomUUID(),
    question: "What is public?",
    answer:
      "`public` members are accessible from anywhere. In TypeScript, this is the default for class properties and methods: `public name: string;` allows read/write access from any code.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is private?",
    answer:
      "`private` members are accessible only within the class they are declared. Example: `private secret: string;`. This enforces encapsulation and prevents external access or modification.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is protected?",
    answer:
      "`protected` members are accessible within the class and its subclasses. Example: `protected id: number;` allows inheritance while still hiding members from outside access.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is readonly modifier?",
    answer:
      "`readonly` ensures a property can only be assigned during initialization or in the constructor. Example: `readonly id: number;` prevents accidental reassignment, enhancing immutability.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is static modifier?",
    answer:
      "`static` members belong to the class itself rather than instances. Example: `static count = 0;` can be accessed via `ClassName.count` and is shared across all instances.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "How private works in TS vs JS?",
    answer:
      "In TypeScript, `private` is enforced at compile time; JS doesn’t natively enforce it (before ES2022). TS ensures type safety, but compiled JS still exposes properties unless `#private` is used.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is ECMAScript #private?",
    answer:
      "`#private` is a native JS private field. Declared as `#id: number;`, it is truly inaccessible outside the class, unlike TS `private` which is compile-time only.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is difference between TS private and JS private?",
    answer:
      "TS `private` is a compile-time check; the property exists in JS output. JS `#private` is runtime-enforced, completely hidden from external access. For strict encapsulation, use `#private`.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is encapsulation?",
    answer:
      "Encapsulation restricts access to internal class data and exposes only controlled methods. Access modifiers (`private`, `protected`, `readonly`) help enforce it, improving maintainability and reducing bugs.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is access modifier in constructor?",
    answer:
      "You can declare and initialize members directly in the constructor using access modifiers: `constructor(public name: string, private age: number) {}`. This reduces boilerplate and enforces visibility.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "Can interfaces enforce modifiers?",
    answer:
      "No, interfaces cannot enforce access modifiers. They define contracts for public members only. Private/protected behavior is only enforced in classes.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What are protected constructors?",
    answer:
      "Protected constructors prevent instantiation outside the class hierarchy. Example: `protected constructor() {}` allows only subclasses to call `super()`, useful in abstract or base classes.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is access modifier in abstract classes?",
    answer:
      "Abstract classes can have `public`, `protected`, or `private` members. `protected` abstract methods enforce implementation only in subclasses, while `private` prevents external access even in inheritance.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What are visibility rules in inheritance?",
    answer:
      "`public` members are inherited and accessible anywhere, `protected` are inherited but accessible only in subclasses, and `private` members are not inherited at all.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What are pitfalls of private in TS?",
    answer:
      "Pitfalls include overuse, confusing compile-time vs runtime enforcement, difficulty in testing private members, and assumptions that private truly hides the property at runtime in JS.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is readonly vs private?",
    answer:
      "`readonly` allows public read access but prevents reassignment; `private` hides the member and restricts access. They can be combined to create private immutable members.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "How to enforce immutability?",
    answer:
      "Use `readonly` for properties, `const` for variables, and avoid exposing setters. Combine with private/protected access for class members to prevent external mutation.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is access modifier best practice?",
    answer:
      "Default to `private` or `protected` for class members, expose only what is necessary as `public`, combine with `readonly` for immutability, and avoid excessive `public` exposure.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "How access modifiers affect testing?",
    answer:
      "Private/protected members are harder to test directly. You often test through public APIs. Using too many private members can make unit testing cumbersome; consider using dependency injection.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "How modifiers impact architecture?",
    answer:
      "Modifiers enforce encapsulation, guide proper class design, reduce tight coupling, and improve maintainability. Misusing them can lead to fragile, hard-to-test, or inflexible architectures.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "Access Modifiers",
  },
  {
    id: crypto.randomUUID(),
    question: "What is OOP?",
    answer:
      "Object-Oriented Programming (OOP) is a paradigm that organizes code around objects, which contain data (properties) and behavior (methods). It promotes modularity, reusability, and abstraction.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What are OOP principles?",
    answer:
      "The main OOP principles are Encapsulation, Abstraction, Inheritance, and Polymorphism. They help structure code, reduce duplication, and improve maintainability.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is encapsulation?",
    answer:
      "Encapsulation restricts direct access to object properties and exposes controlled methods. Access modifiers (`private`, `protected`, `public`) in TypeScript enforce this principle.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is inheritance?",
    answer:
      "Inheritance allows a class (child) to derive from another class (parent), inheriting its properties and methods. This promotes code reuse and hierarchy in TypeScript using `extends`.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is polymorphism?",
    answer:
      "Polymorphism allows objects of different classes to be treated as the same type, usually via a common interface or base class. Methods can have different behaviors depending on the object instance.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is abstraction?",
    answer:
      "Abstraction hides internal implementation details and exposes only necessary functionality. In TypeScript, abstract classes and interfaces help define contracts without revealing implementation.",
    difficulty: "junior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is SOLID?",
    answer:
      "SOLID is a set of design principles to create maintainable, scalable, and testable OOP systems: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Single Responsibility Principle?",
    answer:
      "A class should have only one reason to change, meaning it should have a single responsibility. This reduces complexity and improves maintainability.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Open/Closed Principle?",
    answer:
      "Software entities (classes, modules, functions) should be open for extension but closed for modification. Use inheritance, interfaces, or generics to add functionality without altering existing code.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Liskov Substitution Principle?",
    answer:
      "Subtypes must be substitutable for their base types. In TypeScript, derived classes should maintain behavior expectations of the base class to avoid breaking client code.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Interface Segregation Principle?",
    answer:
      "Clients should not be forced to depend on interfaces they do not use. In TS, split large interfaces into smaller, more specific ones to avoid forcing unused methods.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Dependency Inversion Principle?",
    answer:
      "High-level modules should not depend on low-level modules; both should depend on abstractions. In TypeScript, this is achieved using interfaces, dependency injection, and generics.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "How TS supports SOLID?",
    answer:
      "TypeScript supports SOLID with strong typing, interfaces, abstract classes, generics, access modifiers, and readonly properties. These features help enforce contracts and maintain scalable OOP architecture.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is composition over inheritance?",
    answer:
      "Composition prefers building objects using smaller reusable components rather than relying heavily on inheritance. In TypeScript, mixins and dependency injection are common approaches.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What are design patterns in TS?",
    answer:
      "Design patterns are proven solutions for common software design problems. Examples in TS include Singleton, Factory, Observer, Decorator, Strategy, and Repository patterns.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Factory pattern?",
    answer:
      "Factory pattern provides an interface to create objects without specifying exact classes. In TypeScript: `class CarFactory { createCar(type: string) { ... } }`. Useful for decoupling creation logic.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Singleton pattern?",
    answer:
      "Singleton ensures a class has only one instance and provides a global point of access. Example: `class Database { private static instance: Database; static getInstance() { ... } }`.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "What is Observer pattern?",
    answer:
      "Observer pattern allows objects (observers) to subscribe to another object's (subject) state changes. In TS, this can be implemented with event emitters or custom subscriptions.",
    difficulty: "middle",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "When OOP is bad choice?",
    answer:
      "OOP is less suitable for simple scripts, functional-heavy tasks, or performance-critical code. Overusing classes can introduce unnecessary complexity and boilerplate.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
  {
    id: crypto.randomUUID(),
    question: "How to design enterprise-level OOP architecture?",
    answer:
      "Use SOLID principles, modularize with interfaces and abstract classes, favor composition over inheritance, apply design patterns, enforce encapsulation, and leverage TypeScript’s type system for robust and maintainable architecture.",
    difficulty: "senior",
    isLearned: false,
    category: "TypeScript",
    subCategory: "OOP",
  },
];
