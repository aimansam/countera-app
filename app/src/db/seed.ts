import { sql } from "drizzle-orm";

import { businessPresetTemplates } from "../lib/business-presets";
import { businessPresets } from "./schema";
import { db } from ".";

const presets = businessPresetTemplates.map((preset) => ({
  id: preset.id,
  name: preset.name,
  labels: preset.labels,
  enabledFeatures: preset.enabledFeatures,
  onboardingSteps: preset.onboardingSteps,
  dashboardCards: preset.dashboardCards,
})) satisfies (typeof businessPresets.$inferInsert)[];

async function main() {
  await db
    .insert(businessPresets)
    .values(presets)
    .onConflictDoUpdate({
      target: businessPresets.id,
      set: {
        name: sql.raw(`excluded.${businessPresets.name.name}`),
        labels: sql.raw(`excluded.${businessPresets.labels.name}`),
        enabledFeatures: sql.raw(`excluded.${businessPresets.enabledFeatures.name}`),
        onboardingSteps: sql.raw(`excluded.${businessPresets.onboardingSteps.name}`),
        dashboardCards: sql.raw(`excluded.${businessPresets.dashboardCards.name}`),
      },
    });

  console.log(`Seeded ${presets.length} business presets.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});