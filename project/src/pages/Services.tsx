import React from 'react';
import { Code, Palette, Smartphone, Globe, Search, ShoppingCart, ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies.',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'SEO Ready'],
      price: 'Starting at $2,999'
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand message effectively.',
      features: ['Logo Design', 'Brand Identity', 'Print Materials', 'Digital Graphics'],
      price: 'Starting at $499'
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Development', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
      price: 'Starting at $4,999'
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['Social Media Marketing', 'Content Strategy', 'Email Marketing', 'Analytics'],
      price: 'Starting at $1,299/month'
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
      price: 'Starting at $899/month'
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms to sell your products online.',
      features: ['Online Store Setup', 'Payment Integration', 'Inventory Management', 'Order Processing'],
      price: 'Starting at $3,999'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements.'
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team creates stunning designs and develops robust solutions using the latest technologies.'
    },
    {
      step: '03',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your project meets the highest standards of quality and performance.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We launch your project and provide ongoing support to ensure continued success.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital age. 
            From web development to digital marketing, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-red-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-6">
                  <p className="text-lg font-semibold text-red-600 mb-4">{service.price}</p>
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;