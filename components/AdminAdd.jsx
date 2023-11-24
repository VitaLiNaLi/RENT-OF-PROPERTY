const React = require("react");

module.exports = function AdminAdd( ) {
  return (

  
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
        {/* {  console.log(categories)} */}
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Добавление нового клиента
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
            ></button>
          </div>
          <div className="modal-body">
            {/* ------------Здесь начинается форма------------ */}
            <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Название 
        </span>
        <label for="place-select">Выберите категорию:</label>
        {/* <select>
        {categories.map((el) => {(el.map((e)=>
          <option value={e.id}>{e.name}</option>)
        )})}
      </select> */}
        <input
          type="text"
          className="form-control"
          placeholder="Placename"
          aria-label="Placename"
          aria-describedby="basic-addon1"
          defaultValue={place.name}/>
      </div>

      <div className="input-group">
        <span className="input-group-text">Описание</span>
        <input className="form-control" aria-label="With textarea" defaultValue={place.description}/>
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
</div>

            {/* ------------Здесь начинается форма------------ */}
          
          
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Закрыть
            </button>
            <button type="submit" className="btn btn-primary">
              Сохранить изменения
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
