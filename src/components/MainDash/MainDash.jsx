import React from 'react'
import "./MainDash.css"
import Cards from "../Cards/Cards"
import Table from '../Table/Table'
import Updates from '../../Updates/Updates'

const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
        <h3>Recent Orders</h3>
        {/* Table */}
        <Table/>
    </div>
  )
}

export default MainDash