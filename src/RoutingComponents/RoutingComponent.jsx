import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { HomePage } from '../HomePage/HomePage'
import { AboutPage } from '../Components/Header/UpperHeader/AboutPage/AboutPage'
import { LoginPage } from '../Components/Header/UpperHeader/LoginPage/LoginPage'
import { ProductPage } from '../Components/Header/UpperHeader/ProductPage/ProductPage'
import {Bhindi} from '../Components/BodyPart/recipeeForYou/Bhindi/Bhindi.jsx'
import {ChatPataaConeChat} from '../Components/BodyPart/recipeeForYou/ChatPataa cone chat/ChatPataaConeChat.jsx'
import {FruitChaat} from '../Components/BodyPart/recipeeForYou/FruitChaat/FruitChaat.jsx'
import {MixVegitable} from '../Components/BodyPart/recipeeForYou/Mix Vegitable/MixVegitable.jsx'
import {RasamRice} from '../Components/BodyPart/recipeeForYou/Rasam Rice/RasamRice.jsx'
import {TondooriLufiFlower} from '../Components/BodyPart/recipeeForYou/Tondoori Lulfi Flower/TondooriLufiFlower.jsx'

export const RoutingComponent = () => {
  return (

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/bhindi" element={<Bhindi/>} />
        <Route path="/chatpataaconechat" element={<ChatPataaConeChat/>} />
        <Route path="/fruitchaat" element={<FruitChaat/>} />
        <Route path="/mixvegitable" element={<MixVegitable/>} />
        <Route path="/rasamrice" element={<RasamRice/>} />
        <Route path="/tondoorilufiflower" element={<TondooriLufiFlower/>} />

      </Routes>
  )
}
