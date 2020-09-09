<p align="center">
	<img src="https://raw.githubusercontent.com/jsondavis/rinse-react/master/rinse.svg" width={300} alt="Rinse" />
</p>

> Rinse, React, repeat. A boilerplate to build a React component library.

## Get Started

To start your own React component library using this as a template, clone this repository a

```bash
$ git clone https://github.com/jsondavis/rinse-react <app-name>
$ cd <app-name>
```

At this point you could opt to keep git history and just alter the remote origin. Another option is to remove the git directory as follows and just reinitialize the repo.

```bash
$ rm -rf .git
$ git init
```

## Development and Storybook

You can easily develop and interact with your components by using Storybook. To run the local server, simply run:

```bash
$ npm run setup
$ npm run start
```

The setup script will install the dependencies, validate that the tests pass and build the library.

Navigate to [http://localhost:6006](http://localhost:6006) to view your stories. They should automatically update as you develop.

Storybook will pick up any story named `{component}.stories.js` file in any sub directory of src.
