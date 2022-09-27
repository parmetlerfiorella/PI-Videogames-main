import { useState } from "react";
import { useDispatch, } from "react-redux";
import { get_videogames_name } from "../../redux/action";
import { Link } from "react-router-dom";
import "./search.css"


const Search = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    
    const handleChange = (e) =>{
        e.preventDefault();
         setName(e.target.value)
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(get_videogames_name(name));
        setName("")
    };

   
 
 
    return(
        
        <form className="div__search " onSubmit={(e)=> handleSubmit(e)}>
            <Link to={"/"} >
              <h2 className="titulo">Video<span>Games</span> </h2>
            </Link>
            <input
            onChange={(e)=>handleChange(e)}
            type= "text"
            className="nav__input__search"
            placeholder="Search videogame..."
            value={name}/>
    
        </form>
    )
};

export default Search;
