# MVP Todo List

## Phase 1: Product Planning

- [x] Confirm product direction: all-in-one POS with business presets
- [x] Choose product name and slug: Countera App, `countera-app`
- [x] Choose parent company: Mavora Labs
- [ ] Check domains: `mavoralabs.com`, `countera.app`
- [ ] Complete immediate next steps in [next-todo.md](next-todo.md)
- [ ] Define pricing tiers
- [ ] Define trial length
- [ ] Write homepage positioning
- [ ] Identify 3-5 local retail, service, cafe, salon, or repair businesses for discovery interviews
- [ ] List must-have receipt fields
- [ ] Decide supported currencies for MVP

## Phase 2: Project Setup

- [x] Scaffold the Countera App from the SaaS template
- [x] Add `Dockerfile`, `compose.yaml`, `.dockerignore`, and `.env.example`
- [x] Validate Compose with `docker compose -f products/countera-app/app/compose.yaml config`
- [x] Set up Next.js, TypeScript, Tailwind CSS, and pnpm
- [ ] Set up PostgreSQL in Docker Compose
- [x] Add README setup commands
- [x] Initialize separate Git repository for the app when ready

## Phase 3: App Foundation

- [ ] Add auth provider
- [ ] Create workspace/shop model
- [ ] Create membership and roles model
- [ ] Add protected app shell
- [ ] Add owner onboarding flow
- [ ] Add settings page
- [ ] Add seed/demo data path

## Phase 4: POS Core

- [ ] Create service catalog
- [ ] Create product catalog
- [ ] Create customer records with preset-specific labels
- [ ] Build POS cart screen
- [ ] Add discounts
- [ ] Add tax calculation
- [ ] Add tips
- [ ] Record manual payments
- [ ] Create order and order item records
- [ ] Create receipt view
- [ ] Add browser print for receipts

## Phase 5: Inventory And Register

- [ ] Track product stock quantity
- [ ] Record inventory movements on sale
- [ ] Add manual stock adjustment
- [ ] Create register session model
- [ ] Open and close daily register session
- [ ] Add cash/card/manual payment totals

## Phase 6: Reports

- [ ] Dashboard: today's revenue
- [ ] Dashboard: today's transaction count
- [ ] Report: daily sales
- [ ] Report: top services
- [ ] Report: top products
- [ ] Report: staff sales summary
- [ ] Report: low stock products

## Phase 7: Billing And SaaS Operations

- [ ] Add Stripe subscription plans
- [ ] Add billing page
- [ ] Add trial state
- [ ] Add active/past_due/canceled billing states
- [ ] Add Stripe webhook handling
- [ ] Add Sentry
- [ ] Add PostHog activation events

## Phase 8: QA And Launch

- [ ] Test signup and onboarding
- [ ] Test service checkout
- [ ] Test product checkout
- [ ] Test mixed product/service checkout
- [ ] Test discount, tax, and tip calculations
- [ ] Test receipt print view
- [ ] Test inventory decrement
- [ ] Test register close totals
- [ ] Test mobile POS layout
- [ ] Test desktop dashboard layout
- [ ] Verify no real `.env` files are committed
- [ ] Push app repository to GitHub
- [ ] Recruit first beta shop

## Later

- [ ] Appointment calendar
- [ ] Customer reminders
- [ ] Email receipts
- [ ] Staff commission report
- [ ] Multi-location support
- [ ] Payment terminal integration
- [ ] Offline mode
- [ ] Retail preset
- [ ] Cafe preset
- [ ] Repair shop preset
