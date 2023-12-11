import React,{useState} from "react";
import "./App.css";

function Calculator() {
  const [input, setInput] = useState(""); // 현재 입력값 관리
  const [result, setResult] = useState(""); // 계산결과 관리
  const [inputHistory, setInputHistory] = useState(""); // 입력된버튼기록관리
  const [showInputHistory, setShowInputHistory] = useState(true); // inputHistory 또는 result 보여주기

  const handleInput = (e) => {
    const clickedButton = e.target.innerText;
    setInput(input + clickedButton); // 버튼 클릭하면 값 추가
    setInputHistory(inputHistory + clickedButton); // 입력된 버튼 기록
  };

  const AC = () => {
    setInput(""); 
    setInputHistory(""); 
    setShowInputHistory(true); // 입력 기록을 보여줍니다.
  };

  const DE = () => {
    const newInput = input.slice(0, -1); //버튼 누를때마다 마지막입력값 지우기
    setInput(newInput);

    const newInputHistory = inputHistory.slice(0, -1); //버튼 누를때마다 마지막버튼기록 지우기
    setInputHistory(newInputHistory);
  }

  const calculateResult = () => {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
      setShowInputHistory(false); // '=' 버튼 클릭 시 결과를 보여줍니다.
  };
 
  return (
    <div className="calculate">
      <div className="calculator">
        <div className="">
        <input className="result_box" type="text" value={showInputHistory ? inputHistory : result} readOnly />
        </div>
        <div className="calc_buttons">
          <button onClick={AC}>AC</button>
          <button onClick={DE}>DE</button>
          <button onClick={handleInput}>.</button>
          <button onClick={handleInput}>/</button>
          <button onClick={handleInput}>7</button>
          <button onClick={handleInput}>8</button>
          <button onClick={handleInput}>9</button>
          <button onClick={handleInput}>*</button>
          <button onClick={handleInput}>4</button>
          <button onClick={handleInput}>5</button>
          <button onClick={handleInput}>6</button>
          <button onClick={handleInput}>-</button>
          <button onClick={handleInput}>1</button>
          <button onClick={handleInput}>2</button>
          <button onClick={handleInput}>3</button>
          <button onClick={handleInput}>+</button>
          <button onClick={handleInput}>00</button>
          <button onClick={handleInput}>0</button>
          <button className="last_button" onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
