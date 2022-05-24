
export default function Carousel_card(props) {

    return (
        <div title={props.product.name} className={`shadow-xl group transition-carousel rounded-agadez w-48 h-72 lg:w-64 lg:h-96`} style={{backgroundSize : "cover", backgroundPosition: "center"}}>
            <div className={"opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-b from-transparent to-agadez-600 h-full w-full rounded-agadez group-hover:flex group-hover:justify-center cursor-pointer"}>
                <div className={"hidden bg-white group-hover:block self-end mb-4 py-2 px-3 rounded font-semibold text-xs lg:text-sm group-hover:bg-gray-100 group-active:bg-gray:200 select-none uppercase"}>
                    Acheter maintenant
                </div>
            </div>
        </div>
    )
}