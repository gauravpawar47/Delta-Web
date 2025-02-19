# Terminal Guide

## 1. What is Terminal?
A **terminal** is a command-line interface that allows users to interact with the system through text-based commands.

---

## 2. Different Terms Related to Terminal
- **Command Line**: Interface to execute commands.
- **Terminal**: A text-based interface for interacting with the system.
- **Console**: The physical or virtual interface to access the terminal.
- **Shell**: A command-line interpreter.
- **Bash**: A commonly used shell for Unix-based systems.
- **Z-Shell (Zsh)**: An enhanced shell with additional features.

---

## 3. (Windows Users Only) Installing Git Bash
- Install **Git Bash**.
- Check Git version:
  ```sh
  git --version
  ```
- Basic commands:
  ```sh
  ls
  clear
  pwd
  ```

---

## 4. Basic Commands
- **List files**:
  ```sh
  ls
  ```
- **Print working directory**:
  ```sh
  pwd
  ```
- **Clear terminal screen**:
  ```sh
  clear
  ```
- By default, you are in the **root/home directory**.

---

## 5. Navigation Commands
- Change directory:
  ```sh
  cd <directory-name>
  ```
- Move to the **Desktop**:
  ```sh
  cd Desktop
  ```
- Move up one directory:
  ```sh
  cd ..
  ```

---

## 6. Paths in Navigation
- **Absolute Path**: Full path from the root directory.
- **Relative Path**: Path relative to the current directory.
- `/` : Root directory
- `~` : Home directory

---

## 7. Creating Directories
- **Make a new directory**:
  ```sh
  mkdir <directory-name>
  ```

---

## 8. What are Flags?
Flags modify command behavior.
- **Manual command**:
  ```sh
  man ls
  ```
- **Examples**:
  ```sh
  ls -a  # Show hidden files
  ls -l  # Detailed list
  ```

---

## 9. Touch Command
- **Create files**:
  ```sh
  touch index.html
  touch style.css
  touch script.js
  ```

---

## 10. Deleting Files & Folders
- **Remove files**:
  ```sh
  rm <file-name>
  ```
- **Remove empty directory**:
  ```sh
  rmdir <directory-name>
  ```
- **Force remove directory with files**:
  ```sh
  rm -rf <directory-name>
  ```

---

### 🚀 Happy Coding with Git, GitHub & Terminal! 🎉