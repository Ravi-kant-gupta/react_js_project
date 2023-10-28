import { BarChart } from '@mui/x-charts/BarChart';
import * as React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { initialApi } from "../../reduxFolder/countersclice.js";
import Header from "../Header";
import "./index.css";

const Analytics=()=>{
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
    console.log(`store data${value}`)
    return(<>
    <Header/>
<div className='analytics-page'>
        <h1>Chart View of Data</h1>
      <div> 
    {value===true?null:
    <BarChart 
      xAxis={[{ scaleType: 'band', data: [dataList[0].name, dataList[1].name, dataList[2].name] }]}
      series={[{ data: [parseInt(dataList[0].price),parseInt(dataList[1].price),parseInt(dataList[2].price)] }]}
      width={500}
      height={500}
    />}
    </div> 
</div>
</>
    )
}

export default Analytics