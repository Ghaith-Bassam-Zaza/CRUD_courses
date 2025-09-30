# Courses CRUD Application

A simple **full-stack CRUD application** to manage courses, built with **React (TypeScript + Vite)** on the frontend and **FastAPI + MySQL (Prisma)** on the backend. This project demonstrates state management with **Redux Toolkit**, API interaction with **Axios**, and custom dark-themed styling.

---

## Features

* Add, edit, and delete courses.
* Courses have the following fields:

  * **Title** (string)
  * **Category** (string)
  * **Duration** (number in hours)
* Each course is linked to a user (local session ID, no login required).
* Dark theme with large buttons and inputs.
* Responsive layout with clean UI.

---

## Tech Stack

**Frontend:**

* React 19 + TypeScript + Vite
* Redux Toolkit for state management
* Axios for API requests
* Tailwind CSS (or custom dark CSS fallback)

**Backend:**

* FastAPI (Python)
* MySQL database
* Prisma ORM for database modeling and queries
* Pydantic schemas for validation

---

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── store.ts          # Redux store setup
│   │   └── hooks.ts          # typed Redux hooks
│   ├── features/courses/
│   │   ├── CourseForm.tsx
│   │   ├── CourseItem.tsx
│   │   ├── CourseList.tsx
│   │   └── CoursesPage.tsx
│   ├── api/
│   │   └── coursesApi.ts
│   └── index.css             # Dark theme styling
├── index.tsx
├── vite.config.ts
backend/
├── app/
│   ├── main.py               # FastAPI entrypoint
│   ├── database.py           # Prisma client setup
│   ├── models.py             # Prisma schema models
│   ├── crud.py               # Database operations
│   ├── schemas.py            # Pydantic schemas
│   └── routes/
│       └── courses.py        # API endpoints
├── prisma/
│   └── schema.prisma         # Database schema
└── requirements.txt
```

---

## Getting Started

### Prerequisites

* Node.js >= 18
* Python >= 3.10
* MySQL Server

---

### Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

### Backend Setup

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate    # macOS/Linux
venv\Scripts\activate       # Windows

# Install dependencies
pip install -r requirements.txt

# Run FastAPI server
uvicorn app.main:app --reload
```

Open `http://localhost:8000` to see the API documentation (Swagger UI).

---

### Database Setup

1. Create a MySQL database (e.g., `courses_db`).
2. Update the `DATABASE_URL` in `prisma/schema.prisma`:

```
mysql://USER:PASSWORD@HOST:PORT/courses_db
```

3. Run Prisma migrations:

```bash
cd backend
prisma migrate dev --name init
```

---

## Usage

1. Open the frontend in the browser.
2. Add new courses using the form.
3. Edit or delete existing courses directly from the list.
4. All changes are saved in the MySQL database.

---

## Notes

* User sessions are simulated using a local `userId`; no authentication system is implemented.
* This project is suitable as a **job application task** or **learning example** for full-stack development.

---

## License

This project is open-source and free to use for personal or educational purposes.
