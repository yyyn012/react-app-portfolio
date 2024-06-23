import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log("hi");
  // useEffect를 사용하지 않으면 불필요한 코드 실행이 반복된다.

  useEffect(() => {
    console.log("only once");
  }, []);
  // useEffect를 사용하여 단 한번만 코드가 실행되도록 설정했다.

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("keyword change");
    }
  }, [keyword]);
  // useEffect를 사용하여 keyword가 5글자 이상으로 변화할 때만 코드가 실행되도록 설정했다.

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      ></input>
      <h1 onChange={onChange}>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
