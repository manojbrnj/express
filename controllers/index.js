const Bootcamp = require('../models/Bootcamp');
//create diffrent methods
//@desc get all bootcamp
//@route Get /api/v1/bootcamps
//@access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const data = await Bootcamp.find();
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (e) {
    console.log(e);
  }
};

//create diffrent methods
//@desc get all bootcamp
//@route Get /api/v1/bootcamps
//@access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    console.log(req._parsedUrl.query);
    const data = await Bootcamp.findById(req.params.id);
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (e) {
    console.log(e);
  }
};

//create diffrent methods
//@desc create new bootcamp
//@route post /api/v1/bootcamps
//@access Private
exports.createBootcamps = async (req, res, next) => {
  try {
    const data = await Bootcamp.create(req.body);
    return res.status(200).json({ data: data });
  } catch (e) {
    console.log(e);
  }
};
//create diffrent methods
//@desc create new bootcamp
//@route post /api/v1/bootcamps
//@access Private
exports.updateBootcamps = async (req, res, next) => {
  try {
    const data = await Bootcamp.findById(req.params.id);
    data.name = req.body.name;
    await data.save();
    return res.status(200).json({ data: data });
  } catch (e) {
    console.log(e);
  }
};

//create diffrent methods
//@desc create new bootcamp
//@route post /api/v1/bootcamps
//@access Private
exports.deleteBootcamps = async (req, res, next) => {
  try {
    const data = await Bootcamp.deleteOne({ _id: req.params.id });
    return res.status(200).json({ data: data });
  } catch (e) {
    console.log(e);
  }
};
