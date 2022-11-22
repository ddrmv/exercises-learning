# frozen_string_literal: true

require 'leap_years'

RSpec.describe '#leap_years' do
  context 'divisible by 400' do
    it 'returns true for year 2000, 2400' do
      expect(leap_year?(2000)).to eq true
      expect(leap_year?(2400)).to eq true
    end
  end

  context 'divisible by 100 but not 400' do
    it 'returns true for year 1500, 1900' do
      expect(leap_year?(1500)).to eq false
      expect(leap_year?(1900)).to eq false
    end
  end

  context 'divisible by 4 but not 100' do
    it 'returns true for year 2004' do
      expect(leap_year?(1900)).to eq false
    end
  end

  context 'not divisible by 4' do
    it 'returns false for 2009, 2010' do
      expect(leap_year?(2009)).to eq false
      expect(leap_year?(2010)).to eq false
    end
  end
end
