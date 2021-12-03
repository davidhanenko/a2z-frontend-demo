module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./lib/useScroll.js


const ScrollContext = /*#__PURE__*/Object(external_react_["createContext"])();
const ScrollContextProvider = ScrollContext.Provider;

function ScrollProvider({
  children
}) {
  const scrollRef = Object(external_react_["useRef"])({
    scrollPos: 0
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollContextProvider, {
    value: {
      scrollRef
    },
    children: children
  });
}

function useScroll() {
  const all = Object(external_react_["useContext"])(ScrollContext);
  return all;
}


// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__("K0LP");

// EXTERNAL MODULE: ./styles/nprogress.css
var nprogress = __webpack_require__("DiUS");

// EXTERNAL MODULE: external "@apollo/link-error"
var link_error_ = __webpack_require__("Q9iP");

// EXTERNAL MODULE: external "@apollo/client/react/ssr"
var ssr_ = __webpack_require__("kD/w");

// EXTERNAL MODULE: external "apollo-upload-client"
var external_apollo_upload_client_ = __webpack_require__("BPlj");

// EXTERNAL MODULE: external "next-with-apollo"
var external_next_with_apollo_ = __webpack_require__("ePNP");
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_);

// CONCATENATED MODULE: ./config.js
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = 'http://localhost:1337/graphql';
const prodEndpoint = process.env.NEXT_PUBLIC_API_URL || 'https://a2z-demo.herokuapp.com';
const perPage = 4;
// CONCATENATED MODULE: ./lib/withData.js







