import React from 'react'
import { db } from './firebase-config';

export default function Todoo({ doc, id, data,todo }) {  //here doc is string not object

  const updatefunc = () => {
    db.collection("Todo").doc(id).updateDoc({
      todo:"hella"
    })
    console.log(todo)
  }
    const deletefunc = () => {
      db.collection("Todo").doc(id).delete()
    }
    return (
      <div>
        <h5>{doc}</h5>
        <button onClick={updatefunc}>update</button>
        <button onClick={deletefunc}>delete</button>
      </div>
    )
  }
