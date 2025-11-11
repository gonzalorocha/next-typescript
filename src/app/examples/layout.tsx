import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Component Examples | TypeScript Guide",
	description:
		"Interactive examples comparing TypeScript and JavaScript components. See the differences in type safety, autocomplete, and developer experience.",
	keywords: [
		"TypeScript examples",
		"JavaScript examples",
		"component comparison",
		"TypeScript vs JavaScript",
		"React components",
	],
	openGraph: {
		title: "Component Examples | TypeScript Guide",
		description:
			"Interactive examples comparing TypeScript and JavaScript components",
		type: "website",
	},
};

export default function ExamplesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}

