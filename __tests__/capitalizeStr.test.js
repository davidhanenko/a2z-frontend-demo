import capitalizeStr from '../helpers/capitalizeStr';

describe('capitalize first letter in a string function', () => {
  it('works with single word string', () => {
    expect(capitalizeStr('word')).toEqual('Word');
    expect(capitalizeStr('a')).toEqual('A');
  });
  it('trims spaces', () => {
    expect(capitalizeStr(' word')).toEqual('Word');
    expect(capitalizeStr(' a')).toEqual('A');
    expect(capitalizeStr(' word ')).toEqual('Word');
    expect(capitalizeStr(' a ')).toEqual('A');
    expect(capitalizeStr(' two words')).toEqual(
      'Two words'
    );
  });
  it('works with multi-words string', () => {
    expect(capitalizeStr('non core bits')).toEqual(
      'Non core bits'
    );
    expect(capitalizeStr('non-core bits')).toEqual(
      'Non-core bits'
    );
  });
});
