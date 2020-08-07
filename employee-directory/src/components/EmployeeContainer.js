import React, { Component } from "react";
import Container from "./Container"
import Row from "./Row"
import EmployeeList from "./EmployeeList"
import API from "../utils/API";
import Column from "./Column";

class EmployeeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            employees: [],
            results: [],
            error: null
        };
    }


    componentDidMount() {
        // API.getEmployee()
        fetch("https://randomuser.me/api/?pretty?page=3&results=10&seed=abc")
        .then(res => res.json())
            .then((res) => {this.setState({ isLoaded: true, employees: res.results });
            console.log(this.state)
    },
    (error) => {
        this.setState({
            isLoaded: true,
            error
        })
    }
            )}
    // handleInputChange = event => {
    //     this.setState({ search: event.target.value });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (!this.state.search) {
    //         return;
    //     }
    //     API.search(this.state.search)
    //         .then(res => {
    //             if (res.data.length === 0) {
    //                 throw new Error("No results found.");
    //             }
    //             if (res.data.status === "error") {
    //                 throw new Error(res.data.message);
    //             }
    //             this.setState({
    //                 title: res.data[1],
    //                 url: res.data[3][0],
    //                 error: ""
    //             });
    //         })
    //         .catch(err => this.setState({ error: err.message }));
    // };


    render() {
        const { error, isLoaded, employees} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <Row>
                        <Column size="md-8">
                            <ul className="list-group search-results">
                                {employees.map((employee) => (
                                    <li key={employee} className="list-group-item">
                                        <p>{employee.name.first}</p>
                                        <p>{employee.name.last}</p>
                                        <p>{employee.email}</p>
                                        <p>{employee.phone}</p>
                                        <img alt="Employee" src={employee.picture.large} className="img-fluid" />
                                    </li>
                                ))}
                            </ul>
                            {/* <EmployeeList employees={this.state.results} /> */}
                        </Column>
                    </Row>
                </Container>
            </div>
        )};
    }
}
export default EmployeeContainer;