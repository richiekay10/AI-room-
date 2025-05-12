import React from 'react';
import { ArrowRight, CheckCircle2, Upload, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { before1, after1, before2, after2, before3, after3 } from '../constants/sampleImages';

const HomePage = () => {
  const features = [
    {
      title: 'Upload Your Room',
      description: 'Take a photo of your room or upload an existing one to get started.',
      icon: <Upload className="h-6 w-6 text-indigo-600" />
    },
    {
      title: 'Choose Your Style',
      description: 'Select from dozens of interior design styles to transform your space.',
      icon: <Wand2 className="h-6 w-6 text-indigo-600" />
    },
    {
      title: 'Get Your Design',
      description: 'Our AI generates realistic redesigns of your room in seconds.',
      icon: <CheckCircle2 className="h-6 w-6 text-indigo-600" />
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24 md:pt-32 md:pb-40">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              <span className="block">Transform Your Space</span>
              <span className="block text-indigo-600">With AI-Powered Magic</span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300">
              Upload a photo of your room and get stunning redesign options in seconds. 
              No expertise needed – just AI wizardry.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Link 
                to="/design" 
                className="px-8 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all 
                  shadow-lg hover:shadow-xl hover:shadow-indigo-200 dark:hover:shadow-indigo-900/30 font-medium flex items-center gap-2"
              >
                Try It Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/gallery" 
                className="px-8 py-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 
                  dark:hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl font-medium border border-slate-200 dark:border-slate-700"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative blob */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform opacity-70 dark:opacity-40">
          <div className="w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform opacity-70 dark:opacity-40">
          <div className="w-96 h-96 bg-gradient-to-tr from-indigo-400 to-sky-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="relative bg-white dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">How It Works</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              RoomGPT makes interior design accessible to everyone with a simple three-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">See the Magic</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Drag the slider to compare before and after transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <BeforeAfterSlider beforeImage={before1} afterImage={after1} />
              <div className="p-4 bg-white dark:bg-slate-800">
                <h3 className="font-medium">Living Room → Modern Minimalist</h3>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <BeforeAfterSlider beforeImage={before2} afterImage={after2} />
              <div className="p-4 bg-white dark:bg-slate-800">
                <h3 className="font-medium">Kitchen → Scandinavian</h3>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-xl max-w-2xl">
              <BeforeAfterSlider beforeImage={before3} afterImage={after3} />
              <div className="p-4 bg-white dark:bg-slate-800">
                <h3 className="font-medium">Bedroom → Luxury</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-indigo-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&w=1000&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg text-indigo-100 max-w-3xl mx-auto mb-10">
            Join thousands of happy homeowners who have redesigned their spaces with RoomGPT.
          </p>
          <Link 
            to="/design" 
            className="px-8 py-3 rounded-full text-indigo-600 bg-white hover:bg-indigo-50 transition-all 
              shadow-lg hover:shadow-xl font-medium flex items-center gap-2 mx-auto w-fit"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;