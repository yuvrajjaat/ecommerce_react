# Responsive React E-Commerce UI

This project is a responsive front-end application that simulates a simple e-commerce site using the FakeStore API. It features a modern UI with product listings, category search, product detail modals, and a dynamic cart indicator—all built with React, Redux, and Axios.

## 📸 Screenshots

### 1. Home Page
![Screenshot 2025-02-25 020250](https://github.com/user-attachments/assets/288d60fc-84ba-436e-ba1b-845dc78f8a74
)

### 2. Product Listing Page
![Screenshot 2025-02-25 020310](https://github.com/user-attachments/assets/5c8e8058-4ba1-43b3-8e2a-74980d47d4d2
)

### 3. Product Detailing
![Screenshot 2025-02-25 020330](https://github.com/user-attachments/assets/6dff87cc-74e5-497d-90de-0a51f0d42633
)

---

## Features

- **Responsive Design:**  
  The UI adapts smoothly across mobile, tablet, and desktop devices.

- **Dynamic Product Listing:**  
  All products are fetched from the FakeStore API and displayed in an attractive grid layout.

- **Category Search:**  
  Users can search for specific product categories using a search bar, which filters the displayed products.

- **Interactive Product Modal:**  
  Clicking on a product card opens a modal with detailed product information, including an image, description, and options to add the item to the cart.

- **Cart Functionality:**  
  A Redux-managed cart indicator in the header updates in real time as items are added.

- **Modern Styling:**  
  Uses modern CSS techniques (Flexbox, Grid, gradients, hover effects) for an engaging user experience.

---

## Technologies Used

- **Front-End:**  
  React, React Hooks, Redux, Axios, HTML5, CSS3

- **Build Tool:**  
  Create React App

- **Others:**  
  GitHub for version control

---

## Project Structure

```sh
react-ecommerce/
├── package.json
├── public/
│   └── index.html
└── src/
    ├── index.js
    ├── App.js
    ├── store.js
    ├── actions/
    │   └── cartActions.js
    ├── reducers/
    │   └── cartReducer.js
    ├── components/
    │   ├── Header.js
    │   ├── HeroSection.js
    │   ├── Features.js
    │   ├── ProductList.js
    │   ├── ProductCard.js
    │   ├── ProductModal.js
    │   └── Footer.js
    └── styles/
        └── App.css
```
---
## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yuvrajjaat/ecommerce_react.git
   cd ecommerce_react


2. **Install Dependencies:**
    Ensure you have Node.js installed, then run:

    ```bash
    npm install

3. **Run the Application:**
    Start the Development server with:

    ```bash
    npm start
    ```
    Open your browser and navigate to: http://localhost:3000
---
## 🔧 Improvements and Future Enhancements
- **Enhanced API Integration:**  
  Integrate with additional endpoints or implement advanced filtering and sorting for products.

- **User Authentication:**  
  Add user login, registration, and profile management for a complete e-commerce experience.

- **Advanced Cart Functionality:**  
  Expand the cart to include features like quantity updates, removals, and a checkout flow.

- **Accessibility Enhancements:**  
  Further improve the UI for better accessibility compliance (focus trapping in modals, ARIA labels, etc.).

- **Backend Integration:**  
  In a full-stack implementation, integrate with a backend to manage orders, user data, and payment processing.

---
## Contact
For any questions or feedback, feel free to reach out to [yuvrajsogarwal@gmail.com].
