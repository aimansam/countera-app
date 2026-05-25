import { sql } from "drizzle-orm";

import { businessPresets } from "./schema";
import { db } from ".";

const presets = [
  {
    id: "general-shop",
    name: "General Shop",
    labels: {
      customer: "Customer",
      product: "Product",
      service: "Service",
      checkout: "Checkout",
    },
    enabledFeatures: ["products", "customers", "inventory", "reports"],
    onboardingSteps: ["Add products", "Create first customer", "Open register", "Run demo sale"],
    dashboardCards: ["todayRevenue", "transactionCount", "lowStock", "topProducts"],
  },
  {
    id: "boutique-retail",
    name: "Boutique Retail",
    labels: {
      customer: "Customer",
      product: "Item",
      service: "Service",
      checkout: "Sale",
    },
    enabledFeatures: ["products", "customers", "inventory", "discounts", "reports"],
    onboardingSteps: ["Add items", "Set stock levels", "Open register", "Run first sale"],
    dashboardCards: ["todayRevenue", "transactionCount", "lowStock", "topProducts"],
  },
  {
    id: "service-business",
    name: "Service Business",
    labels: {
      customer: "Client",
      product: "Product",
      service: "Service",
      checkout: "Checkout",
    },
    enabledFeatures: ["services", "customers", "staff", "tips", "reports"],
    onboardingSteps: ["Add services", "Invite staff", "Create first client", "Run demo checkout"],
    dashboardCards: ["todayRevenue", "transactionCount", "topServices", "staffSales"],
  },
  {
    id: "cafe",
    name: "Cafe",
    labels: {
      customer: "Guest",
      product: "Menu item",
      service: "Service",
      checkout: "Order",
    },
    enabledFeatures: ["products", "inventory", "register", "reports"],
    onboardingSteps: ["Add menu items", "Set opening cash", "Open register", "Take first order"],
    dashboardCards: ["todayRevenue", "transactionCount", "topProducts", "paymentTotals"],
  },
  {
    id: "salon-barber",
    name: "Salon/Barber",
    labels: {
      customer: "Client",
      product: "Product",
      service: "Service",
      checkout: "Appointment checkout",
    },
    enabledFeatures: ["services", "products", "customers", "staff", "tips", "reports"],
    onboardingSteps: ["Add services", "Add retail products", "Invite staff", "Checkout first client"],
    dashboardCards: ["todayRevenue", "transactionCount", "topServices", "staffSales"],
  },
  {
    id: "repair-shop",
    name: "Repair Shop",
    labels: {
      customer: "Customer",
      product: "Part",
      service: "Repair service",
      checkout: "Job checkout",
    },
    enabledFeatures: ["services", "products", "customers", "inventory", "reports"],
    onboardingSteps: ["Add repair services", "Add common parts", "Create first customer", "Run test checkout"],
    dashboardCards: ["todayRevenue", "transactionCount", "lowStock", "topServices"],
  },
  {
    id: "clinic-service-office",
    name: "Clinic/Service Office",
    labels: {
      customer: "Patient",
      product: "Product",
      service: "Service",
      checkout: "Visit checkout",
    },
    enabledFeatures: ["services", "customers", "staff", "reports"],
    onboardingSteps: ["Add services", "Invite staff", "Create first patient", "Run visit checkout"],
    dashboardCards: ["todayRevenue", "transactionCount", "topServices", "staffSales"],
  },
] satisfies (typeof businessPresets.$inferInsert)[];

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