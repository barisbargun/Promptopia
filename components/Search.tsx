'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import Image from 'next/image'


const Search = () => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    if (!searchParams) return;
    const params = new URLSearchParams(searchParams);
    if (value) params.set("query", value);
    else params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Search something.."
        onChange={e => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <Image
        src="/assets/icons/search.svg"
        alt='searchIcon'
        width={18}
        height={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
      />
    </div>
  );
}

export default Search