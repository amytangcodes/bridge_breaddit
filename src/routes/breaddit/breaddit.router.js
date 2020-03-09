const express = require('express');
const { check } = require("express-validator");

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
  .post([
    check("title").not().isEmpty().trim().escape().withMessage("Needs a title"),
    check("id").isNumeric().withMessage("Needs to be a number"),
    check("text").trim().escape(),
    check("score").isNumeric().withMessage("Needs to be a number"),
    check("author").trim().escape()
  ], createBreaddit);

router.route('/:id')
  .get(getBreaddit)
  .delete(deleteBreaddit)
  .put(updateBreaddit);

module.exports = {
  breadRouter: router
}