import React from 'react'
import './ProductYouLove.css'
import { Link } from 'react-router-dom'

export const ProductYouLove = () => {
  return (
    <div>
        <div className='ourProducts'>
        <h1>products you will love</h1>


         <div className="products">
           <div className="imgbox">

            <Link to="/product">
            <img className=" imgHover" src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/blends-1.png.webp"/>
           
           <img 
        src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Frame-39.png.webp"  />
            </Link>

           </div>
           <div className="content">
           <h1>blended species </h1>
            <p>nothing can beat the dellicies taste of traditional indian species banded ,everest's range of blended species are hand - crafted & the ingradients are sourced from india's renowened spice lands , ensuring the taste ,aroma , flavour , &color remain uncompromissed. </p>
           </div>
         </div>

         <div className="products reverseColumn" >
           <div className="content">
           <h1>pure spices</h1>
           <p>At <span>mahak mashale </span>, we take pride in bringing you a premium selection of pure spices that redefine the essence of culinary excellence. Our commitment to quality and authenticity sets us apart as your trusted source for the finest spices that elevate every dish to a masterpiece.</p>
           </div>
<div className="imgbox">

<Link to="/product">
<img className=" imgHover"   src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/pures-1-3.png.webp" alt="" />
           <img  className="pure_spices  "
       src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Frame-48.png.webp"  />
       </Link>
</div>
 </div>

    <div className="products">   
      <div className="imgbox">
      <Link to="/product">
      <img className=" imgHover" src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/hings-1-1-2-1.png.webp" alt="" />
            <img  className="asafoetida"
           src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Frame-49.png.webp" alt="" />
           </Link>
      </div>
        <div className="content">
        <h1>asafoetida </h1>
            <p>Embark on a flavorful journey with <span>mahak mashale</span> Asafoetida. Whether you're a seasoned chef or a home cook, our Asafoetida promises to be the secret ingredient that transforms your recipes into culinary masterpieces. </p>
        </div>
         </div>

         <div className="products reverseColumn" >
    <div className="content">
    <h1>exotic range </h1>
           <p>At <span>mahak mashale</span> Make every meal a masterpiece with the royal touch of <span>mahak mashale </span> Kesar. Whether you're crafting a special occasion dish or simply elevating your daily culinary creations, our saffron promises an unparalleled experience.
            <br />
Discover the richness, aroma, and flavor of premium Kesar with <span>mahak mashale </span>. Because when it comes to saffron, we believe in delivering nothing less than perfection.</p>
    </div>
    <div className="imgbox">
    <Link to="/product">
    <img className=" imgHover" src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/homeextoicrange-1-1.png.webp" />
           <img 
           className="exotic_range" src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Frame-50.png.webp" />
           </Link>
    </div>
         </div>


         <div className="products">
<div className="imgbox"> 
<Link to="/product">        
<img className=" imgHover" src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/pastes-1-2.png.webp" alt="" />
            <img  className="paste" src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Frame-40.png.webp" alt="" />
    </Link>
</div>
  <div className="content">
  <h1>paste </h1>
            <p>Make cooking a joyous experience with the convenience and quality of <span>mahak mashale</span> Ginger Garlic Paste. Whether you're a seasoned chef or a home cook, our paste is designed to enhance your culinary creations with the authentic taste of ginger and garlic. </p>
  </div>
         </div>

            </div>
       </div>
  )
}
