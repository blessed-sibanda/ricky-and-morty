import PropTypes from "prop-types";

function Character({ name, image, origin }) {
  return (
    <div className="col-9 col-sm-6 col-md-4 col-lg-3">
      <div className="card mb-3">
        <img src={image} className="card-img-top" alt={name} width="300" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p>{`Origin: ${origin && origin.name}`}</p>
        </div>
      </div>
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  origin: PropTypes.object,
};

export default Character;
