import React from "react";
import { Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const eventTypes = [
  {
    name: "Wedding",
    image: "/images/Hero.jpg",
    path: "/wedding-event",
  },
  {
    name: "Baby Functions",
    image: "/images/Hero.jpg",
    path: "/birthday-event",
  },
  {
    name: "College Fest",
    image: "/images/Hero.jpg",
    path: "/college-event",
  },
  {
    name: "Cardle Event",
    image: "/images/Hero.jpg",
    path: "/cardle-event",
  },
  {
    name: "House Event",
    image: "/images/Hero.jpg",
    path: "/cardle-event",
  },
  {
    name: "Corporate Event",
    image: "/images/Hero.jpg",
    path: "/cardle-event",
  },
];

const ChooseEvent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 flex flex-col items-center mt-14">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎉 Choose Your Event Type 🎉
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {eventTypes.map((event, index) => (
          <motion.div
            key={event.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            onClick={() => navigate(event.path)}
            className="cursor-pointer"
          >
            <Card className="shadow-lg rounded-xl overflow-hidden transition duration-300">
              <CardContent className="flex flex-col items-center py-6">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-24 h-24 object-cover rounded-full shadow-md border-4 border-white hover:scale-110 transition-transform"
                />
                <p className="mt-4 text-lg md:text-xl font-semibold text-gray-700">
                  {event.name}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChooseEvent;
