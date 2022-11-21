# frozen_string_literal: true

require 'leap_years'

RSpec.describe '#leap_years' do
  context 'divisible by 400' do
    it 'returns true for year 2000' do
      expect(leap_year?(2000)).to eq true
    end

    it 'returns true for year 2400' do
      expect(leap_year?(2400)).to eq true
    end
  end
end
