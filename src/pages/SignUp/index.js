import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import DatePicker from "react-date-picker";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imageAvatar, setImageAvatar] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, gender, dateOfBirth, imageAvatar, phoneNumber, description,));

    setEmail("");
    setPassword("");
    setName("");
    setPhoneNumber("");
    setGender("");
    setDescription("");
    setDateOfBirth("");
    setImageAvatar("")
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className='mt-5'>
        <h1 className='mt-5 mb-5'>Signup</h1>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type='text'
            placeholder='Enter name'
            required
          />
        </Form.Group>
        <pre> </pre>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type='email'
            placeholder='Enter email'
            required
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <pre> </pre>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type='password'
            placeholder='Password'
            required
          />
        </Form.Group>
        <pre> </pre>
        <Form.Group controlId="formBasicPhoneNumber">
          <Form.Label>PhoneNumber</Form.Label>
          <Form.Control
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            type="phoneNumber"
            placeholder="PhoneNumber"
            required
          />
        </Form.Group>
        <pre> </pre>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="description"
            placeholder="Description"
            required
          />
        </Form.Group>
        <pre> </pre>
        <Form.Group controlId="formBasicImageAvatar">
          <Form.Label>Image Avatar url</Form.Label>
          <Form.Control
            value={imageAvatar}
            onChange={(event) => setImageAvatar(event.target.value)}
            type="imageAvatar"
            placeholder="ImageAvatar URL"
            required
          />
        </Form.Group>
        <pre> </pre>
        <Form.Group controlId="formBasicGender">
          <label>
            <input
              type="radio"
              onChange={() => setGender("m")}
            />
          </label>
          <Form.Label>&nbsp; Male</Form.Label><br></br>
          <label>
            <input
              type="radio"
              onChange={() => setGender("f")}
            />
          </label>
          <Form.Label>&nbsp; Female</Form.Label><br></br>
          <label>
            <input
              type="radio"
              onChange={() => setGender("o")}
            />
          </label>
          <Form.Label>&nbsp; Other</Form.Label>
        </Form.Group>
        <pre> </pre>
        <Form.Group controlId="formBasicDateOfBirth">
          <Form.Label>Date of Birth</Form.Label><br></br>
          <DatePicker
            value={dateOfBirth}
            onChange={setDateOfBirth}
            name="dateOfBirth"
            dateFormat="MM/dd/yyyy"
          />
        </Form.Group>

        {/* <Form.Group controlId="formBasicImageAvatar">
          <Form.Label>ImageAvatar</Form.Label>
          <img src={imageAvatar} alt="imageAvatar" />
        </Form.Group>
 */}

        <Form.Group className='mt-5'>
          <Button variant='primary' type='submit' onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to='/login'>Click here to log in</Link>
      </Form>
    </Container>
  );
}
