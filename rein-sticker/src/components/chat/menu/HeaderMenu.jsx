

import { useState } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {Menu,MenuItem,styled} from '@mui/material'

const MenuOption=styled(MenuItem)`
   font-size:14px;
   padding:15px 60px 5px 24px;
   background-color:#ffffff
`

const HeaderMenu = ({setItOpen}) => {

    const [open,setOpen]=useState(null);
    
    const handleClose=()=>{
        setItOpen(true);
        setOpen(null);
    }

    const handleClick=(e)=>{
        setOpen(e.currentTarget);
    }

    return (
        <>
            <MoreVertOutlinedIcon onClick={handleClick}></MoreVertOutlinedIcon>
            <Menu
                id="basic-menu"
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center',
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right',
                }}
            >
                <MenuOption onClick={handleClose}>Profile</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu
