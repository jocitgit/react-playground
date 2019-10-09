import React from 'react';
import { LoadingError } from '../error/error.js';

const AnyComponent = React.lazy(() => import('../any/AnyComponent')); // default exports only for lazy()
const BadComponent = React.lazy(() => import('../bad/BadComponent'));

function Lazy() {
    return (
        <div>
            <LoadingError>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <AnyComponent />
                </React.Suspense>
            </LoadingError>
            <LoadingError>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <BadComponent />
                </React.Suspense>
            </LoadingError>
        </div>

    );
}

export default Lazy;

