# time-span

![Last version](https://img.shields.io/github/tag/@kikobeats/time-span.svg?style=flat-square)
[![NPM Status](https://img.shields.io/npm/dm/@kikobeats/time-span.svg?style=flat-square)](https://www.npmjs.org/package/time-span)

> A zero dependencies high resolution timing function.

## Install

```bash
$ npm install @kikobeats/time-span --save
```

## Usage

```js
const { setTimeout } = require('timers/promises')
const timeSpan = require('@kikobeats/time-span')

const duration = timeSpan()
await setTimeout(5000)

console.log(duration()) // => 5001.870375
```

## License

**time-span** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/time-span/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/Kikobeats/time-span/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
