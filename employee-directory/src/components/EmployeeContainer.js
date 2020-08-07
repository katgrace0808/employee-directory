import React, { Component } from "react";
import Container from "./Container"
import Row from "./Row"
import EmployeeList from "./EmployeeList"
import API from "../utils/API";

class EmployeeContainer extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
        error: null
    };

    componentDidMount() {
        API.getEmployee()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.search) {
            return;
        }
        API.search(this.state.search)
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({
                    title: res.data[1],
                    url: res.data[3][0],
                    error: ""
                });
            })
            .catch(err => this.setState({ error: err.message }));
    };


    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <Row>
                        <EmployeeList employees={this.state.results} />
                    </Row>
                </Container>
            </div>
        );
    }
}
export default EmployeeContainer;