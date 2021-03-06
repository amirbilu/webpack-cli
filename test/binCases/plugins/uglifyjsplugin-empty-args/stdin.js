"use strict";

module.exports = function testAssertions(code, stdout, stderr) {
	expect(code).toBe(0);

	expect(stdout).toEqual(expect.anything());
	expect(stdout[5]).toContain("bytes"); // without uglifyjs it's multiple kBs

	expect(stderr).toHaveLength(0);
};
