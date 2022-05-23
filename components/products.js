import Product_card from "./product_card";

export default function Products(props) {

    return (
        <div className={`grid grid-cols-1 gap-x-2 gap-y-2 lg:grid-cols-2 xl:grid-cols-4 mx-4 lg:mx-16 xl:mx-36 ${props.className}`}>
            {props.products?.map((product, id) => {
                return (<Product_card product={product} key={product.id} types={props.types} />)
            })}
        </div>
    )
}