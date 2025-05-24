# Educational Phishing Simulator

This is a Next.js project designed as an educational tool to demonstrate how phishing attacks work and to teach users about information security best practices. The prank involves a fake "Mobile Legends Naruto Skin Series" giveaway.

**Ethical Warning:** This tool is intended for **educational purposes only**.
- **Do NOT use this tool for any malicious activities.**
- **Do NOT deploy the admin page (`/admin/view`) publicly without proper authentication and security measures.** Displaying collected emails publicly is a privacy violation.
- The password field on the prank form is for visual deception only and **does NOT store or transmit passwords**.

## Getting Started

### Prerequisites

*   Node.js (version 18.x or later recommended)
*   npm, yarn, pnpm, or bun
*   A Supabase account and project (for storing "collected" emails for the demonstration)

### 1. Clone the Repository (if you haven't already)

```bash
git clone <your-repository-url>
cd phising-simulator
```

### 2. Install Dependencies

```bash
npm run dev
npm install
# or
yarn dev
yarn install 
# or
pnpm dev
pnpm install
# or
bun dev
bun install
```

### 3. Set Up Environment Variables

Create a file named `.env.local` in the root of the project and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_PUBLIC_KEY
```

Replace `YOUR_SUPABASE_PROJECT_URL` and `YOUR_SUPABASE_ANON_PUBLIC_KEY` with your actual Supabase project URL and public anon key. You can find these in your Supabase project settings under `API`.

### 4. Supabase Table Setup

In your Supabase project, create a table named `collected_emails` with the following columns:
*   `id` (int8, is_identity, primary_key)
*   `email` (text, not null)
*   `created_at` (timestamptz, default `now()`)

Ensure Row Level Security (RLS) is enabled for this table and create a policy that allows anonymous users to `INSERT` data. For the admin view, you'll also need a policy allowing `SELECT` (secure this appropriately if deploying).

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
