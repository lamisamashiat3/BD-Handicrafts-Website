import { useLoaderData } from 'react-router-dom';
import  {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Navbar from "../Shared/Navbar/Navbar";
import Banner from '../../assets/pic.png'
import { FcRating } from "react-icons/fc";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer/Footer";

const BusinessPage = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    navigate(-1);
 const {id} = useParams();
const idInt = parseInt(id);
const business = data.find(b => b.id === idInt);

if (!business) {
    return <div>Business not found</div>;
}
   
  const handleRead = () =>{
    let favorite = JSON.parse(localStorage.getItem('favorite')) || [];

    if (favorite.some(b => b.id === business.id)) {
        toast.info("Already added to your favorite list");
    } else {
        favorite.push(business);
        localStorage.setItem('favorite', JSON.stringify(favorite));
        toast.success("Added to favorites");
    }
}
  
  return (
        <div>
            <Navbar></Navbar>
            <img src ={Banner}  />
            <div className=''>
           <div className="card card-side mt-4   ">
  <div className=''><figure >
     <img 
      src={business.businessImg}
      alt="business"
      className='max-h-[500px] h-auto max-w-[500px] w-auto '/>
   
  </figure></div>
  <div className="card-body ">
    <div className='space-y-4'>
   
    <h2 className="card-title text-3xl font-bold ">Product Name :<span className='text-yellow-200'>{business.businessName}</span></h2>
    <p className='border-b-2'></p>
    <p className='  text-2xl'>Materials Used : {business.materialsUsed}</p>
    <p className='  text-2xl'>Crafting Method : {business.craftingMethod}</p>
    <p className='border-b-4 '></p>
   </div>
   <div className=' flex space-y-4 justify-between'>
   <div className='flex '><span><FcRating className='text-[25px] text-yellow-600 mr-1 mt-3'/></span> <span  className='text-xl mt-3'>Rating : {business.rating}</span></div>

   <span><button onClick={handleRead } className='btn btn-outline btn-warning  '>Favorite</button></span>
 
   
   </div> </div>
</div></div>
<div className=''>
    <Link to='/'> <a className='link link-primary p-8'> Go Back</a></Link>
    
    </div> 
    <ToastContainer />
    <Footer></Footer>
     </div> 
    );
};

export default BusinessPage;