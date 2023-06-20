import { render, screen } from 'src/mocks/test-utils';
import Login from '../Login';

describe('Login', () => {
  beforeEach(() => render(<Login />));
  it('should have the title login', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Login');
  });
});
