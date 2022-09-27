import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_videogames_id, delete_create, details_bug } from "../../redux/action";
import { FaBackward,  } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Delete from "../img/delete.svg";
import { useHistory } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state.videogame_id);

  useEffect(() => {
    dispatch(get_videogames_id(id));
  }, [dispatch, id]);

  const handleDelete = ()=>{
    dispatch(delete_create(id));
    alert('videogame deleted successfully');
    history.push("/videogames")
    
  }

  

  return (
    
    <div className="details__container">
      
      {!state ? (
      <Loading/>
      ) : (
        <div className="section__details">
        {id.length > 10 ? (
     <button className="btn_delete_container" onClick={()=> handleDelete()}>
        <img  src={Delete}></img>
     </button>
     ) : null } 
       <Link className="section_details__back" to="/videogames" onClick={()=> dispatch(details_bug())}>
         <FaBackward />
       </Link>
       <h2 className="details__title">{state.name}</h2>
       <div className="article__details">
         <div>
           <div className="article__details__image">
             <img src={state.image} alt={state.name} />
           </div>
           <div className="article__details__info">
             <div className="article__details__date">
               <p>
                 Released:
                 <span className="date"> {state.released} </span>
               </p>
               <p>
                 Rating:
                 <span className="date"> {state.rating} </span>
               </p>
             </div>
             <div className="article__details__text">
               <p>
                 Platforms:{" "}
               <span className="date">{`${state.platforms}`}</span>{" "}
               </p>
               <p>
                 Genre: {state.genres && state.genres.map((genre) =>
                    typeof genre === "object" ? (
                 <span className="date"> <span  key={genre.id}>{genre.name}</span></span>
                    ) : (
                 <span className="date"> <span key={genre}>{genre} /</span></span>
                     ))}
               </p>
             </div>
           </div>
         </div>
         <div className="article__details__desc">
           <h3>Description: </h3>
           <p>{state.description}</p>
         </div>
       </div>
     </div>
      )}
      
    </div>
  );

  }


export default Details;