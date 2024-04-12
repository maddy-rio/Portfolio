// Smooth scroll to sections
function SmoothScroll(target: string): void {
  const element = document.querySelector<HTMLElement>(target);
  element?.scrollIntoView({ behavior: 'smooth' });
}


// Sidebar menu

import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Sidebar: React.FC = () => {
  return (
    <Menu right >
      <a className="sidebar-link"  onClick={() => SmoothScroll('#section-header')}>home</a>
      <a className="sidebar-link"  onClick={() => SmoothScroll('#section-about')}>about me</a>
      <a className="sidebar-link" onClick={() => SmoothScroll('#section-skills')}>skills</a>
      <a className="sidebar-link" onClick={() => SmoothScroll('#section-projects')}>projects</a>
      <a className="sidebar-link" onClick={() => SmoothScroll('#section-contact')}>contact</a>
    </Menu>
  );
};


// Standard nav bar
function Nav() {
  return (
    <header className="nav">
      <Sidebar />
      <a onClick={() => SmoothScroll('#section-header')}>home</a>
      <a onClick={() => SmoothScroll('#section-about')}>about me</a>
      <a onClick={() => SmoothScroll('#section-skills')}>skills</a>
      <a onClick={() => SmoothScroll('#section-projects')}>projects</a>
      <a onClick={() => SmoothScroll('#section-contact')}>contact</a>
    </header>
  )
}

export default Nav



