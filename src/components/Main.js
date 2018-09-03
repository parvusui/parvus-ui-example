import React, { Component, Fragment } from "react";
import {
  withTheme,
  A,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Checkbox,
  Label,
  Input
} from "parvus-ui";

class Main extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    terms: false
  };

  render() {
    const { firstName, lastName, email, terms } = this.state;

    return (
      <Fragment>
        <Alert type="primary">Parvus-ui example</Alert>
        <Breadcrumb styles={{ backgroundColor: "#f9f9f9", margin: "1rem 0" }}>
          <BreadcrumbItem>
            <A>Home</A>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <A>About</A>
          </BreadcrumbItem>
        </Breadcrumb>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Card styles={{ margin: "0 2rem" }}>
            <CardHeader>Header</CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card styles={{ margin: "0 2rem" }}>
            <CardHeader>Header</CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card styles={{ margin: "0 2rem" }}>
            <CardHeader>Header</CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
          <h2>Sample Form</h2>
          <Label htmlFor="firstName">
            <b>First Name </b>
          </Label>
          <Input
            id="firstName"
            value={firstName}
            onChange={event => {
              this.setState({ [event.target.id]: event.target.value });
            }}
          />
          <Label htmlFor="lastName" styles={{ marginTop: "1rem" }}>
            <b>Last Name </b>
          </Label>
          <Input
            id="lastName"
            value={lastName}
            onChange={event => {
              this.setState({ [event.target.id]: event.target.value });
            }}
          />
          <Label htmlFor="email" styles={{ marginTop: "1rem" }}>
            <b>Email </b>
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={event => {
              this.setState({ [event.target.id]: event.target.value });
            }}
          />

          <Label htmlFor="terms" styles={{ marginTop: "1rem" }}>
            <b>Confirm our terms </b>
          </Label>
          <Checkbox
            id="testCheckboxMain"
            checked={terms}
            onChange={() => this.setState({ terms: !terms })}
          />

          <div style={{ display: "flex", marginTop: "1rem" }}>
            <Button
              type="secondary"
              onClick={() =>
                this.setState({
                  firstName: "",
                  lastName: "",
                  email: "",
                  terms: false
                })
              }
            >
              Reset
            </Button>
            <Button type="primary" styles={{ marginLeft: "1rem" }}>
              Confirm
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withTheme(Main);
