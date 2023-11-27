import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Testing basis
// import Appv1 from "./Appv1";
// import { useState } from "react";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>The current rating of the movie is {movieRating}.</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <StarRating
      maxRating={5}
      size={38}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} color="red" size={32} defaultRating={3} />
    <Test /> */}
    <App />
    {/* <Appv1 /> */}
  </React.StrictMode>
);
