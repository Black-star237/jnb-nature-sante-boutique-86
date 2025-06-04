
import { CheckCircle } from 'lucide-react';

const Treatments = () => {
  const treatments = [
    "Faiblesse sexuelle",
    "Éjaculation précoce", 
    "Infertilité masculine et féminine",
    "Fibromes et myomes",
    "Hernie discale",
    "Cancer en tous genres",
    "Polype",
    "Diabète",
    "Hypertension artérielle",
    "Obésité",
    "Goutte",
    "Hernie",
    "Hémorroïdes externes et internes",
    "Trompes bouchées",
    "Hépatite A, B, C",
    "Typhoïde",
    "Rhumatisme (Arthrite, Arthrose et ostéoporose)"
  ];

  return (
    <section id="traitements" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Traitements Naturels Disponibles
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Vous souffrez d'une maladie depuis des années ? Ici vous pouvez avoir un traitement curatif 
            avec des produits naturels issus des plantes et des écorces d'arbres.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-800 font-medium">{treatment}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Consultation Personnalisée
            </h3>
            <p className="text-gray-700 mb-6">
              Chaque traitement est adapté à votre condition spécifique. 
              Contactez-moi pour une consultation personnalisée via WhatsApp.
            </p>
            <a 
              href="https://wa.me/+237698677491" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Consulter maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
