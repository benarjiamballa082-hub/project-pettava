function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Project Pettava</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Resources</a>
          <a href="#">Upload</a>
          <a href="#">Login</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Find Academic Resources Instantly</h1>

        <p>
          Notes, PPTs, Textbooks, Previous Papers and Study Materials
          all in one place.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search DBMS Notes..."
          />
          <button>Search</button>
        </div>
      </section>

      <section className="resources">
        <h2>Popular Resources</h2>

        <div className="card-container">

          <div className="card">
            <h3>DBMS Unit 1 Notes</h3>
            <p>Semester 4</p>
            <button>Download</button>
          </div>

          <div className="card">
            <h3>Operating Systems PPT</h3>
            <p>Semester 4</p>
            <button>Download</button>
          </div>

          <div className="card">
            <h3>CN Previous Papers</h3>
            <p>Semester 5</p>
            <button>Download</button>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;