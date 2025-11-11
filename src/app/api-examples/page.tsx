import type { Metadata } from "next";
import Link from "next/link";
import axios, { AxiosResponse, AxiosError } from "axios";

// TypeScript interface for Post data structure
interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

// TypeScript interface for API response (array of posts)
interface PostsResponse extends AxiosResponse<Post[]> {
	data: Post[];
}

// Server-side function to fetch all posts
async function fetchAllPosts(): Promise<Post[]> {
	try {
		const response: PostsResponse = await axios.get<Post[]>(
			"https://jsonplaceholder.typicode.com/posts"
		);
		return response.data;
	} catch (err) {
		if (axios.isAxiosError(err)) {
			const axiosError: AxiosError = err;
			console.error(`Error fetching posts: ${axiosError.message}`);
		}
		return [];
	}
}

export const metadata: Metadata = {
	title: "API Examples with TypeScript | TypeScript Guide",
	description:
		"Learn how to make type-safe API calls using TypeScript and axios. See examples of GET requests with proper type definitions and error handling.",
	keywords: [
		"TypeScript API",
		"axios TypeScript",
		"API calls TypeScript",
		"GET request TypeScript",
		"type-safe API",
		"REST API TypeScript",
	],
	openGraph: {
		title: "API Examples with TypeScript | TypeScript Guide",
		description:
			"Learn how to make type-safe API calls using TypeScript and axios",
		type: "website",
	},
};

export default async function ApiExamplesPage() {
	// Server-side data fetching
	const allPosts = await fetchAllPosts();

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
						API Calls with TypeScript and Axios (Server-Side)
					</h1>
					<p className="text-xl text-gray-700 dark:text-gray-300">
						Learn how to make type-safe API calls using TypeScript and axios on
						the server
					</p>
				</div>

				{/* TypeScript Definitions Section */}
				<section className="mb-12">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
							TypeScript Definitions for API Calls
						</h2>
						<div className="space-y-6">
							<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
									Post Interface
								</h3>
								<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
									<code>{`// TypeScript interface for Post data structure
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}`}</code>
								</pre>
							</div>

							<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
									API Response Types
								</h3>
								<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
									<code>{`// TypeScript interface for array of posts response
interface PostsResponse extends AxiosResponse<Post[]> {
  data: Post[];
}

// TypeScript interface for single post response
interface PostResponse extends AxiosResponse<Post> {
  data: Post;
}`}</code>
								</pre>
							</div>

							<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
									Server-Side GET Request with TypeScript
								</h3>
								<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
									<code>{`// Server-side function to fetch all posts
async function fetchAllPosts(): Promise<Post[]> {
  try {
    const response: PostsResponse = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // TypeScript ensures type safety
    return response.data; // response.data is Post[]
  } catch (err) {
    // TypeScript error handling with type guards
    if (axios.isAxiosError(err)) {
      const axiosError: AxiosError = err;
      console.error(axiosError.message);
    }
    return [];
  }
}

// Server Component - data fetched on server
export default async function ApiExamplesPage() {
  // Server-side data fetching
  const allPosts = await fetchAllPosts();
  
  return (
    <div>
      {/* Render posts */}
    </div>
  );
}`}</code>
								</pre>
							</div>

							<div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
									Server-Side Benefits
								</h3>
								<ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
									<li>
										<strong>Better Performance:</strong> Data is fetched on the
										server, reducing client-side load
									</li>
									<li>
										<strong>SEO Friendly:</strong> Content is available at
										initial page load
									</li>
									<li>
										<strong>Type Safety:</strong> TypeScript ensures the API
										response matches the expected structure
									</li>
									<li>
										<strong>No Loading States:</strong> Data is ready when the
										page renders
									</li>
									<li>
										<strong>Better Error Handling:</strong> Errors can be
										handled on the server before rendering
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Single Post Link Section */}
				<section className="mb-12">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
							Fetch Single Post (GET /posts/:id)
						</h2>
						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<p className="text-gray-700 dark:text-gray-300 mb-4">
								Click on any post below to view its details, or visit a specific
								post:
							</p>
							<div className="flex gap-4 flex-wrap">
								<Link
									href="/api-examples/posts/1"
									className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
								>
									Post #1
								</Link>
								<Link
									href="/api-examples/posts/3"
									className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
								>
									Post #3
								</Link>
								<Link
									href="/api-examples/posts/5"
									className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
								>
									Post #5
								</Link>
							</div>
							<div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded text-sm">
								<strong>Note:</strong> Each post has its own page with dynamic
								metadata based on the post content!
							</div>
						</div>
					</div>
				</section>

				{/* All Posts Section */}
				<section className="mb-12">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
							All Posts (GET /posts) - Server-Side Rendered
						</h2>

						<div className="space-y-4">
							<p className="text-gray-700 dark:text-gray-300 mb-4">
								Showing {allPosts.length} posts (TypeScript ensures each item is
								a Post type). Data fetched on the server.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{allPosts.slice(0, 12).map((post: Post) => (
									<Link
										key={post.id}
										href={`/api-examples/posts/${post.id}`}
										className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow block"
									>
										<div className="flex items-center justify-between mb-2">
											<span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
												#{post.id}
											</span>
											<span className="text-xs text-gray-600 dark:text-gray-400">
												User: {post.userId}
											</span>
										</div>
										<h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
											{post.title}
										</h3>
										<p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
											{post.body}
										</p>
									</Link>
								))}
							</div>
							{allPosts.length > 12 && (
								<p className="text-center text-gray-600 dark:text-gray-400 mt-4">
									Showing first 12 of {allPosts.length} posts. Click on any post
									to view details.
								</p>
							)}
						</div>
					</div>
				</section>

				{/* Code Example Section */}
				<section className="mb-8">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
							Complete Server-Side Implementation Example
						</h2>
						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`import axios, { AxiosResponse, AxiosError } from "axios";
import type { Metadata } from "next";

// 1. Define TypeScript interface for your data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// 2. Define response types
interface PostsResponse extends AxiosResponse<Post[]> {
  data: Post[];
}

// 3. Server-side function to fetch all posts
async function fetchAllPosts(): Promise<Post[]> {
  try {
    const response: PostsResponse = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data; // TypeScript knows this is Post[]
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.message);
    }
    return [];
  }
}

// 4. Server Component with metadata
export const metadata: Metadata = {
  title: "API Examples with TypeScript",
  description: "Learn type-safe API calls",
};

export default async function ApiExamplesPage() {
  // Data fetched on server - no loading states needed
  const allPosts = await fetchAllPosts();
  
  return (
    <div>
      {allPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}`}</code>
							</pre>
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
