import Carousel_card from "./carousel_card";
import {useEffect, useState} from "react";

function getWindowDimensions() {

    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default function Carousel(props) {

    const [offset, setOffset] = useState(0)
    const [slidesToShow, setSlidesToShow] = useState(5)
    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    let windowWidth = windowDimensions.width;

    const getSlide = (slideId) => {
        if (slideId + offset >= props.items.length) {
            return slideId + offset - props.items.length
        } else if (slideId + offset < 0) {
            return slideId + offset + props.items.length
        } else {
            return slideId + offset
        }
    }

    let items = []

    for (let i=0; i < Math.min(props.items?.length, slidesToShow); i++) {
        if (props.items[getSlide(i)] != undefined) {
            items.push(props.items[getSlide(i)])
        }
    }

    const nextSlide = () => {
        if (offset + 1 == props.items?.length) {
            setOffset(0)
        } else {
            setOffset(offset + 1)
        }
    }

    {/* todo : dynamically change the number of slides to show depending on screenwidth, e.g Int(ScreenWidth / 96px) */}
    if (windowWidth >= 1280 && slidesToShow != 5) {
        setSlidesToShow(5);
    } else if (windowWidth >= 1024  && windowWidth < 1280 && slidesToShow != 4){
        setSlidesToShow(4);
    } else if (windowWidth < 1024 && slidesToShow != 3){
        setSlidesToShow(3);
    }

    const prevSlide = () => {
        if (offset - 1 == - props.items.length) {
            setOffset(0)
        } else {
            setOffset(offset - 1)
        }
    }

    return (<div className={"relative pt-3 lg:pt-6 max-w-full"}>
        <div className={"absolute flex z-10 justify-center w-full space-x-2 lg:space-x-3 "}>
        {items.map((item, id) => {
            return (<Carousel_card key={item.id} product={item} />)
        })}
        </div>
        <div className={"absolute z-10 flex items-center justify-between inset-0 px-3 lg:px-6 mt-40 lg:mt-56"}>
            <div className="group motion-safe:animate-pulse bg-white rounded-3xl py-1 hover:px-1 hover:mt-1 hover:-ml-1" onClick={() => {prevSlide()}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
            </div>
            <div className="motion-safe:animate-pulse bg-white rounded-3xl py-1 hover:px-1 hover:py-2 hover:mt-1 hover:-mr-1" onClick={() => {nextSlide()}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </div>
        </div>
    </div>)
}