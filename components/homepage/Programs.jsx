import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Boxing Program:",
    description:
      "Focused on developing boxing talents through rigorous training and national sports participation, promoting discipline and achievement.",
  },
  {
    name: "Educational Support Program",
    description:
      "Balancing academics with athletic training, providing tutoring and resources for academic success.",
  },
  {
    name: "Mentorship Program:",
    description:
      "Connecting members with experienced mentors for personal and career guidance.",
  },
  {
    name: "Entrepreneurial Program:",
    description:
      "Equipping youth with entrepreneurship skills for innovation and financial management.",
  },
  {
    name: "Health & Wellness Program:",
    description:
      "Promoting physical and mental well-being through healthy living and support services.",
  },
  {
    name: "Arts & Culture Program:",
    description:
      "Encouraging creative expression and cultural exploration within the community.",
  },
  {
    name: "Environmental Program:",
    description:
      "Addressing environmental challenges through sustainable waste management practices.",
  },
  {
    name: "Leadership Program:",
    description:
      "Developing leadership skills and fostering community-driven leaders.",
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                PROGRAMMES, COMMUNITY AND SUSTAINABILITY COMMITMENT
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-100 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline text-lg font-bold text-[#c3b352]">
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="/images/programs.jpeg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
