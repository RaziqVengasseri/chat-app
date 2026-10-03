# 💬 Real-Time Chat Application

A full-stack **MERN** (MongoDB, Express, React, Node.js) real-time messaging application with user authentication, profile customization, media upload via Cloudinary, and instant messaging powered by Socket.io.

---

## ✨ Features

- 🔐 **User Authentication & Authorization**: Secure Signup, Login, and Logout using **JWT** stored in HTTP-Only cookies with **Bcrypt** password hashing.
- 👤 **Profile Management**: Profile picture upload and user profile updates.
- 🖼️ **Media Sharing**: Image uploads integrated with **Cloudinary**.
- 💬 **Real-Time Communication**: Instant messaging powered by **Socket.io**.
- 🛡️ **Protected Routes**: Middleware verification for secure API access.
- ⚡ **Modern Stack**: Built with Express 5, Mongoose 8, ES6 Modules (`type: module`), and Vite + React 19.

---

## 🛠️ Tech Stack

### **Backend**
- **Runtime & Framework:** Node.js, Express.js (v5)
- **Database:** MongoDB (via Mongoose v8)
- **Authentication:** JSON Web Token (JWT), Cookie Parser, Bcrypt
- **Real-time Messaging:** Socket.io
- **Cloud Media Storage:** Cloudinary
- **Environment Management:** Dotenv

### **Frontend**
- **Framework & Build Tool:** React 19, Vite (v6)
- **Styling & Icons:** CSS3

---

## 📁 Repository Structure

```text
chat-app/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Request handlers (auth, profile, etc.)
│   │   ├── lib/           # Configurations (Cloudinary, DB connection, JWT helper)
│   │   ├── middleware/    # Route protection middleware
│   │   ├── models/        # Mongoose database schemas (User, Message)
│   │   ├── routes/        # Express API endpoints
│   │   └── index.js       # App entry point
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🔌 API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/auth/signup` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Authenticate & log in user | ❌ |
| `POST` | `/api/auth/logout` | Log out user & clear JWT cookie | ❌ |
| `PUT` | `/api/auth/update-profile` | Update profile picture (Cloudinary upload) | 🔑 Yes |
| `GET` | `/api/auth/check` | Verify current user session | 🔑 Yes |

---

## ⚙️ Environment Variables

Create a `.env` file in the `backend/` directory and configure the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) account or local instance
- [Cloudinary](https://cloudinary.com/) account for image uploads

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/RaziqVengasseri/chat-app.git
   cd chat-app
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Configure your .env file
   npm run dev
   ```
   The backend server will run on `http://localhost:5000`.

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
   The frontend application will start on `http://localhost:5173`.

---

## 👤 Author

Developed by **Mohammed Raziq V**  
GitHub: [@RaziqVengasseri](https://github.com/RaziqVengasseri)

---

## 📄 License

ISC License
