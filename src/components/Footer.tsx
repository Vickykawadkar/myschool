"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-16 bg-muted py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} CourseHub. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
