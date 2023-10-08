package utils

type Owners struct {
	Base  string
	Teams []string
}

func ResolveOwners() []Owners {

	teams := make([]string, 1)
	teams[0] = "@Foo"

	init := Owners{
		Base:  "./",
		Teams: teams,
	}

	owners := make([]Owners, 1)
	owners[0] = init

	return owners
}
