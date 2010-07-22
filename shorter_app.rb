require 'rubygems'
require 'vendor/sinatra/lib/sinatra.rb'
require 'sass'
require 'haml'
require 'helpers/link'

set :sass, {:style => :compact }

get '/?' do
  haml :index
end