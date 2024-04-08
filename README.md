# List: A File and Folder Listing CLI Tool

The `list` CLI tool is a Node.js project designed to list all files and folders within a specified directory in a visually distinct manner. It differentiates folders from files by color-coding the output, making it easier to navigate and understand the structure of your directories at a glance.

## Features

- **Simple Usage:** Quickly list all files and folders in a directory from the command line.
- **Color-Coded Output:** Folders are highlighted in bold blue, making them stand out against files.
- **Flexible:** Works with any directory path provided, defaults to the current working directory if none is specified.
- **Customizable Appearance:** Leverages the `chalk` library for customizable text and background colors.

## Getting Started

### Prerequisites

- Node.js installed on your system.
- `npm` for managing packages and linking the project globally.

### Installation

1. **Clone the Repository**

   Clone this repository to your local machine using:

   ```
   git clone https://github.com/s2a31/list.git
   ```

2. **Change `index.js` File Permissions (Mac/Linux)**

   Before using the script, you need to make `index.js` executable:

   ```
   chmod +x index.js
   ```

3. **Link the Project**

   Use `npm link` to symlink the package globally to your system. This allows you to run the `list` tool from anywhere. You may need to use `sudo` for permissions:

   ```
   sudo npm link
   ```

### Usage

After installation, you can run the `list` command from your terminal:

```
nls [directory]
```

- If `[directory]` is specified, `list` will show the contents of that directory.
- If `[directory]` is omitted, `list` defaults to the current working directory.

### Customizing Colors with `chalk`

The `list` tool uses the `chalk` library for colorizing output. You can customize the colors by modifying the `chalk` method calls in `index.js`. Visit the [`chalk` documentation](https://www.npmjs.com/package/chalk#colors) for available color options and usage instructions.

## License

This project is licensed under the [ISC License](LICENSE).