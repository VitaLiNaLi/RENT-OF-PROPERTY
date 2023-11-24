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
                <label key={el.id}>
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
                Выберите максимальную цену:
                <br />
                <input
                  id="rangeInput"
                  type="range"
                  step="1000"
                  min="0"
                  max="150000"
                  name="priceRange"
                  list="markers"
                />
              </label>
              <datalist id="markers">
                <option value="25000" />
                <option value="50000" />
                <option value="75000" />
                <option value="100000" />
                <option value="125000" />
              </datalist>
              <label>
                Или введите её:
                <br />
                <input type="text" id="textInput" name="priceText" />
              </label>
            </fieldset>
            <button id='enter' type="submit">Применить фильтры</button>
          </form>
        </div>
        <div className="placeListMain">
          {allPlaces.map((place) => (
            <Place place={place} key={place.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
