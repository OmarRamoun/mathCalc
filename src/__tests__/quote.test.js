import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

test('Render quote component', () => {
    const tree = renderer.create(<Quote />);
    expect(tree).toMatchSnapshot();
});