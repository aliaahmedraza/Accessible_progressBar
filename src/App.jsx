import React from "react";
import ProgressBar from "./component/ProgressBar/ProgressBar";

const App = () => {
  const bars=[0,1,3,5,10,30,45,60,70,85,100];
  return (
    <div>
      {bars.map((value)=>{
        return (
          <div key={value}>
            <ProgressBar progress={value}/>
          </div>
        )
      })}
      {/* <ProgressBar progress={70} /> */}
    </div>
  );
};

export default App;
