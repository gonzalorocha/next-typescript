// JavaScript Component WITHOUT TypeScript definitions
import React from 'react';

// No type definitions - props are just accepted as-is
export function UserCard({ name, email, age, role, onClick }) {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<div
			className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
			onClick={handleClick}
		>
			<h3 className="text-xl font-semibold text-purple-600">{name}</h3>
			<p className="text-gray-600">Email: {email}</p>
			<p className="text-gray-600">Age: {age}</p>
			<p className="text-gray-600">Role: {role}</p>
		</div>
	);
}

// No type safety - function accepts any parameters
export function getUserById(users, id) {
	return users.find((user) => user.id === id);
}

// No type guards - just a regular function
export function isAdmin(user) {
	return user.role === 'admin';
}

