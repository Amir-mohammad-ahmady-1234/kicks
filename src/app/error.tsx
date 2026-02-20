"use client";

import { Button } from "@/core/components/shadcn/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-gray-200 dark:text-gray-700 select-none">
            500
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertTriangle className="w-24 h-24 text-red-400 dark:text-red-500 animate-pulse" />
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Something Went Wrong!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We apologize for the inconvenience. An unexpected error has
            occurred.
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400">
            Our team has been notified and is working on fixing the issue.
          </p>

          {process.env.NODE_ENV === "development" && (
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-left">
              <p className="text-sm font-mono text-red-600 dark:text-red-400 wrap-break-word">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
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
            onClick={() => reset()}
            variant="secondary"
            size="lg"
            className="inline-flex items-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
        </div>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          If the problem persists, please{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact support
          </Link>
        </p>
      </div>
    </div>
  );
}
