import React from 'react'
import "./SignUp.scss"
import {ReactComponent as FishBowl} from '../../Images/undraw_fish_bowl_uu88.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import {useForm} from 'react-hook-form'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {Link} from 'react-router-dom'

function SignUp(props) {

    const {register,handleSubmit,formState:{errors}}=useForm()

    const onSubmit = (data)=>{
        console.log(data);
        props.history.push("/landing")
    }

    return (
        <div className="signup-section">
            <div className="shadow row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 imagesect d-flex align-items-center">
                <FishBowl className='m-auto fishbowl' />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 formsect">
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField error={errors.name?true:false} {...register('name',{required:true})} className="textfield" fullWidth id="standard-basic" label="Name" variant="standard" />
            <TextField error={errors.email?true:false} {...register('email',{required:true})} className="textfield" fullWidth id="standard-basic" label="Email" variant="standard" />
            <TextField error={errors.password?true:false} {...register('password',{required:true})} className="textfield" fullWidth id="standard-basic" label="Password" variant="standard" />
            <TextField error={errors.confirmpassword?true:false} {...register('confirmpassword',{required:true})} className="textfield" fullWidth id="standard-basic" label="Confirm Password" variant="standard" />
            <Button endIcon={<EditRoundedIcon />} type="submit" variant="contained" className="button">SignUp</Button>
            </form>
            <Link to="/login">Already a user, logIn instead</Link>
            </div>

            </div>
        </div>
    )
}

export default SignUp
