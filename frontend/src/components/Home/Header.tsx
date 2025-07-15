// Header Component
const Header = ({ onLinkClick }) => (
  <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <a href="/" onClick={(e) => onLinkClick(e, '/')} className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br rounded-lg flex items-center justify-center">
            <img src="logo.png" alt="" />
          </div>
          <span className="text-xl font-bold text-gray-900">ArtisanAxis</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {['collections', 'artifacts', 'textiles', 'crafts', 'about'].map((item) => (
            <a
              key={item}
              href={`/${item}`}
              onClick={(e) => onLinkClick(e, `/${item}`)}
              className="text-gray-700 hover:text-amber-600 font-medium capitalize"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </header>
);

export default Header;