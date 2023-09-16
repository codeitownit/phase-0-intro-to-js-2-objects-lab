// Write your solution in this file!


const employee = {
    name: "Eve Samm",
    streetAddress: "3344 Broadway St",
  }
  function updateEmployeeWithKeyAndValue(employee, key, value) {
       return { ...employee, [key]: value };
  }
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
      employee[key] = value;
    return employee;
  }
    function deleteFromEmployeeByKey(employee, key) {
      const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
      delete employee[key];
    return employee;
  }
    const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam Smith");
  console.log(updatedEmployee);
   
  const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "123 Brooklyn");
  console.log(destructivelyUpdatedEmployee);
    
  const employeeWithoutStreet = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log(employeeWithoutStreet);
  
  
  const destructivelyRemovedStreet = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(destructivelyRemovedStreet);
    