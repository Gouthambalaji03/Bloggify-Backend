# Bloggify Backend

A Node.js/Express REST API backend for a blogging platform with user authentication, post management, image uploads, and admin approval workflow.

## Tech Stack

- **Runtime:** Node.js with ES Modules
- **Framework:** Express.js 5.x
- **Database:** MongoDB Atlas with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens) + Bcrypt
- **File Upload:** Multer + Cloudinary
- **Email:** Nodemailer (Gmail SMTP)

## Project Structure

```
Bloggify Backend/
├── Config/
│   ├── Cloudinary.js       # Cloudinary configuration
│   └── Multer.js           # Multer storage setup
├── Controllers/
│   ├── authController.js   # Auth logic (register, login, password reset)
│   └── postController.js   # Post CRUD operations
├── Database/
│   └── dbConfig.js         # MongoDB connection
├── Middleware/
│   └── Middleware.js       # Auth & admin middleware
├── Models/
│   ├── userModel.js        # User schema
│   └── postModel.js        # Post schema
├── Routes/
│   ├── authRoute.js        # Auth endpoints
│   └── postRoute.js        # Post endpoints
├── Utils/
│   └── mailer.js           # Email utility
└── index.js                # Entry point
```

## Features

- **User Authentication** - Register, login, JWT-based sessions
- **Password Reset** - Email-based password recovery with expiring tokens
- **Post Management** - Create posts with images, title, and description
- **Admin Approval** - Posts require admin approval before public visibility
- **Image Upload** - Direct upload to Cloudinary (JPG, JPEG, PNG, GIF)
- **Role-Based Access** - User and Admin roles with protected routes

## API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/register` | Register new user | No |
| POST | `/login` | Login user | No |
| POST | `/forgot-password` | Request password reset email | No |
| POST | `/reset-password/:id/:token` | Reset password with token | No |

### Posts (`/api/post`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/create` | Create new post with image | User |
| GET | `/get` | Get all approved posts | No |
| GET | `/unapprovedPost` | Get unapproved posts | Admin |
| PATCH | `/:id/approve` | Approve a post | Admin |
| DELETE | `/delete/:id` | Delete a post | Admin |

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PASS_MAIL=your_gmail_address
PASS_KEY=your_gmail_app_password
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/bloggify-backend.git
cd bloggify-backend
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables (see above)

4. Run the server
```bash
# Development
npm run dev

# Production
npm start
```

## Database Models

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: 'user' | 'admin',
  token: String
}
```

### Post
```javascript
{
  title: String,
  description: String,
  image: String (Cloudinary URL),
  approved: Boolean,
  user: ObjectId (ref: User),
  timestamps: true
}
```

## Dependencies

| Package | Purpose |
|---------|---------|
| express | Web framework |
| mongoose | MongoDB ODM |
| jsonwebtoken | JWT authentication |
| bcrypt | Password hashing |
| cloudinary | Cloud image storage |
| multer | File upload handling |
| multer-storage-cloudinary | Cloudinary storage engine |
| nodemailer | Email service |
| cors | Cross-origin requests |
| dotenv | Environment variables |
| nodemon | Development auto-reload |

## Author

**Goutham Balaji P S**

## License

ISC
