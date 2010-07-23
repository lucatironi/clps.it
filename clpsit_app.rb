require 'rubygems'
require 'sinatra'
require 'haml'
require 'yaml'
require 'helpers/link'
require 'active_record'
require 'digest/md5'

dbconfig = YAML.load(File.read('config/database.yml'))
ActiveRecord::Base.establish_connection dbconfig['development']

set :sass, {:style => :compact }

class Url < ActiveRecord::Base
  before_create :generate_short_url

  URL_CHARS = ('0'..'9').to_a + %w(b c d f g h j k l m n p q r s t v w x y z) + %w(B C D F G H J K L M N P Q R S T V W X Y Z - _)
  URL_BASE = URL_CHARS.size

  def generate_short_url
    o =  [('a'..'z'),('A'..'Z'),('0'..'9'),'-','_'].map{|i| i.to_a}.flatten
    self.short = (0..4).map{ o[rand(o.length)]  }.join
    # Ensure uniqueness of the token..
    generate_short_url unless Url.find(:first, :conditions => {:short => self.short}).nil?
  end

  def add_click
    self.clicks = self.clicks + 1
    save
  end
end

get '/' do
  @urls = Url.find(:all)
  haml :index
end

post '/collapse' do
  hash = Digest::MD5.hexdigest(params[:url][:full])
  @url =  Url.find(:first, :conditions => {:hash => hash})
  unless @url.nil?
    redirect "/?short=#{@url.short}"
  else
    @url = Url.new(params[:url])
    @url.hash = hash
    if @url.save
      redirect "/?short=#{@url.short}"
    else
      "There was a problem saving that..."
    end
  end
end

get '/stylesheets/style.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :style
end

get '/:short' do
  @url = Url.find(:first, :conditions => {:short => params[:short]})
  unless @url.nil?
    @url.add_click
    redirect @url.full, 301
  else
    "There's no url with that short code!"
  end
end

not_found do
  "This is nowhere to be found"
end

error do
  "Sorry there was a nasty error - " + env['sinatra.error'].name
end