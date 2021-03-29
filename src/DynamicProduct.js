import React from 'react'
import Product from './Product';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from "./StateProvider";
function DynamicProduct({ order }) {

    const [{ basket }, dispatch] = useStateValue();
    return (
       <div className='dp' >
        {order.basket?.map(item => (
                <Product
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))
        }
        </div> 

    )
}

export default DynamicProduct