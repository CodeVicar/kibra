const impact = [
  { name: "Youth Development" },
  { name: "Academic Support" },
  { name: "Employment Opportunities" },
];

const stats = [
  { name: "Kenya Defense Forces: ", value: "8" },
  { name: "The Kenya Police: ", value: "6" },
  { name: "Kenya Prisons: ", value: "4" },
  { name: "Community Safety: ", value: "2" },
];

export default function ImpactSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white sm:py-32">
      <div className="mx-auto max-w-7xl items-center text-center justify-center px-6 lg:px-8 py-6">
        <div className="flex flex-col mx-auto lg:mx-0 item-center justify-center ">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Impact
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            At Kibra Boxing Youth Initiative, we believe in empowering our youth
            to achieve their full potential, both in sports and in life.
          </p>
        </div>
        <div className="mx-auto flex flex-col justify-center items-center mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <h3 className="my-3 text-lg">Our Impact Extend to:</h3>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
            {impact.map((impact, index) => (
              <div key={index}>
                <p>{impact.name}</p>
              </div>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-900">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
