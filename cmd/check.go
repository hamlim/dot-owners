package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
	"os/exec"
)

// checkCmd represents the check command
var checkCmd = &cobra.Command{
	Use:   "check",
	Short: "Get the appropriate owners for the current changeset",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		op := exec.Command("git", "diff", "--name-only")

		// Run the command and collect its output
		output, err := op.Output()
		if err != nil {
			fmt.Printf("Command execution failed: %s", err)
			return
		}

		// Print the output
		fmt.Println(string(output))
	},
}

func init() {
	rootCmd.AddCommand(checkCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// checkCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// checkCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
