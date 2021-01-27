import React, { useState, useEffect } from 'react';
import Commerce from '@chec/commerce.js';
// Let's get started by creating a new Commerce instance!
const commerce = new Commerce('pk_2226440c61104b1d7169a39335bed242ff540adcdfd78', true);

const App = () => {
  // This variable will hold our products data
  const [product, setProduct] = useState([]);
  const regex = /(<([^>]+)>)/gi;
  // Fetches data from the Chec API to the "product" variable
  useEffect(() => {
    commerce.products.list().then(result => {
      setProduct(result.data.map(product => product));
    });
  }, []);

  console.log('Commerce Product: ', product);

  return (
    <section className='product-list'>
      {/* Iterate through our product array and return/render it out onto our page */}
      {product.map((product, index) => (
        // Product box that holds our product information
        <div key={index} className='product'>
          {/* Image of your product */}
          <div className='product-image'>
            <img
              alt={product.name}
              srcSet={product.media.source}
              className='img'
            />
          </div>
  
          {/* Product details (name, description, and price) */}
          <div className='product-detail'>
            {/* Product name */}
            <h2 className='title'>{product.name}</h2>  
            {/* Product description */}
            <p className='description'>
            {/* Remember we added a helper function at the top of the file? This regex helps render this expression into a regular string without the HTML element tags. */}
                {     product.description.replace(regex, '')   }
            </p>
  
            {/* Displays price formatted with symbol($10.00) */}
            <p className='price'>{product.price.formatted_with_symbol}</p>
            <section>
            <a href={product.checkout_url.display} className='btn'>
                        Avail Service
            </a>
            </section>
          </div>
        </div>
      ))}
    </section>
  );
};

export default App;