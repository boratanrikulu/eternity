
### Usage of Posts

Eternity is configurable and you can change feature behaviours by setting variables.

Here's a basic post structure. You can basically use `tags` to set which pages will have this post. We suggest to use `work` for homepage and `archive` for all posts. (Note: you can change their names too).  
If you want to create a new page, just add it as a new tag. (`my-image-1.jpg` should be located in `/assets/images` folder of your project)

```yaml
---
images:
- /images/my-image-1.jpg
title: Here's my first post!!
tags:
- work
---
```

You can set `date` value for your posts. It will be used in Post page and for posts sorting. If you want, you can use `weight` value for sorting. (Note: if you won't set a `date`, we check `exif` value of the image to use in post.)

```yaml
---
weight: 9
images:
- /images/my-image-1.jpg
title: Here's my first post!!
tags:
- work
- first
date: 2022-07-24
---
```

You can use multiple images by adding them to `images` array. Default view is `row`. But if you want to set them as `column`, you can use `multipleColumn` value. Both local images and remote images are supported. If you use remote image, it will be downloaded.


```yaml
---
weight: 9
images:
- /images/my-image-1.jpg
- /images/my-image-2.jpg
multipleColumn: true
title: Here's my first post!!
tags:
- work
- first
date: 2022-07-24
---
```

When you use multiple images, first image will be used as thumbnail in posts page. If you want to use different image, you can use `mainImage` variable.

```yaml
---
weight: 9
images:
- /images/my-image-1.jpg
- /images/my-image-2.jpg
mainImage: /images/different-image.jpg
multipleColumn: true
title: Here's my first post!!
tags:
- work
- first
date: 2022-07-24
---
```

If you want to hide exif value for a post, you can use `hideExif` variable. Also there's available `hidetitle` and `hideDate` variables. We used that variables in about page to be able to create a single page with using same layout.

```yaml
---
weight: 9
images:
- /images/my-image-1.jpg
- /images/my-image-2.jpg
multipleColumn: true
title: Here's my first post!!
tags:
- work
- first
date: 2022-07-24
hideExif: true
---
```

You can use `title`, `subtitle`, `url` variables for the post.

```yaml
---
images:
- /images/about.png
title: About!!
subtitle: Here's who am I.
url: me
hideTitle: true
hideExif: true
hideDate: true
---
```

Markdown is fully supported.

```yaml
---
weight: 9
images:
- /images/my-image-1.jpg
- /images/my-image-2.jpg
multipleColumn: true
title: Here's my first post!!
tags:
- work
- first
date: 2022-07-24
---

## Markdown

You can use **Markdown** format to write **your story**.

### Subtitle

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem, laborum impedit doloremque ducimus repellat sapiente aut qui quae provident, cum vitae atque eius earum labore. Quae quod rem aliquid!

Some list

1. A b c
2. A b c
3. A b c 

```

For landing page (_index.md), you can use `desc` array to set your description, under the enter button.
```yaml
---
desc:
- Eternity is a minimalist Hugo theme
- designed for portfolio sites with a fresh feel.
---
```

For landing page (_index.md), you can use `featuredTags` array to show some tags in Landing Page.
```yaml
featuredTags:
  - title: people
    image: https://source.unsplash.com/random?people&1649630128
    url: /tags/people/
  - title: nature
    image: https://source.unsplash.com/random?nature&17346933
    url: /tags/nature/
```
