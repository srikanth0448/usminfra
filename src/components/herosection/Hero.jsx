import React from "react";
import "../../pages/Home/Home.css"
const Hero =({imageweb,imagemobile,videoweb,videomobile})=>{
    return(
        <>
            <section className="hero">
                <div className="hero-item">
                    <img className="img-fluid w-100  d-none d-md-block" src={imageweb}alt="Best beach swimming pool at Go Ranch resort near Yadagirigutta"/>
                    <img className=" img-fluid  w-100 d-md-none" src={imagemobile}alt="Best beach swimming pool at Go Ranch resort near Yadagirigutta"/>
                    <video className="img-fluid w-100  d-none d-md-block" src={videoweb}alt="Best beach swimming pool at Go Ranch resort near Yadagirigutta"/>
                    <video className=" img-fluid  w-100 d-md-none" src={videomobile}alt="Best beach swimming pool at Go Ranch resort near Yadagirigutta"/>   
                </div>
            </section>
        </>
    );

}
export default Hero;