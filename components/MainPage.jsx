const React = require('react');
const Layout = require('./Layout');
const Place = require('./Place');

function MainPage({ title, allCategories, allPlaces }) {
  return (
    <Layout title={title}>
      <div className="mainContainer">
        <div className="divFilter">
          <form action="/ape/filter" method="POST" className="filters">
            <fieldset name="blockCats">
              <legend>Категории</legend>
              {allCategories.map((el) => (
                <label>
                  {el.name}
                  <input
                    type="checkbox"
                    className="chooseCat"
                    name={el.id}
                    key={el.id}
                  />
                  <br />
                </label>
              ))}
            </fieldset>
            <fieldset name="blockFilts">
              <legend>Фильтры</legend>
              <label>
                Цена
                <input
                  type="range"
                  step="1000"
                  min="0"
                  max="1000000"
                  name="price"
                />
              </label>
            </fieldset>
          </form>
        </div>
        <div className="placeList">
          {allPlaces.map((place) => (
            <Place place={place} key={place.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
