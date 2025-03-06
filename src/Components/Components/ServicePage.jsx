import { useNavigate } from "react-router-dom";
import Navbar from "./Nav";
import Footer from "./Footer";
import ServiceHero from "./ServiceHero"

const services = [
  { id: 1, title: "Root Canal Treatment", image: "/dental6.png", description: "A root canal is a treatment to remove infection from a tooth and save it from further damage." },
  { id: 2, title: "Dental Scaling", image: "/dental23.png", description: "Dental scaling is a cleaning procedure that removes plaque and tartar to keep your teeth and gums healthy." },
  { id: 3, title: "All Types Of Dentures", image: "/dental7.png", description: "Dentures are custom-made replacements for missing teeth, designed to restore your smile and improve chewing and speech." },
  { id: 4, title: "Dental Implants", image: "/dental8.png", description: "Dental implants are permanent, natural-looking replacements for missing teeth that restore function and confidence." },
  { id: 5, title: "Invisible Aligner", image: "/dental12.png", description: "Invisible aligners are clear, removable trays that straighten teeth discreetly and comfortably." },
  { id: 6, title: "Ortho Dontic Treatment", image: "/dental3.png", description: "Orthodontic treatment straightens teeth and corrects bite issues for a healthier, more confident smile." },
  { id: 7, title: "Dental Impaction", image: "/dental4.png", description: "Dental impaction occurs when a tooth fails to fully emerge, often requiring treatment to prevent pain and complications." },
  { id: 8, title: "Dental Extraction", image: "/dental5.png", description: "Dental extraction is the removal of a tooth to relieve pain, prevent infection, or make space for orthodontic treatment." },
  { id: 9, title: "Dental Veneers", image: "/dental21.png", description: "Dental veneers are thin, custom-made shells that enhance the appearance of your teeth by improving their shape, color, and alignment." },
  { id: 10, title: "Dental Filling", image: "/dental20.png", description: "Dental fillings restore damaged or decayed teeth, helping to protect and strengthen them for long-term health." },
  { id: 11, title: "Periodontal Surgery", image: "/dental15.png", description: "Periodontal surgery treats gum disease by restoring gum health and protecting teeth from further damage." },
  { id: 12, title: "Pediatric Clinic", image: "/dental19.png", description: "A pediatric dental clinic provides specialized care for children, ensuring healthy smiles with gentle and friendly treatments." },
  { id: 13, title: "Dental Bleaching", image: "/dental16.png", description: "Dental bleaching is a whitening treatment that removes stains and brightens your smile." },
  { id: 14, title: "Desensitization Therapy", image: "/dental17.png", description: "Desensitization therapy reduces tooth sensitivity by strengthening enamel and protecting nerves." },
  { id: 15, title: "Crown And Bridge", image: "/dental18.png", description: "Crowns and bridges restore damaged or missing teeth, improving both function and appearance." },
  { id: 16, title: "Laser Treatment", image: "/dental1.png", description: "Laser dental treatment is a modern, painless procedure used for gum therapy, whitening, and precise dental care." },
  { id: 17, title: "Myo Functional And Habit Breaking Treatment", image: "/dental9.png", description: "These treatments help correct oral habits and improve jaw function for better dental health." },
  { id: 18, title: "Dental Composite", image: "/dental11.png", description: "Dental composite is a tooth-colored filling material used to repair cavities and improve tooth appearance." },
];

const ServiceDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
        <ServiceHero/>
      <section className="py-12 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-800 mb-8">Our Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 transition transform hover:scale-105"
            >
              {/* Service Image with Logo */}
              <div className="relative h-40">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                {/* Logo in Top-Right */}
                <img
                  src="/759e25bf956a279e86c9ce07b8205ceb (1).png"
                  alt="Logo"
                  className="absolute top-2 right-2 w-10 h-10 bg-white p-1 rounded-full shadow-md"
                />
              </div>

              {/* Service Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
