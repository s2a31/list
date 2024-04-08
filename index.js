#!/usr/bin/env node

// Import necessary modules
import fs from 'fs';              // File system module for reading directory contents
import chalk from 'chalk';        // Chalk module for coloring the output
import path from 'path';          // Path module for handling file paths

// Extract the lstat function from fs.promises for promise-based file stats
const { lstat } = fs.promises;

// Get the target directory from the command line arguments or default to the current working directory
const targetDir = process.argv[2] || process.cwd();

// Read the contents of the target directory
fs.readdir(targetDir, async (err, filenames) => {
    if (err) {
        // Log any errors encountered while reading the directory
        console.log(err);
        return; // Exit if there is an error
    }

    // Map each filename to a promise that resolves to its stats
    const statPromises = filenames.map((filename) => {
        return lstat(path.join(targetDir, filename));
    });

    // Wait for all stat promises to resolve
    const allStats = await Promise.all(statPromises);

    // Iterate through all stats to determine if the item is a file or a directory
    for (let stats of allStats) {
        const index = allStats.indexOf(stats); // Get the index of the current stats object

        // Check if the item is a file
        if (stats.isFile()) {
            // If it's a file, log the filename
            console.log(filenames[index]);
        } else {
            // If it's a directory, log the filename in bold blue using chalk
            console.log(chalk.bold.blue(filenames[index]));
        }
    }
});

