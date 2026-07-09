import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="glass px-4 py-8 sm:px-10 rounded-2xl">
      <h2 className="text-center text-2xl font-bold text-foreground mb-6">
        Sign in to your account
      </h2>
      
      <form className="space-y-6" action="#">
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
              autoComplete="current-password"
              required
              className="appearance-none block w-full px-3 py-3 border border-border rounded-xl shadow-sm placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-foreground transition-all"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-foreground/80">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-action hover:text-action/80 transition-colors">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            Sign in
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-foreground/60">
        Don't have an account?{' '}
        <Link href="/signup" className="font-medium text-action hover:text-action/80 transition-colors">
          Start your 14-day free trial
        </Link>
      </div>
    </div>
  );
}
