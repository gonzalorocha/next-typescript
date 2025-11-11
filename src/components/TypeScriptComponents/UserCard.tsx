// TypeScript Component with proper type definitions
import React from "react";

// Define interface for props
interface UserCardProps {
	name: string;
	email: string;
	age: number;
	role: "admin" | "user" | "guest";
	onClick?: () => void;
}

// Define interface for user object
interface User {
	id: number;
	name: string;
	email: string;
}

// TypeScript function with explicit return type
export function UserCard({
	name,
	email,
	age,
	role,
	onClick,
}: UserCardProps): React.ReactNode {
	const handleClick = (): void => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<div
			className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
			onClick={handleClick}
		>
			<h3 className="text-xl font-semibold text-blue-600">{name}</h3>
			<p className="text-gray-600">Email: {email}</p>
			<p className="text-gray-600">Age: {age}</p>
			<p className="text-gray-600">Role: {role}</p>
		</div>
	);
}

// TypeScript function with generic types
export function getUserById<T extends User>(
	users: T[],
	id: number
): T | undefined {
	return users.find((user: T) => user.id === id);
}

// TypeScript function with type guards
export function isAdmin(user: { role: string }): user is { role: "admin" } {
	return user.role === "admin";
}
