export const ProductsList = () => {
  const products = [
    { id: 1, imgSrc: "./imagenes/pr1.png", alt: "Manzana", name: "Producto 1", price: 15.00 },
    { id: 2, imgSrc: "./imagenes/pr2.png", alt: "Naranja", name: "Producto 2", price: 24.00 },
    { id: 3, imgSrc: "./imagenes/pr3.png", alt: "Mora azul", name: "Producto 3", price: 94.00 },
    { id: 4, imgSrc: "./imagenes/pr4.png", alt: "fruta", name: "Producto 4", price: 54.00 },
    { id: 5, imgSrc: "./imagenes/pr5.png", alt: "Platano", name: "Producto 5", price: 14.00 },
    { id: 6, imgSrc: "./imagenes/pr6.png", alt: "Hamburguesa", name: "Producto 6", price: 200.00 },
    { id: 7, imgSrc: "./imagenes/pr7.png", alt: "Verdura", name: "Producto 7", price: 61.00 }, 
    
  ];

  return (
    <div>
      <h2>Productos destacados</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

