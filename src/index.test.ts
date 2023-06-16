import { arabicToRoman, romanToArabic } from '.';
import * as chai from 'chai';
const should = chai.should();

describe('Should convert to Roman numerals', () => {
  it('1 returns I', () => {
    should.equal('I', arabicToRoman(1));
  });
  it('5 returns V', () => {
    should.equal('V', arabicToRoman(5));
  });
  it('3 returns III', () => {
    should.equal('III', arabicToRoman(3));
  });
  it('4 returns IV', () => {
    should.equal('IV', arabicToRoman(4));
  });
  it('9 returns IX', () => {
    should.equal('IX', arabicToRoman(9));
  });
  it('39 returns XXXIX', () => {
    should.equal('XXXIX', arabicToRoman(39));
  });
  it('246 returns CCXLVI', () => {
    should.equal('CCXLVI', arabicToRoman(246));
  });
  it('789 returns DCCLXXXIX', () => {
    should.equal('DCCLXXXIX', arabicToRoman(789));
  });
  it('2421 returns MMCDXXI', () => {
    should.equal('MMCDXXI', arabicToRoman(2421));
  });
});
describe('Should convert to Arabic numerals', () => {
  it('I returns 1', () => {
    should.equal(1, romanToArabic("I"));
  });
  it('V returns 5', () => {
    should.equal(5, romanToArabic('V'));
  });
  it('III returns 3', () => {
    should.equal(3, romanToArabic('III'));
  });
  it('IV returns 4', () => {
    should.equal(4, romanToArabic('IV'));
  });
  it('IX returns 9', () => {
    should.equal(9, romanToArabic('IX'));
  });
  it('XXXIX returns 39', () => {
    should.equal(39, romanToArabic('XXXIX'));
  });
  it('CCXLVI returns 246', () => {
    should.equal(246, romanToArabic('CCXLVI'));
  });
  it('DCCLXXXIX returns 789', () => {
    should.equal(romanToArabic('DCCLXXXIX'), 789);
  });
  it('MMCDXXI returns 2421', () => {
    should.equal(2421, romanToArabic('MMCDXXI'));
  });
});