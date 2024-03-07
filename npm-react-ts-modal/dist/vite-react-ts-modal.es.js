import Ce from "react";
var X = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function ur() {
  if (Te)
    return D;
  Te = 1;
  var S = Ce, h = Symbol.for("react.element"), w = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, A = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(_, f, T) {
    var v, g = {}, y = null, $ = null;
    T !== void 0 && (y = "" + T), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && ($ = f.ref);
    for (v in f)
      E.call(f, v) && !I.hasOwnProperty(v) && (g[v] = f[v]);
    if (_ && _.defaultProps)
      for (v in f = _.defaultProps, f)
        g[v] === void 0 && (g[v] = f[v]);
    return { $$typeof: h, type: _, key: y, ref: $, props: g, _owner: A.current };
  }
  return D.Fragment = w, D.jsx = x, D.jsxs = x, D;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function sr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var S = Ce, h = Symbol.for("react.element"), w = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), _ = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Z = Symbol.iterator, Pe = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var O = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var xe = !1, je = !1, ke = !1, De = !1, Fe = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === I || Fe || e === A || e === T || e === v || De || e === $ || xe || je || ke || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === g || e.$$typeof === x || e.$$typeof === _ || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function m(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case w:
          return "Portal";
        case I:
          return "Profiler";
        case A:
          return "StrictMode";
        case T:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return ee(r) + ".Consumer";
          case x:
            var t = e;
            return ee(t._context) + ".Provider";
          case f:
            return Ie(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : m(e.type) || "Memo";
          case y: {
            var i = e, u = i._payload, o = i._init;
            try {
              return m(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, j = 0, re, te, ne, ae, oe, ie, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function $e() {
      {
        if (j === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        j++;
      }
    }
    function We() {
      {
        if (j--, j === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, e, {
              value: re
            }),
            info: R({}, e, {
              value: te
            }),
            warn: R({}, e, {
              value: ne
            }),
            error: R({}, e, {
              value: ae
            }),
            group: R({}, e, {
              value: oe
            }),
            groupCollapsed: R({}, e, {
              value: ie
            }),
            groupEnd: R({}, e, {
              value: ue
            })
          });
        }
        j < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = O.ReactCurrentDispatcher, U;
    function W(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var B = !1, Y;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ye();
    }
    function le(e, r) {
      if (!e || B)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = V.current, V.current = null, $e();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (b) {
              n = b;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var p = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, p), p;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, V.current = u, We(), Error.prepareStackTrace = i;
      }
      var P = e ? e.displayName || e.name : "", Re = P ? W(P) : "";
      return typeof e == "function" && Y.set(e, Re), Re;
    }
    function Ne(e, r, t) {
      return le(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Le(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case T:
          return W("Suspense");
        case v:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ne(e.render);
          case g:
            return N(e.type, r, t);
          case y: {
            var n = e, i = n._payload, u = n._init;
            try {
              return N(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, fe = {}, ce = O.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, i) {
      {
        var u = Function.call.bind(L);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, M(i), c("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Ve = Array.isArray;
    function q(e) {
      return Ve(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Be(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), de(e);
    }
    var k = O.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, ge, J;
    J = {};
    function Je(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && k.current && r && k.current.stateNode !== r) {
        var t = m(k.current.type);
        J[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(k.current.type), e.ref), J[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          pe || (pe = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          ge || (ge = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ze(e, r, t, n, i) {
      {
        var u, o = {}, a = null, d = null;
        t !== void 0 && (ve(t), a = "" + t), Ge(r) && (ve(r.key), a = "" + r.key), Je(r) && (d = r.ref, ze(r, i));
        for (u in r)
          L.call(r, u) && !qe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(o, l), d && He(o, l);
        }
        return Xe(e, a, d, i, n, k.current, o);
      }
    }
    var G = O.ReactCurrentOwner, me = O.ReactDebugCurrentFrame;
    function C(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function be() {
      {
        if (G.current) {
          var e = m(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var he = {};
    function er(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (he[t])
          return;
        he[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + m(e._owner.type) + "."), C(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), C(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && Ee(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Se(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              K(o.value) && Ee(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = m(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var i = m(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            C(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), C(null);
            break;
          }
        }
        e.ref !== null && (C(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), C(null));
      }
    }
    function ye(e, r, t, n, i, u) {
      {
        var o = Ae(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = Qe(i);
          d ? a += d : a += be();
          var s;
          e === null ? s = "null" : q(e) ? s = "array" : e !== void 0 && e.$$typeof === h ? (s = "<" + (m(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = Ze(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (q(p)) {
                for (var P = 0; P < p.length; P++)
                  _e(p[P], e);
                Object.freeze && Object.freeze(p);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(p, e);
        }
        return e === E ? tr(l) : rr(l), l;
      }
    }
    function nr(e, r, t) {
      return ye(e, r, t, !0);
    }
    function ar(e, r, t) {
      return ye(e, r, t, !1);
    }
    var or = ar, ir = nr;
    F.Fragment = E, F.jsx = or, F.jsxs = ir;
  }()), F;
}
process.env.NODE_ENV === "production" ? X.exports = ur() : X.exports = sr();
var H = X.exports;
const fr = ({ isOpen: S, onClose: h, children: w }) => S ? /* @__PURE__ */ H.jsx("div", { className: "modal-backdrop", onClick: h, children: /* @__PURE__ */ H.jsxs("div", { className: "modal", onClick: (E) => E.stopPropagation(), children: [
  /* @__PURE__ */ H.jsx("button", { className: "modal-close", onClick: h, children: "×" }),
  w
] }) }) : null;
export {
  fr as default
};
