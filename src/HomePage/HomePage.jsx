import React from 'react'
import './HomePage.css'
import { Link } from "react-router-dom";
import { LowerHeader } from '../Components/Header/LowerHeader/LowerHeader'
import { About_pic } from '../Components/BodyPart/information_abotPage/About_pic';
import {ProductYouLove} from '../Components/BodyPart/ProductYouLove/ProductYouLove.jsx'
import { AcrossAllOverUser } from '../Components/BodyPart/acrossAllOverUser/AcrosAllOverUser.jsx';
import {SubScribePage} from '../Components/BodyPart/SubScribePage/SubScribePage.jsx'



export const HomePage = () => {
  return (

    <div>
<section className='lowerhead'>
<LowerHeader/>
</section>

<section className='About_pic'>
  <About_pic/>
</section>
<section className='product_you_love'>
  <ProductYouLove/>
</section>
<section className='acrossalloveruser'>
  <AcrossAllOverUser/>
</section>

<section className='recipes' >
  <div className="recipeeForYou">
<Link to='/bhindi'>
<img src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/BhindiOkra-ki-Sabji-b-min-1920x1281-1.jpg.webp" alt="" />
<h1>bhindi/okara ki <br /> sabji</h1>
</Link>
<Link to='/chatpataaconechat'>
  <img src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/Chatpata-Cone-Chaat-min-1920x1281-1.jpg.webp" alt="" />
  <h1>chatpataa <br />cone chat</h1>
</Link>
<Link to='/fruitchaat'>
<img src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/Fruit-Chaat-min-1920x1281-1.jpg.webp" alt="" />
<h1>fruit chat</h1>
</Link>
<Link to='/mixvegitable'>
<img src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Mix-Vegetable-min-1920x1281-1.jpg.webp" alt="" />
<h1>mix vegitable</h1>
</Link>
<Link to='/rasamrice'>
<img src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Rasam-Rice-1920x1281-1.jpg.webp" alt="" />
<h1> rasam rice</h1>
</Link>
<Link to='/tondoorilufiflower'>
<img src="https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/Tandoori-Cauliflower-min-1920x1281-1.jpg.webp" alt="" />
<h1>tandoori<br /> cauliflower</h1>
</Link>
</div>
</section>

<section className="subscribe_page">
  <SubScribePage/>
</section>





    </div>
  )
}
