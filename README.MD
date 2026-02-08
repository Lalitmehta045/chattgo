# ChatGo - Real-Time Chat App

A modern chat application with real-time messaging and authentication.

## Features

- 🔐 User Authentication (Login/Signup)
- ⚡ Real-Time Messaging
- 🟢 Online Status
- 📷 Image Sharing
- 📱 Mobile Responsive

## Quick Setup

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### 2. Configure Environment

Create `backend/.env`:

```env
PORT=3000
MONGO_URI=your_mongodb_uri
NODE_ENV=development
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### 3. Run Application

```bash
# Backend (Terminal 1)
cd backend
npm run dev

# Frontend (Terminal 2)
cd frontend
npm run dev
```

Open http://localhost:5173

## Required Services

- **MongoDB** - Database ([mongodb.com/atlas](https://mongodb.com/atlas))
- **Cloudinary** - Image uploads ([cloudinary.com](https://cloudinary.com))

## Tech Stack

- React + Vite
- Node.js + Express
- MongoDB + Socket.IO
- Tailwind CSS

## License

MIT
