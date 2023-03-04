import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const onChange = (event) => setToDo(event.target.value);
  const [toDos, setToDos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDo('');
    // setToDos((currentArray) => [toDo, ...currentArray]); // 마지막 값이 위로
    setToDos((currentArray) => [...currentArray, toDo]); // 순서대로
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type='text'
          placeholder='Write your to do...'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
