import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
const SideBar = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();

  const [max, setMax] = useState(30);
  const [space_complexity, setSpace_Complexity] = useState("0(1)");
  const [worstCase, setWorstCase] = useState("0(N^2)");
  const [avgCase, setAvgCase] = useState("0(N^2)");
  const [bestCase, setBestCase] = useState("0(N)");

  const handleAlgo = (algo) => {
    if (algo === "bubble") {
      setWorstCase("O(N^2)");
      setAvgCase("Θ(N^2)");
      setBestCase("Ω(N)");
      setSpace_Complexity("O(1)");
    } else if (algo === "merge") {
      setBestCase("Ω(N log N)");
      setAvgCase("Θ(N log N)");
      setWorstCase("	O(N log N)");
      setSpace_Complexity("O(N)");
    } else if (algo === "insertion") {
      setSpace_Complexity("O(1)");
      setBestCase("Ω(N)");
      setAvgCase("Θ(N^2)");
      setWorstCase("O(N^2)");
    } else if (algo === "selection") {
      setAvgCase("Θ(N^2)");
      setWorstCase("O(N^2)");
      setBestCase("Ω(N^2)");
      setSpace_Complexity("O(1)");
    } else if (algo === "quick") {
      setBestCase("Ω(N logN)");
      setAvgCase("Θ(N logN)");
      setWorstCase("O(N^2)");
      setSpace_Complexity("O(log(N))");
    } else if (algo === "heap") {
      setBestCase("Ω(N logN)	");
      setWorstCase("O(N logN)");
      setAvgCase("Θ(N logN)");
      setSpace_Complexity("O(1)");
    }
    dispatch({
      type: "UPDATE_ALGORITHM",
      algorithm: algo,
    });
  };

  const resetColor = () => {
    dispatch({
      type: "UPDATE_COLOR",
      color: document.getElementById("color").value,
    });
  };

  const handleRange = (range) => {
    let new_arr = [...myState.values];
    for (let i = 0; i < new_arr.length; i++)
      // using translateX for animate the array w.r.t index
      document.getElementById(i).style.transform = `translateX(${i * 11}px)`;

    resetColor();

    dispatch({
      type: "UPDATE_RANGE",
      range: range,
    });
    dispatch({
      type: "CHANGE_VALUES",
    });
  };

  const handleColor = (color) => {
    dispatch({
      type: "UPDATE_COLOR",
      color: color,
    });
  };
  // handing the speed of animation
  const handleSpeed = (speed) => {
    dispatch({
      type: "UPDATE_SPEED",
      speed: speed,
    });
  };

  useEffect(() => {
    handleRange(30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch({
      type: "UPDATE_COLOR",
      color: document.getElementById("color").value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myState.values]);

  const handleWidth = () => {
    if (window.innerWidth > 1300) setMax(70);
    else if (window.innerWidth > 1200) setMax(60);
    else if (window.innerWidth > 1100) setMax(50);
    else if (window.innerWidth > 900) setMax(45);
    else if (window.innerWidth > 800) setMax(40);
    else if (window.innerWidth > 500) setMax(30);
    else setMax(20);
  };

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <div className="bg-dark text-light font-medium min-vh-100">
      <Container>
        <FormGroup className="mb-3">
          <Row>
            <Col>
              <Form.Label htmlFor="algo">Algorithm:</Form.Label>
              <Form.Select
                id="algo"
                className="bg-light rounded text-dark"
                onChange={(e) => handleAlgo(e.target.value)}
                disabled={myState.play}
              >
                <option value="bubble">Bubble Sort</option>
                <option value="merge">Merge Sort</option>
                <option value="insertion">Insertion Sort</option>
                <option value="selection">Selection Sort</option>
                <option value="quick">Quick Sort</option>
                <option value="heap">Heap Sort</option>
              </Form.Select>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup className="mb-3">
          <Row>
            <Col>
              <Form.Label htmlFor="range">Range:</Form.Label>
              <FormControl
                type="range"
                id="slider"
                defaultValue={40}
                min={1}
                max={max}
                className="bg-dark rounded-lg appearance-none cursor-pointer"
                onChange={(e) => handleRange(e.target.value)}
                disabled={myState.play}
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup className="mb-3">
          <Row>
            <Col>
              <Form.Label htmlFor="color">Color:</Form.Label>
              <Form.Select
                id="color"
                className="bg-light rounded text-dark"
                onChange={(e) => handleColor(e.target.value)}
                disabled={myState.play}
              >
                <option
                  value="rgb(0,128,128)"
                  style={{ color: "rgb(0,128,128)" }}
                >
                  Teal
                </option>
                <option
                  value="rgb(128,128,0)"
                  style={{ color: "rgb(128,128,0)" }}
                >
                  Olive
                </option>
                <option value="rgb(255,112,112)" style={{ color: "red" }}>
                  Red
                </option>
                <option value="grey" style={{ color: "grey" }}>
                  Black
                </option>
                <option
                  value="rgb(221,217,2)"
                  style={{ color: "rgb(221,217,2)" }}
                >
                  Yellow
                </option>
              </Form.Select>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup className="mb-3">
          <Row>
            <Col>
              <Form.Label htmlFor="speed">Speed:</Form.Label>
              <Form.Select
                id="speed"
                className="bg-light rounded text-dark"
                defaultValue={100}
                onChange={(e) => handleSpeed(e.target.value)}
                disabled={myState.play}
              >
                <option value={500}>Slow</option>
                <option value={200}>Medium</option>
                <option value={100}>Fast</option>
                <option value={20}>Super Fast</option>
                <option value={5}>Ultra Fast</option>
              </Form.Select>
            </Col>
          </Row>
        </FormGroup>

        <div className="m-2">
          <h1 className="text-center my-5 text-light">Time Complexity</h1>
          <div>
            <Form.Label>Best Case:</Form.Label>
            <p className="text-danger d-inline-block mx-2">{bestCase}</p>
          </div>
          <div>
            <Form.Label>Average Case:</Form.Label>
            <p className="text-danger d-inline-block mx-2">{avgCase}</p>
          </div>
          <div>
            <Form.Label>Worst Case:</Form.Label>
            <p className="text-danger d-inline-block mx-2">{worstCase}</p>
          </div>
          <h1 className="text-center my-5 text-light">Space Complexity</h1>
          <div>
            <Form.Label>Worst Case:</Form.Label>
            <p className="text-danger d-inline-block mx-2">
              {space_complexity}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SideBar;
