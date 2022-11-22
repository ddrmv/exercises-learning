# frozen_string_literal: true

require 'leap_years'

RSpec.describe '#leap_years' do
  context 'divisible by 400' do
    it 'returns true for year 2000' do
      expect(leap_year?(2000)).to eq true
    end
  end

  context 'divisible by 100 but not 400' do
    it 'returns true for year 1500' do
      expect(leap_year?(1500)).to eq false
    end
  end

  context 'divisible by 4 but not 100' do
    it 'returns true for year 2004' do
      expect(leap_year?(2004)).to eq true
    end
  end

  context 'not divisible by 4' do
    it 'returns false for 2010' do
      expect(leap_year?(2010)).to eq false
    end
  end

  it 'raises error for input that is not a number' do
    expect { leap_year?('2000') }.to raise_error 'Year should be a number'
  end
end
