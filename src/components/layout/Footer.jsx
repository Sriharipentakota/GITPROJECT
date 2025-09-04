import { ChefHat } from 'lucide-react';

/**
 * Footer component
 * Simple footer with branding and links
 */
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-600">
            <ChefHat className="h-5 w-5" />
            <span className="font-medium">RecipeBook</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 RecipeBook. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;