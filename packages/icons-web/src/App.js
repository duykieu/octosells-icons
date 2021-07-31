import "./App.css";
import { useState, useEffect } from "react";
import * as icons from "@octosells/icons";

function App() {
  const [displayIcons, setDisplayIcons] = useState([]);

  const [keyword, setKeyword] = useState(null);

  const [size, setSize] = useState(28);

  const [color, setColor] = useState("#121212");

  useEffect(() => {
    const filteredIcons = Object.keys(icons)
      .map((name) => ({
        name,
        icon: icons[name],
      }))
      .filter((item) => {
        if (!keyword) return true;
        return item.name.toLowerCase().includes(keyword.toLowerCase().trim());
      });
    setDisplayIcons(filteredIcons);
  }, [icons, keyword]);

  return (
    <div className="wrapper">
      <div className="header">
        <div className="left">OctoSells Icons</div>
        <div className="right">
          <a href="https://github.com/duykieu/octosells-icons">Github</a>
        </div>
      </div>
      <div className="hero">
        <h1>OctoSells Icons Package</h1>
        <a href="#">Document</a>
      </div>
      <div className="icons-wrapper">
        <div className="icons">
          {displayIcons.map(({ name, icon: Icon }) => {
            return (
              <div className="icon">
                <div className="svg">
                  <Icon color={color} size={size} />
                </div>
                <div className="name" style={{ color }}>
                  {name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="modifier">
          <div className="inner">
            <div className="form-group">
              <label>Search Icon Name</label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                Size <i>{size}</i>
              </label>
              <input
                value={size}
                type="range"
                onChange={(event) => setSize(event.target.value)}
                id="volume"
                name="volume"
                min="10"
                max="50"
              />
            </div>

            <div className="form-group">
              <input
                value={color}
                type="color"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
