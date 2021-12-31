import React from 'react'
import "./Landing.scss"
import Img from '../../Images/images.jfif'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const actions = [
    { icon: <AddIcon />, name: 'Add',route:"addpet" },
    { icon: <MailIcon />, name: 'Requests',route:"requestpet" },
    { icon: <AccountCircleIcon />, name: 'Profile',route:"profile" },
  ];
function Landing(props) {
    return (
        <div className="landing-section">
            <h1>Adopt Pets</h1>

            <section className="pet-card-row row mx-5">
                <div className="shadow-sm pet-card">
                    <img src={Img} alt="dog" />
                    <h2>Shiba Inu</h2>
                    <p>Dog</p>
                    <p>Husky</p>
                </div>
                <div className="shadow-sm pet-card">
                    <img src={Img} alt="dog" />
                    <h2>Shiba Inu</h2>
                    <p>Dog</p>
                    <p>Husky</p>
                </div>
                <div className="shadow-sm pet-card">
                    <img src={Img} alt="dog" />
                    <h2>Shiba Inu</h2>
                    <p>Dog</p>
                    <p>Husky</p>
                </div>
                <div className="shadow-sm pet-card">
                    <img src={Img} alt="dog" />
                    <h2>Shiba Inu</h2>
                    <p>Dog</p>
                    <p>Husky</p>
                </div>
                <div className="shadow-sm pet-card">
                    <img src={Img} alt="dog" />
                    <h2>Shiba Inu</h2>
                    <p>Dog</p>
                    <p>Husky</p>
                </div>
                <div className="shadow-sm pet-card">
                    <img src={Img} alt="dog" />
                    <h2>Shiba Inu</h2>
                    <p>Dog</p>
                    <p>Husky</p>
                </div>
            </section>

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={()=>props.history.push(action.route)}
          />
        ))}
      </SpeedDial>

        </div>
    )
}

export default Landing
