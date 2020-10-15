// import React from "react";
// import Map from "../components/Map.js";
// import axios from "axios";

// class MapContainer extends React.Component {
//   state = {
//     pins: [],
//   };

// //   componentDidMount() {
// //     axios
// //       .get("http://localhost:3000/breweries", { withCredentials: true })
// //       .then((resp) => {
// //         this.setState({ pins: resp.data });
// //       });
// //   }

//   render() {
//     // console.log(this.state.pins)
//     return <Map pins={this.state.pins} />;
//   }
// }

// export default MapContainer;

// import React, { Component } from "react";
// import Map from "../components/Map.js";

// class MapContainer extends Component {

//   render() {
//     return (
//       <div>
//         <Map
//           breweries={this.props.breweries}
//           addFavorite={this.props.addFavorite}
//         />
//         ;
//       </div>
//     );
//   }
// }

// export default MapContainer;

import React, { Component } from "react";
import Map from "../components/Map.js";

class MapContainer extends Component {
  //   state = {
  //     pins: [],
  //   };

  //   componentDidMount() {
  //       this.setState({
  //           pins: this.props.breweries
  //       })
  //     // axios.get('http://localhost:3000/breweries',{withCredentials: true})
  //     // .then(resp => {this.setState({pins: resp.data})
  //     // })
  // //     if (localStorage.getItem("allBreweries")) {
  // //       this.setState({
  // //         breweries: JSON.parse(localStorage.getItem("allBreweries")),
  // //       });
  // //     }
  //   }

  render() {
    console.log("user", this.props.user, "breweries", this.props.breweries);
    return (
      <Map
        user={this.props.user}
        breweries={this.props.breweries}
        addFavorite={this.props.addFavorite}
      />
    );
  }
}

export default MapContainer;
