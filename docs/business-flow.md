# Business Flow

Countera App is an all-in-one POS for small businesses. The product should let a business start with one simple setup, choose a preset, run sales, track operations, and grow into deeper workflows without switching systems.

## Business Model

Mavora Labs owns and operates Countera App as a subscription SaaS product.

Countera App sells to small operators that need a browser-first POS without enterprise complexity:

- Retail shops
- Service businesses
- Cafes and quick-service counters
- Salons and barbers
- Repair shops
- Clinics and appointment-led local businesses
- General local operators that sell products, services, fees, or tips

Revenue model:

- Free trial for new businesses
- Monthly subscription per workspace or location
- Optional higher tiers for multi-location, advanced reports, integrations, and automation
- Payment terminal integration later, not required for MVP

## Customer Acquisition Flow

1. Visitor lands on the Countera marketing page.
2. Visitor understands Countera as one POS for products, services, inventory, staff, customers, and daily revenue.
3. Visitor joins the waitlist or starts a trial.
4. Countera asks for business type, business size, and primary use case.
5. Countera routes the user into the right preset: general shop, retail, service, cafe, salon, repair, or clinic.
6. Owner completes onboarding and runs a demo sale.
7. Owner invites staff and starts live usage.
8. Trial converts to paid subscription when the business is actively using checkout and reports.

## Owner Onboarding Flow

1. Create account.
2. Create workspace.
3. Add business profile:
   - Business name
   - Business type
   - Currency
   - Tax settings
   - Receipt details
4. Choose a business preset.
5. Add first catalog items:
   - Products
   - Services
   - Fees
   - Tips, if enabled
6. Add staff members and roles.
7. Add optional customers.
8. Run first test sale.
9. Open the register for real sales.

## Daily Operating Flow

1. Staff opens the register.
2. Staff starts a new sale.
3. Staff adds products, services, fees, discounts, tax, and optional tip.
4. Staff attaches an optional customer.
5. Staff records payment as cash, card/manual, transfer, or other configured method.
6. Countera creates the order and payment records.
7. Countera updates inventory when product items are sold.
8. Countera stores customer history when a customer is attached.
9. Countera displays receipt and browser print options.
10. Owner or manager reviews live daily totals.
11. Staff closes the register at the end of the day.

## Core Product Flow

```text
Workspace setup
  -> Business preset
  -> Catalog setup
  -> Staff roles
  -> Register open
  -> POS checkout
  -> Payment record
  -> Receipt
  -> Inventory movement
  -> Customer history
  -> Daily reports
  -> Subscription billing
```

## Preset Flow

Countera should keep one shared POS core and use presets to change labels, default settings, onboarding steps, and dashboard cards.

General shop:

- Products and services enabled
- Customer records
- Basic inventory
- Daily revenue dashboard

Retail:

- Product-heavy catalog
- SKU and barcode fields later
- Low stock reporting
- Inventory-first dashboard

Service business:

- Services enabled by default
- Customer history emphasized
- Staff assignment
- Appointment placeholder later

Cafe:

- Menu-style catalog
- Tips enabled
- Modifiers later
- Tables and kitchen tickets later

Salon/barber:

- Customers can be labeled as clients
- Staff can be labeled as stylists or barbers
- Services, products, and tips enabled
- Appointments, memberships, and commissions later

Repair shop:

- Customer and device history
- Deposits later
- Parts inventory
- Repair tickets later

Clinic/service office:

- Customer records
- Services
- Notes/history
- Appointment reminders later

## Roles Flow

Owner:

- Manages workspace, billing, settings, staff, catalog, reports, and all orders.

Manager:

- Manages catalog, staff, customers, orders, inventory, and reports.

Cashier:

- Runs checkout, records payments, creates customers, and prints receipts.

Staff:

- Creates assigned sales and views own activity, depending on permissions.

## Reporting Flow

Countera should make daily health visible without requiring spreadsheet work.

MVP reports:

- Today's revenue
- Today's transaction count
- Average order value
- Payment method totals
- Top products
- Top services
- Staff sales summary
- Low stock products
- Register close totals

Later reports:

- Multi-location performance
- Customer repeat rate
- Inventory valuation
- Staff commissions
- Subscription and billing health
- Preset-specific reports

## Billing Flow

1. Business starts a trial.
2. Owner completes onboarding.
3. Countera tracks activation events:
   - First catalog item added
   - First staff member invited
   - First sale completed
   - First register closed
4. Owner chooses a subscription plan.
5. Stripe manages subscription, invoices, and payment status.
6. Countera enforces billing state:
   - trialing
   - active
   - past_due
   - canceled
7. Owner can update plan, payment method, and billing details from the billing page.

## MVP Boundary

Build now:

- One shared POS core
- Business preset selection
- Product and service catalog
- Customers
- Staff roles
- Manual payment recording
- Receipts
- Inventory movements
- Register sessions
- Daily reports
- Stripe subscription foundation

Defer:

- Payment terminals
- Offline mode
- Kitchen tickets
- Table maps
- Advanced appointments
- Supplier purchasing
- Loyalty programs
- Multi-location operations

## Success Criteria

Countera is working when a small business can:

- Set up a workspace in minutes
- Choose a business preset
- Add products or services
- Invite staff
- Complete a real sale
- Print or view a receipt
- See daily revenue
- Track inventory movement
- Review customer purchase history
- Convert from trial to paid subscription
