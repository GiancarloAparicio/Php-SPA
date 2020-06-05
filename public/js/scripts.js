(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createTask = _interopRequireDefault(require("./taskControl/createTask"));

var _readTask = _interopRequireDefault(require("./taskControl/readTask"));

var _updateTask = require("./taskControl/updateTask");

var _searchTask = _interopRequireDefault(require("./includes/searchTask"));

var _router = _interopRequireDefault(require("./router"));

var _generatorRunTime = require("./generatorRunTime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Iniciamos la ejecucion del programa
var start = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _router["default"])();
            (0, _createTask["default"])();
            _context.next = 4;
            return (0, _readTask["default"])();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

(0, _updateTask.getOneTask)();
(0, _searchTask["default"])();
start();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZGU2MTMwYjEuanMiXSwibmFtZXMiOlsic3RhcnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBR0E7Ozs7Ozs7O0FBR0E7QUFDQSxJQUFNQSxLQUFLO0FBQUEscUVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWO0FBRUE7QUFIVTtBQUFBLG1CQUlKLDJCQUpJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUxBLEtBQUs7QUFBQTtBQUFBO0FBQUEsR0FBWDs7QUFPQTtBQUNBO0FBQ0FBLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi90YXNrQ29udHJvbC9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgcmVhZFRhc2sgZnJvbSBcIi4vdGFza0NvbnRyb2wvcmVhZFRhc2tcIjtcbmltcG9ydCB7IGdldE9uZVRhc2sgfSBmcm9tIFwiLi90YXNrQ29udHJvbC91cGRhdGVUYXNrXCJcbmltcG9ydCBzZWFyY2hUYXNrIGZyb20gXCIuL2luY2x1ZGVzL3NlYXJjaFRhc2tcIjtcblxuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi9yb3V0ZXJcIjtcblxuLy9ObyBlbGltaW5hclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwiLi9nZW5lcmF0b3JSdW5UaW1lXCI7XG5cblxuLy9JbmljaWFtb3MgbGEgZWplY3VjaW9uIGRlbCBwcm9ncmFtYVxuY29uc3Qgc3RhcnQgPSBhc3luYygpID0+IHtcbiAgICByb3V0ZXIoKTtcblxuICAgIGNyZWF0ZVRhc2soKTtcbiAgICBhd2FpdCByZWFkVGFzaygpO1xufVxuXG5nZXRPbmVUYXNrKCk7XG5zZWFyY2hUYXNrKCk7XG5zdGFydCgpOyJdfQ==
},{"./generatorRunTime":2,"./includes/searchTask":4,"./router":5,"./taskControl/createTask":6,"./taskControl/readTask":8,"./taskControl/updateTask":9}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvclJ1blRpbWUuanMiXSwibmFtZXMiOlsicnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwidW5kZWZpbmVkIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwib2JqIiwiYXJnIiwidHlwZSIsImNhbGwiLCJlcnIiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJjb25zdHJ1Y3RvciIsImRpc3BsYXlOYW1lIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJ2YWx1ZSIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInRvU3RyaW5nIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwib2JqZWN0Iiwia2V5IiwicmV2ZXJzZSIsImxlbmd0aCIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwibW9kdWxlIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJGdW5jdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUlBLE9BQU8sR0FBSSxVQUFTQyxPQUFULEVBQWtCO0FBQzdCOztBQUVB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SUFBSTtBQUNBMEksRUFBQUEsa0JBQWtCLEdBQUczSSxPQUFyQjtBQUNILENBRkQsQ0FFRSxPQUFPNEksb0JBQVAsRUFBNkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLEVBQUFBLFFBQVEsQ0FBQyxHQUFELEVBQU0sd0JBQU4sQ0FBUixDQUF3QzdJLE9BQXhDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcnVudGltZSA9IChmdW5jdGlvbihleHBvcnRzKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICAgIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICAgIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gICAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gICAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgICAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICAgICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAgICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgICAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgICB9XG4gICAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAgIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAgIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAgIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAgIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gICAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAgIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gICAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gICAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAgIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICAgIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gICAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICAgIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAgIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gICAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cblxuICAgIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cblxuICAgIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAgIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICAgIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICAgIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAgICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAgICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgICAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICAgIH1cblxuICAgIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICAgICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAgIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gICAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgICAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICAgICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gY3RvciA/XG4gICAgICAgICAgICBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiIDpcbiAgICAgICAgICAgIGZhbHNlO1xuICAgIH07XG5cbiAgICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICAgICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICAgICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgICAgICByZXR1cm4gZ2VuRnVuO1xuICAgIH07XG5cbiAgICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAgIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICAgIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgICAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgICAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAgICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgICAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAgICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgICAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAgICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgICAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICAgICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAgICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgICAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICAgICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAgICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gICAgfVxuXG4gICAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gICAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gICAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gICAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgICAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICAgICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgICAgICAgIFByb21pc2VJbXBsXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/XG4gICAgICAgICAgICBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICAgICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgICAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lID9cbiAgICAgICAgICAgICAgICAgICAgICAgIEdlblN0YXRlQ29tcGxldGVkIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gICAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gICAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gICAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgICAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgICAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAgICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgICAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgICAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgICAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgICAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAgICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gICAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICAgIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gICAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAgIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gICAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gICAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgICAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICAgICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICAgICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgICAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgICAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgICAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAgICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAgICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgICAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgICAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAgICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgICAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgICAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICAgICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICAgIH1cbiAgICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICAgIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgICB9XG5cbiAgICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICAgICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICAgICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgICAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICAgICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgICAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAgICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgICAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgICAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgICAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfSxcblxuICAgICAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAgICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgICAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICAgIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAgIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gICAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gICAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gICAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gICAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAgIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gICAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gICAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn0iXX0=
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var renderStatus = function renderStatus(props) {
  //Obtenemos el elemento  donde se renderizara el Mensaje
  var $message = document.querySelector(props.element); //Cuerpo del mensaje

  $message.innerHTML = "\n    <div class=\"alert alert-".concat(props.message_type, " mt-4\" role=\"alert\">\n        <strong>").concat(props.message, "</strong>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ");
};

