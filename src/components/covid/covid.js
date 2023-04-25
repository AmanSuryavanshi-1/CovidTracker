import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {

    const[data, setData] = useState([]);

    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json' );
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
            console.log(actualData);
        }catch(err){
            console.log(err);
        }
       
    }
    useEffect(()=>{
         getCovidData();
    }, []);
  return (
    <>
    <section>
    <h1>🔴LIVE</h1>
      <h2>  COVID-19 CORONA VIRUS TRACKER</h2>

      <ul>
        <li className='card'style={{backgroundColor:'rgb(18 41 81)'}}>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>Our</span> Country</p>
                    <p className='card_total card_small'> <span>INDIA</span> </p>
                </div>
            </div>
        </li>

        <li className='card' style={{backgroundColor:'#36a439'}}>
            <div className='card_main' >
                <div className='card_inner' >
                    <p className='card_name'><span>Total</span> Recovered</p>
                    <p className='card_total card_small'>{data.recovered}</p>
                </div>
            </div>
        </li>

        <li className='card' style={{backgroundColor:'rgb(222 128 45)'}}>
            <div className='card_main'>
                <div className='card_inner'  >
                    <p className='card_name'><span>Total</span> Confirmed</p>
                    <p className='card_total card_small'>{data.confirmed}</p>
                </div>
            </div>
        </li>

        <li className='card' style={{backgroundColor:'rgb(214 52 52)'}}>
            <div className='card_main'>
                <div className='card_inner' >
                    <p className='card_name'><span>Total</span> Deaths</p>
                    <p className='card_total card_small'>{data.deaths}</p>
                </div>
            </div>
        </li>

        <li className='card' style={{backgroundColor:'rgb(55 114 173)'}}>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>Total</span> Active</p>
                    <p className='card_total card_small'>{data.active}</p>
                </div>
            </div>
        </li>

        <li className='card' style={{backgroundColor:'rgb(239 233 71)'}}>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>Last</span> Updated</p>
                    <p className='card_total card_small'style={{padding:'1%' ,fontSize: '250%'}}>{data.lastupdatedtime}</p>
                </div>
            </div>
        </li>
      </ul>
      </section>
    </>
  )
}

export default Covid