import React, { useState } from 'react';
import './ProductPage.css';
import { products } from '../../../../db/products.json'; // Import product data from file

export const ProductPage = () => {
  const [state, setState] = useState(products); // Directly use imported products data
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const categories = [
    { name: 'Asafoetida', value: 'Asafoetida', imageUrl: 'https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Frame-49.png.webp' },
    { name: 'BlendedSpices', value: 'BlendedSpices', imageUrl: 'https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Frame-39.png.webp' },
    { name: 'ExoticRange', value: 'ExoticRange', imageUrl: 'https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Frame-50.png.webp' },
    { name: 'Paste', value: 'Paste', imageUrl: 'https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Frame-40.png.webp' },
    { name: 'PureSpices', value: 'PureSpices', imageUrl: 'https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/12/Frame-39.png.webp' }
  ];

  const handleCategoryClick = (categoryValue) => {
    const filteredProducts = categoryValue
      ? products.filter(product => product.title === categoryValue)
      : products;

    setState(filteredProducts);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (err) {
    return <div>Please refresh the page...</div>;
  }

  return (
    <div className='productpage'>
      <div className='imageclick'>
        {categories.map((cate) => (
          <div className='productfilter' key={cate.value}>
            <img
              className='clickimgproduct'
              src={cate.imageUrl}
              alt={cate.name}
              onClick={() => handleCategoryClick(cate.name)}
            />
            <p className='nameOfProducts'>{cate.name}</p>
          </div>
        ))}
      </div>
      <h1 className='productheadingonui'>Products</h1>
      <div className='productonUI'>
        {state && state.map((ele) => (
          <div key={ele.id} className='productonUIinner'>
            <img className='imageofproducts' src={ele.image} alt='' />
            <p className='productTitle'>{ele.title}</p>
            <p className='productNAME'>{ele.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
