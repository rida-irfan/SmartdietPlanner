# Smart Diet Planner

A modern web application for personalized diet planning with React, Tailwind CSS, Node.js, Express, MongoDB, and JWT authentication.

## Features

- Signup / Login with JWT authentication
- User profile and dashboard
- Diet planner form with intelligent meal suggestions
- Save diet plans to user profile
- Edit profile and logout
- Dark mode toggle and responsive design

## Setup

### 1. Backend

```bash
cd server
npm install
copy .env.example .env
# Update .env with your MongoDB URI and JWT secret
npm run dev
```

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

### Environment variables

Create `.env` in the `server` folder with:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smart_diet_planner
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

> If you run MongoDB with authentication enabled, set `MONGO_URI` accordingly.

## API Endpoints

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/dashboard/profile`
- `PUT /api/dashboard/profile`
- `POST /api/dashboard/plan`
- `GET /api/dashboard/plans`

## Notes

This project is built to run locally with MongoDB. Use a local MongoDB instance or Docker MongoDB for persistence, and customize the diet formulas to fit your needs.

## Docker Setup

Start the full stack with MongoDB, backend, and frontend:

```bash
docker compose up --build
```

Then open `http://localhost:3000` in your browser.

The frontend is exposed on port `3000`, the backend on `5000`, and MongoDB on `27017`.