function createClient({
  headers,
  initialState
}) {
  return new client_["ApolloClient"]({
    link: client_["ApolloLink"].from([Object(link_error_["onError"])(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    Object(external_apollo_upload_client_["createUploadLink"])({
      uri: false ? undefined : 'http://localhost:1337/graphql',
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new client_["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {}
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ var withData = (external_next_with_apollo_default()(createClient, {
  getDataFromTree: ssr_["getDataFromTree"]
}));
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/layouts/GlobalStyles.js

const GlobalStyles = Object(external_styled_components_["createGlobalStyle"])(["html{--blue:#536ade;--lightBlue:#b1bbec;--darkBlue:#3c457d;--dark:#323545;--gray:#e6e8f4;--offWhite:#ededed;--blueHover:#536ade20;--maxWidth:1400px;--minWidth:850px;--navHeight:90px;--searchHeight:3rem;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;font-size:62.5%;}*,*:before,*:after{box-sizing:inherit;}body{font-family:'Roboto',sans-serif;margin:0;padding:0;font-size:1.5rem;line-height:2;scroll-behavior:smooth;background:var(--offWhite);}a{text-decoration:none;}"]);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./context/navState.js


const LocalStateContext = /*#__PURE__*/Object(external_react_["createContext"])();
const LocalStateProvider = LocalStateContext.Provider;

function NavStateProvider({
  children
}) {
  const {
    0: navOpen,
    1: setNavOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: navBtnClick,
    1: setNavBtnClick
  } = Object(external_react_["useState"])(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  function closeSideNav() {
    setNavOpen(false);
  }

  function openSideNav() {
    setNavOpen(true);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(LocalStateProvider, {
    value: {
      navOpen,
      setNavOpen,
      toggleNav,
      openSideNav,
      closeSideNav,
      navBtnClick,
      setNavBtnClick
    },
    children: children
  });
}

function useNav() {
  const all = Object(external_react_["useContext"])(LocalStateContext);
  return all;
}


// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "hamburger-react"
var external_hamburger_react_ = __webpack_require__("VXBr");
var external_hamburger_react_default = /*#__PURE__*/__webpack_require__.n(external_hamburger_react_);

// EXTERNAL MODULE: ./lib/windowDimensions.js
var windowDimensions = __webpack_require__("XyKl");

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__("j3R+");

// EXTERNAL MODULE: ./helpers/formatUrl.js
var formatUrl = __webpack_require__("LHyY");

// CONCATENATED MODULE: ./components/navbar/NavDropdownStyles.js

const NavDropdownStyles = external_styled_components_default.a.div.withConfig({
  displayName: "NavDropdownStyles",
  componentId: "sc-1jl75gr-0"
})(["position:relative;align-self:center;.dropdown-btns-group{@media (max-width:850px){display:flex;}}"]);
const DropdownBtnStyles = external_styled_components_default.a.button.withConfig({
  displayName: "NavDropdownStyles__DropdownBtnStyles",
  componentId: "sc-1jl75gr-1"
})(["padding:0;outline:none;border:none;background:transparent;cursor:pointer;@media (max-width:850px){position:relative;right:2rem;}svg{color:var(--darkBlue);transform:scale(2);}"]);
const DropdownMenuStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "NavDropdownStyles__DropdownMenuStyles",
  componentId: "sc-1jl75gr-2"
})(["background:var(--gray);padding-left:2rem;z-index:2;@media (min-width:850px){background:#e5e8fc;position:fixed;top:6rem;right:2rem;width:42rem;margin:0 0 0 -5rem;padding:2rem;display:grid;grid-template-columns:1fr 1fr 1fr;}"]);
const DropdownItemStyles = external_styled_components_default.a.li.withConfig({
  displayName: "NavDropdownStyles__DropdownItemStyles",
  componentId: "sc-1jl75gr-3"
})(["list-style:none;text-transform:capitalize;cursor:pointer;padding:0.5rem;line-height:2rem;font-weight:300;@media (max-width:850px){line-height:1.7rem;a{display:block;}}"]);

// CONCATENATED MODULE: ./components/navbar/NavDropdown.js









 // navbar dropdown item

const DropdownItem = /*#__PURE__*/external_react_default.a.forwardRef(({
  href,
  onClick,
  dropdownItem
}, ref) => {
  const {
    closeSideNav
  } = useNav();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownItemStyles, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: href,
      onClick: () => closeSideNav(),
      ref: ref,
      children: dropdownItem
    })
  });
});
const NavDropdown_NavDropdown = /*#__PURE__*/external_react_default.a.forwardRef(function NavDropdown(props, ref) {
  var _props$items;

  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = Object(external_react_["useState"])(false);
  const {
    navOpen
  } = useNav();
  const {
    width
  } = Object(windowDimensions["a" /* default */])();
  const router = Object(router_["useRouter"])();

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleMouseEnter = () => {
    !navOpen && setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    !navOpen && setDropdownOpen(false);
  };

  Object(external_react_["useEffect"])(() => {
    let isMounted = true;

    if (width >= 850) {
      setDropdownOpen(false);
    }

    return () => {
      isMounted = false;
    };
  }, [width]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavDropdownStyles, {
    onMouseOver: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "dropdown-btns-group",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: props.href,
        ref: ref,
        className: router.asPath.split('/')[1] == props.title ? 'active-link link-item' : 'link-item',
        children: props.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownBtnStyles, {
        type: "button",
        onClick: showDropdown,
        disabled: !navOpen || width > 850,
        children: dropdownOpen && navOpen ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(md_["MdExpandLess"], {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(md_["MdExpandMore"], {})
      })]
    }), dropdownOpen && /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownMenuStyles, {
      isDropdownOpen: dropdownOpen,
      children: props === null || props === void 0 ? void 0 : (_props$items = props.items) === null || _props$items === void 0 ? void 0 : _props$items.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: {
          pathname: `/products/[items]`,
          query: {
            items: `${Object(formatUrl["b" /* formatUrlToRoute */])(item.title)}`
          }
        },
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownItem, {
          dropdownItem: item === null || item === void 0 ? void 0 : item.title
        })
      }, item.id))
    })]
  });
});
/* harmony default export */ var navbar_NavDropdown = (NavDropdown_NavDropdown);
// CONCATENATED MODULE: ./components/navbar/NavStyles.js

