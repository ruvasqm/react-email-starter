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
                        .text-2xl {
                            font-size: 4em;
                        }
                        .m-0 {
                            margin: 0 !important;
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
                <link rel="stylesheet" src="https://raw.githubusercontent.com/ruvasqm/react-email-starter/master/emails/static/dark.css" />
            </Head>
            <body className="h-100 w-100 text-black">
                <div className="h-100 w-100 text-black" >
                    <h1 className="text-primary font-bold text-2xl m-0">Hello World</h1>
                    <p className=" text-xl text-black"> These are some of my links, feel free to check them out.</p>
                </div>
            </body>
        </Html>
    );
};

export default Biz;
