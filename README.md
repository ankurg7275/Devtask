DevTasks — Simple Task Manager (MERN Stack)
A modern, full-stack task manager app using MongoDB, Express.js, React, Node.js, Redux Toolkit, and Material UI.

🚀 Features
User registration and login (JWT authentication)

Dashboard with personal tasks

Add, update, delete tasks

Update task status: Pending | In Progress | Completed

Due dates for tasks

Filter tasks by status or due date

Modern design with Material UI

🛠 Tech Stack
Frontend: React, Redux Toolkit, Material UI, Axios, React Router

Backend: Node.js, Express.js, MongoDB, JWT, bcryptjs

Other: dotenv, nodemon, CORS

⚡ Setup Instructions
Backend
Navigate to the backend folder:

bash
cd backend
Install dependencies:

bash
npm install
Create a .env file:

text
PORT=5000
DB_URI=mongodb://127.0.0.1:27017/devtasks
JWT_SECRET=your_jwt_secret
Make sure MongoDB is running (local or update to Atlas)

Start the backend server:

bash
npm run dev
Your API will be available at http://localhost:5000

Frontend
Navigate to the frontend folder:

bash
cd ../frontend
Install dependencies:

bash
npm install
Start the React app:

bash
npm start
App runs on http://localhost:3000

The frontend will connect to the backend at http://localhost:5000. If you deploy, update API URLs as needed.

📝 Short Description of Approach
Authentication: JWT tokens managed with Redux and localStorage.

RESTful API: Secure endpoints for user and task management.

Redux Toolkit: Global state management for authentication, tasks CRUD, and filters.

Material UI: Responsive components for forms, tables, and controls.

Filtering: By status and due date via query params and UI controls.

Structure: Clean separation of backend (models, routes, middleware) and frontend (pages, slices, state).
