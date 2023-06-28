import { render, screen } from '@testing-library/react';
import HeroBanner from './index';
import { renderTheme } from '@/styles/render-theme';

describe('HeroBanner', () => {
  test('should render Text correctly', () => {   
    renderTheme(<HeroBanner />);
    expect(screen.getByText('WEBNARS EXCLUSIVOS'))
  });
});







