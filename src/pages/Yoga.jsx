import Header from "../Components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import YogaBoxFormat from "../Components/YogaBoxFormat";
import YogaBoxFormat2 from "../Components/YogaBoxFormat2";
import React, { useState, useEffect } from "react";

function Yoga() {
  const imageStyle = {
    width: "500px",
  };
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the API
    fetch("yoga_api.json")
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.log(error));
  }, []);

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
          <div className="col-lg-6 col-md-4 cd">
            <img
              className="home_img"
              style={imageStyle}
              src="yoga.png"
              alt=""
            />
          </div>
        </div>
        {jsonData.map((item) => (
          <div key={item.id}>
            {item.id % 2 == 0 ? (
              <YogaBoxFormat
                sanskrit_name={item.sanskrit_name}
                english_name={item.english_name}
                img_url={item.img_url}
                yout_id={item.yout_id}
              />
            ) : (
              <YogaBoxFormat2
                sanskrit_name={item.sanskrit_name}
                english_name={item.english_name}
                img_url={item.img_url}
                yout_id={item.yout_id}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Yoga;
