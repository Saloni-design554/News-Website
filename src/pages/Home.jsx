import React from "react";
import Feature from "./Feature";
import Latest from "./Latest";
import Popular from "./Popular";


const Home = () => {
  return (
    <>
    

      {/* <!-- Headline --> */}
      <div className="container">
        <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
          <div className="f2-s-1 p-r-30 size-w-0 m-tb-6 flex-wr-s-c">
            <span className="text-uppercase cl2 p-r-8">Trending Now:</span>

            <div className="scrolling-text">
              <span className="scroll-item">
                Interest rate angst trips up US equity bull market
              </span>
              <span className="scroll-item">
                Designer fashion show kicks off Variety Week
              </span>
              <span className="scroll-item">
                Microsoft quisque at ipsum vel orci eleifend ultrices
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Feature post --> */}
     <Feature />
      {/* <!-- Post --> */}
      <section className="bg0 p-t-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="p-b-20">
                {/* <!-- Entertainment --> */}
                <div className="tab01 p-b-20">
                  <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                    {/* <!-- Brand tab --> */}
                    <h3 className="f1-m-2 cl12 tab01-title">Entertainment</h3>

                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tab1-1"
                          role="tab"
                        >
                          All
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab1-2"
                          role="tab"
                        >
                          Celebrity
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab1-3"
                          role="tab"
                        >
                          Movies
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab1-4"
                          role="tab"
                        >
                          Music
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab1-5"
                          role="tab"
                        >
                          Games
                        </a>
                      </li>

                      <li className="nav-item-more dropdown dis-none">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </a>

                        <ul className="dropdown-menu"></ul>
                      </li>
                    </ul>

                    {/* <!--  --> */}
                    <a
                      href="category-01.html"
                      className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                    >
                      View all
                      <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                    </a>
                  </div>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content p-t-35">
                    {/* <!-- - --> */}
                    <div
                      className="tab-pane fade show active"
                      id="tab1-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-05.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  American live music lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-06.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-07.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Game
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-08.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Celebrity
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- - --> */}
                    <div className="tab-pane fade" id="tab1-2" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-09.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  American live music lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-08.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Celebrity
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-06.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-07.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Game
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- - --> */}
                    <div className="tab-pane fade" id="tab1-3" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-08.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  American live music lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-07.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Celebrity
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-06.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-05.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Game
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- - --> */}
                    <div className="tab-pane fade" id="tab1-4" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-06.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  American live music lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-09.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Celebrity
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-07.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-08.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Game
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- - --> */}
                    <div className="tab-pane fade" id="tab1-5" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-07.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  American live music lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-08.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Celebrity
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-06.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-09.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Game
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Business --> */}
                <div className="tab01 p-b-20">
                  <div className="tab01-head how2 how2-cl2 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                    {/* <!-- Brand tab --> */}
                    <h3 className="f1-m-2 cl13 tab01-title">Business</h3>

                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tab2-1"
                          role="tab"
                        >
                          All
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab2-2"
                          role="tab"
                        >
                          Finance
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab2-3"
                          role="tab"
                        >
                          Money & Markets
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab2-4"
                          role="tab"
                        >
                          Small Business
                        </a>
                      </li>

                      <li className="nav-item-more dropdown dis-none">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </a>

                        <ul className="dropdown-menu"></ul>
                      </li>
                    </ul>

                    {/* <!--  --> */}
                    <a
                      href="category-01.html"
                      className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                    >
                      View all
                      <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                    </a>
                  </div>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content p-t-35">
                    {/* <!-- - --> */}
                    <div
                      className="tab-pane fade show active"
                      id="tab2-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-10.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  Bitcoin lorem ipsum dolor sit amet consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Finance
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-11.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Small Business
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-12.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Economy
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-13.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Money & Markets
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- - --> */}
                    <div className="tab-pane fade" id="tab2-2" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-13.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  Bitcoin lorem ipsum dolor sit amet consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Finance
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-12.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Small Business
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-11.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Economy
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-10.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Money & Markets
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- - --> */}
                    <div className="tab-pane fade" id="tab2-3" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-11.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  Bitcoin lorem ipsum dolor sit amet consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Finance
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-12.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Small Business
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-13.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Economy
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-10.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Money & Markets
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- - --> */}
                    <div className="tab-pane fade" id="tab2-4" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-12.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  Bitcoin lorem ipsum dolor sit amet consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Finance
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-13.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Small Business
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-10.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Economy
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-11.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Money & Markets
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Travel --> */}
                <div className="tab01 p-b-20">
                  <div className="tab01-head how2 how2-cl3 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                    {/* <!-- Brand tab --> */}
                    <h3 className="f1-m-2 cl14 tab01-title">Travel</h3>

                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tab3-1"
                          role="tab"
                        >
                          All
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab3-2"
                          role="tab"
                        >
                          Hotels
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab3-3"
                          role="tab"
                        >
                          Flight
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab3-4"
                          role="tab"
                        >
                          Beachs
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab3-5"
                          role="tab"
                        >
                          Culture
                        </a>
                      </li>

                      <li className="nav-item-more dropdown dis-none">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </a>

                        <ul className="dropdown-menu"></ul>
                      </li>
                    </ul>

                    {/* <!--  --> */}
                    <a
                      href="category-01.html"
                      className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                    >
                      View all
                      <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                    </a>
                  </div>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content p-t-35">
                    {/* <!-- - --> */}
                    <div
                      className="tab-pane fade show active"
                      id="tab3-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-14.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-15.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-16.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-17.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- - --> */}
                    <div className="tab-pane fade" id="tab3-2" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-15.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-16.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-17.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-18.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- - --> */}
                    <div className="tab-pane fade" id="tab3-3" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-16.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-17.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-18.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-14.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- - --> */}
                    <div className="tab-pane fade" id="tab3-4" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-17.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-18.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-14.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-15.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- - --> */}
                    <div className="tab-pane fade" id="tab3-5" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-18.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-17.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-16.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-15.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Popular />
            
          </div>
        </div>
      </section>

      {/* <!-- Latest --> */}
   <Latest />
  

      {/* <!-- Back to top --> */}
      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <span className="fas fa-angle-up"></span>
        </span>
      </div>

      {/* <!-- Modal Video 01--> */}
      <div
        className="modal fade"
        id="modal-video-01"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document" data-dismiss="modal">
          <div
            className="close-mo-video-01 trans-0-4"
            data-dismiss="modal"
            aria-label="Close"
          >
            &times;
          </div>

          <div className="wrap-video-mo-01">
            <div className="video-mo-01">
              <iframe
                src="https://www.youtube.com/embed/wJnBTPUQS5A?rel=0"
                allowFullScreen
                title="Video Modal"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;