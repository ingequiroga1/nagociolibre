import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  rating?: number;
}

export function TestimonialCard({ name, role, content, image, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="mb-4 text-gray-700 italic">"{content}"</p>
      <div className="flex items-center gap-3">
        {/* <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        /> */}
        <div>
          <p className="text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
