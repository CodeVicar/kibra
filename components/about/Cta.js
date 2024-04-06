export default function Example() {
  return (
    <div className="relative bg-black">
      <div className="relative h-80 overflow-hidden bg-white md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="/images/club.jpeg"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our History:
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Our journey from inception has been marked by significant
            milestones, including the establishment of a comprehensive boxing
            program, the integration of academic support, and active community
            engagement.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            The club's evolution reflects a commitment to nurturing talent,
            promoting discipline, and building resilience among Kibera's youth,
            aligning with its core principles of empowerment and holistic
            development.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            The Kibra Youth Boxing Initiative (KYBI) was founded with a vision
            to empower youth through boxing and education, fostering personal
            and community growth.
          </p>
        </div>
      </div>
    </div>
  );
}
