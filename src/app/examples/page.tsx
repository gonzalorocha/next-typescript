"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";
import { UserCard } from "@/components/TypeScriptComponents/UserCard";
import { Counter } from "@/components/TypeScriptComponents/Counter";
import { ProductList } from "@/components/TypeScriptComponents/ProductList";
import { UserCard as JSUserCard } from "@/components/JavaScriptComponents/UserCard";
import { Counter as JSCounter } from "@/components/JavaScriptComponents/Counter";
import { ProductList as JSProductList } from "@/components/JavaScriptComponents/ProductList";

// TypeScript interface for product data
interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	category: string;
	inStock: boolean;
}

export default function ExamplesPage() {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	// Sample data with proper typing
	const sampleProducts: Product[] = [
		{
			id: 1,
			name: "Laptop",
			price: 999.99,
			description: "High-performance laptop",
			category: "Electronics",
			inStock: true,
		},
		{
			id: 2,
			name: "Desk Chair",
			price: 299.99,
			description: "Ergonomic office chair",
			category: "Furniture",
			inStock: true,
		},
		{
			id: 3,
			name: "Monitor",
			price: 449.99,
			description: "4K Ultra HD Monitor",
			category: "Electronics",
			inStock: false,
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
			<main className="container mx-auto px-4 py-12 max-w-7xl">
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
						Component Examples
					</h1>
					<p className="text-xl text-gray-700 dark:text-gray-300">
						Interactive examples comparing TypeScript and JavaScript components
					</p>
				</div>

				{/* TypeScript Components Section */}
				<section className="mb-16">
					<div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
						<h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">
							✓ TypeScript Components
						</h2>
						<p className="text-blue-800 dark:text-blue-200">
							These components use TypeScript with proper type definitions,
							interfaces, and type annotations.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
							<h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
								UserCard (TypeScript)
							</h3>
							<UserCard
								name="John Doe"
								email="john@example.com"
								age={28}
								role="admin"
								onClick={() => alert("TypeScript component clicked!")}
							/>
							<div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm">
								<strong>Features:</strong> Typed props interface, type-safe
								callbacks, union types for role
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
							<Counter
								initialValue={5}
								min={0}
								max={20}
								step={2}
								onCountChange={(count) => console.log("Count:", count)}
							/>
							<div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm">
								<strong>Features:</strong> Typed state, typed callbacks,
								optional props with defaults
							</div>
						</div>
					</div>

					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
							ProductList (TypeScript)
						</h3>
						<ProductList
							products={sampleProducts}
							onProductSelect={(product) => setSelectedProduct(product)}
							filterCategory="Electronics"
						/>
						{selectedProduct && (
							<div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded">
								<strong>Selected:</strong> {selectedProduct.name} - $
								{selectedProduct.price.toFixed(2)}
							</div>
						)}
						<div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm">
							<strong>Features:</strong> Typed arrays, type-safe filter
							operations, interface-based data structures
						</div>
					</div>
				</section>

				{/* JavaScript Components Section */}
				<section className="mb-16">
					<div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-6">
						<h2 className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-2">
							✗ JavaScript Components (No TypeScript)
						</h2>
						<p className="text-purple-800 dark:text-purple-200">
							These components are written in JavaScript without TypeScript
							definitions. Notice the lack of type safety and IDE support.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
							<h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
								UserCard (JavaScript)
							</h3>
							<JSUserCard
								name="Jane Smith"
								email="jane@example.com"
								age={32}
								role="user"
								onClick={() => alert("JavaScript component clicked!")}
							/>
							<div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm">
								<strong>Issues:</strong> No type checking, props can be any
								type, no autocomplete
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
							<JSCounter
								initialValue={10}
								min={0}
								max={30}
								step={3}
								onCountChange={(count: number) => console.log("Count:", count)}
							/>
							<div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm">
								<strong>Issues:</strong> No type annotations, runtime errors
								possible, no compile-time checks
							</div>
						</div>
					</div>

					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
							ProductList (JavaScript)
						</h3>
						<JSProductList
							products={sampleProducts}
							onProductSelect={(product: Product) =>
								setSelectedProduct(product)
							}
							filterCategory="Electronics"
						/>
						<div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm">
							<strong>Issues:</strong> No type safety on arrays, properties not
							validated, errors only at runtime
						</div>
					</div>
				</section>

				{/* Comparison Table */}
				<section className="mb-8">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
							TypeScript vs JavaScript Comparison
						</h2>
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
				</section>

				{/* Navigation Links */}
				<div className="flex gap-4 justify-center mt-8">
					<Link
						href="/"
						className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
					>
						← Back to Home
					</Link>
				</div>
			</main>
		</div>
	);
}

