---
images:
- /images/about.png
title: about
url: about
hideTitle: true
hideExif: true
hideDate: true
---

<div align="center">
	<p>
        Eternity is a minimalist Hugo theme designed for portfolio sites with a fresh feel.
	</p>
	<p>
		This is demo site for <strong>Eternity</strong> theme. All images are taken from Unsplash.
	</p>
</div>

### Features

- **Configurable** features.

- **Multiple images** support.

- Clean, fresh, **minimalist**.

- Integrated **lazy load**.

- Automaticly creates **resized** thumbnails.

- Shows **exif** if it exists.

### Installation

1. Install Hugo.

2. Create a new site.  
	```shell
	hugo new site yoursite
	```  
	```shell
	cd yoursite
	```  

3. Submodule the theme.  
	```shell
	git submodule add --depth=1 https://github.com/boratanrikulu/eternity.git themes/eternity
	```  

4. Check [**example/eternity.bora.sh**](https://github.com/boratanrikulu/eternity/tree/main/example/eternity.bora.sh/) for example contents and set your [**config.yaml**](https://github.com/boratanrikulu/eternity/tree/main/config.example.yaml).  
	Note: You may just copy example site for testing;
	```shell
	cp -r ./themes/eternity/example/eternity.bora.sh/* .
	```  

5. Start the server.
	```shell
	hugo serve --port 1313
	```  

6. Go to [localhost:1313](http://localhost:1313).

### Upgrade

To get last updates, just git pull.
```shell
cd themes/eternity && git pull && cd -
```

### Usage of Posts

Eternity is configurable and you can change feature behaviours by setting variables.

Here's a basic post structure. You can basicly use `tags` to which pages will have this post. We suggest to use `work` for home page and `archive` for all posts. (Note: you can change their names too).  
If you want to create a new page, just add it as a new tag.

```yaml
---
images:
- /images/my-image-1.jpg
title: Here's my first post!!
tags:
- work
---
```

You can set `date` value for your posts. It will be used in Post page and for sorting. If you want, you can use `weight` value for sorting. (Note: if you did not set a `date`. We will check `exif` value of the image to use in post.)

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

You can use multiple images by adding them to `images` array. Default view is `row`. But if you want to set them as `column` you can use `multipleColumn` value. Both local images and remote images are supported. If you use remote image, it will be downloaded.


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

If you want to hide exif value for a post you can use `hideExif` value. Also there's available `hidetitle` and `hideDate` values. We used that values in about page to be able to create a single page with using same layout.

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

You can use `title`, `subtitle`, `url` for the post.

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

# Markdown

You can use **Markdown** format to write **your story**.

## Subtitle

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

### Usage of Config.yaml

Example config is here: [**config.yaml**](https://github.com/boratanrikulu/eternity/tree/main/config.example.yaml)

You can use `title`, `subtitle` and `image` values for your website. Same variables are available for post pages.
```yaml
title: Eternity
params:
  subtitle: Eternity is a minimalist Hugo theme designed for portfolio sites with a fresh feel.
  image: '/images/about.png`
```

You can use `googleAnalytics` to set Analytics.
```yaml
googleAnalytics: ''
```

You can use `copyright` and `author` variables to set Copyright notice.
```yaml
params:
  copyright: ''
  author: ''
```

You can set hidden for Source notice. But, please do not do this.
```yaml
params:
  dontShowSource: false
```

You can change columns count for desktop and mobile separately. Default value will be used if value is not defined for page type.
```yaml
params:
  portfolio:
    columns:
      desktop:
        nature: 4
        archive: 6
        people: 2
        default: 3
      mobile:
        default: 2
        archive: 3
        people: 1
```

You can use `socials` array to set your social accounts. `icon` is font-awesome icon code. You can disable `landing` variable to make icon invisible only for landing page but visible inside website.
```yaml
params:
  socials:
    - icon: 'far fa-envelope fa-lg'
      url: 'mailto:eternity@bora.sh'
      landing: true
    - icon: 'fab fa-github fa-lg'
      url: 'https://github.com/boratanrikulu/eternity'
      landing: true
    - icon: 'fab fa-instagram fa-lg'
      url: 'https://instagram.bora.sh/eternity'
    - icon: 'fab fa-linkedin-in fa-lg'
      url: 'https://linkedin.bora.sh/in/eternity'
```

You can change `homepage` link.
```yaml
params:
  homepage: "/work"
```

You can use `menu.main` array to set your navbar links.
```yaml
menu:
  main:
    - name: work
      url: /work/
      weight: 1
    - name: people
      url: /tags/people/
      weight: 2
    - name: nature
      url: /tags/nature/
      weight: 3
    - name: archive
      url: /tags/archive/
      weight: 4
    - name: about
      url: /about/
      weight: 5
```

### Editing default statics

Hugo allows to edit statics when you use a theme. We suggest to replace this statics [**/static/logo.png**](https://github.com/boratanrikulu/eternity/tree/main/static/logo.png), [**/static/background.jpeg**](static/background.jpeg), [**/static/CNAME**](https://github.com/boratanrikulu/eternity/tree/main/static/CNAME), [**/static/favicon.ico**](https://github.com/boratanrikulu/eternity/tree/main/static/favicon.ico). You can also change used colors, [**/static/css/colors.css**](https://github.com/boratanrikulu/eternity/tree/main/static/css/colors.css). You just need to create static folder inside your project and put the statics. Do not edit theme directlym, otherwise it may break your upgrade in future.

You just need to create static folder inside your project and put the statics. Do not edit theme directlym, otherwise it may break your upgrade in future.

### Contact

If you need to contact us for any reason; create an [**issue**](https://github.com/boratanrikulu/eternity/issues/new) or send a mail to [**eternity@bora.sh**](mailto:eternity@bora.sh).
