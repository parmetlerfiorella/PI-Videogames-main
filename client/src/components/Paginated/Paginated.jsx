import "./Paginated.css";

const Paginated = ({ gamesPerPage, videogames, paginated }) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(videogames / gamesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav className="nav__paginated">
      <ul className="nav__paginated__ul">
        {pageNumbers &&
          pageNumbers.map((n) => (
            <li key={n}>
              <button onClick={() => paginated(n)}>{n}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginated;