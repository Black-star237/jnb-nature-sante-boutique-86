
const About = () => {
  return (
    <section id="apropos" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-100 to-orange-100 rounded-full -translate-x-32 -translate-y-32 animate-float" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-100 to-green-100 rounded-full translate-x-40 translate-y-40 animate-float animation-delay-1000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-5xl font-bold text-green-800 mb-8 animate-slide-in-left">
              Ma Vision
            </h2>
            <p className="text-lg text-gray-700 mb-6 animate-fade-in animation-delay-300">
              Ma vision est de vous permettre d'avoir une santé de fer en usant des bienfaits des plantes et de la nature. 
              Nous devrions tous être capables de nous soigner avec les éléments de la nature.
            </p>
            <p className="text-lg text-gray-700 mb-8 animate-fade-in animation-delay-600">
              Après l'obtention de mon doctorat en physiopathologie et phytopharmacologie, j'ai opté pour l'usage 
              des substances naturelles pour pallier aux problèmes de santé. C'est pourquoi je me suis spécialisé 
              en "Naturotherapie".
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-orange-50 p-8 rounded-2xl border-l-6 border-green-600 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-900">
              <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center">
                <span className="text-3xl mr-3 animate-bounce">🌿</span>
                Mes Qualifications
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center animate-slide-in-right animation-delay-1200">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  Docteur en Physiopathologie et Phytopharmacologie
                </li>
                <li className="flex items-center animate-slide-in-right animation-delay-1500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse animation-delay-300"></span>
                  Spécialiste en Naturotherapie
                </li>
                <li className="flex items-center animate-slide-in-right animation-delay-1800">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse animation-delay-600"></span>
                  Formation chez des naturopathes de renoms locaux et internationaux
                </li>
                <li className="flex items-center animate-slide-in-right animation-delay-2100">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse animation-delay-900"></span>
                  Années d'expérience en traitement naturel
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-fade-in-right">
            {/* Image de bannière avec overlay */}
            <div className="relative mb-8 group">
              <div 
                className="h-80 bg-cover bg-center rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-orange-600/30 rounded-3xl" />
            </div>

            <div className="bg-gradient-to-br from-green-100 to-orange-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <h3 className="text-3xl font-bold text-green-800 mb-8 text-center animate-bounce-subtle">Au Programme</h3>
              <ul className="space-y-4">
                {[
                  "La naturopathie",
                  "La santé alimentaire", 
                  "Le pouvoir des plantes",
                  "Les clés d'une bonne santé",
                  "Les différents traitements à suivre",
                  "Consultations/suivi personnalisé"
                ].map((item, index) => (
                  <li key={index} className={`flex items-start space-x-4 animate-slide-in-right animation-delay-${(index + 1) * 300}`}>
                    <span className="text-orange-600 font-bold text-xl animate-pulse">•</span>
                    <span className="text-gray-700 font-medium hover:text-green-700 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
