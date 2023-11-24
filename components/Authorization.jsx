const React = require('react');

const Layout = require('./Layout');

function Authorization({ title }) {
    return (
      <Layout title={title}>
        <section className="container">
          <main className="form-signin">
            <form id="formAuthorization" method="POST" className="authorization">
              
              
              <div className="form">
                <input type="email" id="regInputEmail" name="email" placeholder="Email address" required/>
              </div>
              <div className="form">
                <input type="password" className="form-control" id="regPassword" name="password" placeholder="Password" required/>
              </div>
              <div className="form">
                <input type="password" className="form-control" id="regConfirmPassword" name="confirmPassword" placeholder="Confirm Your Password" required/>
              </div>
              
              <button type="submit" className="reg">Submit</button>
              <div className="errLogin"></div>
            </form>
          </main>
        </section>
      </Layout>
    );
  }
  

module.exports = Authorization;