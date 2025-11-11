// JavaScript Component WITHOUT TypeScript - no type safety
import React from 'react';

// No interfaces - just accept props as-is
export function ProductList({ products, onProductSelect, filterCategory }) {
	// No type annotations - TypeScript won't catch errors here
	const filteredProducts = filterCategory
		? products.filter((product) => product.category === filterCategory)
		: products;

	const handleProductClick = (product) => {
		if (onProductSelect) {
			onProductSelect(product);
		}
	};

	// No return type annotation
	const formatPrice = (price) => {
		return `$${price.toFixed(2)}`;
	};

	return (
		<div className="space-y-4">
			<h3 className="text-xl font-semibold">Products ({filteredProducts.length})</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{filteredProducts.map((product) => (
					<div
						key={product.id}
						onClick={() => handleProductClick(product)}
						className={`p-4 border rounded-lg cursor-pointer transition-all ${
							product.inStock
								? 'bg-white hover:bg-gray-50'
								: 'bg-gray-100 opacity-60'
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
										? 'bg-green-100 text-green-800'
										: 'bg-red-100 text-red-800'
								}`}
							>
								{product.inStock ? 'In Stock' : 'Out of Stock'}
							</span>
						</div>
						<p className="text-xs text-gray-500 mt-1">Category: {product.category}</p>
					</div>
				))}
			</div>
		</div>
	);
}

