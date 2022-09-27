import { Link } from "react-router-dom";
import "./landing.css"

const landing = () => {
    return (
        <main className="main">
            <Link to="/videogames" className="main__btn">
               START PLAY
            </Link>
            
            
        </main>
    )
};

export default landing;