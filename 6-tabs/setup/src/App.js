import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.netlify.app/api/react-tabs-project";
function App() {
  var [load, setLoad] = useState(true);
  var [jobs, setJobs] = useState([]);
  var [value, setValue] = useState(0);

  var fetchJobs = async () => {
    var res = await fetch(url);
    var newJobs = await res.json();
    setJobs(newJobs);
    setLoad(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (load) {
    return (
      <section className="section">
        <h1>loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
