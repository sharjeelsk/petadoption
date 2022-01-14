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
import axios from 'axios'
import {connect} from 'react-redux'
import Modal from '../utils/Modal'
import Button from '@mui/material/Button'
const actions = [
    { icon: <AddIcon />, name: 'Add',route:"addpet" },
    { icon: <MailIcon />, name: 'Requests',route:"petrequests" },
    { icon: <AccountCircleIcon />, name: 'Profile',route:"profile" },
  ];
function Landing(props) {
  const [data,setData]=React.useState([])
  const [selectedData,setSelectedData]=React.useState({})
  const [open,setOpen]=React.useState(false)
console.log(open);
  React.useEffect(()=>{
    axios.get(`/api/pet/all-pet`,{headers:{token:props.user.user}})
    .then(res=>{
      console.log(res);
      setData(res.data.result)
    })
    .catch(err=>{
      console.log(err);
    })

  },[])


    return (
        <div className="landing-section">
          
              <Modal 
              open={open}
              setOpen={setOpen}
              children={<section className="modal-card">
                <h1 className="heading">{selectedData.name}</h1>

                <img src={`/api/pet/image/${selectedData.img}`} alt="dog" />

                <div className="mt-5 row justify-content-between">
                <p><b>Age</b></p>
                <p>{selectedData.age}</p>
                </div>

                <div className="row justify-content-between">
                <p><b>Gender</b></p>
                <p>{selectedData.gender}</p>
                </div>


                <div className="row justify-content-between">
                <p><b>Category</b></p>
                <p>{selectedData.category}</p>
                </div>

                <div className="row justify-content-between">
                <p><b>Breed</b></p>
                <p>{selectedData.breed}</p>
                </div>
                <Button variant="contained">Request Adoption</Button>
              </section>}
              />
          
            <h1>Adopt Pets</h1>

            <section className="pet-card-row row mx-5">
                {data.length>0?
                
                data.map((item,index)=><div onClick={()=>{
                  setSelectedData(item)
                  setOpen(true)
                  }} key={index} className="shadow-sm pet-card">
                    <img src={`/api/pet/image/${item.img}`} alt="dog" />
                    <h2 className="heading">{item.name}</h2>
                    <p className="category">{item.category}</p>
                    <p className="breed">{item.breed}</p>
                </div>):
                
                <div>
                  <p>No pets available</p>
                </div>
                }
               
            </section>

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
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

const mapStateToProps =({EventUser})=>{
  return {
    user:EventUser
  }
}

export default connect(mapStateToProps)(Landing)
