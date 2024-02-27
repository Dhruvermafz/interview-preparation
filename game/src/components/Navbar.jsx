"use client"
import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Box bg="lightsalmon" p={4} display="flex" justifyContent="space-evenly">
<Link href={"/game"}>Game</Link>
<Link href={"/about"}>About</Link>
    </Box>
  )
}

export default Navbar
