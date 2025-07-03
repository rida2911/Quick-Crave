#  QuickCrave – Online Food Ordering System

QuickCrave is a web application that allows users to browse a dynamic menu, add items to the cart, place online orders, and manage them via an intuitive admin panel.

---

##  Features

###  User Side
- View food menu with categories (Salads, Rolls, Cakes, etc.)
- Add/remove items from cart
- Place an order with delivery details
- Responsive UI for mobile and desktop
- Beautiful product images and descriptions

###  Admin Panel
- Add/Edit/Delete food items
- Manage customer orders
- View analytics (total sales, orders, etc.)

---

##  Tech Stack

| Tech         | Description                                  |
|--------------|----------------------------------------------|
| React        | Frontend (with Vite for fast bundling)       |
| Node.js      | Backend runtime environment                  |
| Express.js   | Backend web framework                        |
| MongoDB      | NoSQL database for storing food & orders     |
| Mongoose     | MongoDB ODM for Node.js                      |
| Multer       | For handling image uploads                   |
| JWT          | JSON Web Tokens for user authentication      |
| Axios        | API requests                                 |
| Stripe       | (Optional) Payment integration (future use)  |

---

##  Installation

### 1. Clone the repositories
```bash
    git clone https://github.com/rida2911/Quick-Crave
```
Go to the project directory

```bash
    cd Food-Delivery
```
Install dependencies (frontend)

```bash
    cd frontend
    npm install
```
Install dependencies (admin)

```bash
    cd admin
    npm install
```
Install dependencies (backend)

```bash
    cd backend
    npm install
```

Setup Environment Vaiables

```Make .env file in "backend" folder and store environment Variables
 PORT=4000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret_key

 ```

## Contributing

Contributions are always welcome!
Just raise an issue, and we will discuss it.

## Feedback

If you have any feedback, please reach out to me [here](https://www.linkedin.com/in/rida-jahan)






