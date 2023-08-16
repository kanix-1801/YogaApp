import React, { useState, useEffect } from "react";

function YogaBoxFormat(props) {
  // const [videoId, setVideoId] = useState(null);

  // useEffect(() => {
  //   callYoutubeAPI(props.sanskrit_name);
  // }, [props.sanskrit_name]);

  // function callYoutubeAPI(valueSelected) {
  //   const API_KEY = "AIzaSyAdkr1AU2S6LmiQJdlJQl48pTQbCWMmsq4";
  //   // const API_KEY = "AIzaSyDqzmYRH5K7oxiJSb3MySN4vEqgMjn7XsY";
  //   const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${valueSelected}+yoga+pose&maxResults=1&&safeSearch=moderate&key=${API_KEY}`;

  //   fetch(apiUrl)
  //     .then((youtubeResult) => youtubeResult.json())
  //     .then((youtubeResult) => {
  //       if (youtubeResult.items.length > 0) {
  //         setVideoId(youtubeResult.items[0].id.videoId);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }

  return (
    <>
      <div className="container">
        <hr></hr>
        <div className="row yoga_row_container">
          <div className="col-lg-6">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${props.yout_id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

          </div>
          <div className="col-lg-6 row">
            <div className="col-lg-12">
              {props.sanskrit_name} ({props.english_name})
            </div>
            <div className="yoga_icon">
              <img
                height="265"
                src={props.img_url}
                alt={props.english_name}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YogaBoxFormat;
