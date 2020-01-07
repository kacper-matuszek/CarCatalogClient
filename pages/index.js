import StartPage from '../components/StartPage.js'
import '../styles/Layout.scss'
import Menu from '../components/MenuButton'
import Head from "next/head"
import Navbar from "../components/Navbar"

const Index = () => {
    return (
        <div className="Layout">
            <Head>
                <title>Car Catalog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
            </Head>
            <Navbar />
            <Menu />
            <StartPage />
        </div>
    )
}


export default Index