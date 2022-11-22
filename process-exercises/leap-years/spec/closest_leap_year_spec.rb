# frozen_string_literal: true

require 'closest_leap_year'

RSpec.describe '#closest_leap_year' do
  it 'returns same year if input is leap year' do
    expect(closest_leap_year(2000)).to eq 2000
  end

  it 'returns closest (one down, up)' do
    expect(closest_leap_year(2001)).to eq 2000
    expect(closest_leap_year(1999)).to eq 2000
  end

  it 'returns two up when equidistant from two' do
    expect(closest_leap_year(2006)).to eq 2008
  end

  it 'returns correctly around non-leap century' do
    expect(closest_leap_year(1900)).to eq 1904
    expect(closest_leap_year(1899)).to eq 1896
  end

  it 'returns 0 for year 0, as per ISO specification' do
    expect(closest_leap_year(0)).to eq 0
  end

  it 'raises error for invalid input' do
      expect { closest_leap_year(2000.1) }.to raise_error 'Year should be an integer'
  end
end
