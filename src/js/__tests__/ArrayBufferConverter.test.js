import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../app';

test('testing class ArrayBuffer', () => {
  const testgetBuffer  = getBuffer();
  
  const testClass = new ArrayBufferConverter()
  testClass.load(testgetBuffer);
  
  expect(testClass.toString()).toString({"data":{"user":{"id":1,"name":"Hitman","level":10}}});
});
