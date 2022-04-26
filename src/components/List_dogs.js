import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "./database_connect";
import Dogfile from "./Dogfile";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';


const List_dogs = () => {

    const showError = () => toast.error('Não encontrado')
    const [dogs, setDogs] = useState([])



    const {
        register,
        handleSubmit,
        formState: { errors },
        reset

    } = useForm();




    const getDogs = async () => {
        const dogsCol = collection(db, "dogs");
        const dogsSnapshot = await getDocs(dogsCol);
        const dogList = dogsSnapshot.docs.map((doc) => {
            const dados = doc.data();
            const id = doc.id;
            return { id, ...dados }
        });

        setDogs(dogList)

    };


    useEffect(() => {
        getDogs();
    }, []);

    const [input, setInput] = useState("");

    const handleChange = (e) => {

        e.preventDefault();
        setInput(e.target.value)
    };

    let newdogs = dogs;
    if (input.length > 0) {
        newdogs = newdogs.filter((i) => {
            return i.raca.toLowerCase().match(input)

        })


        if (newdogs.length == 0) {
            showError()

        }
    }



    return (
        <React.Fragment>




            <div className="container-fluid ">


                <div className="input-group mb-5">
                    <input type="text" className="form-control rounded" placeholder="Search" aria-label="Search" onChange={handleChange}
                        aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary">search</button>
                </div>
               

                    <div className="card-columns mx-auto align-items d-flex flex-wrap">
                        { }
                        {newdogs.map(dog => (

                            <Dogfile

                                id={dog.id}
                                origem={dog.origem}
                                info={dog.info}
                                vida={dog.vida}
                                link={dog.link}
                                raca={dog.raca}
                            />

                        ))}


                    </div>
              


            </div>



        </React.Fragment>
    );




}



export default List_dogs;
