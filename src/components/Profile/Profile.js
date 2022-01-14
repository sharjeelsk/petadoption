import React from 'react'
import "./Profile.scss"
import Dog from '../../Images/paw.png'
import {connect} from 'react-redux'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
function Profile(props) {
    console.log(props.user.userInfo)
    let user = props.user.userInfo;
    return (
        <div className="profile-head">
            <h1 className="heading center">Profile</h1>
            
            <div class="shadow containerprofile">
		<div class="user-image">
			<img src={Dog}	alt="this image contains user-image" />
			
		</div>

		<div class="content">
			<h2 class="name">{user.name}</h2>
			<p class="username">{user.email}</p>
			<p class="address"> {user.address} </p>
			<p class="phone">{user.phone}</p>
			<br />
			
			
			<h2 class="petadd">Pets Added</h2>
			{/* <Button variant="contained" >LogOut</Button> */}
			<div style={{position:"fixed",bottom:"5%",right:"5%"}}>
			<Tooltip title="Logout">
              <Fab 
               color="primary" variant="extended">
                Logout
                <LoginRoundedIcon sx={{ ml: 1 }} />
                </Fab>
              </Tooltip>
        </div>
		</div>
	</div>






        </div>
    )
}


const mapStateToProps =({EventUser})=>{
    return {
        user:EventUser
    }
}

export default connect(mapStateToProps)(Profile)
