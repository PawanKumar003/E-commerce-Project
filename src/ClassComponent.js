import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      add: 0,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("didMount");
  }
  componentDidUpdate() {
    console.log("update");
  }

  componentWillUnmount() {
    console.log("delete");
  }

  //   getDerivedStateFromProps() {
  //     console.log("get drive");
  //   }
  render() {
    const incres = () => {
      this.setState({ add: this.state.add + 1 });
      //alert("dhsfsdhf");
    };
    return (
      <div>
        {console.log("render")}
        hfjdhj gfdk hgkfhslkghf {this.state.add}
        <button onClick={incres}>addd</button>
      </div>
    );
  }
}

export default ClassComponent;
