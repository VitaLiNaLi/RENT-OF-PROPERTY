const React = require('react');
const Layout = require('./Layout');
const Place = require('./Place');

function MainPage({ title, allCategories, allPlaces }) {
  return (
    <Layout title={title}>
      <div className="mainContainer">
        <div className="divFilter">
          <form action="/" method="GET" className="filters">
            <fieldset name="blockCats">
              <legend>Категории</legend>
              {allCategories.map((el) => (
                <label>
                  {el.name}
                  <input
                    type="checkbox"
                    className="chooseCat"
                    name={`category${el.id}`}
                    value={el.id}
                    key={el.id}
                  />
                  <br />
                </label>
              ))}
            </fieldset>
            <fieldset name="blockFilts">
              <legend>Фильтры</legend>
              <label>
                Выберите цену:
                <input
                  id="rangeInput"
                  type="range"
                  step="1000"
                  min="0"
                  max="1000000"
                  name="priceRange"
                />
              </label>
              <label>
                Или введите её:
                <input type="text" id="textInput" name="priceText" />
              </label>
            </fieldset>
            <button type="submit">Применить фильтры</button>
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
