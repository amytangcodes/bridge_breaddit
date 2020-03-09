const express = require("express");
const bodyParser = require("body-parser");

const { healthRouter } = require('../routes/health/health.router')
const { breadRouter } = require('../routes/breaddit/breaddit.router')

const router = express.Router();

// SwaggerUi set up
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.use(bodyParser.json());
router.use("/health", healthRouter);
router.use("/breaddit", breadRouter);

module.exports = router;
