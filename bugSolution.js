```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    let timeoutId;
    if (isMounted){
      timeoutId = setTimeout(() => {
        console.log('cleanup');
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
        console.log('cleanup');
      };
    }
  }, [isMounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```