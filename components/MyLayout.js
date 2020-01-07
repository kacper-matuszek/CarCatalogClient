
import Head from "next/head"
import Navbar from "./Navbar"
import '../styles/Layout.scss'
import '../styles/index.scss'
import MainBar from "./MainBar"



const Layout = props => (
    <div className="Layout">
        <Head>
            <title>Car Catalog</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="utf-8"/>
        </Head>
        <Navbar />
        <MainBar title={props.title} />
        <div className="BodySceleton">
            {props.children}
        </div>
    </div>
);

export default Layout;