const Tour = ({ id, image, name, price }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <h3>{price} $</h3>
      </div>
      <button>not interested</button>
    </div>
  );
};

export default Tour;
