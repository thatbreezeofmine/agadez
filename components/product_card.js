import Image from "next/image";
import {useEffect, useState} from "react";
import Button from "./button";


export default function Product_card(props) {

    const countDownDate = new Date(props.product.date).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    const getReturnValues = (countDown) => {
        // calculate time left
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

        return [days, hours, minutes, seconds];
    };

    const timeLeft = getReturnValues(countDown);

    const cheapestTicket = props.product.tickets?.reduce(function(prev, curr) {
        return prev?.price < curr?.price ? prev : curr;
    });

    console.log(cheapestTicket)


    const type = props.types?.filter(type => type.id === props.product.typeId)[0]

    return (
        <div className={`shadow-xl rounded-agadez min-w-96 max-w-96 select-none`}>
            <div className={"relative"}>
                {/* todo: use next/image aka upload files locally or use a specific file provider  */}
                <img src={props.product?.image2_url} className={"absolute w-full rounded-agadez max-h-48"} alt={props.product.product_name} />
                <div className={"absolute mt-44 flex justify-center w-full"}>
                    <div className={"bg-white rounded-agadez text-xs text-gray-800 px-3 py-1 font-semibold"}>
                        {type?.nom}
                    </div>
                </div>
            </div>
            <div className={"pt-52"}>
                <h1 className={"w-full mt-2 font-bold text-md text-center uppercase"}>{props.product.product_name}</h1>
                <div className={"w-full -mt-1 text-xs text-center"}>{props.product.venue}</div>

                <div className={"mt-3 flex items-center justify-center"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-agadez-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className={"pl-1 text-sm font-bold"}>{timeLeft[0]} j {timeLeft[1]} h {timeLeft[2]} m {timeLeft[3]} s</div>
                </div>

                <div className={"flex mt-3 items-center justify-around my-2"}>
                    <div className={""}>
                        <div className={"text-xs"}>
                            A partir de :
                        </div>
                        <div className={"flex text-agadez-800 items-center -mt-1"}>
                            <span className={"text-xl font-extrabold"}>{cheapestTicket.price}</span><span className={"ml-0.5 text-xs font-semibold"}>MAD</span>
                        </div>
                    </div>
                    <div className={""}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <Button type={"button"} styleSize={"px-4 py-2"} callback={() => {/* todo : buy callback */ }}>J'achète</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}