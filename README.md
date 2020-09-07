<p align="center">
	<img src="https://user-images.githubusercontent.com/10063864/45442352-c961ab80-b68f-11e8-84a3-e920f05a313c.png" width={400} alt="Rinse" />
</p>

> Rinse, React, repeat. A boilerplate to build a React component library.

## Get Started

To start your own React component library, clone this repository and start your own Git journey!

```bash
$ git clone https://github.com/cwlsn/rinse-react cool-name
$ cd cool-name
$ rm -rf .git
$ git init
```

## Development and Storybook

You can easily develop and interact with your components by using Storybook. To run the local server, simply run:

```bash
$ npm run setup
$ npm run storybook
```

The setup script will install the dependencies, validate that the tests pass and build the library.

Navigate to [http://localhost:9001](http://localhost:9001) to view your stories. They should automatically update as you develop.

Storybook will pick up any story named `{component}.stories.js` file in a component folder.

You may need to update your Node versions to latest to accomodate Babel 7 and Webpack 4.
