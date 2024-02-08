import React  from "react";

class ClassComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:"red"
        }
    }

static getDerivedStateFromProps(props,state){

    console.log("getDerivedStateFromProps");
    console.log("prevProps:", props);
    console.log("prevState:", state);
     return({color:state.color})
}

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
    
  }

handleclick =()=>{
    this.setState({color:"green"})
}
    render(){
        return(
            <>
            {this.state.color}
            <button onClick={this.handleclick}>Change Color</button>
            </>
        )
    }
}





export default ClassComp;