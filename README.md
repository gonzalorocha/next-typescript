# TypeScript Guide - Next.js Learning Project

A comprehensive, interactive learning resource for TypeScript built with Next.js. This project demonstrates TypeScript concepts, best practices, and real-world examples through hands-on tutorials and side-by-side comparisons with JavaScript.

## 🎯 Project Purpose

This project serves as an educational guide for developers learning TypeScript, specifically in the context of Next.js applications. It provides:

- **Interactive Examples**: Compare TypeScript and JavaScript implementations side-by-side
- **Type System Tutorials**: Learn about interfaces, types, generics, and more
- **Next.js Integration**: Understand how TypeScript enhances Next.js development
- **API Examples**: See type-safe API calls and data fetching patterns
- **Best Practices**: Discover recommended approaches for TypeScript in modern web development

## ✨ Features

### 📚 Learning Sections

- **TypeScript Definitions**: Comprehensive guide to type definitions, interfaces, type aliases, generics, and utility types
- **Why TypeScript in Next.js**: Explore the benefits and advantages of using TypeScript with Next.js
- **Component Examples**: Interactive examples comparing TypeScript and JavaScript React components
- **API Examples**: Type-safe API integration examples with proper error handling

### 🔍 Key Topics Covered

- Basic TypeScript types (string, number, boolean, etc.)
- Interfaces and type definitions
- Type aliases and union/intersection types
- Generics and reusable type patterns
- Type-safe API calls and data fetching
- Next.js-specific TypeScript features (route params, metadata, etc.)
- Best practices for TypeScript in production

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd next-typescript
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: TypeScript 5
- **UI**: React 19
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios (for API examples)
- **Font**: Geist (optimized with `next/font`)

## 📁 Project Structure

```
next-typescript/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home page with TypeScript overview
│   │   ├── typescript-definitions/  # Type definitions tutorial
│   │   ├── why-typescript-nextjs/   # Benefits of TypeScript in Next.js
│   │   ├── examples/           # Component examples
│   │   └── api-examples/       # API integration examples
│   └── components/
│       ├── TypeScriptComponents/    # TypeScript component examples
│       └── JavaScriptComponents/    # JavaScript component examples (for comparison)
├── public/                     # Static assets
└── package.json
```

## 🎓 How to Use This Project

1. **Start with the Home Page**: Get an overview of TypeScript and its benefits
2. **Explore Type Definitions**: Learn about the TypeScript type system
3. **Understand Next.js Integration**: See why TypeScript is valuable in Next.js
4. **Compare Components**: View side-by-side comparisons of TypeScript vs JavaScript
5. **Study API Examples**: Learn type-safe API integration patterns

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Official TypeScript guide
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

---

**Built with ❤️ by [Gonza](https://github.com/gonzalorocha)** using Next.js and TypeScript
