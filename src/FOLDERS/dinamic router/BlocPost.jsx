import { useLocation, useParams } from "react-router-dom";

const BlocPost = () => {
  const { id } = useParams();
const location = useLocation()
  return (
    <>
      <h2>Blog post {id}</h2>
      <p>current URL {location.pathname}</p>
    </>
  );
};

export default BlocPost;
