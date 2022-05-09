import React from 'react';


const Iframe = () => {
  
  const iframe = () => {
    return {
      __html: '<iframe src="./example.html" width="60%" height="330"></iframe>'
    }
  }
  
  return(
    <>
      <div style={{textAlign: "center"}}  dangerouslySetInnerHTML={iframe()} />
    </>
  )
}


export default Iframe
