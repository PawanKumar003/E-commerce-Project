import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      add: 0,
    };
    console.log("constructor 1");
  }
  componentDidMount() {
    console.log("didMount 3");
  }
  componentDidUpdate() {
    console.log("update 5");
  }

  componentWillUnmount() {
    console.log("delete 4 ");
  }

  render() {
    const incres = () => {
      this.setState({ add: this.state.add + 1 });
      //alert("dhsfsdhf");
    };
    return (
      <div>
        {console.log("render 2")}
        hfjdhj gfdk hgkfhslkghf {this.state.add}
        <button onClick={incres}>addd</button>
      </div>
    );
  }
}

export default ClassComponent;
