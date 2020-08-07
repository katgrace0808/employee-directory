import React from "react";

function EmployeeList(props) {
  return (

    <ul className="list-group search-results">
      {props.employees.map((employee) => (
        <li key={employee} className="list-group-item">
        <p>{employee.name.first}</p>
        <p>{employee.name.last}</p>
        <p>{employee.name.email}</p>
        <p>{employee.name.phone}</p>
          <img alt="Employee" src={employee.picture.large} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;
