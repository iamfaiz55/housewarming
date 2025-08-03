"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import WelcomeSection from '@/components/WelcomeSection';
import {  Phone, Clock, Calendar, HomeIcon } from 'lucide-react';
import { invitationData, eventConfig } from './data/invitationData';
import LanguageToggle from '@/components/LanguageToggle';
import CountdownTimer from '@/components/CountdownTimer';
import GoogleMap from '@/components/GoogleMap';
type Language = 'en' | 'hi'; 



export default function Home() {
 const [language, setLanguage] = useState<Language>('en');
  const data = invitationData[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <LanguageToggle language={language} onToggle={toggleLanguage} />
      
      {/* Hero Section */}
      {/* <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-12 px-4 text-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${eventConfig.images.pattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-sm font-medium text-yellow-600 mb-2 tracking-wide">
              {data.welcome.greeting}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              {data.welcome.title}
            </h1>
            <p className="text-xl md:text-2xl text-yellow-600 font-medium mb-2">
              {data.welcome.subtitle}
            </p>
            <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-6">
              {data.welcome.family}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <img
              src={eventConfig.images.house}
              alt="Beautiful house"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            {data.welcome.message}
          </motion.p>
        </div>
      </motion.section> */}

      <WelcomeSection data={data.welcome} image={eventConfig.images.house}/>

      {/* Event Details */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            {data.eventDetails.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <Calendar className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {data.eventDetails.date}
              </h3>
              <p className="text-gray-600">{data.eventDetails.dateArabic}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <Clock className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {data.eventDetails.time}
              </h3>
              <p className="text-gray-600">Duration: 7 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center md:col-span-2 lg:col-span-1"
            >
              <HomeIcon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {data.eventDetails.location}
              </h3>
              <p className="text-gray-600">{data.eventDetails.address}</p>
            </motion.div>
          </div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              {data.countdown.title}
            </h3>
            <CountdownTimer
              targetDate={eventConfig.date}
              labels={data.countdown}
            />
          </motion.div>

          {/* Google Maps */}
          <GoogleMap
            coordinates={eventConfig.location.coordinates}
            mapUrl={eventConfig.location.mapUrl}
            buttonText={data.buttons.viewLocation}
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 bg-gradient-to-r from-teal-50 to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8"
          >
            {data.contact.title}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-700 mb-8"
          >
            {data.contact.label}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {eventConfig.contacts.map((phone, index) => (
              <motion.a
                key={phone}
                href={`tel:${phone}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                {phone}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xl text-white mb-4">
            {data.footer.message}
          </p>
          <p className="text-yellow-300 font-medium">
            {data.footer.blessing}
          </p>
        </motion.div>
      </footer>
    </div>
  );
}