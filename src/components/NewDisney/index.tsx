import "./styles.scss";
import { newDisney } from "../../services/listMovies";

const NewDisney = () => {
  return (
    <div className="collection-new-disney">
      <h4>Novidades da Disney+</h4>
      <div className="collection-new-disney__content">
        {newDisney &&
          newDisney.map((movie, key) => (
            <div className="collection-new-disney__wrap" key={key}>
              <img src={movie.cardImg} alt={movie.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewDisney;
