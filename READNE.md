# reepo

> Run setup to initialize new repository

Always, always, clone the repository from github, reinitialize the repository, run npm install and create first commit.

It's not a fun work, just need reepo to help me.

##Install

`npm install reepo -g`

## Usage

```
Usage
  $ reepo <option>

Options
  -a/--all        Run full steps
  -c/--clean      Clean git for repository
  -i/--install    Npm install
  -I/--init       Init git && commit
  -h/--help       Help
```
## Note
Make sure you're on the correct path that contain the hidden .git folder, in most cases it's your repository root path. Run `reepo -a` or `reepo` will delete the .git folder and all git records of repository. So you should use reepo carefully.

## License

MIT