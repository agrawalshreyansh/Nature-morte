export default function Park() {
  return (
    <section id="sculpture-park" class="py-20 lg:py-32 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="mb-16">
            <h2 class="text-4xl lg:text-6xl mb-6">The Sculpture Park</h2>
            <p class="text-xl text-gray-700 max-w-3xl">
              A landmark public-private partnership creating unique dialogue
              between contemporary art and historic architecture in Rajasthan's
              heritage sites.
            </p>
          </div>
          <div class="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl mb-16">
            <img
              src="https://images.unsplash.com/photo-1651569411954-b843950d0c1e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWlwdXIlMjBmb3J0JTIwcmFqYXN0aGFufGVufDF8fHx8MTc2MDg4NTMyMnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              alt="Jaipur Fort Rajasthan"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            dir="ltr"
            data-orientation="horizontal"
            data-slot="tabs"
            class="flex flex-col gap-2 mb-16"
          >
            <div
              role="tablist"
              aria-orientation="horizontal"
              data-slot="tabs-list"
              class="bg-muted text-muted-foreground h-9 items-center justify-center rounded-xl p-[3px] grid w-full grid-cols-2 md:grid-cols-4 mb-8"
              tabindex="0"
              data-orientation="horizontal"
              style={{ outline: "none" }}
            >
              <button
                type="button"
                role="tab"
                aria-selected="true"
                aria-controls="radix-:r0:-content-founding"
                data-state="active"
                id="radix-:r0:-trigger-founding"
                data-slot="tabs-trigger"
                class="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                tabindex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Founding
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:r0:-content-evolution"
                data-state="inactive"
                id="radix-:r0:-trigger-evolution"
                data-slot="tabs-trigger"
                class="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                tabindex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Evolution
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:r0:-content-impact"
                data-state="inactive"
                id="radix-:r0:-trigger-impact"
                data-slot="tabs-trigger"
                class="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                tabindex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Impact
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:r0:-content-support"
                data-state="inactive"
                id="radix-:r0:-trigger-support"
                data-slot="tabs-trigger"
                class="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                tabindex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Support
              </button>
            </div>
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r0:-trigger-founding"
              id="radix-:r0:-content-founding"
              tabindex="0"
              data-slot="tabs-content"
              class="flex-1 outline-none space-y-6"
            >
              <div class="bg-white p-8 rounded-lg shadow-md">
                <div class="flex items-start gap-4 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-calendar text-gray-600 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <div>
                    <h3 class="text-2xl mb-3">Founding</h3>
                    <p class="text-gray-700 mb-4">
                      The Sculpture Park was founded on{" "}
                      <strong>December 10, 2017</strong>, through a landmark
                      public-private partnership between the Saat Saath Arts
                      Foundation and the Government of Rajasthan.
                    </p>
                    <p class="text-gray-700">
                      Its mission is to create a unique dialogue between
                      contemporary art and historic architecture, making art
                      accessible to a wider public and promoting India's rich
                      heritage. By placing cutting-edge sculptures within a
                      historical palace, the park aims to boost cultural tourism
                      and foster a deeper appreciation for artistic innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r0:-trigger-evolution"
              hidden=""
              id="radix-:r0:-content-evolution"
              tabindex="0"
              data-slot="tabs-content"
              class="flex-1 outline-none space-y-6"
            ></div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r0:-trigger-impact"
              hidden=""
              id="radix-:r0:-content-impact"
              tabindex="0"
              data-slot="tabs-content"
              class="flex-1 outline-none space-y-6"
            ></div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r0:-trigger-support"
              hidden=""
              id="radix-:r0:-content-support"
              tabindex="0"
              data-slot="tabs-content"
              class="flex-1 outline-none space-y-6"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
