import React from "react";
import "./Cards.css";

import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

const CardContent = [
  {
    img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png",
    title: "Instant Video Consultation",
    TitleDes: "Connect within 60 secs",
  },
  {
    img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png",
    title: "Find Doctors Near You",
    TitleDes: "Confirmed appointments",
  },
  {
    img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png",
    title: "Medicines",
    TitleDes: "Essentials at your doorstep",
  },
  {
    img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png",
    title: "Lab Tests",
    TitleDes: "Sample pickup at your home",
  },
  {
    img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png",
    title: "Surgeries",
    TitleDes: "Safe and trusted surgery centers",
  },
];

const Cards = () => {
  useEffect(() => {
    setCardContents(CardContent);
    console.log(CardContent);
  }, []);

  const [CardContents, setCardContents] = useState([]);
  return (
    <div className=" container d-flex justify-content-around">
      {CardContents.map((card) => (
        <Card
          className="card-our-offerings "
          style={{
            borderStyle: "25px",
            marginTop: "30px",

            alignItems: "center",
          }}
        >
          <Card.Img variant="top" className="card__img" src={card["img"]} />
          <Card.Body>
            <Card.Title> {card["title"]}</Card.Title>
            <Card.Text>{card.TitleDes}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
