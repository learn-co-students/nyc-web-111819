require 'bundler/setup' # requiring bundler
Bundler.require         # use bundler to require everythig in gemfile

# This is just what sqlite3 gem expects us to do for it to connect to our database.
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/development.sqlite"
)

ActiveRecord::Base.logger = Logger.new(STDOUT)

require_all 'app'       # use the require_all to load everything in app folder.