const React = require("react");
const Photo = require("./Photo");
// const ChangePlace = require("./ChangePlace");
const Offcanvas = require("./Offcanvas");
const Map = require("./Map");

module.exports = function AdminString({ place }) {
  return (
    <div className="accordion" id="accordionExample" data-id={place.id}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${place.id}`}
            aria-expanded="true"
            aria-controls={`collapse${place.id}`}
          >
            {place.name}
          </button>
        </h2>

        <div
          id={`collapse${place.id}`}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {/* ----здесь я гружу контент----*/}
            <div className="container col-xxl-8 px-4 py-5">
              <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                  {/* ----здесь я гружу фото----*/}
                  <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
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
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Предыдущий</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Следующий</span>
                    </button>
                  </div>
                  {/* ----здесь я гружу фото----*/}
                </div>
                <div className="col-lg-6">
                  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                    {place.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width=""
                      height="32"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </h1>
                  {/* ----------------------MAP---------------- */}
                  {/* <!-- Кнопка-триггер модального окна --> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Посмотреть расположение объекта
                  </button>

                  {/* <!-- Модальное окно --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                          >
                            Расположение объекта
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Закрыть"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <Map></Map>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Закрыть
                          </button>
                          <button type="button" className="btn btn-primary">
                            Понял
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* -----------MAP----------------- */}

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
                    {/* ----здесь я гружу update----*/}
                    <div className="update" data-id={place}>
                      <button
                        type="button"
                        className=" changeBtn btn btn-outline-secondary btn-lg px-4"
                        data-id={place.id}
                        data-name={place.name}
                        data-description={place.description}
                        data-price={place.price}
                        // data-bs-toggle="offcanvas"
                        // data-bs-target="#offcanvasExample"
                        // aria-controls="offcanvasExample"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalChange"
                      >
                        Редактировать
                      </button>
                      {/* ----------CHANGE----------------- */}
                      <form id="formUpdateSecond">
                        <div
                          className="modal fade"
                          id="exampleModalChange"
                          tabIndex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          {/* {  console.log(categories)} */}
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Изменение клиента
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
                                    <span
                                      className="input-group-text"
                                      id="basic-addon1"
                                    >
                                      Название
                                    </span>
                                    <input
                                      className="form-control"
                                      aria-label="With textarea"
                                      name="id"
                                      placeholder={place.id}
                                      defaultValue={place.id}
                                    />
                                    <label htmlFor="place-select">
                                      Выберите категорию:
                                    </label>
                                    {/* <select>
        {categories.map((el) => {(el.map((e)=>
          <option value={e.id}>{e.name}</option>)
        )})}
      </select> */}
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder={place.name}
                                      aria-label="Placename"
                                      aria-describedby="basic-addon1"
                                      defaultValue={place.name}
                                      name="name"
                                    />
                                  </div>

                                  <div className="input-group">
                                    <span className="input-group-text">
                                      Описание
                                    </span>
                                    <input
                                      className="form-control"
                                      aria-label="With textarea"
                                      name="description"
                                      placeholder={place.description}
                                      defaultValue={place.description}
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="basic-url"
                                      className="form-label"
                                    >
                                      ссылка на фото(поправь!)
                                    </label>
                                    <div className="input-group">
                                      <span
                                        className="input-group-text"
                                        id="basic-addon3"
                                      >
                                        https://
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="basic-url"
                                        aria-describedby="basic-addon3 basic-addon4"
                                      />
                                    </div>
                                    <div
                                      className="form-text"
                                      id="basic-addon4"
                                    >
                                      Цена за месяц проживания
                                    </div>
                                  </div>

                                  <div className="input-group mb-3">
                                    <span className="input-group-text">₽</span>
                                    <textarea
                                      type="text"
                                      className="form-control"
                                      aria-label="Amount"
                                      name="price"
                                      placeholder={place.price}
                                      defaultValue={place.price}
                                    />
                                    <span className="input-group-text">
                                      .00
                                    </span>
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
                                <button
                                  type="submit"
                                  className="changeBtnSecond btn btn-primary"
                                >
                                  Сохранить изменения
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      {/* -----------------AAADDDD---------------- */}
                      {<Offcanvas key={place.id} place={place} />}
                    </div>
                    {/* ----здесь я гружу update----*/}
                  </div>
                </div>
              </div>
            </div>
            {/* ----здесь я гружу контент----*/}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
