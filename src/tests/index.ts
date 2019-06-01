import { calculateZones } from '../';
import { testCase1 } from './fixtures/test-cases';

test('test with FTP number 234', () => {
  const results = calculateZones(234);
  for (let i = 0; i < results.length; i++) {
    expect(results[i]).toBe(testCase1[i]);
  }
});

test('test with negative numbers', () => {
  const results = calculateZones(-234);
  expect(results).toBe(null);
});




