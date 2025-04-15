import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress,setAnimatedProgress]= useState(0);
  const [stylesLoaded, setStylesLoaded] = useState(false);
  useEffect(()=>{
    const timer = setTimeout(() => setAnimatedProgress(progress), 100);
    return () => clearTimeout(timer);
  },[progress])
  useEffect(() => {
    // const onLoad = () => {
      setStylesLoaded(true);
    // };
  
    // window.addEventListener("load", onLoad);
    // return () => window.removeEventListener("load", onLoad);
  }, []);
  if (!stylesLoaded){
    return(
      <div>Loading...</div>
    )
  }
  return (
      <div className="progress-bar-component">
      <strong><h1>Progress Bar</h1></strong>
        <div className="progress-bar-outer-container mt-5">
          <div
            role="progressbar"
            aria-labelledby="progress-bar-label"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={`${progress}% complete`}
            className="progress-bar-inner-progress"
            style={{ 
              width: `${animatedProgress}%`,
               color: animatedProgress < 5 ? "black" : "white" }}
          >
            <span id="progress-bar-label" className="sr-only">Progress</span>
            {progress}%
          </div>
        </div>
  
     </div>

  );
};

export default ProgressBar;
