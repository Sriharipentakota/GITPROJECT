import React from "react";

export default function CSSAnimationsExample() {
  return (
    <div>
      <h3>CSS Animations</h3>
      <p>
        CSS Animations use <code>@keyframes</code> for complex effects.
      </p>
      <pre style={{background:'#eee',padding:10,borderRadius:6}}>
{`@keyframes bounce {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-30px);}
}
.bouncer {
  animation: bounce 1s infinite;
}`}
      </pre>
      <h4>Live Render:</h4>
      <div style={{
        display:'inline-block',
        animation: 'bounce 1s infinite',
        background:'#8cf',color:'#fff',padding:'10px 30px',borderRadius:5,
        fontWeight:'bold',
        // CSS-in-JS keyframes:
        '@keyframes bounce': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' }
        }
      }}>
        Bounce!
      </div>
      <style>
        {`
          @keyframes bounce {
            0%,100% { transform: translateY(0);}
            50% { transform: translateY(-30px);}
          }
          .bouncer {
            animation: bounce 1s infinite;
          }
        `}
      </style>
    </div>
  );
}