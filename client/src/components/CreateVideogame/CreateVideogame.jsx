import { useEffect, useState } from "react";
import { FaBackward } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  get_videogame_genres,
  post_create_videogame,
} from "../../redux/action";
import "./CreateVideogame.css";
import Camera from "../img/camera.svg"


const platforms = [
  "Linux",
  "PC",
  "Xbox One",
  "PlayStation 4",
  "Xbox 360",
  "PlayStation 3",
  "macOS",
  "Nintendo Switch",
  "Xbox Series S/X",
  "PlayStation 5",
  "Wii U",
  "Nintendo 3DS",
  "iOS",
  "PS Vite",
  "Android",
  "Xbox",
  "PlayStation 2",
  "Dreamcast",
  "Web",
];

const CreateVideogame = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { videogame_genres } = useSelector((state) => state);
  const [form, setForm] = useState({
    name: "",
    description: "",
    released: "",
    image: "",
    rating: 0,
    platforms: [],
    genres: [],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(get_videogame_genres());
  }, [dispatch]);

  const validate = (input) => {
    let errors = {};

    if (!input.name.length) errors.name = "Name required";
    if (!input.image.length) errors.image = "Image required";
    if (!input.genres.length) errors.genres = "Genres required";
    if (!input.platforms.length) errors.platforms = "Platforms required";
    if (!input.released.length) errors.released = "Released required";
    if (!input.rating.length) errors.rating = "Rating required";
    if (!input.description.length) errors.description = "Description required";

    return errors;
  };

  const handleDelete = (el) => {
    setForm({
      ...form,
      genres: form.genres.filter((genre) => genre !== el),
    });
  };
  const handleDeletePlataforms = (el) => {
    setForm({
      ...form,
      platforms: form.platforms.filter((platforms) => platforms !== el),
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(post_create_videogame(form));

    alert("Game created!");
    history.push("/videogames");
  };

  const handleSelectPlatforms = (e) => {
    setForm({
      ...form,
      platforms: [...new Set ([...form.platforms, e.target.value])]
    /*   [e.target.name]: [...form.platforms, e.target.value], */
    });
  };
  const handleSelectGenre = (e)=>{
    console.log(e.target.value)
    setForm({
      ...form,
      genres: [...new Set ([...form.genres, e.target.value])]
     /*  [e.target.name]: [...form.genres, e.target.value] */
        
    });
  }
 const handleClick = () =>{
  setForm({
    ...form,
    image: "https://static.vecteezy.com/system/resources/previews/004/432/862/non_2x/wireless-game-joystick-controller-gamepad-wireless-gamepad-abstract-colorful-drawing-illustration-of-paints-vector.jpg"
  })
 }
  return (
    <div className="form__container">
      <section className="section__form">
        {/* titulo */}
        <h1 className="section__form__title">Create Game</h1>
        <Link className="section_form__back" to="/videogames">
          <FaBackward />
        </Link>

        {/* formulario */}
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          {/* input nombre */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          {errors.name && <p className="error__text">{errors.name}</p>}

          {/* input imagen */}
          <input
            type="text"
            placeholder="URL image"
            name="image"
            value={form.image}
            onChange={handleChange}
            required
            autoComplete="off"
            
          />
          <button className="Url_image" onClick={handleClick}><img  src={Camera}></img></button>
          {errors.image && <p className="error__text">{errors.image}</p>}

          {/* input genrero */}
          <select name="genres" onChange={handleSelectGenre}>
            <option>Genres</option>
            {videogame_genres.map((genre) => (
              <option key={genre} value={genre} onChange={handleChange}>
                {genre}
              </option>
            ))}
          </select>
          <div className="div__btn__delete">
            {form.genres.map((el) => (
              <div key={el} className="div__delete">
                <p>{el}</p>
                <button
                  className="btn__delete"
                  onClick={() => handleDelete(el)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          {errors.genres && <p className="error__text">{errors.genres}</p>}

          {/* input plataforma */}
          <select name="platforms" onChange={handleSelectPlatforms} required>
            <option>Platforms</option>
            {platforms.map((p) => (
              <option key={p} value={p} onChange={handleChange}>
                {p}
              </option>
            ))}
          </select>
          {errors.platforms && (
            <p className="error__text">{errors.platforms}</p>
          )}
          <div className="div__btn__delete">
          {form.platforms.map((el) => (
            <div key={el} className="div__delete">
              <p>{el}</p>
              <button className="btn__delete" onClick={() => handleDeletePlataforms(el)}>
                X
              </button>
            </div>
          ))}
        </div>
           

          {/* input fecha */}
          <h4 className="input__title__option">Release Date</h4>
          <input
            type="date"
            name="released"
            value={form.released}
            onChange={handleChange}
            required
          />
          {errors.released && <p className="error__text">{errors.released}</p>}

          {/* input puntuacion */}
          <h4 className="input__title__option">Rating</h4>
          <input
            type="number"
            placeholder="Rating"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            required
          />
          {errors.rating && <p className="error__text">{errors.rating}</p>}

          {/* input descripcion */}
          <textarea
            placeholder="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          ></textarea>
          {errors.description && (
            <p className="error__text">{errors.description}</p>
          )}

          <button className="form__btn">Send</button>
        </form>
      </section>
    </div>
  );
};

export default CreateVideogame;