"use client"

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'tailwindcss/tailwind.css';


// const ReactReduxtoolkitDemoProvider: React.FC<{ Component: React.ComponentType; pageProps: any }> = ({
//     Component,
//     pageProps,
//   }) => {
//     return (
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     );
//   };

const ReactReduxtoolkitDemoProvider = ({children}: {children:React.ReactNode}) => {
    return <Provider store={store}>{children}</Provider>
}

export default ReactReduxtoolkitDemoProvider;