// Write your solution in this file!
let employee = {name: 'Dan', streetAddress: 'Imara'}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee };
  newObj[key] = value;
  return newObj;
  return employee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const deletedObj = { ...employee };
  delete deletedObj[key];
  return deletedObj;
  return employee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}