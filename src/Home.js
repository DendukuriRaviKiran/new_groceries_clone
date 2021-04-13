import React , { useState, useEffect } from 'react';
import './Home.css';
import Product from './Product';
import DynamicProduct from './DynamicProduct';
import home_backgroundImage from './images/home_backgroundImage.jpg';
import maggipack from './images/maggi_fivepack.png';
import colgatemaxfresh from './images/colgate_maxfresh_tenpack.png';
import dovesoap from './images/dovesoap.png';
import tomatoes from './images/tomato_250gm.png';
import bananas from './images/banana_dozen.png';
import atta from './images/atta_bigbag.png';
import { useStateValue } from "./StateProvider";
import Popup from './Popup';
import { db } from "./firebase";
function Home() {
  /////////////////////////////////////////////////////
  const [bachupally,setBachupally]=useState([]);
  const [loading, setLoading] = useState(false);
  const ref = db.collection("sample");
  const [timedPopup,setTimedPopup] = useState(false);
  ////
  
  ////
  function getSchools() {
    setLoading(true);
    ref.onSnapshot( (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setBachupally(items);
      setLoading(false);
      ///
      ///
    });
  } 
  useEffect(() => {
    getSchools();
    setTimeout(() => {
      setTimedPopup(true);
    },3000);
  },[]);
  if (loading) {
    return <h1>Loading </h1>
  }
  /////////////////////////////////////////////////////
    return (
        <div className='home'>
            <div className='home_container'>
                {/* Later dont forget to replace this Image with your Team Name
                  Dipshit Name: Pocket mein Rocket BC*/}
                <img className='home_image'
                     src={home_backgroundImage} alt='Logo'/>

            <div className="home_row">
                <Product
                    id="123213566699"
                    title="Nestle Maggi 5 Pack "
                    price={60}
                    rating={5}
                    image="https://image.shutterstock.com/image-photo/bangsar-malaysia-january-30th-2020-260nw-1630199971.jpg"
                    //{maggipack}
                />
                <Product
                    id="49538094"
                    title="Colgate Max Fresh 10 Pack"
                price={200}
                rating={4}
                image={colgatemaxfresh}
                />
            </div>
            <div className="home_row">
              <Product
                id="4903850"
                title="Dove Soap"
                price={20}
                rating={3}
                image={dovesoap}
                />
              <Product
                id="23445930"
                title="Fresh Tomatoes 250 Grams"
                price={50}
                rating={5}
                image={tomatoes}
               />
              <Product
                id="3254354345"
                title="Banana One Dozen (12) Pack"
                price={100}
                rating={4}
                image={bananas}
              />
            </div>
            <div className="home_row">
                
              <Product
                    id="90829332"
                    title="Ashirvaad Atta 1 KG Bag"
                    price={500}
                    rating={4}
                    image={atta}
                />
            </div>   
            <div className="home_man">
            {bachupally.map((bachu) => (
                <Product

                    id={bachu.id}
                    title={bachu.title}
                    price={bachu.price}
                    rating={bachu.rating}
                    image={bachu.image}                  
                />
                ))
              }
            </div>
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}> 
        <h3>Instructions to Site</h3>
        <p>
          1. Click on Sign In and complete sign up 
          2. Order Desired Items Like how you would do in real life feel free to go down the items as you have more
          better chance to win for unique items.
          3. Click the basket icon 
          4. Proceed to checkout 
          5. Pay with free credits and leave
        </p>
      </Popup>
          </div>
        </div>
    )
}

export default Home
