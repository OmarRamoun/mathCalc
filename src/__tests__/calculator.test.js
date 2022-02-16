import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

test('Render components', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
});