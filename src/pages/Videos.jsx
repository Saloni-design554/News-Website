import React from "react";

const Videos = () => {
    return(
        <>
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
    )
}

export default Videos;