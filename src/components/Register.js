import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { doc, getDoc, collection, addDoc } from "firebase/firestore/lite";
import { db } from "./database_connect";
import { useParams } from "react-router";

// Importing toastify module
import { toast } from 'react-toastify';

// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {


    const notify = () => {

        // Calling toast method by passing string
        toast.success('Sucesso')
    }

    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset

    } = useForm();




    const onSubmit = async (data) => {
        try {
            const docRef = await addDoc(collection(db, "dogs"), data);
            notify()
            console.log("document", docRef.id);

            // window.location.reload();
        } catch (erro) {
            console.log(erro)
        }
        reset()
    }


    return (
        <Fragment>
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="input-group mb-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className=" text-primary py-1"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control "
                            placeholder="Raça"
                            {...register("raca", {
                                required: true,
                                minLength: 3,
                            })}
                        />
                    </div>

                    <div className="input-group mb-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className=" text-primary py-1"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Origem"
                            {...register("origem", {
                                required: true,
                                minLength: 2,
                            })}
                        />
                    </div>

                    <div className="input-group mb-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className=" text-primary py-3"></i>
                            </span>
                        </div>
                        <textarea
                            type="text"
                            rows="2"
                            className="form-control"
                            placeholder="Informações da raça"
                            {...register("info", {
                                required: true,
                                minLength: 10,
                            })}
                        ></textarea>
                    </div>
                    <div className="input-group mb-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className=" text-primary py-3"></i>
                            </span>
                        </div>
                        <textarea
                            type="text"
                            rows="1"
                            className="form-control"
                            placeholder="Expectativa de vida"
                            {...register("vida", {
                                required: true,
                                minLength: 1,
                            })}
                        ></textarea>
                    </div>

                    <div className="input-group mb-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className=" text-primary py-1"></i>
                            </span>
                        </div>
                        <input
                            type="url"
                            className="form-control"
                            placeholder="Link da imagem"
                            {...register("link", {
                                required: true,
                                minLength: 4,
                            })}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Cadastrar"
                        className="btn btn-success btn-block"
                        onSubmit={notify}
                    />

                    <div
                        className={
                            (errors.raca || errors.origem || errors.info || errors.vida) &&
                            "alert alert-danger mt-1"
                        }
                    >
                        {errors.raca && (
                            <span>Preencha a Raça; </span>
                        )}
                        {errors.origem && <span>Informe a origem da raça; </span>}
                        {errors.info && <span>Preencha as Informações</span>}
                        {errors.vida && <span>Preencha a expectativa</span>}
                    </div>
                </div>

            </form>
            <div className="GeeksforGeeks">

            </div>

        </Fragment>
    );



};
export default Register;