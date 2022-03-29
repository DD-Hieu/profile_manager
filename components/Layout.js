import Head from "next/head";
import { Children } from "react";
import Container from "react-bootstrap/Container";
import NavbarMenu from "./NavbarMenu";

const Layout = ({ children }) => (
    <Container>
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My next app</title>
        </Head>

        <header>
            <NavbarMenu />
        </header>

        <main>{children}</main>
    </Container>
)

export default Layout