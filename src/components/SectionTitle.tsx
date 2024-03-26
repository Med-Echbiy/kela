import { ReactNode } from "react";

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className='text-center uppercase py-4 flex flex-col gap-3 my-20'>
      <h2 className='text-xl xs:text-3xl sm:text-4xl font-semibold'>{title}</h2>
      <p className=' text-gray-600 text-xs sm:text-sm'>{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
