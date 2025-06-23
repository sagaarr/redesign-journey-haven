import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

const ReferencePage = () => {
  return (
    <div className="min-h-screen bg-black">
    <NavBar />

    <div className="min-h-screen bg-gray-900 text-white p-6 pt-32 space-y-16">
      <section id="laws" className="space-y-4">
        <h2 className="text-3xl font-bold border-b pb-2">📘 Road Safety Laws</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="https://www.indiacode.nic.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Indian Road Safety Acts (indiacode.nic.in)</a></li>
          <li><a href="https://morth.nic.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Ministry of Road Transport & Highways (MoRTH)</a></li>
        </ul>
      </section>

      <section id="stats" className="space-y-4">
        <h2 className="text-3xl font-bold border-b pb-2">📊 Statistics & Reports</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="https://data.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Government Open Data Portal (data.gov.in)</a></li>
          <li><a href="https://ncrb.gov.in/en/crime-india" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">NCRB Crime in India Reports</a></li>
        </ul>
      </section>

      <section id="articles" className="space-y-4">
        <h2 className="text-3xl font-bold border-b pb-2">📚 Research & Articles</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="https://www.who.int/publications/i/item/9789241565684" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">WHO Global Status Report on Road Safety</a></li>
          <li><a href="https://www.irfnet.ch/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">International Road Federation (IRF)</a></li>
        </ul>
      </section>
    </div>

    <Footer />
    </div>
  )
}

export default ReferencePage
