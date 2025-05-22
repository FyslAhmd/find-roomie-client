import React from "react";

const SuccessStory = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Real Stories,
            <br className="hidden md:block" />
            Real Roommates
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          Hear from people who successfully found their perfect roommates using
          our platform. Their experiences speak louder than words.
        </p>
      </div>

      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        {[
          {
            name: "Sadia Ahmed",
            img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            review:
              "I was struggling to find a compatible roommate near my university. This platform made it easy and safe. Now I live with someone who shares my lifestyle!",
          },
          {
            name: "Tanvir Hasan",
            img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            review:
              "Found a roommate within 3 days! The filters helped me narrow down exactly what I was looking for. Highly recommended!",
          },
          {
            name: "Rahim Uddin",
            img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            review:
              "I moved to Dhaka recently and had no idea where to start. This site connected me with a great flat and an even better roommate.",
          },
          {
            name: "Mitu Rahman",
            img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            review:
              "I used to be nervous about sharing an apartment. But thanks to this platform, I found someone trustworthy and friendly!",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              className="hidden md:block object-cover w-full h-56 md:h-64 xl:h-80"
              src={item.img}
              alt={item.name}
            />

            <div className="hidden md:block absolute inset-0 px-6 py-4 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-200">
              <p className="mb-4 text-lg font-bold text-gray-100">
                {item.name}
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                {item.review}
              </p>
            </div>

            <div className="block md:hidden p-4 bg-white">
              <p className="mb-2 text-lg font-bold text-gray-900">
                {item.name}
              </p>
              <p className="text-sm text-gray-700">{item.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;
