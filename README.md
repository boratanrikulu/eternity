# Eternity

<div align="center">
	<img src="https://raw.githubusercontent.com/boratanrikulu/eternity/main/doc/logo.gif">
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

- [**www.twosmallbirds.art**](https://www.twosmallbirds.art)  
  An illustrator website.

- [**www.lucywingard.com**](https://www.lucywingard.com)  
  A ceramic artist website.

- [**emily5.com**](https://emily5.com)  
  A graphic designer website.

- [**davidbliss.art**](https://davidbliss.art/)  
  A drawings website.

- [**tatjana-hodes.de**](https://tatjana-hodes.de)  
  An artist website.

- [**cubrix.art**](https://cubrix.art/en/)  
  An artist website.

- [**asjadnaqvi.github.io/stata-portfolio**](https://asjadnaqvi.github.io/stata-portfolio/tags/portfolio/)  
  Stata dataviz portfolio.
  
- [**zone.photos**](https://zone.photos)  
  A photographer website.
  
- [**thomaslaneart.com**](https://thomaslaneart.com)  
  An artist website.

- [**taschchen.art**](https://taschchen.art)  
  An artist website.

- [**www.michael-bolus.com**](https://www.michael-bolus.com/)  
  A photographer website.

- [**www.stndc.com**](https://www.stndc.com)  
  A website about sound and music computing.

- [**floragrh.com.ar**](https://floragrh.com.ar/)  
  An illustrator website.

- [**fotos.pilat.cc**](https://fotos.pilat.cc/)  
  A photographer website.

- [**www.phidelart.com**](https://www.phidelart.com/)  
  An artist website.

- [**peties.art**](https://peties.art/)  
  An artist website.

- [**krystalledoux.com**](https://krystalledoux.com/)  
  An artist website.

- [**neilstoddard.com**](https://neilstoddard.com/)  
  A photographer website.

- [**rebeccacomas.com**](https://rebeccacomas.com/)  
  A web/graphic designer website.

- [**sophiacaro.com**](https://sophiacaro.com/about/)  
  An artist website.

- [**lightroastdisco.com**](https://lightroastdisco.com/)  
  A musician website.

- [**chogo.photography**](https://chogo.photography/)  
  A photographer website. 

- [**piacenza.us**](https://piacenza.us/)  
  A photographer website.

- [**rominamoyateatro.com**](https://rominamoyateatro.com/)  
  An actress website.

*Feel free to add your site here.*  

Note: If you're an artist who wants to host a website but doesn't have know how to, I can help you about technical questions for free. Just send an email to [**eternity@bora.sh**](mailto:eternity@bora.sh), I will assist you first.

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

[**Go to posts documentation.**](doc/posts.md)

### Usage of Config.yaml

[**Go to config documentation.**](doc/config.md)

### Editing Style

[**Go to style documentation.**](doc/style.md)

### Contact

If you need to contact us for any reason; create an [**issue**](https://github.com/boratanrikulu/eternity/issues/new) or send a mail to [**eternity@bora.sh**](mailto:eternity@bora.sh).
