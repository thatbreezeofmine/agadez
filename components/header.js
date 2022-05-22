import Head from "next/head";
import Button from "./button";
import IconButton from "./icon_button";
import useSWR from 'swr'
import {useState} from "react";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Header(props) {

    const [showMenu, setShowMenu] = useState(false)
    const types = useSWR('/api/types', fetcher).data

    return (
        <>
            <Head>
                <title>{(!props ? props.title : "Agadez")}</title>
                <meta name={"og:title"} content={(!props ? props.title : "Agadez")} key={"title"} />
                <meta name={"og:description"} content={"Agadez.com: Tickets & Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc."} />
                {/* todo: add other meta descriptions (Keywords & icons) */}
            </Head>
            { /*
            <div className={"bg-gray-100 flex justify-between px-6 lg:px-0 lg:grid lg:grid-cols-3 items-center"}>
                 <div className={"hidden lg:block place-self-center"}>test</div> */ }
            <div className={"bg-gray-100 flex justify-between px-6 lg:px-0 lg:justify-around items-center"}>
                <div className={"text-2xl font-bold py-4 text-agadez-800 font-arsenica place-self-start lg:place-self-center select-none"}>Agadez</div>
                <div className={"hidden lg:flex items-center gap-x-8 place-self-center"}>
                    <IconButton type={"button"} callback={() => {/* todo: action*/}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </IconButton>
                    <IconButton type={"button"} callback={() => {/* todo: action*/}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </IconButton>
                    <Button type={"button"} styleSize={"w-auto py-2 px-4 flex gap-2 items-center select-none"} callback={() => {/* todo: action*/}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Panier
                    </Button>
                </div>
                <div className={"block lg:hidden text-agadez-800"}>
                    <IconButton type={"button"} callback={() => {setShowMenu(!showMenu)}}>
                        {!showMenu ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>}

                    </IconButton>
                </div>
            </div>

            <div className={"hidden lg:flex w-screen justify-center gap-x-8 py-3 font-bold select-none"}>
                <span className={`${(props.page == 'Accueil') ? "cursor-default text-agadez-800" : "cursor-pointer"}`} onClick={() => {props.setPage('Accueil')}}>
                    Accueil
                </span>
                {types?.map((type, id) => {
                    return (<span key={type.id} className={`${(props.page == type.nom) ? "cursor-default text-agadez-800" : "cursor-pointer"}`} onClick={() => { props.setPage(type.nom) }}>
                        {type.nom}
                    </span>)
                })}
            </div>

            {(showMenu ?
                <div className={"block md:hidden grid grid-cols-1 font-semibold gap-y-1 select-none"}>
                    <div className={`py-1 flex justify-center ${(props.page == 'Accueil') ? "cursor-default bg-agadez-800 text-white" : "cursor-pointer"}` } onClick={() => {props.setPage('Accueil')}}>Accueil</div>
                    {types?.map((type, id) => {
                        return (<div key={type.id} className={`py-1 flex justify-center ${(props.page == type.nom) ? "cursor-default bg-agadez-800 text-white" : "cursor-pointer"}`} onClick={() => { props.setPage(type.nom) }}>
                            {type.nom}
                        </div>)
                    })}
                </div>
            : null)}
        </>
    )
}
