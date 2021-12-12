import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import "../css/Home.css";
import db, { auth } from '../firebase';
import Kisi from './Kisi';

function Home({ user }) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [kisiler, setKisiler] = useState([]);
    useEffect(() => {
        db.collection("kisiler").onSnapshot((snapshot) =>
            setKisiler(snapshot.docs.map((doc) => ({

                id: doc.id,
                data: doc.data(),

            }))
            )
        );
    }, []);
    console.log(kisiler);

    const add = (e) => {
        e.preventDefault();
        db.collection("kisiler").add({
            name: name,
            surname: surname,
        });
        setName("");
        setSurname("");

    };

    return (
        <div className="Home">
            <h4>Hoşgeldinizz {user.displayName}</h4>
            <button onClick={() => auth.signOut()}> Çıkış Yap </button>
            <form>
                İsim <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />
                Soyisim <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                <button onClick={add}>Ekle</button>

            </form>

            <div className="home__kisiler">
                {kisiler.map(({ id, data}) => (
                    <Kisi key={id} id={id} name={data.name} surname={data.surname} name1={name} surname1={surname} setSurname={setSurname} setName={setName} />
                 



                ))}


            </div>

        </div>
    );
}

export default Home;
