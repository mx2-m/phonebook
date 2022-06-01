import React, { Component } from 'react'
import Service from '../services/PhoneNumberService';

class PhoneNumberEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            number: '',
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        Service.getPhoneNumberById(this.state.id).then( (res) =>{
            let number = res.data;
            this.setState({name: number.name,
                number: number.number,

            });
        });
    }

    update = (e) => {
        e.preventDefault();
        let number = {name: this.state.name, number: this.state.number};
        console.log('number => ' + JSON.stringify(number));
        console.log('id => ' + JSON.stringify(this.state.id));
        Service.update(number, this.state.id).then( res => {
            this.props.history.push('/numbers');
        });
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeNumberHandler= (event) => {
        this.setState({number: event.target.value});
    }


    cancel(){
        this.props.history.push('/numbers');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>  Name: </label>
                                        <input placeholder=" Name" name="Name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Number: </label>
                                        <input placeholder="number" name="number" className="form-control"
                                               value={this.state.number} onChange={this.changeNumberHandler}/>
                                    </div>


                                    <button className="btn btn-success" onClick={this.update}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default PhoneNumberEdit