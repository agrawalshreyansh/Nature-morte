export default function Visit() {
  return (
    <section id="navigation" class="py-20 lg:py-32 bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="mb-12 text-center">
            <h2 class="text-4xl lg:text-6xl mb-6">Visit The Sculpture Park</h2>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
              Plan your journey to experience contemporary art in Rajasthan's
              magnificent heritage sites
            </p>
          </div>
          <div class="grid lg:grid-cols-2 gap-12">
            <div class="order-2 lg:order-1">
              <div class="mb-6">
                <label
                  data-slot="label"
                  class="items-center gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-lg mb-3 block"
                >
                  Select Location
                </label>
                <div class="flex gap-2 flex-wrap">
                  <button
                    data-slot="button"
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3"
                  >
                    Jaigarh Fort
                  </button>
                  <button
                    data-slot="button"
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3"
                  >
                    Nahargarh Fort
                  </button>
                </div>
              </div>
              <div class="rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&amp;q=Jaigarh%20Fort%2C%20Devisinghpura%2C%20Amer%2C%20Jaipur%2C%20Rajasthan%20302001%2C%20India&amp;zoom=14"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Sculpture Park Location"
                  style={{ border: "0px" }}
                ></iframe>
              </div>
              <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                <div class="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-map-pin text-gray-600 shrink-0 mt-1"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <p class="mb-1">Jaigarh Fort (Current - 5th Edition)</p>
                    <p class="text-sm text-gray-600">
                      Jaigarh Fort, Devisinghpura, Amer, Jaipur, Rajasthan
                      302001, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <div
                data-slot="card"
                class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 lg:p-8"
              >
                <h3 class="text-2xl mb-6">Get Directions</h3>
                <div class="mb-6">
                  <label
                    data-slot="label"
                    class="items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-2 block"
                    for="location"
                  >
                    Your Location
                  </label>
                  <div class="flex gap-2">
                    <input
                      data-slot="input"
                      class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex-1"
                      id="location"
                      placeholder="Enter city, address or coordinates"
                      value=""
                    />
                    <button
                      data-slot="button"
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 rounded-md"
                      title="Use current location"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-navigation"
                        aria-hidden="true"
                      >
                        <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                      </svg>
                    </button>
                  </div>
                  <p class="text-sm text-gray-500 mt-2">
                    Enter your location or click the navigation icon to detect
                    automatically
                  </p>
                </div>
                <div class="space-y-4">
                  <div>
                    <h4 class="mb-3">Local Transportation</h4>
                    <div class="grid grid-cols-2 gap-3">
                      <button
                        data-slot="button"
                        class="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-4 has-[&gt;svg]:px-3 h-auto py-4 flex flex-col items-center gap-2"
                      >
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
                          class="lucide lucide-car"
                          aria-hidden="true"
                        >
                          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                          <circle cx="7" cy="17" r="2"></circle>
                          <path d="M9 17h6"></path>
                          <circle cx="17" cy="17" r="2"></circle>
                        </svg>
                        <span>Drive</span>
                      </button>
                      <button
                        data-slot="button"
                        class="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-4 has-[&gt;svg]:px-3 h-auto py-4 flex flex-col items-center gap-2"
                      >
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
                          class="lucide lucide-bus"
                          aria-hidden="true"
                        >
                          <path d="M8 6v6"></path>
                          <path d="M15 6v6"></path>
                          <path d="M2 12h19.6"></path>
                          <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path>
                          <circle cx="7" cy="18" r="2"></circle>
                          <path d="M9 18h5"></path>
                          <circle cx="16" cy="18" r="2"></circle>
                        </svg>
                        <span>Transit</span>
                      </button>
                    </div>
                  </div>
                  <div class="border-t pt-4">
                    <h4 class="mb-3">Long Distance Travel</h4>
                    <div class="space-y-3">
                      <button
                        data-slot="button"
                        class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-4 has-[&gt;svg]:px-3 w-full justify-start h-auto py-4"
                      >
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
                          class="lucide lucide-plane mr-3"
                          aria-hidden="true"
                        >
                          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                        </svg>
                        <div class="text-left">
                          <div>Book Flights to Jaipur</div>
                          <div class="text-sm text-gray-500">
                            Jaipur International Airport (JAI)
                          </div>
                        </div>
                      </button>
                      <button
                        data-slot="button"
                        class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-4 has-[&gt;svg]:px-3 w-full justify-start h-auto py-4"
                      >
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
                          class="lucide lucide-tram-front mr-3"
                          aria-hidden="true"
                        >
                          <rect
                            width="16"
                            height="16"
                            x="4"
                            y="3"
                            rx="2"
                          ></rect>
                          <path d="M4 11h16"></path>
                          <path d="M12 3v8"></path>
                          <path d="m8 19-2 3"></path>
                          <path d="m18 22-2-3"></path>
                          <path d="M8 15h.01"></path>
                          <path d="M16 15h.01"></path>
                        </svg>
                        <div class="text-left">
                          <div>Book Train Tickets</div>
                          <div class="text-sm text-gray-500">
                            To Jaipur Junction Railway Station
                          </div>
                        </div>
                      </button>
                      <button
                        data-slot="button"
                        class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-4 has-[&gt;svg]:px-3 w-full justify-start h-auto py-4"
                      >
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
                          class="lucide lucide-bus mr-3"
                          aria-hidden="true"
                        >
                          <path d="M8 6v6"></path>
                          <path d="M15 6v6"></path>
                          <path d="M2 12h19.6"></path>
                          <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path>
                          <circle cx="7" cy="18" r="2"></circle>
                          <path d="M9 18h5"></path>
                          <circle cx="16" cy="18" r="2"></circle>
                        </svg>
                        <div class="text-left">
                          <div>Book Bus Tickets</div>
                          <div class="text-sm text-gray-500">
                            To Jaipur Bus Terminal
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p class="text-sm text-blue-900">
                    <strong>Pro Tip:</strong> Jaipur is well-connected by air,
                    rail, and road. The Sculpture Park locations are
                    approximately 15-20 km from the city center. Local taxis and
                    app-based cabs are readily available.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 grid md:grid-cols-3 gap-6">
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6"
            >
              <h4 class="text-xl mb-3">Opening Hours</h4>
              <p class="text-gray-600">
                Visit during exhibition periods. Check current exhibition dates
                for specific timings.
              </p>
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6"
            >
              <h4 class="text-xl mb-3">Best Time to Visit</h4>
              <p class="text-gray-600">
                October to March offers pleasant weather in Jaipur. Plan your
                visit during the annual exhibition period.
              </p>
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6"
            >
              <h4 class="text-xl mb-3">Entry Information</h4>
              <p class="text-gray-600">
                Free entry to exhibitions. Fort entry fees may apply for general
                heritage site access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
