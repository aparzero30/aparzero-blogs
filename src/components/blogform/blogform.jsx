import { Form } from "react-router-dom";
import FormInput from "../../ui/FormInput/forminput";
import classes from "./blogform.module.css";
import { useState } from "react";
import BlogFormHelper from "./blogformHelper";

const BlogForm = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [loading, setLoading] = useState(false);

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
    setLoading((prev) => {
      !prev;
    });
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
    setLoading((prev) => {
      !prev;
    });
  };

  return (
    <form className={classes.form} onSubmit={submitBlog}>
      <FormInput
        label="Title"
        type="title"
        name="blogTitle"
        required={true}
        onChange={titleChange}
      />
      <textarea rows={5} onChange={bodyChange} placeholder="type here..." />
      <div className={classes.upload}>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className={classes.uploadbtn}
        />
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

      {!loading && <button type="submit">PUBLISH</button>}
      {loading && (
        <div className={classes.loading}>
          <i className="fa-brands fa-react fa-spin" />
        </div>
      )}
    </form>
  );
};
export default BlogForm;
