# Countera Preset Strategy

## Decision

Build Countera App as an all-in-one POS SaaS with business presets, not as a salon-only product.

The product should have a shared core POS engine and preset-specific labels, onboarding, enabled features, dashboard cards, and reports.

## Countera Core POS Engine

Shared across all presets:

- Workspaces
- Users and roles
- Catalog items
- Customers
- Orders
- Payments
- Receipts
- Taxes
- Discounts
- Inventory movements
- Register sessions
- Reports
- Billing/subscriptions

## Starter Presets

General shop:

- Products and services
- Customers
- Staff roles
- Inventory
- Receipts
- Daily reports

Retail:

- Product-heavy catalog
- SKU/barcode fields later
- Inventory-first dashboard
- Low stock alerts

Service business:

- Services and optional products
- Customers become clients where useful
- Staff assignment
- Notes/history

Cafe:

- Menu items
- Tips
- Modifiers later
- Tables and kitchen tickets later

Salon/barber:

Preset-specific labels:

- Customers become clients
- Staff can be stylists or barbers
- Catalog includes services and products
- Sales can include tips

Enabled MVP features:

- Services
- Products
- Clients
- Staff roles
- Tips
- Inventory
- Receipts
- Daily reports

Dashboard cards:

- Today's revenue
- Today's transactions
- Top services
- Top staff
- Low stock products

Onboarding steps:

- Business information
- Currency and tax
- Add first services
- Add first products
- Add staff
- Run first sale

## Future Presets

Retail preset:

- Product-heavy catalog
- SKU/barcode support
- Suppliers and purchase orders later
- Inventory-first reporting

Cafe preset:

- Menu items
- Tips
- Modifiers later
- Tables and kitchen tickets later

Repair shop preset:

- Repair tickets
- Device/customer history
- Deposits
- Parts inventory

## Implementation Shape

Represent presets as configuration first, not separate apps.

```ts
type BusinessPreset = {
  id: string;
  name: string;
  labels: Record<string, string>;
  enabledFeatures: string[];
  onboardingSteps: string[];
  dashboardCards: string[];
};
```

Keep the database generic enough for future presets, but do not overbuild. Add preset-specific tables only when a workflow truly needs them.
