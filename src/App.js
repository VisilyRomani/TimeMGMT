import React, {useEffect, useState} from 'react';

import sendAsync from './ipc-process/renderer';
import Project from './components/Project'

import './App.css';

import send from './ipc-process/renderer';



function App() {
  // setMessage is what is displayed while message is what is sent to the main process
  const [message, setMessage] = useState();
  // setResponse is what is displayed while responses is what is sent from main.js
  const [responces, setResponse] = useState();

  const [mounted, setMounted] = useState(false);

  if (!mounted){
      send('SELECT * FROM Projects;');
  }


  // this function sends data from the inputs to the main process and settles the reponse
  function send(sql){
    sendAsync(sql).then((result) => setResponse(result));
  }

  useEffect(() =>{setMounted(true)},[]);

  // console.log(responses);
  //  let firtdata = send('select * from Projects;')
  return (
    <div className="App">
      <Project data={[responces]}/>
    </div>
);
}



export default App;

// {/* <header className="App-header">
// <h1>
//     Standalone application with Electron, React, and
//     SQLite stack.
// </h1>
// </header>
// <article>
// <p>
//     Say <i>ping</i> to the main process.
// </p>
// <input
//     type="text"
//     value={message}
//     onChange={({ target: { value } }) => setMessage(value)}
// />
// <button type="button" onClick={() => send(message)}>
//     Send
// </button>
// <br />
// <p>Main process responses:</p>
// <br />
// <pre>
// {(responces && JSON.stringify(responces, null, 2)) ||
//                 'No query results yet!'}
// </pre>
// </article> */}