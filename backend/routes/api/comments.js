const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Comment } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();

const validateComment = [
  check("body")
    .exists({ checkFalsy: true })
    .isLength({ min: 0, max: 40 }),
  handleValidationErrors,
];

router.get("/:checkinid", asyncHandler(async (req,res) => {
    const id = req.params.checkinid;
    const comments = await Comment.checkinComments(User, id);
    res.json(comments)
}))

router.post("/", validateComment, asyncHandler(async (req, res) => {
    const {body, checkinId, user_id} = req.body;
    const comment = await Comment.createComment(
        {
            body,
            checkin_id: checkinId,
            user_id
        },
        User
    );
    return res.json(comment)
}))

router.delete("/:commentid", asyncHandler(async(req, res) => {
    const id = parseInt(req.params.commentid, 10);
    const comment = await Comment.delete(id);
    res.json(comment)
}))

router.put(
  "/:commentid",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.commentid, 10);
    let { body } = req.body;
    let updatedComment = await Comment.update(body, id);
    res.json(updatedComment);
  })
);

module.exports = router;
