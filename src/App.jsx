import { useState } from 'react';
import './Cart';
import './ContactComponent';
import './FooterComponent';
import './InformationContainer';
import './OffersContainer';
import './ProductsList';
import './ServiceComponent';
import './style.css';


import carImage from './imagenes/car.svg';
import logoImage from './imagenes/logo.jpg';
import menuImage from './imagenes/menu.png';
import rightImage from './imagenes/rigth.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    if (cartItems.includes(productId)) {
      alert('Este producto ya está en el carrito.');
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, productId]);
      alert('Producto agregado al carrito.');
    }
  };

  const clearCart = () => {
    setCartItems([]);
    alert('Carrito vaciado.');
  };

  return (
    <div>
      <ul>
        <li className="submenu"></li>
        <img src={carImage} id="img-carrito" alt="icon carrito" />
        <div id="carrito">
          <table id="lista-carrito">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((productId) => (
                <tr key={productId}>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => addToCart()} className="btn-2">
            Agregar Producto(prueba)
          </button>
          <a href="#" onClick={clearCart} className="btn-2">
            Vaciar Carrito
          </a>
        </div>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="menu container">
        <a href="#" className="logo">
          <img src={logoImage} alt="logo" />
        </a>
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img src={menuImage} alt="menu" />
        </label>
        <Navbar />
        <Cart />
      </div>
      <HeaderContent />
    </header>
  );
};

const HeaderContent = () => {
  return (
    <div className="header-content container">
      <div className="header-txt">
        <span>Ofertas</span>
        <h1>Frutas y verduras</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, earum laboriosam! Veritatis iure, vero iusto odit amet natus nisi quis veniam esse corrupti modi, voluptatum, consequatur omnis nesciunt dignissimos aliquam.
        </p>
        <a href="#" className="btn-1">Información</a>
      </div>
      <div className="header-img">
        <img src={rightImage} alt="Verduras" />
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
