import { screen } from '@testing-library/react';
import { ModalView } from './index';
import { renderTheme } from '../../styles/render-theme';
import { useModalPostContext } from '../../context/modal/index';

jest.mock('../../context/modal/index', () => ({
  useModalPostContext: jest.fn()
}));

describe('ModalView', () => {
  const mockOpenCloseModal = jest.fn();
  const mockUseModalPostContext = useModalPostContext as jest.MockedFunction<typeof useModalPostContext>;

  beforeEach(() => {
    mockUseModalPostContext.mockReturnValue({
      openCloseModal: mockOpenCloseModal,
      modalProps: {
        isOpen: true,
        postId: 1
      }
    });
  });

  test('renders loader when postData is undefined', async () => {
    renderTheme(<ModalView />);
    expect(screen.getByTestId('loader'))
  });
});