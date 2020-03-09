const express = require('express');
const { check } = require("express-validator");

const {
  listBreaddits,
  postBreaddit,
  getBreaddit,
  deleteBreaddit,
  updateBreaddit
} = require("./breaddit.controller");

const router = express.Router();

router.get('', listBreaddits);
router.post(
  '',
  [
    check("title").not().isEmpty().trim().escape(),
    check("id").isNumeric(),
    check("text").trim().escape(),
    check("score").isNumeric(),
    check("author").trim().escape()
  ],
  postBreaddit
);
router.get('/:id', getBreaddit);
router.delete('/:id', deleteBreaddit);
router.put('/:id', updateBreaddit)

module.exports = {
  breadRouter: router
}