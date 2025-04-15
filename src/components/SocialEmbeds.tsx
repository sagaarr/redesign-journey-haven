
import React from 'react';

// Custom Instagram embed component
export const InstagramEmbed = ({ url, width }: { url: string; width?: number }) => {
  // Use iframe for Instagram embeds
  const embedUrl = `https://www.instagram.com/p/${getInstagramId(url)}/embed`;
  
  return (
    <div style={{ width: width || '100%', overflow: 'hidden', borderRadius: '4px' }}>
      <iframe
        src={embedUrl}
        width={width || "100%"}
        height="680"
        frameBorder="0"
        scrolling="no"
        allowTransparency={true}
        style={{ border: 'none', overflow: 'hidden', borderRadius: '4px' }}
        title="Instagram Post"
      />
    </div>
  );
};

// Custom Twitter/X embed component
export const XEmbed = ({ url, width }: { url: string; width?: number }) => {
  // Create a unique ID for the container
  const containerId = `twitter-${Math.random().toString(36).substring(2, 9)}`;
  
  React.useEffect(() => {
    // Add Twitter widget script if not already added
    if (!(window as any).twttr) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
      
      script.onload = () => {
        loadTweet(containerId, url);
      };
    } else {
      loadTweet(containerId, url);
    }
    
    return () => {
      // Cleanup if needed
    };
  }, [url, containerId]);
  
  return (
    <div 
      id={containerId} 
      style={{ width: width || '100%', minHeight: '300px', borderRadius: '4px' }}
    />
  );
};

// Helper function to load Tweet
function loadTweet(containerId: string, url: string) {
  if ((window as any).twttr && (window as any).twttr.widgets) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '';
      (window as any).twttr.widgets.createTweet(
        getTweetId(url),
        container,
        {
          conversation: 'none',
          width: container.offsetWidth || undefined
        }
      );
    }
  }
}

// Helper function to extract Instagram post ID from URL
function getInstagramId(url: string): string {
  // Match patterns like instagram.com/p/CODEID/ or instagram.com/reel/CODEID/
  const match = url.match(/instagram\.com\/(p|reel)\/([^/?]+)/);
  return match ? match[2] : '';
}

// Helper function to extract Tweet ID from URL
function getTweetId(url: string): string {
  // Match patterns like twitter.com/username/status/TWEETID
  const match = url.match(/twitter\.com\/[^/]+\/status\/(\d+)/);
  if (match) return match[1];
  
  // Match patterns like x.com/username/status/TWEETID
  const matchX = url.match(/x\.com\/[^/]+\/status\/(\d+)/);
  return matchX ? matchX[1] : '';
}
