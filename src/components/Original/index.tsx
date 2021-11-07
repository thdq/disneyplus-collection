import "./styles.scss";
import { original } from "../../services/listMovies";

const NewDisney = () => {
  return (
    <div className="collection-original">
      <h4>Original</h4>
      <div className="collection-original__content">
        {original &&
          original.map((movie, key) => (
            <div className="collection-original__wrap" key={key}>
              <img src={movie.cardImg} alt={movie.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewDisney;
