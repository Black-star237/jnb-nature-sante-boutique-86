
const About = () => {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Ma Vision
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Ma vision est de vous permettre d'avoir une santé de fer en usant des bienfaits des plantes et de la nature. 
              Nous devrions tous être capables de nous soigner avec les éléments de la nature.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Après l'obtention de mon doctorat en physiopathologie et phytopharmacologie, j'ai opté pour l'usage 
              des substances naturelles pour pallier aux problèmes de santé. C'est pourquoi je me suis spécialisé 
              en "Naturotherapie".
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-green-800 mb-3">🌿 Mes Qualifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Docteur en Physiopathologie et Phytopharmacologie</li>
                <li>• Spécialiste en Naturotherapie</li>
                <li>• Formation chez des naturopathes de renoms locaux et internationaux</li>
                <li>• Années d'expérience en traitement naturel</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-orange-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Au Programme</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">La naturopathie</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">La santé alimentaire</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">Le pouvoir des plantes</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">Les clés d'une bonne santé</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">Les différents traitements à suivre</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">Consultations/suivi personnalisé</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
