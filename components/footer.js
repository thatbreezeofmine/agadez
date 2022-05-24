import Button from "./button";

export default function Footer() {
    return (
        <>
            <div className={"bg-gray-100 flex items-center justify-between py-4 relative inset-x-0 bottom-0"}>
                <div className={"font-bold"}>
                    Inscrivez-vous à la newsletter Agadez
                </div>
                <div className={"flex"}>
                    <input type={"text"} placeholder={"email@gmail.com"} />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <Button type={"button"} styleSize={"py-2 px-4"} callback={() => { /* todo: newsletter callback */ }} >S'inscrire</Button>
                </div>

            </div>
        </>

    )
}
