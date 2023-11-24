<button
type="button"
className=" changeBtn btn btn-outline-secondary btn-lg px-4"
data-id={place.id}
data-bs-toggle={`offcanvas ${place.id}`}
data-bs-target={`#offcanvasExample ${place.id}`}
aria-controls={`offcanvasExample ${place.id}`}
>
Редактировать
</button>
<div
className={`offcanvas ${place.id} offcanvas-start`}
tabIndex="-1"
id={`offcanvasExample${place.id}`}
aria-labelledby={`offcanvasExampleLabel ${place.id}`}
>
<div className="offcanvas-header">
  <h5 className="offcanvas-title" id={`offcanvasExampleLabel ${place.id}`}>
    Offcanvas bottom
  </h5>
  <button
    type="button"
    className="btn-close"
    data-bs-dismiss={`offcanvas ${place.id}`}
    aria-label="Close"
  ></button>
</div>
<div className="offcanvas-body">
  <div className="lead">
    <ChangePlace key={place.id} place={place} />
  </div>
</div>
</div>