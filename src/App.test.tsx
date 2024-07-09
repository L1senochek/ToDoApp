import { act, render } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import App from './App';
import { ReactElement } from 'react';

describe('App: ', (): void => {
  it('- Renders headline.', async () => {
    await act(async (): Promise<void> => {
      render(<App />);
      await Promise.resolve();
    });
  });
});

test('Initial test. Adds 1 + 2 to equal 3.', (): void => {
  const a = 1;
  const b = 2;
  expect(a + b).toBe(3);
});

it('Testing ReactElement.', (): void => {
  const App = (): ReactElement => {
    return <h1>Test h1</h1>;
  };
  expect(<App />).not.toBeNull();
});
