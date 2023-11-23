const React = require('react');

function Place({ place }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://m.terem-pro.ru/upload/iblock/aac/aacb8ad02704aba529852f015b50f522.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{ place.name }</h5>
        <p className="card-text">
          { place.description }
        </p>
        <a href="#" className="btn btn-primary">
          ЛАЙК!
        </a>
      </div>
    </div>
  );
}

module.exports = Place;
