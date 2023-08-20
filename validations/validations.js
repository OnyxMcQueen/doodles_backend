const validateURL = (req, res, next) => {
    if (
      req.body.image_url.substring(0, 7) === "http://" ||
      req.body.image_url.substring(0, 8) === "https://"
    ) {
      return next();
    } else {
      res
        .status(400)
        .json({ error: "You forgot to start your image link with http:// or https://" });
    }
  };

  const validateDate = (req, res, next) => {
    if(req.body.created_date.length != 10){
        res.status(400).send("Please follow the date format of YYYY-MM-DD. Be sure to include the dashes")
    }
    else{
        next();
    }
  }


  module.exports = {
    validateURL,
    validateDate
  }