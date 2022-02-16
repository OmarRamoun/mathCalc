import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

test('Render components', () => {
    const tree = renderer.create(<Router><Header /></Router>);
    expect(tree).toMatchSnapshot();
});