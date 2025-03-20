//go:build mage


import (
	"fmt"
	"os"
	"os/exec"
)

// Start runs the Docker Compose build
func Start() error {
	fmt.Println("Starting the application...")
	cmd := exec.Command("docker", "compose", "up", "--build")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}

// Stop stops the application and removes volumes & images
func Stop() error {
	fmt.Println("Stopping the application...")
	cmd1 := exec.Command("docker-compose", "down", "-v")
	cmd1.Stdout = os.Stdout
	cmd1.Stderr = os.Stderr
	if err := cmd1.Run(); err != nil {
		return err
	}

	cmd2 := exec.Command("docker", "rmi", "calibrate-o1")
	cmd2.Stdout = os.Stdout
	cmd2.Stderr = os.Stderr
	return cmd2.Run()
}
