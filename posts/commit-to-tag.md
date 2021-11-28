---
title: 'Commit to an Existing Git Tag'
date: '2020-05-07'
tag: 'TIL'
---

* Create a branch with the tag

```bash
git branch {tagname}-branch {tagname}
git checkout {tagname}-branch
```

* Change files
* Include the fix manually if it's just a change

```bash
git add < files >
git commit -m "Fix message"
```
	
* Delete and recreate the tag locally

```bash
git tag -d < tagname >
git tag < tagname >
```

* Delete and recreate the tag remotely

```bash
git push origin :< tagname > # deletes original remote tag
git push origin < tagname > # creates new remote tag
```
