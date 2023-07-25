import { useState } from "react";
import BlogWrapper from "../../ui/blogwrapper/blogwrapper";
import { useEffect } from "react";
import BlogCard from "../../components/blogcard/blogcard";

const MainPage = () => {
  const [latestBlog, setLatestBlog] = useState({
    id: 0,
    title: "This is hosted for free...",
    date: "this may take a while...",
    day: "this may take a while...",
    image: "this may take a while...",
    body: "this may take a while...",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const url = "http://localhost:8080/reader/getLatest";
        const url = "https://aparzero-blog-be.onrender.com/reader/getLatest";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setLatestBlog(data);
      } catch (error) {
        // Handle error if the API call fails
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BlogWrapper>
      <BlogCard blog={latestBlog} />
    </BlogWrapper>
  );
};
export default MainPage;
