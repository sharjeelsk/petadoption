import React from 'react'
import "./SignUp.scss"
import {ReactComponent as FishBowl} from '../../Images/undraw_fish_bowl_uu88.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import {useForm} from 'react-hook-form'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import {Link} from 'react-router-dom'
import axios from 'axios'
import SimpleBackdrop from '../utils/SimpleBackdrop';

function SignUp(props) {

    const {register,handleSubmit,formState:{errors}}=useForm()
    const [loading,setLoading]=React.useState(false)
    const onSubmit = (data)=>{
        setLoading(true)
        axios.post(`/api/auth/sendOTP`,{email:data.email})
        .then(res=>{
            setLoading(false)
            console.log(res)
            if(res.data.msg==="Success"){
                props.history.push("/verifyotp",res.data)
            }
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

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 formsect m-auto">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField error={errors.email?true:false} {...register('email',{required:true})} className="textfield" fullWidth id="standard-basic" label="Email" variant="standard" />
            <Button endIcon={<LoginRoundedIcon />} type="submit" variant="contained" className="button">Sign In</Button>
            </form>
            </div>

            </div>
        </div>
    )
}

export default SignUp
