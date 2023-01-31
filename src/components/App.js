import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// {/* write an <About> component here */}
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function Welcome() {
  return (
    <div id="welcome">
    <h3>Welcome</h3>
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
      <Welcome/>
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
    </div>
  );
}

export default App;
