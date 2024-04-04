import React, { FC } from "react";
import { NavBar, Footer } from '../ui'

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const PortfolioLayout: FC<Props> = ({ children  }) => {

    return (
        <>
            <nav data-aos="fade-down">
                <NavBar />
            </nav>

            <main
                style={{
                    margin: '0 auto',
                }}
                className="bg-neutral-100 dark:bg-neutral-950
                bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
                dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
            >
               { children }
            </main>

            <footer className="bg-[#0A0A0A]">
                <Footer />
            </footer>

        </>
    )

}