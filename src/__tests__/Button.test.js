// Button.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button component', () => {
    it('renders Next button correctly', () => {
        render(<Button isNext={true} setNext={() => { }} setBack={() => { }} />);

        const nextButton = screen.getByRole('button');

        expect(nextButton).toBeInTheDocument();
        expect(nextButton).toHaveTextContent('Next');
    });

    it('renders Back button correctly', () => {
        render(<Button isNext={false} setNext={() => { }} setBack={() => { }} />);

        const backButton = screen.getByRole('button');

        expect(backButton).toBeInTheDocument();
        expect(backButton).toHaveTextContent('Back');
    });

    it('calls setNext on Next button click', () => {
        const mockSetNext = jest.fn();
        render(<Button isNext={true} setNext={mockSetNext} setBack={() => { }} />);

        const nextButton = screen.getByRole('button');
        fireEvent.click(nextButton);

        expect(mockSetNext).toHaveBeenCalled();
    });

    it('calls setBack on Back button click', () => {
        const mockSetBack = jest.fn();
        render(<Button isNext={false} setNext={() => { }} setBack={mockSetBack} />);

        const backButton = screen.getByRole('button');
        fireEvent.click(backButton);

        expect(mockSetBack).toHaveBeenCalled();
    });
});
