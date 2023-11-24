const React = require("react");
// const ChangePlace = require("./ChangePlace");

module.exports = function Offcanvas({ place }) {
  //    console.log({place});
  return (
    <form id="formUpdate" method="PUT" action="/update">
    <div
      className="offcanvas offcanvas-start"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel" name='id'>
          {place.id}
        </h5>
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button> */}
      </div>
      <div className="offcanvas-body">
        <div className="lead">
          {/* <-------------------------FORM-----------------------> */}
          <div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Название
              </span>
              <textarea
                type="text"
                className="form-control"
                placeholder="Placename"
                aria-label="Placename"
                aria-describedby="basic-addon1"
                defaultValue={place.name}
                name='name'
                
              ></textarea>
            </div>

            <div className="input-group">
              <span className="input-group-text">Описание</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                defaultValue={place.description}
                name='description'
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="basic-url" className="form-label">
                ссылка на фото(поправь!)
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">
                  https://
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
              <div className="form-text" id="basic-addon4" name='price'>
                Цена за месяц проживания
              </div>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">₽</span>
              <textarea
                type="text"
                className="form-control"
                aria-label="Amount"
              />
              <span className="input-group-text">.00</span>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="submit"
                className=" upDateBtn btn btn-primary btn-lg px-4 me-md-2"
                data-id={place.id}
              >
                Обновить
              </button>
            </div>
          </div>
          {/* <-------------------------FORM-----------------------> */}
          {/* <ChangePlace key=place.id place=place /> */}
        </div>
      </div>
    </div>
    </form>
  );
};
