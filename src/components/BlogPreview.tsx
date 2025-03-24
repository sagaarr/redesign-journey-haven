
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "5 Ways to Teach Your Children About Road Safety",
      excerpt: "Simple yet effective strategies to help your children understand and practice pedestrian safety from an early age.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Priya Sharma",
      date: "June 10, 2023",
      category: "Education"
    },
    {
      title: "The Impact of Smartphone Use on Pedestrian Safety",
      excerpt: "Research shows alarming connections between distracted walking and accident rates. Learn how to stay aware.",
      image: "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Rahul Mehta",
      date: "May 22, 2023",
      category: "Research"
    },
    {
      title: "Success Story: How Mumbai Reduced Pedestrian Accidents by 30%",
      excerpt: "An inspiring case study of how infrastructure changes and awareness campaigns made a significant difference.",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Ananya Desai",
      date: "April 15, 2023",
      category: "Success Stories"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-black">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary">Blog & Resources</span>
          <h2 className="section-headline mt-2 text-white">Latest from Our Blog</h2>
          <p className="mt-4 text-gray-300 text-lg">
            Insights, research, and stories about pedestrian safety and our ongoing initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover-card border-0 shadow-lg bg-gradient-to-b from-gray-900 to-black">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 relative">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <span className="text-xs font-medium py-1 px-2 bg-primary/20 text-primary rounded-full">{post.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-2 line-clamp-2 text-white hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/80">
            View All Blog Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
