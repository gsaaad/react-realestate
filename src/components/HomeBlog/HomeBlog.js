import "./HomeBlog.css";
const HomeBlog = () => {
  return (
    <div className="bg-light mx-auto my-3 p-2 border bg-gradient rounded-pill half-width">
      <div>
        <h2>Home Sweet Home Blog</h2>
      </div>
      <div>
        <article className="bg-secondary rounded-pill half-width my-2">
          <h3 className="my-2">Article Heading</h3>
          <section className="my-2">Article Body</section>
        </article>
      </div>
    </div>
  );
};

export default HomeBlog;
