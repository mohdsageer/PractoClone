import React from "react";
import "./Consultant.css";

const Consultant = () => {
  const logodata = [
    {
      src: "https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png",
      title: " Period doubts or Pregnancy",
      titledes: "Consult now",
    },
    {
      src: "https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png",
      title: "Acne, pimple or skin issues",
      titledes: "Consult now",
    },

    {
      src: "https://www.practo.com/consult/static/images/top-speciality-sexology.svg",
      title: "Performance issues in bed",
      titledes: "Consult now",
    },
    {
      src: "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
      title: "Cold,cough or fever",
      titledes: "Consult now",
    },
    {
      src: "https://www.practo.com/consult/static/images/top-speciality-pediatric.svg",
      title: "Child not feeling well",
      titledes: "Consult now",
    },
    {
      src: "https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png",
      title: "Dpression or axiety",
      titledes: "Consult now",
    },
  ];
  return (
    <div className="content">
      <div className="head mt-4 m-b3">
        <div style={{ position: "relative" }}>
          <h2>Consult top doctors online for any health concern</h2>
          <button className="btn float-right">View All Specialities</button>
        </div>
        <div style={{ marginTop: "5px", fontSize: "14px" }}>
          Private online consultations with verified doctors in all specialists
        </div>

        <div id="consult_doc" style={{ marginTop: "20px" }}>
          <div
            className="logoContainer justify-content-evenly"
            style={{
              verticalAlign: "top",
              marginRight: "10px",

              display: "flex",
            }}
          >
            {logodata.map((el) => {
              return (
                <div className="speciality_card">
                  <div style={{ width: "120px", height: "120px" }}>
                    <span>
                      <img
                        src={el.src}
                        alt="pregnancy"
                        style={{ width: "100%" }}
                      />
                    </span>
                  </div>
                  <div className="speciality">{el.title}</div>
                  <div className="consult_now"> {el.titledes}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Consultant;
