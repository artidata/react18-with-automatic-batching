import { useState } from "react";
import "./styles.css";

//get random color
const rand = () => {
  const colors = [
    "#ff0000",
    "#ff8700",
    "#ffd300",
    "#deff0a",
    "#a1ff0a",
    "#0aff99",
    "#0aefff",
    "#147df5",
    "#580aff",
    "#be0aff"
  ];
  return colors[Math.floor(Math.random() * 10)];
};

export default function App() {
  const [_1_1, set_1_1] = useState(rand());
  const [_1_2, set_1_2] = useState(rand());
  const [_1_3, set_1_3] = useState(rand());
  const [_1_4, set_1_4] = useState(rand());
  const [_1_5, set_1_5] = useState(rand());
  const [_2_1, set_2_1] = useState(rand());
  const [_2_2, set_2_2] = useState(rand());
  const [_2_3, set_2_3] = useState(rand());
  const [_2_4, set_2_4] = useState(rand());
  const [_2_5, set_2_5] = useState(rand());

  const handleClick = () => {
    set_1_1(rand());
    set_1_2(rand());
    set_1_3(rand());
    set_1_4(rand());
    set_1_5(rand());
    set_2_1(rand());
    set_2_2(rand());
    set_2_3(rand());
    set_2_4(rand());
    set_2_5(rand());
  };

  const handleClickTimeout = () => {
    setTimeout(() => {
      set_1_1(rand());
      set_1_2(rand());
      set_1_3(rand());
      set_1_4(rand());
      set_1_5(rand());
      set_2_1(rand());
      set_2_2(rand());
      set_2_3(rand());
      set_2_4(rand());
      set_2_5(rand());
    }, 500);
  };

  const handleClickAsync = async () => {
    await Promise.resolve();
    set_1_1(rand());
    set_1_2(rand());
    set_1_3(rand());
    set_1_4(rand());
    set_1_5(rand());
    set_2_1(rand());
    set_2_2(rand());
    set_2_3(rand());
    set_2_4(rand());
    set_2_5(rand());
  };

  console.log("<- Number of rerender");

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClickTimeout}>Click Timeout</button>
      <button onClick={handleClickAsync}>Click Async</button>
      <div className="container">
        <div className="item" style={{ backgroundColor: _1_1 }}>
          &nbsp;
        </div>
        <div className="item" style={{ backgroundColor: _1_2 }}>
          &nbsp;
        </div>
        <div className="item" style={{ backgroundColor: _1_3 }}>
          &nbsp;
        </div>
        <div className="item" style={{ backgroundColor: _1_4 }}>
          &nbsp;
        </div>
        <div className="item" style={{ backgroundColor: _1_5 }}>
          &nbsp;
        </div>
      </div>
      <div className="container">
        <div className="item" style={{ backgroundColor: _2_1 }}>
          &nbsp;
        </div>
        <div className="item" style={{ backgroundColor: _2_2 }}>
          &nbsp;
        </div>
        <div className="item" style={{ backgroundColor: _2_3 }}>
          &nbsp;
        </div>
        <div className="item" style={{ backgroundColor: _2_4 }}>
          &nbsp;
        </div>
        <div className="item" style={{ backgroundColor: _2_5 }}>
          &nbsp;
        </div>
      </div>
    </>
  );
}
