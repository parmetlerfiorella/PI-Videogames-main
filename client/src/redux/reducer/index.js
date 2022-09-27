import {
  CREATED_EXISTING,
  CREATE_VIDEOGAME,
  FILTER_ALPHABETIC,
  FILTER_BY_GENRE,
  FILTER_RATING,
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_NAME,
  GET_VIDEOGAME_GENRES,
  GET_VIDEOGAME_ID,
  DETAILS_BUG,
  
 
} from "../action/";

const initialState = {
  videogames: [],
  all_videogames: [],
  videogame_id: [],
  videogames_name: [],
  videogame_genres: [],
};

export const videogame_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        all_videogames: action.payload,
      };
    case GET_VIDEOGAME_ID:
      return {
        ...state,
        videogame_id: action.payload,
      };
    case GET_VIDEOGAME_GENRES:
      return {
        ...state,
        videogame_genres: action.payload,
      };
    case GET_VIDEOGAMES_NAME:
      return {
        ...state,
        videogames_name: action.payload,
      };
    case CREATE_VIDEOGAME:
      return {
        ...state,
      };
    case FILTER_BY_GENRE:
      const allVideogames = state.all_videogames;

      const genresFilter =
        action.payload === "All"
          ? allVideogames
          : allVideogames.filter((e) => e.genres.includes(action.payload));
      if (genresFilter.length === 0) {
        alert("No videogames with that genre were found");
      } else {
        return {
          ...state,
          videogames: genresFilter,
        };
      }
      break;
    case FILTER_RATING:
      const orderRating =
        action.payload === "asc"
          ? state.videogames.sort((a, b) => (a.rating > b.rating ? 1 : -1))
          : state.videogames.sort((a, b) => (a.rating > b.rating ? -1 : 1));

      return {
        ...state,
        videogames: orderRating,
      };
    case FILTER_ALPHABETIC:
      const orderAlphabetic =
        action.payload === "asc"
          ? state.videogames.sort((a, b) => (a.name > b.name ? 1 : -1))
          : state.videogames.sort((a, b) => (a.name > b.name ? -1 : 1));

      return {
        ...state,
        videogames: orderAlphabetic,
      };
    case CREATED_EXISTING:
      const videogamesCreated = state.all_videogames;
      const created =
        action.payload === "created"
          ? videogamesCreated.filter((e) => e.created)
          : videogamesCreated.filter((e) => !e.created);
      return {
        ...state,
        videogames: action.payload === "All" ? state.all_videogames : created,
      };
      case DETAILS_BUG:  
      return {
        ...state,
        videogame_id: action.payload
      };
     
    default:
      return state;
  }
};