const NavStyles = external_styled_components_default.a.nav.withConfig({
  displayName: "NavStyles",
  componentId: "sc-1c999t7-0"
})(["grid-area:navbar;overflow-x:hidden;place-self:center end;text-transform:uppercase;.nav-links{font-size:1.8rem;margin:0;padding:0;position:relative;padding-right:3rem;display:grid;grid-auto-flow:column;grid-auto-columns:max-content;min-width:250px;gap:0.5rem;place-self:center end;@media (max-width:850px){position:fixed;gap:0;top:0;right:0;width:40%;min-width:250px;background:var(--gray);transform:translateX(100%);z-index:2;padding-bottom:2rem;", ";", ";@media (pointer:coarse){", ";}}}a{padding:0.2rem 1rem;color:var(--darkBlue);position:relative;transition:all 250ms;&:hover,&:focus{text-decoration:none;color:var(--blue);}@media (max-width:850px){margin-left:2rem;min-width:200px;border-bottom:1px solid var(--navBorder);}}*:focus{outline:none !important;}.active-link{color:var(--blue);}"], props => props.open && `grid-auto-flow: row; transform: translate(0, var(--navHeight)); transition: all 0.35s;`, props => !props.open && props.width <= 850 && `grid-auto-flow: row; transform: translateX(100%); transition: 0.35s;`, props => !props.open && props.btnClick && `grid-auto-flow: row; transform: translateX(100%); transition: 0.35s;`);
const NavButtonStyles = external_styled_components_default.a.button.withConfig({
  displayName: "NavStyles__NavButtonStyles",
  componentId: "sc-1c999t7-1"
})(["display:none;border:none;background:transparent;@media (max-width:850px){display:block;position:absolute;top:2rem;right:2rem;}"]);

// CONCATENATED MODULE: ./components/navbar/SearchStyles.js

const SearchStyles = external_styled_components_default.a.div.withConfig({
  displayName: "SearchStyles",
  componentId: "sc-1p91v2w-0"
})(["position:absolute;display:flex;width:100%;height:var(--searchHeight);opacity:1;transition:all 0.25s;top:var(--navHeight);", ";.search-icon{position:fixed;font-size:3rem;color:grey;padding-left:0.5rem;}input{border:1px solid var(--lightGray);height:100%;width:100%;outline:0;padding-left:3rem;background:#f5f5f5;&::placeholder{color:#d8d8d8;font-weight:100;}}"], props => props.scroll && `-webkit-animation:transition: all 0.25s;;
    opacity: 0;
    height: 0;`);

// CONCATENATED MODULE: ./components/navbar/Search.js






function Search({
  offset
}) {
  const {
    0: isScroll,
    1: setIsScroll
  } = Object(external_react_["useState"])(false);
  const {
    scrollRef
  } = useScroll();

  const handleScrollPos = () => {
    if (window.pageYOffset > 10 && window.pageYOffset < window.innerHeight) {
      window.pageYOffset !== scrollRef.current.scrollPos && window.pageYOffset - scrollRef.current.scrollPos > 100 && setIsScroll(true);
      setTimeout(() => {
        setIsScroll(false);
        scrollRef.current.scrollPos = window.pageYOffset;
      }, 300);
    }
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', handleScrollPos);
    return () => window.removeEventListener('scroll', handleScrollPos);
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(SearchStyles, {
    scroll: isScroll,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(md_["MdSearch"], {
      className: "search-icon"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "text",
      placeholder: "Search..."
    })]
  });
}
// CONCATENATED MODULE: ./components/navbar/Nav.js















