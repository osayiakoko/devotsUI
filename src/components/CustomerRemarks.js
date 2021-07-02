import CustomerRemark from './CustomerRemark'
import SectionTitle from './SectionTitle'

const CustomerRemarks = () => {

    const customers = ["XYZ, BANGALORE", "ABC, BOMBAY", "PQR, CHENNAI"]

    return (
        <section className="px-6 py-8 md:px-4 md:py-12 bg-blue-800 text-white">
            <SectionTitle title="Our Customers Says it Best"></SectionTitle>

            <div className="md:w-5/6 mx-auto space-y-16">
                {customers.map(customer => {
                    return <CustomerRemark 
                        remark="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati nostrum non inventore laudantium tempora, corrupti cumque voluptatum quos quod voluptate, ipsum eos nihil dolores itaque repudiandae! Quibusdam, reprehenderit repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corrupti, quos labore culpa tenetur vel incidunt inventore mollitia, necessitatibus ratione minus quo quas officiis facere quam quaerat eligendi excepturi pariatur!." customer={customer}>
                    </CustomerRemark>
                })}
            </div>
        </section>
    )
}

export default CustomerRemarks
