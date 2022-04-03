import React from "react";
import "./Blogs.css";
// import blockchainImg from "../../assets/images/Blog-Article-Images.jpg";
import { blogContent } from "./blogsData";
import uuid from "react-uuid";

const Blogs = () => {
  return (
    <div className="container blogs-section">
      <div className="row">
        <div className="col-12">
          <h2 className="blogs-title">Latest uploaded</h2>
        </div>
      </div>
      {blogContent.map(
        ({
          author,
          blogtitle,
          summary,
          publishDate,
          publishTime,
          blogImage,
        }) => {
          return (
            <div
              className="row justify-content-center seprate-blog-row align-items-center"
              key={uuid()}>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="blog_summary">
                  <h6 className="author_name">By {author}</h6>
                  <h2 className="blog_topic">{blogtitle}</h2>
                  <p className="shot_text">{summary}</p>
                  <div className="d-flex flex-row align-items-center">
                    <p className="blog_date">{publishDate}</p>
                    <p className="blog_time">{publishTime}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-lg-6 col-12">
                <div>
                  <img src={blogImage} alt="blockchain" className="blogs_img" />
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Blogs;
