import Image from "next/image";


export default function Product_card(props) {


    const type = props.types?.filter(type => type.id === props.product.typeId)[0]
    return (
        <div className={`bg-gray-200 rounded-agadez`}>
            <div className={"relative"}>
                {/* todo: use next/image aka upload files locally or use a specific file provider  */}
                <img src={props.product?.image2_url} className={"absolute w-full rounded-agadez max-h-48"} alt={props.product.product_name} />
                <div className={"absolute mt-44 flex justify-center w-full"}>
                    <div className={"bg-white rounded-agadez text-xs text-gray-800 px-3 py-2 font-semibold "}>
                        {type.nom}
                    </div>
                </div>
            </div>
            <div className={"pt-52"}>test etst</div>

        </div>
    )
}