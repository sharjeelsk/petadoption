import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

function Recieved(props) {
    const [data,setData]=React.useState([])
    React.useEffect(()=>{
        axios.get('/api/adoption/requested',{headers:{token:props.user.user}})
        .then(res=>{
            console.log(res)
            setData(res.data.result)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const renderContent = (item)=>{
        if(item.status==="Pending"){
            return <p>{item.owner} hasn't accepted your request for <b>{item.pet.name}'s</b> adoption </p>
        }else{
            return <p>{item.owner} has <b>{item.status}</b> your request for <b>{item.pet.name}'s</b> adoption</p>
        }
    }

    return (
        <div className="adoption-request">
            <h1>Recieved</h1>
            {
                data.length>0?(
                    data.map((item,index)=>(
                    <div key={index}>
                        <div className="shadow-sm message">
                        {renderContent(item)}
                    </div>
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

export default connect(mapStateToProps)(Recieved)
