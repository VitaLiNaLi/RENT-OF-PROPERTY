const React = require('react');

const Layout = require('./Layout');

function Registration({ title }) {
    return (
      <Layout title={title}>
        <section className="container">
          <main className="form-signin">
            <form id="formRegistration" method="POST"  className="register">
              <div className="form">
                <input type="text" name="name" placeholder="Name" required/>
              </div>
              <div className="form">
                <input type="text" name="sName" placeholder="Surname" required/>
              </div>
              <div className="form">
                <input  id="regInputEmail" name="email" placeholder="Email address" required/>
              </div>
              <div className="form">
                <input type="password" className="form-control" id="regPassword" name="password" placeholder="Password" required/>
              </div>
              <div className="form">
                <input type="password" className="form-control" id="regConfirmPassword" placeholder="Confirm Your Password" required/>
              </div>
              <div className="form">
                <input type="text" name="tel" placeholder="tap your phone" required/>
              </div>
              <button type="submit" className="reg">Submit</button>
              <div className="errLogin"></div>
            </form>
          </main>
        </section>
      </Layout>
    );
  }
  
  
  module.exports = Registration;