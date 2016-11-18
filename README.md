# Flix4Me
Flix4Me offers the ability to catalogue and rate one's favorite movies in a user-friendly interface. The goal is to eventually make this app the [Goodreads](http://www.goodreads.com) of movies! Stay tuned for future updates.

## Usage
Follow these steps to run this app locally:
1. Clone it (`git clone https://github.com/mcasciato/Flix4Me`)
2. Have [Postgres](https://www.postgresql.org/) installed and running
3. Install gems (`bundle install`)
4. Migrate the database (this was made using Rails 5, so the command is `rails db:migrate`)
5. Run `rails bower:install` to install front-end assets (Angular, Bootstrap, etc.)
6. Start the server (`rails s`)
7. Create an account and enjoy!

## Contributing
I welcome any feature updates and/or bug reports. Follow these steps to contribute:
1. Fork it (https://github.com/mcasciato/Flix4Me)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature`')
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

I will address any pull requests as timely as possible.

## License

(c) 2016 Michael Casciato under the [MIT License](LICENSE.md)
