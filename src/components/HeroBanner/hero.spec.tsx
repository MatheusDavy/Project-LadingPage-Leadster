import { render, screen } from '@testing-library/react';
import HeroBanner from './index';
import { renderTheme } from '@/styles/render-theme';

describe('HeroBanner', () => {
  test('should render title and description correctly', () => {
    const title = 'Menos Conversinha,';
    const description = 'Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio';
    
    renderTheme(<HeroBanner />);
    
    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    
    expect(titleElement)
    expect(descriptionElement)
  });
});







