# The Wellcare Pharmacy - Full Stack Project

A complete multi-file prototype for a modern online pharmacy platform using **Node.js, Express, MongoDB, HTML, CSS, and JavaScript**.

## Included modules

- Medicine search by name, generic, brand, or condition
- Smart symptom checker with informational guidance
- Prescription upload demo and extraction flow
- AI drug safety checker
- Pharmacist consultation options
- Family health profiles
- Medicine reminder system
- Health articles
- Emergency assistance panel
- Professional dashboard and premium WellCare Plus UI
- Demo authentication endpoints

## Tech stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- Auth: JWT + bcryptjs

## Folder structure

```bash
client/
  wellcare-pharmacy.html
  assets/
    css/style.css
    js/app.js
    favicon.svg
server/
  app.js
  config/
  controllers/
  models/
  routes/
  middleware/
  data/seed.js
.env.example
package.json
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy `.env.example` to `.env` and update values.

```bash
cp .env.example .env
```

### 3. Start MongoDB

Run local MongoDB or replace `MONGODB_URI` with a MongoDB Atlas connection string.

### 4. Seed demo data

```bash
npm run seed
```

### 5. Start the app

```bash
npm run dev
```

Then open:

[http://127.0.0.1:5000](http://127.0.0.1:5000)

## Demo login

Create a user through `/api/auth/register` first, or extend the seed script to create a default demo user.

Example request:

```bash
curl -X POST http://127.0.0.1:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Demo User","email":"demo@wellcare.com","password":"password123"}'
```

## Production notes

This project is a strong frontend + backend prototype, but a real pharmacy launch also needs:

- Verified pharmacist review workflows
- Prescription validation and OCR pipeline
- Payment gateway integration
- Real inventory and order fulfillment
- Privacy and security hardening
- Regional healthcare and pharmacy law compliance
- Medical disclaimers and regulated product controls

## Hosting guidance

- Frontend + backend deployment: Render, Railway, VPS, or similar Node hosting
- Database: MongoDB Atlas
- GitHub Pages alone is not enough for this full-stack version because GitHub Pages supports static sites only.

## Compliance note

Symptom guidance and medicine suggestions in this prototype are informational only and not a diagnosis. Real-world dispensing, especially prescription medicines or controlled products, must be reviewed by licensed professionals and follow applicable regulations.
