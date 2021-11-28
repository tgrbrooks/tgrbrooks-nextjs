---
title: 'LaTeX Referencing'
date: '2020-04-16'
tag: 'TIL'
---

Using biblatex in TexStudio for references:

* Download TexStudio
* Download biblatex and biber

```bash
sudo apt-get install texlive-bibtex-extra biber
```

* Open TexStudio, go to Options &rarr; Configure &rarr; Build and change default bibliography tool to biber
* Create a ".bib" file which contains all the references
  + Bibtex format references can usually be found on web pages containing the papers
* For the most basic usage include the lines

```latex
\usepackage{biblatex}
\addbibresource{sample.bib}
```

* Make any citations with the usual

```latex
\cite{ref}
```

* Create the bibliography with 

```latex
\printbibliography
```