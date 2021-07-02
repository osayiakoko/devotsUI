import vote_ballot from '../img/vote_ballot.jpg'

const Header = () => {
    return (
        <header class="relative h-96">
            <img src={vote_ballot} alt="" 
                class="w-full h-full filter grayscale object-cover"
            ></img>
            <div id="overlay" class="absolute inset-0 bg-black opacity-70"></div>
            <div class="absolute inset-0 text-white p-8">
                <nav class="relative select-none">
                    <div 
                        class="absolute w-full flex flex-col md:flex-row justify-between items-center"
                    >
                        <h2 class="text-2xl mb-4 md:mb-0">Voter BALLOT</h2>
                        <ul class="flex space-x-3">
                            <li class="hover:text-blue-500 cursor-pointer">HOME</li>
                            <li class="hover:text-blue-500 cursor-pointer">CAST A VOTE</li>
                            <li class="hover:text-blue-500 cursor-pointer">PROFILE</li>
                            <li class="hover:text-blue-500 cursor-pointer">ABOUT</li>
                        </ul>
                    </div>
                </nav>
                <div class="h-full flex flex-col justify-center items-center text-center">
                    <h2 class="pb-2 text-xl font-bold">WHY CHOOSE US?</h2>
                    <p>We take democracy seriously. Find out why our clients consistently rely on us for their needs</p>
                </div>
            </div>
        </header>
    )
}

export default Header
