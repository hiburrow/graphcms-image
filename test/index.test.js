import { expect } from 'chai';
import { srcSet, constructURL, imgSizes } from '../src/Utils';
import { presetImageSizes } from '../src/index.js';

describe('Utils tests', () => {
  const timeout = 3000;

  test('should construct correct srcSet', async () => {
    const width = 1200;
    const constructedURL = constructURL('test', false, 'https://burrow.com');
    const widths = [...presetImageSizes, width];
    const srcSetImgs = srcSet(constructedURL, widths, 'crop', []);
    expect(srcSetImgs).to.equal('https://burrow.com/resize=w:640,fit:crop/compress/test 640w,\n' +
    'https://burrow.com/resize=w:768,fit:crop/compress/test 768w,\n' +
    'https://burrow.com/resize=w:1024,fit:crop/compress/test 1024w,\n' +
    'https://burrow.com/resize=w:1366,fit:crop/compress/test 1366w,\n' +
    'https://burrow.com/resize=w:1600,fit:crop/compress/test 1600w,\n' +
    'https://burrow.com/resize=w:1920,fit:crop/compress/test 1920w,\n' +
    'https://burrow.com/resize=w:1200,fit:crop/compress/test 1200w');
  }, timeout);

  test('should get correct imgSizes', async () => {
    const allImgSizes = imgSizes(4480);
    expect(allImgSizes).to.equal('(max-width: 4480px) 100vw, 4480px');
  }, timeout);
});
