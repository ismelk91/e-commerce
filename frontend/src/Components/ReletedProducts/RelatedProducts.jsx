import React, { useEffect, useState } from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'

const RelatedProducts = () => {

  const [relatedproducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
    .then((res) => res.json())
    .then((data) => setRelatedProducts(data));
  }, []);

  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {relatedproducts.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts