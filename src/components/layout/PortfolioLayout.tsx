import React, { FC } from "react";
import { NavBar, Footer } from '../ui'

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const PortfolioLayout: FC<Props> = ({ children  }) => {

    return (
        <>
            <header>

            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>  

            </header>

            <nav>
                <NavBar />
            </nav>

            <main
                style={{
                    margin: '0 auto',
                }}
            >
               { children }
            </main>

            <footer>
                <Footer />
            </footer>

        </>
    )

}