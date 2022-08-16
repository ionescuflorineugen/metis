##### The Docs Have

> PAGES
>
> - simple md pages

```bash
# [add a md page]
/src/pages/helloMarkdown.md

# [hide a md page]
just add underscore

# [routing a md page]
/src/pages/index.js → [baseUrl]
/src/pages/foo.js → [baseUrl]/foo
/src/pages/foo/test.js → [baseUrl]/foo/test
/src/pages/foo/index.js → [baseUrl]/foo/

# -- [start-content inside page] --
---
id: part1
slug: part1.html
# If you want a document to be available at the root
# https://docusaurus.io/docs/
slug: /
title: my hello page title
description: my hello page description
hide_table_of_contents: false
---

# Hello

How are you?
# -- [en-content inside page] --
```

> - complex md pages

```bash
# [add a js page]
/src/pages/[page-dir]
/src/pages/[page-dir]/index.js

# react-code-------------------------------------------
import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.modules.css';

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p className={styles.container}>
          Support page
        </p>
      </div>
    </Layout>
  );
}

export default Hello;
# -------------------------------------------

/src/pages/[page-dir]/styles.modules.css
# css-code-------------------------------------------
.container {
    background-color: red;
}
# -------------------------------------------
```

> DOCS

```bash
---
id: doc-with-tags
title: A doc with tags
tags:
  - Demo
  - Getting started
---

## Hello from Docusaurus

Are you ready to create the documentation site for your open source project?

### Headers

will show up on the table of contents on the upper right

So that your users will know what this page is all about without scrolling down or even without reading too much.

### Only h2 and h3 will be in the TOC by default.

You can configure the TOC heading levels either per-document or in the theme configuration.

The headers are well-spaced so that the hierarchy is clear.

- lists will help you
- present the key points
- that you want your users to remember
  - and you may nest them
    - multiple times

### Custom id headers {#custom-id}

With `{#custom-id}` syntax you can set your own header id.
```

> SIDEBAR

```
---
sidebar_position: 1
id: greet
title: Hello
tags:
  - Demo
  - Getting started
---
```

> BLOG

```bash
# [add posts]
website/blog/2019-09-05-hello-docusaurus-v2.md

---
title: Welcome Docusaurus v2
description: This is my first post on Docusaurus 2.
slug: welcome-docusaurus-v2
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [hello, docusaurus-v2]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

Welcome to this blog. This blog is created with [**Docusaurus 2**](https://docusaurus.io/).

# to remove extra content
<!--truncate-->

This is my first post on Docusaurus 2.

A whole bunch of exploration to follow.

# blog-list
---
title: Truncation Example
---

All these will be part of the blog post summary.

Even this.

<!--truncate-->

But anything from here on down will not be.

Not this.

Or this.

# blog post date
Single file	2021-05-28-my-blog-post-title.md
date: 2021-09-13T10:00

# blog post authors
---
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
    email: jimarcey@gmail.com
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
---


```

> MD features

````javascript
// tabs
<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>

// code blocks
//```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
// ```

// highlight lines
//```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
// ```

// interactive code
//```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
//```

// admonitions
// def
:::note Definition
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::

// tip
:::tip Tip
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::

// danger
:::danger Warning
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::

// resources
:::info Resources
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::

// :::caution
// Some **content** with _markdown_ `syntax`. Check [this `api`](#).
// :::


// headings
## Level 2 title
### Level 3 title
#### Level 4 title
### Hello World {#my-explicit-id}

// referencing docs
// I am referencing a [document](doc2.md).
// Reference to another [document in a subfolder](subfolder/doc3.md).
// [Relative document](../otherFolder/doc4.md) referencing works as well.

// external link
// **[docusaurus.new](https://docusaurus.new)**

/* text empasize
- Empasys: **bold**
- Small example `text`
- Three layer list:
- That you want your users to remember
  - and you may nest them
    - multiple times
*/

/*
-- assets--
# Your doc
/website/docs/myFeature.mdx

# Some assets you want to use
/website/docs/assets/docusaurus-asset-example-banner.png
/website/docs/assets/docusaurus-asset-example.docx

-- files--
# My Markdown page

<a target="\_blank" href={require('./assets/docusaurus-asset-example.docx').default}> Download this docx </a>

or

[Download this docx using Markdown](./assets/docusaurus-asset-example.docx)
*/
````

### DOCS INFO ARCHITECTURE

```
[welcome-page]
      |__[sections]
            |__

```
