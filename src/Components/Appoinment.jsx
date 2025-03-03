import React from "react";

export default function AppointmentForm() {
  return (
    <section className="bg-white py-12 px-6">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Make An Appointment</h2>
        <p className="text-2xl font-bold text-teal-600">Make An Appointment To Visit Doctor</p>
      </div>

      {/* Form and Image Container */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Appointment Form */}
        <form className="flex flex-col w-full md:w-1/2 space-y-4">
          <div className="flex gap-2">
            <input type="date" className="w-1/2 p-3 border rounded-md focus:ring-2 focus:ring-teal-400 outline-none" />
            <select className="w-1/2 p-3 border rounded-md focus:ring-2 focus:ring-teal-400 outline-none">
              <option>Select Time</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>02:00 PM</option>
              <option>04:00 PM</option>
            </select>
          </div>
          <input type="text" placeholder="Your Full Name" className="p-3 border rounded-md focus:ring-2 focus:ring-teal-400 outline-none" />
          <input type="email" placeholder="Email Address" className="p-3 border rounded-md focus:ring-2 focus:ring-teal-400 outline-none" />
          <input type="tel" placeholder="Phone Number" className="p-3 border rounded-md focus:ring-2 focus:ring-teal-400 outline-none" />
          <button className="bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition font-semibold">
            Make Appointment
          </button>
        </form>

        {/* Doctor Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/doctor-appointment.jpg" alt="Doctor Consultation" className="rounded-lg shadow-lg w-96 h-60 object-cover" />
        </div>
      </div>
    </section>
  );
}
