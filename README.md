# Portfolio

***

## Description
This project will contain my portfolio. Because i didn't know how to setup a website, i began with creating my website, then creating the associated git repo. So the git will be quite empty.

## Visuals
Add pictures here.

## Git CheatSheet

![Here](https://gitlab-rech.insa-toulouse.fr/groupe-projet-ra/serrageconnecte/blob/main/ReadmeFiles/GitStructure.png?raw=true) you can see the git structure, which is made with 2 principal branch : **main** and **dev**. Those two branches won't be deleted from start to finish.

the **main** branch contain all finished version of the project that can be deployed and is be bug free (if bugs are later discovered, it will be fixed in **dev**. That's not a problem). In **dev** are all finished features from its child branches. **dev** must have a working project but if there are bugs in it, that's not a problem.**those bugs must not be errors that prevent the project from running.**
We should fix those error in **dev**'s child branch (create a branch from **dev** or pick an existing branch from **dev** to fix it).
It is recommanded to work with baby step (add, commit and push little by little).

**!! We don't do baby step on dev and main !!**

The following lines are just a git reminder :

- Change branch
```
git checkout branchName
```
- Rebase (when a change has been made on a "parent" branch <=> to update a child branch with its parent modification)
```
git checkout parentBranch
git fetch
git pull
git checkout childBranch
git fetch
git pull
git rebase parentBranch
```
- Merge branches (when a new feature is finished)
```
git checkout branchA
git merge branchB
git branch -d branchB
git push origin --delete branchB
```
branchA is the branch which will stay: it takes the modification of branch B.

branch B is the branch that will disappear: it gives his commit and merge them in branchA.

"git branch -d branchB" will then delete branchB (because of the merge, we don't need this branch anymore)
- Merge branches with a single commit (squash all commit into one)
```
git checkout branchA
git merge --squash branchB
git commit -m "Commit message"
git push origin
git branch -d branchB
git push origin --delete branchB
```
- Create new branch
```
git checkout -b newBranchName parentBranchName
git push origin newBranchName
```


## Project status
In development
