export default function IconButton(props) {
    return (
        <button className={"appearance-none text-agadez-700 hover:text-agadez-800 focus:text-agadez-900"}
                type={props.type}
                onClick={props.callback}>{props.children}</button>
    )
}