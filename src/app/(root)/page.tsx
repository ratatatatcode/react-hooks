// https://www.developerway.com/posts/intro-to-css-animations-for-react-devs

import Badge from '@/components/shared/badge';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center justify-center p-4 text-center">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">JAMES&apos; RANDOM COLLECTION</h1>
        <p className="mb-4">Custom UI Components — built by exploration</p>
        <div className="flex">
          <Badge
            icon={<FaGithub />}
            text="GitHub"
            bg_color="bg-primary"
            text_color="text-white"
            link="https://github.com/ratatatatcode/react-ui-effects"
          />
          <Badge
            icon=""
            text="Components"
            bg_color="bg-primary/20"
            text_color="text-primary"
            link="/components"
          />
          <Badge
            icon=""
            text="Effects and Animations"
            bg_color="bg-primary/10"
            text_color="text-primary"
            link="https://github.com/ratatatatcode/react-ui-effects"
          />
        </div>
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
