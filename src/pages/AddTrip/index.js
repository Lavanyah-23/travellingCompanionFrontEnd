import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postTrip } from "../../store/trips/actions";
import { useNavigate } from "react-router-dom";

const AddTrip = () => {
  const [startingDate, setStartingDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [country, setCountry] = useState("");
  const [maximumTravelers, setMaximumTravelers] = useState(2);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("what is date", typeof endDate, endDate);

  // var tempDate = moment(userInputFieldDate).format("");

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      postTrip(
        startingDate,
        endDate,
        description,
        title,
        image,
        country,
        maximumTravelers
      )
    );

    setStartingDate(new Date());
    setEndDate(new Date());
    setTitle("");
    setDescription("");
    setImage("");
    setCountry("");
    setMaximumTravelers(2);
    navigate("/trips");
  }

  return (
    <div>
      <Form.Group className="mt-5">
        <Form.Label>Start Date</Form.Label>
        <DatePicker onChange={setStartingDate} value={startingDate} />
      </Form.Group>

      <Form.Group className="mt-5">
        <Form.Label>End Date</Form.Label>
        <DatePicker onChange={setEndDate} value={endDate} />
      </Form.Group>

      <Form.Group style={{ maxWidth: "300px" }}>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="string"
          placeholder="title"
          required
        />
      </Form.Group>

      <Form.Group style={{ maxWidth: "300px" }}>
        <Form.Label>Image</Form.Label>
        <Form.Control
          value={image}
          onChange={(event) => setImage(event.target.value)}
          type="string"
          placeholder="image"
          required
        />
      </Form.Group>

      <Form.Group style={{ maxWidth: "300px" }}>
        <Form.Label>Country</Form.Label>
        <Form.Control
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          type="string"
          placeholder="country"
          required
        />
      </Form.Group>

      <Form.Group style={{ maxWidth: "300px" }}>
        <Form.Label>Max participants</Form.Label>
        <Form.Control
          value={maximumTravelers}
          onChange={(event) => setMaximumTravelers(event.target.value)}
          type="number"
          min={2}
          required
        />
      </Form.Group>

      <Form.Group className="mt-5" style={{ maxWidth: "500px" }}>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows="4"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Description goes here..."
          required
        />
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Post Trip
        </Button>
      </Form.Group>
    </div>
  );
};
export default AddTrip;
