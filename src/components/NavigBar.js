import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";


function NavigBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=" grid place-content-center  grid-flow-col auto-cols-max gap-4">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex  items-center justify-between h-16">
            <div className="flex  items-center ">
              <div className="hidden md:block">
                <div className="ml-10 grid grid-flow-col place-self-center gap-32 items-baseline ">
                  <nav class="place-self-center place-content-center">
                    <ul class="grid grid-flow-col place-content-center gap-8">
                      <li>
                        <Link to="/">Overview</Link>
                      </li>
                      <li>
                        <Link to="/Pricing">Pricing</Link>
                      </li>
                      <li>
                        <Link to="/CaseStudies">Case Studies</Link>
                      </li>
                      <li>
                        <Link to="/CaseStudiesInner">FAQ</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className=" -ml-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="clear-both items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-300 focus:outline-none  "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 0 0"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="block text-center clear-both md:hidden"
              id="mobile-menu"
            >
              <div
                ref={ref}
                className="px-2 pt-2 place-content-center pb-3 space-y-1 sm:px-3"
              >
                <nav>
                  <ul class="-ml-14">
                  <li class=" clear-both items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-300 "> 
                  <svg
                    type="button"
                    className="-mr-20 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
              </li>
                    <li class="my-2">
                      <Link to="/">Overview</Link>
                    </li>
                    <li class="my-2">
                      <Link to="/Pricing">Pricing</Link>
                    </li>
                    <li class="my-2">
                      <Link to="/CaseStudies">Case Studies</Link>
                    </li>
                    <li class="my-2">
                      <Link to="/CaseStudiesInner">FAQ</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavigBar;
