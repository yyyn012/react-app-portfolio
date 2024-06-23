import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("run all the time");
  // useEffect를 사용하지 않으면 불필요한 코드 실행이 반복된다.

  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  // useEffect를 사용하여 단 한번만 코드가 실행되도록 설정했다.

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  // useEffect를 사용하여 keyword가 5글자 이상으로 변화할 때만 코드가 실행되도록 설정했다.
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;

// 5.2
