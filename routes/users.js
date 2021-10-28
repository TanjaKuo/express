import express from "express";
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Here is the list of users");
  })
  .post((req, res) => {
    res.send("User Created");
  });

router.route("/:userid").get((req, res) => {
  res.send("Hello user with ID: " + req.params.userid);
});

export default router;
