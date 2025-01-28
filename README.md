Key React Skills and Development Tools Applied:
React Fundamentals
•	Component-Based Architecture – Structure the app using reusable components (Header, ProductList, Cart).
•	State Management (useState) – Manage the shopping cart state inside AppProvider.
React Context API
•	Global State Management (createContext, useContext) – Share the cart state and functions (addToCart, removeFromCart) across the app without prop drilling.
React Router (react-router-dom)
•	Client-Side Routing (Routes, Route, Link) – Navigate between the product list and cart pages.
•	Programmatic Navigation (useNavigate) – Redirect users after checkout.
Prop Validation (prop-types)
•	Ensuring Type Safety (PropTypes.node.isRequired) – Enforce that AppProvider requires children.
List Rendering & Keys
•	Rendering (map) – Iterate over products and cart to display items.
•	Using Unique Keys (key={product.id}) – Essential for React’s reconciliation process.
Event Handling & User Interaction
•	Button Click Handlers (onClick) – Handle adding/removing items and simulating checkout.
•	Updating State Based on User Actions (setCart) – Modify the cart dynamically.
Styling
•	Component Styling with CSS Classes – Use .header, .product-list, .cart-item, etc.
Basic E-Commerce Functionality
•	Product Display
•	Add/Remove Items from Cart
•	Checkout Process Simulation (alert())
