import {
    LiveReload,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import type { ColorScheme } from '@mantine/core';
import { MantineProvider, ColorSchemeProvider, Global } from '@mantine/core';
import { theme } from './theme';
import { useLocalStorage } from '@mantine/hooks';

import { StylesPlaceholder } from '@mantine/remix';
import styled from '@emotion/styled';

const classAdd = `
  (function() {
    try {
      var mode = localStorage.getItem('mantine-color-scheme');
      var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
      if (!mode && supportDarkMode) document.body.classList.add('theme-dark');
      if (!mode) return;
      document.body.classList.add('theme-' + JSON.parse(mode));
    } catch (e) {}
  })();
`;
function MyGlobalStyles() {
    return (
        <Global
            styles={(theme) => ({
                '*, *::before, *::after': {
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0,
                },

                body: {
                    ...theme.fn.fontStyles(),
                    backgroundColor:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[7]
                            : theme.white,
                    color:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[0]
                            : theme.black,
                    lineHeight: theme.lineHeight,
                },
                header: {
                    backgroundColor:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[7]
                            : theme.white,
                },
                '.theme-dark': {
                    backgroundColor: theme.colors.dark[7],
                    color: theme.colors.dark[0],
                },
            })}
        />
    );
}
const Layout = styled('div')`
    position: relative;
    max-width: 960px;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 2rem 1.3125rem 100px 1.3125rem;
    @media (max-width: 1000px) : {
        padding: 52px 1.3125rem 100px 1.3125rem;
    }
`;

export default function Root() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
    });

    const toggleColorScheme = (value?: ColorScheme) => {
        document.body.classList.remove('theme-dark');
        document.body.classList.remove('theme-light');
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    };
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ ...{ colorScheme }, ...theme }}
                withNormalizeCSS
            >
                <html lang="en">
                    <head>
                        <meta charSet="utf-8" />
                        <link rel="icon" href="/favicon.ico" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                            name="description"
                            content="My resume and projects website"
                        />
                        <link rel="apple-touch-icon" href="/logo192.png" />
                        <link href="/fonts/Oxygen.css" rel="stylesheet"></link>
                        <link href="/fonts/Cairo.css" rel="stylesheet"></link>
                        <link
                            href="https://fonts.googleapis.com/css?family=Amiko"
                            rel="stylesheet"
                        ></link>
                        <title>Oliver White - Resume</title>

                        <script
                            key="unflashing-dark-mode"
                            dangerouslySetInnerHTML={{
                                __html: classAdd,
                            }}
                        />
                        <Scripts />
                        <MyGlobalStyles />
                        <StylesPlaceholder />
                    </head>
                    <body>
                        <Layout>
                            <Outlet />
                        </Layout>
                        <ScrollRestoration />
                        <LiveReload />
                    </body>
                </html>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}
