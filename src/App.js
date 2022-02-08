import React, { useState, useEffect } from "react";
// import { BrowserRouter, Switch,  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import "../src/assets/icons/boxicons/css/boxicons.min.css";
import "../src/assets/icons/bootstrap-icons/bootstrap-icons.css";



const App = () => {
  let [title, setTitle] = useState('');
  let [date, setDate] = useState('');
  let [open, setOpen] = useState('');

  let [post, setPost] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
       setOpen("loading......")
    let url = 'https://adaorachi.github.io/esetech-assessment-api/game-data.json';
    fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setOpen('')

        setPost(result)
      })
  }

  const fetchTitle = () => {
    const url = "https://adaorachi.github.io/esetech-assessment-api/game-data.json";
    const data = { name: title };
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data),
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);

      })
  };
  const fetchDate = () => {
    const url = "https://adaorachi.github.io/esetech-assessment-api/game-data.json";
    const data = { name: title };
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data),
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);

      })
  };



  return (
    <main id="mainContainer">
      {/* <section className="cont"> */}
      <br />
      <section className="row container">
        <section className="dashboard container  col-sm-12 col-md-5 col-lg-3 p-md-2 p-sm-3 mb-sm-5">
          <div>
            <h1>
              Filter Results
            </h1>
          </div>
          <div>
            <p>Name (contains)</p>
            <input className="text-white" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Text String" />
          </div>
          <div>
            <p>Order By</p>
            <select>
              <option>date</option>
              <option>rating</option>
            </select>
          </div>
          <div>
            <button type="button" onClick={() => fetchTitle()}>Search</button>
            <button className="ml-5" type="button">Clear</button>

          </div>
        </section>

        <section className="mainBody ml-4 p-2 col-sm-12 col-md-6 col-lg-8 p-md-2 p-sm-3 mb-sm-5">
        <p className="text-white">  {open} </p>

          {post.map((e, i) => {
            return (
              <section key={i} className="d-flex text-white mainContent">
                <div id="content">

                </div>
                <div className="sectionTwo">

                  <div>
                    <h1>{e.name} </h1>
                  </div>
                  <div>
                    <p>{new Date(e.first_release_date).toDateString()} </p>
                  </div>
                  <div className="d-flex">
                    <p>{e.summary} </p>
                    <p id="rating">{e.rating}</p>
                  </div>
                </div>
              </section>
            )
          })}
        </section>
      </section>
      {/* </section> */}
    </main>
  );
}
export default App;
