import indexService from './index.service';

describe('IndexService', () => {
  it('is return the fixed message', () => {
    const actual = indexService.getData();
    expect(actual).toEqual({ hoge: 'Hello world! Express' });
  });
});
