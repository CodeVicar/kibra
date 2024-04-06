export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-[#fff] px-6 py-12 md:py-24 text-center shadow-2xl sm:px-16">
        <h2 className="mx-auto max-w-7xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Transforming Lives through Boxing and Education{" "}
        </h2>
        <p className="mx-auto mt-6 max-w-5xl  font-semibold  leading-8 text-gray-900">
          Through the universal language of sports, we aim to nurture not just
          athletes but well-rounded individuals imbued with discipline,
          ambition, and the invaluable life skills necessary to navigate the
          challenges of life. Our initiative stands as a testament to the
          potential within each child, offering them a pathway to educational
          opportunities and sponsorships that might otherwise remain out of
          reach.
        </p>
        <p className="mx-auto mt-6 max-w-5xl  font-semibold leading-8 text-gray-900">
          Since our inception, we have touched the lives of over 105 young
          individuals, ranging in age from 7 to 28 years. Our efforts extend
          beyond the boxing ring; we are committed to ensuring each participant
          continues their education, supported by a network of corporate
          sponsors, dedicated professionals, and kind-hearted individuals who
          share our vision. Join us on this journey to empower the youth of
          Kibra through sports, education, and community support. Together, we
          can pave the way for a future filled with promise, success, and
          endless possibilities.
        </p>

        <div className="mt-10 flex flex-col items-center gap-y-4 md:flex-row md:justify-center md:gap-x-6">
          <a
            href="/contact"
            className="rounded-md bg-white border-2 px-3.5 py-3.5 text-lg font-bold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            FIND OUT MORE
          </a>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
