import calculate from '../logic/calculate';

describe('User press AC key', () => {
  it('Clear everything', () => {
    expect(
      calculate(
        {
          total: '8',
          next: '1',
          operation: '+',
        },
        'AC',
      ),
    ).toEqual({
      total: '0',
      next: '',
      operation: '',
    });
  });

  it('Clear everything', () => {
    expect(
      calculate(
        {
          total: '9',
          next: '5',
          operation: '+',
        },
        'AC',
      ),
    ).not.toEqual({
      total: '9',
      next: '5',
      operation: '+',
    });
  });
});

describe('User press % key', () => {
  it('It percetage the number', () => {
    expect(
      calculate(
        {
          next: '8',
        },
        '%',
      ),
    ).toEqual({
      next: '0.08',
    });
  });
  it('It percetage the number', () => {
    expect(
      calculate(
        {
          next: '8',
        },
        '%',
      ),
    ).not.toEqual({
      next: '0',
    });
  });
});

describe('User press +/- key', () => {
  it('It changes to negative the number', () => {
    expect(
      calculate(
        {
          next: '9',
        },
        '+/-',
      ),
    ).toEqual({
      next: '-9',
    });
  });
  it('It percetage the number', () => {
    expect(
      calculate(
        {
          next: '9',
        },
        '+/-',
      ),
    ).not.toEqual({
      next: '0',
    });
  });
});

describe('User can enter a number', () => {
  it('Number from (0-9)', () => {
    let buttonName = '3';
    let result = calculate(
      {
        total: '',
        next: '',
        operation: '',
      },
      buttonName,
    );
    expect(result.next).toEqual('3');
    buttonName = '4';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('34');
  });
});

describe('User can get the final answer', () => {
  it(' When User press the (=) button', () => {
    const result = calculate(
      {
        total: '10',
        next: '3',
        operation: '-',
      },
      '=',
    );
    expect(result.total).toEqual('7');
  });
});

describe('User can create a decimal', () => {
  it('When user press (.)', () => {
    let buttonName = '88';
    let result = calculate(
      {
        total: '',
        next: '',
        operation: '',
      },
      buttonName,
    );
    expect(result.next).toEqual('88');
    buttonName = '.';
    result = calculate(result, buttonName);
    buttonName = '4';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('88.4');
  });
});
