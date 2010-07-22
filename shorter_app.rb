require 'rubygems'
require 'sinatra'
require 'vendor/haml/lib/haml.rb'
require 'helpers/link'

set :sass, {:style => :compact }

get '/?' do
  haml :index
end

get '/stylesheets/style.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :style
end

not_found do
  'This is nowhere to be found'
end

error do
  'Sorry there was a nasty error - ' + env['sinatra.error'].name
end