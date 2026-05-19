import React from 'react';
import InteractiveBentoGallery from './ui/interactive-bento-gallery';

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Real-time compilation",
    desc: "Your changes reflect instantly across the entire distributed network without page reloads.",
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=100&w=2400&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Edge delivery",
    desc: "Deployed globally to edge networks for sub-50ms latency anywhere in the world.",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Native integrations",
    desc: "Connects directly to your existing workflow.",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=100&w=1600&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Zero config",
    desc: "Out of the box performance optimizations.",
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=100&w=1600&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "video",
    title: "Vibrant chart paths",
    desc: "Advanced routing and diagnostic algorithms.",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "Global CDN Edge",
    desc: "Ultra-fast global response replication.",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 7,
    type: "video",
    title: "Secure sanctuaries",
    desc: "Robust state-of-the-art encryption standards.",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white overflow-hidden min-h-screen flex flex-col justify-center">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="The Engine. Built for scale."
        description="Drag and explore our bento-grid of real-time compilation, zero config setup, and native integrations."
      />
    </section>
  );
}
