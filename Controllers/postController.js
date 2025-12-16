import Post from "../Models/postModel.js";

// Create a new post
export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let imageUrl = "";

    //if file uploaded then upload to cloudinary
    if (req.file && req.file.path) {
      imageUrl = req.file.path;
    }
    const newPost = new Post({
      title,
      description,
      image: imageUrl,
      user: req.user._id,
    });
    await newPost.save();
    res
      .status(201)
      .json({ message: "Post created successfully", data: newPost });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//get post
export const getPost = async (req, res) => {
  try {
    const posts = await Post.find({ approved: true }).populate("user", "name");
    res.status(200).json({ message: "Posts fetched successfully", posts });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//unapproved posts
export const getUnapprovedPosts = async (req, res) => {
  try {
    const posts = await Post.find({ approved: false }).populate("user", "name");
    res
      .status(200)
      .json({ message: "Unapproved Posts fetched successfully", posts });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//approve the post = admin
export const approvePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post approved successfully", data: post });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//delete post
export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
