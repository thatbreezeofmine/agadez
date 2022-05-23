import Header from "../components/header";
import Footer from "../components/footer";
import {useState} from "react";
import useSWR from "swr";
import Carousel from "../components/carousel";
import Products from "../components/products";
import Product_card from "../components/product_card";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

    const [page, setPage] = useState("Accueil")

    const featuredItems = useSWR('api/featuredProducts', fetcher).data

    const products = useSWR('api/products', fetcher).data

    const types = useSWR('api/types', fetcher).data

    const type = types?.filter(type => type.nom === page)[0]

    return (
      <>
          <Header page={page} setPage={setPage} />
          {(page == "Accueil") ? <>
              <h1 className={"w-1/2 text-center pt-3 lg:pt-6 font-bold text-xl lg:text-2xl text-agadez-700"}>Nos coups de coeur</h1>
              <Carousel show={3} infiniteLoop={true} items={featuredItems} />
              <Products className={"mt-8 pt-72 lg:pt-96"} types={types}  products={products}></Products>
          </> : <Products className="mt-16" types={types} products={products.filter(product => product.typeId === type.id)}></Products>}

      </>
)
}
