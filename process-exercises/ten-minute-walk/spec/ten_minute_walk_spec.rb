require 'ten_minute_walk'

RSpec.describe '#ten_minute_walk?' do
  it 'returns false on empty array input' do
    expect(ten_minute_walk?([])).to eq false
  end
end