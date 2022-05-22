import Header from "../components/header";
import Footer from "../components/footer";
import {useState} from "react";
import useSWR from "swr";
import Carousel from "../components/carousel";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

    const [page, setPage] = useState("Accueil")

    const featuredItems = useSWR('api/featuredProducts', fetcher).data

    return (
      <>
          <Header page={page} setPage={setPage} />
          {(page == "Accueil") ? <>
              <h1 className={"w-1/2 text-center pt-3 lg:pt-6 font-bold text-xl lg:text-2xl text-agadez-700"}>Nos coups de coeur</h1>
              <Carousel show={3} infiniteLoop={true} items={featuredItems} />
          </> : null}

      </>
)
}
