import Product_card from "./product_card";
import useSWR from "swr";

export default function Products(props) {

    const postFetcher = (url, body) => fetch(url, {method: "POST", body: body}).then((res) => res.json())

    const products = useSWR(['/api/products', props.page], postFetcher).data

    return (
        <div className={"container lg:container-sm xl:container-md mx-auto"}>
            <div className={`grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2 xl:grid-cols-4 ${props.className}`}>
                {products?.map((product, id) => {
                    return (<Product_card product={product} key={product.id} types={props.types} />)
                })}
            </div>
        </div>
    )
}