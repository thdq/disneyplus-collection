import "./styles.scss";
import { trending } from "../../services/listMovies";

const NewDisney = () => {
  return (
    <div className="collection-trending">
      <h4>Tendências</h4>
      <div className="collection-trending__content">
        {trending &&
          trending.map((movie, key) => (
            <div className="collection-trending__wrap" key={key}>
              <img src={movie.cardImg} alt={movie.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewDisney;
