import React from "react";

const Headline = () => {
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
    </>
  );
};

export default Headline;
