import React from "react";
export default function AppointmentForm() {
  return (
    <section className="bg-teal-50 py-12 px-6">
      {/* Title Section */}
      <div className="  text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Make An Appointment</h2>
        <p className="text-2xl font-bold text-teal-600">Make Appointment To Visit Doctor</p>
      </div>

      {/* Form and Image Container */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Appointment Form */}
        <form className="flex flex-col w-full md:w-1/2 space-y-4">
          <div className="flex gap-2">
            <input type="date" className="w-1/2 p-3 border rounded-3xl focus:ring-2 focus:ring-teal-400 outline-none" />
            <select className="w-1/2 p-3 border rounded-3xl focus:ring-2 focus:ring-teal-400 outline-none">
              <option>Select Time</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>02:00 PM</option>
              <option>04:00 PM</option>
            </select>
          </div>
          <input type="text" placeholder="Your Full Name" className="p-3 border rounded-3xl focus:ring-2 focus:ring-teal-400 outline-none" />
          <input type="email" placeholder="Email Address" className="p-3 border rounded-3xl focus:ring-2 focus:ring-teal-400 outline-none" />
          <input type="tel" placeholder="Phone Number" className="p-3 border rounded-3xl focus:ring-2 focus:ring-teal-400 outline-none" />
          <button className="bg-teal-500 text-white py-3 rounded-3xl hover:bg-teal-600 transition font-semibold">
            Make Appointment
          </button>
        </form>

        {/* Doctor Image */}
        <div className="w-full md:w-1/2 flex justify-center rounded-xl transition transform hover:scale-105">
          <img src="https://s3-alpha-sig.figma.com/img/7372/91ef/05273bb7d469c6cb49c60db7ecc01454?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ML4JAC1DmoB3ac6Lxlu7AgILUTu35KAlDCkinJ-JYTc41BcMGMBAtF-EL1GrhOOoId55dsMMWz6Cnysh0NSDkgrLkoZa1w7SDazwZ3hLCh~Zg1Ebpd4nEFL0bOFvWTZibKkEAmn65mMIIIhMess-9MubySO6vYzZpLbxcnlZ44fjuhYBKz56BpAkzeipaF4kJ0aiKck4jy-YNFjKIA4OTStGln94gnFMtLDYAYXbz27hkb-NFH4xYUk2Mci8niFkvJOvYNY~zDIRxP1ZCgmGy7MnSLzwb1MjWVBW5XlRRtHv2Fb6y0wJapnJRNs11sVm1-oIEGYEv1wSj~m0KBkcPw__" alt="Doctor Consultation" className="rounded-lg shadow-lg w-96 h-60 object-cover" />
        </div>
      </div>
    </section>
  );
}
