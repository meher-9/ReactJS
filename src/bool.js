import React, { useState } from 'react';
function ConditionalDisplay() {
    const [isTrue, setIsTrue] = useState(true);
  
    return (
      <div>
        {isTrue ? (
          <div>
            <h2>True Content</h2>
            <p>This content is displayed because the boolean variable is true.</p>
          </div>
        ) : (
          <div>
            <h2>False Content</h2>
            <p>This content is displayed because the boolean variable is false.</p>
          </div>
        )}
        <button onClick={() => setIsTrue(!isTrue)}>Toggle Content</button>
      </div>
    );
  };
  
  export default ConditionalDisplay;