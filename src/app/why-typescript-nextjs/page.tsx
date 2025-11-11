import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Why Use TypeScript in Next.js | TypeScript Guide',
	description:
		'Discover the benefits of using TypeScript with Next.js, including type safety, better developer experience, and improved code quality.',
	keywords: [
		'TypeScript',
		'Next.js',
		'React',
		'type safety',
		'web development',
		'full-stack',
	],
	openGraph: {
		title: 'Why Use TypeScript in Next.js | TypeScript Guide',
		description:
			'Learn why TypeScript is the perfect choice for Next.js applications',
		type: 'website',
	},
};

export default function WhyTypeScriptNextJSPage() {
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
						Why Use TypeScript in Next.js?
					</h1>
					<p className="text-xl text-gray-700 dark:text-gray-300">
						Discover the powerful combination of TypeScript and Next.js for building
						robust, scalable web applications
					</p>
				</div>

				{/* Benefits Section */}
				<section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
						Key Benefits
					</h2>
					<div className="space-y-6">
						<div className="border-l-4 border-blue-500 pl-6">
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								1. Type Safety for API Routes
							</h3>
							<p className="text-gray-700 dark:text-gray-300 mb-3">
								Next.js API routes benefit greatly from TypeScript's type safety. You can
								define request and response types, ensuring data consistency across your
								full-stack application.
							</p>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// pages/api/users/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
}

interface ErrorResponse {
  error: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorResponse>
) {
  if (req.method === 'GET') {
    const user: User = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    };
    res.status(200).json(user);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}`}</code>
							</pre>
						</div>

						<div className="border-l-4 border-green-500 pl-6">
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								2. Server Components Type Safety
							</h3>
							<p className="text-gray-700 dark:text-gray-300 mb-3">
								With Next.js 13+ App Router, Server Components can be fully typed,
								ensuring props and data fetching are type-safe from server to client.
							</p>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// app/components/UserProfile.tsx
interface UserProfileProps {
  userId: number;
  userName: string;
}

export default async function UserProfile({ 
  userId, 
  userName 
}: UserProfileProps) {
  // Type-safe data fetching
  const userData = await fetchUserData(userId);
  
  return (
    <div>
      <h1>{userName}</h1>
      {/* TypeScript ensures userData properties exist */}
    </div>
  );
}`}</code>
							</pre>
						</div>

						<div className="border-l-4 border-purple-500 pl-6">
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								3. Better Developer Experience
							</h3>
							<p className="text-gray-700 dark:text-gray-300 mb-3">
								TypeScript provides excellent IDE support with autocomplete, inline
								documentation, and refactoring tools that work seamlessly with Next.js.
							</p>
							<ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
								<li>IntelliSense for Next.js APIs and components</li>
								<li>Automatic import suggestions</li>
								<li>Safe refactoring across the codebase</li>
								<li>Real-time error detection</li>
							</ul>
						</div>

						<div className="border-l-4 border-yellow-500 pl-6">
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								4. Type-Safe Data Fetching
							</h3>
							<p className="text-gray-700 dark:text-gray-300 mb-3">
								TypeScript helps ensure your data fetching logic is type-safe, catching
								errors before runtime.
							</p>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// Type-safe data fetching
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://api.example.com/posts');
  const posts: Post[] = await res.json();
  return posts;
}

// Usage in Server Component
export default async function PostsPage() {
  const posts = await getPosts();
  // TypeScript knows posts is Post[]
  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}`}</code>
							</pre>
						</div>

						<div className="border-l-4 border-red-500 pl-6">
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								5. Catch Errors at Build Time
							</h3>
							<p className="text-gray-700 dark:text-gray-300 mb-3">
								Next.js build process will catch TypeScript errors, preventing broken
								code from reaching production.
							</p>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// This will fail at build time, not runtime
interface Props {
  title: string;
  count: number;
}

function Component({ title, count }: Props) {
  return <div>{title} - {count}</div>;
}

// Error: Property 'count' is missing
<Component title="Hello" />

// Error: Type 'string' is not assignable to type 'number'
<Component title="Hello" count="5" />`}</code>
							</pre>
						</div>

						<div className="border-l-4 border-indigo-500 pl-6">
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								6. Better Code Documentation
							</h3>
							<p className="text-gray-700 dark:text-gray-300 mb-3">
								TypeScript types serve as inline documentation, making it easier for
								teams to understand and maintain code.
							</p>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// Self-documenting code with types
interface SearchParams {
  query: string;
  filters?: {
    category?: string;
    priceRange?: [number, number];
    inStock?: boolean;
  };
  sortBy?: 'price' | 'name' | 'date';
  page?: number;
}

function searchProducts(params: SearchParams) {
  // Anyone reading this code knows exactly what params should contain
  // IDE will autocomplete and validate
}`}</code>
							</pre>
						</div>
					</div>
				</section>

				{/* Next.js Specific Features */}
				<section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
						Next.js-Specific TypeScript Features
					</h2>
					<div className="space-y-6">
						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Typed Route Parameters
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// app/products/[id]/page.tsx
interface PageProps {
  params: {
    id: string;
  };
  searchParams: {
    category?: string;
    sort?: string;
  };
}

export default function ProductPage({ 
  params, 
  searchParams 
}: PageProps) {
  // TypeScript knows params.id is a string
  const productId = parseInt(params.id);
  
  return <div>Product {productId}</div>;
}`}</code>
							</pre>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Typed Metadata
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// app/products/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our product catalog',
  openGraph: {
    title: 'Products',
    description: 'Browse our product catalog',
    type: 'website',
  },
};`}</code>
							</pre>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
								Type-Safe Environment Variables
							</h3>
							<pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded overflow-x-auto">
								<code>{`// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    API_KEY: string;
    NEXT_PUBLIC_APP_URL: string;
  }
}

// Usage - TypeScript will error if env var doesn't exist
const dbUrl = process.env.DATABASE_URL; // Type: string
const apiKey = process.env.API_KEY; // Type: string`}</code>
							</pre>
						</div>
					</div>
				</section>

				{/* Best Practices */}
				<section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
						Best Practices for TypeScript in Next.js
					</h2>
					<div className="space-y-4">
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
								✓
							</div>
							<div>
								<h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
									Use Strict Mode
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Enable strict mode in tsconfig.json for maximum type safety
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
								✓
							</div>
							<div>
								<h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
									Define Shared Types
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Create a types directory for shared interfaces and types across your
									application
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
								✓
							</div>
							<div>
								<h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
									Type Your API Responses
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Always define types for API responses to ensure data consistency
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
								✓
							</div>
							<div>
								<h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
									Use Type Guards
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Implement type guards for runtime type checking when dealing with
									external data
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Navigation Links */}
				<div className="flex gap-4 justify-center mt-8">
					<Link
						href="/typescript-definitions"
						className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
					>
						← TypeScript Definitions
					</Link>
					<Link
						href="/"
						className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
					>
						Home
					</Link>
				</div>
			</main>
		</div>
	);
}

