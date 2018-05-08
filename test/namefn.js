import test from "ava";
import jsc from "jsverify";
import {check} from "ava-jsverify";

import namefn from "../src/index";

test(
  "Sets the name of a function object.",
  check(jsc.string, jsc.string, (t, name, ret) => {
    const f = () => ret;
    const g = namefn(name, f);
    t.is(f(), g());
    t.is(g.name, name);
  }),
);
