import { Link } from "react-router-dom";
import { useEffect } from "react";
import Search from "../search/search";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./nav.css";
import {
  created_existing,
  filter_alphabetic,
  filter_by_genre,
  filter_rating,
  get_videogame_genres,
 get_videogames
} from "../../redux/action";
import Footer from "../Footer/footer";
import image from "../img/crear.svg";
import arrow from "../img/arrow.svg";
import filtro from "../img/filtro.svg"

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { videogame_genres,  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(get_videogame_genres());
  }, [dispatch]);


  const handleGenres = (e) => {
    dispatch(filter_by_genre(e.target.value));
  };

  const handleRating = (e) => {
    dispatch(filter_rating(e.target.value));
  };

  const handleAlphabetic = (e) => {
    dispatch(filter_alphabetic(e.target.value));
  };

  const handleCreated = (e) => {
    dispatch(created_existing(e.target.value));
  };

  const handleClickreset =(e) =>{
    e.preventDefault();
    dispatch(get_videogames())
    history.push("/videogames")
    
}

  let listElements= document.querySelectorAll(".list_button--click")
  listElements.forEach(listElement=>{
    listElement.addEventListener("click",()=>{
      listElement.classList.toggle("arrow")

      let height = 0;
      let menu = listElement.nextElementSibling;
      if(menu.clientHeight=="0"){
        height=menu.scrollHeight
      }
      menu.style.height= height+"px"
    })
  })

  return (
    <>
     
        
      <nav className="nav"> 
        <Search/>
        
       <ul className="list">
       <button onClick={handleClickreset} className="reset"> Reset Filters X</button>
        <li className="list_item list_item--click">
        <li className="list_item list_item--click">
             <div className="list_botton  list_button--click" >
              <img src={image} className="list_img" alt="not found"></img>
              <a href="#" className="nav_link">NEW GAME</a>
              <img src={arrow} className="list_arrow"></img>
             </div>
             <ul className="list_show">
               <li className="list_inside"></li>
                <Link className="nav__link"to="/videogame/create">
                 Create Videogame
                </Link>
             </ul>
          </li> 
             <div className="list_botton  list_button--click" >
              <img src={filtro} class="list_img" alt="not found"></img>
              <a href="#" class="nav_link">FILTERS</a>
              <img src={arrow} class="list_arrow"></img>
             </div>
             <ul className="list_show">
              <li className="list_inside"></li>

              <select  onChange={handleAlphabetic}className="nav__select"name="alphabetical">
                 <option className="alphabetical">Alphabetical Order:</option>
                 <option value="asc">A - Z</option>
                 <option value="desc">Z - A</option>
              </select>

              <select onChange={handleRating} className="nav__select">
                 <option>Rating Orden:</option>
                 <option value="asc">Ascendant</option>
                 <option value="desc">Descendant</option>
              </select>
              
              <select onChange={handleGenres} className="nav__select">
                <option value="All">Filter by Genre:</option>
                  {videogame_genres.map((genre) => (
                <option value={genre} key={genre}>
                   {genre}
                </option> ))}
              </select>

              <select onChange={handleCreated} className="nav__select">
               <option value="All">Created - Existing:</option>
               <option value="created">Created</option>
               <option value="existing">Existing</option>
              </select>
             
             </ul>
          </li> 
        </ul>
        <Footer/>
      </nav>
    </>
  );     
};
 
export default Navbar;