import React, { use } from "react";
import AuthContext from "../provider/AuthContext";

const FindRoommate = () => {
  const { user } = use(AuthContext);
  const { displayName, email } = user;

  const handleAddRoommate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInfo = Object.fromEntries(formData.entries());
    const roomInfo = { ...formInfo, email, displayName };

    // send to DB
    fetch("http://localhost:5000/roomInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(roomInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("data posted in DB");
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-5">
        Find Your Roommate
      </h1>
      <form
        onSubmit={handleAddRoommate}
        className="fieldset w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="label text-xl text-black">Title</label>
          <br />
          <input
            type="text"
            name="title"
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Enter Title"
          />
        </div>

        <div>
          <label className="label text-xl text-black">Location</label>
          <br />
          <input
            type="text"
            name="location"
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Enter Your Location"
          />
        </div>

        <div>
          <label className="label text-xl text-black">Rent Amount</label>
          <br />
          <input
            type="text"
            name="rentAmount"
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Enter Rent Amount"
          />
        </div>

        <div>
          <label className="label text-xl text-black">Room Type</label>
          <br />
          <input
            type="text"
            name="roomType"
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
          <label className="label text-xl text-black">
            Lifestyle Preferences
          </label>
          <br />
          <input
            type="text"
            name="lifeStyle"
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
          <label className="label text-xl text-black">Description</label>
          <br />
          <textarea
            className="h-24 w-full md:w-2/3 border rounded-lg p-2 text-lg"
            placeholder="Description"
            name="description"
          ></textarea>
        </div>

        <div>
          <label className="label text-xl text-black">Contact Info</label>
          <br />
          <input
            type="text"
            name="contact"
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Contact Info"
          />
        </div>

        <div>
          <label className="label text-xl text-black">Availability</label>
          <br />
          <div className="flex justify-around w-full md:w-2/3 gap-4 border p-2 rounded-xl">
            <div className="flex items-center gap-5">
              <input
                type="radio"
                name="available-yes"
                className="radio radio-neutral"
                id="yes"
              />
              <label className="text-lg" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                type="radio"
                name="available-no"
                className="radio radio-neutral"
                id="no"
              />
              <label className="text-lg" htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="label text-xl text-black">Email</label>
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
          <label className="label text-xl text-black">Name</label>
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
          List Room
        </button>
      </form>
    </div>
  );
};

export default FindRoommate;
