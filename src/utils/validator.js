const { body, validationResult } = require("express-validator");

const breadditValidationRules = () => {
  return [
    body("title").not().isEmpty().trim().escape().withMessage("Needs a title"),
    body("id").not().isEmpty().withMessage("You need an id").isNumeric().withMessage("Needs to be a number"),
    body("text").trim().escape(),
    body("score").not().isEmpty().withMessage("You are missing a score").isNumeric().withMessage("Needs to be a number"),
    body("author").trim().escape()
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }

  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}


module.exports = {
  breadditValidationRules,
  validate
}