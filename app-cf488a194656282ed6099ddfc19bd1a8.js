!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e() : "function" == typeof define && define.amd ? define(e) : e()
}(0, function() {
  "use strict";
  function t(t) {
      return t[ie]
  }
  function e(t, e) {
      t[ie] = e
  }
  function n(t) {
      for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          if (null !== n && "object" === (void 0 === n ? "undefined" : Jt(n)))
              for (var i = re(n), r = 0; r < i.length; r++) {
                  var o = i[r];
                  t[o] = n[o]
              }
      }
      return t
  }
  function i(t) {
      for (var e = new Array(t), n = 0; n < t; n++)
          e[n] = null;
      return e
  }
  function r(t) {
      return t._guid = ++oe
  }
  function o(t) {
      return t._guid || r(t)
  }
  function s() {}
  function a() {
      return new s
  }
  function u(t) {
      var e = we.length;
      we.push(function(t) {
          return t.value()
      }),
      Ee.push(function(t, e) {
          return t.validate(e)
      }),
      t.id = e
  }
  function p(t) {
      for (var e = [], n = 0, i = t.length; n < i; n++) {
          var r = t[n].tag;
          if (r === xe)
              return xe;
          r !== Ae && e.push(r)
      }
      return h(e)
  }
  function c(t) {
      for (var e = [], n = t.head(); null !== n; ) {
          var i = n.tag;
          if (i === xe)
              return xe;
          i !== Ae && e.push(i),
          n = t.nextNode(n)
      }
      return h(e)
  }
  function l(t) {
      for (var e = [], n = 0, i = t.length; n < i; n++) {
          var r = t[n];
          if (r === xe)
              return xe;
          r !== Ae && e.push(r)
      }
      return h(e)
  }
  function h(t) {
      switch (t.length) {
      case 0:
          return Ae;
      case 1:
          return t[0];
      case 2:
          return Te.create(t[0], t[1]);
      default:
          return De.create(t)
      }
  }
  function f(t, e) {
      return new Le(t,e)
  }
  function d(t) {
      return t !== Ie
  }
  function m(t) {
      return t.tag === Ae
  }
  function y(t) {
      return "function" != typeof t.toString ? "" : String(t)
  }
  function v(t) {
      for (var e = [], n = 0; n < t.length; n++) {
          var i = t[n].value();
          !1 !== i && null !== i && void 0 !== i && e.push(i)
      }
      return 0 === e.length ? null : e.join(" ")
  }
  function g(t, e) {
      return new _n(t,e)
  }
  function b(t, e) {
      for (var n = t.parentElement(), i = t.firstNode(), r = t.lastNode(), o = i; o; ) {
          var s = o.nextSibling;
          if (n.insertBefore(o, e),
          o === r)
              return s;
          o = s
      }
      return null
  }
  function k(t) {
      for (var e = t.parentElement(), n = t.firstNode(), i = t.lastNode(), r = n; r; ) {
          var o = r.nextSibling;
          if (e.removeChild(r),
          r === i)
              return o;
          r = o
      }
      return null
  }
  function S(t) {
      return !!t && "function" == typeof t.toHTML
  }
  function w(t) {
      return null !== t && "object" === (void 0 === t ? "undefined" : Jt(t)) && "number" == typeof t.nodeType
  }
  function E(t) {
      return "string" == typeof t
  }
  function _(t, e, n) {
      return E(n) ? xn.insert(t, e, n) : S(n) ? Nn.insert(t, e, n) : w(n) ? On.insert(t, e, n) : void 0
  }
  function A(t, e, n) {
      return E(n) ? Cn.insert(t, e, n) : w(n) ? On.insert(t, e, n) : void 0
  }
  function x(t) {
      return "object" === (void 0 === t ? "undefined" : Jt(t)) && t && t[Tn]
  }
  function C(t) {
      return null === t || void 0 === t || "function" != typeof t.toString
  }
  function N(t) {
      return C(t) ? "" : String(t)
  }
  function O(t) {
      return C(t) ? "" : E(t) ? t : S(t) ? t.toHTML() : w(t) ? t : String(t)
  }
  function T(t) {
      return C(t) ? "" : E(t) ? t : S(t) || w(t) ? t : String(t)
  }
  function D(t, e) {
      console.info("Use `context`, and `get(<path>)` to debug this template."),
      e("this")
  }
  function M(t) {
      return function(e) {
          return e[0] === t
      }
  }
  function B(t) {
      return t && "function" == typeof t.compile
  }
  function P(t, e) {
      return new pi(t,e)
  }
  function L(t, e) {
      _i.compile(t, e)
  }
  function R(t, e, n) {
      for (var i = P(n, e), r = t, o = Array.isArray(r), s = 0, r = o ? r : r[Symbol.iterator](); ; ) {
          var a;
          if (o) {
              if (s >= r.length)
                  break;
              a = r[s++]
          } else {
              if (s = r.next(),
              s.done)
                  break;
              a = s.value
          }
          L(a, i)
      }
      return i
  }
  function I(t, e, n, i) {
      var r = t.pop()
        , o = r[1];
      t.push([gi.ClientSideStatement, ri.Ops.OpenComponentElement, o]),
      t.push([gi.ClientSideStatement, ri.Ops.DidCreateElement]);
      var s = i.symbols.length + 1;
      i.symbols.push(yi);
      var a = t.concat([[gi.Yield, s, me]]).concat(e).concat(n).concat([[gi.ClientSideStatement, ri.Ops.DidRenderLayout]]);
      return new mi(a,i)
  }
  function F(t, e, n) {
      return new ki(n,e,t.statements,me).scan()
  }
  function j(t, e, n) {
      var i = t[1]
        , r = t[2]
        , o = t[3];
      U(r, n),
      o ? n.dynamicAttrNS(i, o, e) : n.dynamicAttr(i, e)
  }
  function U(t, e) {
      Array.isArray(t) ? Oi.compile(t, e) : e.primitive(t)
  }
  function H(t, e) {
      return t ? (t.forEach(function(t) {
          return U(t, e)
      }),
      t.length) : 0
  }
  function z() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Di
        , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Bi;
      return t.add("if", function(t, e, n, i, r) {
          if (!t || 1 !== t.length)
              throw new Error("SYNTAX ERROR: #if requires a single argument");
          r.startLabels(),
          r.pushFrame(),
          r.returnTo("END"),
          U(t[0], r),
          r.test("environment"),
          r.enter(1),
          r.jumpUnless("ELSE"),
          r.invokeStatic(n),
          i ? (r.jump("EXIT"),
          r.label("ELSE"),
          r.invokeStatic(i),
          r.label("EXIT"),
          r.exit(),
          r.return()) : (r.label("ELSE"),
          r.exit(),
          r.return()),
          r.label("END"),
          r.popFrame(),
          r.stopLabels()
      }),
      t.add("unless", function(t, e, n, i, r) {
          if (!t || 1 !== t.length)
              throw new Error("SYNTAX ERROR: #unless requires a single argument");
          r.startLabels(),
          r.pushFrame(),
          r.returnTo("END"),
          U(t[0], r),
          r.test("environment"),
          r.enter(1),
          r.jumpIf("ELSE"),
          r.invokeStatic(n),
          i ? (r.jump("EXIT"),
          r.label("ELSE"),
          r.invokeStatic(i),
          r.label("EXIT"),
          r.exit(),
          r.return()) : (r.label("ELSE"),
          r.exit(),
          r.return()),
          r.label("END"),
          r.popFrame(),
          r.stopLabels()
      }),
      t.add("with", function(t, e, n, i, r) {
          if (!t || 1 !== t.length)
              throw new Error("SYNTAX ERROR: #with requires a single argument");
          r.startLabels(),
          r.pushFrame(),
          r.returnTo("END"),
          U(t[0], r),
          r.dup(),
          r.test("environment"),
          r.enter(2),
          r.jumpUnless("ELSE"),
          r.invokeStatic(n, 1),
          i ? (r.jump("EXIT"),
          r.label("ELSE"),
          r.invokeStatic(i),
          r.label("EXIT"),
          r.exit(),
          r.return()) : (r.label("ELSE"),
          r.exit(),
          r.return()),
          r.label("END"),
          r.popFrame(),
          r.stopLabels()
      }),
      t.add("each", function(t, e, n, i, r) {
          if (r.startLabels(),
          r.pushFrame(),
          r.returnTo("END"),
          !e || "key" !== e[0][0])
              throw new Error("Compile error: #each without key");
          U(e[1][0], r),
          U(t[0], r),
          r.enter(2),
          r.putIterator(),
          r.jumpUnless("ELSE"),
          r.pushFrame(),
          r.returnTo("ITER"),
          r.dup(de.fp, 1),
          r.enterList("BODY"),
          r.label("ITER"),
          r.iterate("BREAK"),
          r.label("BODY"),
          r.invokeStatic(n, 2),
          r.pop(2),
          r.exit(),
          r.return(),
          r.label("BREAK"),
          r.exitList(),
          r.popFrame(),
          i ? (r.jump("EXIT"),
          r.label("ELSE"),
          r.invokeStatic(i),
          r.label("EXIT"),
          r.exit(),
          r.return()) : (r.label("ELSE"),
          r.exit(),
          r.return()),
          r.label("END"),
          r.popFrame(),
          r.stopLabels()
      }),
      t.add("-in-element", function(t, e, n, i, r) {
          if (!t || 1 !== t.length)
              throw new Error("SYNTAX ERROR: #-in-element requires a single argument");
          if (r.startLabels(),
          r.pushFrame(),
          r.returnTo("END"),
          e && e[0].length) {
              var o = e[0]
                , s = e[1];
              if (1 !== o.length || "nextSibling" !== o[0])
                  throw new Error("SYNTAX ERROR: #-in-element does not take a `" + o[0] + "` option");
              U(s[0], r)
          } else
              U(null, r);
          U(t[0], r),
          r.dup(),
          r.test("simple"),
          r.enter(3),
          r.jumpUnless("ELSE"),
          r.pushRemoteElement(),
          r.invokeStatic(n),
          r.popRemoteElement(),
          r.label("ELSE"),
          r.exit(),
          r.return(),
          r.label("END"),
          r.popFrame(),
          r.stopLabels()
      }),
      t.add("-with-dynamic-vars", function(t, e, n, i, r) {
          if (e) {
              var o = e[0];
              H(e[1], r),
              r.pushDynamicScope(),
              r.bindDynamicScope(o),
              r.invokeStatic(n),
              r.popDynamicScope()
          } else
              r.invokeStatic(n)
      }),
      {
          blocks: t,
          inlines: e
      }
  }
  function W(t, e) {
      return -1 !== t.indexOf(e)
  }
  function V(t, e) {
      return (null === t || W(Ri, t)) && W(Fi, e)
  }
  function G(t, e) {
      return null !== t && (W(Ii, t) && W(ji, e))
  }
  function Y(t, e) {
      return V(t, e) || G(t, e)
  }
  function X(t, e, n, i) {
      var r = null;
      if (null === i || void 0 === i)
          return i;
      if (S(i))
          return i.toHTML();
      r = e ? e.tagName.toUpperCase() : null;
      var o = N(i);
      if (V(r, n)) {
          var s = t.protocolForURL(o);
          if (W(Li, s))
              return "unsafe:" + o
      }
      return G(r, n) ? "unsafe:" + o : o
  }
  function q(t, e) {
      var n = void 0
        , i = void 0;
      if (e in t)
          i = e,
          n = "prop";
      else {
          var r = e.toLowerCase();
          r in t ? (n = "prop",
          i = r) : (n = "attr",
          i = e)
      }
      return "prop" !== n || "style" !== i.toLowerCase() && !K(t.tagName, i) || (n = "attr"),
      {
          normalized: i,
          type: n
      }
  }
  function K(t, e) {
      var n = Ui[t.toUpperCase()];
      return n && n[e.toLowerCase()] || !1
  }
  function J(t, e) {
      if (!t)
          return e;
      if (!Q(t))
          return e;
      var n = t.createElement("div");
      return function(t) {
          function e() {
              return $t(this, e),
              te(this, t.apply(this, arguments))
          }
          return Zt(e, t),
          e.prototype.insertHTMLBefore = function(e, i, r) {
              if (null === i || "" === i)
                  return t.prototype.insertHTMLBefore.call(this, e, i, r);
              var o = e.tagName.toLowerCase()
                , s = Hi[o];
              return void 0 === s ? t.prototype.insertHTMLBefore.call(this, e, i, r) : $(e, s, n, i, r)
          }
          ,
          e
      }(e)
  }
  function $(t, e, n, i, r) {
      var o = e.before + i + e.after;
      n.innerHTML = o;
      for (var s = n, a = 0; a < e.depth; a++)
          s = s.childNodes[0];
      var u = rt(s, t, r)
        , p = u[0]
        , c = u[1];
      return new En(t,p,c)
  }
  function Q(t) {
      var e = t.createElement("table");
      try {
          e.innerHTML = "<tbody></tbody>"
      } catch (t) {} finally {
          if (0 !== e.childNodes.length)
              return !1
      }
      return !0
  }
  function Z(t, e, n) {
      if (!t)
          return e;
      if (!et(t, n))
          return e;
      var i = t.createElement("div");
      return function(t) {
          function e() {
              return $t(this, e),
              te(this, t.apply(this, arguments))
          }
          return Zt(e, t),
          e.prototype.insertHTMLBefore = function(e, r, o) {
              return null === r || "" === r ? t.prototype.insertHTMLBefore.call(this, e, r, o) : e.namespaceURI !== n ? t.prototype.insertHTMLBefore.call(this, e, r, o) : tt(e, i, r, o)
          }
          ,
          e
      }(e)
  }
  function tt(t, e, n, i) {
      var r = "<svg>" + n + "</svg>";
      e.innerHTML = r;
      var o = rt(e.firstChild, t, i)
        , s = o[0]
        , a = o[1];
      return new En(t,s,a)
  }
  function et(t, e) {
      var n = t.createElementNS(e, "svg");
      try {
          n.insertAdjacentHTML("beforeEnd", "<circle></circle>")
      } catch (t) {} finally {
          return 1 !== n.childNodes.length || n.firstChild.namespaceURI !== zi
      }
  }
  function nt(t, e) {
      return t && it(t) ? function(t) {
          function e(n) {
              $t(this, e);
              var i = te(this, t.call(this, n));
              return i.uselessComment = i.createComment(""),
              i
          }
          return Zt(e, t),
          e.prototype.insertHTMLBefore = function(e, n, i) {
              if (null === n)
                  return t.prototype.insertHTMLBefore.call(this, e, n, i);
              var r = !1
                , o = i ? i.previousSibling : e.lastChild;
              o && o instanceof Text && (r = !0,
              e.insertBefore(this.uselessComment, i));
              var s = t.prototype.insertHTMLBefore.call(this, e, n, i);
              return r && e.removeChild(this.uselessComment),
              s
          }
          ,
          e
      }(e) : e
  }
  function it(t) {
      var e = t.createElement("div");
      return e.innerHTML = "first",
      e.insertAdjacentHTML("beforeEnd", "second"),
      2 !== e.childNodes.length
  }
  function rt(t, e, n) {
      for (var i = t.firstChild, r = null, o = i; o; )
          r = o,
          o = o.nextSibling,
          e.insertBefore(r, n);
      return [i, r]
  }
  function ot(t, e, n, i) {
      var r = e
        , o = t
        , s = n
        , a = s ? s.previousSibling : r.lastChild
        , u = void 0;
      if (null === i || "" === i)
          return new En(r,null,null);
      null === s ? (r.insertAdjacentHTML("beforeEnd", i),
      u = r.lastChild) : s instanceof HTMLElement ? (s.insertAdjacentHTML("beforeBegin", i),
      u = s.previousSibling) : (r.insertBefore(o, s),
      o.insertAdjacentHTML("beforeBegin", i),
      u = o.previousSibling,
      r.removeChild(o));
      var p = a ? a.nextSibling : r.firstChild;
      return new En(r,p,u)
  }
  function st(t) {
      return t.nodeType === Node.DOCUMENT_FRAGMENT_NODE
  }
  function at(t, e, n, i) {
      var r = t.tagName;
      if (t.namespaceURI === Wi)
          return pt(r, e);
      var o = q(t, e)
        , s = o.type
        , a = o.normalized;
      return "attr" === s ? pt(r, a) : ut(r, a)
  }
  function ut(t, e) {
      return Y(t, e) ? new er(e) : ht(t, e) ? ir : ft(t, e) ? or : new tr(e)
  }
  function pt(t, e) {
      return Y(t, e) ? new sr(e) : new Zi(e)
  }
  function ct(t) {
      return !1 === t || void 0 === t || null === t ? null : !0 === t ? "" : "function" == typeof t ? null : String(t)
  }
  function lt(t) {
      return null === t || void 0 === t
  }
  function ht(t, e) {
      return ("INPUT" === t || "TEXTAREA" === t) && "value" === e
  }
  function ft(t, e) {
      return "OPTION" === t && "selected" === e
  }
  function dt(t) {
      var e = t.id
        , i = t.meta
        , r = t.block
        , o = void 0
        , s = e || "client-" + wr++;
      return {
          id: s,
          meta: i,
          create: function(t, e) {
              var a = e ? n({}, e, i) : i;
              return o || (o = JSON.parse(r)),
              new Er(s,a,t,o)
          }
      }
  }
  function mt() {}
  function yt(t) {
      return -1 === t.indexOf(":")
  }
  function vt(t, e, n, i, r) {
      var o = [t.slice(0, 1), null, null, null]
        , s = [t.slice(1), kt(e), n, i];
      return r.component.dynamic(o, bt, s),
      !0
  }
  function gt(t, e, n, i) {
      var r = [e.slice(0, 1), null, null, null]
        , o = [e.slice(1), kt(n), null, null];
      return i.component.dynamic(r, bt, o),
      !0
  }
  function bt(t, e, n) {
      var i = e.positional.at(0)
        , r = t.env;
      return new Hr(i,r,n)
  }
  function kt(t) {
      return null === t ? null : [t[0].map(function(t) {
          return "@" + t
      }), t[1]]
  }
  function St(t, e) {
      var n = t.getSelf()
        , i = e.capture()
        , r = i.positional.at(0).value();
      return "function" != typeof r && wt(r, i.positional.at(0)),
      new Fe(function() {
          var t = i.positional.value();
          t.shift(),
          t.push.apply(t, arguments),
          r.apply(n && n.value(), t)
      }
      )
  }
  function wt(t, e) {
      var n = Et(e);
      throw new Error("You tried to create an action with the {{action}} helper, but the first argument " + n + "was " + (void 0 === t ? "undefined" : Jt(t)) + " instead of a function.")
  }
  function Et(t) {
      var e = ""
        , n = void 0
        , i = void 0;
      return null == t ? e : ("parent"in t && "property"in t ? (n = t.parent.value(),
      i = t.property) : "_parentValue"in t && "_propertyKey"in t && (n = t._parentValue,
      i = t._propertyKey),
      void 0 !== i && (e += "('" + i + "' on " + _t(n) + ") "),
      e)
  }
  function _t(t) {
      var e = void 0 === t ? "undefined" : Jt(t);
      if (null == t)
          return e;
      if ("number" === e || "boolean" === e)
          return t.toString();
      if (t.debugName)
          return t.debugName;
      try {
          return JSON.stringify(t)
      } catch (t) {}
      return t.toString()
  }
  function At(t) {
      return function(e, n) {
          return new Wr(t,n)
      }
  }
  function xt(t, e) {
      t.add("component", vt),
      e.add("component", gt)
  }
  function Ct(t) {
      return void 0 !== t.createComponentDefinition
  }
  function Nt(t) {
      var e = t.split(":")
        , n = e[0]
        , i = e[1];
      return !!(n && i && 0 === i.indexOf("/") && i.split("/").length > 3)
  }
  function Ot(t) {
      return void 0 !== t.rootName && void 0 !== t.collection && void 0 !== t.name && void 0 !== t.type
  }
  function Tt(t) {
      var e = t.type
        , n = Dt(t);
      return n ? e + ":" + n : e
  }
  function Dt(t) {
      var e = [];
      if (t.rootName && e.push(t.rootName),
      t.collection && e.push(t.collection),
      t.namespace && e.push(t.namespace),
      t.name && e.push(t.name),
      e.length > 0) {
          var n = e.join("/");
          return Ot(t) && (n = "/" + n),
          n
      }
  }
  function Mt(t) {
      var e = {};
      if (t.indexOf(":") > -1) {
          var n = t.split(":")
            , i = n[0]
            , r = n[1];
          e.type = i;
          var o = void 0;
          0 === r.indexOf("/") ? (o = r.substr(1).split("/"),
          e.rootName = o.shift(),
          e.collection = o.shift()) : o = r.split("/"),
          o.length > 0 && (e.name = o.pop(),
          o.length > 0 && (e.namespace = o.join("/")))
      } else
          e.type = t;
      return e
  }
  function Bt(t, e) {
      if (!e)
          throw new Error("Assertion Failed: " + t)
  }
  function Pt(t) {
      return t.reduce(function(t, e) {
          return t && e
      }, !0)
  }
  function Lt() {}
  function Rt() {
      return new Lt
  }
  function It() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
      var i = e[0]
        , r = e[1]
        , o = e[2];
      return "string" == typeof i ? function(t, n, i) {
          return Ft(t, n, i, e)
      }
      : o ? Ft(i, r, o, []) : void jt(i, r)
  }
  function Ft(t, e, n, i) {
      var r = Ht(t);
      return r.trackedProperties[e] = !0,
      r.trackedPropertyDependencies[e] = i || [],
      {
          enumerable: !0,
          configurable: !1,
          get: n.get,
          set: function() {
              Ht(this).dirtyableTagFor(e).inner.dirty(),
              n.set.apply(this, arguments),
              oo()
          }
      }
  }
  function jt(t, e) {
      var n = Symbol(e);
      Ht(t).trackedProperties[e] = !0,
      void 0 !== t[e] && t[e],
      Object.defineProperty(t, e, {
          configurable: !0,
          get: function() {
              return this[n]
          },
          set: function(t) {
              Ht(this).dirtyableTagFor(e).inner.dirty(),
              this[n] = t,
              oo()
          }
      })
  }
  function Ut(t, e, n) {
      var i = [t.dirtyableTagFor(e)];
      if (n && n.length)
          for (var r = 0; r < n.length; r++)
              i.push(t.tagFor(n[r]));
      return l(i)
  }
  function Ht(t) {
      var e = t[io];
      return e && zt(t, io) ? e : t[io] = new no(e)
  }
  function zt(t, e) {
      return ro.call(t, e)
  }
  function Wt(t, e) {
      arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if ("object" === (void 0 === t ? "undefined" : Jt(t)) && t) {
          return Ht(t).tagFor(e)
      }
      return Ae
  }
  function Vt(t, e) {
      throw new so(t,e,"The '" + e + "' property on the " + t + " was changed after it had been rendered. Properties that change after being rendered must be tracked. Use the @tracked decorator to mark this as a tracked property.")
  }
  function Gt(t) {
      return t[0] === t[1]
  }
  function Yt(t) {
      var e = t[0]
        , n = t[1]
        , i = t[2];
      return e ? n : i
  }
  function Xt() {
      ++To === Do.length && console.log("Preloaded all images")
  }
  function qt(t) {
      var e = new Image;
      e.src = t,
      e.onload = Xt
  }
  function Kt() {
      for (var t = 0; t < Do.length; t++)
          qt(Do[t])
  }
  var Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
  }
  : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  }
    , $t = function(t, e) {
      if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function")
  }
    , Qt = function() {
      function t(t, e) {
          for (var n = 0; n < e.length; n++) {
              var i = e[n];
              i.enumerable = i.enumerable || !1,
              i.configurable = !0,
              "value"in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i)
          }
      }
      return function(e, n, i) {
          return n && t(e.prototype, n),
          i && t(e, i),
          e
      }
  }()
    , Zt = function(t, e) {
      if ("function" != typeof e && null !== e)
          throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
          constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
          }
      }),
      e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
    , te = function(t, e) {
      if (!t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
  }
    , ee = function() {
      function t(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          $t(this, t),
          this._registry = e,
          this._resolver = n,
          this._lookups = {},
          this._factoryDefinitionLookups = {}
      }
      return t.prototype.factoryFor = function(t) {
          var e = this._factoryDefinitionLookups[t];
          if (e || (this._resolver && (e = this._resolver.retrieve(t)),
          e || (e = this._registry.registration(t)),
          e && (this._factoryDefinitionLookups[t] = e)),
          e)
              return this.buildFactory(t, e)
      }
      ,
      t.prototype.lookup = function(t) {
          var e = !1 !== this._registry.registeredOption(t, "singleton");
          if (e && this._lookups[t])
              return this._lookups[t];
          var n = this.factoryFor(t);
          if (n) {
              if (!1 === this._registry.registeredOption(t, "instantiate"))
                  return n.class;
              var i = n.create();
              return e && i && (this._lookups[t] = i),
              i
          }
      }
      ,
      t.prototype.defaultInjections = function(t) {
          return {}
      }
      ,
      t.prototype.buildInjections = function(t) {
          for (var e = this.defaultInjections(t), n = this._registry.registeredInjections(t), i = void 0, r = 0; r < n.length; r++)
              i = n[r],
              e[i.property] = this.lookup(i.source);
          return e
      }
      ,
      t.prototype.buildFactory = function(t, e) {
          var n = this.buildInjections(t);
          return {
              class: e,
              create: function(t) {
                  var i = Object.assign({}, n, t);
                  return e.create(i)
              }
          }
      }
      ,
      t
  }()
    , ne = function() {
      function t(e) {
          $t(this, t),
          this._registrations = {},
          this._registeredOptions = {},
          this._registeredInjections = {},
          e && e.fallback && (this._fallback = e.fallback)
      }
      return t.prototype.register = function(t, e, n) {
          this._registrations[t] = e,
          n && (this._registeredOptions[t] = n)
      }
      ,
      t.prototype.registration = function(t) {
          var e = this._registrations[t];
          return void 0 === e && this._fallback && (e = this._fallback.registration(t)),
          e
      }
      ,
      t.prototype.unregister = function(t) {
          delete this._registrations[t],
          delete this._registeredOptions[t],
          delete this._registeredInjections[t]
      }
      ,
      t.prototype.registerOption = function(t, e, n) {
          var i = this._registeredOptions[t];
          i || (i = {},
          this._registeredOptions[t] = i),
          i[e] = n
      }
      ,
      t.prototype.registeredOption = function(t, e) {
          var n = void 0
            , i = this.registeredOptions(t);
          return i && (n = i[e]),
          void 0 === n && void 0 !== this._fallback && (n = this._fallback.registeredOption(t, e)),
          n
      }
      ,
      t.prototype.registeredOptions = function(t) {
          var e = this._registeredOptions[t];
          if (void 0 === e) {
              var n = t.split(":")
                , i = n[0];
              e = this._registeredOptions[i]
          }
          return e
      }
      ,
      t.prototype.unregisterOption = function(t, e) {
          var n = this._registeredOptions[t];
          n && delete n[e]
      }
      ,
      t.prototype.registerInjection = function(t, e, n) {
          var i = this._registeredInjections[t];
          void 0 === i && (this._registeredInjections[t] = i = []),
          i.push({
              property: e,
              source: n
          })
      }
      ,
      t.prototype.registeredInjections = function(t) {
          var e = t.split(":")
            , n = e[0]
            , i = this._fallback ? this._fallback.registeredInjections(t) : [];
          return Array.prototype.push.apply(i, this._registeredInjections[n]),
          Array.prototype.push.apply(i, this._registeredInjections[t]),
          i
      }
      ,
      t
  }()
    , ie = "__owner__"
    , re = Object.keys
    , oe = 0
    , se = Object.create(null, {
      constructor: {
          value: void 0,
          enumerable: !1,
          writable: !0
      }
  });
  s.prototype = se;
  var ae = function() {
      function t() {
          $t(this, t),
          this.dict = a()
      }
      return t.prototype.add = function(t) {
          return "string" == typeof t ? this.dict[t] = t : this.dict[o(t)] = t,
          this
      }
      ,
      t.prototype.delete = function(t) {
          "string" == typeof t ? delete this.dict[t] : t._guid && delete this.dict[t._guid]
      }
      ,
      t.prototype.forEach = function(t) {
          var e = this.dict;
          Object.keys(e).forEach(function(n) {
              return t(e[n])
          })
      }
      ,
      t.prototype.toArray = function() {
          return Object.keys(this.dict)
      }
      ,
      t
  }()
    , ue = function() {
      function t() {
          $t(this, t),
          this.stack = [],
          this.current = null
      }
      return t.prototype.toArray = function() {
          return this.stack
      }
      ,
      t.prototype.push = function(t) {
          this.current = t,
          this.stack.push(t)
      }
      ,
      t.prototype.pop = function() {
          var t = this.stack.pop()
            , e = this.stack.length;
          return this.current = 0 === e ? null : this.stack[e - 1],
          void 0 === t ? null : t
      }
      ,
      t.prototype.isEmpty = function() {
          return 0 === this.stack.length
      }
      ,
      t
  }()
    , pe = function t(e) {
      $t(this, t),
      this.next = null,
      this.prev = null,
      this.value = e
  }
    , ce = function() {
      function t() {
          $t(this, t),
          this.clear()
      }
      return t.fromSlice = function(e) {
          var n = new t;
          return e.forEachNode(function(t) {
              return n.append(t.clone())
          }),
          n
      }
      ,
      t.prototype.head = function() {
          return this._head
      }
      ,
      t.prototype.tail = function() {
          return this._tail
      }
      ,
      t.prototype.clear = function() {
          this._head = this._tail = null
      }
      ,
      t.prototype.isEmpty = function() {
          return null === this._head
      }
      ,
      t.prototype.toArray = function() {
          var t = [];
          return this.forEachNode(function(e) {
              return t.push(e)
          }),
          t
      }
      ,
      t.prototype.splice = function(t, e, n) {
          var i = void 0;
          null === n ? (i = this._tail,
          this._tail = e) : (i = n.prev,
          e.next = n,
          n.prev = e),
          i && (i.next = t,
          t.prev = i)
      }
      ,
      t.prototype.nextNode = function(t) {
          return t.next
      }
      ,
      t.prototype.prevNode = function(t) {
          return t.prev
      }
      ,
      t.prototype.forEachNode = function(t) {
          for (var e = this._head; null !== e; )
              t(e),
              e = e.next
      }
      ,
      t.prototype.contains = function(t) {
          for (var e = this._head; null !== e; ) {
              if (e === t)
                  return !0;
              e = e.next
          }
          return !1
      }
      ,
      t.prototype.insertBefore = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return null === e ? this.append(t) : (e.prev ? e.prev.next = t : this._head = t,
          t.prev = e.prev,
          t.next = e,
          e.prev = t,
          t)
      }
      ,
      t.prototype.append = function(t) {
          var e = this._tail;
          return e ? (e.next = t,
          t.prev = e,
          t.next = null) : this._head = t,
          this._tail = t
      }
      ,
      t.prototype.pop = function() {
          return this._tail ? this.remove(this._tail) : null
      }
      ,
      t.prototype.prepend = function(t) {
          return this._head ? this.insertBefore(t, this._head) : this._head = this._tail = t
      }
      ,
      t.prototype.remove = function(t) {
          return t.prev ? t.prev.next = t.next : this._head = t.next,
          t.next ? t.next.prev = t.prev : this._tail = t.prev,
          t
      }
      ,
      t
  }()
    , le = function() {
      function t(e, n) {
          $t(this, t),
          this._head = e,
          this._tail = n
      }
      return t.toList = function(t) {
          var e = new ce;
          return t.forEachNode(function(t) {
              return e.append(t.clone())
          }),
          e
      }
      ,
      t.prototype.forEachNode = function(t) {
          for (var e = this._head; null !== e; )
              t(e),
              e = this.nextNode(e)
      }
      ,
      t.prototype.contains = function(t) {
          for (var e = this._head; null !== e; ) {
              if (e === t)
                  return !0;
              e = e.next
          }
          return !1
      }
      ,
      t.prototype.head = function() {
          return this._head
      }
      ,
      t.prototype.tail = function() {
          return this._tail
      }
      ,
      t.prototype.toArray = function() {
          var t = [];
          return this.forEachNode(function(e) {
              return t.push(e)
          }),
          t
      }
      ,
      t.prototype.nextNode = function(t) {
          return t === this._tail ? null : t.next
      }
      ,
      t.prototype.prevNode = function(t) {
          return t === this._head ? null : t.prev
      }
      ,
      t.prototype.isEmpty = function() {
          return !1
      }
      ,
      t
  }()
    , he = (new le(null,null),
  function() {
      if ("function" != typeof WeakMap)
          return !1;
      var t = new WeakMap;
      return "[object WeakMap]" === Object.prototype.toString.call(t)
  }())
    , fe = "undefined" != typeof Uint32Array;
  fe ? Uint32Array : Array;
  var de, me = he ? Object.freeze([]) : [];
  !function(t) {
      t[t.pc = 0] = "pc",
      t[t.ra = 1] = "ra",
      t[t.fp = 2] = "fp",
      t[t.sp = 3] = "sp",
      t[t.s0 = 4] = "s0",
      t[t.s1 = 5] = "s1",
      t[t.t0 = 6] = "t0",
      t[t.t1 = 7] = "t1"
  }(de || (de = {}));
  var ye = function() {
      function t() {
          $t(this, t),
          this.evaluateOpcode = i(72).slice()
      }
      return t.prototype.add = function(t, e) {
          this.evaluateOpcode[t] = e
      }
      ,
      t.prototype.evaluate = function(t, e, n) {
          (0,
          this.evaluateOpcode[n])(t, e)
      }
      ,
      t
  }()
    , ve = new ye
    , ge = function t() {
      $t(this, t),
      r(this)
  }
    , be = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.next = null,
          n.prev = null,
          n
      }
      return Zt(e, t),
      e
  }(ge)
    , ke = 1
    , Se = function() {
      function t() {
          $t(this, t)
      }
      return t.prototype.validate = function(t) {
          return this.value() === t
      }
      ,
      t
  }();
  Se.id = 0;
  var we = []
    , Ee = []
    , _e = function() {
      function t(e, n) {
          $t(this, t),
          this.type = e,
          this.inner = n
      }
      return t.prototype.value = function() {
          return (0,
          we[this.type])(this.inner)
      }
      ,
      t.prototype.validate = function(t) {
          return (0,
          Ee[this.type])(this.inner, t)
      }
      ,
      t
  }();
  we.push(function() {
      return 0
  }),
  Ee.push(function(t, e) {
      return 0 === e
  });
  var Ae = new _e(0,null);
  we.push(function() {
      return NaN
  }),
  Ee.push(function(t, e) {
      return NaN === e
  });
  var xe = new _e(1,null);
  we.push(function() {
      return Ce
  }),
  Ee.push(function(t, e) {
      return e === Ce
  });
  var Ce = (new _e(2,null),
  ke)
    , Ne = function(t) {
      function e() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce;
          $t(this, e);
          var i = te(this, t.call(this));
          return i.revision = n,
          i
      }
      return Zt(e, t),
      e.create = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce;
          return new _e(this.id,new e(t))
      }
      ,
      e.prototype.value = function() {
          return this.revision
      }
      ,
      e.prototype.dirty = function() {
          this.revision = ++Ce
      }
      ,
      e
  }(Se);
  u(Ne);
  var Oe = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.lastChecked = null,
          n.lastValue = null,
          n
      }
      return Zt(e, t),
      e.prototype.value = function() {
          var t = this.lastChecked;
          this.lastValue;
          return t !== Ce && (this.lastChecked = Ce,
          this.lastValue = this.compute()),
          this.lastValue
      }
      ,
      e.prototype.invalidate = function() {
          this.lastChecked = null
      }
      ,
      e
  }(Se)
    , Te = function(t) {
      function e(n, i) {
          $t(this, e);
          var r = te(this, t.call(this));
          return r.first = n,
          r.second = i,
          r
      }
      return Zt(e, t),
      e.create = function(t, n) {
          return new _e(this.id,new e(t,n))
      }
      ,
      e.prototype.compute = function() {
          return Math.max(this.first.value(), this.second.value())
      }
      ,
      e
  }(Oe);
  u(Te);
  var De = function(t) {
      function e(n) {
          $t(this, e);
          var i = te(this, t.call(this));
          return i.tags = n,
          i
      }
      return Zt(e, t),
      e.create = function(t) {
          return new _e(this.id,new e(t))
      }
      ,
      e.prototype.compute = function() {
          for (var t = this.tags, e = -1, n = 0; n < t.length; n++) {
              var i = t[n].value();
              e = Math.max(i, e)
          }
          return e
      }
      ,
      e
  }(Oe);
  u(De);
  var Me = function(t) {
      function e(n) {
          $t(this, e);
          var i = te(this, t.call(this));
          return i.tag = n,
          i.lastUpdated = ke,
          i
      }
      return Zt(e, t),
      e.create = function(t) {
          return new _e(this.id,new e(t))
      }
      ,
      e.prototype.compute = function() {
          return Math.max(this.lastUpdated, this.tag.value())
      }
      ,
      e.prototype.update = function(t) {
          t !== this.tag && (this.tag = t,
          this.lastUpdated = Ce,
          this.invalidate())
      }
      ,
      e
  }(Oe);
  u(Me);
  var Be, Pe = function() {
      function t() {
          $t(this, t),
          this.lastRevision = null,
          this.lastValue = null
      }
      return t.prototype.value = function() {
          var t = this.tag
            , e = this.lastRevision
            , n = this.lastValue;
          return e && t.validate(e) || (n = this.lastValue = this.compute(),
          this.lastRevision = t.value()),
          n
      }
      ,
      t.prototype.invalidate = function() {
          this.lastRevision = null
      }
      ,
      t
  }(), Le = function(t) {
      function e(n, i) {
          $t(this, e);
          var r = te(this, t.call(this));
          return r.tag = n.tag,
          r.reference = n,
          r.mapper = i,
          r
      }
      return Zt(e, t),
      e.prototype.compute = function() {
          var t = this.reference;
          return (0,
          this.mapper)(t.value())
      }
      ,
      e
  }(Pe), Re = function() {
      function t(e) {
          $t(this, t),
          this.lastValue = null,
          this.lastRevision = null,
          this.initialized = !1,
          this.tag = e.tag,
          this.reference = e
      }
      return t.prototype.peek = function() {
          return this.initialized ? this.lastValue : this.initialize()
      }
      ,
      t.prototype.revalidate = function() {
          if (!this.initialized)
              return this.initialize();
          var t = this.reference
            , e = this.lastRevision
            , n = t.tag;
          if (n.validate(e))
              return Ie;
          this.lastRevision = n.value();
          var i = this.lastValue
            , r = t.value();
          return r === i ? Ie : (this.lastValue = r,
          r)
      }
      ,
      t.prototype.initialize = function() {
          var t = this.reference
            , e = this.lastValue = t.value();
          return this.lastRevision = t.tag.value(),
          this.initialized = !0,
          e
      }
      ,
      t
  }(), Ie = "adb3b78e-3d22-4e4b-877a-6317c2c5c145", Fe = function() {
      function t(e) {
          $t(this, t),
          this.inner = e,
          this.tag = Ae
      }
      return t.prototype.value = function() {
          return this.inner
      }
      ,
      t
  }(), je = function(t) {
      function e(n, i) {
          $t(this, e);
          var r = te(this, t.call(this, n.valueReferenceFor(i)));
          return r.retained = !1,
          r.seen = !1,
          r.key = i.key,
          r.iterable = n,
          r.memo = n.memoReferenceFor(i),
          r
      }
      return Zt(e, t),
      e.prototype.update = function(t) {
          this.retained = !0,
          this.iterable.updateValueReference(this.value, t),
          this.iterable.updateMemoReference(this.memo, t)
      }
      ,
      e.prototype.shouldRemove = function() {
          return !this.retained
      }
      ,
      e.prototype.reset = function() {
          this.retained = !1,
          this.seen = !1
      }
      ,
      e
  }(pe), Ue = function() {
      function t(e) {
          $t(this, t),
          this.map = a(),
          this.list = new ce,
          this.tag = e.tag,
          this.iterable = e
      }
      return t.prototype.isEmpty = function() {
          return (this.iterator = this.iterable.iterate()).isEmpty()
      }
      ,
      t.prototype.iterate = function() {
          var t = this.iterator || this.iterable.iterate();
          return this.iterator = null,
          t
      }
      ,
      t.prototype.has = function(t) {
          return !!this.map[t]
      }
      ,
      t.prototype.get = function(t) {
          return this.map[t]
      }
      ,
      t.prototype.wasSeen = function(t) {
          var e = this.map[t];
          return e && e.seen
      }
      ,
      t.prototype.append = function(t) {
          var e = this.map
            , n = this.list
            , i = this.iterable
            , r = e[t.key] = new je(i,t);
          return n.append(r),
          r
      }
      ,
      t.prototype.insertBefore = function(t, e) {
          var n = this.map
            , i = this.list
            , r = this.iterable
            , o = n[t.key] = new je(r,t);
          return o.retained = !0,
          i.insertBefore(o, e),
          o
      }
      ,
      t.prototype.move = function(t, e) {
          var n = this.list;
          t.retained = !0,
          n.remove(t),
          n.insertBefore(t, e)
      }
      ,
      t.prototype.remove = function(t) {
          this.list.remove(t),
          delete this.map[t.key]
      }
      ,
      t.prototype.nextNode = function(t) {
          return this.list.nextNode(t)
      }
      ,
      t.prototype.head = function() {
          return this.list.head()
      }
      ,
      t
  }(), He = function() {
      function t(e) {
          $t(this, t),
          this.iterator = null;
          var n = new Ue(e);
          this.artifacts = n
      }
      return t.prototype.next = function() {
          var t = this.artifacts
            , e = this.iterator = this.iterator || t.iterate()
            , n = e.next();
          return n ? t.append(n) : null
      }
      ,
      t
  }();
  !function(t) {
      t[t.Append = 0] = "Append",
      t[t.Prune = 1] = "Prune",
      t[t.Done = 2] = "Done"
  }(Be || (Be = {}));
  var ze = function() {
      function t(e) {
          var n = e.target
            , i = e.artifacts;
          $t(this, t),
          this.target = n,
          this.artifacts = i,
          this.iterator = i.iterate(),
          this.current = i.head()
      }
      return t.prototype.sync = function() {
          for (var t = Be.Append; ; )
              switch (t) {
              case Be.Append:
                  t = this.nextAppend();
                  break;
              case Be.Prune:
                  t = this.nextPrune();
                  break;
              case Be.Done:
                  return void this.nextDone()
              }
      }
      ,
      t.prototype.advanceToKey = function(t) {
          for (var e = this.current, n = this.artifacts, i = e; i && i.key !== t; )
              i.seen = !0,
              i = n.nextNode(i);
          this.current = i && n.nextNode(i)
      }
      ,
      t.prototype.nextAppend = function() {
          var t = this.iterator
            , e = this.current
            , n = this.artifacts
            , i = t.next();
          if (null === i)
              return this.startPrune();
          var r = i.key;
          return e && e.key === r ? this.nextRetain(i) : n.has(r) ? this.nextMove(i) : this.nextInsert(i),
          Be.Append
      }
      ,
      t.prototype.nextRetain = function(t) {
          var e = this.artifacts
            , n = this.current;
          n.update(t),
          this.current = e.nextNode(n),
          this.target.retain(t.key, n.value, n.memo)
      }
      ,
      t.prototype.nextMove = function(t) {
          var e = this.current
            , n = this.artifacts
            , i = this.target
            , r = t.key
            , o = n.get(t.key);
          o.update(t),
          n.wasSeen(t.key) ? (n.move(o, e),
          i.move(o.key, o.value, o.memo, e ? e.key : null)) : this.advanceToKey(r)
      }
      ,
      t.prototype.nextInsert = function(t) {
          var e = this.artifacts
            , n = this.target
            , i = this.current
            , r = e.insertBefore(t, i);
          n.insert(r.key, r.value, r.memo, i ? i.key : null)
      }
      ,
      t.prototype.startPrune = function() {
          return this.current = this.artifacts.head(),
          Be.Prune
      }
      ,
      t.prototype.nextPrune = function() {
          var t = this.artifacts
            , e = this.target
            , n = this.current;
          if (null === n)
              return Be.Done;
          var i = n;
          return this.current = t.nextNode(i),
          i.shouldRemove() ? (t.remove(i),
          e.delete(i.key)) : i.reset(),
          Be.Prune
      }
      ,
      t.prototype.nextDone = function() {
          this.target.done()
      }
      ,
      t
  }()
    , We = function(t) {
      function e(n) {
          $t(this, e);
          var i = te(this, t.call(this));
          return i.parts = n,
          i.tag = p(n),
          i
      }
      return Zt(e, t),
      e.prototype.compute = function() {
          for (var t = new Array, e = 0; e < this.parts.length; e++) {
              var n = this.parts[e].value();
              null !== n && void 0 !== n && (t[e] = y(n))
          }
          return t.length > 0 ? t.join("") : null
      }
      ,
      e
  }(Pe)
    , Ve = function(t) {
      function e(n) {
          return $t(this, e),
          te(this, t.call(this, n))
      }
      return Zt(e, t),
      e.create = function(t) {
          return void 0 === t ? Xe : null === t ? qe : !0 === t ? Ke : !1 === t ? Je : "number" == typeof t ? new Ye(t) : new Ge(t)
      }
      ,
      e.prototype.get = function(t) {
          return Xe
      }
      ,
      e
  }(Fe)
    , Ge = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.lengthReference = null,
          n
      }
      return Zt(e, t),
      e.prototype.get = function(e) {
          if ("length" === e) {
              var n = this.lengthReference;
              return null === n && (n = this.lengthReference = new Ye(this.inner.length)),
              n
          }
          return t.prototype.get.call(this, e)
      }
      ,
      e
  }(Ve)
    , Ye = function(t) {
      function e(n) {
          return $t(this, e),
          te(this, t.call(this, n))
      }
      return Zt(e, t),
      e
  }(Ve)
    , Xe = new Ye(void 0)
    , qe = new Ye(null)
    , Ke = new Ye(!0)
    , Je = new Ye(!1)
    , $e = function() {
      function t(e) {
          $t(this, t),
          this.inner = e,
          this.tag = e.tag
      }
      return t.prototype.value = function() {
          return this.toBool(this.inner.value())
      }
      ,
      t.prototype.toBool = function(t) {
          return !!t
      }
      ,
      t
  }();
  ve.add(1, function(t, e) {
      var n = e.op1
        , i = t.stack
        , r = t.constants.getFunction(n)
        , o = i.pop()
        , s = r(t, o);
      o.clear(),
      t.stack.push(s)
  }),
  ve.add(2, function(t, e) {
      var n = e.op1
        , i = t.constants.getFunction(n);
      t.stack.push(i(t))
  }),
  ve.add(5, function(t, e) {
      var n = e.op1
        , i = t.referenceForSymbol(n);
      t.stack.push(i)
  }),
  ve.add(4, function(t, e) {
      var n = e.op1
        , i = t.stack.pop();
      t.scope().bindSymbol(n, i)
  }),
  ve.add(70, function(t, e) {
      var n = e.op1
        , i = t.constants.getString(n)
        , r = t.scope().getPartialMap()
        , o = r[i];
      void 0 === o && (o = t.getSelf().get(i)),
      t.stack.push(o)
  }),
  ve.add(19, function(t, e) {
      var n = e.op1
        , i = e.op2;
      t.pushRootScope(n, !!i)
  }),
  ve.add(6, function(t, e) {
      var n = e.op1
        , i = t.constants.getString(n)
        , r = t.stack.pop();
      t.stack.push(r.get(i))
  }),
  ve.add(7, function(t, e) {
      var n = e.op1
        , i = n ? t.constants.getBlock(n) : null;
      t.stack.push(i)
  }),
  ve.add(8, function(t, e) {
      var n = e.op1;
      t.stack.push(t.scope().getBlock(n))
  }),
  ve.add(9, function(t, e) {
      var n = e.op1
        , i = !!t.scope().getBlock(n);
      t.stack.push(i ? Ke : Je)
  }),
  ve.add(10, function(t, e) {
      var n = e.op1
        , i = t.scope().getBlock(n)
        , r = i && i.symbolTable.parameters.length;
      t.stack.push(r ? Ke : Je)
  }),
  ve.add(11, function(t, e) {
      for (var n = e.op1, i = [], r = n; r > 0; r--)
          i.push(t.stack.pop());
      t.stack.push(new We(i.reverse()))
  }),
  ve.add(20, function(t) {
      return t.pushChildScope()
  }),
  ve.add(21, function(t) {
      return t.popScope()
  }),
  ve.add(38, function(t) {
      return t.pushDynamicScope()
  }),
  ve.add(39, function(t) {
      return t.popDynamicScope()
  }),
  ve.add(12, function(t, e) {
      var n = e.op1;
      t.stack.push(n)
  }),
  ve.add(13, function(t, e) {
      var n = e.op1;
      t.stack.push(t.constants.getOther(n))
  }),
  ve.add(14, function(t, e) {
      var n = e.op1
        , i = t.stack
        , r = (n & 3 << 30) >>> 30
        , o = n & ~(3 << 30);
      switch (r) {
      case 0:
          i.push(Ve.create(o));
          break;
      case 1:
          i.push(Ve.create(t.constants.getString(o)));
          break;
      case 2:
          switch (o) {
          case 0:
              i.push(Je);
              break;
          case 1:
              i.push(Ke);
              break;
          case 2:
              i.push(qe);
              break;
          case 3:
              i.push(Xe)
          }
      }
  }),
  ve.add(15, function(t, e) {
      var n = e.op1
        , i = e.op2
        , r = t.fetchValue(n) - i;
      t.stack.dup(r)
  }),
  ve.add(16, function(t, e) {
      var n = e.op1;
      return t.stack.pop(n)
  }),
  ve.add(17, function(t, e) {
      var n = e.op1;
      return t.load(n)
  }),
  ve.add(18, function(t, e) {
      var n = e.op1;
      return t.fetch(n)
  }),
  ve.add(37, function(t, e) {
      var n = e.op1
        , i = t.constants.getArray(n);
      t.bindDynamicScope(i)
  }),
  ve.add(46, function(t) {
      return t.pushFrame()
  }),
  ve.add(47, function(t) {
      return t.popFrame()
  }),
  ve.add(48, function(t, e) {
      var n = e.op1;
      return t.enter(n)
  }),
  ve.add(49, function(t) {
      return t.exit()
  }),
  ve.add(40, function(t) {
      var e = t.stack
        , n = e.pop();
      e.push(n ? n.compileDynamic(t.env) : null)
  }),
  ve.add(41, function(t, e) {
      var n = e.op1
        , i = t.constants.getBlock(n)
        , r = i.compileStatic(t.env);
      t.call(r.start)
  }),
  ve.add(42, function(t, e) {
      var n = e.op1
        , i = t.constants.getOther(n)
        , r = t.stack.pop();
      i.invoke(t, r)
  }),
  ve.add(43, function(t, e) {
      var n = e.op1;
      return t.goto(n)
  }),
  ve.add(44, function(t, e) {
      var n = e.op1
        , i = t.stack.pop();
      if (m(i))
          i.value() && t.goto(n);
      else {
          var r = new Re(i);
          r.peek() && t.goto(n),
          t.updateWith(new en(r))
      }
  }),
  ve.add(45, function(t, e) {
      var n = e.op1
        , i = t.stack.pop();
      if (m(i))
          i.value() || t.goto(n);
      else {
          var r = new Re(i);
          r.peek() || t.goto(n),
          t.updateWith(new en(r))
      }
  }),
  ve.add(22, function(t) {
      return t.return()
  });
  var Qe = function(t, e) {
      return new Fe(!!t.value())
  }
    , Ze = function(t, e) {
      return t
  }
    , tn = function(t, e) {
      return e.toConditionalReference(t)
  };
  ve.add(50, function(t, e) {
      var n = e.op1
        , i = t.stack
        , r = i.pop()
        , o = t.constants.getFunction(n);
      i.push(o(r, t.env))
  });
  var en = function(t) {
      function e(n) {
          $t(this, e);
          var i = te(this, t.call(this));
          return i.type = "assert",
          i.tag = n.tag,
          i.cache = n,
          i
      }
      return Zt(e, t),
      e.prototype.evaluate = function(t) {
          d(this.cache.revalidate()) && t.throw()
      }
      ,
      e
  }(be)
    , nn = function(t) {
      function e(n, i) {
          $t(this, e);
          var r = te(this, t.call(this));
          return r.target = i,
          r.type = "jump-if-not-modified",
          r.tag = n,
          r.lastRevision = n.value(),
          r
      }
      return Zt(e, t),
      e.prototype.evaluate = function(t) {
          var e = this.tag
            , n = this.target
            , i = this.lastRevision;
          !t.alwaysRevalidate && e.validate(i) && t.goto(n)
      }
      ,
      e.prototype.didModify = function() {
          this.lastRevision = this.tag.value()
      }
      ,
      e
  }(be)
    , rn = function(t) {
      function e(n) {
          $t(this, e);
          var i = te(this, t.call(this));
          return i.target = n,
          i.type = "did-modify",
          i.tag = Ae,
          i
      }
      return Zt(e, t),
      e.prototype.evaluate = function() {
          this.target.didModify()
      }
      ,
      e
  }(be)
    , on = function() {
      function t(e) {
          $t(this, t),
          this.tag = Ae,
          this.type = "label",
          this.label = null,
          this.prev = null,
          this.next = null,
          r(this),
          e && (this.label = e)
      }
      return t.prototype.evaluate = function() {}
      ,
      t.prototype.inspect = function() {
          return this.label + " [" + this._guid + "]"
      }
      ,
      t
  }()
    , sn = function() {
      function t() {
          $t(this, t),
          this.stack = null,
          this.positional = new an,
          this.named = new pn
      }
      return t.prototype.empty = function() {
          return this.setup(null, 0, !0),
          this
      }
      ,
      t.prototype.setup = function(t, e, n) {
          this.stack = t;
          var i = t.fromTop(0)
            , r = i.length
            , o = e + r + 1;
          this.positional.setup(t, o, e),
          this.named.setup(t, r, i, n)
      }
      ,
      t.prototype.at = function(t) {
          return this.positional.at(t)
      }
      ,
      t.prototype.get = function(t) {
          return this.named.get(t)
      }
      ,
      t.prototype.capture = function() {
          return {
              tag: this.tag,
              length: this.length,
              positional: this.positional.capture(),
              named: this.named.capture()
          }
      }
      ,
      t.prototype.clear = function() {
          for (var t = this.stack, e = this.length, n = e + 1; --n >= 0; )
              t.pop()
      }
      ,
      Qt(t, [{
          key: "tag",
          get: function() {
              return p([this.positional, this.named])
          }
      }, {
          key: "length",
          get: function() {
              return this.positional.length + this.named.length
          }
      }]),
      t
  }()
    , an = function() {
      function t() {
          $t(this, t),
          this.length = 0,
          this.stack = null,
          this.start = 0,
          this._tag = null,
          this._references = null
      }
      return t.prototype.setup = function(t, e, n) {
          this.stack = t,
          this.start = e,
          this.length = n,
          this._tag = null,
          this._references = null
      }
      ,
      t.prototype.at = function(t) {
          var e = this.start
            , n = this.length;
          if (t < 0 || t >= n)
              return Xe;
          var i = e - t - 1;
          return this.stack.fromTop(i)
      }
      ,
      t.prototype.capture = function() {
          return new un(this.tag,this.references)
      }
      ,
      Qt(t, [{
          key: "tag",
          get: function() {
              var t = this._tag;
              return t || (t = this._tag = p(this.references)),
              t
          }
      }, {
          key: "references",
          get: function() {
              var t = this._references;
              if (!t) {
                  var e = this.length;
                  t = this._references = new Array(e);
                  for (var n = 0; n < e; n++)
                      t[n] = this.at(n)
              }
              return t
          }
      }]),
      t
  }()
    , un = function() {
      function t(e, n) {
          var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.length;
          $t(this, t),
          this.tag = e,
          this.references = n,
          this.length = i
      }
      return t.prototype.at = function(t) {
          return this.references[t]
      }
      ,
      t.prototype.value = function() {
          return this.references.map(this.valueOf)
      }
      ,
      t.prototype.get = function(t) {
          var e = this.references
            , n = this.length;
          if ("length" === t)
              return Ve.create(n);
          var i = parseInt(t, 10);
          return i < 0 || i >= n ? Xe : e[i]
      }
      ,
      t.prototype.valueOf = function(t) {
          return t.value()
      }
      ,
      t
  }()
    , pn = function() {
      function t() {
          $t(this, t),
          this.length = 0,
          this._tag = null,
          this._references = null,
          this._names = null,
          this._realNames = me
      }
      return t.prototype.setup = function(t, e, n, i) {
          this.stack = t,
          this.length = e,
          this._tag = null,
          this._references = null,
          i ? (this._names = n,
          this._realNames = me) : (this._names = null,
          this._realNames = n)
      }
      ,
      t.prototype.has = function(t) {
          return -1 !== this.names.indexOf(t)
      }
      ,
      t.prototype.get = function(t) {
          var e = this.names
            , n = this.length
            , i = e.indexOf(t);
          if (-1 === i)
              return Xe;
          var r = n - i;
          return this.stack.fromTop(r)
      }
      ,
      t.prototype.capture = function() {
          return new cn(this.tag,this.names,this.references)
      }
      ,
      t.prototype.sliceName = function(t) {
          return t.slice(1)
      }
      ,
      Qt(t, [{
          key: "tag",
          get: function() {
              return p(this.references)
          }
      }, {
          key: "names",
          get: function() {
              var t = this._names;
              return t || (t = this._names = this._realNames.map(this.sliceName)),
              t
          }
      }, {
          key: "references",
          get: function() {
              var t = this._references;
              if (!t) {
                  var e = this.names
                    , n = this.length;
                  t = this._references = [];
                  for (var i = 0; i < n; i++)
                      t[i] = this.get(e[i])
              }
              return t
          }
      }]),
      t
  }()
    , cn = function() {
      function t(e, n, i) {
          $t(this, t),
          this.tag = e,
          this.names = n,
          this.references = i,
          this.length = n.length,
          this._map = null
      }
      return t.prototype.has = function(t) {
          return -1 !== this.names.indexOf(t)
      }
      ,
      t.prototype.get = function(t) {
          var e = this.names
            , n = this.references
            , i = e.indexOf(t);
          return -1 === i ? Xe : n[i]
      }
      ,
      t.prototype.value = function() {
          var t = this.names
            , e = this.references
            , n = a();
          return t.forEach(function(t, i) {
              return n[t] = e[i].value()
          }),
          n
      }
      ,
      Qt(t, [{
          key: "map",
          get: function() {
              var t = this._map;
              if (!t) {
                  var e = this.names
                    , n = this.references;
                  t = this._map = a(),
                  e.forEach(function(e, i) {
                      return t[e] = n[i]
                  })
              }
              return t
          }
      }]),
      t
  }()
    , ln = new sn;
  ve.add(23, function(t, e) {
      var n = e.op1;
      t.elements().appendText(t.constants.getString(n))
  }),
  ve.add(24, function(t, e) {
      var n = e.op1;
      t.elements().appendComment(t.constants.getString(n))
  }),
  ve.add(26, function(t, e) {
      var n = e.op1;
      t.elements().openElement(t.constants.getString(n))
  }),
  ve.add(27, function(t, e) {
      var n = e.op1
        , i = t.constants.getString(n)
        , r = t.stack.pop();
      t.elements().openElement(i, r)
  }),
  ve.add(28, function(t) {
      var e = t.stack.pop()
        , n = t.stack.pop().value();
      t.elements().openElement(n, e)
  }),
  ve.add(35, function(t) {
      var e = t.stack.pop()
        , n = t.stack.pop()
        , i = void 0
        , r = void 0;
      if (m(e))
          i = e.value();
      else {
          var o = new Re(e);
          i = o.peek(),
          t.updateWith(new en(o))
      }
      if (m(n))
          r = n.value();
      else {
          var s = new Re(n);
          r = s.peek(),
          t.updateWith(new en(s))
      }
      t.elements().pushRemoteElement(i, r)
  }),
  ve.add(36, function(t) {
      return t.elements().popRemoteElement()
  });
  var hn = function() {
      function t() {
          $t(this, t),
          this.list = null,
          this.isConst = !0
      }
      return t.prototype.append = function(t) {
          var e = this.list
            , n = this.isConst;
          null === e && (e = this.list = []),
          e.push(t),
          this.isConst = n && m(t)
      }
      ,
      t.prototype.toReference = function() {
          var t = this.list
            , e = this.isConst;
          return t ? e ? Ve.create(v(t)) : new fn(t) : qe
      }
      ,
      t
  }()
    , fn = function(t) {
      function e(n) {
          $t(this, e);
          var i = te(this, t.call(this));
          return i.list = [],
          i.tag = p(n),
          i.list = n,
          i
      }
      return Zt(e, t),
      e.prototype.compute = function() {
          return v(this.list)
      }
      ,
      e
  }(Pe)
    , dn = function() {
      function t(e) {
          $t(this, t),
          this.env = e,
          this.opcodes = null,
          this.classList = null
      }
      return t.prototype.addStaticAttribute = function(t, e, n) {
          "class" === e ? this.addClass(Ve.create(n)) : this.env.getAppendOperations().setAttribute(t, e, n)
      }
      ,
      t.prototype.addStaticAttributeNS = function(t, e, n, i) {
          this.env.getAppendOperations().setAttribute(t, n, i, e)
      }
      ,
      t.prototype.addDynamicAttribute = function(t, e, n, i) {
          if ("class" === e)
              this.addClass(n);
          else {
              var r = this.env.attributeFor(t, e, i)
                , o = new gn(t,r,e,n);
              this.addAttribute(o)
          }
      }
      ,
      t.prototype.addDynamicAttributeNS = function(t, e, n, i, r) {
          var o = this.env.attributeFor(t, n, r, e)
            , s = new gn(t,o,n,i,e);
          this.addAttribute(s)
      }
      ,
      t.prototype.flush = function(t, e) {
          for (var n = e.env, i = this.opcodes, r = this.classList, o = 0; i && o < i.length; o++)
              e.updateWith(i[o]);
          if (r) {
              var s = n.attributeFor(t, "class", !1)
                , a = new gn(t,s,"class",r.toReference())
                , u = a.flush(n);
              u && e.updateWith(u)
          }
          this.opcodes = null,
          this.classList = null
      }
      ,
      t.prototype.addClass = function(t) {
          var e = this.classList;
          e || (e = this.classList = new hn),
          e.append(t)
      }
      ,
      t.prototype.addAttribute = function(t) {
          var e = t.flush(this.env);
          if (e) {
              var n = this.opcodes;
              n || (n = this.opcodes = []),
              n.push(e)
          }
      }
      ,
      t
  }()
    , mn = function() {
      function t(e) {
          $t(this, t),
          this.env = e,
          this.attributeNames = null,
          this.attributes = null,
          this.classList = null
      }
      return t.prototype.addStaticAttribute = function(t, e, n) {
          "class" === e ? this.addClass(Ve.create(n)) : this.shouldAddAttribute(e) && this.addAttribute(e, new vn(t,e,n))
      }
      ,
      t.prototype.addStaticAttributeNS = function(t, e, n, i) {
          this.shouldAddAttribute(n) && this.addAttribute(n, new vn(t,n,i,e))
      }
      ,
      t.prototype.addDynamicAttribute = function(t, e, n, i) {
          if ("class" === e)
              this.addClass(n);
          else if (this.shouldAddAttribute(e)) {
              var r = this.env.attributeFor(t, e, i)
                , o = new gn(t,r,e,n);
              this.addAttribute(e, o)
          }
      }
      ,
      t.prototype.addDynamicAttributeNS = function(t, e, n, i, r) {
          if (this.shouldAddAttribute(n)) {
              var o = this.env.attributeFor(t, n, r, e)
                , s = new gn(t,o,n,i,e);
              this.addAttribute(n, s)
          }
      }
      ,
      t.prototype.flush = function(t, e) {
          for (var n = this.env, i = this.attributes, r = this.classList, o = 0; i && o < i.length; o++) {
              var s = i[o].flush(n);
              s && e.updateWith(s)
          }
          if (r) {
              var a = n.attributeFor(t, "class", !1)
                , u = new gn(t,a,"class",r.toReference())
                , p = u.flush(n);
              p && e.updateWith(p)
          }
      }
      ,
      t.prototype.shouldAddAttribute = function(t) {
          return !this.attributeNames || -1 === this.attributeNames.indexOf(t)
      }
      ,
      t.prototype.addClass = function(t) {
          var e = this.classList;
          e || (e = this.classList = new hn),
          e.append(t)
      }
      ,
      t.prototype.addAttribute = function(t, e) {
          var n = this.attributeNames
            , i = this.attributes;
          n || (n = this.attributeNames = [],
          i = this.attributes = []),
          n.push(t),
          i.push(e)
      }
      ,
      t
  }();
  ve.add(32, function(t) {
      var e = t.elements()
        , n = "FlushElementOpcode#evaluate";
      e.expectOperations(n).flush(e.expectConstructing(n), t),
      e.flushElement()
  }),
  ve.add(33, function(t) {
      return t.elements().closeElement()
  }),
  ve.add(29, function(t, e) {
      var n = e.op1
        , i = e.op2
        , r = e.op3
        , o = t.constants.getString(n)
        , s = t.constants.getString(i);
      if (r) {
          var a = t.constants.getString(r);
          t.elements().setStaticAttributeNS(a, o, s)
      } else
          t.elements().setStaticAttribute(o, s)
  }),
  ve.add(34, function(t, e) {
      var n = e.op1
        , i = t.constants.getOther(n)
        , r = t.stack
        , o = r.pop()
        , s = o.tag
        , a = t.elements()
        , u = a.constructing
        , p = a.updateOperations
        , c = t.dynamicScope()
        , l = i.create(u, o, c, p);
      o.clear(),
      t.env.scheduleInstallModifier(l, i);
      var h = i.getDestructor(l);
      h && t.newDestroyable(h),
      t.updateWith(new yn(s,i,l))
  });
  var yn = function(t) {
      function e(n, i, r) {
          $t(this, e);
          var o = te(this, t.call(this));
          return o.tag = n,
          o.manager = i,
          o.modifier = r,
          o.type = "update-modifier",
          o.lastUpdated = n.value(),
          o
      }
      return Zt(e, t),
      e.prototype.evaluate = function(t) {
          var e = this.manager
            , n = this.modifier
            , i = this.tag
            , r = this.lastUpdated;
          i.validate(r) || (t.env.scheduleUpdateModifier(n, e),
          this.lastUpdated = i.value())
      }
      ,
      e
  }(be)
    , vn = function() {
      function t(e, n, i, r) {
          $t(this, t),
          this.element = e,
          this.name = n,
          this.value = i,
          this.namespace = r
      }
      return t.prototype.flush = function(t) {
          return t.getAppendOperations().setAttribute(this.element, this.name, this.value, this.namespace),
          null
      }
      ,
      t
  }()
    , gn = function() {
      function t(e, n, i, r, o) {
          $t(this, t),
          this.element = e,
          this.attributeManager = n,
          this.name = i,
          this.reference = r,
          this.namespace = o,
          this.cache = null,
          this.tag = r.tag
      }
      return t.prototype.patch = function(t) {
          var e = this.element
            , n = this.cache
            , i = n.revalidate();
          d(i) && this.attributeManager.updateAttribute(t, e, i, this.namespace)
      }
      ,
      t.prototype.flush = function(t) {
          var e = this.reference
            , n = this.element;
          if (m(e)) {
              var i = e.value();
              return this.attributeManager.setAttribute(t, n, i, this.namespace),
              null
          }
          var r = this.cache = new Re(e)
            , o = r.peek();
          return this.attributeManager.setAttribute(t, n, o, this.namespace),
          new bn(this)
      }
      ,
      t
  }();
  ve.add(31, function(t, e) {
      var n = e.op1
        , i = e.op2
        , r = e.op3
        , o = t.constants.getString(n)
        , s = t.constants.getString(i)
        , a = t.stack.pop();
      t.elements().setDynamicAttributeNS(s, o, a, !!r)
  }),
  ve.add(30, function(t, e) {
      var n = e.op1
        , i = e.op2
        , r = t.constants.getString(n)
        , o = t.stack.pop();
      t.elements().setDynamicAttribute(r, o, !!i)
  });
  var bn = function(t) {
      function e(n) {
          $t(this, e);
          var i = te(this, t.call(this));
          return i.type = "patch-element",
          i.tag = n.tag,
          i.operation = n,
          i
      }
      return Zt(e, t),
      e.prototype.evaluate = function(t) {
          this.operation.patch(t.env)
      }
      ,
      e
  }(be);
  ve.add(55, function(t, e) {
      var n = e.op1
        , i = t.constants.getOther(n)
        , r = t.stack;
      r.push(i),
      r.push(i.manager)
  }),
  ve.add(56, function(t) {
      var e = t.stack
        , n = e.pop()
        , i = m(n) ? void 0 : new Re(n)
        , r = i ? i.peek() : n.value();
      e.push(r),
      e.push(r.manager),
      i && t.updateWith(new en(i))
  }),
  ve.add(57, function(t) {
      var e = t.stack
        , n = e.pop()
        , i = e.pop();
      e.push({
          definition: i,
          manager: n,
          component: null
      })
  }),
  ve.add(58, function(t, e) {
      var n = e.op1
        , i = e.op2
        , r = t.stack;
      ln.setup(r, n, !!i),
      r.push(ln)
  }),
  ve.add(59, function(t, e) {
      var n = e.op1
        , i = t.stack
        , r = t.fetchValue(n)
        , o = r.definition
        , s = r.manager
        , a = i.pop()
        , u = s.prepareArgs(o, a);
      if (u) {
          a.clear();
          for (var p = u.positional, c = u.named, l = p.length, h = 0; h < l; h++)
              i.push(p[h]);
          for (var f = Object.keys(c), d = f.length, m = 0; m < d; m++)
              i.push(c[f[m]]);
          i.push(f),
          a.setup(i, l, !0)
      }
      i.push(a)
  }),
  ve.add(60, function(t, e) {
      var n, i = e.op1, r = e.op2, o = void 0, s = void 0, a = t.stack.pop(), u = t.dynamicScope(), p = (n = t.fetchValue(r),
      o = n.definition,
      s = n.manager,
      n), c = 1 & i, l = s.create(t.env, o, a, u, t.getSelf(), !!c);
      p.component = l,
      t.updateWith(new kn(a.tag,o.name,l,s,u))
  }),
  ve.add(61, function(t, e) {
      var n = e.op1
        , i = t.fetchValue(n)
        , r = i.manager
        , o = i.component
        , s = r.getDestructor(o);
      s && t.newDestroyable(s)
  }),
  ve.add(65, function(t) {
      t.beginCacheGroup(),
      t.elements().pushSimpleBlock()
  }),
  ve.add(62, function(t) {
      t.stack.push(new mn(t.env))
  }),
  ve.add(67, function(t, e) {
      var n = e.op1
        , i = t.fetchValue(n)
        , r = i.manager
        , o = i.component
        , s = "DidCreateElementOpcode#evaluate";
      r.didCreateElement(o, t.elements().expectConstructing(s), t.elements().expectOperations(s))
  }),
  ve.add(63, function(t, e) {
      var n = e.op1
        , i = t.fetchValue(n);
      t.stack.push(i.manager.getSelf(i.component))
  }),
  ve.add(64, function(t, e) {
      var n = e.op1
        , i = t.fetchValue(n)
        , r = i.manager
        , o = i.definition
        , s = i.component;
      t.stack.push(r.layoutFor(o, s, t.env))
  }),
  ve.add(68, function(t, e) {
      var n = e.op1
        , i = t.fetchValue(n)
        , r = i.manager
        , o = i.component
        , s = t.elements().popBlock();
      r.didRenderLayout(o, s),
      t.env.didCreate(o, r),
      t.updateWith(new Sn(r,o,s))
  }),
  ve.add(66, function(t) {
      return t.commitCacheGroup()
  });
  var kn = function(t) {
      function e(n, i, r, o, s) {
          $t(this, e);
          var a = te(this, t.call(this));
          a.name = i,
          a.component = r,
          a.manager = o,
          a.dynamicScope = s,
          a.type = "update-component";
          var u = o.getTag(r);
          return a.tag = u ? l([n, u]) : n,
          a
      }
      return Zt(e, t),
      e.prototype.evaluate = function(t) {
          var e = this.component
            , n = this.manager
            , i = this.dynamicScope;
          n.update(e, i)
      }
      ,
      e
  }(be)
    , Sn = function(t) {
      function e(n, i, r) {
          $t(this, e);
          var o = te(this, t.call(this));
          return o.manager = n,
          o.component = i,
          o.bounds = r,
          o.type = "did-update-layout",
          o.tag = Ae,
          o
      }
      return Zt(e, t),
      e.prototype.evaluate = function(t) {
          var e = this.manager
            , n = this.component
            , i = this.bounds;
          e.didUpdateLayout(n, i),
          t.env.didUpdate(n, e)
      }
      ,
      e
  }(be)
    , wn = function t(e, n) {
      $t(this, t),
      this.element = e,
      this.nextSibling = n
  }
    , En = function() {
      function t(e, n, i) {
          $t(this, t),
          this.parentNode = e,
          this.first = n,
          this.last = i
      }
      return t.prototype.parentElement = function() {
          return this.parentNode
      }
      ,
      t.prototype.firstNode = function() {
          return this.first
      }
      ,
      t.prototype.lastNode = function() {
          return this.last
      }
      ,
      t
  }()
    , _n = function() {
      function t(e, n) {
          $t(this, t),
          this.parentNode = e,
          this.node = n
      }
      return t.prototype.parentElement = function() {
          return this.parentNode
      }
      ,
      t.prototype.firstNode = function() {
          return this.node
      }
      ,
      t.prototype.lastNode = function() {
          return this.node
      }
      ,
      t
  }()
    , An = function t(e) {
      $t(this, t),
      this.bounds = e
  }
    , xn = function(t) {
      function e(n, i) {
          $t(this, e);
          var r = te(this, t.call(this, n));
          return r.textNode = i,
          r
      }
      return Zt(e, t),
      e.insert = function(t, n, i) {
          var r = t.createTextNode(i);
          return t.insertBefore(n.element, r, n.nextSibling),
          new e(new _n(n.element,r),r)
      }
      ,
      e.prototype.update = function(t, e) {
          if (E(e)) {
              return this.textNode.nodeValue = e,
              !0
          }
          return !1
      }
      ,
      e
  }(An)
    , Cn = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.insert = function(t, n, i) {
          return new e(t.insertHTMLBefore(n.element, i, n.nextSibling))
      }
      ,
      e.prototype.update = function(t, e) {
          if (E(e)) {
              var n = this.bounds
                , i = n.parentElement()
                , r = k(n);
              return this.bounds = t.insertHTMLBefore(i, r, e),
              !0
          }
          return !1
      }
      ,
      e
  }(An)
    , Nn = function(t) {
      function e(n, i) {
          $t(this, e);
          var r = te(this, t.call(this, n));
          return r.lastStringValue = i,
          r
      }
      return Zt(e, t),
      e.insert = function(t, n, i) {
          var r = i.toHTML();
          return new e(t.insertHTMLBefore(n.element, r, n.nextSibling),r)
      }
      ,
      e.prototype.update = function(t, e) {
          if (S(e)) {
              var n = e.toHTML();
              if (n !== this.lastStringValue) {
                  var i = this.bounds
                    , r = i.parentElement()
                    , o = k(i);
                  this.bounds = t.insertHTMLBefore(r, o, n),
                  this.lastStringValue = n
              }
              return !0
          }
          return !1
      }
      ,
      e
  }(An)
    , On = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.insert = function(t, n, i) {
          return t.insertBefore(n.element, i, n.nextSibling),
          new e(g(n.element, i))
      }
      ,
      e.prototype.update = function(t, e) {
          if (w(e)) {
              var n = this.bounds
                , i = n.parentElement()
                , r = k(n);
              return this.bounds = t.insertNodeBefore(i, e, r),
              !0
          }
          return !1
      }
      ,
      e
  }(An)
    , Tn = "COMPONENT DEFINITION [id=e59c754e-61eb-4392-8c4a-2c0ac72bfcd4]"
    , Dn = function t(e, n, i) {
      $t(this, t),
      this[Tn] = !0,
      this.name = e,
      this.manager = n,
      this.ComponentClass = i
  }
    , Mn = function() {
      function t(e) {
          $t(this, t),
          this.node = e
      }
      return t.prototype.firstNode = function() {
          return this.node
      }
      ,
      t
  }()
    , Bn = function() {
      function t(e) {
          $t(this, t),
          this.node = e
      }
      return t.prototype.lastNode = function() {
          return this.node
      }
      ,
      t
  }()
    , Pn = function() {
      function t(e) {
          $t(this, t),
          this.bounds = e
      }
      return t.prototype.parentElement = function() {
          return this.bounds.parentElement()
      }
      ,
      t.prototype.firstNode = function() {
          return this.bounds.firstNode()
      }
      ,
      t.prototype.lastNode = function() {
          return this.bounds.lastNode()
      }
      ,
      t.prototype.update = function(t) {
          this.bounds = t
      }
      ,
      t
  }()
    , Ln = function() {
      function t(e, n, i) {
          $t(this, t),
          this.constructing = null,
          this.operations = null,
          this.elementStack = new ue,
          this.nextSiblingStack = new ue,
          this.blockStack = new ue,
          this.env = e,
          this.dom = e.getAppendOperations(),
          this.updateOperations = e.getDOM(),
          this.element = n,
          this.nextSibling = i,
          this.defaultOperations = new dn(e),
          this.pushSimpleBlock(),
          this.elementStack.push(this.element),
          this.nextSiblingStack.push(this.nextSibling)
      }
      return t.forInitialRender = function(e, n, i) {
          return new t(e,n,i)
      }
      ,
      t.resume = function(e, n, i) {
          var r = n.parentElement()
            , o = new t(e,r,i);
          return o.pushBlockTracker(n),
          o
      }
      ,
      t.prototype.expectConstructing = function(t) {
          return this.constructing
      }
      ,
      t.prototype.expectOperations = function(t) {
          return this.operations
      }
      ,
      t.prototype.block = function() {
          return this.blockStack.current
      }
      ,
      t.prototype.popElement = function() {
          var t = this.elementStack
            , e = this.nextSiblingStack
            , n = t.pop();
          return e.pop(),
          this.element = t.current,
          this.nextSibling = e.current,
          n
      }
      ,
      t.prototype.pushSimpleBlock = function() {
          var t = new Rn(this.element);
          return this.pushBlockTracker(t),
          t
      }
      ,
      t.prototype.pushUpdatableBlock = function() {
          var t = new Fn(this.element);
          return this.pushBlockTracker(t),
          t
      }
      ,
      t.prototype.pushBlockTracker = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            , n = this.blockStack.current;
          return null !== n && (n.newDestroyable(t),
          e || n.newBounds(t)),
          this.blockStack.push(t),
          t
      }
      ,
      t.prototype.pushBlockList = function(t) {
          var e = new jn(this.element,t)
            , n = this.blockStack.current;
          return null !== n && (n.newDestroyable(e),
          n.newBounds(e)),
          this.blockStack.push(e),
          e
      }
      ,
      t.prototype.popBlock = function() {
          return this.block().finalize(this),
          this.blockStack.pop()
      }
      ,
      t.prototype.openElement = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.defaultOperations
            , n = this.dom.createElement(t, this.element);
          return this.constructing = n,
          this.operations = e,
          n
      }
      ,
      t.prototype.flushElement = function() {
          var t = this.element
            , e = this.constructing;
          this.dom.insertBefore(t, e, this.nextSibling),
          this.constructing = null,
          this.operations = null,
          this.pushElement(e),
          this.block().openElement(e)
      }
      ,
      t.prototype.pushRemoteElement = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.pushElement(t, e);
          var n = new In(t);
          this.pushBlockTracker(n, !0)
      }
      ,
      t.prototype.popRemoteElement = function() {
          this.popBlock(),
          this.popElement()
      }
      ,
      t.prototype.pushElement = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.element = t,
          this.elementStack.push(t),
          this.nextSibling = e,
          this.nextSiblingStack.push(e)
      }
      ,
      t.prototype.newDestroyable = function(t) {
          this.block().newDestroyable(t)
      }
      ,
      t.prototype.newBounds = function(t) {
          this.block().newBounds(t)
      }
      ,
      t.prototype.appendText = function(t) {
          var e = this.dom
            , n = e.createTextNode(t);
          return e.insertBefore(this.element, n, this.nextSibling),
          this.block().newNode(n),
          n
      }
      ,
      t.prototype.appendComment = function(t) {
          var e = this.dom
            , n = e.createComment(t);
          return e.insertBefore(this.element, n, this.nextSibling),
          this.block().newNode(n),
          n
      }
      ,
      t.prototype.setStaticAttribute = function(t, e) {
          this.expectOperations("setStaticAttribute").addStaticAttribute(this.expectConstructing("setStaticAttribute"), t, e)
      }
      ,
      t.prototype.setStaticAttributeNS = function(t, e, n) {
          this.expectOperations("setStaticAttributeNS").addStaticAttributeNS(this.expectConstructing("setStaticAttributeNS"), t, e, n)
      }
      ,
      t.prototype.setDynamicAttribute = function(t, e, n) {
          this.expectOperations("setDynamicAttribute").addDynamicAttribute(this.expectConstructing("setDynamicAttribute"), t, e, n)
      }
      ,
      t.prototype.setDynamicAttributeNS = function(t, e, n, i) {
          this.expectOperations("setDynamicAttributeNS").addDynamicAttributeNS(this.expectConstructing("setDynamicAttributeNS"), t, e, n, i)
      }
      ,
      t.prototype.closeElement = function() {
          this.block().closeElement(),
          this.popElement()
      }
      ,
      t
  }()
    , Rn = function() {
      function t(e) {
          $t(this, t),
          this.parent = e,
          this.first = null,
          this.last = null,
          this.destroyables = null,
          this.nesting = 0
      }
      return t.prototype.destroy = function() {
          var t = this.destroyables;
          if (t && t.length)
              for (var e = 0; e < t.length; e++)
                  t[e].destroy()
      }
      ,
      t.prototype.parentElement = function() {
          return this.parent
      }
      ,
      t.prototype.firstNode = function() {
          return this.first && this.first.firstNode()
      }
      ,
      t.prototype.lastNode = function() {
          return this.last && this.last.lastNode()
      }
      ,
      t.prototype.openElement = function(t) {
          this.newNode(t),
          this.nesting++
      }
      ,
      t.prototype.closeElement = function() {
          this.nesting--
      }
      ,
      t.prototype.newNode = function(t) {
          0 === this.nesting && (this.first || (this.first = new Mn(t)),
          this.last = new Bn(t))
      }
      ,
      t.prototype.newBounds = function(t) {
          0 === this.nesting && (this.first || (this.first = t),
          this.last = t)
      }
      ,
      t.prototype.newDestroyable = function(t) {
          this.destroyables = this.destroyables || [],
          this.destroyables.push(t)
      }
      ,
      t.prototype.finalize = function(t) {
          this.first || t.appendComment("")
      }
      ,
      t
  }()
    , In = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.prototype.destroy = function() {
          t.prototype.destroy.call(this),
          k(this)
      }
      ,
      e
  }(Rn)
    , Fn = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.prototype.reset = function(t) {
          var e = this.destroyables;
          if (e && e.length)
              for (var n = 0; n < e.length; n++)
                  t.didDestroy(e[n]);
          var i = k(this);
          return this.first = null,
          this.last = null,
          this.destroyables = null,
          this.nesting = 0,
          i
      }
      ,
      e
  }(Rn)
    , jn = function() {
      function t(e, n) {
          $t(this, t),
          this.parent = e,
          this.boundList = n,
          this.parent = e,
          this.boundList = n
      }
      return t.prototype.destroy = function() {
          this.boundList.forEachNode(function(t) {
              return t.destroy()
          })
      }
      ,
      t.prototype.parentElement = function() {
          return this.parent
      }
      ,
      t.prototype.firstNode = function() {
          var t = this.boundList.head();
          return t && t.firstNode()
      }
      ,
      t.prototype.lastNode = function() {
          var t = this.boundList.tail();
          return t && t.lastNode()
      }
      ,
      t.prototype.openElement = function(t) {}
      ,
      t.prototype.closeElement = function() {}
      ,
      t.prototype.newNode = function(t) {}
      ,
      t.prototype.newBounds = function(t) {}
      ,
      t.prototype.newDestroyable = function(t) {}
      ,
      t.prototype.finalize = function(t) {}
      ,
      t
  }();
  ve.add(25, function(t, e) {
      var n = e.op1;
      t.constants.getOther(n).evaluate(t)
  });
  var Un = function() {
      function t() {
          $t(this, t)
      }
      return t.prototype.evaluate = function(t) {
          var e = t.stack.pop()
            , n = this.normalize(e)
            , i = void 0
            , r = void 0;
          m(e) ? i = n.value() : (r = new Re(n),
          i = r.peek());
          var o = t.elements()
            , s = this.insert(t.env.getAppendOperations(), o, i)
            , a = new Pn(s.bounds);
          o.newBounds(a),
          r && t.updateWith(this.updateWith(t, e, r, a, s))
      }
      ,
      t
  }()
    , Hn = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.call(this));
          return n.start = -1,
          n
      }
      return Zt(e, t),
      e.prototype.evaluate = function(e) {
          if (this.deopted)
              e.goto(this.start);
          else {
              var n = e.stack.pop();
              x(n) ? (this.deopt(e.env),
              e.goto(this.start)) : (e.stack.push(n),
              t.prototype.evaluate.call(this, e))
          }
      }
      ,
      e.prototype.deopt = function(t) {
          return null
      }
      ,
      Qt(e, [{
          key: "deopted",
          get: function() {
              return -1 === this.start
          }
      }]),
      e
  }(Un)
    , zn = (function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      Zt(e, t),
      e.create = function(t) {
          return new e(t)
      }
      ,
      e.prototype.toBool = function(t) {
          return x(t)
      }
  }($e),
  function(t) {
      function e(n, i, r) {
          $t(this, e);
          var o = te(this, t.call(this));
          return o.cache = n,
          o.bounds = i,
          o.upsert = r,
          o.tag = n.tag,
          o
      }
      return Zt(e, t),
      e.prototype.evaluate = function(t) {
          var e = this.cache.revalidate();
          if (d(e)) {
              var n = this.bounds
                , i = this.upsert
                , r = t.dom;
              if (!this.upsert.update(r, e)) {
                  var o = new wn(n.parentElement(),k(n));
                  i = this.upsert = this.insert(t.env.getAppendOperations(), o, e)
              }
              n.update(i.bounds)
          }
      }
      ,
      e
  }(be))
    , Wn = function(t) {
      function e(n, i, r, o) {
          $t(this, e);
          var s = te(this, t.call(this, i, r, o));
          return s.reference = n,
          s.deopted = null,
          s.tag = s._tag = Me.create(s.tag),
          s
      }
      return Zt(e, t),
      e.prototype.evaluate = function(e) {
          this.deopted ? e.evaluateOpcode(this.deopted) : x(this.reference.value()) ? this.lazyDeopt(e) : t.prototype.evaluate.call(this, e)
      }
      ,
      e.prototype.lazyDeopt = function(t) {
          return null
      }
      ,
      e
  }(zn)
    , Vn = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.type = "optimized-cautious-append",
          n
      }
      return Zt(e, t),
      e.prototype.normalize = function(t) {
          return f(t, T)
      }
      ,
      e.prototype.insert = function(t, e, n) {
          return _(t, e, n)
      }
      ,
      e.prototype.updateWith = function(t, e, n, i, r) {
          return new Gn(n,i,r)
      }
      ,
      e
  }(Un)
    , Gn = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.type = "optimized-cautious-update",
          n
      }
      return Zt(e, t),
      e.prototype.insert = function(t, e, n) {
          return _(t, e, n)
      }
      ,
      e
  }(zn)
    , Yn = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.type = "guarded-cautious-append",
          n.AppendOpcode = Vn,
          n
      }
      return Zt(e, t),
      e.prototype.normalize = function(t) {
          return f(t, T)
      }
      ,
      e.prototype.insert = function(t, e, n) {
          return _(t, e, n)
      }
      ,
      e.prototype.updateWith = function(t, e, n, i, r) {
          return new Xn(e,n,i,r)
      }
      ,
      e
  }(Hn)
    , Xn = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.type = "guarded-cautious-update",
          n
      }
      return Zt(e, t),
      e.prototype.insert = function(t, e, n) {
          return _(t, e, n)
      }
      ,
      e
  }(Wn)
    , qn = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.type = "optimized-trusting-append",
          n
      }
      return Zt(e, t),
      e.prototype.normalize = function(t) {
          return f(t, O)
      }
      ,
      e.prototype.insert = function(t, e, n) {
          return A(t, e, n)
      }
      ,
      e.prototype.updateWith = function(t, e, n, i, r) {
          return new Kn(n,i,r)
      }
      ,
      e
  }(Un)
    , Kn = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.type = "optimized-trusting-update",
          n
      }
      return Zt(e, t),
      e.prototype.insert = function(t, e, n) {
          return A(t, e, n)
      }
      ,
      e
  }(zn)
    , Jn = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.type = "guarded-trusting-append",
          n.AppendOpcode = qn,
          n
      }
      return Zt(e, t),
      e.prototype.normalize = function(t) {
          return f(t, O)
      }
      ,
      e.prototype.insert = function(t, e, n) {
          return A(t, e, n)
      }
      ,
      e.prototype.updateWith = function(t, e, n, i, r) {
          return new $n(e,n,i,r)
      }
      ,
      e
  }(Hn)
    , $n = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.type = "trusting-update",
          n
      }
      return Zt(e, t),
      e.prototype.insert = function(t, e, n) {
          return A(t, e, n)
      }
      ,
      e
  }(Wn)
    , Qn = D
    , Zn = function() {
      function t(e, n, i) {
          var r = this;
          $t(this, t),
          this.scope = e,
          this.locals = a(),
          i.forEach(function(t) {
              var i = n[t - 1]
                , o = e.getSymbol(t);
              r.locals[i] = o
          })
      }
      return t.prototype.get = function(t) {
          var e = this.scope
            , n = this.locals
            , i = t.split(".")
            , r = t.split(".")
            , o = r[0]
            , s = r.slice(1)
            , a = e.getEvalScope()
            , u = void 0;
          return "this" === o ? u = e.getSelf() : n[o] ? u = n[o] : 0 === o.indexOf("@") && a[o] ? u = a[o] : (u = this.scope.getSelf(),
          s = i),
          s.reduce(function(t, e) {
              return t.get(e)
          }, u)
      }
      ,
      t
  }();
  ve.add(71, function(t, e) {
      var n = e.op1
        , i = e.op2
        , r = t.constants.getOther(n)
        , o = t.constants.getArray(i)
        , s = new Zn(t.scope(),r,o);
      Qn(t.getSelf().value(), function(t) {
          return s.get(t).value()
      })
  }),
  ve.add(69, function(t) {
      var e = t.stack
        , n = e.pop();
      e.push(n.value().template.asPartial())
  });
  var ti = function() {
      function t(e) {
          $t(this, t),
          this.tag = e.tag,
          this.artifacts = e
      }
      return t.prototype.value = function() {
          return !this.artifacts.isEmpty()
      }
      ,
      t
  }();
  ve.add(53, function(t) {
      var e = t.stack
        , n = e.pop()
        , i = e.pop()
        , r = t.env.iterableFor(n, i.value())
        , o = new He(r);
      e.push(o),
      e.push(new ti(o.artifacts))
  }),
  ve.add(51, function(t, e) {
      var n = e.op1;
      t.enterList(n)
  }),
  ve.add(52, function(t) {
      return t.exitList()
  }),
  ve.add(54, function(t, e) {
      var n = e.op1
        , i = t.stack
        , r = i.peek().next();
      if (r) {
          var o = t.iterate(r.memo, r.value);
          t.enterItem(r.key, o)
      } else
          t.goto(n)
  });
  var ei;
  !function(t) {
      t[t.Text = 0] = "Text",
      t[t.Append = 1] = "Append",
      t[t.Comment = 2] = "Comment",
      t[t.Modifier = 3] = "Modifier",
      t[t.Block = 4] = "Block",
      t[t.Component = 5] = "Component",
      t[t.OpenElement = 6] = "OpenElement",
      t[t.FlushElement = 7] = "FlushElement",
      t[t.CloseElement = 8] = "CloseElement",
      t[t.StaticAttr = 9] = "StaticAttr",
      t[t.DynamicAttr = 10] = "DynamicAttr",
      t[t.Yield = 11] = "Yield",
      t[t.Partial = 12] = "Partial",
      t[t.DynamicArg = 13] = "DynamicArg",
      t[t.StaticArg = 14] = "StaticArg",
      t[t.TrustingAttr = 15] = "TrustingAttr",
      t[t.Debugger = 16] = "Debugger",
      t[t.ClientSideStatement = 17] = "ClientSideStatement",
      t[t.Unknown = 18] = "Unknown",
      t[t.Get = 19] = "Get",
      t[t.MaybeLocal = 20] = "MaybeLocal",
      t[t.FixThisBeforeWeMerge = 21] = "FixThisBeforeWeMerge",
      t[t.HasBlock = 22] = "HasBlock",
      t[t.HasBlockParams = 23] = "HasBlockParams",
      t[t.Undefined = 24] = "Undefined",
      t[t.Helper = 25] = "Helper",
      t[t.Concat = 26] = "Concat",
      t[t.ClientSideExpression = 27] = "ClientSideExpression"
  }(ei || (ei = {}));
  var ni;
  !function(t) {
      function e(t) {
          return null === t || "object" !== (void 0 === t ? "undefined" : Jt(t))
      }
      t.isUnknown = M(ei.Unknown),
      t.isGet = M(ei.Get),
      t.isConcat = M(ei.Concat),
      t.isHelper = M(ei.Helper),
      t.isHasBlock = M(ei.HasBlock),
      t.isHasBlockParams = M(ei.HasBlockParams),
      t.isUndefined = M(ei.Undefined),
      t.isClientSide = M(ei.ClientSideExpression),
      t.isPrimitiveValue = e
  }(ni || (ni = {}));
  var ii;
  !function(t) {
      function e(t) {
          return t[0] === ei.StaticAttr || t[0] === ei.DynamicAttr || t[0] === ei.TrustingAttr
      }
      function n(t) {
          return t[0] === ei.StaticArg || t[0] === ei.DynamicArg
      }
      function i(t) {
          return e(t) || n(t)
      }
      function r(t) {
          return t[1]
      }
      function o(e) {
          return i(e) || t.isModifier(e) || t.isFlushElement(e)
      }
      t.isText = M(ei.Text),
      t.isAppend = M(ei.Append),
      t.isComment = M(ei.Comment),
      t.isModifier = M(ei.Modifier),
      t.isBlock = M(ei.Block),
      t.isComponent = M(ei.Component),
      t.isOpenElement = M(ei.OpenElement),
      t.isFlushElement = M(ei.FlushElement),
      t.isCloseElement = M(ei.CloseElement),
      t.isStaticAttr = M(ei.StaticAttr),
      t.isDynamicAttr = M(ei.DynamicAttr),
      t.isYield = M(ei.Yield),
      t.isPartial = M(ei.Partial),
      t.isDynamicArg = M(ei.DynamicArg),
      t.isStaticArg = M(ei.StaticArg),
      t.isTrustingAttr = M(ei.TrustingAttr),
      t.isDebugger = M(ei.Debugger),
      t.isClientSide = M(ei.ClientSideStatement),
      t.isAttribute = e,
      t.isArgument = n,
      t.isParameter = i,
      t.getParameterName = r,
      t.isInElementHead = o
  }(ii || (ii = {}));
  var ri, oi = function t(e, n) {
      $t(this, t),
      this.start = e,
      this.end = n
  }, si = function t(e, n, i) {
      $t(this, t),
      this.start = e,
      this.end = n,
      this.symbolTable = i
  }, ai = function() {
      function t() {
          $t(this, t),
          this.labels = a(),
          this.targets = []
      }
      return t.prototype.label = function(t, e) {
          this.labels[t] = e
      }
      ,
      t.prototype.target = function(t, e, n) {
          this.targets.push({
              at: t,
              Target: e,
              target: n
          })
      }
      ,
      t.prototype.patch = function(t) {
          for (var e = this.targets, n = Array.isArray(e), i = 0, e = n ? e : e[Symbol.iterator](); ; ) {
              var r;
              if (n) {
                  if (i >= e.length)
                      break;
                  r = e[i++]
              } else {
                  if (i = e.next(),
                  i.done)
                      break;
                  r = i.value
              }
              var o = r
                , s = o.at
                , a = o.Target
                , u = o.target;
              t.set(s, a, this.labels[u])
          }
      }
      ,
      t
  }(), ui = function() {
      function t(e, n, i) {
          $t(this, t),
          this.env = e,
          this.meta = n,
          this.program = i,
          this.labelsStack = new ue,
          this.constants = e.constants,
          this.start = i.next
      }
      return t.prototype.upvars = function(t) {
          return i(t)
      }
      ,
      t.prototype.reserve = function(t) {
          this.push(t, 0, 0, 0)
      }
      ,
      t.prototype.push = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
            , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return this.program.push(t, e, n, i)
      }
      ,
      t.prototype.finalize = function() {
          return this.push(22)
      }
      ,
      t.prototype.pushArgs = function(t, e) {
          this.push(58, t, 0 | e)
      }
      ,
      t.prototype.startLabels = function() {
          this.labelsStack.push(new ai)
      }
      ,
      t.prototype.stopLabels = function() {
          this.labelsStack.pop().patch(this.program)
      }
      ,
      t.prototype.pushComponentManager = function(t) {
          this.push(55, this.other(t))
      }
      ,
      t.prototype.pushDynamicComponentManager = function() {
          this.push(56)
      }
      ,
      t.prototype.initializeComponentState = function() {
          this.push(57)
      }
      ,
      t.prototype.prepareArgs = function(t) {
          this.push(59, t)
      }
      ,
      t.prototype.createComponent = function(t, e, n) {
          var i = 0 | e | (0 | n) << 1;
          this.push(60, i, t)
      }
      ,
      t.prototype.registerComponentDestructor = function(t) {
          this.push(61, t)
      }
      ,
      t.prototype.beginComponentTransaction = function() {
          this.push(65)
      }
      ,
      t.prototype.commitComponentTransaction = function() {
          this.push(66)
      }
      ,
      t.prototype.pushComponentOperations = function() {
          this.push(62)
      }
      ,
      t.prototype.getComponentSelf = function(t) {
          this.push(63, t)
      }
      ,
      t.prototype.getComponentLayout = function(t) {
          this.push(64, t)
      }
      ,
      t.prototype.didCreateElement = function(t) {
          this.push(67, t)
      }
      ,
      t.prototype.didRenderLayout = function(t) {
          this.push(68, t)
      }
      ,
      t.prototype.getPartialTemplate = function() {
          this.push(69)
      }
      ,
      t.prototype.resolveMaybeLocal = function(t) {
          this.push(70, this.string(t))
      }
      ,
      t.prototype.debugger = function(t, e) {
          this.push(71, this.constants.other(t), this.constants.array(e))
      }
      ,
      t.prototype.dynamicContent = function(t) {
          this.push(25, this.other(t))
      }
      ,
      t.prototype.cautiousAppend = function() {
          this.dynamicContent(new Vn)
      }
      ,
      t.prototype.trustingAppend = function() {
          this.dynamicContent(new qn)
      }
      ,
      t.prototype.text = function(t) {
          this.push(23, this.constants.string(t))
      }
      ,
      t.prototype.openPrimitiveElement = function(t) {
          this.push(26, this.constants.string(t))
      }
      ,
      t.prototype.openElementWithOperations = function(t) {
          this.push(27, this.constants.string(t))
      }
      ,
      t.prototype.openDynamicElement = function() {
          this.push(28)
      }
      ,
      t.prototype.flushElement = function() {
          this.push(32)
      }
      ,
      t.prototype.closeElement = function() {
          this.push(33)
      }
      ,
      t.prototype.staticAttr = function(t, e, n) {
          var i = this.constants.string(t)
            , r = e ? this.constants.string(e) : 0
            , o = this.constants.string(n);
          this.push(29, i, o, r)
      }
      ,
      t.prototype.dynamicAttrNS = function(t, e, n) {
          var i = this.constants.string(t)
            , r = this.constants.string(e);
          this.push(31, i, r, 0 | n)
      }
      ,
      t.prototype.dynamicAttr = function(t, e) {
          var n = this.constants.string(t);
          this.push(30, n, 0 | e)
      }
      ,
      t.prototype.comment = function(t) {
          var e = this.constants.string(t);
          this.push(24, e)
      }
      ,
      t.prototype.modifier = function(t) {
          this.push(34, this.other(t))
      }
      ,
      t.prototype.putIterator = function() {
          this.push(53)
      }
      ,
      t.prototype.enterList = function(t) {
          this.reserve(51),
          this.labels.target(this.pos, 51, t)
      }
      ,
      t.prototype.exitList = function() {
          this.push(52)
      }
      ,
      t.prototype.iterate = function(t) {
          this.reserve(54),
          this.labels.target(this.pos, 54, t)
      }
      ,
      t.prototype.setVariable = function(t) {
          this.push(4, t)
      }
      ,
      t.prototype.getVariable = function(t) {
          this.push(5, t)
      }
      ,
      t.prototype.getProperty = function(t) {
          this.push(6, this.string(t))
      }
      ,
      t.prototype.getBlock = function(t) {
          this.push(8, t)
      }
      ,
      t.prototype.hasBlock = function(t) {
          this.push(9, t)
      }
      ,
      t.prototype.hasBlockParams = function(t) {
          this.push(10, t)
      }
      ,
      t.prototype.concat = function(t) {
          this.push(11, t)
      }
      ,
      t.prototype.function = function(t) {
          this.push(2, this.func(t))
      }
      ,
      t.prototype.load = function(t) {
          this.push(17, t)
      }
      ,
      t.prototype.fetch = function(t) {
          this.push(18, t)
      }
      ,
      t.prototype.dup = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de.sp
            , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.push(15, t, e)
      }
      ,
      t.prototype.pop = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          return this.push(16, t)
      }
      ,
      t.prototype.pushRemoteElement = function() {
          this.push(35)
      }
      ,
      t.prototype.popRemoteElement = function() {
          this.push(36)
      }
      ,
      t.prototype.label = function(t) {
          this.labels.label(t, this.nextPos)
      }
      ,
      t.prototype.pushRootScope = function(t, e) {
          this.push(19, t, 0 | e)
      }
      ,
      t.prototype.pushChildScope = function() {
          this.push(20)
      }
      ,
      t.prototype.popScope = function() {
          this.push(21)
      }
      ,
      t.prototype.returnTo = function(t) {
          this.reserve(12),
          this.labels.target(this.pos, 12, t),
          this.load(de.ra)
      }
      ,
      t.prototype.pushDynamicScope = function() {
          this.push(38)
      }
      ,
      t.prototype.popDynamicScope = function() {
          this.push(39)
      }
      ,
      t.prototype.pushImmediate = function(t) {
          this.push(13, this.other(t))
      }
      ,
      t.prototype.primitive = function(t) {
          var e = 0
            , n = void 0;
          switch (void 0 === t ? "undefined" : Jt(t)) {
          case "number":
              n = t;
              break;
          case "string":
              n = this.string(t),
              e = 1;
              break;
          case "boolean":
              n = 0 | t,
              e = 2;
              break;
          case "object":
              n = 2,
              e = 2;
              break;
          case "undefined":
              n = 3,
              e = 2;
              break;
          default:
              throw new Error("Invalid primitive passed to pushPrimitive")
          }
          this.push(14, e << 30 | n)
      }
      ,
      t.prototype.helper = function(t) {
          this.push(1, this.func(t))
      }
      ,
      t.prototype.pushBlock = function(t) {
          this.push(7, this.block(t))
      }
      ,
      t.prototype.bindDynamicScope = function(t) {
          this.push(37, this.names(t))
      }
      ,
      t.prototype.enter = function(t) {
          this.push(48, t)
      }
      ,
      t.prototype.exit = function() {
          this.push(49)
      }
      ,
      t.prototype.return = function() {
          this.push(22)
      }
      ,
      t.prototype.pushFrame = function() {
          this.push(46)
      }
      ,
      t.prototype.popFrame = function() {
          this.push(47)
      }
      ,
      t.prototype.compileDynamicBlock = function() {
          this.push(40)
      }
      ,
      t.prototype.invokeDynamic = function(t) {
          this.push(42, this.other(t))
      }
      ,
      t.prototype.invokeStatic = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            , n = t.symbolTable.parameters
            , i = n.length
            , r = Math.min(e, i);
          if (this.pushFrame(),
          r) {
              this.pushChildScope();
              for (var o = 0; o < r; o++)
                  this.dup(de.fp, e - o),
                  this.setVariable(n[o])
          }
          var s = this.constants.block(t);
          this.push(41, s),
          r && this.popScope(),
          this.popFrame()
      }
      ,
      t.prototype.test = function(t) {
          var e = void 0;
          if ("const" === t)
              e = Qe;
          else if ("simple" === t)
              e = Ze;
          else if ("environment" === t)
              e = tn;
          else {
              if ("function" != typeof t)
                  throw new Error("unreachable");
              e = t
          }
          var n = this.constants.function(e);
          this.push(50, n)
      }
      ,
      t.prototype.jump = function(t) {
          this.reserve(43),
          this.labels.target(this.pos, 43, t)
      }
      ,
      t.prototype.jumpIf = function(t) {
          this.reserve(44),
          this.labels.target(this.pos, 44, t)
      }
      ,
      t.prototype.jumpUnless = function(t) {
          this.reserve(45),
          this.labels.target(this.pos, 45, t)
      }
      ,
      t.prototype.string = function(t) {
          return this.constants.string(t)
      }
      ,
      t.prototype.names = function(t) {
          var e = this
            , n = t.map(function(t) {
              return e.constants.string(t)
          });
          return this.constants.array(n)
      }
      ,
      t.prototype.symbols = function(t) {
          return this.constants.array(t)
      }
      ,
      t.prototype.other = function(t) {
          return this.constants.other(t)
      }
      ,
      t.prototype.block = function(t) {
          return t ? this.constants.block(t) : 0
      }
      ,
      t.prototype.func = function(t) {
          return this.constants.function(t)
      }
      ,
      Qt(t, [{
          key: "pos",
          get: function() {
              return this.program.current
          }
      }, {
          key: "nextPos",
          get: function() {
              return this.program.next
          }
      }, {
          key: "labels",
          get: function() {
              return this.labelsStack.current
          }
      }]),
      t
  }(), pi = function(t) {
      function e(n, i) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.program;
          $t(this, e);
          var o = te(this, t.call(this, n, i, r));
          return o.component = new di(o),
          o
      }
      return Zt(e, t),
      e.prototype.compileArgs = function(t, e, n) {
          var i = this
            , r = 0;
          t && (t.forEach(function(t) {
              return U(t, i)
          }),
          r = t.length);
          var o = me;
          e && (o = e[0],
          e[1].forEach(function(t) {
              return U(t, i)
          })),
          this.pushImmediate(o),
          this.pushArgs(r, n)
      }
      ,
      e.prototype.compile = function(t) {
          return B(t) ? t.compile(this) : t
      }
      ,
      e.prototype.guardedCautiousAppend = function(t) {
          U(t, this),
          this.dynamicContent(new Yn)
      }
      ,
      e.prototype.guardedTrustingAppend = function(t) {
          U(t, this),
          this.dynamicContent(new Jn)
      }
      ,
      e.prototype.invokeComponent = function(t, e, n, i) {
          var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          this.initializeComponentState(),
          this.fetch(de.s0),
          this.dup(de.sp, 1),
          this.load(de.s0),
          this.pushBlock(i),
          this.pushBlock(r),
          this.compileArgs(e, n, !1),
          this.prepareArgs(de.s0),
          this.beginComponentTransaction(),
          this.pushDynamicScope(),
          this.createComponent(de.s0, !0, null === r),
          this.registerComponentDestructor(de.s0),
          this.getComponentSelf(de.s0),
          this.getComponentLayout(de.s0),
          this.invokeDynamic(new xi(t && t.scan())),
          this.popFrame(),
          this.popScope(),
          this.popDynamicScope(),
          this.commitComponentTransaction(),
          this.load(de.s0)
      }
      ,
      e.prototype.template = function(t) {
          return t ? new ki(this.env,this.meta,t.statements,t.parameters) : null
      }
      ,
      e
  }(ui), ci = (function() {
      function t(e) {
          $t(this, t),
          this.env = e
      }
      t.prototype.wrapLayout = function(t) {
          this.inner = new ci(this.env,t)
      }
      ,
      t.prototype.fromLayout = function(t) {
          this.inner = new li(this.env,t)
      }
      ,
      t.prototype.compile = function() {
          return this.inner.compile()
      }
      ,
      Qt(t, [{
          key: "tag",
          get: function() {
              return this.inner.tag
          }
      }, {
          key: "attrs",
          get: function() {
              return this.inner.attrs
          }
      }])
  }(),
  function() {
      function t(e, n) {
          $t(this, t),
          this.env = e,
          this.layout = n,
          this.tag = new hi,
          this.attrs = new fi
      }
      return t.prototype.compile = function() {
          var t = this.env
            , e = this.layout
            , n = {
              templateMeta: e.meta,
              symbols: e.symbols,
              asPartial: !1
          }
            , i = this.tag.getDynamic()
            , r = this.tag.getStatic()
            , o = P(t, n);
          if (o.startLabels(),
          i ? (o.fetch(de.s1),
          U(i, o),
          o.dup(),
          o.load(de.s1),
          o.test("simple"),
          o.jumpUnless("BODY"),
          o.fetch(de.s1),
          o.pushComponentOperations(),
          o.openDynamicElement()) : r && (o.pushComponentOperations(),
          o.openElementWithOperations(r)),
          i || r) {
              o.didCreateElement(de.s0);
              for (var s = this.attrs.buffer, a = 0; a < s.length; a++)
                  L(s[a], o);
              o.flushElement()
          }
          o.label("BODY"),
          o.invokeStatic(e.asBlock()),
          i ? (o.fetch(de.s1),
          o.test("simple"),
          o.jumpUnless("END"),
          o.closeElement()) : r && o.closeElement(),
          o.label("END"),
          o.didRenderLayout(de.s0),
          i && o.load(de.s1),
          o.stopLabels();
          var u = o.start
            , p = o.finalize();
          return new si(u,p,{
              meta: n,
              hasEval: e.hasEval,
              symbols: e.symbols.concat([yi])
          })
      }
      ,
      t
  }()), li = function() {
      function t(e, n) {
          $t(this, t),
          this.env = e,
          this.layout = n,
          this.attrs = new fi
      }
      return t.prototype.compile = function() {
          var t = this.env;
          return this.layout.asLayout(this.attrs.buffer).compileDynamic(t)
      }
      ,
      Qt(t, [{
          key: "tag",
          get: function() {
              throw new Error("BUG: Cannot call `tag` on an UnwrappedBuilder")
          }
      }]),
      t
  }(), hi = function() {
      function t() {
          $t(this, t),
          this.isDynamic = null,
          this.isStatic = null,
          this.staticTagName = null,
          this.dynamicTagName = null
      }
      return t.prototype.getDynamic = function() {
          if (this.isDynamic)
              return this.dynamicTagName
      }
      ,
      t.prototype.getStatic = function() {
          if (this.isStatic)
              return this.staticTagName
      }
      ,
      t.prototype.static = function(t) {
          this.isStatic = !0,
          this.staticTagName = t
      }
      ,
      t.prototype.dynamic = function(t) {
          this.isDynamic = !0,
          this.dynamicTagName = [ei.ClientSideExpression, ri.Ops.FunctionExpression, t]
      }
      ,
      t
  }(), fi = function() {
      function t() {
          $t(this, t),
          this.buffer = []
      }
      return t.prototype.static = function(t, e) {
          this.buffer.push([ei.StaticAttr, t, e, null])
      }
      ,
      t.prototype.dynamic = function(t, e) {
          this.buffer.push([ei.DynamicAttr, t, [ei.ClientSideExpression, ri.Ops.FunctionExpression, e], null])
      }
      ,
      t
  }(), di = function() {
      function t(e) {
          $t(this, t),
          this.builder = e,
          this.env = e.env
      }
      return t.prototype.static = function(t, e) {
          var n = e[0]
            , i = e[1]
            , r = e[2]
            , o = e[3]
            , s = this.builder;
          s.pushComponentManager(t),
          s.invokeComponent(null, n, i, r, o)
      }
      ,
      t.prototype.dynamic = function(t, e, n) {
          function i(t, n) {
              return e(t, n, p)
          }
          var r = n[0]
            , o = n[1]
            , s = n[2]
            , a = n[3]
            , u = this.builder;
          if (!t || 0 === t.length)
              throw new Error("Dynamic syntax without an argument");
          var p = this.builder.meta.templateMeta;
          u.startLabels(),
          u.pushFrame(),
          u.returnTo("END"),
          u.compileArgs(t[0], t[1], !0),
          u.helper(i),
          u.dup(),
          u.test("simple"),
          u.enter(2),
          u.jumpUnless("ELSE"),
          u.pushDynamicComponentManager(),
          u.invokeComponent(null, r, o, s, a),
          u.label("ELSE"),
          u.exit(),
          u.return(),
          u.label("END"),
          u.popFrame(),
          u.stopLabels()
      }
      ,
      t
  }(), mi = function() {
      function t(e, n) {
          $t(this, t),
          this.statements = e,
          this.symbolTable = n,
          this.compiledStatic = null,
          this.compiledDynamic = null
      }
      return t.prototype.compileStatic = function(t) {
          var e = this.compiledStatic;
          if (!e) {
              var n = R(this.statements, this.symbolTable.meta, t)
                , i = n.start
                , r = n.finalize();
              e = this.compiledStatic = new oi(i,r)
          }
          return e
      }
      ,
      t.prototype.compileDynamic = function(t) {
          var e = this.compiledDynamic;
          if (!e) {
              var n = this.compileStatic(t);
              e = new si(n.start,n.end,this.symbolTable)
          }
          return e
      }
      ,
      t
  }(), yi = "&attrs", vi = function() {
      function t(e, n) {
          $t(this, t),
          this.block = e,
          this.env = n
      }
      return t.prototype.scanEntryPoint = function(t) {
          var e = this.block
            , n = this.env
            , i = void 0;
          return i = e.prelude && e.head ? e.prelude.concat(e.head).concat(e.statements) : e.statements,
          new Si(n,t,i,e.symbols,e.hasEval).scan()
      }
      ,
      t.prototype.scanBlock = function(t) {
          var e = this.block
            , n = this.env
            , i = void 0;
          return i = e.prelude && e.head ? e.prelude.concat(e.head).concat(e.statements) : e.statements,
          new ki(n,t,i,me).scan()
      }
      ,
      t.prototype.scanLayout = function(t, e) {
          var n = this.block
            , i = n.symbols
            , r = n.hasEval;
          if (!n.prelude || !n.head)
              throw new Error("A layout must have a top-level element");
          var o = {
              meta: t,
              hasEval: r,
              symbols: i
          };
          return I(F({
              statements: n.prelude,
              parameters: me
          }, t, this.env).statements, F({
              statements: [].concat(e, n.head),
              parameters: me
          }, t, this.env).statements, F({
              statements: n.statements,
              parameters: me
          }, t, this.env).statements, o)
      }
      ,
      t
  }();
  !function(t) {
      function e(t) {
          return function(e) {
              return e[0] === ei.ClientSideExpression || e[0] === ei.ClientSideStatement && e[1] === t
          }
      }
      !function(t) {
          t[t.OpenComponentElement = 0] = "OpenComponentElement",
          t[t.DidCreateElement = 1] = "DidCreateElement",
          t[t.DidRenderLayout = 2] = "DidRenderLayout",
          t[t.OptimizedAppend = 3] = "OptimizedAppend",
          t[t.UnoptimizedAppend = 4] = "UnoptimizedAppend",
          t[t.StaticPartial = 5] = "StaticPartial",
          t[t.DynamicPartial = 6] = "DynamicPartial",
          t[t.NestedBlock = 7] = "NestedBlock",
          t[t.ScannedBlock = 8] = "ScannedBlock",
          t[t.FunctionExpression = 9] = "FunctionExpression"
      }(t.Ops || (t.Ops = {})),
      t.is = e
  }(ri || (ri = {}));
  var gi = ei
    , bi = function() {
      function t(e, n, i) {
          $t(this, t),
          this.env = e,
          this.meta = n,
          this.statements = i
      }
      return t.prototype.scanStatements = function() {
          for (var t = [], e = this.statements, n = e, i = Array.isArray(n), r = 0, n = i ? n : n[Symbol.iterator](); ; ) {
              var o;
              if (i) {
                  if (r >= n.length)
                      break;
                  o = n[r++]
              } else {
                  if (r = n.next(),
                  r.done)
                      break;
                  o = r.value
              }
              var s = o;
              t.push(s)
          }
          return t
      }
      ,
      t.prototype.child = function(t) {
          return t ? new ki(this.env,this.meta,t.statements,t.parameters) : null
      }
      ,
      t
  }()
    , ki = function(t) {
      function e(n, i, r, o) {
          $t(this, e);
          var s = te(this, t.call(this, n, i, r));
          return s.parameters = o,
          s
      }
      return Zt(e, t),
      e.prototype.scan = function() {
          var t = this.scanStatements();
          return new mi(t,{
              parameters: this.parameters,
              meta: this.meta
          })
      }
      ,
      e
  }(bi)
    , Si = function(t) {
      function e(n, i, r, o, s) {
          $t(this, e);
          var a = te(this, t.call(this, n, i, r));
          return a.symbols = o,
          a.hasEval = s,
          a
      }
      return Zt(e, t),
      e.prototype.scan = function() {
          var t = this.scanStatements();
          return new mi(t,{
              symbols: this.symbols,
              hasEval: this.hasEval,
              meta: this.meta
          })
      }
      ,
      e
  }(bi)
    , wi = ei
    , Ei = function() {
      function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          $t(this, t),
          this.offset = e,
          this.names = a(),
          this.funcs = []
      }
      return t.prototype.add = function(t, e) {
          this.funcs.push(e),
          this.names[t] = this.funcs.length - 1
      }
      ,
      t.prototype.compile = function(t, e) {
          var n = t[this.offset]
            , i = this.names[n];
          (0,
          this.funcs[i])(t, e)
      }
      ,
      t
  }()
    , _i = new Ei
    , Ai = new Ei(1);
  _i.add(wi.Text, function(t, e) {
      e.text(t[1])
  }),
  _i.add(wi.Comment, function(t, e) {
      e.comment(t[1])
  }),
  _i.add(wi.CloseElement, function(t, e) {
      e.closeElement()
  }),
  _i.add(wi.FlushElement, function(t, e) {
      e.flushElement()
  }),
  _i.add(wi.Modifier, function(t, e) {
      var n = e.env
        , i = e.meta
        , r = t[1]
        , o = t[2]
        , s = t[3];
      if (!n.hasModifier(r, i.templateMeta))
          throw new Error("Compile Error " + r + " is not a modifier: Helpers may not be used in the element form.");
      e.compileArgs(o, s, !0),
      e.modifier(n.lookupModifier(r, i.templateMeta))
  }),
  _i.add(wi.StaticAttr, function(t, e) {
      var n = t[1]
        , i = t[2]
        , r = t[3];
      e.staticAttr(n, r, i)
  }),
  _i.add(wi.DynamicAttr, function(t, e) {
      j(t, !1, e)
  }),
  _i.add(wi.TrustingAttr, function(t, e) {
      j(t, !0, e)
  }),
  _i.add(wi.OpenElement, function(t, e) {
      e.openPrimitiveElement(t[1])
  }),
  Ai.add(ri.Ops.OpenComponentElement, function(t, e) {
      e.pushComponentOperations(),
      e.openElementWithOperations(t[2])
  }),
  Ai.add(ri.Ops.DidCreateElement, function(t, e) {
      e.didCreateElement(de.s0)
  }),
  Ai.add(ri.Ops.DidRenderLayout, function(t, e) {
      e.didRenderLayout(de.s0)
  }),
  _i.add(wi.Append, function(t, e) {
      var n = t[1]
        , i = t[2];
      !0 !== (e.env.macros().inlines.compile(t, e) || n) && (U(n, e),
      i ? e.trustingAppend() : e.cautiousAppend())
  }),
  _i.add(wi.Block, function(t, e) {
      var n = t[1]
        , i = t[2]
        , r = t[3]
        , o = t[4]
        , s = t[5]
        , a = e.template(o)
        , u = e.template(s)
        , p = a && a.scan()
        , c = u && u.scan();
      e.env.macros().blocks.compile(n, i, r, p, c, e)
  });
  var xi = function() {
      function t(e) {
          $t(this, t),
          this.attrs = e
      }
      return t.prototype.invoke = function(t, e) {
          var n = e.symbolTable
            , i = n.symbols
            , r = n.hasEval
            , o = t.stack
            , s = t.pushRootScope(i.length + 1, !0);
          s.bindSelf(o.pop()),
          s.bindBlock(i.indexOf(yi) + 1, this.attrs);
          var u = null;
          r && (i.indexOf("$eval") + 1,
          u = a());
          for (var p = o.pop(), c = p.length - 1; c >= 0; c--) {
              var l = i.indexOf(p[c])
                , h = o.pop();
              -1 !== l && s.bindSymbol(l + 1, h),
              r && (u[p[c]] = h)
          }
          var f = i.indexOf("&inverse")
            , d = o.pop();
          -1 !== f && s.bindBlock(f + 1, d),
          u && (u["&inverse"] = d);
          var m = i.indexOf("&default")
            , y = o.pop();
          -1 !== m && s.bindBlock(m + 1, y),
          u && (u["&default"] = y),
          u && s.bindEvalScope(u),
          t.pushFrame(),
          t.call(e.start)
      }
      ,
      t
  }();
  _i.add(wi.Component, function(t, e) {
      var n = t[1]
        , i = t[2]
        , r = t[3]
        , o = t[4];
      if (e.env.hasComponentDefinition(n, e.meta.templateMeta)) {
          var s = e.template(o)
            , a = new ki(e.env,e.meta,i,me)
            , u = e.env.getComponentDefinition(n, e.meta.templateMeta);
          e.pushComponentManager(u),
          e.invokeComponent(a, null, r, s && s.scan())
      } else {
          if (o && o.parameters.length)
              throw new Error("Compile Error: Cannot find component " + n);
          e.openPrimitiveElement(n),
          i.forEach(function(t) {
              return _i.compile(t, e)
          }),
          e.flushElement(),
          o && o.statements.forEach(function(t) {
              return _i.compile(t, e)
          }),
          e.closeElement()
      }
  });
  var Ci = function() {
      function t(e, n) {
          $t(this, t),
          this.outerSymbols = e,
          this.evalInfo = n
      }
      return t.prototype.invoke = function(t, e) {
          var n = e
            , i = n.symbolTable.symbols
            , r = t.scope()
            , o = t.pushRootScope(i.length, !1);
          o.bindCallerScope(r.getCallerScope()),
          o.bindEvalScope(r.getEvalScope()),
          o.bindSelf(r.getSelf());
          var s = this.evalInfo
            , u = this.outerSymbols
            , p = a();
          s.forEach(function(t) {
              var e = u[t - 1]
                , n = r.getSymbol(t);
              p[e] = n
          });
          var c = r.getEvalScope();
          i.forEach(function(t, e) {
              var n = e + 1
                , i = c[t];
              void 0 !== i && o.bind(n, i)
          }),
          o.bindPartialMap(p),
          t.pushFrame(),
          t.call(n.start)
      }
      ,
      t
  }();
  _i.add(wi.Partial, function(t, e) {
      function n(t, e) {
          var n = t.env;
          return f(e.positional.at(0), function(t) {
              if ("string" == typeof t && t) {
                  if (!n.hasPartial(t, s))
                      throw new Error('Could not find a partial named "' + t + '"');
                  return n.lookupPartial(t, s)
              }
              if (t)
                  throw new Error('Could not find a partial named "' + String(t) + '"');
              return null
          })
      }
      var i = t[1]
        , r = t[2]
        , o = e.meta
        , s = o.templateMeta
        , a = o.symbols;
      e.startLabels(),
      e.pushFrame(),
      e.returnTo("END"),
      U(i, e),
      e.pushImmediate(me),
      e.pushArgs(1, !0),
      e.helper(n),
      e.dup(),
      e.test("simple"),
      e.enter(2),
      e.jumpUnless("ELSE"),
      e.getPartialTemplate(),
      e.compileDynamicBlock(),
      e.invokeDynamic(new Ci(a,r)),
      e.popScope(),
      e.popFrame(),
      e.label("ELSE"),
      e.exit(),
      e.return(),
      e.label("END"),
      e.popFrame(),
      e.stopLabels()
  });
  var Ni = function() {
      function t(e) {
          $t(this, t),
          this.callerCount = e
      }
      return t.prototype.invoke = function(t, e) {
          var n = this.callerCount
            , i = t.stack;
          if (!e)
              return t.pushFrame(),
              void t.pushCallerScope();
          var r = e.symbolTable
            , o = r.parameters
            , s = o ? o.length : 0
            , a = Math.min(n, s);
          t.pushFrame(),
          t.pushCallerScope(s > 0);
          for (var u = t.scope(), p = 0; p < a; p++)
              u.bindSymbol(o[p], i.fromBase(n - p));
          t.call(e.start)
      }
      ,
      t
  }();
  _i.add(wi.Yield, function(t, e) {
      var n = t[1]
        , i = t[2]
        , r = H(i, e);
      e.getBlock(n),
      e.compileDynamicBlock(),
      e.invokeDynamic(new Ni(r)),
      e.popScope(),
      e.popFrame(),
      r && e.pop(r)
  }),
  _i.add(wi.Debugger, function(t, e) {
      var n = t[1];
      e.debugger(e.meta.symbols, n)
  }),
  _i.add(wi.ClientSideStatement, function(t, e) {
      Ai.compile(t, e)
  });
  var Oi = new Ei
    , Ti = new Ei(1);
  Oi.add(wi.Unknown, function(t, e) {
      var n = t[1];
      e.env.hasHelper(n, e.meta.templateMeta) ? Oi.compile([wi.Helper, n, me, null], e) : e.meta.asPartial ? e.resolveMaybeLocal(n) : (e.getVariable(0),
      e.getProperty(n))
  }),
  Oi.add(wi.Concat, function(t, e) {
      var n = t[1];
      n.forEach(function(t) {
          return U(t, e)
      }),
      e.concat(n.length)
  }),
  Ti.add(ri.Ops.FunctionExpression, function(t, e) {
      e.function(t[2])
  }),
  Oi.add(wi.Helper, function(t, e) {
      var n = e.env
        , i = e.meta
        , r = t[1]
        , o = t[2]
        , s = t[3];
      if (!n.hasHelper(r, i.templateMeta))
          throw new Error("Compile Error: " + r + " is not a helper");
      e.compileArgs(o, s, !0),
      e.helper(n.lookupHelper(r, i.templateMeta))
  }),
  Oi.add(wi.Get, function(t, e) {
      var n = t[1]
        , i = t[2];
      e.getVariable(n),
      i.forEach(function(t) {
          return e.getProperty(t)
      })
  }),
  Oi.add(wi.MaybeLocal, function(t, e) {
      var n = t[1];
      if (e.meta.asPartial) {
          var i = n[0];
          n = n.slice(1),
          e.resolveMaybeLocal(i)
      } else
          e.getVariable(0);
      n.forEach(function(t) {
          return e.getProperty(t)
      })
  }),
  Oi.add(wi.Undefined, function(t, e) {
      return e.primitive(void 0)
  }),
  Oi.add(wi.HasBlock, function(t, e) {
      e.hasBlock(t[1])
  }),
  Oi.add(wi.HasBlockParams, function(t, e) {
      e.hasBlockParams(t[1])
  }),
  Oi.add(wi.ClientSideExpression, function(t, e) {
      Ti.compile(t, e)
  });
  var Di = function() {
      function t() {
          $t(this, t),
          this.names = a(),
          this.funcs = []
      }
      return t.prototype.add = function(t, e) {
          this.funcs.push(e),
          this.names[t] = this.funcs.length - 1
      }
      ,
      t.prototype.addMissing = function(t) {
          this.missing = t
      }
      ,
      t.prototype.compile = function(t, e, n, i, r, o) {
          var s = this.names[t];
          if (void 0 === s) {
              var a = this.missing;
              a(t, e, n, i, r, o)
          } else {
              (0,
              this.funcs[s])(e, n, i, r, o)
          }
      }
      ,
      t
  }()
    , Mi = new Di
    , Bi = function() {
      function t() {
          $t(this, t),
          this.names = a(),
          this.funcs = []
      }
      return t.prototype.add = function(t, e) {
          this.funcs.push(e),
          this.names[t] = this.funcs.length - 1
      }
      ,
      t.prototype.addMissing = function(t) {
          this.missing = t
      }
      ,
      t.prototype.compile = function(t, e) {
          var n = t[1];
          if (!Array.isArray(n))
              return ["expr", n];
          var i = void 0
            , r = void 0
            , o = void 0;
          if (n[0] === wi.Helper)
              i = n[1],
              r = n[2],
              o = n[3];
          else {
              if (n[0] !== wi.Unknown)
                  return ["expr", n];
              i = n[1],
              r = o = null
          }
          var s = this.names[i];
          if (void 0 === s && this.missing) {
              var a = this.missing
                , u = a(i, r, o, e);
              return !1 === u ? ["expr", n] : u
          }
          if (void 0 !== s) {
              var p = this.funcs[s]
                , c = p(i, r, o, e);
              return !1 === c ? ["expr", n] : c
          }
          return ["expr", n]
      }
      ,
      t
  }();
  z(Mi, new Bi);
  var Pi = function() {
      function t() {
          $t(this, t),
          this.references = [],
          this.strings = [],
          this.expressions = [],
          this.arrays = [],
          this.blocks = [],
          this.functions = [],
          this.others = [],
          this.NULL_REFERENCE = this.reference(qe),
          this.UNDEFINED_REFERENCE = this.reference(Xe)
      }
      return t.prototype.getReference = function(t) {
          return this.references[t - 1]
      }
      ,
      t.prototype.reference = function(t) {
          var e = this.references.length;
          return this.references.push(t),
          e + 1
      }
      ,
      t.prototype.getString = function(t) {
          return this.strings[t - 1]
      }
      ,
      t.prototype.string = function(t) {
          var e = this.strings.length;
          return this.strings.push(t),
          e + 1
      }
      ,
      t.prototype.getExpression = function(t) {
          return this.expressions[t - 1]
      }
      ,
      t.prototype.getArray = function(t) {
          return this.arrays[t - 1]
      }
      ,
      t.prototype.getNames = function(t) {
          var e = this;
          return this.getArray(t).map(function(t) {
              return e.getString(t)
          })
      }
      ,
      t.prototype.array = function(t) {
          var e = this.arrays.length;
          return this.arrays.push(t),
          e + 1
      }
      ,
      t.prototype.getBlock = function(t) {
          return this.blocks[t - 1]
      }
      ,
      t.prototype.block = function(t) {
          var e = this.blocks.length;
          return this.blocks.push(t),
          e + 1
      }
      ,
      t.prototype.getFunction = function(t) {
          return this.functions[t - 1]
      }
      ,
      t.prototype.function = function(t) {
          var e = this.functions.length;
          return this.functions.push(t),
          e + 1
      }
      ,
      t.prototype.getOther = function(t) {
          return this.others[t - 1]
      }
      ,
      t.prototype.other = function(t) {
          var e = this.others.length;
          return this.others.push(t),
          e + 1
      }
      ,
      t
  }()
    , Li = ["javascript:", "vbscript:"]
    , Ri = ["A", "BODY", "LINK", "IMG", "IFRAME", "BASE", "FORM"]
    , Ii = ["EMBED"]
    , Fi = ["href", "src", "background", "action"]
    , ji = ["src"]
    , Ui = {
      BUTTON: {
          type: !0,
          form: !0
      },
      INPUT: {
          type: !0,
          form: !0,
          autocorrect: !0,
          list: !0
      },
      SELECT: {
          form: !0
      },
      OPTION: {
          form: !0
      },
      TEXTAREA: {
          form: !0
      },
      LABEL: {
          form: !0
      },
      FIELDSET: {
          form: !0
      },
      LEGEND: {
          form: !0
      },
      OBJECT: {
          form: !0
      }
  }
    , Hi = {
      colgroup: {
          depth: 2,
          before: "<table><colgroup>",
          after: "</colgroup></table>"
      },
      table: {
          depth: 1,
          before: "<table>",
          after: "</table>"
      },
      tbody: {
          depth: 2,
          before: "<table><tbody>",
          after: "</tbody></table>"
      },
      tfoot: {
          depth: 2,
          before: "<table><tfoot>",
          after: "</tfoot></table>"
      },
      thead: {
          depth: 2,
          before: "<table><thead>",
          after: "</thead></table>"
      },
      tr: {
          depth: 3,
          before: "<table><tbody><tr>",
          after: "</tr></tbody></table>"
      }
  }
    , zi = "http://www.w3.org/2000/svg"
    , Wi = "http://www.w3.org/2000/svg"
    , Vi = {
      foreignObject: 1,
      desc: 1,
      title: 1
  }
    , Gi = Object.create(null);
  ["b", "big", "blockquote", "body", "br", "center", "code", "dd", "div", "dl", "dt", "em", "embed", "h1", "h2", "h3", "h4", "h5", "h6", "head", "hr", "i", "img", "li", "listing", "main", "meta", "nobr", "ol", "p", "pre", "ruby", "s", "small", "span", "strong", "strike", "sub", "sup", "table", "tt", "u", "ul", "var"].forEach(function(t) {
      return Gi[t] = 1
  });
  var Yi, Xi = "undefined" == typeof document ? null : document;
  !function(t) {
      var e = function() {
          function t(e) {
              $t(this, t),
              this.document = e,
              this.setupUselessElement()
          }
          return t.prototype.setupUselessElement = function() {
              this.uselessElement = this.document.createElement("div")
          }
          ,
          t.prototype.createElement = function(t, e) {
              var n = void 0
                , i = void 0;
              if (e ? (n = e.namespaceURI === Wi || "svg" === t,
              i = Vi[e.tagName]) : (n = "svg" === t,
              i = !1),
              n && !i) {
                  if (Gi[t])
                      throw new Error("Cannot create a " + t + " inside an SVG context");
                  return this.document.createElementNS(Wi, t)
              }
              return this.document.createElement(t)
          }
          ,
          t.prototype.createElementNS = function(t, e) {
              return this.document.createElementNS(t, e)
          }
          ,
          t.prototype.setAttribute = function(t, e, n, i) {
              i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n)
          }
          ,
          t.prototype.createTextNode = function(t) {
              return this.document.createTextNode(t)
          }
          ,
          t.prototype.createComment = function(t) {
              return this.document.createComment(t)
          }
          ,
          t.prototype.insertBefore = function(t, e, n) {
              t.insertBefore(e, n)
          }
          ,
          t.prototype.insertHTMLBefore = function(t, e, n) {
              return ot(this.uselessElement, t, n, e)
          }
          ,
          t
      }();
      t.TreeConstruction = e;
      var n = e;
      n = nt(Xi, n),
      n = J(Xi, n),
      n = Z(Xi, n, Wi),
      t.DOMTreeConstruction = n
  }(Yi || (Yi = {}));
  var qi = function() {
      function t(e) {
          $t(this, t),
          this.document = e,
          this.namespace = null,
          this.uselessElement = this.document.createElement("div")
      }
      return t.prototype.setAttribute = function(t, e, n) {
          t.setAttribute(e, n)
      }
      ,
      t.prototype.setAttributeNS = function(t, e, n, i) {
          t.setAttributeNS(e, n, i)
      }
      ,
      t.prototype.removeAttribute = function(t, e) {
          t.removeAttribute(e)
      }
      ,
      t.prototype.removeAttributeNS = function(t, e, n) {
          t.removeAttributeNS(e, n)
      }
      ,
      t.prototype.createTextNode = function(t) {
          return this.document.createTextNode(t)
      }
      ,
      t.prototype.createComment = function(t) {
          return this.document.createComment(t)
      }
      ,
      t.prototype.createElement = function(t, e) {
          var n = void 0
            , i = void 0;
          if (e ? (n = e.namespaceURI === Wi || "svg" === t,
          i = Vi[e.tagName]) : (n = "svg" === t,
          i = !1),
          n && !i) {
              if (Gi[t])
                  throw new Error("Cannot create a " + t + " inside an SVG context");
              return this.document.createElementNS(Wi, t)
          }
          return this.document.createElement(t)
      }
      ,
      t.prototype.insertHTMLBefore = function(t, e, n) {
          return ot(this.uselessElement, t, e, n)
      }
      ,
      t.prototype.insertNodeBefore = function(t, e, n) {
          if (st(e)) {
              var i = e.firstChild
                , r = e.lastChild;
              return this.insertBefore(t, e, n),
              new En(t,i,r)
          }
          return this.insertBefore(t, e, n),
          new _n(t,e)
      }
      ,
      t.prototype.insertTextBefore = function(t, e, n) {
          var i = this.createTextNode(n);
          return this.insertBefore(t, i, e),
          i
      }
      ,
      t.prototype.insertBefore = function(t, e, n) {
          t.insertBefore(e, n)
      }
      ,
      t.prototype.insertAfter = function(t, e, n) {
          this.insertBefore(t, e, n.nextSibling)
      }
      ,
      t
  }()
    , Ki = qi;
  Ki = function(t, e) {
      return t && it(t) ? function(t) {
          function e(n) {
              $t(this, e);
              var i = te(this, t.call(this, n));
              return i.uselessComment = n.createComment(""),
              i
          }
          return Zt(e, t),
          e.prototype.insertHTMLBefore = function(e, n, i) {
              if (null === i)
                  return t.prototype.insertHTMLBefore.call(this, e, n, i);
              var r = !1
                , o = n ? n.previousSibling : e.lastChild;
              o && o instanceof Text && (r = !0,
              e.insertBefore(this.uselessComment, n));
              var s = t.prototype.insertHTMLBefore.call(this, e, n, i);
              return r && e.removeChild(this.uselessComment),
              s
          }
          ,
          e
      }(e) : e
  }(Xi, Ki),
  Ki = function(t, e) {
      if (!t)
          return e;
      if (!Q(t))
          return e;
      var n = t.createElement("div");
      return function(t) {
          function e() {
              return $t(this, e),
              te(this, t.apply(this, arguments))
          }
          return Zt(e, t),
          e.prototype.insertHTMLBefore = function(e, i, r) {
              if (null === r || "" === r)
                  return t.prototype.insertHTMLBefore.call(this, e, i, r);
              var o = e.tagName.toLowerCase()
                , s = Hi[o];
              return void 0 === s ? t.prototype.insertHTMLBefore.call(this, e, i, r) : $(e, s, n, r, i)
          }
          ,
          e
      }(e)
  }(Xi, Ki),
  Ki = function(t, e, n) {
      if (!t)
          return e;
      if (!et(t, n))
          return e;
      var i = t.createElement("div");
      return function(t) {
          function e() {
              return $t(this, e),
              te(this, t.apply(this, arguments))
          }
          return Zt(e, t),
          e.prototype.insertHTMLBefore = function(e, r, o) {
              return null === o || "" === o ? t.prototype.insertHTMLBefore.call(this, e, r, o) : e.namespaceURI !== n ? t.prototype.insertHTMLBefore.call(this, e, r, o) : tt(e, i, o, r)
          }
          ,
          e
      }(e)
  }(Xi, Ki, Wi);
  var Ji, $i = Ki, Qi = Yi.DOMTreeConstruction, Zi = function() {
      function t(e) {
          $t(this, t),
          this.attr = e
      }
      return t.prototype.setAttribute = function(t, e, n, i) {
          var r = t.getAppendOperations()
            , o = ct(n);
          lt(o) || r.setAttribute(e, this.attr, o, i)
      }
      ,
      t.prototype.updateAttribute = function(t, e, n, i) {
          null === n || void 0 === n || !1 === n ? i ? t.getDOM().removeAttributeNS(e, i, this.attr) : t.getDOM().removeAttribute(e, this.attr) : this.setAttribute(t, e, n)
      }
      ,
      t
  }(), tr = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.prototype.setAttribute = function(t, e, n, i) {
          lt(n) || (e[this.attr] = n)
      }
      ,
      e.prototype.removeAttribute = function(t, e, n) {
          var i = this.attr;
          n ? t.getDOM().removeAttributeNS(e, n, i) : t.getDOM().removeAttribute(e, i)
      }
      ,
      e.prototype.updateAttribute = function(t, e, n, i) {
          e[this.attr] = n,
          lt(n) && this.removeAttribute(t, e, i)
      }
      ,
      e
  }(Zi), er = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.prototype.setAttribute = function(e, n, i) {
          t.prototype.setAttribute.call(this, e, n, X(e, n, this.attr, i))
      }
      ,
      e.prototype.updateAttribute = function(e, n, i) {
          t.prototype.updateAttribute.call(this, e, n, X(e, n, this.attr, i))
      }
      ,
      e
  }(tr), nr = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.prototype.setAttribute = function(t, e, n) {
          e.value = N(n)
      }
      ,
      e.prototype.updateAttribute = function(t, e, n) {
          var i = e
            , r = i.value
            , o = N(n);
          r !== o && (i.value = o)
      }
      ,
      e
  }(Zi), ir = new nr("value"), rr = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.prototype.setAttribute = function(t, e, n) {
          if (null !== n && void 0 !== n && !1 !== n) {
              e.selected = !0
          }
      }
      ,
      e.prototype.updateAttribute = function(t, e, n) {
          var i = e;
          i.selected = !!n
      }
      ,
      e
  }(tr), or = new rr("selected"), sr = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.prototype.setAttribute = function(e, n, i) {
          t.prototype.setAttribute.call(this, e, n, X(e, n, this.attr, i))
      }
      ,
      e.prototype.updateAttribute = function(e, n, i, r) {
          t.prototype.updateAttribute.call(this, e, n, X(e, n, this.attr, i))
      }
      ,
      e
  }(Zi), ar = function() {
      function t(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
            , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
            , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          $t(this, t),
          this.slots = e,
          this.callerScope = n,
          this.evalScope = i,
          this.partialMap = r
      }
      return t.root = function(e) {
          for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = new Array(n + 1), r = 0; r <= n; r++)
              i[r] = Xe;
          return new t(i).init({
              self: e
          })
      }
      ,
      t.sized = function() {
          for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = new Array(e + 1), i = 0; i <= e; i++)
              n[i] = Xe;
          return new t(n)
      }
      ,
      t.prototype.init = function(t) {
          var e = t.self;
          return this.slots[0] = e,
          this
      }
      ,
      t.prototype.getSelf = function() {
          return this.get(0)
      }
      ,
      t.prototype.getSymbol = function(t) {
          return this.get(t)
      }
      ,
      t.prototype.getBlock = function(t) {
          return this.get(t)
      }
      ,
      t.prototype.getEvalScope = function() {
          return this.evalScope
      }
      ,
      t.prototype.getPartialMap = function() {
          return this.partialMap
      }
      ,
      t.prototype.bind = function(t, e) {
          this.set(t, e)
      }
      ,
      t.prototype.bindSelf = function(t) {
          this.set(0, t)
      }
      ,
      t.prototype.bindSymbol = function(t, e) {
          this.set(t, e)
      }
      ,
      t.prototype.bindBlock = function(t, e) {
          this.set(t, e)
      }
      ,
      t.prototype.bindEvalScope = function(t) {
          this.evalScope = t
      }
      ,
      t.prototype.bindPartialMap = function(t) {
          this.partialMap = t
      }
      ,
      t.prototype.bindCallerScope = function(t) {
          this.callerScope = t
      }
      ,
      t.prototype.getCallerScope = function() {
          return this.callerScope
      }
      ,
      t.prototype.child = function() {
          return new t(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)
      }
      ,
      t.prototype.get = function(t) {
          if (t >= this.slots.length)
              throw new RangeError("BUG: cannot get $" + t + " from scope; length=" + this.slots.length);
          return this.slots[t]
      }
      ,
      t.prototype.set = function(t, e) {
          if (t >= this.slots.length)
              throw new RangeError("BUG: cannot get $" + t + " from scope; length=" + this.slots.length);
          this.slots[t] = e
      }
      ,
      t
  }(), ur = function() {
      function t() {
          $t(this, t),
          this.scheduledInstallManagers = [],
          this.scheduledInstallModifiers = [],
          this.scheduledUpdateModifierManagers = [],
          this.scheduledUpdateModifiers = [],
          this.createdComponents = [],
          this.createdManagers = [],
          this.updatedComponents = [],
          this.updatedManagers = [],
          this.destructors = []
      }
      return t.prototype.didCreate = function(t, e) {
          this.createdComponents.push(t),
          this.createdManagers.push(e)
      }
      ,
      t.prototype.didUpdate = function(t, e) {
          this.updatedComponents.push(t),
          this.updatedManagers.push(e)
      }
      ,
      t.prototype.scheduleInstallModifier = function(t, e) {
          this.scheduledInstallManagers.push(e),
          this.scheduledInstallModifiers.push(t)
      }
      ,
      t.prototype.scheduleUpdateModifier = function(t, e) {
          this.scheduledUpdateModifierManagers.push(e),
          this.scheduledUpdateModifiers.push(t)
      }
      ,
      t.prototype.didDestroy = function(t) {
          this.destructors.push(t)
      }
      ,
      t.prototype.commit = function() {
          for (var t = this.createdComponents, e = this.createdManagers, n = 0; n < t.length; n++) {
              var i = t[n];
              e[n].didCreate(i)
          }
          for (var r = this.updatedComponents, o = this.updatedManagers, s = 0; s < r.length; s++) {
              var a = r[s];
              o[s].didUpdate(a)
          }
          for (var u = this.destructors, p = 0; p < u.length; p++)
              u[p].destroy();
          for (var c = this.scheduledInstallManagers, l = this.scheduledInstallModifiers, h = 0; h < c.length; h++) {
              var f = c[h]
                , d = l[h];
              f.install(d)
          }
          for (var m = this.scheduledUpdateModifierManagers, y = this.scheduledUpdateModifiers, v = 0; v < m.length; v++) {
              var g = m[v]
                , b = y[v];
              g.update(b)
          }
      }
      ,
      t
  }(), pr = function() {
      function t(e) {
          $t(this, t),
          this.array = e,
          this.offset = 0
      }
      return Qt(t, [{
          key: "type",
          get: function() {
              return this.array[this.offset]
          }
      }, {
          key: "op1",
          get: function() {
              return this.array[this.offset + 1]
          }
      }, {
          key: "op2",
          get: function() {
              return this.array[this.offset + 2]
          }
      }, {
          key: "op3",
          get: function() {
              return this.array[this.offset + 3]
          }
      }]),
      t
  }(), cr = function() {
      function t() {
          $t(this, t),
          this.opcodes = [],
          this._offset = 0,
          this._opcode = new pr(this.opcodes)
      }
      return t.prototype.opcode = function(t) {
          return this._opcode.offset = t,
          this._opcode
      }
      ,
      t.prototype.set = function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
            , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
            , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          this.opcodes[t] = e,
          this.opcodes[t + 1] = n,
          this.opcodes[t + 2] = i,
          this.opcodes[t + 3] = r
      }
      ,
      t.prototype.push = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
            , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
            , r = this._offset;
          return this.opcodes[this._offset++] = t,
          this.opcodes[this._offset++] = e,
          this.opcodes[this._offset++] = n,
          this.opcodes[this._offset++] = i,
          r
      }
      ,
      Qt(t, [{
          key: "next",
          get: function() {
              return this._offset
          }
      }, {
          key: "current",
          get: function() {
              return this._offset - 4
          }
      }]),
      t
  }(), lr = function() {
      function t(e) {
          var n = e.appendOperations
            , i = e.updateOperations;
          $t(this, t),
          this._macros = null,
          this._transaction = null,
          this.constants = new Pi,
          this.program = new cr,
          this.appendOperations = n,
          this.updateOperations = i
      }
      return t.prototype.toConditionalReference = function(t) {
          return new $e(t)
      }
      ,
      t.prototype.getAppendOperations = function() {
          return this.appendOperations
      }
      ,
      t.prototype.getDOM = function() {
          return this.updateOperations
      }
      ,
      t.prototype.getIdentity = function(t) {
          return o(t) + ""
      }
      ,
      t.prototype.begin = function() {
          this._transaction = new ur
      }
      ,
      t.prototype.didCreate = function(t, e) {
          this.transaction.didCreate(t, e)
      }
      ,
      t.prototype.didUpdate = function(t, e) {
          this.transaction.didUpdate(t, e)
      }
      ,
      t.prototype.scheduleInstallModifier = function(t, e) {
          this.transaction.scheduleInstallModifier(t, e)
      }
      ,
      t.prototype.scheduleUpdateModifier = function(t, e) {
          this.transaction.scheduleUpdateModifier(t, e)
      }
      ,
      t.prototype.didDestroy = function(t) {
          this.transaction.didDestroy(t)
      }
      ,
      t.prototype.commit = function() {
          this.transaction.commit(),
          this._transaction = null
      }
      ,
      t.prototype.attributeFor = function(t, e, n, i) {
          return at(t, e, n, void 0 === i ? null : i)
      }
      ,
      t.prototype.macros = function() {
          var t = this._macros;
          return t || (this._macros = t = this.populateBuiltins()),
          t
      }
      ,
      t.prototype.populateBuiltins = function() {
          return z()
      }
      ,
      Qt(t, [{
          key: "transaction",
          get: function() {
              return this._transaction
          }
      }]),
      t
  }(), hr = function() {
      function t(e, n) {
          var i = n.alwaysRevalidate
            , r = void 0 !== i && i;
          $t(this, t),
          this.frameStack = new ue,
          this.env = e,
          this.constants = e.constants,
          this.dom = e.getDOM(),
          this.alwaysRevalidate = r
      }
      return t.prototype.execute = function(t, e) {
          var n = this.frameStack;
          for (this.try(t, e); ; ) {
              if (n.isEmpty())
                  break;
              var i = this.frame.nextStatement();
              null !== i ? i.evaluate(this) : this.frameStack.pop()
          }
      }
      ,
      t.prototype.goto = function(t) {
          this.frame.goto(t)
      }
      ,
      t.prototype.try = function(t, e) {
          this.frameStack.push(new vr(this,t,e))
      }
      ,
      t.prototype.throw = function() {
          this.frame.handleException(),
          this.frameStack.pop()
      }
      ,
      t.prototype.evaluateOpcode = function(t) {
          t.evaluate(this)
      }
      ,
      Qt(t, [{
          key: "frame",
          get: function() {
              return this.frameStack.current
          }
      }]),
      t
  }(), fr = function(t) {
      function e(n, i, r, o) {
          $t(this, e);
          var s = te(this, t.call(this));
          s.start = n,
          s.type = "block",
          s.next = null,
          s.prev = null;
          var a = i.env
            , u = i.scope
            , p = i.dynamicScope
            , c = i.stack;
          return s.children = o,
          s.env = a,
          s.scope = u,
          s.dynamicScope = p,
          s.stack = c,
          s.bounds = r,
          s
      }
      return Zt(e, t),
      e.prototype.parentElement = function() {
          return this.bounds.parentElement()
      }
      ,
      e.prototype.firstNode = function() {
          return this.bounds.firstNode()
      }
      ,
      e.prototype.lastNode = function() {
          return this.bounds.lastNode()
      }
      ,
      e.prototype.evaluate = function(t) {
          t.try(this.children, null)
      }
      ,
      e.prototype.destroy = function() {
          this.bounds.destroy()
      }
      ,
      e.prototype.didDestroy = function() {
          this.env.didDestroy(this.bounds)
      }
      ,
      e
  }(be), dr = function(t) {
      function e(n, i, r, o) {
          $t(this, e);
          var s = te(this, t.call(this, n, i, r, o));
          return s.type = "try",
          s.tag = s._tag = Me.create(Ae),
          s
      }
      return Zt(e, t),
      e.prototype.didInitializeChildren = function() {
          this._tag.inner.update(c(this.children))
      }
      ,
      e.prototype.evaluate = function(t) {
          t.try(this.children, this)
      }
      ,
      e.prototype.handleException = function() {
          var t = this
            , e = this.env
            , n = this.bounds
            , i = this.children
            , r = this.scope
            , o = this.dynamicScope
            , s = this.start
            , a = this.stack
            , u = this.prev
            , p = this.next;
          i.clear();
          var c = Ln.resume(e, n, n.reset(e))
            , l = new kr(e,r,o,c)
            , h = new ce;
          l.execute(s, function(e) {
              e.stack = br.restore(a),
              e.updatingOpcodeStack.push(h),
              e.updateWith(t),
              e.updatingOpcodeStack.push(i)
          }),
          this.prev = u,
          this.next = p
      }
      ,
      e
  }(fr), mr = function() {
      function t(e, n) {
          $t(this, t),
          this.opcode = e,
          this.marker = n,
          this.didInsert = !1,
          this.didDelete = !1,
          this.map = e.map,
          this.updating = e.children
      }
      return t.prototype.insert = function(t, e, n, i) {
          var r = this.map
            , o = this.opcode
            , s = this.updating
            , a = null
            , u = null;
          i ? (u = r[i],
          a = u.bounds.firstNode()) : a = this.marker;
          var p = o.vmForInsertion(a)
            , c = null
            , l = o.start;
          p.execute(l, function(i) {
              r[t] = c = i.iterate(n, e),
              i.updatingOpcodeStack.push(new ce),
              i.updateWith(c),
              i.updatingOpcodeStack.push(c.children)
          }),
          s.insertBefore(c, u),
          this.didInsert = !0
      }
      ,
      t.prototype.retain = function(t, e, n) {}
      ,
      t.prototype.move = function(t, e, n, i) {
          var r = this.map
            , o = this.updating
            , s = r[t]
            , a = r[i] || null;
          i ? b(s, a.firstNode()) : b(s, this.marker),
          o.remove(s),
          o.insertBefore(s, a)
      }
      ,
      t.prototype.delete = function(t) {
          var e = this.map
            , n = e[t];
          n.didDestroy(),
          k(n),
          this.updating.remove(n),
          delete e[t],
          this.didDelete = !0
      }
      ,
      t.prototype.done = function() {
          this.opcode.didInitializeChildren(this.didInsert || this.didDelete)
      }
      ,
      t
  }(), yr = function(t) {
      function e(n, i, r, o, s) {
          $t(this, e);
          var u = te(this, t.call(this, n, i, r, o));
          u.type = "list-block",
          u.map = a(),
          u.lastIterated = ke,
          u.artifacts = s;
          var p = u._tag = Me.create(Ae);
          return u.tag = l([s.tag, p]),
          u
      }
      return Zt(e, t),
      e.prototype.didInitializeChildren = function() {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.lastIterated = this.artifacts.tag.value(),
          t && this._tag.inner.update(c(this.children))
      }
      ,
      e.prototype.evaluate = function(e) {
          var n = this.artifacts
            , i = this.lastIterated;
          if (!n.tag.validate(i)) {
              var r = this.bounds
                , o = e.dom
                , s = o.createComment("");
              o.insertAfter(r.parentElement(), s, r.lastNode());
              var a = new mr(this,s);
              new ze({
                  target: a,
                  artifacts: n
              }).sync(),
              this.parentElement().removeChild(s)
          }
          t.prototype.evaluate.call(this, e)
      }
      ,
      e.prototype.vmForInsertion = function(t) {
          var e = this.env
            , n = this.scope
            , i = this.dynamicScope
            , r = Ln.forInitialRender(this.env, this.bounds.parentElement(), t);
          return new kr(e,n,i,r)
      }
      ,
      e
  }(fr), vr = function() {
      function t(e, n, i) {
          $t(this, t),
          this.vm = e,
          this.ops = n,
          this.exceptionHandler = i,
          this.vm = e,
          this.ops = n,
          this.current = n.head()
      }
      return t.prototype.goto = function(t) {
          this.current = t
      }
      ,
      t.prototype.nextStatement = function() {
          var t = this.current
            , e = this.ops;
          return t && (this.current = e.nextNode(t)),
          t
      }
      ,
      t.prototype.handleException = function() {
          this.exceptionHandler && this.exceptionHandler.handleException()
      }
      ,
      t
  }(), gr = function() {
      function t(e, n, i) {
          $t(this, t),
          this.env = e,
          this.updating = n,
          this.bounds = i
      }
      return t.prototype.rerender = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              alwaysRevalidate: !1
          }
            , e = t.alwaysRevalidate
            , n = void 0 !== e && e
            , i = this.env
            , r = this.updating;
          new hr(i,{
              alwaysRevalidate: n
          }).execute(r, this)
      }
      ,
      t.prototype.parentElement = function() {
          return this.bounds.parentElement()
      }
      ,
      t.prototype.firstNode = function() {
          return this.bounds.firstNode()
      }
      ,
      t.prototype.lastNode = function() {
          return this.bounds.lastNode()
      }
      ,
      t.prototype.opcodes = function() {
          return this.updating
      }
      ,
      t.prototype.handleException = function() {
          throw "this should never happen"
      }
      ,
      t.prototype.destroy = function() {
          this.bounds.destroy(),
          k(this.bounds)
      }
      ,
      t
  }(), br = function() {
      function t(e, n, i) {
          $t(this, t),
          this.stack = e,
          this.fp = n,
          this.sp = i,
          Object.seal(this)
      }
      return t.empty = function() {
          return new this([],0,-1)
      }
      ,
      t.restore = function(t) {
          return new this(t.slice(),0,t.length - 1)
      }
      ,
      t.prototype.isEmpty = function() {
          return -1 === this.sp
      }
      ,
      t.prototype.push = function(t) {
          this.stack[++this.sp] = t
      }
      ,
      t.prototype.dup = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.sp;
          this.push(this.stack[t])
      }
      ,
      t.prototype.pop = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
            , e = this.stack[this.sp];
          return this.sp -= t,
          e
      }
      ,
      t.prototype.peek = function() {
          return this.stack[this.sp]
      }
      ,
      t.prototype.fromBase = function(t) {
          return this.stack[this.fp - t]
      }
      ,
      t.prototype.fromTop = function(t) {
          return this.stack[this.sp - t]
      }
      ,
      t.prototype.capture = function(t) {
          var e = this.sp + 1
            , n = e - t;
          return this.stack.slice(n, e)
      }
      ,
      t.prototype.toArray = function() {
          return this.stack.slice(this.fp, this.sp + 1)
      }
      ,
      t
  }(), kr = function() {
      function t(e, n, i, r) {
          $t(this, t),
          this.env = e,
          this.elementStack = r,
          this.dynamicScopeStack = new ue,
          this.scopeStack = new ue,
          this.updatingOpcodeStack = new ue,
          this.cacheGroups = new ue,
          this.listBlockStack = new ue,
          this.stack = br.empty(),
          this.pc = -1,
          this.ra = -1,
          this.s0 = null,
          this.s1 = null,
          this.t0 = null,
          this.t1 = null,
          this.env = e,
          this.constants = e.constants,
          this.elementStack = r,
          this.scopeStack.push(n),
          this.dynamicScopeStack.push(i)
      }
      return t.prototype.fetch = function(t) {
          this.stack.push(this[de[t]])
      }
      ,
      t.prototype.load = function(t) {
          this[de[t]] = this.stack.pop()
      }
      ,
      t.prototype.fetchValue = function(t) {
          return this[de[t]]
      }
      ,
      t.prototype.loadValue = function(t, e) {
          this[de[t]] = e
      }
      ,
      t.prototype.pushFrame = function() {
          this.stack.push(this.ra),
          this.stack.push(this.fp),
          this.fp = this.sp - 1
      }
      ,
      t.prototype.popFrame = function() {
          this.sp = this.fp - 1,
          this.ra = this.stack.fromBase(0),
          this.fp = this.stack.fromBase(-1)
      }
      ,
      t.prototype.goto = function(t) {
          this.pc = t
      }
      ,
      t.prototype.call = function(t) {
          this.ra = this.pc,
          this.pc = t
      }
      ,
      t.prototype.returnTo = function(t) {
          this.ra = t
      }
      ,
      t.prototype.return = function() {
          this.pc = this.ra
      }
      ,
      t.initial = function(e, n, i, r, o) {
          var s = ar.root(n, o.symbolTable.symbols.length)
            , a = new t(e,s,i,r);
          return a.pc = o.start,
          a.updatingOpcodeStack.push(new ce),
          a
      }
      ,
      t.prototype.capture = function(t) {
          return {
              env: this.env,
              scope: this.scope(),
              dynamicScope: this.dynamicScope(),
              stack: this.stack.capture(t)
          }
      }
      ,
      t.prototype.beginCacheGroup = function() {
          this.cacheGroups.push(this.updating().tail())
      }
      ,
      t.prototype.commitCacheGroup = function() {
          var t = new on("END")
            , e = this.updating()
            , n = this.cacheGroups.pop()
            , i = n ? e.nextNode(n) : e.head()
            , r = e.tail()
            , o = c(new le(i,r))
            , s = new nn(o,t);
          e.insertBefore(s, i),
          e.append(new rn(s)),
          e.append(t)
      }
      ,
      t.prototype.enter = function(t) {
          var e = new ce
            , n = this.capture(t)
            , i = this.elements().pushUpdatableBlock()
            , r = new dr(this.pc,n,i,e);
          this.didEnter(r)
      }
      ,
      t.prototype.iterate = function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ce
            , i = this.stack;
          i.push(e),
          i.push(t);
          var r = this.capture(2)
            , o = this.elements().pushUpdatableBlock();
          return new dr(this.pc,r,o,n)
      }
      ,
      t.prototype.enterItem = function(t, e) {
          this.listBlock().map[t] = e,
          this.didEnter(e)
      }
      ,
      t.prototype.enterList = function(t) {
          var e = new ce
            , n = this.capture(0)
            , i = this.elements().pushBlockList(e)
            , r = this.stack.peek().artifacts
            , o = new yr(t,n,i,e,r);
          this.listBlockStack.push(o),
          this.didEnter(o)
      }
      ,
      t.prototype.didEnter = function(t) {
          this.updateWith(t),
          this.updatingOpcodeStack.push(t.children)
      }
      ,
      t.prototype.exit = function() {
          this.elements().popBlock(),
          this.updatingOpcodeStack.pop(),
          this.updating().tail().didInitializeChildren()
      }
      ,
      t.prototype.exitList = function() {
          this.exit(),
          this.listBlockStack.pop()
      }
      ,
      t.prototype.updateWith = function(t) {
          this.updating().append(t)
      }
      ,
      t.prototype.listBlock = function() {
          return this.listBlockStack.current
      }
      ,
      t.prototype.updating = function() {
          return this.updatingOpcodeStack.current
      }
      ,
      t.prototype.elements = function() {
          return this.elementStack
      }
      ,
      t.prototype.scope = function() {
          return this.scopeStack.current
      }
      ,
      t.prototype.dynamicScope = function() {
          return this.dynamicScopeStack.current
      }
      ,
      t.prototype.pushChildScope = function() {
          this.scopeStack.push(this.scope().child())
      }
      ,
      t.prototype.pushCallerScope = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            , e = this.scope().getCallerScope();
          this.scopeStack.push(t ? e.child() : e)
      }
      ,
      t.prototype.pushDynamicScope = function() {
          var t = this.dynamicScope().child();
          return this.dynamicScopeStack.push(t),
          t
      }
      ,
      t.prototype.pushRootScope = function(t, e) {
          var n = ar.sized(t);
          return e && n.bindCallerScope(this.scope()),
          this.scopeStack.push(n),
          n
      }
      ,
      t.prototype.popScope = function() {
          this.scopeStack.pop()
      }
      ,
      t.prototype.popDynamicScope = function() {
          this.dynamicScopeStack.pop()
      }
      ,
      t.prototype.newDestroyable = function(t) {
          this.elements().newDestroyable(t)
      }
      ,
      t.prototype.getSelf = function() {
          return this.scope().getSelf()
      }
      ,
      t.prototype.referenceForSymbol = function(t) {
          return this.scope().getSymbol(t)
      }
      ,
      t.prototype.execute = function(t, e) {
          this.pc = t,
          e && e(this);
          for (var n = void 0; ; )
              if (n = this.next(),
              n.done)
                  break;
          return n.value
      }
      ,
      t.prototype.next = function() {
          var t = this.env
            , e = this.updatingOpcodeStack
            , n = this.elementStack
            , i = void 0;
          return (i = this.nextStatement(t)) ? (ve.evaluate(this, i, i.type),
          {
              done: !1,
              value: null
          }) : {
              done: !0,
              value: new gr(t,e.pop(),n.popBlock())
          }
      }
      ,
      t.prototype.nextStatement = function(t) {
          var e = this.pc;
          if (-1 === e)
              return null;
          var n = t.program;
          return this.pc += 4,
          n.opcode(e)
      }
      ,
      t.prototype.evaluateOpcode = function(t) {
          ve.evaluate(this, t, t.type)
      }
      ,
      t.prototype.bindDynamicScope = function(t) {
          for (var e = this.dynamicScope(), n = t.length - 1; n >= 0; n--) {
              var i = this.constants.getString(t[n]);
              e.set(i, this.stack.pop())
          }
      }
      ,
      Qt(t, [{
          key: "fp",
          get: function() {
              return this.stack.fp
          },
          set: function(t) {
              this.stack.fp = t
          }
      }, {
          key: "sp",
          get: function() {
              return this.stack.sp
          },
          set: function(t) {
              this.stack.sp = t
          }
      }]),
      t
  }(), Sr = function() {
      function t(e) {
          $t(this, t),
          this.vm = e
      }
      return t.prototype.next = function() {
          return this.vm.next()
      }
      ,
      t
  }(), wr = 0, Er = function() {
      function t(e, n, i, r) {
          $t(this, t),
          this.id = e,
          this.meta = n,
          this.env = i,
          this.entryPoint = null,
          this.layout = null,
          this.partial = null,
          this.block = null,
          this.scanner = new vi(r,i),
          this.symbols = r.symbols,
          this.hasEval = r.hasEval
      }
      return t.prototype.render = function(t, e, n) {
          var i = this.env
            , r = Ln.forInitialRender(i, e, null)
            , o = this.asEntryPoint().compileDynamic(i)
            , s = kr.initial(i, t, n, r, o);
          return new Sr(s)
      }
      ,
      t.prototype.asEntryPoint = function() {
          return this.entryPoint || (this.entryPoint = this.scanner.scanEntryPoint(this.compilationMeta())),
          this.entryPoint
      }
      ,
      t.prototype.asLayout = function(t) {
          return this.layout || (this.layout = this.scanner.scanLayout(this.compilationMeta(), t || me)),
          this.layout
      }
      ,
      t.prototype.asPartial = function() {
          return this.partial || (this.partial = this.scanner.scanEntryPoint(this.compilationMeta(!0))),
          this.partial
      }
      ,
      t.prototype.asBlock = function() {
          return this.block || (this.block = this.scanner.scanBlock(this.compilationMeta())),
          this.block
      }
      ,
      t.prototype.compilationMeta = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return {
              templateMeta: this.meta,
              symbols: this.symbols,
              asPartial: t
          }
      }
      ,
      t
  }();
  !function(t) {
      t[t.Element = 0] = "Element",
      t[t.Attribute = 1] = "Attribute",
      t[t.Text = 2] = "Text",
      t[t.CdataSection = 3] = "CdataSection",
      t[t.EntityReference = 4] = "EntityReference",
      t[t.Entity = 5] = "Entity",
      t[t.ProcessingInstruction = 6] = "ProcessingInstruction",
      t[t.Comment = 7] = "Comment",
      t[t.Document = 8] = "Document",
      t[t.DocumentType = 9] = "DocumentType",
      t[t.DocumentFragment = 10] = "DocumentFragment",
      t[t.Notation = 11] = "Notation"
  }(Ji || (Ji = {}));
  var _r = function() {
      function t(e, n) {
          $t(this, t),
          this.cache = mt,
          this.inner = null,
          this.chains = null,
          this.lastParentValue = mt,
          this._guid = 0,
          this.tag = xe,
          this.parent = e,
          this.property = n
      }
      return t.prototype.value = function() {
          var t = this.lastParentValue
            , e = this.property
            , n = this.inner
            , i = this._parentValue();
          if (null === i || void 0 === i)
              return this.cache = void 0;
          if (t === i)
              n = this.inner;
          else {
              var r = "object" === (void 0 === i ? "undefined" : Jt(i)) ? Mr.for(i).referenceTypeFor(e) : Br;
              n = this.inner = new r(i,e,this)
          }
          return this.cache = n.value()
      }
      ,
      t.prototype.get = function(e) {
          var n = this._getChains();
          return e in n ? n[e] : n[e] = new t(this,e)
      }
      ,
      t.prototype.label = function() {
          return "[reference Direct]"
      }
      ,
      t.prototype._getChains = function() {
          return this.chains ? this.chains : this.chains = a()
      }
      ,
      t.prototype._parentValue = function() {
          var t = this.parent.value();
          return this.lastParentValue = t,
          t
      }
      ,
      t
  }()
    , Ar = function() {
      function t(e) {
          $t(this, t),
          this.chains = a(),
          this.tag = xe,
          this.object = e
      }
      return t.prototype.value = function() {
          return this.object
      }
      ,
      t.prototype.update = function(t) {
          this.object = t
      }
      ,
      t.prototype.get = function(t) {
          var e = this.chains;
          return t in e ? e[t] : e[t] = new _r(this,t)
      }
      ,
      t.prototype.chainFor = function(t) {
          var e = this.chains;
          return t in e ? e[t] : null
      }
      ,
      t.prototype.path = function(t) {
          return t.split(".").reduce(function(t, e) {
              return t.get(e)
          }, this)
      }
      ,
      t.prototype.referenceFromParts = function(t) {
          return t.reduce(function(t, e) {
              return t.get(e)
          }, this)
      }
      ,
      t.prototype.label = function() {
          return "[reference Root]"
      }
      ,
      t
  }()
    , xr = {
      destroy: function() {}
  }
    , Cr = function() {
      function t(e, n) {
          $t(this, t),
          this.tag = xe,
          this.parent = e
      }
      return t.prototype.chain = function() {
          return xr
      }
      ,
      t.prototype.notify = function() {}
      ,
      t.prototype.value = function() {
          return this.parent[this.property]
      }
      ,
      t.prototype.get = function(e) {
          return new t(this.parent[this.property],e)
      }
      ,
      t
  }()
    , Nr = function() {
      function t(e) {
          $t(this, t),
          this.tag = xe,
          this.inner = e
      }
      return t.prototype.update = function(t) {
          this.inner = t
      }
      ,
      t.prototype.chain = function() {
          return xr
      }
      ,
      t.prototype.notify = function() {}
      ,
      t.prototype.value = function() {
          return this.inner
      }
      ,
      t.prototype.referenceFromParts = function(t) {
          throw new Error("Not implemented")
      }
      ,
      t.prototype.chainFor = function(t) {
          throw new Error("Not implemented")
      }
      ,
      t.prototype.get = function(t) {
          return new Cr(this.inner,t)
      }
      ,
      t
  }()
    , Or = function() {
      function t(e) {
          $t(this, t),
          this.object = e
      }
      return t.prototype.root = function() {
          return new Nr(this.object)
      }
      ,
      t
  }()
    , Tr = "df8be4c8-4e89-44e2-a8f9-550c8dacdca7"
    , Dr = Object.hasOwnProperty
    , Mr = function() {
      function t(e, n) {
          var i = n.RootReferenceFactory
            , r = n.DefaultPathReferenceFactory;
          $t(this, t),
          this.references = null,
          this.slots = null,
          this.referenceTypes = null,
          this.propertyMetadata = null,
          this.object = e,
          this.RootReferenceFactory = i || Ar,
          this.DefaultPathReferenceFactory = r || Br
      }
      return t.for = function(e) {
          if (null === e || void 0 === e)
              return new t(e,{});
          if (Dr.call(e, "_meta") && e._meta)
              return e._meta;
          if (!Object.isExtensible(e))
              return new Or(e);
          var n = t;
          if (e.constructor && e.constructor[Tr]) {
              n = e.constructor[Tr].InstanceMetaConstructor
          } else
              e[Tr] && (n = e[Tr].InstanceMetaConstructor);
          return e._meta = new n(e,{})
      }
      ,
      t.exists = function(t) {
          return "object" === (void 0 === t ? "undefined" : Jt(t)) && t._meta
      }
      ,
      t.metadataForProperty = function(t) {
          return null
      }
      ,
      t.prototype.addReference = function(t, e) {
          var n = this.references = this.references || a();
          (n[t] = n[t] || new ae).add(e)
      }
      ,
      t.prototype.addReferenceTypeFor = function(t, e) {
          this.referenceTypes = this.referenceTypes || a(),
          this.referenceTypes[t] = e
      }
      ,
      t.prototype.referenceTypeFor = function(t) {
          return this.referenceTypes ? this.referenceTypes[t] || Br : Br
      }
      ,
      t.prototype.removeReference = function(t, e) {
          if (this.references) {
              this.references[t].delete(e)
          }
      }
      ,
      t.prototype.getReferenceTypes = function() {
          return this.referenceTypes = this.referenceTypes || a(),
          this.referenceTypes
      }
      ,
      t.prototype.referencesFor = function(t) {
          return this.references ? this.references[t] : null
      }
      ,
      t.prototype.getSlots = function() {
          return this.slots = this.slots || a()
      }
      ,
      t.prototype.root = function() {
          return this.rootCache = this.rootCache || new this.RootReferenceFactory(this.object)
      }
      ,
      t
  }()
    , Br = function() {
      function t(e, n, i) {
          $t(this, t),
          this.tag = xe,
          this.object = e,
          this.property = n
      }
      return t.prototype.value = function() {
          return this.object[this.property]
      }
      ,
      t.prototype.label = function() {
          return "[reference Property]"
      }
      ,
      t
  }()
    , Pr = function() {
      function t(e, n) {
          $t(this, t),
          this._registry = e,
          this._resolver = n
      }
      return t.prototype.register = function(t, e, n) {
          var i = this._toAbsoluteSpecifier(t);
          this._registry.register(i, e, n)
      }
      ,
      t.prototype.registration = function(t) {
          var e = this._toAbsoluteSpecifier(t);
          return this._registry.registration(e)
      }
      ,
      t.prototype.unregister = function(t) {
          var e = this._toAbsoluteSpecifier(t);
          this._registry.unregister(e)
      }
      ,
      t.prototype.registerOption = function(t, e, n) {
          var i = this._toAbsoluteOrTypeSpecifier(t);
          this._registry.registerOption(i, e, n)
      }
      ,
      t.prototype.registeredOption = function(t, e) {
          var n = this._toAbsoluteOrTypeSpecifier(t);
          return this._registry.registeredOption(n, e)
      }
      ,
      t.prototype.registeredOptions = function(t) {
          var e = this._toAbsoluteOrTypeSpecifier(t);
          return this._registry.registeredOptions(e)
      }
      ,
      t.prototype.unregisterOption = function(t, e) {
          var n = this._toAbsoluteOrTypeSpecifier(t);
          this._registry.unregisterOption(n, e)
      }
      ,
      t.prototype.registerInjection = function(t, e, n) {
          var i = this._toAbsoluteOrTypeSpecifier(t)
            , r = this._toAbsoluteSpecifier(n);
          this._registry.registerInjection(i, e, r)
      }
      ,
      t.prototype.registeredInjections = function(t) {
          var e = this._toAbsoluteOrTypeSpecifier(t);
          return this._registry.registeredInjections(e)
      }
      ,
      t.prototype._toAbsoluteSpecifier = function(t, e) {
          return this._resolver.identify(t, e)
      }
      ,
      t.prototype._toAbsoluteOrTypeSpecifier = function(t) {
          return yt(t) ? t : this._toAbsoluteSpecifier(t)
      }
      ,
      t
  }()
    , Lr = function() {
      function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          $t(this, t),
          this.bucket = e ? n({}, e) : {}
      }
      return t.prototype.get = function(t) {
          return this.bucket[t]
      }
      ,
      t.prototype.set = function(t, e) {
          return this.bucket[t] = e
      }
      ,
      t.prototype.child = function() {
          return new t(this.bucket)
      }
      ,
      t
  }()
    , Rr = function() {
      function t(e, n) {
          $t(this, t),
          this.position = 0,
          this.array = e,
          this.keyFor = n
      }
      return t.prototype.isEmpty = function() {
          return 0 === this.array.length
      }
      ,
      t.prototype.next = function() {
          var t = this.position
            , e = this.array
            , n = this.keyFor;
          if (t >= e.length)
              return null;
          var i = e[t]
            , r = n(i, t)
            , o = t;
          return this.position++,
          {
              key: r,
              value: i,
              memo: o
          }
      }
      ,
      t
  }()
    , Ir = function() {
      function t(e, n, i) {
          $t(this, t),
          this.position = 0,
          this.keys = e,
          this.values = n,
          this.keyFor = i
      }
      return t.prototype.isEmpty = function() {
          return 0 === this.keys.length
      }
      ,
      t.prototype.next = function() {
          var t = this.position
            , e = this.keys
            , n = this.values
            , i = this.keyFor;
          if (t >= e.length)
              return null;
          var r = n[t]
            , o = e[t]
            , s = i(r, o);
          return this.position++,
          {
              key: s,
              value: r,
              memo: o
          }
      }
      ,
      t
  }()
    , Fr = function() {
      function t() {
          $t(this, t)
      }
      return t.prototype.isEmpty = function() {
          return !0
      }
      ,
      t.prototype.next = function() {
          throw new Error("Cannot call next() on an empty iterator")
      }
      ,
      t
  }()
    , jr = new Fr
    , Ur = function() {
      function t(e, n) {
          $t(this, t),
          this.tag = e.tag,
          this.ref = e,
          this.keyFor = n
      }
      return t.prototype.iterate = function() {
          var t = this.ref
            , e = this.keyFor
            , n = t.value();
          if (Array.isArray(n))
              return n.length > 0 ? new Rr(n,e) : jr;
          if (void 0 === n || null === n)
              return jr;
          if (void 0 !== n.forEach) {
              var i = [];
              return n.forEach(function(t) {
                  i.push(t)
              }),
              i.length > 0 ? new Rr(i,e) : jr
          }
          if ("object" === (void 0 === n ? "undefined" : Jt(n))) {
              var r = Object.keys(n);
              return r.length > 0 ? new Ir(r,r.map(function(t) {
                  return n[t]
              }),e) : jr
          }
          throw new Error("Don't know how to {{#each " + n + "}}")
      }
      ,
      t.prototype.valueReferenceFor = function(t) {
          return new Ar(t.value)
      }
      ,
      t.prototype.updateValueReference = function(t, e) {
          t.update(e.value)
      }
      ,
      t.prototype.memoReferenceFor = function(t) {
          return new Ar(t.memo)
      }
      ,
      t.prototype.updateMemoReference = function(t, e) {
          t.update(e.memo)
      }
      ,
      t
  }()
    , Hr = function() {
      function t(e, n, i) {
          $t(this, t),
          this.nameRef = e,
          this.env = n,
          this.meta = i,
          this.tag = e.tag
      }
      return t.prototype.value = function() {
          var t = this.env
            , e = this.nameRef
            , n = e.value();
          return "string" == typeof n ? t.getComponentDefinition(n, this.meta) : null
      }
      ,
      t.prototype.get = function() {
          return Xe
      }
      ,
      t
  }()
    , zr = function() {
      function t(e, n) {
          $t(this, t),
          this.tag = xe,
          this.parent = e,
          this.property = n
      }
      return t.prototype.value = function() {
          return this.parent.value()[this.property]
      }
      ,
      t.prototype.get = function(e) {
          return new t(this,e)
      }
      ,
      t
  }()
    , Wr = function() {
      function t(e, n) {
          $t(this, t),
          this.tag = xe,
          this.helper = e,
          this.args = n.capture()
      }
      return t.prototype.value = function() {
          var t = this.helper
            , e = this.args;
          return t(e.positional.value(), e.named.value())
      }
      ,
      t.prototype.get = function(t) {
          return new zr(this,t)
      }
      ,
      t
  }()
    , Vr = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.prototype.toJSON = function() {
          return "<default-component-definition name=" + this.name + ">"
      }
      ,
      e
  }(Dn)
    , Gr = {
      action: St
  }
    , Yr = function(n) {
      function i(r) {
          $t(this, i);
          var o = te(this, n.call(this, {
              appendOperations: r.appendOperations,
              updateOperations: new $i(r.document || document)
          }));
          return o.helpers = a(),
          o.modifiers = a(),
          o.components = a(),
          o.managers = a(),
          e(o, t(r)),
          o.uselessAnchor = r.document.createElement("a"),
          o
      }
      return Zt(i, n),
      i.create = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return t.document = t.document || self.document,
          t.appendOperations = t.appendOperations || new Qi(t.document),
          new i(t)
      }
      ,
      i.prototype.protocolForURL = function(t) {
          return this.uselessAnchor.href = t,
          this.uselessAnchor.protocol
      }
      ,
      i.prototype.hasPartial = function() {
          return !1
      }
      ,
      i.prototype.lookupPartial = function() {}
      ,
      i.prototype.managerFor = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "main"
            , n = void 0;
          if (!(n = this.managers[e])) {
              var i = t(this);
              if (!(n = this.managers[e] = t(this).lookup("component-manager:/" + i.rootName + "/component-managers/" + e)))
                  throw new Error("No component manager found for ID " + e + ".")
          }
          return n
      }
      ,
      i.prototype.hasComponentDefinition = function(t, e) {
          return !!this.getComponentDefinition(t, e)
      }
      ,
      i.prototype.getComponentDefinition = function(e, n) {
          var i = t(this)
            , r = "template:" + e
            , o = n.specifier
            , s = i.identify(r, o);
          if (void 0 === s)
              throw i.identify("component:" + e, o) ? new Error("The component '" + e + "' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory.") : new Error("Could not find template for " + e);
          return this.components[s] ? this.components[s] : this.registerComponent(e, s, n, i)
      }
      ,
      i.prototype.registerComponent = function(t, e, n, i) {
          var r = i.lookup("template", e)
            , o = i.identify("component", e)
            , s = null;
          o && (s = i.factoryFor(o));
          var a = dt(r).create(this)
            , u = this.managerFor(n.managerId)
            , p = void 0;
          return p = Ct(u) ? u.createComponentDefinition(t, a, s) : new Vr(t,u,s),
          this.components[e] = p,
          p
      }
      ,
      i.prototype.hasHelper = function(t, e) {
          return !!this.lookupHelper(t, e)
      }
      ,
      i.prototype.lookupHelper = function(e, n) {
          if (Gr[e])
              return Gr[e];
          var i = t(this)
            , r = "helper:" + e
            , o = n.specifier
            , s = i.identify(r, o);
          return void 0 !== s ? this.helpers[s] ? this.helpers[s] : this.registerHelper(s, i) : void 0
      }
      ,
      i.prototype.registerHelper = function(t, e) {
          var n = e.lookup(t)
            , i = At(n);
          return this.helpers[t] = i,
          i
      }
      ,
      i.prototype.hasModifier = function(t, e) {
          return 1 === t.length && t in this.modifiers
      }
      ,
      i.prototype.lookupModifier = function(t, e) {
          var n = this.modifiers[t];
          if (!n)
              throw new Error("Modifier for " + t + " not found.");
          return n
      }
      ,
      i.prototype.iterableFor = function(t, e) {
          var n = void 0;
          if (!e)
              throw new Error("Must specify a key for #each");
          switch (e) {
          case "@index":
              n = function(t, e) {
                  return String(e)
              }
              ;
              break;
          case "@primitive":
              n = function(t) {
                  return String(t)
              }
              ;
              break;
          default:
              n = function(t) {
                  return t[e]
              }
          }
          return new Ur(t,n)
      }
      ,
      i.prototype.macros = function() {
          var t = n.prototype.macros.call(this);
          return xt(t.blocks, t.inlines),
          t
      }
      ,
      i
  }(lr)
    , Xr = {
      id: "sn4E/A3E",
      block: '{"symbols":["root"],"prelude":null,"head":null,"statements":[[4,"each",[[19,0,["roots"]]],[["key"],["id"]],{"statements":[[4,"-in-element",[[19,1,["parent"]]],[["nextSibling"],[[19,1,["nextSibling"]]]],{"statements":[[1,[25,"component",[[19,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',
      meta: {
          specifier: "template:/-application/templates/main.hbs"
      }
  }
    , qr = function() {
      function t(e) {
          $t(this, t),
          this._roots = [],
          this._rootsIndex = 0,
          this._initializers = [],
          this._initialized = !1,
          this.rootName = e.rootName,
          this.resolver = e.resolver
      }
      return t.prototype.registerInitializer = function(t) {
          this._initializers.push(t)
      }
      ,
      t.prototype.initRegistry = function() {
          var t = this._registry = new ne
            , e = new Pr(this._registry,this.resolver);
          t.register("environment:/" + this.rootName + "/main/main", Yr),
          t.registerOption("helper", "instantiate", !1),
          t.registerOption("template", "instantiate", !1),
          t.register("document:/" + this.rootName + "/main/main", window.document),
          t.registerOption("document", "instantiate", !1),
          t.registerInjection("environment", "document", "document:/" + this.rootName + "/main/main"),
          t.registerInjection("component-manager", "env", "environment:/" + this.rootName + "/main/main");
          for (var n = this._initializers, i = 0; i < n.length; i++)
              n[i].initialize(e);
          this._initialized = !0
      }
      ,
      t.prototype.initContainer = function() {
          var t = this;
          this._container = new ee(this._registry,this.resolver),
          this._container.defaultInjections = function(n) {
              var i = {};
              return e(i, t),
              i
          }
      }
      ,
      t.prototype.initialize = function() {
          this.initRegistry(),
          this.initContainer()
      }
      ,
      t.prototype.boot = function() {
          this.initialize(),
          this.env = this.lookup("environment:/" + this.rootName + "/main/main"),
          this.render()
      }
      ,
      t.prototype.render = function() {
          this.env.begin();
          var t = dt(Xr).create(this.env)
            , e = new Ar({
              roots: this._roots
          })
            , n = document.body
            , i = new Lr
            , r = t.render(e, n, i)
            , o = void 0;
          do {
              o = r.next()
          } while (!o.done);
          this.env.commit(),
          this._rendered = !0,
          this._renderResult = o.value
      }
      ,
      t.prototype.renderComponent = function(t, e, n) {
          this._roots.push({
              id: this._rootsIndex++,
              component: t,
              parent: e,
              nextSibling: n
          }),
          this.scheduleRerender()
      }
      ,
      t.prototype.rerender = function() {
          this.env.begin(),
          this._renderResult.rerender(),
          this.env.commit()
      }
      ,
      t.prototype.scheduleRerender = function() {
          var t = this;
          !this._scheduled && this._rendered && (this._scheduled = !0,
          requestAnimationFrame(function() {
              t._scheduled = !1,
              t.rerender()
          }))
      }
      ,
      t.prototype.identify = function(t, e) {
          return this.resolver.identify(t, e)
      }
      ,
      t.prototype.factoryFor = function(t, e) {
          return this._container.factoryFor(this.identify(t, e))
      }
      ,
      t.prototype.lookup = function(t, e) {
          return this._container.lookup(this.identify(t, e))
      }
      ,
      t
  }()
    , Kr = function() {
      function t(e, n) {
          $t(this, t),
          this.config = e,
          this.registry = n
      }
      return t.prototype.identify = function(t, e) {
          if (Nt(t))
              return t;
          var n = Mt(t)
            , i = void 0;
          if (e) {
              var r = Mt(e);
              if (Ot(r)) {
                  if (Bt("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer", void 0 === n.rootName && void 0 === n.collection && void 0 === n.namespace),
                  n.rootName = r.rootName,
                  n.collection = r.collection,
                  n.name ? n.namespace = r.namespace ? r.namespace + "/" + r.name : r.name : (n.namespace = r.namespace,
                  n.name = r.name),
                  i = this._serializeAndVerify(n))
                      return i;
                  var o = this._definitiveCollection(n.type);
                  if (o && (n.namespace += "/-" + o,
                  i = this._serializeAndVerify(n)))
                      return i;
                  n.rootName = n.collection = n.namespace = void 0
              } else
                  Bt('Referrer must either be "absolute" or include a `type` to determine the associated type', r.type),
                  n.collection = this._definitiveCollection(r.type),
                  Bt("'" + r.type + "' does not have a definitive collection", n.collection)
          }
          if (n.collection || (n.collection = this._definitiveCollection(n.type),
          Bt("'" + n.type + "' does not have a definitive collection", n.collection)),
          !n.rootName) {
              if (n.rootName = this.config.app.rootName || "app",
              i = this._serializeAndVerify(n))
                  return i;
              n.namespace ? (this.config.addons && this.config.addons[n.namespace],
              n.rootName = n.namespace,
              n.namespace = void 0) : (this.config.addons && this.config.addons[n.name],
              n.rootName = n.name,
              n.name = "main")
          }
          return (i = this._serializeAndVerify(n)) ? i : void 0
      }
      ,
      t.prototype.retrieve = function(t) {
          return this.registry.get(t)
      }
      ,
      t.prototype.resolve = function(t, e) {
          var n = this.identify(t, e);
          if (n)
              return this.retrieve(n)
      }
      ,
      t.prototype._definitiveCollection = function(t) {
          var e = this.config.types[t];
          return Bt("'" + t + "' is not a recognized type", e),
          e.definitiveCollection
      }
      ,
      t.prototype._serializeAndVerify = function(t) {
          var e = Tt(t);
          if (this.registry.has(e))
              return e
      }
      ,
      t
  }()
    , Jr = function() {
      function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          $t(this, t),
          this._entries = e
      }
      return t.prototype.has = function(t) {
          return t in this._entries
      }
      ,
      t.prototype.get = function(t) {
          return this._entries[t]
      }
      ,
      t
  }()
    , $r = Object.create(null, {
      constructor: {
          value: void 0,
          enumerable: !1,
          writable: !0
      }
  });
  Lt.prototype = $r;
  var Qr = function() {
      function t() {
          $t(this, t),
          this.clear()
      }
      return t.fromSlice = function(e) {
          var n = new t;
          return e.forEachNode(function(t) {
              return n.append(t.clone())
          }),
          n
      }
      ,
      t.prototype.head = function() {
          return this._head
      }
      ,
      t.prototype.tail = function() {
          return this._tail
      }
      ,
      t.prototype.clear = function() {
          this._head = this._tail = null
      }
      ,
      t.prototype.isEmpty = function() {
          return null === this._head
      }
      ,
      t.prototype.toArray = function() {
          var t = [];
          return this.forEachNode(function(e) {
              return t.push(e)
          }),
          t
      }
      ,
      t.prototype.splice = function(t, e, n) {
          var i = void 0;
          null === n ? (i = this._tail,
          this._tail = e) : (i = n.prev,
          e.next = n,
          n.prev = e),
          i && (i.next = t,
          t.prev = i)
      }
      ,
      t.prototype.nextNode = function(t) {
          return t.next
      }
      ,
      t.prototype.prevNode = function(t) {
          return t.prev
      }
      ,
      t.prototype.forEachNode = function(t) {
          for (var e = this._head; null !== e; )
              t(e),
              e = e.next
      }
      ,
      t.prototype.contains = function(t) {
          for (var e = this._head; null !== e; ) {
              if (e === t)
                  return !0;
              e = e.next
          }
          return !1
      }
      ,
      t.prototype.insertBefore = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return null === e ? this.append(t) : (e.prev ? e.prev.next = t : this._head = t,
          t.prev = e.prev,
          t.next = e,
          e.prev = t,
          t)
      }
      ,
      t.prototype.append = function(t) {
          var e = this._tail;
          return e ? (e.next = t,
          t.prev = e,
          t.next = null) : this._head = t,
          this._tail = t
      }
      ,
      t.prototype.pop = function() {
          return this._tail ? this.remove(this._tail) : null
      }
      ,
      t.prototype.prepend = function(t) {
          return this._head ? this.insertBefore(t, this._head) : this._head = this._tail = t
      }
      ,
      t.prototype.remove = function(t) {
          return t.prev ? t.prev.next = t.next : this._head = t.next,
          t.next ? t.next.prev = t.prev : this._tail = t.prev,
          t
      }
      ,
      t
  }()
    , Zr = function() {
      function t(e, n) {
          $t(this, t),
          this._head = e,
          this._tail = n
      }
      return t.toList = function(t) {
          var e = new Qr;
          return t.forEachNode(function(t) {
              return e.append(t.clone())
          }),
          e
      }
      ,
      t.prototype.forEachNode = function(t) {
          for (var e = this._head; null !== e; )
              t(e),
              e = this.nextNode(e)
      }
      ,
      t.prototype.contains = function(t) {
          for (var e = this._head; null !== e; ) {
              if (e === t)
                  return !0;
              e = e.next
          }
          return !1
      }
      ,
      t.prototype.head = function() {
          return this._head
      }
      ,
      t.prototype.tail = function() {
          return this._tail
      }
      ,
      t.prototype.toArray = function() {
          var t = [];
          return this.forEachNode(function(e) {
              return t.push(e)
          }),
          t
      }
      ,
      t.prototype.nextNode = function(t) {
          return t === this._tail ? null : t.next
      }
      ,
      t.prototype.prevNode = function(t) {
          return t === this._head ? null : t.prev
      }
      ,
      t.prototype.isEmpty = function() {
          return !1
      }
      ,
      t
  }()
    , to = (new Zr(null,null),
  function() {
      if ("function" != typeof WeakMap)
          return !1;
      var t = new WeakMap;
      return "[object WeakMap]" === Object.prototype.toString.call(t)
  }())
    , eo = "undefined" != typeof Uint32Array;
  eo ? Uint32Array : Array;
  var no = (to && Object.freeze([]),
  function() {
      function t(e) {
          $t(this, t),
          this.tags = Rt(),
          this.computedPropertyTags = Rt(),
          this.trackedProperties = e ? Object.create(e.trackedProperties) : Rt(),
          this.trackedPropertyDependencies = e ? Object.create(e.trackedPropertyDependencies) : Rt()
      }
      return t.prototype.tagFor = function(t) {
          var e = this.tags[t];
          if (e)
              return e;
          var n = void 0;
          return (n = this.trackedPropertyDependencies[t]) ? this.tags[t] = Ut(this, t, n) : this.tags[t] = Ne.create()
      }
      ,
      t.prototype.dirtyableTagFor = function(t) {
          var e = this.trackedPropertyDependencies[t];
          return e ? this.computedPropertyTags[t] || (this.computedPropertyTags[t] = Ne.create()) : this.tags[t] || (this.tags[t] = Ne.create())
      }
      ,
      t
  }())
    , io = Symbol("ember-object")
    , ro = Object.prototype.hasOwnProperty
    , oo = function() {}
    , so = function(t) {
      function e(n, i, r) {
          $t(this, e);
          var o = te(this, t.call(this, r));
          return o.target = n,
          o.key = i,
          o
      }
      return Zt(e, t),
      e.for = function(t, n) {
          return new e(t,n,"The property '" + n + "' on " + t + " was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.")
      }
      ,
      e
  }(Error)
    , ao = function() {
      function t(e) {
          $t(this, t),
          this.element = null,
          this.debugName = null,
          this.__args__ = null,
          Object.assign(this, e)
      }
      return t.create = function(t) {
          return new this(t)
      }
      ,
      t.prototype.didInsertElement = function() {}
      ,
      t.prototype.didUpdate = function() {}
      ,
      t.prototype.willDestroy = function() {}
      ,
      t.prototype.destroy = function() {
          this.willDestroy()
      }
      ,
      t.prototype.toString = function() {
          return this.debugName + " component"
      }
      ,
      Qt(t, [{
          key: "args",
          get: function() {
              return this.__args__
          },
          set: function(t) {
              this.__args__ = t,
              Ht(this).dirtyableTagFor("args").inner.dirty()
          }
      }]),
      t
  }()
    , uo = function(t) {
      function e(n, i, r, o) {
          $t(this, e);
          var s = te(this, t.call(this, n, i, null));
          return s.template = r,
          s.componentFactory = o,
          s
      }
      return Zt(e, t),
      e.prototype.toJSON = function() {
          return {
              GlimmerDebug: "<component-definition>"
          }
      }
      ,
      e
  }(Dn)
    , po = function() {
      function t() {
          $t(this, t)
      }
      return t.prototype.get = function(t) {
          return ho.create(this, t)
      }
      ,
      t
  }()
    , co = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n._lastRevision = null,
          n._lastValue = null,
          n
      }
      return Zt(e, t),
      e.prototype.value = function() {
          var t = this.tag
            , e = this._lastRevision
            , n = this._lastValue;
          return e && t.validate(e) || (n = this._lastValue = this.compute(),
          this._lastRevision = t.value()),
          n
      }
      ,
      e
  }(po)
    , lo = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.children = Rt(),
          n
      }
      return Zt(e, t),
      e.prototype.get = function(t) {
          var e = this.children[t];
          return e || (e = this.children[t] = new fo(this.inner,t)),
          e
      }
      ,
      e
  }(Fe)
    , ho = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.create = function(t, e) {
          return m(t) ? new fo(t.value(),e) : new mo(t,e)
      }
      ,
      e.prototype.get = function(t) {
          return new mo(this,t)
      }
      ,
      e
  }(co)
    , fo = function(t) {
      function e(n, i) {
          $t(this, e);
          var r = te(this, t.call(this));
          return r._parentValue = n,
          r._propertyKey = i,
          r.tag = Wt(n, i, Vt),
          r
      }
      return Zt(e, t),
      e.prototype.compute = function() {
          return this._parentValue[this._propertyKey]
      }
      ,
      e
  }(ho)
    , mo = function(t) {
      function e(n, i) {
          $t(this, e);
          var r = te(this, t.call(this))
            , o = n.tag
            , s = Me.create(Ae);
          return r._parentReference = n,
          r._parentObjectTag = s,
          r._propertyKey = i,
          r.tag = l([o, s]),
          r
      }
      return Zt(e, t),
      e.prototype.compute = function() {
          var t = this._parentReference
            , e = this._parentObjectTag
            , n = this._propertyKey
            , i = t.value();
          return e.inner.update(Wt(i, n)),
          "string" == typeof i && "length" === n ? i.length : "object" === (void 0 === i ? "undefined" : Jt(i)) && i ? i[n] : void 0
      }
      ,
      e
  }(ho)
    , yo = (function(t) {
      function e(n) {
          $t(this, e);
          var i = te(this, t.call(this));
          return i.tag = Ne.create(),
          i._value = n,
          i
      }
      Zt(e, t),
      e.prototype.value = function() {
          return this._value
      }
      ,
      e.prototype.update = function(t) {
          t !== this._value && (this.tag.inner.dirty(),
          this._value = t)
      }
  }(po),
  function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      Zt(e, t),
      e.create = function(t) {
          if (m(t)) {
              var n = t.value();
              return Ve.create(n)
          }
          return new e(t)
      }
  }($e),
  function() {
      function t(n, i, r) {
          $t(this, t);
          var o = n.componentFactory
            , s = n.name;
          this.args = i;
          var a = {
              debugName: s,
              args: this.namedArgsSnapshot()
          };
          e(a, r),
          this.component = o.create(a)
      }
      return t.prototype.namedArgsSnapshot = function() {
          return Object.freeze(this.args.named.value())
      }
      ,
      t
  }())
    , vo = function() {
      function e(t) {
          $t(this, e),
          this.env = t.env
      }
      return e.create = function(t) {
          return new e(t)
      }
      ,
      e.prototype.prepareArgs = function(t, e) {
          return null
      }
      ,
      e.prototype.create = function(e, n, i) {
          if (!n.componentFactory)
              return null;
          var r = t(this.env);
          return new yo(n,i.capture(),r)
      }
      ,
      e.prototype.createComponentDefinition = function(t, e, n) {
          return new uo(t,this,e,n)
      }
      ,
      e.prototype.layoutFor = function(t, e, n) {
          return t.template.asLayout().compileDynamic(this.env)
      }
      ,
      e.prototype.getSelf = function(t) {
          return t ? new lo(t.component) : null
      }
      ,
      e.prototype.didCreateElement = function(t, e) {
          t && (t.component.element = e)
      }
      ,
      e.prototype.didRenderLayout = function(t, e) {}
      ,
      e.prototype.didCreate = function(t) {
          t && t.component.didInsertElement()
      }
      ,
      e.prototype.getTag = function() {
          return null
      }
      ,
      e.prototype.update = function(t, e) {
          if (t) {
              var n = t.component;
              n.args = t.namedArgsSnapshot(),
              n.didUpdate()
          }
      }
      ,
      e.prototype.didUpdateLayout = function() {}
      ,
      e.prototype.didUpdate = function(t) {}
      ,
      e.prototype.getDestructor = function(t) {
          if (t)
              return t.component
      }
      ,
      e
  }()
    , go = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e
  }(ao)
    , bo = {
      id: "fHMXU8oD",
      block: '{"symbols":[],"prelude":[[6,"footer"]],"head":[[9,"class","footer centered-stretchable-block"],[7]],"statements":[[0,"\\n  "],[6,"div"],[9,"class","__link-container"],[7],[0,"\\n    "],[6,"a"],[9,"target","_blank"],[9,"href","https://plasticknives.bandcamp.com"],[9,"class","__link __link--bandcamp"],[7],[0," Bandcamp "],[8],[0,"\\n    "],[6,"a"],[9,"target","_blank"],[9,"href","https://soundcloud.com/plasticknivessuck"],[9,"class","__link __link--soundcloud"],[7],[0," SoundCloud "],[8],[0,"\\n    "],[6,"a"],[9,"target","_blank"],[9,"href","https://twitter.com/PlastiKnives"],[9,"class","__link __link--twitter"],[7],[0," Twitter "],[8],[0,"\\n    "],[6,"a"],[9,"href","mailto: plastic.knives.booking@gmail.com"],[9,"class","__link __link--mail"],[7],[0," Mail "],[8],[0,"\\n    "],[6,"a"],[9,"target","_blank"],[9,"href","https://www.facebook.com/plasticknivessuck"],[9,"class","__link __link--facebook"],[7],[0," Facebook "],[8],[0,"\\n    "],[6,"a"],[9,"target","_blank"],[9,"href","https://www.instagram.com/plastic.knives/"],[9,"class","__link __link--instagram"],[7],[0," Instagram "],[8],[0,"\\n    "],[6,"a"],[9,"target","_blank"],[9,"href","https://www.youtube.com/channel/UC25XYAng3mNn8UdkWqO1p9A"],[9,"class","__link __link--youtube"],[7],[0," Youtube "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',
      meta: {
          specifier: "template:/plastic-knives/components/app-footer",
          "<template-meta>": !0
      }
  }
    , ko = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e
  }(ao)
    , So = {
      id: "GTlEWIOB",
      block: '{"symbols":[],"prelude":[[6,"header"]],"head":[[9,"class","header"],[7]],"statements":[[8],[0,"\\n"]],"hasEval":false}',
      meta: {
          specifier: "template:/plastic-knives/components/app-header",
          "<template-meta>": !0
      }
  }
    , wo = function(t, e, n, i) {
      var r, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : Jt(Reflect)) && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(t, e, n, i);
      else
          for (var a = t.length - 1; a >= 0; a--)
              (r = t[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
      return o > 3 && s && Object.defineProperty(e, n, s),
      s
  }
    , Eo = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      Qt(e, [{
          key: "albumIndex",
          get: function() {
              return this.args.index + 1
          }
      }, {
          key: "isOpened",
          get: function() {
              return this.args.album === this.args.activeAlbum
          }
      }, {
          key: "isOtherOpened",
          get: function() {
              return !!this.args.activeAlbum && this.args.album !== this.args.activeAlbum
          }
      }, {
          key: "styleAttributeValue",
          get: function() {
              var t = this.args.playProgressPercentage;
              return this.isOpened && t ? "width: " + t + "%" : ""
          }
      }]),
      e
  }(ao);
  wo([It("args")], Eo.prototype, "albumIndex", null),
  wo([It("args")], Eo.prototype, "isOpened", null),
  wo([It("args")], Eo.prototype, "isOtherOpened", null),
  wo([It("args")], Eo.prototype, "styleAttributeValue", null);
  var _o = {
      id: "lnE8wJ+M",
      block: '{"symbols":["song","@activeSong","@playSong","@isClosing","@isOpening","@album","@toggleOpened"],"prelude":[[6,"div"]],"head":[[10,"class",[26,["album album-",[18,"albumIndex"],[25,"if",[[19,0,["isOpened"]]," is-opened"],null],[25,"if",[[19,0,["isOtherOpened"]]," is-other-opened"],null],[25,"if",[[19,5,[]]," is-opening"],null],[25,"if",[[19,4,[]]," is-closing"],null]]]],[7]],"statements":[[0,"\\n  "],[6,"div"],[9,"class","__progress"],[7],[0,"\\n    "],[6,"div"],[9,"class","__progress-indicator"],[10,"style",[18,"styleAttributeValue"],null],[7],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","__front"],[9,"role","button"],[10,"onclick",[25,"action",[[19,7,[]],[19,6,[]]],null],null],[10,"style",[26,["background-image: url(\'",[19,6,["coverUrl"]],"\')"]]],[7],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","__back"],[7],[0,"\\n    "],[6,"button"],[9,"type","button"],[9,"class","__close-button"],[10,"onclick",[25,"action",[[19,7,[]],[19,6,[]]],null],null],[7],[8],[0,"\\n\\n    "],[6,"div"],[9,"class","__song-list"],[7],[0,"\\n"],[4,"each",[[19,6,["songs"]]],[["key"],["@index"]],{"statements":[[0,"        "],[5,"music-song",[],[["@song","@isActive","@play"],[[19,1,[]],[25,"eq",[[19,1,[]],[19,2,[]]],null],[25,"action",[[19,3,[]],[19,1,[]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[8],[0,"\\n\\n    "],[6,"a"],[9,"target","_blank"],[10,"href",[26,[[19,6,["link"]]]]],[9,"class","__title"],[7],[0," "],[1,[19,6,["title"]],false],[0," "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',
      meta: {
          specifier: "template:/plastic-knives/components/music-album",
          "<template-meta>": !0
      }
  }
    , Ao = function(t, e, n, i) {
      var r, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : Jt(Reflect)) && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(t, e, n, i);
      else
          for (var a = t.length - 1; a >= 0; a--)
              (r = t[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
      return o > 3 && s && Object.defineProperty(e, n, s),
      s
  }
    , xo = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.isPlaying = !1,
          n
      }
      return Zt(e, t),
      e.prototype.didInsertElement = function() {
          this.audioEl = this.element.querySelector(".js-music-player-audio")
      }
      ,
      e.prototype.startPlayback = function() {
          this.audioEl.play()
      }
      ,
      e.prototype.stopPlayback = function() {
          this.audioEl.pause()
      }
      ,
      e.prototype.togglePlayPause = function() {
          this.isPlaying ? this.stopPlayback() : this.startPlayback()
      }
      ,
      e.prototype.onAudioPause = function() {
          this.isPlaying = !1
      }
      ,
      e.prototype.onAudioPlaying = function() {
          this.isPlaying = !0
      }
      ,
      e.prototype.onAudioTimeUpdate = function() {
          var t = this.args.activeSong;
          t ? this.args.updatePlayProgressPercentage(this.audioEl.currentTime / t.duration * 100) : this.args.updatePlayProgressPercentage(0)
      }
      ,
      e
  }(ao);
  Ao([It], xo.prototype, "isPlaying", void 0);
  var Co = {
      id: "+90gaIte",
      block: '{"symbols":["@activeSong","@playPrevious","@playNext"],"prelude":[[6,"div"]],"head":[[10,"class",[26,["player",[25,"if",[[19,1,[]]," is-active"],null]]]],[7]],"statements":[[0,"\\n  "],[6,"audio"],[9,"class","js-music-player-audio"],[10,"src",[26,[[19,1,["fileName"]]]]],[10,"onpause",[25,"action",[[19,0,["onAudioPause"]]],null],null],[10,"onplaying",[25,"action",[[19,0,["onAudioPlaying"]]],null],null],[10,"ontimeupdate",[25,"action",[[19,0,["onAudioTimeUpdate"]]],null],null],[9,"volume","1"],[9,"autoplay",""],[7],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","__controls-container"],[7],[0,"\\n    "],[6,"button"],[9,"type","button"],[9,"class","__control __control--previous"],[10,"onclick",[25,"action",[[19,2,[]]],null],null],[7],[8],[0,"\\n    "],[6,"div"],[9,"class","__main-control-wrapper"],[7],[0,"\\n      "],[6,"button"],[9,"type","button"],[9,"class","__circle"],[10,"onclick",[25,"action",[[19,0,["togglePlayPause"]]],null],null],[7],[0,"\\n        "],[6,"div"],[10,"class",[26,["__control ",[25,"if",[[19,0,["isPlaying"]],"__control--pause","__control--play"],null]]]],[7],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"button"],[9,"class","__control __control--next"],[10,"onclick",[25,"action",[[19,3,[]]],null],null],[7],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',
      meta: {
          specifier: "template:/plastic-knives/components/music-player",
          "<template-meta>": !0
      }
  }
    , No = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      Qt(e, [{
          key: "featsString",
          get: function() {
              return (this.args.song.feat || []).join(", ")
          }
      }]),
      e
  }(ao)
    , Oo = {
      id: "GsVQWyCg",
      block: '{"symbols":["@isActive","@play","@song"],"prelude":[[6,"div"]],"head":[[10,"class",[26,["song",[25,"if",[[19,1,[]]," is-active"],null]]]],[10,"onclick",[25,"action",[[19,2,[]]],null],null],[7]],"statements":[[0,"\\n  "],[1,[19,3,["title"]],false],[0,"\\n"],[4,"if",[[19,0,["featsString"]]],null,{"statements":[[0,"    (feat: "],[1,[18,"featsString"],false],[0,")\\n"]],"parameters":[]},null],[8],[0,"\\n"]],"hasEval":false}',
      meta: {
          specifier: "template:/plastic-knives/components/music-song",
          "<template-meta>": !0
      }
  }
    , To = 0
    , Do = ["images/icons/pause-1855c9f99bf16b785f65ab61246869b4.png", "images/headers/1.svg", "images/headers/2.svg", "images/headers/3.svg", "images/headers/4.svg", "images/headers/5.svg"]
    , Mo = function(t) {
      function e() {
          return $t(this, e),
          te(this, t.apply(this, arguments))
      }
      return Zt(e, t),
      e.prototype.didInsertElement = function() {
          Kt()
      }
      ,
      e
  }(ao)
    , Bo = {
      id: "EGpxeNjk",
      block: '{"symbols":[],"prelude":[[6,"div"]],"head":[[9,"class","app"],[7]],"statements":[[0,"\\n  "],[5,"route-music",[],[[],[]],{"statements":[],"parameters":[]}],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',
      meta: {
          specifier: "template:/plastic-knives/components/plastic-knives",
          "<template-meta>": !0
      }
  }
    , Po = function t() {
      $t(this, t),
      this.title = "",
      this.songs = [],
      this.link = "",
      this.coverUrl = ""
  }
    , Lo = function t(e) {
      $t(this, t),
      this.title = "",
      this.duration = 0,
      this.fileName = "",
      this.feat = [],
      this.title = e.title,
      this.duration = e.duration,
      this.fileName = e.fileName,
      this.feat = e.feat
  }
    , Ro = [{
    title: "Tongue In Cheek",
    coverUrl: "images/albums/tongue-in-cheek-d997bd1f12b213a1c2510dc160fa1e7b.png",
    link: "https://plasticknives.bandcamp.com/album/tongue-in-cheek",
    songs: [{
        title: "Eyes On The Prize",
        fileName: "songs/tongue-in-cheek/01-eyes-on-the-prize.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Future Ex",
        fileName: "songs/tongue-in-cheek/02-future-ex.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Milk Teeth",
        fileName: "songs/tongue-in-cheek/03-milk-teeth.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Pleasure Delayer",
        fileName: "songs/tongue-in-cheek/04-pleasure-delayer.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Hooker Hickey",
        fileName: "songs/tongue-in-cheek/05-hooker-hickey.mp3",
        feat: [],
        duration: 30
    }, {
        title: "You Get The Worst Of Me",
        fileName: "songs/tongue-in-cheek/06-you-get-the-worst-of-me.mp3",
        feat: ["Hrvoje Malić"],
        duration: 30
    }, {
        title: "Tongue In Cheek",
        fileName: "songs/tongue-in-cheek/07-tongue-in-cheek.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Residue",
        fileName: "songs/tongue-in-cheek/08-residue.mp3",
        feat: [],
        duration: 30
    }]
  }, {
      title: "Both Sides Of The Atlantic",
      coverUrl: "images/albums/both-sides-of-the-atlantic-c73c950acad2c349d752984e1aa5d8e7.png",
      link: "https://plasticknives.bandcamp.com/album/both-sides-of-the-atlantic",
      songs: [{
          title: "Housewife Stash Party",
          fileName: "songs/both-sides-of-the-atlantic/01-housewife-stash-party.mp3",
          feat: [],
          duration: 30
      }, {
          title: "Crossfire",
          fileName: "songs/both-sides-of-the-atlantic/02-crossfire.mp3",
          feat: ["Diyala"],
          duration: 30
      }, {
          title: "Big Bag Of Tricks",
          fileName: "songs/both-sides-of-the-atlantic/03-big-bag-of-tricks.mp3",
          feat: [],
          duration: 30
      }, {
          title: "Dying Kings",
          fileName: "songs/both-sides-of-the-atlantic/04-dying-kings.mp3",
          feat: [],
          duration: 30
      }, {
          title: "Crta",
          fileName: "songs/both-sides-of-the-atlantic/05-crta.mp3",
          feat: ["Sara Renar"],
          duration: 30
      }, {
          title: "Broad Stroke",
          fileName: "songs/both-sides-of-the-atlantic/06-broad-stroke.mp3",
          feat: [],
          duration: 30
      }, {
          title: "Both Sides Of The Atlantic",
          fileName: "songs/both-sides-of-the-atlantic/07-both-sides-of-the-atlantic.mp3",
          feat: [],
          duration: 30
      }]
  }, {
    title: "Body Language",
    coverUrl: "images/albums/body-language-1173d6ecd392125c321f2e45d090cc4d.jpg",
    link: "https://plasticknives.bandcamp.com/album/body-language",
    songs: [{
        title: "Goldrush",
        fileName: "songs/body-language/01-goldrush.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Gonna Throw Myself Around",
        fileName: "songs/body-language/02-gonna-throw-myself-around.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Secret Lvl",
        fileName: "songs/body-language/03-secret-lvl.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Ballgagger",
        fileName: "songs/body-language/04-ballgagger.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Dying Kings",
        fileName: "songs/body-language/05-body-language.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Body Language",
        fileName: "songs/body-language/06-dying-kings.mp3",
        feat: [],
        duration: 30
    }]
  }, {
    title: "We Used To Do It (Live)",
    coverUrl: "images/albums/we-used-to-do-it-live.jpg",
    link: "https://plasticknives.bandcamp.com/album/we-used-to-do-it-live",
    songs: [{
        title: "This Clock Is Not Moving",
        fileName: "songs/we-used-to-do-it-live/01-this-clock-is-not-moving.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Shit Will Find Itself A Fan",
        fileName: "songs/we-used-to-do-it-live/02-shit-will-find-itself-a-fan.mp3",
        feat: [],
        duration: 30
    }, {
        title: "No Spectators",
        fileName: "songs/we-used-to-do-it-live/03-no-spectators.mp3",
        feat: [],
        duration: 30
    }, {
        title: "We Used To Do It",
        fileName: "songs/we-used-to-do-it-live/04-we-used-to-do-it.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Sweet Fatigue",
        fileName: "songs/we-used-to-do-it-live/05-sweet-fatigue.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Bad Decisions",
        fileName: "songs/we-used-to-do-it-live/06-bad-decisions.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Neon Jaws",
        fileName: "songs/we-used-to-do-it-live/07-neon-jaws.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Illegal Rave",
        fileName: "songs/we-used-to-do-it-live/08-illegal-rave.mp3",
        feat: [],
        duration: 30
    }, {
        title: "Heavily Scripted",
        fileName: "songs/we-used-to-do-it-live/09-heavily-scripted.mp3",
        feat: [],
        duration: 30
    }]
  }]
    , Io = Ro.map(function(t) {
      var e = new Po;
      return e.title = t.title,
      e.link = t.link,
      e.coverUrl = t.coverUrl,
      e.songs = t.songs.map(function(t) {
          return new Lo(t)
      }),
      e
  })
    , Fo = function(t, e, n, i) {
      var r, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : Jt(Reflect)) && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(t, e, n, i);
      else
          for (var a = t.length - 1; a >= 0; a--)
              (r = t[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
      return o > 3 && s && Object.defineProperty(e, n, s),
      s
  }
    , jo = 5
    , Uo = function(t) {
      function e() {
          $t(this, e);
          var n = te(this, t.apply(this, arguments));
          return n.albumsContainerWidth = 0,
          n.albumsWidth = 0,
          n.themeColorIndex = Math.ceil(Math.random() * jo),
          n.albums = Io,
          n.playProgressPercentage = 0,
          n.windowWidth = window.innerWidth,
          n.isAlbumOpening = !1,
          n.isAlbumClosing = !1,
          n
      }
      return Zt(e, t),
      e.prototype.didInsertElement = function() {
          var t = this;
          window.addEventListener("resize", function() {
              return t.updateLayout()
          }),
          requestAnimationFrame(function() {
              return t.updateLayout()
          })
      }
      ,
      e.prototype.updateLayout = function() {
          this.windowWidth = window.innerWidth;
          var t = this.element.querySelector(".js-albums-wrapper");
          t && (this.albumsContainerWidth = t.clientWidth);
          var e = this.element.querySelector(".js-albums");
          e && (this.albumsWidth = e.clientWidth)
      }
      ,
      e.prototype.nextThemeColorIndex = function() {
          this.themeColorIndex = this.themeColorIndex === jo ? 1 : this.themeColorIndex + 1
      }
      ,
      e.prototype.toggleAlbumOpened = function(t) {
          var e = this;
          this.activeAlbum === t ? (this.isAlbumClosing = !0,
          this.activeSong = null,
          this.playProgressPercentage = 0) : (this.activeAlbum = t,
          this.isAlbumOpening = !0),
          setTimeout(function() {
              e.isAlbumClosing && (e.activeAlbum = null),
              e.isAlbumOpening && e.activeAlbum && (e.activeSong = e.activeAlbum.songs[0]),
              e.isAlbumOpening = !1,
              e.isAlbumClosing = !1
          }, 1e3)
      }
      ,
      e.prototype.setNextAlbumSongActive = function() {
          if (this.activeAlbum) {
              var t = this.activeSong ? this.activeAlbum.songs.indexOf(this.activeSong) + 1 : 0;
              this.activeSong = this.activeAlbum.songs[t],
              this.nextThemeColorIndex()
          }
      }
      ,
      e.prototype.setPreviousAlbumSongActive = function() {
          if (this.activeAlbum) {
              var t = this.activeSong ? this.activeAlbum.songs.indexOf(this.activeSong) - 1 : 0;
              this.activeSong = this.activeAlbum.songs[t],
              this.nextThemeColorIndex()
          }
      }
      ,
      e.prototype.updatePlayProgressPercentage = function(t) {
          this.playProgressPercentage = t,
          this.playProgressPercentage >= 100 && this.setNextAlbumSongActive()
      }
      ,
      e.prototype.playSong = function(t) {
          this.activeAlbum && this.activeAlbum.songs.indexOf(t) >= 0 && (this.activeSong = t,
          this.nextThemeColorIndex())
      }
      ,
      Qt(e, [{
          key: "isMobile",
          get: function() {
              return this.windowWidth <= 768
          }
      }, {
          key: "orderedAlbums",
          get: function() {
              return this.albums;
          }
      }, {
          key: "openedAlbumIndex",
          get: function() {
              if (this.activeAlbum)
                  return Io.indexOf(this.activeAlbum) + 1 || void 0
          }
      }, {
          key: "albumsWrapperElStyle",
          get: function() {
              var t = (this.albumsContainerWidth - this.albumsWidth) / 2;
              return this.isMobile || t > 0 ? "" : "transform: translateX(" + t + "px)"
          }
      }, {
          key: "albumsElStyle",
          get: function() {
              if (this.activeAlbum && !this.isMobile) {
                  var t = this.orderedAlbums.indexOf(this.activeAlbum)
                    , e = this.element.querySelectorAll(".album")[t];
                  var idx = this.orderedAlbums.indexOf(this.activeAlbum);

                  var cmpMap = {};
                  if (window.innerWidth > 768 && window.innerWidth <= 1300) {
                    cmpMap = {0: -300, 3: 300};
                  } else if (window.innerWidth > 1300 && window.innerWidth <= 1600) {
                    cmpMap = {0: -200, 3: 200};
                  }

                  if (e) {
                      return "transform: translateX(" + (window.innerWidth / 2 - (e.getBoundingClientRect().left + (cmpMap[idx] || 0) + e.clientWidth / 2)) + "px)"
                  }
              }
              return ""
          }
      }]),
      e
  }(ao);
  Fo([It], Uo.prototype, "albumsContainerWidth", void 0),
  Fo([It], Uo.prototype, "albumsWidth", void 0),
  Fo([It], Uo.prototype, "themeColorIndex", void 0),
  Fo([It], Uo.prototype, "albums", void 0),
  Fo([It], Uo.prototype, "activeAlbum", void 0),
  Fo([It], Uo.prototype, "activeSong", void 0),
  Fo([It], Uo.prototype, "playProgressPercentage", void 0),
  Fo([It], Uo.prototype, "windowWidth", void 0),
  Fo([It], Uo.prototype, "isAlbumOpening", void 0),
  Fo([It], Uo.prototype, "isAlbumClosing", void 0),
  Fo([It("windowWidth")], Uo.prototype, "isMobile", null),
  Fo([It("isMobile")], Uo.prototype, "orderedAlbums", null),
  Fo([It("activeAlbum")], Uo.prototype, "openedAlbumIndex", null),
  Fo([It("albumsContainerWidth", "albumsWidth", "isMobile")], Uo.prototype, "albumsWrapperElStyle", null),
  Fo([It("activeAlbum", "isMobile", "orderedAlbums")], Uo.prototype, "albumsElStyle", null);
  var Ho = {
      id: "IbRVfs98",
      block: '{"symbols":["album","idx"],"prelude":[[6,"div"]],"head":[[9,"class","route-music"],[10,"data-opened-album-index",[26,[[18,"openedAlbumIndex"]]]],[10,"data-theme-color",[26,[[18,"themeColorIndex"]]]],[10,"data-album-count",[26,[[20,["albums","length"]]]]],[7]],"statements":[[0,"\\n  "],[5,"app-header",[],[[],[]],{"statements":[],"parameters":[]}],[0,"\\n\\n  "],[6,"section"],[9,"class","__content"],[7],[0,"\\n    "],[5,"music-player",[],[["@activeSong","@playNext","@playPrevious","@updatePlayProgressPercentage"],[[18,"activeSong"],[25,"action",[[19,0,["setNextAlbumSongActive"]]],null],[25,"action",[[19,0,["setPreviousAlbumSongActive"]]],null],[25,"action",[[19,0,["updatePlayProgressPercentage"]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n\\n    "],[6,"div"],[9,"class","__albums-wrapper js-albums-wrapper"],[10,"style",[26,[[18,"albumsWrapperElStyle"]]]],[7],[0,"\\n      "],[6,"div"],[9,"class","__albums js-albums"],[10,"style",[26,[[18,"albumsElStyle"]]]],[7],[0,"\\n"],[4,"each",[[19,0,["orderedAlbums"]]],[["key"],["@index"]],{"statements":[[0,"          "],[5,"music-album",[],[["@album","@index","@activeAlbum","@activeSong","@toggleOpened","@playProgressPercentage","@isOpening","@isClosing","@playSong"],[[19,1,[]],[19,2,[]],[18,"activeAlbum"],[18,"activeSong"],[25,"action",[[19,0,["toggleAlbumOpened"]]],null],[25,"if",[[25,"eq",[[19,0,["activeAlbum"]],[19,1,[]]],null],[19,0,["playProgressPercentage"]]],null],[25,"and",[[25,"eq",[[19,0,["activeAlbum"]],[19,1,[]]],null],[19,0,["isAlbumOpening"]]],null],[25,"and",[[25,"eq",[[19,0,["activeAlbum"]],[19,1,[]]],null],[19,0,["isAlbumClosing"]]],null],[25,"action",[[19,0,["playSong"]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1,2]},null],[0,"      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[5,"app-footer",[],[[],[]],{"statements":[],"parameters":[]}],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',
      meta: {
          specifier: "template:/plastic-knives/components/route-music",
          "<template-meta>": !0
      }
  }
    , zo = {
      "helper:/plastic-knives/components/and": Pt,
      "component:/plastic-knives/components/app-footer": go,
      "template:/plastic-knives/components/app-footer": bo,
      "component:/plastic-knives/components/app-header": ko,
      "template:/plastic-knives/components/app-header": So,
      "helper:/plastic-knives/components/eq": Gt,
      "helper:/plastic-knives/components/if": Yt,
      "component:/plastic-knives/components/music-album": Eo,
      "template:/plastic-knives/components/music-album": _o,
      "component:/plastic-knives/components/music-player": xo,
      "template:/plastic-knives/components/music-player": Co,
      "component:/plastic-knives/components/music-song": No,
      "template:/plastic-knives/components/music-song": Oo,
      "component:/plastic-knives/components/plastic-knives": Mo,
      "template:/plastic-knives/components/plastic-knives": Bo,
      "component:/plastic-knives/components/route-music": Uo,
      "template:/plastic-knives/components/route-music": Ho
  }
    , Wo = {
      app: {
          name: "plastic-knives",
          rootName: "plastic-knives"
      },
      types: {
          application: {
              definitiveCollection: "main"
          },
          component: {
              definitiveCollection: "components"
          },
          helper: {
              definitiveCollection: "components"
          },
          renderer: {
              definitiveCollection: "main"
          },
          template: {
              definitiveCollection: "components"
          }
      },
      collections: {
          main: {
              types: ["application", "renderer"]
          },
          components: {
              group: "ui",
              types: ["component", "template", "helper"],
              defaultType: "component",
              privateCollections: ["utils"]
          },
          styles: {
              group: "ui",
              unresolvable: !0
          },
          utils: {
              unresolvable: !0
          }
      }
  }
    , Vo = function(t) {
      function e() {
          $t(this, e);
          var n = new Jr(zo)
            , i = new Kr(Wo,n);
          return te(this, t.call(this, {
              rootName: Wo.app.rootName,
              resolver: i
          }))
      }
      return Zt(e, t),
      e
  }(qr)
    , Go = new Vo
    , Yo = document.getElementsByTagName("body")[0];
  !function(t) {
      oo = t
  }(function() {
      Go.scheduleRerender()
  }),
  Go.registerInitializer({
      initialize: function(t) {
          t.register("component-manager:/" + Go.rootName + "/component-managers/main", vo)
      }
  }),
  Go.renderComponent("plastic-knives", Yo, null),
  Go.boot()
});
