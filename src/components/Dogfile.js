import React from "react";
import { Link } from "react-router-dom";

const Dogfile = (props) => {


    return (

        <div className="card mt5" key={props.id}>

            <img className="card-img-top" src={props.link} alt="dogfile" id="cardimg" />
            <div className="card-body  ">
                <span>

                    <h5>{props.raca}</h5>
                    Info: {props.info}<br />
                    <p> Origem:{props.origem}</p>
                    <p className="card-text ">Espectativa de vida:{props.vida} </p>

                    <Link to={`/details/${props.id}`} className="btn btn-block btn-info mt-1 " id="butt">
                        Infomações
                    </Link>

                </span>
            </div>


        </div>
    );
}; export default Dogfile;