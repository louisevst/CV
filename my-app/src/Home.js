import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <button class="nav" onClick={() => navigate("/")}>
          Home
        </button>
        <button class="nav" onClick={() => navigate("/about")}>
          About
        </button>
      </header>
      <div class="Box">
        <div class="Intro">
          <h1>Hello, I'm Louise!</h1>
          <h5>Student at BeCode</h5>
          <main>
            <p>
              Hello, I'm Louise, future web developper junior and student at
              BeCode.
            </p>
            <ul>
              <li>Creative</li>
              <li>Organized</li>
              <li>Still learning!</li>
            </ul>
            <a href="https://github.com/louisevst" class="button">
              My Github
            </a>
          </main>
        </div>
        <div class="Pic">
          <img
            src="03dc7bc0a00c372304e8e382a92fdce0.jpg"
            alt="Cartoon Drawing Girl !I need to take professional pictures!"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
