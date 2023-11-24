const React = require("react");

module.exports = function Photo({ photo, flag }) {
  return (
    <div className={`carousel-item ${flag && "active"}`}>
      <img
        src={photo}
        className="d-block w-100"
        alt="..."
        width="600"
        height="400"
        loading="lazy"
      />

      {/* <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carousel${photo.id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carousel${photo.id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};
