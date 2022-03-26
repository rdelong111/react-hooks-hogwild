import React, {useState} from "react";

function Hog({greased, medal, image, name, specialty, weight}) {
  const [isHidden, hiddenOrNot] = useState(true);

  function handleImgClick() {
    hiddenOrNot(!isHidden);
  }

  return (
    <div className="ui grid container" >
      <img onClick={handleImgClick} className="ui eight wide column" src={image} alt={name} />
      <div className="ui eight wide column">
        <h1>{name}</h1>
        <div style={{display: isHidden ? 'none' : 'block'}}>
          <p>{`${name} is ${greased ? 'greased.' : 'not greased.'}`}</p>
          <p>{`Highest Medal Achieved: ${medal}`}</p>
          <p>{`Specialty: ${specialty}`}</p>
          <p>{`Weight: ${weight}`}</p>
        </div>
      </div>
    </div>
  )
}

export default Hog;