import Eagle from "./eagle";
import Crow from "./crow";
import Bird from "./cock";
import Jaguar from "./jaguar";
import Lion from "./lion";
import Fish from "./fish";
import React from "react";

class Kingdom extends React.Component {
  render() {
    return (
      <div>
        <Eagle />
        <Crow />
        <Bird />
        <Jaguar />
        <Lion />
        <Fish />
      </div>
    );
  }
}

export default Kingdom;
