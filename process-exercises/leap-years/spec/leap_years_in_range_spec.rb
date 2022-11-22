# frozen_string_literal: true

require 'leap_years_in_range'

RSpec.describe '#leap_years_in_range' do
  it 'returns empty array for 2001 to 2002' do
    expect(leap_years_in_range(2001, 2002)).to eq []
  end

  it 'returns matches on start and end dates' do
    expect(leap_years_in_range(2000, 2004)).to eq [2000, 2004]
  end

  it 'returns all matches for 1999 to 2010' do
    expect(leap_years_in_range(1999, 2010)).to eq [2000, 2004, 2008]
  end

  it 'returns all matches when end year is first - 2010 to 1999' do
    expect(leap_years_in_range(1999, 2010)).to eq [2000, 2004, 2008]
  end

  context 'on incorrect input' do
    it 'raises an error if input years are not numbers' do
      expect { leap_years_in_range('2000', 2000) }.to raise_error 'Year should be an integer'
    end
  end
end
