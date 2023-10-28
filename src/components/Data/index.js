import * as React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { initialApi } from "../../reduxFolder/countersclice.js";
import Header from "../Header";
import "./index.css";

const Data=()=>{
    const dataList=useSelector(state=>state.dataList.dataList)
const [value,setValue]=useState(true)
    const dispatch=useDispatch()

    useEffect(()=>{
        const fetchData=async()=>{
            setValue(true)
            const result= await fetch("http://localhost:4000/")
            const data=await result.json()
            // const listData= data.list
            
            dispatch(initialApi(data))
            setValue(false)
          }
          fetchData()
          
    },[])
    return(<>
    <Header/>
    <div className='data-page'>
        <h1 >Table Data</h1>
        <table className='data-table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Year</th>
            </tr>
            </thead>
            {dataList.map((each)=>{
            return <tr key={each.id}>
                <td>{each.name}</td>
                <td>{each.price}</td>
                <td>{each.year}</td>
            </tr>})}
        </table>
        
    </div>
</>
    )
}

export default Data