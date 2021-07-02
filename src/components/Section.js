import SectionTitle from "./SectionTitle"

const Section = ({title, color, gridCols, children}) => {
    const bgColor = {
        blue: 'bg-blue-800 text-white',
        white: 'bg-white text-gray-900'
    }

    const gridCol = {
        two: 'gap-8 md:grid-cols-2 md:gap-0',
        three: 'gap-10 md:grid-cols-3 md:gap-10'
    }

    return (
        <section className={`${color.toLowerCase() === 'blue' ? bgColor.blue : bgColor.white} px-4 py-8 md:py-12`}>
        <SectionTitle title={title}></SectionTitle>

        <div 
            className={`grid ${gridCols === 3 ? gridCol.three : gridCol.two} place-items-center mx-auto md:w-5/6`}
        >
            {children}
        </div>
    </section>
    )
}

export default Section
