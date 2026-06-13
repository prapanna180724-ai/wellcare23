# Wellcare API Overview

## Core endpoints
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/medicines?q=paracetamol`
- POST `/api/medicines`
- POST `/api/prescriptions/upload`
- GET `/api/prescriptions`
- POST `/api/consultations`
- GET `/api/consultations`
- POST `/api/orders`
- GET `/api/orders`
- POST `/api/family`
- GET `/api/family`
- POST `/api/reminders`
- GET `/api/reminders`
- GET `/api/dashboard`

## Production additions
- Payment integration
- OCR extraction for prescriptions
- Notification service for reminders
- Audit logging and admin panel
- Role-based pharmacist review workflows
- Real hospital lookup and map APIs
