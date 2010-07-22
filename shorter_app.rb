require 'rubygems'
require 'sinatra'
require 'yaml'
require 'sass'
require 'haml'
require 'helpers/link'

set :sass, {:style => :compact }

get '/?' do
  haml :index
end