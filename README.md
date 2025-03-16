# 🔐 User Authentication and Authorization with Bearer Token

![Node.js](https://img.shields.io/badge/Node.js-v20.x-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-v4.x-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-v7.x-blue?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-v9.x-yellow?logo=json-web-tokens)
![Git](https://img.shields.io/badge/Git-v2.x-orange?logo=git)
![Postman](https://img.shields.io/badge/Postman-v10.x-orange?logo=postman)
![bcryptjs](https://img.shields.io/badge/bcryptjs-v2.x-blue)
![dotenv](https://img.shields.io/badge/dotenv-v16.x-green)

A simple and secure **Node.js** application for user authentication and authorization using **Bearer tokens**. Built with **Express.js**, **Mongoose** (for MongoDB), and **JSON Web Tokens (JWT)**. Follows the **MVC (Model-View-Controller)** pattern and includes detailed API documentation.

---

## 🚀 Features

- **User Registration**: Users can register with a username, email, and password.
- **User Login**: Users can log in with their email and password to receive a JWT.
- **Protected Route**: A route to fetch user information is protected using JWT authentication.
- **Password Hashing**: User passwords are securely hashed using `bcrypt` before being stored in the database.
- **API Documentation**: Detailed documentation for each API endpoint is provided.

---

## 📚 API Documentation

### Endpoints

| Endpoint               | Method | Description                | Request Body                                                                 |
|------------------------|--------|----------------------------|------------------------------------------------------------------------------|
| `/api/auth/register`   | POST   | Register a new user        | `{ "username": " ", "email": " ", "password": " " }, "role":" "` |
| `/api/auth/login`      | POST   | Login an existing user     | `{ "email": " ", "password": " " }`                     | 
| `/api/auth/getUser`        | GET    | Get logged-in user's details | None (Requires `Authorization: Bearer <token>` header)                       
 
---

## 🛠️ Tech Stack

- **Backend**: ![Node.js](https://img.shields.io/badge/Node.js-v20.x-green?logo=node.js) ![Express.js](https://img.shields.io/badge/Express.js-v4.x-lightgrey?logo=express)
- **Database**: ![MongoDB](https://img.shields.io/badge/MongoDB-v7.x-blue?logo=mongodb)
- **Authentication**: ![JWT](https://img.shields.io/badge/JWT-v9.x-yellow?logo=json-web-tokens)
- **Password Hashing**: ![bcrypt](https://img.shields.io/badge/bcryptjs-v2.x-blue)
- **Environment Management**: ![dotenv](https://img.shields.io/badge/dotenv-v16.x-green)
- **API Testing**: ![Postman](https://img.shields.io/badge/Postman-v10.x-orange?logo=postman)

---
