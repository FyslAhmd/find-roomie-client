import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateRoom = () => {
  const data = useLoaderData();
  const {
    _id,
    title,
    location,
    rentAmount,
    roomType,
    description,
    contact,
    available,
    lifeStyle,
    displayName,
    email,
  } = data;
  const [availability, setAvailability] = useState(available);

  const handleUpdateRoommate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInfo = Object.fromEntries(formData.entries());
    const roomInfo = {
      ...formInfo,
      email,
      displayName,
      available: availability,
    };

    // send to DB
    fetch(`https://roommate-finder-server-phi.vercel.app/roomInfo/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(roomInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Post Has Been Updated",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-base-content text-center font-bold my-5">
        Find Your Roommate
      </h1>
      <form
        onSubmit={handleUpdateRoommate}
        className="fieldset w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="text-xl">Title</label>
          <br />
          <input
            type="text"
            name="title"
            defaultValue={title}
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Enter Title"
          />
        </div>

        <div>
          <label className="text-xl">Location</label>
          <br />
          <input
            type="text"
            name="location"
            defaultValue={location}
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Enter Your Location"
          />
        </div>

        <div>
          <label className=" text-xl ">Rent Amount</label>
          <br />
          <input
            type="text"
            name="rentAmount"
            defaultValue={rentAmount}
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Enter Rent Amount"
          />
        </div>

        <div>
          <label className=" text-xl ">Room Type</label>
          <br />
          <input
            type="text"
            name="roomType"
            defaultValue={roomType}
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Room Type"
            list="roomType"
          />
          <datalist id="roomType">
            <option value="Single"></option>
            <option value="Double"></option>
            <option value="Shared"></option>
          </datalist>
        </div>

        <div>
          <label className=" text-xl ">Lifestyle Preferences</label>
          <br />
          <input
            type="text"
            name="lifeStyle"
            defaultValue={lifeStyle}
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Lifestyle Preferences"
            list="lifeStyle"
          />
          <datalist id="lifeStyle">
            <option value="Pet"></option>
            <option value="Smoking"></option>
            <option value="Night Owl"></option>
          </datalist>
        </div>

        <div>
          <label className=" text-xl">Description</label>
          <br />
          <textarea
            className="h-24 w-full md:w-2/3 border rounded-lg p-2 text-lg"
            placeholder="Description"
            name="description"
            defaultValue={description}
          ></textarea>
        </div>

        <div>
          <label className=" text-xl ">Contact Info</label>
          <br />
          <input
            type="text"
            name="contact"
            defaultValue={contact}
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Contact Info"
          />
        </div>

        <div>
          <label className=" text-xl k">Availability</label>
          <br />
          <div className="flex justify-around w-full md:w-2/3 gap-4 border p-2 rounded-xl">
            <div className="flex items-center gap-5">
              <input
                type="radio"
                name="available"
                className="radio radio-accent"
                id="yes"
                value="yes"
                checked={availability === "yes"}
                onChange={(e) => setAvailability(e.target.value)}
              />
              <label className="text-lg" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                type="radio"
                name="available"
                className="radio radio-accent"
                id="no"
                value="no"
                checked={availability === "no"}
                onChange={(e) => setAvailability(e.target.value)}
              />
              <label className="text-lg" htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className=" text-xl ">Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            disabled
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Email"
          />
        </div>

        <div>
          <label className=" text-xl ">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={displayName}
            disabled
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Name"
          />
        </div>

        <button className="btn btn-neutral md:col-span-2 w-3/6 mx-auto mt-4">
          Update Room
        </button>
      </form>
    </div>
  );
};

export default UpdateRoom;
