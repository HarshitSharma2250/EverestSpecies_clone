import React from 'react'
import './AcrossAllOverUser.css'

export const AcrossAllOverUser = () => {

    const arr=[
  
        {
          h2:'20 million',
          p:'Households use MAHAK products every day'
        },
        {
          h2:'3.705 billion',
          p:'Packs of Everest products are sold each year'
        },
        {
          h2:'6.2 lac',
          p:'Outlets sell Everest products across 1000 small towns and cities in India'
        },
        {
          h2:'80+',
          p:'Countries world wide products available'
        },
        {
          h2:'8 times',
          p:'The brand has achieved ‘Superbrand’ status eight times (2003, 2006, 2009, 2012, 2015, 2017, 2019 & 2021)'
        },
        {
          h2:'52+',
          p:'Pure and blended spices are part of Everest 200+ product range & sizes'
        }
      ]



  return (
    <div className='soldinginf'>
    <h1>A Taste Of Our Legacy!</h1>
<div className="containertinfo">
{arr.map((ele,index)=>(
<div key={index}>
  <h2>{ele.h2}</h2>
  <p>{ele.p}</p>
</div>
))}

    </div>
  </div>
)
}

