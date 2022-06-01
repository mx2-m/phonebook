import React from 'react';
import PhoneNumberService from '../services/PhoneNumberService';

class PhoneNumberComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            numbers:[]
        }
    }

    componentDidMount(){
        PhoneNumberService.getPhoneNumberById().then((response) => {
            this.setState({ numbers: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> PhoneNumbers List</h1>
                <table className = "table table-striped">
                    <thead>
                    <tr>

                        <td> Id</td>
                        <td> Name</td>
                        <td> Number</td>

                    </tr>

                    </thead>
                    <tbody>
                    {
                        this.state.numbers.map(
                            number =>
                                <tr key = {number.id}>
                                    <td> {number.id}</td>
                                    <td> {number.name}</td>
                                    <td> {number.number}</td>

                                </tr>
                        )
                    }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default PhoneNumberComponent
