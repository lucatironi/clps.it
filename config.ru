require 'rubygems'
require 'sinatra'

require './clpsit_app'

root_dir = File.dirname(__FILE__)

set(:public_folder, File.join(root_dir, '/public'))
set(:views_directory, File.join(root_dir, '/views'))
set(:run, false)
set(:environment, ENV['RACK_ENV'].to_sym)
set(:raise_errors, true)

log = File.new('log/sinatra.log', 'a')
$stdout.reopen(log)
$stderr.reopen(log)

run Sinatra::Application