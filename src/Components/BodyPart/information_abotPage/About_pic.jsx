import React from 'react'
import './About_pic.css'
import { useState } from 'react'

export const About_pic = () => {


    const arrobj=[
        {
        pic:"https://www.everestgrp.com/wp-content/uploads/2016/08/Bendor-Samuel-Peter.jpg" ,
        name:'peter bendor',
        position:'founder & ceo'
        },
        {
        pic:"https://www.everestgrp.com/wp-content/uploads/2016/09/Arora-Jimit-B.jpg" ,
        name:'jimit arora',
        position:'partener'
        },
        {
        pic:"https://www.everestgrp.com/wp-content/uploads/2019/11/Blair_Patricia_Refresh-gray-square.jpg" ,
        name:'paticia balier',
        position:'Sr,Vice president'
        },
        {
        pic:"https://www.everestgrp.com/wp-content/uploads/2019/11/Boudrie_Elizabeth_2023.jpg" ,
        name:'elizabeth boudrie',
        position:'senior vice president'
        },
        {
        pic:"https://www.everestgrp.com/wp-content/uploads/2018/09/Charan_krishna.jpg" ,
        name:'krishna charan',
        position:'vice president'
        },
        {
        pic:"https://www.everestgrp.com/wp-content/uploads/2022/10/Goyal_Lokesh.jpg" ,
        name:'lokesh goyal',
        position:'practice director'
        },
        {
        pic:"https://www.everestgrp.com/wp-content/uploads/2019/04/Gupta_Vishal-Refresh-gray-square.jpg" ,
        name:'vishal gupta',
        position:'vice president'
        },
        {
        pic:"https://www.everestgrp.com/wp-content/uploads/2022/08/Meher_Samikshya.jpg" ,
        name:'samikchya mehar ',
        position:'practice director'
        },
        {
        pic:"https://www.everestgrp.com/wp-content/uploads/2023/09/Raina-Shikha.jpg" ,
        name:'shikha raina ',
        position:'practice director'
        },
        {
        pic:"https://www.everestgrp.com/wp-content/uploads/2017/02/Vijayan-Anil.jpg" ,
        name:'anil vijayan',
        position:'partner'
        },
        {
        pic:"https://www.everestgrp.com/wp-content/uploads/2021/04/Kumar-Santhosh.jpg" ,
        name:'samtosh kumar',
        position:'practice director'
        },
    ]
const[stateinfo,setStateinfo]=useState(arrobj)
    const[count,setcount]=useState(0)

    function Privious() {
      setcount((ele) => (ele - 1+11 ) % 11);
    }
    function Next() {
      setcount((ele) => (ele + 1) % 11);
    }




  return (
    <section className='container_content'>
    <div className="Movingcontent">
    Crafted with the finest selection of pure spices, our commitment to 100% purity ensures an exceptional culinary experience. Your trust fuels our passion for delivering uncompromising quality.
    </div>
    <hr />

<div className='About_pic_content'>


<div className="relative_pics">
  <button className='leftbtn' onClick={Privious}>prev</button>
  
  <div className="innercontentdata">

    <div className="box1">
  <img className="slide-image" src={stateinfo && stateinfo[count] && stateinfo[count].pic} alt=""/>

  <div className="contextinfo">
  <h1 className='name'>
    {stateinfo && stateinfo[count] && stateinfo[count].name}
  </h1>
  <p className='position'>
    {stateinfo && stateinfo[count] && stateinfo[count].position}
  </p>
  </div>
    </div>

<div className="box2">
  <img className="slide-image" src={stateinfo && stateinfo[count+1] && stateinfo[count+1].pic} alt=""/>

  <div className="contextinfo">
  <h1 className='name'>
    {stateinfo && stateinfo[count+1] && stateinfo[count+1].name}
  </h1>
  
  <p className='position'>
    {stateinfo && stateinfo[count+1] && stateinfo[count+1].position}
  </p>
  </div>
</div>
  
 
  </div>
   <button className='rightbtn' onClick={Next}> next </button>
  </div>

  <div className="aboutpage">
            <h1>about us</h1>
            <p>
            Mahak Species stands as a beacon of culinary excellence, curating a symphony of flavors that transcends ordinary dining experiences. Rooted in a commitment to quality and tradition, we take pride in offering a diverse range of spices that elevate every dish to a masterpiece. Our passion for authenticity and the finest ingredients drives us to craft blends that not only add richness to meals but also create lasting impressions. At Mahak Species, we believe in the transformative power of spices, turning ordinary moments into extraordinary memories. Embark on a gastronomic journey with us, where each spice tells a story, and every dish is a celebration of taste and heritage.
            </p>
          
           <button className='aboutpageButton'>learn more</button>
</div>

    </div>


    </section>
  )
}
