import React from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <>
      {/* <!-- Feature post --> */}
      <section className="bg0">
        <div className="container">
          <div className="row m-rl--1">
            <div className="col-md-6 p-rl-1 p-b-2">
              <div
                id="trendingSlider"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                {/* Indicators */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#trendingSlider"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#trendingSlider"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#trendingSlider"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                  {/* Slide 1 */}
                  <div className="carousel-item active">
                    <div
                      className="trending-top mb-30"
                      style={{
                        backgroundImage: "url(assets/images/post-01.jpg)",
                        height: "440px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                        {/* <a
                          href="#"
                          className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                        >
                          Business
                        </a> */}
                        <Link
                          to="/"
                          className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                        >
                          Business
                        </Link>

                        <h3 className="how1-child2 m-t-14 m-b-10">
                          {/* <a
                            href="blog-detail-01.html"
                            className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03"
                          >
                            Microsoft quisque at ipsum vel orci eleifend
                            ultrices
                          </a> */}
                           <Link
                          to="/"
                          className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03"
                        >
                           Microsoft quisque at ipsum vel orci eleifend
                           ultrices
                        </Link>
                        </h3>

                        <span className="how1-child2">
                          <span className="f1-s-4 cl11">Jack Sims</span>
                          <span className="f1-s-3 cl11 m-rl-3">-</span>
                          <span className="f1-s-3 cl11">Feb 16</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div className="carousel-item">
                    <div
                      className="trending-top mb-30"
                      style={{
                        backgroundImage: "url(assets/images/post-02.jpg)",
                        height: "440px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                        {/* <a
                          href="#"
                          className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                        >
                          Business
                        </a> */}
                        <Link
                          to="/"
                          className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                        >
                           Business
                        </Link>

                        <h3 className="how1-child2 m-t-14 m-b-10">
                          {/* <a
                            href="blog-detail-01.html"
                            className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03"
                          >
                            Designer fashion show kicks off Variety Week
                          </a> */}
                            <Link
                          to="/"
                          className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03"
                        >
                           Designer fashion show kicks off Variety Week
                        </Link>
                        </h3>

                        <span className="how1-child2">
                          <span className="f1-s-4 cl11">Jane Doe</span>
                          <span className="f1-s-3 cl11 m-rl-3">-</span>
                          <span className="f1-s-3 cl11">Feb 15</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div className="carousel-item">
                    <div
                      className="trending-top mb-30"
                      style={{
                        backgroundImage: "url(assets/images/post-03.jpg)",
                        height: "440px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                        {/* <a
                          href="#"
                          className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                        >
                          Business
                        </a> */}
                          <Link
                          to="/"
                          className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                        >
                           Business
                        </Link>

                        <h3 className="how1-child2 m-t-14 m-b-10">
                          {/* <a
                            href="blog-detail-01.html"
                            className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03"
                          >
                            Interest rate angst trips up US equity bull market
                          </a> */}
                           <Link
                          to="/"
                          className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03"
                        >
                          Interest rate angst trips up US equity bull market
                        </Link>
                        </h3>

                        <span className="how1-child2">
                          <span className="f1-s-4 cl11">John Smith</span>
                          <span className="f1-s-3 cl11 m-rl-3">-</span>
                          <span className="f1-s-3 cl11">Feb 14</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#trendingSlider"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#trendingSlider"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>

            <div className="col-md-6 p-rl-1">
              <div className="row m-rl--1">
                {/* First Article */}
                <div className="col-12 p-rl-1 p-b-2">
                  <div
                    className="bg-img1 size-a-4 how1 pos-relative"
                    style={{
                      backgroundImage: "url(assets/images/post-02.jpg)",
                    }}
                  >
                    <a
                      href="blog-detail-01.html"
                      className="dis-block how1-child1 trans-03"
                    ></a>

                    <div className="flex-col-e-s s-full p-rl-25 p-tb-24">
                      {/* <a
                        href="#"
                        className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                      >
                        Culture
                      </a> */}
                       <Link
                          to="/"
                          className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                        >
                            Culture
                        </Link>

                      <h3 className="how1-child2 m-t-14">
                        {/* <a
                          href="blog-detail-01.html"
                          className="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03"
                        >
                          London ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </a> */}
                         <Link
                          to="/"
                          className="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03"
                        >
                            London ipsum dolor sit amet, consectetur adipiscing
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Second Article */}
                <div className="col-sm-6 p-rl-1 p-b-2">
                  <div
                    className="bg-img1 size-a-5 how1 pos-relative"
                    style={{
                      backgroundImage: "url(assets/images/post-03.jpg)",
                    }}
                  >
                    <a
                      href="blog-detail-01.html"
                      className="dis-block how1-child1 trans-03"
                    ></a>

                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                      {/* <a
                        href="#"
                        className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                      >
                        Life Style
                      </a> */}
                        <Link
                          to="/"
                          className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                        >
                           Life Style
                        </Link>

                      <h3 className="how1-child2 m-t-14">
                        {/* <a
                          href="blog-detail-01.html"
                          className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                        >
                          Pellentesque dui nibh, pellen-tesque ut dapibus ut
                        </a> */}
                         <Link
                          to="/"
                          className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                        >
                            Pellentesque dui nibh, pellen-tesque ut dapibus ut
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Third Article */}
                <div className="col-sm-6 p-rl-1 p-b-2">
                  <div
                    className="bg-img1 size-a-5 how1 pos-relative"
                    style={{
                      backgroundImage: "url(assets/images/post-04.jpg)",
                    }}
                  >
                    <a
                      href="blog-detail-01.html"
                      className="dis-block how1-child1 trans-03"
                    ></a>

                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                      {/* <a
                        href="#"
                        className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                      >
                        Sport
                      </a> */}
                       <Link
                          to="/"
                          className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                        >
                             Sport
                        </Link>

                      <h3 className="how1-child2 m-t-14">
                        {/* <a
                          href="blog-detail-01.html"
                          className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                        >
                          Motobike Vestibulum vene-natis purus nec nibh volutpat
                        </a> */}
                        <Link
                          to="/"
                          className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                        >
                              Motobike Vestibulum vene-natis purus nec nibh volutpat
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
