package tree_sitter_stra_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_stra "github.com/stralang/tree-sitter/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_stra.Language())
	if language == nil {
		t.Errorf("Error loading Stra grammar")
	}
}