const PRODUCTS = external_graphql_tag_default.a`
query PRODUCTS {
    services {
      service
      id
      items {
        id
        title
      }
    }
  }
`;
function Nav() {
  const {
    data,
    error,
    loading
  } = Object(client_["useQuery"])(PRODUCTS);
  if (loading) return /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  });
  if (error) return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: ["Error: ", error.message]
  }); // services to spread in nav

  const services = data === null || data === void 0 ? void 0 : data.services;
  const navRef = Object(external_react_["useRef"])();
  const {
    navOpen,
    toggleNav,
    closeSideNav,
    navBtnClick,
    setNavBtnClick
  } = useNav();
  const {
    width
  } = Object(windowDimensions["a" /* default */])(); // close toggled nav on click outside

  Object(external_react_["useEffect"])(() => {
    //  click outside nav handler
    const handleClickOutside = event => {
      if (navOpen && !navRef.current.contains(event.target)) {
        closeSideNav();
      }
    }; //  click outside nav listener


    document.addEventListener('mousedown', handleClickOutside); // cleanup the event listener

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navOpen]); // close nav when width more than 850px

  Object(external_react_["useEffect"])(() => {
    let isMounted = true;

    if (width >= 850) {
      closeSideNav();
    }

    return () => {
      isMounted = false;
    };
  }, [width]);
  const router = Object(router_["useRouter"])(); // link button

  const LinkBtn = /*#__PURE__*/external_react_default.a.forwardRef(({
    href,
    title,
    page
  }, ref) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: href,
      onClick: () => closeSideNav(),
      ref: ref,
      className: router.asPath.split('/')[1] === page ? 'active-link link-item' : 'link-item',
      children: title
    });
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavStyles, {
      open: navOpen,
      btnClick: navBtnClick,
      width: width,
      ref: navRef,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "nav-links",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkBtn, {
            title: 'home',
            page: ''
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/about",
          className: "link-item",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkBtn, {
            title: 'about',
            page: 'about'
          })
        }), services.map(service => /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `/${service.service}`,
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(navbar_NavDropdown, {
            title: service.service,
            items: service.items
          })
        }, service.id)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/gallery",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkBtn, {
            title: 'gallery',
            page: 'gallery'
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/contacts",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkBtn, {
            title: 'contacts',
            page: 'contacts'
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavButtonStyles, {
        onClick: () => setNavBtnClick(true),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_hamburger_react_default.a, {
          hideOutline: false,
          label: "Show menu",
          toggled: navOpen,
          toggle: toggleNav
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Search, {})]
  });
}
// CONCATENATED MODULE: ./components/layouts/partials/HeaderStyles.js

const HeaderStyles = external_styled_components_default.a.header.withConfig({
  displayName: "HeaderStyles",
  componentId: "sc-1ssbgqa-0"
})(["background:var(--gray);margin:0;padding:0;max-height:var(--navHeight);position:fixed;top:0;width:100%;z-index:10;.navbar{height:var(--navHeight);display:grid;grid-template-columns:min-content auto;grid-template-areas:'logo navbar';@media (max-width:850px){grid-template-rows:var(--navHeight);}}.search-scrolled{transition:all 0.5s;opacity:0;height:0;}"]);
const Logo = external_styled_components_default.a.h1.withConfig({
  displayName: "HeaderStyles__Logo",
  componentId: "sc-1ssbgqa-1"
})(["grid-area:logo;display:grid;grid-auto-columns:min-content;place-self:start;font-size:5rem;line-height:1rem;margin-left:2rem;z-index:2;transform:skew(-7deg);a{color:var(--blue);text-transform:uppercase;text-decoration:none;padding:0.5rem 1rem;}"]);

// CONCATENATED MODULE: ./components/layouts/partials/Header.js






function Header() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavStateProvider, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderStyles, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "navbar",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/",
            children: "a2z"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Nav, {})]
      })
    })
  });
}
// CONCATENATED MODULE: ./components/layouts/MainLayout.js






const InnerStyles = external_styled_components_default.a.div.withConfig({
  displayName: "MainLayout__InnerStyles",
  componentId: "sc-1xmvc1n-0"
})(["max-width:var(--maxWidth);margin:0 auto;"]);
function MainLayout({
  children
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobalStyles, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(InnerStyles, {
      children: children
    })]
  });
}
// CONCATENATED MODULE: ./context/menuState.js


