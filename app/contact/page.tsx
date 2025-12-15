"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Clock,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section - Gradient Background */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">
                  We're Here to Help
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                Let's Build Something
                <span className="block text-yellow-300">Amazing Together</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8">
                Get a free consultation and discover how we can transform your business with custom software solutions.
              </p>

              {/* Quick Contact */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="p-3 rounded-lg bg-white/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Email us</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="font-semibold hover:text-yellow-300 transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="p-3 rounded-lg bg-white/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Call us</p>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`} className="font-semibold hover:text-yellow-300 transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <Clock className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-3xl font-black text-white">2 hrs</div>
                <div className="text-blue-100 text-sm">Response Time</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <MapPin className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-3xl font-black text-white">50+</div>
                <div className="text-blue-100 text-sm">Countries</div>
              </div>
              <div className="col-span-2 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <Send className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-3xl font-black text-white">24/7</div>
                <div className="text-blue-100 text-sm">Available Support</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <Section className="bg-white dark:bg-gray-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="p-10 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Fill out the form and our team will get back to you within 2 hours
                </p>
                
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300"
                  >
                    {submitMessage}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all inline-flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Info Cards */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-blue-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-600">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-600">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                      <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`} className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-600">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-600">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Hours</p>
                      <p className="font-semibold text-gray-900 dark:text-white">Mon - Fri: 9 AM - 6 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={CONTACT_INFO.socialMedia.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all text-center"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 mx-auto" />
                  </a>
                  <a
                    href={CONTACT_INFO.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all text-center"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 mx-auto" />
                  </a>
                  <a
                    href={CONTACT_INFO.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all text-center"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 mx-auto" />
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border border-green-200 dark:border-green-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-green-600">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      Fast Response Guaranteed
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We respond to all inquiries within 2 hours during business hours. 
                      Urgent? Call us directly!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}

