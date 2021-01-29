import { formatToDayAndTime, getDifTimes, getHourAndMinute } from './DateUtils';

describe('DateUtils', () => {
  describe('getHourAndMinute', () => {
    it('should convert unix timestamp to hh:mm', () => {
      expect(getHourAndMinute(1611869626)).toBe('18:33');
    });
  });
  describe('FormatToDayAndTime', () => {
    it('should convert unix timestamp to string Day, dd Month year | hh:mm', () => {
      expect(formatToDayAndTime(1611869626)).toBe('Thu, 28 Jan 2021 | 18:33');
    });
  });
  describe('GetDifTimes', () => {
    it('should get the difference between Sunset and Sunrise, then the return will be xxh xxm ', () => {
      expect(getDifTimes({ sunrise: 1611824574, sunset: 1611868593 })).toBe(
        '12h 13m',
      );
    });
  });
});
