const rot13 = require("../rot13")

test("returns empty string for empty input", function () {
    expect(rot13("")).toBe("")
})

test("transforms one lowercase letter w/o looping", function () {
    expect(rot13("a")).toBe("n")
})

test("transforms one lowercase letter with looping", function () {
    expect(rot13("n")).toBe("a")
})

test("transforms one uppercase letter w/o looping", function () {
    expect(rot13("A")).toBe("N")
})

test("transforms one uppercase letter with looping", function () {
    expect(rot13("N")).toBe("A")
})

test("doesn't transform '`'", function () {
    expect(rot13("`")).toBe("`")
})

test("doesn't transform '{'", function () {
    expect(rot13("{")).toBe("{")
})

test("doesn't transform '@'", function () {
    expect(rot13("@")).toBe("@")
})

test("doesn't transform '['", function () {
    expect(rot13("[")).toBe("[")
})

test("transforms all lowercase letters", function () {
    expect(rot13("abcdefghijklmnopqrstuvwxyz")).toBe("nopqrstuvwxyzabcdefghijklm")
})

test("transforms all uppercase letters", function () {
    expect(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("NOPQRSTUVWXYZABCDEFGHIJKLM")
})

test("doesn't transform multiple symbols", function () {
    expect(rot13("`{@[")).toBe("`{@[")
})

test("throws error when no input passed", function () {
    expect(function () {
        rot13()
    }).toThrow("Expected a string argument")
})

test("throws error when non-string input passed", function () {
    expect(function () {
        rot13(123)
    }).toThrow("Expected a string argument")
})
