const React = require("react");
const Photo = require("./Photo");
const ChangePlace = require("./ChangePlace");

module.exports = function AdminString({ place }) {
  return (
    <div className={`Card ${place.id}`}>
      <button
        className="lead accordion-button "
        type="button"
        data-bs-toggle={`collapse `}
        data-bs-target={`#content `}
        aria-expanded="false"
        aria-controls={`collapse `}
      >
        {place.name}
      </button>
      <div
        className={`collapse `}
        id={`content `}
        data-bs-parent="#accordion"
      >
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              {/* <img
                src="bootstrap-themes.png"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              /> */}
              <div
                id="carouselSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {place.Photos.map((photo) => (
                    <Photo
                      key={photo.id}
                      photo={photo.img}
                      flag={photo.id === place.Photos[0].id}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                {place.name}
              </h1>
              <p className="lead">
                {place.price}, {place.description}{" "}
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className=" deleteBtn btn btn-primary btn-lg px-4 me-md-2"
                  data-id={place.id}
                >
                  Удалить
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};