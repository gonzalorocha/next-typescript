// TypeScript Component with complex types and generics
import React from "react";

// Define interfaces for type safety
interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	category: string;
	inStock: boolean;
}

interface ProductListProps {
	products: Product[];
	onProductSelect?: (product: Product) => void;
	filterCategory?: string;
}

// TypeScript function with array methods and type safety
export function ProductList({
	products,
	onProductSelect,
	filterCategory,
}: ProductListProps): React.ReactNode {
	// TypeScript ensures type safety in filter operations
	const filteredProducts: Product[] = filterCategory
		? products.filter((product: Product) => product.category === filterCategory)
		: products;

	const handleProductClick = (product: Product): void => {
		if (onProductSelect) {
			onProductSelect(product);
		}
	};

	// TypeScript ensures all properties are accessed safely
	const formatPrice = (price: number): string => {
		return `$${price.toFixed(2)}`;
	};

	return (
		<div className="space-y-4">
			<h3 className="text-xl font-semibold">
				Products ({filteredProducts.length})
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{filteredProducts.map((product: Product) => (
					<div
						key={product.id}
						onClick={() => handleProductClick(product)}
						className={`p-4 border rounded-lg cursor-pointer transition-all ${
							product.inStock
								? "bg-white hover:bg-gray-50"
								: "bg-gray-100 opacity-60"
						}`}
					>
						<h4 className="font-semibold text-lg">{product.name}</h4>
						<p className="text-gray-600 text-sm">{product.description}</p>
						<div className="flex justify-between items-center mt-2">
							<span className="text-green-600 font-bold">
								{formatPrice(product.price)}
							</span>
							<span
								className={`px-2 py-1 rounded text-xs ${
									product.inStock
										? "bg-green-100 text-green-800"
										: "bg-red-100 text-red-800"
								}`}
							>
								{product.inStock ? "In Stock" : "Out of Stock"}
							</span>
						</div>
						<p className="text-xs text-gray-500 mt-1">
							Category: {product.category}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
