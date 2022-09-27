import { Link } from "react-router-dom";
import "./videogame.css";

const Videogame = ({ game }) => {
  return (
    <article className="article__videogame">
      <Link to={`/videogame/${game.id}`}>
        <div className="article__image">
          <img src={game.image} alt={game.name} />
        </div>
        <div className="article__div__text">
          <h3 className="article__div__title">{game.name}</h3>
          <span className="article__div__span">{game.rating}</span>
        </div>
        <div className="article__div__genre">
          {game.genres.map((genre) =>
            typeof genre === "object" ? (
              <p key={genre.id}> {genre.name} /</p>
            ) : (
              <p key={genre}> {genre} /</p>
            )
          )}
        </div>
      </Link>
    </article>
  );
};

export default Videogame;