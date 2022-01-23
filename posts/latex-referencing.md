---
title: 'LaTeX Referencing'
date: '2020-04-16'
tag: 'TIL'
---

LaTeX has a feature rich referencing package called BibLaTeX, but as with most of LaTeX it's not always intuitive getting started. I found that the TexStudio editor is relatively easy to use and provides good support for referencing with BibLateX. After the initial setup, it's relatively easy to use and scales well to large documents. This is an outline of how to perform the initial setup.

* Download [TexStudio](https://www.texstudio.org/).
* Download the Biber packages required to use BibLaTeX, for example on Ubuntu do:

```bash
sudo apt-get install texlive-bibtex-extra biber
```

* Open TexStudio, go to Options &rarr; Configure &rarr; Build and change default bibliography tool to Biber.
* Create a ".bib" file which contains all the references.
  + Bibtex format references can usually be found on web pages containing the papers, see for example the "Export Bibtex Citation" button [here](https://arxiv.org/abs/1804.05941).
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

BibLaTeX will automatically get the reference numbers in the right order, allow you to quickly change the referencing style and order of the references. You can also configure the Mendeley Web Importer extension to automatically generate a ``.bib`` file for you for a relatively seamless experience.
