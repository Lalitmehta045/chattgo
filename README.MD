# ChatGo - Real-Time Chat Application

A modern, professional chat application with real-time messaging, authentication, and image sharing.

![ChatGo App](./frontend/public/screenshot-for-readme.png)

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based login/signup
- ⚡ **Real-Time Messaging** - Instant chat with Socket.IO
- 🟢 **Online Status** - See who's online
- � **Image Sharing** - Send images via Cloudinary
- 🎨 **Professional UI** - Beautiful blue/gray design
- � **Responsive** - Works on all devices

## 🚀 Quick Start

### 1. Clone & Install

```bash
# Clone the repository
git clone <your-repo-url>
cd ChatGo

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Setup Environment Variables

Create `backend/.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
JWT_SECRET=your_strong_secret_key_here
CLIENT_URL=http://localhost:5173

# Image Upload (Cloudinary)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Optional: Email Service (Resend)
RESEND_API_KEY=your_resend_key
EMAIL_FROM=noreply@chatgo.com
EMAIL_FROM_NAME=ChatGo

# Optional: Rate Limiting (Arcjet)
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

### 3. Run the Application

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

Open `http://localhost:5173` in your browser.

## � Required Services

1. **MongoDB** - Get free database at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. **Cloudinary** - Get free account at [Cloudinary](https://cloudinary.com)

## 📝 Optional Services

- **Resend** - For welcome emails ([resend.com](https://resend.com))
- **Arcjet** - For rate limiting ([arcjet.com](https://arcjet.com))

## 🛠️ Tech Stack

**Frontend:**
- React + Vite
- Tailwind CSS + DaisyUI
- Zustand (State Management)
- Socket.IO Client

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- Socket.IO
- JWT Authentication
- Cloudinary (Image Upload)

## 📦 Production Deployment

See [Production Guide](./PRODUCTION.md) for detailed deployment instructions.

**Quick Steps:**
1. Update `NODE_ENV=production` in backend `.env`
2. Generate strong JWT secret
3. Update frontend API URLs
4. Build frontend: `npm run build`
5. Deploy backend (Render/Railway)
6. Deploy frontend (Vercel)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

MIT License - feel free to use this project for learning or personal use.

---

Made with ❤️ using React, Node.js, and Socket.IO

