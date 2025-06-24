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
          {/* <li><a href="https://www.indiacode.nic.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Indian Road Safety Acts (indiacode.nic.in)</a></li> */}
          <li><a href="https://morth.nic.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Ministry of Road Transport & Highways (MoRTH)</a></li>
        </ul>
      </section>

      <section id="stats" className="space-y-4">
        <h2 className="text-3xl font-bold border-b pb-2">📊 Statistics & Reports</h2>
        <ul className="list-disc pl-6 space-y-2">

          <li><a href="https://data.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Government Open Data Portal (data.gov.in)</a></li>

          {/* <li><a href="https://ncrb.gov.in/en/crime-india" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">NCRB Crime in India Reports</a></li> */}

          <li>
          <a href="/files/Traffic_accident_report.csv" download className="text-blue-400">
          📥 Download Pedestrian Statistics Excel</a></li>
          
        </ul>
      </section>

      <section id="articles" className="space-y-4">
        <h2 className="text-3xl font-bold border-b pb-2">📚 Research & Articles</h2>
        <ul className="list-disc pl-6 space-y-2">
          {/* <li><a href="https://www.who.int/publications/i/item/9789241565684" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">WHO Global Status Report on Road Safety</a></li>
          <li><a href="https://www.irfnet.ch/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">International Road Federation (IRF)</a></li> */}
          
          <li><a href="https://timesofindia.indiatimes.com/india/474-lives-were-lost-daily-in-road-crashes-in-2023-says-govt-data/articleshow/114359854.cms?utm_source=chatgpt.com" 
          target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Annual Data of Pedestrian Fatalities
            </a></li>

            <li><a href="https://consumer-voice.org/global-road-safety-initiative/pedestrian-fatalities-in-india/?utm_source=chatgpt.com" 
          target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Pedestrian Fatalities in India
            </a></li>

            
            <li><a href="https://indianexpress.com/article/business/india-road-accidents-fatalities-globally-deaths-road-crashes-gadkari-9698933/?utm_source=chatgpt.com" 
          target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Road Accidents Fatalities Globally
            </a></li>

            <li><a href="https://www.ndtv.com/india-news/analysis-indias-dubious-road-crash-record-whats-the-fix-7221703?utm_source=chatgpt.com" 
          target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Road Crash Record
            </a></li>

             <li><a href="https://timesofindia.indiatimes.com/india/at-1-5-lakh-pedestrians-made-up-20-of-road-deaths-in-5-years/articleshow/121241568.cms?utm_source=chatgpt.com" 
          target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Report on Road Safety
            </a></li>

            <li><a href="https://timesofindia.indiatimes.com/city/delhi/brake-through-fatal-accidents-dip-15-on-city-roads/articleshow/121523542.cms?utm_source=chatgpt.com" 
          target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Reduction Potential
            </a></li>

            <li><a href="https://en.wikipedia.org/wiki/Zero_fatality_corridor?utm_source=chatgpt.com" 
          target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Road Safety Model
            </a></li>
        </ul>
      </section>
    </div>

    <Footer />
    </div>
  )
}

export default ReferencePage
