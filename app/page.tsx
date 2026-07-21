import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-950 text-white py-2 text-sm text-center">
        📍 Woodmere, NY • Serving All of Long Island
      </div>

      {/* Header */}
      <header className="medical-header text-white sticky top-0 z-50 shadow">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl font-bold text-blue-900">🦷</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Schiffman Oral Surgery</h1>
              <p className="text-blue-200 text-sm">Since 1983</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="#services" className="hover:text-blue-200 transition">Services</Link>
            <Link href="#surgeons" className="hover:text-blue-200 transition">Surgeons</Link>
            <Link href="#office" className="hover:text-blue-200 transition">Office Tour</Link>
            <Link href="#contact" className="hover:text-blue-200 transition">Contact</Link>
          </nav>

          <a href="tel:5165691111" className="bg-white hover:bg-blue-50 text-blue-950 px-8 py-3 rounded-full font-semibold transition">
            (516) 569-1111
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Long Island’s Premier Oral Surgery Practice</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-blue-100">
            Board Certified Oral Surgeons • Wisdom Teeth • Dental Implants • IV Sedation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="bg-white text-blue-950 px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition">
              Book Consultation
            </Link>
            <Link href="#office" className="border-2 border-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
              Virtual Office Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-4">Our Services</h3>
          <p className="text-center text-gray-600 mb-12">Full scope oral & maxillofacial surgery</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Wisdom Teeth Removal", desc: "Impacted & complex cases with expert care" },
              { title: "Dental Implants", desc: "Premium brand implants (Nobel, Straumann)" },
              { title: "Bone Grafting", desc: "Sinus lifts & ridge augmentation" },
              { title: "Emergency Extractions", desc: "Same-day relief when you need it" },
              { title: "IV Sedation", desc: "Comfortable, anxiety-free procedures" },
              { title: "Oral Pathology", desc: "Biopsies and lesion treatment" }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition border border-gray-100">
                <h4 className="text-2xl font-semibold mb-3 text-blue-950">{s.title}</h4>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="bg-blue-950 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl mb-8">Call us today or fill out our secure patient registration form.</p>
          <a href="tel:5165691111" className="inline-block bg-white text-blue-950 text-2xl font-bold px-12 py-5 rounded-2xl hover:bg-blue-100 transition">
            (516) 569-1111
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p>© {new Date().getFullYear()} Schiffman Oral Surgery • Woodmere, New York</p>
        <p className="text-sm mt-2">All Rights Reserved</p>
      </footer>
    </div>
  );
}
