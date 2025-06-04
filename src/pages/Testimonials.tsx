
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote, User, Calendar } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie K.",
      age: "45 ans",
      condition: "Hypertension artérielle",
      testimony: "Après 3 mois de traitement naturel avec Dr. Jonathan, ma tension s'est normalisée. Plus besoin de médicaments chimiques ! Je me sens revivre.",
      rating: 5,
      date: "Octobre 2024",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Paul N.",
      age: "38 ans", 
      condition: "Problèmes digestifs chroniques",
      testimony: "Souffrant de troubles digestifs depuis des années, le traitement à base de plantes m'a complètement guéri. Merci Dr. Jonathan !",
      rating: 5,
      date: "Septembre 2024",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Fatou B.",
      age: "32 ans",
      condition: "Infertilité",
      testimony: "Après 2 ans d'essais infructueux, le traitement naturel de Dr. Jonathan m'a aidée à concevoir. Aujourd'hui maman d'un beau bébé !",
      rating: 5,
      date: "Août 2024",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Jean-Claude M.",
      age: "52 ans",
      condition: "Diabète type 2",
      testimony: "Mon taux de sucre était incontrôlable. Grâce aux remèdes naturels, j'ai retrouvé un équilibre parfait. Recommande vivement !",
      rating: 5,
      date: "Juillet 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Aisha T.",
      age: "29 ans",
      condition: "Fibromes utérins",
      testimony: "Les fibromes qui me causaient tant de douleurs ont complètement disparu après le traitement. Je recommande à toutes les femmes !",
      rating: 5,
      date: "Juin 2024",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "Samuel K.",
      age: "41 ans",
      condition: "Hémorroïdes chroniques",
      testimony: "Problème embarrassant résolu naturellement ! Plus de douleurs, plus de gêne. Dr. Jonathan est un vrai professionnel.",
      rating: 5,
      date: "Mai 2024",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} animate-pulse`}
        style={{animationDelay: `${i * 100}ms`}}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 to-orange-900/85" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                animationDelay: `${Math.random() * 25}s`,
                animationDuration: `${Math.random() * 20 + 10}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-slide-in-down">
              Témoignages Patients
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto animate-fade-in animation-delay-600">
              Découvrez les expériences de mes patients qui ont retrouvé la santé 
              grâce aux traitements naturels. Leurs histoires inspirantes témoignent 
              de l'efficacité de la naturopathie.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-bounce-subtle">500+</div>
              <div className="text-lg">Patients Guéris</div>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-bounce-subtle animation-delay-300">95%</div>
              <div className="text-lg">Taux de Satisfaction</div>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-bounce-subtle animation-delay-600">8+</div>
              <div className="text-lg">Années d'Expérience</div>
            </div>
            <div className="animate-fade-in-up animation-delay-900">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-bounce-subtle animation-delay-900">100%</div>
              <div className="text-lg">Naturel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-${index * 200} relative overflow-hidden`}
              >
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-orange-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-green-100 hover:ring-green-200 transition-all duration-300"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.age}</p>
                      <div className="flex items-center mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-green-100 to-orange-100 px-4 py-2 rounded-full inline-block mb-4">
                      <span className="text-green-700 font-medium text-sm">{testimonial.condition}</span>
                    </div>
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 text-green-200 opacity-50" size={24} />
                    <p className="text-gray-700 italic leading-relaxed pl-6">
                      "{testimonial.testimony}"
                    </p>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {testimonial.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-orange-800/90" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-bounce-subtle">
              Votre Tour Maintenant
            </h2>
            <p className="text-xl text-green-100 mb-10 leading-relaxed">
              Rejoignez nos nombreux patients satisfaits ! Commencez votre parcours 
              vers une santé naturelle et durable.
            </p>
            <a 
              href="https://wa.me/+237698677491" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-12 py-5 rounded-full text-xl font-semibold hover:from-green-600 hover:to-orange-600 transition-all duration-300 inline-block transform hover:scale-110 shadow-2xl animate-pulse"
            >
              Commencer mon traitement
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
