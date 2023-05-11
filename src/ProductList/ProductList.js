import React, { useState, useEffect } from 'react';
import './ProductList.css'
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='container'>
      <h1>Product List</h1>
      <div className='row'>
        {products.map((product) => (
          <div className='col-md-3 mb-3' key={product.id}>
            <div className='card h-100'>
              <img src={product.images[0]} className='card-img-top h-100 w-100'  style={{objectFit: 'cover'}} />
              <div className='card-body'>
                <h5 className='card-title'>{product.title}</h5>
                <div className='d-flex justify-content-between align-items-center'>
                  <h4 className='font-weight-bold'>${product.price}</h4>
                 <div> <i className='fas fa-shopping-cart mr-2 btn-cart btn fs-4'></i></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
