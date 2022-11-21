import "./App.scss";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  const [tags, setTags] = useState([]);

  const handleClose = (value) => {
    const result = tags.filter((item) => item !== value);
    setTags([...result]);
  };

  const handleTags = (value) => {
    if (tags.indexOf(value) === -1) {
      setTags([...tags, value]);
    }
  };

  const handleClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="tags-input">
          {tags.map((item, value) => (
            <ul id="tags">
              <li
                className="tag"
                style={{
                  background: item === "Slate" ? "grey" : item,
                }}
              >
                <span className="tag-title">{item}</span>
                <i className="tag-close-icon" onClick={() => handleClose(item)}>
                  <CloseIcon className="icon" />
                </i>
              </li>
            </ul>
          ))}
        </div>
        <div>
          <button className="btn" onClick={handleClick}>
            <ArrowDropDownIcon />
          </button>
        </div>
      </div>
      {isActive && (
        <div className="container_options">
          <ul>
            <div>
              <li
                style={{ backgroundColor: "red" }}
                onClick={() => handleTags("Red")}
              >
                Red
              </li>
            </div>
            <div>
              <li
                style={{ backgroundColor: "purple" }}
                onClick={() => handleTags("Purple")}
              >
                Purple
              </li>
            </div>
            <div>
              <li
                style={{ backgroundColor: "orange" }}
                onClick={() => handleTags("Orange")}
              >
                Orange
              </li>
            </div>{" "}
            <div>
              <li
                style={{ backgroundColor: "yellow" }}
                onClick={() => handleTags("Yellow")}
              >
                Yellow
              </li>
            </div>{" "}
            <div>
              <li
                style={{ backgroundColor: "green" }}
                onClick={() => handleTags("Green")}
              >
                Green
              </li>
            </div>{" "}
            <div>
              <li
                style={{ backgroundColor: "grey" }}
                onClick={() => handleTags("Slate")}
              >
                Slate
              </li>
            </div>
            <div>
              <li
                style={{ backgroundColor: "silver" }}
                onClick={() => handleTags("Silver")}
              >
                Silver
              </li>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
