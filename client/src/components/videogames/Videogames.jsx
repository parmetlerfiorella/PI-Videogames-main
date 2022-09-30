import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { get_videogames} from "../../redux/action";
import Navbar from "../nav/nav"
import Videogame from "../videogame/videogame";
import "./Videogames.css";
import Loading from "../Loading/Loading";
import Paginated from "../Paginated/Paginated";

const Videogames = ()=>{
    const dispatch = useDispatch();
    let videogames = useSelector((state) => state.videogames);
    let { videogames_name } = useSelector((state) => state);
    // videogames = videogames[];

     // paginado
  const [currentPage, setCurrentPage] = useState(1); // pagina actual
  const [gamesPerPage, setGamesPerPage] = useState(15); // juegos por pagina
  const lastVideogame = currentPage * gamesPerPage; // indice del ultimo personaje = 15
  const firstVideogame = lastVideogame - gamesPerPage; // 
  const currentVideogames = videogames.slice(firstVideogame, lastVideogame);

  const paginated = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if(!videogames.length){
       dispatch(get_videogames());
    }   
   
  }, [dispatch, videogames]);

  return (
    <div className="div__container">
      <Navbar />
      <section className="section__videogames">
        {!currentVideogames.length ? (
          <Loading />
        ) : ( 
          <Paginated
            paginated={paginated}
            videogames={videogames.length}
            gamesPerPage={gamesPerPage}
          />
        )}

        {videogames_name.length
          ? videogames_name.map((game) => (
              <Videogame key={game.id} game={game} />
            ))
          : currentVideogames.length &&
            currentVideogames.map((game) => (
              <Videogame key={game.id} game={game} />
            ))}
          {!currentVideogames.length ? (
          <Loading />
    ) : ( 
          <Paginated
            paginated={paginated}
            videogames={videogames.length}
            gamesPerPage={gamesPerPage}
          />
        )}

            
      </section>
    </div>
  );
};

export default Videogames;
