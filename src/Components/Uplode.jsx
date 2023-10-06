import React, { useState } from 'react'
// import axios from 'axios'

function Uplode() {
  const [file, setFile] = useState('')
  const [files, setFiles] = useState([])
  const upload = () => {
    setFiles([...files, file]) 
    // const formData = new FormData()
    // formData.append('file', file)
    // axios.post('http://localhost:3001/upload',formData )
    // .then( res => {})
    // .catch(er => console.log(er))
    

  }
  return (
    <div>
    <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
    <button type="button" onClick={upload}>Upload</button> <br />
    {files.map((img)=>(

    <img src={URL.createObjectURL(img)} alt="images" width="200px" />
    ))}
  </div>
)
  
}

export default Uplode