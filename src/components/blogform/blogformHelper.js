import { json } from "react-router-dom";
const BlogFormHelper = async (blog) => {
  const jwt = localStorage.getItem("JWT-TOKEN");

  let url = "http://localhost:8080/writer/create";
  // let url = " https://aparzero-blog-be.onrender.com/writer/create";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(blog),
  });

  if (!response.ok) {
    // Handle error response
    //   throw new Error("Failed to load user data");
    throw json({ message: "failed to load resources" }, { status: 500 });
  }
  // Handle successful response
  const data = await response.json();
  console.log(data);
  return data;
};

export default BlogFormHelper;