const menuState_LocalStateContext = /*#__PURE__*/Object(external_react_["createContext"])();
const menuState_LocalStateProvider = menuState_LocalStateContext.Provider;

function MenuStateProvider({
  children
}) {
  // state for side menu
  const {
    0: isOpen,
    1: setOpen
  } = Object(external_react_["useState"])(false); // state to track if side menu hamburger btn been clicked

  const {
    0: btnClicked,
    1: setBtnClicked
  } = Object(external_react_["useState"])(false);

  function closeMenu() {
    setOpen(false);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(menuState_LocalStateProvider, {
    value: {
      isOpen,
      setOpen,
      btnClicked,
      setBtnClicked,
      closeMenu
    },
    children: children
  });
}

function useMenu() {
  const all = Object(external_react_["useContext"])(menuState_LocalStateContext);
  return all;
}


// CONCATENATED MODULE: ./components/menu/MenuDropdownStyles.js

const DropdownStyles = external_styled_components_default.a.div.withConfig({
  displayName: "MenuDropdownStyles__DropdownStyles",
  componentId: "sc-1lhkw3l-0"
})(["align-self:center;display:inline-block;.dropdown-btns-group{@media (max-width:850px){display:flex;padding-top:0.2rem;padding-bottom:0.2rem;}}"]);
const MenuDropdownStyles_DropdownBtnStyles = external_styled_components_default.a.button.withConfig({
  displayName: "MenuDropdownStyles__DropdownBtnStyles",
  componentId: "sc-1lhkw3l-1"
})(["padding:0;outline:none;border:none;background:transparent;cursor:pointer;display:none;@media (max-width:850px){display:block;position:fixed;right:2rem;}svg{color:grey;transform:scale(2);}"]);
const MenuDropdownStyles_DropdownMenuStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "MenuDropdownStyles__DropdownMenuStyles",
  componentId: "sc-1lhkw3l-2"
})(["margin:0;opacity:0;z-index:1;padding:1rem;display:none;visibility:hidden;", " @media (min-width:850px){background:#c1e2ec;min-height:15rem;position:absolute;width:50rem;left:3rem;margin:0;padding:2rem;opacity:0;visibility:hidden;grid-template-columns:1fr 1fr;transition:all 0.35s;display:none;", "}"], props => props.dropdownOpen && `opacity: 1; visibility: visible;display: block;`, props => props.dropdownOpen && `display: grid; opacity: 1; visibility: visible; `);
const MenuDropdownStyles_DropdownItemStyles = external_styled_components_default.a.li.withConfig({
  displayName: "MenuDropdownStyles__DropdownItemStyles",
  componentId: "sc-1lhkw3l-3"
})(["list-style:none;text-transform:capitalize;cursor:pointer;line-height:0.7rem;padding:1rem;a{text-decoration:none;color:white;font-size:1.8rem;transition:all 250ms;&:hover{text-decoration:none;color:var(--black);}}"]);

// CONCATENATED MODULE: ./components/menu/MenuDropdown.js










