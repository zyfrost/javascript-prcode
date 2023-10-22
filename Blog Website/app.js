require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongoose connected successfully"))
  .catch((err) => console.log("Error: " + err.message));

const postSchema = { title: String, content: String };
const Post = mongoose.model("Post", postSchema);

const homeStartingContent =
  "Welcome to Daily Journal, your one-stop destination for insightful and engaging content that will captivate your mind and broaden your horizons.";
const aboutContent =
  "Delve into the heart of Daily Journal and discover our mission to empower and inspire through captivating stories, thought-provoking ideas, and diverse perspectives. We are a team of passionate writers dedicated to delivering quality content that sparks meaningful conversations and leaves a lasting impact.";
const contactContent =
  "Your voice matters to us. Reach out and connect with us to share your feedback, inquiries, or simply say hello. We value your input and strive to create a community where ideas flourish and connections are fostered.";

app.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.render("home", { startingContent: homeStartingContent, posts });
  } catch (err) {
    console.error("Error: " + err);
  }
});

app.get("/about", (req, res) =>
  res.render("about", { aboutPage: aboutContent })
);
app.get("/contact", (req, res) =>
  res.render("contact", { contactPage: contactContent })
);
app.get("/compose", (req, res) => res.render("compose"));

//go to compose
app.post("/compose", async (req, res) => {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  });
  try {
    await post.save();
    res.redirect("/");
  } catch (err) {
    console.error("Error: " + err);
    res.redirect("/compose");
  }
});
//get post
app.get("/posts/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post)
      res.render("post", { title: post.title, content: post.content, post });
    else console.log("No Match");
  } catch (err) {
    console.error("Error: " + err);
  }
});
//Delete Post
app.post("/posts/:postId/delete", async (req, res) => {
  try {
    await Post.findByIdAndRemove(req.params.postId);
    console.log("Post deleted successfully");
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting post: " + err);
    res.redirect("/");
  }
});

app.listen(3000, () => console.log("Server is started on Port 3000"));
