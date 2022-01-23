---
title: 'Downloading Fonts in TexStudio'
date: '2020-04-21'
tag: 'TIL'
---

As pleasing as the default LaTeX font is, there may be reasons why you want to import a downloaded font to use. Here's a brief overview of how you can achieve that.

* Find a font you like on a site like [this](http://www.dafont.com/).
* Download the .ttf file and put it somewhere like ``~/Library/Fonts`` if on mac, or ``/usr/local/share/fonts`` for linux.
* You will need to download and use the LaTeX package ``fontspec`` and define a new font family.

```latex
\usepackage{fontspec}
\newfontfamily\headingfont[Path=/usr/local/share/fonts]{FFFTusj.ttf}
```

* Everywhere that you want to use this font you must do:

```latex
{\headingfont\selectfont New Font Example}
```

* There are other options for changing the default font if you want to use it everywhere.

```latex
\setmainfont[Path=/usr/local/share/fonts]{FFFTusj.ttf}
```

* To compile with TexStudio you will need to go to Tools &rarr; Commands &rarr; XeLaTeX, which will run the typesetting engine.
