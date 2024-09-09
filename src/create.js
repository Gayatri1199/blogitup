import React, { useState } from "react";
import fb from "./firebase";
const db = fb.firestore();
const BlogList = db.collection("blogs");

const CreateBlog = () => {
  const [title, SetTitle] = useState("");
  const [body, SetBody] = useState("");
  const submit = (e) => {
    alert("Submit Clicked");
    e.preventDefault();
    BlogList.add({
      Title: title,
      Body: body,
    })
      .then((docRef) => {
        alert("Data Successfully Submit");
      })
      .catch((err) => {
        console.error("Error in Submitting the data", err);
      });
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          submit(event);
        }}
      >
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            SetTitle(e.target.value);
          }}
          required
        />

        <textarea
          name="content"
          type="text"
          placeholder="write yoyr content here"
          rows="10"
          cols="150"
          onChange={(e) => {
            SetBody(e.target.value);
          }}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
