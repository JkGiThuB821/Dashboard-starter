import React from 'react'
import './RightSide.css'
import { UilTimes } from '@iconscout/react-unicons'
import Updates from '../Updates/Updates'
import CustomerReview from '../components/CustomerReview/CustomerReview'

const RightSide = () => {

  return (
    <div className="RightSide">
    <Updates/>
    <CustomerReview/>
    </div>
  )
}

export default RightSide
