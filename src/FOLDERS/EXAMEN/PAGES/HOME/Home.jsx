import NavBar from "../../Conponents/Navbar/NavBar";
import blop from "../../Conponents/IMAGES/blop.png";
import shaking from "../../Conponents/IMAGES/shaking.svg";
import "./home.css";
import "animate.css";
const Home = () => {
  return (
    <>
      <div className="nav">
        <NavBar></NavBar>
      </div>
      <div className="home">
        <div className="home-text">
          <h1 className=" animate__bounce">Welcome to our website!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium asperiores temporibus, rem fuga quae nam totam ea maxime
            libero tempora labore quos officiis repellat quia ipsum nesciunt
            explicabo at! Iusto sequi repellat id autem incidunt pariatur
            repellendus vero, architecto, et soluta, quae deserunt consequatur
            accusantium. Veritatis labore blanditiis possimus unde non?
            Necessitatibus fugiat, aperiam exercitationem id hic, velit commodi
            eius ipsum corrupti nihil assumenda eos quos eveniet veniam quia.
            Deleniti temporibus quis iure assumenda alias. Cupiditate deleniti
            maiores pariatur unde libero beatae, ratione quaerat eos accusamus
            autem porro rem, veritatis doloribus molestias aspernatur magni
            voluptatum dicta officiis aut, nesciunt quibusdam?
          </p>
        </div>
        <div className="home-img">
          <img src={blop} alt={blop} className="blop" />
          <img src={shaking} alt={shaking} className="shaking animate__swing" />
        </div>
      </div>
    </>
  );
};

export default Home;
