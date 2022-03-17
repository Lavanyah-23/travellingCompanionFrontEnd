import { useState } from "react"

// import { Image } from "../styled/Image.styled"
// import { Button } from "../styled/Button.style"

export default function Cloudinary(props) {

  const [image, setImage] = useState()

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()

    data.append("file", files[0])
    //first parameter is always upload_preset, second is the name of the preset
    data.append('upload_preset', "b8fucsf0")

    //post request to Cloudinary, remember to change to your own link
    const res = await fetch("https://api.cloudinary.com/v1_1/dv9pzmckd/image/upload", {
      method: "POST",
      body: data
    })

    const file = await res.json()
    console.log("file", file) //check if you are getting the url back
    setImage(file.url) //put the url in local state, next step you can send it to the backend
    props.onChange(file.url)
  }

  return (
    <div>
      <input type="file" onChange={uploadImage} />
    </div>
  );
}