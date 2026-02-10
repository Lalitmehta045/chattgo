# ChatGo - Real-time Chat Application

A full-stack real-time chat application built with the MERN stack. Users can sign up, chat with others in real-time, and share images.

## Live Demo

- **Frontend**: [https://chattgo.vercel.app](https://chattgo.vercel.app)
- **Backend**: [https://chattgo.onrender.com](https://chattgo.onrender.com)

## Features

- User authentication (signup/login)
- Real-time messaging with Socket.IO
- Image sharing with Cloudinary
- Online/offline user status
- Profile picture updates
- Responsive design

## Tech Stack

**Frontend:**
- React + Vite
- Zustand (state management)
- Socket.IO client
- Axios
- React Hot Toast

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- Socket.IO
- JWT authentication
- Cloudinary (image storage)
- Bcrypt (password hashing)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB account
- Cloudinary account

### Installation

1. Clone the repository
```bash
git clone https://github.com/Lalitmehta045/chattgo.git
cd ChatGo
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
JWT_SECRET=your_jwt_secret
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email
EMAIL_FROM_NAME=ChatGo
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Running Locally

1. Start the backend server
```bash
cd backend
npm run dev
```

2. Start the frontend (in a new terminal)
```bash
cd frontend
npm run dev
```

The app will be running at `http://localhost:5173`

## Deployment

**Backend**: Deployed on Render  
**Frontend**: Deployed on Vercel  
**Database**: MongoDB Atlas

## Screenshots

![Chat Interface](https://via.placeholder.com/800x400?text=Chat+Interface)

## Contributing

Feel free to fork this project and submit pull requests!

## License

MIT

## Author

Lalit Mehta
