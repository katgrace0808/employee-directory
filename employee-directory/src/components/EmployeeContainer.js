import React, { Component } from "react";
import Container from "./Container"
import Row from "./Row"
import EmployeeList from "./EmployeeList"
import API from "../utils/API";
import Col from "./Col";
import Filter from "./Filter";
import "./employeeContainer.css";

class EmployeeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
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

    onChange = event => {
        event.preventDefault();
        API.getEmployee(this.state.search)
        console.log(this.state)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.results, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
        }

    onSort = employeeSort => {
        this.setState({ employeeSort })
    }

    render() {

        const { error, isLoaded, employees, employeeSort, results, search } = this.state;

        const sortEmployeeList = employees.sort((a, b) => {
            const isReversed = (employeeSort === "asc") ? 1 : -1;
            const isNotReversed = (employeeSort !== "asc") ? 1 : -1;
            
            if (isReversed) {

            return (
                isReversed * a.name.last.localeCompare(b.name.last)
            )} else if(isNotReversed) {
                return (
                    isNotReversed * b.name.last.localeCompare(a.name.last)
                )
            }
        });
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Filter 
                        onChange={this.onChange}
                    />
                    <Container fluid="md" style={{ minHeight: "80%" }}>
                        <Row>
                            <Col size="md-12">
                                <EmployeeList
                                    employees={this.state.employees}
                                    onSort={this.onSort}
                                    sortedEmployees={sortEmployeeList}
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