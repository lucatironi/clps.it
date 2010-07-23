class CreateUrls < ActiveRecord::Migration
  def self.up
    create_table :urls do |t|
      t.string :full
      t.string :short
      t.string :md5_hash
      t.integer :clicks, :default => 1

      t.timestamps
    end
  end

  def self.down
    drop_table :urls
  end
end