import operate from '../logic/operate';

describe('User can use operations', () => {
  test('Division(÷) operation', () => {
    const result = operate('10', '2', '÷');
    expect(result).toEqual('5');
  });

  test('Times(X) operation', () => {
    const result = operate('100', '3', 'x');
    expect(result).toEqual('300');
  });

  test('Minus(-) operation', () => {
    const result = operate('10', '7', '-');
    expect(result).toEqual('3');
  });

  test('Plus(+) operation', () => {
    const result = operate('150', '15', '+');
    expect(result).toEqual('165');
  });
});
