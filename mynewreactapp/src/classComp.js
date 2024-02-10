import React from "react";

class ClassComp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color:"red"
        }
    }

    handleClick = ()=>{
            this.setState({color:"violet"});      
    }

    render(){
        return(
        <>
       <ClassComp2 comp1props={this.state.color}/>
       <button onClick={this.handleClick}>button</button>
        </>
    )
}
}

class ClassComp2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color:"blue"
        }
    }
    render(){
        return(
        <>
       <h1>Comp 2 state :  {this.state.color}</h1>
       <br/>
       <h1>Comp 1 props :  {this.props.comp1props}</h1>
        </>
    )
}
}

export default ClassComp;