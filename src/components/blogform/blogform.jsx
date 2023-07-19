import { Form } from "react-router-dom";
import FormInput from "../../ui/FormInput/forminput";
import classes from "./blogform.module.css";
import { useState } from "react";
import BlogFormHelper from "./blogformHelper";

const BlogForm = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const bodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageString = e.target.result;
        console.log(imageString);
        setImage(imageString);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitBlog = async (event) => {
    event.preventDefault();

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    const day = daysOfWeek[dayIndex];

    const data = await BlogFormHelper({ title, day, image, body });
    console.log(data);
  };

  return (
    <form className={classes.form} onSubmit={submitBlog}>
      <h1>aparzero</h1>
      <FormInput
        label="Title"
        type="title"
        name="blogTitle"
        required={true}
        onChange={titleChange}
      />
      <div className={classes.upload}>
        <input type="file" accept="image/*" onChange={handleUpload} />
      </div>

      <div
        className={classes.preview}
        style={{
          backgroundImage: `url(${image})`,
          minHeight: image ? "10vw" : "0",
        }}
      >
        Preview
      </div>
      <textarea rows={5} onChange={bodyChange} placeholder="type here..." />

      <button type="submit">PUBLISH</button>
    </form>
  );
};
export default BlogForm;
