# Eternity

<div align="center">
	<img src="doc/logo.gif">
	<p>
        Eternity is a minimalist Hugo theme designed for portfolio sites with a fresh feel.
	</p>
</div>

### Demo

Website: [eternity.bora.sh](https://eternity.bora.sh)

<div align="center">

https://user-images.githubusercontent.com/20258973/180658086-24069751-1e78-44ef-88aa-21e045ef249d.mp4

</div>

### Used by

- [**cankalay.com**](https://cankalay.com)  
  A photographer website.

- [**jwst.rocks**](https://jwst.rocks)  
  Basic website contains WEBB images.

Note: Feel free to add your site here.

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

4. Check [**example/eternity.bora.sh**](/example/eternity.bora.sh/) for example contents and set your [**config.yaml**](/config.example.yaml).  
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

[**Go to posts documentation.**](doc/posts.md)

### Usage of Config.yaml

[**Go to config documentation.**](doc/config.md)

### Editing Style

[**Go to style documentation.**](doc/style.md)

### Contact

If you need to contact us for any reason; create an [**issue**](https://github.com/boratanrikulu/eternity/issues/new) or send a mail to [**eternity@bora.sh**](mailto:eternity@bora.sh).
