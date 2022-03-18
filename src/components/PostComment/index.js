import React from 'react'
import { Form, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { postComment } from '../../store/trips/actions';
import { fetchUsersOneTrip } from "../../store/trips/actions";


export default function PostComment(props) {

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    dispatch(postComment(name, comment, props.id));
    setName("");
    setComment("");
    setMessage("Thank you for posting your comment..!")
    console.log(name, comment, props.id)
  }



  return (
    <div>
      <h3 className="mt-5 mb-5">Post Comment</h3>
      <Form.Group style={{ maxWidth: "300px" }}>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="string"
          placeholder="Name"
          required
        />
      </Form.Group>

      <Form.Group className="mt-5" style={{ maxWidth: "500px" }}>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows="4"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          type="text"
          placeholder="Comment goes here..."
          required
        />
      </Form.Group>


      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Post Comment
        </Button>
        {message}
      </Form.Group></div>
  )
}
