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
const Input = styled('input')({
    display: 'none',
  });
function AdoptionForm() {
    
    const {handleSubmit,formState:{errors},register}=useForm()
    const [selectedImage,setSelectedImage]=React.useState([])
    const onSubmit = (data)=>{
        console.log(data);
    }
    React.useEffect(()=>{

    },[selectedImage])
    console.log(Array.isArray(selectedImage));
    return (
        <div className="adoption-head">
            <form className="shadow form-section" onSubmit={handleSubmit(onSubmit)}>
            <h1>Add Pet</h1>
            <TextField {...register('name',{required:true})} className="textfield" id="standard-basic" fullWidth label="Pet Name" variant="standard" />
            <TextField {...register('category',{required:true})} className="textfield" id="standard-basic" fullWidth label="Category" variant="standard" />

            <div className="d-flex justify-content-center">
            <FormControl className="mt-4" component="fieldset">
             <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
             </RadioGroup>
            </FormControl>
            </div>
            
            <TextField {...register('breed',{required:true})} className="textfield" id="standard-basic" fullWidth label="Breed" variant="standard" />
            <TextField {...register('age',{required:true})} className="textfield" id="standard-basic" fullWidth label="Age" variant="standard" />
            
            {!Array.isArray(selectedImage)?(
        <div className="row">
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
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

export default AdoptionForm
