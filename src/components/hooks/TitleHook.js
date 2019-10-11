import { useEffect } from 'react';

function useTitleHook(title) {
    useEffect(() => {
            document.title = `Title is ${title}`;
    });
}

export default useTitleHook;