import { func } from 'prop-types';
import { useState, useEffect } from 'react';

function Hello() {
  /*   useEffect(function () {
    console.log('hi :)');
    return function () {
      console.log('bye :(');
    };
  }, []); */
  // 아래는 화살표 함수, 코드가 조금 더 짧음
  useEffect(() => {
    console.log('hi :)');
    return () => console.log('bye :(');
  }, []);
  return <h1>Hello</h1>;
}

// ========= 위와 아래는 아예 같은 기능, 위에가 축약형

/* function Hello() {
  function byFn() {
    console.log('bye :(');
  }
  function hiFn() {
    console.log('created :)');
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
} */

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
