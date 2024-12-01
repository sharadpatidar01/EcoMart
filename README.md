# 🛒 EcoMart (E-Commerce Website) 

This project is a fully functional **E-Commerce Website** designed for small business owners. The platform enables users to view, search, and purchase products online while allowing shop owners to manage their products, orders, and customer information. Secure user authentication, product management, and integrated payment methods ensure an optimal user experience.

I contributed by developing both the **front-end** and **back-end** functionalities. My key contributions include:

1. **Front-end Development**: I built a responsive user interface using **React** where customers can browse products, view details, add items to the cart, and proceed with secure checkout. I also integrated **Redux Toolkit** to manage the application's state efficiently.

2. **Back-end Development**: I implemented the back-end using **Node.js** and **Express**, designing RESTful APIs for managing user authentication (JWT-based), product listings, orders, and inventory management. I used **MongoDB** as the database for storing user, product, and order data.

3. **Payment Integration**: I integrated the **Braintree API** to handle secure online payments, ensuring a smooth and safe checkout experience for users.

4. **Cloudinary Integration**: I incorporated **Cloudinary** for product image storage, allowing shop owners to upload and manage images easily.

5. **Admin Dashboard**: I developed the admin panel for managing products and tracking customer orders, giving shop owners control over their business operations.

6. **Email Notifications**: I set up email notifications using **Nodemailer** to send order confirmations and password reset links to users.

These contributions helped create a robust, scalable platform that small business owners can use to expand their sales and manage their operations effectively.

## 🌐 Live Demo

Check out the live demo here: [EcoMart - Live Demo](https://ecomartindia.vercel.app/)

## 📊 Flowchart Overview

Below are flowcharts depicting the frontend and backend structures, outlining how users interact with the website and how the system handles data:

### Frontend Structure:

```plaintext
Frontend
|
|--- Authentication
|    |--- Login
|    |--- Register
|    |--- Forgot Password
|
|--- Product Management
|    |--- Create Product
|    |--- Update Product
|    |--- Delete Product
|    |--- View Products
|         |--- Search Products
|         |--- Filter by Category
|         |--- Pagination
|
|--- Dashboard
|    |--- Product Overview
|    |--- Stock Levels
|    |--- Sales Analysis
|
|--- User Interface Components
     |--- Header
     |--- Footer
     |--- Navigation Bar
     |--- Side Menu
```

### Backend Structure:

```plaintext
Backend
|
|--- Authentication (JWT)
|    |--- User Login
|    |--- User Registration
|    |--- Password Recovery
|    |--- Token Validation
|
|--- Product Management (CRUD)
|    |--- Create Product (POST)
|    |--- Update Product (PUT)
|    |--- Delete Product (DELETE)
|    |--- Fetch Products (GET)
|         |--- Search Products (GET with query)
|         |--- Filter Products by Category
|         |--- Paginate Results
|
|--- Order Processing
|    |--- Create Order
|    |--- Update Order
|    |--- Cancel Order
|    |--- Fetch Orders
|
|--- User Management
|    |--- Create User
|    |--- Update User
|    |--- Delete User
|    |--- View User Profile
```

## 📷 Admin Screenshots

1. **Dashboard (Admin)**  
   ![Admin Dashboard](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/dashboard.png)
   
2. **Create Category**  
   ![CreateCategory](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/CreateCategory.png)
   
3. **Create Product**  
   ![Create Product](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/CreateProduct.png)
   
## 📷 User Screenshots

Here are some screenshots that illustrate the journey through the website:

1. **Home Page**  
   ![Home Page](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/Home.png)

2. **Register Page**  
   ![Register Page](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/Register.png)

3. **Login Page**  
   ![Login Page](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/Login.png)

4. **Search Functionality**  
   ![Search Functionality](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/Search.png)

5. **Product Details Page**  
   ![Product Details Page](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/ProductDetails.png)

6. **Cart and Payment Page**  
   ![Cart and Payment Page](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/cart.png)
   
7. **Category Selected Product View**  
   ![Category Selected Product View](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/Categories.png)
   
8. **Price Filter Page**  
   ![Price Filter Page](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/Price_filter.png)
   
9. **All Categories Page**  
   ![All Categories Page](https://github.com/sharadpatidar01/EcoMart/blob/main/Screenshots/AllCategories.png)


## 🛠️ Technologies Used

### Frontend:
- **React**: Building a responsive and dynamic user interface.
- **React Router**: For navigation between pages.
- **Redux Toolkit**: For state management and data sharing between components.
- **Axios**: For making API requests to the backend.
- **React Icons**: For adding user-friendly icons.
- **React Toastify**: For displaying alerts and messages.
- **React Paginate**: For implementing pagination in product views.

### Backend:
- **Node.js & Express**: For building RESTful APIs and managing server-side logic.
- **MongoDB**: NoSQL database used to store product, order, and user data.
- **JWT (JSON Web Token)**: For securing authentication and authorization.
- **Multer**: For handling file uploads (such as product images).
- **Cloudinary**: For storing and managing images.

## 📥 Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ecommerce-website.git
   cd ecommerce-website
   ```

2. **Install dependencies for both the frontend and backend:**

   ```bash
   npm install
   cd client
   npm install
   ```

3. **Set up your environment variables:**

   - Create a `.env` file in the root directory.
   - Add the following keys:

     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     EMAIL_USER=your_email_service_username
     EMAIL_PASS=your_email_service_password
     ```

4. **Run the application:**

   ```bash
   npm run dev
   ```

   Navigate to `http://localhost:3000` to view the website locally.

## 📝 Features

### User-Facing Features:
- **Product Listings**: Users can browse products, filter by categories, and search using keywords.
- **Secure Authentication**: JWT-based login and registration for both customers and admins.
- **Shopping Cart**: Add, remove, and update items in the cart.
- **Checkout**: Complete orders securely with order summaries and payment processing.
- **Responsive UI**: Fully responsive design, ensuring the site looks good on mobile and desktop devices.

### Admin Features:
- **Product Management**: Admins can add, update, and delete products.
- **Order Management**: View all placed orders, update order statuses, and manage customer information.
- **Sales Dashboard**: Provides insights into sales trends, stock levels, and top-selling products.

### Other Features:
- **Image Upload**: Upload product images using Cloudinary.
- **Email Notifications**: Customers and admins receive email notifications for order updates and password recovery.

## 🛠️ API Endpoints

### Authentication:
- `POST /api/auth/login`: User login.
- `POST /api/auth/register`: User registration.
- `POST /api/auth/forgot-password`: Request password reset.

### Products:
- `GET /api/products`: Get all products.
- `POST /api/products`: Add a new product (Admin only).
- `PUT /api/products/:id`: Update product information (Admin only).
- `DELETE /api/products/:id`: Delete a product (Admin only).

### Orders:
- `GET /api/orders`: Get all orders (Admin only).
- `POST /api/orders`: Place a new order.
- `PUT /api/orders/:id`: Update order status (Admin only).

## 📧 Contact

For any questions or feedback, feel free to reach out:

- **Email**: [patidarsharad01@gmail.com](mailto:patidarsharad01@gmail.com)
- **LinkedIn**: [Sharad Patidar](https://www.linkedin.com/in/sharadpatidar/)

## 💻 Developer

This project is developed and maintained by **Sharad Patidar**. I am passionate about creating digital solutions that help businesses optimize their operations.

Thank you for checking out this project! I hope it proves useful for managing your inventory. 😊✨
