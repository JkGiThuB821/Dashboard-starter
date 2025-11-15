import React from 'react'
import './Updates.css'
import { UpdatesData } from '../Data/Data'
import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png' 

const Updates = () => {

  return (
    <div className="Updates">
        <h3>Updates</h3>
        {UpdatesData.map((update)=> {
            return(
                <div className="update">
                    <div className="imgFix">
                    <img src={update.img} alt="updateImg" />
                    </div>
                    <div className="noti">
                        <div style={{marginBottom:'0.5rem' }}>
                        <span>{update.name}</span>
                        <span> {update.noti}</span>
                        </div>
                        <span>{update.time}</span>
                    </div>
                        
                </div>
            )
        })}
    </div>
  )
}

export default Updates
