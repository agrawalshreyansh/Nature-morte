export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-6xl mb-8">About the Foundation</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p class="text-lg mb-6">
                  The Saat Saath Arts Foundation, a non-profit initiative
                  founded by Director <strong>Aparajita Jain</strong> in 2010,
                  is dedicated to fostering international exchange between India
                  and the global community through the visual arts and
                  educational programs.
                </p>
                <p class="text-lg mb-6">
                  Headquartered in New Delhi, the foundation collaborates with
                  museums and galleries worldwide to promote contemporary art
                  and support Indian artists on international platforms.
                </p>
              </div>
              <div class="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NjA4MTk5NzF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                  alt="Art Gallery Exhibition"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <div class="text-center p-6">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-building2 lucide-building-2"
                  aria-hidden="true"
                >
                  <path d="M10 12h4"></path>
                  <path d="M10 8h4"></path>
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                </svg>
              </div>
              <h3 class="text-xl mb-3">Museum Collaborations</h3>
              <p class="text-gray-600">
                Partnering with leading institutions worldwide to showcase
                contemporary Indian art
              </p>
            </div>
            <div class="text-center p-6">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-users"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 class="text-xl mb-3">Artist Support</h3>
              <p class="text-gray-600">
                Providing crucial support for exhibitions featuring Indian
                artists globally
              </p>
            </div>
            <div class="text-center p-6">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-globe"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h3 class="text-xl mb-3">International Exchange</h3>
              <p class="text-gray-600">
                Bridging cultures through visual arts and educational programs
              </p>
            </div>
          </div>
          <div class="bg-gray-50 p-8 lg:p-12 rounded-lg">
            <h3 class="text-3xl mb-6">Landmark Projects</h3>
            <div class="space-y-6">
              <div>
                <h4 class="text-xl mb-2">Jitish Kallat's "Covering Letter"</h4>
                <p class="text-gray-700">CSMVS, Mumbai</p>
              </div>
              <div>
                <h4 class="text-xl mb-2">Bharti Kher's "Matter"</h4>
                <p class="text-gray-700">Vancouver Art Gallery</p>
              </div>
              <div>
                <h4 class="text-xl mb-2">The Sculpture Park</h4>
                <p class="text-gray-700">
                  A pioneering collaboration with the Government of Rajasthan
                  that brings contemporary sculpture to India's magnificent
                  heritage sites
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
