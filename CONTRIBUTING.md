# Contributing to where-is-mario

This website is a fun project and should therefore be considered as such. If you have any ideas how to improve the site, please feel free to [submit an issue](https://github.com/saschazar21/where-is-mario/issues) or [submit a pull request](https://github.com/saschazar21/where-is-mario/pulls).

## Updating Mario's location 🌍

Mario has travelled again? Great – so please let us know where you have seen him the last time. Add a new entry to the [`history.json`](https://github.com/saschazar21/where-is-mario/blob/main/src/_data/history.json) file using the following guidelines:

- Newest entries always go to the top of the list! (This is the only way to ensure that the newest entries are always shown on the front page below the headline.)
- **Mandatory** information is considered the following:
  - `location`: the data structure describing Mario's current location – consisting of the following fields:
    - `name`: the name of the location (e.g. Torre Mapfre)
    - `city`: the city where Mario currently lives (e.g. Barcelona)
    - `coordinates`: the coordinates of the location (e.g. `{ latitude: 41.3875, longitude: 2.197}`, not currently used, but might be in the future)
  - `date`: the date when Mario moved to that location
- `media` entries currently support **one** video (hosted on youtube, other providers are work in progress) and/or a list of image IDs (hosted on imgur, other providers work in progress as well). This information is optional.

## Contributing to the website 🛠️

This website is a statically generated, [AMP-compatible](https://amp.dev) [Eleventy](https://11ty.dev) website hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

There's still a lot to do, especially when it comes to improving the CSS styles, as well as image embeds (along with other media).

You're more than welcome to express your thoughts or suggestions using a [pull request](https://github.com/saschazar21/where-is-mario/pulls).

### Adding shortcodes ✨

Currently image embeds work using [Nunjucks shortcodes](https://www.11ty.dev/docs/shortcodes/). If you want to add suppport for other platforms or providers (e.g. Google Maps), please do so by opening a pull request. Examples of existing shortcodes are available in the [\_11ty/shortcodes](https://github.com/saschazar21/where-is-mario/blob/main/_11ty/shortcodes) directory.

As of [v1.0.0-beta.8](https://github.com/11ty/eleventy/releases/tag/v1.0.0-beta.8), nested asynchronous shortcodes are not yet supported. Support has been announced for `v1.0.0-beta.9` – until then, please make sure to only add synchronous shortcodes.
