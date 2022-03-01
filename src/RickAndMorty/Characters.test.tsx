import { render } from '@testing-library/react';
import Characters from "./Characters";

test ('componentsReactAsIntended', () => {

   /* const character = {
        name: 'Rick',
        key: 1234,
        pic: 'http://imageurl',
        location: 'Earth',
        status: 'Alive',
        species: 'Human'


    }; */

    const { getByTestId } = render (<Characters name={'Rick'} key={1234} pic={'http://imageurl'} species={'Human'} status={'Alive'} location={'Earth'}/>)

    const imageTag = getByTestId('character-image') as HTMLImageElement;
    expect(imageTag.src).toEqual('http://imageurl/');
    expect(getByTestId('character-name').textContent).toEqual('Name: Rick');
    expect(getByTestId('character-location').textContent).toEqual('Location: Earth')
    expect(getByTestId('character-status').textContent).toEqual('Status: Alive');
    expect(getByTestId('character-species').textContent).toEqual('species: Human')
})

