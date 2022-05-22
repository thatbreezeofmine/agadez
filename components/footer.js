import IconButton from "./icon_button";
import Button from "./button";

export default function Footer() {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-3"}>
           <div className={"bg-green-100"}>
               Hello
           </div>
            <div className={"bg-blue-100"}>
                Hello
            </div>
            <div className={"bg-red-100"}>
                Test
            </div>
        </div>
    )
}