const MenuDropdown_DropdownItem = /*#__PURE__*/external_react_default.a.forwardRef(({
  href,
  onClick,
  item,
  setDropdownOpen
}, ref) => {
  const {
    closeMenu
  } = useMenu();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuDropdownStyles_DropdownItemStyles, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: href,
      onClick: () => {
        closeMenu();
        setDropdownOpen(false);
      },
      ref: ref,
      children: item
    })
  });
});
const MenuDropdown_MenuDropdown = /*#__PURE__*/external_react_default.a.forwardRef(function MenuDropdown(props, ref) {
  var _props$categories;

  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = Object(external_react_["useState"])(false);
  const {
    isOpen,
    setOpen
  } = useMenu();
  const {
    width
  } = Object(windowDimensions["a" /* default */])();
  const router = Object(router_["useRouter"])();

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleMouseEnter = () => {
    !isOpen && setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    !isOpen && setDropdownOpen(false);
  }; // close dropdown if width more than 850px


  Object(external_react_["useEffect"])(() => {
    let isMounted = true;

    if (width >= 850) {
      setDropdownOpen(false);
    }

    return () => {
      isMounted = false;
    };
  }, [width]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DropdownStyles, {
    onMouseOver: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "dropdown-btns-group",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: props.href,
        ref: ref,
        className: router.asPath.split('/')[2] && Object(formatUrl["b" /* formatUrlToRoute */])(router.asPath.split('/')[2]) == Object(formatUrl["b" /* formatUrlToRoute */])(props.dropDownMenuitem) ? 'active link-title' : 'link-title',
        children: props.dropDownMenuitem
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuDropdownStyles_DropdownBtnStyles, {
        type: "button",
        onClick: showDropdown,
        disabled: !isOpen || width > 850,
        children: dropdownOpen && isOpen ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(md_["MdExpandLess"], {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(md_["MdExpandMore"], {})
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuDropdownStyles_DropdownMenuStyles, {
      dropdownOpen: dropdownOpen,
      children: props === null || props === void 0 ? void 0 : (_props$categories = props.categories) === null || _props$categories === void 0 ? void 0 : _props$categories.map(category => /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: {
          pathname: '/products/[items]/[collection]',
          query: {
            items: `${Object(formatUrl["b" /* formatUrlToRoute */])(props.dropDownMenuitem)}`,
            collection: `${Object(formatUrl["b" /* formatUrlToRoute */])(category.category)}`
          }
        },
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuDropdown_DropdownItem, {
          item: category === null || category === void 0 ? void 0 : category.category,
          setDropdownOpen: setDropdownOpen
        })
      }, category.id))
    })]
  });
});
/* harmony default export */ var menu_MenuDropdown = (MenuDropdown_MenuDropdown);
// CONCATENATED MODULE: ./components/menu/MenuLinkStyles.js

const MenuLinkStyles = external_styled_components_default.a.div.withConfig({
  displayName: "MenuLinkStyles",
  componentId: "sc-1rmdpsj-0"
})(["font-size:1.7rem;margin-right:3rem;a{text-decoration:none;}.link-title{margin-top:0;color:white;text-transform:uppercase;font-weight:300;transition:all 0.3s;}&:hover .link-title{color:blue;}.active{color:blue;}"]);

// CONCATENATED MODULE: ./components/menu/MenuLink.js






function MenuLink({
  menuItem
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuLinkStyles, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: {
        pathname: '/products/[items]',
        query: {
          items: `${Object(formatUrl["b" /* formatUrlToRoute */])(menuItem.title)}`
        }
      },
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(menu_MenuDropdown, {
        dropDownMenuitem: menuItem.title,
        categories: menuItem.items_categories
      })
    })
  });
}
// EXTERNAL MODULE: external "react/cjs/react.development"
var react_development_ = __webpack_require__("6YSX");

// CONCATENATED MODULE: ./components/menu/MenuTreeStyles.js

const MenuTreeStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "MenuTreeStyles",
  componentId: "sc-vaxbd6-0"
})(["background:var(--gray);margin:0;padding:0.7rem 3rem;"]);
const TreeNodeStyles = external_styled_components_default.a.li.withConfig({
  displayName: "MenuTreeStyles__TreeNodeStyles",
  componentId: "sc-vaxbd6-1"
})(["display:inline;font-size:1.5rem;font-weight:300;text-transform:capitalize;a{color:var(--dark);text-decoration:none;transition:all 0.25s;&:hover{color:var(--lightBlue);}}&:last-of-type{a{color:#ffe;pointer-events:none;}}&:before{content:' / ';padding:0 .2rem;}&:first-of-type{&:before{content:none;}}"]);

// CONCATENATED MODULE: ./components/menu/MenuTree.js







