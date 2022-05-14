import React from 'react';


const Iframe = () => {
  
  const iframe = () => {
    return {
      __html: '<iframe src="./i-frame.html" width="60%" height="600px"></iframe>'
    }
  }
  
  return (
    <>
      <div className="mb-2" style={{textAlign: "center"}}>
      </div>
      <div  style={{textAlign: "center"}} dangerouslySetInnerHTML={iframe()}/>
    </>
  )
}


export default Iframe
