const {Router} = require('express');
const router = Router();

const employeeroutes = require('../components/employee/routes');

router.use('/employee',employeeroutes)

router.get('/', (req, res, next) => {
    res.send(`hello world`);
    res.status(200);
});


module.exports = router;