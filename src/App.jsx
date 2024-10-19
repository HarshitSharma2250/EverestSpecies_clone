import './App.css'
import { Navbar } from './Components/Header/UpperHeader/Navbar/Navbar'
import { RoutingComponent } from './RoutingComponents/RoutingComponent'
 import {Footer} from './Components/FooterPart/Footer.jsx'
function App() {


  return (
    <>
    <Navbar/>
    <RoutingComponent/> 
<section className='footer'>
<Footer/>
</section>
    </>
  )
}

export default App
