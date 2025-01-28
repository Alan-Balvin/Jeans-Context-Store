import  { useState, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import PropTypes from "prop-types"
import "./App.css"; 

// Context hook
const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      let removed = false;
      return prevCart.filter((item) => {
        if (item.id === id && !removed) {
          removed = true; 
          return false; 
        }
        return true; 
      });
    });
  };

  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
// Sample data
const products = [
  {
    id: 1,
    name: "Slim Fit Jeans",
    price: 50,
    image:
      "https://i.pinimg.com/236x/e6/5d/f0/e65df0f422c8e77fba0e33b0b5393a03.jpg",
  },
  {
    id: 2,
    name: "Straight Fit Jeans",
    price: 30,
    image:
      "https://i.pinimg.com/736x/80/9f/35/809f35d530ee6d1db43e12a6c7687e93.jpg",
  },
  {
    id: 3,
    name: "Relaxed Fit Jeans",
    price: 20,
    image:
      "https://i.pinimg.com/736x/b5/cd/38/b5cd38308c51d488186a70c0721ab6fd.jpg",
  },
];

// Components
const Header = () => {
  const { cart } = useAppContext();
  return (
    <header className="header">
      <h1>Pants E-Commerce</h1>
      <Link to="/">Product List </Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </header>
  );
};

const ProductList = () => {
  const { addToCart } = useAppContext();
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const Cart = () => {
  const { cart, removeFromCart } = useAppContext();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Payment simulated! Thank you for your purchase.");
    navigate("/");
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item imag"
              />
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout} className="checkout-btn">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
