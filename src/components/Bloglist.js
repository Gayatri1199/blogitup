import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import fb from "../firebase"; // Your firebase setup file

const db = fb.firestore(); // Initialize Firestore

const BlogLists = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Set up a real-time listener on the "blogs" collection
    const collectionRef = collection(db, "blogs");

    // Listen for real-time updates with onSnapshot
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const blogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDocuments(blogs);
      console.log("Updated Documents: ", blogs);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  const removeElement = (index) => {
    const newFruits = documents.filter((_, i) => i !== index);
    console.log("newFruits", newFruits);
    setDocuments(newFruits);
  };

  const editblog = (index) => {
    const newFruits = documents.filter((_, i) => i !== index);
    console.log("newFruits", newFruits);
    setDocuments(newFruits);
  };
  return (
    <div>
      {console.log("documents", documents)}
      <h2>Blog List</h2>
      {documents.map((doc, index) => (
        <div key={doc.id}>
          <h2>{doc.Title}</h2>
          <p>{doc.Body}</p>
          <span className="delete" onClick={() => removeElement(index)}>
            Delete
          </span>
          <span className="edit" onClick={() => editblog(doc.id)}>
            Edit
          </span>
        </div>
      ))}
    </div>
  );
};

export default BlogLists;
