# HokKita Website

Static Corporate Website for HokKita.<br>
This project created using [Jekyll](https://jekyllrb.com/) powered by [RubyGems](https://rubygems.org/).

## Prerequisites

Jekyll requires the following:

* Ruby version 2.5.0 or higher
* RubyGems
* GCC and Make

See [Requirements](https://jekyllrb.com/docs/installation/#requirements) for guides and details.

## Instructions

1. Install all [prerequisites](https://jekyllrb.com/docs/installation/).

2. Install the jekyll and bundler [gems](https://jekyllrb.com/docs/ruby-101/#gems).

```sh
gem install jekyll bundler
```

3. Clone the repository from GitHub

```sh
git clone https://github.com/hokkita/hokkita-website.git
```

4. Change into your project directory.

```sh
cd hokkita-website
```

5. Build the site and make it available on a local server.

```sh
bundle exec jekyll serve
```

> If you are using Ruby version 3.0.0 or higher, step 5 may fail. You may fix it by adding `webrick` to your dependencies: 
>> ```sh
>> bundle add webrick
>> ```

6. Browse to [http://localhost:4000](http://localhost:4000/)

> Pass the `--livereload` option to `serve` to automatically refresh the page with each change you make to the source files: 
>> ```sh
>> bundle exec jekyll serve --livereload
>> ```

If you encounter any errors during this process, check that you have installed all the prerequisites in [Requirements](https://jekyllrb.com/docs/installation/#requirements). If you still have issues, see [Troubleshooting](https://jekyllrb.com/docs/troubleshooting/#configuration-problems).

> Installation varies based on your operating system. See [Jekyll guides](https://jekyllrb.com/docs/installation/#guides) for OS-specific instructions.