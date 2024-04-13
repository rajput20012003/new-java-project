// Array of employees
const employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  // PrintDeveloperbyMap function using map
  function PrintDeveloperbyMap() {
    const developers = employees.filter(employee => employee.profession === "developer");
    developers.map(dev => console.log(dev));
  }
  
  // PrintDeveloperbyForEach function using forEach
  function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  // addData function to add a new employee
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(newEmployee);
  }
  
  // removeAdmin function to remove employees with profession admin
  function removeAdmin() {
    const filteredArray = employees.filter(employee => employee.profession !== "admin");
    console.log(filteredArray);
  }
  
  // ConcatenateArray function to concatenate two arrays
  function concatenateArray() {
    const newArray = [
      { id: 4, name: "Mike", age: "22", profession: "designer" },
      { id: 5, name: "Emily", age: "25", profession: "manager" },
      { id: 6, name: "Max", age: "24", profession: "engineer" }
    ];
    const concatenatedArray = employees.concat(newArray);
    console.log(concatenatedArray);
  }
  