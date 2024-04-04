import "./menu.css";

const Menu = ({ data }) => {
  return (
    <div className="menu-grid">
      {data.map((dishe) => {
        const { id, title, price, img, desc } = dishe;
        return (
          <div key={id} className="main">
            <img src={img} alt={title} />
            <div className="title-price">
              <h2>{title}</h2>
              <h3>{price}</h3>
            </div>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
