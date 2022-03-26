import React, {useState} from "react";

function NewHog({onHogSubmit}) {
  const [formData, changeFormData] = useState({
    greased: true,
    'highest medal achieved': 'wood',
    image: '',
    name: '',
    specialty: '',
    weight: 0
  });

  function handleFormChange(e) {
    if (e.target.name === 'greased') {
      changeFormData({...formData, greased: !formData.greased});
    }
    else {
      changeFormData({...formData, [e.target.name]: e.target.value});
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onHogSubmit(formData);
    e.target.reset();
    changeFormData({
      greased: true,
      'highest medal achieved': 'wood',
      image: '',
      name: '',
      specialty: '',
      weight: 0
    });
  }

  return (
    <form onSubmit={handleSubmit} >
      <input onChange={handleFormChange} type="text" name="name" placeholder="Hog Name..."/>
      <label>
        {' Greased? '}
        <select onChange={handleFormChange} name="greased">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </label>
      <label>
        {' Highest Medal Achieved? '}
        <select onChange={handleFormChange} name="highest medal achieved">
          <option value="wood">Wood</option>
          <option value="bronze">Bronze</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="platiunum">Platinum</option>
          <option value="diamond">Diamond</option>
        </select>
      </label>
      <input onChange={handleFormChange} type="text" name="image" placeholder="image url..." />
      <input onChange={handleFormChange} type="text" name="specialty" placeholder="Hog Specialty..." />
      <input onChange={handleFormChange} type="number" name="weight" placeholder="Hog Weight..." />
      <button type="submit">Submit Hog</button>
    </form>
  )
}

export default NewHog;