import { screen } from '@testing-library/react';
import  Footer  from './index';
import { renderTheme } from '../../styles/render-theme';


describe('Footer', () => {
  test('should render multiple <a> elements inside <li>', () => {
    renderTheme(<Footer />);

    const listItems = screen.getAllByRole('listitem');

    listItems.forEach((listItem) => {
      const linkElements = screen.getAllByRole('link', { container: listItem });
      const linkCount = linkElements.length;

      expect(linkCount).toBeGreaterThan(0);
    });
  });
});
