import React, { FC } from "react";
import NavBar from '../ui/NavBar'

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: JSX.Element | JSX.Element[];
}

export const PortfolioLayout: FC<Props> = ({ title, pageDescription, imageFullUrl, children  }) => {

    return (
        <>
            <header>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />

                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }

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
                {/* toDo */}
            </footer>

        </>
    )

}