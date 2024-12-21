# React 18 useEffect Cleanup Asynchronous Behavior

This repository demonstrates an uncommon error related to the asynchronous nature of the cleanup function in React 18's useEffect hook.  In previous React versions, the cleanup function would always execute synchronously during component unmounting.  However, React 18's concurrent rendering introduces the possibility that this cleanup might happen asynchronously.

This asynchronous execution can lead to unexpected issues if your cleanup function performs synchronous side effects that rely on the component's state or DOM elements still being available.

The example showcases a situation where a setTimeout is used within the cleanup function and might execute even after the component has unmounted, potentially causing issues.  The solution provides a more robust method to handle the cleanup, preventing such race conditions.