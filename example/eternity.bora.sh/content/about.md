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

- Automatically creates **resized** thumbnails.

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

3. Remove default config file.  
	```shell
	rm hugo.toml
	```
	If you use an older version of Hugo ([< v0.110.0](https://github.com/gohugoio/hugo/issues/8979)), your config might be called differently:
	```shell
	rm config.toml
	```

4. Submodule the theme.  
	```shell
	git init
	```  
	```shell
	git submodule add --depth=1 https://github.com/boratanrikulu/eternity.git themes/eternity
	```  

5. Create config.yaml;  
	Apply (1) or (2).  

	1. Use the example project (recommended).  
		Copy all files from the example project.  
		```shell
		cp -r ./themes/eternity/example/eternity.bora.sh/* .
		```  
	2. Use empty content.  
		Copy example config.  
		```shell
		cp ./themes/eternity/config.example.yaml ./config.yaml
		```  
6. Start the server.
	```shell
	hugo serve --port 1313
	```  

7. Go to [localhost:1313](http://localhost:1313).


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
