"use client";
import { Button } from "@/core/components/shadcn/ui/button";
import { ArrowLeft, Frown, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-gray-200 dark:text-gray-700 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Frown className="w-24 h-24 text-gray-400 dark:text-gray-500 animate-bounce" />
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The page you are looking for does not exist or has been moved.
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400">
            Maybe check the URL or try searching for something else?
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <Button
            onClick={() => window.history.back()}
            variant="secondary"
            size="lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
