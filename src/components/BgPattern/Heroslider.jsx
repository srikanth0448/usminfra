import React from "react";

const Heroslider = ({ heroimgweb, heroimgmobile, videoweb, videomobile }) => {
  return (
    <>
      <section className="hero">
        <div className="hero-item">
          <img
            className="img-fluid w-100  d-none d-md-block"
            src={heroimgweb}
            alt="Best beach swimming pool at Go Ranch resort near Yadagirigutta"
          />

          <img
            className=" img-fluid  w-100 d-md-none"
            src={heroimgmobile}
            alt="Best beach swimming pool at Go Ranch resort near Yadagirigutta"
          />
          <video
            className="img-fluid w-100  d-none d-md-block"
            src={videoweb}
            alt="Best beach swimming pool at Go Ranch resort near Yadagirigutta"
          />

          <video
            className=" img-fluid  w-100 d-md-none"
            src={videomobile}
            alt="Best beach swimming pool at Go Ranch resort near Yadagirigutta"
          />
        </div>
      </section>
    </>
  );
};

export default Heroslider;
