import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
const Bookings = () => {
  return (
    <div className="bookingsPage flex flex-col p-5 m-5 flex-grow">
      <div className="bookingForm flex justify-center content-center w-full">
        <div id="consoleOptions" className="flex">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-black/30 hover:text-white hover:ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              What is your game ?
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-pdmain shadow-lg ring-1 ring-black/5 focus:outline-none text-white">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? " text-white" : "text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <span className={`${active && "bg-blue-500"}`}>PC</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? " text-white" : "text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <span className={`${active && "bg-blue-500"}`}>
                        Play Station
                      </span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? " text-white" : "text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <span className={`${active && "bg-blue-500"}`}>
                        Racing simulator
                      </span>
                    </button>
                  )}
                </Menu.Item>
                {/* <Menu.Item disabled>
                  <span className="opacity-75">
                    Invite a friend (coming soon!)
                  </span>
                </Menu.Item> */}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div id="slotavailability"></div>
        <div id="bookSlot"></div>
        <div id="details"></div>
        <div id="payment"></div>
      </div>
    </div>
  );
};

export default Bookings;
