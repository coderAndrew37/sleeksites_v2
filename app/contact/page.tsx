"use client";
import { JSX, useState } from "react";
import Button from "../components/ui/Button";
import Layout from "../components/layout/Layout";
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "info@sleeksites.co.ke",
      description: "Send us an email anytime",
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+254 700 000 000",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "Nairobi, Kenya",
      description: "Come say hello at our office",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "+254 700 000 000",
      description: "Quick responses via WhatsApp",
    },
  ];

  if (isSubmitted) {
    return (
      <Layout
        title="Contact Us - SleekSites Kenya | Get in Touch"
        description="Get in touch with SleekSites Kenya for web design, SEO, and digital marketing services. We're here to help your business grow."
      >
        <section className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Thank You!
              </h1>
              <p className="text-xl mb-8">
                We've received your message and will get back to you within 24
                hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  onClick={() => (window.location.href = "/")}
                >
                  Back to Home
                </Button>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      title="Contact Us - SleekSites Kenya | Get in Touch"
      description="Get in touch with SleekSites Kenya for web design, SEO, and digital marketing services. We're here to help your business grow."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-orange-400">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free
            consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-lg text-blue-700 font-semibold mb-2">
                  {method.details}
                </p>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    >
                      <option value="">Select a service</option>
                      <option value="web-design">
                        Web Design & Development
                      </option>
                      <option value="seo">SEO Optimization</option>
                      <option value="social-media">
                        Social Media Marketing
                      </option>
                      <option value="google-ads">Google Ads</option>
                      <option value="ecommerce">E-Commerce Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    >
                      <option value="">Select budget</option>
                      <option value="25-50k">KES 25,000 - 50,000</option>
                      <option value="50-100k">KES 50,000 - 100,000</option>
                      <option value="100-250k">KES 100,000 - 250,000</option>
                      <option value="250k+">KES 250,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  We'll get back to you within 24 hours. Your information is
                  secure and confidential.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Work With Us?
              </h3>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Expert Kenyan Team",
                    description:
                      "We understand the local market and consumer behavior in Kenya.",
                  },
                  {
                    title: "Proven Results",
                    description:
                      "127+ successful projects delivered with measurable results.",
                  },
                  {
                    title: "Ongoing Support",
                    description:
                      "We provide continuous support and maintenance after launch.",
                  },
                  {
                    title: "Transparent Pricing",
                    description:
                      "No hidden costs. Clear pricing with detailed breakdowns.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Location
            </h2>
            <div className="h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-2xl font-bold mb-2">Nairobi, Kenya</h3>
                <p className="text-blue-100">
                  We serve clients across Kenya and East Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
