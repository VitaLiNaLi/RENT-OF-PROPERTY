const React = require('react');
const { EOL } = require('os');

function Place({ place }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={place.Photos[0].img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{place.name}</h5>
        <p className="card-text">
          {place.description} <br />
          {`Стоимость: ${place.price} руб/мес`}
        </p>
        <a href="#" className="btn btn-primary">
          &#x2764;&#xfe0f;
        </a>
      </div>
    </div>
  );
}

module.exports = Place;
