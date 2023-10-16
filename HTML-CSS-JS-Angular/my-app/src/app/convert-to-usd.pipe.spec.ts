import { ConvertToUSDPipe } from './convert-to-usd.pipe';

describe('ConvertToUSDPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToUSDPipe();
    expect(pipe).toBeTruthy();
  });
});
