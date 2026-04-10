import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('framer-motion', () => {
  const React = require('react');
  const motionProps = new Set([
    'animate',
    'custom',
    'initial',
    'transition',
    'variants',
    'whileHover',
    'whileInView',
    'whileTap',
  ]);

  const createMotionComponent = (tag) =>
    React.forwardRef(({ children, ...props }, ref) => {
      const domProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !motionProps.has(key))
      );

      return React.createElement(tag, { ref, ...domProps }, children);
    });

  return {
    motion: new Proxy({}, {
      get: (_, tag) => createMotionComponent(tag),
    }),
  };
});

test('renders portfolio landing page', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /amir saifi/i })).toBeInTheDocument();
});
