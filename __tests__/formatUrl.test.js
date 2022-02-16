import {
  formatUrlToDbName,
  formatUrlToRoute,
} from '../helpers/formatUrl';

describe('format url to name DB name function', () => {
  it('trims white spaces', () => {
    expect(formatUrlToDbName('drill ')).toEqual('drill');
    expect(formatUrlToDbName(' drill')).toEqual('drill');
    expect(formatUrlToDbName(' drill ')).toEqual('drill');
  });
  it('works with encoded spaces in url', () => {
    expect(formatUrlToDbName('drill bits')).toEqual(
      'drill bits'
    );
    expect(formatUrlToDbName('non%20core%20bits')).toEqual(
      'non core bits'
    );
  });

  it('works with dashes in url', () => {
    expect(formatUrlToDbName('drill-bits')).toEqual(
      'drill bits'
    );
    expect(formatUrlToDbName('non-core-bits')).toEqual(
      'non core bits'
    );
  });
});

describe('format url from DB name to route function', () => {
  it('trims white spaces', () => {
    expect(formatUrlToRoute('drill ')).toEqual('drill');
    expect(formatUrlToRoute(' drill')).toEqual('drill');
    expect(formatUrlToRoute(' drill ')).toEqual('drill');
  });

  it('works with encoded spaces in url', () => {
    expect(formatUrlToRoute('drill bits')).toEqual(
      'drill-bits'
    );
    expect(formatUrlToRoute('non%20core%20bits')).toEqual(
      'non-core-bits'
    );
  });

  it('works with spaces in url', () => {
    expect(formatUrlToRoute('drill bits')).toEqual(
      'drill-bits'
    );
    expect(formatUrlToRoute('non core bits')).toEqual(
      'non-core-bits'
    );
  });
});
