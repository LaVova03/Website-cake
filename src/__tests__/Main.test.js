import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Main from './Main';

// Создаем мок-сервер для перехвата запросов к API
const server = setupServer(
    rest.get('https://64980a639543ce0f49e198cf.mockapi.io/Products', (req, res, ctx) => {
        return res(ctx.json([{ name: 'Test Product', price: 20 }]));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('отображение компонента Main', async () => {
    render(<Main />);

    // Ожидаем, пока данные загрузятся
    await waitFor(() => {
        expect(screen.getByText('Загрузка...')).toBeInTheDocument();
    });

    // Ожидаем завершения загрузки данных
    await waitFor(() => {
        expect(screen.queryByText('Загрузка...')).toBeNull();
    });

    // Проверяем отображение данных
    expect(screen.getByText('Good')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();

    // Моделируем клик по кнопке и проверяем, что функция setNext была вызвана
    const button = screen.getByRole('button', { name: /next/i });
    userEvent.click(button);

    // Проверяем, что произошла навигация на "/products"
    expect(screen.getByText('Загрузка...')).toBeInTheDocument(); // можно изменить ожидание на что-то другое, в зависимости от логики загрузки данных на странице "/products"
});
