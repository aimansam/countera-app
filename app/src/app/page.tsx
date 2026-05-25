export default function Home() {
  const benefits = [
    "Sell services and products from one checkout",
    "Keep client history close to every sale",
    "See staff, tips, and daily revenue at a glance",
    "Start browser-first before hardware gets complex",
  ];

  const sales = [
    ["Cut + beard trim", "$42.00"],
    ["Styling gel", "$14.00"],
    ["Tip", "$8.00"],
  ];

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-zinc-950">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a className="flex items-center gap-3" href="#top" aria-label="Lynqor home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-700 text-sm font-bold text-white">
            L
          </span>
          <span className="text-lg font-semibold">Lynqor</span>
        </a>
        <a
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-950 hover:text-zinc-950"
          href="#waitlist"
        >
          Join waitlist
        </a>
      </header>

      <main id="top">
        <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:pb-24 lg:pt-14">
          <div className="flex flex-col justify-center">
            <p className="mb-4 w-fit rounded-lg bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-900">
              Local testing preview
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Simple POS for salons and barbers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
              Lynqor helps small service shops sell services, track clients,
              manage staff, and understand daily revenue from one clean browser
              dashboard.
            </p>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  className="rounded-lg border border-zinc-200 bg-white p-4 text-sm leading-6 text-zinc-700 shadow-sm"
                  key={benefit}
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-200/70">
            <div className="rounded-lg bg-zinc-950 p-4 text-white">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-400">Lynqor Salon</p>
                  <h2 className="text-xl font-semibold">Checkout</h2>
                </div>
                <span className="rounded-lg bg-teal-500 px-3 py-2 text-sm font-semibold text-zinc-950">
                  Open register
                </span>
              </div>
              <div className="grid gap-3">
                {sales.map(([label, amount]) => (
                  <div
                    className="flex items-center justify-between rounded-lg bg-zinc-900 px-4 py-3"
                    key={label}
                  >
                    <span className="text-sm text-zinc-200">{label}</span>
                    <span className="text-sm font-semibold">{amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg bg-white p-4 text-zinc-950">
                <div className="flex items-center justify-between text-sm text-zinc-600">
                  <span>Client</span>
                  <span>Amir K.</span>
                </div>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-zinc-600">Total</p>
                    <p className="text-3xl font-semibold">$64.00</p>
                  </div>
                  <button className="rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800">
                    Record payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-10">
            <div>
              <p className="text-3xl font-semibold">5 min</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Target setup time for a small shop to add first services and run
                a demo sale.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">3 roles</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Owner, manager, and cashier workflows planned for MVP.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">1 screen</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Checkout, client history, tips, and receipts in one focused POS
                flow.
              </p>
            </div>
          </div>
        </section>

        <section
          className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1fr] lg:px-10"
          id="waitlist"
        >
          <div>
            <h2 className="text-3xl font-semibold text-zinc-950">
              Validate Lynqor locally first.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-zinc-700">
              This testing page is for shaping the offer before domains,
              payments, and production deployment. Use it to review copy,
              benefits, and the first product direction.
            </p>
          </div>
          <form className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <label className="block text-sm font-medium text-zinc-800" htmlFor="email">
              Email address
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                className="min-h-12 flex-1 rounded-lg border border-zinc-300 px-4 text-base outline-none transition placeholder:text-zinc-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
                id="email"
                name="email"
                placeholder="owner@example.com"
                type="email"
              />
              <button
                className="min-h-12 rounded-lg bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800"
                type="button"
              >
                Join waitlist
              </button>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Local-only placeholder. No emails are submitted yet.
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
