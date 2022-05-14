import React from "react";
import Iframe from "../Iframe/Iframe";
import FormEmail from "../FormEmail/FormEmail";

import {Card, Row} from "react-bootstrap";

const Content = () => {
  
  return (
    <>
      <Row>
        <Card style={{width: "100%", margin: "0 auto"}}>
          <div style={{width: "30%", margin: "0 auto"}}>
            <FormEmail />
          </div>
        </Card>
        <Card style={{width: "100%", height: "800px"}}>
          <Iframe />
        </Card>
      </Row>
    </>
  )
}

export default Content