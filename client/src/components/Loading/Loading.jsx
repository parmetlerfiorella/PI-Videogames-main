import { FaSpinner } from "react-icons/fa";
import "./loading.css";



function Loading() {
  return (
    <div className="loader">
      <FaSpinner className="spinning" size={100} /> 
     
   
    </div>
  );
}

export default Loading; 