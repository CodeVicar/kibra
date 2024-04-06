"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";


const faqs = [
  {
    question: "What is the mission of the Kibra Youth Boxing Initiative?",
    answer: "Empower Kibera's youth through boxing and educational programs, fostering academic, physical, and entrepreneurial growth.",
  },
  {
    question: "What are the core values of the Kibra Youth Boxing Initiative?",
    answer: "Discipline, Consistency, Empowerment, Holistic Growth, Integrity, Community Engagement, Health and Safety.",
  },
  {
    question: "Who is the Head Coach of the Kibra Youth Boxing Initiative?",
    answer: "Coach Edward Ogweno, an Olympic Boxer.",
  },
  {
    question: "What are some of the programs offered by the Kibra Youth Boxing Initiative?",
    answer: "Boxing Program, Enhanced Educational Support Program, Comprehensive Mentorship Program, Dynamic Entrepreneurial Program Plan, Holistic Health and Wellness Program Plan, Vibrant Arts and Culture Program Plan, Sustainable Environmental Program Plan, and Empowering Leadership Program Plan.",
  },
  {
    question: "How does the Kibra Youth Boxing Initiative involve the community?",
    answer: "The initiative actively involves parents and community officials, ensuring that its programs are inclusive and well-integrated into the community fabric.",
  },
  {
    question: "What is the impact of the Kibra Youth Boxing Initiative on youth development?",
    answer: "The initiative instills pivotal life skills, including discipline, focus, and perseverance, and provides a secure and supportive environment for youth to thrive and evolve.",
  },
  {
    question: "How does the Kibra Youth Boxing Initiative support academic achievement?",
    answer: "By nurturing qualities like confidence, discipline, and dedication, members are better equipped to handle academic challenges, thereby fostering improved academic outcomes.",
  },
  {
    question: "How does the Kibra Youth Boxing Initiative contribute to employment opportunities?",
    answer: "The initiative molds well-rounded individuals prepared for diverse career paths, furnishing them with a mix of athletic and soft skills, significantly enhancing their employability, and providing access to job opportunities through its network.",
  },
  {
    question: "What is the impact of the Kibra Youth Boxing Initiative on community safety?",
    answer: "By engaging youth in positive and structured activities, the initiative diminishes their proclivity towards crime, gang affiliations, and other risky behaviors, bolstering the overall security and wellness of the community.",
  },
  {
    question: "Who are some of the partners and supporters of the Kibra Youth Boxing Initiative?",
    answer: "DECATHLON KENYA, COLOSSEUM GYMNASIUM, AVENUE HEALTHCARE, ADAMS ARCADE, WOODCREST FOUNDATION, MAISHA FLOUR MILLS, NOMADSENSE CREATIVES.",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}