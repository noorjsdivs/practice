import { React } from "react";
import { Form, Button } from "rsuite";
import Header from "./Header";
import "./Rasel.css";

const Rasel = () => {
  return (
    <>
      <Header />
      <div className="container">
        {/*----------- form header start ------------- */}

        <h1 className="w-full bg-lime-700">Registration</h1>

        {/*----------- form header end ------------- */}

        {/* --------------------- form area start ------------------ */}

        <Form layout="horizontal">
          <Form.Group controlId="name-6">
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name="name" />
            <Form.HelpText>Please Enter your name</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="email-6">
            <Form.ControlLabel>Email Address</Form.ControlLabel>
            <Form.Control name="email" type="email" />
            <Form.HelpText>Please enter your email here</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="password-6">
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control name="password" type="password" autoComplete="off" />
          </Form.Group>
          <Form.Group controlId="password-6">
            <Form.ControlLabel>Confirm Password</Form.ControlLabel>
            <Form.Control name="password" type="password" autoComplete="off" />
          </Form.Group>
          <Form.Group>
            <Button appearance="primary">Submit</Button>
          </Form.Group>
        </Form>

        {/* --------------------- form area end ------------------ */}
      </div>
    </>
  );
};

export default Rasel;
