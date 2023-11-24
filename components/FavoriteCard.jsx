const React = require('react');

function FavoriteCard(favorite) {
  const fav = favorite.favorite.dataValues.Place.dataValues;
  const photo = fav.Photos[0].dataValues.img
  return (
  <div className="card" style={{ width: '18rem' }}>
    <img src={photo} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{fav.name}</h5>
      <p className="card-text">
        {fav.description} <br />
        {`Стоимость: ${fav.price} руб/мес`}
      </p>
      <a href="#" className="btn btn-primary">
        &#x1f494;
      </a>
    </div>
  </div>
  );
}

module.exports = FavoriteCard;
