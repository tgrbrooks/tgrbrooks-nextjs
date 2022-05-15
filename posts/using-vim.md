---
title: 'Using Vim'
date: '2022-05-14'
tag: 'TIL'
---

Vim is a terminal based text editor that started as an extended clone of the vi editor in 1991. It's ubiquity, simplicity and extensibility means that it is still very popular today.

I used to do all of my development in Vim, but have since moved over to the dark side of VS Code and can no longer claim to be a hard core Vimmer. I do however use the Vim keybindings in VS Code as they still greatly speed up my coding.

The one downside of Vim is the steep learning curve, and so this post details some of the useful tips and tricks I picked up for Vim during my time with it.

## Opening files

* Open a file `vim file.name`
* Open two files with a vertical split `vim -O file1.name file2.name`
* Open two files with a horizontal split `vim -o file1.name file2.name`

## Modes

Vim has three main modes of operation, when you first open a file you will be in normal mode which is for entering commands. Insert mode is for normal text editing and visual mode is for selecting parts of the file.

* Enter insert mode from normal mode: `i`
* Enter normal mode: `Esc`
* Enter visual mode: `v` = single characters, `V` = whole lines, `Ctrl-v` = blocks

## Useful commands

### Moving

* `h` = left, `j` = down, `k` = up, `l` = right
  + Add a number before each letter to move that many times, e.g. `3j` will move down 3 times
* `w` = start of next word
* `e` = end of current word
* `b` = beginning of current word
* `$` = end of the line
* `0` = beginning of the line
* `G` = end of file
* `gg` = beginning of file
* Line number then `G` go to specific line

### Searching

* `f` = find next character 
  + `F` = find previous character
* `%` = find matching parenthesis
* `*` = next occurrence of word under cursor 
  + `#` = previous occurrence of word
* `/< text >` = search for text 
  + `n` = next occurrence 
  + `N` = previous occurrence
* `:%s/< search >/< replace >/g` = search whole file for text and replace it with some other text
  + Excluding the `g` will only replace the first occurrence on each line
  + The `%` can be excluded to only search the current line
  + From visual mode you can do `:'<,'>s/< search >/< replace >/g` to only search selected area

### Text manipulation

* `o` = insert text to new line after current line
  + `O` = before current line
* `x` = delete character under cursor 
  + `X` = delete character to left of cursor
* `r` = replace character
* `d` = cut, `y` = copy, `p` = paste 
  + Can combine these with movements, e.g `y2j` will copy the current line and the two lines below it
  + `dd` = cut whole line, `yy` = copy whole line
* `u` = undo
* `Ctrl-r` = redo

### File actions

* `:w` = save
* `:q` = quit
* `:x` = save and quit
* `:q!` = force quit without saving

## Configuration

Vim is highly configurable and can be made to behave in numerous different ways. The easiest way of adding custom configuration is to create a `.vimrc` file in your home directory. This is the simple set of configuration options I've found useful:

```vim
syntax enable  " enable syntax processing
set tabstop=2  " for viewing
set softtabstop=2  " for editing
set expandtab  "tabs are spaces

set number " show line number
set cursorline " show line cursor is on
set wildmenu " show menu for auto complete commands
set showmatch " Highlight matching parenthesis

" use visual mouse mode (to copy, select text, press y, place cursor, press p)
" to paste text from outside, select it, enter inset mode and hold shift while
" pressing the two mouse keys
set mouse=a

" turn off search highlight with space (leader is \)
nnoremap <leader><space> :nohlsearch<CR>

set autoindent " keep indentation level

" Get rid of auto commenting
autocmd FileType * setlocal formatoptions-=c formatoptions-=r formatoptions-=o 

" change title so that it shows the current file being edited
autocmd BufEnter * let &titlestring = $USER . "@" . hostname() . ' ' . expand("%:t")             
set title

" Copy to system clipboard
set clipboard=unnamedplus 
```
