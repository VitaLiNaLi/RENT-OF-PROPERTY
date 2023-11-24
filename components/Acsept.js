<button
                  type="button"
                  className="mapBtn btn btn-primary btn-lg px-4 me-md-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  карта
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Подтверждение удаления записи
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">{place.name},{place.price}, {place.description}{" "} </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          ОТМЕНА УДАЛЕНИЯ
                        </button>
                        <button type="button" className="delBtn btn btn-primary data-id={place.id}">
                          ПОДТВЕРЖДАЮ УДАЛЕНИЕ
                        </button>
                        <span id='feedback'></span>
                      </div>
                    </div>
                  </div>
                </div>
