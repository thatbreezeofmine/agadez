export default function Button(props) {
    return (
        <button className={`px-8 py-3 text-white ${props.styleSize} font-semibold bg-gradient-to-r from-agadez-700 to-agadez-800 hover:from-agadez-800 focus:ring focus:ring-agadez-200 rounded-agadez`}
                type={props.type}
                onClick={props.callback}>{props.children}</button>
    )
}