var _default = renderStatus;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlclN0YXR1cy5qcyJdLCJuYW1lcyI6WyJyZW5kZXJTdGF0dXMiLCJwcm9wcyIsIiRtZXNzYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudCIsImlubmVySFRNTCIsIm1lc3NhZ2VfdHlwZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFFNUI7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkgsS0FBSyxDQUFDSSxPQUE3QixDQUFmLENBSDRCLENBSzVCOztBQUNBSCxFQUFBQSxRQUFRLENBQUNJLFNBQVQsNENBQzBCTCxLQUFLLENBQUNNLFlBRGhDLHNEQUVjTixLQUFLLENBQUNPLE9BRnBCO0FBU0gsQ0FmRDs7ZUFpQmVSLFkiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW5kZXJTdGF0dXMgPSAocHJvcHMpID0+IHtcblxuICAgIC8vT2J0ZW5lbW9zIGVsIGVsZW1lbnRvICBkb25kZSBzZSByZW5kZXJpemFyYSBlbCBNZW5zYWplXG4gICAgbGV0ICRtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9wcy5lbGVtZW50KTtcblxuICAgIC8vQ3VlcnBvIGRlbCBtZW5zYWplXG4gICAgJG1lc3NhZ2UuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC0ke3Byb3BzLm1lc3NhZ2VfdHlwZX0gbXQtNFwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICA8c3Ryb25nPiR7cHJvcHMubWVzc2FnZX08L3N0cm9uZz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclN0YXR1czsiXX0=
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readTask = require("../taskControl/readTask");

