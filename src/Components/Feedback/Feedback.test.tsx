import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '../../utils/test.utils';
import Feedback from './Feedback';

describe('Given a feedback component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Feedback />
      </BrowserRouter>,
    );
  });

  describe('When the feedback is render', () => {
    test('Then a button should be in the document', () => {
      expect(screen.getByTestId('feedback-button-init')).toBeInTheDocument();
    });
  });
  describe('And volver al inicio button is clicked', () => {
    test('Then ', () => {
      const start = screen.getByTestId('feedback-button-init');
      fireEvent.click(start);
    });
  });
  describe('And Atras button is clicked', () => {
    test('Then ', () => {
      const back = screen.getByTestId('feedback-button-back');
      fireEvent.click(back);
    });
  });
});
