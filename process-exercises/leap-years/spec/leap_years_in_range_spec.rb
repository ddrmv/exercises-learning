require 'leap_years_in_range'

RSpec.describe '#leap_years_in_range' do
  it 'returns empty array for 2001 to 2002' do
    expect(leap_years_in_range(2001, 2002)).to eq []
  end
end