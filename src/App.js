import { useState } from 'react';
import './App.css';
import { db } from './firebase-config';
import firebase from "firebase/compat/app"
import { useEffect } from 'react';
import React from 'react';
import Todoo from './Todoo';

function App() {
  const [data, setdata] = useState("");
  const [allDocs, setAllDocs] = useState([]);
  useEffect(() => {
     getTodo();
  }, [])

  const randomfunc = (event) => {
    setdata(event.target.value);
  }

  const addTodo = () => {
    db.collection("Todo").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: data,
    })
    
  }
  const getTodo = () => {
    db.collection("Todo")
    .onSnapshot(function(querySnapshot){
      setAllDocs(
        querySnapshot.docs.map((doc)=>({  //here receiving doc is an object it has id,todo
          id:doc.id,
          todo:doc.data().todo
        }))
      )
    })
  }

  return (
    <>
      <h3 style={{color: "red",textAlign:'center'}}>TODO APP</h3>
      <div className="nothing">
        <input className="form-control" type="text" value={data} onChange={randomfunc} label="readonly input example"></input>
        <input className="btn btn-primary" type="submit" onClick={addTodo} value="save"></input>
      </div>
      <h1>FETCHING DATA</h1>

      {allDocs.map((doc,i) => { //here doc is array of object
        return (
         <Todoo key={i} doc={doc.todo} id={doc.id}/>
           
        )
      })}
    </>
  );
}

export default App;
