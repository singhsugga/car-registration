import { SanatizeHTMLPipe } from './sanatize-html.pipe';

describe('SanatizeHTMLPipe', () => {
  it('create an instance', () => {
    const pipe = new SanatizeHTMLPipe();
    expect(pipe).toBeTruthy();
  });
});
