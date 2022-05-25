import React, { useState } from "react";
import translateServerErrors from "./../services/translateServerErrors.js";
import ErrorList from "./layout/ErrorList";
import Dropzone from "react-dropzone";
import { Redirect } from "react-router-dom";

const AddHikeForm = (props) => {
  const currentUser = props.user;
  const [newHike, setNewHike] = useState({
    name: "",
    location: "",
    difficulty: "",
    routeType: "",
    description: "",
    length: "",
    elevationChange: "",
    completed: false,
    wishList: false,
    image: {},
  });
  const [errors, setErrors] = useState({});
  const [uploadedImage, setUploadedImage] = useState({
    preview: "",
  });
  const [redirect, setRedirect] = useState(false);

  const postHike = async () => {
    let preFetchErrors = {};
    if (!newHike.name) {
      preFetchErrors.Name = `Please provide a name for this hike`;
    }
    if (!newHike.location) {
      preFetchErrors.Location = `Please provide a location for this hike`;
    }
    if (!newHike.difficulty) {
      preFetchErrors.Difficulty = `Please rate the difficulty of this hike`;
    }
    if (!newHike.routeType) {
      preFetchErrors.RouteType = `Please select a route type for this hike`;
    }

    if (Object.keys(preFetchErrors).length) return setErrors(preFetchErrors);
    else setErrors({});
    try {
      const body = new FormData();
      body.append("name", newHike.name);
      body.append("location", newHike.location);
      body.append("difficulty", newHike.difficulty);
      body.append("routeType", newHike.routeType);
      body.append("description", newHike.description);
      body.append("length", newHike.length);
      body.append("elevationChange", newHike.elevationChange);
      body.append("completed", newHike.completed);
      body.append("wishList", newHike.wishList);
      body.append("image", newHike.image);
      const response = await fetch(`/api/v1/hikes`, {
        method: "POST",
        headers: { Accept: "image/jpeg" },
        body: body,
      });
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          const newErrors = translateServerErrors(body.errors.data);
          return setErrors(newErrors);
        }
        throw new Error(`${response.status} )${response.statusText}`);
      } else {
        const body = await response.json();
        if (body.hike) {
          setRedirect(true);
          clearForm();
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  if (redirect) {
    return <Redirect push to="/hikes" />;
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    setNewHike({ ...newHike, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postHike();
  };

  const handleImageUpload = (acceptedImage) => {
    setNewHike({
      ...newHike,
      image: acceptedImage[0],
    });

    setUploadedImage({
      preview: URL.createObjectURL(acceptedImage[0]),
    });
  };

  const handleCompletedChange = (event) => {
    event.preventDefault();
    if (newHike.completed.includes(currentUser.id)) {
      const index = newHike.completed.indexOf(currentUser.id);
      newHike.completed.splice(index, 1);
      setNewHike({ ...newHike });
    } else {
      newHike.completed.push(currentUser.id);
      setNewHike({ ...newHike });
    }
  };

  const handleWishListChange = (event) => {
    event.preventDefault();
    if (newHike.wishList.includes(currentUser.id)) {
      const index = newHike.wishList.indexOf(currentUser.id);
      newHike.wishList.splice(index, 1);
      setNewHike({ ...newHike });
    } else {
      newHike.wishList.push(currentUser.id);
      setNewHike({ ...newHike });
    }
  };

  const clearForm = () => {
    setNewHike({
      name: "",
      location: "",
      difficulty: null,
      routeType: "",
      status: false,
      description: "",
      length: null,
      elevationChange: null,
    });
    setUploadedImage({
      preview: "",
    });
  };

  return (
    <div>
      <h2>Add a Hike to the Splorin' Database!</h2>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Hike name"
          onChange={handleInputChange}
          value={newHike.name}
        />
        <input
          type="text"
          name="location"
          placeholder="Hike location"
          onChange={handleInputChange}
          value={newHike.location}
        />
        <div>
          <label htmlFor="difficulty">Hike Difficulty (1-5)</label>
          <input
            type="range"
            name="difficulty"
            value={newHike.difficulty}
            min="1"
            max="5"
            onChange={handleInputChange}
            list="tickmarks"
          />
          <datalist id="tickmarks">
            <option value={newHike.difficulty} label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
            <option value="4" label="4"></option>
            <option value="5" label="5"></option>
          </datalist>
        </div>
        <select
          name="routeType"
          value={newHike.routeType}
          id={`dropdown-routeType`}
          onChange={handleInputChange}
        >
          <option value={0}>(Select Route Type)</option>
          <option value="loop">Loop</option>
          <option value="outAndBack">Out-and-Back</option>
          <option value="pointToPoint">Point-to-Point</option>
        </select>
        <input
          type="text"
          name="length"
          placeholder="Hike length (in miles)"
          onChange={handleInputChange}
          value={newHike.length}
        />
        <input
          type="text"
          name="elevationChange"
          placeholder="Total change in elevation (in feet)"
          onChange={handleInputChange}
          value={newHike.elevationChange}
        />
        <textarea
          name="description"
          placeholder="Add a description of the hike"
          onChange={handleInputChange}
          value={newHike.description}
        />
        <div>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            value={newHike.completed}
            onChange={handleCompletedChange}
          />
          <label htmlFor="status">I have already completed this hike!</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="wishList"
            id="wishList"
            value={newHike.wishList}
            onChange={handleWishListChange}
          />
          <label htmlFor="status">Add this hike to my Wish List!</label>
        </div>
        <Dropzone onDrop={handleImageUpload}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div>
                  <input
                    className="button"
                    type="add"
                    onChange={handleInputChange}
                    value="Add an image"
                  />
                </div>
                <div className="drag-n-drop">
                  <ul>(Click to add, or drag and drop)</ul>
                </div>
              </div>
            </section>
          )}
        </Dropzone>
        <img src={uploadedImage.preview} />
        <input className="button" type="submit" />
      </form>
    </div>
  );
};

export default AddHikeForm;
