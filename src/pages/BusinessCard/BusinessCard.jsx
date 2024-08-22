import { useState, useEffect } from "react";
import Business from '../Business/Business';




const BusinessCard = () => {
    const [business,setBusiness] = useState([]);
      const [dataLength,setDataLength] = useState(3);

      useEffect( () =>{
        fetch('data(1).json')
        .then(res => res.json())
        .then(data => setBusiness(data));
    },[])

    return (
        <div>
            <div className='p-4'>
          <h2 className = 'text-5xl text-yellow-200 text-center p-2 font-bold'>Business Section</h2> 
          <p className='text-2xl text-center p-2 mt-2' >#####################</p>
        <p className='text-center p-2 text-xl'></p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                business.slice(0, dataLength).map(business => <Business key={business.id} business={business}></Business>)
            }
          </div>
          <div className='items-center text-center'>
          <div className={ dataLength === business.length && 'hidden'}> 
            <button onClick={() =>setDataLength(business.length)}
            class="btn btn-warning">See All </button>
          </div></div>
          </div>
          
        </div>
    );
};

export default BusinessCard;