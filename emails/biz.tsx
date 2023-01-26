import { Html } from '@react-email/html';
import { Head } from '@react-email/head';

import * as React from 'react';

const Biz = () => {
    return (
        <Html className="h-100 w-100 text-black">
            <Head>
                <meta name="color-scheme" content="dark light" />
                <meta name="supported-color-schemes" content="dark light" />
                <style>
                    {`
                        .h-100 {
                            height: 100%;
                        }
                        .w-100 {
                            width: 100%;
                        }
                        .text-black {
                            color: #000;
                        }
                        .text-primary{
                            color: #f0db4f;
                        }
                        .font-bold {
                            font-weight: 700;
                        }
                        .text-xl {
                            font-size: 2em;
                        }
                        .text-3xl {
                            font-size: 6em;
                        }
                        @media (prefers-color-scheme: dark) {
                            .text-black {
                                color: #fff !important;
                            }
                            .text-primary {
                                color: #f0db4f !important;
                            }
                        }
                    `}
                </style>
                <link rel="stylesheet" src="./static/dark.css" />
            </Head>
            <body className="h-100 w-100 text-black">
                <div className="h-100 w-100 text-black" >
                    <h1 className="text-primary font-bold text-3xl">Hello World</h1>
                    <p className=" text-xl text-black"> These are some of my links, feel free to check them out.</p>
                </div>
            </body>
        </Html>
    );
};

export default Biz;
