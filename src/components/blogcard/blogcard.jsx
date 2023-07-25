import classes from "./blogcard.module.css";

const BlogCard = (props) => {
  return (
    <div className={classes.blogcard}>
      <div className={classes.header}>
        <h3>{props.blog.title}</h3>
        <h2>#{props.blog.id}</h2>
      </div>

      <h4>{props.blog.day}</h4>
      <div
        className={classes.preview}
        style={{
          backgroundImage: `url(${props.blog.image})`,
        }}
      />
      <p>{props.blog.body}</p>
    </div>
  );
};
export default BlogCard;
