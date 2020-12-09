# Welcome Freshers to the Department of Electronics and Telecommunication Engineering of Jadavpur University

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the cloning is done, go inside of your project folder just enter the command below :

```sh
cd juetcefreshers.github.io
```

Inside the newly created project, you can run some built-in commands:

### Delete the ```yarn.lock``` file

Run the command below to download required dependencies
### `npm install` or `yarn`

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p>

After your necessary change is done just follow the below steps to submit your work.

### Instructions-

- Fork this Repository using the button at the top
- Clone your forked repository to your pc ( git clone ```'git@github.com:juetcefreshers/juetcefreshers.github.io.git'```)
- Create a new branch for your modifications (ie. `git branch new-user` and check it out `git checkout new-user` and `git checkout -b new-user`)
- Run ```yarn``` from inside the cloned project and run ```yarn start``` after the previous command execution.
- See the issues from the https://github.com/juetcefreshers/juetcefreshers.github.io/issues and comment and ask for   working
- After your assigned work do the following
- Add your files (`git add -A`), commit (`git commit -m "added myself"`) and push (`git push origin new-user`)
- Create a pull request to the `main` branch and your pull request title must contain `[dev]` keyword and your work short title
- Star this repository

#### If your branch is not fully updated with the develop branch please follow the below instructions before making any PR

>CAUTION: Synch up your local repo with [original repo](https://github.com/juetcefreshers/juetcefreshers.github.io) (Upstream) before pushing your commits.
>This avoids unnecessary conflicts during the merge.

>NOTE: You can do so by adding a [remote handler](https://www.atlassian.com/de/git/tutorials/syncing) reference to the original repo and pull the changes from the respective branch.
>Resolve the [merge-conflicts](https://www.atlassian.com/de/git/tutorials/using-branches/merge-conflicts) if any.


>```bash
>#Add upstream repo
>git remote add upstream https://github.com/juetcefreshers/juetcefreshers.github.io.git
>
>#Disable accidental push to the upstream
>git remote set-url --push upstream DISABLE
>
>#List the remote repo and fetch references
>git remote -v && git fetch upstream
>
>#Check for any new commits in the upstream branch
>git log HEAD..upstream/master #No output indicates, upstream has not moved ahead
>
>#See the patch difference between local and upstream branch
>git diff -p HEAD..upstream/master
>
>```

>CAUTION: If the upstream has moved ahead, rebase your commit and resolve conflicts if any. [Skip otherwise]
>```bash
>git rebase upstream/master
>```
>

**7.** Push your local commits to the remote repo.

```bash
git push -u origin <your_branch_name>
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) !

**9.** **Congratulations!** Sit and relax, you've made your contribution to [JUETCEFreshers](https://github.com/juetcefreshers/juetcefreshers.github.io) project.