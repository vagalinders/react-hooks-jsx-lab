import React from "react";
import { name, city } from "../data/data.js";

const hStyle = {
  color: 'firebrick'
}

function Home() {
return <div id = 'home'>
  <h1 style={hStyle}>{name} is a Web Developer from {city}</h1>
</div>;
}

export default Home;
