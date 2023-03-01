## Useful git commands

- git init (create repository)
- git log --all --graph (shows road map of branches & commits)
- git checkout commit_hash (go back to a previous state of project ((located in git log))
- git branch -c name_of_new_branch (create branch)
- git checkout name_of_branch (move to branch)
- git push -u origin branch_name (push branch to github)
- git merge name_of_branch (merge name_of_branch to current_branch)
- git branch -D name_of_branch (delete a branch by name)

(Keep track of who changed what)
- git config --global user.name "Your name"
- git config --global user.email "you@email.com"

(Pull request takes your branch and compares it to the master branch, people can see what changes you have made)
- go to pull request tab
- change drop down tothat branch to compare to main branch
- leave description to describe changes