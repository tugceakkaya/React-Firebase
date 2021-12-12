import React from 'react'
import "../css/Kisi.css";
import db from '../firebase';

function Kisi({id,name,surname,name1,surname1,setSurname,setName}) {
    const sil = () => {
        db.collection("kisiler").doc(id).delete();
    };
    const guncelle = () => {
db.collection("kisiler").doc(id).update({
    name:name1,
    surname:surname1,
});
setSurname("");
setName("");
    }
  return (
    <div className="kisi">
    <h3>{name} {surname}</h3>
    <button onClick={sil}>
        Sil
    </button>
    <button onClick={guncelle}>
       Güncelle
   </button>
    </div>
    
  )
}

export default Kisi
