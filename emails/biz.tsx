import { Container } from '@react-email/container';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';

import * as React from 'react';

const Biz = () => {
    const styles = {
        html: {
            width: '100%',
            height: '100vh',
        },
        body: {
            width: '100%',
            height: '100%',
            "@media (prefers-color-scheme: dark)": {
                color: '#fff',
            }
        },
        container: {
            width: '100%',
            height: '100%',
        },
        text_primary: {
            color: '#f0db4f',
            fontWeight: '700',
            fontSize: '3em',
            "@media (prefers-color-scheme: dark)": {
                color: '#f0db4f',
            }

        },

    };
    return (
        <Html style={ styles.html}>
            <style>
                {`
                    .text-primary {
                        color: #f0db4f;
                    }
                    .text-black {
                        color: #000;
                    }
                    .font-bold {
                        font-weight: 700;
                    }
                    .text-3xl {
                        font-size: 6em !important;
                    }
                    .text-xl {
                        font-size: 3em !important;
                    }
                    .container {
                        width: 100%;
                        height: 100%;
                    }
                    @media (prefers-color-scheme: dark) {
                        .text-primary {
                            color: #f0db4f;
                        }
                        .text-black {
                            color: #fff;
                        }
                    }
                `}
            </style>
            <body style={styles.body}>
                <Container className="container text-black" >
                    <h1 className="text-primary font-bold text-3xl">Hello World</h1>
                    <p className=" text-xl text-black"> These are some of my links, feel free to check them out.</p>
                </Container>
            </body>
        </Html>
    );
};

export default Biz;
