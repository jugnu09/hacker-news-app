import { HostnamePipe } from './hostname.pipe';

describe('DomainPipe', () => {
  it('create an instance', () => {
    const pipe = new HostnamePipe();
    expect(pipe).toBeTruthy();
  });

  it('returns hostname when url is passed', () => {
    const pipe = new HostnamePipe();
    expect(pipe.transform('https://www.resonacle.com')).toEqual('resonacle.com');
    expect(pipe.transform('https://credit-suisse.com')).toEqual('credit-suisse.com');
    expect(pipe.transform('')).toEqual('');
  });
});