require 'rails_helper'
describe "log in successful", :type => :request do
before do
    post '/api/v1/users/login', params: { :name => 'mason',}
  end
it 'returns user object' do
    expect(JSON.parse(response.body)['user']).to_not be_empty
  end
it 'returns the users tasks' do
    expect(JSON.parse(response.body)['tasks']).to have_attributes(length: 3)
  end
end