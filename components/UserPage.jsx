const React = require('react');
const Layout = require('./Layout');
const FavoriteCard = require('./FavoriteCard');

function UserPage({ title, allFavorites }) {
  return (
    <Layout title={title}>
      <div className="containerUser">
        <div className="favoriteList">
          {allFavorites.map((favorite) => (
            <FavoriteCard favorite={favorite} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = UserPage;