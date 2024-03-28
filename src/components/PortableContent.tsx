import { PortableText } from "@portabletext/react";
import { getAboutInfo } from "../../sanity/lib/client";
const typo =
  "text-sm text-gray-700 sm:text-lg  lg:text-xl xl:text-2xl max-w-3xl xl:max-w-4xl text-center mx-auto";

async function PortableContent({ data }: { data: any }) {
  const info = data;
  return (
    <section className=' max-w-7xl mx-auto mt-12 aboutUs'>
      <main className='grid grid-cols-1  gap-8'>
        <PortableText value={info.content} />
      </main>
    </section>
  );
}

export default PortableContent;
