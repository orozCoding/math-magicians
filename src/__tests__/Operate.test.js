import operate from '../logic/operate';

describe('User can use operations', () => {
  test('Division(÷) operation', () => {
    const result = operate('30', '2', '÷');
    expect(result).toEqual('15');
  });

  test('Times(X) operation', () => {
    const result = operate('200', '3', 'x');
    expect(result).toEqual('600');
  });

  test('Minus(-) operation', () => {
    const result = operate('55', '5', '-');
    expect(result).toEqual('50');
  });

  test('Plus(+) operation', () => {
    const result = operate('5', '15', '+');
    expect(result).toEqual('20');
  });
});
