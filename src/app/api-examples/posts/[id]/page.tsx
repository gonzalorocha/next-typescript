import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import axios, { AxiosResponse, AxiosError } from "axios";

// TypeScript interface for Post data structure
interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

// TypeScript interface for single post response
interface PostResponse extends AxiosResponse<Post> {
	data: Post;
}

// Server-side function to fetch a single post
async function fetchPost(id: number): Promise<Post | null> {
	try {
		const response: PostResponse = await axios.get<Post>(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		return response.data;
	} catch (err) {
		if (axios.isAxiosError(err)) {
			const axiosError: AxiosError = err;
			console.error(`Error fetching post: ${axiosError.message}`);
		}
		return null;
	}
}

// Generate metadata dynamically based on post data
export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const { id } = await params;
	const post = await fetchPost(Number(id));

	if (!post) {
		return {
			title: "Post Not Found | TypeScript Guide",
			description: "The requested post could not be found.",
		};
	}

	// Truncate body for description (max 160 characters for SEO)
	const description =
		post.body.length > 160
			? `${post.body.substring(0, 157)}...`
			: post.body;

	return {
		title: `${post.title} | Post #${post.id} | TypeScript Guide`,
		description: description,
		keywords: [
			"TypeScript",
			"API examples",
			"Post",
			`Post ${post.id}`,
			"TypeScript API",
			"axios TypeScript",
		],
		openGraph: {
			title: post.title,
			description: description,
			type: "article",
			url: `https://typescript-guide.com/api-examples/posts/${id}`,
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: description,
		},
	};
}

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PageProps) {
	const { id } = await params;
	const postId = Number(id);

	// Validate post ID
	if (isNaN(postId) || postId < 1 || postId > 100) {
		notFound();
	}

	// Server-side data fetching
	const post = await fetchPost(postId);

	if (!post) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
			<main className="container mx-auto px-4 py-12 max-w-4xl">
				{/* Navigation */}
				<nav className="mb-8">
					<Link
						href="/api-examples"
						className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
					>
						← Back to API Examples
					</Link>
				</nav>

				{/* Post Content */}
				<article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
					<div className="mb-6">
						<div className="flex items-center gap-4 mb-4">
							<span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
								Post #{post.id}
							</span>
							<span className="text-gray-600 dark:text-gray-400 text-sm">
								User ID: {post.userId}
							</span>
						</div>
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							{post.title}
						</h1>
					</div>

					<div className="prose prose-lg dark:prose-invert max-w-none">
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
							{post.body}
						</p>
					</div>

					{/* TypeScript Info */}
					<div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
						<h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
							TypeScript Benefits
						</h3>
						<ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200 text-sm">
							<li>
								All properties (id, title, body, userId) are type-checked
							</li>
							<li>Metadata is generated with proper TypeScript types</li>
							<li>Server-side rendering ensures SEO-friendly content</li>
							<li>Error handling is type-safe with AxiosError</li>
						</ul>
					</div>
				</article>

				{/* Navigation to other posts */}
				<div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
					<h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
						View Other Posts
					</h2>
					<div className="flex gap-4 flex-wrap">
						{postId > 1 && (
							<Link
								href={`/api-examples/posts/${postId - 1}`}
								className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
							>
								← Previous Post
							</Link>
						)}
						{postId < 100 && (
							<Link
								href={`/api-examples/posts/${postId + 1}`}
								className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
							>
								Next Post →
							</Link>
						)}
						<Link
							href="/api-examples"
							className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							All Posts
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}

