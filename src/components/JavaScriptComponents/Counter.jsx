// JavaScript Component WITHOUT TypeScript - no type definitions
'use client';

import React, { useState, useCallback } from 'react';

// No interface definitions - props are untyped
export function Counter({
	initialValue = 0,
	min = -Infinity,
	max = Infinity,
	step = 1,
	onCountChange,
}) {
	// No type annotations on state
	const [count, setCount] = useState(initialValue);

	// No return type annotations
	const increment = useCallback(() => {
		setCount((prev) => {
			const newCount = Math.min(prev + step, max);
			if (onCountChange) {
				onCountChange(newCount);
			}
			return newCount;
		});
	}, [step, max, onCountChange]);

	const decrement = useCallback(() => {
		setCount((prev) => {
			const newCount = Math.max(prev - step, min);
			if (onCountChange) {
				onCountChange(newCount);
			}
			return newCount;
		});
	}, [step, min, onCountChange]);

	const reset = useCallback(() => {
		setCount(initialValue);
		if (onCountChange) {
			onCountChange(initialValue);
		}
	}, [initialValue, onCountChange]);

	return (
		<div className="p-6 border rounded-lg bg-gray-50">
			<h3 className="text-lg font-semibold mb-4">JavaScript Counter (No Types)</h3>
			<div className="flex items-center gap-4">
				<button
					onClick={decrement}
					disabled={count <= min}
					className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
				>
					-
				</button>
				<span className="text-2xl font-bold min-w-[60px] text-center">{count}</span>
				<button
					onClick={increment}
					disabled={count >= max}
					className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
				>
					+
				</button>
				<button
					onClick={reset}
					className="px-4 py-2 bg-gray-500 text-white rounded"
				>
					Reset
				</button>
			</div>
		</div>
	);
}

