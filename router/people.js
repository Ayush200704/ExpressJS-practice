const express = require("express");
const router = express.Router();

const {people} = require("../data");

const {
    getInput,
    postInput,
    postPostman,
    putInput,
    deleteInput
} = require("../controllers/controller");

router.get("/", getInput);

router.post("/", postInput)

router.post("/postman", postPostman)

router.put("/:id", putInput)

router.delete("/:id", deleteInput)

module.exports = router;