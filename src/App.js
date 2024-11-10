import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [val, setVal] = useState([]);
  const [x, setX] = useState(0);
  const [y, setY] = useState(10)


  const getData = () => {
    fetch(API_URL).then((res) => res.json()).then((json_data) => setVal(json_data))
  }
  useEffect(() => {
    getData()
  }, [])

  const handleNext = () => {
    if (x <= val.length-1) {
      setX(x + 10);
      setY(y + 10);
    }

  }

  const handlePrev = () => {
    if (x > 0) {
      setX(x - 10)
      setY(y - 10)
    }
 }

  return (
    <Fragment>
      <div style={{ textAlign: 'center', margin: "100px 300px", width: "1000px", }}>
        <table>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          {
            val.length > 0 && val.slice(x, y).map((value, i) => {
              return (
                <tr style={{backgroundColor:"yellow"}} key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.userId}</td>
                  <td>{value.title}</td>
                  <td>{value.body}</td>
                </tr>
              )
            })
          }

        </table>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrev}>Prev</button>

      </div>

    </Fragment>
  );
}

export default App;
