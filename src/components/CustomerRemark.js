
const CustomerRemark = ({remark, customer}) => {
    return (
        <div>
            <p className="text-left">{remark}</p>
            <span className="block text-right font-bold">{customer}</span>
        </div>
    )
}

export default CustomerRemark
