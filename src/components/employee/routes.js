const { Router } = require("express");
const router = Router();
const {
  getEmployees,
  getEmployee,
  createEmployee,
  editEmployee,
  deleteEmployee,
} = require("./controller");

router.get("/", getEmployees);

router.post("/", createEmployee);

router.get("/:id", getEmployee);

router.put("/:id", editEmployee);

router.delete("/:id", deleteEmployee);

module.exports = router;