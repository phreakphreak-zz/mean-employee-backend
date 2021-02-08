const employeeController = {};
const Employee = require("./model");

employeeController.getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.json({ error: err });
  }
};

employeeController.getEmployee = async (req, res, next) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  res.json(employee);
};

employeeController.createEmployee = async (req, res, next) => {
  try {
    const { name, position, office, salary } = req.body;
    const newEmployee = new Employee({
      name: name,
      position: position,
      office: office,
      salary: salary,
    });

    await newEmployee.save();
    res.json({ status: "employee created" });
  } catch (error) {
    res.json({ error: error });
  }
};

employeeController.editEmployee = async (req, res, next) => {
  const { id } = req.params;
  await Employee.findByIdAndUpdate(id, req.body);
  res.json({ status: "Employee Updated" });
};

employeeController.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  await Employee.findByIdAndDelete(id);
  res.json({ status: "Employee Deleted" });
};

module.exports = employeeController;
