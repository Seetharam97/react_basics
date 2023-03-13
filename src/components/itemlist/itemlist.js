import React, {Component} from "react";
import "./itemstyle.css";
import DateFormat from "../dateformat/dateformate";
import AmountFormat from "../amontformat/amountformat";

class ItemList extends Component{
    constructor(props){
        super(props)

        this.state = {
            item: this.props.item
        }

        this.handleMouseEnter = this.handleMouseEnter.bind();
        this.handleMouseLeave = this.handleMouseLeave.bind();
    }

    handleDeleteTheItems(id, e){
        e.preventDefault();
        this.setState((state, props)=>{
            let itemsData = [];
            state.item.forEach((itemDetails, idx)=>{
                if(itemDetails.id != id){
                    console.log("-".repeat(200))
                    console.log(itemDetails)
                    console.log("-".repeat(200))
                    itemsData.push(itemDetails)
                }
            });

            let finalData = {
                item: itemsData
            }
            return finalData;
        }) 
    }

    totalAmount(){
        let total_amount = 0;
        for(let i = 0; i< this.state.item.length; i++){
            total_amount = total_amount + this.state.item[i].amount
        }
        return total_amount;
    }


    handleMouseEnter(e){
        e.target.parentNode.classList.add("highlight")
    }

    handleMouseLeave(e){
        e.target.parentNode.classList.remove("highlight")
    }

    render(){
        const list  = this.state.item.map((data)=>
            <tr key={data.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td><AmountFormat value = {data.amount} /></td>
                <td><DateFormat value = {data.spendDate} /></td>
                <td>{data.category}</td>
                <td><a href="#" onClick={(e)=>this.handleDeleteTheItems(data.id, e)}>Delete</a></td>
            </tr>
        );
        return(
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                    <tr>
                        <td colSpan="2" style={{ textAlign: "right" }}>Total Amount</td>
                        <td colSpan="4" style={{ textAlign: "left" }}>{this.totalAmount()}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default ItemList;