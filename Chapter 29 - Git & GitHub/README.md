# Git & GitHub Guide

## 1. What is Git & GitHub?
Git is a **free and open-source version control system** that helps track changes in code efficiently. GitHub is a platform that provides hosting for Git repositories with additional collaboration features.

---

## 2. Creating a GitHub Account
- Sign up at [GitHub](https://github.com/) using your **personal email**.

---

## 3. Using GitHub
- **Edit Profile**: Customize your GitHub profile.
- **Contributions**: Track your coding activity.
- **Explore**: Discover other projects and repositories.

---

## 4. Using Git
- Use Git via the **command line** for better control.

---

## 5. Configuring Git
- Check Git version:
  ```sh
  git --version
  ```

---

## 6. Git with VS Code
- Configure user details:
  ```sh
  git config --global user.name "Your Name"
  git config --global user.email "Your Email"
  ```

---

## 7 & 8. Cloning & Checking Status
- **Clone Repository:**
  ```sh
  git clone <repository-link>
  ```
- **Check Status:**
  ```sh
  git status
  ```
  - *Untracked*: Not added to Git
  - *Unmodified*: No changes
  - *Modified*: Changes made but not staged
  - *Staged*: Ready to be committed

---

## 9. Adding & Committing Changes
- **Add changes:**
  ```sh
  git add .
  ```
- **Commit changes:**
  ```sh
  git commit -m "Your commit message"
  ```
- **Push changes:**
  ```sh
  git push origin main
  ```

---

## 10. Pushing Changes
- Push committed changes to GitHub:
  ```sh
  git push origin main
  ```

---

## 11. Initializing a Repository
- Create a new Git repository:
  ```sh
  git init
  ```

---

## 12. Pushing a Local Repository to GitHub
- Link local repository to GitHub:
  ```sh
  git remote add origin <repository-link>
  ```
- Verify the connection:
  ```sh
  git remote -v
  ```
- Check & rename branch:
  ```sh
  git branch -M main
  ```
- Push the repository:
  ```sh
  git push origin main
  ```

---

## 13. Git Workflow
- **GitHub Workflow:** Code changes → Commit
- **Git Workflow:** Code changes → Add → Commit → Push

---

## 14. Git Branches
- Branches allow you to create a new development flow from the current version.

---

## 15. Branch Commands
- Check branches:
  ```sh
  git branch
  ```
- Rename branch:
  ```sh
  git branch -M main
  ```
- Switch to a branch:
  ```sh
  git checkout <branch-name>
  ```
- Create a new branch:
  ```sh
  git checkout -b <new-branch-name>
  ```
- Delete a branch:
  ```sh
  git branch -d <branch-name>
  ```

---

## 16. Merging Branches
- Compare differences:
  ```sh
  git diff <branch-name>
  ```
- Merge branches:
  ```sh
  git merge <branch-name>
  ```
- **Pull Request**: Notify others about changes pushed to a branch.

---

## 17. Pull Command
- Fetch updates from the remote repository:
  ```sh
  git pull origin main
  ```

---

## 18. Merge Conflicts
- Occurs when Git is unable to automatically resolve differences between commits.

---

## 19. Fixing Mistakes
- Reset a staged change:
  ```sh
  git reset <file-name>
  ```
- Reset commits:
  ```sh
  git reset HEAD~1
  ```
- Reset multiple commits:
  ```sh
  git reset <commit-hash>
  ```
- Hard reset:
  ```sh
  git reset --hard <commit-hash>
  ```

---

## 20. What is Forking?
- A **fork** is a new repository that shares the code and visibility settings with the original **upstream repository**.

---