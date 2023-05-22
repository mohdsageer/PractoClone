import "./Appointment.css";

const Appointment = () => {
  const appointments = [
    {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
      title: "Dentist",
      desc: "Teething troubles? Schedule a dental checkup",
    },
    {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
      title: "Gynecologist/Obstetrician",
      desc: "Explore for women’s health, pregnancy and infertility treatments",
    },
    {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
      title: "Dietitian/Nutrition",
      desc: "Get guidance on eating right, weight management and sports nutrition",
    },
    {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
      title: "Physiotherapist",
      desc: "Pulled a muscle? Get it treated by a trained physiotherapist",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="mt-4 ml-3  mb-3 bookAppointment ">
          <h4 style={{ fontWeight: "700", fontSize: "24px" }}>
            Book an appointment for an in-clinic consultation
          </h4>
          <h5 style={{ fontSize: "14px" }}>
            Find experienced doctors across all specialties
          </h5>
        </div>
        <div className="continer d-flex justify-content-evenly">
          {appointments.map((el) => (
            <div className={"appointment_card"}>
              <div className={"appointment_card_img"}>
                <img src={el.img} alt={el.title} />
              </div>
              <h3 className={"appointment_card_title"}>{el.title}</h3>
              <p className={"appointment_card_desc"}>{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Appointment;
