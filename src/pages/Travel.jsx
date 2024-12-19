import React from "react";

const Travel = () => {
    return(
        <>
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
        </>
    );
};

export default Travel;