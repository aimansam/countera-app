import Link from "next/link";

import { businessPresetTemplates } from "@/lib/business-presets";

const setupFields = ["Workspace name", "Owner name", "Currency", "Timezone"];

export default function OnboardingPage() {
  return (
    <main className="px-5 py-6 sm:px-8 lg:px-10">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-teal-700">Step 1 of 3</p>
              <h2 className="mt-1 text-2xl font-semibold">Choose a business preset</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                Presets set labels, onboarding steps, and the first dashboard cards while the POS core stays shared.
              </p>
            </div>
            <Link
              className="inline-flex min-h-10 items-center justify-center rounded-lg bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800"
              href="/app/dashboard"
            >
              Continue preview
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {businessPresetTemplates.map((preset, index) => (
              <article
                className={`rounded-lg border p-4 transition ${
                  index === 0
                    ? "border-teal-700 bg-teal-50/70 shadow-sm"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
                key={preset.id}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold">{preset.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{preset.description}</p>
                  </div>
                  {index === 0 ? (
                    <span className="rounded-lg bg-teal-700 px-2 py-1 text-xs font-semibold text-white">Selected</span>
                  ) : null}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {preset.enabledFeatures.slice(0, 4).map((feature) => (
                    <span className="rounded-lg bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700" key={feature}>
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Workspace setup</h2>
          <div className="mt-5 grid gap-4">
            {setupFields.map((field) => (
              <label className="grid gap-2" key={field}>
                <span className="text-sm font-medium text-zinc-700">{field}</span>
                <input
                  className="min-h-11 rounded-lg border border-zinc-300 px-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
                  placeholder={field === "Workspace name" ? "Countera Demo Shop" : field}
                />
              </label>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-zinc-100 p-4">
            <p className="text-sm font-semibold text-zinc-800">Recommended now</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Keep this local and static until auth is chosen. The flow is ready to connect to workspaces after the auth decision.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}