import React, {Component} from "react";
import "./style.css"
import DateFormat from "../dateformat/dateformate";
import AmountFormat from "../amontformat/amountformat";

class ExpenseEntry extends Component{
    
    constructor(props){
        super(props)
    }
    

    render(){
        return (
            <div className="expense_details">            
            <div><b>Item:</b> <em>{this.props.item.name}</em></div>
            <div><b>Amount:</b> <em><AmountFormat value = {this.props.item.amount} /></em></div>
            <div><b>Spend Date:</b> <em><DateFormat value = {this.props.item.spendDate} /></em></div>
            <div><b>Category:</b> <em>{this.props.item.category}</em></div>
         </div>
        )
    }
}

export default ExpenseEntry;