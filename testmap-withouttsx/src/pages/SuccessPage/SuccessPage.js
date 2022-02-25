import React, { Component } from 'react'
import SuccessHeader from "../../components/SuccessHeader/SuccessHeader";
import Success from "../../components/Success/Success";
import cathedraleSuccess from "./images/cathedraleSucces.png";
import tenLieuxSuccess from "./images/10lieuxSuccess.png";
import threeLieuxSuccess from "./images/3lieuxSuccess.png";
import oneHSuccess from "./images/1hSuccess.png"

export default class SuccessPage extends Component {
  render() {

    function visitez_la_cathedrale_function() {
      return true;
    }

    return (
      <div className="successPage">
        <SuccessHeader />
        <Success
          icon={cathedraleSuccess}
          title={"Visitez la cathédrale !"}
          desc={"Trouvez et visiter la cathédrale de metz"}
          achievementFunction={true} />
        <Success
          icon={threeLieuxSuccess}
          title={"Exploreur"}
          desc={"Trouvez et visiter 3 lieux"}
          achievementFunction={visitez_la_cathedrale_function()} />
        <Success
          icon={oneHSuccess}
          title={"1h !"}
          desc={"Utilisez l'application pour une durée de 1h "}
          achievementFunction={visitez_la_cathedrale_function()} />
        <Success
          icon={tenLieuxSuccess}
          title={"Ca commence a faire beaucoup"}
          desc={"Trouvez 10 lieux"}
          achievementFunction={visitez_la_cathedrale_function()} />
      </div>
    )
  }
}
