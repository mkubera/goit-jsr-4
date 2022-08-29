import { useState, useEffect } from "react";

const Title = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${value} times`;
  });

  return (
    <div>
      <p>You clicked {value} times</p>
      <button onClick={() => setValue((oldValue) => oldValue + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Title;
