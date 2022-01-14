import React from 'react'
import "./PetRequests.scss"
import Button from '@mui/material/Button'
import axios from 'axios'
import {connect} from 'react-redux'

function Petrequests(props) {
    const [data,setData]=React.useState([])
    const [flag,setFlag]=React.useState(false)

    React.useEffect(()=>{
        axios.get('/api/adoption/received',{headers:{token:props.user.user}})
        .then(Res=>{
            console.log(Res)
            setData(Res.data.result)
        })
        .catch(err=>{
            console.log(err)
        })
    },[flag])

    const handleAccept = (id)=>{
        axios.post(`/api/adoption/accept`,{adoptionId:id},{headers:{token:props.user.user}})
        .then(res=>{
            console.log(res);
            setFlag(!flag)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const handleDeny = (id)=>{
        axios.post(`/api/adoption/deny`,{adoptionId:id},{headers:{token:props.user.user}})
        .then(res=>{
            console.log(res);
            setFlag(!flag)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const renderContent =(item)=>{
        if(item.status==="Pending"){
            return <div className="d-flex justify-content-center">

            <div className="shadow-sm request">
            <p>{item.user.name} has requested for {item.pet.name}'s adoption</p>

            <section className="d-flex justify-content-end">
            <Button onClick={()=>handleDeny(item._id)} className="button mr-3" variant="text">Deny</Button>
            <Button onClick={()=>handleAccept(item._id)} className="button" variant="contained">Accept</Button>
            </section>

            </div>
            </div>
        }else{
            return <div className="d-flex justify-content-center">

            <div className="shadow-sm request">
            <p>Request of {item.user.name} for {item.pet.name}'s adoption has been {item.status}</p>

            </div>
            </div>
        }
    }

    return (
        <div className="adoption-request">
            <h1>Adoption Requests</h1>

            {
                data.length>0?(
                    data.map((item,index)=>(
                        <div>
                        {
                            renderContent(item)
                        }
                        <div className="hr" />
                        </div>
                    ))
                ):null
            }

           


        </div>
    )
}

const mapStateToProps = ({EventUser})=>{
    return {
        user:EventUser
    }
}

export default connect(mapStateToProps)(Petrequests)
