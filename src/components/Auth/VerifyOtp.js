import React from 'react'
import "./SignUp.scss"
import {ReactComponent as FishBowl} from '../../Images/undraw_fish_bowl_uu88.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import {useForm} from 'react-hook-form'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUser} from '../redux/user/userActions'
import Alert from '@mui/material/Alert'
import SimpleBackdrop from '../utils/SimpleBackdrop';
function SignUp(props) {

    const {register,handleSubmit,formState:{errors}}=useForm()
    const [error,setError]=React.useState("")
    const [loading,setLoading]=React.useState(false)
    console.log(props)

    const onSubmit = (data)=>{
        setLoading(true)
       axios.post(`/api/auth/verifyOTP`,{otp:data.OTP,email:props.location.state.email,hash:props.location.state.hash})
       .then(res=>{
           console.log(res)
           setLoading(false)
           if(res.data.result==="Incorrect"){
            setError("Incorrect OTP")
           }else if(res.data.requestType==="LogIn"){
            props.setUser(res.data.result)
            props.history.push('/landing')
           }else{
            props.setUser(res.data.result)
               props.history.push('/signup',res.data.result)
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
            <h1>Verify Otp</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField error={errors.OTP?true:false} {...register('OTP',{required:true})} className="textfield" fullWidth id="standard-basic" label="Enter OTP" variant="standard" />
            <Button endIcon={<LoginRoundedIcon />} type="submit" variant="contained" className="button">Verify</Button>
            </form>
            </div>

            </div>
            {error.length>0?<Alert className="alert" severity="error">{error}</Alert>:null}
        </div>
    )
}


const mapDispatchToProps = (dispatch)=>{
    return {
        setUser:(user)=>dispatch(setUser(user))
    }
}

export default connect(null,mapDispatchToProps)(SignUp)
