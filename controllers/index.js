//create diffrent methods
//@desc get all bootcamp
//@route Get /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ data: 'show all boootcamps' });
};

//create diffrent methods
//@desc get all bootcamp
//@route Get /api/v1/bootcamps
//@access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ data: `bootcamp get boootcamps ${req.params.id}` });
};

//create diffrent methods
//@desc create new bootcamp
//@route post /api/v1/bootcamps
//@access Private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ data: `bootcamp created boootcamps` });
};
//create diffrent methods
//@desc create new bootcamp
//@route post /api/v1/bootcamps
//@access Private
exports.updateBootcamps = (req, res, next) => {
  res.status(200).json({ data: `bootcamp update boootcamps ${req.params.id}` });
};

//create diffrent methods
//@desc create new bootcamp
//@route post /api/v1/bootcamps
//@access Private
exports.deleteBootcamps = (req, res, next) => {
  res.status(200).json({ data: `bootcamp delted boootcamps ${req.params.id}` });
};