var _generatorRunTime = require("../generatorRunTime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var searchTask = function searchTask() {
  var $search = document.querySelector("#searchTask");
  $search.addEventListener("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var data, options, res, respuesta;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //Preparamos los datos del Formulario para enviarlo
              data = new FormData($search);
              e.preventDefault(); //Enviamos los datos

              options = {
                method: "POST",
                body: data
              };
              _context.next = 5;
              return fetch("./php/searchTask.php", options);

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              respuesta = _context.sent;
              //Renderizamos el resultado en el modal
              (0, _readTask.renderTask)(respuesta, "#modal");

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

var _default = searchTask;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaFRhc2suanMiXSwibmFtZXMiOlsic2VhcmNoVGFzayIsIiRzZWFyY2giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRhdGEiLCJGb3JtRGF0YSIsInByZXZlbnREZWZhdWx0Iiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJyZXNwdWVzdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixNQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFkO0FBRUFGLEVBQUFBLE9BQU8sQ0FBQ0csZ0JBQVIsQ0FBeUIsUUFBekI7QUFBQSx1RUFBbUMsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRS9CO0FBQ0lDLGNBQUFBLElBSDJCLEdBR3BCLElBQUlDLFFBQUosQ0FBYU4sT0FBYixDQUhvQjtBQUkvQkksY0FBQUEsQ0FBQyxDQUFDRyxjQUFGLEdBSitCLENBTy9COztBQUNJQyxjQUFBQSxPQVIyQixHQVFqQjtBQUNWQyxnQkFBQUEsTUFBTSxFQUFFLE1BREU7QUFFVkMsZ0JBQUFBLElBQUksRUFBRUw7QUFGSSxlQVJpQjtBQUFBO0FBQUEscUJBYWZNLEtBQUssQ0FBQyxzQkFBRCxFQUF5QkgsT0FBekIsQ0FiVTs7QUFBQTtBQWEzQkksY0FBQUEsR0FiMkI7QUFBQTtBQUFBLHFCQWNUQSxHQUFHLENBQUNDLElBQUosRUFkUzs7QUFBQTtBQWMzQkMsY0FBQUEsU0FkMkI7QUFnQi9CO0FBQ0Esd0NBQVdBLFNBQVgsRUFBc0IsUUFBdEI7O0FBakIrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFuQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CSCxDQXRCRDs7ZUF3QmVmLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJUYXNrIH0gZnJvbSBcIi4uL3Rhc2tDb250cm9sL3JlYWRUYXNrXCI7XG5cbi8vTm8gZWxpbWluYXJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIi4uL2dlbmVyYXRvclJ1blRpbWVcIjtcblxuY29uc3Qgc2VhcmNoVGFzayA9ICgpID0+IHtcbiAgICBsZXQgJHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoVGFza1wiKTtcblxuICAgICRzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyhlKSA9PiB7XG5cbiAgICAgICAgLy9QcmVwYXJhbW9zIGxvcyBkYXRvcyBkZWwgRm9ybXVsYXJpbyBwYXJhIGVudmlhcmxvXG4gICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCRzZWFyY2gpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cblxuICAgICAgICAvL0VudmlhbW9zIGxvcyBkYXRvc1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBkYXRhXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFwiLi9waHAvc2VhcmNoVGFzay5waHBcIiwgb3B0aW9ucyk7XG4gICAgICAgIGxldCByZXNwdWVzdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgIC8vUmVuZGVyaXphbW9zIGVsIHJlc3VsdGFkbyBlbiBlbCBtb2RhbFxuICAgICAgICByZW5kZXJUYXNrKHJlc3B1ZXN0YSwgXCIjbW9kYWxcIilcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoVGFzazsiXX0=
},{"../generatorRunTime":2,"../taskControl/readTask":8}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

//Evento Router
var router = function router() {
  window.location.hash = "#home";
  window.addEventListener("hashchange", function (e) {
    hashchange(window.location.hash);
  });
}; //Manejar el evento del router


var hashchange = function hashchange(props) {
  var $home = document.querySelector("#home");
  var $uptadeTask = document.querySelector("#updateTask");
  var $notFound = document.querySelector("#notFound"); //Para manipular el modal cuando redirecione a update

  var $body = document.querySelector("body");

  switch (props) {
    case "#home":
      {
        $home.classList.contains("d-none") ? $home.classList.toggle("d-none") : "";
        $uptadeTask.classList.contains("d-none") ? "" : $uptadeTask.classList.toggle("d-none");
        $notFound.classList.contains("d-none") ? "" : $notFound.classList.toggle("d-none");
        break;
      }

    case "#updateTask":
      {
        $home.classList.contains("d-none") ? "" : $home.classList.toggle("d-none");
        $uptadeTask.classList.contains("d-none") ? $uptadeTask.classList.toggle("d-none") : "";
        $notFound.classList.contains("d-none") ? "" : $notFound.classList.toggle("d-none");
        $body.classList.contains(".modal-open") ? "" : document.querySelector("#modal-close").click();
        break;
      }

    default:
      {
        $home.classList.contains("d-none") ? "" : $home.classList.toggle("d-none");
        $uptadeTask.classList.contains("d-none") ? "" : $uptadeTask.classList.toggle("d-none");
        $notFound.classList.contains("d-none") ? $notFound.classList.toggle("d-none") : "";
      }
  }
};

var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImhhc2hjaGFuZ2UiLCJwcm9wcyIsIiRob21lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJHVwdGFkZVRhc2siLCIkbm90Rm91bmQiLCIkYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakJDLEVBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsT0FBdkI7QUFDQUYsRUFBQUEsTUFBTSxDQUFDRyxnQkFBUCxDQUF3QixZQUF4QixFQUFzQyxVQUFDQyxDQUFELEVBQU87QUFDekNDLElBQUFBLFVBQVUsQ0FBQ0wsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFqQixDQUFWO0FBQ0gsR0FGRDtBQUdILENBTEQsQyxDQU9BOzs7QUFDQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDMUIsTUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBLE1BQUlDLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWxCO0FBQ0EsTUFBSUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEIsQ0FIMEIsQ0FJMUI7O0FBQ0EsTUFBSUcsS0FBSyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjs7QUFFQSxVQUFRSCxLQUFSO0FBQ0ksU0FBTSxPQUFOO0FBQ0k7QUFDS0MsUUFBQUEsS0FBSyxDQUFDTSxTQUFOLENBQWdCQyxRQUFoQixDQUF5QixRQUF6QixDQUFELEdBQ0FQLEtBQUssQ0FBQ00sU0FBTixDQUFnQkUsTUFBaEIsQ0FBdUIsUUFBdkIsQ0FEQSxHQUNtQyxFQURuQztBQUdDTCxRQUFBQSxXQUFXLENBQUNHLFNBQVosQ0FBc0JDLFFBQXRCLENBQStCLFFBQS9CLENBQUQsR0FDQSxFQURBLEdBQ0tKLFdBQVcsQ0FBQ0csU0FBWixDQUFzQkUsTUFBdEIsQ0FBNkIsUUFBN0IsQ0FETDtBQUdDSixRQUFBQSxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLFFBQTdCLENBQUQsR0FDQSxFQURBLEdBQ0tILFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkUsTUFBcEIsQ0FBMkIsUUFBM0IsQ0FETDtBQUdBO0FBQ0g7O0FBQ0wsU0FBTSxhQUFOO0FBQ0k7QUFDS1IsUUFBQUEsS0FBSyxDQUFDTSxTQUFOLENBQWdCQyxRQUFoQixDQUF5QixRQUF6QixDQUFELEdBQ0EsRUFEQSxHQUNLUCxLQUFLLENBQUNNLFNBQU4sQ0FBZ0JFLE1BQWhCLENBQXVCLFFBQXZCLENBREw7QUFHQ0wsUUFBQUEsV0FBVyxDQUFDRyxTQUFaLENBQXNCQyxRQUF0QixDQUErQixRQUEvQixDQUFELEdBQ0FKLFdBQVcsQ0FBQ0csU0FBWixDQUFzQkUsTUFBdEIsQ0FBNkIsUUFBN0IsQ0FEQSxHQUN5QyxFQUR6QztBQUdDSixRQUFBQSxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLFFBQTdCLENBQUQsR0FDQSxFQURBLEdBQ0tILFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkUsTUFBcEIsQ0FBMkIsUUFBM0IsQ0FETDtBQUdDSCxRQUFBQSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLFFBQWhCLENBQXlCLGFBQXpCLENBQUQsR0FDQSxFQURBLEdBQ0tOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixFQUF1Q08sS0FBdkMsRUFETDtBQUVBO0FBQ0g7O0FBQ0w7QUFDSTtBQUNLVCxRQUFBQSxLQUFLLENBQUNNLFNBQU4sQ0FBZ0JDLFFBQWhCLENBQXlCLFFBQXpCLENBQUQsR0FDQSxFQURBLEdBQ0tQLEtBQUssQ0FBQ00sU0FBTixDQUFnQkUsTUFBaEIsQ0FBdUIsUUFBdkIsQ0FETDtBQUdDTCxRQUFBQSxXQUFXLENBQUNHLFNBQVosQ0FBc0JDLFFBQXRCLENBQStCLFFBQS9CLENBQUQsR0FDQSxFQURBLEdBQ0tKLFdBQVcsQ0FBQ0csU0FBWixDQUFzQkUsTUFBdEIsQ0FBNkIsUUFBN0IsQ0FETDtBQUdDSixRQUFBQSxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLFFBQTdCLENBQUQsR0FDQUgsU0FBUyxDQUFDRSxTQUFWLENBQW9CRSxNQUFwQixDQUEyQixRQUEzQixDQURBLEdBQ3VDLEVBRHZDO0FBRUg7QUF2Q1Q7QUF5Q0gsQ0FoREQ7O2VBa0RlaEIsTSIsInNvdXJjZXNDb250ZW50IjpbIi8vRXZlbnRvIFJvdXRlclxuY29uc3Qgcm91dGVyID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCIjaG9tZVwiO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICBoYXNoY2hhbmdlKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICB9KTtcbn1cblxuLy9NYW5lamFyIGVsIGV2ZW50byBkZWwgcm91dGVyXG5jb25zdCBoYXNoY2hhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgbGV0ICRob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuICAgIGxldCAkdXB0YWRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXBkYXRlVGFza1wiKTtcbiAgICBsZXQgJG5vdEZvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RGb3VuZFwiKTtcbiAgICAvL1BhcmEgbWFuaXB1bGFyIGVsIG1vZGFsIGN1YW5kbyByZWRpcmVjaW9uZSBhIHVwZGF0ZVxuICAgIGxldCAkYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgc3dpdGNoIChwcm9wcykge1xuICAgICAgICBjYXNlIChcIiNob21lXCIpOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICgkaG9tZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpID9cbiAgICAgICAgICAgICAgICAkaG9tZS5jbGFzc0xpc3QudG9nZ2xlKFwiZC1ub25lXCIpIDogXCJcIjtcblxuICAgICAgICAgICAgICAgICgkdXB0YWRlVGFzay5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpID9cbiAgICAgICAgICAgICAgICBcIlwiIDogJHVwdGFkZVRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImQtbm9uZVwiKTtcblxuICAgICAgICAgICAgICAgICgkbm90Rm91bmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZC1ub25lXCIpKSA/XG4gICAgICAgICAgICAgICAgXCJcIiA6ICRub3RGb3VuZC5jbGFzc0xpc3QudG9nZ2xlKFwiZC1ub25lXCIpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgKFwiI3VwZGF0ZVRhc2tcIik6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgKCRob21lLmNsYXNzTGlzdC5jb250YWlucyhcImQtbm9uZVwiKSkgP1xuICAgICAgICAgICAgICAgIFwiXCIgOiAkaG9tZS5jbGFzc0xpc3QudG9nZ2xlKFwiZC1ub25lXCIpO1xuXG4gICAgICAgICAgICAgICAgKCR1cHRhZGVUYXNrLmNsYXNzTGlzdC5jb250YWlucyhcImQtbm9uZVwiKSkgP1xuICAgICAgICAgICAgICAgICR1cHRhZGVUYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJkLW5vbmVcIikgOiBcIlwiO1xuXG4gICAgICAgICAgICAgICAgKCRub3RGb3VuZC5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpID9cbiAgICAgICAgICAgICAgICBcIlwiIDogJG5vdEZvdW5kLmNsYXNzTGlzdC50b2dnbGUoXCJkLW5vbmVcIik7XG5cbiAgICAgICAgICAgICAgICAoJGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiLm1vZGFsLW9wZW5cIikpID9cbiAgICAgICAgICAgICAgICBcIlwiIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1jbG9zZVwiKS5jbGljaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICgkaG9tZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpID9cbiAgICAgICAgICAgICAgICBcIlwiIDogJGhvbWUuY2xhc3NMaXN0LnRvZ2dsZShcImQtbm9uZVwiKTtcblxuICAgICAgICAgICAgICAgICgkdXB0YWRlVGFzay5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpID9cbiAgICAgICAgICAgICAgICBcIlwiIDogJHVwdGFkZVRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImQtbm9uZVwiKTtcblxuICAgICAgICAgICAgICAgICgkbm90Rm91bmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZC1ub25lXCIpKSA/XG4gICAgICAgICAgICAgICAgJG5vdEZvdW5kLmNsYXNzTGlzdC50b2dnbGUoXCJkLW5vbmVcIikgOiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdfQ==
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _renderStatus = _interopRequireDefault(require("../includes/renderStatus"));

var _readTask = _interopRequireDefault(require("./readTask"));

var _generatorRunTime = require("../generatorRunTime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTask = function createTask() {
  //Formulario con los datos de la tarea
  var $save_task = document.querySelector("#save_task");
  $save_task.addEventListener("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var data, options, res, respuesta;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //Preparamos los datos del Formulario para enviarlo
              data = new FormData($save_task);
              e.preventDefault(); //Enviamos los datos

              options = {
                method: "POST",
                body: data
              };
              _context.next = 5;
              return fetch("./php/saveTask.php", options);

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              respuesta = _context.sent;
              //Renderisamos el Mensaje de la peticion
              (0, _renderStatus["default"])(respuesta); //Actualizamos la tabla

              _context.next = 12;
              return (0, _readTask["default"])();

            case 12:
              //Reseteamos el formulario
              $save_task.reset();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

var _default = createTask;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZVRhc2suanMiXSwibmFtZXMiOlsiY3JlYXRlVGFzayIsIiRzYXZlX3Rhc2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRhdGEiLCJGb3JtRGF0YSIsInByZXZlbnREZWZhdWx0Iiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJyZXNwdWVzdGEiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUdBOzs7Ozs7OztBQUlBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFFckI7QUFDQSxNQUFJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUVBRixFQUFBQSxVQUFVLENBQUNHLGdCQUFYLENBQTRCLFFBQTVCO0FBQUEsdUVBQXNDLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVsQztBQUNJQyxjQUFBQSxJQUg4QixHQUd2QixJQUFJQyxRQUFKLENBQWFOLFVBQWIsQ0FIdUI7QUFJbENJLGNBQUFBLENBQUMsQ0FBQ0csY0FBRixHQUprQyxDQU9sQzs7QUFDSUMsY0FBQUEsT0FSOEIsR0FRcEI7QUFDVkMsZ0JBQUFBLE1BQU0sRUFBRSxNQURFO0FBRVZDLGdCQUFBQSxJQUFJLEVBQUVMO0FBRkksZUFSb0I7QUFBQTtBQUFBLHFCQWFsQk0sS0FBSyxDQUFDLG9CQUFELEVBQXVCSCxPQUF2QixDQWJhOztBQUFBO0FBYTlCSSxjQUFBQSxHQWI4QjtBQUFBO0FBQUEscUJBY1pBLEdBQUcsQ0FBQ0MsSUFBSixFQWRZOztBQUFBO0FBYzlCQyxjQUFBQSxTQWQ4QjtBQWlCbEM7QUFDQSw0Q0FBYUEsU0FBYixFQWxCa0MsQ0FvQmxDOztBQXBCa0M7QUFBQSxxQkFxQjVCLDJCQXJCNEI7O0FBQUE7QUF1QmxDO0FBQ0FkLGNBQUFBLFVBQVUsQ0FBQ2UsS0FBWDs7QUF4QmtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXRDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEJILENBbkNEOztlQXFDZWhCLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVuZGVyU3RhdHVzIGZyb20gXCIuLi9pbmNsdWRlcy9yZW5kZXJTdGF0dXNcIjtcbmltcG9ydCByZWFkVGFzayBmcm9tIFwiLi9yZWFkVGFza1wiO1xuXG4vL05vIGVsaW1pbmFyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCIuLi9nZW5lcmF0b3JSdW5UaW1lXCI7XG5cblxuXG5jb25zdCBjcmVhdGVUYXNrID0gKCkgPT4ge1xuXG4gICAgLy9Gb3JtdWxhcmlvIGNvbiBsb3MgZGF0b3MgZGUgbGEgdGFyZWFcbiAgICBsZXQgJHNhdmVfdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV90YXNrXCIpO1xuXG4gICAgJHNhdmVfdGFzay5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jKGUpID0+IHtcblxuICAgICAgICAvL1ByZXBhcmFtb3MgbG9zIGRhdG9zIGRlbCBGb3JtdWxhcmlvIHBhcmEgZW52aWFybG9cbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoJHNhdmVfdGFzayk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgICAgIC8vRW52aWFtb3MgbG9zIGRhdG9zXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXCIuL3BocC9zYXZlVGFzay5waHBcIiwgb3B0aW9ucyk7XG4gICAgICAgIGxldCByZXNwdWVzdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG5cbiAgICAgICAgLy9SZW5kZXJpc2Ftb3MgZWwgTWVuc2FqZSBkZSBsYSBwZXRpY2lvblxuICAgICAgICByZW5kZXJTdGF0dXMocmVzcHVlc3RhKTtcblxuICAgICAgICAvL0FjdHVhbGl6YW1vcyBsYSB0YWJsYVxuICAgICAgICBhd2FpdCByZWFkVGFzaygpO1xuXG4gICAgICAgIC8vUmVzZXRlYW1vcyBlbCBmb3JtdWxhcmlvXG4gICAgICAgICRzYXZlX3Rhc2sucmVzZXQoKTtcblxuXG5cbiAgICB9KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrOyJdfQ==
},{"../generatorRunTime":2,"../includes/renderStatus":3,"./readTask":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _renderStatus = _interopRequireDefault(require("../includes/renderStatus"));

var _readTask = _interopRequireDefault(require("./readTask"));

var _generatorRunTime = require("../generatorRunTime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var deleteTask = function deleteTask() {
  var $buttonDelete = document.querySelectorAll(".deleteButton"); //Le damos un evento a todo los botones de elimnar

  $buttonDelete.forEach(function (element) {
    element.addEventListener("click", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var data, options, res, respuesta;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = {
                  id: element.attributes.key.nodeValue
                }; //Enviamos el ID a elimnar al backend

                options = {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                _context.next = 4;
                return fetch("./php/deleteTask.php", options);

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                respuesta = _context.sent;
                //Renderisamos el Mensaje de la peticion
                (0, _renderStatus["default"])(respuesta); //Actualizamos las tablas

                (0, _readTask["default"])();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
};

var _default = deleteTask;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZVRhc2suanMiXSwibmFtZXMiOlsiZGVsZXRlVGFzayIsIiRidXR0b25EZWxldGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGF0YSIsImlkIiwiYXR0cmlidXRlcyIsImtleSIsIm5vZGVWYWx1ZSIsIm9wdGlvbnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJyZXNwdWVzdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBRXJCLE1BQUlDLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixlQUExQixDQUFwQixDQUZxQixDQUtyQjs7QUFDQUYsRUFBQUEsYUFBYSxDQUFDRyxPQUFkLENBQXNCLFVBQUFDLE9BQU8sRUFBSTtBQUM3QkEsSUFBQUEsT0FBTyxDQUFDQyxnQkFBUixDQUF5QixPQUF6QjtBQUFBLHlFQUFrQyxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFMUJDLGdCQUFBQSxJQUYwQixHQUVuQjtBQUNQQyxrQkFBQUEsRUFBRSxFQUFFSixPQUFPLENBQUNLLFVBQVIsQ0FBbUJDLEdBQW5CLENBQXVCQztBQURwQixpQkFGbUIsRUFNOUI7O0FBQ0lDLGdCQUFBQSxPQVAwQixHQU9oQjtBQUNWQyxrQkFBQUEsTUFBTSxFQUFFLE1BREU7QUFFVkMsa0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVULElBQWYsQ0FGSTtBQUdWVSxrQkFBQUEsT0FBTyxFQUFFO0FBQ0wsb0NBQWdCO0FBRFg7QUFIQyxpQkFQZ0I7QUFBQTtBQUFBLHVCQWNkQyxLQUFLLENBQUMsc0JBQUQsRUFBeUJOLE9BQXpCLENBZFM7O0FBQUE7QUFjMUJPLGdCQUFBQSxHQWQwQjtBQUFBO0FBQUEsdUJBZVJBLEdBQUcsQ0FBQ0MsSUFBSixFQWZROztBQUFBO0FBZTFCQyxnQkFBQUEsU0FmMEI7QUFpQjlCO0FBQ0EsOENBQWFBLFNBQWIsRUFsQjhCLENBb0I5Qjs7QUFDQTs7QUFyQjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWxDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJILEdBeEJEO0FBMEJILENBaENEOztlQWtDZXRCLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVuZGVyU3RhdHVzIGZyb20gXCIuLi9pbmNsdWRlcy9yZW5kZXJTdGF0dXNcIjtcbmltcG9ydCByZWFkVGFzayBmcm9tIFwiLi9yZWFkVGFza1wiO1xuXG4vL05vIGVsaW1pbmFyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCIuLi9nZW5lcmF0b3JSdW5UaW1lXCI7XG5cblxuY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHtcblxuICAgIGxldCAkYnV0dG9uRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVCdXR0b25cIik7XG5cblxuICAgIC8vTGUgZGFtb3MgdW4gZXZlbnRvIGEgdG9kbyBsb3MgYm90b25lcyBkZSBlbGltbmFyXG4gICAgJGJ1dHRvbkRlbGV0ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyhlKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50LmF0dHJpYnV0ZXMua2V5Lm5vZGVWYWx1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy9FbnZpYW1vcyBlbCBJRCBhIGVsaW1uYXIgYWwgYmFja2VuZFxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFwiLi9waHAvZGVsZXRlVGFzay5waHBcIiwgb3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgcmVzcHVlc3RhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICAgICAgLy9SZW5kZXJpc2Ftb3MgZWwgTWVuc2FqZSBkZSBsYSBwZXRpY2lvblxuICAgICAgICAgICAgcmVuZGVyU3RhdHVzKHJlc3B1ZXN0YSk7XG5cbiAgICAgICAgICAgIC8vQWN0dWFsaXphbW9zIGxhcyB0YWJsYXNcbiAgICAgICAgICAgIHJlYWRUYXNrKCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVRhc2s7Il19
},{"../generatorRunTime":2,"../includes/renderStatus":3,"./readTask":8}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.renderTask = void 0;

var _deleteTask = _interopRequireDefault(require("./deleteTask"));

var _updateTask = _interopRequireDefault(require("./updateTask"));

var _generatorRunTime = require("../generatorRunTime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var readTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var options, res, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = {
              method: "GET"
            };
            _context.next = 3;
            return fetch("./php/getTable.php", options);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            renderTask(data, "#table");
            renderTask(data, "#modal");

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function readTask() {
    return _ref.apply(this, arguments);
  };
}();

var renderTask = function renderTask(props, element) {
  var $tableTask = document.querySelector(element); //Reinicia la tabla para actualizarlas

  $tableTask.innerHTML = ""; //Cuerpo de la tabla

  if (props.length) {
    props.forEach(function (element) {
      $tableTask.innerHTML += "\n            <tr>\n                <td class=\"text-wrap\">".concat(element.id, "</td>\n                <td class=\"text-wrap\">").concat(element.title, "</td>\n                <td class=\"text-wrap\">").concat(element.description, "</td>\n                <td>\n                    <a class=\"mx-auto btn btn-secondary editButton\" \n                       key=\"").concat(element.id, "\" \n                       href=\"#updateTask\">\n                        <i> ").concat(icons.edit, " </i>\n                    </a>\n                \n                    <button class=\"mx-auto btn btn-danger deleteButton\"  key=\"").concat(element.id, "\">\n                        <i> ").concat(icons["delete"], " </i>\n                    </button>\n                </td>\n            </tr>\n            ");
    });
  } else {
    $tableTask.innerHTML = "\n        <tr>\n            <td colspan=\"4\" class=\"text-center\">\n            Empty to do list\n            </td>\n        </tr>\n        ";
  } //Añadimos la funcionalidad de eliminar


  (0, _deleteTask["default"])(); //Añadimos la funcionalidad de actualizar

  (0, _updateTask["default"])();
};

exports.renderTask = renderTask;
var icons = {
  edit: "\n        <svg class=\"bi bi-bookmark-plus\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" d=\"M4.5 2a.5.5 0 0 0-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 0 1 1 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 0 1 4.5 1h4a.5.5 0 0 1 0 1h-4zm9-1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V1.5a.5.5 0 0 1 .5-.5z\"/>\n        <path fill-rule=\"evenodd\" d=\"M13 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z\"/>\n        </svg>\n    ",
  "delete": "\n        <svg class=\"bi bi-trash-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z\"/>\n        </svg>\n    "
};
var _default = readTask;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRUYXNrLmpzIl0sIm5hbWVzIjpbInJlYWRUYXNrIiwib3B0aW9ucyIsIm1ldGhvZCIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJyZW5kZXJUYXNrIiwicHJvcHMiLCJlbGVtZW50IiwiJHRhYmxlVGFzayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImxlbmd0aCIsImZvckVhY2giLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29ucyIsImVkaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7QUFHQSxJQUFNQSxRQUFRO0FBQUEscUVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RDLFlBQUFBLE9BRFMsR0FDQztBQUNWQyxjQUFBQSxNQUFNLEVBQUU7QUFERSxhQUREO0FBQUE7QUFBQSxtQkFLR0MsS0FBSyxDQUFDLG9CQUFELEVBQXVCRixPQUF2QixDQUxSOztBQUFBO0FBS1RHLFlBQUFBLEdBTFM7QUFBQTtBQUFBLG1CQU1JQSxHQUFHLENBQUNDLElBQUosRUFOSjs7QUFBQTtBQU1UQyxZQUFBQSxJQU5TO0FBUWJDLFlBQUFBLFVBQVUsQ0FBQ0QsSUFBRCxFQUFPLFFBQVAsQ0FBVjtBQUNBQyxZQUFBQSxVQUFVLENBQUNELElBQUQsRUFBTyxRQUFQLENBQVY7O0FBVGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUk4sUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkOztBQWNPLElBQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUMxQyxNQUFJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkgsT0FBdkIsQ0FBakIsQ0FEMEMsQ0FHMUM7O0FBQ0FDLEVBQUFBLFVBQVUsQ0FBQ0csU0FBWCxHQUF1QixFQUF2QixDQUowQyxDQU0xQzs7QUFDQSxNQUFJTCxLQUFLLENBQUNNLE1BQVYsRUFBa0I7QUFDZE4sSUFBQUEsS0FBSyxDQUFDTyxPQUFOLENBQWMsVUFBQU4sT0FBTyxFQUFJO0FBQ3JCQyxNQUFBQSxVQUFVLENBQUNHLFNBQVgsMEVBRTRCSixPQUFPLENBQUNPLEVBRnBDLDREQUc0QlAsT0FBTyxDQUFDUSxLQUhwQyw0REFJNEJSLE9BQU8sQ0FBQ1MsV0FKcEMsK0lBT2tCVCxPQUFPLENBQUNPLEVBUDFCLDRGQVNrQkcsS0FBSyxDQUFDQyxJQVR4QixpSkFZb0VYLE9BQU8sQ0FBQ08sRUFaNUUsOENBYWtCRyxLQUFLLFVBYnZCO0FBa0JILEtBbkJEO0FBcUJILEdBdEJELE1Bc0JPO0FBQ0hULElBQUFBLFVBQVUsQ0FBQ0csU0FBWDtBQU9ILEdBckN5QyxDQXNDMUM7OztBQUNBLGdDQXZDMEMsQ0F3QzFDOztBQUNBO0FBRUgsQ0EzQ007OztBQTZDUCxJQUFJTSxLQUFLLEdBQUc7QUFDUkMsRUFBQUEsSUFBSSx5aUJBREk7QUFPUjtBQVBRLENBQVo7ZUFpQmVwQixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSBcIi4vZGVsZXRlVGFza1wiO1xuaW1wb3J0IHVwZGF0ZVRhc2sgZnJvbSBcIi4vdXBkYXRlVGFza1wiO1xuXG4vL0ltcG9ydGFudGUgbm8gZWxpbWluYXJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIi4uL2dlbmVyYXRvclJ1blRpbWVcIjtcblxuXG5jb25zdCByZWFkVGFzayA9IGFzeW5jKCkgPT4ge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICB9O1xuXG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFwiLi9waHAvZ2V0VGFibGUucGhwXCIsIG9wdGlvbnMpO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJlbmRlclRhc2soZGF0YSwgXCIjdGFibGVcIik7XG4gICAgcmVuZGVyVGFzayhkYXRhLCBcIiNtb2RhbFwiKTtcblxufTtcblxuXG5leHBvcnQgY29uc3QgcmVuZGVyVGFzayA9IChwcm9wcywgZWxlbWVudCkgPT4ge1xuICAgIGxldCAkdGFibGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcblxuICAgIC8vUmVpbmljaWEgbGEgdGFibGEgcGFyYSBhY3R1YWxpemFybGFzXG4gICAgJHRhYmxlVGFzay5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgLy9DdWVycG8gZGUgbGEgdGFibGFcbiAgICBpZiAocHJvcHMubGVuZ3RoKSB7XG4gICAgICAgIHByb3BzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAkdGFibGVUYXNrLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC13cmFwXCI+JHtlbGVtZW50LmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC13cmFwXCI+JHtlbGVtZW50LnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC13cmFwXCI+JHtlbGVtZW50LmRlc2NyaXB0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm14LWF1dG8gYnRuIGJ0bi1zZWNvbmRhcnkgZWRpdEJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIke2VsZW1lbnQuaWR9XCIgXG4gICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjdXBkYXRlVGFza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+ICR7aWNvbnMuZWRpdH0gPC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJteC1hdXRvIGJ0biBidG4tZGFuZ2VyIGRlbGV0ZUJ1dHRvblwiICBrZXk9XCIke2VsZW1lbnQuaWR9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aT4gJHtpY29ucy5kZWxldGV9IDwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgICR0YWJsZVRhc2suaW5uZXJIVE1MID0gYFxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjRcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBFbXB0eSB0byBkbyBsaXN0XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICBgO1xuICAgIH1cbiAgICAvL0HDsWFkaW1vcyBsYSBmdW5jaW9uYWxpZGFkIGRlIGVsaW1pbmFyXG4gICAgZGVsZXRlVGFzaygpO1xuICAgIC8vQcOxYWRpbW9zIGxhIGZ1bmNpb25hbGlkYWQgZGUgYWN0dWFsaXphclxuICAgIHVwZGF0ZVRhc2soKTtcblxufVxuXG5sZXQgaWNvbnMgPSB7XG4gICAgZWRpdDogYFxuICAgICAgICA8c3ZnIGNsYXNzPVwiYmkgYmktYm9va21hcmstcGx1c1wiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTQuNSAyYS41LjUgMCAwIDAtLjUuNXYxMS4wNjZsNC0yLjY2NyA0IDIuNjY3VjguNWEuNS41IDAgMCAxIDEgMHY2LjkzNGwtNS0zLjMzMy01IDMuMzMzVjIuNUExLjUgMS41IDAgMCAxIDQuNSAxaDRhLjUuNSAwIDAgMSAwIDFoLTR6bTktMWEuNS41IDAgMCAxIC41LjV2MmEuNS41IDAgMCAxLS41LjVoLTJhLjUuNSAwIDAgMSAwLTFIMTNWMS41YS41LjUgMCAwIDEgLjUtLjV6XCIvPlxuICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMyAzLjVhLjUuNSAwIDAgMSAuNS0uNWgyYS41LjUgMCAwIDEgMCAxSDE0djEuNWEuNS41IDAgMCAxLTEgMHYtMnpcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgIGAsXG4gICAgZGVsZXRlOiBgXG4gICAgICAgIDxzdmcgY2xhc3M9XCJiaSBiaS10cmFzaC1maWxsXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMi41IDFhMSAxIDAgMCAwLTEgMXYxYTEgMSAwIDAgMCAxIDFIM3Y5YTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0yVjRoLjVhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTFIMTBhMSAxIDAgMCAwLTEtMUg3YTEgMSAwIDAgMC0xIDFIMi41em0zIDRhLjUuNSAwIDAgMSAuNS41djdhLjUuNSAwIDAgMS0xIDB2LTdhLjUuNSAwIDAgMSAuNS0uNXpNOCA1YS41LjUgMCAwIDEgLjUuNXY3YS41LjUgMCAwIDEtMSAwdi03QS41LjUgMCAwIDEgOCA1em0zIC41YS41LjUgMCAwIDAtMSAwdjdhLjUuNSAwIDAgMCAxIDB2LTd6XCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICBgXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJlYWRUYXNrOyJdfQ==
},{"../generatorRunTime":2,"./deleteTask":7,"./updateTask":9}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getOneTask = void 0;

var _renderStatus = _interopRequireDefault(require("../includes/renderStatus"));

var _readTask = _interopRequireDefault(require("./readTask"));

var _generatorRunTime = require("../generatorRunTime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var updateTask = function updateTask() {
  var $editButton = document.querySelectorAll(".editButton"); //Pedimos datos a SQL para poder mostrarlos

  $editButton.forEach(function (element) {
    element.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var data, options, res, respuesta;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = {
                id: element.attributes.key.nodeValue
              }; //Guardamos el id de la tarea

              localStorage.setItem("id", data.id);
              options = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  'Content-Type': 'application/json'
                }
              }; //Enviamos el ID a actualizar al backend

              _context.next = 5;
              return fetch("./php/getOneTask.php", options);

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              respuesta = _context.sent;
              //Mostramos la respuesta para poder actualizarla
              document.querySelector("#updateTitle").value = respuesta[0].title;
              document.querySelector("#updateDescription").value = respuesta[0].description;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
};

var getOneTask = function getOneTask() {
  var $form = document.querySelector("#update_task");
  $form.addEventListener("submit", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var data, options, res, respuesta;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault(); //Preparamos los datos del Formulario para enviarlo

              data = {
                title: document.querySelector("#updateTitle").value,
                description: document.querySelector("#updateDescription").value,
                id: localStorage.getItem("id")
              };
              options = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  'Content-Type': 'application/json'
                }
              }; //Enviamos los datos

              _context2.next = 5;
              return fetch("./php/updateTask.php", options);

            case 5:
              res = _context2.sent;
              _context2.next = 8;
              return res.json();

            case 8:
              respuesta = _context2.sent;
              //Reiniciamos el formulario
              $form.reset(); //Mostramos el mensaje

              (0, _renderStatus["default"])(respuesta); //Actualizamos la tabla

              (0, _readTask["default"])(); //Redirecionamos a Home

              window.location.hash = "#home";

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
};

exports.getOneTask = getOneTask;
var _default = updateTask;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZVRhc2suanMiXSwibmFtZXMiOlsidXBkYXRlVGFzayIsIiRlZGl0QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YSIsImlkIiwiYXR0cmlidXRlcyIsImtleSIsIm5vZGVWYWx1ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJvcHRpb25zIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicmVzcHVlc3RhIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldE9uZVRhc2siLCIkZm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdldEl0ZW0iLCJyZXNldCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUdBOzs7Ozs7OztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsTUFBSUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLENBQWxCLENBRHFCLENBR3JCOztBQUNBRixFQUFBQSxXQUFXLENBQUNHLE9BQVosQ0FBb0IsVUFBQUMsT0FBTyxFQUFJO0FBRTNCQSxJQUFBQSxPQUFPLENBQUNDLGdCQUFSLENBQXlCLE9BQXpCLHVFQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFMUJDLGNBQUFBLElBRjBCLEdBRW5CO0FBQ1BDLGdCQUFBQSxFQUFFLEVBQUVILE9BQU8sQ0FBQ0ksVUFBUixDQUFtQkMsR0FBbkIsQ0FBdUJDO0FBRHBCLGVBRm1CLEVBTTlCOztBQUNBQyxjQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsSUFBckIsRUFBMkJOLElBQUksQ0FBQ0MsRUFBaEM7QUFFSU0sY0FBQUEsT0FUMEIsR0FTaEI7QUFDVkMsZ0JBQUFBLE1BQU0sRUFBRSxNQURFO0FBRVZDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxJQUFmLENBRkk7QUFHVlksZ0JBQUFBLE9BQU8sRUFBRTtBQUNMLGtDQUFnQjtBQURYO0FBSEMsZUFUZ0IsRUFpQjlCOztBQWpCOEI7QUFBQSxxQkFrQmRDLEtBQUssQ0FBQyxzQkFBRCxFQUF5Qk4sT0FBekIsQ0FsQlM7O0FBQUE7QUFrQjFCTyxjQUFBQSxHQWxCMEI7QUFBQTtBQUFBLHFCQW1CUkEsR0FBRyxDQUFDQyxJQUFKLEVBbkJROztBQUFBO0FBbUIxQkMsY0FBQUEsU0FuQjBCO0FBcUI5QjtBQUNBckIsY0FBQUEsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixjQUF2QixFQUF1Q0MsS0FBdkMsR0FBK0NGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUcsS0FBNUQ7QUFDQXhCLGNBQUFBLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDQyxLQUE3QyxHQUFxREYsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhSSxXQUFsRTs7QUF2QjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWxDO0FBeUJILEdBM0JEO0FBNEJILENBaENEOztBQW1DTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQzVCLE1BQUlDLEtBQUssR0FBRzNCLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBWjtBQUVBSyxFQUFBQSxLQUFLLENBQUN2QixnQkFBTixDQUF1QixRQUF2QjtBQUFBLHdFQUFpQyxrQkFBTXdCLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdCQSxjQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FENkIsQ0FHN0I7O0FBQ0l4QixjQUFBQSxJQUp5QixHQUlsQjtBQUNQbUIsZ0JBQUFBLEtBQUssRUFBRXhCLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNDLEtBRHZDO0FBRVBFLGdCQUFBQSxXQUFXLEVBQUV6QixRQUFRLENBQUNzQixhQUFULENBQXVCLG9CQUF2QixFQUE2Q0MsS0FGbkQ7QUFHUGpCLGdCQUFBQSxFQUFFLEVBQUVJLFlBQVksQ0FBQ29CLE9BQWIsQ0FBcUIsSUFBckI7QUFIRyxlQUprQjtBQVV6QmxCLGNBQUFBLE9BVnlCLEdBVWY7QUFDVkMsZ0JBQUFBLE1BQU0sRUFBRSxNQURFO0FBRVZDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxJQUFmLENBRkk7QUFHVlksZ0JBQUFBLE9BQU8sRUFBRTtBQUNMLGtDQUFnQjtBQURYO0FBSEMsZUFWZSxFQW1CN0I7O0FBbkI2QjtBQUFBLHFCQW9CYkMsS0FBSyxDQUFDLHNCQUFELEVBQXlCTixPQUF6QixDQXBCUTs7QUFBQTtBQW9CekJPLGNBQUFBLEdBcEJ5QjtBQUFBO0FBQUEscUJBcUJQQSxHQUFHLENBQUNDLElBQUosRUFyQk87O0FBQUE7QUFxQnpCQyxjQUFBQSxTQXJCeUI7QUF1QjdCO0FBQ0FNLGNBQUFBLEtBQUssQ0FBQ0ksS0FBTixHQXhCNkIsQ0EwQjdCOztBQUNBLDRDQUFhVixTQUFiLEVBM0I2QixDQTZCN0I7O0FBQ0EsMENBOUI2QixDQWdDN0I7O0FBQ0FXLGNBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsT0FBdkI7O0FBakM2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFqQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9DSCxDQXZDTTs7O2VBeUNRcEMsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZW5kZXJTdGF0dXMgZnJvbSBcIi4uL2luY2x1ZGVzL3JlbmRlclN0YXR1c1wiO1xuaW1wb3J0IHJlYWRUYXNrIGZyb20gXCIuL3JlYWRUYXNrXCI7XG5cbi8vTm8gZWxpbWluYXJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIi4uL2dlbmVyYXRvclJ1blRpbWVcIjtcblxuXG5jb25zdCB1cGRhdGVUYXNrID0gKCkgPT4ge1xuICAgIGxldCAkZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdEJ1dHRvblwiKTtcblxuICAgIC8vUGVkaW1vcyBkYXRvcyBhIFNRTCBwYXJhIHBvZGVyIG1vc3RyYXJsb3NcbiAgICAkZWRpdEJ1dHRvbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpZDogZWxlbWVudC5hdHRyaWJ1dGVzLmtleS5ub2RlVmFsdWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vR3VhcmRhbW9zIGVsIGlkIGRlIGxhIHRhcmVhXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIGRhdGEuaWQpO1xuXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vRW52aWFtb3MgZWwgSUQgYSBhY3R1YWxpemFyIGFsIGJhY2tlbmRcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChcIi4vcGhwL2dldE9uZVRhc2sucGhwXCIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHJlc3B1ZXN0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIC8vTW9zdHJhbW9zIGxhIHJlc3B1ZXN0YSBwYXJhIHBvZGVyIGFjdHVhbGl6YXJsYVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGRhdGVUaXRsZVwiKS52YWx1ZSA9IHJlc3B1ZXN0YVswXS50aXRsZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXBkYXRlRGVzY3JpcHRpb25cIikudmFsdWUgPSByZXNwdWVzdGFbMF0uZGVzY3JpcHRpb247XG4gICAgICAgIH0pO1xuICAgIH0pXG59XG5cblxuZXhwb3J0IGNvbnN0IGdldE9uZVRhc2sgPSAoKSA9PiB7XG4gICAgbGV0ICRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGRhdGVfdGFza1wiKTtcblxuICAgICRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy9QcmVwYXJhbW9zIGxvcyBkYXRvcyBkZWwgRm9ybXVsYXJpbyBwYXJhIGVudmlhcmxvXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXBkYXRlVGl0bGVcIikudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGRhdGVEZXNjcmlwdGlvblwiKS52YWx1ZSxcbiAgICAgICAgICAgIGlkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy9FbnZpYW1vcyBsb3MgZGF0b3NcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFwiLi9waHAvdXBkYXRlVGFzay5waHBcIiwgb3B0aW9ucyk7XG4gICAgICAgIGxldCByZXNwdWVzdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgIC8vUmVpbmljaWFtb3MgZWwgZm9ybXVsYXJpb1xuICAgICAgICAkZm9ybS5yZXNldCgpO1xuXG4gICAgICAgIC8vTW9zdHJhbW9zIGVsIG1lbnNhamVcbiAgICAgICAgcmVuZGVyU3RhdHVzKHJlc3B1ZXN0YSk7XG5cbiAgICAgICAgLy9BY3R1YWxpemFtb3MgbGEgdGFibGFcbiAgICAgICAgcmVhZFRhc2soKTtcblxuICAgICAgICAvL1JlZGlyZWNpb25hbW9zIGEgSG9tZVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiI2hvbWVcIjtcblxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVRhc2s7Il19
},{"../generatorRunTime":2,"../includes/renderStatus":3,"./readTask":8}]},{},[1])