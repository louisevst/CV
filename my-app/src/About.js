import React from "react";
import { useNavigate } from "react-router-dom";

const About = (props) => {
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
      <main class="grid">
        <h2 class="grid1">Languages</h2>
        <ul class="grid2">
          <li>French| Mother Language</li>
          <li>English| B2+ level</li>
          <li>Dutch| Basic level</li>
        </ul>

        <h2 class="grid3">Education</h2>
        <ul class="grid4">
          <li>2014| CESS - Collège Saint Etienne</li>
          <li>2020| Bachelor Fashion Design - Helmo Mode</li>
          <li>2022| Web Dev Junior - BeCode</li>
        </ul>

        <h2 class="grid5">About</h2>
        <p class="grid6">
          I think I'm going to specialize myself in frontend webdeveloppement.
          But who knows, maybe I'll be good at backend developpement.
        </p>
      </main>
    </>
  );
};

export default About;
