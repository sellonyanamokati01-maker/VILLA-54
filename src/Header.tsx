import React from 'react';
import { useNavigation, useNsfasBadge } from './hooks';

export default function Header() {
  useNavigation('nav', 'hamburger');
  useNsfasBadge();

  return (
    <header>
      <div className="header-inner">
        <a href="/" className="logo">Villa54</a>
        <div className="nav-nsf">
          <svg viewBox="0 0 120 120">
            <defs>
              <path id="circlePath" d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
            </defs>
            <text className="nsf-text">
              <textPath href="#circlePath">NSFAS ACCREDITED • NSFAS ACCREDITED •</textPath>
            </text>
          </svg>
        </div>
        <button type="button" className="hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav id="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/apply">Apply</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
