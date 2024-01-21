import React from 'react'
import { styled, Box } from '@mui/material'
import Banner from './Banner'
import Navbar from './Navbar'
import Slide from './Slide'
import MidSection from './MidSection'
import MidSlide from './MidSlide'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productActions'
import {useDispatch, useSelector} from "react-redux"

const Component=styled(Box)`
padding:10px;
background:#F2F2F2;
`
const Home = () => {
    const {products} = useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
  return (
    <>
      <Navbar/>
      <Component>
        <Banner/>

        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection/>

        <Slide products={products} title="Discounts for You" timer={false}/>
      <Slide products={products} title="Suggested Items" timer={false}/>
      <Slide products={products} title="Top Selection" timer={false}/>
      <Slide products={products} title="Trending Offers" timer={false}/>
      <Slide products={products} title="Season's top picks" timer={false}/>
      <Slide products={products} title="Top Deals on Accessories" timer={false}/>

      
      </Component>
    </>
  )
}

export default Home
