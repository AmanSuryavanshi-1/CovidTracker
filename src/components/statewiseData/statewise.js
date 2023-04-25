import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import './statewise.css';

const Statewise = (props) => {

    const[data, setData] = useState([]);


    
    const getCovidData = async () =>{
       const res = await fetch('https://data.covid19india.org/data.json');
       const actualData = await res.json();
       console.log(actualData.statewise);
       setData(actualData.statewise);
    }

    useEffect(() =>{
        getCovidData();  
        // use effect call 1 time only when the page is refreshed
    }, []);

  return (
    <>
    {/* <h1> INDIA COVID-19 DashBoard</h1> */}
    <div className='container'>
        <h1 className='h'> <span className='font'> INDIA </span>  COVID-19 DashBoard</h1>

        <div className='table-responsive' style={{overflowX:'auto'}}>
            <table className='table table-hover'>
                <thead className='head'>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return(
                                <tr key={ind}>
                                <th>{curElem.state}</th>
                                <td>{curElem.confirmed}</td>
                                <td>{curElem.recovered}</td>
                                <td>{curElem.deaths}</td>
                                <td>{curElem.active}</td>
                                <td>{curElem.lastupdatedtime}</td>
                            </tr>
                            )
                        })
                    }
               
                </tbody>
            </table>
        </div>





    </div>
    </>
  )
}

export default Statewise