import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "TypeScript Guide | Learn TypeScript with Next.js",
	description:
		"Comprehensive guide to TypeScript concepts, type definitions, and best practices. Learn why TypeScript is essential for modern web development with Next.js.",
	keywords: [
		"TypeScript",
		"TypeScript guide",
		"TypeScript tutorial",
		"Next.js TypeScript",
		"type definitions",
		"web development",
	],
	openGraph: {
		title: "TypeScript Guide | Learn TypeScript with Next.js",
		description:
			"Comprehensive guide to TypeScript concepts, type definitions, and best practices",
		type: "website",
	},
};

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
			<main className="container mx-auto px-4 py-12 max-w-5xl">
				{/* Main Heading */}
				<h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
					TypeScript Guide
				</h1>

				{/* Navigation Links */}
				<nav className="mb-12 flex gap-4 flex-wrap justify-center">
					<Link
						href="/typescript-definitions"
						className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
					>
						TypeScript Definitions
					</Link>
					<Link
						href="/why-typescript-nextjs"
						className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
					>
						Why TypeScript in Next.js
					</Link>
					<Link
						href="/examples"
						className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
					>
						Component Examples
					</Link>
					<Link
						href="/api-examples"
						className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
					>
						API Examples
					</Link>
				</nav>

				{/* TypeScript Overview Section */}
				<section className="mb-12">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
							What is TypeScript?
						</h2>
						<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
							TypeScript is a strongly typed programming language that builds on
							JavaScript, giving you better tooling at any scale. It adds static
							type definitions to JavaScript, which helps catch errors during
							development and makes your code more maintainable and
							self-documenting.
						</p>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
							TypeScript compiles to plain JavaScript, which means it runs
							anywhere JavaScript runs. It&apos;s a superset of JavaScript, so
							all valid JavaScript code is also valid TypeScript code.
						</p>
					</div>
				</section>

				{/* Key Benefits Section */}
				<section className="mb-12">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
							Key Benefits of TypeScript
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="border-l-4 border-blue-500 pl-4">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
									Type Safety
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Catch errors at compile time before they reach production.
									TypeScript helps prevent common bugs and ensures type
									correctness throughout your application.
								</p>
							</div>
							<div className="border-l-4 border-green-500 pl-4">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
									Better IDE Support
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Autocomplete, refactoring, and navigation work better with
									TypeScript. Your IDE understands your code structure and can
									provide intelligent suggestions.
								</p>
							</div>
							<div className="border-l-4 border-purple-500 pl-4">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
									Self-Documenting Code
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Types serve as inline documentation. When you see a function
									signature, you immediately know what parameters it expects and
									what it returns.
								</p>
							</div>
							<div className="border-l-4 border-yellow-500 pl-4">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
									Refactoring Confidence
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Safely rename and restructure code. TypeScript will tell you
									exactly what breaks when you make changes, making large-scale
									refactoring much safer.
								</p>
							</div>
							<div className="border-l-4 border-red-500 pl-4">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
									Enhanced Developer Experience
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Better tooling and error messages. TypeScript provides clear,
									actionable error messages that help you fix issues quickly.
								</p>
							</div>
							<div className="border-l-4 border-indigo-500 pl-4">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
									Better Team Collaboration
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Types make it easier for team members to understand and work
									with code written by others. Contracts are explicit and
									enforced.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Type Definitions Section */}
				<section className="mb-12">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
							Type Definitions Overview
						</h2>
						<div className="space-y-6">
							<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
									Basic Types
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-3">
									TypeScript provides several basic types that you can use to
									annotate your variables, function parameters, and return
									values:
								</p>
								<ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
									<li>
										<code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
											string
										</code>{" "}
										- Text data
									</li>
									<li>
										<code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
											number
										</code>{" "}
										- Numeric values (integers and floats)
									</li>
									<li>
										<code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
											boolean
										</code>{" "}
										- True or false values
									</li>
									<li>
										<code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
											null
										</code>{" "}
										and{" "}
										<code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
											undefined
										</code>{" "}
										- Absence of value
									</li>
									<li>
										<code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
											void
										</code>{" "}
										- No return value
									</li>
									<li>
										<code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
											never
										</code>{" "}
										- Values that never occur
									</li>
								</ul>
							</div>

							<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
									Interfaces
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-3">
									Interfaces define the shape of objects. They are one of
									TypeScript&apos;s primary ways of structuring data:
								</p>
								<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
									<code>
										{`interface User {
										id: number;
										name: string;
										email: string;
										age?: number; // Optional property
										readonly createdAt: Date; // Readonly property
									}`}
									</code>
								</pre>
								<p className="text-gray-700 dark:text-gray-300 mt-3">
									Interfaces can be extended, merged, and used to ensure objects
									conform to a specific structure.
								</p>
							</div>

							<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
									Type Aliases
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-3">
									Type aliases create a new name for a type. They can be used
									for primitives, unions, tuples, and more:
								</p>
								<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
									<code>{`type Status = "pending" | "approved" | "rejected";
type ID = string | number;
type Point = { x: number; y: number };`}</code>
								</pre>
							</div>

							<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
									Generics
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-3">
									Generics allow you to create reusable components that work
									with multiple types:
								</p>
								<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
									<code>{`function identity<T>(arg: T): T {
  return arg;
}

// Usage
const stringValue = identity<string>("hello");
const numberValue = identity<number>(42);`}</code>
								</pre>
							</div>

							<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
									Union and Intersection Types
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-3">
									Union types allow a value to be one of several types, while
									intersection types combine multiple types:
								</p>
								<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
									<code>{`// Union: either string or number
type StringOrNumber = string | number;

// Intersection: both Employee and Manager
type ManagerEmployee = Employee & Manager;`}</code>
								</pre>
							</div>
						</div>
					</div>
				</section>

				{/* TypeScript vs JavaScript Section */}
				<section className="mb-12">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
							TypeScript vs JavaScript
						</h2>
						<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
							TypeScript provides several advantages over plain JavaScript:
						</p>
						<ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
							<li>
								<strong>Interface definitions</strong> for props and data
								structures
							</li>
							<li>
								<strong>Type annotations</strong> for function parameters and
								return values
							</li>
							<li>
								<strong>Type safety</strong> in array methods and object
								property access
							</li>
							<li>
								<strong>Compile-time error checking</strong> before code reaches
								production
							</li>
							<li>
								<strong>Better autocomplete and IntelliSense</strong> in your
								IDE
							</li>
						</ul>
						<div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
							<p className="text-blue-900 dark:text-blue-100 font-semibold mb-2">
								💡 Want to see examples?
							</p>
							<p className="text-blue-800 dark:text-blue-200 mb-4">
								Check out our{" "}
								<Link
									href="/examples"
									className="underline font-semibold hover:text-blue-600"
								>
									Component Examples
								</Link>{" "}
								page to see side-by-side comparisons of TypeScript and
								JavaScript components in action.
							</p>
						</div>

						{/* Comparison Table */}
						<div className="mt-8">
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
								TypeScript vs JavaScript Comparison
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse">
									<thead>
										<tr className="bg-gray-200 dark:bg-gray-700">
											<th className="border p-4 text-left">Feature</th>
											<th className="border p-4 text-center">TypeScript</th>
											<th className="border p-4 text-center">JavaScript</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="border p-4">Type Checking</td>
											<td className="border p-4 text-center text-green-600">
												✓ Compile-time
											</td>
											<td className="border p-4 text-center text-red-600">
												✗ Runtime only
											</td>
										</tr>
										<tr>
											<td className="border p-4">Autocomplete</td>
											<td className="border p-4 text-center text-green-600">
												✓ Full support
											</td>
											<td className="border p-4 text-center text-yellow-600">
												⚠ Limited
											</td>
										</tr>
										<tr>
											<td className="border p-4">Interface Definitions</td>
											<td className="border p-4 text-center text-green-600">
												✓ Yes
											</td>
											<td className="border p-4 text-center text-red-600">
												✗ No
											</td>
										</tr>
										<tr>
											<td className="border p-4">Type Annotations</td>
											<td className="border p-4 text-center text-green-600">
												✓ Yes
											</td>
											<td className="border p-4 text-center text-red-600">
												✗ No
											</td>
										</tr>
										<tr>
											<td className="border p-4">Error Detection</td>
											<td className="border p-4 text-center text-green-600">
												✓ Before runtime
											</td>
											<td className="border p-4 text-center text-red-600">
												✗ At runtime
											</td>
										</tr>
										<tr>
											<td className="border p-4">Refactoring Safety</td>
											<td className="border p-4 text-center text-green-600">
												✓ Safe
											</td>
											<td className="border p-4 text-center text-yellow-600">
												⚠ Risky
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>

				{/* Quick Links */}
				<section className="mb-8">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
							Learn More
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<Link
								href="/typescript-definitions"
								className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
							>
								<h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
									TypeScript Definitions
								</h3>
								<p className="text-blue-800 dark:text-blue-200">
									Learn about interfaces, types, generics, and more with
									detailed code examples.
								</p>
							</Link>
							<Link
								href="/why-typescript-nextjs"
								className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
							>
								<h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
									Why TypeScript in Next.js
								</h3>
								<p className="text-green-800 dark:text-green-200">
									Discover the benefits of using TypeScript with Next.js and
									best practices.
								</p>
							</Link>
							<Link
								href="/examples"
								className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
							>
								<h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-2">
									Component Examples
								</h3>
								<p className="text-purple-800 dark:text-purple-200">
									See interactive examples comparing TypeScript and JavaScript
									components.
								</p>
							</Link>
							<Link
								href="/api-examples"
								className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
							>
								<h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-2">
									API Examples
								</h3>
								<p className="text-orange-800 dark:text-orange-200">
									Learn how to make type-safe API calls with TypeScript and
									axios.
								</p>
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
