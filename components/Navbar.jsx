"use client";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "./" },
  { name: "About", href: "./about" },
  // { name: "Community", href: "mobile-app" },
  // { name: "Boxing", href: "./pricing" },
  // { name: "Impact", href: "./about" },
  { name: "Contact", href: "./contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // change nav background on scroll

  //

  return (
    // <header className="inset-x-0 top-0 z-50 bg-transparent sticky">
    <header className="sticky inset-x-0 top-0 z-50 bg-[#000]">
      <nav
        className="flex items-center justify-between mx-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="./" className="text-bold text-white">
            {/* <span>Pixel Path</span> */}
            <img className=" w-auto h-24 md:h-32" src="./images/kibra.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-12 w-12" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 px-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-bold leading-6 text-[#fff] uppercase"

            >
              {item.name}
            </a>
          ))}
        </div>

      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className=" w-auto h-32" src="./images/kibra.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-12 w-12" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
        
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}