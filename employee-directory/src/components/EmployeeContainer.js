import React, { Component } from "react";
import Container from "./Container"
import Row from "./Row"
import EmployeeList from "./EmployeeList"
import API from "../utils/API";
import Col from "./Col";
import "./employeeContainer.css";

class EmployeeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // search: "",
            isLoaded: false,
            employees: [],
            results: [],
            employeeSort: "desc",
            error: null
        };
    }

    componentDidMount() {
        this.directory();
    }

    directory = query => {
        API.getEmployee(query)
            // .then(res => this.setState({ employees: res.data.results, results: res.data.results}))
            // .catch(err => console.log(err));
        // fetch("https://randomuser.me/api/?pretty?page=3&results=10&seed=abc")
            // .then(res => res.json())
            .then((res) => {
                this.setState({ isLoaded: true, employees: res.data.results });
                console.log(this.state)
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    // onSort = employeeSort => {
    //     this.setState({ employeeSort })
    // }

    render() {

        const { error, isLoaded, employees, employeeSort, results } = this.state;
        console.log(results);
        console.log(employees);
        // const sortEmployeeList = employees.sort((a, b) => {
        //     const isReversed = (employeeSort === "asc") ? 1 : -1;
        //     return isReversed * a.name.first.localeCompare(b.name.last)
        // });
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <div>
                    <Container fluid="md" style={{ minHeight: "80%" }}>
                        <Row>
                            <Col size="md-12">
                                <EmployeeList 
                                    employees={this.state.employees}
                                    // onSort={this.onSort}
                                    // sortedEmployees={sortEmployeeList}
                                    />

                            </Col>
                        </Row>
                    </Container>
                </div >
            )
        };
    }
}
export default EmployeeContainer;