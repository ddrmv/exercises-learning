# frozen_string_literal: true

require 'closest_leap_year'

RSpec.describe '#closest_leap_year' do
  it 'returns same year if input is leap year' do
    expect(closest_leap_year(2000)).to eq 2000
  end
end