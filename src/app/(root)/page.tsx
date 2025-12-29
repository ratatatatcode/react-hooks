// https://www.developerway.com/posts/intro-to-css-animations-for-react-devs

import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <main className="flex items-center justify-center text-center h-screen">
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="text-4xl font-bold">REACT | RANDOM COLLECTION</h1>
        <p>Custom UI Components — built by exploration</p>
        <ArrowDown className="text-primary" />
      </div>
    </main>
  );
}

/* Notes:
  CSS animation and keyframes
  <div className="class-name"></div>
  .class-name {
    animation: name duration timing-function delay iteration-count (other properties: direction fill-mode)
    animation: animation-name 1s ease-in 1s infinite
  }
  
  .animation-name {
    from {
      opacity: 0;
      transform: translateX/Y is applicable.
    }

    50% {
      opacity: 50;
    }
    
    to {
      opacity: 100
    }
  }

  Inline Styles (Transition)

  CSS-in-JS Libraries
  import styled, { keyframes } from 'styled-components';
*/
