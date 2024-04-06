import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="bg-black">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-30">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16"></div>
            

                <p className="pt-6 text-white">
                  Kibra Youth Boxing Initiative, was established on September
                  15, 2023.
                </p>
                <p className="mt-6 text-white">
                  Nestled in the heart of Kibera, the Kibra Youth Boxing
                  Initiative stands as a testament to resilience and
                  transformation. Founded on the principles of unity,
                  discipline, and the nurturing of potential, the initiative
                  offers more than just a boxing program. It's a sanctuary where
                  the youth of Kibera find mentorship, educational support, and
                  a channel for their energy and ambitions.
                </p>
                <p className="mt-6 text-white">
                  Through sports, academic assistance, and community engagement,
                  the initiative is not just fighting in the ring, but fighting
                  for a brighter, empowered future for its members and the
                  community at large. Emphasis on unity, discipline, resilience,
                  and the role of sports in personal and community development.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <img
              className="h-full w-full object-cover"
              src="/images/about_kibra.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}
