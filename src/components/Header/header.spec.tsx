import { screen } from '@testing-library/react';
import  Header  from './index';
import { renderTheme } from '../../styles/render-theme';


describe('Header', () => {
  test('should render Logo', () => {
    renderTheme(<Header />);

    expect(screen.getByRole('img'))
  });
})


