import Link from "next/link";

const navItems = [
  { label: "Onboarding", href: "/app/onboarding" },
  { label: "Dashboard", href: "/app/dashboard" },
  { label: "Catalog", href: "/app/dashboard#catalog" },
  { label: "Register", href: "/app/dashboard#register" },
];

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-950">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-zinc-200 bg-white px-4 py-5 lg:block">
        <Link className="flex items-center gap-3" href="/">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-700 text-sm font-bold text-white">
            C
          </span>
          <span className="text-lg font-semibold">Countera</span>
        </Link>
        <nav className="mt-8 grid gap-1">
          {navItems.map((item) => (
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 px-5 py-4 backdrop-blur sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Local app preview</p>
              <h1 className="text-xl font-semibold">Countera App</h1>
            </div>
            <div className="flex items-center gap-3">
              <Link
                className="hidden rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950 sm:inline-flex"
                href="/"
              >
                Landing
              </Link>
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-950 text-sm font-semibold text-white">
                AO
              </div>
            </div>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}