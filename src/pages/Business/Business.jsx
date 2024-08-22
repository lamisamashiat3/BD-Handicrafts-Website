import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Business = ({business}) => {
      const {id,businessImg,businessName,yearOfOperation,numberOfProducts,likes} = business;
    
    return (
        <div>
             <div className='p-4 '>
          <div className="card border-[3px] border-gray-200 shadow-xl ">
         <div>
        <figure className="px-10 pt-10 ">
        
        <img src = {businessImg} alt='business' className='max-h-[300px] h-auto max-w-[300px] w-auto mt-3'/>
 
  </figure></div>
  <div className="card-body   ">
   <div className=' space-y-2'>
    <p className='card-title text-yellow-400 text-2xl '>{businessName}</p>
    <h1 className='text-xl '>Year of Operation : {yearOfOperation}</h1>
    </div> 
  <div  className=' justify-between'>
  <div className=''><span className='text-xl  '>Number of Products : {numberOfProducts}</span>
  <h1 className='mt-2 border-b-2 text-black'></h1></div>
  <div className='flex  justify-between'>
  <div className='flex mt-4'><span><AiFillLike className='text-[25px] text-blue-600 mr-1 mt-1'/></span> <span  className='text-xl '>{likes}</span></div>
  <div><Link to = {`/business/${id}`}><button  className='btn btn-outline btn-warning mt-3'>View Products </button></Link></div> </div>
    </div>
    </div>
   
  </div>   
  </div>   
  </div>
 
 
    );
};

export default Business;