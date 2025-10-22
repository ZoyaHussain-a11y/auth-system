# Next.js + Supabase Authentication & Dashboard

This is a **Next.js** project integrated with **Supabase** for authentication, database management, and session handling.  
It includes a professional **Landing Page**, **User Login & Signup**, and an **Admin Dashboard**.

---

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** (for styling)
- **Supabase** (Authentication + Database)
- **React Hook Form & Zod** (for form validation)

---

## Project Features

 **Landing Page**
- Modern and responsive header section  
- Styled for both dark and light modes

 **Authentication (Supabase)**
- Sign up with email, password, first name, and last name  
- Email confirmation required before login  
- Secure session management  

 **Admin Dashboard**
- Displays user data  
- Accessible only after successful login  

 **Responsive UI**
- Fully optimized for all screen sizes  
- Dark/Light mode support  

---

## Folder Structure
project-root/
├── app/
│ ├── (auth)/
│ │ ├── login/
│ │ ├── signup/
│ ├── (dashboard)/
│ │ ├── admin/
│ ├── (landing)/
│ │ ├── page.tsx
│ ├── layout.tsx
│ └── globals.css
├── components/
│ ├── ui/
│ ├── forms/
│ ├── header.tsx
├── lib/
│ └── supabaseClient.ts
├── .env.local
├── package.json
└── README.md


---

## Environment Variables

Create a `.env.local` file in the root of your project and add:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key


⚠️ Do not commit this file to GitHub — it contains sensitive credentials.

 Getting Started

First, install dependencies:

npm install
# or
yarn install
# or
pnpm install


Then, run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev


Now open http://localhost:3000
 to view the app.

 Supabase Setup

Go to Supabase

Create a new project

Copy your project’s URL and anon key into .env.local

Enable Email Authentication

Navigate to Authentication → Providers → Email

Turn ON the “Enable Email Signup” option

(Optional) Create tables in Database → Table Editor

 Authentication Workflow

Users Sign Up → Confirm Email (Supabase sends verification)

After confirmation → Login

Session is persisted using Supabase Auth Helpers

Admin Dashboard requires a valid authenticated session

 Deployment
 Deploy on Vercel

The easiest way to deploy your Next.js app is via Vercel
:

Push your project to GitHub:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main


Go to Vercel

Import your GitHub repo

Add your .env.local values in Vercel → Project Settings → Environment Variables

Click Deploy


