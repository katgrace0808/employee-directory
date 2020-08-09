import React from "react";

function EmployeeList(props) {
  console.log(props)
  return (
    <div>
    <table>
      <thead className="table">
        <tr>
          {/* <th><button type="submit" onClick={()=>props.onSort("asc")}>Name</button></th> */}
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Picture</th>
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
