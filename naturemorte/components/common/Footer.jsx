export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4">Saat Saath Arts Foundation</h3>
              <p className="text-gray-400 text-sm">
                Founded in 2010, dedicated to fostering international exchange
                through visual arts and educational programs.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Headquarters</h3>
              <p className="text-gray-400 text-sm">New Delhi, India</p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Initiatives</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>The Sculpture Park</li>
                <li>Curatorial Research Grant</li>
                <li>Museum Collaborations</li>
                <li>Artist Support Programs</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 Saat Saath Arts Foundation. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Director: Aparajita Jain
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
