---
title: 'Downloading Fonts in TexStudio'
date: '2020-04-21'
tag: 'TIL'
---

* Find a font you like on a site like [this](http://www.dafont.com/)
* Download the .ttf file and put it somewhere like ~/Library/Fonts/
* Need to use the package ``fontspec`` and define a new font family

```latex
\usepackage{fontspec}
\newfontfamily\headingfont[Path=/Users/tbrooks/Library/Fonts/]{FFFTusj.ttf}
```

* Everywhere that you want to use this font you must do

```latex
{\headingfont\selectfont Tikz Poster Example}
```

* There are other options for changing all the fonts
* To compile you will need to go to Tools &rarr; Commands &rarr; XeLaTeX