const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });

  res.json({
    message: "User created successfully",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  const allCourses = await Course.find({});

  res.json({
    courses: allCourses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseID = req.params.courseId;
  const username = req.headers.username; // Change this line
  try {
    await User.updateOne(
      { username: username },
      { $push: { purchasedCourse: courseID } }
    );
    res.json({ message: "Purchase Complete" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error purchasing course" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourse,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
