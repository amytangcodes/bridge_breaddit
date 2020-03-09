const fs = require("fs");
const { promisify } = require("util");
const { validationResult } = require("express-validator");

const breadditsData = require("../../../db/dummy.data.json");
const data = breadditsData.breaddits;

const writeFile = promisify(fs.writeFile);

const listBreaddits = (req, res) => {
  return res.json({
    data
  });
};

const createBreaddit = async (req, res) => {
  // console.log('body', req.body)
  const id = data.length + 100;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const newData = {
    title: data.title,
    breaddits: [...data, { id, ...req.body }]
  };

  await writeFile("db/breaddits-copy.data.json", JSON.stringify(newData));
  return res.status(201).json({
    id,
    ...req.body
  });
}

// GET show id
const getBreaddit = async (req, res) => {
  const { id } = req.params;
  const getBreadditById = data.find(breaddit => breaddit.id == id);
  if (getBreadditById) {
    return res.status(200).json({
      message: "One breaddit found",
      getBreadditById
    });
  } else {
    res.status(400).json({
      error: "No breaddit found with that id"
    })
  }
};

// DELETE a specific breaddit
const deleteBreaddit = async (req, res) => {
  let { id } = req.params;
  const getBreadditById = data.find(breaddit => breaddit.id == id);
  if (getBreadditById) {
    const newData = data.filter(breaddits => {
      return breaddits !== getBreadditById;
    })

    const updatedData = {
      breaddits: newData
    }
    await writeFile("db/breaddits-copy.data.json", JSON.stringify(updatedData));
    res.status(200).json({
      message: "Breaddit successfully deleted!",
      data: newData
    });
  } else {
    res.status(400).json({
      error: "Could not delete this breaddit."
    })
  }
}

// PATCH - update a breaddit
const updateBreaddit = async (req, res) => {
  const { id } = req.params;
  const getBreadditById = data.find(breaddit => breaddit.id == id);
  if (getBreadditById) {
    (getBreadditById.title = req.body.title), (getBreadditById.description = req.body.description);
    console.log({ getBreadditById });

    const newData = {
      breaddits: [...data]
    }
    await writeFile("db/breaddits-copy.data.json", JSON.stringify(newData));
    return res.status(201).json({
      message: "Successfully updated!",
      updateBreaddit: getBreadditById
    })
  } else {
    res.status(400).json({
      error: "Breaddit cannot be updated."
    })
  }
}

module.exports = {
  listBreaddits,
  createBreaddit,
  getBreaddit,
  deleteBreaddit,
  updateBreaddit
}