import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages website',
        'Mobile responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        'Social media integration',
        '1 month free support',
        'SSL certificate included'
      ],
      popular: false,
      buttonText: 'Get Started',
      buttonClass: 'bg-gray-900 text-white hover:bg-gray-800'
    },
    {
      name: 'Professional',
      price: 199,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages website',
        'Custom design & development',
        'Advanced SEO optimization',
        'E-commerce functionality',
        'Blog/CMS integration',
        'Analytics & reporting',
        '3 months free support',
        'Performance optimization',
        'Email marketing setup'
      ],
      popular: true,
      buttonText: 'Most Popular',
      buttonClass: 'bg-red-600 text-white hover:bg-red-700'
    },
    {
      name: 'Enterprise',
      price: 399,
      period: 'month',
      description: 'For large businesses and organizations',
      features: [
        'Unlimited pages',
        'Custom web application',
        'Advanced integrations',
        'Multi-language support',
        'Advanced security features',
        'Dedicated account manager',
        '6 months free support',
        'Priority support',
        'Custom training sessions',
        'API development'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonClass: 'bg-gray-900 text-white hover:bg-gray-800'
    }
  ];

  const services = [
    {
      category: 'Web Development',
      items: [
        { service: 'Landing Page', price: '$999 - $2,499' },
        { service: 'Business Website', price: '$2,499 - $4,999' },
        { service: 'E-commerce Store', price: '$3,999 - $9,999' },
        { service: 'Web Application', price: '$5,999 - $19,999' },
        { service: 'Custom CMS', price: '$4,999 - $14,999' }
      ]
    },
    {
      category: 'Design Services',
      items: [
        { service: 'Logo Design', price: '$299 - $999' },
        { service: 'Brand Identity Package', price: '$999 - $2,999' },
        { service: 'UI/UX Design', price: '$1,999 - $4,999' },
        { service: 'Print Design', price: '$199 - $799' },
        { service: 'Marketing Materials', price: '$399 - $1,299' }
      ]
    },
    {
      category: 'Digital Marketing',
      items: [
        { service: 'SEO Optimization', price: '$899 - $2,499/month' },
        { service: 'Social Media Management', price: '$599 - $1,999/month' },
        { service: 'PPC Advertising', price: '$799 - $2,999/month' },
        { service: 'Content Marketing', price: '$699 - $1,999/month' },
        { service: 'Email Marketing', price: '$299 - $899/month' }
      ]
    }
  ];

  const faqs = [
    {
      question: "What's included in the monthly subscription?",
      answer: "Our monthly subscriptions include hosting, maintenance, security updates, performance monitoring, and technical support. You'll also get regular backups and uptime monitoring."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle."
    },
    {
      question: "Do you offer custom pricing for large projects?",
      answer: "Absolutely! For enterprise clients and large-scale projects, we offer custom pricing based on your specific requirements. Contact our sales team for a personalized quote."
    },
    {
      question: "What happens if I cancel my subscription?",
      answer: "You can cancel anytime. Your service will continue until the end of your current billing period. We'll provide you with all your files and data before the service ends."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core features 
            with no hidden fees or surprise charges.
          </p>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Monthly Subscription Plans
            </h2>
            <p className="text-xl text-gray-600">
              Ongoing support and maintenance for your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular ? 'border-red-500 transform scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors duration-200 ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-time Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One-Time Project Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Custom solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{item.service}</span>
                      <span className="text-red-600 font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center">
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            Contact us today for a free consultation and custom quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Free Consultation
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

export default Pricing;