import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <h1 className="text-display font-display font-bold text-accent mb-4">
        404
      </h1>
      <p className="text-muted text-lg mb-8 text-center">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/car-listing"
        className="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors shadow-primary"
      >
        Back to Car Listing
      </Link>
    </div>
  );
}
