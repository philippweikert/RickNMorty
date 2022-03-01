import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import Galery from './Galery';

test('that items are filtered', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                info: {},
                results: [{
                    id: 1,
                    name: 'Rick',
                    status: 'Alive',
                    image: 'image1',
                    location: {name:''}
                }, {
                    id: 2,
                    name: 'Morty',
                    status: 'Alive',
                    image: 'image2',
                    location: {name:''}
                }, {
                    id: 3,
                    name: 'Summer',
                    status: 'Alive',
                    image: 'image3',
                    location: {name:''}
                }, {
                    id: 4,
                    name: 'Beth',
                    status: 'Alive',
                    image: 'image4',
                    location: {name:''}

                }, {
                    id: 5,
                    name: 'Jerry',
                    status: 'Alive',
                    image: 'image5',
                    location: {name:''}
                }]
            })
        } as Response);
    });

    render(<Galery />);

    await waitFor(() => {
        expect(screen.getAllByTestId('gallery-item').length).toBe(5);
    });

    const searchField = screen.getByTestId('search-field') as HTMLInputElement;

    fireEvent.change(searchField, { target: { value: 'r' }});

    await waitFor(() => {
        expect(screen.getAllByTestId('gallery-item').length).toBe(4);
    });
});