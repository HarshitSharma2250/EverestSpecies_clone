import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footerPage'>
    <div className="Footerboxes">
        <div className="box1">
            <h1>Everest Food Products Pvt. Ltd.</h1>
            <address>Krushal Commercial Complex, G. M. Road, Amar Mahal, Chembur (West), Mumbai - 400 089.</address>
            <p>999....., 8510......</p>
            <div className="lower">
                <p>CIN: 8b924gkdsa023eknas432</p>
                <p>copyright &copy; 2023 MAHAK spices All rights reserved.</p>
            </div>
        </div>
        <div className="box2">
         <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
<i className="fab fa-instagram"></i>
</a>

<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
<i className="fab fa-facebook"></i>
</a>

<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
<i className="fab fa-twitter"></i>
</a>
        </div>
    </div>
</div>
  )
}
