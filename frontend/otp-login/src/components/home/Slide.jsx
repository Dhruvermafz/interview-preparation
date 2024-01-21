import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import Countdown from "react-countdown"
import { Box, Typography, Button, Divider, styled } from '@mui/material'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Component=styled(Box)`
margin-top:10px;
background:#FFFFFF;
`;

const Deal=styled(Box)`
padding:15px 20px;
display:flex;
`

const DealText=styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:24px;
line-height:32px;
`

const Timer=styled(Box)`
margin-left:10px;
display:flex;
align-items:center;
color:#7f7f7f;
`
const ViewAllButton=styled(Button)`
 margin-left:auto;
 background-color:#2874f0;
 border-radius:2px;
 font-size:13px;
 font-weight:600;
 
`;

const Image=styled('img')({
    width:'auto',
    height:150
})

const Text=styled(Typography)`
font-size:14px;
margin-top:5px;
`
const Slide = ({products, title, timer}) => {
    const renderer = ({hours, minutes, seconds}) => {
        return <Box variant="span">{hours}:{minutes}{seconds} left</Box>
    }
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {
            timer && <Timer>
                  <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg' alt="time" style={{width:24}}/>
                     <Countdown date={Date.now()+5.04e+7} renderer={renderer}/>
            </Timer>
        }
        <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
      </Deal>
      <Divider/>
      <Carousel
    responsive={responsive}
    swipeable={false}
          draggable={false}
          autoplay={true}
          autoaySpeed={4000}
          infinite={true}
          keyBoardControl={true}
          centerMode={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
    >
    {
        products.map(product=>(
            <Box textAlign="center" style={{padding:'25px 15px'}}>
            <Image src={product.url} alt="product"/>
            <Text style={{fontWeight:600,color:'#212121'}}>{product.title.shortTitle}</Text>
            <Text style={{color:'green'}}>{product.discount}</Text>
            <Text style={{color:'#212121',opacity:0.6}}>{product.tagline}</Text>
            </Box>
        ))
    }
     
    </Carousel>
    </Component>
  )
}

export default Slide
