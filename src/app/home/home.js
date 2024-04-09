"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";



export default function Home() {
  const [test, setTest] = useState(null);
  console.log(test);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/articles');
        console.log(response.data.articles[1]);
        setTest(response.data.articles);

      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link" href="">Your Feed</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">Global Feed</a>
                </li>
              </ul>
            </div>

            {/* <div className="article-preview"> */}
              {test?.map((article, index) => {
                return (
                  <div className="article-preview">
                    <div classname="article-meta">
                      <a href="/profile/eric-simons">
                        <img src="http://i.imgur.com/Qr71crq.jpg" />
                      </a>
                      <div classname="info">
                        <a href="/profile/eric-simons" classname="author">
                          Eric Simons
                        </a>
                        <span classname="date">January 20th</span>
                      </div>
                      <button classname="btn btn-outline-primary btn-sm pull-xs-right">
                        <i classname="ion-heart" /> 29
                      </button>
                    </div>
                    <a href="/article/how-to-build-webapps-that-scale" class="preview-link">
                      <h1>{article.title}</h1>
                      <p>{article.description}</p>
                      <span>Read more...</span>
                      <ul class="tag-list">
                        <li class="tag-default tag-pill tag-outline">{article.tag}</li>
                      </ul>
                    </a>
                  </div>
                );
              })}
            {/* </div> */}

            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="">2</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a href="" className="tag-pill tag-default">programming</a>
                <a href="" className="tag-pill tag-default">javascript</a>
                <a href="" className="tag-pill tag-default">emberjs</a>
                <a href="" className="tag-pill tag-default">angularjs</a>
                <a href="" className="tag-pill tag-default">react</a>
                <a href="" className="tag-pill tag-default">mean</a>
                <a href="" className="tag-pill tag-default">node</a>
                <a href="" className="tag-pill tag-default">rails</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}