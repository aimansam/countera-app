# Lynqor Theme Strategy

## Decision

Build Lynqor as a theme-based POS SaaS, but launch with only one business theme: salon/barber.

The product should have a shared core POS engine and theme-specific labels, onboarding, enabled features, dashboard cards, and reports.

## Lynqor Core POS Engine

Shared across all themes:

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

## First Theme: Lynqor Salon

Theme-specific labels:

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

## Future Themes

Retail theme:

- Product-heavy catalog
- SKU/barcode support
- Suppliers and purchase orders later
- Inventory-first reporting

Cafe theme:

- Menu items
- Tips
- Modifiers later
- Tables and kitchen tickets later

Repair shop theme:

- Repair tickets
- Device/customer history
- Deposits
- Parts inventory

## Implementation Shape

Represent themes as configuration first, not separate apps.

```ts
type BusinessTheme = {
  id: string;
  name: string;
  labels: Record<string, string>;
  enabledFeatures: string[];
  onboardingSteps: string[];
  dashboardCards: string[];
};
```

Keep the database generic enough for future themes, but do not overbuild. Add theme-specific tables only when a workflow truly needs them.
