import vote_ballot from '../img/vote_ballot.jpg'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import { Link } from 'react-router-dom'


const Header = () => {

    const navigation = [
        { text: "HOME", link: "/" },
        { text: "CAST A VOTE", link: "/cast-a-vote" },
        { text: "PROFILE", link: "/profile" },
        { text: "ABOUT", link: "/about" }
    ]

    return (
        <header className="relative h-96">
            <img src={vote_ballot} alt="" 
                className="w-full h-full filter grayscale object-cover"
            ></img>
            <div id="overlay" className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 text-white p-8">
                <Popover as="nav" className="relative select-none">
                    {({open}) => (
                        <div className="absolute w-full flex justify-between items-center" >
                            <h2 className="text-2xl">Voter BALLOT</h2>

                            {/* Desktop nav */}
                            <ul className="hidden space-x-3 md:flex">
                                { navigation.map((item, index) => 
                                    <li key={index} className="hover:text-blue-500 cursor-pointer">
                                        <Link to={item.link}> {item.text} </Link>
                                    </li>
                                )}
                            </ul>

                            <Popover.Button className="md:hidden">
                                { 
                                    open ? <XIcon className="h-8 w-8" ></XIcon>
                                    : <MenuIcon className="h-8 w-8"></MenuIcon>
                                }
                            </Popover.Button>

                            {/* Mobile nav */}
                            <Transition as={Fragment}
                                enter="transition duration-200 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Popover.Panel 
                                    className="absolute top-10 w-full z-10 bg-white text-gray-800 rounded px-4 py-5 md:hidden"
                                >
                                    <div className="grid">
                                        { navigation.map((item, index) => 
                                            <Link to={item.link} key={index} className="my-0.5 p-2 rounded hover:bg-gray-300">{item.text}</Link>
                                        )}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </div>
                    )}
                </Popover>
                <div className="h-full flex flex-col justify-center items-center text-center">
                    <h2 className="pb-2 text-xl font-bold">WHY CHOOSE US?</h2>
                    <p>We take democracy seriously. Find out why our clients consistently rely on us for their needs</p>
                </div>
            </div>
        </header>
    )
}

export default Header
