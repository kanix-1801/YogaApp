import Header from "../Components/Header";
// import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import React, { useState, useEffect } from "react";
import { GymService } from "js-gym";

function Workout() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the API
    fetch("yoga_api.json")
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.log(error));
  }, []);

  const gymService = new GymService();
  console.log(gymService);
  const[gymData , setgymData] = useState();
  console.log(gymService.findByExercise("squat"));

  return (
    <>
      <Header />

      <div className="container">
        <div className="row home_start_div">
          <div className="col-lg-6 col-md-8">
            <div className="homePageHeadline">
              Get{" "}
              <Typewriter words={["Fit !", "Strong !", "Healthy !"]} loop={0} />
            </div>

            <p className="home_disc_p">
              We are dedicated to helping you tranform your body and mind
              through the power of fitness
            </p>
          </div>
          <div className="col-lg-6 col-md-4">
            <iframe
              src="https://giphy.com/embed/LHZyixOnHwDDy"
              width="600"
              height="360"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/computer-working-cat-LHZyixOnHwDDy"></a>
            </p>
          </div>
        </div>
        {/* {jsonData.map((item) => (
          <div key={item.id}>
            {item.id % 2 == 0 ? (
              <YogaBoxFormat
                sanskrit_name={item.sanskrit_name}
                english_name={item.english_name}
                img_url={item.img_url}
              />
            ) : (
              <YogaBoxFormat
                sanskrit_name={item.sanskrit_name}
                english_name={item.english_name}
                img_url={item.img_url}
              />
            )}
          </div>
        ))} */}
        {/* <div>{gymData.name}</div> */}
        
      </div>
    </>
  );
}

export default Workout;
