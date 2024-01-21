import React from 'react'
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew"
import { Typography, Box, Menu, MenuItem, styled } from '@mui/material'
import { useState } from 'react'

const Logout=styled(Typography)`
font-size:14px;
margin-left:20px;
`;

const Profile = ({account, setAccount}) => {
    const [open, setOpen] = useState(false)
    
    const handleClick =(e) => {
        setOpen(e.currentTarget)
    }

    const handleClose =() => {
        setOpen(false)
    }

    const logoutUser = () => {
        setAccount("")
    }

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{marginTop: 2, cursor: "pointer"}}>{account}</Typography>
      </Box>
      <Menu style={{marginTop: 5}} anchorEl={open}
      open={Boolean(open)}
      onClose={handleClose}>
        <MenuItem onClick={() => {handleClose(); logoutUser();}}>
            <PowerSettingsNewIcon/>
            <Logout>Logout</Logout>
        </MenuItem>
      </Menu>
    </>
  )
}

export default Profile
