import "./styles.scss";
import { recommended } from "../../services/listMovies";

const NewDisney = () => {
  return (
    <div className="collection-recommend">
      <h4>Recomendados para você</h4>
      <div className="collection-recommend__content">
        {recommended &&
          recommended.map((movie, key) => (
            <div className="collection-recommend__wrap" key={key}>
              <img src={movie.cardImg} alt={movie.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewDisney;
