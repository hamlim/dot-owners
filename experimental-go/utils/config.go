package utils

import (
	"encoding/json"
	"fmt"
	"os/exec"
)

type Config struct {
}

func ResolveConfig() Config {
	op := exec.Command("bun", "./.owners.config.ts")
	// Run the command and collect its output
	output, err := op.Output()
	if err != nil {
		fmt.Printf("Command execution failed: %s", err)
		return Config{}
	}

	var conf Config
	jsonErr := json.Unmarshal([]byte(output), &conf)
	if jsonErr != nil {
		fmt.Println("Error:", jsonErr)
		return Config{}
	}

	fmt.Println(conf)
	return conf
}
