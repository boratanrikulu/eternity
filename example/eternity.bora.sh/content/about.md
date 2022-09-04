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
	If you will use existing example, be aware about it will download a lot of pictures.
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

[**Go to posts documentation.**](https://github.com/boratanrikulu/eternity/tree/main/doc/posts.md)

### Usage of Config.yaml

[**Go to config documentation.**](https://github.com/boratanrikulu/eternity/tree/main/doc/config.md)

### Editing Style

[**Go to style documentation.**](https://github.com/boratanrikulu/eternity/tree/main/doc/style.md)

### Contact

If you need to contact us for any reason; create an [**issue**](https://github.com/boratanrikulu/eternity/issues/new) or send a mail to [**eternity@bora.sh**](mailto:eternity@bora.sh).
