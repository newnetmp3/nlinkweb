(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2@v2.21100.20000/package/dist/cjs/popper.js
  var require_popper = __commonJS({
    "ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2@v2.21100.20000/package/dist/cjs/popper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (node.toString() !== "[object Window]") {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      function isElement2(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;
      function getBoundingClientRect(element, includeScale) {
        if (includeScale === void 0) {
          includeScale = false;
        }
        var rect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (isHTMLElement(element) && includeScale) {
          var offsetHeight = element.offsetHeight;
          var offsetWidth = element.offsetWidth;
          if (offsetWidth > 0) {
            scaleX = round(rect.width) / offsetWidth || 1;
          }
          if (offsetHeight > 0) {
            scaleY = round(rect.height) / offsetHeight || 1;
          }
        }
        return {
          width: rect.width / scaleX,
          height: rect.height / scaleY,
          top: rect.top / scaleY,
          right: rect.right / scaleX,
          bottom: rect.bottom / scaleY,
          left: rect.left / scaleX,
          x: rect.left / scaleX,
          y: rect.top / scaleY
        };
      }
      function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft,
          scrollTop
        };
      }
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) {
          return getWindowScroll(node);
        } else {
          return getHTMLElementScroll(node);
        }
      }
      function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getDocumentElement(element) {
        return ((isElement2(element) ? element.ownerDocument : (
          // $FlowFixMe[prop-missing]
          element.document
        )) || window.document).documentElement;
      }
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getComputedStyle2(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
          isScrollParent(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }
        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }
        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width,
          height
        };
      }
      function getParentNode(element) {
        if (getNodeName(element) === "html") {
          return element;
        }
        return (
          // this is a quicker (but less type safe) way to save quite some bytes from the bundle
          // $FlowFixMe[incompatible-return]
          // $FlowFixMe[prop-missing]
          element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          element.parentNode || // DOM Element detected
          (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
          // $FlowFixMe[incompatible-call]: HTMLElement is a Node
          getDocumentElement(element)
        );
      }
      function getScrollParent(node) {
        if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(node) && isScrollParent(node)) {
          return node;
        }
        return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) {
          list = [];
        }
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : (
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)))
        );
      }
      function isTableElement(element) {
        return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
        getComputedStyle2(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      function getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
        var isIE = navigator.userAgent.indexOf("Trident") !== -1;
        if (isIE && isHTMLElement(element)) {
          var elementCss = getComputedStyle2(element);
          if (elementCss.position === "fixed") {
            return null;
          }
        }
        var currentNode = getParentNode(element);
        while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
          var css = getComputedStyle2(currentNode);
          if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      function getOffsetParent(element) {
        var window2 = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      var top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [top, bottom, right, left];
      var start = "start";
      var end = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
        return acc.concat([placement + "-" + start, placement + "-" + end]);
      }, []);
      var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
        return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
      }, []);
      var beforeRead = "beforeRead";
      var read = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
      function order(modifiers) {
        var map = /* @__PURE__ */ new Map();
        var visited = /* @__PURE__ */ new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
          map.set(modifier.name, modifier);
        });
        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function(dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);
              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
          if (!visited.has(modifier.name)) {
            sort(modifier);
          }
        });
        return result;
      }
      function orderModifiers(modifiers) {
        var orderedModifiers = order(modifiers);
        return modifierPhases.reduce(function(acc, phase) {
          return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }
      function debounce(fn) {
        var pending;
        return function() {
          if (!pending) {
            pending = new Promise(function(resolve) {
              Promise.resolve().then(function() {
                pending = void 0;
                resolve(fn());
              });
            });
          }
          return pending;
        };
      }
      function format(str) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return [].concat(args).reduce(function(p, c) {
          return p.replace(/%s/, c);
        }, str);
      }
      var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
      var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
      var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
      function validateModifiers(modifiers) {
        modifiers.forEach(function(modifier) {
          [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self2) {
            return self2.indexOf(value) === index;
          }).forEach(function(key) {
            switch (key) {
              case "name":
                if (typeof modifier.name !== "string") {
                  console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                }
                break;
              case "enabled":
                if (typeof modifier.enabled !== "boolean") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                }
                break;
              case "phase":
                if (modifierPhases.indexOf(modifier.phase) < 0) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
                }
                break;
              case "fn":
                if (typeof modifier.fn !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "effect":
                if (modifier.effect != null && typeof modifier.effect !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "requires":
                if (modifier.requires != null && !Array.isArray(modifier.requires)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                }
                break;
              case "requiresIfExists":
                if (!Array.isArray(modifier.requiresIfExists)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                }
                break;
              case "options":
              case "data":
                break;
              default:
                console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                  return '"' + s + '"';
                }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
              if (modifiers.find(function(mod) {
                return mod.name === requirement;
              }) == null) {
                console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
              }
            });
          });
        });
      }
      function uniqueBy(arr, fn) {
        var identifiers = /* @__PURE__ */ new Set();
        return arr.filter(function(item) {
          var identifier = fn(item);
          if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
          }
        });
      }
      function getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function(merged2, current) {
          var existing = merged2[current.name];
          merged2[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged2;
        }, {});
        return Object.keys(merged).map(function(key) {
          return merged[key];
        });
      }
      function getViewportRect(element) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x: x + getWindowScrollBarX(element),
          y
        };
      }
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle2(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
          do {
            if (next && parent.isSameNode(next)) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      function getInnerBoundingClientRect(element) {
        var rect = getBoundingClientRect(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement2(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
        var clippingParents2 = listScrollParents(getParentNode(element));
        var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement2(clipperElement)) {
          return [];
        }
        return clippingParents2.filter(function(clippingParent) {
          return isElement2(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body" && (canEscapeClipping ? getComputedStyle2(clippingParent).position !== "static" : true);
        });
      }
      function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents2[0];
        var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      function getVariation(placement) {
        return placement.split("-")[1];
      }
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
      }
      function computeOffsets(_ref) {
        var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference2.x + reference2.width / 2 - element.width / 2;
        var commonY = reference2.y + reference2.height / 2 - element.height / 2;
        var offsets;
        switch (basePlacement) {
          case top:
            offsets = {
              x: commonX,
              y: reference2.y - element.height
            };
            break;
          case bottom:
            offsets = {
              x: commonX,
              y: reference2.y + reference2.height
            };
            break;
          case right:
            offsets = {
              x: reference2.x + reference2.width,
              y: commonY
            };
            break;
          case left:
            offsets = {
              x: reference2.x - element.width,
              y: commonY
            };
            break;
          default:
            offsets = {
              x: reference2.x,
              y: reference2.y
            };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          var len = mainAxis === "y" ? "height" : "width";
          switch (variation) {
            case start:
              offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
              break;
            case end:
              offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
              break;
          }
        }
        return offsets;
      }
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
        return keys.reduce(function(hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }
      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper ? reference : popper;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement2(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets2 = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: "absolute",
          placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
        var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset;
        if (elementContext === popper && offsetData) {
          var offset2 = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
          });
        }
        return overflowOffsets;
      }
      var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
      var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
      var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return !args.some(function(element) {
          return !(element && typeof element.getBoundingClientRect === "function");
        });
      }
      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper3(reference2, popper2, options) {
          if (options === void 0) {
            options = defaultOptions;
          }
          var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference2,
              popper: popper2
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options2);
              state.scrollParents = {
                reference: isElement2(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                popper: listScrollParents(popper2)
              };
              var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
              state.orderedModifiers = orderedModifiers.filter(function(m) {
                return m.enabled;
              });
              if (true) {
                var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                  var name = _ref.name;
                  return name;
                });
                validateModifiers(modifiers);
                if (getBasePlacement(state.options.placement) === auto) {
                  var flipModifier = state.orderedModifiers.find(function(_ref2) {
                    var name = _ref2.name;
                    return name === "flip";
                  });
                  if (!flipModifier) {
                    console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
                  }
                }
                var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
                if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
                  return parseFloat(margin);
                })) {
                  console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
                }
              }
              runModifierEffects();
              return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }
              var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
              if (!areValidElements(reference3, popper3)) {
                if (true) {
                  console.error(INVALID_ELEMENT_ERROR);
                }
                return;
              }
              state.rects = {
                reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                popper: getLayoutRect(popper3)
              };
              state.reset = false;
              state.placement = state.options.placement;
              state.orderedModifiers.forEach(function(modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              var __debug_loops__ = 0;
              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (true) {
                  __debug_loops__ += 1;
                  if (__debug_loops__ > 100) {
                    console.error(INFINITE_LOOP_ERROR);
                    break;
                  }
                }
                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }
                var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                if (typeof fn === "function") {
                  state = fn({
                    state,
                    options: _options,
                    name,
                    instance
                  }) || state;
                }
              }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: debounce(function() {
              return new Promise(function(resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };
          if (!areValidElements(reference2, popper2)) {
            if (true) {
              console.error(INVALID_ELEMENT_ERROR);
            }
            return instance;
          }
          instance.setOptions(options).then(function(state2) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state2);
            }
          });
          function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
              var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
              if (typeof effect2 === "function") {
                var cleanupFn = effect2({
                  state,
                  name,
                  instance,
                  options: options2
                });
                var noopFn = function noopFn2() {
                };
                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }
          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
              return fn();
            });
            effectCleanupFns = [];
          }
          return instance;
        };
      }
      var passive = {
        passive: true
      };
      function effect$2(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window2 = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.addEventListener("resize", instance.update, passive);
        }
        return function() {
          if (scroll) {
            scrollParents.forEach(function(scrollParent) {
              scrollParent.removeEventListener("scroll", instance.update, passive);
            });
          }
          if (resize) {
            window2.removeEventListener("resize", instance.update, passive);
          }
        };
      }
      var eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {
        },
        effect: effect$2,
        data: {}
      };
      function popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        state.modifiersData[name] = computeOffsets({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: "absolute",
          placement: state.placement
        });
      }
      var popperOffsets$1 = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets,
        data: {}
      };
      var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function roundOffsetsByDPR(_ref) {
        var x = _ref.x, y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: round(x * dpr) / dpr || 0,
          y: round(y * dpr) / dpr || 0
        };
      }
      function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = top;
        var win = window;
        if (adaptive) {
          var offsetParent = getOffsetParent(popper2);
          var heightProp = "clientHeight";
          var widthProp = "clientWidth";
          if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
              heightProp = "scrollHeight";
              widthProp = "scrollWidth";
            }
          }
          offsetParent = offsetParent;
          if (placement === top || (placement === left || placement === right) && variation === end) {
            sideY = bottom;
            var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : (
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp]
            );
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }
          if (placement === left || (placement === top || placement === bottom) && variation === end) {
            sideX = right;
            var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : (
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp]
            );
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }
        var commonStyles = Object.assign({
          position
        }, adaptive && unsetSides);
        if (gpuAcceleration) {
          var _Object$assign;
          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref4) {
        var state = _ref4.state, options = _ref4.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        if (true) {
          var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
          if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
            return transitionProperty.indexOf(property) >= 0;
          })) {
            console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
          }
        }
        var commonStyles = {
          placement: getBasePlacement(state.placement),
          variation: getVariation(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration,
          isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive,
            roundOffsets
          })));
        }
        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets
          })));
        }
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-placement": state.placement
        });
      }
      var computeStyles$1 = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
      };
      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name];
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(name2) {
            var value = attributes[name2];
            if (value === false) {
              element.removeAttribute(name2);
            } else {
              element.setAttribute(name2, value === true ? "" : value);
            }
          });
        });
      }
      function effect$1(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
        return function() {
          Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce(function(style2, property) {
              style2[property] = "";
              return style2;
            }, {});
            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      }
      var applyStyles$1 = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: effect$1,
        requires: ["computeStyles"]
      };
      function distanceAndSkiddingToXY(placement, rects, offset2) {
        var basePlacement = getBasePlacement(placement);
        var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
          placement
        })) : offset2, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [left, right].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }
      function offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
        var data = placements.reduce(function(acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
          return acc;
        }, {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
      }
      var offset$1 = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: ["popperOffsets"],
        fn: offset
      };
      var hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash$1[matched];
        });
      }
      var hash = {
        start: "end",
        end: "start"
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function(matched) {
          return hash[matched];
        });
      }
      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
        var variation = getVariation(placement);
        var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
          return getVariation(placement2) === variation;
        }) : basePlacements;
        var allowedPlacements = placements$1.filter(function(placement2) {
          return allowedAutoPlacements.indexOf(placement2) >= 0;
        });
        if (allowedPlacements.length === 0) {
          allowedPlacements = placements$1;
          if (true) {
            console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
          }
        }
        var overflows = allowedPlacements.reduce(function(acc, placement2) {
          acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding
          })[getBasePlacement(placement2)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function(a, b) {
          return overflows[a] - overflows[b];
        });
      }
      function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) {
          return [];
        }
        var oppositePlacement = getOppositePlacement(placement);
        return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
      }
      function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) {
          return;
        }
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
          return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
          }) : placement2);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = /* @__PURE__ */ new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements2[0];
        for (var i = 0; i < placements2.length; i++) {
          var placement = placements2[i];
          var _basePlacement = getBasePlacement(placement);
          var isStartVariation = getVariation(placement) === start;
          var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
          var len = isVertical ? "width" : "height";
          var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = getOppositePlacement(mainVariationSide);
          }
          var altVariationSide = getOppositePlacement(mainVariationSide);
          var checks = [];
          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }
          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }
          if (checks.every(function(check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }
          checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
          var numberOfChecks = flipVariations ? 3 : 1;
          var _loop = function _loop2(_i2) {
            var fittingPlacement = placements2.find(function(placement2) {
              var checks2 = checksMap.get(placement2);
              if (checks2) {
                return checks2.slice(0, _i2).every(function(check) {
                  return check;
                });
              }
            });
            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };
          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break") break;
          }
        }
        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      }
      var flip$1 = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: ["offset"],
        data: {
          _skip: false
        }
      };
      function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      function withinMaxClamp(min2, value, max2) {
        var v = within(min2, value, max2);
        return v > max2 ? max2 : v;
      }
      function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
          boundary,
          rootBoundary,
          padding,
          altBoundary
        });
        var basePlacement = getBasePlacement(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
          x: 0,
          y: 0
        };
        if (!popperOffsets2) {
          return;
        }
        if (checkMainAxis) {
          var _offsetModifierState$;
          var mainSide = mainAxis === "y" ? top : left;
          var altSide = mainAxis === "y" ? bottom : right;
          var len = mainAxis === "y" ? "height" : "width";
          var offset2 = popperOffsets2[mainAxis];
          var min$1 = offset2 + overflow[mainSide];
          var max$1 = offset2 - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === start ? referenceRect[len] : popperRect[len];
          var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide];
          var arrowLen = within(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
          var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
          var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = offset2 + maxOffset - offsetModifierValue;
          var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _offsetModifierState$2;
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _len = altAxis === "y" ? "height" : "width";
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
          var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
          var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
          var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
          var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
      }
      var preventOverflow$1 = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: ["offset"]
      };
      var toPaddingObject = function toPaddingObject2(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [left, right].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets2) {
          return;
        }
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
        var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2;
        var min2 = paddingObject[minProp];
        var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset2 = within(min2, center, max2);
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
      }
      function effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) {
          return;
        }
        if (typeof arrowElement === "string") {
          arrowElement = state.elements.popper.querySelector(arrowElement);
          if (!arrowElement) {
            return;
          }
        }
        if (true) {
          if (!isHTMLElement(arrowElement)) {
            console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
          }
        }
        if (!contains(state.elements.popper, arrowElement)) {
          if (true) {
            console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
          }
          return;
        }
        state.elements.arrow = arrowElement;
      }
      var arrow$1 = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }
        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }
      function isAnySideFullyClipped(overflow) {
        return [top, right, bottom, left].some(function(side) {
          return overflow[side] >= 0;
        });
      }
      function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
          elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets,
          popperEscapeOffsets,
          isReferenceHidden,
          hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-reference-hidden": isReferenceHidden,
          "data-popper-escaped": hasPopperEscaped
        });
      }
      var hide$1 = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: hide
      };
      var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
      var createPopper$1 = /* @__PURE__ */ popperGenerator({
        defaultModifiers: defaultModifiers$1
      });
      var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
      var createPopper2 = /* @__PURE__ */ popperGenerator({
        defaultModifiers
      });
      exports.applyStyles = applyStyles$1;
      exports.arrow = arrow$1;
      exports.computeStyles = computeStyles$1;
      exports.createPopper = createPopper2;
      exports.createPopperLite = createPopper$1;
      exports.defaultModifiers = defaultModifiers;
      exports.detectOverflow = detectOverflow;
      exports.eventListeners = eventListeners;
      exports.flip = flip$1;
      exports.hide = hide$1;
      exports.offset = offset$1;
      exports.popperGenerator = popperGenerator;
      exports.popperOffsets = popperOffsets$1;
      exports.preventOverflow = preventOverflow$1;
    }
  });

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.17/dist/bigger-picture.umd.js
  var require_bigger_picture_umd = __commonJS({
    "ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.17/dist/bigger-picture.umd.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.BiggerPicture = factory());
      })(exports, function() {
        function noop2() {
        }
        const identity = (x) => x;
        function assign(tar, src) {
          for (const k in src)
            tar[k] = src[k];
          return tar;
        }
        function run(fn) {
          return fn();
        }
        function run_all(fns) {
          fns.forEach(run);
        }
        function is_function(thing) {
          return typeof thing === "function";
        }
        function not_equal(a, b) {
          return a != a ? b == b : a !== b;
        }
        function is_empty(obj) {
          return Object.keys(obj).length === 0;
        }
        function subscribe(store, ...callbacks) {
          if (store == null) {
            return noop2;
          }
          const unsub = store.subscribe(...callbacks);
          return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
        }
        function component_subscribe(component, store, callback) {
          component.$$.on_destroy.push(subscribe(store, callback));
        }
        function action_destroyer(action_result) {
          return action_result && is_function(action_result.destroy) ? action_result.destroy : noop2;
        }
        let now = () => globalThis.performance.now();
        let raf = (cb) => requestAnimationFrame(cb);
        const tasks = /* @__PURE__ */ new Set();
        function run_tasks(now2) {
          tasks.forEach((task) => {
            if (!task.c(now2)) {
              tasks.delete(task);
              task.f();
            }
          });
          if (tasks.size !== 0)
            raf(run_tasks);
        }
        function loop(callback) {
          let task;
          if (tasks.size === 0)
            raf(run_tasks);
          return {
            promise: new Promise((fulfill) => {
              tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
              tasks.delete(task);
            }
          };
        }
        function append(target, node) {
          target.appendChild(node);
        }
        function insert(target, node, anchor) {
          target.insertBefore(node, anchor || null);
        }
        function detach(node) {
          node.parentNode.removeChild(node);
        }
        function element(name) {
          return document.createElement(name);
        }
        function text(data) {
          return document.createTextNode(data);
        }
        function empty() {
          return text("");
        }
        function listen(node, event, handler, options) {
          node.addEventListener(event, handler, options);
          return () => node.removeEventListener(event, handler, options);
        }
        function attr(node, attribute, value) {
          if (value == null)
            node.removeAttribute(attribute);
          else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
        }
        function set_style(node, key, value, important) {
          if (value === null) {
            node.style.removeProperty(key);
          } else {
            node.style.setProperty(key, value);
          }
        }
        function toggle_class(element2, name, toggle) {
          element2.classList[toggle ? "add" : "remove"](name);
        }
        function custom_event(type, detail, bubbles = false) {
          const e = document.createEvent("CustomEvent");
          e.initCustomEvent(type, bubbles, false, detail);
          return e;
        }
        let stylesheet;
        let active = 0;
        let current_rules = {};
        function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
          const step = 16.666 / duration;
          let keyframes = "{\n";
          for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
          }
          const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
          const name = `_bp_${Math.round(Math.random() * 1e9)}_${uid}`;
          if (!current_rules[name]) {
            if (!stylesheet) {
              const style = element("style");
              document.head.appendChild(style);
              stylesheet = style.sheet;
            }
            current_rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
          }
          const animation = node.style.animation || "";
          node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
          active += 1;
          return name;
        }
        function delete_rule(node, name) {
          node.style.animation = (node.style.animation || "").split(", ").filter(
            name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("_bp") === -1
            // remove all Svelte animations
          ).join(", ");
          if (name && !--active)
            clear_rules();
        }
        function clear_rules() {
          raf(() => {
            if (active)
              return;
            let i = stylesheet.cssRules.length;
            while (i--)
              stylesheet.deleteRule(i);
            current_rules = {};
          });
        }
        let current_component;
        function set_current_component(component) {
          current_component = component;
        }
        const dirty_components = [];
        const binding_callbacks = [];
        const render_callbacks = [];
        const flush_callbacks = [];
        const resolved_promise = Promise.resolve();
        let update_scheduled = false;
        function schedule_update() {
          if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
          }
        }
        function add_render_callback(fn) {
          render_callbacks.push(fn);
        }
        const seen_callbacks = /* @__PURE__ */ new Set();
        let flushidx = 0;
        function flush() {
          const saved_component = current_component;
          do {
            while (flushidx < dirty_components.length) {
              const component = dirty_components[flushidx];
              flushidx++;
              set_current_component(component);
              update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
              binding_callbacks.pop()();
            for (let i = 0; i < render_callbacks.length; i += 1) {
              const callback = render_callbacks[i];
              if (!seen_callbacks.has(callback)) {
                seen_callbacks.add(callback);
                callback();
              }
            }
            render_callbacks.length = 0;
          } while (dirty_components.length);
          while (flush_callbacks.length) {
            flush_callbacks.pop()();
          }
          update_scheduled = false;
          seen_callbacks.clear();
          set_current_component(saved_component);
        }
        function update($$) {
          if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
          }
        }
        let promise;
        function wait() {
          if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
              promise = null;
            });
          }
          return promise;
        }
        function dispatch(node, direction, kind) {
          node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
        }
        const outroing = /* @__PURE__ */ new Set();
        let outros;
        function group_outros() {
          outros = {
            r: 0,
            c: [],
            p: outros
            // parent group
          };
        }
        function check_outros() {
          if (!outros.r) {
            run_all(outros.c);
          }
          outros = outros.p;
        }
        function transition_in(block, local) {
          if (block && block.i) {
            outroing.delete(block);
            block.i(local);
          }
        }
        function transition_out(block, local, detach2, callback) {
          if (block && block.o) {
            if (outroing.has(block))
              return;
            outroing.add(block);
            outros.c.push(() => {
              outroing.delete(block);
              if (callback) {
                if (detach2)
                  block.d(1);
                callback();
              }
            });
            block.o(local);
          }
        }
        const null_transition = { duration: 0 };
        function create_in_transition(node, fn, params) {
          let config = fn(node, params);
          let running = false;
          let animation_name;
          let task;
          let uid = 0;
          function cleanup() {
            if (animation_name)
              delete_rule(node, animation_name);
          }
          function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop2, css } = config || null_transition;
            if (css)
              animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
            tick(0, 1);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            if (task)
              task.abort();
            running = true;
            add_render_callback(() => dispatch(node, true, "start"));
            task = loop((now2) => {
              if (running) {
                if (now2 >= end_time) {
                  tick(1, 0);
                  dispatch(node, true, "end");
                  cleanup();
                  return running = false;
                }
                if (now2 >= start_time) {
                  const t = easing((now2 - start_time) / duration);
                  tick(t, 1 - t);
                }
              }
              return running;
            });
          }
          let started = false;
          return {
            start() {
              if (started)
                return;
              started = true;
              delete_rule(node);
              if (is_function(config)) {
                config = config();
                wait().then(go);
              } else {
                go();
              }
            },
            invalidate() {
              started = false;
            },
            end() {
              if (running) {
                cleanup();
                running = false;
              }
            }
          };
        }
        function create_out_transition(node, fn, params) {
          let config = fn(node, params);
          let running = true;
          let animation_name;
          const group = outros;
          group.r += 1;
          function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop2, css } = config || null_transition;
            if (css)
              animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            add_render_callback(() => dispatch(node, false, "start"));
            loop((now2) => {
              if (running) {
                if (now2 >= end_time) {
                  tick(0, 1);
                  dispatch(node, false, "end");
                  if (!--group.r) {
                    run_all(group.c);
                  }
                  return false;
                }
                if (now2 >= start_time) {
                  const t = easing((now2 - start_time) / duration);
                  tick(1 - t, t);
                }
              }
              return running;
            });
          }
          if (is_function(config)) {
            wait().then(() => {
              config = config();
              go();
            });
          } else {
            go();
          }
          return {
            end(reset) {
              if (reset && config.tick) {
                config.tick(1, 0);
              }
              if (running) {
                if (animation_name)
                  delete_rule(node, animation_name);
                running = false;
              }
            }
          };
        }
        function create_component(block) {
          block && block.c();
        }
        function mount_component(component, target, anchor, customElement) {
          const { fragment, on_mount, on_destroy, after_update } = component.$$;
          fragment && fragment.m(target, anchor);
          if (!customElement) {
            add_render_callback(() => {
              const new_on_destroy = on_mount.map(run).filter(is_function);
              if (on_destroy) {
                on_destroy.push(...new_on_destroy);
              } else {
                run_all(new_on_destroy);
              }
              component.$$.on_mount = [];
            });
          }
          after_update.forEach(add_render_callback);
        }
        function destroy_component(component, detaching) {
          const $$ = component.$$;
          if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
          }
        }
        function make_dirty(component, i) {
          if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
          }
          component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
        }
        function init(component, options, instance2, create_fragment2, not_equal2, props, append_styles, dirty = [-1]) {
          const parent_component = current_component;
          set_current_component(component);
          const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop2,
            not_equal: not_equal2,
            bound: {},
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: {},
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
          };
          append_styles && append_styles($$.root);
          let ready = false;
          $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal2($$.ctx[i], $$.ctx[i] = value)) {
              if (!$$.skip_bound && $$.bound[i])
                $$.bound[i](value);
              if (ready)
                make_dirty(component, i);
            }
            return ret;
          }) : [];
          $$.update();
          ready = true;
          run_all($$.before_update);
          $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
          if (options.target) {
            {
              $$.fragment && $$.fragment.c();
            }
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
          }
          set_current_component(parent_component);
        }
        class SvelteComponent {
          $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop2;
          }
          $on(type, callback) {
            const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
            callbacks.push(callback);
            return () => {
              const index = callbacks.indexOf(callback);
              if (index !== -1)
                callbacks.splice(index, 1);
            };
          }
          $set($$props) {
            if (this.$$set && !is_empty($$props)) {
              this.$$.skip_bound = true;
              this.$$set($$props);
              this.$$.skip_bound = false;
            }
          }
        }
        function cubicOut(t) {
          const f = t - 1;
          return f * f * f + 1;
        }
        function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
          const style = getComputedStyle(node);
          const target_opacity = +style.opacity;
          const transform = style.transform === "none" ? "" : style.transform;
          const od = target_opacity * (1 - opacity);
          return {
            delay,
            duration,
            easing,
            css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
          };
        }
        const subscriber_queue = [];
        function writable(value, start = noop2) {
          let stop;
          const subscribers = /* @__PURE__ */ new Set();
          function set(new_value) {
            if (not_equal(value, new_value)) {
              value = new_value;
              if (stop) {
                const run_queue = !subscriber_queue.length;
                for (const subscriber of subscribers) {
                  subscriber[1]();
                  subscriber_queue.push(subscriber, value);
                }
                if (run_queue) {
                  for (let i = 0; i < subscriber_queue.length; i += 2) {
                    subscriber_queue[i][0](subscriber_queue[i + 1]);
                  }
                  subscriber_queue.length = 0;
                }
              }
            }
          }
          function update2(fn) {
            set(fn(value));
          }
          function subscribe2(run2, invalidate = noop2) {
            const subscriber = [run2, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
              stop = start(set) || noop2;
            }
            run2(value);
            return () => {
              subscribers.delete(subscriber);
              if (subscribers.size === 0) {
                stop();
                stop = null;
              }
            };
          }
          return { set, update: update2, subscribe: subscribe2 };
        }
        function get_interpolator(a, b) {
          if (a === b || a !== a)
            return () => a;
          const type = typeof a;
          if (Array.isArray(a)) {
            const arr = b.map((bi, i) => {
              return get_interpolator(a[i], bi);
            });
            return (t) => arr.map((fn) => fn(t));
          }
          if (type === "number") {
            const delta = b - a;
            return (t) => a + t * delta;
          }
        }
        function tweened(value, defaults = {}) {
          const store = writable(value);
          let task;
          let target_value = value;
          function set(new_value, opts) {
            if (value == null) {
              store.set(value = new_value);
              return Promise.resolve();
            }
            target_value = new_value;
            let previous_task = task;
            let started = false;
            let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
            if (duration === 0) {
              if (previous_task) {
                previous_task.abort();
                previous_task = null;
              }
              store.set(value = target_value);
              return Promise.resolve();
            }
            const start = now() + delay;
            let fn;
            task = loop((now2) => {
              if (now2 < start)
                return true;
              if (!started) {
                fn = interpolate(value, new_value);
                if (typeof duration === "function")
                  duration = duration(value, new_value);
                started = true;
              }
              if (previous_task) {
                previous_task.abort();
                previous_task = null;
              }
              const elapsed = now2 - start;
              if (elapsed > duration) {
                store.set(value = new_value);
                return false;
              }
              store.set(value = fn(easing(elapsed / duration)));
              return true;
            });
            return task.promise;
          }
          return {
            set,
            update: (fn, opts) => set(fn(target_value, value), opts),
            subscribe: store.subscribe
          };
        }
        const closing = writable(0);
        const prefersReducedMotion = globalThis.matchMedia?.(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        const defaultTweenOptions = (duration) => ({
          easing: cubicOut,
          duration: prefersReducedMotion ? 0 : duration
        });
        const getThumbBackground = (activeItem) => !activeItem.thumb || `url(${activeItem.thumb})`;
        const addAttributes = (node, obj) => {
          if (!obj) {
            return;
          }
          if (typeof obj === "string") {
            obj = JSON.parse(obj);
          }
          for (const key in obj) {
            node.setAttribute(key, obj[key]);
          }
        };
        function create_if_block_1$2(ctx) {
          let div;
          let div_outro;
          let current;
          return {
            c() {
              div = element("div");
              div.innerHTML = `<span class="bp-bar"></span><span class="bp-o"></span>`;
              attr(div, "class", "bp-load");
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[0]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              if (dirty & /*activeItem*/
              1) {
                set_style(div, "background-image", getThumbBackground(
                  /*activeItem*/
                  ctx2[0]
                ));
              }
            },
            i(local) {
              if (current) return;
              if (div_outro) div_outro.end(1);
              current = true;
            },
            o(local) {
              if (local) {
                div_outro = create_out_transition(div, fly, { duration: 480 });
              }
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div);
              if (detaching && div_outro) div_outro.end();
            }
          };
        }
        function create_if_block$2(ctx) {
          let div;
          let div_intro;
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-load");
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[0]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
            },
            p(ctx2, dirty) {
              if (dirty & /*activeItem*/
              1) {
                set_style(div, "background-image", getThumbBackground(
                  /*activeItem*/
                  ctx2[0]
                ));
              }
            },
            i(local) {
              if (!div_intro) {
                add_render_callback(() => {
                  div_intro = create_in_transition(div, fly, { duration: 480 });
                  div_intro.start();
                });
              }
            },
            o: noop2,
            d(detaching) {
              if (detaching) detach(div);
            }
          };
        }
        function create_fragment$4(ctx) {
          let if_block0_anchor;
          let if_block1_anchor;
          let if_block0 = !/*loaded*/
          ctx[1] && create_if_block_1$2(ctx);
          let if_block1 = (
            /*$closing*/
            ctx[2] && create_if_block$2(ctx)
          );
          return {
            c() {
              if (if_block0) if_block0.c();
              if_block0_anchor = empty();
              if (if_block1) if_block1.c();
              if_block1_anchor = empty();
            },
            m(target, anchor) {
              if (if_block0) if_block0.m(target, anchor);
              insert(target, if_block0_anchor, anchor);
              if (if_block1) if_block1.m(target, anchor);
              insert(target, if_block1_anchor, anchor);
            },
            p(ctx2, [dirty]) {
              if (!/*loaded*/
              ctx2[1]) {
                if (if_block0) {
                  if_block0.p(ctx2, dirty);
                  if (dirty & /*loaded*/
                  2) {
                    transition_in(if_block0, 1);
                  }
                } else {
                  if_block0 = create_if_block_1$2(ctx2);
                  if_block0.c();
                  transition_in(if_block0, 1);
                  if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
                }
              } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, () => {
                  if_block0 = null;
                });
                check_outros();
              }
              if (
                /*$closing*/
                ctx2[2]
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty & /*$closing*/
                  4) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block$2(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
              } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
              }
            },
            i(local) {
              transition_in(if_block0);
              transition_in(if_block1);
            },
            o(local) {
              transition_out(if_block0);
            },
            d(detaching) {
              if (if_block0) if_block0.d(detaching);
              if (detaching) detach(if_block0_anchor);
              if (if_block1) if_block1.d(detaching);
              if (detaching) detach(if_block1_anchor);
            }
          };
        }
        function instance$4($$self, $$props, $$invalidate) {
          let $closing;
          component_subscribe($$self, closing, ($$value) => $$invalidate(2, $closing = $$value));
          let { activeItem } = $$props;
          let { loaded } = $$props;
          $$self.$$set = ($$props2) => {
            if ("activeItem" in $$props2) $$invalidate(0, activeItem = $$props2.activeItem);
            if ("loaded" in $$props2) $$invalidate(1, loaded = $$props2.loaded);
          };
          return [activeItem, loaded, $closing];
        }
        class Loading extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$4, create_fragment$4, not_equal, { activeItem: 0, loaded: 1 });
          }
        }
        function create_if_block_1$1(ctx) {
          let img;
          let img_sizes_value;
          let img_outro;
          let current;
          let mounted;
          let dispose;
          return {
            c() {
              img = element("img");
              attr(img, "sizes", img_sizes_value = /*opts*/
              ctx[8].sizes || `${/*sizes*/
              ctx[1]}px`);
              attr(
                img,
                "alt",
                /*activeItem*/
                ctx[7].alt
              );
            },
            m(target, anchor) {
              insert(target, img, anchor);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*addSrc*/
                    ctx[21].call(null, img)
                  ),
                  listen(
                    img,
                    "error",
                    /*error_handler*/
                    ctx[27]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (!current || dirty[0] & /*sizes*/
              2 && img_sizes_value !== (img_sizes_value = /*opts*/
              ctx2[8].sizes || `${/*sizes*/
              ctx2[1]}px`)) {
                attr(img, "sizes", img_sizes_value);
              }
            },
            i(local) {
              if (current) return;
              if (img_outro) img_outro.end(1);
              current = true;
            },
            o(local) {
              img_outro = create_out_transition(img, fly, {});
              current = false;
            },
            d(detaching) {
              if (detaching) detach(img);
              if (detaching && img_outro) img_outro.end();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_if_block$1(ctx) {
          let loading;
          let current;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[7]
              ),
              loaded: (
                /*loaded*/
                ctx[2]
              )
            }
          });
          return {
            c() {
              create_component(loading.$$.fragment);
            },
            m(target, anchor) {
              mount_component(loading, target, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              const loading_changes = {};
              if (dirty[0] & /*loaded*/
              4) loading_changes.loaded = /*loaded*/
              ctx2[2];
              loading.$set(loading_changes);
            },
            i(local) {
              if (current) return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(loading, detaching);
            }
          };
        }
        function create_fragment$3(ctx) {
          let div1;
          let div0;
          let if_block0_anchor;
          let style_transform = `translate3d(${/*$imageDimensions*/
          ctx[0][0] / -2 + /*$zoomDragTranslate*/
          ctx[6][0]}px, ${/*$imageDimensions*/
          ctx[0][1] / -2 + /*$zoomDragTranslate*/
          ctx[6][1]}px, 0)`;
          let current;
          let mounted;
          let dispose;
          let if_block0 = (
            /*loaded*/
            ctx[2] && create_if_block_1$1(ctx)
          );
          let if_block1 = (
            /*showLoader*/
            ctx[3] && create_if_block$1(ctx)
          );
          return {
            c() {
              div1 = element("div");
              div0 = element("div");
              if (if_block0) if_block0.c();
              if_block0_anchor = empty();
              if (if_block1) if_block1.c();
              attr(div0, "class", "bp-img");
              set_style(
                div0,
                "width",
                /*$imageDimensions*/
                ctx[0][0] + "px"
              );
              set_style(
                div0,
                "height",
                /*$imageDimensions*/
                ctx[0][1] + "px"
              );
              toggle_class(
                div0,
                "bp-drag",
                /*pointerDown*/
                ctx[4]
              );
              toggle_class(
                div0,
                "bp-canzoom",
                /*maxZoom*/
                ctx[11] > 1 && /*$imageDimensions*/
                ctx[0][0] < /*naturalWidth*/
                ctx[12]
              );
              set_style(div0, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[7]
              ));
              set_style(div0, "transform", style_transform);
              attr(div1, "class", "bp-img-wrap");
              toggle_class(
                div1,
                "bp-close",
                /*closingWhileZoomed*/
                ctx[5]
              );
            },
            m(target, anchor) {
              insert(target, div1, anchor);
              append(div1, div0);
              if (if_block0) if_block0.m(div0, null);
              append(div0, if_block0_anchor);
              if (if_block1) if_block1.m(div0, null);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*onMount*/
                    ctx[20].call(null, div0)
                  ),
                  listen(
                    div1,
                    "wheel",
                    /*onWheel*/
                    ctx[15]
                  ),
                  listen(
                    div1,
                    "pointerdown",
                    /*onPointerDown*/
                    ctx[16]
                  ),
                  listen(
                    div1,
                    "pointermove",
                    /*onPointerMove*/
                    ctx[17]
                  ),
                  listen(
                    div1,
                    "pointerup",
                    /*onPointerUp*/
                    ctx[19]
                  ),
                  listen(
                    div1,
                    "pointercancel",
                    /*removeEventFromCache*/
                    ctx[18]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (
                /*loaded*/
                ctx2[2]
              ) {
                if (if_block0) {
                  if_block0.p(ctx2, dirty);
                  if (dirty[0] & /*loaded*/
                  4) {
                    transition_in(if_block0, 1);
                  }
                } else {
                  if_block0 = create_if_block_1$1(ctx2);
                  if_block0.c();
                  transition_in(if_block0, 1);
                  if_block0.m(div0, if_block0_anchor);
                }
              } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, () => {
                  if_block0 = null;
                });
                check_outros();
              }
              if (
                /*showLoader*/
                ctx2[3]
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty[0] & /*showLoader*/
                  8) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block$1(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(div0, null);
                }
              } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, () => {
                  if_block1 = null;
                });
                check_outros();
              }
              if (!current || dirty[0] & /*$imageDimensions*/
              1) {
                set_style(
                  div0,
                  "width",
                  /*$imageDimensions*/
                  ctx2[0][0] + "px"
                );
              }
              if (!current || dirty[0] & /*$imageDimensions*/
              1) {
                set_style(
                  div0,
                  "height",
                  /*$imageDimensions*/
                  ctx2[0][1] + "px"
                );
              }
              if (!current || dirty[0] & /*pointerDown*/
              16) {
                toggle_class(
                  div0,
                  "bp-drag",
                  /*pointerDown*/
                  ctx2[4]
                );
              }
              if (!current || dirty[0] & /*maxZoom, $imageDimensions, naturalWidth*/
              6145) {
                toggle_class(
                  div0,
                  "bp-canzoom",
                  /*maxZoom*/
                  ctx2[11] > 1 && /*$imageDimensions*/
                  ctx2[0][0] < /*naturalWidth*/
                  ctx2[12]
                );
              }
              if (dirty[0] & /*$imageDimensions, $zoomDragTranslate*/
              65 && style_transform !== (style_transform = `translate3d(${/*$imageDimensions*/
              ctx2[0][0] / -2 + /*$zoomDragTranslate*/
              ctx2[6][0]}px, ${/*$imageDimensions*/
              ctx2[0][1] / -2 + /*$zoomDragTranslate*/
              ctx2[6][1]}px, 0)`)) {
                set_style(div0, "transform", style_transform);
              }
              if (!current || dirty[0] & /*closingWhileZoomed*/
              32) {
                toggle_class(
                  div1,
                  "bp-close",
                  /*closingWhileZoomed*/
                  ctx2[5]
                );
              }
            },
            i(local) {
              if (current) return;
              transition_in(if_block0);
              transition_in(if_block1);
              current = true;
            },
            o(local) {
              transition_out(if_block0);
              transition_out(if_block1);
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div1);
              if (if_block0) if_block0.d();
              if (if_block1) if_block1.d();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function instance$3($$self, $$props, $$invalidate) {
          let $zoomed;
          let $zoomDragTranslate;
          let $closing;
          let $imageDimensions;
          component_subscribe($$self, closing, ($$value) => $$invalidate(26, $closing = $$value));
          let { props } = $$props;
          let { smallScreen } = $$props;
          let { activeItem, opts, prev, next, zoomed, container } = props;
          component_subscribe($$self, zoomed, (value) => $$invalidate(25, $zoomed = value));
          let maxZoom = activeItem.maxZoom || opts.maxZoom || 10;
          let calculatedDimensions = props.calculateDimensions(activeItem);
          let sizes = calculatedDimensions[0];
          let loaded, showLoader;
          let pinchDetails;
          let bpImg;
          let prevDiff = 0;
          let pointerDown, hasDragged;
          let dragStartX, dragStartY;
          let dragStartTranslateX, dragStartTranslateY;
          let closingWhileZoomed;
          const naturalWidth = +activeItem.width;
          const dragPositions = [];
          const pointerCache = /* @__PURE__ */ new Map();
          const imageDimensions = tweened(calculatedDimensions, defaultTweenOptions(400));
          component_subscribe($$self, imageDimensions, (value) => $$invalidate(0, $imageDimensions = value));
          const zoomDragTranslate = tweened([0, 0], defaultTweenOptions(400));
          component_subscribe($$self, zoomDragTranslate, (value) => $$invalidate(6, $zoomDragTranslate = value));
          const boundTranslateValues = ([x, y], newDimensions = $imageDimensions) => {
            const maxTranslateX = (newDimensions[0] - container.w) / 2;
            const maxTranslateY = (newDimensions[1] - container.h) / 2;
            if (maxTranslateX < 0) {
              x = 0;
            } else if (x > maxTranslateX) {
              if (smallScreen) {
                x = pointerDown ? maxTranslateX + (x - maxTranslateX) / 10 : maxTranslateX;
                if (x > maxTranslateX + 20) {
                  $$invalidate(4, pointerDown = prev());
                }
              } else {
                x = maxTranslateX;
              }
            } else if (x < -maxTranslateX) {
              if (smallScreen) {
                x = pointerDown ? -maxTranslateX - (-maxTranslateX - x) / 10 : -maxTranslateX;
                if (x < -maxTranslateX - 20) {
                  $$invalidate(4, pointerDown = next());
                }
              } else {
                x = -maxTranslateX;
              }
            }
            if (maxTranslateY < 0) {
              y = 0;
            } else if (y > maxTranslateY) {
              y = maxTranslateY;
            } else if (y < -maxTranslateY) {
              y = -maxTranslateY;
            }
            return [x, y];
          };
          function changeZoom(amt = maxZoom, e) {
            if ($closing) {
              return;
            }
            const maxWidth = calculatedDimensions[0] * maxZoom;
            let newWidth = $imageDimensions[0] + $imageDimensions[0] * amt;
            let newHeight = $imageDimensions[1] + $imageDimensions[1] * amt;
            if (amt > 0) {
              if (newWidth > maxWidth) {
                newWidth = maxWidth;
                newHeight = calculatedDimensions[1] * maxZoom;
              }
              if (newWidth > naturalWidth) {
                newWidth = naturalWidth;
                newHeight = +activeItem.height;
              }
            } else if (newWidth < calculatedDimensions[0]) {
              imageDimensions.set(calculatedDimensions);
              return zoomDragTranslate.set([0, 0]);
            }
            let { x, y, width, height } = bpImg.getBoundingClientRect();
            const offsetX = e ? e.clientX - x - width / 2 : 0;
            const offsetY = e ? e.clientY - y - height / 2 : 0;
            x = -offsetX * (newWidth / width) + offsetX;
            y = -offsetY * (newHeight / height) + offsetY;
            const newDimensions = [newWidth, newHeight];
            imageDimensions.set(newDimensions).then(() => {
              $$invalidate(1, sizes = Math.round(Math.max(sizes, newWidth)));
            });
            zoomDragTranslate.set(boundTranslateValues([$zoomDragTranslate[0] + x, $zoomDragTranslate[1] + y], newDimensions));
          }
          Object.defineProperty(activeItem, "zoom", {
            configurable: true,
            get: () => $zoomed,
            set: (bool) => changeZoom(bool ? maxZoom : -maxZoom)
          });
          const onWheel = (e) => {
            if (opts.inline && !$zoomed) {
              return;
            }
            e.preventDefault();
            changeZoom(e.deltaY / -300, e);
          };
          const onPointerDown = (e) => {
            if (e.button !== 2) {
              e.preventDefault();
              $$invalidate(4, pointerDown = true);
              pointerCache.set(e.pointerId, e);
              dragStartX = e.clientX;
              dragStartY = e.clientY;
              dragStartTranslateX = $zoomDragTranslate[0];
              dragStartTranslateY = $zoomDragTranslate[1];
            }
          };
          const onPointerMove = (e) => {
            if (pointerCache.size > 1) {
              $$invalidate(4, pointerDown = false);
              return opts.noPinch?.(container.el) || handlePinch(e);
            }
            if (!pointerDown) {
              return;
            }
            let x = e.clientX;
            let y = e.clientY;
            hasDragged = dragPositions.push({ x, y }) > 2;
            x = x - dragStartX;
            y = y - dragStartY;
            if (!$zoomed) {
              if (y < -90) {
                $$invalidate(4, pointerDown = !opts.noClose && props.close());
              }
              if (Math.abs(y) < 30) {
                if (x > 40) {
                  $$invalidate(4, pointerDown = prev());
                }
                if (x < -40) {
                  $$invalidate(4, pointerDown = next());
                }
              }
            }
            if ($zoomed && hasDragged && !$closing) {
              zoomDragTranslate.set(boundTranslateValues([dragStartTranslateX + x, dragStartTranslateY + y]), { duration: 0 });
            }
          };
          const handlePinch = (e) => {
            const [p1, p2] = pointerCache.set(e.pointerId, e).values();
            const dx = p1.clientX - p2.clientX;
            const dy = p1.clientY - p2.clientY;
            const curDiff = Math.hypot(dx, dy);
            pinchDetails = pinchDetails || {
              clientX: (p1.clientX + p2.clientX) / 2,
              clientY: (p1.clientY + p2.clientY) / 2
            };
            changeZoom(((prevDiff || curDiff) - curDiff) / -35, pinchDetails);
            prevDiff = curDiff;
          };
          const removeEventFromCache = (e) => pointerCache.delete(e.pointerId);
          function onPointerUp(e) {
            removeEventFromCache(e);
            if (pinchDetails) {
              $$invalidate(4, pointerDown = prevDiff = 0);
              pinchDetails = pointerCache.size ? pinchDetails : null;
            }
            if (!pointerDown) {
              return;
            }
            $$invalidate(4, pointerDown = false);
            if (e.target === this && !opts.noClose) {
              return props.close();
            }
            if (hasDragged) {
              const [posOne, posTwo, posThree] = dragPositions.slice(-3);
              const xDiff = posTwo.x - posThree.x;
              const yDiff = posTwo.y - posThree.y;
              if (Math.hypot(xDiff, yDiff) > 5) {
                zoomDragTranslate.set(boundTranslateValues([
                  $zoomDragTranslate[0] - (posOne.x - posThree.x) * 5,
                  $zoomDragTranslate[1] - (posOne.y - posThree.y) * 5
                ]));
              }
            } else if (!opts.onImageClick?.(container.el, activeItem)) {
              changeZoom($zoomed ? -maxZoom : maxZoom, e);
            }
            hasDragged = false;
            dragPositions.length = 0;
          }
          const onMount = (node) => {
            bpImg = node;
            props.setResizeFunc(() => {
              $$invalidate(24, calculatedDimensions = props.calculateDimensions(activeItem));
              if (opts.inline || !smallScreen) {
                imageDimensions.set(calculatedDimensions);
                zoomDragTranslate.set([0, 0]);
              }
            });
            props.loadImage(activeItem).then(() => {
              $$invalidate(2, loaded = true);
              props.preloadNext();
            });
            setTimeout(
              () => {
                $$invalidate(3, showLoader = !loaded);
              },
              250
            );
          };
          const addSrc = (node) => {
            addAttributes(node, activeItem.attr);
            node.srcset = activeItem.img;
          };
          const error_handler = (error) => opts.onError?.(container, activeItem, error);
          $$self.$$set = ($$props2) => {
            if ("smallScreen" in $$props2) $$invalidate(23, smallScreen = $$props2.smallScreen);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*$imageDimensions, calculatedDimensions*/
            16777217) {
              zoomed.set($imageDimensions[0] - 10 > calculatedDimensions[0]);
            }
            if ($$self.$$.dirty[0] & /*$closing, $zoomed, calculatedDimensions*/
            117440512) {
              if ($closing && $zoomed && !opts.intro) {
                const closeTweenOpts = defaultTweenOptions(480);
                zoomDragTranslate.set([0, 0], closeTweenOpts);
                imageDimensions.set(calculatedDimensions, closeTweenOpts);
                $$invalidate(5, closingWhileZoomed = true);
              }
            }
          };
          return [
            $imageDimensions,
            sizes,
            loaded,
            showLoader,
            pointerDown,
            closingWhileZoomed,
            $zoomDragTranslate,
            activeItem,
            opts,
            zoomed,
            container,
            maxZoom,
            naturalWidth,
            imageDimensions,
            zoomDragTranslate,
            onWheel,
            onPointerDown,
            onPointerMove,
            removeEventFromCache,
            onPointerUp,
            onMount,
            addSrc,
            props,
            smallScreen,
            calculatedDimensions,
            $zoomed,
            $closing,
            error_handler
          ];
        }
        class Image extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$3, create_fragment$3, not_equal, { props: 22, smallScreen: 23 }, null, [-1, -1]);
          }
        }
        function create_fragment$2(ctx) {
          let div;
          let iframe;
          let loading;
          let current;
          let mounted;
          let dispose;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[2]
              ),
              loaded: (
                /*loaded*/
                ctx[0]
              )
            }
          });
          return {
            c() {
              div = element("div");
              iframe = element("iframe");
              create_component(loading.$$.fragment);
              attr(iframe, "allow", "autoplay; fullscreen");
              attr(
                iframe,
                "title",
                /*activeItem*/
                ctx[2].title
              );
              attr(div, "class", "bp-if");
              set_style(
                div,
                "width",
                /*dimensions*/
                ctx[1][0] + "px"
              );
              set_style(
                div,
                "height",
                /*dimensions*/
                ctx[1][1] + "px"
              );
            },
            m(target, anchor) {
              insert(target, div, anchor);
              append(div, iframe);
              mount_component(loading, div, null);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*addSrc*/
                    ctx[3].call(null, iframe)
                  ),
                  listen(
                    iframe,
                    "load",
                    /*load_handler*/
                    ctx[5]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, [dirty]) {
              const loading_changes = {};
              if (dirty & /*loaded*/
              1) loading_changes.loaded = /*loaded*/
              ctx2[0];
              loading.$set(loading_changes);
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "width",
                  /*dimensions*/
                  ctx2[1][0] + "px"
                );
              }
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "height",
                  /*dimensions*/
                  ctx2[1][1] + "px"
                );
              }
            },
            i(local) {
              if (current) return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div);
              destroy_component(loading);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function instance$2($$self, $$props, $$invalidate) {
          let { props } = $$props;
          let loaded, dimensions;
          const { activeItem } = props;
          const setDimensions = () => $$invalidate(1, dimensions = props.calculateDimensions(activeItem));
          setDimensions();
          props.setResizeFunc(setDimensions);
          const addSrc = (node) => {
            addAttributes(node, activeItem.attr);
            node.src = activeItem.iframe;
          };
          const load_handler = () => $$invalidate(0, loaded = true);
          return [loaded, dimensions, activeItem, addSrc, props, load_handler];
        }
        class Iframe extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$2, create_fragment$2, not_equal, { props: 4 });
          }
        }
        function create_fragment$1(ctx) {
          let div;
          let loading;
          let current;
          let mounted;
          let dispose;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[2]
              ),
              loaded: (
                /*loaded*/
                ctx[0]
              )
            }
          });
          return {
            c() {
              div = element("div");
              create_component(loading.$$.fragment);
              attr(div, "class", "bp-vid");
              set_style(
                div,
                "width",
                /*dimensions*/
                ctx[1][0] + "px"
              );
              set_style(
                div,
                "height",
                /*dimensions*/
                ctx[1][1] + "px"
              );
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[2]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
              mount_component(loading, div, null);
              current = true;
              if (!mounted) {
                dispose = action_destroyer(
                  /*onMount*/
                  ctx[3].call(null, div)
                );
                mounted = true;
              }
            },
            p(ctx2, [dirty]) {
              const loading_changes = {};
              if (dirty & /*loaded*/
              1) loading_changes.loaded = /*loaded*/
              ctx2[0];
              loading.$set(loading_changes);
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "width",
                  /*dimensions*/
                  ctx2[1][0] + "px"
                );
              }
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "height",
                  /*dimensions*/
                  ctx2[1][1] + "px"
                );
              }
            },
            i(local) {
              if (current) return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div);
              destroy_component(loading);
              mounted = false;
              dispose();
            }
          };
        }
        function instance$1($$self, $$props, $$invalidate) {
          let { props } = $$props;
          let loaded, dimensions;
          const { activeItem, opts, container } = props;
          const setDimensions = () => $$invalidate(1, dimensions = props.calculateDimensions(activeItem));
          setDimensions();
          props.setResizeFunc(setDimensions);
          const onMount = (node) => {
            let mediaElement;
            const appendToVideo = (tag, arr) => {
              if (!Array.isArray(arr)) {
                arr = JSON.parse(arr);
              }
              for (const obj of arr) {
                if (!mediaElement) {
                  mediaElement = document.createElement(obj.type?.includes("audio") ? "audio" : "video");
                  addAttributes(mediaElement, {
                    controls: true,
                    autoplay: true,
                    playsinline: true,
                    tabindex: "0"
                  });
                  addAttributes(mediaElement, activeItem.attr);
                }
                const el = document.createElement(tag);
                addAttributes(el, obj);
                if (tag == "source") {
                  el.onError = (error) => opts.onError?.(container, activeItem, error);
                }
                mediaElement.append(el);
              }
            };
            appendToVideo("source", activeItem.sources);
            appendToVideo("track", activeItem.tracks || []);
            mediaElement.oncanplay = () => $$invalidate(0, loaded = true);
            node.append(mediaElement);
          };
          return [loaded, dimensions, activeItem, onMount, props];
        }
        class Video extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$1, create_fragment$1, not_equal, { props: 4 });
          }
        }
        function create_if_block(ctx) {
          let div2;
          let div0;
          let div0_outro;
          let previous_key = (
            /*activeItem*/
            ctx[6].i
          );
          let div1;
          let button;
          let div1_outro;
          let current;
          let mounted;
          let dispose;
          let key_block = create_key_block(ctx);
          let if_block = (
            /*items*/
            ctx[0].length > 1 && create_if_block_1(ctx)
          );
          return {
            c() {
              div2 = element("div");
              div0 = element("div");
              key_block.c();
              div1 = element("div");
              button = element("button");
              if (if_block) if_block.c();
              attr(button, "class", "bp-x");
              attr(button, "title", "Close");
              attr(button, "aria-label", "Close");
              attr(div1, "class", "bp-controls");
              attr(div2, "class", "bp-wrap");
              toggle_class(
                div2,
                "bp-zoomed",
                /*$zoomed*/
                ctx[10]
              );
              toggle_class(
                div2,
                "bp-inline",
                /*inline*/
                ctx[8]
              );
              toggle_class(
                div2,
                "bp-small",
                /*smallScreen*/
                ctx[7]
              );
              toggle_class(
                div2,
                "bp-noclose",
                /*opts*/
                ctx[5].noClose
              );
            },
            m(target, anchor) {
              insert(target, div2, anchor);
              append(div2, div0);
              key_block.m(div2, null);
              append(div2, div1);
              append(div1, button);
              if (if_block) if_block.m(div1, null);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    button,
                    "click",
                    /*close*/
                    ctx[1]
                  ),
                  action_destroyer(
                    /*containerActions*/
                    ctx[14].call(null, div2)
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*activeItem*/
              64 && not_equal(previous_key, previous_key = /*activeItem*/
              ctx2[6].i)) {
                group_outros();
                transition_out(key_block, 1, 1, noop2);
                check_outros();
                key_block = create_key_block(ctx2);
                key_block.c();
                transition_in(key_block, 1);
                key_block.m(div2, div1);
              } else {
                key_block.p(ctx2, dirty);
              }
              if (
                /*items*/
                ctx2[0].length > 1
              ) {
                if (if_block) {
                  if_block.p(ctx2, dirty);
                } else {
                  if_block = create_if_block_1(ctx2);
                  if_block.c();
                  if_block.m(div1, null);
                }
              } else if (if_block) {
                if_block.d(1);
                if_block = null;
              }
              if (!current || dirty[0] & /*$zoomed*/
              1024) {
                toggle_class(
                  div2,
                  "bp-zoomed",
                  /*$zoomed*/
                  ctx2[10]
                );
              }
              if (!current || dirty[0] & /*inline*/
              256) {
                toggle_class(
                  div2,
                  "bp-inline",
                  /*inline*/
                  ctx2[8]
                );
              }
              if (!current || dirty[0] & /*smallScreen*/
              128) {
                toggle_class(
                  div2,
                  "bp-small",
                  /*smallScreen*/
                  ctx2[7]
                );
              }
              if (!current || dirty[0] & /*opts*/
              32) {
                toggle_class(
                  div2,
                  "bp-noclose",
                  /*opts*/
                  ctx2[5].noClose
                );
              }
            },
            i(local) {
              if (current) return;
              if (div0_outro) div0_outro.end(1);
              transition_in(key_block);
              if (div1_outro) div1_outro.end(1);
              current = true;
            },
            o(local) {
              if (local) {
                div0_outro = create_out_transition(div0, fly, { duration: 480 });
              }
              transition_out(key_block);
              if (local) {
                div1_outro = create_out_transition(div1, fly, {});
              }
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div2);
              if (detaching && div0_outro) div0_outro.end();
              key_block.d(detaching);
              if (if_block) if_block.d();
              if (detaching && div1_outro) div1_outro.end();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_else_block(ctx) {
          let div;
          let raw_value = (
            /*activeItem*/
            (ctx[6].html ?? /*activeItem*/
            ctx[6].element.outerHTML) + ""
          );
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-html");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*activeItem*/
              64 && raw_value !== (raw_value = /*activeItem*/
              (ctx2[6].html ?? /*activeItem*/
              ctx2[6].element.outerHTML) + "")) div.innerHTML = raw_value;
            },
            i: noop2,
            o: noop2,
            d(detaching) {
              if (detaching) detach(div);
            }
          };
        }
        function create_if_block_5(ctx) {
          let iframe;
          let current;
          iframe = new Iframe({
            props: { props: (
              /*getChildProps*/
              ctx[13]()
            ) }
          });
          return {
            c() {
              create_component(iframe.$$.fragment);
            },
            m(target, anchor) {
              mount_component(iframe, target, anchor);
              current = true;
            },
            p: noop2,
            i(local) {
              if (current) return;
              transition_in(iframe.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(iframe.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(iframe, detaching);
            }
          };
        }
        function create_if_block_4(ctx) {
          let video;
          let current;
          video = new Video({
            props: { props: (
              /*getChildProps*/
              ctx[13]()
            ) }
          });
          return {
            c() {
              create_component(video.$$.fragment);
            },
            m(target, anchor) {
              mount_component(video, target, anchor);
              current = true;
            },
            p: noop2,
            i(local) {
              if (current) return;
              transition_in(video.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(video.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(video, detaching);
            }
          };
        }
        function create_if_block_3(ctx) {
          let imageitem;
          let current;
          imageitem = new Image({
            props: {
              props: (
                /*getChildProps*/
                ctx[13]()
              ),
              smallScreen: (
                /*smallScreen*/
                ctx[7]
              )
            }
          });
          return {
            c() {
              create_component(imageitem.$$.fragment);
            },
            m(target, anchor) {
              mount_component(imageitem, target, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              const imageitem_changes = {};
              if (dirty[0] & /*smallScreen*/
              128) imageitem_changes.smallScreen = /*smallScreen*/
              ctx2[7];
              imageitem.$set(imageitem_changes);
            },
            i(local) {
              if (current) return;
              transition_in(imageitem.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(imageitem.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(imageitem, detaching);
            }
          };
        }
        function create_if_block_2(ctx) {
          let div;
          let raw_value = (
            /*activeItem*/
            ctx[6].caption + ""
          );
          let div_outro;
          let current;
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-cap");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
              current = true;
            },
            p(ctx2, dirty) {
              if ((!current || dirty[0] & /*activeItem*/
              64) && raw_value !== (raw_value = /*activeItem*/
              ctx2[6].caption + "")) div.innerHTML = raw_value;
            },
            i(local) {
              if (current) return;
              if (div_outro) div_outro.end(1);
              current = true;
            },
            o(local) {
              div_outro = create_out_transition(div, fly, { duration: 200 });
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div);
              if (detaching && div_outro) div_outro.end();
            }
          };
        }
        function create_key_block(ctx) {
          let div;
          let current_block_type_index;
          let if_block0;
          let div_intro;
          let div_outro;
          let if_block1_anchor;
          let current;
          let mounted;
          let dispose;
          const if_block_creators = [create_if_block_3, create_if_block_4, create_if_block_5, create_else_block];
          const if_blocks = [];
          function select_block_type(ctx2, dirty) {
            if (
              /*activeItem*/
              ctx2[6].img
            ) return 0;
            if (
              /*activeItem*/
              ctx2[6].sources
            ) return 1;
            if (
              /*activeItem*/
              ctx2[6].iframe
            ) return 2;
            return 3;
          }
          current_block_type_index = select_block_type(ctx);
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          let if_block1 = (
            /*activeItem*/
            ctx[6].caption && create_if_block_2(ctx)
          );
          return {
            c() {
              div = element("div");
              if_block0.c();
              if (if_block1) if_block1.c();
              if_block1_anchor = empty();
              attr(div, "class", "bp-inner");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              if_blocks[current_block_type_index].m(div, null);
              if (if_block1) if_block1.m(target, anchor);
              insert(target, if_block1_anchor, anchor);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    div,
                    "pointerdown",
                    /*pointerdown_handler*/
                    ctx[20]
                  ),
                  listen(
                    div,
                    "pointerup",
                    /*pointerup_handler*/
                    ctx[21]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              let previous_block_index = current_block_type_index;
              current_block_type_index = select_block_type(ctx2);
              if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx2, dirty);
              } else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, () => {
                  if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block0 = if_blocks[current_block_type_index];
                if (!if_block0) {
                  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                  if_block0.c();
                } else {
                  if_block0.p(ctx2, dirty);
                }
                transition_in(if_block0, 1);
                if_block0.m(div, null);
              }
              if (
                /*activeItem*/
                ctx2[6].caption
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty[0] & /*activeItem*/
                  64) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block_2(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
              } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, () => {
                  if_block1 = null;
                });
                check_outros();
              }
            },
            i(local) {
              if (current) return;
              transition_in(if_block0);
              add_render_callback(() => {
                if (div_outro) div_outro.end(1);
                div_intro = create_in_transition(
                  div,
                  /*mediaTransition*/
                  ctx[12],
                  true
                );
                div_intro.start();
              });
              transition_in(if_block1);
              current = true;
            },
            o(local) {
              transition_out(if_block0);
              if (div_intro) div_intro.invalidate();
              div_outro = create_out_transition(
                div,
                /*mediaTransition*/
                ctx[12],
                false
              );
              transition_out(if_block1);
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div);
              if_blocks[current_block_type_index].d();
              if (detaching && div_outro) div_outro.end();
              if (if_block1) if_block1.d(detaching);
              if (detaching) detach(if_block1_anchor);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_if_block_1(ctx) {
          let div;
          let raw_value = `${/*position*/
          ctx[4] + 1} / ${/*items*/
          ctx[0].length}`;
          let button0;
          let button1;
          let mounted;
          let dispose;
          return {
            c() {
              div = element("div");
              button0 = element("button");
              button1 = element("button");
              attr(div, "class", "bp-count");
              attr(button0, "class", "bp-prev");
              attr(button0, "title", "Previous");
              attr(button0, "aria-label", "Previous");
              attr(button1, "class", "bp-next");
              attr(button1, "title", "Next");
              attr(button1, "aria-label", "Next");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
              insert(target, button0, anchor);
              insert(target, button1, anchor);
              if (!mounted) {
                dispose = [
                  listen(
                    button0,
                    "click",
                    /*prev*/
                    ctx[2]
                  ),
                  listen(
                    button1,
                    "click",
                    /*next*/
                    ctx[3]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*position, items*/
              17 && raw_value !== (raw_value = `${/*position*/
              ctx2[4] + 1} / ${/*items*/
              ctx2[0].length}`)) div.innerHTML = raw_value;
            },
            d(detaching) {
              if (detaching) detach(div);
              if (detaching) detach(button0);
              if (detaching) detach(button1);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_fragment(ctx) {
          let if_block_anchor;
          let current;
          let if_block = (
            /*items*/
            ctx[0] && create_if_block(ctx)
          );
          return {
            c() {
              if (if_block) if_block.c();
              if_block_anchor = empty();
            },
            m(target, anchor) {
              if (if_block) if_block.m(target, anchor);
              insert(target, if_block_anchor, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              if (
                /*items*/
                ctx2[0]
              ) {
                if (if_block) {
                  if_block.p(ctx2, dirty);
                  if (dirty[0] & /*items*/
                  1) {
                    transition_in(if_block, 1);
                  }
                } else {
                  if_block = create_if_block(ctx2);
                  if_block.c();
                  transition_in(if_block, 1);
                  if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
              } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, () => {
                  if_block = null;
                });
                check_outros();
              }
            },
            i(local) {
              if (current) return;
              transition_in(if_block);
              current = true;
            },
            o(local) {
              transition_out(if_block);
              current = false;
            },
            d(detaching) {
              if (if_block) if_block.d(detaching);
              if (detaching) detach(if_block_anchor);
            }
          };
        }
        function instance($$self, $$props, $$invalidate) {
          let $zoomed;
          let { items = void 0 } = $$props;
          let { target = void 0 } = $$props;
          const html = document.documentElement;
          let position;
          let opts;
          let isOpen;
          let focusTrigger;
          let smallScreen;
          let inline;
          let movement;
          let clickedEl;
          let activeItem;
          const activeItemIsHtml = () => !activeItem.img && !activeItem.sources && !activeItem.iframe;
          let resizeFunc;
          const setResizeFunc = (fn) => resizeFunc = fn;
          const container = {};
          const zoomed = writable(0);
          component_subscribe($$self, zoomed, (value) => $$invalidate(10, $zoomed = value));
          const open = (options) => {
            $$invalidate(5, opts = options);
            $$invalidate(8, inline = opts.inline);
            if (!inline && html.scrollHeight > html.clientHeight) {
              html.classList.add("bp-lock");
            }
            focusTrigger = document.activeElement;
            $$invalidate(19, container.w = target.offsetWidth, container);
            $$invalidate(
              19,
              container.h = target === document.body ? globalThis.innerHeight : target.clientHeight,
              container
            );
            $$invalidate(7, smallScreen = container.w < 769);
            $$invalidate(4, position = opts.position || 0);
            $$invalidate(0, items = []);
            for (let i = 0; i < (opts.items.length || 1); i++) {
              let item = opts.items[i] || opts.items;
              if ("dataset" in item) {
                items.push({ element: item, i, ...item.dataset });
              } else {
                item.i = i;
                items.push(item);
                item = item.element;
              }
              if (opts.el && opts.el === item) {
                $$invalidate(4, position = i);
              }
            }
          };
          const close = () => {
            opts.onClose?.(container.el, activeItem);
            closing.set(true);
            $$invalidate(0, items = null);
            focusTrigger?.focus({ preventScroll: true });
          };
          const prev = () => setPosition(position - 1);
          const next = () => setPosition(position + 1);
          const setPosition = (index) => {
            movement = index - position;
            $$invalidate(4, position = getNextPosition(index));
          };
          const getNextPosition = (index) => (index + items.length) % items.length;
          const onKeydown = (e) => {
            const { key, shiftKey } = e;
            if (key === "Escape") {
              !opts.noClose && close();
            } else if (key === "ArrowRight") {
              next();
            } else if (key === "ArrowLeft") {
              prev();
            } else if (key === "Tab") {
              const { activeElement } = document;
              if (shiftKey || !activeElement.controls) {
                e.preventDefault();
                const { focusWrap = container.el } = opts;
                const tabbable = [...focusWrap.querySelectorAll("*")].filter((node) => node.tabIndex >= 0);
                let index = tabbable.indexOf(activeElement);
                index += tabbable.length + (shiftKey ? -1 : 1);
                tabbable[index % tabbable.length].focus();
              }
            }
          };
          const calculateDimensions = ({ width = 1920, height = 1080 }) => {
            const { scale = 0.99 } = opts;
            const ratio = Math.min(1, container.w / width * scale, container.h / height * scale);
            return [Math.round(width * ratio), Math.round(height * ratio)];
          };
          const preloadNext = () => {
            if (items) {
              const nextItem = items[getNextPosition(position + 1)];
              const prevItem = items[getNextPosition(position - 1)];
              !nextItem.preload && loadImage(nextItem);
              !prevItem.preload && loadImage(prevItem);
            }
          };
          const loadImage = (item) => {
            if (item.img) {
              const image = document.createElement("img");
              image.sizes = opts.sizes || `${calculateDimensions(item)[0]}px`;
              image.srcset = item.img;
              item.preload = true;
              return image.decode().catch((error) => {
              });
            }
          };
          const mediaTransition = (node, isEntering) => {
            if (!isOpen || !items) {
              $$invalidate(18, isOpen = isEntering);
              return opts.intro ? fly(node, { y: isEntering ? 10 : -10 }) : scaleIn(node);
            }
            return fly(node, {
              x: (movement > 0 ? 20 : -20) * (isEntering ? 1 : -1),
              duration: 250
            });
          };
          const scaleIn = (node) => {
            let dimensions;
            if (activeItemIsHtml()) {
              const bpItem = node.firstChild.firstChild;
              dimensions = [bpItem.clientWidth, bpItem.clientHeight];
            } else {
              dimensions = calculateDimensions(activeItem);
            }
            const rect = (activeItem.element || focusTrigger).getBoundingClientRect();
            const leftOffset = rect.left - (container.w - rect.width) / 2;
            const centerTop = rect.top - (container.h - rect.height) / 2;
            const scaleWidth = rect.width / dimensions[0];
            const scaleHeight = rect.height / dimensions[1];
            return {
              duration: 480,
              easing: cubicOut,
              css: (t, u) => {
                return `transform:translate3d(${leftOffset * u}px, ${centerTop * u}px, 0) scale3d(${scaleWidth + t * (1 - scaleWidth)}, ${scaleHeight + t * (1 - scaleHeight)}, 1)`;
              }
            };
          };
          const getChildProps = () => ({
            activeItem,
            calculateDimensions,
            loadImage,
            preloadNext,
            opts,
            prev,
            next,
            close,
            setResizeFunc,
            zoomed,
            container
          });
          const containerActions = (node) => {
            $$invalidate(19, container.el = node, container);
            let roActive;
            opts.onOpen?.(container.el, activeItem);
            if (!inline) {
              globalThis.addEventListener("keydown", onKeydown);
            }
            const ro = new ResizeObserver((entries) => {
              if (roActive) {
                $$invalidate(19, container.w = entries[0].contentRect.width, container);
                $$invalidate(19, container.h = entries[0].contentRect.height, container);
                $$invalidate(7, smallScreen = container.w < 769);
                if (!activeItemIsHtml()) {
                  resizeFunc?.();
                }
                opts.onResize?.(container.el, activeItem);
              }
              roActive = true;
            });
            ro.observe(node);
            return {
              destroy() {
                ro.disconnect();
                globalThis.removeEventListener("keydown", onKeydown);
                closing.set(false);
                html.classList.remove("bp-lock");
                opts.onClosed?.();
              }
            };
          };
          const pointerdown_handler = (e) => $$invalidate(9, clickedEl = e.target);
          const pointerup_handler = function(e) {
            if (e.button !== 2 && e.target === this && clickedEl === this) {
              !opts.noClose && close();
            }
          };
          $$self.$$set = ($$props2) => {
            if ("items" in $$props2) $$invalidate(0, items = $$props2.items);
            if ("target" in $$props2) $$invalidate(15, target = $$props2.target);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*items, position, isOpen, opts, container, activeItem*/
            786545) {
              if (items) {
                $$invalidate(6, activeItem = items[position]);
                if (isOpen) {
                  opts.onUpdate?.(container.el, activeItem);
                }
              }
            }
          };
          return [
            items,
            close,
            prev,
            next,
            position,
            opts,
            activeItem,
            smallScreen,
            inline,
            clickedEl,
            $zoomed,
            zoomed,
            mediaTransition,
            getChildProps,
            containerActions,
            target,
            open,
            setPosition,
            isOpen,
            container,
            pointerdown_handler,
            pointerup_handler
          ];
        }
        class Bigger_picture extends SvelteComponent {
          constructor(options) {
            super();
            init(
              this,
              options,
              instance,
              create_fragment,
              not_equal,
              {
                items: 0,
                target: 15,
                open: 16,
                close: 1,
                prev: 2,
                next: 3,
                setPosition: 17
              },
              null,
              [-1, -1]
            );
          }
          get items() {
            return this.$$.ctx[0];
          }
          get target() {
            return this.$$.ctx[15];
          }
          get open() {
            return this.$$.ctx[16];
          }
          get close() {
            return this.$$.ctx[1];
          }
          get prev() {
            return this.$$.ctx[2];
          }
          get next() {
            return this.$$.ctx[3];
          }
          get setPosition() {
            return this.$$.ctx[17];
          }
        }
        function biggerPicture(options) {
          return new Bigger_picture({
            ...options,
            props: options
          });
        }
        return biggerPicture;
      });
    }
  });

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/base@v0.6.1/assets/hb/modules/base/js/responsive-table.ts
  (() => {
    "use strict";
    document.querySelectorAll("table").forEach((table) => {
      const wrapper = document.createElement("div");
      wrapper.className = "table-responsive";
      wrapper.appendChild(table.cloneNode(true));
      table.parentNode?.replaceChild(wrapper, table);
    });
  })();

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dropdown.js
  var Popper = __toESM(require_popper());

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/data.js
  var elementMap = /* @__PURE__ */ new Map();
  var data_default = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/index.js
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/event-handler.js
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
  ]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, { delegateTarget: element });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let { target } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, { delegateTarget: target });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn2) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn2.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, { bubbles, cancelable: true }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  var event_handler_default = EventHandler;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/manipulator.js
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var manipulator_default = Manipulator;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/config.js
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? manipulator_default.getDataAttribute(element, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof jsonConfig === "object" ? jsonConfig : {},
        ...isElement(element) ? manipulator_default.getDataAttributes(element) : {},
        ...typeof config === "object" ? config : {}
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
          );
        }
      }
    }
  };
  var config_default = Config;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/base-component.js
  var VERSION = "5.3.3";
  var BaseComponent = class extends config_default {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      data_default.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      data_default.remove(this._element, this.constructor.DATA_KEY);
      event_handler_default.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return data_default.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var base_component_default = BaseComponent;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/selector-engine.js
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]'
      ].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var selector_engine_default = SelectorEngine;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dropdown.js
  var NAME = "dropdown";
  var DATA_KEY = "bs.dropdown";
  var EVENT_KEY = `.${DATA_KEY}`;
  var DATA_API_KEY = ".data-api";
  var ESCAPE_KEY = "Escape";
  var TAB_KEY = "Tab";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = selector_engine_default.next(this._element, SELECTOR_MENU)[0] || selector_engine_default.prev(this._element, SELECTOR_MENU)[0] || selector_engine_default.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW);
      this._element.classList.add(CLASS_NAME_SHOW);
      event_handler_default.trigger(this._element, EVENT_SHOWN, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW);
      this._element.classList.remove(CLASS_NAME_SHOW);
      this._element.setAttribute("aria-expanded", "false");
      manipulator_default.removeDataAttribute(this._menu, "popper");
      event_handler_default.trigger(this._element, EVENT_HIDDEN, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const { offset } = this._config;
      if (typeof offset === "string") {
        return offset.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset === "function") {
        return (popperData) => offset(popperData, this._element);
      }
      return offset;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }
        ]
      };
      if (this._inNavbar || this._config.display === "static") {
        manipulator_default.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _selectMenuItem({ key, target }) {
      const items = selector_engine_default.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY) {
        return;
      }
      const openToggles = selector_engine_default.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = { relatedTarget: context._element };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY;
      const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ? this : selector_engine_default.prev(this, SELECTOR_DATA_TOGGLE)[0] || selector_engine_default.next(this, SELECTOR_DATA_TOGGLE)[0] || selector_engine_default.findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/backdrop.js
  var NAME2 = "backdrop";
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_SHOW2 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME2}`;
  var Default2 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType2 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default2;
    }
    static get DefaultType() {
      return DefaultType2;
    }
    static get NAME() {
      return NAME2;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW2);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW2);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      event_handler_default.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      event_handler_default.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var backdrop_default = Backdrop;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/component-functions.js
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    event_handler_default.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = selector_engine_default.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/focustrap.js
  var NAME3 = "focustrap";
  var DATA_KEY2 = "bs.focustrap";
  var EVENT_KEY2 = `.${DATA_KEY2}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY2}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY2}`;
  var TAB_KEY2 = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default3 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType3 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default3;
    }
    static get DefaultType() {
      return DefaultType3;
    }
    static get NAME() {
      return NAME3;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      event_handler_default.off(document, EVENT_KEY2);
      event_handler_default.on(document, EVENT_FOCUSIN, (event) => this._handleFocusin(event));
      event_handler_default.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      event_handler_default.off(document, EVENT_KEY2);
    }
    // Private
    _handleFocusin(event) {
      const { trapElement } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = selector_engine_default.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY2) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var focustrap_default = FocusTrap;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/scrollbar.js
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        manipulator_default.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = manipulator_default.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        manipulator_default.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of selector_engine_default.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var scrollbar_default = ScrollBarHelper;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/offcanvas.js
  var NAME4 = "offcanvas";
  var DATA_KEY3 = "bs.offcanvas";
  var EVENT_KEY3 = `.${DATA_KEY3}`;
  var DATA_API_KEY2 = ".data-api";
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY3}${DATA_API_KEY2}`;
  var ESCAPE_KEY2 = "Escape";
  var CLASS_NAME_SHOW3 = "show";
  var CLASS_NAME_SHOWING = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW2 = `show${EVENT_KEY3}`;
  var EVENT_SHOWN2 = `shown${EVENT_KEY3}`;
  var EVENT_HIDE2 = `hide${EVENT_KEY3}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY3}`;
  var EVENT_HIDDEN2 = `hidden${EVENT_KEY3}`;
  var EVENT_RESIZE = `resize${EVENT_KEY3}`;
  var EVENT_CLICK_DATA_API2 = `click${EVENT_KEY3}${DATA_API_KEY2}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY3}`;
  var SELECTOR_DATA_TOGGLE2 = '[data-bs-toggle="offcanvas"]';
  var Default4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType4 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default4;
    }
    static get DefaultType() {
      return DefaultType4;
    }
    static get NAME() {
      return NAME4;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW2, { relatedTarget });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new scrollbar_default().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW3);
        this._element.classList.remove(CLASS_NAME_SHOWING);
        event_handler_default.trigger(this._element, EVENT_SHOWN2, { relatedTarget });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE2);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new scrollbar_default().reset();
        }
        event_handler_default.trigger(this._element, EVENT_HIDDEN2);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new backdrop_default({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new focustrap_default({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      event_handler_default.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY2) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API2, SELECTOR_DATA_TOGGLE2, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    event_handler_default.one(target, EVENT_HIDDEN2, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = selector_engine_default.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const selector of selector_engine_default.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  event_handler_default.on(window, EVENT_RESIZE, () => {
    for (const element of selector_engine_default.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/header@v0.14.6/assets/hb/modules/header/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const header2 = document.querySelector(".hb-header");
      const nav = header2.querySelector(".hb-header-nav");
      if (!header2) {
        return;
      }
      const activeMenu = (menu) => {
        menu.classList.add("active");
        menu.setAttribute("aria-current", "page");
        menu.parentElement?.classList.add("active");
        const parent = menu.closest(".hb-header-menu");
        parent?.classList.add("active");
        parent?.querySelector(".nav-link:first-child")?.classList.add("active");
      };
      const isMenuParent = (parent) => {
        const href = parent.getAttribute("href") ?? "";
        return window.location.href.indexOf(href) !== -1 || window.location.pathname.indexOf(href) !== -1;
      };
      const menus = nav.querySelectorAll(`a[href="${window.location.href}"], a[href="${window.location.pathname}"]`);
      if (menus.length > 0) {
        menus.forEach((menu) => {
          activeMenu(menu);
        });
      } else {
        let foundParent = false;
        const submenus = Array.from(document.querySelectorAll("a.hb-header-submenu"));
        for (let menu of submenus) {
          if (isMenuParent(menu)) {
            activeMenu(menu);
            foundParent = true;
            break;
          }
        }
        if (!foundParent) {
          for (let menu of Array.from(nav.querySelectorAll("a.nav-link"))) {
            if (isMenuParent(menu)) {
              activeMenu(menu);
              break;
            }
          }
        }
      }
      const shadow = () => {
        nav.classList.add("shadow-sm");
      };
      const removeShadow = () => {
        nav.classList.contains("shadow-sm") && nav.classList.remove("shadow-sm");
      };
      const show = () => {
        nav.style.removeProperty("opacity");
        nav.style.removeProperty("z-index");
      };
      const hide = () => {
        nav.style.opacity = "0";
        nav.style.zIndex = "0";
      };
      let h = 0;
      const threshold = 20;
      if (document.documentElement.scrollTop !== 0) {
        header2.classList.add("scrolling");
      }
      const isMobile = () => {
        return window.innerWidth < 576;
      };
      window.addEventListener("resize", () => {
        if (!isMobile()) {
          show();
        }
      });
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop === 0) {
          header2.classList.remove("scrolling");
          removeShadow();
        } else {
          header2.classList.add("scrolling");
          shadow();
        }
        if (isMobile() && Math.abs(document.documentElement.scrollTop - h) > threshold) {
          document.documentElement.scrollTop > h ? hide() : show();
          h = document.documentElement.scrollTop;
        }
      });
    });
  })();

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/swipe.js
  var NAME5 = "swipe";
  var EVENT_KEY4 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY4}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY4}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY4}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY4}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY4}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default5 = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType5 = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends config_default {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default5;
    }
    static get DefaultType() {
      return DefaultType5;
    }
    static get NAME() {
      return NAME5;
    }
    // Public
    dispose() {
      event_handler_default.off(this._element, EVENT_KEY4);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        event_handler_default.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        event_handler_default.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        event_handler_default.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var swipe_default = Swipe;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/carousel.js
  var NAME6 = "carousel";
  var DATA_KEY4 = "bs.carousel";
  var EVENT_KEY5 = `.${DATA_KEY4}`;
  var DATA_API_KEY3 = ".data-api";
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY5}`;
  var EVENT_SLID = `slid${EVENT_KEY5}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY5}`;
  var EVENT_MOUSEENTER = `mouseenter${EVENT_KEY5}`;
  var EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY5}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY5}`;
  var EVENT_LOAD_DATA_API2 = `load${EVENT_KEY5}${DATA_API_KEY3}`;
  var EVENT_CLICK_DATA_API3 = `click${EVENT_KEY5}${DATA_API_KEY3}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  var Default6 = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType6 = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = selector_engine_default.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default6;
    }
    static get DefaultType() {
      return DefaultType6;
    }
    static get NAME() {
      return NAME6;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        event_handler_default.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        event_handler_default.on(this._element, EVENT_MOUSEENTER, () => this.pause());
        event_handler_default.on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle());
      }
      if (this._config.touch && swipe_default.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of selector_engine_default.find(SELECTOR_ITEM_IMG, this._element)) {
        event_handler_default.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new swipe_default(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = selector_engine_default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = selector_engine_default.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return event_handler_default.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE);
        activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return selector_engine_default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return selector_engine_default.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API3, SELECTOR_DATA_SLIDE, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (manipulator_default.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API2, () => {
    const carousels = selector_engine_default.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var carousel_default = Carousel;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/carousel@v0.2.7/assets/hb/modules/carousel/js/index.ts
  (() => {
    document.querySelectorAll(".carousel").forEach((el) => {
      new carousel_default(el);
    });
  })();

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/slide@v0.4.0/assets/hb/modules/slide/js/index.ts
  (() => {
    "use strict";
    let scrolling = false;
    const scroll = (element, dir) => {
      if (scrolling) {
        return;
      }
      scrolling = true;
      const inner = element.parentElement?.querySelector(".slide-inner");
      const step = inner.offsetWidth;
      let left = 0;
      if (dir === "left") {
        left = inner.scrollLeft - step;
      } else {
        left = Math.min(inner.scrollWidth - inner.clientWidth, inner.scrollLeft + step);
      }
      if (left <= 0) {
        scrolling = false;
        return;
      }
      inner.scroll({
        left
      });
      const checker = setInterval(() => {
        if (left === inner.scrollLeft) {
          scrolling = false;
          clearInterval(checker);
        }
      }, 50);
    };
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".slide-control-left").forEach((element) => {
        element.addEventListener("click", () => {
          scroll(element, "left");
        });
      });
      document.querySelectorAll(".slide-control-right").forEach((element) => {
        element.addEventListener("click", () => {
          scroll(element, "right");
        });
      });
      const els = document.querySelectorAll(".slide-inner");
      els.forEach((el) => {
        let startX = 0;
        el.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX;
        }, { passive: true });
        el.addEventListener("touchend", (e) => {
          scroll(el, e.changedTouches[0].clientX > startX ? "left" : "right");
        }, { passive: true });
      });
    });
  })();

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/giscus@v0.1.1/assets/mods/giscus/js/index.ts
  var Giscus = class {
    setTheme(theme) {
      const frames = document.querySelectorAll(
        "iframe.giscus-frame"
      );
      frames.forEach((frame) => {
        if (!frame.contentWindow) {
          return;
        }
        const endpoint = new URL(frame.src).origin;
        frame.contentWindow.postMessage(
          {
            giscus: {
              setConfig: {
                theme: `${endpoint}/themes/${theme}.css`
              }
            }
          },
          endpoint
        );
      });
    }
  };
  var js_default = Giscus;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/giscus@v0.1.1/assets/hb/modules/giscus/js/index.ts
  (() => {
    "use strict";
    const giscus = new js_default();
    const setTheme = (theme = "") => {
      if (theme === "") {
        const saved = localStorage.getItem("hb-theme");
        theme = !saved || saved === "auto" ? getPreferredTheme() : saved;
      }
      giscus.setTheme(theme);
    };
    const getPreferredTheme = () => {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    document.addEventListener("DOMContentLoaded", () => {
      document.body.addEventListener("giscus-load", () => {
        const frame = document.querySelector("iframe.giscus-frame.giscus-frame--loading");
        frame?.addEventListener("load", () => {
          setTheme();
        });
      });
      setTimeout(() => {
        setTheme();
      }, 2e3);
      document.addEventListener("hb:theme", (e) => {
        setTheme(e.detail.theme);
      });
    });
  })();

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/scrollspy.js
  var NAME7 = "scrollspy";
  var DATA_KEY5 = "bs.scrollspy";
  var EVENT_KEY6 = `.${DATA_KEY5}`;
  var DATA_API_KEY4 = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY6}`;
  var EVENT_CLICK = `click${EVENT_KEY6}`;
  var EVENT_LOAD_DATA_API3 = `load${EVENT_KEY6}${DATA_API_KEY4}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE2 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var Default7 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType7 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default7;
    }
    static get DefaultType() {
      return DefaultType7;
    }
    static get NAME() {
      return NAME7;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      event_handler_default.off(this._config.target, EVENT_CLICK);
      event_handler_default.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({ top: height, behavior: "smooth" });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = selector_engine_default.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = selector_engine_default.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE2);
      this._activateParents(target);
      event_handler_default.trigger(this._element, EVENT_ACTIVATE, { relatedTarget: target });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        selector_engine_default.findOne(SELECTOR_DROPDOWN_TOGGLE, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE2);
        return;
      }
      for (const listGroup of selector_engine_default.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of selector_engine_default.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE2);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE2);
      const activeNodes = selector_engine_default.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE2}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE2);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  event_handler_default.on(window, EVENT_LOAD_DATA_API3, () => {
    for (const spy of selector_engine_default.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/collapse.js
  var NAME8 = "collapse";
  var DATA_KEY6 = "bs.collapse";
  var EVENT_KEY7 = `.${DATA_KEY6}`;
  var DATA_API_KEY5 = ".data-api";
  var EVENT_SHOW3 = `show${EVENT_KEY7}`;
  var EVENT_SHOWN3 = `shown${EVENT_KEY7}`;
  var EVENT_HIDE3 = `hide${EVENT_KEY7}`;
  var EVENT_HIDDEN3 = `hidden${EVENT_KEY7}`;
  var EVENT_CLICK_DATA_API4 = `click${EVENT_KEY7}${DATA_API_KEY5}`;
  var CLASS_NAME_SHOW4 = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE3 = '[data-bs-toggle="collapse"]';
  var Default8 = {
    parent: null,
    toggle: true
  };
  var DefaultType8 = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = selector_engine_default.find(SELECTOR_DATA_TOGGLE3);
      for (const elem of toggleList) {
        const selector = selector_engine_default.getSelectorFromElement(elem);
        const filterElement = selector_engine_default.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default8;
    }
    static get DefaultType() {
      return DefaultType8;
    }
    static get NAME() {
      return NAME8;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, { toggle: false }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_SHOW3);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW4);
        this._element.style[dimension] = "";
        event_handler_default.trigger(this._element, EVENT_SHOWN3);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_HIDE3);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW4);
      for (const trigger of this._triggerArray) {
        const element = selector_engine_default.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        event_handler_default.trigger(this._element, EVENT_HIDDEN3);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW4);
    }
    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE3);
      for (const element of children) {
        const selected = selector_engine_default.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = selector_engine_default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return selector_engine_default.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API4, SELECTOR_DATA_TOGGLE3, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of selector_engine_default.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, { toggle: false }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/docs@v0.18.0/assets/hb/modules/docs/js/nav.ts
  (() => {
    const activeParent = (child) => {
      const parent = child.parentElement?.closest(".hb-docs-nav-links-group");
      if (parent == null) {
        return;
      }
      parent.querySelector(".collapse")?.classList.add("show");
      const heading = parent.querySelector(".hb-docs-nav-heading");
      heading.classList.add("active");
      heading.querySelector(".hb-docs-nav-item-toggle")?.setAttribute("aria-expanded", "true");
      activeParent(parent);
    };
    const active = (link2) => {
      link2.classList.add("active");
      activeParent(link2);
    };
    const link = document.querySelector(`.hb-docs-nav-links a[href="${location.pathname}"]`);
    if (link == null) {
      return;
    }
    active(link);
  })();

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/docs@v0.18.0/assets/hb/modules/docs/js/nav-toggle.ts
  (() => {
    const toggle = document.querySelector(".hb-docs-nav-toggle");
    const docs2 = document.querySelector(".hb-docs");
    if (!toggle || !docs2) {
      return;
    }
    const className = "sidebar-off";
    toggle.addEventListener("click", () => {
      if (docs2.classList.contains(className)) {
        docs2.classList.remove(className);
      } else {
        docs2.classList.add(className);
      }
    });
  })();

  // ns-params:@params
  var params_exports = {};
  __export(params_exports, {
    back_to_top: () => back_to_top,
    bigger_picture: () => bigger_picture,
    blog: () => blog,
    breadcrumb: () => breadcrumb,
    color: () => color,
    content_panel: () => content_panel,
    css_bundle_name: () => css_bundle_name,
    default: () => params_default,
    docs: () => docs,
    featured_image: () => featured_image,
    footer: () => footer,
    full_width: () => full_width,
    full_width_types: () => full_width_types,
    google_fonts: () => google_fonts,
    header: () => header,
    heading_sign: () => heading_sign,
    js_bundle_name: () => js_bundle_name,
    logo: () => logo,
    modules: () => modules,
    pagination: () => pagination,
    progress_bar: () => progress_bar,
    scrollbar: () => scrollbar,
    search: () => search,
    styles: () => styles,
    terms: () => terms,
    theme_cards: () => theme_cards
  });
  var back_to_top = { animation: true, icon_height: "2em", icon_name: "rocket", icon_width: "2em", position_bottom: "1rem", position_end: "1rem" };
  var bigger_picture = { play_interval: 5e3, scale: 2 };
  var blog = { archives: { paginate: 30 }, full_width: false, giscus: { category_id: "DIC_kwDOK1LmSc4CbdiM", repo: "hbstack/theme-cards", repo_id: "R_kgDOK1LmSQ" }, home: { featured_posts: 5, main_sections: ["docs", "blog", "news"], pinned_posts_position: "list" }, list_cols_lg: 3, list_cols_md: 2, list_style: "", paginate: 12, post_date_format: ":date_long", post_thumbnail: true, post_thumbnail_default: "images/thumbnail.png", post_thumbnail_height: "160px", post_thumbnail_placeholder: "HB THEME", post_thumbnail_position: "top", post_thumbnail_resize_height: 360, related_posts: { number: 10 }, sidebar: { max_width: "320px", position: "start", posts: { featured_count: 5, fill: true, list_style: "slide", recent_count: 5, style: "pills" }, profile: { avatar: "/images/logo.png", avatar_size: 100, company: "COMPANY", description: "", location: "Earth", socials: { github: "hbstack", mastodon: "https://techhub.social/@hbstack", rss: true }, title: "" }, sticky: true, taxonomies: { authors: { count: false, disable: false, limit: 5, weight: 1 }, categories: { disable: false, weight: 3 }, count: true, limit: 10, separate: false, series: { disable: false, weight: 2 }, style: "pills", tags: { disable: false, limit: 20, weight: 4 } }, width: 0.35 }, social_share_buttons: { alignment: "center", media: ["twitter", "facebook", "linkedin", "sinaweibo"] }, toc: { position: "end" } };
  var breadcrumb = { disabled: false };
  var color = "light";
  var content_panel = { bottom: "20px", comments: true, repo: { branch: "main", repo: "hbstack/theme-cards", service: "github", subpath: "exampleSite" } };
  var css_bundle_name = "hb";
  var docs = { date_format: ":date_long", giscus: { category_id: "DIC_kwDOK1LmSc4CbdiM", repo: "hbstack/theme-cards", repo_id: "R_kgDOK1LmSQ" }, social_share_buttons: { alignment: "center", media: ["twitter", "facebook", "linkedin"] } };
  var featured_image = { size: "x640" };
  var footer = { socials: { _color: true, github: "hbstack", mastodon: "https://techhub.social/@hbstack", rss: true, twitter: "razonyang" } };
  var full_width = false;
  var full_width_types = { docs: { enable: true } };
  var google_fonts = { display: "swap" };
  var header = { brand: "HB", breakpoint: "lg", full_width: true, logo_bg: "#712cf9", socials: { github: "hbstack", mastodon: "https://techhub.social/@hbstack", rss: true }, sticky: true, theme_toggle: { style: "switch" } };
  var heading_sign = { containers: { ".hb-blog-post-content": {}, ".hb-docs-doc-content": {} }, symbol: "\xA7" };
  var js_bundle_name = "hb";
  var logo = "/images/logo.png";
  var modules = { "code-block-panel": { js_resources: [{ partial: "code-block-panel/assets/js-resource" }] } };
  var pagination = { alignment: "center", siblings: 2, size: "" };
  var progress_bar = { height: "2px", initial_width: 20, interval: 50, time: 2 };
  var scrollbar = { corner_bg: "#909294", height: "12px", thumb_bg: "#909294", track_bg: "#f8f9fa", width: "12px" };
  var search = { modal: true };
  var styles = { hb_top_offset: "24px", prefix: "hb-" };
  var terms = { list_style: "", paginate: 12, profile: true, profile_metrics: true };
  var theme_cards = {};
  var params_default = { back_to_top, bigger_picture, blog, breadcrumb, color, content_panel, css_bundle_name, docs, featured_image, footer, full_width, full_width_types, google_fonts, header, heading_sign, js_bundle_name, logo, modules, pagination, progress_bar, scrollbar, search, styles, terms, theme_cards };

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/heading-sign@v0.2.0/assets/hb/modules/heading-sign/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const containers = params_exports?.heading_sign?.containers;
      if (!containers) {
        return;
      }
      const symbol = params_exports?.heading_sign?.symbol ?? "\xA7";
      for (const selector in containers) {
        const container = document.querySelector(selector);
        if (!container) {
          continue;
        }
        container.querySelectorAll("h2, h3, h4, h5, h6").forEach((heading) => {
          const id = heading.getAttribute("id");
          if (!id) {
            return;
          }
          const anchor = document.createElement("a");
          anchor.className = "anchor ms-1";
          anchor.href = `#${id}`;
          anchor.innerText = symbol;
          heading.appendChild(anchor);
        });
      }
    });
  })();

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/tab.js
  var NAME9 = "tab";
  var DATA_KEY7 = "bs.tab";
  var EVENT_KEY8 = `.${DATA_KEY7}`;
  var EVENT_HIDE4 = `hide${EVENT_KEY8}`;
  var EVENT_HIDDEN4 = `hidden${EVENT_KEY8}`;
  var EVENT_SHOW4 = `show${EVENT_KEY8}`;
  var EVENT_SHOWN4 = `shown${EVENT_KEY8}`;
  var EVENT_CLICK_DATA_API5 = `click${EVENT_KEY8}`;
  var EVENT_KEYDOWN2 = `keydown${EVENT_KEY8}`;
  var EVENT_LOAD_DATA_API4 = `load${EVENT_KEY8}`;
  var ARROW_LEFT_KEY2 = "ArrowLeft";
  var ARROW_RIGHT_KEY2 = "ArrowRight";
  var ARROW_UP_KEY2 = "ArrowUp";
  var ARROW_DOWN_KEY2 = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE3 = "active";
  var CLASS_NAME_FADE2 = "fade";
  var CLASS_NAME_SHOW5 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE2 = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE2})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE4 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE4}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE3}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE3}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE3}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends base_component_default {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      event_handler_default.on(this._element, EVENT_KEYDOWN2, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME9;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? event_handler_default.trigger(active, EVENT_HIDE4, { relatedTarget: innerElem }) : null;
      const showEvent = event_handler_default.trigger(innerElem, EVENT_SHOW4, { relatedTarget: active });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE3);
      this._activate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW5);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        event_handler_default.trigger(element, EVENT_SHOWN4, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE2));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE3);
      element.blur();
      this._deactivate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW5);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        event_handler_default.trigger(element, EVENT_HIDDEN4, { relatedTarget: relatedElem });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE2));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY2, ARROW_RIGHT_KEY2, ARROW_UP_KEY2, ARROW_DOWN_KEY2, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY2, ARROW_DOWN_KEY2].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({ preventScroll: true });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return selector_engine_default.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = selector_engine_default.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = selector_engine_default.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE2, CLASS_NAME_ACTIVE3);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW5);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE3);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : selector_engine_default.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API5, SELECTOR_DATA_TOGGLE4, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API4, () => {
    for (const element of selector_engine_default.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.1/assets/hb/modules/progress-bar/js/progress.ts
  var Progress = class {
    ele;
    bar;
    width;
    interval;
    step;
    constructor() {
      this.width = params_exports?.progress_bar?.width ?? 20;
      this.interval = params_exports?.progress_bar?.interval ?? 50;
      const time = params_exports?.progress_bar?.time ?? 2;
      this.step = (100 - this.width) / time / 1e3 * this.interval;
      this.initBar();
      this.initProgress();
    }
    initProgress() {
      const progress = document.createElement("div");
      progress.className = "hb-progress progress position-fixed top-0 w-100 rounded-0 d-none";
      progress.role = "progressbar";
      progress.appendChild(this.bar);
      document.body.appendChild(progress);
      this.ele = progress;
    }
    initBar() {
      const bar = document.createElement("div");
      bar.className = "progress-bar progress-bar-striped progress-bar-animated";
      bar.style.width = this.width + "%";
      this.bar = bar;
    }
    timer = 0;
    show() {
      this.ele.classList.remove("d-none");
      this.timer = setInterval(() => {
        this.width += this.step;
        this.bar.style.width = `${this.width}%`;
      }, this.interval);
    }
    hide() {
      this.ele.classList.add("d-none");
      clearInterval(this.timer);
    }
  };

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.1/assets/hb/modules/progress-bar/js/index.ts
  (() => {
    const progress = new Progress();
    window.addEventListener("pagehide", () => {
      progress.hide();
    });
    window.addEventListener("beforeunload", () => {
      progress.show();
    });
  })();

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/back-to-top@v0.2.0/assets/hb/modules/back-to-top/js/button.ts
  var Button = class {
    btn;
    constructor(icon) {
      const btn = document.createElement("button");
      btn.className = "hb-back-to-top";
      btn.ariaLabel = "Back to top";
      btn.innerHTML = this.transformIcon(icon);
      document.body.appendChild(btn);
      this.btn = btn;
      let y = 0;
      window.addEventListener("scroll", () => {
        const top = document.documentElement.scrollTop;
        if (document.body.scrollTop > 20 || top > 20) {
          this.show();
        } else {
          this.hide();
        }
        if (this.animation() && top > y) {
          btn.classList.remove("scrolling");
        }
        y = top;
        this.updatePos();
      });
      this.btn.addEventListener("click", () => {
        this.animation() && btn.classList.add("scrolling");
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      });
    }
    transformIcon(icon) {
      return icon.replace(/<svg(.*)>((.|\n)*)<\/svg>/, `<svg$1>
  <defs><clipPath id="icon">$2</clipPath></defs>
  <rect x="0" y="0" fill="currentColor" width="100%" height="100%" clip-path="url(#icon)" />
  <rect x="0" y="100%" width="100%" height="100%" clip-path="url(#icon)" />
</svg>`);
    }
    posIcon;
    updatePos() {
      if (!this.posIcon) {
        this.posIcon = this.btn.querySelectorAll("rect")[1];
      }
      const pos = document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight);
      this.posIcon.setAttribute("y", (1 - pos) * 100 + "%");
    }
    show() {
      this.btn.classList.add("show");
    }
    hide() {
      this.btn.classList.remove("show");
    }
    animation() {
      return params_exports?.back_to_top?.animation !== false;
    }
  };

  // <stdin>
  var import_bigger_picture_umd = __toESM(require_bigger_picture_umd());

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/bigger-picture@v0.10.1/assets/hb/modules/bigger-picture/js/panel.ts
  var Panel = class {
    constructor(bp, downloadIcon, shareIcon, rotateIcon, flipIcon, playIcon) {
      this.bp = bp;
      this.downloadIcon = downloadIcon;
      this.shareIcon = shareIcon;
      this.rotateIcon = rotateIcon;
      this.flipIcon = flipIcon;
      this.playIcon = playIcon;
    }
    init(container) {
      const p = document.createElement("div");
      p.classList.add("bp-panel", "d-flex", "position-absolute", "mx-auto", "start-0", "end-0", "text-center");
      p.appendChild(this.rotate(false));
      p.appendChild(this.rotate(true));
      p.appendChild(this.flip());
      p.appendChild(this.play());
      p.appendChild(this.download());
      p.appendChild(this.share());
      container.appendChild(p);
    }
    update(container, item) {
      const p = container.querySelector(".bp-panel");
      const d = p.querySelector(".bp-panel-download");
      d.href = item.img;
      d.download = item.alt;
    }
    imgWrap = () => {
      return document.querySelector(".bp-img-wrap");
    };
    rotate = (clockwise = false) => {
      const a = document.createElement("a");
      a.title = "Rotate";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-rotate", clockwise ? "bp-panel-rotate-clockwise" : "bp-panel-rotate-anticlockwise", "text-decoration-none", "p-2");
      a.innerHTML = this.rotateIcon;
      a.addEventListener("click", () => {
        const wrap = this.imgWrap();
        let value = parseInt(wrap.getAttribute("data-rotate") ?? "0");
        value += clockwise ? 90 : -90;
        wrap.setAttribute("data-rotate", value.toString());
        this.transform(wrap);
      });
      return a;
    };
    flip = () => {
      const a = document.createElement("a");
      a.title = "Flip";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-flip", "text-decoration-none", "p-2");
      a.innerHTML = this.flipIcon;
      a.addEventListener("click", () => {
        const wrap = this.imgWrap();
        if (wrap.hasAttribute("data-flip")) {
          wrap.removeAttribute("data-flip");
        } else {
          wrap.setAttribute("data-flip", "true");
        }
        this.transform(wrap);
      });
      return a;
    };
    transform = (wrap) => {
      const transform = [];
      const rotate = wrap.getAttribute("data-rotate");
      if (rotate) {
        transform.push(`rotate(${parseInt(rotate)}deg)`);
      }
      const flip = wrap.getAttribute("data-flip");
      if (flip) {
        transform.push("scaleX(-1)");
      }
      wrap.style.transform = transform.join(" ");
    };
    playJob = 0;
    playInterval = 1e3;
    play = () => {
      const a = document.createElement("a");
      a.title = "Play";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-play", "text-decoration-none", "p-2");
      a.innerHTML = this.playIcon;
      a.addEventListener("click", () => {
        if (this.playJob) {
          clearInterval(this.playJob);
          this.playJob = 0;
          a.classList.remove("active");
          return;
        }
        a.classList.add("active");
        this.playJob = setInterval(() => {
          this.bp.next();
        }, params_default.bigger_picture.play_interval ?? 5e3);
      });
      return a;
    };
    download = () => {
      const a = document.createElement("a");
      a.title = "Download";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-download", "text-decoration-none", "p-2");
      a.setAttribute("download", "");
      a.innerHTML = this.downloadIcon;
      return a;
    };
    twitterShareLink = () => {
      return `https://twitter.com/intent/tweet?url=${this.shareLink()}`;
    };
    facebookShareLink = () => {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.shareLink()}`;
    };
    shareLink = () => {
      return encodeURIComponent(window.location.href);
    };
    share = () => {
      const el = document.createElement("div");
      el.classList.add("bp-panel-action", "dropdown-center", "bp-panel-share", "p-2");
      el.innerHTML = `<a class="text-white" href="#" role="button" title="Share" data-bs-toggle="dropdown" aria-expanded="false">${this.shareIcon}</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" target="_blank" href="${this.twitterShareLink()}">Twitter</a></li>
            <li><a class="dropdown-item" target="_blank" href="${this.facebookShareLink()}">Facebook</a></li>
          </ul>`;
      return el;
    };
  };

  // <stdin>
  (() => {
    "use strict";
    window.addEventListener("DOMContentLoaded", () => {
      const btn = new Button(`<svg aria-hidden="true" class="bi bi-rocket hi-svg-inline hb-back-to-top-icon" fill="currentColor" height="2em" viewBox="0 0 16 16" width="2em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8"/>
  <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.5 3.5 0 0 0-.463-.315A2 2 0 0 0 8.25.064.55.55 0 0 0 8 0a.55.55 0 0 0-.266.073 2 2 0 0 0-.142.08 4 4 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635s1.7-.207 2.4-.635q.1.044.196.083c.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562zM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935zM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199M8.009 1.073q.096.06.226.163c.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13s-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32q.136-.113.236-.18Z"/>
  <path d="M9.479 14.361c-.48.093-.98.139-1.479.139s-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0z"/>
</svg>`);
    });
  })();
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const bp = (0, import_bigger_picture_umd.default)({
        target: document.body
      });
      const panel = new Panel(bp, `<svg aria-hidden="true" class="bi bi-download hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-share hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-arrow-clockwise hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-phone-flip hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0zM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11q.148 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169s0 .065-.13.187c-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883s-.535-.411-.882-.571M7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-play-circle hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>`);
      const onOpen = (container) => {
        panel.init(container);
      };
      const onUpdate = (container, item) => {
        panel.update(container, item);
      };
      const show = (imgs, pos) => {
        bp.open({
          items: imgs,
          intro: "fadeup",
          position: pos,
          onOpen,
          onUpdate
        });
      };
      const scale = parseInt("2");
      const data = (img) => {
        const alt = img.getAttribute("alt");
        let caption = alt;
        const captionEle = img.parentNode.querySelector("figcaption");
        if (captionEle !== null) {
          caption = captionEle.innerText;
        }
        return {
          img: img.getAttribute("data-src") ?? img.src,
          height: scale * (img.getAttribute("data-height") ?? img.naturalHeight),
          width: scale * (img.getAttribute("data-width") ?? img.naturalWidth),
          alt: img.getAttribute("alt"),
          caption,
          thumb: img.src
        };
      };
      const images = document.querySelectorAll("img");
      for (const img of images) {
        if (img.closest("a")) {
          continue;
        }
        img.addEventListener("click", () => {
          const imgs = [];
          let pos = 0;
          const set = img.closest(".bigger-pictures");
          if (set) {
            const els = set.querySelectorAll("img");
            for (let i = 0; i < els.length; i++) {
              if (els[i] === img) {
                pos = i;
              }
              imgs.push(data(els[i]));
            }
          } else {
            imgs.push(data(img));
          }
          show(imgs, pos);
        });
      }
      const links = Array.from(document.querySelectorAll(".img-link"));
      for (const link of links) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          show([{
            img: link.getAttribute("href"),
            alt: link.innerText,
            caption: link.innerText
          }], 0);
        });
      }
    });
  })();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9nb2h1Z29pby9odWdvLW1vZC1qc2xpYnMtZGlzdC9wb3BwZXJqcy92MkB2Mi4yMTEwMC4yMDAwMC9wYWNrYWdlL2Rpc3QvY2pzL3BvcHBlci5qcyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hlbnJ5Z2QvYmlnZ2VyLXBpY3R1cmVAdjEuMS4xNy9kaXN0L2JpZ2dlci1waWN0dXJlLnVtZC5qcyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svYmFzZUB2MC42LjEvYXNzZXRzL2hiL21vZHVsZXMvYmFzZS9qcy9yZXNwb25zaXZlLXRhYmxlLnRzIiwgIm5zLWh1Z286L2hvbWUvc2NvdHQvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvZHJvcGRvd24uanMiLCAibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9kb20vZGF0YS5qcyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvaW5kZXguanMiLCAibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9kb20vZXZlbnQtaGFuZGxlci5qcyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2RvbS9tYW5pcHVsYXRvci5qcyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvY29uZmlnLmpzIiwgIm5zLWh1Z286L2hvbWUvc2NvdHQvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvYmFzZS1jb21wb25lbnQuanMiLCAibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwgIm5zLWh1Z286L2hvbWUvc2NvdHQvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvdXRpbC9iYWNrZHJvcC5qcyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvZm9jdXN0cmFwLmpzIiwgIm5zLWh1Z286L2hvbWUvc2NvdHQvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvdXRpbC9zY3JvbGxiYXIuanMiLCAibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9vZmZjYW52YXMuanMiLCAibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2hlYWRlckB2MC4xNC42L2Fzc2V0cy9oYi9tb2R1bGVzL2hlYWRlci9qcy9pbmRleC50cyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvc3dpcGUuanMiLCAibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9jYXJvdXNlbC5qcyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svY2Fyb3VzZWxAdjAuMi43L2Fzc2V0cy9oYi9tb2R1bGVzL2Nhcm91c2VsL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L2hvbWUvc2NvdHQvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9zbGlkZUB2MC40LjAvYXNzZXRzL2hiL21vZHVsZXMvc2xpZGUvanMvaW5kZXgudHMiLCAibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9odWdvbW9kcy9naXNjdXNAdjAuMS4xL2Fzc2V0cy9tb2RzL2dpc2N1cy9qcy9pbmRleC50cyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svZ2lzY3VzQHYwLjEuMS9hc3NldHMvaGIvbW9kdWxlcy9naXNjdXMvanMvaW5kZXgudHMiLCAibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9zY3JvbGxzcHkuanMiLCAibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9jb2xsYXBzZS5qcyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svZG9jc0B2MC4xOC4wL2Fzc2V0cy9oYi9tb2R1bGVzL2RvY3MvanMvbmF2LnRzIiwgIm5zLWh1Z286L2hvbWUvc2NvdHQvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9kb2NzQHYwLjE4LjAvYXNzZXRzL2hiL21vZHVsZXMvZG9jcy9qcy9uYXYtdG9nZ2xlLnRzIiwgIm5zLXBhcmFtczpAcGFyYW1zIiwgIm5zLWh1Z286L2hvbWUvc2NvdHQvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9oZWFkaW5nLXNpZ25AdjAuMi4wL2Fzc2V0cy9oYi9tb2R1bGVzL2hlYWRpbmctc2lnbi9qcy9pbmRleC50cyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3RhYi5qcyIsICJucy1odWdvOi9ob21lL3Njb3R0Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svcHJvZ3Jlc3MtYmFyQHYwLjEuMS9hc3NldHMvaGIvbW9kdWxlcy9wcm9ncmVzcy1iYXIvanMvcHJvZ3Jlc3MudHMiLCAibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL3Byb2dyZXNzLWJhckB2MC4xLjEvYXNzZXRzL2hiL21vZHVsZXMvcHJvZ3Jlc3MtYmFyL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L2hvbWUvc2NvdHQvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9iYWNrLXRvLXRvcEB2MC4yLjAvYXNzZXRzL2hiL21vZHVsZXMvYmFjay10by10b3AvanMvYnV0dG9uLnRzIiwgIjxzdGRpbj4iLCAibnMtaHVnbzovaG9tZS9zY290dC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2JpZ2dlci1waWN0dXJlQHYwLjEwLjEvYXNzZXRzL2hiL21vZHVsZXMvYmlnZ2VyLXBpY3R1cmUvanMvcGFuZWwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQHBvcHBlcmpzL2NvcmUgdjIuMTEuMCAtIE1JVCBMaWNlbnNlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcblxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSkge1xuICBpZiAoaW5jbHVkZVNjYWxlID09PSB2b2lkIDApIHtcbiAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNjYWxlWCA9IDE7XG4gIHZhciBzY2FsZVkgPSAxO1xuXG4gIGlmIChpc0hUTUxFbGVtZW50KGVsZW1lbnQpICYmIGluY2x1ZGVTY2FsZSkge1xuICAgIHZhciBvZmZzZXRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB2YXIgb2Zmc2V0V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoOyAvLyBEbyBub3QgYXR0ZW1wdCB0byBkaXZpZGUgYnkgMCwgb3RoZXJ3aXNlIHdlIGdldCBgSW5maW5pdHlgIGFzIHNjYWxlXG4gICAgLy8gRmFsbGJhY2sgdG8gMSBpbiBjYXNlIGJvdGggdmFsdWVzIGFyZSBgMGBcblxuICAgIGlmIChvZmZzZXRXaWR0aCA+IDApIHtcbiAgICAgIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gb2Zmc2V0V2lkdGggfHwgMTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0SGVpZ2h0ID4gMCkge1xuICAgICAgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gb2Zmc2V0SGVpZ2h0IHx8IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCAvIHNjYWxlWCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0IC8gc2NhbGVZLFxuICAgIHRvcDogcmVjdC50b3AgLyBzY2FsZVksXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQgLyBzY2FsZVgsXG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSAvIHNjYWxlWSxcbiAgICBsZWZ0OiByZWN0LmxlZnQgLyBzY2FsZVgsXG4gICAgeDogcmVjdC5sZWZ0IC8gc2NhbGVYLFxuICAgIHk6IHJlY3QudG9wIC8gc2NhbGVZXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnRTY2FsZWQoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMTtcbiAgdmFyIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDE7XG4gIHJldHVybiBzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxO1xufSAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnRJc1NjYWxlZCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBpc0VsZW1lbnRTY2FsZWQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50SXNTY2FsZWQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn1cblxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5mdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn1cblxuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59XG5cbmZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufVxuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcbiAgdmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSAhPT0gLTE7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufVxuXG52YXIgdG9wID0gJ3RvcCc7XG52YXIgYm90dG9tID0gJ2JvdHRvbSc7XG52YXIgcmlnaHQgPSAncmlnaHQnO1xudmFyIGxlZnQgPSAnbGVmdCc7XG52YXIgYXV0byA9ICdhdXRvJztcbnZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xudmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbnZhciBlbmQgPSAnZW5kJztcbnZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbnZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG52YXIgcG9wcGVyID0gJ3BvcHBlcic7XG52YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG52YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xudmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxudmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG52YXIgcmVhZCA9ICdyZWFkJztcbnZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxudmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG52YXIgbWFpbiA9ICdtYWluJztcbnZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG52YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xudmFyIHdyaXRlID0gJ3dyaXRlJztcbnZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xudmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdO1xuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChzdHIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIFtdLmNvbmNhdChhcmdzKS5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHtcbiAgICByZXR1cm4gcC5yZXBsYWNlKC8lcy8sIGMpO1xuICB9LCBzdHIpO1xufVxuXG52YXIgSU5WQUxJRF9NT0RJRklFUl9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiBwcm92aWRlZCBhbiBpbnZhbGlkICVzIHByb3BlcnR5LCBleHBlY3RlZCAlcyBidXQgZ290ICVzJztcbnZhciBNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcmVxdWlyZXMgXCIlc1wiLCBidXQgXCIlc1wiIG1vZGlmaWVyIGlzIG5vdCBhdmFpbGFibGUnO1xudmFyIFZBTElEX1BST1BFUlRJRVMgPSBbJ25hbWUnLCAnZW5hYmxlZCcsICdwaGFzZScsICdmbicsICdlZmZlY3QnLCAncmVxdWlyZXMnLCAnb3B0aW9ucyddO1xuZnVuY3Rpb24gdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIFtdLmNvbmNhdChPYmplY3Qua2V5cyhtb2RpZmllciksIFZBTElEX1BST1BFUlRJRVMpIC8vIElFMTEtY29tcGF0aWJsZSByZXBsYWNlbWVudCBmb3IgYG5ldyBTZXQoaXRlcmFibGUpYFxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgc2VsZikge1xuICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCAnXCJuYW1lXCInLCAnXCJzdHJpbmdcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLm5hbWUpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlbmFibGVkJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmVuYWJsZWQgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZW5hYmxlZFwiJywgJ1wiYm9vbGVhblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZW5hYmxlZCkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3BoYXNlJzpcbiAgICAgICAgICBpZiAobW9kaWZpZXJQaGFzZXMuaW5kZXhPZihtb2RpZmllci5waGFzZSkgPCAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJwaGFzZVwiJywgXCJlaXRoZXIgXCIgKyBtb2RpZmllclBoYXNlcy5qb2luKCcsICcpLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5waGFzZSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZuJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJmblwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZWZmZWN0JzpcbiAgICAgICAgICBpZiAobW9kaWZpZXIuZWZmZWN0ICE9IG51bGwgJiYgdHlwZW9mIG1vZGlmaWVyLmVmZmVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZWZmZWN0XCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlcyc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyLnJlcXVpcmVzICE9IG51bGwgJiYgIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXNJZkV4aXN0cyc6XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc0lmRXhpc3RzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29wdGlvbnMnOlxuICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQb3BwZXJKUzogYW4gaW52YWxpZCBwcm9wZXJ0eSBoYXMgYmVlbiBwcm92aWRlZCB0byB0aGUgXFxcIlwiICsgbW9kaWZpZXIubmFtZSArIFwiXFxcIiBtb2RpZmllciwgdmFsaWQgcHJvcGVydGllcyBhcmUgXCIgKyBWQUxJRF9QUk9QRVJUSUVTLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlwiICsgcyArIFwiXFxcIlwiO1xuICAgICAgICAgIH0pLmpvaW4oJywgJykgKyBcIjsgYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcHJvdmlkZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBtb2RpZmllci5yZXF1aXJlcyAmJiBtb2RpZmllci5yZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xuICAgICAgICBpZiAobW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICAgIHJldHVybiBtb2QubmFtZSA9PT0gcmVxdWlyZW1lbnQ7XG4gICAgICAgIH0pID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgcmVxdWlyZW1lbnQsIHJlcXVpcmVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdW5pcXVlQnkoYXJyLCBmbikge1xuICB2YXIgaWRlbnRpZmllcnMgPSBuZXcgU2V0KCk7XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBmbihpdGVtKTtcblxuICAgIGlmICghaWRlbnRpZmllcnMuaGFzKGlkZW50aWZpZXIpKSB7XG4gICAgICBpZGVudGlmaWVycy5hZGQoaWRlbnRpZmllcik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59XG5cbmZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgIH0pIDogY3VycmVudDtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwOyAvLyBOQjogVGhpcyBpc24ndCBzdXBwb3J0ZWQgb24gaU9TIDw9IDEyLiBJZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiwgdGhlIHBvcHBlclxuICAvLyBjYW4gYmUgb2JzY3VyZWQgdW5kZXJuZWF0aCBpdC5cbiAgLy8gQWxzbywgYGh0bWwuY2xpZW50SGVpZ2h0YCBhZGRzIHRoZSBib3R0b20gYmFyIGhlaWdodCBpbiBTYWZhcmkgaU9TLCBldmVuXG4gIC8vIGlmIGl0IGlzbid0IG9wZW4sIHNvIGlmIHRoaXMgaXNuJ3QgYXZhaWxhYmxlLCB0aGUgcG9wcGVyIHdpbGwgYmUgZGV0ZWN0ZWRcbiAgLy8gdG8gb3ZlcmZsb3cgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvbyBlYXJseS5cblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDsgLy8gVXNlcyBMYXlvdXQgVmlld3BvcnQgKGxpa2UgQ2hyb21lOyBTYWZhcmkgZG9lcyBub3QgY3VycmVudGx5KVxuICAgIC8vIEluIENocm9tZSwgaXQgcmV0dXJucyBhIHZhbHVlIHZlcnkgY2xvc2UgdG8gMCAoKy8tKSBidXQgY29udGFpbnMgcm91bmRpbmdcbiAgICAvLyBlcnJvcnMgZHVlIHRvIGZsb2F0aW5nIHBvaW50IG51bWJlcnMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgcHJlY2lzaW9uLlxuICAgIC8vIFNhZmFyaSByZXR1cm5zIGEgbnVtYmVyIDw9IDAsIHVzdWFsbHkgPCAtMSB3aGVuIHBpbmNoLXpvb21lZFxuICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZhaWxzIGluIG1vYmlsZSBlbXVsYXRpb24gbW9kZSBpbiBDaHJvbWUuXG4gICAgLy8gTWF0aC5hYnMod2luLmlubmVyV2lkdGggLyB2aXN1YWxWaWV3cG9ydC5zY2FsZSAtIHZpc3VhbFZpZXdwb3J0LndpZHRoKSA8XG4gICAgLy8gMC4wMDFcbiAgICAvLyBGYWxsYmFjayBoZXJlOiBcIk5vdCBTYWZhcmlcIiB1c2VyQWdlbnRcblxuICAgIGlmICghL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn1cblxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpO1xuICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCkge1xuICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkpIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JyAmJiAoY2FuRXNjYXBlQ2xpcHBpbmcgPyBnZXRDb21wdXRlZFN0eWxlKGNsaXBwaW5nUGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgOiB0cnVlKTtcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufVxuXG5mdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufVxuXG5mdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2UpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KTtcbiAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG4gIH07XG4gIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xufVxuXG52YXIgSU5WQUxJRF9FTEVNRU5UX0VSUk9SID0gJ1BvcHBlcjogSW52YWxpZCByZWZlcmVuY2Ugb3IgcG9wcGVyIGFyZ3VtZW50IHByb3ZpZGVkLiBUaGV5IG11c3QgYmUgZWl0aGVyIGEgRE9NIGVsZW1lbnQgb3IgdmlydHVhbCBlbGVtZW50Lic7XG52YXIgSU5GSU5JVEVfTE9PUF9FUlJPUiA9ICdQb3BwZXI6IEFuIGluZmluaXRlIGxvb3AgaW4gdGhlIG1vZGlmaWVycyBjeWNsZSBoYXMgYmVlbiBkZXRlY3RlZCEgVGhlIGN5Y2xlIGhhcyBiZWVuIGludGVycnVwdGVkIHRvIHByZXZlbnQgYSBicm93c2VyIGNyYXNoLic7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2V0T3B0aW9uc0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucykgOiBzZXRPcHRpb25zQWN0aW9uO1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcbiAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBtb2RpZmllcnMgaXMgaW52YWxpZCBmb3IgYW55IHJlYXNvblxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXJzID0gdW5pcXVlQnkoW10uY29uY2F0KG9yZGVyZWRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKTtcblxuICAgICAgICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHN0YXRlLm9wdGlvbnMucGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgICAgICAgICAgdmFyIGZsaXBNb2RpZmllciA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ2ZsaXAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZmxpcE1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXV0b1wiIHBsYWNlbWVudHMgcmVxdWlyZSB0aGUgXCJmbGlwXCIgbW9kaWZpZXIgYmUnLCAncHJlc2VudCBhbmQgZW5hYmxlZCB0byB3b3JrLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwb3BwZXIpLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3AsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQ7IC8vIFdlIG5vIGxvbmdlciB0YWtlIGludG8gYWNjb3VudCBgbWFyZ2luc2Agb24gdGhlIHBvcHBlciwgYW5kIGl0IGNhblxuICAgICAgICAgIC8vIGNhdXNlIGJ1Z3Mgd2l0aCBwb3NpdGlvbmluZywgc28gd2UnbGwgd2FybiB0aGUgY29uc3VtZXJcblxuXG4gICAgICAgICAgaWYgKFttYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRdLnNvbWUoZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobWFyZ2luKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBDU1MgXCJtYXJnaW5cIiBzdHlsZXMgY2Fubm90IGJlIHVzZWQgdG8gYXBwbHkgcGFkZGluZycsICdiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudCBvciBib3VuZGFyeS4nLCAnVG8gcmVwbGljYXRlIG1hcmdpbiwgdXNlIHRoZSBgb2Zmc2V0YCBtb2RpZmllciwgYXMgd2VsbCBhcycsICd0aGUgYHBhZGRpbmdgIG9wdGlvbiBpbiB0aGUgYHByZXZlbnRPdmVyZmxvd2AgYW5kIGBmbGlwYCcsICdtb2RpZmllcnMuJ10uam9pbignICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIFx1MjAxMyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBfX2RlYnVnX2xvb3BzX18gPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIF9fZGVidWdfbG9vcHNfXyArPSAxO1xuXG4gICAgICAgICAgICBpZiAoX19kZWJ1Z19sb29wc19fID4gMTAwKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5GSU5JVEVfTE9PUF9FUlJPUik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSBcdTIwMTMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdCQyKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgZXZlbnRMaXN0ZW5lcnMgPSB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QkMixcbiAgZGF0YToge31cbn07XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIHBvcHBlck9mZnNldHMkMSA9IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07XG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZikge1xuICB2YXIgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnk7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG4gIHZhciBkcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICByZXR1cm4ge1xuICAgIHg6IHJvdW5kKHggKiBkcHIpIC8gZHByIHx8IDAsXG4gICAgeTogcm91bmQoeSAqIGRwcikgLyBkcHIgfHwgMFxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIHZhcmlhdGlvbiA9IF9yZWYyLnZhcmlhdGlvbixcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHMsXG4gICAgICBpc0ZpeGVkID0gX3JlZjIuaXNGaXhlZDtcblxuICB2YXIgX3JlZjMgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUihvZmZzZXRzKSA6IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMob2Zmc2V0cykgOiBvZmZzZXRzLFxuICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICB4ID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHgsXG4gICAgICBfcmVmMyR5ID0gX3JlZjMueSxcbiAgICAgIHkgPSBfcmVmMyR5ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeTtcblxuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCB8fCAocGxhY2VtZW50ID09PSBsZWZ0IHx8IHBsYWNlbWVudCA9PT0gcmlnaHQpICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTtcbiAgICAgIHZhciBvZmZzZXRZID0gaXNGaXhlZCAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQuaGVpZ2h0IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XG4gICAgICB5IC09IG9mZnNldFkgLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQgfHwgKHBsYWNlbWVudCA9PT0gdG9wIHx8IHBsYWNlbWVudCA9PT0gYm90dG9tKSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVggPSByaWdodDtcbiAgICAgIHZhciBvZmZzZXRYID0gaXNGaXhlZCAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQud2lkdGggOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFt3aWR0aFByb3BdO1xuICAgICAgeCAtPSBvZmZzZXRYIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDw9IDEgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjQuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjQub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRDb21wdXRlZFN0eWxlKHN0YXRlLmVsZW1lbnRzLnBvcHBlcikudHJhbnNpdGlvblByb3BlcnR5IHx8ICcnO1xuXG4gICAgaWYgKGFkYXB0aXZlICYmIFsndHJhbnNmb3JtJywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLnNvbWUoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvblByb3BlcnR5LmluZGV4T2YocHJvcGVydHkpID49IDA7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogRGV0ZWN0ZWQgQ1NTIHRyYW5zaXRpb25zIG9uIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nJywgJ0NTUyBwcm9wZXJ0aWVzOiBcInRyYW5zZm9ybVwiLCBcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLicsICdcXG5cXG4nLCAnRGlzYWJsZSB0aGUgXCJjb21wdXRlU3R5bGVzXCIgbW9kaWZpZXJcXCdzIGBhZGFwdGl2ZWAgb3B0aW9uIHRvIGFsbG93JywgJ2ZvciBzbW9vdGggdHJhbnNpdGlvbnMsIG9yIHJlbW92ZSB0aGVzZSBwcm9wZXJ0aWVzIGZyb20gdGhlIENTUycsICd0cmFuc2l0aW9uIGRlY2xhcmF0aW9uIG9uIHRoZSBwb3BwZXIgZWxlbWVudCBpZiBvbmx5IHRyYW5zaXRpb25pbmcnLCAnb3BhY2l0eSBvciBiYWNrZ3JvdW5kLWNvbG9yIGZvciBleGFtcGxlLicsICdcXG5cXG4nLCAnV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBwb3BwZXIgZWxlbWVudCBhcyBhIHdyYXBwZXIgYXJvdW5kIGFuIGlubmVyJywgJ2VsZW1lbnQgdGhhdCBjYW4gaGF2ZSBhbnkgQ1NTIHByb3BlcnR5IHRyYW5zaXRpb25lZCBmb3IgYW5pbWF0aW9ucy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb24sXG4gICAgaXNGaXhlZDogc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJ1xuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBjb21wdXRlU3R5bGVzJDEgPSB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTtcblxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0JDEoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG4gIHZhciBpbml0aWFsU3R5bGVzID0ge1xuICAgIHBvcHBlcjoge1xuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAnXG4gICAgfSxcbiAgICBhcnJvdzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuICAgIHJlZmVyZW5jZToge31cbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgc3R5bGVQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuc3R5bGVzLmhhc093blByb3BlcnR5KG5hbWUpID8gc3RhdGUuc3R5bGVzW25hbWVdIDogaW5pdGlhbFN0eWxlc1tuYW1lXSk7IC8vIFNldCBhbGwgdmFsdWVzIHRvIGFuIGVtcHR5IHN0cmluZyB0byB1bnNldCB0aGVtXG5cbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBhcHBseVN0eWxlcyQxID0ge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCQxLFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07XG5cbmZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgb2Zmc2V0JDEgPSB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07XG5cbnZhciBoYXNoJDEgPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaCQxW21hdGNoZWRdO1xuICB9KTtcbn1cblxudmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IHBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMkMSA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogVGhlIGBhbGxvd2VkQXV0b1BsYWNlbWVudHNgIG9wdGlvbiBkaWQgbm90IGFsbG93IGFueScsICdwbGFjZW1lbnRzLiBFbnN1cmUgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbiBtYXRjaGVzIHRoZSB2YXJpYXRpb24nLCAnb2YgdGhlIGFsbG93ZWQgcGxhY2VtZW50cy4nLCAnRm9yIGV4YW1wbGUsIFwiYXV0b1wiIGNhbm5vdCBiZSB1c2VkIHRvIGFsbG93IFwiYm90dG9tLXN0YXJ0XCIuJywgJ1VzZSBcImF1dG8tc3RhcnRcIiBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMgXHUyMDEzIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGZsaXAkMSA9IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn1cblxuZnVuY3Rpb24gd2l0aGluKG1pbiQxLCB2YWx1ZSwgbWF4JDEpIHtcbiAgcmV0dXJuIG1heChtaW4kMSwgbWluKHZhbHVlLCBtYXgkMSkpO1xufVxuZnVuY3Rpb24gd2l0aGluTWF4Q2xhbXAobWluLCB2YWx1ZSwgbWF4KSB7XG4gIHZhciB2ID0gd2l0aGluKG1pbiwgdmFsdWUsIG1heCk7XG4gIHJldHVybiB2ID4gbWF4ID8gbWF4IDogdjtcbn1cblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgIG1haW5BeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZSxcbiAgICBhbHRBeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZVxuICB9IDogT2JqZWN0LmFzc2lnbih7XG4gICAgbWFpbkF4aXM6IDAsXG4gICAgYWx0QXhpczogMFxuICB9LCB0ZXRoZXJPZmZzZXRWYWx1ZSk7XG4gIHZhciBvZmZzZXRNb2RpZmllclN0YXRlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdIDogbnVsbDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkO1xuXG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4kMSA9IG9mZnNldCArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICB2YXIgbWF4JDEgPSBvZmZzZXQgLSBvdmVyZmxvd1thbHRTaWRlXTtcbiAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgdmFyIG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTsgLy8gV2UgbmVlZCB0byBpbmNsdWRlIHRoZSBhcnJvdyBpbiB0aGUgY2FsY3VsYXRpb24gc28gdGhlIGFycm93IGRvZXNuJ3QgZ29cbiAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIGFycm93UmVjdCA9IHRldGhlciAmJiBhcnJvd0VsZW1lbnQgPyBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCkgOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVttYWluQXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgOiAwO1xuICAgIHZhciB0ZXRoZXJNaW4gPSBvZmZzZXQgKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBvZmZzZXQgKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWluKG1pbiQxLCB0ZXRoZXJNaW4pIDogbWluJDEsIG9mZnNldCwgdGV0aGVyID8gbWF4KG1heCQxLCB0ZXRoZXJNYXgpIDogbWF4JDEpO1xuICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICB9XG5cbiAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyO1xuXG4gICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgdmFyIF9sZW4gPSBhbHRBeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgdmFyIGlzT3JpZ2luU2lkZSA9IFt0b3AsIGxlZnRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJDIgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW2FsdEF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkMiA6IDA7XG5cbiAgICB2YXIgX3RldGhlck1pbiA9IGlzT3JpZ2luU2lkZSA/IF9taW4gOiBfb2Zmc2V0IC0gcmVmZXJlbmNlUmVjdFtfbGVuXSAtIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzO1xuXG4gICAgdmFyIF90ZXRoZXJNYXggPSBpc09yaWdpblNpZGUgPyBfb2Zmc2V0ICsgcmVmZXJlbmNlUmVjdFtfbGVuXSArIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzIDogX21heDtcblxuICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gdGV0aGVyICYmIGlzT3JpZ2luU2lkZSA/IHdpdGhpbk1heENsYW1wKF90ZXRoZXJNaW4sIF9vZmZzZXQsIF90ZXRoZXJNYXgpIDogd2l0aGluKHRldGhlciA/IF90ZXRoZXJNaW4gOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBfdGV0aGVyTWF4IDogX21heCk7XG5cbiAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBwcmV2ZW50T3ZlcmZsb3ckMSA9IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07XG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgZWxlbWVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50IChub3QgYW4gU1ZHRWxlbWVudCkuJywgJ1RvIHVzZSBhbiBTVkcgYXJyb3csIHdyYXAgaXQgaW4gYW4gSFRNTEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMnLCAndGhlIGFycm93LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgbW9kaWZpZXJcXCdzIGBlbGVtZW50YCBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIHBvcHBlcicsICdlbGVtZW50LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgYXJyb3ckMSA9IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59O1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgaGlkZSQxID0ge1xuICBuYW1lOiAnaGlkZScsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gIGZuOiBoaWRlXG59O1xuXG52YXIgZGVmYXVsdE1vZGlmaWVycyQxID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzJDEsIGNvbXB1dGVTdHlsZXMkMSwgYXBwbHlTdHlsZXMkMV07XG52YXIgY3JlYXRlUG9wcGVyJDEgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVycyQxXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDEsIG9mZnNldCQxLCBmbGlwJDEsIHByZXZlbnRPdmVyZmxvdyQxLCBhcnJvdyQxLCBoaWRlJDFdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnRzLmFwcGx5U3R5bGVzID0gYXBwbHlTdHlsZXMkMTtcbmV4cG9ydHMuYXJyb3cgPSBhcnJvdyQxO1xuZXhwb3J0cy5jb21wdXRlU3R5bGVzID0gY29tcHV0ZVN0eWxlcyQxO1xuZXhwb3J0cy5jcmVhdGVQb3BwZXIgPSBjcmVhdGVQb3BwZXI7XG5leHBvcnRzLmNyZWF0ZVBvcHBlckxpdGUgPSBjcmVhdGVQb3BwZXIkMTtcbmV4cG9ydHMuZGVmYXVsdE1vZGlmaWVycyA9IGRlZmF1bHRNb2RpZmllcnM7XG5leHBvcnRzLmRldGVjdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3c7XG5leHBvcnRzLmV2ZW50TGlzdGVuZXJzID0gZXZlbnRMaXN0ZW5lcnM7XG5leHBvcnRzLmZsaXAgPSBmbGlwJDE7XG5leHBvcnRzLmhpZGUgPSBoaWRlJDE7XG5leHBvcnRzLm9mZnNldCA9IG9mZnNldCQxO1xuZXhwb3J0cy5wb3BwZXJHZW5lcmF0b3IgPSBwb3BwZXJHZW5lcmF0b3I7XG5leHBvcnRzLnBvcHBlck9mZnNldHMgPSBwb3BwZXJPZmZzZXRzJDE7XG5leHBvcnRzLnByZXZlbnRPdmVyZmxvdyA9IHByZXZlbnRPdmVyZmxvdyQxO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9wcGVyLmpzLm1hcFxuIiwgIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkJpZ2dlclBpY3R1cmUgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBub29wKCkgeyB9XG4gICAgY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG4gICAgZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgICAgIHRhcltrXSA9IHNyY1trXTtcbiAgICAgICAgcmV0dXJuIHRhcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgICAgICBmbnMuZm9yRWFjaChydW4pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgICAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCAuLi5jYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKHN0b3JlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKC4uLmNhbGxiYWNrcyk7XG4gICAgICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1YjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcG9uZW50X3N1YnNjcmliZShjb21wb25lbnQsIHN0b3JlLCBjYWxsYmFjaykge1xuICAgICAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0aW9uX2Rlc3Ryb3llcihhY3Rpb25fcmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xuICAgIH1cbiAgICBsZXQgbm93ID0gKCkgPT4gZ2xvYmFsVGhpcy5wZXJmb3JtYW5jZS5ub3coKVxuICAgICAgICA7XG4gICAgbGV0IHJhZiA9IGNiID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgO1xuXG4gICAgY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gcnVuX3Rhc2tzKG5vdykge1xuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKCF0YXNrLmMobm93KSkge1xuICAgICAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrLmYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0YXNrcy5zaXplICE9PSAwKVxuICAgICAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgdGFzayB0aGF0IHJ1bnMgb24gZWFjaCByYWYgZnJhbWVcbiAgICAgKiB1bnRpbCBpdCByZXR1cm5zIGEgZmFsc3kgdmFsdWUgb3IgaXMgYWJvcnRlZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxvb3AoY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHRhc2s7XG4gICAgICAgIGlmICh0YXNrcy5zaXplID09PSAwKVxuICAgICAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWxsID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrcy5hZGQodGFzayA9IHsgYzogY2FsbGJhY2ssIGY6IGZ1bGZpbGwgfSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFib3J0KCkge1xuICAgICAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGV4dCgnJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgZWxzZSBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpXG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0X3N0eWxlKG5vZGUsIGtleSwgdmFsdWUsIGltcG9ydGFudCkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgYnViYmxlcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgYnViYmxlcywgZmFsc2UsIGRldGFpbCk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBsZXQgc3R5bGVzaGVldDtcbiAgICBsZXQgYWN0aXZlID0gMDtcbiAgICBsZXQgY3VycmVudF9ydWxlcyA9IHt9O1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4gICAgLy8gZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgICAvLyAgICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIC8vICAgICBsZXQgaSA9IHN0ci5sZW5ndGg7XG4gICAgLy8gICAgIHdoaWxlIChpLS0pXG4gICAgLy8gICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAvLyAgICAgcmV0dXJuIGhhc2ggPj4+IDA7XG4gICAgLy8gfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9ydWxlKG5vZGUsIGEsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzZSwgZm4sIHVpZCA9IDApIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuICAgICAgICBsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG4gICAgICAgICAgICBrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuICAgICAgICBjb25zdCBuYW1lID0gYF9icF8ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlOSl9XyR7dWlkfWA7XG4gICAgICAgIGlmICghY3VycmVudF9ydWxlc1tuYW1lXSkge1xuICAgICAgICAgICAgaWYgKCFzdHlsZXNoZWV0KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQgPSBzdHlsZS5zaGVldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRfcnVsZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogYGB9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG4gICAgICAgIGFjdGl2ZSArPSAxO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVsZXRlX3J1bGUobm9kZSwgbmFtZSkge1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJylcbiAgICAgICAgICAgIC5zcGxpdCgnLCAnKVxuICAgICAgICAgICAgLmZpbHRlcihuYW1lXG4gICAgICAgICAgICA/IGFuaW0gPT4gYW5pbS5pbmRleE9mKG5hbWUpIDwgMCAvLyByZW1vdmUgc3BlY2lmaWMgYW5pbWF0aW9uXG4gICAgICAgICAgICA6IGFuaW0gPT4gYW5pbS5pbmRleE9mKCdfYnAnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuICAgICAgICApXG4gICAgICAgICAgICAuam9pbignLCAnKTtcbiAgICAgICAgaWYgKG5hbWUgJiYgIS0tYWN0aXZlKVxuICAgICAgICAgICAgY2xlYXJfcnVsZXMoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG4gICAgICAgIHJhZigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGxldCBpID0gc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgICAgICAgICAgIGN1cnJlbnRfcnVsZXMgPSB7fTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIGZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGlydHlfY29tcG9uZW50cyA9IFtdO1xuICAgIGNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG4gICAgY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuICAgIGNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuICAgIGNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBsZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG4gICAgICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgICAvLyBmbHVzaCgpIGNhbGxzIGNhbGxiYWNrcyBpbiB0aGlzIG9yZGVyOlxuICAgIC8vIDEuIEFsbCBiZWZvcmVVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW5cbiAgICAvLyAyLiBBbGwgYmluZDp0aGlzIGNhbGxiYWNrcywgaW4gcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4gICAgLy8gMy4gQWxsIGFmdGVyVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuLiBFWENFUFRcbiAgICAvLyAgICBmb3IgYWZ0ZXJVcGRhdGVzIGNhbGxlZCBkdXJpbmcgdGhlIGluaXRpYWwgb25Nb3VudCwgd2hpY2ggYXJlIGNhbGxlZCBpblxuICAgIC8vICAgIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuICAgIC8vIFNpbmNlIGNhbGxiYWNrcyBtaWdodCB1cGRhdGUgY29tcG9uZW50IHZhbHVlcywgd2hpY2ggY291bGQgdHJpZ2dlciBhbm90aGVyXG4gICAgLy8gY2FsbCB0byBmbHVzaCgpLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGd1YXJkIGFnYWluc3QgdGhpczpcbiAgICAvLyAxLiBEdXJpbmcgYmVmb3JlVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gICAgLy8gICAgZGlydHlfY29tcG9uZW50cyBhcnJheSBhbmQgd2lsbCBjYXVzZSBhIHJlZW50cmFudCBjYWxsIHRvIGZsdXNoKCkuIEJlY2F1c2VcbiAgICAvLyAgICB0aGUgZmx1c2ggaW5kZXggaXMga2VwdCBvdXRzaWRlIHRoZSBmdW5jdGlvbiwgdGhlIHJlZW50cmFudCBjYWxsIHdpbGwgcGlja1xuICAgIC8vICAgIHVwIHdoZXJlIHRoZSBlYXJsaWVyIGNhbGwgbGVmdCBvZmYgYW5kIGdvIHRocm91Z2ggYWxsIGRpcnR5IGNvbXBvbmVudHMuIFRoZVxuICAgIC8vICAgIGN1cnJlbnRfY29tcG9uZW50IHZhbHVlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBzbyB0aGF0IHRoZSByZWVudHJhbnQgY2FsbCB3aWxsXG4gICAgLy8gICAgbm90IGludGVyZmVyZSB3aXRoIHRoZSBcInBhcmVudFwiIGZsdXNoKCkgY2FsbC5cbiAgICAvLyAyLiBiaW5kOnRoaXMgY2FsbGJhY2tzIGNhbm5vdCB0cmlnZ2VyIG5ldyBmbHVzaCgpIGNhbGxzLlxuICAgIC8vIDMuIER1cmluZyBhZnRlclVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIE5PVCBoYXZlIHRoZWlyIGFmdGVyVXBkYXRlXG4gICAgLy8gICAgY2FsbGJhY2sgY2FsbGVkIGEgc2Vjb25kIHRpbWU7IHRoZSBzZWVuX2NhbGxiYWNrcyBzZXQsIG91dHNpZGUgdGhlIGZsdXNoKClcbiAgICAvLyAgICBmdW5jdGlvbiwgZ3VhcmFudGVlcyB0aGlzIGJlaGF2aW9yLlxuICAgIGNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xuICAgIGxldCBmbHVzaGlkeCA9IDA7IC8vIERvICpub3QqIG1vdmUgdGhpcyBpbnNpZGUgdGhlIGZsdXNoKCkgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIC8vIGZpcnN0LCBjYWxsIGJlZm9yZVVwZGF0ZSBmdW5jdGlvbnNcbiAgICAgICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICAgICAgd2hpbGUgKGZsdXNoaWR4IDwgZGlydHlfY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBkaXJ0eV9jb21wb25lbnRzW2ZsdXNoaWR4XTtcbiAgICAgICAgICAgICAgICBmbHVzaGlkeCsrO1xuICAgICAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZShjb21wb25lbnQuJCQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aClcbiAgICAgICAgICAgICAgICBiaW5kaW5nX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgICAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgICAgICAvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG4gICAgICAgICAgICAvLyBzdWJzZXF1ZW50IHVwZGF0ZXMuLi5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcmVuZGVyX2NhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgICAgICBzZWVuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICAgICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgICAgICB3aGlsZSAoZmx1c2hfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgZmx1c2hfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICBzZWVuX2NhbGxiYWNrcy5jbGVhcigpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG4gICAgICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJCQudXBkYXRlKCk7XG4gICAgICAgICAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgICAgICQkLmRpcnR5ID0gWy0xXTtcbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LnAoJCQuY3R4LCBkaXJ0eSk7XG4gICAgICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwcm9taXNlO1xuICAgIGZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwYXRjaChub2RlLCBkaXJlY3Rpb24sIGtpbmQpIHtcbiAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudChgJHtkaXJlY3Rpb24gPyAnaW50cm8nIDogJ291dHJvJ30ke2tpbmR9YCkpO1xuICAgIH1cbiAgICBjb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcbiAgICBsZXQgb3V0cm9zO1xuICAgIGZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICAgICAgb3V0cm9zID0ge1xuICAgICAgICAgICAgcjogMCxcbiAgICAgICAgICAgIGM6IFtdLFxuICAgICAgICAgICAgcDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja19vdXRyb3MoKSB7XG4gICAgICAgIGlmICghb3V0cm9zLnIpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgICAgICB9XG4gICAgICAgIG91dHJvcyA9IG91dHJvcy5wO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuICAgICAgICBpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGJsb2NrLmkobG9jYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25fb3V0KGJsb2NrLCBsb2NhbCwgZGV0YWNoLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoYmxvY2sgJiYgYmxvY2subykge1xuICAgICAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgb3V0cm9pbmcuYWRkKGJsb2NrKTtcbiAgICAgICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jay5kKDEpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYmxvY2subyhsb2NhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbnVsbF90cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMCB9O1xuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICAgICAgbGV0IHRhc2s7XG4gICAgICAgIGxldCB1aWQgPSAwO1xuICAgICAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgICAgICBpZiAodGFzaylcbiAgICAgICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oZ28pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgICAgICBjb25zdCBncm91cCA9IG91dHJvcztcbiAgICAgICAgZ3JvdXAuciArPSAxO1xuICAgICAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGBlbmQoKWAgYmVpbmcgY2FsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5kKHJlc2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy50aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9jb21wb25lbnQoYmxvY2spIHtcbiAgICAgICAgYmxvY2sgJiYgYmxvY2suYygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvciwgY3VzdG9tRWxlbWVudCkge1xuICAgICAgICBjb25zdCB7IGZyYWdtZW50LCBvbl9tb3VudCwgb25fZGVzdHJveSwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgICAgIGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuICAgICAgICBpZiAoIWN1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld19vbl9kZXN0cm95ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAob25fZGVzdHJveSkge1xuICAgICAgICAgICAgICAgICAgICBvbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgICAgICAgICAgICAgIC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcbiAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gICAgICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkO1xuICAgICAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwoJCQub25fZGVzdHJveSk7XG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG4gICAgICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgICAgICAvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG4gICAgICAgICAgICAkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuICAgICAgICAgICAgJCQuY3R4ID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC4kJC5kaXJ0eVswXSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgICAgICBjb21wb25lbnQuJCQuZGlydHkuZmlsbCgwKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAoMSA8PCAoaSAlIDMxKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBub3RfZXF1YWwsIHByb3BzLCBhcHBlbmRfc3R5bGVzLCBkaXJ0eSA9IFstMV0pIHtcbiAgICAgICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQgPSB7XG4gICAgICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgICAgIGN0eDogbnVsbCxcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgICAgIG5vdF9lcXVhbCxcbiAgICAgICAgICAgIGJvdW5kOiB7fSxcbiAgICAgICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICAgICAgb25fZGVzdHJveTogW10sXG4gICAgICAgICAgICBvbl9kaXNjb25uZWN0OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBNYXAob3B0aW9ucy5jb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7fSxcbiAgICAgICAgICAgIGRpcnR5LFxuICAgICAgICAgICAgc2tpcF9ib3VuZDogZmFsc2UsXG4gICAgICAgICAgICByb290OiBvcHRpb25zLnRhcmdldCB8fCBwYXJlbnRfY29tcG9uZW50LiQkLnJvb3RcbiAgICAgICAgfTtcbiAgICAgICAgYXBwZW5kX3N0eWxlcyAmJiBhcHBlbmRfc3R5bGVzKCQkLnJvb3QpO1xuICAgICAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICAgICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgICAgID8gaW5zdGFuY2UoY29tcG9uZW50LCBvcHRpb25zLnByb3BzIHx8IHt9LCAoaSwgcmV0LCAuLi5yZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAkJC5jdHhbaV0gPSB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkJC5za2lwX2JvdW5kICYmICQkLmJvdW5kW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVhZHkpXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgJCQudXBkYXRlKCk7XG4gICAgICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgLy8gYGZhbHNlYCBhcyBhIHNwZWNpYWwgY2FzZSBvZiBubyBET00gY29tcG9uZW50XG4gICAgICAgICQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50ID8gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCkgOiBmYWxzZTtcbiAgICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IsIG9wdGlvbnMuY3VzdG9tRWxlbWVudCk7XG4gICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMuIFVzZWQgd2hlbiBkZXY9ZmFsc2UuXG4gICAgICovXG4gICAgY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgICAgICAgY29uc3QgZiA9IHQgLSAxLjA7XG4gICAgICAgIHJldHVybiBmICogZiAqIGYgKyAxLjA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmx5KG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQsIHggPSAwLCB5ID0gMCwgb3BhY2l0eSA9IDAgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0X29wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxheSxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nLFxuICAgICAgICAgICAgY3NzOiAodCwgdSkgPT4gYFxuXHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7KDEgLSB0KSAqIHh9cHgsICR7KDEgLSB0KSAqIHl9cHgpO1xuXHRcdFx0b3BhY2l0eTogJHt0YXJnZXRfb3BhY2l0eSAtIChvZCAqIHUpfWBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAgICAgKiBAcGFyYW0geyo9fXZhbHVlIGluaXRpYWwgdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyPX1zdGFydCBzdGFydCBhbmQgc3RvcCBub3RpZmljYXRpb25zIGZvciBzdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgICAgICBsZXQgc3RvcDtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcCkgeyAvLyBzdG9yZSBpcyByZWFkeVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc3Vic2NyaWJlciBvZiBzdWJzY3JpYmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlclsxXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHN1YnNjcmliZXIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocnVuX3F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlW2ldWzBdKHN1YnNjcmliZXJfcXVldWVbaSArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGUoZm4pIHtcbiAgICAgICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHN1YnNjcmliZShydW4sIGludmFsaWRhdGUgPSBub29wKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgICAgICBzdWJzY3JpYmVycy5hZGQoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBydW4odmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVycy5kZWxldGUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBzdG9wID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHNldCwgdXBkYXRlLCBzdWJzY3JpYmUgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRfaW50ZXJwb2xhdG9yKGEsIGIpIHtcbiAgICAgICAgaWYgKGEgPT09IGIgfHwgYSAhPT0gYSlcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBhO1xuICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGE7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBiLm1hcCgoYmksIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0X2ludGVycG9sYXRvcihhW2ldLCBiaSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0ID0+IGFyci5tYXAoZm4gPT4gZm4odCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBiIC0gYTtcbiAgICAgICAgICAgIHJldHVybiB0ID0+IGEgKyB0ICogZGVsdGE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGZ1bmN0aW9uIHR3ZWVuZWQodmFsdWUsIGRlZmF1bHRzID0ge30pIHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZSh2YWx1ZSk7XG4gICAgICAgIGxldCB0YXNrO1xuICAgICAgICBsZXQgdGFyZ2V0X3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRfdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNfdGFzayA9IHRhc2s7XG4gICAgICAgICAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gaWRlbnRpdHksIGludGVycG9sYXRlID0gZ2V0X2ludGVycG9sYXRvciB9ID0gYXNzaWduKGFzc2lnbih7fSwgZGVmYXVsdHMpLCBvcHRzKTtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c190YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2suYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNfdGFzayA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IHRhcmdldF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBub3coKSArIGRlbGF5O1xuICAgICAgICAgICAgbGV0IGZuO1xuICAgICAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobm93IDwgc3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICghc3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICBmbiA9IGludGVycG9sYXRlKHZhbHVlLCBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbih2YWx1ZSwgbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c190YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2suYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNfdGFzayA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBub3cgLSBzdGFydDtcbiAgICAgICAgICAgICAgICBpZiAoZWxhcHNlZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IGZuKGVhc2luZyhlbGFwc2VkIC8gZHVyYXRpb24pKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNldCxcbiAgICAgICAgICAgIHVwZGF0ZTogKGZuLCBvcHRzKSA9PiBzZXQoZm4odGFyZ2V0X3ZhbHVlLCB2YWx1ZSksIG9wdHMpLFxuICAgICAgICAgICAgc3Vic2NyaWJlOiBzdG9yZS5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiogdHJ1ZSBpZiBnYWxsZXJ5IGlzIGluIHRoZSBwcm9jZXNzIG9mIGNsb3NpbmcgKi9cbiAgICBjb25zdCBjbG9zaW5nID0gd3JpdGFibGUoMCk7XG5cbiAgICAvKiogc3RvcmUgaWYgdXNlciBwcmVmZXJzIHJlZHVjZWQgbW90aW9uICAqL1xuICAgIGNvbnN0IHByZWZlcnNSZWR1Y2VkTW90aW9uID0gZ2xvYmFsVGhpcy5tYXRjaE1lZGlhPy4oXG4gICAgXHQnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknXG4gICAgKS5tYXRjaGVzO1xuXG4gICAgLyoqIGRlZmF1bHQgb3B0aW9ucyBmb3IgdHdlZW5zIC8gdHJhbnNpdGlvbnMgKi9cbiAgICBjb25zdCBkZWZhdWx0VHdlZW5PcHRpb25zID0gKGR1cmF0aW9uKSA9PiAoe1xuICAgIFx0ZWFzaW5nOiBjdWJpY091dCxcbiAgICBcdGR1cmF0aW9uOiBwcmVmZXJzUmVkdWNlZE1vdGlvbiA/IDAgOiBkdXJhdGlvbixcbiAgICB9KTtcblxuICAgIGNvbnN0IGdldFRodW1iQmFja2dyb3VuZCA9IChhY3RpdmVJdGVtKSA9PlxuICAgIFx0IWFjdGl2ZUl0ZW0udGh1bWIgfHwgYHVybCgke2FjdGl2ZUl0ZW0udGh1bWJ9KWA7XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGF0dHJpYnV0ZXMgdG8gdGhlIGdpdmVuIG5vZGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgLSBUaGUgbm9kZSB0byB3aGljaCBhdHRyaWJ1dGVzIHdpbGwgYmUgYWRkZWRcbiAgICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4+IHwgc3RyaW5nfSBvYmogLSBUaGUgb2JqZWN0IGNvbnRhaW5pbmcga2V5LXZhbHVlIHBhaXJzIG9mIGF0dHJpYnV0ZXMgdG8gYmUgYWRkZWRcbiAgICAgKi9cbiAgICBjb25zdCBhZGRBdHRyaWJ1dGVzID0gKG5vZGUsIG9iaikgPT4ge1xuICAgIFx0aWYgKCFvYmopIHtcbiAgICBcdFx0cmV0dXJuXG4gICAgXHR9XG4gICAgXHRpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcbiAgICBcdFx0b2JqID0gSlNPTi5wYXJzZShvYmopO1xuICAgIFx0fVxuICAgIFx0Zm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgXHRcdG5vZGUuc2V0QXR0cmlidXRlKGtleSwgb2JqW2tleV0pO1xuICAgIFx0fVxuICAgIH07XG5cbiAgICAvKiBzcmMvY29tcG9uZW50cy9sb2FkaW5nLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjU1LjEgKi9cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja18xJDIoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IGRpdl9vdXRybztcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0ZGl2LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImJwLWJhclwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImJwLW9cIj48L3NwYW4+YDtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWxvYWRcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGdldFRodW1iQmFja2dyb3VuZCgvKmFjdGl2ZUl0ZW0qLyBjdHhbMF0pKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKGRpcnR5ICYgLyphY3RpdmVJdGVtKi8gMSkge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGdldFRodW1iQmFja2dyb3VuZCgvKmFjdGl2ZUl0ZW0qLyBjdHhbMF0pKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdGlmIChkaXZfb3V0cm8pIGRpdl9vdXRyby5lbmQoMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHRpZiAobG9jYWwpIHtcbiAgICBcdFx0XHRcdGRpdl9vdXRybyA9IGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihkaXYsIGZseSwgeyBkdXJhdGlvbjogNDgwIH0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGRpdl9vdXRybykgZGl2X291dHJvLmVuZCgpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgxMTo1NykgeyNpZiAkY2xvc2luZ31cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2skMihjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgZGl2X2ludHJvO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1sb2FkXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzBdKSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmIChkaXJ0eSAmIC8qYWN0aXZlSXRlbSovIDEpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzBdKSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKCFkaXZfaW50cm8pIHtcbiAgICBcdFx0XHRcdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRkaXZfaW50cm8gPSBjcmVhdGVfaW5fdHJhbnNpdGlvbihkaXYsIGZseSwgeyBkdXJhdGlvbjogNDgwIH0pO1xuICAgIFx0XHRcdFx0XHRkaXZfaW50cm8uc3RhcnQoKTtcbiAgICBcdFx0XHRcdH0pO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0bzogbm9vcCxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkNChjdHgpIHtcbiAgICBcdGxldCBpZl9ibG9jazBfYW5jaG9yO1xuICAgIFx0bGV0IGlmX2Jsb2NrMV9hbmNob3I7XG4gICAgXHRsZXQgaWZfYmxvY2swID0gIS8qbG9hZGVkKi8gY3R4WzFdICYmIGNyZWF0ZV9pZl9ibG9ja18xJDIoY3R4KTtcbiAgICBcdGxldCBpZl9ibG9jazEgPSAvKiRjbG9zaW5nKi8gY3R4WzJdICYmIGNyZWF0ZV9pZl9ibG9jayQyKGN0eCk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLmMoKTtcbiAgICBcdFx0XHRpZl9ibG9jazBfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdGlmX2Jsb2NrMV9hbmNob3IgPSBlbXB0eSgpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGlmX2Jsb2NrMF9hbmNob3IsIGFuY2hvcik7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGlmX2Jsb2NrMV9hbmNob3IsIGFuY2hvcik7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBbZGlydHldKSB7XG4gICAgXHRcdFx0aWYgKCEvKmxvYWRlZCovIGN0eFsxXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrMCkge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAucChjdHgsIGRpcnR5KTtcblxuICAgIFx0XHRcdFx0XHRpZiAoZGlydHkgJiAvKmxvYWRlZCovIDIpIHtcbiAgICBcdFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgXHRcdFx0XHRcdH1cbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMCA9IGNyZWF0ZV9pZl9ibG9ja18xJDIoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLmMoKTtcbiAgICBcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAubShpZl9ibG9jazBfYW5jaG9yLnBhcmVudE5vZGUsIGlmX2Jsb2NrMF9hbmNob3IpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2swKSB7XG4gICAgXHRcdFx0XHRncm91cF9vdXRyb3MoKTtcblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swLCAxLCAxLCAoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMCA9IG51bGw7XG4gICAgXHRcdFx0XHR9KTtcblxuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKC8qJGNsb3NpbmcqLyBjdHhbMl0pIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5ICYgLyokY2xvc2luZyovIDQpIHtcbiAgICBcdFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdH1cbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMSA9IGNyZWF0ZV9pZl9ibG9jayQyKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5jKCk7XG4gICAgXHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLm0oaWZfYmxvY2sxX2FuY2hvci5wYXJlbnROb2RlLCBpZl9ibG9jazFfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMSkge1xuICAgIFx0XHRcdFx0aWZfYmxvY2sxLmQoMSk7XG4gICAgXHRcdFx0XHRpZl9ibG9jazEgPSBudWxsO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swKTtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazApO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5kKGRldGFjaGluZyk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGlmX2Jsb2NrMF9hbmNob3IpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5kKGRldGFjaGluZyk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGlmX2Jsb2NrMV9hbmNob3IpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbmNlJDQoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgICBcdGxldCAkY2xvc2luZztcbiAgICBcdGNvbXBvbmVudF9zdWJzY3JpYmUoJCRzZWxmLCBjbG9zaW5nLCAkJHZhbHVlID0+ICQkaW52YWxpZGF0ZSgyLCAkY2xvc2luZyA9ICQkdmFsdWUpKTtcbiAgICBcdGxldCB7IGFjdGl2ZUl0ZW0gfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgeyBsb2FkZWQgfSA9ICQkcHJvcHM7XG5cbiAgICBcdCQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIFx0XHRpZiAoJ2FjdGl2ZUl0ZW0nIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBhY3RpdmVJdGVtID0gJCRwcm9wcy5hY3RpdmVJdGVtKTtcbiAgICBcdFx0aWYgKCdsb2FkZWQnIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgxLCBsb2FkZWQgPSAkJHByb3BzLmxvYWRlZCk7XG4gICAgXHR9O1xuXG4gICAgXHRyZXR1cm4gW2FjdGl2ZUl0ZW0sIGxvYWRlZCwgJGNsb3NpbmddO1xuICAgIH1cblxuICAgIGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIFx0XHRzdXBlcigpO1xuICAgIFx0XHRpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDQsIGNyZWF0ZV9mcmFnbWVudCQ0LCBub3RfZXF1YWwsIHsgYWN0aXZlSXRlbTogMCwgbG9hZGVkOiAxIH0pO1xuICAgIFx0fVxuICAgIH1cblxuICAgIC8qIHNyYy9jb21wb25lbnRzL2ltYWdlLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjU1LjEgKi9cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja18xJDEoY3R4KSB7XG4gICAgXHRsZXQgaW1nO1xuICAgIFx0bGV0IGltZ19zaXplc192YWx1ZTtcbiAgICBcdGxldCBpbWdfb3V0cm87XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBtb3VudGVkO1xuICAgIFx0bGV0IGRpc3Bvc2U7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0aW1nID0gZWxlbWVudChcImltZ1wiKTtcbiAgICBcdFx0XHRhdHRyKGltZywgXCJzaXplc1wiLCBpbWdfc2l6ZXNfdmFsdWUgPSAvKm9wdHMqLyBjdHhbOF0uc2l6ZXMgfHwgYCR7LypzaXplcyovIGN0eFsxXX1weGApO1xuICAgIFx0XHRcdGF0dHIoaW1nLCBcImFsdFwiLCAvKmFjdGl2ZUl0ZW0qLyBjdHhbN10uYWx0KTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGltZywgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IFtcbiAgICBcdFx0XHRcdFx0YWN0aW9uX2Rlc3Ryb3llcigvKmFkZFNyYyovIGN0eFsyMV0uY2FsbChudWxsLCBpbWcpKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGltZywgXCJlcnJvclwiLCAvKmVycm9yX2hhbmRsZXIqLyBjdHhbMjddKVxuICAgIFx0XHRcdFx0XTtcblxuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKnNpemVzKi8gMiAmJiBpbWdfc2l6ZXNfdmFsdWUgIT09IChpbWdfc2l6ZXNfdmFsdWUgPSAvKm9wdHMqLyBjdHhbOF0uc2l6ZXMgfHwgYCR7LypzaXplcyovIGN0eFsxXX1weGApKSB7XG4gICAgXHRcdFx0XHRhdHRyKGltZywgXCJzaXplc1wiLCBpbWdfc2l6ZXNfdmFsdWUpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0aWYgKGltZ19vdXRybykgaW1nX291dHJvLmVuZCgxKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdGltZ19vdXRybyA9IGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihpbWcsIGZseSwge30pO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goaW1nKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGltZ19vdXRybykgaW1nX291dHJvLmVuZCgpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzODQ6MTApIHsjaWYgc2hvd0xvYWRlcn1cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2skMShjdHgpIHtcbiAgICBcdGxldCBsb2FkaW5nO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdGxvYWRpbmcgPSBuZXcgTG9hZGluZyh7XG4gICAgXHRcdFx0cHJvcHM6IHtcbiAgICBcdFx0XHRcdGFjdGl2ZUl0ZW06IC8qYWN0aXZlSXRlbSovIGN0eFs3XSxcbiAgICBcdFx0XHRcdGxvYWRlZDogLypsb2FkZWQqLyBjdHhbMl1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH0pO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGNyZWF0ZV9jb21wb25lbnQobG9hZGluZy4kJC5mcmFnbWVudCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRtb3VudF9jb21wb25lbnQobG9hZGluZywgdGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRjb25zdCBsb2FkaW5nX2NoYW5nZXMgPSB7fTtcbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKmxvYWRlZCovIDQpIGxvYWRpbmdfY2hhbmdlcy5sb2FkZWQgPSAvKmxvYWRlZCovIGN0eFsyXTtcbiAgICBcdFx0XHRsb2FkaW5nLiRzZXQobG9hZGluZ19jaGFuZ2VzKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihsb2FkaW5nLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChsb2FkaW5nLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGRlc3Ryb3lfY29tcG9uZW50KGxvYWRpbmcsIGRldGFjaGluZyk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDMoY3R4KSB7XG4gICAgXHRsZXQgZGl2MTtcbiAgICBcdGxldCBkaXYwO1xuICAgIFx0bGV0IGlmX2Jsb2NrMF9hbmNob3I7XG4gICAgXHRsZXQgc3R5bGVfdHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7LyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdIC8gLTIgKyAvKiR6b29tRHJhZ1RyYW5zbGF0ZSovIGN0eFs2XVswXX1weCwgJHsvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMV0gLyAtMiArIC8qJHpvb21EcmFnVHJhbnNsYXRlKi8gY3R4WzZdWzFdfXB4LCAwKWA7XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBtb3VudGVkO1xuICAgIFx0bGV0IGRpc3Bvc2U7XG4gICAgXHRsZXQgaWZfYmxvY2swID0gLypsb2FkZWQqLyBjdHhbMl0gJiYgY3JlYXRlX2lmX2Jsb2NrXzEkMShjdHgpO1xuICAgIFx0bGV0IGlmX2Jsb2NrMSA9IC8qc2hvd0xvYWRlciovIGN0eFszXSAmJiBjcmVhdGVfaWZfYmxvY2skMShjdHgpO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdjEgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGRpdjAgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0aWZfYmxvY2swX2FuY2hvciA9IGVtcHR5KCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRhdHRyKGRpdjAsIFwiY2xhc3NcIiwgXCJicC1pbWdcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwid2lkdGhcIiwgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJoZWlnaHRcIiwgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzFdICsgXCJweFwiKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MCwgXCJicC1kcmFnXCIsIC8qcG9pbnRlckRvd24qLyBjdHhbNF0pO1xuICAgIFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYwLCBcImJwLWNhbnpvb21cIiwgLyptYXhab29tKi8gY3R4WzExXSA+IDEgJiYgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdIDwgLypuYXR1cmFsV2lkdGgqLyBjdHhbMTJdKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGdldFRodW1iQmFja2dyb3VuZCgvKmFjdGl2ZUl0ZW0qLyBjdHhbN10pKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJ0cmFuc2Zvcm1cIiwgc3R5bGVfdHJhbnNmb3JtKTtcbiAgICBcdFx0XHRhdHRyKGRpdjEsIFwiY2xhc3NcIiwgXCJicC1pbWctd3JhcFwiKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MSwgXCJicC1jbG9zZVwiLCAvKmNsb3NpbmdXaGlsZVpvb21lZCovIGN0eFs1XSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYxLCBhbmNob3IpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYxLCBkaXYwKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAubShkaXYwLCBudWxsKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2MCwgaWZfYmxvY2swX2FuY2hvcik7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLm0oZGl2MCwgbnVsbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGFjdGlvbl9kZXN0cm95ZXIoLypvbk1vdW50Ki8gY3R4WzIwXS5jYWxsKG51bGwsIGRpdjApKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdjEsIFwid2hlZWxcIiwgLypvbldoZWVsKi8gY3R4WzE1XSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcInBvaW50ZXJkb3duXCIsIC8qb25Qb2ludGVyRG93biovIGN0eFsxNl0pLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2MSwgXCJwb2ludGVybW92ZVwiLCAvKm9uUG9pbnRlck1vdmUqLyBjdHhbMTddKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdjEsIFwicG9pbnRlcnVwXCIsIC8qb25Qb2ludGVyVXAqLyBjdHhbMTldKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdjEsIFwicG9pbnRlcmNhbmNlbFwiLCAvKnJlbW92ZUV2ZW50RnJvbUNhY2hlKi8gY3R4WzE4XSlcbiAgICBcdFx0XHRcdF07XG5cbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKC8qbG9hZGVkKi8gY3R4WzJdKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2swKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5wKGN0eCwgZGlydHkpO1xuXG4gICAgXHRcdFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qbG9hZGVkKi8gNCkge1xuICAgIFx0XHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swID0gY3JlYXRlX2lmX2Jsb2NrXzEkMShjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAuYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5tKGRpdjAsIGlmX2Jsb2NrMF9hbmNob3IpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2swKSB7XG4gICAgXHRcdFx0XHRncm91cF9vdXRyb3MoKTtcblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swLCAxLCAxLCAoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMCA9IG51bGw7XG4gICAgXHRcdFx0XHR9KTtcblxuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKC8qc2hvd0xvYWRlciovIGN0eFszXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrMSkge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEucChjdHgsIGRpcnR5KTtcblxuICAgIFx0XHRcdFx0XHRpZiAoZGlydHlbMF0gJiAvKnNob3dMb2FkZXIqLyA4KSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBjcmVhdGVfaWZfYmxvY2skMShjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5tKGRpdjAsIG51bGwpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2sxKSB7XG4gICAgXHRcdFx0XHRncm91cF9vdXRyb3MoKTtcblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2sxLCAxLCAxLCAoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMSA9IG51bGw7XG4gICAgXHRcdFx0XHR9KTtcblxuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyokaW1hZ2VEaW1lbnNpb25zKi8gMSkge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwid2lkdGhcIiwgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKiRpbWFnZURpbWVuc2lvbnMqLyAxKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJoZWlnaHRcIiwgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzFdICsgXCJweFwiKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKnBvaW50ZXJEb3duKi8gMTYpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYwLCBcImJwLWRyYWdcIiwgLypwb2ludGVyRG93biovIGN0eFs0XSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyptYXhab29tLCAkaW1hZ2VEaW1lbnNpb25zLCBuYXR1cmFsV2lkdGgqLyA2MTQ1KSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MCwgXCJicC1jYW56b29tXCIsIC8qbWF4Wm9vbSovIGN0eFsxMV0gPiAxICYmIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSA8IC8qbmF0dXJhbFdpZHRoKi8gY3R4WzEyXSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLyokaW1hZ2VEaW1lbnNpb25zLCAkem9vbURyYWdUcmFuc2xhdGUqLyA2NSAmJiBzdHlsZV90cmFuc2Zvcm0gIT09IChzdHlsZV90cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHsvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMF0gLyAtMiArIC8qJHpvb21EcmFnVHJhbnNsYXRlKi8gY3R4WzZdWzBdfXB4LCAkey8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVsxXSAvIC0yICsgLyokem9vbURyYWdUcmFuc2xhdGUqLyBjdHhbNl1bMV19cHgsIDApYCkpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYwLCBcInRyYW5zZm9ybVwiLCBzdHlsZV90cmFuc2Zvcm0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qY2xvc2luZ1doaWxlWm9vbWVkKi8gMzIpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYxLCBcImJwLWNsb3NlXCIsIC8qY2xvc2luZ1doaWxlWm9vbWVkKi8gY3R4WzVdKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swKTtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazApO1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYxKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuZCgpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5kKCk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFuY2UkMygkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICAgIFx0bGV0ICR6b29tZWQ7XG4gICAgXHRsZXQgJHpvb21EcmFnVHJhbnNsYXRlO1xuICAgIFx0bGV0ICRjbG9zaW5nO1xuICAgIFx0bGV0ICRpbWFnZURpbWVuc2lvbnM7XG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgY2xvc2luZywgJCR2YWx1ZSA9PiAkJGludmFsaWRhdGUoMjYsICRjbG9zaW5nID0gJCR2YWx1ZSkpO1xuICAgIFx0bGV0IHsgcHJvcHMgfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgeyBzbWFsbFNjcmVlbiB9ID0gJCRwcm9wcztcbiAgICBcdGxldCB7IGFjdGl2ZUl0ZW0sIG9wdHMsIHByZXYsIG5leHQsIHpvb21lZCwgY29udGFpbmVyIH0gPSBwcm9wcztcbiAgICBcdGNvbXBvbmVudF9zdWJzY3JpYmUoJCRzZWxmLCB6b29tZWQsIHZhbHVlID0+ICQkaW52YWxpZGF0ZSgyNSwgJHpvb21lZCA9IHZhbHVlKSk7XG4gICAgXHRsZXQgbWF4Wm9vbSA9IGFjdGl2ZUl0ZW0ubWF4Wm9vbSB8fCBvcHRzLm1heFpvb20gfHwgMTA7XG4gICAgXHRsZXQgY2FsY3VsYXRlZERpbWVuc2lvbnMgPSBwcm9wcy5jYWxjdWxhdGVEaW1lbnNpb25zKGFjdGl2ZUl0ZW0pO1xuXG4gICAgXHQvKiogdmFsdWUgb2Ygc2l6ZXMgYXR0cmlidXRlICovXG4gICAgXHRsZXQgc2l6ZXMgPSBjYWxjdWxhdGVkRGltZW5zaW9uc1swXTtcblxuICAgIFx0LyoqIHRyYWNrcyBsb2FkIHN0YXRlIG9mIGltYWdlICovXG4gICAgXHRsZXQgbG9hZGVkLCBzaG93TG9hZGVyO1xuXG4gICAgXHQvKiogc3RvcmVzIHBpbmNoIGluZm8gaWYgbXVsdGlwbGUgdG91Y2ggZXZlbnRzIGFjdGl2ZSAqL1xuICAgIFx0bGV0IHBpbmNoRGV0YWlscztcblxuICAgIFx0LyoqIGltYWdlIGh0bWwgZWxlbWVudCAoLmJwLWltZykgKi9cbiAgICBcdGxldCBicEltZztcblxuICAgIFx0LyoqIHRyYWNrIGRpc3RhbmNlIGZvciBwaW5jaCBldmVudHMgKi9cbiAgICBcdGxldCBwcmV2RGlmZiA9IDA7XG5cbiAgICBcdGxldCBwb2ludGVyRG93biwgaGFzRHJhZ2dlZDtcbiAgICBcdGxldCBkcmFnU3RhcnRYLCBkcmFnU3RhcnRZO1xuXG4gICAgXHQvKiogem9vbURyYWdUcmFuc2xhdGUgdmFsdWVzIG9uIHN0YXJ0IG9mIGRyYWcgKi9cbiAgICBcdGxldCBkcmFnU3RhcnRUcmFuc2xhdGVYLCBkcmFnU3RhcnRUcmFuc2xhdGVZO1xuXG4gICAgXHQvKiogaWYgdHJ1ZSwgYWRkcyBjbGFzcyB0byAuYnAtd3JhcCB0byBhdm9pZCBpbWFnZSBjcm9wcGluZyAqL1xuICAgIFx0bGV0IGNsb3NpbmdXaGlsZVpvb21lZDtcblxuICAgIFx0Y29uc3QgbmF0dXJhbFdpZHRoID0gK2FjdGl2ZUl0ZW0ud2lkdGg7XG5cbiAgICBcdC8qKiBzdG9yZSBwb3NpdGlvbnMgZm9yIGRyYWcgaW5lcnRpYSAqL1xuICAgIFx0Y29uc3QgZHJhZ1Bvc2l0aW9ucyA9IFtdO1xuXG4gICAgXHQvKiogY2FjaGUgcG9pbnRlciBldmVudHMgdG8gaGFuZGxlIHBpbmNoICovXG4gICAgXHRjb25zdCBwb2ludGVyQ2FjaGUgPSBuZXcgTWFwKCk7XG5cbiAgICBcdC8qKiB0d2VlbiB0byBjb250cm9sIGltYWdlIHNpemUgKi9cbiAgICBcdGNvbnN0IGltYWdlRGltZW5zaW9ucyA9IHR3ZWVuZWQoY2FsY3VsYXRlZERpbWVuc2lvbnMsIGRlZmF1bHRUd2Vlbk9wdGlvbnMoNDAwKSk7XG5cbiAgICBcdGNvbXBvbmVudF9zdWJzY3JpYmUoJCRzZWxmLCBpbWFnZURpbWVuc2lvbnMsIHZhbHVlID0+ICQkaW52YWxpZGF0ZSgwLCAkaW1hZ2VEaW1lbnNpb25zID0gdmFsdWUpKTtcblxuICAgIFx0LyoqIHRyYW5zbGF0ZSB0cmFuc2Zvcm0gZm9yIHBvaW50ZXJEb3duICovXG4gICAgXHRjb25zdCB6b29tRHJhZ1RyYW5zbGF0ZSA9IHR3ZWVuZWQoWzAsIDBdLCBkZWZhdWx0VHdlZW5PcHRpb25zKDQwMCkpO1xuXG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgem9vbURyYWdUcmFuc2xhdGUsIHZhbHVlID0+ICQkaW52YWxpZGF0ZSg2LCAkem9vbURyYWdUcmFuc2xhdGUgPSB2YWx1ZSkpO1xuXG4gICAgXHQvKiogY2FsY3VsYXRlIHRyYW5zbGF0ZSBwb3NpdGlvbiB3aXRoIGJvdW5kcyAqL1xuICAgIFx0Y29uc3QgYm91bmRUcmFuc2xhdGVWYWx1ZXMgPSAoW3gsIHldLCBuZXdEaW1lbnNpb25zID0gJGltYWdlRGltZW5zaW9ucykgPT4ge1xuICAgIFx0XHQvLyBpbWFnZSBkcmFnIHRyYW5zbGF0ZSBib3VuZHNcbiAgICBcdFx0Y29uc3QgbWF4VHJhbnNsYXRlWCA9IChuZXdEaW1lbnNpb25zWzBdIC0gY29udGFpbmVyLncpIC8gMjtcblxuICAgIFx0XHRjb25zdCBtYXhUcmFuc2xhdGVZID0gKG5ld0RpbWVuc2lvbnNbMV0gLSBjb250YWluZXIuaCkgLyAyO1xuXG4gICAgXHRcdC8vIHggbWF4IGRyYWdcbiAgICBcdFx0aWYgKG1heFRyYW5zbGF0ZVggPCAwKSB7XG4gICAgXHRcdFx0eCA9IDA7XG4gICAgXHRcdH0gZWxzZSBpZiAoeCA+IG1heFRyYW5zbGF0ZVgpIHtcbiAgICBcdFx0XHRpZiAoc21hbGxTY3JlZW4pIHtcbiAgICBcdFx0XHRcdC8vIGJvdW5kIHRvIGxlZnQgc2lkZSAoYWxsb3cgc2xpZ2h0IG92ZXIgZHJhZylcbiAgICBcdFx0XHRcdHggPSBwb2ludGVyRG93blxuICAgIFx0XHRcdFx0PyBtYXhUcmFuc2xhdGVYICsgKHggLSBtYXhUcmFuc2xhdGVYKSAvIDEwXG4gICAgXHRcdFx0XHQ6IG1heFRyYW5zbGF0ZVg7XG5cbiAgICBcdFx0XHRcdC8vIHByZXZpb3VzIGl0ZW0gaWYgZHJhZ2dlZCBwYXN0IHRocmVzaG9sZFxuICAgIFx0XHRcdFx0aWYgKHggPiBtYXhUcmFuc2xhdGVYICsgMjApIHtcbiAgICBcdFx0XHRcdFx0Ly8gcG9pbnRlcmRvd24gPSB1bmRlZmluZWQgdG8gc3RvcCBwb2ludGVybW92ZSBmcm9tIHJ1bm5pbmcgYWdhaW5cbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gcHJldigpKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0eCA9IG1heFRyYW5zbGF0ZVg7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9IGVsc2UgaWYgKHggPCAtbWF4VHJhbnNsYXRlWCkge1xuICAgIFx0XHRcdC8vIGJvdW5kIHRvIHJpZ2h0IHNpZGUgKGFsbG93IHNsaWdodCBvdmVyIGRyYWcpXG4gICAgXHRcdFx0aWYgKHNtYWxsU2NyZWVuKSB7XG4gICAgXHRcdFx0XHR4ID0gcG9pbnRlckRvd25cbiAgICBcdFx0XHRcdD8gLW1heFRyYW5zbGF0ZVggLSAoLW1heFRyYW5zbGF0ZVggLSB4KSAvIDEwXG4gICAgXHRcdFx0XHQ6IC1tYXhUcmFuc2xhdGVYO1xuXG4gICAgXHRcdFx0XHQvLyBuZXh0IGl0ZW0gaWYgZHJhZ2dlZCBwYXN0IHRocmVzaG9sZFxuICAgIFx0XHRcdFx0aWYgKHggPCAtbWF4VHJhbnNsYXRlWCAtIDIwKSB7XG4gICAgXHRcdFx0XHRcdC8vIHBvaW50ZXJkb3duID0gdW5kZWZpbmVkIHRvIHN0b3AgcG9pbnRlcm1vdmUgZnJvbSBydW5uaW5nIGFnYWluXG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IG5leHQoKSk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdHggPSAtbWF4VHJhbnNsYXRlWDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyB5IG1heCBkcmFnXG4gICAgXHRcdGlmIChtYXhUcmFuc2xhdGVZIDwgMCkge1xuICAgIFx0XHRcdHkgPSAwO1xuICAgIFx0XHR9IGVsc2UgaWYgKHkgPiBtYXhUcmFuc2xhdGVZKSB7XG4gICAgXHRcdFx0eSA9IG1heFRyYW5zbGF0ZVk7XG4gICAgXHRcdH0gZWxzZSBpZiAoeSA8IC1tYXhUcmFuc2xhdGVZKSB7XG4gICAgXHRcdFx0eSA9IC1tYXhUcmFuc2xhdGVZO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0cmV0dXJuIFt4LCB5XTtcbiAgICBcdH07XG5cbiAgICBcdC8qKiB1cGRhdGVzIHpvb20gbGV2ZWwgaW4gb3Igb3V0IGJhc2VkIG9uIGFtdCB2YWx1ZSAqL1xuICAgIFx0ZnVuY3Rpb24gY2hhbmdlWm9vbShhbXQgPSBtYXhab29tLCBlKSB7XG4gICAgXHRcdGlmICgkY2xvc2luZykge1xuICAgIFx0XHRcdHJldHVybjtcbiAgICBcdFx0fVxuXG4gICAgXHRcdGNvbnN0IG1heFdpZHRoID0gY2FsY3VsYXRlZERpbWVuc2lvbnNbMF0gKiBtYXhab29tO1xuICAgIFx0XHRsZXQgbmV3V2lkdGggPSAkaW1hZ2VEaW1lbnNpb25zWzBdICsgJGltYWdlRGltZW5zaW9uc1swXSAqIGFtdDtcbiAgICBcdFx0bGV0IG5ld0hlaWdodCA9ICRpbWFnZURpbWVuc2lvbnNbMV0gKyAkaW1hZ2VEaW1lbnNpb25zWzFdICogYW10O1xuXG4gICAgXHRcdGlmIChhbXQgPiAwKSB7XG4gICAgXHRcdFx0aWYgKG5ld1dpZHRoID4gbWF4V2lkdGgpIHtcbiAgICBcdFx0XHRcdC8vIHJlcXVlc3Rpbmcgc2l6ZSBsYXJnZSB0aGFuIG1heCB6b29tXG4gICAgXHRcdFx0XHRuZXdXaWR0aCA9IG1heFdpZHRoO1xuXG4gICAgXHRcdFx0XHRuZXdIZWlnaHQgPSBjYWxjdWxhdGVkRGltZW5zaW9uc1sxXSAqIG1heFpvb207XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKG5ld1dpZHRoID4gbmF0dXJhbFdpZHRoKSB7XG4gICAgXHRcdFx0XHQvLyBpZiByZXF1ZXN0aW5nIHpvb20gbGFyZ2VyIHRoYW4gbmF0dXJhbCBzaXplXG4gICAgXHRcdFx0XHRuZXdXaWR0aCA9IG5hdHVyYWxXaWR0aDtcblxuICAgIFx0XHRcdFx0bmV3SGVpZ2h0ID0gK2FjdGl2ZUl0ZW0uaGVpZ2h0O1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSBlbHNlIGlmIChuZXdXaWR0aCA8IGNhbGN1bGF0ZWREaW1lbnNpb25zWzBdKSB7XG4gICAgXHRcdFx0Ly8gaWYgcmVxdWVzdGluZyBpbWFnZSBzbWFsbGVyIHRoYW4gc3RhcnRpbmcgc2l6ZVxuICAgIFx0XHRcdGltYWdlRGltZW5zaW9ucy5zZXQoY2FsY3VsYXRlZERpbWVuc2lvbnMpO1xuXG4gICAgXHRcdFx0cmV0dXJuIHpvb21EcmFnVHJhbnNsYXRlLnNldChbMCwgMF0pO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0bGV0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gYnBJbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBcdFx0Ly8gZGlzdGFuY2UgY2xpY2tlZCBmcm9tIGNlbnRlciBvZiBpbWFnZVxuICAgIFx0XHRjb25zdCBvZmZzZXRYID0gZSA/IGUuY2xpZW50WCAtIHggLSB3aWR0aCAvIDIgOiAwO1xuXG4gICAgXHRcdGNvbnN0IG9mZnNldFkgPSBlID8gZS5jbGllbnRZIC0geSAtIGhlaWdodCAvIDIgOiAwO1xuICAgIFx0XHR4ID0gLW9mZnNldFggKiAobmV3V2lkdGggLyB3aWR0aCkgKyBvZmZzZXRYO1xuICAgIFx0XHR5ID0gLW9mZnNldFkgKiAobmV3SGVpZ2h0IC8gaGVpZ2h0KSArIG9mZnNldFk7XG4gICAgXHRcdGNvbnN0IG5ld0RpbWVuc2lvbnMgPSBbbmV3V2lkdGgsIG5ld0hlaWdodF07XG5cbiAgICBcdFx0Ly8gc2V0IG5ldyBkaW1lbnNpb25zIGFuZCB1cGRhdGUgc2l6ZXMgcHJvcGVydHlcbiAgICBcdFx0aW1hZ2VEaW1lbnNpb25zLnNldChuZXdEaW1lbnNpb25zKS50aGVuKCgpID0+IHtcbiAgICBcdFx0XHQkJGludmFsaWRhdGUoMSwgc2l6ZXMgPSBNYXRoLnJvdW5kKE1hdGgubWF4KHNpemVzLCBuZXdXaWR0aCkpKTtcbiAgICBcdFx0fSk7XG5cbiAgICBcdFx0Ly8gdXBkYXRlIHRyYW5zbGF0ZSB2YWx1ZVxuICAgIFx0XHR6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoYm91bmRUcmFuc2xhdGVWYWx1ZXMoWyR6b29tRHJhZ1RyYW5zbGF0ZVswXSArIHgsICR6b29tRHJhZ1RyYW5zbGF0ZVsxXSArIHldLCBuZXdEaW1lbnNpb25zKSk7XG4gICAgXHR9XG5cbiAgICBcdC8vIGFsbG93IHpvb20gdG8gYmUgcmVhZCAvIHNldCBleHRlcm5hbGx5XG4gICAgXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoYWN0aXZlSXRlbSwgJ3pvb20nLCB7XG4gICAgXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBcdFx0Z2V0OiAoKSA9PiAkem9vbWVkLFxuICAgIFx0XHRzZXQ6IGJvb2wgPT4gY2hhbmdlWm9vbShib29sID8gbWF4Wm9vbSA6IC1tYXhab29tKVxuICAgIFx0fSk7XG5cbiAgICBcdGNvbnN0IG9uV2hlZWwgPSBlID0+IHtcbiAgICBcdFx0Ly8gcmV0dXJuIGlmIHNjcm9sbGluZyBwYXN0IGlubGluZSBnYWxsZXJ5IHcvIHdoZWVsXG4gICAgXHRcdGlmIChvcHRzLmlubGluZSAmJiAhJHpvb21lZCkge1xuICAgIFx0XHRcdHJldHVybjtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHByZXZlbnREZWZhdWx0IHRvIHN0b3Agc2Nyb2xsaW5nIG9uIHpvb21lZCBpbmxpbmUgaW1hZ2VcbiAgICBcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgXHRcdC8vIGNoYW5nZSB6b29tIG9uIHdoZWVsXG4gICAgXHRcdGNoYW5nZVpvb20oZS5kZWx0YVkgLyAtMzAwLCBlKTtcbiAgICBcdH07XG5cbiAgICBcdC8qKiBvbiBkcmFnIHN0YXJ0LCBzdG9yZSBpbml0aWFsIHBvc2l0aW9uIGFuZCBpbWFnZSB0cmFuc2xhdGUgdmFsdWVzICovXG4gICAgXHRjb25zdCBvblBvaW50ZXJEb3duID0gZSA9PiB7XG4gICAgXHRcdC8vIGRvbid0IHJ1biBpZiByaWdodCBjbGlja1xuICAgIFx0XHRpZiAoZS5idXR0b24gIT09IDIpIHtcbiAgICBcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gdHJ1ZSk7XG4gICAgXHRcdFx0cG9pbnRlckNhY2hlLnNldChlLnBvaW50ZXJJZCwgZSk7XG4gICAgXHRcdFx0ZHJhZ1N0YXJ0WCA9IGUuY2xpZW50WDtcbiAgICBcdFx0XHRkcmFnU3RhcnRZID0gZS5jbGllbnRZO1xuICAgIFx0XHRcdGRyYWdTdGFydFRyYW5zbGF0ZVggPSAkem9vbURyYWdUcmFuc2xhdGVbMF07XG4gICAgXHRcdFx0ZHJhZ1N0YXJ0VHJhbnNsYXRlWSA9ICR6b29tRHJhZ1RyYW5zbGF0ZVsxXTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0LyoqIG9uIGRyYWcsIHVwZGF0ZSBpbWFnZSB0cmFuc2xhdGUgdmFsICovXG4gICAgXHRjb25zdCBvblBvaW50ZXJNb3ZlID0gZSA9PiB7XG4gICAgXHRcdGlmIChwb2ludGVyQ2FjaGUuc2l6ZSA+IDEpIHtcbiAgICBcdFx0XHQvLyBpZiBtdWx0aXBsZSBwb2ludGVyIGV2ZW50cywgcGFzcyB0byBoYW5kbGVQaW5jaCBmdW5jdGlvblxuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IGZhbHNlKTtcblxuICAgIFx0XHRcdHJldHVybiBvcHRzLm5vUGluY2g/Lihjb250YWluZXIuZWwpIHx8IGhhbmRsZVBpbmNoKGUpO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0aWYgKCFwb2ludGVyRG93bikge1xuICAgIFx0XHRcdHJldHVybjtcbiAgICBcdFx0fVxuXG4gICAgXHRcdGxldCB4ID0gZS5jbGllbnRYO1xuICAgIFx0XHRsZXQgeSA9IGUuY2xpZW50WTtcblxuICAgIFx0XHQvLyBzdG9yZSBwb3NpdGlvbnMgaW4gZHJhZ1Bvc2l0aW9ucyBmb3IgaW5lcnRpYVxuICAgIFx0XHQvLyBzZXQgaGFzRHJhZ2dlZCBpZiA+IDIgcG9pbnRlciBtb3ZlIGV2ZW50c1xuICAgIFx0XHRoYXNEcmFnZ2VkID0gZHJhZ1Bvc2l0aW9ucy5wdXNoKHsgeCwgeSB9KSA+IDI7XG5cbiAgICBcdFx0Ly8gb3ZlcmFsbCBkcmFnIGRpZmYgZnJvbSBzdGFydCBsb2NhdGlvblxuICAgIFx0XHR4ID0geCAtIGRyYWdTdGFydFg7XG5cbiAgICBcdFx0eSA9IHkgLSBkcmFnU3RhcnRZO1xuXG4gICAgXHRcdC8vIGhhbmRsZSB1bnpvb21lZCBsZWZ0IC8gcmlnaHQgLyB1cCBzd2lwZXNcbiAgICBcdFx0aWYgKCEkem9vbWVkKSB7XG4gICAgXHRcdFx0Ly8gY2xvc2UgaWYgc3dpcGUgdXBcbiAgICBcdFx0XHRpZiAoeSA8IC05MCkge1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gIW9wdHMubm9DbG9zZSAmJiBwcm9wcy5jbG9zZSgpKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHQvLyBvbmx5IGhhbmRsZSBsZWZ0IC8gcmlnaHQgaWYgbm90IHN3aXBpbmcgdmVydGljYWxseVxuICAgIFx0XHRcdGlmIChNYXRoLmFicyh5KSA8IDMwKSB7XG4gICAgXHRcdFx0XHQvLyBwcmV2aW91cyBpZiBzd2lwZSBsZWZ0XG4gICAgXHRcdFx0XHRpZiAoeCA+IDQwKSB7XG4gICAgXHRcdFx0XHRcdC8vIHBvaW50ZXJkb3duID0gdW5kZWZpbmVkIHRvIHN0b3AgcG9pbnRlcm1vdmUgZnJvbSBydW5uaW5nIGFnYWluXG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IHByZXYoKSk7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdC8vIG5leHQgaWYgc3dpcGUgcmlnaHRcbiAgICBcdFx0XHRcdGlmICh4IDwgLTQwKSB7XG4gICAgXHRcdFx0XHRcdC8vIHBvaW50ZXJkb3duID0gdW5kZWZpbmVkIHRvIHN0b3AgcG9pbnRlcm1vdmUgZnJvbSBydW5uaW5nIGFnYWluXG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IG5leHQoKSk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gaW1hZ2UgZHJhZyB3aGVuIHpvb21lZFxuICAgIFx0XHRpZiAoJHpvb21lZCAmJiBoYXNEcmFnZ2VkICYmICEkY2xvc2luZykge1xuICAgIFx0XHRcdHpvb21EcmFnVHJhbnNsYXRlLnNldChib3VuZFRyYW5zbGF0ZVZhbHVlcyhbZHJhZ1N0YXJ0VHJhbnNsYXRlWCArIHgsIGRyYWdTdGFydFRyYW5zbGF0ZVkgKyB5XSksIHsgZHVyYXRpb246IDAgfSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IGhhbmRsZVBpbmNoID0gZSA9PiB7XG4gICAgXHRcdC8vIHVwZGF0ZSBldmVudCBpbiBjYWNoZSBhbmQgZ2V0IHZhbHVlc1xuICAgIFx0XHRjb25zdCBbcDEsIHAyXSA9IHBvaW50ZXJDYWNoZS5zZXQoZS5wb2ludGVySWQsIGUpLnZhbHVlcygpO1xuXG4gICAgXHRcdC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50ZXJzXG4gICAgXHRcdGNvbnN0IGR4ID0gcDEuY2xpZW50WCAtIHAyLmNsaWVudFg7XG5cbiAgICBcdFx0Y29uc3QgZHkgPSBwMS5jbGllbnRZIC0gcDIuY2xpZW50WTtcbiAgICBcdFx0Y29uc3QgY3VyRGlmZiA9IE1hdGguaHlwb3QoZHgsIGR5KTtcblxuICAgIFx0XHQvLyBjYWNoZSB0aGUgb3JpZ2luYWwgcGluY2ggY2VudGVyXG4gICAgXHRcdHBpbmNoRGV0YWlscyA9IHBpbmNoRGV0YWlscyB8fCB7XG4gICAgXHRcdFx0Y2xpZW50WDogKHAxLmNsaWVudFggKyBwMi5jbGllbnRYKSAvIDIsXG4gICAgXHRcdFx0Y2xpZW50WTogKHAxLmNsaWVudFkgKyBwMi5jbGllbnRZKSAvIDJcbiAgICBcdFx0fTtcblxuICAgIFx0XHQvLyBzY2FsZSBpbWFnZVxuICAgIFx0XHRjaGFuZ2Vab29tKCgocHJldkRpZmYgfHwgY3VyRGlmZikgLSBjdXJEaWZmKSAvIC0zNSwgcGluY2hEZXRhaWxzKTtcblxuICAgIFx0XHQvLyBDYWNoZSB0aGUgZGlzdGFuY2UgZm9yIHRoZSBuZXh0IG1vdmUgZXZlbnRcbiAgICBcdFx0cHJldkRpZmYgPSBjdXJEaWZmO1xuICAgIFx0fTtcblxuICAgIFx0LyoqIHJlbW92ZSBldmVudCBmcm9tIHBvaW50ZXIgZXZlbnQgY2FjaGUgKi9cbiAgICBcdGNvbnN0IHJlbW92ZUV2ZW50RnJvbUNhY2hlID0gZSA9PiBwb2ludGVyQ2FjaGUuZGVsZXRlKGUucG9pbnRlcklkKTtcblxuICAgIFx0ZnVuY3Rpb24gb25Qb2ludGVyVXAoZSkge1xuICAgIFx0XHRyZW1vdmVFdmVudEZyb21DYWNoZShlKTtcblxuICAgIFx0XHRpZiAocGluY2hEZXRhaWxzKSB7XG4gICAgXHRcdFx0Ly8gcmVzZXQgcHJldkRpZmYgYW5kIGNsZWFyIHBvaW50ZXJEb3duIHRvIHRyaWdnZXIgcmV0dXJuIGJlbG93XG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gcHJldkRpZmYgPSAwKTtcblxuICAgIFx0XHRcdC8vIHNldCBwaW5jaERldGFpbHMgdG8gbnVsbCBhZnRlciBsYXN0IGZpbmdlciBsaWZ0c1xuICAgIFx0XHRcdHBpbmNoRGV0YWlscyA9IHBvaW50ZXJDYWNoZS5zaXplID8gcGluY2hEZXRhaWxzIDogbnVsbDtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIG1ha2Ugc3VyZSBwb2ludGVyIGV2ZW50cyBkb24ndCBjYXJyeSBvdmVyIHRvIG5leHQgaW1hZ2VcbiAgICBcdFx0aWYgKCFwb2ludGVyRG93bikge1xuICAgIFx0XHRcdHJldHVybjtcbiAgICBcdFx0fVxuXG4gICAgXHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IGZhbHNlKTtcblxuICAgIFx0XHQvLyBjbG9zZSBpZiBvdmVybGF5IGlzIGNsaWNrZWRcbiAgICBcdFx0aWYgKGUudGFyZ2V0ID09PSB0aGlzICYmICFvcHRzLm5vQ2xvc2UpIHtcbiAgICBcdFx0XHRyZXR1cm4gcHJvcHMuY2xvc2UoKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIGFkZCBkcmFnIGluZXJ0aWEgLyBzbmFwIGJhY2sgdG8gYm91bmRzXG4gICAgXHRcdGlmIChoYXNEcmFnZ2VkKSB7XG4gICAgXHRcdFx0Y29uc3QgW3Bvc09uZSwgcG9zVHdvLCBwb3NUaHJlZV0gPSBkcmFnUG9zaXRpb25zLnNsaWNlKC0zKTtcbiAgICBcdFx0XHRjb25zdCB4RGlmZiA9IHBvc1R3by54IC0gcG9zVGhyZWUueDtcbiAgICBcdFx0XHRjb25zdCB5RGlmZiA9IHBvc1R3by55IC0gcG9zVGhyZWUueTtcblxuICAgIFx0XHRcdGlmIChNYXRoLmh5cG90KHhEaWZmLCB5RGlmZikgPiA1KSB7XG4gICAgXHRcdFx0XHR6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoYm91bmRUcmFuc2xhdGVWYWx1ZXMoW1xuICAgIFx0XHRcdFx0XHQkem9vbURyYWdUcmFuc2xhdGVbMF0gLSAocG9zT25lLnggLSBwb3NUaHJlZS54KSAqIDUsXG4gICAgXHRcdFx0XHRcdCR6b29tRHJhZ1RyYW5zbGF0ZVsxXSAtIChwb3NPbmUueSAtIHBvc1RocmVlLnkpICogNVxuICAgIFx0XHRcdFx0XSkpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSBlbHNlIGlmICghb3B0cy5vbkltYWdlQ2xpY2s/Lihjb250YWluZXIuZWwsIGFjdGl2ZUl0ZW0pKSB7XG4gICAgXHRcdFx0Y2hhbmdlWm9vbSgkem9vbWVkID8gLW1heFpvb20gOiBtYXhab29tLCBlKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHJlc2V0IHBvaW50ZXIgc3RhdGVzXG4gICAgXHRcdGhhc0RyYWdnZWQgPSBmYWxzZTtcblxuICAgIFx0XHQvLyByZXNldCBkcmFnUG9zaXRpb25zXG4gICAgXHRcdGRyYWdQb3NpdGlvbnMubGVuZ3RoID0gMDtcbiAgICBcdH1cblxuICAgIFx0Y29uc3Qgb25Nb3VudCA9IG5vZGUgPT4ge1xuICAgIFx0XHRicEltZyA9IG5vZGU7XG5cbiAgICBcdFx0Ly8gaGFuZGxlIGdsb2JhbFRoaXMgcmVzaXplXG4gICAgXHRcdHByb3BzLnNldFJlc2l6ZUZ1bmMoKCkgPT4ge1xuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSgyNCwgY2FsY3VsYXRlZERpbWVuc2lvbnMgPSBwcm9wcy5jYWxjdWxhdGVEaW1lbnNpb25zKGFjdGl2ZUl0ZW0pKTtcblxuICAgIFx0XHRcdC8vIGFkanVzdCBpbWFnZSBzaXplIC8gem9vbSBvbiByZXNpemUsIGJ1dCBub3Qgb24gbW9iaWxlIGJlY2F1c2VcbiAgICBcdFx0XHQvLyBzb21lIGJyb3dzZXJzIChpb3Mgc2FmYXJpIDE1KSBjb25zdGFudGx5IHJlc2l6ZSBzY3JlZW4gb24gZHJhZ1xuICAgIFx0XHRcdGlmIChvcHRzLmlubGluZSB8fCAhc21hbGxTY3JlZW4pIHtcbiAgICBcdFx0XHRcdGltYWdlRGltZW5zaW9ucy5zZXQoY2FsY3VsYXRlZERpbWVuc2lvbnMpO1xuICAgIFx0XHRcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KFswLCAwXSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9KTtcblxuICAgIFx0XHQvLyBkZWNvZGUgaW5pdGlhbCBpbWFnZSBiZWZvcmUgcmVuZGVyaW5nXG4gICAgXHRcdHByb3BzLmxvYWRJbWFnZShhY3RpdmVJdGVtKS50aGVuKCgpID0+IHtcbiAgICBcdFx0XHQkJGludmFsaWRhdGUoMiwgbG9hZGVkID0gdHJ1ZSk7XG4gICAgXHRcdFx0cHJvcHMucHJlbG9hZE5leHQoKTtcbiAgICBcdFx0fSk7XG5cbiAgICBcdFx0Ly8gc2hvdyBsb2FkaW5nIGluZGljYXRvciBpZiBuZWVkZWRcbiAgICBcdFx0c2V0VGltZW91dChcbiAgICBcdFx0XHQoKSA9PiB7XG4gICAgXHRcdFx0XHQkJGludmFsaWRhdGUoMywgc2hvd0xvYWRlciA9ICFsb2FkZWQpO1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0MjUwXG4gICAgXHRcdCk7XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBhZGRTcmMgPSBub2RlID0+IHtcbiAgICBcdFx0YWRkQXR0cmlidXRlcyhub2RlLCBhY3RpdmVJdGVtLmF0dHIpO1xuICAgIFx0XHRub2RlLnNyY3NldCA9IGFjdGl2ZUl0ZW0uaW1nO1xuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgZXJyb3JfaGFuZGxlciA9IGVycm9yID0+IG9wdHMub25FcnJvcj8uKGNvbnRhaW5lciwgYWN0aXZlSXRlbSwgZXJyb3IpO1xuXG4gICAgXHQkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBcdFx0XG4gICAgXHRcdGlmICgnc21hbGxTY3JlZW4nIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgyMywgc21hbGxTY3JlZW4gPSAkJHByb3BzLnNtYWxsU2NyZWVuKTtcbiAgICBcdH07XG5cbiAgICBcdCQkc2VsZi4kJC51cGRhdGUgPSAoKSA9PiB7XG4gICAgXHRcdGlmICgkJHNlbGYuJCQuZGlydHlbMF0gJiAvKiRpbWFnZURpbWVuc2lvbnMsIGNhbGN1bGF0ZWREaW1lbnNpb25zKi8gMTY3NzcyMTcpIHtcbiAgICBcdFx0XHR6b29tZWQuc2V0KCRpbWFnZURpbWVuc2lvbnNbMF0gLSAxMCA+IGNhbGN1bGF0ZWREaW1lbnNpb25zWzBdKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdGlmICgkJHNlbGYuJCQuZGlydHlbMF0gJiAvKiRjbG9zaW5nLCAkem9vbWVkLCBjYWxjdWxhdGVkRGltZW5zaW9ucyovIDExNzQ0MDUxMikge1xuICAgIFx0XHRcdC8vIGlmIHpvb21lZCB3aGlsZSBjbG9zaW5nLCB6b29tIG91dCBpbWFnZSBhbmQgYWRkIGNsYXNzXG4gICAgXHRcdFx0Ly8gdG8gY2hhbmdlIGNvbnRhaW4gdmFsdWUgb24gLmJwLXdyYXAgdG8gYXZvaWQgY3JvcHBpbmdcbiAgICBcdFx0XHRpZiAoJGNsb3NpbmcgJiYgJHpvb21lZCAmJiAhb3B0cy5pbnRybykge1xuICAgIFx0XHRcdFx0Y29uc3QgY2xvc2VUd2Vlbk9wdHMgPSBkZWZhdWx0VHdlZW5PcHRpb25zKDQ4MCk7XG4gICAgXHRcdFx0XHR6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoWzAsIDBdLCBjbG9zZVR3ZWVuT3B0cyk7XG4gICAgXHRcdFx0XHRpbWFnZURpbWVuc2lvbnMuc2V0KGNhbGN1bGF0ZWREaW1lbnNpb25zLCBjbG9zZVR3ZWVuT3B0cyk7XG4gICAgXHRcdFx0XHQkJGludmFsaWRhdGUoNSwgY2xvc2luZ1doaWxlWm9vbWVkID0gdHJ1ZSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHRyZXR1cm4gW1xuICAgIFx0XHQkaW1hZ2VEaW1lbnNpb25zLFxuICAgIFx0XHRzaXplcyxcbiAgICBcdFx0bG9hZGVkLFxuICAgIFx0XHRzaG93TG9hZGVyLFxuICAgIFx0XHRwb2ludGVyRG93bixcbiAgICBcdFx0Y2xvc2luZ1doaWxlWm9vbWVkLFxuICAgIFx0XHQkem9vbURyYWdUcmFuc2xhdGUsXG4gICAgXHRcdGFjdGl2ZUl0ZW0sXG4gICAgXHRcdG9wdHMsXG4gICAgXHRcdHpvb21lZCxcbiAgICBcdFx0Y29udGFpbmVyLFxuICAgIFx0XHRtYXhab29tLFxuICAgIFx0XHRuYXR1cmFsV2lkdGgsXG4gICAgXHRcdGltYWdlRGltZW5zaW9ucyxcbiAgICBcdFx0em9vbURyYWdUcmFuc2xhdGUsXG4gICAgXHRcdG9uV2hlZWwsXG4gICAgXHRcdG9uUG9pbnRlckRvd24sXG4gICAgXHRcdG9uUG9pbnRlck1vdmUsXG4gICAgXHRcdHJlbW92ZUV2ZW50RnJvbUNhY2hlLFxuICAgIFx0XHRvblBvaW50ZXJVcCxcbiAgICBcdFx0b25Nb3VudCxcbiAgICBcdFx0YWRkU3JjLFxuICAgIFx0XHRwcm9wcyxcbiAgICBcdFx0c21hbGxTY3JlZW4sXG4gICAgXHRcdGNhbGN1bGF0ZWREaW1lbnNpb25zLFxuICAgIFx0XHQkem9vbWVkLFxuICAgIFx0XHQkY2xvc2luZyxcbiAgICBcdFx0ZXJyb3JfaGFuZGxlclxuICAgIFx0XTtcbiAgICB9XG5cbiAgICBjbGFzcyBJbWFnZSBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgXHRcdHN1cGVyKCk7XG4gICAgXHRcdGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkMywgY3JlYXRlX2ZyYWdtZW50JDMsIG5vdF9lcXVhbCwgeyBwcm9wczogMjIsIHNtYWxsU2NyZWVuOiAyMyB9LCBudWxsLCBbLTEsIC0xXSk7XG4gICAgXHR9XG4gICAgfVxuXG4gICAgLyogc3JjL2NvbXBvbmVudHMvaWZyYW1lLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjU1LjEgKi9cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQyKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCBpZnJhbWU7XG4gICAgXHRsZXQgbG9hZGluZztcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcblxuICAgIFx0bG9hZGluZyA9IG5ldyBMb2FkaW5nKHtcbiAgICBcdFx0XHRwcm9wczoge1xuICAgIFx0XHRcdFx0YWN0aXZlSXRlbTogLyphY3RpdmVJdGVtKi8gY3R4WzJdLFxuICAgIFx0XHRcdFx0bG9hZGVkOiAvKmxvYWRlZCovIGN0eFswXVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRpZnJhbWUgPSBlbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIFx0XHRcdGNyZWF0ZV9jb21wb25lbnQobG9hZGluZy4kJC5mcmFnbWVudCk7XG4gICAgXHRcdFx0YXR0cihpZnJhbWUsIFwiYWxsb3dcIiwgXCJhdXRvcGxheTsgZnVsbHNjcmVlblwiKTtcbiAgICBcdFx0XHRhdHRyKGlmcmFtZSwgXCJ0aXRsZVwiLCAvKmFjdGl2ZUl0ZW0qLyBjdHhbMl0udGl0bGUpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtaWZcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJ3aWR0aFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMF0gKyBcInB4XCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwiaGVpZ2h0XCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVsxXSArIFwicHhcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0YXBwZW5kKGRpdiwgaWZyYW1lKTtcbiAgICBcdFx0XHRtb3VudF9jb21wb25lbnQobG9hZGluZywgZGl2LCBudWxsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IFtcbiAgICBcdFx0XHRcdFx0YWN0aW9uX2Rlc3Ryb3llcigvKmFkZFNyYyovIGN0eFszXS5jYWxsKG51bGwsIGlmcmFtZSkpLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oaWZyYW1lLCBcImxvYWRcIiwgLypsb2FkX2hhbmRsZXIqLyBjdHhbNV0pXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBbZGlydHldKSB7XG4gICAgXHRcdFx0Y29uc3QgbG9hZGluZ19jaGFuZ2VzID0ge307XG4gICAgXHRcdFx0aWYgKGRpcnR5ICYgLypsb2FkZWQqLyAxKSBsb2FkaW5nX2NoYW5nZXMubG9hZGVkID0gLypsb2FkZWQqLyBjdHhbMF07XG4gICAgXHRcdFx0bG9hZGluZy4kc2V0KGxvYWRpbmdfY2hhbmdlcyk7XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHkgJiAvKmRpbWVuc2lvbnMqLyAyKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2LCBcIndpZHRoXCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVswXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5ICYgLypkaW1lbnNpb25zKi8gMikge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJoZWlnaHRcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzFdICsgXCJweFwiKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4obG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQobG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudChsb2FkaW5nKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0cnVuX2FsbChkaXNwb3NlKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZSQyKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgeyBwcm9wcyB9ID0gJCRwcm9wcztcbiAgICBcdGxldCBsb2FkZWQsIGRpbWVuc2lvbnM7XG4gICAgXHRjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHByb3BzO1xuICAgIFx0Y29uc3Qgc2V0RGltZW5zaW9ucyA9ICgpID0+ICQkaW52YWxpZGF0ZSgxLCBkaW1lbnNpb25zID0gcHJvcHMuY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKSk7XG4gICAgXHRzZXREaW1lbnNpb25zKCk7XG4gICAgXHRwcm9wcy5zZXRSZXNpemVGdW5jKHNldERpbWVuc2lvbnMpO1xuXG4gICAgXHRjb25zdCBhZGRTcmMgPSBub2RlID0+IHtcbiAgICBcdFx0YWRkQXR0cmlidXRlcyhub2RlLCBhY3RpdmVJdGVtLmF0dHIpO1xuICAgIFx0XHRub2RlLnNyYyA9IGFjdGl2ZUl0ZW0uaWZyYW1lO1xuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgbG9hZF9oYW5kbGVyID0gKCkgPT4gJCRpbnZhbGlkYXRlKDAsIGxvYWRlZCA9IHRydWUpO1xuXG4gICAgXHRcblxuICAgIFx0cmV0dXJuIFtsb2FkZWQsIGRpbWVuc2lvbnMsIGFjdGl2ZUl0ZW0sIGFkZFNyYywgcHJvcHMsIGxvYWRfaGFuZGxlcl07XG4gICAgfVxuXG4gICAgY2xhc3MgSWZyYW1lIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBcdFx0c3VwZXIoKTtcbiAgICBcdFx0aW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQyLCBjcmVhdGVfZnJhZ21lbnQkMiwgbm90X2VxdWFsLCB7IHByb3BzOiA0IH0pO1xuICAgIFx0fVxuICAgIH1cblxuICAgIC8qIHNyYy9jb21wb25lbnRzL3ZpZGVvLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjU1LjEgKi9cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQxKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCBsb2FkaW5nO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuXG4gICAgXHRsb2FkaW5nID0gbmV3IExvYWRpbmcoe1xuICAgIFx0XHRcdHByb3BzOiB7XG4gICAgXHRcdFx0XHRhY3RpdmVJdGVtOiAvKmFjdGl2ZUl0ZW0qLyBjdHhbMl0sXG4gICAgXHRcdFx0XHRsb2FkZWQ6IC8qbG9hZGVkKi8gY3R4WzBdXG4gICAgXHRcdFx0fVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGNyZWF0ZV9jb21wb25lbnQobG9hZGluZy4kJC5mcmFnbWVudCk7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC12aWRcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJ3aWR0aFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMF0gKyBcInB4XCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwiaGVpZ2h0XCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGdldFRodW1iQmFja2dyb3VuZCgvKmFjdGl2ZUl0ZW0qLyBjdHhbMl0pKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICBcdFx0XHRtb3VudF9jb21wb25lbnQobG9hZGluZywgZGl2LCBudWxsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IGFjdGlvbl9kZXN0cm95ZXIoLypvbk1vdW50Ki8gY3R4WzNdLmNhbGwobnVsbCwgZGl2KSk7XG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBbZGlydHldKSB7XG4gICAgXHRcdFx0Y29uc3QgbG9hZGluZ19jaGFuZ2VzID0ge307XG4gICAgXHRcdFx0aWYgKGRpcnR5ICYgLypsb2FkZWQqLyAxKSBsb2FkaW5nX2NoYW5nZXMubG9hZGVkID0gLypsb2FkZWQqLyBjdHhbMF07XG4gICAgXHRcdFx0bG9hZGluZy4kc2V0KGxvYWRpbmdfY2hhbmdlcyk7XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHkgJiAvKmRpbWVuc2lvbnMqLyAyKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2LCBcIndpZHRoXCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVswXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5ICYgLypkaW1lbnNpb25zKi8gMikge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJoZWlnaHRcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzFdICsgXCJweFwiKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4obG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQobG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudChsb2FkaW5nKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0ZGlzcG9zZSgpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbmNlJDEoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgICBcdGxldCB7IHByb3BzIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IGxvYWRlZCwgZGltZW5zaW9ucztcbiAgICBcdGNvbnN0IHsgYWN0aXZlSXRlbSwgb3B0cywgY29udGFpbmVyIH0gPSBwcm9wcztcbiAgICBcdGNvbnN0IHNldERpbWVuc2lvbnMgPSAoKSA9PiAkJGludmFsaWRhdGUoMSwgZGltZW5zaW9ucyA9IHByb3BzLmNhbGN1bGF0ZURpbWVuc2lvbnMoYWN0aXZlSXRlbSkpO1xuICAgIFx0c2V0RGltZW5zaW9ucygpO1xuICAgIFx0cHJvcHMuc2V0UmVzaXplRnVuYyhzZXREaW1lbnNpb25zKTtcblxuICAgIFx0LyoqIGNyZWF0ZSBhdWRvIC8gdmlkZW8gZWxlbWVudCAqL1xuICAgIFx0Y29uc3Qgb25Nb3VudCA9IG5vZGUgPT4ge1xuICAgIFx0XHRsZXQgbWVkaWFFbGVtZW50O1xuXG4gICAgXHRcdC8qKiB0YWtlcyBzdXBwbGllZCBvYmplY3QgYW5kIGNyZWF0ZXMgZWxlbWVudHMgaW4gdmlkZW8gKi9cbiAgICBcdFx0Y29uc3QgYXBwZW5kVG9WaWRlbyA9ICh0YWcsIGFycikgPT4ge1xuICAgIFx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgXHRcdFx0XHRhcnIgPSBKU09OLnBhcnNlKGFycik7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0Zm9yIChjb25zdCBvYmogb2YgYXJyKSB7XG4gICAgXHRcdFx0XHQvLyBjcmVhdGUgbWVkaWEgZWxlbWVudCBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgXHRcdFx0XHRpZiAoIW1lZGlhRWxlbWVudCkge1xuICAgIFx0XHRcdFx0XHRtZWRpYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KChvYmoudHlwZT8uaW5jbHVkZXMoJ2F1ZGlvJykpID8gJ2F1ZGlvJyA6ICd2aWRlbycpO1xuXG4gICAgXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZXMobWVkaWFFbGVtZW50LCB7XG4gICAgXHRcdFx0XHRcdFx0Y29udHJvbHM6IHRydWUsXG4gICAgXHRcdFx0XHRcdFx0YXV0b3BsYXk6IHRydWUsXG4gICAgXHRcdFx0XHRcdFx0cGxheXNpbmxpbmU6IHRydWUsXG4gICAgXHRcdFx0XHRcdFx0dGFiaW5kZXg6ICcwJ1xuICAgIFx0XHRcdFx0XHR9KTtcblxuICAgIFx0XHRcdFx0XHRhZGRBdHRyaWJ1dGVzKG1lZGlhRWxlbWVudCwgYWN0aXZlSXRlbS5hdHRyKTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0Ly8gYWRkIHNvdXJjZXMgLyB0cmFja3MgdG8gbWVkaWEgZWxlbWVudFxuICAgIFx0XHRcdFx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICBcdFx0XHRcdGFkZEF0dHJpYnV0ZXMoZWwsIG9iaik7XG5cbiAgICBcdFx0XHRcdGlmICh0YWcgPT0gJ3NvdXJjZScpIHtcbiAgICBcdFx0XHRcdFx0ZWwub25FcnJvciA9IGVycm9yID0+IG9wdHMub25FcnJvcj8uKGNvbnRhaW5lciwgYWN0aXZlSXRlbSwgZXJyb3IpO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHRtZWRpYUVsZW1lbnQuYXBwZW5kKGVsKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH07XG5cbiAgICBcdFx0YXBwZW5kVG9WaWRlbygnc291cmNlJywgYWN0aXZlSXRlbS5zb3VyY2VzKTtcbiAgICBcdFx0YXBwZW5kVG9WaWRlbygndHJhY2snLCBhY3RpdmVJdGVtLnRyYWNrcyB8fCBbXSk7XG4gICAgXHRcdG1lZGlhRWxlbWVudC5vbmNhbnBsYXkgPSAoKSA9PiAkJGludmFsaWRhdGUoMCwgbG9hZGVkID0gdHJ1ZSk7XG4gICAgXHRcdG5vZGUuYXBwZW5kKG1lZGlhRWxlbWVudCk7XG4gICAgXHR9O1xuXG4gICAgXHRcblxuICAgIFx0cmV0dXJuIFtsb2FkZWQsIGRpbWVuc2lvbnMsIGFjdGl2ZUl0ZW0sIG9uTW91bnQsIHByb3BzXTtcbiAgICB9XG5cbiAgICBjbGFzcyBWaWRlbyBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgXHRcdHN1cGVyKCk7XG4gICAgXHRcdGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkMSwgY3JlYXRlX2ZyYWdtZW50JDEsIG5vdF9lcXVhbCwgeyBwcm9wczogNCB9KTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKiBzcmMvYmlnZ2VyLXBpY3R1cmUuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuNTUuMSAqL1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrKGN0eCkge1xuICAgIFx0bGV0IGRpdjI7XG4gICAgXHRsZXQgZGl2MDtcbiAgICBcdGxldCBkaXYwX291dHJvO1xuICAgIFx0bGV0IHByZXZpb3VzX2tleSA9IC8qYWN0aXZlSXRlbSovIGN0eFs2XS5pO1xuICAgIFx0bGV0IGRpdjE7XG4gICAgXHRsZXQgYnV0dG9uO1xuICAgIFx0bGV0IGRpdjFfb3V0cm87XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBtb3VudGVkO1xuICAgIFx0bGV0IGRpc3Bvc2U7XG4gICAgXHRsZXQga2V5X2Jsb2NrID0gY3JlYXRlX2tleV9ibG9jayhjdHgpO1xuICAgIFx0bGV0IGlmX2Jsb2NrID0gLyppdGVtcyovIGN0eFswXS5sZW5ndGggPiAxICYmIGNyZWF0ZV9pZl9ibG9ja18xKGN0eCk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2MiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0ZGl2MCA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0a2V5X2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRkaXYxID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRidXR0b24gPSBlbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2suYygpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uLCBcImNsYXNzXCIsIFwiYnAteFwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbiwgXCJ0aXRsZVwiLCBcIkNsb3NlXCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uLCBcImFyaWEtbGFiZWxcIiwgXCJDbG9zZVwiKTtcbiAgICBcdFx0XHRhdHRyKGRpdjEsIFwiY2xhc3NcIiwgXCJicC1jb250cm9sc1wiKTtcbiAgICBcdFx0XHRhdHRyKGRpdjIsIFwiY2xhc3NcIiwgXCJicC13cmFwXCIpO1xuICAgIFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLXpvb21lZFwiLCAvKiR6b29tZWQqLyBjdHhbMTBdKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1pbmxpbmVcIiwgLyppbmxpbmUqLyBjdHhbOF0pO1xuICAgIFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLXNtYWxsXCIsIC8qc21hbGxTY3JlZW4qLyBjdHhbN10pO1xuICAgIFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLW5vY2xvc2VcIiwgLypvcHRzKi8gY3R4WzVdLm5vQ2xvc2UpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2MiwgYW5jaG9yKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2MiwgZGl2MCk7XG4gICAgXHRcdFx0a2V5X2Jsb2NrLm0oZGl2MiwgbnVsbCk7XG4gICAgXHRcdFx0YXBwZW5kKGRpdjIsIGRpdjEpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYxLCBidXR0b24pO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2subShkaXYxLCBudWxsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IFtcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGJ1dHRvbiwgXCJjbGlja1wiLCAvKmNsb3NlKi8gY3R4WzFdKSxcbiAgICBcdFx0XHRcdFx0YWN0aW9uX2Rlc3Ryb3llcigvKmNvbnRhaW5lckFjdGlvbnMqLyBjdHhbMTRdLmNhbGwobnVsbCwgZGl2MikpXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qYWN0aXZlSXRlbSovIDY0ICYmIG5vdF9lcXVhbChwcmV2aW91c19rZXksIHByZXZpb3VzX2tleSA9IC8qYWN0aXZlSXRlbSovIGN0eFs2XS5pKSkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChrZXlfYmxvY2ssIDEsIDEsIG5vb3ApO1xuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0XHRrZXlfYmxvY2sgPSBjcmVhdGVfa2V5X2Jsb2NrKGN0eCk7XG4gICAgXHRcdFx0XHRrZXlfYmxvY2suYygpO1xuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9pbihrZXlfYmxvY2ssIDEpO1xuICAgIFx0XHRcdFx0a2V5X2Jsb2NrLm0oZGl2MiwgZGl2MSk7XG4gICAgXHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdGtleV9ibG9jay5wKGN0eCwgZGlydHkpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICgvKml0ZW1zKi8gY3R4WzBdLmxlbmd0aCA+IDEpIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jaykge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5wKGN0eCwgZGlydHkpO1xuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sgPSBjcmVhdGVfaWZfYmxvY2tfMShjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5jKCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLm0oZGl2MSwgbnVsbCk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jaykge1xuICAgIFx0XHRcdFx0aWZfYmxvY2suZCgxKTtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrID0gbnVsbDtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKiR6b29tZWQqLyAxMDI0KSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC16b29tZWRcIiwgLyokem9vbWVkKi8gY3R4WzEwXSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyppbmxpbmUqLyAyNTYpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLWlubGluZVwiLCAvKmlubGluZSovIGN0eFs4XSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLypzbWFsbFNjcmVlbiovIDEyOCkge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtc21hbGxcIiwgLypzbWFsbFNjcmVlbiovIGN0eFs3XSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLypvcHRzKi8gMzIpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLW5vY2xvc2VcIiwgLypvcHRzKi8gY3R4WzVdLm5vQ2xvc2UpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0aWYgKGRpdjBfb3V0cm8pIGRpdjBfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oa2V5X2Jsb2NrKTtcbiAgICBcdFx0XHRpZiAoZGl2MV9vdXRybykgZGl2MV9vdXRyby5lbmQoMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHRpZiAobG9jYWwpIHtcbiAgICBcdFx0XHRcdGRpdjBfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oZGl2MCwgZmx5LCB7IGR1cmF0aW9uOiA0ODAgfSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoa2V5X2Jsb2NrKTtcblxuICAgIFx0XHRcdGlmIChsb2NhbCkge1xuICAgIFx0XHRcdFx0ZGl2MV9vdXRybyA9IGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihkaXYxLCBmbHksIHt9KTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdjIpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcgJiYgZGl2MF9vdXRybykgZGl2MF9vdXRyby5lbmQoKTtcbiAgICBcdFx0XHRrZXlfYmxvY2suZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2suZCgpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcgJiYgZGl2MV9vdXRybykgZGl2MV9vdXRyby5lbmQoKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0cnVuX2FsbChkaXNwb3NlKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzExOjE5OSkgezplbHNlfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9lbHNlX2Jsb2NrKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCByYXdfdmFsdWUgPSAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLmh0bWwgPz8gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmVsZW1lbnQub3V0ZXJIVE1MKSArIFwiXCI7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWh0bWxcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0ZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLyphY3RpdmVJdGVtKi8gNjQgJiYgcmF3X3ZhbHVlICE9PSAocmF3X3ZhbHVlID0gKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5odG1sID8/IC8qYWN0aXZlSXRlbSovIGN0eFs2XS5lbGVtZW50Lm91dGVySFRNTCkgKyBcIlwiKSkgZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcdFx0fSxcbiAgICBcdFx0aTogbm9vcCxcbiAgICBcdFx0bzogbm9vcCxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzExOjE2NSkgXG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzUoY3R4KSB7XG4gICAgXHRsZXQgaWZyYW1lO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdGlmcmFtZSA9IG5ldyBJZnJhbWUoe1xuICAgIFx0XHRcdHByb3BzOiB7IHByb3BzOiAvKmdldENoaWxkUHJvcHMqLyBjdHhbMTNdKCkgfVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGlmcmFtZS4kJC5mcmFnbWVudCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRtb3VudF9jb21wb25lbnQoaWZyYW1lLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHA6IG5vb3AsXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZyYW1lLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZnJhbWUuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQoaWZyYW1lLCBkZXRhY2hpbmcpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTE6MTA0KSBcbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfNChjdHgpIHtcbiAgICBcdGxldCB2aWRlbztcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHR2aWRlbyA9IG5ldyBWaWRlbyh7XG4gICAgXHRcdFx0cHJvcHM6IHsgcHJvcHM6IC8qZ2V0Q2hpbGRQcm9wcyovIGN0eFsxM10oKSB9XG4gICAgXHRcdH0pO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGNyZWF0ZV9jb21wb25lbnQodmlkZW8uJCQuZnJhZ21lbnQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KHZpZGVvLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHA6IG5vb3AsXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4odmlkZW8uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KHZpZGVvLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGRlc3Ryb3lfY29tcG9uZW50KHZpZGVvLCBkZXRhY2hpbmcpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTE6NCkgeyNpZiBhY3RpdmVJdGVtLmltZ31cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMyhjdHgpIHtcbiAgICBcdGxldCBpbWFnZWl0ZW07XG4gICAgXHRsZXQgY3VycmVudDtcblxuICAgIFx0aW1hZ2VpdGVtID0gbmV3IEltYWdlKHtcbiAgICBcdFx0XHRwcm9wczoge1xuICAgIFx0XHRcdFx0cHJvcHM6IC8qZ2V0Q2hpbGRQcm9wcyovIGN0eFsxM10oKSxcbiAgICBcdFx0XHRcdHNtYWxsU2NyZWVuOiAvKnNtYWxsU2NyZWVuKi8gY3R4WzddXG4gICAgXHRcdFx0fVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGltYWdlaXRlbS4kJC5mcmFnbWVudCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRtb3VudF9jb21wb25lbnQoaW1hZ2VpdGVtLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGNvbnN0IGltYWdlaXRlbV9jaGFuZ2VzID0ge307XG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLypzbWFsbFNjcmVlbiovIDEyOCkgaW1hZ2VpdGVtX2NoYW5nZXMuc21hbGxTY3JlZW4gPSAvKnNtYWxsU2NyZWVuKi8gY3R4WzddO1xuICAgIFx0XHRcdGltYWdlaXRlbS4kc2V0KGltYWdlaXRlbV9jaGFuZ2VzKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpbWFnZWl0ZW0uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGltYWdlaXRlbS4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudChpbWFnZWl0ZW0sIGRldGFjaGluZyk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxMToyOTkpIHsjaWYgYWN0aXZlSXRlbS5jYXB0aW9ufVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja18yKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCByYXdfdmFsdWUgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uY2FwdGlvbiArIFwiXCI7XG4gICAgXHRsZXQgZGl2X291dHJvO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWNhcFwiKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICBcdFx0XHRkaXYuaW5uZXJIVE1MID0gcmF3X3ZhbHVlO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyphY3RpdmVJdGVtKi8gNjQpICYmIHJhd192YWx1ZSAhPT0gKHJhd192YWx1ZSA9IC8qYWN0aXZlSXRlbSovIGN0eFs2XS5jYXB0aW9uICsgXCJcIikpIGRpdi5pbm5lckhUTUwgPSByYXdfdmFsdWU7XHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdGlmIChkaXZfb3V0cm8pIGRpdl9vdXRyby5lbmQoMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHRkaXZfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oZGl2LCBmbHksIHsgZHVyYXRpb246IDIwMCB9KTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBkaXZfb3V0cm8pIGRpdl9vdXRyby5lbmQoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzAwOjQzKSB7I2tleSBhY3RpdmVJdGVtLml9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2tleV9ibG9jayhjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgY3VycmVudF9ibG9ja190eXBlX2luZGV4O1xuICAgIFx0bGV0IGlmX2Jsb2NrMDtcbiAgICBcdGxldCBkaXZfaW50cm87XG4gICAgXHRsZXQgZGl2X291dHJvO1xuICAgIFx0bGV0IGlmX2Jsb2NrMV9hbmNob3I7XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBtb3VudGVkO1xuICAgIFx0bGV0IGRpc3Bvc2U7XG4gICAgXHRjb25zdCBpZl9ibG9ja19jcmVhdG9ycyA9IFtjcmVhdGVfaWZfYmxvY2tfMywgY3JlYXRlX2lmX2Jsb2NrXzQsIGNyZWF0ZV9pZl9ibG9ja181LCBjcmVhdGVfZWxzZV9ibG9ja107XG4gICAgXHRjb25zdCBpZl9ibG9ja3MgPSBbXTtcblxuICAgIFx0ZnVuY3Rpb24gc2VsZWN0X2Jsb2NrX3R5cGUoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRpZiAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLmltZykgcmV0dXJuIDA7XG4gICAgXHRcdGlmICgvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uc291cmNlcykgcmV0dXJuIDE7XG4gICAgXHRcdGlmICgvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaWZyYW1lKSByZXR1cm4gMjtcbiAgICBcdFx0cmV0dXJuIDM7XG4gICAgXHR9XG5cbiAgICBcdGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleCA9IHNlbGVjdF9ibG9ja190eXBlKGN0eCk7XG4gICAgXHRpZl9ibG9jazAgPSBpZl9ibG9ja3NbY3VycmVudF9ibG9ja190eXBlX2luZGV4XSA9IGlmX2Jsb2NrX2NyZWF0b3JzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0oY3R4KTtcbiAgICBcdGxldCBpZl9ibG9jazEgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uY2FwdGlvbiAmJiBjcmVhdGVfaWZfYmxvY2tfMihjdHgpO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0aWZfYmxvY2swLmMoKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdGlmX2Jsb2NrMV9hbmNob3IgPSBlbXB0eSgpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtaW5uZXJcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0aWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0ubShkaXYsIG51bGwpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpZl9ibG9jazFfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gW1xuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2LCBcInBvaW50ZXJkb3duXCIsIC8qcG9pbnRlcmRvd25faGFuZGxlciovIGN0eFsyMF0pLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2LCBcInBvaW50ZXJ1cFwiLCAvKnBvaW50ZXJ1cF9oYW5kbGVyKi8gY3R4WzIxXSlcbiAgICBcdFx0XHRcdF07XG5cbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0bGV0IHByZXZpb3VzX2Jsb2NrX2luZGV4ID0gY3VycmVudF9ibG9ja190eXBlX2luZGV4O1xuICAgIFx0XHRcdGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleCA9IHNlbGVjdF9ibG9ja190eXBlKGN0eCk7XG5cbiAgICBcdFx0XHRpZiAoY3VycmVudF9ibG9ja190eXBlX2luZGV4ID09PSBwcmV2aW91c19ibG9ja19pbmRleCkge1xuICAgIFx0XHRcdFx0aWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0ucChjdHgsIGRpcnR5KTtcbiAgICBcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2Nrc1twcmV2aW91c19ibG9ja19pbmRleF0sIDEsIDEsICgpID0+IHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2tzW3ByZXZpb3VzX2Jsb2NrX2luZGV4XSA9IG51bGw7XG4gICAgXHRcdFx0XHR9KTtcblxuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0XHRpZl9ibG9jazAgPSBpZl9ibG9ja3NbY3VycmVudF9ibG9ja190eXBlX2luZGV4XTtcblxuICAgIFx0XHRcdFx0aWYgKCFpZl9ibG9jazApIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swID0gaWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0gPSBpZl9ibG9ja19jcmVhdG9yc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAucChjdHgsIGRpcnR5KTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgIFx0XHRcdFx0aWZfYmxvY2swLm0oZGl2LCBudWxsKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLmNhcHRpb24pIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5WzBdICYgLyphY3RpdmVJdGVtKi8gNjQpIHtcbiAgICBcdFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdH1cbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMSA9IGNyZWF0ZV9pZl9ibG9ja18yKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5jKCk7XG4gICAgXHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLm0oaWZfYmxvY2sxX2FuY2hvci5wYXJlbnROb2RlLCBpZl9ibG9jazFfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMSkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazApO1xuXG4gICAgXHRcdFx0YWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgXHRcdFx0XHRpZiAoZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdFx0ZGl2X2ludHJvID0gY3JlYXRlX2luX3RyYW5zaXRpb24oZGl2LCAvKm1lZGlhVHJhbnNpdGlvbiovIGN0eFsxMl0sIHRydWUpO1xuICAgIFx0XHRcdFx0ZGl2X2ludHJvLnN0YXJ0KCk7XG4gICAgXHRcdFx0fSk7XG5cbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazApO1xuICAgIFx0XHRcdGlmIChkaXZfaW50cm8pIGRpdl9pbnRyby5pbnZhbGlkYXRlKCk7XG4gICAgXHRcdFx0ZGl2X291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGRpdiwgLyptZWRpYVRyYW5zaXRpb24qLyBjdHhbMTJdLCBmYWxzZSk7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2sxKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0aWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0uZCgpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcgJiYgZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmQoZGV0YWNoaW5nKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goaWZfYmxvY2sxX2FuY2hvcik7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxMTo1NTQpIHsjaWYgaXRlbXMubGVuZ3RoID4gMX1cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMShjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgcmF3X3ZhbHVlID0gYCR7Lypwb3NpdGlvbiovIGN0eFs0XSArIDF9IC8gJHsvKml0ZW1zKi8gY3R4WzBdLmxlbmd0aH1gICsgXCJcIjtcbiAgICBcdGxldCBidXR0b24wO1xuICAgIFx0bGV0IGJ1dHRvbjE7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YnV0dG9uMCA9IGVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXHRcdFx0YnV0dG9uMSA9IGVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1jb3VudFwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjAsIFwiY2xhc3NcIiwgXCJicC1wcmV2XCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uMCwgXCJ0aXRsZVwiLCBcIlByZXZpb3VzXCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uMCwgXCJhcmlhLWxhYmVsXCIsIFwiUHJldmlvdXNcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24xLCBcImNsYXNzXCIsIFwiYnAtbmV4dFwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjEsIFwidGl0bGVcIiwgXCJOZXh0XCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uMSwgXCJhcmlhLWxhYmVsXCIsIFwiTmV4dFwiKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICBcdFx0XHRkaXYuaW5uZXJIVE1MID0gcmF3X3ZhbHVlO1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGJ1dHRvbjAsIGFuY2hvcik7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgYnV0dG9uMSwgYW5jaG9yKTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IFtcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGJ1dHRvbjAsIFwiY2xpY2tcIiwgLypwcmV2Ki8gY3R4WzJdKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGJ1dHRvbjEsIFwiY2xpY2tcIiwgLypuZXh0Ki8gY3R4WzNdKVxuICAgIFx0XHRcdFx0XTtcblxuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKnBvc2l0aW9uLCBpdGVtcyovIDE3ICYmIHJhd192YWx1ZSAhPT0gKHJhd192YWx1ZSA9IGAkey8qcG9zaXRpb24qLyBjdHhbNF0gKyAxfSAvICR7LyppdGVtcyovIGN0eFswXS5sZW5ndGh9YCArIFwiXCIpKSBkaXYuaW5uZXJIVE1MID0gcmF3X3ZhbHVlO1x0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChidXR0b24wKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goYnV0dG9uMSk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50KGN0eCkge1xuICAgIFx0bGV0IGlmX2Jsb2NrX2FuY2hvcjtcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IGlmX2Jsb2NrID0gLyppdGVtcyovIGN0eFswXSAmJiBjcmVhdGVfaWZfYmxvY2soY3R4KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRpZl9ibG9ja19hbmNob3IgPSBlbXB0eSgpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpZl9ibG9ja19hbmNob3IsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmICgvKml0ZW1zKi8gY3R4WzBdKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2spIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sucChjdHgsIGRpcnR5KTtcblxuICAgIFx0XHRcdFx0XHRpZiAoZGlydHlbMF0gJiAvKml0ZW1zKi8gMSkge1xuICAgIFx0XHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2ssIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jayA9IGNyZWF0ZV9pZl9ibG9jayhjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5jKCk7XG4gICAgXHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2ssIDEpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5tKGlmX2Jsb2NrX2FuY2hvci5wYXJlbnROb2RlLCBpZl9ibG9ja19hbmNob3IpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2spIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jayA9IG51bGw7XG4gICAgXHRcdFx0XHR9KTtcblxuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5kKGRldGFjaGluZyk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGlmX2Jsb2NrX2FuY2hvcik7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFuY2UoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgICBcdGxldCAkem9vbWVkO1xuICAgIFx0bGV0IHsgaXRlbXMgPSB1bmRlZmluZWQgfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgeyB0YXJnZXQgPSB1bmRlZmluZWQgfSA9ICQkcHJvcHM7XG4gICAgXHRjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgXHQvKiogaW5kZXggb2YgY3VycmVudCBhY3RpdmUgaXRlbSAqL1xuICAgIFx0bGV0IHBvc2l0aW9uO1xuXG4gICAgXHQvKiogb3B0aW9ucyBwYXNzZWQgdmlhIG9wZW4gbWV0aG9kICovXG4gICAgXHRsZXQgb3B0cztcblxuICAgIFx0LyoqIGJvb2wgdHJhY2tzIG9wZW4gc3RhdGUgKi9cbiAgICBcdGxldCBpc09wZW47XG5cbiAgICBcdC8qKiBkb20gZWxlbWVudCB0byByZXN0b3JlIGZvY3VzIHRvIG9uIGNsb3NlICovXG4gICAgXHRsZXQgZm9jdXNUcmlnZ2VyO1xuXG4gICAgXHQvKiogYm9vbCB0cnVlIGlmIGNvbnRhaW5lciB3aWR0aCA8IDc2OSAqL1xuICAgIFx0bGV0IHNtYWxsU2NyZWVuO1xuXG4gICAgXHQvKiogYm9vbCB2YWx1ZSBvZiBpbmxpbmUgb3B0aW9uIHBhc3NlZCBpbiBvcGVuIG1ldGhvZCAqL1xuICAgIFx0bGV0IGlubGluZTtcblxuICAgIFx0LyoqIHdoZW4gcG9zaXRpb24gaXMgc2V0ICovXG4gICAgXHRsZXQgbW92ZW1lbnQ7XG5cbiAgICBcdC8qKiBzdG9yZXMgdGFyZ2V0IG9uIHBvaW50ZXJkb3duIChyZWYgZm9yIG92ZXJsYXkgY2xvc2UpICovXG4gICAgXHRsZXQgY2xpY2tlZEVsO1xuXG4gICAgXHQvKiogYWN0aXZlIGl0ZW0gb2JqZWN0ICovXG4gICAgXHRsZXQgYWN0aXZlSXRlbTtcblxuICAgIFx0LyoqIHJldHVybnMgdHJ1ZSBpZiBgYWN0aXZlSXRlbWAgaXMgaHRtbCAqL1xuICAgIFx0Y29uc3QgYWN0aXZlSXRlbUlzSHRtbCA9ICgpID0+ICFhY3RpdmVJdGVtLmltZyAmJiAhYWN0aXZlSXRlbS5zb3VyY2VzICYmICFhY3RpdmVJdGVtLmlmcmFtZTtcblxuICAgIFx0LyoqIGZ1bmN0aW9uIHNldCBieSBjaGlsZCBjb21wb25lbnQgdG8gcnVuIHdoZW4gY29udGFpbmVyIHJlc2l6ZWQgKi9cbiAgICBcdGxldCByZXNpemVGdW5jO1xuXG4gICAgXHQvKiogdXNlZCBieSBjaGlsZCBjb21wb25lbnRzIHRvIHNldCByZXNpemUgZnVuY3Rpb24gKi9cbiAgICBcdGNvbnN0IHNldFJlc2l6ZUZ1bmMgPSBmbiA9PiByZXNpemVGdW5jID0gZm47XG5cbiAgICBcdC8qKiBjb250YWluZXIgZWxlbWVudCAoZWwpIC8gd2lkdGggKHcpIC8gaGVpZ2h0IChoKSAqL1xuICAgIFx0Y29uc3QgY29udGFpbmVyID0ge307XG5cbiAgICBcdC8vIC8qKiB0cnVlIGlmIGltYWdlIGlzIGN1cnJlbnRseSB6b29tZWQgcGFzdCBzdGFydGluZyBzaXplICovXG4gICAgXHRjb25zdCB6b29tZWQgPSB3cml0YWJsZSgwKTtcblxuICAgIFx0Y29tcG9uZW50X3N1YnNjcmliZSgkJHNlbGYsIHpvb21lZCwgdmFsdWUgPT4gJCRpbnZhbGlkYXRlKDEwLCAkem9vbWVkID0gdmFsdWUpKTtcblxuICAgIFx0Y29uc3Qgb3BlbiA9IG9wdGlvbnMgPT4ge1xuICAgIFx0XHQkJGludmFsaWRhdGUoNSwgb3B0cyA9IG9wdGlvbnMpO1xuICAgIFx0XHQkJGludmFsaWRhdGUoOCwgaW5saW5lID0gb3B0cy5pbmxpbmUpO1xuXG4gICAgXHRcdC8vIGFkZCBjbGFzcyB0byBoaWRlIHNjcm9sbCBpZiBub3QgaW5saW5lIGdhbGxlcnlcbiAgICBcdFx0aWYgKCFpbmxpbmUgJiYgaHRtbC5zY3JvbGxIZWlnaHQgPiBodG1sLmNsaWVudEhlaWdodCkge1xuICAgIFx0XHRcdGh0bWwuY2xhc3NMaXN0LmFkZCgnYnAtbG9jaycpO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gdXBkYXRlIHRyaWdnZXIgZWxlbWVudCB0byByZXN0b3JlIGZvY3VzXG4gICAgXHRcdGZvY3VzVHJpZ2dlciA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICBcdFx0JCRpbnZhbGlkYXRlKDE5LCBjb250YWluZXIudyA9IHRhcmdldC5vZmZzZXRXaWR0aCwgY29udGFpbmVyKTtcblxuICAgIFx0XHQkJGludmFsaWRhdGUoXG4gICAgXHRcdFx0MTksXG4gICAgXHRcdFx0Y29udGFpbmVyLmggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHlcbiAgICBcdFx0XHQ/IGdsb2JhbFRoaXMuaW5uZXJIZWlnaHRcbiAgICBcdFx0XHQ6IHRhcmdldC5jbGllbnRIZWlnaHQsXG4gICAgXHRcdFx0Y29udGFpbmVyXG4gICAgXHRcdCk7XG5cbiAgICBcdFx0JCRpbnZhbGlkYXRlKDcsIHNtYWxsU2NyZWVuID0gY29udGFpbmVyLncgPCA3NjkpO1xuICAgIFx0XHQkJGludmFsaWRhdGUoNCwgcG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IDApO1xuXG4gICAgXHRcdC8vIHNldCBpdGVtc1xuICAgIFx0XHQkJGludmFsaWRhdGUoMCwgaXRlbXMgPSBbXSk7XG5cbiAgICBcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAob3B0cy5pdGVtcy5sZW5ndGggfHwgMSk7IGkrKykge1xuICAgIFx0XHRcdGxldCBpdGVtID0gb3B0cy5pdGVtc1tpXSB8fCBvcHRzLml0ZW1zO1xuXG4gICAgXHRcdFx0aWYgKCdkYXRhc2V0JyBpbiBpdGVtKSB7XG4gICAgXHRcdFx0XHRpdGVtcy5wdXNoKHsgZWxlbWVudDogaXRlbSwgaSwgLi4uaXRlbS5kYXRhc2V0IH0pO1xuICAgIFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRpdGVtLmkgPSBpO1xuICAgIFx0XHRcdFx0aXRlbXMucHVzaChpdGVtKTtcblxuICAgIFx0XHRcdFx0Ly8gc2V0IGl0ZW0gdG8gZWxlbWVudCBmb3IgcG9zaXRpb24gY2hlY2sgYmVsb3dcbiAgICBcdFx0XHRcdGl0ZW0gPSBpdGVtLmVsZW1lbnQ7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0Ly8gb3ZlcnJpZGUgZ2FsbGVyeSBwb3NpdGlvbiBpZiBuZWVkZWRcbiAgICBcdFx0XHRpZiAob3B0cy5lbCAmJiBvcHRzLmVsID09PSBpdGVtKSB7XG4gICAgXHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9zaXRpb24gPSBpKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgIFx0XHRvcHRzLm9uQ2xvc2U/Lihjb250YWluZXIuZWwsIGFjdGl2ZUl0ZW0pO1xuICAgIFx0XHRjbG9zaW5nLnNldCh0cnVlKTtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDAsIGl0ZW1zID0gbnVsbCk7XG5cbiAgICBcdFx0Ly8gcmVzdG9yZSBmb2N1cyB0byB0cmlnZ2VyIGVsZW1lbnRcbiAgICBcdFx0Zm9jdXNUcmlnZ2VyPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBwcmV2ID0gKCkgPT4gc2V0UG9zaXRpb24ocG9zaXRpb24gLSAxKTtcbiAgICBcdGNvbnN0IG5leHQgPSAoKSA9PiBzZXRQb3NpdGlvbihwb3NpdGlvbiArIDEpO1xuXG4gICAgXHRjb25zdCBzZXRQb3NpdGlvbiA9IGluZGV4ID0+IHtcbiAgICBcdFx0bW92ZW1lbnQgPSBpbmRleCAtIHBvc2l0aW9uO1xuICAgIFx0XHQkJGludmFsaWRhdGUoNCwgcG9zaXRpb24gPSBnZXROZXh0UG9zaXRpb24oaW5kZXgpKTtcbiAgICBcdH07XG5cbiAgICBcdC8qKlxuICAgICAqIHJldHVybnMgbmV4dCBnYWxsZXJ5IHBvc2l0aW9uIChsb29wZWQgaWYgbmVjY2Vzc2FyeSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICAgKi9cbiAgICBcdGNvbnN0IGdldE5leHRQb3NpdGlvbiA9IGluZGV4ID0+IChpbmRleCArIGl0ZW1zLmxlbmd0aCkgJSBpdGVtcy5sZW5ndGg7XG5cbiAgICBcdGNvbnN0IG9uS2V5ZG93biA9IGUgPT4ge1xuICAgIFx0XHRjb25zdCB7IGtleSwgc2hpZnRLZXkgfSA9IGU7XG5cbiAgICBcdFx0aWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICBcdFx0XHQhb3B0cy5ub0Nsb3NlICYmIGNsb3NlKCk7XG4gICAgXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICBcdFx0XHRuZXh0KCk7XG4gICAgXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgIFx0XHRcdHByZXYoKTtcbiAgICBcdFx0fSBlbHNlIGlmIChrZXkgPT09ICdUYWInKSB7XG4gICAgXHRcdFx0Ly8gdHJhcCBmb2N1cyBvbiB0YWIgcHJlc3NcbiAgICBcdFx0XHRjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuXG4gICAgXHRcdFx0Ly8gYWxsb3cgYnJvd3NlciB0byBoYW5kbGUgdGFiIGludG8gdmlkZW8gY29udHJvbHMgb25seVxuICAgIFx0XHRcdGlmIChzaGlmdEtleSB8fCAhYWN0aXZlRWxlbWVudC5jb250cm9scykge1xuICAgIFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFx0XHRcdFx0Y29uc3QgeyBmb2N1c1dyYXAgPSBjb250YWluZXIuZWwgfSA9IG9wdHM7XG4gICAgXHRcdFx0XHRjb25zdCB0YWJiYWJsZSA9IFsuLi5mb2N1c1dyYXAucXVlcnlTZWxlY3RvckFsbCgnKicpXS5maWx0ZXIobm9kZSA9PiBub2RlLnRhYkluZGV4ID49IDApO1xuICAgIFx0XHRcdFx0bGV0IGluZGV4ID0gdGFiYmFibGUuaW5kZXhPZihhY3RpdmVFbGVtZW50KTtcbiAgICBcdFx0XHRcdGluZGV4ICs9IHRhYmJhYmxlLmxlbmd0aCArIChzaGlmdEtleSA/IC0xIDogMSk7XG4gICAgXHRcdFx0XHR0YWJiYWJsZVtpbmRleCAlIHRhYmJhYmxlLmxlbmd0aF0uZm9jdXMoKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdC8qKlxuICAgICAqIGNhbGN1bGF0ZSBkaW1lbnNpb25zIG9mIGhlaWdodCAvIHdpZHRoIHJlc2l6ZWQgdG8gZml0IHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbSBvYmplY3Qgd2l0aCBoZWlnaHQgLyB3aWR0aCBwcm9wZXJ0aWVzXG4gICAgICogQHJldHVybnMge0FycmF5fSBbd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJdXG4gICAgICovXG4gICAgXHRjb25zdCBjYWxjdWxhdGVEaW1lbnNpb25zID0gKHsgd2lkdGggPSAxOTIwLCBoZWlnaHQgPSAxMDgwIH0pID0+IHtcbiAgICBcdFx0Y29uc3QgeyBzY2FsZSA9IDAuOTkgfSA9IG9wdHM7XG4gICAgXHRcdGNvbnN0IHJhdGlvID0gTWF0aC5taW4oMSwgY29udGFpbmVyLncgLyB3aWR0aCAqIHNjYWxlLCBjb250YWluZXIuaCAvIGhlaWdodCAqIHNjYWxlKTtcblxuICAgIFx0XHQvLyByb3VuZCBudW1iZXIgc28gd2UgZG9uJ3QgdXNlIGEgZmxvYXQgYXMgdGhlIHNpemVzIGF0dHJpYnV0ZVxuICAgIFx0XHRyZXR1cm4gW01hdGgucm91bmQod2lkdGggKiByYXRpbyksIE1hdGgucm91bmQoaGVpZ2h0ICogcmF0aW8pXTtcbiAgICBcdH07XG5cbiAgICBcdC8qKiBwcmVsb2FkcyBpbWFnZXMgZm9yIHByZXZpb3VzIGFuZCBuZXh0IGl0ZW1zIGluIGdhbGxlcnkgKi9cbiAgICBcdGNvbnN0IHByZWxvYWROZXh0ID0gKCkgPT4ge1xuICAgIFx0XHRpZiAoaXRlbXMpIHtcbiAgICBcdFx0XHRjb25zdCBuZXh0SXRlbSA9IGl0ZW1zW2dldE5leHRQb3NpdGlvbihwb3NpdGlvbiArIDEpXTtcbiAgICBcdFx0XHRjb25zdCBwcmV2SXRlbSA9IGl0ZW1zW2dldE5leHRQb3NpdGlvbihwb3NpdGlvbiAtIDEpXTtcbiAgICBcdFx0XHQhbmV4dEl0ZW0ucHJlbG9hZCAmJiBsb2FkSW1hZ2UobmV4dEl0ZW0pO1xuICAgIFx0XHRcdCFwcmV2SXRlbS5wcmVsb2FkICYmIGxvYWRJbWFnZShwcmV2SXRlbSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdC8qKiBsb2FkcyAvIGRlY29kZXMgaW1hZ2UgZm9yIGl0ZW0gKi9cbiAgICBcdGNvbnN0IGxvYWRJbWFnZSA9IGl0ZW0gPT4ge1xuICAgIFx0XHRpZiAoaXRlbS5pbWcpIHtcbiAgICBcdFx0XHRjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIFx0XHRcdGltYWdlLnNpemVzID0gb3B0cy5zaXplcyB8fCBgJHtjYWxjdWxhdGVEaW1lbnNpb25zKGl0ZW0pWzBdfXB4YDtcbiAgICBcdFx0XHRpbWFnZS5zcmNzZXQgPSBpdGVtLmltZztcbiAgICBcdFx0XHRpdGVtLnByZWxvYWQgPSB0cnVlO1xuXG4gICAgXHRcdFx0cmV0dXJuIGltYWdlLmRlY29kZSgpLmNhdGNoKGVycm9yID0+IHtcbiAgICBcdFx0XHRcdFxuICAgIFx0XHRcdH0pO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHQvKiogc3ZlbHRlIHRyYW5zaXRpb24gdG8gY29udHJvbCBvcGVuaW5nIC8gY2hhbmdpbmcgKi9cbiAgICBcdGNvbnN0IG1lZGlhVHJhbnNpdGlvbiA9IChub2RlLCBpc0VudGVyaW5nKSA9PiB7XG4gICAgXHRcdGlmICghaXNPcGVuIHx8ICFpdGVtcykge1xuICAgIFx0XHRcdC8vIGVudHJhbmNlIC8gZXhpdCB0cmFuc2l0aW9uXG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDE4LCBpc09wZW4gPSBpc0VudGVyaW5nKTtcblxuICAgIFx0XHRcdHJldHVybiBvcHRzLmludHJvXG4gICAgXHRcdFx0PyBmbHkobm9kZSwgeyB5OiBpc0VudGVyaW5nID8gMTAgOiAtMTAgfSlcbiAgICBcdFx0XHQ6IHNjYWxlSW4obm9kZSk7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBmb3J3YXJkIC8gYmFja3dhcmQgdHJhbnNpdGlvblxuICAgIFx0XHRyZXR1cm4gZmx5KG5vZGUsIHtcbiAgICBcdFx0XHR4OiAobW92ZW1lbnQgPiAwID8gMjAgOiAtMjApICogKGlzRW50ZXJpbmcgPyAxIDogLTEpLFxuICAgIFx0XHRcdGR1cmF0aW9uOiAyNTBcbiAgICBcdFx0fSk7XG4gICAgXHR9O1xuXG4gICAgXHQvKiogY3VzdG9tIHN2ZWx0ZSB0cmFuc2l0aW9uIGZvciBlbnRyYW5jZSB6b29tICovXG4gICAgXHRjb25zdCBzY2FsZUluID0gbm9kZSA9PiB7XG4gICAgXHRcdGxldCBkaW1lbnNpb25zO1xuXG4gICAgXHRcdGlmIChhY3RpdmVJdGVtSXNIdG1sKCkpIHtcbiAgICBcdFx0XHRjb25zdCBicEl0ZW0gPSBub2RlLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcbiAgICBcdFx0XHRkaW1lbnNpb25zID0gW2JwSXRlbS5jbGllbnRXaWR0aCwgYnBJdGVtLmNsaWVudEhlaWdodF07XG4gICAgXHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0ZGltZW5zaW9ucyA9IGNhbGN1bGF0ZURpbWVuc2lvbnMoYWN0aXZlSXRlbSk7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyByZWN0IGlzIGJvdW5kaW5nIHJlY3Qgb2YgdHJpZ2dlciBlbGVtZW50XG4gICAgXHRcdGNvbnN0IHJlY3QgPSAoYWN0aXZlSXRlbS5lbGVtZW50IHx8IGZvY3VzVHJpZ2dlcikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBcdFx0Y29uc3QgbGVmdE9mZnNldCA9IHJlY3QubGVmdCAtIChjb250YWluZXIudyAtIHJlY3Qud2lkdGgpIC8gMjtcbiAgICBcdFx0Y29uc3QgY2VudGVyVG9wID0gcmVjdC50b3AgLSAoY29udGFpbmVyLmggLSByZWN0LmhlaWdodCkgLyAyO1xuICAgIFx0XHRjb25zdCBzY2FsZVdpZHRoID0gcmVjdC53aWR0aCAvIGRpbWVuc2lvbnNbMF07XG4gICAgXHRcdGNvbnN0IHNjYWxlSGVpZ2h0ID0gcmVjdC5oZWlnaHQgLyBkaW1lbnNpb25zWzFdO1xuXG4gICAgXHRcdHJldHVybiB7XG4gICAgXHRcdFx0ZHVyYXRpb246IDQ4MCxcbiAgICBcdFx0XHRlYXNpbmc6IGN1YmljT3V0LFxuICAgIFx0XHRcdGNzczogKHQsIHUpID0+IHtcbiAgICBcdFx0XHRcdHJldHVybiBgdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKCR7bGVmdE9mZnNldCAqIHV9cHgsICR7Y2VudGVyVG9wICogdX1weCwgMCkgc2NhbGUzZCgke3NjYWxlV2lkdGggKyB0ICogKDEgLSBzY2FsZVdpZHRoKX0sICR7c2NhbGVIZWlnaHQgKyB0ICogKDEgLSBzY2FsZUhlaWdodCl9LCAxKWA7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9O1xuICAgIFx0fTtcblxuICAgIFx0LyoqIHByb3ZpZGVzIG9iamVjdCB3LyBuZWVkZWQgZnVuY3MgLyBkYXRhIHRvIGNoaWxkIGNvbXBvbmVudHMgICovXG4gICAgXHRjb25zdCBnZXRDaGlsZFByb3BzID0gKCkgPT4gKHtcbiAgICBcdFx0YWN0aXZlSXRlbSxcbiAgICBcdFx0Y2FsY3VsYXRlRGltZW5zaW9ucyxcbiAgICBcdFx0bG9hZEltYWdlLFxuICAgIFx0XHRwcmVsb2FkTmV4dCxcbiAgICBcdFx0b3B0cyxcbiAgICBcdFx0cHJldixcbiAgICBcdFx0bmV4dCxcbiAgICBcdFx0Y2xvc2UsXG4gICAgXHRcdHNldFJlc2l6ZUZ1bmMsXG4gICAgXHRcdHpvb21lZCxcbiAgICBcdFx0Y29udGFpbmVyXG4gICAgXHR9KTtcblxuICAgIFx0LyoqIGNvZGUgdG8gcnVuIG9uIG1vdW50IC8gZGVzdHJveSAqL1xuICAgIFx0Y29uc3QgY29udGFpbmVyQWN0aW9ucyA9IG5vZGUgPT4ge1xuICAgIFx0XHQkJGludmFsaWRhdGUoMTksIGNvbnRhaW5lci5lbCA9IG5vZGUsIGNvbnRhaW5lcik7XG4gICAgXHRcdGxldCByb0FjdGl2ZTtcbiAgICBcdFx0b3B0cy5vbk9wZW4/Lihjb250YWluZXIuZWwsIGFjdGl2ZUl0ZW0pO1xuXG4gICAgXHRcdC8vIGRvbid0IHVzZSBrZXlib2FyZCBldmVudHMgZm9yIGlubGluZSBnYWxsZXJpZXNcbiAgICBcdFx0aWYgKCFpbmxpbmUpIHtcbiAgICBcdFx0XHRnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gc2V0IHVwIHJlc2l6ZSBvYnNlcnZlclxuICAgIFx0XHRjb25zdCBybyA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICBcdFx0XHRcdC8vIHVzZSByb0FjdGl2ZSB0byBhdm9pZCBydW5uaW5nIG9uIGluaXRpYWwgb3BlblxuICAgIFx0XHRcdFx0aWYgKHJvQWN0aXZlKSB7XG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSgxOSwgY29udGFpbmVyLncgPSBlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LndpZHRoLCBjb250YWluZXIpO1xuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoMTksIGNvbnRhaW5lci5oID0gZW50cmllc1swXS5jb250ZW50UmVjdC5oZWlnaHQsIGNvbnRhaW5lcik7XG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSg3LCBzbWFsbFNjcmVlbiA9IGNvbnRhaW5lci53IDwgNzY5KTtcblxuICAgIFx0XHRcdFx0XHQvLyBydW4gY2hpbGQgY29tcG9uZW50IHJlc2l6ZSBmdW5jdGlvblxuICAgIFx0XHRcdFx0XHRpZiAoIWFjdGl2ZUl0ZW1Jc0h0bWwoKSkge1xuICAgIFx0XHRcdFx0XHRcdHJlc2l6ZUZ1bmM/LigpO1xuICAgIFx0XHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdFx0Ly8gcnVuIHVzZXIgZGVmaW5lZCBvblJlc2l6ZSBmdW5jdGlvblxuICAgIFx0XHRcdFx0XHRvcHRzLm9uUmVzaXplPy4oY29udGFpbmVyLmVsLCBhY3RpdmVJdGVtKTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0cm9BY3RpdmUgPSB0cnVlO1xuICAgIFx0XHRcdH0pO1xuXG4gICAgXHRcdHJvLm9ic2VydmUobm9kZSk7XG5cbiAgICBcdFx0cmV0dXJuIHtcbiAgICBcdFx0XHRkZXN0cm95KCkge1xuICAgIFx0XHRcdFx0cm8uZGlzY29ubmVjdCgpO1xuICAgIFx0XHRcdFx0Z2xvYmFsVGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcbiAgICBcdFx0XHRcdGNsb3Npbmcuc2V0KGZhbHNlKTtcblxuICAgIFx0XHRcdFx0Ly8gcmVtb3ZlIGNsYXNzIGhpZGluZyBzY3JvbGxcbiAgICBcdFx0XHRcdGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnYnAtbG9jaycpO1xuXG4gICAgXHRcdFx0XHRvcHRzLm9uQ2xvc2VkPy4oKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH07XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBwb2ludGVyZG93bl9oYW5kbGVyID0gZSA9PiAkJGludmFsaWRhdGUoOSwgY2xpY2tlZEVsID0gZS50YXJnZXQpO1xuXG4gICAgXHRjb25zdCBwb2ludGVydXBfaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgXHRcdC8vIG9ubHkgY2xvc2UgaWYgbGVmdCBjbGljayBvbiBzZWxmIGFuZCBub3QgZHJhZ2dlZFxuICAgIFx0XHRpZiAoZS5idXR0b24gIT09IDIgJiYgZS50YXJnZXQgPT09IHRoaXMgJiYgY2xpY2tlZEVsID09PSB0aGlzKSB7XG4gICAgXHRcdFx0IW9wdHMubm9DbG9zZSAmJiBjbG9zZSgpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHQkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBcdFx0aWYgKCdpdGVtcycgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDAsIGl0ZW1zID0gJCRwcm9wcy5pdGVtcyk7XG4gICAgXHRcdGlmICgndGFyZ2V0JyBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMTUsIHRhcmdldCA9ICQkcHJvcHMudGFyZ2V0KTtcbiAgICBcdH07XG5cbiAgICBcdCQkc2VsZi4kJC51cGRhdGUgPSAoKSA9PiB7XG4gICAgXHRcdGlmICgkJHNlbGYuJCQuZGlydHlbMF0gJiAvKml0ZW1zLCBwb3NpdGlvbiwgaXNPcGVuLCBvcHRzLCBjb250YWluZXIsIGFjdGl2ZUl0ZW0qLyA3ODY1NDUpIHtcbiAgICBcdFx0XHRpZiAoaXRlbXMpIHtcbiAgICBcdFx0XHRcdC8vIHVwZGF0ZSBhY3RpdmUgaXRlbSB3aGVuIHBvc2l0aW9uIGNoYW5nZXNcbiAgICBcdFx0XHRcdCQkaW52YWxpZGF0ZSg2LCBhY3RpdmVJdGVtID0gaXRlbXNbcG9zaXRpb25dKTtcblxuICAgIFx0XHRcdFx0aWYgKGlzT3Blbikge1xuICAgIFx0XHRcdFx0XHQvLyBydW4gb25VcGRhdGUgd2hlbiBpdGVtcyB1cGRhdGVkXG4gICAgXHRcdFx0XHRcdG9wdHMub25VcGRhdGU/Lihjb250YWluZXIuZWwsIGFjdGl2ZUl0ZW0pO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0cmV0dXJuIFtcbiAgICBcdFx0aXRlbXMsXG4gICAgXHRcdGNsb3NlLFxuICAgIFx0XHRwcmV2LFxuICAgIFx0XHRuZXh0LFxuICAgIFx0XHRwb3NpdGlvbixcbiAgICBcdFx0b3B0cyxcbiAgICBcdFx0YWN0aXZlSXRlbSxcbiAgICBcdFx0c21hbGxTY3JlZW4sXG4gICAgXHRcdGlubGluZSxcbiAgICBcdFx0Y2xpY2tlZEVsLFxuICAgIFx0XHQkem9vbWVkLFxuICAgIFx0XHR6b29tZWQsXG4gICAgXHRcdG1lZGlhVHJhbnNpdGlvbixcbiAgICBcdFx0Z2V0Q2hpbGRQcm9wcyxcbiAgICBcdFx0Y29udGFpbmVyQWN0aW9ucyxcbiAgICBcdFx0dGFyZ2V0LFxuICAgIFx0XHRvcGVuLFxuICAgIFx0XHRzZXRQb3NpdGlvbixcbiAgICBcdFx0aXNPcGVuLFxuICAgIFx0XHRjb250YWluZXIsXG4gICAgXHRcdHBvaW50ZXJkb3duX2hhbmRsZXIsXG4gICAgXHRcdHBvaW50ZXJ1cF9oYW5kbGVyXG4gICAgXHRdO1xuICAgIH1cblxuICAgIGNsYXNzIEJpZ2dlcl9waWN0dXJlIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBcdFx0c3VwZXIoKTtcblxuICAgIFx0XHRpbml0KFxuICAgIFx0XHRcdHRoaXMsXG4gICAgXHRcdFx0b3B0aW9ucyxcbiAgICBcdFx0XHRpbnN0YW5jZSxcbiAgICBcdFx0XHRjcmVhdGVfZnJhZ21lbnQsXG4gICAgXHRcdFx0bm90X2VxdWFsLFxuICAgIFx0XHRcdHtcbiAgICBcdFx0XHRcdGl0ZW1zOiAwLFxuICAgIFx0XHRcdFx0dGFyZ2V0OiAxNSxcbiAgICBcdFx0XHRcdG9wZW46IDE2LFxuICAgIFx0XHRcdFx0Y2xvc2U6IDEsXG4gICAgXHRcdFx0XHRwcmV2OiAyLFxuICAgIFx0XHRcdFx0bmV4dDogMyxcbiAgICBcdFx0XHRcdHNldFBvc2l0aW9uOiAxN1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0bnVsbCxcbiAgICBcdFx0XHRbLTEsIC0xXVxuICAgIFx0XHQpO1xuICAgIFx0fVxuXG4gICAgXHRnZXQgaXRlbXMoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFswXTtcbiAgICBcdH1cblxuXG5cbiAgICBcdGdldCB0YXJnZXQoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFsxNV07XG4gICAgXHR9XG5cblxuXG4gICAgXHRnZXQgb3BlbigpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzE2XTtcbiAgICBcdH1cblxuICAgIFx0Z2V0IGNsb3NlKCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMV07XG4gICAgXHR9XG5cbiAgICBcdGdldCBwcmV2KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMl07XG4gICAgXHR9XG5cbiAgICBcdGdldCBuZXh0KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbM107XG4gICAgXHR9XG5cbiAgICBcdGdldCBzZXRQb3NpdGlvbigpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzE3XTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBCaWdnZXJQaWN0dXJlXG4gICAgICogQHBhcmFtIHt7dGFyZ2V0OiBIVE1MRWxlbWVudH19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyBCaWdnZXJQaWN0dXJlIGluc3RhbmNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYmlnZ2VyUGljdHVyZSAob3B0aW9ucykge1xuICAgIFx0cmV0dXJuIG5ldyBCaWdnZXJfcGljdHVyZSh7XG4gICAgXHRcdC4uLm9wdGlvbnMsXG4gICAgXHRcdHByb3BzOiBvcHRpb25zLFxuICAgIFx0fSlcbiAgICB9XG5cbiAgICByZXR1cm4gYmlnZ2VyUGljdHVyZTtcblxufSkpO1xuIiwgIigoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZScpLmZvckVhY2goKHRhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1yZXNwb25zaXZlJ1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRhYmxlLmNsb25lTm9kZSh0cnVlKSlcbiAgICAgICAgdGFibGUucGFyZW50Tm9kZT8ucmVwbGFjZUNoaWxkKHdyYXBwZXIsIHRhYmxlKVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGUsXG4gIGdldEVsZW1lbnQsXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBpc0Rpc2FibGVkLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIG5vb3Bcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZHJvcGRvd24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyIC8vIE1vdXNlRXZlbnQuYnV0dG9uIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiwgdXN1YWxseSB0aGUgcmlnaHQgYnV0dG9uXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRU5EID0gJ2Ryb3BlbmQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BTVEFSVCA9ICdkcm9wc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUF9DRU5URVIgPSAnZHJvcHVwLWNlbnRlcidcbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSID0gJ2Ryb3Bkb3duLWNlbnRlcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfS4ke0NMQVNTX05BTUVfU0hPV31gXG5jb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSID0gJy5uYXZiYXInXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BDRU5URVIgPSAndG9wJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiA9ICdib3R0b20nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGF1dG9DbG9zZTogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBkaXNwbGF5OiAnZHluYW1pYycsXG4gIG9mZnNldDogWzAsIDJdLFxuICBwb3BwZXJDb25maWc6IG51bGwsXG4gIHJlZmVyZW5jZTogJ3RvZ2dsZSdcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgLy8gZHJvcGRvd24gd3JhcHBlclxuICAgIC8vIFRPRE86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICB0aGlzLl9tZW51ID0gU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NRU5VLCB0aGlzLl9wYXJlbnQpXG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24oKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NyZWF0ZVBvcHBlcigpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIXRoaXMuX3BhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gc3VwZXIuX2dldENvbmZpZyhjb25maWcpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoY29uZmlnLnJlZmVyZW5jZSkgJiZcbiAgICAgIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2RcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIoKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9wYXJlbnRcbiAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcbiAgICB9XG5cbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKVxuICB9XG5cbiAgX2lzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9wYXJlbnRcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfVE9QQ0VOVEVSXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSXG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCB0byB0cmltIHRoZSB2YWx1ZSBiZWNhdXNlIGN1c3RvbSBwcm9wZXJ0aWVzIGNhbiBhbHNvIGluY2x1ZGUgc3BhY2VzXG4gICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnXG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1BcbiAgICB9XG5cbiAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTVxuICB9XG5cbiAgX2RldGVjdE5hdmJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUikgIT09IG51bGxcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXkgb3IgRHJvcGRvd24gaXMgaW4gTmF2YmFyXG4gICAgaWYgKHRoaXMuX2luTmF2YmFyIHx8IHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ3N0YXRpYycpIC8vIFRPRE86IHY2IHJlbW92ZVxuICAgICAgZGVmYXVsdEJzUG9wcGVyQ29uZmlnLm1vZGlmaWVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RNZW51SXRlbSh7IGtleSwgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCBpdGVtcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVklTSUJMRV9JVEVNUywgdGhpcy5fbWVudSkuZmlsdGVyKGVsZW1lbnQgPT4gaXNWaXNpYmxlKGVsZW1lbnQpKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgLy8gYWxsb3cgY3ljbGluZyB0byBnZXQgdGhlIGxhc3QgaXRlbSBpbiBjYXNlIGtleSBlcXVhbHMgQVJST1dfVVBfS0VZXG4gICAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoaXRlbXMsIHRhcmdldCwga2V5ID09PSBBUlJPV19ET1dOX0tFWSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9wZW5Ub2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTilcblxuICAgIGZvciAoY29uc3QgdG9nZ2xlIG9mIG9wZW5Ub2dnbGVzKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlKVxuICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpXG4gICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgIGlmIChcbiAgICAgICAgY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldClcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBUYWIgbmF2aWdhdGlvbiB0aHJvdWdoIHRoZSBkcm9wZG93biBtZW51IG9yIGV2ZW50cyBmcm9tIGNvbnRhaW5lZCBpbnB1dHMgc2hvdWxkbid0IGNsb3NlIHRoZSBtZW51XG4gICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHsgcmVsYXRlZFRhcmdldDogY29udGV4dC5fZWxlbWVudCB9XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgYW4gVVAgfCBET1dOIHwgRVNDQVBFIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWEgJiYgaWYga2V5IGlzIG90aGVyIHRoYW4gRVNDQVBFID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcblxuICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKVxuICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVlcbiAgICBjb25zdCBpc1VwT3JEb3duRXZlbnQgPSBbQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KVxuXG4gICAgaWYgKCFpc1VwT3JEb3duRXZlbnQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBUT0RPOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/XG4gICAgICB0aGlzIDpcbiAgICAgIChTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pXG5cbiAgICBpZiAoaXNVcE9yRG93bkV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaW5zdGFuY2Uuc2hvdygpXG4gICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UuX2lzU2hvd24oKSkgeyAvLyBlbHNlIGlzIGVzY2FwZSBhbmQgd2UgY2hlY2sgaWYgaXQgaXMgc2hvd25cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5oaWRlKClcbiAgICAgIGdldFRvZ2dsZUJ1dHRvbi5mb2N1cygpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vZGF0YS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgZWxlbWVudE1hcCA9IG5ldyBNYXAoKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldChlbGVtZW50LCBrZXksIGluc3RhbmNlKSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgZWxlbWVudE1hcC5zZXQoZWxlbWVudCwgbmV3IE1hcCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIC8vIG1ha2UgaXQgY2xlYXIgd2Ugb25seSB3YW50IG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudFxuICAgIC8vIGNhbiBiZSByZW1vdmVkIGxhdGVyIHdoZW4gbXVsdGlwbGUga2V5L2luc3RhbmNlcyBhcmUgZmluZSB0byBiZSB1c2VkXG4gICAgaWYgKCFpbnN0YW5jZU1hcC5oYXMoa2V5KSAmJiBpbnN0YW5jZU1hcC5zaXplICE9PSAwKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihgQm9vdHN0cmFwIGRvZXNuJ3QgYWxsb3cgbW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudC4gQm91bmQgaW5zdGFuY2U6ICR7QXJyYXkuZnJvbShpbnN0YW5jZU1hcC5rZXlzKCkpWzBdfS5gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaW5zdGFuY2VNYXAuc2V0KGtleSwgaW5zdGFuY2UpXG4gIH0sXG5cbiAgZ2V0KGVsZW1lbnQsIGtleSkge1xuICAgIGlmIChlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpLmdldChrZXkpIHx8IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIHJlbW92ZShlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICBpbnN0YW5jZU1hcC5kZWxldGUoa2V5KVxuXG4gICAgLy8gZnJlZSB1cCBlbGVtZW50IHJlZmVyZW5jZXMgaWYgdGhlcmUgYXJlIG5vIGluc3RhbmNlcyBsZWZ0IGZvciBhbiBlbGVtZW50XG4gICAgaWYgKGluc3RhbmNlTWFwLnNpemUgPT09IDApIHtcbiAgICAgIGVsZW1lbnRNYXAuZGVsZXRlKGVsZW1lbnQpXG4gICAgfVxuICB9XG59XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNQVhfVUlEID0gMV8wMDBfMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5cbi8qKlxuICogUHJvcGVybHkgZXNjYXBlIElEcyBzZWxlY3RvcnMgdG8gaGFuZGxlIHdlaXJkIElEc1xuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCBwYXJzZVNlbGVjdG9yID0gc2VsZWN0b3IgPT4ge1xuICBpZiAoc2VsZWN0b3IgJiYgd2luZG93LkNTUyAmJiB3aW5kb3cuQ1NTLmVzY2FwZSkge1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgbmVlZHMgZXNjYXBpbmcgdG8gaGFuZGxlIElEcyAoaHRtbDUrKSBjb250YWluaW5nIGZvciBpbnN0YW5jZSAvXG4gICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC8jKFteXFxzXCIjJ10rKS9nLCAobWF0Y2gsIGlkKSA9PiBgIyR7Q1NTLmVzY2FwZShpZCl9YClcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvclxufVxuXG4vLyBTaG91dC1vdXQgQW5ndXMgQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmNvbnN0IHRvVHlwZSA9IG9iamVjdCA9PiB7XG4gIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYCR7b2JqZWN0fWBcbiAgfVxuXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIFB1YmxpYyBVdGlsIEFQSVxuICovXG5cbmNvbnN0IGdldFVJRCA9IHByZWZpeCA9PiB7XG4gIGRvIHtcbiAgICBwcmVmaXggKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX1VJRClcbiAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcblxuICByZXR1cm4gcHJlZml4XG59XG5cbmNvbnN0IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICBsZXQgeyB0cmFuc2l0aW9uRHVyYXRpb24sIHRyYW5zaXRpb25EZWxheSB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcblxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdXG5cbiAgcmV0dXJuIChOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUlxufVxuXG5jb25zdCB0cmlnZ2VyVHJhbnNpdGlvbkVuZCA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFRSQU5TSVRJT05fRU5EKSlcbn1cblxuY29uc3QgaXNFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbMF1cbiAgfVxuXG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0Lm5vZGVUeXBlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5jb25zdCBnZXRFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgLy8gaXQncyBhIGpRdWVyeSBvYmplY3Qgb3IgYSBub2RlIGVsZW1lbnRcbiAgaWYgKGlzRWxlbWVudChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG9iamVjdC5qcXVlcnkgPyBvYmplY3RbMF0gOiBvYmplY3RcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcnNlU2VsZWN0b3Iob2JqZWN0KSlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGlzVmlzaWJsZSA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWlzRWxlbWVudChlbGVtZW50KSB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50SXNWaXNpYmxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICd2aXNpYmxlJ1xuICAvLyBIYW5kbGUgYGRldGFpbHNgIGVsZW1lbnQgYXMgaXRzIGNvbnRlbnQgbWF5IGZhbHNpZSBhcHBlYXIgdmlzaWJsZSB3aGVuIGl0IGlzIGNsb3NlZFxuICBjb25zdCBjbG9zZWREZXRhaWxzID0gZWxlbWVudC5jbG9zZXN0KCdkZXRhaWxzOm5vdChbb3Blbl0pJylcblxuICBpZiAoIWNsb3NlZERldGFpbHMpIHtcbiAgICByZXR1cm4gZWxlbWVudElzVmlzaWJsZVxuICB9XG5cbiAgaWYgKGNsb3NlZERldGFpbHMgIT09IGVsZW1lbnQpIHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gZWxlbWVudC5jbG9zZXN0KCdzdW1tYXJ5JylcbiAgICBpZiAoc3VtbWFyeSAmJiBzdW1tYXJ5LnBhcmVudE5vZGUgIT09IGNsb3NlZERldGFpbHMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChzdW1tYXJ5ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudElzVmlzaWJsZVxufVxuXG5jb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkXG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdmYWxzZSdcbn1cblxuY29uc3QgZmluZFNoYWRvd1Jvb3QgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuLyoqXG4gKiBUcmljayB0byByZXN0YXJ0IGFuIGVsZW1lbnQncyBhbmltYXRpb25cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHZvaWRcbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LmNoYXJpc3RoZW8uaW8vYmxvZy8yMDIxLzAyL3Jlc3RhcnQtYS1jc3MtYW5pbWF0aW9uLXdpdGgtamF2YXNjcmlwdC8jcmVzdGFydGluZy1hLWNzcy1hbmltYXRpb25cbiAqL1xuY29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG59XG5cbmNvbnN0IGdldGpRdWVyeSA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy5qUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5qUXVlcnlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MgPSBbXVxuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAvLyBhZGQgbGlzdGVuZXIgb24gdGhlIGZpcnN0IGNhbGwgd2hlbiB0aGUgZG9jdW1lbnQgaXMgaW4gbG9hZGluZyBzdGF0ZVxuICAgIGlmICghRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcykge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoJCkge1xuICAgICAgY29uc3QgbmFtZSA9IHBsdWdpbi5OQU1FXG4gICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdXG4gICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpblxuICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBleGVjdXRlID0gKHBvc3NpYmxlQ2FsbGJhY2ssIGFyZ3MgPSBbXSwgZGVmYXVsdFZhbHVlID0gcG9zc2libGVDYWxsYmFjaykgPT4ge1xuICByZXR1cm4gdHlwZW9mIHBvc3NpYmxlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBwb3NzaWJsZUNhbGxiYWNrKC4uLmFyZ3MpIDogZGVmYXVsdFZhbHVlXG59XG5cbmNvbnN0IGV4ZWN1dGVBZnRlclRyYW5zaXRpb24gPSAoY2FsbGJhY2ssIHRyYW5zaXRpb25FbGVtZW50LCB3YWl0Rm9yVHJhbnNpdGlvbiA9IHRydWUpID0+IHtcbiAgaWYgKCF3YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkdXJhdGlvblBhZGRpbmcgPSA1XG4gIGNvbnN0IGVtdWxhdGVkRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0cmFuc2l0aW9uRWxlbWVudCkgKyBkdXJhdGlvblBhZGRpbmdcblxuICBsZXQgY2FsbGVkID0gZmFsc2VcblxuICBjb25zdCBoYW5kbGVyID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBpZiAodGFyZ2V0ICE9PSB0cmFuc2l0aW9uRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIHRyYW5zaXRpb25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpXG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgfVxuXG4gIHRyYW5zaXRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRWxlbWVudClcbiAgICB9XG4gIH0sIGVtdWxhdGVkRHVyYXRpb24pXG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBwcmV2aW91cy9uZXh0IGVsZW1lbnQgb2YgYSBsaXN0LlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGxpc3QgICAgVGhlIGxpc3Qgb2YgZWxlbWVudHNcbiAqIEBwYXJhbSBhY3RpdmVFbGVtZW50ICAgVGhlIGFjdGl2ZSBlbGVtZW50XG4gKiBAcGFyYW0gc2hvdWxkR2V0TmV4dCAgIENob29zZSB0byBnZXQgbmV4dCBvciBwcmV2aW91cyBlbGVtZW50XG4gKiBAcGFyYW0gaXNDeWNsZUFsbG93ZWRcbiAqIEByZXR1cm4ge0VsZW1lbnR8ZWxlbX0gVGhlIHByb3BlciBlbGVtZW50XG4gKi9cbmNvbnN0IGdldE5leHRBY3RpdmVFbGVtZW50ID0gKGxpc3QsIGFjdGl2ZUVsZW1lbnQsIHNob3VsZEdldE5leHQsIGlzQ3ljbGVBbGxvd2VkKSA9PiB7XG4gIGNvbnN0IGxpc3RMZW5ndGggPSBsaXN0Lmxlbmd0aFxuICBsZXQgaW5kZXggPSBsaXN0LmluZGV4T2YoYWN0aXZlRWxlbWVudClcblxuICAvLyBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgbGlzdCByZXR1cm4gYW4gZWxlbWVudFxuICAvLyBkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbiBhbmQgaWYgY3ljbGUgaXMgYWxsb3dlZFxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuICFzaG91bGRHZXROZXh0ICYmIGlzQ3ljbGVBbGxvd2VkID8gbGlzdFtsaXN0TGVuZ3RoIC0gMV0gOiBsaXN0WzBdXG4gIH1cblxuICBpbmRleCArPSBzaG91bGRHZXROZXh0ID8gMSA6IC0xXG5cbiAgaWYgKGlzQ3ljbGVBbGxvd2VkKSB7XG4gICAgaW5kZXggPSAoaW5kZXggKyBsaXN0TGVuZ3RoKSAlIGxpc3RMZW5ndGhcbiAgfVxuXG4gIHJldHVybiBsaXN0W01hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBsaXN0TGVuZ3RoIC0gMSkpXVxufVxuXG5leHBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGUsXG4gIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sXG4gIGZpbmRTaGFkb3dSb290LFxuICBnZXRFbGVtZW50LFxuICBnZXRqUXVlcnksXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgZ2V0VUlELFxuICBpc0Rpc2FibGVkLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIG5vb3AsXG4gIG9uRE9NQ29udGVudExvYWRlZCxcbiAgcGFyc2VTZWxlY3RvcixcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgdG9UeXBlXG59XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9ldmVudC1oYW5kbGVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZ2V0alF1ZXJ5IH0gZnJvbSAnLi4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBuYW1lc3BhY2VSZWdleCA9IC9bXi5dKig/PVxcLi4qKVxcLnwuKi9cbmNvbnN0IHN0cmlwTmFtZVJlZ2V4ID0gL1xcLi4qL1xuY29uc3Qgc3RyaXBVaWRSZWdleCA9IC86OlxcZCskL1xuY29uc3QgZXZlbnRSZWdpc3RyeSA9IHt9IC8vIEV2ZW50cyBzdG9yYWdlXG5sZXQgdWlkRXZlbnQgPSAxXG5jb25zdCBjdXN0b21FdmVudHMgPSB7XG4gIG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLFxuICBtb3VzZWxlYXZlOiAnbW91c2VvdXQnXG59XG5cbmNvbnN0IG5hdGl2ZUV2ZW50cyA9IG5ldyBTZXQoW1xuICAnY2xpY2snLFxuICAnZGJsY2xpY2snLFxuICAnbW91c2V1cCcsXG4gICdtb3VzZWRvd24nLFxuICAnY29udGV4dG1lbnUnLFxuICAnbW91c2V3aGVlbCcsXG4gICdET01Nb3VzZVNjcm9sbCcsXG4gICdtb3VzZW92ZXInLFxuICAnbW91c2VvdXQnLFxuICAnbW91c2Vtb3ZlJyxcbiAgJ3NlbGVjdHN0YXJ0JyxcbiAgJ3NlbGVjdGVuZCcsXG4gICdrZXlkb3duJyxcbiAgJ2tleXByZXNzJyxcbiAgJ2tleXVwJyxcbiAgJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgJ3RvdWNoc3RhcnQnLFxuICAndG91Y2htb3ZlJyxcbiAgJ3RvdWNoZW5kJyxcbiAgJ3RvdWNoY2FuY2VsJyxcbiAgJ3BvaW50ZXJkb3duJyxcbiAgJ3BvaW50ZXJtb3ZlJyxcbiAgJ3BvaW50ZXJ1cCcsXG4gICdwb2ludGVybGVhdmUnLFxuICAncG9pbnRlcmNhbmNlbCcsXG4gICdnZXN0dXJlc3RhcnQnLFxuICAnZ2VzdHVyZWNoYW5nZScsXG4gICdnZXN0dXJlZW5kJyxcbiAgJ2ZvY3VzJyxcbiAgJ2JsdXInLFxuICAnY2hhbmdlJyxcbiAgJ3Jlc2V0JyxcbiAgJ3NlbGVjdCcsXG4gICdzdWJtaXQnLFxuICAnZm9jdXNpbicsXG4gICdmb2N1c291dCcsXG4gICdsb2FkJyxcbiAgJ3VubG9hZCcsXG4gICdiZWZvcmV1bmxvYWQnLFxuICAncmVzaXplJyxcbiAgJ21vdmUnLFxuICAnRE9NQ29udGVudExvYWRlZCcsXG4gICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgJ2Vycm9yJyxcbiAgJ2Fib3J0JyxcbiAgJ3Njcm9sbCdcbl0pXG5cbi8qKlxuICogUHJpdmF0ZSBtZXRob2RzXG4gKi9cblxuZnVuY3Rpb24gbWFrZUV2ZW50VWlkKGVsZW1lbnQsIHVpZCkge1xuICByZXR1cm4gKHVpZCAmJiBgJHt1aWR9Ojoke3VpZEV2ZW50Kyt9YCkgfHwgZWxlbWVudC51aWRFdmVudCB8fCB1aWRFdmVudCsrXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRFdmVudHMoZWxlbWVudCkge1xuICBjb25zdCB1aWQgPSBtYWtlRXZlbnRVaWQoZWxlbWVudClcblxuICBlbGVtZW50LnVpZEV2ZW50ID0gdWlkXG4gIGV2ZW50UmVnaXN0cnlbdWlkXSA9IGV2ZW50UmVnaXN0cnlbdWlkXSB8fCB7fVxuXG4gIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGh5ZHJhdGVPYmooZXZlbnQsIHsgZGVsZWdhdGVUYXJnZXQ6IGVsZW1lbnQgfSlcblxuICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbilcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgW2V2ZW50XSlcbiAgfVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcblxuICAgIGZvciAobGV0IHsgdGFyZ2V0IH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgIGZvciAoY29uc3QgZG9tRWxlbWVudCBvZiBkb21FbGVtZW50cykge1xuICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGh5ZHJhdGVPYmooZXZlbnQsIHsgZGVsZWdhdGVUYXJnZXQ6IHRhcmdldCB9KVxuXG4gICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRhcmdldCwgW2V2ZW50XSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBjYWxsYWJsZSwgZGVsZWdhdGlvblNlbGVjdG9yID0gbnVsbCkge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhldmVudHMpXG4gICAgLmZpbmQoZXZlbnQgPT4gZXZlbnQuY2FsbGFibGUgPT09IGNhbGxhYmxlICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgY29uc3QgaXNEZWxlZ2F0ZWQgPSB0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZydcbiAgLy8gVE9ETzogdG9vbHRpcCBwYXNzZXMgYGZhbHNlYCBpbnN0ZWFkIG9mIHNlbGVjdG9yLCBzbyB3ZSBuZWVkIHRvIGNoZWNrXG4gIGNvbnN0IGNhbGxhYmxlID0gaXNEZWxlZ2F0ZWQgPyBkZWxlZ2F0aW9uRnVuY3Rpb24gOiAoaGFuZGxlciB8fCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG4gIGxldCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQob3JpZ2luYWxUeXBlRXZlbnQpXG5cbiAgaWYgKCFuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudCkpIHtcbiAgICB0eXBlRXZlbnQgPSBvcmlnaW5hbFR5cGVFdmVudFxuICB9XG5cbiAgcmV0dXJuIFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF1cbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBvbmVPZmYpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuXG4gIC8vIGluIGNhc2Ugb2YgbW91c2VlbnRlciBvciBtb3VzZWxlYXZlIHdyYXAgdGhlIGhhbmRsZXIgd2l0aGluIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGl0cyBET00gcG9zaXRpb25cbiAgLy8gdGhpcyBwcmV2ZW50cyB0aGUgaGFuZGxlciBmcm9tIGJlaW5nIGRpc3BhdGNoZWQgdGhlIHNhbWUgd2F5IGFzIG1vdXNlb3ZlciBvciBtb3VzZW91dCBkb2VzXG4gIGlmIChvcmlnaW5hbFR5cGVFdmVudCBpbiBjdXN0b21FdmVudHMpIHtcbiAgICBjb25zdCB3cmFwRnVuY3Rpb24gPSBmbiA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgIWV2ZW50LmRlbGVnYXRlVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGFibGUgPSB3cmFwRnVuY3Rpb24oY2FsbGFibGUpXG4gIH1cblxuICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpXG4gIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pXG4gIGNvbnN0IHByZXZpb3VzRnVuY3Rpb24gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpXG5cbiAgaWYgKHByZXZpb3VzRnVuY3Rpb24pIHtcbiAgICBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiA9IHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmICYmIG9uZU9mZlxuXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB1aWQgPSBtYWtlRXZlbnRVaWQoY2FsbGFibGUsIG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSlcbiAgY29uc3QgZm4gPSBpc0RlbGVnYXRlZCA/XG4gICAgYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY2FsbGFibGUpIDpcbiAgICBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGNhbGxhYmxlKVxuXG4gIGZuLmRlbGVnYXRpb25TZWxlY3RvciA9IGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGxcbiAgZm4uY2FsbGFibGUgPSBjYWxsYWJsZVxuICBmbi5vbmVPZmYgPSBvbmVPZmZcbiAgZm4udWlkRXZlbnQgPSB1aWRcbiAgaGFuZGxlcnNbdWlkXSA9IGZuXG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGlzRGVsZWdhdGVkKVxufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgY29uc3QgZm4gPSBmaW5kSGFuZGxlcihldmVudHNbdHlwZUV2ZW50XSwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKVxuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBCb29sZWFuKGRlbGVnYXRpb25TZWxlY3RvcikpXG4gIGRlbGV0ZSBldmVudHNbdHlwZUV2ZW50XVtmbi51aWRFdmVudF1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuXG4gIGZvciAoY29uc3QgW2hhbmRsZXJLZXksIGV2ZW50XSBvZiBPYmplY3QuZW50cmllcyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICBpZiAoaGFuZGxlcktleS5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlRXZlbnQoZXZlbnQpIHtcbiAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuICBldmVudCA9IGV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKVxuICByZXR1cm4gY3VzdG9tRXZlbnRzW2V2ZW50XSB8fCBldmVudFxufVxuXG5jb25zdCBFdmVudEhhbmRsZXIgPSB7XG4gIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIGZhbHNlKVxuICB9LFxuXG4gIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCB0cnVlKVxuICB9LFxuXG4gIG9mZihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KVxuICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cbiAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LnN0YXJ0c1dpdGgoJy4nKVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuICAgICAgaWYgKCFPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50RXZlbnQgb2YgT2JqZWN0LmtleXMoZXZlbnRzKSkge1xuICAgICAgICByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCBlbGVtZW50RXZlbnQsIG9yaWdpbmFsVHlwZUV2ZW50LnNsaWNlKDEpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW2tleUhhbmRsZXJzLCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJylcblxuICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgY29uc3QgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KGV2ZW50KVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudFxuXG4gICAgbGV0IGpRdWVyeUV2ZW50ID0gbnVsbFxuICAgIGxldCBidWJibGVzID0gdHJ1ZVxuICAgIGxldCBuYXRpdmVEaXNwYXRjaCA9IHRydWVcbiAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlXG5cbiAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpXG4gICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICAgIH1cblxuICAgIGNvbnN0IGV2dCA9IGh5ZHJhdGVPYmoobmV3IEV2ZW50KGV2ZW50LCB7IGJ1YmJsZXMsIGNhbmNlbGFibGU6IHRydWUgfSksIGFyZ3MpXG5cbiAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgfVxuXG4gICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkICYmIGpRdWVyeUV2ZW50KSB7XG4gICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGV2dFxuICB9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVPYmoob2JqLCBtZXRhID0ge30pIHtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWV0YSkpIHtcbiAgICB0cnkge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZVxuICAgIH0gY2F0Y2gge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmpcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9tYW5pcHVsYXRvci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodmFsdWUgPT09IE51bWJlcih2YWx1ZSkudG9TdHJpbmcoKSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gIH1cblxuICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApXG59XG5cbmNvbnN0IE1hbmlwdWxhdG9yID0ge1xuICBzZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gLCB2YWx1ZSlcbiAgfSxcblxuICByZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9XG4gICAgY29uc3QgYnNLZXlzID0gT2JqZWN0LmtleXMoZWxlbWVudC5kYXRhc2V0KS5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKCdicycpICYmICFrZXkuc3RhcnRzV2l0aCgnYnNDb25maWcnKSlcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIGJzS2V5cykge1xuICAgICAgbGV0IHB1cmVLZXkgPSBrZXkucmVwbGFjZSgvXmJzLywgJycpXG4gICAgICBwdXJlS2V5ID0gcHVyZUtleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHB1cmVLZXkuc2xpY2UoMSwgcHVyZUtleS5sZW5ndGgpXG4gICAgICBhdHRyaWJ1dGVzW3B1cmVLZXldID0gbm9ybWFsaXplRGF0YShlbGVtZW50LmRhdGFzZXRba2V5XSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cmlidXRlc1xuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuaXB1bGF0b3JcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9jb25maWcuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IHsgaXNFbGVtZW50LCB0b1R5cGUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBDb25maWcge1xuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHN0YXRpYyBtZXRob2QgXCJOQU1FXCIsIGZvciBlYWNoIGNvbXBvbmVudCEnKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWVyZ2VDb25maWdPYmooY29uZmlnLCBlbGVtZW50KSB7XG4gICAgY29uc3QganNvbkNvbmZpZyA9IGlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgJ2NvbmZpZycpIDoge30gLy8gdHJ5IHRvIHBhcnNlXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBqc29uQ29uZmlnID09PSAnb2JqZWN0JyA/IGpzb25Db25maWcgOiB7fSksXG4gICAgICAuLi4oaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkgOiB7fSksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gIH1cblxuICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZywgY29uZmlnVHlwZXMgPSB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKSB7XG4gICAgZm9yIChjb25zdCBbcHJvcGVydHksIGV4cGVjdGVkVHlwZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZ1R5cGVzKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldXG4gICAgICBjb25zdCB2YWx1ZVR5cGUgPSBpc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGJhc2UtY29tcG9uZW50LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YS5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi91dGlsL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sIGdldEVsZW1lbnQgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgVkVSU0lPTiA9ICc1LjMuMydcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKClcblxuICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG5cbiAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRGF0YS5yZW1vdmUodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eU5hbWUgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcbiAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBfcXVldWVDYWxsYmFjayhjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCA9IHRydWUpIHtcbiAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcsIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXQoZ2V0RWxlbWVudChlbGVtZW50KSwgdGhpcy5EQVRBX0tFWSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIGNvbmZpZyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoZWxlbWVudCkgfHwgbmV3IHRoaXMoZWxlbWVudCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsKVxuICB9XG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIGAuJHt0aGlzLkRBVEFfS0VZfWBcbiAgfVxuXG4gIHN0YXRpYyBldmVudE5hbWUobmFtZSkge1xuICAgIHJldHVybiBgJHtuYW1lfSR7dGhpcy5FVkVOVF9LRVl9YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnRcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGlzRGlzYWJsZWQsIGlzVmlzaWJsZSwgcGFyc2VTZWxlY3RvciB9IGZyb20gJy4uL3V0aWwvaW5kZXguanMnXG5cbmNvbnN0IGdldFNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcpXG5cbiAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgbGV0IGhyZWZBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cbiAgICAvLyBUaGUgb25seSB2YWxpZCBjb250ZW50IHRoYXQgY291bGQgZG91YmxlIGFzIGEgc2VsZWN0b3IgYXJlIElEcyBvciBjbGFzc2VzLFxuICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3RvcixcbiAgICAvLyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvcmAgd2lsbCByaWdodGZ1bGx5IGNvbXBsYWluIGl0IGlzIGludmFsaWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMzIyNzNcbiAgICBpZiAoIWhyZWZBdHRyaWJ1dGUgfHwgKCFocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnLicpKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZSBDTVMgcHV0cyBvdXQgYSBmdWxsIFVSTCB3aXRoIHRoZSBhbmNob3IgYXBwZW5kZWRcbiAgICBpZiAoaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgaHJlZkF0dHJpYnV0ZSA9IGAjJHtocmVmQXR0cmlidXRlLnNwbGl0KCcjJylbMV19YFxuICAgIH1cblxuICAgIHNlbGVjdG9yID0gaHJlZkF0dHJpYnV0ZSAmJiBocmVmQXR0cmlidXRlICE9PSAnIycgPyBocmVmQXR0cmlidXRlLnRyaW0oKSA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvciA/IHNlbGVjdG9yLnNwbGl0KCcsJykubWFwKHNlbCA9PiBwYXJzZVNlbGVjdG9yKHNlbCkpLmpvaW4oJywnKSA6IG51bGxcbn1cblxuY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpXG4gIH0sXG5cbiAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gIH0sXG5cbiAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG4gICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpXG5cbiAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzXG4gIH0sXG5cbiAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKHByZXZpb3VzKSB7XG4gICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtwcmV2aW91c11cbiAgICAgIH1cblxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG4gIC8vIFRPRE86IHRoaXMgaXMgbm93IHVudXNlZDsgcmVtb3ZlIGxhdGVyIGFsb25nIHdpdGggcHJldigpXG4gIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtuZXh0XVxuICAgICAgfVxuXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBmb2N1c2FibGVDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgY29uc3QgZm9jdXNhYmxlcyA9IFtcbiAgICAgICdhJyxcbiAgICAgICdidXR0b24nLFxuICAgICAgJ2lucHV0JyxcbiAgICAgICd0ZXh0YXJlYScsXG4gICAgICAnc2VsZWN0JyxcbiAgICAgICdkZXRhaWxzJyxcbiAgICAgICdbdGFiaW5kZXhdJyxcbiAgICAgICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSdcbiAgICBdLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywnKVxuXG4gICAgcmV0dXJuIHRoaXMuZmluZChmb2N1c2FibGVzLCBlbGVtZW50KS5maWx0ZXIoZWwgPT4gIWlzRGlzYWJsZWQoZWwpICYmIGlzVmlzaWJsZShlbCkpXG4gIH0sXG5cbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpIDogbnVsbFxuICB9LFxuXG4gIGdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpIDogW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvckVuZ2luZVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2JhY2tkcm9wLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQge1xuICBleGVjdXRlLCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLCBnZXRFbGVtZW50LCByZWZsb3dcbn0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2JhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IEVWRU5UX01PVVNFRE9XTiA9IGBtb3VzZWRvd24uYnMuJHtOQU1FfWBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgY2xhc3NOYW1lOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBjbGlja0NhbGxiYWNrOiBudWxsLFxuICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgaXNWaXNpYmxlOiB0cnVlLCAvLyBpZiBmYWxzZSwgd2UgdXNlIHRoZSBiYWNrZHJvcCBoZWxwZXIgd2l0aG91dCBhZGRpbmcgYW55IGVsZW1lbnQgdG8gdGhlIGRvbVxuICByb290RWxlbWVudDogJ2JvZHknIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICBpc0FuaW1hdGVkOiAnYm9vbGVhbicsXG4gIGlzVmlzaWJsZTogJ2Jvb2xlYW4nLFxuICByb290RWxlbWVudDogJyhlbGVtZW50fHN0cmluZyknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEJhY2tkcm9wIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgc2hvdyhjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FwcGVuZCgpXG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3coZWxlbWVudClcbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmRpc3Bvc2UoKVxuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOKVxuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZ2V0RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IHRoaXMuX2NvbmZpZy5jbGFzc05hbWVcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIC8vIHVzZSBnZXRFbGVtZW50KCkgd2l0aCB0aGUgZGVmYXVsdCBcImJvZHlcIiB0byBnZXQgYSBmcmVzaCBFbGVtZW50IG9uIGVhY2ggaW5zdGFudGlhdGlvblxuICAgIGNvbmZpZy5yb290RWxlbWVudCA9IGdldEVsZW1lbnQoY29uZmlnLnJvb3RFbGVtZW50KVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hcHBlbmQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KClcbiAgICB0aGlzLl9jb25maWcucm9vdEVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpXG5cbiAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOLCAoKSA9PiB7XG4gICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKVxuICAgIH0pXG5cbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gdHJ1ZVxuICB9XG5cbiAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCB0aGlzLl9nZXRFbGVtZW50KCksIHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tkcm9wXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGlzRGlzYWJsZWQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5jb25zdCBlbmFibGVEaXNtaXNzVHJpZ2dlciA9IChjb21wb25lbnQsIG1ldGhvZCA9ICdoaWRlJykgPT4ge1xuICBjb25zdCBjbGlja0V2ZW50ID0gYGNsaWNrLmRpc21pc3Mke2NvbXBvbmVudC5FVkVOVF9LRVl9YFxuICBjb25zdCBuYW1lID0gY29tcG9uZW50Lk5BTUVcblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIGNsaWNrRXZlbnQsIGBbZGF0YS1icy1kaXNtaXNzPVwiJHtuYW1lfVwiXWAsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKSB8fCB0aGlzLmNsb3Nlc3QoYC4ke25hbWV9YClcbiAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcblxuICAgIC8vIE1ldGhvZCBhcmd1bWVudCBpcyBsZWZ0LCBmb3IgQWxlcnQgYW5kIG9ubHksIGFzIGl0IGRvZXNuJ3QgaW1wbGVtZW50IHRoZSAnaGlkZScgbWV0aG9kXG4gICAgaW5zdGFuY2VbbWV0aG9kXSgpXG4gIH0pXG59XG5cbmV4cG9ydCB7XG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyXG59XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvZm9jdXN0cmFwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2ZvY3VzdHJhcCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmZvY3VzdHJhcCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX1RBQiA9IGBrZXlkb3duLnRhYiR7RVZFTlRfS0VZfWBcblxuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBUQUJfTkFWX0ZPUldBUkQgPSAnZm9yd2FyZCdcbmNvbnN0IFRBQl9OQVZfQkFDS1dBUkQgPSAnYmFja3dhcmQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGF1dG9mb2N1czogdHJ1ZSxcbiAgdHJhcEVsZW1lbnQ6IG51bGwgLy8gVGhlIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBpbnNpZGUgb2Zcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGF1dG9mb2N1czogJ2Jvb2xlYW4nLFxuICB0cmFwRWxlbWVudDogJ2VsZW1lbnQnXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEZvY3VzVHJhcCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gbnVsbFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBhY3RpdmF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLl9jb25maWcudHJhcEVsZW1lbnQuZm9jdXMoKVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSkgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9oYW5kbGVGb2N1c2luKGV2ZW50KSlcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fVEFCLCBldmVudCA9PiB0aGlzLl9oYW5kbGVLZXlkb3duKGV2ZW50KSlcblxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaGFuZGxlRm9jdXNpbihldmVudCkge1xuICAgIGNvbnN0IHsgdHJhcEVsZW1lbnQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZG9jdW1lbnQgfHwgZXZlbnQudGFyZ2V0ID09PSB0cmFwRWxlbWVudCB8fCB0cmFwRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZvY3VzYWJsZUNoaWxkcmVuKHRyYXBFbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdHJhcEVsZW1lbnQuZm9jdXMoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9PT0gVEFCX05BVl9CQUNLV0FSRCkge1xuICAgICAgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0uZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50c1swXS5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ICE9PSBUQUJfS0VZKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gZXZlbnQuc2hpZnRLZXkgPyBUQUJfTkFWX0JBQ0tXQVJEIDogVEFCX05BVl9GT1JXQVJEXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9jdXNUcmFwXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvc2Nyb2xsQmFyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG5jb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCdcbmNvbnN0IFBST1BFUlRZX1BBRERJTkcgPSAncGFkZGluZy1yaWdodCdcbmNvbnN0IFBST1BFUlRZX01BUkdJTiA9ICdtYXJnaW4tcmlnaHQnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFNjcm9sbEJhckhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5ib2R5XG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZ2V0V2lkdGgoKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9pbm5lcldpZHRoI3VzYWdlX25vdGVzXG4gICAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50V2lkdGgpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgdGhpcy5fZGlzYWJsZU92ZXJGbG93KClcbiAgICAvLyBnaXZlIHBhZGRpbmcgdG8gZWxlbWVudCB0byBiYWxhbmNlIHRoZSBoaWRkZW4gc2Nyb2xsYmFyIHdpZHRoXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICAgIC8vIHRyaWNrOiBXZSBhZGp1c3QgcG9zaXRpdmUgcGFkZGluZ1JpZ2h0IGFuZCBuZWdhdGl2ZSBtYXJnaW5SaWdodCB0byBzdGlja3ktdG9wIGVsZW1lbnRzIHRvIGtlZXAgc2hvd2luZyBmdWxsd2lkdGhcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTiwgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSAtIHdpZHRoKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOKVxuICB9XG5cbiAgaXNPdmVyZmxvd2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRXaWR0aCgpID4gMFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZGlzYWJsZU92ZXJGbG93KCkge1xuICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gIH1cblxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHksIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpXG4gICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIGAke2NhbGxiYWNrKE51bWJlci5wYXJzZUZsb2F0KGNhbGN1bGF0ZWRWYWx1ZSkpfXB4YClcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIF9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KSB7XG4gICAgY29uc3QgYWN0dWFsVmFsdWUgPSBlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSlcbiAgICBpZiAoYWN0dWFsVmFsdWUpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSwgYWN0dWFsVmFsdWUpXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gcmVtb3ZlIHRoZSBwcm9wZXJ0eSBpZiB0aGUgdmFsdWUgaXMgYG51bGxgOyB0aGUgdmFsdWUgY2FuIGFsc28gYmUgemVyb1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spXG4gIH1cblxuICBfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgY2FsbEJhY2spIHtcbiAgICBpZiAoaXNFbGVtZW50KHNlbGVjdG9yKSkge1xuICAgICAgY2FsbEJhY2soc2VsZWN0b3IpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNlbCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgY2FsbEJhY2soc2VsKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxCYXJIZWxwZXJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgb2ZmY2FudmFzLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wLmpzJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcydcbmltcG9ydCBGb2N1c1RyYXAgZnJvbSAnLi91dGlsL2ZvY3VzdHJhcC5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgaXNEaXNhYmxlZCxcbiAgaXNWaXNpYmxlXG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcbmltcG9ydCBTY3JvbGxCYXJIZWxwZXIgZnJvbSAnLi91dGlsL3Njcm9sbGJhci5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ29mZmNhbnZhcydcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm9mZmNhbnZhcydcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnXG5jb25zdCBDTEFTU19OQU1FX0hJRElORyA9ICdoaWRpbmcnXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ29mZmNhbnZhcy1iYWNrZHJvcCdcbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93J1xuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwib2ZmY2FudmFzXCJdJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNjcm9sbDogZmFsc2Vcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNjcm9sbDogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7IHJlbGF0ZWRUYXJnZXQgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLmhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsIHx8IHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuICAgIHRoaXMuX2VsZW1lbnQuYmx1cigpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElESU5HKVxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1csIENMQVNTX05BTUVfSElESU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLnJlc2V0KClcbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsYmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgIGNvbnN0IGNsaWNrQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuXG4gICAgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlXG4gICAgY29uc3QgaXNWaXNpYmxlID0gQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApXG5cbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGNsYXNzTmFtZTogQ0xBU1NfTkFNRV9CQUNLRFJPUCxcbiAgICAgIGlzVmlzaWJsZSxcbiAgICAgIGlzQW5pbWF0ZWQ6IHRydWUsXG4gICAgICByb290RWxlbWVudDogdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgY2xpY2tDYWxsYmFjazogaXNWaXNpYmxlID8gY2xpY2tDYWxsYmFjayA6IG51bGxcbiAgICB9KVxuICB9XG5cbiAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgLy8gZm9jdXMgb24gdHJpZ2dlciB3aGVuIGl0IGlzIGNsb3NlZFxuICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgIHRoaXMuZm9jdXMoKVxuICAgIH1cbiAgfSlcblxuICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIGEgdG9nZ2xlciBvZiBhbiBvZmZjYW52YXMsIHdoaWxlIGFub3RoZXIgaXMgb3BlblxuICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUilcbiAgaWYgKGFscmVhZHlPcGVuICYmIGFscmVhZHlPcGVuICE9PSB0YXJnZXQpIHtcbiAgICBPZmZjYW52YXMuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBTZWxlY3RvckVuZ2luZS5maW5kKE9QRU5fU0VMRUNUT1IpKSB7XG4gICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2Uoc2VsZWN0b3IpLnNob3coKVxuICB9XG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoJ1thcmlhLW1vZGFsXVtjbGFzcyo9c2hvd11bY2xhc3MqPW9mZmNhbnZhcy1dJykpIHtcbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCkuaGlkZSgpXG4gICAgfVxuICB9XG59KVxuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihPZmZjYW52YXMpXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE9mZmNhbnZhcylcblxuZXhwb3J0IGRlZmF1bHQgT2ZmY2FudmFzXG4iLCAiaW1wb3J0IFwianMvYm9vdHN0cmFwL3NyYy9kcm9wZG93blwiO1xuaW1wb3J0IFwianMvYm9vdHN0cmFwL3NyYy9vZmZjYW52YXNcIjtcblxuKCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGItaGVhZGVyJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgY29uc3QgbmF2ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oYi1oZWFkZXItbmF2JykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGl2ZU1lbnUgPSAobWVudTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdwYWdlJylcbiAgICAgICAgICAgIG1lbnUucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG1lbnUuY2xvc2VzdCgnLmhiLWhlYWRlci1tZW51JylcbiAgICAgICAgICAgIHBhcmVudD8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIHBhcmVudD8ucXVlcnlTZWxlY3RvcignLm5hdi1saW5rOmZpcnN0LWNoaWxkJyk/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc01lbnVQYXJlbnQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gcGFyZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpID8/ICcnXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihocmVmKSAhPT0gLTEgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoaHJlZikgIT09IC0xXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZW51cyA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKGBhW2hyZWY9XCIke3dpbmRvdy5sb2NhdGlvbi5ocmVmfVwiXSwgYVtocmVmPVwiJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9XCJdYClcbiAgICAgICAgaWYgKG1lbnVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lbnVzLmZvckVhY2gobWVudSA9PiB7XG4gICAgICAgICAgICAgICAgYWN0aXZlTWVudShtZW51KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmb3VuZFBhcmVudCA9IGZhbHNlXG4gICAgICAgICAgICBjb25zdCBzdWJtZW51cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYS5oYi1oZWFkZXItc3VibWVudScpKVxuICAgICAgICAgICAgLy8gZmluZCBwYXJlbnQgbWVudSBmcm9tIHNlY29uZC1sZXZlbCBtZW51cy5cbiAgICAgICAgICAgIGZvciAobGV0IG1lbnUgb2Ygc3VibWVudXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNNZW51UGFyZW50KG1lbnUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZU1lbnUobWVudSlcbiAgICAgICAgICAgICAgICAgICAgZm91bmRQYXJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmb3VuZFBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIGZpbmQgcGFyZW50IG1lbnUgZnJvbSB0b3AtbGV2ZWwgbWVudXMuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbWVudSBvZiBBcnJheS5mcm9tKG5hdi5xdWVyeVNlbGVjdG9yQWxsKCdhLm5hdi1saW5rJykpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc01lbnVQYXJlbnQobWVudSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU1lbnUobWVudSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaGFkb3cgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnc2hhZG93LXNtJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZVNoYWRvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ3NoYWRvdy1zbScpICYmIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdzaGFkb3ctc20nKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3BhY2l0eScpO1xuICAgICAgICAgICAgbmF2LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd6LWluZGV4Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICBuYXYuc3R5bGUuekluZGV4ID0gJzAnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGggPSAwO1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSAyMDtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgIT09IDApIHtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxpbmcnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA1NzZcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAgICAgICBzaG93KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsaW5nJylcbiAgICAgICAgICAgICAgICByZW1vdmVTaGFkb3coKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nJylcbiAgICAgICAgICAgICAgICBzaGFkb3coKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTW9iaWxlKCkgJiYgTWF0aC5hYnMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtIGgpID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IGggPyBoaWRlKCkgOiBzaG93KCk7XG4gICAgICAgICAgICAgICAgaCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0pKClcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9zd2lwZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdzd2lwZSdcbmNvbnN0IEVWRU5UX0tFWSA9ICcuYnMuc3dpcGUnXG5jb25zdCBFVkVOVF9UT1VDSFNUQVJUID0gYHRvdWNoc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSE1PVkUgPSBgdG91Y2htb3ZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hFTkQgPSBgdG91Y2hlbmQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSRE9XTiA9IGBwb2ludGVyZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJVUCA9IGBwb2ludGVydXAke0VWRU5UX0tFWX1gXG5jb25zdCBQT0lOVEVSX1RZUEVfVE9VQ0ggPSAndG91Y2gnXG5jb25zdCBQT0lOVEVSX1RZUEVfUEVOID0gJ3BlbidcbmNvbnN0IENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCA9ICdwb2ludGVyLWV2ZW50J1xuY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgZW5kQ2FsbGJhY2s6IG51bGwsXG4gIGxlZnRDYWxsYmFjazogbnVsbCxcbiAgcmlnaHRDYWxsYmFjazogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgZW5kQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICBsZWZ0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICByaWdodENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTd2lwZSBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgaWYgKCFlbGVtZW50IHx8ICFTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2RlbHRhWCA9IDBcbiAgICB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudClcbiAgICB0aGlzLl9pbml0RXZlbnRzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZGlzcG9zZSgpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX3N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WFxuICAgIH1cbiAgfVxuXG4gIF9lbmQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLl9kZWx0YVhcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVTd2lwZSgpXG4gICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuZW5kQ2FsbGJhY2spXG4gIH1cblxuICBfbW92ZShldmVudCkge1xuICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxID9cbiAgICAgIDAgOlxuICAgICAgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5fZGVsdGFYXG4gIH1cblxuICBfaGFuZGxlU3dpcGUoKSB7XG4gICAgY29uc3QgYWJzRGVsdGFYID0gTWF0aC5hYnModGhpcy5fZGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRhWCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRhWCAvIHRoaXMuX2RlbHRhWFxuXG4gICAgdGhpcy5fZGVsdGFYID0gMFxuXG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV4ZWN1dGUoZGlyZWN0aW9uID4gMCA/IHRoaXMuX2NvbmZpZy5yaWdodENhbGxiYWNrIDogdGhpcy5fY29uZmlnLmxlZnRDYWxsYmFjaylcbiAgfVxuXG4gIF9pbml0RXZlbnRzKCkge1xuICAgIGlmICh0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUlVQLCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNITU9WRSwgZXZlbnQgPT4gdGhpcy5fbW92ZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hFTkQsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpXG4gICAgfVxuICB9XG5cbiAgX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGlzU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXBlXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kXG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcbmltcG9ydCBTd2lwZSBmcm9tICcuL3V0aWwvc3dpcGUuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjYXJvdXNlbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNhcm91c2VsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcblxuY29uc3QgT1JERVJfTkVYVCA9ICduZXh0J1xuY29uc3QgT1JERVJfUFJFViA9ICdwcmV2J1xuY29uc3QgRElSRUNUSU9OX0xFRlQgPSAnbGVmdCdcbmNvbnN0IERJUkVDVElPTl9SSUdIVCA9ICdyaWdodCdcblxuY29uc3QgRVZFTlRfU0xJREUgPSBgc2xpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TTElEID0gYHNsaWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSdcbmNvbnN0IENMQVNTX05BTUVfRU5EID0gJ2Nhcm91c2VsLWl0ZW0tZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFSVCA9ICdjYXJvdXNlbC1pdGVtLXN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9ORVhUID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCdcbmNvbnN0IENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gU0VMRUNUT1JfQUNUSVZFICsgU0VMRUNUT1JfSVRFTVxuY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJ1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycydcbmNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJ1xuXG5jb25zdCBLRVlfVE9fRElSRUNUSU9OID0ge1xuICBbQVJST1dfTEVGVF9LRVldOiBESVJFQ1RJT05fUklHSFQsXG4gIFtBUlJPV19SSUdIVF9LRVldOiBESVJFQ1RJT05fTEVGVFxufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpbnRlcnZhbDogNTAwMCxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHBhdXNlOiAnaG92ZXInLFxuICByaWRlOiBmYWxzZSxcbiAgdG91Y2g6IHRydWUsXG4gIHdyYXA6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsIC8vIFRPRE86djYgcmVtb3ZlIGJvb2xlYW4gc3VwcG9ydFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICByaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIHRvdWNoOiAnYm9vbGVhbicsXG4gIHdyYXA6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgdGhpcy50b3VjaFRpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBudWxsXG5cbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ESUNBVE9SUywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJpZGUgPT09IENMQVNTX05BTUVfQ0FST1VTRUwpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgbmV4dCgpIHtcbiAgICB0aGlzLl9zbGlkZShPUkRFUl9ORVhUKVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIEZJWE1FIFRPRE8gdXNlIGBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVgXG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICB0aGlzLl9zbGlkZShPUkRFUl9QUkVWKVxuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhckludGVydmFsKClcbiAgfVxuXG4gIGN5Y2xlKCkge1xuICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKVxuICAgIHRoaXMuX3VwZGF0ZUludGVydmFsKClcblxuICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5uZXh0V2hlblZpc2libGUoKSwgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICB9XG5cbiAgX21heWJlRW5hYmxlQ3ljbGUoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucmlkZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLmN5Y2xlKCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmN5Y2xlKClcbiAgfVxuXG4gIHRvKGluZGV4KSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLl9nZXRJdGVtcygpXG4gICAgaWYgKGluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9nZXRBY3RpdmUoKSlcbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlciA9IGluZGV4ID4gYWN0aXZlSW5kZXggPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuXG4gICAgdGhpcy5fc2xpZGUob3JkZXIsIGl0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3N3aXBlSGVscGVyKSB7XG4gICAgICB0aGlzLl9zd2lwZUhlbHBlci5kaXNwb3NlKClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IGNvbmZpZy5pbnRlcnZhbFxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRU5URVIsICgpID0+IHRoaXMucGF1c2UoKSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUxFQVZFLCAoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiBTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBmb3IgKGNvbnN0IGltZyBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGltZywgRVZFTlRfRFJBR19TVEFSVCwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgICB9XG5cbiAgICBjb25zdCBlbmRDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgIT09ICdob3ZlcicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgIH1cblxuICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICB9XG5cbiAgICBjb25zdCBzd2lwZUNvbmZpZyA9IHtcbiAgICAgIGxlZnRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fTEVGVCkpLFxuICAgICAgcmlnaHRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fUklHSFQpKSxcbiAgICAgIGVuZENhbGxiYWNrOiBlbmRDYWxsQmFja1xuICAgIH1cblxuICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbmV3IFN3aXBlKHRoaXMuX2VsZW1lbnQsIHN3aXBlQ29uZmlnKVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IEtFWV9UT19ESVJFQ1RJT05bZXZlbnQua2V5XVxuICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSlcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbXMoKS5pbmRleE9mKGVsZW1lbnQpXG4gIH1cblxuICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChpbmRleCkge1xuICAgIGlmICghdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgIGFjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG5cbiAgICBjb25zdCBuZXdBY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGBbZGF0YS1icy1zbGlkZS10bz1cIiR7aW5kZXh9XCJdYCwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICBpZiAobmV3QWN0aXZlSW5kaWNhdG9yKSB7XG4gICAgICBuZXdBY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJylcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2FjdGl2ZUVsZW1lbnQgfHwgdGhpcy5fZ2V0QWN0aXZlKClcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEludGVydmFsID0gTnVtYmVyLnBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWludGVydmFsJyksIDEwKVxuXG4gICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWxcbiAgfVxuXG4gIF9zbGlkZShvcmRlciwgZWxlbWVudCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZ2V0QWN0aXZlKClcbiAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVFxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRJdGVtcygpLCBhY3RpdmVFbGVtZW50LCBpc05leHQsIHRoaXMuX2NvbmZpZy53cmFwKVxuXG4gICAgaWYgKG5leHRFbGVtZW50ID09PSBhY3RpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KVxuXG4gICAgY29uc3QgdHJpZ2dlckV2ZW50ID0gZXZlbnROYW1lID0+IHtcbiAgICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBldmVudE5hbWUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5fb3JkZXJUb0RpcmVjdGlvbihvcmRlciksXG4gICAgICAgIGZyb206IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KSxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRyaWdnZXJFdmVudChFVkVOVF9TTElERSlcblxuICAgIGlmIChzbGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgLy8gVE9ETzogY2hhbmdlIHRlc3RzIHRoYXQgdXNlIGVtcHR5IGRpdnMgdG8gYXZvaWQgdGhpcyBjaGVja1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLnBhdXNlKClcblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnRJbmRleClcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbmV4dEVsZW1lbnRcblxuICAgIGNvbnN0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9TVEFSVCA6IENMQVNTX05BTUVfRU5EXG4gICAgY29uc3Qgb3JkZXJDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX05FWFQgOiBDTEFTU19OQU1FX1BSRVZcblxuICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpXG5cbiAgICByZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSwgb3JkZXJDbGFzc05hbWUsIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJRClcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIGFjdGl2ZUVsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKVxuICB9XG5cbiAgX2dldEFjdGl2ZSgpIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtcygpIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICB9XG5cbiAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfUFJFViA6IE9SREVSX05FWFRcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWXG4gIH1cblxuICBfb3JkZXJUb0RpcmVjdGlvbihvcmRlcikge1xuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVFxuICAgIH1cblxuICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9TTElERSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NBUk9VU0VMKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGNhcm91c2VsID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG4gIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1zbGlkZS10bycpXG5cbiAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICBjYXJvdXNlbC50byhzbGlkZUluZGV4KVxuICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKHRoaXMsICdzbGlkZScpID09PSAnbmV4dCcpIHtcbiAgICBjYXJvdXNlbC5uZXh0KClcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjYXJvdXNlbC5wcmV2KClcbiAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfUklERSlcblxuICBmb3IgKGNvbnN0IGNhcm91c2VsIG9mIGNhcm91c2Vscykge1xuICAgIENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UoY2Fyb3VzZWwpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKENhcm91c2VsKVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwgImltcG9ydCBDYXJvdXNlbCBmcm9tIFwianMvYm9vdHN0cmFwL3NyYy9jYXJvdXNlbFwiO1xuXG4oKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5jYXJvdXNlbFwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIG5ldyBDYXJvdXNlbChlbClcbiAgfSlcbn0pKClcbiIsICIoKCkgPT4ge1xuICAndXNlIHN0cmljdCdcblxuICBsZXQgc2Nyb2xsaW5nID0gZmFsc2VcblxuICBjb25zdCBzY3JvbGwgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRpcjogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgaWYgKHNjcm9sbGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNjcm9sbGluZyA9IHRydWVcblxuICAgIGNvbnN0IGlubmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtaW5uZXInKSBhcyBIVE1MRWxlbWVudFxuICAgIGNvbnN0IHN0ZXAgPSBpbm5lci5vZmZzZXRXaWR0aFxuICAgIGxldCBsZWZ0ID0gMFxuICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgbGVmdCA9IGlubmVyLnNjcm9sbExlZnQgLSBzdGVwXG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSBNYXRoLm1pbihpbm5lci5zY3JvbGxXaWR0aCAtIGlubmVyLmNsaWVudFdpZHRoLCBpbm5lci5zY3JvbGxMZWZ0ICsgc3RlcClcbiAgICB9XG4gICAgaWYgKGxlZnQgPD0gMCkge1xuICAgICAgc2Nyb2xsaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlubmVyLnNjcm9sbCh7XG4gICAgICBsZWZ0XG4gICAgfSlcbiAgICBjb25zdCBjaGVja2VyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGxlZnQgPT09IGlubmVyLnNjcm9sbExlZnQpIHtcbiAgICAgICAgc2Nyb2xsaW5nID0gZmFsc2VcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja2VyKVxuICAgICAgfVxuICAgIH0sIDUwKVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLnNsaWRlLWNvbnRyb2wtbGVmdCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWxlbWVudCwgJ2xlZnQnKVxuICAgICAgfSlcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2xpZGUtY29udHJvbC1yaWdodCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWxlbWVudCwgJ3JpZ2h0JylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2xpZGUtaW5uZXInKVxuICAgIGVscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGxldCBzdGFydFggPSAwXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgc3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWwsIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA+IHN0YXJ0WCA/ICdsZWZ0JyA6ICdyaWdodCcpXG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB9KVxuICB9KVxufSkoKVxuIiwgImNsYXNzIEdpc2N1cyB7XG4gICAgc2V0VGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBmcmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJRnJhbWVFbGVtZW50PihcbiAgICAgICAgICAgICdpZnJhbWUuZ2lzY3VzLWZyYW1lJ1xuICAgICAgICApXG5cbiAgICAgICAgZnJhbWVzLmZvckVhY2goKGZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gKG5ldyBVUkwoZnJhbWUuc3JjKSkub3JpZ2luO1xuICAgICAgICAgICAgZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGdpc2N1czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGAke2VuZHBvaW50fS90aGVtZXMvJHt0aGVtZX0uY3NzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbmRwb2ludFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpc2N1cztcbiIsICJpbXBvcnQgR2lzY3VzIGZyb20gJ21vZHMvZ2lzY3VzL2pzJ1xuKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcblxuICAgIGNvbnN0IGdpc2N1cyA9IG5ldyBHaXNjdXMoKVxuXG4gICAgY29uc3Qgc2V0VGhlbWUgPSAodGhlbWUgPSAnJykgPT4ge1xuICAgICAgICBpZiAodGhlbWUgPT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoYi10aGVtZScpXG4gICAgICAgICAgICB0aGVtZSA9ICghc2F2ZWQgfHwgc2F2ZWQgPT09ICdhdXRvJykgPyBnZXRQcmVmZXJyZWRUaGVtZSgpIDogc2F2ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGdpc2N1cy5zZXRUaGVtZSh0aGVtZSlcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcmVmZXJyZWRUaGVtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcyA/ICdkYXJrJyA6ICdsaWdodCdcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2dpc2N1cy1sb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSB0aGVtZSBhZnRlciBsb2FkaW5nIHRoZSBnaXNjdXMgZnJhbWUuXG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZS5naXNjdXMtZnJhbWUuZ2lzY3VzLWZyYW1lLS1sb2FkaW5nJylcbiAgICAgICAgICAgIGZyYW1lPy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRoZW1lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIGlmcmFtZSB0aG9zZSBtaXNzZWQgdGhlIFwiZ2lzY3VzLWxvYWRcIiBldmVudCB0byBiZSBzZXQgYXMgdGhlIHJpZ2h0IHRoZW1lLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRoZW1lKClcbiAgICAgICAgfSwgMjAwMClcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdoYjp0aGVtZScsICgoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNldFRoZW1lKGUuZGV0YWlsLnRoZW1lKVxuICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyKVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBnZXRFbGVtZW50LCBpc0Rpc2FibGVkLCBpc1Zpc2libGVcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX0FDVElWQVRFID0gYGFjdGl2YXRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MgPSAnW2hyZWZdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJTktfSVRFTVMgPSBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX05BVl9JVEVNU30gPiAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiBudWxsLCAvLyBUT0RPOiB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICByb290TWFyZ2luOiAnMHB4IDBweCAtMjUlJyxcbiAgc21vb3RoU2Nyb2xsOiBmYWxzZSxcbiAgdGFyZ2V0OiBudWxsLFxuICB0aHJlc2hvbGQ6IFswLjEsIDAuNSwgMV1cbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhudW1iZXJ8bnVsbCknLCAvLyBUT0RPIHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gIHJvb3RNYXJnaW46ICdzdHJpbmcnLFxuICBzbW9vdGhTY3JvbGw6ICdib29sZWFuJyxcbiAgdGFyZ2V0OiAnZWxlbWVudCcsXG4gIHRocmVzaG9sZDogJ2FycmF5J1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgLy8gdGhpcy5fZWxlbWVudCBpcyB0aGUgb2JzZXJ2YWJsZXNDb250YWluZXIgYW5kIGNvbmZpZy50YXJnZXQgdGhlIG1lbnUgbGlua3Mgd3JhcHBlclxuICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fcm9vdEVsZW1lbnQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnQpLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnID8gbnVsbCA6IHRoaXMuX2VsZW1lbnRcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsXG4gICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhID0ge1xuICAgICAgdmlzaWJsZUVudHJ5VG9wOiAwLFxuICAgICAgcGFyZW50U2Nyb2xsVG9wOiAwXG4gICAgfVxuICAgIHRoaXMucmVmcmVzaCgpIC8vIGluaXRpYWxpemVcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKClcbiAgICB0aGlzLl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpXG5cbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IHRoaXMuX2dldE5ld09ic2VydmVyKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gVE9ETzogb24gdjYgdGFyZ2V0IHNob3VsZCBiZSBnaXZlbiBleHBsaWNpdGx5ICYgcmVtb3ZlIHRoZSB7dGFyZ2V0OiAnc3MtdGFyZ2V0J30gY2FzZVxuICAgIGNvbmZpZy50YXJnZXQgPSBnZXRFbGVtZW50KGNvbmZpZy50YXJnZXQpIHx8IGRvY3VtZW50LmJvZHlcblxuICAgIC8vIFRPRE86IHY2IE9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnMuIFVzZSByb290TWFyZ2luIG9ubHlcbiAgICBjb25maWcucm9vdE1hcmdpbiA9IGNvbmZpZy5vZmZzZXQgPyBgJHtjb25maWcub2Zmc2V0fXB4IDBweCAtMzAlYCA6IGNvbmZpZy5yb290TWFyZ2luXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aHJlc2hvbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcudGhyZXNob2xkID0gY29uZmlnLnRocmVzaG9sZC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnNtb290aFNjcm9sbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gdW5yZWdpc3RlciBhbnkgcHJldmlvdXMgbGlzdGVuZXJzXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSylcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSywgU0VMRUNUT1JfVEFSR0VUX0xJTktTLCBldmVudCA9PiB7XG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5nZXQoZXZlbnQudGFyZ2V0Lmhhc2gpXG4gICAgICBpZiAob2JzZXJ2YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCByb290ID0gdGhpcy5fcm9vdEVsZW1lbnQgfHwgd2luZG93XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9ic2VydmFibGVTZWN0aW9uLm9mZnNldFRvcCAtIHRoaXMuX2VsZW1lbnQub2Zmc2V0VG9wXG4gICAgICAgIGlmIChyb290LnNjcm9sbFRvKSB7XG4gICAgICAgICAgcm9vdC5zY3JvbGxUbyh7IHRvcDogaGVpZ2h0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENocm9tZSA2MCBkb2Vzbid0IHN1cHBvcnQgYHNjcm9sbFRvYFxuICAgICAgICByb290LnNjcm9sbFRvcCA9IGhlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfZ2V0TmV3T2JzZXJ2ZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3Q6IHRoaXMuX3Jvb3RFbGVtZW50LFxuICAgICAgdGhyZXNob2xkOiB0aGlzLl9jb25maWcudGhyZXNob2xkLFxuICAgICAgcm9vdE1hcmdpbjogdGhpcy5fY29uZmlnLnJvb3RNYXJnaW5cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gdGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSwgb3B0aW9ucylcbiAgfVxuXG4gIC8vIFRoZSBsb2dpYyBvZiBzZWxlY3Rpb25cbiAgX29ic2VydmVyQ2FsbGJhY2soZW50cmllcykge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlbnRyeSA9PiB0aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke2VudHJ5LnRhcmdldC5pZH1gKVxuICAgIGNvbnN0IGFjdGl2YXRlID0gZW50cnkgPT4ge1xuICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcCA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3BcbiAgICAgIHRoaXMuX3Byb2Nlc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50U2Nyb2xsVG9wID0gKHRoaXMuX3Jvb3RFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wXG4gICAgY29uc3QgdXNlclNjcm9sbHNEb3duID0gcGFyZW50U2Nyb2xsVG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3BcbiAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wID0gcGFyZW50U2Nyb2xsVG9wXG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcFxuICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyBkb3duLCBwaWNrIHRoZSBiaWdnZXIgb2Zmc2V0VG9wXG4gICAgICBpZiAodXNlclNjcm9sbHNEb3duICYmIGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgICAgLy8gaWYgcGFyZW50IGlzbid0IHNjcm9sbGVkLCBsZXQncyBrZWVwIHRoZSBmaXJzdCB2aXNpYmxlIGl0ZW0sIGJyZWFraW5nIHRoZSBpdGVyYXRpb25cbiAgICAgICAgaWYgKCFwYXJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAsIHBpY2sgdGhlIHNtYWxsZXN0IG9mZnNldFRvcFxuICAgICAgaWYgKCF1c2VyU2Nyb2xsc0Rvd24gJiYgIWVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpIHtcbiAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKVxuXG4gICAgY29uc3QgdGFyZ2V0TGlua3MgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgdGhpcy5fY29uZmlnLnRhcmdldClcblxuICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYW5jaG9yIGhhcyBhbiBpZCBhbmQgaXMgbm90IGRpc2FibGVkXG4gICAgICBpZiAoIWFuY2hvci5oYXNoIHx8IGlzRGlzYWJsZWQoYW5jaG9yKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoZGVjb2RlVVJJKGFuY2hvci5oYXNoKSwgdGhpcy5fZWxlbWVudClcblxuICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIG9ic2VydmFibGVTZWN0aW9uIGV4aXN0cyAmIGlzIHZpc2libGVcbiAgICAgIGlmIChpc1Zpc2libGUob2JzZXJ2YWJsZVNlY3Rpb24pKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldExpbmtzLnNldChkZWNvZGVVUkkoYW5jaG9yLmhhc2gpLCBhbmNob3IpXG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5zZXQoYW5jaG9yLmhhc2gsIG9ic2VydmFibGVTZWN0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9wcm9jZXNzKHRhcmdldCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0aGlzLl9jb25maWcudGFyZ2V0KVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIHRoaXMuX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpXG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwgeyByZWxhdGVkVGFyZ2V0OiB0YXJnZXQgfSlcbiAgfVxuXG4gIF9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KSB7XG4gICAgLy8gQWN0aXZhdGUgZHJvcGRvd24gcGFyZW50c1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBsaXN0R3JvdXAgb2YgU2VsZWN0b3JFbmdpbmUucGFyZW50cyh0YXJnZXQsIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKSkge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX0xJTktfSVRFTVMpKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xlYXJBY3RpdmVDbGFzcyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZU5vZGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChgJHtTRUxFQ1RPUl9UQVJHRVRfTElOS1N9LiR7Q0xBU1NfTkFNRV9BQ1RJVkV9YCwgcGFyZW50KVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhY3RpdmVOb2Rlcykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBzcHkgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSkpIHtcbiAgICBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzcHkpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWBcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBhcmVudDogbnVsbCxcbiAgdG9nZ2xlOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gIHRvZ2dsZTogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW11cblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3JFbmdpbmUuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXVxuXG4gICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUylcbiAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KSlcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSlcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RyaWdnZXJdLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSlcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGNvbnN0IF9jb25maWcgPSB7fVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5nZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHRoaXMpKSB7XG4gICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkudG9nZ2xlKClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCAiKCgpID0+IHtcbiAgY29uc3QgYWN0aXZlUGFyZW50ID0gKGNoaWxkOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGNoaWxkLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJy5oYi1kb2NzLW5hdi1saW5rcy1ncm91cCcpIGFzIEhUTUxFbGVtZW50XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignLmNvbGxhcHNlJyk/LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIGNvbnN0IGhlYWRpbmcgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLmhiLWRvY3MtbmF2LWhlYWRpbmcnKSBhcyBIVE1MRWxlbWVudFxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5oYi1kb2NzLW5hdi1pdGVtLXRvZ2dsZScpPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgYWN0aXZlUGFyZW50KHBhcmVudClcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZSA9IChsaW5rOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBhY3RpdmVQYXJlbnQobGluaylcbiAgfVxuXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGItZG9jcy1uYXYtbGlua3MgYVtocmVmPVwiJHtsb2NhdGlvbi5wYXRobmFtZX1cIl1gKSBhcyBIVE1MRWxlbWVudFxuICBpZiAobGluayA9PSBudWxsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBhY3RpdmUobGluaylcbn0pKClcbiIsICIoKCkgPT4ge1xuICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGItZG9jcy1uYXYtdG9nZ2xlJylcbiAgY29uc3QgZG9jcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYi1kb2NzJylcbiAgaWYgKCF0b2dnbGUgfHwgIWRvY3MpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9ICdzaWRlYmFyLW9mZidcblxuICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGRvY3MuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgIGRvY3MuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3MuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgfVxuICB9KVxufSkoKVxuIiwgIntcImJhY2tfdG9fdG9wXCI6e1wiYW5pbWF0aW9uXCI6dHJ1ZSxcImljb25faGVpZ2h0XCI6XCIyZW1cIixcImljb25fbmFtZVwiOlwicm9ja2V0XCIsXCJpY29uX3dpZHRoXCI6XCIyZW1cIixcInBvc2l0aW9uX2JvdHRvbVwiOlwiMXJlbVwiLFwicG9zaXRpb25fZW5kXCI6XCIxcmVtXCJ9LFwiYmlnZ2VyX3BpY3R1cmVcIjp7XCJwbGF5X2ludGVydmFsXCI6NTAwMCxcInNjYWxlXCI6Mn0sXCJibG9nXCI6e1wiYXJjaGl2ZXNcIjp7XCJwYWdpbmF0ZVwiOjMwfSxcImZ1bGxfd2lkdGhcIjpmYWxzZSxcImdpc2N1c1wiOntcImNhdGVnb3J5X2lkXCI6XCJESUNfa3dET0sxTG1TYzRDYmRpTVwiLFwicmVwb1wiOlwiaGJzdGFjay90aGVtZS1jYXJkc1wiLFwicmVwb19pZFwiOlwiUl9rZ0RPSzFMbVNRXCJ9LFwiaG9tZVwiOntcImZlYXR1cmVkX3Bvc3RzXCI6NSxcIm1haW5fc2VjdGlvbnNcIjpbXCJkb2NzXCIsXCJibG9nXCIsXCJuZXdzXCJdLFwicGlubmVkX3Bvc3RzX3Bvc2l0aW9uXCI6XCJsaXN0XCJ9LFwibGlzdF9jb2xzX2xnXCI6MyxcImxpc3RfY29sc19tZFwiOjIsXCJsaXN0X3N0eWxlXCI6XCJcIixcInBhZ2luYXRlXCI6MTIsXCJwb3N0X2RhdGVfZm9ybWF0XCI6XCI6ZGF0ZV9sb25nXCIsXCJwb3N0X3RodW1ibmFpbFwiOnRydWUsXCJwb3N0X3RodW1ibmFpbF9kZWZhdWx0XCI6XCJpbWFnZXMvdGh1bWJuYWlsLnBuZ1wiLFwicG9zdF90aHVtYm5haWxfaGVpZ2h0XCI6XCIxNjBweFwiLFwicG9zdF90aHVtYm5haWxfcGxhY2Vob2xkZXJcIjpcIkhCIFRIRU1FXCIsXCJwb3N0X3RodW1ibmFpbF9wb3NpdGlvblwiOlwidG9wXCIsXCJwb3N0X3RodW1ibmFpbF9yZXNpemVfaGVpZ2h0XCI6MzYwLFwicmVsYXRlZF9wb3N0c1wiOntcIm51bWJlclwiOjEwfSxcInNpZGViYXJcIjp7XCJtYXhfd2lkdGhcIjpcIjMyMHB4XCIsXCJwb3NpdGlvblwiOlwic3RhcnRcIixcInBvc3RzXCI6e1wiZmVhdHVyZWRfY291bnRcIjo1LFwiZmlsbFwiOnRydWUsXCJsaXN0X3N0eWxlXCI6XCJzbGlkZVwiLFwicmVjZW50X2NvdW50XCI6NSxcInN0eWxlXCI6XCJwaWxsc1wifSxcInByb2ZpbGVcIjp7XCJhdmF0YXJcIjpcIi9pbWFnZXMvbG9nby5wbmdcIixcImF2YXRhcl9zaXplXCI6MTAwLFwiY29tcGFueVwiOlwiQ09NUEFOWVwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwibG9jYXRpb25cIjpcIkVhcnRoXCIsXCJzb2NpYWxzXCI6e1wiZ2l0aHViXCI6XCJoYnN0YWNrXCIsXCJtYXN0b2RvblwiOlwiaHR0cHM6Ly90ZWNoaHViLnNvY2lhbC9AaGJzdGFja1wiLFwicnNzXCI6dHJ1ZX0sXCJ0aXRsZVwiOlwiXCJ9LFwic3RpY2t5XCI6dHJ1ZSxcInRheG9ub21pZXNcIjp7XCJhdXRob3JzXCI6e1wiY291bnRcIjpmYWxzZSxcImRpc2FibGVcIjpmYWxzZSxcImxpbWl0XCI6NSxcIndlaWdodFwiOjF9LFwiY2F0ZWdvcmllc1wiOntcImRpc2FibGVcIjpmYWxzZSxcIndlaWdodFwiOjN9LFwiY291bnRcIjp0cnVlLFwibGltaXRcIjoxMCxcInNlcGFyYXRlXCI6ZmFsc2UsXCJzZXJpZXNcIjp7XCJkaXNhYmxlXCI6ZmFsc2UsXCJ3ZWlnaHRcIjoyfSxcInN0eWxlXCI6XCJwaWxsc1wiLFwidGFnc1wiOntcImRpc2FibGVcIjpmYWxzZSxcImxpbWl0XCI6MjAsXCJ3ZWlnaHRcIjo0fX0sXCJ3aWR0aFwiOjAuMzV9LFwic29jaWFsX3NoYXJlX2J1dHRvbnNcIjp7XCJhbGlnbm1lbnRcIjpcImNlbnRlclwiLFwibWVkaWFcIjpbXCJ0d2l0dGVyXCIsXCJmYWNlYm9va1wiLFwibGlua2VkaW5cIixcInNpbmF3ZWlib1wiXX0sXCJ0b2NcIjp7XCJwb3NpdGlvblwiOlwiZW5kXCJ9fSxcImJyZWFkY3J1bWJcIjp7XCJkaXNhYmxlZFwiOmZhbHNlfSxcImNvbG9yXCI6XCJsaWdodFwiLFwiY29udGVudF9wYW5lbFwiOntcImJvdHRvbVwiOlwiMjBweFwiLFwiY29tbWVudHNcIjp0cnVlLFwicmVwb1wiOntcImJyYW5jaFwiOlwibWFpblwiLFwicmVwb1wiOlwiaGJzdGFjay90aGVtZS1jYXJkc1wiLFwic2VydmljZVwiOlwiZ2l0aHViXCIsXCJzdWJwYXRoXCI6XCJleGFtcGxlU2l0ZVwifX0sXCJjc3NfYnVuZGxlX25hbWVcIjpcImhiXCIsXCJkb2NzXCI6e1wiZGF0ZV9mb3JtYXRcIjpcIjpkYXRlX2xvbmdcIixcImdpc2N1c1wiOntcImNhdGVnb3J5X2lkXCI6XCJESUNfa3dET0sxTG1TYzRDYmRpTVwiLFwicmVwb1wiOlwiaGJzdGFjay90aGVtZS1jYXJkc1wiLFwicmVwb19pZFwiOlwiUl9rZ0RPSzFMbVNRXCJ9LFwic29jaWFsX3NoYXJlX2J1dHRvbnNcIjp7XCJhbGlnbm1lbnRcIjpcImNlbnRlclwiLFwibWVkaWFcIjpbXCJ0d2l0dGVyXCIsXCJmYWNlYm9va1wiLFwibGlua2VkaW5cIl19fSxcImZlYXR1cmVkX2ltYWdlXCI6e1wic2l6ZVwiOlwieDY0MFwifSxcImZvb3RlclwiOntcInNvY2lhbHNcIjp7XCJfY29sb3JcIjp0cnVlLFwiZ2l0aHViXCI6XCJoYnN0YWNrXCIsXCJtYXN0b2RvblwiOlwiaHR0cHM6Ly90ZWNoaHViLnNvY2lhbC9AaGJzdGFja1wiLFwicnNzXCI6dHJ1ZSxcInR3aXR0ZXJcIjpcInJhem9ueWFuZ1wifX0sXCJmdWxsX3dpZHRoXCI6ZmFsc2UsXCJmdWxsX3dpZHRoX3R5cGVzXCI6e1wiZG9jc1wiOntcImVuYWJsZVwiOnRydWV9fSxcImdvb2dsZV9mb250c1wiOntcImRpc3BsYXlcIjpcInN3YXBcIn0sXCJoZWFkZXJcIjp7XCJicmFuZFwiOlwiSEJcIixcImJyZWFrcG9pbnRcIjpcImxnXCIsXCJmdWxsX3dpZHRoXCI6dHJ1ZSxcImxvZ29fYmdcIjpcIiM3MTJjZjlcIixcInNvY2lhbHNcIjp7XCJnaXRodWJcIjpcImhic3RhY2tcIixcIm1hc3RvZG9uXCI6XCJodHRwczovL3RlY2hodWIuc29jaWFsL0BoYnN0YWNrXCIsXCJyc3NcIjp0cnVlfSxcInN0aWNreVwiOnRydWUsXCJ0aGVtZV90b2dnbGVcIjp7XCJzdHlsZVwiOlwic3dpdGNoXCJ9fSxcImhlYWRpbmdfc2lnblwiOntcImNvbnRhaW5lcnNcIjp7XCIuaGItYmxvZy1wb3N0LWNvbnRlbnRcIjp7fSxcIi5oYi1kb2NzLWRvYy1jb250ZW50XCI6e319LFwic3ltYm9sXCI6XCJcdTAwQTdcIn0sXCJqc19idW5kbGVfbmFtZVwiOlwiaGJcIixcImxvZ29cIjpcIi9pbWFnZXMvbG9nby5wbmdcIixcIm1vZHVsZXNcIjp7XCJjb2RlLWJsb2NrLXBhbmVsXCI6e1wianNfcmVzb3VyY2VzXCI6W3tcInBhcnRpYWxcIjpcImNvZGUtYmxvY2stcGFuZWwvYXNzZXRzL2pzLXJlc291cmNlXCJ9XX19LFwicGFnaW5hdGlvblwiOntcImFsaWdubWVudFwiOlwiY2VudGVyXCIsXCJzaWJsaW5nc1wiOjIsXCJzaXplXCI6XCJcIn0sXCJwcm9ncmVzc19iYXJcIjp7XCJoZWlnaHRcIjpcIjJweFwiLFwiaW5pdGlhbF93aWR0aFwiOjIwLFwiaW50ZXJ2YWxcIjo1MCxcInRpbWVcIjoyfSxcInNjcm9sbGJhclwiOntcImNvcm5lcl9iZ1wiOlwiIzkwOTI5NFwiLFwiaGVpZ2h0XCI6XCIxMnB4XCIsXCJ0aHVtYl9iZ1wiOlwiIzkwOTI5NFwiLFwidHJhY2tfYmdcIjpcIiNmOGY5ZmFcIixcIndpZHRoXCI6XCIxMnB4XCJ9LFwic2VhcmNoXCI6e1wibW9kYWxcIjp0cnVlfSxcInN0eWxlc1wiOntcImhiX3RvcF9vZmZzZXRcIjpcIjI0cHhcIixcInByZWZpeFwiOlwiaGItXCJ9LFwidGVybXNcIjp7XCJsaXN0X3N0eWxlXCI6XCJcIixcInBhZ2luYXRlXCI6MTIsXCJwcm9maWxlXCI6dHJ1ZSxcInByb2ZpbGVfbWV0cmljc1wiOnRydWV9LFwidGhlbWVfY2FyZHNcIjp7fX0iLCAiaW1wb3J0ICogYXMgcGFyYW1zIGZyb20gJ0BwYXJhbXMnO1xuXG4oKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBwYXJhbXM/LmhlYWRpbmdfc2lnbj8uY29udGFpbmVyc1xuICAgICAgICBpZiAoIWNvbnRhaW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ltYm9sID0gcGFyYW1zPy5oZWFkaW5nX3NpZ24/LnN5bWJvbCA/PyAnXHUwMEE3J1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0b3IgaW4gY29udGFpbmVycykge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiaDIsIGgzLCBoNCwgaDUsIGg2XCIpLmZvckVhY2goKGhlYWRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGhlYWRpbmcuZ2V0QXR0cmlidXRlKCdpZCcpXG4gICAgICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgICAgICAgICBhbmNob3IuY2xhc3NOYW1lID0gJ2FuY2hvciBtcy0xJ1xuICAgICAgICAgICAgICAgIGFuY2hvci5ocmVmID0gYCMke2lkfWBcbiAgICAgICAgICAgICAgICBhbmNob3IuaW5uZXJUZXh0ID0gc3ltYm9sXG4gICAgICAgICAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZChhbmNob3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn0pKClcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldE5leHRBY3RpdmVFbGVtZW50LCBpc0Rpc2FibGVkIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndGFiJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX1gXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBIT01FX0tFWSA9ICdIb21lJ1xuY29uc3QgRU5EX0tFWSA9ICdFbmQnXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19EUk9QRE9XTiA9ICdkcm9wZG93bidcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9IGA6bm90KCR7U0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSlgXG5cbmNvbnN0IFNFTEVDVE9SX1RBQl9QQU5FTCA9ICcubGlzdC1ncm91cCwgLm5hdiwgW3JvbGU9XCJ0YWJsaXN0XCJdJ1xuY29uc3QgU0VMRUNUT1JfT1VURVIgPSAnLm5hdi1pdGVtLCAubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSU5ORVIgPSBgLm5hdi1saW5rJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgLmxpc3QtZ3JvdXAtaXRlbSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIFtyb2xlPVwidGFiXCJdJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfWBcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXScgLy8gVE9ETzogY291bGQgb25seSBiZSBgdGFiYCBpbiB2NlxuY29uc3QgU0VMRUNUT1JfSU5ORVJfRUxFTSA9IGAke1NFTEVDVE9SX0lOTkVSfSwgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSA9IGAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl1gXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRhYiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudClcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfVEFCX1BBTkVMKVxuXG4gICAgaWYgKCF0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgICAgLy8gVE9ETzogc2hvdWxkIHRocm93IGV4Y2VwdGlvbiBpbiB2NlxuICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtlbGVtZW50Lm91dGVySFRNTH0gaGFzIG5vdCBhIHZhbGlkIHBhcmVudCAke1NFTEVDVE9SX0lOTkVSX0VMRU19YClcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgaW5pdGlhbCBhcmlhIGF0dHJpYnV0ZXNcbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlcyh0aGlzLl9wYXJlbnQsIHRoaXMuX2dldENoaWxkcmVuKCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coKSB7IC8vIFNob3dzIHRoaXMgZWxlbSBhbmQgZGVhY3RpdmF0ZSB0aGUgYWN0aXZlIHNpYmxpbmcgaWYgZXhpc3RzXG4gICAgY29uc3QgaW5uZXJFbGVtID0gdGhpcy5fZWxlbWVudFxuICAgIGlmICh0aGlzLl9lbGVtSXNBY3RpdmUoaW5uZXJFbGVtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gU2VhcmNoIGZvciBhY3RpdmUgdGFiIG9uIHNhbWUgcGFyZW50IHRvIGRlYWN0aXZhdGUgaXRcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLl9nZXRBY3RpdmVFbGVtKClcblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IGFjdGl2ZSA/XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihhY3RpdmUsIEVWRU5UX0hJREUsIHsgcmVsYXRlZFRhcmdldDogaW5uZXJFbGVtIH0pIDpcbiAgICAgIG51bGxcblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKGlubmVyRWxlbSwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0OiBhY3RpdmUgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAoaGlkZUV2ZW50ICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShhY3RpdmUsIGlubmVyRWxlbSlcbiAgICB0aGlzLl9hY3RpdmF0ZShpbm5lckVsZW0sIGFjdGl2ZSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2FjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICB0aGlzLl9hY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGFjdGl2YXRlL3Nob3cgdGhlIHByb3BlciBzZWN0aW9uXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4JylcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIHRydWUpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2RlYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBlbGVtZW50LmJsdXIoKVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGRlYWN0aXZhdGUgdGhlIHNob3duIHNlY3Rpb24gdG9vXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCBmYWxzZSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0hJRERFTiwgeyByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbSB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICghKFtBUlJPV19MRUZUX0tFWSwgQVJST1dfUklHSFRfS0VZLCBBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZLCBIT01FX0tFWSwgRU5EX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLy8gc3RvcFByb3BhZ2F0aW9uL3ByZXZlbnREZWZhdWx0IGJvdGggYWRkZWQgdG8gc3VwcG9ydCB1cC9kb3duIGtleXMgd2l0aG91dCBzY3JvbGxpbmcgdGhlIHBhZ2VcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldENoaWxkcmVuKCkuZmlsdGVyKGVsZW1lbnQgPT4gIWlzRGlzYWJsZWQoZWxlbWVudCkpXG4gICAgbGV0IG5leHRBY3RpdmVFbGVtZW50XG5cbiAgICBpZiAoW0hPTUVfS0VZLCBFTkRfS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICBuZXh0QWN0aXZlRWxlbWVudCA9IGNoaWxkcmVuW2V2ZW50LmtleSA9PT0gSE9NRV9LRVkgPyAwIDogY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXNOZXh0ID0gW0FSUk9XX1JJR0hUX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSlcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50ID0gZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoY2hpbGRyZW4sIGV2ZW50LnRhcmdldCwgaXNOZXh0LCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChuZXh0QWN0aXZlRWxlbWVudCkge1xuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShuZXh0QWN0aXZlRWxlbWVudCkuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgX2dldENoaWxkcmVuKCkgeyAvLyBjb2xsZWN0aW9uIG9mIGlubmVyIGVsZW1lbnRzXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ORVJfRUxFTSwgdGhpcy5fcGFyZW50KVxuICB9XG5cbiAgX2dldEFjdGl2ZUVsZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldENoaWxkcmVuKCkuZmluZChjaGlsZCA9PiB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpKSB8fCBudWxsXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXMocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHBhcmVudCwgJ3JvbGUnLCAndGFibGlzdCcpXG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZCkge1xuICAgIGNoaWxkID0gdGhpcy5fZ2V0SW5uZXJFbGVtZW50KGNoaWxkKVxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKVxuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChjaGlsZClcbiAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBpc0FjdGl2ZSlcblxuICAgIGlmIChvdXRlckVsZW0gIT09IGNoaWxkKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhvdXRlckVsZW0sICdyb2xlJywgJ3ByZXNlbnRhdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoY2hpbGQsICdyb2xlJywgJ3RhYicpXG5cbiAgICAvLyBzZXQgYXR0cmlidXRlcyB0byB0aGUgcmVsYXRlZCBwYW5lbCB0b29cbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihjaGlsZClcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdyb2xlJywgJ3RhYnBhbmVsJylcblxuICAgIGlmIChjaGlsZC5pZCkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAnYXJpYS1sYWJlbGxlZGJ5JywgYCR7Y2hpbGQuaWR9YClcbiAgICB9XG4gIH1cblxuICBfdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgb3Blbikge1xuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChlbGVtZW50KVxuICAgIGlmICghb3V0ZXJFbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EUk9QRE9XTikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZSA9IChzZWxlY3RvciwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3Rvciwgb3V0ZXJFbGVtKVxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSwgb3BlbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBDTEFTU19OQU1FX0FDVElWRSlcbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fTUVOVSwgQ0xBU1NfTkFNRV9TSE9XKVxuICAgIG91dGVyRWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBvcGVuKVxuICB9XG5cbiAgX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgX2VsZW1Jc0FjdGl2ZShlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKVxuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgaW5uZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1saW5rKVxuICBfZ2V0SW5uZXJFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5tYXRjaGVzKFNFTEVDVE9SX0lOTkVSX0VMRU0pID8gZWxlbSA6IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ORVJfRUxFTSwgZWxlbSlcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIG91dGVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtaXRlbSlcbiAgX2dldE91dGVyRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xvc2VzdChTRUxFQ1RPUl9PVVRFUikgfHwgZWxlbVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS5zaG93KClcbn0pXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBvbiBmb2N1c1xuICovXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSkpIHtcbiAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KVxuICB9XG59KVxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVGFiKVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsICJpbXBvcnQgKiBhcyBwYXJhbXMgZnJvbSBcIkBwYXJhbXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3Mge1xuICAgIHByaXZhdGUgZWxlOiBIVE1MRWxlbWVudFxuXG4gICAgcHJpdmF0ZSBiYXI6IEhUTUxFbGVtZW50XG5cbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXJcblxuICAgIHByaXZhdGUgaW50ZXJ2YWw6IG51bWJlciBcblxuICAgIHByaXZhdGUgc3RlcDogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHBhcmFtcz8ucHJvZ3Jlc3NfYmFyPy53aWR0aCA/PyAyMFxuICAgICAgICB0aGlzLmludGVydmFsID0gcGFyYW1zPy5wcm9ncmVzc19iYXI/LmludGVydmFsID8/IDUwXG4gICAgICAgIGNvbnN0IHRpbWUgPSBwYXJhbXM/LnByb2dyZXNzX2Jhcj8udGltZSA/PyAyIFxuICAgICAgICB0aGlzLnN0ZXAgPSAoMTAwIC0gdGhpcy53aWR0aCkgLyB0aW1lIC8gMTAwMCAqIHRoaXMuaW50ZXJ2YWxcbiAgICAgICAgdGhpcy5pbml0QmFyKClcbiAgICAgICAgdGhpcy5pbml0UHJvZ3Jlc3MoKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFByb2dyZXNzKCkge1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2dyZXNzLmNsYXNzTmFtZSA9ICdoYi1wcm9ncmVzcyBwcm9ncmVzcyBwb3NpdGlvbi1maXhlZCB0b3AtMCB3LTEwMCByb3VuZGVkLTAgZC1ub25lJ1xuICAgICAgICBwcm9ncmVzcy5yb2xlID0gJ3Byb2dyZXNzYmFyJ1xuICAgICAgICBwcm9ncmVzcy5hcHBlbmRDaGlsZCh0aGlzLmJhcilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9ncmVzcylcbiAgICAgICAgdGhpcy5lbGUgPSBwcm9ncmVzc1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEJhcigpIHtcbiAgICAgICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYmFyLmNsYXNzTmFtZSA9ICdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJ1xuICAgICAgICBiYXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJyUnXG4gICAgICAgIHRoaXMuYmFyID0gYmFyXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aW1lciA9IDBcblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpZHRoICs9IHRoaXMuc3RlcFxuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUud2lkdGggPSBgJHt0aGlzLndpZHRofSVgXG4gICAgICAgIH0sIHRoaXMuaW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5lbGUuY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIH1cbn1cbiIsICJpbXBvcnQgUHJvZ3Jlc3MgZnJvbSBcIi4vcHJvZ3Jlc3NcIjtcblxuKCgpID0+IHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IG5ldyBQcm9ncmVzcygpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XG4gICAgICAgIHByb2dyZXNzLmhpZGUoKVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgICBwcm9ncmVzcy5zaG93KClcbiAgICB9KVxufSkoKVxuIiwgImltcG9ydCAqIGFzIHBhcmFtcyBmcm9tIFwiQHBhcmFtc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24ge1xuICAgIHByaXZhdGUgYnRuOiBIVE1MQnV0dG9uRWxlbWVudFxuXG4gICAgY29uc3RydWN0b3IoaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSAnaGItYmFjay10by10b3AnXG4gICAgICAgIGJ0bi5hcmlhTGFiZWwgPSAnQmFjayB0byB0b3AnXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSB0aGlzLnRyYW5zZm9ybUljb24oaWNvbilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgIHRoaXMuYnRuID0gYnRuXG5cbiAgICAgICAgbGV0IHkgPSAwXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAyMCB8fCB0b3AgPiAyMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbigpICYmIHRvcCA+IHkpIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsaW5nJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHkgPSB0b3BcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbigpICYmIGJ0bi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxpbmcnKVxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRyYW5zZm9ybUljb24oaWNvbikge1xuICAgICAgICByZXR1cm4gaWNvbi5yZXBsYWNlKC88c3ZnKC4qKT4oKC58XFxuKSopPFxcL3N2Zz4vLCBgPHN2ZyQxPlxuICA8ZGVmcz48Y2xpcFBhdGggaWQ9XCJpY29uXCI+JDI8L2NsaXBQYXRoPjwvZGVmcz5cbiAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2xpcC1wYXRoPVwidXJsKCNpY29uKVwiIC8+XG4gIDxyZWN0IHg9XCIwXCIgeT1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2xpcC1wYXRoPVwidXJsKCNpY29uKVwiIC8+XG48L3N2Zz5gKVxuICAgIH1cblxuICAgIHByaXZhdGUgcG9zSWNvbjogSFRNTEVsZW1lbnRcblxuICAgIHVwZGF0ZVBvcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBvc0ljb24pIHtcbiAgICAgICAgICAgIHRoaXMucG9zSWNvbiA9IHRoaXMuYnRuLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdyZWN0JylbMV1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC8gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICAgICAgICB0aGlzLnBvc0ljb24uc2V0QXR0cmlidXRlKCd5JywgKDEgLSBwb3MpICogMTAwICsgJyUnKVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuYnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgIH1cblxuICAgIGFuaW1hdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcz8uYmFja190b190b3A/LmFuaW1hdGlvbiAhPT0gZmFsc2VcbiAgICB9XG59XG4iLCAiLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vanMvaW5kZXgudW1kLmpzXG5cbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9jdXN0b20vanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL3RoZW1lLWNhcmRzL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9iYXNlL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9oZWFkZXIvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2Nhcm91c2VsL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9zbGlkZS9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvZ2lzY3VzL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy90b2Mtc2Nyb2xsc3B5L2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9jb250ZW50LXBhbmVsL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9kb2NzL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9oZWFkaW5nLXNpZ24vanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvcHJvZ3Jlc3MtYmFyL2pzL2luZGV4LnRzJztcblxuICBcbiAgXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnaGIvbW9kdWxlcy9iYWNrLXRvLXRvcC9qcy9idXR0b24nO1xuXG4oKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IG5ldyBCdXR0b24oYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1yb2NrZXQgaGktc3ZnLWlubGluZSBoYi1iYWNrLXRvLXRvcC1pY29uXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjJlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjJlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk04IDhjLjgyOCAwIDEuNS0uODk1IDEuNS0yUzguODI4IDQgOCA0cy0xLjUuODk1LTEuNSAyUzcuMTcyIDggOCA4XCIvPlxuICA8cGF0aCBkPVwiTTExLjk1MyA4LjgxYy0uMTk1LTMuMzg4LS45NjgtNS41MDctMS43NzctNi44MTlDOS43MDcgMS4yMzMgOS4yMy43NTEgOC44NTcuNDU0YTMuNSAzLjUgMCAwIDAtLjQ2My0uMzE1QTIgMiAwIDAgMCA4LjI1LjA2NC41NS41NSAwIDAgMCA4IDBhLjU1LjU1IDAgMCAwLS4yNjYuMDczIDIgMiAwIDAgMC0uMTQyLjA4IDQgNCAwIDAgMC0uNDU5LjMzYy0uMzcuMzA4LS44NDQuODAzLTEuMzEgMS41Ny0uODA1IDEuMzIyLTEuNTc3IDMuNDMzLTEuNzc0IDYuNzU2bC0xLjQ5NyAxLjgyNi0uMDA0LjAwNUEyLjUgMi41IDAgMCAwIDIgMTIuMjAyVjE1LjVhLjUuNSAwIDAgMCAuOS4zbDEuMTI1LTEuNWMuMTY2LS4yMjIuNDItLjQuNzUyLS41Ny4yMTQtLjEwOC40MTQtLjE5Mi42MjUtLjI4MWwuMTk4LS4wODRjLjcuNDI4IDEuNTUuNjM1IDIuNC42MzVzMS43LS4yMDcgMi40LS42MzVxLjEuMDQ0LjE5Ni4wODNjLjIxMy4wOS40MTMuMTc0LjYyNy4yODIuMzMyLjE3LjU4Ni4zNDguNzUyLjU3bDEuMTI1IDEuNWEuNS41IDAgMCAwIC45LS4zdi0zLjI5OGEyLjUgMi41IDAgMCAwLS41NDgtMS41NjJ6TTEyIDEwLjQ0NXYuMDU1YzAgLjg2Ni0uMjg0IDEuNTg1LS43NSAyLjE0LjE0Ni4wNjQuMjkyLjEzLjQyNS4xOTkuMzkuMTk3LjguNDYgMS4xLjg2TDEzIDE0di0xLjc5OGExLjUgMS41IDAgMCAwLS4zMjctLjkzNXpNNC43NSAxMi42NEM0LjI4NCAxMi4wODUgNCAxMS4zNjYgNCAxMC41di0uMDU0bC0uNjczLjgyYTEuNSAxLjUgMCAwIDAtLjMyNy45MzZWMTRsLjIyNS0uM2MuMy0uNC43MS0uNjY0IDEuMS0uODYxLjEzMy0uMDY4LjI3OS0uMTM1LjQyNS0uMTk5TTguMDA5IDEuMDczcS4wOTYuMDYuMjI2LjE2M2MuMjg0LjIyNi42ODMuNjIxIDEuMDkgMS4yOEMxMC4xMzcgMy44MzYgMTEgNi4yMzcgMTEgMTAuNWMwIC44NTgtLjM3NCAxLjQ4LS45NDMgMS44OTNDOS41MTcgMTIuNzg2IDguNzgxIDEzIDggMTNzLTEuNTE3LS4yMTQtMi4wNTctLjYwN0M1LjM3MyAxMS45NzkgNSAxMS4zNTggNSAxMC41YzAtNC4xODIuODYtNi41ODYgMS42NzctNy45MjguNDA5LS42Ny44MS0xLjA4MiAxLjA5Ni0xLjMycS4xMzYtLjExMy4yMzYtLjE4WlwiLz5cbiAgPHBhdGggZD1cIk05LjQ3OSAxNC4zNjFjLS40OC4wOTMtLjk4LjEzOS0xLjQ3OS4xMzlzLS45OTktLjA0Ni0xLjQ3OS0uMTM5TDcuNiAxNS44YS41LjUgMCAwIDAgLjggMHpcIi8+XG48L3N2Zz5gKVxuICAgIH0pXG59KSgpO1xuXG4gIFxuICBcblxuaW1wb3J0IEJpZ2dlclBpY3R1cmUgZnJvbSAnbW9kcy9iaWdnZXItcGljdHVyZS9iaWdnZXItcGljdHVyZS51bWQuanMnXG5pbXBvcnQgUGFuZWwgZnJvbSAnaGIvbW9kdWxlcy9iaWdnZXItcGljdHVyZS9qcy9wYW5lbCdcblxuKCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBicCA9IEJpZ2dlclBpY3R1cmUoe1xuICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHBhbmVsID0gbmV3IFBhbmVsKGJwLCBgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImJpIGJpLWRvd25sb2FkIGhpLXN2Zy1pbmxpbmVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMS4yNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMS4yNWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBkPVwiTS41IDkuOWEuNS41IDAgMCAxIC41LjV2Mi41YTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMXYtMi41YS41LjUgMCAwIDEgMSAwdjIuNWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnYtMi41YS41LjUgMCAwIDEgLjUtLjVcIi8+XG4gIDxwYXRoIGQ9XCJNNy42NDYgMTEuODU0YS41LjUgMCAwIDAgLjcwOCAwbDMtM2EuNS41IDAgMCAwLS43MDgtLjcwOEw4LjUgMTAuMjkzVjEuNWEuNS41IDAgMCAwLTEgMHY4Ljc5M0w1LjM1NCA4LjE0NmEuNS41IDAgMSAwLS43MDguNzA4elwiLz5cbjwvc3ZnPmAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktc2hhcmUgaGktc3ZnLWlubGluZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxLjI1ZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGQ9XCJNMTMuNSAxYTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zTTExIDIuNWEyLjUgMi41IDAgMSAxIC42MDMgMS42MjhsLTYuNzE4IDMuMTJhMi41IDIuNSAwIDAgMSAwIDEuNTA0bDYuNzE4IDMuMTJhMi41IDIuNSAwIDEgMS0uNDg4Ljg3NmwtNi43MTgtMy4xMmEyLjUgMi41IDAgMSAxIDAtMy4yNTZsNi43MTgtMy4xMkEyLjUgMi41IDAgMCAxIDExIDIuNW0tOC41IDRhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTNtMTEgNS41YTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zXCIvPlxuPC9zdmc+YCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1jbG9ja3dpc2UgaGktc3ZnLWlubGluZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxLjI1ZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggM2E1IDUgMCAxIDAgNC41NDYgMi45MTQuNS41IDAgMCAxIC45MDgtLjQxN0E2IDYgMCAxIDEgOCAyelwiLz5cbiAgPHBhdGggZD1cIk04IDQuNDY2Vi41MzRhLjI1LjI1IDAgMCAxIC40MS0uMTkybDIuMzYgMS45NjZjLjEyLjEuMTIuMjg0IDAgLjM4NEw4LjQxIDQuNjU4QS4yNS4yNSAwIDAgMSA4IDQuNDY2XCIvPlxuPC9zdmc+YCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1waG9uZS1mbGlwIGhpLXN2Zy1pbmxpbmVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMS4yNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMS4yNWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMSAxSDVhMSAxIDAgMCAwLTEgMXY2YS41LjUgMCAwIDEtMSAwVjJhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2NmEuNS41IDAgMCAxLTEgMFYyYTEgMSAwIDAgMC0xLTFtMSAxM2ExIDEgMCAwIDEtMSAxSDVhMSAxIDAgMCAxLTEtMXYtMmEuNS41IDAgMCAwLTEgMHYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi0yYS41LjUgMCAwIDAtMSAwek0xLjcxMyA3Ljk1NGEuNS41IDAgMSAwLS40MTktLjkwOGMtLjM0Ny4xNi0uNjU0LjM0OC0uODgyLjU3Qy4xODQgNy44NDIgMCA4LjEzOSAwIDguNWMwIC41NDYuNDA4Ljk0LjgyMyAxLjIwMS40NC4yNzggMS4wNDMuNTEgMS43NDUuNjk2QzMuOTc4IDEwLjc3MyA1Ljg5OCAxMSA4IDExcS4xNDggMCAuMjk0LS4wMDJsLTEuMTQ4IDEuMTQ4YS41LjUgMCAwIDAgLjcwOC43MDhsMi0yYS41LjUgMCAwIDAgMC0uNzA4bC0yLTJhLjUuNSAwIDEgMC0uNzA4LjcwOGwxLjE0NSAxLjE0NEw4IDEwYy0yLjA0IDAtMy44Ny0uMjIxLTUuMTc0LS41NjktLjY1Ni0uMTc1LTEuMTUxLS4zNzQtMS40Ny0uNTc1QzEuMDEyIDguNjM5IDEgOC41MDYgMSA4LjVjMC0uMDAzIDAtLjA1OS4xMTItLjE3LjExNS0uMTEyLjMxLS4yNDIuNi0uMzc2Wm0xMi45OTMtLjkwOGEuNS41IDAgMCAwLS40MTkuOTA4Yy4yOTIuMTM0LjQ4Ni4yNjQuNi4zNzcuMTEzLjExLjExMy4xNjYuMTEzLjE2OXMwIC4wNjUtLjEzLjE4N2MtLjEzMi4xMjItLjM1Mi4yNi0uNjc3LjQtLjY0NS4yOC0xLjU5Ni41MjMtMi43NjMuNjg3YS41LjUgMCAwIDAgLjE0Ljk5YzEuMjEyLS4xNyAyLjI2LS40MyAzLjAyLS43NTguMzgtLjE2NC43MTMtLjM1Ny45Ni0uNTg3LjI0Ni0uMjI5LjQ1LS41MzcuNDUtLjkxOSAwLS4zNjItLjE4NC0uNjYtLjQxMi0uODgzcy0uNTM1LS40MTEtLjg4Mi0uNTcxTTcuNSAyYS41LjUgMCAwIDAgMCAxaDFhLjUuNSAwIDAgMCAwLTF6XCIvPlxuPC9zdmc+YCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1wbGF5LWNpcmNsZSBoaS1zdmctaW5saW5lXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjEuMjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjEuMjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk04IDE1QTcgNyAwIDEgMSA4IDFhNyA3IDAgMCAxIDAgMTRtMCAxQTggOCAwIDEgMCA4IDBhOCA4IDAgMCAwIDAgMTZcIi8+XG4gIDxwYXRoIGQ9XCJNNi4yNzEgNS4wNTVhLjUuNSAwIDAgMSAuNTIuMDM4bDMuNSAyLjVhLjUuNSAwIDAgMSAwIC44MTRsLTMuNSAyLjVBLjUuNSAwIDAgMSA2IDEwLjV2LTVhLjUuNSAwIDAgMSAuMjcxLS40NDVcIi8+XG48L3N2Zz5gKVxuXG4gICAgICAgIGNvbnN0IG9uT3BlbiA9IChjb250YWluZXI6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBwYW5lbC5pbml0KGNvbnRhaW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlID0gKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHBhbmVsLnVwZGF0ZShjb250YWluZXIsIGl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93ID0gKGltZ3MsIHBvcykgPT4ge1xuICAgICAgICAgICAgYnAub3Blbih7XG4gICAgICAgICAgICAgICAgaXRlbXM6IGltZ3MsXG4gICAgICAgICAgICAgICAgaW50cm86ICdmYWRldXAnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3MsXG4gICAgICAgICAgICAgICAgb25PcGVuOiBvbk9wZW4sXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IG9uVXBkYXRlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjYWxlID0gcGFyc2VJbnQoJzInKVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSAoaW1nOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbHQgPSBpbWcuZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgICAgICAgICAgbGV0IGNhcHRpb24gPSBhbHRcbiAgICAgICAgICAgIGNvbnN0IGNhcHRpb25FbGUgPSBpbWcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdmaWdjYXB0aW9uJylcbiAgICAgICAgICAgIGlmIChjYXB0aW9uRWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2FwdGlvbiA9IGNhcHRpb25FbGUuaW5uZXJUZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGltZzogaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSA/PyBpbWcuc3JjLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc2NhbGUgKiAoaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSA/PyBpbWcubmF0dXJhbEhlaWdodCksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNjYWxlICogKGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2lkdGgnKSA/PyBpbWcubmF0dXJhbFdpZHRoKSxcbiAgICAgICAgICAgICAgICBhbHQ6IGltZy5nZXRBdHRyaWJ1dGUoJ2FsdCcpLFxuICAgICAgICAgICAgICAgIGNhcHRpb246IGNhcHRpb24sXG4gICAgICAgICAgICAgICAgdGh1bWI6IGltZy5zcmMsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxuICAgICAgICBmb3IgKGNvbnN0IGltZyBvZiBpbWFnZXMpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSBsaW5rYWJsZSBpbWFnZXMuXG4gICAgICAgICAgICBpZiAoaW1nLmNsb3Nlc3QoJ2EnKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdzOiBBcnJheTx1bmtub3duPiA9IFtdXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IDBcbiAgICAgICAgICAgICAgICBjb25zdCBzZXQgPSBpbWcuY2xvc2VzdCgnLmJpZ2dlci1waWN0dXJlcycpXG4gICAgICAgICAgICAgICAgaWYgKHNldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IGEgc2V0IG9mIGltYWdlcy5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxzID0gc2V0LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEltYWdlRWxlbWVudD4oJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxzW2ldID09PSBpbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdzLnB1c2goZGF0YShlbHNbaV0pKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1ncy5wdXNoKGRhdGEoaW1nKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaG93KGltZ3MsIHBvcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5pbWctbGluaycpKVxuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHNob3coW3tcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IGxpbmsuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiBsaW5rLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICB9XSwgMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxufSkoKVxuIiwgImltcG9ydCB7ZGVmYXVsdCBhcyBwYXJhbXN9IGZyb20gJ0BwYXJhbXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBicCxcbiAgICAgICAgcHJpdmF0ZSBkb3dubG9hZEljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBzaGFyZUljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSByb3RhdGVJY29uOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgZmxpcEljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBwbGF5SWNvbjogc3RyaW5nLFxuICAgICkge1xuXG4gICAgfVxuXG4gICAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsJywgJ2QtZmxleCcsICdwb3NpdGlvbi1hYnNvbHV0ZScsICdteC1hdXRvJywgJ3N0YXJ0LTAnLCAnZW5kLTAnLCAndGV4dC1jZW50ZXInKVxuICAgICAgICBwLmFwcGVuZENoaWxkKHRoaXMucm90YXRlKGZhbHNlKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLnJvdGF0ZSh0cnVlKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLmZsaXAoKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLnBsYXkoKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLmRvd25sb2FkKCkpXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGhpcy5zaGFyZSgpKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocClcbiAgICB9XG5cbiAgICB1cGRhdGUoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgaXRlbSkge1xuICAgICAgICBjb25zdCBwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5icC1wYW5lbCcpIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgLy8gdXBkYXRlIGRvd25sb2FkIGxpbmsuXG4gICAgICAgIGNvbnN0IGQgPSBwLnF1ZXJ5U2VsZWN0b3IoJy5icC1wYW5lbC1kb3dubG9hZCcpIGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgICAgIGQuaHJlZiA9IGl0ZW0uaW1nXG4gICAgICAgIGQuZG93bmxvYWQgPSBpdGVtLmFsdFxuICAgIH1cblxuICAgIGltZ1dyYXAgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJwLWltZy13cmFwJykgYXMgSFRNTEVsZW1lbnRcbiAgICB9XG5cbiAgICByb3RhdGUgPSAoY2xvY2t3aXNlID0gZmFsc2UpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdSb3RhdGUnXG4gICAgICAgIGEucm9sZSA9ICdidXR0b24nXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYnAtcGFuZWwtYWN0aW9uJywgJ2JwLXBhbmVsLXJvdGF0ZScsIGNsb2Nrd2lzZSA/ICdicC1wYW5lbC1yb3RhdGUtY2xvY2t3aXNlJyA6ICdicC1wYW5lbC1yb3RhdGUtYW50aWNsb2Nrd2lzZScsICd0ZXh0LWRlY29yYXRpb24tbm9uZScsICdwLTInKVxuICAgICAgICBhLmlubmVySFRNTCA9IHRoaXMucm90YXRlSWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IHRoaXMuaW1nV3JhcCgpXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludCh3cmFwLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGUnKSA/PyAnMCcpXG4gICAgICAgICAgICB2YWx1ZSArPSBjbG9ja3dpc2UgPyA5MCA6IC05MFxuICAgICAgICAgICAgd3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlJywgdmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHdyYXApXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhXG4gICAgfVxuXG4gICAgZmxpcCA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdGbGlwJ1xuICAgICAgICBhLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdicC1wYW5lbC1mbGlwJywgJ3RleHQtZGVjb3JhdGlvbi1ub25lJywgJ3AtMicpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5mbGlwSWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IHRoaXMuaW1nV3JhcCgpXG4gICAgICAgICAgICBpZiAod3JhcC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpKSB7XG4gICAgICAgICAgICAgICAgd3JhcC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLWZsaXAnLCAndHJ1ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh3cmFwKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYVxuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtID0gKHdyYXA6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybTogQXJyYXk8c3RyaW5nPiA9IFtdXG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gd3JhcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlJylcbiAgICAgICAgaWYgKHJvdGF0ZSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLnB1c2goYHJvdGF0ZSgke3BhcnNlSW50KHJvdGF0ZSl9ZGVnKWApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmbGlwID0gd3JhcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpXG4gICAgICAgIGlmIChmbGlwKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0ucHVzaCgnc2NhbGVYKC0xKScpXG4gICAgICAgIH1cblxuICAgICAgICB3cmFwLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybS5qb2luKFwiIFwiKVxuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUpvYiA9IDBcblxuICAgIHByaXZhdGUgcGxheUludGVydmFsID0gMTAwMFxuXG4gICAgcGxheSA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdQbGF5J1xuICAgICAgICBhLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdicC1wYW5lbC1wbGF5JywgJ3RleHQtZGVjb3JhdGlvbi1ub25lJywgJ3AtMicpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5wbGF5SWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheUpvYikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wbGF5Sm9iKVxuICAgICAgICAgICAgICAgIHRoaXMucGxheUpvYiA9IDBcbiAgICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIHRoaXMucGxheUpvYiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJwLm5leHQoKVxuICAgICAgICAgICAgfSwgcGFyYW1zLmJpZ2dlcl9waWN0dXJlLnBsYXlfaW50ZXJ2YWwgPz8gNTAwMClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cbiAgICBkb3dubG9hZCA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdEb3dubG9hZCdcbiAgICAgICAgYS5yb2xlID0gJ2J1dHRvbidcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKCdicC1wYW5lbC1hY3Rpb24nLCAnYnAtcGFuZWwtZG93bmxvYWQnLCAndGV4dC1kZWNvcmF0aW9uLW5vbmUnLCAncC0yJylcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJycpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5kb3dubG9hZEljb25cbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cbiAgICB0d2l0dGVyU2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0ke3RoaXMuc2hhcmVMaW5rKCl9YFxuICAgIH1cblxuICAgIGZhY2Vib29rU2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dGhpcy5zaGFyZUxpbmsoKX1gXG4gICAgfVxuXG4gICAgc2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIH1cblxuICAgIHNoYXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdkcm9wZG93bi1jZW50ZXInLCAnYnAtcGFuZWwtc2hhcmUnLCAncC0yJylcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwidGV4dC13aGl0ZVwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIHRpdGxlPVwiU2hhcmVcIiBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+JHt0aGlzLnNoYXJlSWNvbn08L2E+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3RoaXMudHdpdHRlclNoYXJlTGluaygpfVwiPlR3aXR0ZXI8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt0aGlzLmZhY2Vib29rU2hhcmVMaW5rKCl9XCI+RmFjZWJvb2s8L2E+PC9saT5cbiAgICAgICAgICA8L3VsPmBcbiAg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LE1BQU0sS0FBSztBQUNoQixzQkFBTTtBQUFBLGNBQ1Y7QUFDQSxtQkFBSyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztBQUFBLFlBQzFCO0FBQUEsVUFDSixPQUFPO0FBQ0gsaUJBQUssS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUFBLFVBQ3ZCO0FBRUEsZUFBSyxNQUFNLEdBQUc7QUFBQSxRQUNsQixDQUFDO0FBQUEsTUFDTDtBQUVBLFlBQU0sUUFBUSxNQUFNLEtBQUssU0FBUyxpQkFBOEIsV0FBVyxDQUFDO0FBQzVFLGlCQUFXLFFBQVEsT0FBTztBQUN0QixhQUFLLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUNsQyxZQUFFLGVBQWU7QUFDakIsZUFBSyxDQUFDO0FBQUEsWUFDRixLQUFLLEtBQUssYUFBYSxNQUFNO0FBQUEsWUFDN0IsS0FBSyxLQUFLO0FBQUEsWUFDVixTQUFTLEtBQUs7QUFBQSxVQUNsQixDQUFDLEdBQUcsQ0FBQztBQUFBLFFBQ1QsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMLEdBQUc7IiwKICAibmFtZXMiOiBbImlzRWxlbWVudCIsICJnZXRDb21wdXRlZFN0eWxlIiwgIndpbmRvdyIsICJzZWxmIiwgIm1lcmdlZCIsICJjbGlwcGluZ1BhcmVudHMiLCAicmVmZXJlbmNlIiwgInBvcHBlck9mZnNldHMiLCAib2Zmc2V0IiwgImRlZmF1bHRNb2RpZmllcnMiLCAiY3JlYXRlUG9wcGVyIiwgInBvcHBlciIsICJvcHRpb25zIiwgInN0YXRlIiwgImVmZmVjdCIsICJub29wRm4iLCAibmFtZSIsICJzdHlsZSIsICJwbGFjZW1lbnQiLCAicGxhY2VtZW50cyIsICJfbG9vcCIsICJfaSIsICJjaGVja3MiLCAibWluIiwgIm1heCIsICJ0b1BhZGRpbmdPYmplY3QiLCAibm9vcCIsICJub3ciLCAiZWxlbWVudCIsICJkZXRhY2giLCAiaW5zdGFuY2UiLCAiY3JlYXRlX2ZyYWdtZW50IiwgIm5vdF9lcXVhbCIsICJ1cGRhdGUiLCAic3Vic2NyaWJlIiwgInJ1biIsICJjdHgiLCAiJCRwcm9wcyIsICJjYWxsYmFjayIsICJmbiIsICJOQU1FIiwgIkNMQVNTX05BTUVfU0hPVyIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIlRBQl9LRVkiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJEQVRBX0FQSV9LRVkiLCAiRVNDQVBFX0tFWSIsICJDTEFTU19OQU1FX1NIT1ciLCAiRVZFTlRfU0hPVyIsICJFVkVOVF9TSE9XTiIsICJFVkVOVF9ISURFIiwgIkVWRU5UX0hJRERFTiIsICJFVkVOVF9DTElDS19EQVRBX0FQSSIsICJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgImlzVmlzaWJsZSIsICJoZWFkZXIiLCAiTkFNRSIsICJFVkVOVF9LRVkiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJEQVRBX0FQSV9LRVkiLCAiRVZFTlRfTE9BRF9EQVRBX0FQSSIsICJFVkVOVF9DTElDS19EQVRBX0FQSSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkRBVEFfQVBJX0tFWSIsICJFVkVOVF9MT0FEX0RBVEFfQVBJIiwgIkNMQVNTX05BTUVfQUNUSVZFIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiREFUQV9BUElfS0VZIiwgIkVWRU5UX1NIT1ciLCAiRVZFTlRfU0hPV04iLCAiRVZFTlRfSElERSIsICJFVkVOVF9ISURERU4iLCAiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCAiQ0xBU1NfTkFNRV9TSE9XIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAibGluayIsICJkb2NzIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkVWRU5UX0hJREUiLCAiRVZFTlRfSElEREVOIiwgIkVWRU5UX1NIT1ciLCAiRVZFTlRfU0hPV04iLCAiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCAiRVZFTlRfS0VZRE9XTiIsICJFVkVOVF9MT0FEX0RBVEFfQVBJIiwgIkFSUk9XX0xFRlRfS0VZIiwgIkFSUk9XX1JJR0hUX0tFWSIsICJBUlJPV19VUF9LRVkiLCAiQVJST1dfRE9XTl9LRVkiLCAiQ0xBU1NfTkFNRV9BQ1RJVkUiLCAiQ0xBU1NfTkFNRV9GQURFIiwgIkNMQVNTX05BTUVfU0hPVyIsICJTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCAiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCAiZWxlbWVudCIsICJCaWdnZXJQaWN0dXJlIl0KfQo=

;
(() => {
  // ns-params:@params
  var params_default = { defaultLang: "en", i18n: { en: { copied: { other: "Copied!" }, copy_failed: { other: "Copy failed!" } }, "zh-hans": { copied: { other: "\u590D\u5236\u6210\u529F\uFF01" }, copy_failed: { other: "\u590D\u5236\u5931\u8D25\uFF01" } } }, icons: { copy: '<svg aria-hidden="true" class="bi bi-clipboard hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>\n  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>\n</svg>', expand: '<svg aria-hidden="true" class="bi bi-chevron-expand hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>\n</svg>', ln: '<svg aria-hidden="true" class="bi bi-list-ol hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>\n  <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>\n</svg>', wrap: '<svg aria-hidden="true" class="bi bi-text-wrap hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h9a2.5 2.5 0 0 1 0 5h-1.293l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708l-.647.646H11.5a1.5 1.5 0 0 0 0-3h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5"/>\n</svg>' }, line_nos: true, max_lines: 10, wrap: false };

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/snackbar@v0.1.2/assets/mods/snackbar/js/index.ts
  var Snackbar = class {
    container;
    constructor() {
      this.container = document.createElement("div");
      this.container.className = "snackbars";
      document.body.appendChild(this.container);
    }
    add(text, duration = 2e3) {
      const msg = document.createElement("div");
      msg.className = "snackbar";
      msg.innerText = text;
      this.container.appendChild(msg);
      setTimeout(() => {
        msg.remove();
      }, duration);
    }
  };
  var snackbar = new Snackbar();
  var js_default = snackbar;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/i18n-js@v0.2.1/assets/mods/i18n/translator.ts
  var Translator = class {
    constructor(translations, fallback) {
      this.translations = translations;
      this.fallback = fallback;
    }
    lang = "";
    getLang() {
      if (this.lang === "") {
        this.lang = document.documentElement.getAttribute("lang") ?? this.fallback;
      }
      return this.lang;
    }
    getTranslations() {
      const lang = this.getLang();
      return this.translations[lang] ?? this.getFallbackTranslations();
    }
    getFallbackTranslations() {
      return this.translations[this.fallback];
    }
    getFallbackTranslation(key) {
      const translations = this.getFallbackTranslations();
      return translations[key] ?? "";
    }
    translate(key, ctx, fallback = "") {
      const translations = this.getTranslations();
      if (!translations) {
        return fallback === "" ? key : fallback;
      }
      const translation = translations[key] ?? this.getFallbackTranslation(key);
      if (!translation) {
        return fallback === "" ? key : fallback;
      }
      if (!ctx) {
        return translation.other;
      }
      let format = ctx.count === 1 ? translation.one : translation.other;
      for (let name in ctx) {
        format = format.replace(`{${name}}`, ctx[name]);
      }
      return format;
    }
  };

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.7.0/assets/mods/code-block-panel/js/i18n.ts
  var i18n = new Translator(params_default.i18n, params_default.defaultLang);
  var i18n_default = i18n;

  // ns-hugo:/home/scott/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.7.0/assets/mods/code-block-panel/js/panel.ts
  var Panel = class {
    constructor(code) {
      this.code = code;
    }
    pre;
    wrapper;
    ele;
    init() {
      if (!params_default.line_nos) {
        this.code.classList.add("code-no-ln");
      }
      if (params_default.wrap) {
        this.code.classList.add("code-wrap");
      }
      this.pre = this.code.parentElement;
      this.ele = document.createElement("div");
      this.ele.className = "code-block-panel";
      this.wrapper = document.createElement("div");
      this.wrapper.className = "code-block-panel-wrapper";
      this.wrapper.appendChild(this.ele);
      this.maxLines();
      this.language();
      this.lineNoButton();
      this.wrapButton();
      this.expandButton();
      this.copyButton();
      this.pre.appendChild(this.wrapper);
    }
    // Returns the lines of code block.
    lines() {
      return Array.from(this.code.querySelectorAll(":scope > span"));
    }
    maxHeight;
    maxLines() {
      const lines = this.lines();
      const maxLines = this.code.closest(".highlight")?.getAttribute("data-max-lines") ?? params_default.max_lines;
      if (maxLines > 0 && lines.length > maxLines) {
        const offsetTop = lines[maxLines].offsetTop;
        if (offsetTop > 0) {
          this.pre.style.maxHeight = this.maxHeight = offsetTop + "px";
        }
      }
    }
    // Show the code language.
    language() {
      const lang = this.code.getAttribute("data-lang");
      if (!lang || lang === "fallback") {
        return;
      }
      const e = document.createElement("span");
      e.className = "code-block-lang";
      e.innerText = lang;
      this.pre.appendChild(e);
    }
    button(name, callback) {
      const btn = document.createElement("button");
      btn.className = "code-block-action code-block-action-" + name;
      btn.innerHTML = params_default.icons[name];
      btn.addEventListener("click", () => {
        callback();
      });
      return btn;
    }
    copyButton() {
      const btn = this.button("copy", () => {
        this.copy();
      });
      this.ele.appendChild(btn);
    }
    copy() {
      const clone = this.code.cloneNode(true);
      clone.querySelectorAll(".ln, :scope > span > span:first-child").forEach((ln) => {
        ln.remove();
      });
      navigator.clipboard.writeText(clone.innerText).then(() => {
        js_default.add(i18n_default.translate("copied", null, "Copied!"));
      }).catch((err) => {
        js_default.add(i18n_default.translate("copy_failed", null, "Copy failed."));
        console.error(err);
      });
    }
    wrapButton() {
      const btn = this.button("wrap", () => {
        this.toggleClass("code-wrap");
      });
      this.ele.appendChild(btn);
    }
    toggleClass(className) {
      if (this.code.classList.contains(className)) {
        this.code.classList.remove(className);
        return;
      }
      this.code.classList.add(className);
    }
    lineNoButton() {
      const btn = this.button("ln", () => {
        this.toggleClass("code-no-ln");
      });
      this.ele.appendChild(btn);
    }
    expandButton() {
      const btn = this.button("expand", () => {
        this.expand();
      });
      this.ele.appendChild(btn);
    }
    expand() {
      if (!this.pre.style.maxHeight && !this.maxHeight) {
        return;
      }
      if (this.pre.style.maxHeight) {
        this.pre.style.maxHeight = "";
        return;
      }
      this.pre.style.maxHeight = this.maxHeight;
    }
  };

  // <stdin>
  (() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("pre code").forEach((code) => {
        new Panel(code).init();
      });
    });
  })();
})();
