import Head from "next/head";
import Topo from "../components/topo";
import Home from "../components/home";
import Intro from "../components/intro";
import Metas from "../components/metas";

export default function Tudo(){
    return(
        <>
        <Head>
        <title>Os Objetivos de Desenvolvimento Sustentável no Brasil</title>
        </Head>
        <Topo></Topo>
        <Home titulo="Os Objetivos de Desenvolvimento Sustentável no Brasil" texto="A educação de qualidade visa a garantia ao acesso à educação inclusiva, de qualidade e equitativa, e visa também a promoção de oportunidades de apredizagem ao longo da vida para todos"></Home>
        <Intro titulo="Objetivo 10" texto="Reduzir a desigualdade dentro dos países e entre eles"></Intro>
        <Metas></Metas>
        </>
    )
}