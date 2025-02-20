```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    // Now correctly includes 'name' in the dependency array
    console.log('Count and name updated:', count, name);
  }, [count, name]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default MyComponent;
```