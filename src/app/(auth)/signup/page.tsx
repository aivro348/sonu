import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="glass px-4 py-8 sm:px-10 rounded-2xl">
      <h2 className="text-center text-2xl font-bold text-foreground mb-6">
        Create your Resqu profile
      </h2>
      
      <form className="space-y-6" action="#">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground/80">
            Full name
          </label>
          <div className="mt-1">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="appearance-none block w-full px-3 py-3 border border-border rounded-xl shadow-sm placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-foreground transition-all"
              placeholder="Sarah Jenkins"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-3 border border-border rounded-xl shadow-sm placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-foreground transition-all"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-foreground/80">
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-3 py-3 border border-border rounded-xl shadow-sm placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-foreground transition-all"
            />
          </div>
        </div>

        <div>
          <button
            type="button"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            Create account
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-foreground/60">
        Already have an account?{' '}
        <Link href="/login" className="font-medium text-action hover:text-action/80 transition-colors">
          Sign in instead
        </Link>
      </div>
    </div>
  );
}
