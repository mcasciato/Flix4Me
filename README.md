# Flix4Me
Flix4Me offers the ability to catalogue and rate one's favorite movies in a user-friendly interface. The goal is to eventually make this app the [Goodreads](http://www.goodreads.com) of movies! Stay tuned for future updates.

## Usage
Follow these steps to run this app locally:
- Clone it (`git clone https://github.com/mcasciato/Flix4Me`)
- Have [Postgres](https://www.postgresql.org/) installed and running
- Install gems (`bundle install`)
- Migrate the database (this was made using Rails 5, so the command is `rails db:migrate`)
- Run `rails bower:install` to install front-end assets (Angular, Bootstrap, etc.)
- Start the server (`rails s`)
- Create an account and enjoy!

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/mcasciato/flix4me. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org/) code of conduct.
## License

(c) 2016, Michael Casciato under the [MIT License](LICENSE.md)
