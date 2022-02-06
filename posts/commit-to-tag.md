---
title: 'Commit to an Existing Git Tag'
date: '2020-05-07'
tag: 'TIL'
---


In certain situations where you may have ``git push``ed too early and left out some important files you may want to modify an existing tag. This shouldn't be used when a version has already been deployed, in this case, incrementing the patch version is always preferable for semantic versioning.

In order to modify the files in an existing tag:

* Create a branch from the tag

```bash
git branch {tagname}-branch {tagname}
git checkout {tagname}-branch
```

* Change or update any files
* Add the updated files and commit the changes

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
