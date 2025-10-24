"use client";
import { motion } from "framer-motion";
import { Bus, Car, MapPin, Navigation, Plane, TramFront } from "lucide-react";
import { useState } from "react";
import Autocomplete from "@/components/common/Autocomplete";

export default function Visit() {
  const locs = {
    jaigarh: {
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28444.284056937544!2d75.844792!3d26.981605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db1b1b15f49c7%3A0xbc19c49ec4a15381!2sJaigarh%20Fort!5e0!3m2!1sen!2sus!4v1761225898848!5m2!1sen!2sus",
      l1: "Jaigarh Fort (Current - 5th Edition)",
      l2: "Jaigarh Fort, Devisinghpura, Amer, Jaipur, Rajasthan 302001, India",
      lat: 26.9855,
      lng: 75.8513,
    },
    nahargarh: {
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28455.555971573973!2d75.815673!3d26.936974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db1ed28417585%3A0xead86f71e11095d4!2sMadhavendra%20Palace!5e0!3m2!1sen!2sus!4v1761225770649!5m2!1sen!2sus",
      l1: "Nahargarh Fort (Editions 1–4)",
      l2: "Madhavendra Palace, Nahargarh Fort, Jaipur, Rajasthan 302002, India",
      lat: 26.9377,
      lng: 75.8154,
    },
  };

  const [active, setActive] = useState("jaigarh");
  const [userLocation, setUserLocation] = useState("");
  const [userCoords, setUserCoords] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  async function lookup(lat, lng) {
    const latlng = `${lat},${lng}`;
    const res = await fetch(
      `/api/reverse?latlng=${encodeURIComponent(latlng)}`,
      {
        headers: { "X-Request-Id": "your-client-id-123" }, // optional
      }
    );
    if (!res.ok) throw new Error("lookup failed");
    return res.json();
  }
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserCoords({ lat: latitude, lng: longitude });
          const location = await lookup(latitude, longitude);
          setUserLocation(`${location.results[0].formatted_address}`);
        },
        () =>
          alert("Unable to get your location. Please enable location services.")
      );
    }
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    // You can also get place details here if needed
  };

  const openGoogleMapsRoute = (mode) => {
    if (!userCoords && !userLocation.trim()) {
      return;
    }

    if (!userCoords) {
      // If user typed something but no coords, try to use the text as origin
      const origin = encodeURIComponent(userLocation);
      const dest = `${locs[active].lat}%2C${locs[active].lng}`;
      window.open(
        `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=${mode}`,
        "_blank"
      );
      return;
    }

    const origin = `${userCoords.lat}%2C${userCoords.lng}`;
    const dest = `${locs[active].lat}%2C${locs[active].lng}`;
    window.open(
      `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=${mode}`,
      "_blank"
    );
  };

  const openGoogleTravel = (type) => {
    const urls = {
      flights: "https://www.google.com/travel/flights?q=flights%20to%20jaipur",
      trains: "https://www.irctc.co.in/nget/train-search",
      buses: "https://www.google.com/travel/buses?q=buses%20to%20jaipur",
    };
    window.open(urls[type], "_blank");
  };

  const baseBtn =
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-gray-200";

  return (
    <section id="visit" className="py-20 lg:py-32 bg-white">
      <motion.div
        className="container mx-auto px-4 lg:px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl lg:text-6xl mb-6">
              Visit The Sculpture Park
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-semibold">
              Plan your journey to experience contemporary art in Rajasthan’s
              magnificent heritage sites
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT SIDE — MAP & LOCATION */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <label className="text-lg mb-3 block font-medium">
                  Select Location
                </label>

                <div className="flex gap-2 flex-wrap">
                  {["jaigarh", "nahargarh"].map((fort) => (
                    <button
                      key={fort}
                      onClick={() => setActive(fort)}
                      className={`${baseBtn} h-10 px-5 rounded-xl ${
                        active === fort
                          ? "bg-[#050516] text-white"
                          : "bg-white text-black border border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {fort === "jaigarh" ? "Jaigarh Fort" : "Nahargarh Fort"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <iframe
                  src={locs[active].src}
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sculpture Park Location"
                  style={{ border: 0 }}
                ></iframe>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <MapPin size={20} />
                  <div>
                    <p className="mb-1">{locs[active].l1}</p>
                    <p className="text-sm text-gray-600">{locs[active].l2}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — ROUTE OPTIONS */}
            <div className="order-1 lg:order-2">
              <div className="bg-card flex flex-col gap-6 rounded-xl border border-gray-200 p-6 lg:p-8">
                <h3 className="text-2xl mb-6">Get Directions</h3>

                {/* USER LOCATION INPUT */}
                <div>
                  <label
                    htmlFor="location"
                    className="text-sm mb-2 block font-semibold"
                  >
                    Your Location
                  </label>
                  <div className="flex gap-2">
                    <Autocomplete
                      value={userLocation}
                      onChange={setUserLocation}
                      onSelect={handlePlaceSelect}
                      placeholder="Enter city, address or coordinates"
                      className="flex-1"
                      userCoords={userCoords}
                    />
                    <button
                      onClick={handleGetLocation}
                      className={`${baseBtn} border border-gray-300 bg-white hover:bg-gray-100 size-9`}
                      title="Use current location"
                    >
                      <Navigation size={20} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 font-semibold">
                    Enter your location or click the navigation icon to detect
                    automatically
                  </p>
                </div>

                {/* LOCAL TRANSPORT */}
                <div>
                  <h4 className="mb-3 font-semibold">Local Transportation</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => openGoogleMapsRoute("driving")}
                      className={`${baseBtn} border border-gray-300 bg-white hover:bg-gray-100 flex flex-col items-center py-4 gap-2`}
                    >
                      <Car size={24} />
                      <span>Drive</span>
                    </button>
                    <button
                      onClick={() => openGoogleMapsRoute("transit")}
                      className={`${baseBtn} border border-gray-300 bg-white hover:bg-gray-100 flex flex-col items-center py-4 gap-2`}
                    >
                      <Bus size={24} />
                      <span>Transit</span>
                    </button>
                  </div>
                </div>

                {/* LONG DISTANCE */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="mb-3 font-medium">Long Distance Travel</h4>
                  {[
                    {
                      type: "flights",
                      icon: <Plane size={24} />,
                      title: "Book Flights to Jaipur",
                      subtitle: "Jaipur International Airport (JAI)",
                    },
                    {
                      type: "trains",
                      icon: <TramFront size={24} />,
                      title: "Book Train Tickets",
                      subtitle: "To Jaipur Junction Railway Station",
                    },
                    {
                      type: "buses",
                      icon: <Bus size={24} />,
                      title: "Book Bus Tickets",
                      subtitle: "To Jaipur Bus Terminal",
                    },
                  ].map(({ type, icon, title, subtitle }) => (
                    <button
                      key={type}
                      onClick={() => openGoogleTravel(type)}
                      className={`${baseBtn} w-full justify-start border border-gray-300 bg-white hover:bg-gray-100 px-4 py-4 rounded-md flex gap-3 mt-5`}
                    >
                      {icon}
                      <div className="text-left">
                        <div>{title}</div>
                        <div className="text-sm text-gray-500">{subtitle}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 p-6"
          >
            <h4 className="text-xl mb-3 font-semibold">Opening Hours</h4>
            <p className="text-gray-600 font-semibold">
              Visit during exhibition periods. Check current exhibition dates
              for specific timings.
            </p>
          </div>
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 p-6"
          >
            <h4 className="text-xl mb-3 font-semibold">Best Time to Visit</h4>
            <p className="text-gray-600 font-semibold">
              October to March offers pleasant weather in Jaipur. Plan your
              visit during the annual exhibition period.
            </p>
          </div>
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 p-6"
          >
            <h4 className="text-xl mb-3 font-semibold">Entry Information</h4>
            <p className="text-gray-600 font-semibold">
              Free entry to exhibitions. Fort entry fees may apply for general
              heritage site access.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
