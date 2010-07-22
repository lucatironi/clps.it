require 'rubygems'
require 'vendor/sinatra/lib/sinatra.rb'

require 'shorter_app.rb'

root_dir = File.dirname(__FILE__)

set(:public, File.join(root_dir, '/public'))
set(:views_directory, File.join(root_dir, '/views'))
set(:run, false)
set(:environment, ENV['RACK_ENV'].to_sym)
set(:raise_errors, true)

disable :run

log = File.new('log/sinatra.log', 'a')
$stdout.reopen(log)
$stderr.reopen(log)

run Sinatra::Application