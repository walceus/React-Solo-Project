const express = require("express");
const asyncHandler = require("express-async-handler");
const { Checkin, Wine, User, Comment } = require("../../db/models");

const router = express.Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const validateCheckin = [
  check("description")
    .exists({ checkFalsy: true })
    .isLength({ min: 0, max: 50 }),
  handleValidationErrors,
];

router.get('/', asyncHandler(async (req,res) => {
    const allCheckin = await Checkin.all(User, Wine, Comment);
    res.json(allCheckin);
}));

router.post('/', validateCheckin, asyncHandler(async (req,res) => {
    let {description, image, rating, wineId, userId, location} = req.body;
    let checkIn = await Checkin.createCheckIn(
        {
            description,
            wine_id: wineId,
            image,
            user_id: userId,
            location,
            rating: rating
        },
        Wine,
        User
    );
    res.json(checkIn)
}))

router.put('/:checkinId', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.checkinId, 10);
    let {update} = req.body;
    let updatedCheckin = await Checkin.update(update, id)
    res.json(updatedCheckin)
}))

router.delete('/:checkinId', asyncHandler(async(req, res)=> {
    const id = parseInt(req.params.checkinId, 10);
    const checkin = await Checkin.delete(id);
    res.json(checkin)
}));



module.exports = router;
