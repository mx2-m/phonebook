import React, { Component } from 'react'
import Service from '../services/PhoneNumberService';

class CreateNumber extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            number: '',

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.saveOrUpdate = this.saveOrUpdate.bind(this);
    }


    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            Service.getPhoneNumberById(this.state.id).then( (res) =>{
                let number = res.data;
                this.setState({name: number.name,
                    number: number.number,

                });
            });
        }
    }
    saveOrUpdate = (e) => {
        e.preventDefault();
        let number = {name: this.state.name, number: this.state.number};
        console.log('number => ' + JSON.stringify(number));


        if(this.state.id === '_add'){
            Service.createPhoneNumbere(number).then(res =>{
                this.props.history.push('/numbers');
            });
        }else{
            Service.updatePhoneNumber(number, this.state.id).then( res => {
                this.props.history.push('/numbers');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add </h3>
        }else{
            return <h3 className="text-center">Update</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>  Name: </label>
                                        <input placeholder="name" name="Name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Number </label>
                                        <input placeholder="Number" name="number" className="form-control"
                                               value={this.state.number} onChange={this.changeNumberHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdate}>Save</button>
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

export default CreateNumber