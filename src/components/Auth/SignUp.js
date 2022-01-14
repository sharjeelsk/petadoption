import React from 'react'
import "./SignUp.scss"
import {ReactComponent as FishBowl} from '../../Images/undraw_fish_bowl_uu88.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import {useForm} from 'react-hook-form'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {Link} from 'react-router-dom'
import axios from 'axios'
import SimpleBackdrop from '../utils/SimpleBackdrop';
function SignUp(props) {
    console.log(props)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [loading,setLoading]=React.useState(false)
    const onSubmit = (data)=>{
        console.log(data);
        setLoading(true)
        axios.post(`/api/user/edit-user`,
        [
            {"propName":"name","value":data.firstname+data.lastname},
            {"propName":"address","value":data.address}
    
        ],{headers:{token:props.location.state}}
        )
        .then(res=>{
        console.log(res)
        setLoading(false)
        props.history.push("/landing")
        })
        .catch(err=>{
            setLoading(false)
            console.log(err)
        })
    }

    return (
        <div className="signup-section">
            <SimpleBackdrop open={loading} />
            <div className="shadow row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 imagesect d-flex align-items-center">
                <FishBowl className='m-auto fishbowl' />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 formsect">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField error={errors.firstname?true:false} {...register('firstname',{required:true})} className="textfield" fullWidth id="standard-basic" label="First Name" variant="standard" />
            <TextField error={errors.lastname?true:false} {...register('lastname',{required:true})} className="textfield" fullWidth id="standard-basic" label="Last Name" variant="standard" />
            <TextField error={errors.address?true:false} {...register('address',{required:true})} className="textfield" fullWidth id="standard-basic" label="Address" variant="standard" />
            <Button endIcon={<EditRoundedIcon />} type="submit" variant="contained" className="button">Sign Up</Button>
            </form>
            <Link to="/login">Already a user, logIn instead</Link>
            </div>

            </div>
        </div>
    )
}

export default SignUp
