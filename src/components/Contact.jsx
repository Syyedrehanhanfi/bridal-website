import { MapPin, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-gold-500 tracking-[0.3em] uppercase text-xs font-medium mb-4">Get In Touch</h2>
          <p className="text-4xl md:text-5xl font-serif text-brown-900">Book Your Appointment</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <AnimatedSection>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brown-900 mb-2">Call or WhatsApp</h3>
                  <p className="text-brown-900/70 font-light mb-4">We are available 24/7 for bookings and inquiries.</p>
                  <a href="tel:+917668715610" className="text-2xl font-serif text-gold-600 hover:text-gold-500 transition-colors block mb-2">
                    +91 76687 15610
                  </a>
                  <a href="https://wa.me/917668715610?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Mehndi%20appointment" target="_blank" rel="noreferrer" className="inline-block text-xs uppercase tracking-widest text-brown-900 border-b border-brown-900 pb-1">
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brown-900 mb-2">Visit Our Studio</h3>
                  <p className="text-brown-900/70 font-light leading-relaxed max-w-sm mb-4">
                    Shop No. CG-72, Arcadia, South City II,<br/>
                    Sector 49, Gurugram,<br/>
                    Haryana 122018
                  </p>
                  <a href="https://maps.google.com/?q=Rishi+Mehndi+Art+Arcadia+South+City+II+Gurugram" target="_blank" rel="noreferrer" className="inline-block text-xs uppercase tracking-widest text-brown-900 border-b border-brown-900 pb-1">
                    Get Directions
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Quick Inquiry Form */}
          <AnimatedSection delay={0.2} className="bg-cream-100 p-8 md:p-12">
            <h3 className="text-2xl font-serif text-brown-900 mb-8">Send an Inquiry</h3>
            <form action="https://formsubmit.co/rishimehndiartist@gmail.com" method="POST" className="space-y-6">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Mehndi Inquiry from Website!" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-brown-900/70 mb-2">Full Name</label>
                <input type="text" name="name" required className="w-full bg-transparent border-b border-brown-900/20 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-none" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-brown-900/70 mb-2">Phone / WhatsApp</label>
                <input type="tel" name="phone" required className="w-full bg-transparent border-b border-brown-900/20 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-none" placeholder="+91" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-brown-900/70 mb-2">Occasion (Optional)</label>
                <input type="text" name="occasion" className="w-full bg-transparent border-b border-brown-900/20 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-none" placeholder="Bridal, Engagement, Festival..." />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-brown-900/70 mb-2">Message</label>
                <textarea rows="3" name="message" required className="w-full bg-transparent border-b border-brown-900/20 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-none resize-none" placeholder="Tell us about your event..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-brown-900 text-cream-100 uppercase tracking-widest text-sm font-medium hover:bg-gold-600 transition-colors duration-300 mt-2">
                Book Appointment
              </button>
            </form>
          </AnimatedSection>

        </div>

        {/* Full width Google Map */}
        <AnimatedSection className="mt-16 w-full h-[350px] md:h-[450px] shadow-lg border border-brown-900/10 grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://maps.google.com/maps?q=Shop+No.+CG-72,+Arcadia,+South+City+II,+Sector+49,+Gurugram,+Haryana&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Rishi Mehndi Art Location"
          ></iframe>
        </AnimatedSection>

      </div>
    </section>
  );
}
