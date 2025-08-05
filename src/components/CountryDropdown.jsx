import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
const CountryDropdown =() =>{
    return(
        <>
        <Button className="country" variant='text'sx={{color:'#8a2ce2'}}>  
            <div className="info d-flex flex-column">
            <span className='lable'>  your location</span>
            <span className='name'> India </span> 
            </div>
            <span className='ml-auto'><FaAngleDown/></span>                    
        </Button> 
        </>
    );

 }
 export default CountryDropdown;