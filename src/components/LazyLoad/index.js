import React, { Suspense } from 'react';

const LoaderComponent = () => (
    <div>
        <h2>
            <span>loading</span>
        </h2>
    </div>
);

const LazyLoad = ({ component: Component, loader: Loader, ...rest }) => (
    <>
        <Suspense fallback={Loader ? <Loader /> : <LoaderComponent />}>
            <Component {...rest} />
        </Suspense>
    </>
);

export default LazyLoad;
