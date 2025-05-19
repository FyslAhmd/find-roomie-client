import React from "react";

const FindRoommate = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-5">
        Find Your Roommate
      </h1>
      <form className="fieldset w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="label text-xl text-black">Title</label>
          <br />
          <input
            type="text"
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Enter Title"
          />
        </div>

        <div>
          <label className="label text-xl text-black">Location</label>
          <br />
          <input
            type="text"
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Enter Your Location"
          />
        </div>

        <div>
          <label className="label text-xl text-black">Rent Amount</label>
          <br />
          <input
            type="text"
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Enter Rent Amount"
          />
        </div>

        <div>
          <label className="label text-xl text-black">Room Type</label>
          <br />
          <input
            type="text"
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
          ></textarea>
        </div>

        <div>
          <label className="label text-xl text-black">Contact Info</label>
          <br />
          <input
            type="text"
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
                name="radio-3"
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
                name="radio-3"
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
            className="border rounded-lg p-2 text-lg w-full md:w-2/3"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="label text-xl text-black">Name</label>
          <br />
          <input
            type="text"
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
