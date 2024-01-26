import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2 pt-11">
      <h2 className="head_text blue_gradient font-semibold">404 Not Found</h2>
      <p className='text-lg'>Could not find the requested invoice.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}