# E-Commerce Platform

A full-stack E-Commerce web application built with **Next.js, TypeScript, Express.js, MongoDB, Better Auth, and Gemini AI**. The platform allows users to browse products, manage carts, place orders, and generate AI-powered product descriptions.

## Live Demo

### Frontend

Add your deployed frontend URL here.

### Backend

Add your deployed backend URL here.

---

# Features

## User Features

* Browse products with pagination
* Search products by name
* Filter products by category
* Sort products by price and name
* View detailed product information
* Add products to cart
* Update cart quantity
* Remove items from cart
* Checkout and place orders
* User authentication with Better Auth
* Protected routes for authenticated users

## Admin Features

* Add new products
* Manage product inventory
* Generate AI-powered product descriptions

## AI Features

### AI Product Description Generator

Generate professional product descriptions using Google Gemini AI.

Users can customize:

* Product Name
* Category
* Keywords
* Tone
* Description Length

---

# Tech Stack

## Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* HeroUI
* Better Auth
* Fetch API

## Backend

* Node.js
* Express.js
* TypeScript
* MongoDB Native Driver
* Better Auth JWT Verification
* Google Gemini AI

## Database

* MongoDB Atlas

---

# Project Structure

## Frontend

```bash
src
│
├── app
│   ├── page.tsx
│   ├── shop
│   ├── products
│   ├── cart
│   ├── checkout
│   ├── login
│   ├── registration
│   ├── add-product
│   └── order-success
│
├── components
│   ├── Navbar
│   ├── Footer
│   ├── ProductCard
│   ├── ProductGrid
│   ├── ShopSidebar
│   └── AIContentGenerator
│
├── service
│   ├── productService
│   ├── cartService
│   ├── orderService
│   └── aiService
│
├── lib
│   ├── auth
│   ├── auth-client
│   └── proxy
│
└── types
```

## Backend

```bash
server
│
├── index.ts
├── middleware
│   └── verifyToken
│
├── collections
│   ├── products
│   ├── cart
│   └── orders
│
└── routes
```

---

# API Endpoints

## Products

### Get All Products

```http
GET /products
```

### Get Product Details

```http
GET /products/:id
```

---

## Cart

### Add To Cart

```http
POST /cart
```

### Get Cart Items

```http
GET /cart
```

### Update Quantity

```http
PATCH /cart/:id
```

### Remove Product

```http
DELETE /cart/:id
```

---

## Orders

### Place Order

```http
POST /orders
```

Protected Route

Requires Authentication

---

## AI Content Generator

### Generate Product Description

```http
POST /ai/generate-content
```

Protected Route

Requires Authentication

---

# Environment Variables

## Frontend

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_APP_URL=
BETTER_AUTH_URL=
BETTER_AUTH_SECRET=
```

## Backend

```env
PORT=5000

MONGO_DB_URI=

CLIENT_URL=

GEMINI_API_KEY=
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Frontend Setup

```bash
cd ecommerce-client

npm install

npm run dev
```

## Backend Setup

```bash
cd ecommerce-server

npm install

npm run dev
```

---

# Authentication

This project uses Better Auth for authentication and authorization.

Features:

* Login
* Registration
* Session Management
* Protected Routes
* JWT Verification
* Role-based Extension Ready

---

# AI Integration

Google Gemini AI is integrated to generate:

* Product Descriptions
* Marketing Content
* Product Copy

Model Used:

```text
gemini-2.0-flash
```

---

# Future Improvements

* Wishlist System
* Product Reviews & Ratings
* Payment Gateway Integration
* Admin Dashboard
* Inventory Management
* Order Tracking
* User Profile Management
* Recommendation Engine
* Sales Analytics

---

# Author

Jannatul Ferdous

Full Stack Developer

* GitHub: https://github.com/FerdousMunmun
* LinkedIn: Add your LinkedIn URL
* Portfolio: Add your Portfolio URL

---

# License

This project is licensed under the MIT License.
