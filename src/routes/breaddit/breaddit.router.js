const express = require('express');
const { breadditValidationRules, validate } = require("../../utils/validator");

const {
  listBreaddits,
  createBreaddit,
  getBreaddit,
  deleteBreaddit,
  updateBreaddit
} = require("./breaddit.controller");

const router = express.Router();

router.route('')
  .get(listBreaddits)
  .post(breadditValidationRules(), validate, createBreaddit);

router.route('/:id')
  .get(getBreaddit)
  .delete(deleteBreaddit)
  .put(breadditValidationRules(), validate, updateBreaddit);

module.exports = {
  breadRouter: router
}