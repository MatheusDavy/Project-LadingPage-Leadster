import { fireEvent, screen } from '@testing-library/react';
import { Card } from './index';
import { renderTheme } from '../../styles/render-theme';


describe('Cards', () => {
  test('should render all "props" inside Card', () => {
    const mock = {
      title: 'Marketing Digital',
      tag: 'h1'
    };

    renderTheme(<Card id='1' image='' title={mock.title} tag={'h1'} />);

    expect(screen.getByRole('heading', { level: 1 }))
    expect(screen.getByText(mock.title))
  });
})


