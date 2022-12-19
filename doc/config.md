### Usage of Config.yaml

Example config is here: [**config.yaml**](/config.example.yaml)

You can use `title`, `subtitle` and `image` variables for your website. Same variables are available for post pages.
```yaml
title: Eternity
params:
  subtitle: Eternity is a minimalist Hugo theme designed for portfolio sites with a fresh feel.
  image: '/images/about.png`
```

You can use `googleAnalytics` variable to set Analytics.
```yaml
googleAnalytics: ''
```

You can use `plausible` variable to set Plausible.
```yaml
params:
  plausible: ''
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

You can use `socials` array to set your social accounts.

- `icon` is a font-awesome icon code.
- `landing: true` makes an icon invisible on the landing page but visible inside website.
- `rel_me: true` adds the HTML attribute `rel="me"` to the link. This is useful to verify the link to your Mastodon profile.

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

You can change special page names.
```yaml
params:
  specialPages:
    - work
    - archive
```

You can bypass welcome page if you want. It redirects "/" to "homepage".
```yaml
params:
  bypassWelcomePage: true
```

You can disable logo's radius with `disableRadius` variable.
```yaml
params:
  disableRadius: true
```

You can disable resizing pictures on post pages.
```yaml
params:
  disableAlwaysResize: true
```

You can move Title and Meta down, to show them only when scroll.  
```yaml
params:
  moveIt: true
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
