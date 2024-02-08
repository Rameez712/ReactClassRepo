import React from "react";

class LifeCycleComp extends React.Component{

constructor(props){

    super(props);
    this.state = {
        color:"red"
    }
}

static getDerivedStateFromProps(props, state){
 
    console.log("getDerivedStateFromProps");
    console.log("props:", props);
    console.log("state:", state);
    return {color:"blue" };
  
}

componentDidMount(){
    console.log("componentDidMount");

}

componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");  
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
    
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }


  handleClick = () => {
    // Update the state to trigger re-render and componentDidUpdate
    this.setState({ color: "green" });
  };

    render(){

        return(
            <>
            {this.state.color}
            <button onClick={this.handleClick}>Change Color</button>
            </>
        )
    }
}

class UnMount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: true,
      };
    }
  
    // method to toggle the component 
    toggleComponent = () => {
      
      this.setState((prevState) => ({
        showComponent: !prevState.showComponent,
      }));
    };
  
    render() {
      return (
        <div>
         
          <button onClick={this.toggleComponent}>Toggle Component</button>
          {this.state.showComponent && <LifeCycleComp />}
        </div>
      );
    }
  }
  
  export default UnMount;