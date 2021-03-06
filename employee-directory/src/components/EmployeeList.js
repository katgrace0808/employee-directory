import React from "react";
import "./employeeList.css"

function EmployeeList(props) {
  console.log(props)
  return (
    <div>
    <table className="table table-striped">
      <thead className="table-head">
        <tr>
          <th><button className="button" type="submit" onClick={()=>props.onSort("asc")}>Name</button></th>
          <th><button className="button" type="submit" onClick={()=>props.onSort("asc")}>Email</button></th>
          <th><button className="button" type="submit" onClick={()=>props.onSort("asc")}>Phone</button></th>
        </tr>
      </thead>
      {props.employees.map((employee) => (
          <tbody key={employee.name.last} className="list-item-group">
            <tr>
              <td >{employee.name.first} {employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td><img alt="Employee" src={employee.picture.medium} className="img-fluid" /></td>
            </tr>
          </tbody>
        ))}
    </table>
</div>
  );
}

export default EmployeeList;
