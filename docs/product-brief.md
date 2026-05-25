# Product Brief

## Overview

- Product name: Countera App
- Parent company: Mavora Labs
- Company domain candidate: mavoralabs.com
- Product domain candidate: countera.app
- App URL candidate: app.countera.app
- Support email candidate: support@countera.app
- Product shape: all-in-one POS with business presets
- Target users: small retail shops, service businesses, cafes, salons, repair shops, clinics, and local operators with 1-20 staff
- Problem being solved: owners need a simple way to sell products/services, track daily revenue, manage staff activity, monitor inventory, and keep customer history without a complex enterprise POS
- Primary outcome: a shop can complete checkout, record payments, track inventory, and understand daily performance from one browser-based app

## Positioning

Countera App is a simple browser-based POS for small businesses that combines checkout, products, services, customers, inventory, staff, receipts, and daily reports.

Parent brand line:

Mavora Labs builds practical SaaS tools for small businesses and modern operators.

Product line:

Countera helps small businesses sell products and services, track customers and stock, manage staff, and see daily revenue from one clean POS dashboard.

## Core Workflow

1. Owner creates a shop workspace.
2. Owner chooses a business preset and adds products, services, staff, tax settings, and optional customers.
3. Cashier or staff member opens the POS screen.
4. Cashier adds services/products to cart.
5. Cashier applies tax, discounts, and optional tip.
6. Cashier records payment as cash, card/manual, or other.
7. App creates the order, updates inventory, stores customer history, and shows receipt.
8. Owner reviews daily sales and staff activity.

## Roles And Permissions

| Role | Capabilities |
| --- | --- |
| Owner | Manage billing, settings, staff, catalog, reports, and all orders |
| Manager | Manage catalog, staff schedule/status, customers, orders, and reports |
| Cashier | Create sales, view products/services, create customers, print/send receipts |
| Staff | Create assigned sales, view own customers/history, view own daily totals |

## MVP Features

- Workspace/shop setup
- Auth and staff roles
- Product and service catalog
- Customer records with preset-specific labels
- Business preset selection
- POS cart and checkout
- Discounts, tax, and tips
- Manual payment recording
- Receipt view and browser print
- Inventory quantity tracking for products
- Daily sales report
- Staff sales summary
- Stripe subscription billing for the SaaS

## Data Model Notes

Main entities:

- users
- workspaces
- memberships
- products
- services
- customers
- orders
- order_items
- payments
- tax_rates
- discounts
- inventory_movements
- register_sessions
- subscriptions
- activity_log

Relationships:

- A workspace has many members, products, services, customers, orders, and register sessions.
- An order belongs to a workspace and optionally a customer, staff member, and register session.
- An order has many order items and payments.
- Products can create inventory movements when sold or adjusted.

Retention requirements:

- Keep order, payment, receipt, and activity records for reporting and audit history.
- Do not hard-delete financial records after launch; use void/refund/cancel states.

## Launch Scope

Must have:

- Docker-first Next.js app foundation
- PostgreSQL schema
- Auth and workspace roles
- Business preset onboarding
- Services/products
- POS checkout
- Manual payments
- Receipts
- Basic reporting
- Stripe SaaS billing

Nice to have:

- Customer notes/history
- Staff commission report
- CSV export
- Email receipts
- Preset-specific labels and dashboard cards

Not now:

- Payment terminal integration
- Offline mode
- Multi-location
- Kitchen/table workflows
- Supplier purchase orders
- Advanced loyalty program
