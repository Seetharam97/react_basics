import React, {Component} from "react";
import "./breakingstyle.css";

class BreakingBadComponent extends Component{
    constructor(props){
        super(props);
        let date = new Date()
        this.state = {
            date: date,
            year: date.getFullYear(),
            month: date.toLocaleString("default", { month: "long" }),
            day: date.getDate(),
            timer: 0,
            timerId: null
        }
    }

    updateFunction = ()=>{
        this.setState({timer: this.state.timer + 1})
    };

    componentDidMount(){
        console.log("componentDidMount")
        const timerId = setInterval(this.updateFunction, 1000);
        this.setState({year: this.state.year, timerId})
    }

    componentDidUpdate(prevProps, prevState){
        console.log("1_componentDidUpdate")
        console.log(this.props.currentTime)
        console.log("_".repeat(200))
        console.log("2_componentDidUpdate")
        console.log(prevProps.currentTime)
        if(prevProps.currentTime !== this.state.date){
            console.log("new data")
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearTimeout(this.state.timerId);  
    }

    render(){
        return(
            <div>
                <h1>{this.state.day} {this.state.month} {this.state.year}</h1>
                <p>{this.state.timer}</p>                     
            </div>
        )
    }
}

export default BreakingBadComponent;