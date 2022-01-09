import React from "react";
import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  console.log("params id ", id)
  const {
    error,
    isPending,
    data: blog,
  } = useFetch("http://localhost:8000/blogs/" + id);
  console.log("data is", blog)
  return (
    <div className="blog-details">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
