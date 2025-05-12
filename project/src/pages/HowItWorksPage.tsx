import React from 'react';
import { ArrowRight, Camera, Clock, Download, Laptop, Paintbrush, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: <Camera className="h-8 w-8 text-indigo-600" />,
    title: "Take a photo of your room",
    description: "Use your smartphone or camera to capture your room. Make sure to get a good angle that shows the space clearly with good lighting."
  },
  {
    icon: <Laptop className="h-8 w-8 text-indigo-600" />,
    title: "Upload to RoomGPT",
    description: "Upload your photo to our platform. Your image is processed securely and prepared for AI transformation."
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-indigo-600" />,
    title: "Choose your style",
    description: "Select from dozens of interior design styles - from Modern to Bohemian, Scandinavian to Industrial."
  },
  {
    icon: <Wand2 className="h-8 w-8 text-indigo-600" />,
    title: "AI generates your designs",
    description: "Our advanced AI models analyze your space and generate photorealistic redesigns based on your selected style."
  },
  {
    icon: <Clock className="h-8 w-8 text-indigo-600" />,
    title: "Get results in seconds",
    description: "The transformation happens in seconds, not days or weeks like traditional interior design services."
  },
  {
    icon: <Download className="h-8 w-8 text-indigo-600" />,
    title: "Download and share",
    description: "Download high-resolution images of your redesigned space to share with friends or use as reference for your actual renovation."
  }
];

const faqs = [
  {
    question: "How accurate are the room redesigns?",
    answer: "RoomGPT creates photorealistic visualizations that maintain the original dimensions and structure of your room while applying new design elements, colors, and furniture. While these are AI-generated concepts, they provide remarkably accurate previews of how different design styles would look in your actual space."
  },
  {
    question: "Can I use RoomGPT for commercial projects?",
    answer: "Yes! Interior designers, real estate agents, and property developers use RoomGPT to quickly visualize potential redesigns for client presentations, property listings, and marketing materials. Our commercial licenses allow unlimited use for professional purposes."
  },
  {
    question: "What types of rooms can I redesign?",
    answer: "RoomGPT works for all indoor spaces including living rooms, bedrooms, kitchens, bathrooms, home offices, dining rooms, entryways, and more. The AI has been trained on thousands of interior spaces and can recognize and redesign virtually any room type."
  },
  {
    question: "Do I need design experience to use RoomGPT?",
    answer: "Not at all! RoomGPT is designed for everyone from design novices to professionals. Simply upload a photo and choose your preferred style - the AI handles all the complex design decisions automatically."
  },
  {
    question: "Can I specify certain furniture or colors I want?",
    answer: "Yes, with our premium plans, you can specify furniture types, color palettes, and even request specific items to be included in your redesign. You can provide these details in the custom instructions when generating your design."
  }
];

const HowItWorksPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">How RoomGPT Works</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Transform your space in seconds with our AI-powered room redesign technology.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {steps.map((step, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              <span className="text-indigo-600 font-bold mr-2">{index + 1}.</span> {step.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Feature highlight */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/30 rounded-2xl p-8 lg:p-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">The Technology Behind RoomGPT</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              RoomGPT combines computer vision, generative AI, and advanced machine learning models to transform photos of rooms into beautifully redesigned spaces.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Computer Vision</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Analyzes room layout, dimensions, and existing features</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Generative AI</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Creates new design elements that match your chosen style</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Style Transfer</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Applies design principles from your chosen style to your space</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Trained on Millions of Rooms</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Our AI has been trained on millions of interior design images, learning the principles and patterns of various design styles.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1580427400000 + i * 10000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80`} 
                    alt="Room sample" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">10M+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Rooms processed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">99%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Satisfaction rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">3 sec</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Average processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto divide-y divide-slate-200 dark:divide-slate-700">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">{faq.question}</h3>
              <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-indigo-600 rounded-2xl p-8 lg:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
        <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
          Join thousands of homeowners who have reimagined their spaces with RoomGPT.
        </p>
        <Link 
          to="/design" 
          className="inline-flex items-center px-8 py-3 rounded-full bg-white hover:bg-indigo-50 text-indigo-600 font-medium transition-all shadow-lg hover:shadow-xl gap-2"
        >
          Try It Now <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default HowItWorksPage;