import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin='true' />
                <link
                    rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Mr+Dafoe&family=Mrs+Sheppards&family=Qwitcher+Grypen&family=Satisfy&display=swap"
                />

                {/* i icon  */}
                <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />

                {/* kaTex  */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossOrigin="anonymous" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}