function MenuTree() {
  // const { isActive, setIsActive } = useMenu();
  const router = Object(router_["useRouter"])();
  const routesArr = router.asPath.split('/').slice(1);

  const getRoute = (r, i) => r.slice(0, i + 1).join('/'); // useEffect(() => {
  //   setIsActive(routesArr[1]);
  // }, [routesArr]);


  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuTreeStyles, {
    children: routesArr.map((node, index, arr) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TreeNode, {
      node: node,
      route: getRoute(arr, index)
    }, index))
  });
}

function TreeNode({
  node,
  route
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(TreeNodeStyles, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: `/${route}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: Object(formatUrl["a" /* formatUrlToDbName */])(node)
      })
    })
  });
}
// CONCATENATED MODULE: ./components/menu/ItemsMenuStyles.js

const ItemsMenuStyles = external_styled_components_default.a.div.withConfig({
  displayName: "ItemsMenuStyles",
  componentId: "sc-18busz0-0"
})(["margin-top:calc(var(--navHeight) + var(--searchHeight));background:lightblue;width:100%;z-index:1;padding-bottom:2rem;@media (max-width:850px){overflow-x:hidden;}.menu-header{height:100px;padding-top:1rem;padding-left:2rem;position:relative;}.main-title{font-size:3.5rem;text-transform:uppercase;font-weight:400;color:darkblue;margin:0;transition:transform 0.35s;@media (max-width:850px){transform:translateX(6rem);}}.menu-links{padding-left:3rem;display:flex;flex-wrap:wrap;align-items:center;@media (max-width:850px){display:none;}}.side-menu-links{flex-direction:column;align-items:flex-start;background:var(--lightBlue);display:none;position:absolute;width:300px;padding-left:3rem;opacity:0;transform:translateX(-100%);transition:all 0.35s;z-index:5;", ";", ";@media (max-width:850px){display:block;padding-bottom:3rem;}}"], props => props.menuOpen && `transform: translateX(0%); opacity:1;`, props => !props.btnClicked && ` -webkit-transition: none !important;
       -moz-transition: none !important;
        -ms-transition: none !important;
        -o-transition: none !important;`);
const MenuButtonStyles = external_styled_components_default.a.div.withConfig({
  displayName: "ItemsMenuStyles__MenuButtonStyles",
  componentId: "sc-18busz0-1"
})(["display:none;transition:all 0.5s;@media (max-width:850px){display:block;position:absolute;top:2rem;left:2rem;}"]);

// CONCATENATED MODULE: ./components/menu/ItemsMenu.js













const SERVICE_MENU_QUERY = external_graphql_tag_default.a`
  query SERVICE_MENU_QUERY($service: String!) {
    services(where: { service: $service }) {
      items {
        id
        title
        items_categories {
          id
          category: category_title
        }
      }
    }
  }
`;
function ItemsMenu({}) {
  var _data$services$;

  const router = Object(router_["useRouter"])();
  const service = router.asPath.split('/')[1];
  const {
    data,
    error,
    loading
  } = Object(client_["useQuery"])(SERVICE_MENU_QUERY, {
    variables: {
      service: service
    }
  });
  const {
    isOpen,
    setOpen,
    btnClicked,
    setBtnClicked,
    closeMenu
  } = useMenu(); // ref for side menu container

  const sideMenuRef = Object(external_react_["useRef"])();
  const btnRef = Object(external_react_["useRef"])();
  const {
    width
  } = Object(windowDimensions["a" /* default */])(); // close side menu on click outside

  Object(external_react_["useEffect"])(() => {
    //  click outside side menu handler
    const handleClickOutside = event => {
      if (isOpen && !btnRef.current.contains(event.target) && !sideMenuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }; //  click outside side menu listener


    document.addEventListener('mousedown', handleClickOutside); // cleanup the event listener

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // close side menu if width is more than 850px

  Object(external_react_["useEffect"])(() => {
    let isMounted = true;

    if (width >= 850) {
      closeMenu();
    }

    return () => {
      isMounted = false;
    };
  }, [width]);
  if (loading) return /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  });
  if (error) return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: ["Error: ", error.message]
  });
  const menuItems = data === null || data === void 0 ? void 0 : (_data$services$ = data.services[0]) === null || _data$services$ === void 0 ? void 0 : _data$services$.items;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(ItemsMenuStyles, {
      menuOpen: isOpen,
      btnClicked: btnClicked,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "menu-header",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuButtonStyles, {
          ref: btnRef,
          onClick: () => setBtnClicked(true),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_hamburger_react_["Slant"], {
            hideOutline: false,
            label: "show menu",
            toggled: isOpen,
            toggle: setOpen
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: "main-title",
          children: service
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "menu-links",
        children: menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(menuItem => /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuLink, {
          menuItem: menuItem
        }, menuItem.id))
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "side-menu-links",
        ref: sideMenuRef,
        children: menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(menuItem => /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuLink, {
          menuItem: menuItem,
          onClick: () => {
            setOpen(false);
          }
        }, menuItem.id))
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuTree, {})]
  });
}
// CONCATENATED MODULE: ./components/layouts/MenuLayout.js








const MenuLayout_InnerStyles = external_styled_components_default.a.div.withConfig({
  displayName: "MenuLayout__InnerStyles",
  componentId: "sc-1enyr55-0"
})(["max-width:var(--maxWidth);margin:0 auto;"]);
function MenuLayout({
  children
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobalStyles, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuStateProvider, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ItemsMenu, {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuLayout_InnerStyles, {
      children: children
    })]
  });
}
// CONCATENATED MODULE: ./components/layouts/LayoutWrapper.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const layouts = {
  main: MainLayout,
  menu: MenuLayout
};
function LayoutWrapper(props) {
  const Layout = layouts[props.layout] || 'menu';

  if (Layout === 'menu') {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuLayout, _objectSpread(_objectSpread({}, props), {}, {
      children: props.children
    }));
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainLayout, _objectSpread(_objectSpread({}, props), {}, {
    children: props.children
  }));
}
// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









router_default.a.events.on('routeChangeStart', () => external_nprogress_default.a.start());
router_default.a.events.on('routeChangeComplete', () => external_nprogress_default.a.done());
router_default.a.events.on('routeChangeError', () => external_nprogress_default.a.done()); // changr LayoutWrapper to getLayput in production if not find other options

function MyApp({
  Component,
  pageProps,
  apollo
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(client_["ApolloProvider"], {
    client: apollo,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scroll_parallax_["ParallaxProvider"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollProvider, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LayoutWrapper, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
        }))
      })
    })
  });
}

MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (withData(MyApp));

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6YSX":
/***/ (function(module, exports) {

module.exports = require("react/cjs/react.development");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BPlj":
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "DiUS":
/***/ (function(module, exports) {



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "K0LP":
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "LHyY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatUrlToDbName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatUrlToRoute; });
function formatUrlToDbName(str) {
  return str.toLowerCase().split('_').join(' ');
}

function formatUrlToRoute(str) {
  str = str.toLowerCase().split('%20').join('_');
  return str.split(' ').join('_');
}



/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Q9iP":
/***/ (function(module, exports) {

module.exports = require("@apollo/link-error");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "VXBr":
/***/ (function(module, exports) {

module.exports = require("hamburger-react");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XyKl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWindowDimensions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-inner-declarations */


function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, ...arguments);
    }, ms);
  };
}

function useWindowDimensions() {
  // const hasWindow = typeof window !== 'undefined';
  // function getWindowDimensions() {
  //   const width = hasWindow ? window.innerWidth : null;
  //   const height = hasWindow ? window.innerHeight : null;
  //   return {
  //     width,
  //     height,
  //   };
  // }
  const {
    0: windowDimensions,
    1: setWindowDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: undefined,
    height: undefined
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }, 0);
    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);
  return windowDimensions;
}

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "ePNP":
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "j3R+":
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "kD/w":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/react/ssr");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });