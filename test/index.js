import test from "tape"
import riseSandbox from "../src"

test("riseSandbox", (t) => {
  t.plan(1)
  t.equal(true, riseSandbox(), "return true")
})
