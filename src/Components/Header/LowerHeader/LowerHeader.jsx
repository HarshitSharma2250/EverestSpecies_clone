import React from 'react'
import './LowerHeader.css'
import { useState , useEffect } from 'react'
export const LowerHeader = () => {
    
  let arr = [
    "https://media.istockphoto.com/id/1303873308/photo/garam-masala.jpg?s=612x612&w=0&k=20&c=WYJUE-NcP-hrWChWtdqYPXMBcbhzPVI0bsHlyEJ928E=",

    "https://media.istockphoto.com/id/915315364/photo/garam-masala-and-garam-masala-powder.jpg?s=612x612&w=0&k=20&c=8v5gIR5YCWAeJzufiU4cfA34zBhmAygNmRiVPt20XzA=",

    "https://media.istockphoto.com/id/1158646949/photo/garam-masala-powder.jpg?s=612x612&w=0&k=20&c=DnNPukaJDXzZxLWs8FpANYay7z_CcGlO1hORBSLDlBk=",
    
    "https://media.istockphoto.com/id/155393987/photo/three-different-powdered-spices-in-a-white-background.jpg?s=612x612&w=0&k=20&c=nHNwnp6ARsq8-hqy9zsvg6SpR3UI8HXYJmOofDpHBrk="
  ]

  const [current, setCurrent] = useState(0);
  const [count, setcount] = useState(8800)
  const[count2,setcount2]=useState(100)

  useEffect(() => {
    // Auto change slide every 3000 milliseconds
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % arr.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current, arr.length]);


  useEffect(() => {
    let tt = setInterval(() => {
      setcount((ele) => {
        if (ele === 8999) {
          clearInterval(tt);
        }
        return ele + 1;
      });
    }, 4);

    return () => clearInterval(tt);
  }, []);
  useEffect(() => {
    let tt = setInterval(() => {
      setcount2((ele) => {
        if (ele === 199) {
          clearInterval(tt);
        }
        return ele + 1;
      });
    }, 9);

    return () => clearInterval(tt);
  }, []);


  return (
    <div className='LowerHeader'>
        
<div className="LeftBox">
<h1>india's most <br /> trusted & largest brand of spices
              </h1>
              <hr />
              <h3><span>#</span>ghar ke masale , apane masale</h3>
              <div className="counting">

                <div className="counting_start">
                  <span>{count}+</span>
                  <span>premium products</span>
                </div>

                <div className="counting_start">
                  <span>{count2}K+</span>
                  <span>happy costumer</span>
                </div>
</div>
</div>

<div className="RightBox">
<img className="slide_image" src={arr[current]} alt={`Slide ${current + 1}`} />
</div>
        </div>  
 
  )
}
