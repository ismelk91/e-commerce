import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import filter_icon from '../Components/Assets/filter_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <p>{props.text}</p>
        <div className="shopcategory-sort">
          Filter <img className='filter-icon' src={filter_icon} alt="" />
        </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Load More
      </div>
    </div>
  )
}

export default ShopCategory