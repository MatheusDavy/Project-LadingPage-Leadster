import {  screen, fireEvent } from '@testing-library/react';
import  { ButtonsCategory} from './index';
import { renderTheme } from '@/styles/render-theme';

describe('FilterCard', () => {
  test('should render ButtonsCategory with correct text and active state', () => {
    const handleActiveCategory = jest.fn();
    const isActive = true;
    const categoryText = 'Category 1';
    
    renderTheme(
      <ButtonsCategory
        index={0}
        text={categoryText}
        activeFunction={handleActiveCategory}
        isActive={isActive}
      />
    );

    const buttonElement = screen.getByText(categoryText);

    expect(buttonElement)
    fireEvent.click(buttonElement);
    expect(handleActiveCategory).toHaveBeenCalledTimes(1);
  });

});