import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'TypeScript Definitions | TypeScript Guide',
	description:
		'Learn about TypeScript type definitions, interfaces, types, and how to use them effectively in your projects.',
	keywords: ['TypeScript', 'type definitions', 'interfaces', 'types', 'programming'],
	openGraph: {
		title: 'TypeScript Definitions | TypeScript Guide',
		description:
			'Comprehensive guide to TypeScript type definitions, interfaces, and types',
		type: 'website',
	},
};

export default function TypeScriptDefinitionsPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
			<main className="container mx-auto px-4 py-12 max-w-5xl">
				{/* Navigation */}
				<nav className="mb-8">
					<Link
						href="/"
						className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
					>
						← Back to Home
					</Link>
				</nav>

				{/* Header */}
				<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
						TypeScript Definitions
					</h1>
					<p className="text-xl text-gray-700 dark:text-gray-300">
						Understanding types, interfaces, and type definitions in TypeScript
					</p>
				</div>

				{/* Basic Types */}
				<section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
						Basic Types
					</h2>
					<div className="space-y-6">
						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Primitive Types
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// String
let name: string = "John";

// Number
let age: number = 30;

// Boolean
let isActive: boolean = true;

// Null and Undefined
let value: null = null;
let undefinedValue: undefined = undefined;

// Any (avoid when possible)
let anything: any = "can be anything";

// Void (for functions that return nothing)
function logMessage(): void {
  console.log("Hello");
}

// Never (for functions that never return)
function throwError(): never {
  throw new Error("Error!");
}`}</code>
							</pre>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Array Types
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// Array of numbers
let numbers: number[] = [1, 2, 3, 4];

// Array of strings
let names: string[] = ["Alice", "Bob"];

// Generic array syntax
let items: Array<number> = [1, 2, 3];

// Tuple (fixed length array with specific types)
let tuple: [string, number] = ["hello", 42];

// Readonly array
let readonlyArray: ReadonlyArray<number> = [1, 2, 3];`}</code>
							</pre>
						</div>
					</div>
				</section>

				{/* Interfaces */}
				<section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
						Interfaces
					</h2>
					<div className="space-y-6">
						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Basic Interface
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Readonly property
}

// Using the interface
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date(),
};`}</code>
							</pre>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Interface with Methods
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};`}</code>
							</pre>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Extending Interfaces
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

const myDog: Dog = {
  name: "Buddy",
  age: 3,
  breed: "Golden Retriever",
  bark: () => console.log("Woof!"),
};`}</code>
							</pre>
						</div>
					</div>
				</section>

				{/* Type Aliases */}
				<section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
						Type Aliases
					</h2>
					<div className="space-y-6">
						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Basic Type Alias
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// Type alias for a union type
type Status = "pending" | "approved" | "rejected";

// Type alias for a function
type MathOperation = (a: number, b: number) => number;

// Type alias for an object
type Point = {
  x: number;
  y: number;
};

// Using type aliases
const status: Status = "pending";
const add: MathOperation = (a, b) => a + b;
const point: Point = { x: 10, y: 20 };`}</code>
							</pre>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Union and Intersection Types
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// Union type (either A or B)
type StringOrNumber = string | number;

// Intersection type (both A and B)
type Employee = {
  name: string;
  id: number;
};

type Manager = {
  department: string;
  teamSize: number;
};

type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
  name: "Jane",
  id: 1,
  department: "Engineering",
  teamSize: 5,
};`}</code>
							</pre>
						</div>
					</div>
				</section>

				{/* Generics */}
				<section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
						Generics
					</h2>
					<div className="space-y-6">
						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Generic Functions
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Usage
const stringValue = identity<string>("hello");
const numberValue = identity<number>(42);

// TypeScript can infer the type
const inferred = identity("world"); // Type: string

// Generic with constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "John", age: 30 };
const name = getProperty(user, "name"); // Type: string`}</code>
							</pre>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Generic Interfaces
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

class NumberContainer implements Container<number> {
  value: number = 0;
  
  getValue(): number {
    return this.value;
  }
  
  setValue(value: number): void {
    this.value = value;
  }
}`}</code>
							</pre>
						</div>
					</div>
				</section>

				{/* Utility Types */}
				<section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
						Utility Types
					</h2>
					<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
						<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
							<code>{`interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - makes all properties optional
type PartialUser = Partial<User>;

// Required - makes all properties required
type RequiredUser = Required<User>;

// Pick - select specific properties
type UserName = Pick<User, "name" | "email">;

// Omit - exclude specific properties
type UserWithoutId = Omit<User, "id">;

// Readonly - makes all properties readonly
type ReadonlyUser = Readonly<User>;

// Record - create object type with specific keys
type UserRecord = Record<string, User>;`}</code>
						</pre>
					</div>
				</section>

				{/* Navigation Links */}
				<div className="flex gap-4 justify-center mt-8">
					<Link
						href="/"
						className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
					>
						Home
					</Link>
					<Link
						href="/why-typescript-nextjs"
						className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
					>
						Why TypeScript in Next.js →
					</Link>
				</div>
			</main>
		</div>
	);
}

