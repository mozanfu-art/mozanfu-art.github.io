import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Mozan Abdelsamie. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-purple-500 fill-purple-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="flex gap-4 text-gray-400 text-sm">
            <span>Arabic • English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
