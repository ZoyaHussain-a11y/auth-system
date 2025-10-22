export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32">
      <h1 className="text-5xl font-bold mb-4">Welcome to AuthSystem</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Secure authentication system for users.
      </p>
      <a
        href="/signup"
        className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90"
      >
        Get Started
      </a>
    </section>
  );
}
