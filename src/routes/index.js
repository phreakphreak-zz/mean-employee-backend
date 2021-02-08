const {Router} = require('express');
const router = Router();

const employeeRoutes = require('../components/employee/routes');

router.use('/api/employee',employeeRoutes)

router.get('/', (req, res, next) => {
    res.send(`hello world`);
    res.status(200);
});


module.exports = router;