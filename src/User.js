import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

// All route props (match, location and history) are available to User
function User() {
  let {id}=useParams();
    console.log(id)
  return (
    <React.Fragment>
  <h1>Hello {id}!</h1>
  </React.Fragment>
  )
}
export default User