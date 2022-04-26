import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { doc, getDoc, deleteDoc } from "firebase/firestore/lite";
import { db } from './database_connect';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";

const Details = () => {
    const history = useHistory();
    const { id } = useParams();
    const [dogs, setDog] = useState({})

    const {

        handleSubmit,
        formState: { errors },

    } = useForm();


    const getDog = async (id) => {
        const docRef = doc(db, "dogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("test,", docSnap.data());
            setDog({ id: docSnap.id, ...docSnap.data() });

        } else {
            console.log("Erro ao recuperar")
        }
    }

    useEffect(() => {
        getDog(id);
    }, [id])

    const remdata = async () => {
        try {
            const docRef = await deleteDoc(doc(db, "dogs", id));

            console.log("document", docRef.id);


        } catch (erro) {
            console.log(erro)
        }
        history.push('/')
    }




    return (
        <div className="container d-flex justify-content-center ">
           
               <div className="card mb-2 mx-4">
                        <img src={dogs.link} className="card-img-top img-fluid" id="detaillogo" />
                        <div className="card-body">
                            <h4>{dogs.raca}</h4>
                            <p class="card-text">{dogs.info}</p>
                            <p class="card-text">Expectativa de vida:{dogs.vida}</p>
                        </div>
                    </div>
                
           
            <form >
                <input

                    value="remover"
                    className="btn btn-success btn-block"
                    onClick={() => {
                        const confirmBox = window.confirm(
                            "Está certo disto?"
                        )
                        if (confirmBox === true) {
                            remdata()
                        }
                    }}
                />
            </form>


        </div>

    )
}

export default Details;