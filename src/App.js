import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [writeTodo, setWriteTodo] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    setWriteTodo((currentArray) => [toDo, ...currentArray]);
    setToDo("");

    // state(constant)를 직접적으로 설정할 수 없기 때문에 modifier function을 통해 state를 관리해야 한다.

    // 리액트에서는 state.push()를 이용할 수 없기 때문에 어떤 배열에 새로운 배열의 element들을 추가하려면 위와 같이 "...[새로운 배열]"등의 방법을 이용해야 한다.
  };
  console.log(writeTodo);
  return (
    <div>
      <h1>My To Dos ({writeTodo.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {writeTodo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    // map()가 key를 필요로 하는 이유는 모든 item을 인식해버리기 때문이다.
  );
}

export default App;
