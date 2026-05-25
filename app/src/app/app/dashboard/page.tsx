const summaryCards = [
  ["Today's revenue", "RM 0.00", "No sales recorded yet"],
  ["Transactions", "0", "Open a register to start selling"],
  ["Low stock", "0", "Inventory alerts will appear here"],
  ["Active preset", "General Shop", "Products, customers, inventory, reports"],
];

const registerItems = [
  ["Demo service", "RM 45.00"],
  ["Retail item", "RM 18.00"],
  ["Tip", "RM 7.00"],
];

export default function DashboardPage() {
  return (
    <main className="px-5 py-6 sm:px-8 lg:px-10">
      <div className="grid gap-6">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map(([label, value, helper]) => (
            <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm" key={label}>
              <p className="text-sm font-medium text-zinc-600">{label}</p>
              <p className="mt-3 text-2xl font-semibold text-zinc-950">{value}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{helper}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
          <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm" id="catalog">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Setup checklist</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  The next build should turn these placeholders into database-backed records.
                </p>
              </div>
              <span className="rounded-lg bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-900">Local</span>
            </div>
            <div className="mt-5 grid gap-3">
              {[
                "Create workspace from onboarding form",
                "Save selected business preset",
                "Add product and service catalog screens",
                "Open register session",
                "Record first manual payment",
              ].map((item, index) => (
                <div className="flex items-center gap-3 rounded-lg border border-zinc-200 px-4 py-3" key={item}>
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-zinc-100 text-sm font-semibold text-zinc-700">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-zinc-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-zinc-950 p-5 text-white shadow-sm" id="register">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-400">Countera Register</p>
                <h2 className="text-xl font-semibold">Demo cart</h2>
              </div>
              <span className="rounded-lg bg-teal-500 px-3 py-2 text-sm font-semibold text-zinc-950">Open</span>
            </div>
            <div className="mt-5 grid gap-3">
              {registerItems.map(([label, amount]) => (
                <div className="flex items-center justify-between rounded-lg bg-zinc-900 px-4 py-3" key={label}>
                  <span className="text-sm text-zinc-200">{label}</span>
                  <span className="text-sm font-semibold">{amount}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg bg-white p-4 text-zinc-950">
              <div className="flex items-center justify-between text-sm text-zinc-600">
                <span>Customer</span>
                <span>Walk-in</span>
              </div>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-600">Total</p>
                  <p className="text-3xl font-semibold">RM 70.00</p>
                </div>
                <button className="rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800">
                  Record payment
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}