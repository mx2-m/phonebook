import React, { Component } from 'react'
import Service from '../services/PhoneNumberService'

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numbers: []
        }
        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete(id){
       Service.deletePhoneNumber(id).then( res => {
            this.setState({numbers: this.state.numbers.filter(number => number.id !== id)});
        });
    }
    view(id){
        this.props.history.push(`/view/${id}`); //view
    }
    edit(id){
        this.props.history.push(`/add/${id}`);
    }

    componentDidMount(){
        Service.getPhoneNumber().then((res) => {
            this.setState({ numbers: res.data});
        });
    }

    add(){
        this.props.history.push("/add/_add"); //izbrisan dio
    }

    render() {
        return (
            <div>
                <h2 className="text-center">PhoneNumbers List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.add}> Add </button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> Name</th>
                            <th> Number</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.numbers.map(
                                number =>
                                    <tr key = {number.id}>
                                        <td> { number.name} </td>
                                        <td> {number.number}</td>

                                        <td>
                                            <button onClick={ () => this.edit(number.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.delete(number.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.view(number.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListComponent