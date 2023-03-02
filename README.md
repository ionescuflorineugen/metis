# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
`

# Pages Structure

```
DOCS CATEGORIES - move this to the homepage
# add knowledge and resources that you've gained 
# make per page a SOAP (checklist + instructions) with best practices at the top with 3 arguments per pracice 
# followed by 3 relevant resources and a read more link for extra resources
----------------- 
> Development
    * concepts
        - paradigms
        - design patterns
        - architecture
        - algorithms
        - data structures
    * programming
        - web Design
        - javascript
        - typescript
        - node
        - database
        - frameworks
        - tools
        - devOps
        - games
    * wordpress
        - snippets
        - php
        - mySql
        - codex
        - themes
        - plugins
    * woocommerce (to add)
        - snippets
        - codex
        - themes
        - plugins
    * shopify
        - snippets - will redirect to the snippet page and from there you can go back here
        - codex
        - themes
        - plugins

> Digital
    * ui/ux
    * seo
    * graphic design
    * marketing
    * copywritting
    * sales
    * business

> Industries
    * ecommerce
    * freelance
        - interviews (to be deleted - goes to athena)
        - clients
```
```
SNIPPETS
```
```
COMPONENTS
```
```
TEMPLATES
```
```
ATHEMA
```

### Features
- [ x ] Write the press release
- [ - ] Update the website
- [ - ] Contact the media
