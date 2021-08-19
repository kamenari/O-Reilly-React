import React from "react";
import StarRating from "./StarRating";

function App() {
  return (
    <div className="App">
      <StarRating 
        style={{ backgroundColor: "lightblue" }} 
        onDoubleClick={e => alert("DoubleClick")}
      />
    </div>
  );
}

export default App;
