import { useState } from "react";
import "./App.css";

function App() {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState([]);
  const onSubmit = async (e) => {
    e.preventDefault();
    const obj = await fetch(
      `https://phonevalidation.abstractapi.com/v1/?api_key=3378f749d9a54ab891322bb01247fd3f&phone=${phone}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );

    const data = await obj.json();
    setUser(data);
  };
  return (
    <div className="main">
      <header className="header">
        <h3>Phone Number Validator</h3>
      </header>

      <form method="GET" onSubmit={onSubmit}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Ex: 91 1234-567890"
          onChange={(event) => setPhone(event.target.value)}
        />

        <div className="form-submit">
          <input type="submit" value="CHECK" />
        </div>
      </form>

      {user.length !== 0 ? (
        <section className="profile">
          <div>
            <h4>Carrier: </h4>
            <p>{user.carrier}</p>
          </div>

          <hr />

          <div>
            <h4>Country: </h4>
            <p>{user.country.name}</p>
          </div>

          <hr />

          <div>
            <h4>Country Code: </h4>
            <p>{user.country.code}</p>
          </div>

          <hr />

          <div>
            <h4>Prefix: </h4>
            <p>{user.country.prefix}</p>
          </div>

          <hr />

          <div>
            <h4>International: </h4>
            <p>{user.format.international}</p>
          </div>

          <hr />

          <div>
            <h4>Local: </h4>
            <p>{user.format.local}</p>
          </div>

          <hr />

          <div>
            <h4>Type: </h4>
            <p>{user.type}</p>
          </div>
        </section>
      ) : (
        ""
      )}
      <section className="footer">
        <p>Copyright © Phone Number Validator 2021</p>
      </section>
    </div>
  );
}

export default App;
