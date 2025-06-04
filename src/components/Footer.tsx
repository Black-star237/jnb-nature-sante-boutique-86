
const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/f5979f13-861a-40d8-908d-7397d6586914.png" 
                alt="Dr. JNB Nature & Santé" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-lg font-bold">Dr. JNB Nature & Santé</h3>
              </div>
            </div>
            <p className="text-green-200">
              Votre partenaire pour une santé naturelle et durable. 
              Spécialiste en naturopathie et physiopathologie.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-green-200">
              <li><a href="#accueil" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#specialites" className="hover:text-white transition-colors">Spécialités</a></li>
              <li><a href="#traitements" className="hover:text-white transition-colors">Traitements</a></li>
              <li><a href="#boutique" className="hover:text-white transition-colors">Boutique</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-green-200">
              <p>Dr. JONATHAN NOUBOUOSSIE</p>
              <p>WhatsApp: 698 67 74 91</p>
              <p>Cameroun</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
          <p>&copy; 2024 Dr. JNB Nature & Santé. Tous droits réservés.</p>
          <p className="mt-2">Naturotherapie - Traitement des maladies par les produits naturels et bio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
