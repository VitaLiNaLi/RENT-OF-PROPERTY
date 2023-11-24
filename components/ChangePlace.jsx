const React = require("react");

module.exports = function ChangePlace({ place }) {
  return (
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
></textarea>
      </div>

      <div className="input-group">
        <span className="input-group-text">Описание</span>
        <textarea className="form-control" aria-label="With textarea" defaultValue={place.description}></textarea>
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
        <div className="form-text" id="basic-addon4">
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
                  type="button"
                  className=" upDateBtn btn btn-primary btn-lg px-4 me-md-2"
                  data-id={place.id}
                >
                  Обновить
                </button> 
      </div>


    </div>
  );
};
