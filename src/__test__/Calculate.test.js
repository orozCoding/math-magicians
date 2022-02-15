import calculate from '../logic/calculate';

describe('User press AC key', () => {
  it('Clear everything', () => {
    expect(
      calculate(
        {
          total: '5',
          next: '3',
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
          total: '5',
          next: '3',
          operation: '+',
        },
        'AC',
      ),
    ).not.toEqual({
      total: '5',
      next: '3',
      operation: '+',
    });
  });
});

describe('User press % key', () => {
  it('It percetage the number', () => {
    expect(
      calculate(
        {
          next: '5',
        },
        '%',
      ),
    ).toEqual({
      next: '0.05',
    });
  });
  it('It percetage the number', () => {
    expect(
      calculate(
        {
          next: '5',
        },
        '%',
      ),
    ).not.toEqual({
      next: '0',
    });
  });
});

describe('User press +/- key', () => {
  it('It percetage the number', () => {
    expect(
      calculate(
        {
          next: '5',
        },
        '+/-',
      ),
    ).toEqual({
      next: '-5',
    });
  });
  it('It percetage the number', () => {
    expect(
      calculate(
        {
          next: '5',
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
    let buttonName = '8';
    let result = calculate(
      {
        total: '',
        next: '',
        operation: '',
      },
      buttonName,
    );
    expect(result.next).toEqual('8');
    buttonName = '4';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('84');
  });
});

describe('User can get the final answer', () => {
  it(' When User press the (=) button', () => {
    const result = calculate(
      {
        total: '4',
        next: '3',
        operation: '-',
      },
      '=',
    );
    expect(result.total).toEqual(1);
  });
});

describe('User can create a decimal', () => {
  it('When user press (.)', () => {
    let buttonName = '8';
    let result = calculate(
      {
        total: '',
        next: '',
        operation: '',
      },
      buttonName,
    );
    expect(result.next).toEqual('8');
    buttonName = '.';
    result = calculate(result, buttonName);
    buttonName = '4';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('8.4');
  });
});
