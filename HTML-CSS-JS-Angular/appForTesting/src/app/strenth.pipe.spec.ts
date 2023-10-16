import { StrenthPipe } from './strenth.pipe';

describe('StrenthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrenthPipe();
    expect(pipe).toBeTruthy();
  });
  it('test pipe',()=>{
    const  sp=new StrenthPipe;
    expect(sp.transform(5)).toEqual('weak')
  })
});
