import "./HomeBlog.css";

const HomeBlog = () => {
  return (
    <div className="bg-primary mt-3 border bg-gradient">
      <div className="blog-header bg-light bg-gradient">
        <h2 className="border-bottom">Home-Sweet-Home Blog</h2>
      </div>
      {/* most recent post */}
      <div className="recent-post">
        <a href="/">
          <section>
            <article className=" border-bottom bg-light">
              <img
                src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
                style={{ width: "95%", borderRadius: "10px" }}
                alt="home real estate sweet home blog article"
              />
              <span className="date-card bg-light bg-gradient ">
                Dec 22, 2022
              </span>
              <h3 className="text-primary bg-gradient border-top border-4 fs-1">
                Top Paint Colors for 2023
              </h3>
              <div className="text-dark article-details bg-gradient ">
                <span>Interior Design</span>|<span>By: John Doe</span>
              </div>
            </article>
          </section>
        </a>
      </div>
      <div className="latest-posts-container">
        <h1 className="bg-light rounded-pill ">Latest Posts</h1>
        <div className="card latest-posts">
          <a href="/">
            <section className="article-main">
              <article className=" my-2">
                <img
                  src="https://images.pexels.com/photos/5998051/pexels-photo-5998051.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
                  style={{ width: "95%", borderRadius: "10px" }}
                  alt="home real estate sweet home blog article"
                />

                <span className="latest-date-card bg-light bg-gradient ">
                  Dec 17, 2022
                </span>
                <h3 className="text-primary bg-gradient border-top border-4 fs-1">
                  Should you sell your home in 2023?
                </h3>
                <div className="text-dark article-details bg-gradient ">
                  <span>Buying & Selling</span>|<span>By: Michelle Gwen</span>
                </div>
              </article>
            </section>
          </a>
        </div>

        <div className="card latest-posts">
          <a href="/">
            <section className="article-main">
              <article className=" my-2">
                <img
                  src="https://images.pexels.com/photos/12119320/pexels-photo-12119320.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
                  style={{ width: "95%", borderRadius: "10px" }}
                  alt="home real estate sweet home blog article"
                />

                <span className="latest-date-card bg-light bg-gradient ">
                  Dec 12, 2022
                </span>
                <h3 className="text-primary bg-gradient border-top border-4 fs-1">
                  5 Home Improvements You need To Try
                </h3>
                <div className="text-dark article-details bg-gradient ">
                  <span>Home Improvements</span>|<span>By: Mike Smith</span>
                </div>
              </article>
            </section>
          </a>
        </div>
        <div className="card latest-posts">
          <a href="/">
            <section className="article-main">
              <article className=" my-2">
                <img
                  src="https://images.pexels.com/photos/3782317/pexels-photo-3782317.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
                  style={{ width: "95%", borderRadius: "10px" }}
                  alt="home real estate sweet home blog article"
                />

                <span className="latest-date-card bg-light bg-gradient ">
                  Dec 07, 2022
                </span>
                <h3 className="text-primary bg-gradient border-top border-4 fs-1">
                  Top 10 Ways To Save On Your Home Bills
                </h3>
                <div className="text-dark article-details bg-gradient ">
                  <span>Sweet Savings</span>|<span>By: Daniel Rowler</span>
                </div>
              </article>
            </section>
          </a>
        </div>
        <div className="card latest-posts">
          <a href="/">
            <section className="article-main">
              <article className=" my-2">
                <img
                  src="https://images.pexels.com/photos/6289026/pexels-photo-6289026.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
                  style={{ width: "95%", borderRadius: "10px" }}
                  alt="home real estate sweet home blog article"
                />

                <span className="latest-date-card bg-light bg-gradient ">
                  Dec 07, 2022
                </span>
                <h3 className="text-primary bg-gradient border-top border-4 fs-1">
                  How Does Rising Interest Rates Affect My Mortgage?
                </h3>
                <div className="text-dark article-details bg-gradient ">
                  <span>Financial E-Learning</span>|<span>By: Megan Cadet</span>
                </div>
              </article>
            </section>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
