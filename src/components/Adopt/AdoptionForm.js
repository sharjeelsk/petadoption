import React from 'react'
import "./AdoptionForm.scss"
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {connect} from 'react-redux'
import SimpleBackdrop from '../utils/SimpleBackdrop';
import axios from 'axios'
const Input = styled('input')({
    display: 'none',
  });
function AdoptionForm(props) {
    
    const {handleSubmit,formState:{errors},register}=useForm()
    const [selectedImage,setSelectedImage]=React.useState([])
    const [value, setValue] = React.useState('female');
    const [loading,setLoading]=React.useState(false)

    const onSubmit = (fdata)=>{
      setLoading(true)
        console.log(fdata);
        var data = new FormData();
        data.append('name', fdata.name);
        data.append('gender', value);
        data.append('category', fdata.category);
        data.append('breed', fdata.breed);
        data.append('age', fdata.age);
        data.append('image', selectedImage);
        
        var config = {
          method: 'post',
          url: '/api/pet/create-pet',
          headers: { 
            'token': props.user.user, 
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          setLoading(false)
          console.log(response)
          props.history.push('/landing')
        })
        .catch(function (error) {
          setLoading(false)
          console.log(error);
        });
        
    }
    React.useEffect(()=>{

    },[selectedImage])
    return (
        <div className="adoption-head">
          <SimpleBackdrop open={loading} />
            <form className="shadow form-section" onSubmit={handleSubmit(onSubmit)}>
            <h1>Add Pet</h1>
            <TextField {...register('name',{required:true})} className="textfield" id="standard-basic" fullWidth label="Pet Name" variant="standard" />
            <TextField {...register('category',{required:true})} className="textfield" id="standard-basic" fullWidth label="Category" variant="standard" />

            <div className="d-flex justify-content-center">
            <FormControl className="mt-4" component="fieldset">
             <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup 
            
            value={value}
        onChange={(e)=>setValue(e.target.value)}
            row aria-label="gender" name="row-radio-buttons-group">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
             </RadioGroup>
            </FormControl>
            </div>
            
            <TextField {...register('breed',{required:true})} className="textfield" id="standard-basic" fullWidth label="Breed" variant="standard" />
            <TextField {...register('age',{required:true})} className="textfield" id="standard-basic" fullWidth label="Age" variant="standard" />
            
            {!Array.isArray(selectedImage)?(
        <div className="my-3 row justify-content-center">
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <IconButton onClick={()=>setSelectedImage([])} aria-label="delete" size="small" color='error'>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
        </div>
      ):null}

            <div className="mt-4 mb-2" style={{textAlign:"center"}}>
            <label htmlFor="contained-button-file">
            <Input 
             onChange={(event) => {
                console.log(event.target.files);
                setSelectedImage(event.target.files[0]);
              }}
            accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span" endIcon={<CameraAltIcon />}>
            Upload pet image
            </Button>
            </label>
            </div>



            <div className="mt-4 d-flex justify-content-center">
            <Button type="submit" variant='contained'>Add Pet</Button>
            </div>
            </form>
        </div>
    )
}

const mapStateToProps = ({EventUser})=>{
return {
  user:EventUser
}
}

export default connect(mapStateToProps)(AdoptionForm)
