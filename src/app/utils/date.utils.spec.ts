import DateUtils from './date.utils';
import MockDate from 'mockdate';

describe('DateUtils', () => {
  describe('getCommentTime', () => {
    it('should return creation date string when called with a unix time', () => {
      MockDate.set('2021-11-05');
      const unixTime = 1635893514;
      const result = DateUtils.getCommentTime(unixTime);
      expect(result).toEqual('2 days ago');
    });

    it('should return undefined when called with undefined', () => {
      const result = DateUtils.getCommentTime(undefined);

      expect(result).toBeUndefined();
    });
  });
});
