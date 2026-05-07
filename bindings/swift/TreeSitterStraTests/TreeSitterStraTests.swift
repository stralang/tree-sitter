import XCTest
import SwiftTreeSitter
import TreeSitterStra

final class TreeSitterStraTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_stra())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Stra grammar")
    }
}
