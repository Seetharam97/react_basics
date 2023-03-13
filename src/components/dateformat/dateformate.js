import React, {Component} from "react";


class DateFormat extends Component{
    constructor(props){
        super(props)
    }

    format(date){
        let dateObj = new Date(date)
        let result = `${dateObj.getDate()}-${dateObj.toLocaleDateString('default', {month: "short"})}-${dateObj.getFullYear()}`
        return result
    }

    render(){
        return(
            <span>{this.format(this.props.value)}</span>
        )
    }
}

export default DateFormat;