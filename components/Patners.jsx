export default function Patners() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
          PARTNERSHIPS AND SUPPORT{" "}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="images/maisha.png"
            alt="Maisha"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="images/collesseum.png"
            alt="Collesseum"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="images/decathlon.svg"
            alt="decathlon"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="images/avenue.png"
            alt="Avenue"
            width={158}
            height={48}
          />
          {/* <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="images/kenya.png"
            alt="wareflow"
            width={158}
            height={48}
          /> */}

            <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="images/kenya.png"
            alt="Kenya"
            width={158}
            height={48}
            />
            
        </div>
      </div>
    </div>
  );
}
