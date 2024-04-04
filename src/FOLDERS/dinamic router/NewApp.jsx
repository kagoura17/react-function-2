import { Link } from "react-router-dom";

const NewApp = () => {
    const blogPosts = [
        {
          id: 1,
          title: "First Blog Post",
          content: "Content of the first blog post.",
        },
        {
          id: 2,
          title: "Second Blog Post",
          content: "Content of the second blog post.",
        },
        {
          id: 3,
          title: "Third Blog Post",
          content: "Content of the third blog post.",
        },
      ];
      return <>
      <div>
            <h1>Blog Posts</h1>
            <ul>
              {blogPosts.map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
      
      </>;
    };

export default NewApp;