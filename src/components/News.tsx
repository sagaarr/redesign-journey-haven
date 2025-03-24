
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const news = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "UNM Foundation Raises Record $45M in Annual Campaign",
      date: "June 15, 2023",
      excerpt: "The foundation exceeded its fundraising goal by 20%, setting a new record for annual giving."
    },
    {
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "New Scholarship Program to Support First-Generation Students",
      date: "May 3, 2023",
      excerpt: "A $2M gift will establish scholarships specifically for first-generation college students at UNM."
    },
    {
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "UNM Foundation Announces $10M Grant for Medical Research",
      date: "April 22, 2023",
      excerpt: "The grant will fund innovative research in cardiovascular health at the UNM School of Medicine."
    }
  ];

  const events = [
    {
      title: "Annual Donor Recognition Gala",
      date: "September 15, 2023",
      location: "Student Union Building, UNM Campus"
    },
    {
      title: "UNM Foundation Scholarship Luncheon",
      date: "October 7, 2023",
      location: "Alumni Center, UNM Campus"
    },
    {
      title: "President's Circle Reception",
      date: "November 18, 2023",
      location: "UNM Center for the Arts"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary">News & Events</span>
          <h2 className="section-headline mt-2">Stay Updated with UNM Foundation</h2>
          <p className="mt-6 text-gray-600 text-lg">
            Keep up with our latest news, events, and stories of impact from across the UNM community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className="group"
            >
              <div className="overflow-hidden rounded-xl hover-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-white border border-t-0 border-gray-100 rounded-b-xl">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                  <div className="mt-4 flex items-center text-primary font-medium group-hover:underline">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
              <div className="space-y-5">
                {events.map((event, index) => (
                  <div key={index} className="flex">
                    <div className="bg-white border border-gray-100 rounded p-2 text-center mr-4 flex flex-col justify-center items-center min-w-16">
                      <div className="text-sm text-gray-500">{event.date.split(' ')[0]}</div>
                      <div className="text-xl font-bold text-primary">{event.date.split(' ')[1].replace(',', '')}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{event.title}</h4>
                      <p className="text-gray-600 text-sm">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" className="group">
                  View All Events
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="md:border-l md:pl-8 border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to receive quarterly updates on our impact, events, and opportunities.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-lg border border-gray-300 px-4 py-2 flex-grow" 
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
