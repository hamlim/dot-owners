package utils

import (
	"fmt"
	"os/exec"
	"strings"
)

func Diff() []string {
	op := exec.Command("git", "diff", "--name-only")
	// Run the command and collect its output
	output, err := op.Output()
	if err != nil {
		fmt.Printf("Command execution failed: %s", err)
		return make([]string, 0)
	}

	paths := strings.Split(string(output), "\n")

	filteredPaths := []string{}

	for _, path := range paths {
		if len(path) > 0 {
			filteredPaths = append(filteredPaths, path)
		}
	}

	return filteredPaths
}
