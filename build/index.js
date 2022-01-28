var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/jose/8wonders/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/app.css
var app_default = "/build/_assets/app-6KQIQ37G.css";

// route-module:/home/jose/8wonders/app/root.tsx
var links = () => [
  {
    rel: "stylesheet",
    href: app_default
  }
];
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto px-4 max-w-6xl"
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:/home/jose/8wonders/app/routes/wonders/$wonderId.tsx
var wonderId_exports = {};
__export(wonderId_exports, {
  default: () => WonderExplanation
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_tiny_invariant = __toModule(require("tiny-invariant"));

// app/logic/Wonders.tsx
init_react();
var wondersData = [
  {
    id: "pyramids",
    name: "The Piramyds",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/82526D5B-4718-4121-8058-79E0BBB307E2.jpg",
    cost: {
      papyrus: 1,
      stone: 3
    },
    effect: {
      victoryPoints: 9
    }
  },
  {
    id: "appian",
    name: "The Appian Way",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/A2DAC138-6667-4094-AB11-24F9516D8C2E.jpg",
    cost: {
      papyrus: 1,
      clay: 2,
      stone: 2
    },
    effect: {
      victoryPoints: 3,
      takeCoins: 3,
      removeCoins: 3,
      secondTurn: true
    }
  },
  {
    id: "artemis",
    name: "The tehmple of artemis",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/0EFC8445-9B20-4579-9012-503A00CE4619.jpg",
    cost: {
      papyrus: 1,
      glass: 1,
      stone: 1,
      wood: 1
    },
    effect: {
      takeCoins: 12,
      secondTurn: true
    }
  },
  {
    id: "piraeus",
    name: "Piraeus",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/E6CFD4BD-5B4C-4ED8-9990-CDBDB9B81D50.jpg",
    cost: {
      clay: 1,
      stone: 1,
      wood: 2
    },
    effect: {
      produce: ["papyrus", "glass"],
      secondTurn: true,
      victoryPoints: 2
    }
  },
  {
    id: "gardens",
    name: "The hanging gardens",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/FE7D4461-897D-4C85-A989-3E41DF5859DD.jpg",
    cost: {
      papyrus: 1,
      glass: 1,
      wood: 2
    },
    effect: {
      takeCoins: 6,
      secondTurn: true,
      victoryPoints: 3
    }
  },
  {
    id: "sphinx",
    name: "The sphinx",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/F7D8143A-4E00-41BF-BC77-336E070186A2.jpg",
    cost: {
      glass: 2,
      clay: 1,
      stone: 1
    },
    effect: {
      secondTurn: true,
      victoryPoints: 6
    }
  },
  {
    id: "library",
    name: "The Great Library",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/2A6D2BA8-5256-4445-B597-B55DC79A8D16.jpg",
    cost: {
      papyrus: 1,
      glass: 1,
      wood: 3
    },
    effect: {
      playDiscardedCoins: true,
      victoryPoints: 4
    }
  },
  {
    id: "lighhouse",
    name: "The great lighthouse",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/6810BD52-6C7C-4A01-BFDE-28B2DB9092BB.jpg",
    cost: {
      papyrus: 2,
      stone: 1,
      wood: 1
    },
    effect: {
      produce: ["wood", "stone", "clay"],
      victoryPoints: 4
    }
  },
  {
    id: "mausoleum",
    name: "The Mausoleum",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/99A0136B-7A1B-43E8-8701-23B11B2F4A09.jpg",
    cost: {
      papyrus: 1,
      glass: 2,
      clay: 2
    },
    effect: {
      playDiscardedCard: true,
      victoryPoints: 2
    }
  },
  {
    id: "circus",
    name: "Circus Maximus",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/587633CE-16F8-450E-AAB1-610C28E7A5BE.jpg",
    cost: {
      glass: 1,
      wood: 1,
      stone: 2
    },
    effect: {
      destroyGreyCard: true,
      shields: 1,
      victoryPoints: 3
    }
  },
  {
    id: "zeus",
    name: "The statue of Zeus",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/57629DA8-8CEB-41DC-8EAE-F23C05354E75.jpg",
    cost: {
      papyrus: 2,
      clay: 1,
      wood: 1,
      stone: 1
    },
    effect: {
      destroyBrownCard: true,
      shields: 1,
      victoryPoints: 3
    }
  },
  {
    id: "collosus",
    name: "The collossus",
    image: "https://cardboardmountain.com/wp-content/uploads/2019/11/7FE982B2-9F14-4A55-B494-DE862A3DF2CB.jpg",
    cost: {
      glass: 1,
      clay: 3
    },
    effect: {
      shields: 2,
      victoryPoints: 3
    }
  }
];
var wonders = wondersData;

// route-module:/home/jose/8wonders/app/routes/wonders/$wonderId.tsx
function WonderExplanation() {
  const { wonderId } = (0, import_remix3.useParams)();
  const wonder = wonders.find((w) => w.id === wonderId);
  (0, import_tiny_invariant.default)(wonder);
  const { name, image, cost, effect } = wonder;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl text-center p-4"
  }, name), /* @__PURE__ */ React.createElement("img", {
    src: image
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl"
  }, "Cost:"), /* @__PURE__ */ React.createElement("ul", null, Object.entries(cost).map(([k, v]) => /* @__PURE__ */ React.createElement("li", null, k, ":", v))), /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl"
  }, "Effect:"), /* @__PURE__ */ React.createElement("ul", null, Object.entries(effect).map(([k, v]) => /* @__PURE__ */ React.createElement("li", null, k, ":", v))));
}

// route-module:/home/jose/8wonders/app/routes/wonders/index.tsx
var wonders_exports = {};
__export(wonders_exports, {
  default: () => Wonders
});
init_react();

// app/components/WonderImage.tsx
init_react();
function WonderImage({ wonder }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "hover:underline decoration-slate-600"
  }, /* @__PURE__ */ React.createElement("a", {
    href: `/wonders/${wonder.id}`,
    className: "cursor-pointer"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl text-center pb-1"
  }, wonder.name), /* @__PURE__ */ React.createElement("img", {
    src: wonder.image,
    className: "w-60 md:w-96"
  })));
}

// route-module:/home/jose/8wonders/app/routes/wonders/index.tsx
function Wonders() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-6xl text-center p-4"
  }, "Wonder cards"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row flex-wrap justify-center"
  }, wonders.map((w) => /* @__PURE__ */ React.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement(WonderImage, {
    wonder: w
  })))));
}

// route-module:/home/jose/8wonders/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_remix4 = __toModule(require_remix());
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "m-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-4 text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl"
  }, "8 wonders"), /* @__PURE__ */ React.createElement("p", null, "A game that is not familiar at all to you.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix4.Form, {
    action: "/start",
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    name: "seed",
    type: "number",
    defaultValue: "10"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "Empezar",
    className: "p-2 m-2 bg-red-200 rounded-sm"
  }))));
}

// route-module:/home/jose/8wonders/app/routes/game.tsx
var game_exports = {};
__export(game_exports, {
  default: () => Game
});
init_react();
var import_react = __toModule(require("react"));
var import_remix6 = __toModule(require_remix());
var import_tiny_invariant4 = __toModule(require("tiny-invariant"));

// app/components/Submit.tsx
init_react();

// app/hooks.ts
init_react();
var import_remix5 = __toModule(require_remix());
var import_tiny_invariant2 = __toModule(require("tiny-invariant"));
function useGameStateText() {
  let [searchParams] = (0, import_remix5.useSearchParams)();
  const s = searchParams.get("state");
  (0, import_tiny_invariant2.default)(s !== null, "The state must be included in the url!");
  return s;
}
function useGameState() {
  const s = useGameStateText();
  return JSON.parse(s);
}
function useGameStateSearchUrl(url) {
  const s = useGameStateText();
  return `${url}?state=${s}`;
}

// app/components/Submit.tsx
function Submit({ children }) {
  const { player } = useGameState();
  return /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: `p-2 m-2 bg-red-200 rounded-sm ${player === 1 ? "hover:bg-blue-200" : "hover:bg-green-200"} transition-colors`
  }, children);
}

// app/logic/Cards/index.ts
init_react();

// app/logic/Cards/AgeOne.ts
init_react();
var AgeOne = [
  {
    name: "Lumber Yard",
    type: "brown",
    cost: {},
    effect: {
      wood: 1
    }
  },
  {
    name: "Logging Camp",
    type: "brown",
    cost: {
      coin: 1
    },
    effect: {
      wood: 1
    }
  },
  {
    name: "Clay pool",
    type: "brown",
    cost: {},
    effect: {
      clay: 1
    }
  },
  {
    name: "Clay Pit",
    type: "brown",
    cost: {
      coin: 1
    },
    effect: {
      clay: 1
    }
  },
  {
    name: "Quarry",
    type: "brown",
    cost: {},
    effect: {
      stone: 1
    }
  },
  {
    name: "Stone pit",
    type: "brown",
    cost: {
      coin: 1
    },
    effect: {
      stone: 1
    }
  },
  {
    name: "Glassworks",
    type: "gray",
    cost: { coin: 1 },
    effect: {
      glass: 1
    }
  },
  {
    name: "Press",
    type: "gray",
    cost: { coin: 1 },
    effect: { papyrus: 1 }
  },
  {
    name: "Guard Tower",
    type: "red",
    cost: {},
    effect: { shields: 1 }
  },
  {
    name: "Workshop",
    type: "green",
    cost: {
      papyrus: 1
    },
    effect: {
      victoryPoints: 1,
      science: "A"
    }
  },
  {
    name: "Apothecary",
    type: "green",
    cost: {
      papyrus: 1
    },
    effect: {
      science: "O",
      victoryPoints: 1
    }
  },
  {
    name: "Stone Reserve",
    type: "yellow",
    cost: {
      coin: 3
    },
    effect: {
      tradeOne: ["stone"]
    }
  },
  {
    name: "Clay Reserve",
    type: "yellow",
    cost: { coin: 3 },
    effect: { tradeOne: ["clay"] }
  },
  {
    name: "Wood Reserve",
    type: "yellow",
    cost: { coin: 3 },
    effect: { tradeOne: ["wood"] }
  },
  {
    name: "Stable",
    type: "red",
    cost: { wood: 1 },
    effect: {
      shields: 1,
      symbol: "horse"
    }
  },
  {
    name: "Garrison",
    type: "red",
    cost: { clay: 1 },
    effect: {
      shields: 1,
      symbol: "sword"
    }
  },
  {
    name: "Palisade",
    type: "red",
    cost: { coin: 2 },
    effect: { shields: 1 }
  },
  {
    name: "Scriptorium",
    type: "green",
    cost: { coin: 2 },
    effect: {
      symbol: "book",
      science: "pencil"
    }
  },
  {
    name: "Pharmacist",
    type: "green",
    cost: { coin: 2 },
    effect: {
      symbol: "cog",
      science: "smasher"
    }
  },
  {
    name: "Theater",
    cost: {},
    effect: {
      victoryPoints: 3,
      symbol: "mask"
    },
    type: "blue"
  },
  {
    name: "Altar",
    cost: {},
    effect: {
      victoryPoints: 3,
      symbol: "moon"
    },
    type: "blue"
  },
  {
    name: "Baths",
    type: "blue",
    cost: { stone: 1 },
    effect: {
      victoryPoints: 3,
      symbol: "water"
    }
  },
  {
    name: "Tavern",
    cost: {},
    effect: {
      coin: 4
    },
    type: "yellow"
  }
];

// app/logic/Cards/AgeTwo.ts
init_react();
var AgeTwo = [
  {
    name: "Sawmill",
    type: "brown",
    cost: { coin: 2 },
    effect: {
      wood: 2
    }
  },
  {
    name: "Brickyard",
    type: "brown",
    cost: { coin: 2 },
    effect: { clay: 2 }
  },
  {
    name: "Shelf Quarry",
    type: "brown",
    cost: { coin: 2 },
    effect: { stone: 2 }
  },
  {
    name: "Glass-Blower",
    type: "gray",
    cost: {},
    effect: { glass: 1 }
  },
  {
    name: "Drying room",
    type: "gray",
    cost: {},
    effect: { papyrus: 1 }
  },
  {
    name: "Walls",
    type: "red",
    cost: { stone: 2 },
    effect: { shields: 2 }
  },
  {
    name: "Forum",
    type: "yellow",
    cost: {
      coin: 3,
      clay: 1
    },
    effect: {
      produceOneOf: ["glass", "papyrus"]
    }
  },
  {
    name: "Caravansery",
    type: "yellow",
    cost: {
      coin: 2,
      glass: 1,
      papyrus: 1
    },
    effect: {
      produceOneOf: ["clay", "wood", "stone"]
    }
  },
  {
    name: "Customs House",
    type: "yellow",
    cost: { coin: 4 },
    effect: {
      tradeOne: ["papyrus", "glass"]
    }
  },
  {
    name: "Tribunal",
    type: "blue",
    cost: {
      wood: 2,
      glass: 1
    },
    effect: {
      victoryPoints: 5
    }
  },
  {
    name: "Horse Breeders",
    type: "red",
    cost: {
      clay: 1,
      wood: 1
    },
    effect: {
      shields: 1
    },
    unlockedBy: "horse"
  },
  {
    name: "Barracks",
    type: "red",
    cost: { coin: 3 },
    effect: {
      shields: 1
    },
    unlockedBy: "sword"
  },
  {
    name: "Archery Range",
    type: "red",
    cost: {
      stone: 1,
      wood: 1,
      papyrus: 1
    },
    effect: {
      shields: 2,
      symbol: "target"
    }
  },
  {
    name: "Parade Ground",
    type: "red",
    cost: {
      clay: 2,
      glass: 1
    },
    effect: {
      shields: 2,
      symbol: "soldier"
    }
  },
  {
    name: "Library",
    type: "green",
    cost: {
      stone: 1,
      wood: 1,
      glass: 1
    },
    effect: {
      science: "pencil",
      victoryPoints: 2
    },
    unlockedBy: "book"
  },
  {
    name: "Dispensary",
    type: "green",
    cost: {
      clay: 2,
      stone: 1
    },
    effect: {
      science: "smasher",
      victoryPoints: 2
    },
    unlockedBy: "cog"
  },
  {
    name: "School",
    type: "green",
    cost: {
      wood: 1,
      papyrus: 2
    },
    effect: {
      science: "O",
      victoryPoints: 1,
      symbol: "music"
    }
  },
  {
    name: "Laboratory",
    type: "green",
    cost: {
      wood: 1,
      glass: 2
    },
    effect: {
      science: "A",
      victoryPoints: 1,
      symbol: "lamp"
    }
  },
  {
    name: "Statue",
    type: "blue",
    cost: { clay: 2 },
    effect: {
      victoryPoints: 4,
      symbol: "column"
    },
    unlockedBy: "mask"
  },
  {
    name: "Temple",
    type: "blue",
    cost: {
      wood: 1,
      papyrus: 1
    },
    unlockedBy: "moon",
    effect: {
      victoryPoints: 4,
      symbol: "sun"
    }
  },
  {
    name: "Aqueduct",
    type: "blue",
    unlockedBy: "water",
    cost: {
      stone: 3
    },
    effect: {
      victoryPoints: 5
    }
  },
  {
    name: "Rostrum",
    type: "blue",
    cost: {
      stone: 1,
      wood: 1
    },
    effect: {
      victoryPoints: 4,
      symbol: "temple"
    }
  },
  {
    name: "Brewery",
    type: "yellow",
    cost: {},
    effect: {
      coin: 6,
      symbol: "barrel"
    }
  }
];

// app/logic/Cards/AgeThree.ts
init_react();
var AgeThree = [
  {
    name: "Arsenal",
    type: "red",
    cost: {
      clay: 3,
      wood: 2
    },
    effect: { shields: 3 }
  },
  {
    name: "Courthouse",
    type: "red",
    cost: { coin: 8 },
    effect: { shields: 3 }
  },
  {
    name: "Academy",
    type: "green",
    cost: {
      stone: 1,
      wood: 1,
      glass: 2
    },
    effect: {
      science: "I",
      victoryPoints: 3
    }
  },
  {
    name: "Study",
    type: "blue",
    cost: {
      wood: 2,
      glass: 1,
      papyrus: 1
    },
    effect: {
      science: "I",
      victoryPoints: 3
    }
  },
  {
    name: "Chamber of commerce",
    type: "yellow",
    cost: { papyrus: 2 },
    effect: {
      victoryPoints: 3,
      complex: {
        selector: ["gray"],
        coinsNow: 3,
        over: "me",
        victoryPointsLater: 0
      }
    }
  },
  {
    name: "Port",
    type: "yellow",
    cost: {
      wood: 1,
      glass: 1,
      papyrus: 1
    },
    effect: {
      victoryPoints: 3,
      complex: {
        selector: ["brown"],
        coinsNow: 2,
        over: "me",
        victoryPointsLater: 3
      }
    }
  },
  {
    name: "Armory",
    type: "yellow",
    cost: {
      stone: 2,
      glass: 1
    },
    effect: {
      victoryPoints: 3,
      complex: {
        coinsNow: 1,
        over: "me",
        selector: ["red"],
        victoryPointsLater: 0
      }
    }
  },
  {
    name: "Palace",
    type: "blue",
    cost: {
      clay: 1,
      stone: 1,
      wood: 1,
      glass: 2
    },
    effect: {
      victoryPoints: 7
    }
  },
  {
    name: "Town Hall",
    type: "blue",
    cost: {
      stone: 3,
      wood: 2
    },
    effect: {
      victoryPoints: 7
    }
  },
  {
    name: "Obelisk",
    type: "blue",
    cost: {
      stone: 2,
      glass: 1
    },
    effect: {
      victoryPoints: 5
    }
  },
  {
    name: "Fortifications",
    type: "red",
    unlockedBy: "tower",
    cost: {
      stone: 2,
      clay: 1,
      papyrus: 1
    },
    effect: {
      shields: 2
    }
  },
  {
    name: "Siege Workshop",
    unlockedBy: "target",
    type: "red",
    cost: {
      wood: 3,
      glass: 1
    },
    effect: {
      shields: 2
    }
  },
  {
    name: "Circus",
    type: "red",
    unlockedBy: "soldier",
    cost: {
      clay: 2,
      stone: 2
    },
    effect: {
      shields: 2
    }
  },
  {
    name: "University",
    type: "green",
    unlockedBy: "music",
    cost: {
      clay: 1,
      glass: 1,
      papyrus: 1
    },
    effect: {
      science: "Q",
      victoryPoints: 2
    }
  },
  {
    name: "Observatory",
    unlockedBy: "lamp",
    type: "green",
    cost: {
      stone: 1,
      papyrus: 2
    },
    effect: {
      science: "O",
      victoryPoints: 2
    }
  },
  {
    name: "Gardens",
    unlockedBy: "column",
    type: "blue",
    cost: {
      clay: 2,
      wood: 2
    },
    effect: {
      victoryPoints: 6
    }
  },
  {
    name: "Pantheon",
    type: "blue",
    unlockedBy: "sun",
    cost: {
      clay: 1,
      wood: 1,
      papyrus: 2
    },
    effect: {
      victoryPoints: 6
    }
  },
  {
    name: "Senate",
    type: "blue",
    unlockedBy: "temple",
    cost: {
      clay: 2,
      stone: 1,
      papyrus: 1
    },
    effect: {
      victoryPoints: 5
    }
  },
  {
    name: "Lighthouse",
    type: "yellow",
    unlockedBy: "jar",
    cost: {
      clay: 2,
      glass: 1
    },
    effect: {
      victoryPoints: 3,
      complex: {
        coinsNow: 1,
        over: "me",
        selector: ["yellow"],
        victoryPointsLater: 0
      }
    }
  },
  {
    name: "Arena",
    type: "yellow",
    unlockedBy: "barrel",
    cost: {
      clay: 1,
      stone: 1,
      wood: 1
    },
    effect: {
      victoryPoints: 3,
      complex: {
        coinsNow: 2,
        over: "me",
        selector: ["wonders"],
        victoryPointsLater: 0
      }
    }
  }
];

// app/logic/Cards/Guilds.ts
init_react();
var Guilds = [
  {
    name: "Merchants Guild",
    type: "purple",
    cost: {
      clay: 1,
      wood: 1,
      glass: 1,
      papyrus: 1
    },
    effect: {
      complex: {
        coinsNow: 1,
        over: "playerWithMost",
        selector: ["yellow"],
        victoryPointsLater: 1
      }
    }
  },
  {
    name: "Shipowners Guild",
    type: "purple",
    cost: {
      clay: 1,
      stone: 1,
      glass: 1,
      papyrus: 1
    },
    effect: {
      complex: {
        coinsNow: 1,
        over: "playerWithMost",
        selector: ["brown", "gray"],
        victoryPointsLater: 1
      }
    }
  },
  {
    name: "Builders Guild",
    type: "purple",
    cost: {
      stone: 2,
      clay: 1,
      wood: 1,
      glass: 1
    },
    effect: {
      complex: {
        over: "playerWithMost",
        coinsNow: 0,
        selector: ["wonders"],
        victoryPointsLater: 2
      }
    }
  },
  {
    name: "Magistrates Guild",
    type: "purple",
    cost: {
      wood: 2,
      clay: 1,
      papyrus: 1
    },
    effect: {
      complex: {
        coinsNow: 1,
        over: "playerWithMost",
        selector: ["blue"],
        victoryPointsLater: 1
      }
    }
  },
  {
    name: "Scientists Guild",
    type: "purple",
    cost: {
      clay: 2,
      wood: 2
    },
    effect: {
      complex: {
        coinsNow: 1,
        over: "playerWithMost",
        selector: ["green"],
        victoryPointsLater: 1
      }
    }
  },
  {
    name: "Moneylenders Guild",
    type: "purple",
    cost: {
      stone: 2,
      wood: 2
    },
    effect: {
      complex: {
        victoryPointsLater: 1,
        coinsNow: 0,
        over: "playerWithMost",
        selector: ["3coins"]
      }
    }
  },
  {
    name: "Tacticians Guild",
    type: "purple",
    cost: {
      stone: 2,
      clay: 1,
      papyrus: 1
    },
    effect: {
      complex: {
        coinsNow: 1,
        over: "playerWithMost",
        selector: ["red"],
        victoryPointsLater: 1
      }
    }
  }
];

// app/logic/Cards/index.ts
var ageOneDeck = AgeOne;
var ageTwoDeck = AgeTwo;
var ageThreeDeck = AgeThree;
var guildsDeck = Guilds;
var allCards = [
  ...ageOneDeck,
  ...ageTwoDeck,
  ...ageThreeDeck,
  ...guildsDeck
];

// app/logic/GameState.ts
init_react();
var import_tiny_invariant3 = __toModule(require("tiny-invariant"));

// app/logic/layouts.ts
init_react();
function arraySize(size, initializer) {
  return new Array(size).fill(0).map((_value, index) => initializer(index));
}
function sum(array) {
  return array.reduce((a, b) => a + b, 0);
}
var layoutAgeOne = (() => {
  const rowSizes = [2, 3, 4, 5, 6];
  const rowStartIndexes = arraySize(rowSizes.length, (index) => sum(rowSizes.slice(0, index)));
  return rowSizes.flatMap((rowSize, rowIndex) => arraySize(rowSize, (indexInRow) => rowIndex === 5 ? [] : [
    rowStartIndexes[rowIndex + 1] + indexInRow,
    rowStartIndexes[rowIndex + 1] + indexInRow + 1
  ]));
})();
var layoutAgeTwo = (() => {
  const rowSizes = [6, 5, 4, 3, 2];
  const rowStartIndexes = arraySize(rowSizes.length, (index) => sum(rowSizes.slice(0, index)));
  return rowSizes.flatMap((rowSize, rowIndex) => arraySize(rowSize, (indexInRow) => {
    if (rowIndex === 5)
      return [];
    if (indexInRow === 0)
      return [rowStartIndexes[rowIndex + 1]];
    if (indexInRow === rowSize - 1)
      return [rowStartIndexes[rowIndex + 1] + rowSizes[rowIndex + 1] - 1];
    return [
      rowStartIndexes[rowIndex + 1] + indexInRow,
      rowStartIndexes[rowIndex + 1] + indexInRow - 1
    ];
  }));
})();
var layoutAgeThree = [
  [2, 3],
  [3, 4],
  [5, 6],
  [6, 7],
  [7, 8],
  [9],
  [9],
  [10],
  [10],
  [11, 12],
  [13, 14],
  [15],
  [15, 16],
  [16, 17],
  [17],
  [18],
  [18, 19],
  [19],
  [],
  []
];
function canBePlayed(layout, inGame, removedIndex, initialCanBePlayed) {
  const newTrues = layout.map((coverers, index) => ({ coverers, index })).filter(({ coverers }) => coverers.includes(removedIndex)).filter(({ coverers }) => coverers.every((coverer) => !inGame[coverer] || coverer === removedIndex)).map(({ index }) => index);
  console.log({ newTrues });
  return initialCanBePlayed.map((initialValue, index) => initialValue || newTrues.includes(index));
}
function canBePlayedForLayout(layout) {
  return (inGame, removedIndex, initialCanBePlayed) => canBePlayed(layout, inGame, removedIndex, initialCanBePlayed);
}
var layouts = {
  1: canBePlayedForLayout(layoutAgeOne),
  2: canBePlayedForLayout(layoutAgeTwo),
  3: canBePlayedForLayout(layoutAgeThree)
};
function trues(n) {
  return new Array(n).fill(true);
}
function falses(n) {
  return new Array(n).fill(false);
}
var empty = [];
var intialCanBePlayedStates = {
  1: empty.concat(falses(14), trues(6)),
  2: empty.concat(falses(18), trues(2)),
  3: empty.concat(falses(18), trues(2))
};
var intialFaceUpStates = {
  1: empty.concat(trues(2), falses(3), trues(4), falses(5), trues(6)),
  2: empty.concat(trues(6), falses(5), trues(4), falses(3), trues(2)),
  3: empty.concat(trues(2), falses(3), trues(4), falses(2), trues(4), falses(3), trues(2))
};

// app/logic/Resource.ts
init_react();
var basicResources = ["stone", "clay", "wood"];
var elaborateResources = ["papyrus", "glass"];
var resources = [...basicResources, ...elaborateResources];

// app/logic/SingleEffect.ts
init_react();
function extractResource(effect, ret, resource) {
  if (effect[resource]) {
    new Array(effect[resource]).fill(0).forEach(() => ret.push({ produceOneOf: [resource] }));
  }
}
function extractEffects(effect) {
  const ret = [];
  const extractRes = (resource) => extractResource(effect, ret, resource);
  extractRes("clay");
  extractRes("glass");
  extractRes("papyrus");
  extractRes("stone");
  extractRes("wood");
  if (effect.coin)
    ret.push({ getCoin: effect.coin });
  if (effect.complex)
    ret.push({ complex: effect.complex });
  if (effect.produceOneOf)
    ret.push({ produceOneOf: effect.produceOneOf });
  if (effect.science)
    ret.push({ science: effect.science });
  if (effect.shields)
    ret.push({ shields: effect.shields });
  if (effect.symbol)
    ret.push({ symbol: effect.symbol });
  if (effect.tradeOne)
    ret.push({ tradeOne: effect.tradeOne });
  if (effect.victoryPoints)
    ret.push({ victoryPoints: effect.victoryPoints });
  return ret;
}

// app/logic/GameState.ts
function randomizers(randomSeed) {
  function sample(array, quantity) {
    const copy = [...array];
    const ret = [];
    new Array(quantity).fill(0).forEach((_, index) => {
      const randomIndex = randomSeed * index % copy.length;
      ret.push(copy[randomIndex]);
      copy.splice(randomIndex, 1);
    });
    return ret;
  }
  function shuffle(a, b) {
    return sample([...a, ...b], a.length + b.length);
  }
  function sampleRemove(array, removeQuantity) {
    return sample(array, array.length - removeQuantity);
  }
  return {
    sample,
    shuffle,
    sampleRemove
  };
}
function otherPlayer(p) {
  if (p === 1) {
    return 2;
  } else {
    return 1;
  }
}
var wonderIds = wonders.map((w) => w.id);
function assertIsWonderId(str) {
  if (!wonderIds.includes(str)) {
    throw new Error("noooo");
  }
}
function getNextAge(age) {
  switch (age) {
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return null;
  }
}
function stateAfterPickingUpCard(state, card) {
  (0, import_tiny_invariant3.default)(state.age !== null, "Age must not be null");
  const currentDeck = state.decks[state.age];
  const newDeckForThisAge = currentDeck.map((c) => c === card ? null : c);
  const age = newDeckForThisAge.every((card2) => card2 === null) ? getNextAge(state.age) : state.age;
  const decks = __spreadProps(__spreadValues({}, state.decks), {
    [state.age]: newDeckForThisAge
  });
  const newCanBePlayed = layouts[state.age](state.decks[state.age].map((c) => c !== null), currentDeck.indexOf(card), state.canBePlayed);
  return __spreadProps(__spreadValues({}, state), {
    decks,
    age,
    player: otherPlayer(state.player),
    canBePlayed: age === null ? [] : age === state.age ? newCanBePlayed : intialCanBePlayedStates[age]
  });
}
function cardsBuiltByPlayer(state, player) {
  return allCards.filter((card) => state.playersState[player].buildings.includes(card.name));
}
function getProductionEffects(cards) {
  return cards.flatMap((card) => extractEffects(card.effect)).flatMap((singleEffect) => "produceOneOf" in singleEffect ? [singleEffect] : []);
}
function getMinimalCostOfBuilding(resourcesNeeded, tradeCosts, productions) {
  console.log({ resourcesNeeded, productions });
  const someResourceIsNeded = resources.some((resName) => resourcesNeeded == null ? void 0 : resourcesNeeded[resName]);
  if (!someResourceIsNeded) {
    console.log("No resources needed!");
    return 0;
  }
  if (productions.length === 0) {
    console.log("No more productions!");
    return resources.map((resource) => ((resourcesNeeded == null ? void 0 : resourcesNeeded[resource]) ?? 0) * tradeCosts[resource]).reduce((a, b) => a + b, 0);
  }
  const [production, ...otherProductions] = productions;
  function resourcesWithOneLessOf(resource) {
    const quantity = resourcesNeeded[resource];
    if (quantity) {
      return __spreadProps(__spreadValues({}, resourcesNeeded), {
        [resource]: Math.max(quantity - 1, 0)
      });
    } else {
      return resourcesNeeded;
    }
  }
  const producedResources = production.produceOneOf;
  return Math.min(...producedResources.map((r) => getMinimalCostOfBuilding(resourcesWithOneLessOf(r), tradeCosts, otherProductions)));
}
function getTradeCostsForPlayer(state, player) {
  const initialTradeCosts = {
    clay: 2,
    glass: 2,
    papyrus: 2,
    stone: 2,
    wood: 2
  };
  const baseResourceCards = cardsBuiltByPlayer(state, otherPlayer(player)).filter((c) => c.type === "gray" || c.type === "brown");
  const producedResources = getProductionEffects(baseResourceCards).flatMap((effect) => effect.produceOneOf);
  return producedResources.reduce((tradeCosts, resource) => __spreadProps(__spreadValues({}, tradeCosts), {
    [resource]: tradeCosts[resource] + 1
  }), initialTradeCosts);
}
function canBuild(state, player, cardName) {
  var _a;
  const card = allCards.find((c) => c.name === cardName);
  (0, import_tiny_invariant3.default)(card, "Card should be a card");
  const coinCost = ((_a = card.cost) == null ? void 0 : _a.coin) ?? 0;
  const currentCoins = state.playersState[player].coins;
  const productions = getProductionEffects(cardsBuiltByPlayer(state, player));
  const tradeCosts = getTradeCostsForPlayer(state, player);
  const minimalCost = getMinimalCostOfBuilding(card.cost, tradeCosts, productions);
  if (coinCost + minimalCost > currentCoins)
    return false;
  return { additionalCoins: minimalCost };
}
function reduce(state, action2) {
  switch (action2.type) {
    case "start": {
      const { sample, shuffle, sampleRemove } = randomizers(action2.seed);
      return {
        randomSeed: action2.seed,
        wonders: { 1: [], 2: [] },
        wondersToChoseFrom: sample(wonderIds, 4),
        player: 1,
        age: null,
        decks: {
          1: sampleRemove(ageOneDeck, 3).map((c) => c.name),
          2: sampleRemove(ageTwoDeck, 3).map((c) => c.name),
          3: shuffle(sampleRemove(ageThreeDeck, 3), sample(guildsDeck, 3)).map((c) => c.name)
        },
        canBePlayed: [],
        playersState: {
          1: { buildings: [], coins: 0 },
          2: { buildings: [], coins: 0 }
        }
      };
    }
    case "chooseWonder": {
      const { sample } = randomizers(state.randomSeed);
      const availableWonderIDs = wonderIds.filter((wid) => ![...state.wonders[1], ...state.wonders[2], action2.wonder].includes(wid));
      (0, import_tiny_invariant3.default)(state.player !== null);
      const me = state.player;
      const other = otherPlayer(state.player);
      const wonders2 = (() => {
        const w = action2.wonder;
        const ws = state.wonders;
        if (me === 1 && other === 2) {
          return {
            [me]: [...ws[me], w],
            [other]: ws[other]
          };
        }
        if (me === 2 && other === 1) {
          return {
            [me]: [...ws[me], w],
            [other]: ws[other]
          };
        }
        throw new Error("Impossible!");
      })();
      const endOfChosingWonders = wonders2[1].length === 4 && wonders2[2].length === 4;
      const wondersToChoseFrom = (() => {
        var _a, _b;
        if (endOfChosingWonders) {
          return null;
        }
        if (((_a = state.wondersToChoseFrom) == null ? void 0 : _a.length) === 1 || state.wondersToChoseFrom === null) {
          return sample(availableWonderIDs, 4);
        }
        return (_b = state.wondersToChoseFrom) == null ? void 0 : _b.filter((wid) => wid !== action2.wonder);
      })();
      return {
        randomSeed: state.randomSeed,
        player: other,
        wonders: wonders2,
        wondersToChoseFrom,
        age: endOfChosingWonders ? 1 : null,
        decks: state.decks,
        canBePlayed: intialCanBePlayedStates[1],
        playersState: {
          1: { buildings: [], coins: 0 },
          2: { buildings: [], coins: 0 }
        }
      };
    }
    case "build": {
      const playerState = {
        coins: state.playersState[state.player].coins,
        buildings: [...state.playersState[state.player].buildings, action2.card]
      };
      const playersState = __spreadProps(__spreadValues({}, state.playersState), {
        [state.player]: playerState
      });
      return __spreadProps(__spreadValues({}, stateAfterPickingUpCard(state, action2.card)), {
        playersState
      });
    }
    case "discard": {
      const playerState = {
        coins: state.playersState[state.player].coins + 3,
        buildings: state.playersState[state.player].buildings
      };
      const playersState = __spreadProps(__spreadValues({}, state.playersState), {
        [state.player]: playerState
      });
      return __spreadProps(__spreadValues({}, stateAfterPickingUpCard(state, action2.card)), {
        playersState
      });
    }
  }
}

// route-module:/home/jose/8wonders/app/routes/game.tsx
function WonderCard({ wonder }) {
  const chooseWonderLink = useGameStateSearchUrl("/chooseWonder");
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ import_react.default.createElement(WonderImage, {
    wonder
  }), /* @__PURE__ */ import_react.default.createElement(import_remix6.Form, {
    className: "flex flex-row justify-center",
    action: chooseWonderLink,
    method: "post"
  }, /* @__PURE__ */ import_react.default.createElement("input", {
    type: "hidden",
    value: wonder.id,
    name: "wonder"
  }), /* @__PURE__ */ import_react.default.createElement(Submit, null, "Choose")));
}
function ChosenWondersListForPlayer({ player }) {
  const { wonders: selectedWonders } = useGameState();
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: `w-1/2 m-4 p-2 rounded-sm ${player === 1 ? "bg-blue-200" : "bg-green-200"}`
  }, /* @__PURE__ */ import_react.default.createElement("h2", {
    className: `${player === 1 ? "text-left" : "text-right"} text-xl px-1`
  }, "Player ", player, " wonders"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: `flex ${player === 1 ? "flex-row" : "flex-row-reverse"} flex-wrap`
  }, selectedWonders[player].map((wid) => {
    var _a;
    return /* @__PURE__ */ import_react.default.createElement("img", {
      src: (_a = wonders.find((w) => w.id === wid)) == null ? void 0 : _a.image,
      className: "w-32 m-1"
    });
  })));
}
function ChosenWondersList() {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-row justify-between"
  }, /* @__PURE__ */ import_react.default.createElement(ChosenWondersListForPlayer, {
    player: 1
  }), /* @__PURE__ */ import_react.default.createElement(ChosenWondersListForPlayer, {
    player: 2
  }));
}
function WonderSelection() {
  const { wondersToChoseFrom } = useGameState();
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "text-4xl text-center"
  }, "Selecting the wonders"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-row flex-wrap justify-center"
  }, wondersToChoseFrom == null ? void 0 : wondersToChoseFrom.map((wonderId) => wonders.find((w) => w.id === wonderId)).map((wonder) => {
    return wonder && /* @__PURE__ */ import_react.default.createElement(WonderCard, {
      wonder,
      key: wonder.id
    });
  })));
}
function sizesAndBeginnings(age) {
  const zIndexes = [1, 2, 3, 4, 5];
  switch (age) {
    case 1: {
      const sizes = [2, 3, 4, 5, 6];
      const begginings = [5, 4, 3, 2, 1];
      return {
        sizes,
        begginings,
        zIndexes
      };
    }
    case 2: {
      const sizes = [6, 5, 4, 3, 2];
      const begginings = [1, 2, 3, 4, 5];
      return {
        sizes,
        begginings,
        zIndexes
      };
    }
    case 3: {
      const sizes = [2, 3, 4, 2, 4, 3, 2];
      const begginings = [3, 2, 1, 2, 1, 2, 3];
      return {
        sizes,
        begginings,
        zIndexes: [1, 2, 3, 4, 5, 6, 7]
      };
    }
  }
}
function DeckLayout({ age, children }) {
  const { sizes, begginings, zIndexes } = sizesAndBeginnings(age);
  function sum2(a) {
    return a.reduce((a2, b) => a2 + b, 0);
  }
  function childrenInRow(row) {
    return children.slice(sum2(sizes.slice(0, row)), sum2(sizes.slice(0, row)) + sizes[row]);
  }
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "grid grid-rows-4 my-6"
  }, sizes.map((_, i) => /* @__PURE__ */ import_react.default.createElement("div", {
    className: "grid grid-cols-12 gap-4 -my-2"
  }, childrenInRow(i).map((child, index) => /* @__PURE__ */ import_react.default.createElement("div", {
    className: "col-span-2",
    style: {
      gridColumnStart: index === 0 ? begginings[i] : i === 3 && index === 1 && age === 3 ? 6 : "auto",
      zIndex: child ? zIndexes[i] : 0
    }
  }, child)))));
}
function FaceDownCard() {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "shadow-md shadow-gray-400 h-24 bg-pink-600 p-1 "
  });
}
function Card({ name, canBePlayed: canBePlayed2 }) {
  const card = [...ageOneDeck, ...ageTwoDeck, ...ageThreeDeck, ...guildsDeck].find((c) => c.name === name);
  (0, import_tiny_invariant4.default)(card, "A card with this name mus exist");
  const { type } = card;
  const selectCardLink = useGameStateSearchUrl("/build");
  const discardCardLink = useGameStateSearchUrl("/discard");
  const state = useGameState();
  const canBeBuilt = canBuild(state, state.player, name);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: `/cards/${name}`,
    className: "hover:underline"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: `${{
      "blue": "bg-blue-200",
      "brown": "bg-amber-600",
      "yellow": "bg-yellow-300",
      "gray": "bg-gray-400",
      "green": "bg-green-300",
      "purple": "bg-purple-400",
      "red": "bg-red-400"
    }[type]} text-xs text-center h-24 p-1 rounded-sm ${canBePlayed2 ? "shadow-2xl shadow-blue-500" : "shadow-md shadow-gray-400"}`
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "my-2 font-bold"
  }, name))), canBePlayed2 && /* @__PURE__ */ import_react.default.createElement("div", {
    className: "absolute flex flex-row pt-4 justify-center"
  }, canBeBuilt && /* @__PURE__ */ import_react.default.createElement(import_remix6.Form, {
    action: selectCardLink,
    method: "post"
  }, /* @__PURE__ */ import_react.default.createElement(Submit, null, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "text-xs"
  }, "Build (", canBeBuilt.additionalCoins + (card.cost.coin ?? 0), ")")), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "hidden",
    value: name,
    name: "card"
  })), /* @__PURE__ */ import_react.default.createElement(import_remix6.Form, {
    action: discardCardLink,
    method: "post"
  }, /* @__PURE__ */ import_react.default.createElement(Submit, null, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "text-xs"
  }, "Discard")), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "hidden",
    value: name,
    name: "card"
  }))));
}
function GamePlay() {
  const { age, decks, canBePlayed: canBePlayed2 } = useGameState();
  (0, import_tiny_invariant4.default)(age !== null, "age should not be null");
  const deck = decks[age];
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "text-4xl text-center"
  }, "Choose a card"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "p-2 pb-16"
  }, /* @__PURE__ */ import_react.default.createElement(DeckLayout, {
    age
  }, deck.map((cardName, index) => cardName && (canBePlayed2[index] || intialFaceUpStates[age][index] ? /* @__PURE__ */ import_react.default.createElement(Card, {
    name: cardName,
    canBePlayed: canBePlayed2[index]
  }) : /* @__PURE__ */ import_react.default.createElement(FaceDownCard, null))))));
}
function Game() {
  const { wondersToChoseFrom } = useGameState();
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "p-4"
  }, wondersToChoseFrom === null ? /* @__PURE__ */ import_react.default.createElement(GamePlay, null) : /* @__PURE__ */ import_react.default.createElement(WonderSelection, null), /* @__PURE__ */ import_react.default.createElement(ChosenWondersList, null));
}

// route-module:/home/jose/8wonders/app/routes/$.tsx
var __exports = {};
__export(__exports, {
  action: () => action,
  loader: () => loader
});
init_react();
var import_remix7 = __toModule(require_remix());
var import_tiny_invariant5 = __toModule(require("tiny-invariant"));
function getState(request) {
  const state = new URL(request.url).searchParams.get("state");
  (0, import_tiny_invariant5.default)(state !== null, "State must exist");
  return JSON.parse(state);
}
function getOrFail(key, data) {
  const ret = data.get(key);
  (0, import_tiny_invariant5.default)(ret, `No value in the form for ${key} `);
  (0, import_tiny_invariant5.default)(typeof ret === "string", "value for ${key} is not a string, it is: " + ret.toString());
  return ret;
}
function getAction(actionType, data) {
  switch (actionType) {
    case "start":
      return {
        type: "start",
        seed: parseInt(getOrFail("seed", data))
      };
    case "chooseWonder":
      const wonder = getOrFail("wonder", data);
      assertIsWonderId(wonder);
      return {
        type: "chooseWonder",
        wonder
      };
    case "build":
      return {
        type: "build",
        card: getOrFail("card", data)
      };
    case "discard":
      return {
        type: "discard",
        card: getOrFail("card", data)
      };
    default:
      throw new Error("Unknown game action");
  }
}
var action = async ({ request, params }) => {
  const body = await request.formData();
  const actionType = params["*"];
  (0, import_tiny_invariant5.default)(typeof actionType === "string", "Action Type should be a string");
  const state = actionType === "start" ? {} : getState(request);
  const newState = reduce(state, getAction(actionType, body));
  return (0, import_remix7.redirect)("/game?state=" + JSON.stringify(newState));
};
var loader = () => {
  console.log("This should not render");
  return /* @__PURE__ */ React.createElement("div", null, "You dont see this");
};

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/wonders/$wonderId": {
    id: "routes/wonders/$wonderId",
    parentId: "root",
    path: "wonders/:wonderId",
    index: void 0,
    caseSensitive: void 0,
    module: wonderId_exports
  },
  "routes/wonders/index": {
    id: "routes/wonders/index",
    parentId: "root",
    path: "wonders",
    index: true,
    caseSensitive: void 0,
    module: wonders_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/game": {
    id: "routes/game",
    parentId: "root",
    path: "game",
    index: void 0,
    caseSensitive: void 0,
    module: game_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2pvc2UvOHdvbmRlcnMvYXBwL3Jvb3QudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9qb3NlLzh3b25kZXJzL2FwcC9yb3V0ZXMvd29uZGVycy8kd29uZGVySWQudHN4IiwgIi4uL2FwcC9sb2dpYy9Xb25kZXJzLnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzL3dvbmRlcnMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1dvbmRlckltYWdlLnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzL2dhbWUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1N1Ym1pdC50c3giLCAiLi4vYXBwL2hvb2tzLnRzIiwgIi4uL2FwcC9sb2dpYy9DYXJkcy9pbmRleC50cyIsICIuLi9hcHAvbG9naWMvQ2FyZHMvQWdlT25lLnRzIiwgIi4uL2FwcC9sb2dpYy9DYXJkcy9BZ2VUd28udHMiLCAiLi4vYXBwL2xvZ2ljL0NhcmRzL0FnZVRocmVlLnRzIiwgIi4uL2FwcC9sb2dpYy9DYXJkcy9HdWlsZHMudHMiLCAiLi4vYXBwL2xvZ2ljL0dhbWVTdGF0ZS50cyIsICIuLi9hcHAvbG9naWMvbGF5b3V0cy50cyIsICIuLi9hcHAvbG9naWMvUmVzb3VyY2UudHMiLCAiLi4vYXBwL2xvZ2ljL1NpbmdsZUVmZmVjdC50cyIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzLyQudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9qb3NlLzh3b25kZXJzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2pvc2UvOHdvbmRlcnMvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL2pvc2UvOHdvbmRlcnMvYXBwL3JvdXRlcy93b25kZXJzLyR3b25kZXJJZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzL3dvbmRlcnMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL2pvc2UvOHdvbmRlcnMvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzL2dhbWUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9ob21lL2pvc2UvOHdvbmRlcnMvYXBwL3JvdXRlcy8kLnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvd29uZGVycy8kd29uZGVySWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy93b25kZXJzLyR3b25kZXJJZFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIndvbmRlcnMvOndvbmRlcklkXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvd29uZGVycy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3dvbmRlcnMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJ3b25kZXJzXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9nYW1lXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZ2FtZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImdhbWVcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy8kXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvJFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIipcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2FwcC5jc3NcIlxuXG5leHBvcnQgY29uc3QgbGlua3M6TGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAge1xuICAgIHJlbDpcInN0eWxlc2hlZXRcIixcbiAgICBocmVmOnN0eWxlcyxcbiAgfVxuXVxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWF4LXctNnhsXCI+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQgeyB3b25kZXJzIH0gZnJvbSBcIn4vbG9naWMvV29uZGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb25kZXJFeHBsYW5hdGlvbigpe1xuICAgIGNvbnN0IHt3b25kZXJJZH0gPSB1c2VQYXJhbXMoKTtcbiAgICBjb25zdCB3b25kZXIgPSB3b25kZXJzLmZpbmQodz0+dy5pZD09PXdvbmRlcklkKVxuICAgIGludmFyaWFudCh3b25kZXIpXG4gICAgY29uc3QgeyBuYW1lLCBpbWFnZSwgY29zdCwgZWZmZWN0IH0gPSB3b25kZXJcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtY2VudGVyIHAtNFwiPntuYW1lfTwvaDE+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGxcIj5Db3N0OjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhjb3N0KS5tYXAoKFtrLHZdKT0+PGxpPntrfTp7dn08L2xpPil9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+RWZmZWN0OjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhlZmZlY3QpLm1hcCgoW2ssdl0pPT48bGk+e2t9Ont2fTwvbGk+KX1cbiAgICAgICAgPC91bD5cblxuICAgIDwvPlxufSIsICJpbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gXCIuL1Jlc291cmNlXCJcblxudHlwZSBOdW1lcmljRWZmZWN0VHlwZT0ndmljdG9yeVBvaW50cyd8J3Rha2VDb2lucyd8J3JlbW92ZUNvaW5zJ3wnc2hpZWxkcydcbnR5cGUgQm9vbGVhbkVmZmVjdFR5cGU9J3NlY29uZFR1cm4nfCdwbGF5RGlzY2FyZGVkQ29pbnMnfCdwbGF5RGlzY2FyZGVkQ2FyZCd8J2Rlc3Ryb3lCcm93bkNhcmQnfCdkZXN0cm95R3JleUNhcmQnXG50eXBlIEVmZmVjdFR5cGU9TnVtZXJpY0VmZmVjdFR5cGV8Qm9vbGVhbkVmZmVjdFR5cGV8J3Byb2R1Y2UnXG5leHBvcnQgaW50ZXJmYWNlIFdvbmRlciB7XG4gICAgaWQ6V29uZGVySWRcbiAgICBjb3N0OlBhcnRpYWw8UmVjb3JkPFJlc291cmNlLG51bWJlcj4+LFxuICAgIG5hbWU6c3RyaW5nLFxuICAgIGltYWdlOnN0cmluZyxcbiAgICBlZmZlY3Q6UGFydGlhbDxSZWNvcmQ8TnVtZXJpY0VmZmVjdFR5cGUsbnVtYmVyPiAmIFJlY29yZDxCb29sZWFuRWZmZWN0VHlwZSx0cnVlPiAmIHsncHJvZHVjZSc6UmVzb3VyY2VbXX0+XG59XG5cblxuY29uc3Qgd29uZGVyc0RhdGEgPSBbXG4gICAge1xuICAgICAgICBpZDoncHlyYW1pZHMnLFxuICAgICAgICBuYW1lOidUaGUgUGlyYW15ZHMnLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvODI1MjZENUItNDcxOC00MTIxLTgwNTgtNzlFMEJCQjMwN0UyLmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgcGFweXJ1czoxLFxuICAgICAgICAgICAgc3RvbmU6MyxcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6OVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOidhcHBpYW4nLFxuICAgICAgICBuYW1lOidUaGUgQXBwaWFuIFdheScsXG4gICAgICAgIGltYWdlOidodHRwczovL2NhcmRib2FyZG1vdW50YWluLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9BMkRBQzEzOC02NjY3LTQwOTQtQUIxMS0yNEY5NTE2RDhDMkUuanBnJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBwYXB5cnVzOjEsXG4gICAgICAgICAgICBjbGF5OjIsXG4gICAgICAgICAgICBzdG9uZToyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjMsXG4gICAgICAgICAgICB0YWtlQ29pbnM6MyxcbiAgICAgICAgICAgIHJlbW92ZUNvaW5zOjMsXG4gICAgICAgICAgICBzZWNvbmRUdXJuOnRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDonYXJ0ZW1pcycsXG4gICAgICAgIG5hbWU6J1RoZSB0ZWhtcGxlIG9mIGFydGVtaXMnLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvMEVGQzg0NDUtOUIyMC00NTc5LTkwMTItNTAzQTAwQ0U0NjE5LmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgcGFweXJ1czoxLFxuICAgICAgICAgICAgZ2xhc3M6MSxcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICB3b29kOjEsXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB0YWtlQ29pbnM6MTIsXG4gICAgICAgICAgICBzZWNvbmRUdXJuOnRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDoncGlyYWV1cycsXG4gICAgICAgIG5hbWU6XCJQaXJhZXVzXCIsXG4gICAgICAgIGltYWdlOidodHRwczovL2NhcmRib2FyZG1vdW50YWluLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9FNkNGRDRCRC01QjRDLTRFRDgtOTk5MC1DREJEQjlCODFENTAuanBnJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICBzdG9uZToxLFxuICAgICAgICAgICAgd29vZDoyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBwcm9kdWNlOlsncGFweXJ1cycsJ2dsYXNzJ10sXG4gICAgICAgICAgICBzZWNvbmRUdXJuOnRydWUsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjIsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6J2dhcmRlbnMnLFxuICAgICAgICBuYW1lOlwiVGhlIGhhbmdpbmcgZ2FyZGVuc1wiLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvRkU3RDQ0NjEtODk3RC00Qzg1LUE5ODktM0U0MURGNTg1OURELmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgcGFweXJ1czoxLFxuICAgICAgICAgICAgZ2xhc3M6MSxcbiAgICAgICAgICAgIHdvb2Q6MlxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdGFrZUNvaW5zOjYsXG4gICAgICAgICAgICBzZWNvbmRUdXJuOnRydWUsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjNcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBpZDonc3BoaW54JyxcbiAgICAgICAgbmFtZTpcIlRoZSBzcGhpbnhcIixcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2FyZGJvYXJkbW91bnRhaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExL0Y3RDgxNDNBLTRFMDAtNDFCRi1CQzc3LTMzNkUwNzAxODZBMi5qcGcnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGdsYXNzOjIsXG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICBzdG9uZToxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzZWNvbmRUdXJuOnRydWUsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjZcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBpZDonbGlicmFyeScsXG4gICAgICAgIG5hbWU6J1RoZSBHcmVhdCBMaWJyYXJ5JyxcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2FyZGJvYXJkbW91bnRhaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExLzJBNkQyQkE4LTUyNTYtNDQ0NS1CNTk3LUI1NURDNzlBOEQxNi5qcGcnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHBhcHlydXM6MSxcbiAgICAgICAgICAgIGdsYXNzOjEsXG4gICAgICAgICAgICB3b29kOjNcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHBsYXlEaXNjYXJkZWRDb2luczp0cnVlLFxuICAgICAgICAgICAgdmljdG9yeVBvaW50czo0XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgaWQ6J2xpZ2hob3VzZScsXG4gICAgICAgIG5hbWU6J1RoZSBncmVhdCBsaWdodGhvdXNlJyxcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2FyZGJvYXJkbW91bnRhaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExLzY4MTBCRDUyLTZDN0MtNEEwMS1CRkRFLTI4QjJEQjkwOTJCQi5qcGcnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHBhcHlydXM6MixcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICB3b29kOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHByb2R1Y2U6Wyd3b29kJywnc3RvbmUnLCdjbGF5J10sXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjQsXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgaWQ6J21hdXNvbGV1bScsXG4gICAgICAgIG5hbWU6J1RoZSBNYXVzb2xldW0nLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvOTlBMDEzNkItN0ExQi00M0U4LTg3MDEtMjNCMTFCMkY0QTA5LmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgcGFweXJ1czoxLFxuICAgICAgICAgICAgZ2xhc3M6MixcbiAgICAgICAgICAgIGNsYXk6MixcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHBsYXlEaXNjYXJkZWRDYXJkOnRydWUsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjJcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBpZDonY2lyY3VzJyxcbiAgICAgICAgbmFtZTonQ2lyY3VzIE1heGltdXMnLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvNTg3NjMzQ0UtMTZGOC00NTBFLUFBQjEtNjEwQzI4RTdBNUJFLmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgZ2xhc3M6MSxcbiAgICAgICAgICAgIHdvb2Q6MSxcbiAgICAgICAgICAgIHN0b25lOjIsXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBkZXN0cm95R3JleUNhcmQ6dHJ1ZSxcbiAgICAgICAgICAgIHNoaWVsZHM6MSxcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6M1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIGlkOid6ZXVzJyxcbiAgICAgICAgbmFtZTonVGhlIHN0YXR1ZSBvZiBaZXVzJyxcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2FyZGJvYXJkbW91bnRhaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExLzU3NjI5REE4LThDRUItNDFEQy04RUFFLUYyM0MwNTM1NEU3NS5qcGcnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHBhcHlydXM6MixcbiAgICAgICAgICAgIGNsYXk6MSxcbiAgICAgICAgICAgIHdvb2Q6MSxcbiAgICAgICAgICAgIHN0b25lOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIGRlc3Ryb3lCcm93bkNhcmQ6dHJ1ZSxcbiAgICAgICAgICAgIHNoaWVsZHM6MSxcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6M1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIGlkOidjb2xsb3N1cycsXG4gICAgICAgIG5hbWU6J1RoZSBjb2xsb3NzdXMnLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvN0ZFOTgyQjItOUYxNC00QTU1LUI0OTQtREU4NjJBM0RGMkNCLmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgZ2xhc3M6MSxcbiAgICAgICAgICAgIGNsYXk6M1xuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2hpZWxkczoyLFxuICAgICAgICAgICAgdmljdG9yeVBvaW50czozXG4gICAgICAgIH1cbiAgICB9XG5dIGFzIGNvbnN0XG5cbmV4cG9ydCB0eXBlIFdvbmRlcklkID0gKHR5cGVvZiB3b25kZXJzRGF0YVtudW1iZXJdKVtcImlkXCJdXG5cblxuZXhwb3J0IGNvbnN0IHdvbmRlcnMgPSB3b25kZXJzRGF0YSBhcyByZWFkb25seSBXb25kZXJbXSIsICJpbXBvcnQgV29uZGVySW1hZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9Xb25kZXJJbWFnZVwiO1xuaW1wb3J0IHsgd29uZGVycyB9IGZyb20gXCJ+L2xvZ2ljL1dvbmRlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29uZGVycygpe1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC1jZW50ZXIgcC00XCI+V29uZGVyIGNhcmRzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7d29uZGVycy5tYXAodz0+PGRpdiBjbGFzc05hbWU9XCJwLTRcIj48V29uZGVySW1hZ2Ugd29uZGVyPXt3fS8+PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59IiwgImltcG9ydCB7IFdvbmRlciB9IGZyb20gXCJ+L2xvZ2ljL1dvbmRlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29uZGVySW1hZ2Uoe3dvbmRlcn06e3dvbmRlcjpXb25kZXJ9KXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmUgZGVjb3JhdGlvbi1zbGF0ZS02MDBcIj5cbiAgICAgICAgPGEgaHJlZj17YC93b25kZXJzLyR7d29uZGVyLmlkfWB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtY2VudGVyIHBiLTFcIj57d29uZGVyLm5hbWV9PC9oMj5cbiAgICAgICAgPGltZyBzcmM9e3dvbmRlci5pbWFnZX0gY2xhc3NOYW1lPVwidy02MCBtZDp3LTk2XCIvPlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG59IiwgImltcG9ydCB7IEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiPjggd29uZGVyczwvaDE+XG4gICAgICAgIDxwPkEgZ2FtZSB0aGF0IGlzIG5vdCBmYW1pbGlhciBhdCBhbGwgdG8geW91LjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvcm0gYWN0aW9uPVwiL3N0YXJ0XCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VlZFwiIHR5cGU9XCJudW1iZXJcIiBkZWZhdWx0VmFsdWU9XCIxMFwiLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiRW1wZXphclwiIGNsYXNzTmFtZT1cInAtMiBtLTIgYmctcmVkLTIwMCByb3VuZGVkLXNtXCIvPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0LCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCBTdWJtaXQgZnJvbSBcIn4vY29tcG9uZW50cy9TdWJtaXRcIjtcbmltcG9ydCBXb25kZXJJbWFnZSBmcm9tIFwifi9jb21wb25lbnRzL1dvbmRlckltYWdlXCI7XG5pbXBvcnQgeyB1c2VHYW1lU3RhdGUsIHVzZUdhbWVTdGF0ZVNlYXJjaFVybCB9IGZyb20gXCJ+L2hvb2tzXCI7XG5pbXBvcnQgeyBhZ2VPbmVEZWNrLCBhZ2VUaHJlZURlY2ssIGFnZVR3b0RlY2ssIGd1aWxkc0RlY2sgfSBmcm9tIFwifi9sb2dpYy9DYXJkc1wiO1xuaW1wb3J0IHsgY2FuQnVpbGQgfSBmcm9tIFwifi9sb2dpYy9HYW1lU3RhdGVcIjtcbmltcG9ydCB7IGludGlhbEZhY2VVcFN0YXRlcyB9IGZyb20gXCJ+L2xvZ2ljL2xheW91dHNcIjtcbmltcG9ydCB7IFdvbmRlciwgd29uZGVycyB9IGZyb20gXCJ+L2xvZ2ljL1dvbmRlcnNcIjtcblxuZnVuY3Rpb24gV29uZGVyQ2FyZCh7d29uZGVyfTp7d29uZGVyOldvbmRlcn0pe1xuICAgIGNvbnN0IGNob29zZVdvbmRlckxpbmsgPSB1c2VHYW1lU3RhdGVTZWFyY2hVcmwoXCIvY2hvb3NlV29uZGVyXCIpXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgPFdvbmRlckltYWdlIHdvbmRlcj17d29uZGVyfS8+XG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIiBhY3Rpb249e2Nob29zZVdvbmRlckxpbmt9IG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3dvbmRlci5pZH0gbmFtZT1cIndvbmRlclwiLz5cbiAgICAgICAgICAgIDxTdWJtaXQ+Q2hvb3NlPC9TdWJtaXQ+XG4gICAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbn1cblxuZnVuY3Rpb24gQ2hvc2VuV29uZGVyc0xpc3RGb3JQbGF5ZXIoe3BsYXllcn06e3BsYXllcjoxfDJ9KXtcbiAgICBjb25zdCB7d29uZGVyczpzZWxlY3RlZFdvbmRlcnN9ID0gdXNlR2FtZVN0YXRlKCk7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgdy0xLzIgbS00IHAtMiByb3VuZGVkLXNtICR7cGxheWVyPT09MT8nYmctYmx1ZS0yMDAnOidiZy1ncmVlbi0yMDAnfWB9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtgJHtwbGF5ZXI9PT0xPyd0ZXh0LWxlZnQnOid0ZXh0LXJpZ2h0J30gdGV4dC14bCBweC0xYH0+XG4gICAgICAgICAgICBQbGF5ZXIge3BsYXllcn0gd29uZGVyc1xuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCAke3BsYXllcj09PTE/J2ZsZXgtcm93JzonZmxleC1yb3ctcmV2ZXJzZSd9IGZsZXgtd3JhcGB9PlxuICAgICAgICAgICAge3NlbGVjdGVkV29uZGVyc1twbGF5ZXJdXG4gICAgICAgICAgICAgICAgLm1hcCh3aWQ9PjxpbWcgXG4gICAgICAgICAgICAgICAgICAgIHNyYz17d29uZGVycy5maW5kKHc9PncuaWQ9PT13aWQpPy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zMiBtLTFcIlxuICAgICAgICAgICAgLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn1cblxuZnVuY3Rpb24gQ2hvc2VuV29uZGVyc0xpc3QoKXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8Q2hvc2VuV29uZGVyc0xpc3RGb3JQbGF5ZXIgcGxheWVyPXsxfS8+XG4gICAgICAgIDxDaG9zZW5Xb25kZXJzTGlzdEZvclBsYXllciBwbGF5ZXI9ezJ9Lz5cbiAgICA8L2Rpdj5cbn1cblxuZnVuY3Rpb24gV29uZGVyU2VsZWN0aW9uKCl7XG4gICAgY29uc3QgeyB3b25kZXJzVG9DaG9zZUZyb20gfSA9IHVzZUdhbWVTdGF0ZSgpO1xuICAgIHJldHVybiA8PlxuICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgU2VsZWN0aW5nIHRoZSB3b25kZXJzXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIHt3b25kZXJzVG9DaG9zZUZyb20/Lm1hcCh3b25kZXJJZCA9PiB3b25kZXJzLmZpbmQodz0+dy5pZD09PXdvbmRlcklkKSkubWFwKHdvbmRlciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvbmRlciAmJiA8V29uZGVyQ2FyZCB3b25kZXI9e3dvbmRlcn0ga2V5PXt3b25kZXIuaWR9Lz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn1cblxuZnVuY3Rpb24gc2l6ZXNBbmRCZWdpbm5pbmdzKGFnZToxfDJ8Myl7XG4gICAgY29uc3QgekluZGV4ZXM9WzEsMiwzLDQsNV1cbiAgICBzd2l0Y2goYWdlKXtcbiAgICAgICAgY2FzZSAxOntcbiAgICAgICAgICAgIGNvbnN0IHNpemVzPVsyLDMsNCw1LDZdXG4gICAgICAgICAgICBjb25zdCBiZWdnaW5pbmdzPVs1LDQsMywyLDFdXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgICAgIGJlZ2dpbmluZ3MsXG4gICAgICAgICAgICAgICAgekluZGV4ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIDI6e1xuICAgICAgICAgICAgY29uc3Qgc2l6ZXM9WzYsNSw0LDMsMl1cbiAgICAgICAgICAgIGNvbnN0IGJlZ2dpbmluZ3M9WzEsMiwzLDQsNV1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICAgICAgYmVnZ2luaW5ncyxcbiAgICAgICAgICAgICAgICB6SW5kZXhlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgMzp7XG4gICAgICAgICAgICBjb25zdCBzaXplcz1bMiwzLDQsMiw0LDMsMl1cbiAgICAgICAgICAgIGNvbnN0IGJlZ2dpbmluZ3M9WzMsMiwxLDIsMSwyLDNdXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgICAgIGJlZ2dpbmluZ3MsXG4gICAgICAgICAgICAgICAgekluZGV4ZXM6WzEsMiwzLDQsNSw2LDddXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbmZ1bmN0aW9uIERlY2tMYXlvdXQoe2FnZSxjaGlsZHJlbn06e2FnZToxfDJ8MyxjaGlsZHJlbjpSZWFjdE5vZGVbXX0pe1xuICAgIGNvbnN0IHsgc2l6ZXMsIGJlZ2dpbmluZ3MsIHpJbmRleGVzIH0gPSBzaXplc0FuZEJlZ2lubmluZ3MoYWdlKTtcbiAgICBmdW5jdGlvbiBzdW0oYTpudW1iZXJbXSl7XG4gICAgICAgIHJldHVybiBhLnJlZHVjZSgoYSxiKT0+YStiLDApXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuSW5Sb3cocm93Om51bWJlcil7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbi5zbGljZShcbiAgICAgICAgICAgIHN1bShzaXplcy5zbGljZSgwLHJvdykpLCBcbiAgICAgICAgICAgIHN1bShzaXplcy5zbGljZSgwLHJvdykpK3NpemVzW3Jvd11cbiAgICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy00IG15LTZcIj5cbiAgICAgICAge3NpemVzLm1hcCgoXyxpKT0+PGRpdiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC00IC1teS0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbkluUm93KGkpLm1hcCgoY2hpbGQsaW5kZXgpPT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBncmlkQ29sdW1uU3RhcnQ6aW5kZXg9PT0wP2JlZ2dpbmluZ3NbaV06KFxuICAgICAgICAgICAgICAgICAgICAgICAgaT09PTMgJiYgaW5kZXg9PT0xICYmIGFnZT09PTNcbiAgICAgICAgICAgICAgICAgICAgKT82OidhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OmNoaWxkP3pJbmRleGVzW2ldOjBcbiAgICAgICAgICAgICAgICB9fT57Y2hpbGR9PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj4pfVxuICAgICAgICBcbiAgICA8L2Rpdj5cbn1cblxuZnVuY3Rpb24gRmFjZURvd25DYXJkKCl7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LW1kIHNoYWRvdy1ncmF5LTQwMCBoLTI0IGJnLXBpbmstNjAwIHAtMSBcIi8+XG59XG5mdW5jdGlvbiBDYXJkKHtuYW1lLCBjYW5CZVBsYXllZH06e25hbWU6c3RyaW5nLCBjYW5CZVBsYXllZDpib29sZWFufSl7XG4gICAgY29uc3QgY2FyZCA9IFsuLi5hZ2VPbmVEZWNrLCAuLi5hZ2VUd29EZWNrLCAuLi5hZ2VUaHJlZURlY2ssIC4uLmd1aWxkc0RlY2tdLmZpbmQoYz0+Yy5uYW1lPT09bmFtZSlcbiAgICBpbnZhcmlhbnQoY2FyZCxcIkEgY2FyZCB3aXRoIHRoaXMgbmFtZSBtdXMgZXhpc3RcIilcbiAgICBjb25zdCB7IHR5cGUgfSA9IGNhcmQ7XG4gICAgY29uc3Qgc2VsZWN0Q2FyZExpbmsgPSB1c2VHYW1lU3RhdGVTZWFyY2hVcmwoXCIvYnVpbGRcIilcbiAgICBjb25zdCBkaXNjYXJkQ2FyZExpbmsgPSB1c2VHYW1lU3RhdGVTZWFyY2hVcmwoXCIvZGlzY2FyZFwiKVxuICAgIGNvbnN0IHN0YXRlID0gdXNlR2FtZVN0YXRlKCk7XG4gICAgY29uc3QgY2FuQmVCdWlsdCA9IGNhbkJ1aWxkKHN0YXRlLHN0YXRlLnBsYXllcixuYW1lKVxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxhIGhyZWY9e2AvY2FyZHMvJHtuYW1lfWB9IGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3tcbiAgICAgICAgICAgICAgICAnYmx1ZSc6J2JnLWJsdWUtMjAwJyxcbiAgICAgICAgICAgICAgICAnYnJvd24nOidiZy1hbWJlci02MDAnLFxuICAgICAgICAgICAgICAgICd5ZWxsb3cnOidiZy15ZWxsb3ctMzAwJyxcbiAgICAgICAgICAgICAgICAnZ3JheSc6J2JnLWdyYXktNDAwJyxcbiAgICAgICAgICAgICAgICAnZ3JlZW4nOidiZy1ncmVlbi0zMDAnLFxuICAgICAgICAgICAgICAgICdwdXJwbGUnOidiZy1wdXJwbGUtNDAwJyxcbiAgICAgICAgICAgICAgICAncmVkJzonYmctcmVkLTQwMCdcbiAgICAgICAgICAgIH1bdHlwZV19IHRleHQteHMgdGV4dC1jZW50ZXIgaC0yNCBwLTEgcm91bmRlZC1zbSAke1xuICAgICAgICAgICAgICAgIGNhbkJlUGxheWVkPydzaGFkb3ctMnhsIHNoYWRvdy1ibHVlLTUwMCc6J3NoYWRvdy1tZCBzaGFkb3ctZ3JheS00MDAnXG4gICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICAgIHtjYW5CZVBsYXllZCAmJiA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXggZmxleC1yb3cgcHQtNCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAge2NhbkJlQnVpbHQgJiYgPEZvcm0gYWN0aW9uPXtzZWxlY3RDYXJkTGlua30gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxTdWJtaXQ+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICBCdWlsZCAoe2NhbkJlQnVpbHQuYWRkaXRpb25hbENvaW5zKyhjYXJkLmNvc3QuY29pbiA/PyAwKX0pPC9zcGFuPjwvU3VibWl0PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e25hbWV9IG5hbWU9XCJjYXJkXCIvPlxuICAgICAgICAgICAgPC9Gb3JtPn1cbiAgICAgICAgICAgIDxGb3JtIGFjdGlvbj17ZGlzY2FyZENhcmRMaW5rfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPFN1Ym1pdD48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+RGlzY2FyZDwvc3Bhbj48L1N1Ym1pdD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPXtuYW1lfSBuYW1lPVwiY2FyZFwiLz5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+fVxuICAgIDwvZGl2PlxufVxuXG5mdW5jdGlvbiBHYW1lUGxheSgpe1xuICAgIGNvbnN0IHsgYWdlLCBkZWNrcywgY2FuQmVQbGF5ZWQgfSA9IHVzZUdhbWVTdGF0ZSgpO1xuICAgIGludmFyaWFudChhZ2UhPT1udWxsLFwiYWdlIHNob3VsZCBub3QgYmUgbnVsbFwiKVxuICAgIGNvbnN0IGRlY2sgPSBkZWNrc1thZ2VdO1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1jZW50ZXJcIj5DaG9vc2UgYSBjYXJkPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgcGItMTZcIj5cbiAgICAgICAgICAgIDxEZWNrTGF5b3V0IGFnZT17YWdlfT5cbiAgICAgICAgICAgICAgICB7ZGVjay5tYXAoKGNhcmROYW1lLCBpbmRleCk9PihcbiAgICAgICAgICAgICAgICAgICAgY2FyZE5hbWUgJiYgXG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIChjYW5CZVBsYXllZFtpbmRleF0gfHwgaW50aWFsRmFjZVVwU3RhdGVzW2FnZV1baW5kZXhdKT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e2NhcmROYW1lfSBjYW5CZVBsYXllZD17Y2FuQmVQbGF5ZWRbaW5kZXhdfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFjZURvd25DYXJkLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9EZWNrTGF5b3V0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKCl7XG4gICAgY29uc3QgeyB3b25kZXJzVG9DaG9zZUZyb20gfSA9IHVzZUdhbWVTdGF0ZSgpO1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICB7XG4gICAgICAgICAgICAod29uZGVyc1RvQ2hvc2VGcm9tPT09bnVsbCk/XG4gICAgICAgICAgICA8R2FtZVBsYXkvPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPFdvbmRlclNlbGVjdGlvbi8+XG4gICAgICAgIH1cbiAgICAgICAgPENob3NlbldvbmRlcnNMaXN0Lz5cbiAgICA8L2Rpdj5cbn0iLCAiaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4sIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlR2FtZVN0YXRlIH0gZnJvbSBcIn4vaG9va3NcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VibWl0KHtjaGlsZHJlbn06UHJvcHNXaXRoQ2hpbGRyZW48e30+KXtcbiAgICBjb25zdCB7IHBsYXllciB9ID0gdXNlR2FtZVN0YXRlKCk7XG4gICAgcmV0dXJuIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17XG4gICAgICAgIGBwLTIgbS0yIGJnLXJlZC0yMDAgcm91bmRlZC1zbSAke3BsYXllcj09PTE/XCJob3ZlcjpiZy1ibHVlLTIwMFwiOlwiaG92ZXI6YmctZ3JlZW4tMjAwXCJ9IHRyYW5zaXRpb24tY29sb3JzYFxuICAgIH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbn0iLCAiaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4vbG9naWMvR2FtZVN0YXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGVUZXh0KCk6c3RyaW5nIHtcbiAgICBsZXQgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgICBjb25zdCBzID0gc2VhcmNoUGFyYW1zLmdldChcInN0YXRlXCIpXG4gICAgaW52YXJpYW50KHMhPT1udWxsLFwiVGhlIHN0YXRlIG11c3QgYmUgaW5jbHVkZWQgaW4gdGhlIHVybCFcIilcbiAgICByZXR1cm4gcztcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUoKTpHYW1lU3RhdGV7XG4gICAgY29uc3QgcyA9IHVzZUdhbWVTdGF0ZVRleHQoKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGVTZWFyY2hVcmwodXJsOnN0cmluZyk6c3RyaW5ne1xuICAgIGNvbnN0IHMgPSB1c2VHYW1lU3RhdGVUZXh0KCk7XG4gICAgcmV0dXJuIGAke3VybH0/c3RhdGU9JHtzfWBcbn1cbiIsICJpbXBvcnQgeyBBZ2VPbmUgfSBmcm9tIFwiLi9BZ2VPbmVcIjtcbmltcG9ydCB7IEFnZVR3byB9IGZyb20gXCIuL0FnZVR3b1wiO1xuaW1wb3J0IHsgQWdlVGhyZWUgfSBmcm9tIFwiLi9BZ2VUaHJlZVwiO1xuaW1wb3J0IHsgR3VpbGRzIH0gZnJvbSBcIi4vR3VpbGRzXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vQ2FyZFR5cGVcIjtcbmV4cG9ydCB0eXBlIHsgQ2FyZE5hbWUsIGFzc2VydElzQ2FyZE5hbWUgfSBmcm9tIFwiLi9DYXJkTmFtZVR5cGVcIjtcblxuZXhwb3J0IGNvbnN0IGFnZU9uZURlY2sgPSBBZ2VPbmUgYXMgcmVhZG9ubHkgQ2FyZFtdO1xuZXhwb3J0IGNvbnN0IGFnZVR3b0RlY2sgPSBBZ2VUd28gYXMgcmVhZG9ubHkgQ2FyZFtdO1xuZXhwb3J0IGNvbnN0IGFnZVRocmVlRGVjayA9IEFnZVRocmVlIGFzIHJlYWRvbmx5IENhcmRbXTtcbmV4cG9ydCBjb25zdCBndWlsZHNEZWNrID0gR3VpbGRzIGFzIHJlYWRvbmx5IENhcmRbXTtcblxuZXhwb3J0IGNvbnN0IGFsbENhcmRzID0gW1xuICAgIC4uLmFnZU9uZURlY2ssXG4gICAgLi4uYWdlVHdvRGVjayxcbiAgICAuLi5hZ2VUaHJlZURlY2ssXG4gICAgLi4uZ3VpbGRzRGVjayxcbl0gYXMgcmVhZG9ubHkgQ2FyZFtdIiwgImV4cG9ydCBjb25zdCBBZ2VPbmUgPSBbXG4gICAge1xuICAgICAgICBuYW1lOidMdW1iZXIgWWFyZCcsXG4gICAgICAgIHR5cGU6J2Jyb3duJyxcbiAgICAgICAgY29zdDp7fSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHdvb2Q6MVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0xvZ2dpbmcgQ2FtcCcsXG4gICAgICAgIHR5cGU6J2Jyb3duJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjb2luOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHdvb2Q6MVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0NsYXkgcG9vbCcsXG4gICAgICAgIHR5cGU6J2Jyb3duJyxcbiAgICAgICAgY29zdDp7fSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIGNsYXk6MVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0NsYXkgUGl0JyxcbiAgICAgICAgdHlwZTonYnJvd24nLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNvaW46MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgY2xheToxXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonUXVhcnJ5JyxcbiAgICAgICAgdHlwZTonYnJvd24nLFxuICAgICAgICBjb3N0Ont9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc3RvbmU6MVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1N0b25lIHBpdCcsXG4gICAgICAgIHR5cGU6J2Jyb3duJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjb2luOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHN0b25lOjFcbiAgICAgICAgfSxcbiAgICB9LHtcbiAgICAgICAgbmFtZTonR2xhc3N3b3JrcycsXG4gICAgICAgIHR5cGU6J2dyYXknLFxuICAgICAgICBjb3N0OnsgY29pbjoxIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBnbGFzczoxXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonUHJlc3MnLFxuICAgICAgICB0eXBlOidncmF5JyxcbiAgICAgICAgY29zdDp7IGNvaW46IDEgfSxcbiAgICAgICAgZWZmZWN0OnsgcGFweXJ1czoxfVxuICAgIH0se1xuICAgICAgICBuYW1lOidHdWFyZCBUb3dlcicsXG4gICAgICAgIHR5cGU6J3JlZCcsXG4gICAgICAgIGNvc3Q6e30sXG4gICAgICAgIGVmZmVjdDp7IHNoaWVsZHM6MSB9LFxuICAgIH0se1xuICAgICAgICBuYW1lOidXb3Jrc2hvcCcsXG4gICAgICAgIHR5cGU6J2dyZWVuJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBwYXB5cnVzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MSxcbiAgICAgICAgICAgIHNjaWVuY2U6J0EnXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6J0Fwb3RoZWNhcnknLFxuICAgICAgICB0eXBlOidncmVlbicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgcGFweXJ1czoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzY2llbmNlOidPJyxcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1N0b25lIFJlc2VydmUnLFxuICAgICAgICB0eXBlOid5ZWxsb3cnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNvaW46M1xuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdHJhZGVPbmU6WydzdG9uZSddXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonQ2xheSBSZXNlcnZlJyxcbiAgICAgICAgdHlwZToneWVsbG93JyxcbiAgICAgICAgY29zdDp7IGNvaW46IDMgfSxcbiAgICAgICAgZWZmZWN0OnsgdHJhZGVPbmU6WydjbGF5J10gfVxuICAgIH0se1xuICAgICAgICBuYW1lOidXb29kIFJlc2VydmUnLFxuICAgICAgICB0eXBlOid5ZWxsb3cnLFxuICAgICAgICBjb3N0OnsgY29pbjozIH0sXG4gICAgICAgIGVmZmVjdDp7IHRyYWRlT25lOlsnd29vZCddIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonU3RhYmxlJyxcbiAgICAgICAgdHlwZToncmVkJyxcbiAgICAgICAgY29zdDp7IHdvb2Q6MSB9LFxuICAgICAgICBlZmZlY3Q6eyBcbiAgICAgICAgICAgIHNoaWVsZHM6MSxcbiAgICAgICAgICAgIHN5bWJvbDonaG9yc2UnXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonR2Fycmlzb24nLFxuICAgICAgICB0eXBlOidyZWQnLFxuICAgICAgICBjb3N0OntjbGF5OjF9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2hpZWxkczoxLFxuICAgICAgICAgICAgc3ltYm9sOidzd29yZCdcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidQYWxpc2FkZScsXG4gICAgICAgIHR5cGU6J3JlZCcsXG4gICAgICAgIGNvc3Q6e2NvaW46Mn0sXG4gICAgICAgIGVmZmVjdDp7c2hpZWxkczoxfVxuICAgIH0se1xuICAgICAgICBuYW1lOidTY3JpcHRvcml1bScsXG4gICAgICAgIHR5cGU6J2dyZWVuJyxcbiAgICAgICAgY29zdDp7Y29pbjoyfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHN5bWJvbDonYm9vaycsXG4gICAgICAgICAgICBzY2llbmNlOidwZW5jaWwnXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonUGhhcm1hY2lzdCcsXG4gICAgICAgIHR5cGU6J2dyZWVuJyxcbiAgICAgICAgY29zdDp7Y29pbjoyfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHN5bWJvbDonY29nJyxcbiAgICAgICAgICAgIHNjaWVuY2U6J3NtYXNoZXInXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonVGhlYXRlcicsXG4gICAgICAgIGNvc3Q6e30sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjMsXG4gICAgICAgICAgICBzeW1ib2w6J21hc2snXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6J2JsdWUnXG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0FsdGFyJyxcbiAgICAgICAgY29zdDp7fSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MyxcbiAgICAgICAgICAgIHN5bWJvbDonbW9vbidcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTonYmx1ZSdcbiAgICB9LHtcbiAgICAgICAgbmFtZTonQmF0aHMnLFxuICAgICAgICB0eXBlOidibHVlJyxcbiAgICAgICAgY29zdDp7c3RvbmU6MX0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjMsXG4gICAgICAgICAgICBzeW1ib2w6J3dhdGVyJ1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1RhdmVybicsXG4gICAgICAgIGNvc3Q6e30sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBjb2luOjRcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToneWVsbG93J1xuICAgIH1cbl0gYXMgY29uc3Q7XG4iLCAiZXhwb3J0IGNvbnN0IEFnZVR3byA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6J1Nhd21pbGwnLFxuICAgICAgICB0eXBlOidicm93bicsXG4gICAgICAgIGNvc3Q6e2NvaW46Mn0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB3b29kOjJcbiAgICAgICAgfSxcbiAgICB9LHtcbiAgICAgICAgbmFtZTonQnJpY2t5YXJkJyxcbiAgICAgICAgdHlwZTonYnJvd24nLFxuICAgICAgICBjb3N0Ontjb2luOjJ9LFxuICAgICAgICBlZmZlY3Q6e2NsYXk6Mn0sXG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1NoZWxmIFF1YXJyeScsXG4gICAgICAgIHR5cGU6J2Jyb3duJyxcbiAgICAgICAgY29zdDp7Y29pbjoyfSxcbiAgICAgICAgZWZmZWN0OntzdG9uZToyfVxuICAgIH0se1xuICAgICAgICBuYW1lOidHbGFzcy1CbG93ZXInLFxuICAgICAgICB0eXBlOidncmF5JyxcbiAgICAgICAgY29zdDp7fSxcbiAgICAgICAgZWZmZWN0OntnbGFzczoxfVxuICAgIH0se1xuICAgICAgICBuYW1lOidEcnlpbmcgcm9vbScsXG4gICAgICAgIHR5cGU6J2dyYXknLFxuICAgICAgICBjb3N0Ont9LFxuICAgICAgICBlZmZlY3Q6e3BhcHlydXM6MX0sXG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1dhbGxzJyxcbiAgICAgICAgdHlwZToncmVkJyxcbiAgICAgICAgY29zdDp7c3RvbmU6Mn0sXG4gICAgICAgIGVmZmVjdDp7c2hpZWxkczoyfVxuICAgIH0se1xuICAgICAgICBuYW1lOidGb3J1bScsXG4gICAgICAgIHR5cGU6J3llbGxvdycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY29pbjozLFxuICAgICAgICAgICAgY2xheToxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBwcm9kdWNlT25lT2Y6WydnbGFzcycsXCJwYXB5cnVzXCJdXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonQ2FyYXZhbnNlcnknLFxuICAgICAgICB0eXBlOid5ZWxsb3cnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNvaW46MixcbiAgICAgICAgICAgIGdsYXNzOjEsXG4gICAgICAgICAgICBwYXB5cnVzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHByb2R1Y2VPbmVPZjpbJ2NsYXknLCd3b29kJywnc3RvbmUnXVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0N1c3RvbXMgSG91c2UnLFxuICAgICAgICB0eXBlOid5ZWxsb3cnLFxuICAgICAgICBjb3N0Ontjb2luOjR9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdHJhZGVPbmU6WydwYXB5cnVzJywnZ2xhc3MnXVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1RyaWJ1bmFsJyxcbiAgICAgICAgdHlwZTonYmx1ZScsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgd29vZDoyLFxuICAgICAgICAgICAgZ2xhc3M6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czo1XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonSG9yc2UgQnJlZWRlcnMnLFxuICAgICAgICB0eXBlOidyZWQnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNsYXk6MSxcbiAgICAgICAgICAgIHdvb2Q6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2hpZWxkczoxXG4gICAgICAgIH0sXG4gICAgICAgIHVubG9ja2VkQnk6J2hvcnNlJ1xuICAgIH0se1xuICAgICAgICBuYW1lOidCYXJyYWNrcycsXG4gICAgICAgIHR5cGU6J3JlZCcsXG4gICAgICAgIGNvc3Q6eyBjb2luOjMgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHNoaWVsZHM6MVxuICAgICAgICB9LFxuICAgICAgICB1bmxvY2tlZEJ5Oidzd29yZCdcbiAgICB9LHtcbiAgICAgICAgbmFtZTonQXJjaGVyeSBSYW5nZScsXG4gICAgICAgIHR5cGU6J3JlZCcsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgc3RvbmU6MSxcbiAgICAgICAgICAgIHdvb2Q6MSxcbiAgICAgICAgICAgIHBhcHlydXM6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2hpZWxkczoyLFxuICAgICAgICAgICAgc3ltYm9sOid0YXJnZXQnXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonUGFyYWRlIEdyb3VuZCcsXG4gICAgICAgIHR5cGU6J3JlZCcsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY2xheToyLFxuICAgICAgICAgICAgZ2xhc3M6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2hpZWxkczoyLFxuICAgICAgICAgICAgc3ltYm9sOidzb2xkaWVyJ1xuICAgICAgICB9LFxuICAgIH0se1xuICAgICAgICBuYW1lOidMaWJyYXJ5JyxcbiAgICAgICAgdHlwZTonZ3JlZW4nLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICB3b29kOjEsXG4gICAgICAgICAgICBnbGFzczoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzY2llbmNlOidwZW5jaWwnLFxuICAgICAgICAgICAgdmljdG9yeVBvaW50czoyXG4gICAgICAgIH0sXG4gICAgICAgIHVubG9ja2VkQnk6J2Jvb2snXG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0Rpc3BlbnNhcnknLFxuICAgICAgICB0eXBlOidncmVlbicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY2xheToyLFxuICAgICAgICAgICAgc3RvbmU6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2NpZW5jZTonc21hc2hlcicsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjJcbiAgICAgICAgfSxcbiAgICAgICAgdW5sb2NrZWRCeTonY29nJ1xuICAgIH0se1xuICAgICAgICBuYW1lOidTY2hvb2wnLFxuICAgICAgICB0eXBlOidncmVlbicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgd29vZDoxLFxuICAgICAgICAgICAgcGFweXJ1czoyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzY2llbmNlOidPJyxcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MSxcbiAgICAgICAgICAgIHN5bWJvbDonbXVzaWMnXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonTGFib3JhdG9yeScsXG4gICAgICAgIHR5cGU6J2dyZWVuJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICB3b29kOjEsXG4gICAgICAgICAgICBnbGFzczoyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzY2llbmNlOidBJyxcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MSxcbiAgICAgICAgICAgIHN5bWJvbDonbGFtcCdcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidTdGF0dWUnLFxuICAgICAgICB0eXBlOidibHVlJyxcbiAgICAgICAgY29zdDp7IGNsYXk6MiB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czo0LFxuICAgICAgICAgICAgc3ltYm9sOidjb2x1bW4nXG4gICAgICAgIH0sXG4gICAgICAgIHVubG9ja2VkQnk6J21hc2snXG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1RlbXBsZScsXG4gICAgICAgIHR5cGU6J2JsdWUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHdvb2Q6MSxcbiAgICAgICAgICAgIHBhcHlydXM6MVxuICAgICAgICB9LFxuICAgICAgICB1bmxvY2tlZEJ5Oidtb29uJyxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6NCxcbiAgICAgICAgICAgIHN5bWJvbDonc3VuJ1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0FxdWVkdWN0JyxcbiAgICAgICAgdHlwZTonYmx1ZScsXG4gICAgICAgIHVubG9ja2VkQnk6J3dhdGVyJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBzdG9uZTozXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjVcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidSb3N0cnVtJyxcbiAgICAgICAgdHlwZTonYmx1ZScsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgc3RvbmU6MSxcbiAgICAgICAgICAgIHdvb2Q6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czo0LFxuICAgICAgICAgICAgc3ltYm9sOid0ZW1wbGUnXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonQnJld2VyeScsXG4gICAgICAgIHR5cGU6J3llbGxvdycsXG4gICAgICAgIGNvc3Q6e30sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBjb2luOjYsXG4gICAgICAgICAgICBzeW1ib2w6J2JhcnJlbCdcbiAgICAgICAgfVxuICAgIH1cbl0gYXMgY29uc3RcbiIsICJleHBvcnQgY29uc3QgQWdlVGhyZWU9W1xuICAgIHtcbiAgICAgICAgbmFtZTonQXJzZW5hbCcsXG4gICAgICAgIHR5cGU6J3JlZCcsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY2xheTozLFxuICAgICAgICAgICAgd29vZDoyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7IHNoaWVsZHM6MyB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0NvdXJ0aG91c2UnLFxuICAgICAgICB0eXBlOidyZWQnLFxuICAgICAgICBjb3N0Ontjb2luOjh9LFxuICAgICAgICBlZmZlY3Q6e3NoaWVsZHM6M31cbiAgICB9LHtcbiAgICAgICAgbmFtZTonQWNhZGVteScsXG4gICAgICAgIHR5cGU6J2dyZWVuJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBzdG9uZToxLFxuICAgICAgICAgICAgd29vZDoxLFxuICAgICAgICAgICAgZ2xhc3M6MlxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2NpZW5jZTonSScsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjNcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidTdHVkeScsXG4gICAgICAgIHR5cGU6J2JsdWUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHdvb2Q6MixcbiAgICAgICAgICAgIGdsYXNzOjEsXG4gICAgICAgICAgICBwYXB5cnVzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHNjaWVuY2U6J0knLFxuICAgICAgICAgICAgdmljdG9yeVBvaW50czozXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonQ2hhbWJlciBvZiBjb21tZXJjZScsXG4gICAgICAgIHR5cGU6J3llbGxvdycsXG4gICAgICAgIGNvc3Q6eyBwYXB5cnVzOjIgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MyxcbiAgICAgICAgICAgIGNvbXBsZXg6e1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlsnZ3JheSddLFxuICAgICAgICAgICAgICAgIGNvaW5zTm93OjMsXG4gICAgICAgICAgICAgICAgb3ZlcjonbWUnLFxuICAgICAgICAgICAgICAgIHZpY3RvcnlQb2ludHNMYXRlcjowXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonUG9ydCcsXG4gICAgICAgIHR5cGU6J3llbGxvdycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgd29vZDoxLFxuICAgICAgICAgICAgZ2xhc3M6MSxcbiAgICAgICAgICAgIHBhcHlydXM6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czozLFxuICAgICAgICAgICAgY29tcGxleDp7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6Wydicm93biddLFxuICAgICAgICAgICAgICAgIGNvaW5zTm93OjIsXG4gICAgICAgICAgICAgICAgb3ZlcjonbWUnLFxuICAgICAgICAgICAgICAgIHZpY3RvcnlQb2ludHNMYXRlcjozXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonQXJtb3J5JyxcbiAgICAgICAgdHlwZToneWVsbG93JyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBzdG9uZToyLFxuICAgICAgICAgICAgZ2xhc3M6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czozLFxuICAgICAgICAgICAgY29tcGxleDp7XG4gICAgICAgICAgICAgICAgY29pbnNOb3c6MSxcbiAgICAgICAgICAgICAgICBvdmVyOidtZScsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6WydyZWQnXSxcbiAgICAgICAgICAgICAgICB2aWN0b3J5UG9pbnRzTGF0ZXI6MFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1BhbGFjZScsXG4gICAgICAgIHR5cGU6J2JsdWUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNsYXk6MSxcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICB3b29kOjEsXG4gICAgICAgICAgICBnbGFzczoyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjdcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidUb3duIEhhbGwnLFxuICAgICAgICB0eXBlOidibHVlJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBzdG9uZTozLFxuICAgICAgICAgICAgd29vZDoyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjdcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidPYmVsaXNrJyxcbiAgICAgICAgdHlwZTonYmx1ZScsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgc3RvbmU6MixcbiAgICAgICAgICAgIGdsYXNzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6NVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0ZvcnRpZmljYXRpb25zJyxcbiAgICAgICAgdHlwZToncmVkJyxcbiAgICAgICAgdW5sb2NrZWRCeTondG93ZXInLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHN0b25lOjIsXG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICBwYXB5cnVzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHNoaWVsZHM6MlxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1NpZWdlIFdvcmtzaG9wJyxcbiAgICAgICAgdW5sb2NrZWRCeTondGFyZ2V0JyxcbiAgICAgICAgdHlwZToncmVkJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICB3b29kOjMsXG4gICAgICAgICAgICBnbGFzczoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzaGllbGRzOjJcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidDaXJjdXMnLFxuICAgICAgICB0eXBlOidyZWQnLFxuICAgICAgICB1bmxvY2tlZEJ5Oidzb2xkaWVyJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjbGF5OjIsIHN0b25lOjJcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHNoaWVsZHM6MlxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1VuaXZlcnNpdHknLFxuICAgICAgICB0eXBlOidncmVlbicsXG4gICAgICAgIHVubG9ja2VkQnk6J211c2ljJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICBnbGFzczoxLFxuICAgICAgICAgICAgcGFweXJ1czoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzY2llbmNlOidRJyxcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MlxuICAgICAgICB9LFxuICAgIH0se1xuICAgICAgICBuYW1lOidPYnNlcnZhdG9yeScsXG4gICAgICAgIHVubG9ja2VkQnk6J2xhbXAnLFxuICAgICAgICB0eXBlOidncmVlbicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgc3RvbmU6MSxcbiAgICAgICAgICAgIHBhcHlydXM6MixcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHNjaWVuY2U6J08nLFxuICAgICAgICAgICAgdmljdG9yeVBvaW50czoyXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonR2FyZGVucycsXG4gICAgICAgIHVubG9ja2VkQnk6J2NvbHVtbicsXG4gICAgICAgIHR5cGU6J2JsdWUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNsYXk6MixcbiAgICAgICAgICAgIHdvb2Q6MlxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czo2XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonUGFudGhlb24nLFxuICAgICAgICB0eXBlOidibHVlJyxcbiAgICAgICAgdW5sb2NrZWRCeTonc3VuJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICB3b29kOjEsXG4gICAgICAgICAgICBwYXB5cnVzOjJcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6NlxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1NlbmF0ZScsXG4gICAgICAgIHR5cGU6J2JsdWUnLFxuICAgICAgICB1bmxvY2tlZEJ5Oid0ZW1wbGUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNsYXk6MixcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICBwYXB5cnVzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6NVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0xpZ2h0aG91c2UnLFxuICAgICAgICB0eXBlOid5ZWxsb3cnLFxuICAgICAgICB1bmxvY2tlZEJ5OidqYXInLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNsYXk6MixcbiAgICAgICAgICAgIGdsYXNzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MyxcbiAgICAgICAgICAgIGNvbXBsZXg6e1xuICAgICAgICAgICAgICAgIGNvaW5zTm93OjEsXG4gICAgICAgICAgICAgICAgb3ZlcjonbWUnLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlsneWVsbG93J10sXG4gICAgICAgICAgICAgICAgdmljdG9yeVBvaW50c0xhdGVyOjBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidBcmVuYScsXG4gICAgICAgIHR5cGU6J3llbGxvdycsXG4gICAgICAgIHVubG9ja2VkQnk6J2JhcnJlbCcsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY2xheToxLFxuICAgICAgICAgICAgc3RvbmU6MSxcbiAgICAgICAgICAgIHdvb2Q6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czozLFxuICAgICAgICAgICAgY29tcGxleDp7XG4gICAgICAgICAgICAgICAgY29pbnNOb3c6MixcbiAgICAgICAgICAgICAgICBvdmVyOidtZScsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6Wyd3b25kZXJzJ10sXG4gICAgICAgICAgICAgICAgdmljdG9yeVBvaW50c0xhdGVyOjBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbl1cblxuIiwgImV4cG9ydCBjb25zdCBHdWlsZHM9W1xuICAgIHtcbiAgICAgICAgbmFtZTonTWVyY2hhbnRzIEd1aWxkJyxcbiAgICAgICAgdHlwZToncHVycGxlJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICB3b29kOjEsXG4gICAgICAgICAgICBnbGFzczoxLFxuICAgICAgICAgICAgcGFweXJ1czoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBjb21wbGV4OntcbiAgICAgICAgICAgICAgICBjb2luc05vdzoxLFxuICAgICAgICAgICAgICAgIG92ZXI6J3BsYXllcldpdGhNb3N0JyxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpbJ3llbGxvdyddLFxuICAgICAgICAgICAgICAgIHZpY3RvcnlQb2ludHNMYXRlcjoxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonU2hpcG93bmVycyBHdWlsZCcsXG4gICAgICAgIHR5cGU6J3B1cnBsZScsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY2xheToxLFxuICAgICAgICAgICAgc3RvbmU6MSxcbiAgICAgICAgICAgIGdsYXNzOjEsXG4gICAgICAgICAgICBwYXB5cnVzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIGNvbXBsZXg6e1xuICAgICAgICAgICAgICAgIGNvaW5zTm93OjEsXG4gICAgICAgICAgICAgICAgb3ZlcjoncGxheWVyV2l0aE1vc3QnLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlsnYnJvd24nLCdncmF5J10sXG4gICAgICAgICAgICAgICAgdmljdG9yeVBvaW50c0xhdGVyOjFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidCdWlsZGVycyBHdWlsZCcsXG4gICAgICAgIHR5cGU6J3B1cnBsZScsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgc3RvbmU6MixcbiAgICAgICAgICAgIGNsYXk6MSxcbiAgICAgICAgICAgIHdvb2Q6MSxcbiAgICAgICAgICAgIGdsYXNzOjEsXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBjb21wbGV4OntcbiAgICAgICAgICAgICAgICBvdmVyOidwbGF5ZXJXaXRoTW9zdCcsXG4gICAgICAgICAgICAgICAgY29pbnNOb3c6MCxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpbJ3dvbmRlcnMnXSxcbiAgICAgICAgICAgICAgICB2aWN0b3J5UG9pbnRzTGF0ZXI6MlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J01hZ2lzdHJhdGVzIEd1aWxkJyxcbiAgICAgICAgdHlwZToncHVycGxlJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICB3b29kOjIsXG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICBwYXB5cnVzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIGNvbXBsZXg6e1xuICAgICAgICAgICAgICAgIGNvaW5zTm93OjEsXG4gICAgICAgICAgICAgICAgb3ZlcjoncGxheWVyV2l0aE1vc3QnLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlsnYmx1ZSddLFxuICAgICAgICAgICAgICAgIHZpY3RvcnlQb2ludHNMYXRlcjoxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonU2NpZW50aXN0cyBHdWlsZCcsXG4gICAgICAgIHR5cGU6J3B1cnBsZScsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY2xheToyLFxuICAgICAgICAgICAgd29vZDoyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBjb21wbGV4OntcbiAgICAgICAgICAgICAgICBjb2luc05vdzoxLFxuICAgICAgICAgICAgICAgIG92ZXI6J3BsYXllcldpdGhNb3N0JyxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpbJ2dyZWVuJ10sXG4gICAgICAgICAgICAgICAgdmljdG9yeVBvaW50c0xhdGVyOjFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidNb25leWxlbmRlcnMgR3VpbGQnLFxuICAgICAgICB0eXBlOidwdXJwbGUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHN0b25lOjIsXG4gICAgICAgICAgICB3b29kOjIsXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBjb21wbGV4OntcbiAgICAgICAgICAgICAgICB2aWN0b3J5UG9pbnRzTGF0ZXI6MSxcbiAgICAgICAgICAgICAgICBjb2luc05vdzowLFxuICAgICAgICAgICAgICAgIG92ZXI6J3BsYXllcldpdGhNb3N0JyxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpbXCIzY29pbnNcIl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidUYWN0aWNpYW5zIEd1aWxkJyxcbiAgICAgICAgdHlwZToncHVycGxlJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBzdG9uZToyLFxuICAgICAgICAgICAgY2xheToxLFxuICAgICAgICAgICAgcGFweXJ1czoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBjb21wbGV4OntcbiAgICAgICAgICAgICAgICBjb2luc05vdzoxLFxuICAgICAgICAgICAgICAgIG92ZXI6J3BsYXllcldpdGhNb3N0JyxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpbJ3JlZCddLFxuICAgICAgICAgICAgICAgIHZpY3RvcnlQb2ludHNMYXRlcjoxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5dIGFzIGNvbnN0IiwgImltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCJcbmltcG9ydCB7IGFnZU9uZURlY2ssIGFnZVRocmVlRGVjaywgYWdlVHdvRGVjaywgYWxsQ2FyZHMsIENhcmROYW1lLCBndWlsZHNEZWNrIH0gZnJvbSBcIi4vQ2FyZHNcIlxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL0NhcmRzL0NhcmRUeXBlXCJcbmltcG9ydCB7IGludGlhbENhbkJlUGxheWVkU3RhdGVzLCBsYXlvdXRzIH0gZnJvbSBcIi4vbGF5b3V0c1wiXG5pbXBvcnQgeyBSZXNvdXJjZSwgcmVzb3VyY2VzIGFzIHJlc291cmNlc0xpc3QgfSBmcm9tIFwiLi9SZXNvdXJjZVwiXG5pbXBvcnQgeyBleHRyYWN0RWZmZWN0cywgUHJvZHVjdGlvbkVmZmVjdCB9IGZyb20gXCIuL1NpbmdsZUVmZmVjdFwiXG5pbXBvcnQgeyBXb25kZXJJZCwgd29uZGVycyB9IGZyb20gXCIuL1dvbmRlcnNcIlxuXG50eXBlIFBsYXllciA9IDF8MlxudHlwZSBBZ2U9MXwyfDNcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZVN0YXRle1xuICAgIHJhbmRvbVNlZWQ6bnVtYmVyXG4gICAgd29uZGVyczpSZWNvcmQ8UGxheWVyLFdvbmRlcklkW10+LFxuICAgIHdvbmRlcnNUb0Nob3NlRnJvbTpXb25kZXJJZFtdfG51bGwsXG4gICAgcGxheWVyOlBsYXllcixcbiAgICBhZ2U6QWdlfG51bGwsXG4gICAgZGVja3M6UmVjb3JkPEFnZSwoQ2FyZE5hbWV8bnVsbClbXT4sXG4gICAgY2FuQmVQbGF5ZWQ6Ym9vbGVhbltdLFxuICAgIHBsYXllcnNTdGF0ZTpSZWNvcmQ8UGxheWVyLHtidWlsZGluZ3M6Q2FyZE5hbWVbXSxjb2luczpudW1iZXJ9PlxufVxuZXhwb3J0IHR5cGUgR2FtZUFjdGlvbj17XG4gICAgdHlwZTonc3RhcnQnLFxuICAgIHNlZWQ6bnVtYmVyXG59fHtcbiAgICB0eXBlOidjaG9vc2VXb25kZXInLFxuICAgIHdvbmRlcjpXb25kZXJJZCBcbn18e1xuICAgIHR5cGU6J2J1aWxkJyxcbiAgICBjYXJkOkNhcmROYW1lXG59fHtcbiAgICB0eXBlOidkaXNjYXJkJyxcbiAgICBjYXJkOkNhcmROYW1lXG59XG5cbmZ1bmN0aW9uIHJhbmRvbWl6ZXJzPFQ+KHJhbmRvbVNlZWQ6bnVtYmVyKXtcbiAgICBmdW5jdGlvbiBzYW1wbGU8VD4oYXJyYXk6IHJlYWRvbmx5IFRbXSxxdWFudGl0eTpudW1iZXIpOlRbXXtcbiAgICAgICAgY29uc3QgY29weT1bLi4uYXJyYXldXG4gICAgICAgIGNvbnN0IHJldDpUW109W11cbiAgICAgICAgbmV3IEFycmF5KHF1YW50aXR5KS5maWxsKDApLmZvckVhY2goKF8saW5kZXgpPT57XG4gICAgICAgICAgICBjb25zdCByYW5kb21JbmRleD0ocmFuZG9tU2VlZCppbmRleCklY29weS5sZW5ndGhcbiAgICAgICAgICAgIHJldC5wdXNoKGNvcHlbcmFuZG9tSW5kZXhdKVxuICAgICAgICAgICAgY29weS5zcGxpY2UocmFuZG9tSW5kZXgsMSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNodWZmbGU8VD4oYTpyZWFkb25seSBUW10sYjogcmVhZG9ubHkgVFtdKTpUW117XG4gICAgICAgIHJldHVybiBzYW1wbGUoWy4uLmEsLi4uYl0sYS5sZW5ndGgrYi5sZW5ndGgpXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNhbXBsZVJlbW92ZTxUPihhcnJheTpyZWFkb25seSBUW10scmVtb3ZlUXVhbnRpdHk6bnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIHNhbXBsZShhcnJheSxhcnJheS5sZW5ndGgtcmVtb3ZlUXVhbnRpdHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2FtcGxlLHNodWZmbGUsc2FtcGxlUmVtb3ZlXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIG90aGVyUGxheWVyKHA6UGxheWVyKXtcbiAgICBpZihwPT09MSl7XG4gICAgICAgIHJldHVybiAyO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5jb25zdCB3b25kZXJJZHMgPSB3b25kZXJzLm1hcCh3PT53LmlkKVxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydElzV29uZGVySWQoc3RyOnN0cmluZyk6YXNzZXJ0cyBzdHIgaXMgV29uZGVySWR7XG4gICAgaWYoISh3b25kZXJJZHMgYXMgc3RyaW5nW10pLmluY2x1ZGVzKHN0cikpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub29vb1wiKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TmV4dEFnZShhZ2U6QWdlKXtcbiAgICBzd2l0Y2goYWdlKXtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gMjtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gMztcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuZnVuY3Rpb24gc3RhdGVBZnRlclBpY2tpbmdVcENhcmQoc3RhdGU6R2FtZVN0YXRlLGNhcmQ6Q2FyZE5hbWUpOkdhbWVTdGF0ZXtcbiAgICBpbnZhcmlhbnQoc3RhdGUuYWdlIT09bnVsbCxcIkFnZSBtdXN0IG5vdCBiZSBudWxsXCIpXG4gICAgY29uc3QgY3VycmVudERlY2s9c3RhdGUuZGVja3Nbc3RhdGUuYWdlXVxuICAgIGNvbnN0IG5ld0RlY2tGb3JUaGlzQWdlPWN1cnJlbnREZWNrLm1hcChjPT5jPT09Y2FyZD9udWxsOmMpO1xuICAgIGNvbnN0IGFnZT1uZXdEZWNrRm9yVGhpc0FnZS5ldmVyeShjYXJkPT5jYXJkPT09bnVsbCk/Z2V0TmV4dEFnZShzdGF0ZS5hZ2UpOnN0YXRlLmFnZVxuICAgIGNvbnN0IGRlY2tzPXtcbiAgICAgICAgLi4uc3RhdGUuZGVja3MsXG4gICAgICAgIFtzdGF0ZS5hZ2VdOm5ld0RlY2tGb3JUaGlzQWdlXG4gICAgfVxuICAgIGNvbnN0IG5ld0NhbkJlUGxheWVkPWxheW91dHNbc3RhdGUuYWdlXShcbiAgICAgICAgc3RhdGUuZGVja3Nbc3RhdGUuYWdlXS5tYXAoYz0+YyE9PW51bGwpLFxuICAgICAgICBjdXJyZW50RGVjay5pbmRleE9mKGNhcmQpLFxuICAgICAgICBzdGF0ZS5jYW5CZVBsYXllZFxuICAgIClcblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZWNrcyxcbiAgICAgICAgYWdlLFxuICAgICAgICBwbGF5ZXI6b3RoZXJQbGF5ZXIoc3RhdGUucGxheWVyKSxcbiAgICAgICAgY2FuQmVQbGF5ZWQ6KGFnZT09PW51bGwpP1tdOiggKGFnZT09PXN0YXRlLmFnZSk/bmV3Q2FuQmVQbGF5ZWQ6aW50aWFsQ2FuQmVQbGF5ZWRTdGF0ZXNbYWdlXSApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYXJkc0J1aWx0QnlQbGF5ZXIoc3RhdGU6R2FtZVN0YXRlLHBsYXllcjpQbGF5ZXIpOkNhcmRbXXtcbiAgICByZXR1cm4gYWxsQ2FyZHMuZmlsdGVyKGNhcmQgPT4gc3RhdGUucGxheWVyc1N0YXRlW3BsYXllcl0uYnVpbGRpbmdzLmluY2x1ZGVzKGNhcmQubmFtZSkpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9kdWN0aW9uRWZmZWN0cyhjYXJkczpDYXJkW10pOlByb2R1Y3Rpb25FZmZlY3RbXSB7XG4gICAgcmV0dXJuIGNhcmRzXG4gICAgICAgIC5mbGF0TWFwKGNhcmQ9PmV4dHJhY3RFZmZlY3RzKGNhcmQuZWZmZWN0KSlcbiAgICAgICAgLmZsYXRNYXAoc2luZ2xlRWZmZWN0ID0+IChcInByb2R1Y2VPbmVPZlwiIGluIHNpbmdsZUVmZmVjdCk/W3NpbmdsZUVmZmVjdF06W10pXG59XG5cbmZ1bmN0aW9uIGdldE1pbmltYWxDb3N0T2ZCdWlsZGluZyhyZXNvdXJjZXNOZWVkZWQ6UGFydGlhbDxSZWNvcmQ8UmVzb3VyY2UsbnVtYmVyPj4sdHJhZGVDb3N0czpSZWNvcmQ8UmVzb3VyY2UsbnVtYmVyPiwgcHJvZHVjdGlvbnM6UHJvZHVjdGlvbkVmZmVjdFtdKTpudW1iZXJ7XG4gICAgY29uc29sZS5sb2coe3Jlc291cmNlc05lZWRlZCxwcm9kdWN0aW9uc30pXG4gICAgY29uc3Qgc29tZVJlc291cmNlSXNOZWRlZCA9IHJlc291cmNlc0xpc3Quc29tZShyZXNOYW1lID0+IHJlc291cmNlc05lZWRlZD8uW3Jlc05hbWVdKVxuICAgIGlmKCFzb21lUmVzb3VyY2VJc05lZGVkKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyByZXNvdXJjZXMgbmVlZGVkIVwiKVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYocHJvZHVjdGlvbnMubGVuZ3RoPT09MCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbW9yZSBwcm9kdWN0aW9ucyFcIilcbiAgICAgICAgcmV0dXJuIHJlc291cmNlc0xpc3QubWFwKHJlc291cmNlID0+IChyZXNvdXJjZXNOZWVkZWQ/LltyZXNvdXJjZV0gPz8gMCkqdHJhZGVDb3N0c1tyZXNvdXJjZV0pLnJlZHVjZSgoIGEsIGIgKSA9PiBhICsgYiwgMCk7XG4gICAgfVxuICAgIGNvbnN0IFtwcm9kdWN0aW9uLC4uLm90aGVyUHJvZHVjdGlvbnNdID0gcHJvZHVjdGlvbnNcbiAgICBmdW5jdGlvbiByZXNvdXJjZXNXaXRoT25lTGVzc09mKHJlc291cmNlOlJlc291cmNlKXtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSByZXNvdXJjZXNOZWVkZWRbcmVzb3VyY2VdO1xuICAgICAgICBpZihxdWFudGl0eSl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnJlc291cmNlc05lZWRlZCxcbiAgICAgICAgICAgICAgICBbcmVzb3VyY2VdOk1hdGgubWF4KHF1YW50aXR5LTEsMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VzTmVlZGVkXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcHJvZHVjZWRSZXNvdXJjZXMgPSBwcm9kdWN0aW9uLnByb2R1Y2VPbmVPZjtcbiAgICByZXR1cm4gTWF0aC5taW4oLi4ucHJvZHVjZWRSZXNvdXJjZXMubWFwKHI9PmdldE1pbmltYWxDb3N0T2ZCdWlsZGluZyhyZXNvdXJjZXNXaXRoT25lTGVzc09mKHIpLHRyYWRlQ29zdHMsb3RoZXJQcm9kdWN0aW9ucykpKTtcblxufVxuZnVuY3Rpb24gZ2V0VHJhZGVDb3N0c0ZvclBsYXllcihzdGF0ZTpHYW1lU3RhdGUscGxheWVyOlBsYXllcik6UmVjb3JkPFJlc291cmNlLG51bWJlcj57XG4gICAgY29uc3QgaW5pdGlhbFRyYWRlQ29zdHM6UmVjb3JkPFJlc291cmNlLG51bWJlcj4gPSB7XG4gICAgICAgIGNsYXk6MixcbiAgICAgICAgZ2xhc3M6MixcbiAgICAgICAgcGFweXJ1czoyLFxuICAgICAgICBzdG9uZToyLFxuICAgICAgICB3b29kOjJcbiAgICB9XG4gICAgY29uc3QgYmFzZVJlc291cmNlQ2FyZHMgPSBjYXJkc0J1aWx0QnlQbGF5ZXIoc3RhdGUsb3RoZXJQbGF5ZXIocGxheWVyKSkuZmlsdGVyKGM9PmMudHlwZT09PSdncmF5JyB8fCBjLnR5cGU9PT0nYnJvd24nKVxuICAgIGNvbnN0IHByb2R1Y2VkUmVzb3VyY2VzID0gZ2V0UHJvZHVjdGlvbkVmZmVjdHMoYmFzZVJlc291cmNlQ2FyZHMpLmZsYXRNYXAoZWZmZWN0ID0+IGVmZmVjdC5wcm9kdWNlT25lT2YpXG4gICAgcmV0dXJuIHByb2R1Y2VkUmVzb3VyY2VzLnJlZHVjZSgodHJhZGVDb3N0cyxyZXNvdXJjZSk9Pih7XG4gICAgICAgIC4uLnRyYWRlQ29zdHMsXG4gICAgICAgIFtyZXNvdXJjZV06dHJhZGVDb3N0c1tyZXNvdXJjZV0rMVxuICAgIH0pLGluaXRpYWxUcmFkZUNvc3RzKVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbkJ1aWxkKHN0YXRlOkdhbWVTdGF0ZSxwbGF5ZXI6UGxheWVyLGNhcmROYW1lOkNhcmROYW1lKTpmYWxzZXx7YWRkaXRpb25hbENvaW5zOm51bWJlcn17XG4gICAgY29uc3QgY2FyZCA9IGFsbENhcmRzLmZpbmQoYz0+Yy5uYW1lPT09Y2FyZE5hbWUpXG4gICAgaW52YXJpYW50KGNhcmQsXCJDYXJkIHNob3VsZCBiZSBhIGNhcmRcIilcbiAgICBjb25zdCBjb2luQ29zdCA9IGNhcmQuY29zdD8uY29pbiA/PyAwXG4gICAgY29uc3QgY3VycmVudENvaW5zID0gc3RhdGUucGxheWVyc1N0YXRlW3BsYXllcl0uY29pbnM7XG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSBnZXRQcm9kdWN0aW9uRWZmZWN0cyhjYXJkc0J1aWx0QnlQbGF5ZXIoc3RhdGUscGxheWVyKSk7XG4gICAgY29uc3QgdHJhZGVDb3N0cyA9IGdldFRyYWRlQ29zdHNGb3JQbGF5ZXIoc3RhdGUscGxheWVyKVxuICAgIGNvbnN0IG1pbmltYWxDb3N0ID0gZ2V0TWluaW1hbENvc3RPZkJ1aWxkaW5nKGNhcmQuY29zdCx0cmFkZUNvc3RzLHByb2R1Y3Rpb25zKVxuICAgIGlmKGNvaW5Db3N0ICsgbWluaW1hbENvc3QgPiBjdXJyZW50Q29pbnMpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4ge2FkZGl0aW9uYWxDb2luczptaW5pbWFsQ29zdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShzdGF0ZTpHYW1lU3RhdGUsYWN0aW9uOkdhbWVBY3Rpb24pOkdhbWVTdGF0ZXtcbiAgICBcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlICdzdGFydCc6e1xuICAgICAgICAgICAgY29uc3Qge3NhbXBsZSxzaHVmZmxlLHNhbXBsZVJlbW92ZX0gPSByYW5kb21pemVycyhhY3Rpb24uc2VlZCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJhbmRvbVNlZWQ6YWN0aW9uLnNlZWQsXG4gICAgICAgICAgICAgICAgd29uZGVyczp7MTpbXSwyOltdfSxcbiAgICAgICAgICAgICAgICB3b25kZXJzVG9DaG9zZUZyb206IHNhbXBsZSh3b25kZXJJZHMsNCksXG4gICAgICAgICAgICAgICAgcGxheWVyOjEsXG4gICAgICAgICAgICAgICAgYWdlOm51bGwsXG4gICAgICAgICAgICAgICAgZGVja3M6e1xuICAgICAgICAgICAgICAgICAgICAxOnNhbXBsZVJlbW92ZShhZ2VPbmVEZWNrLDMpLm1hcChjPT5jLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAyOnNhbXBsZVJlbW92ZShhZ2VUd29EZWNrLDMpLm1hcChjPT5jLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAzOnNodWZmbGUoc2FtcGxlUmVtb3ZlKGFnZVRocmVlRGVjaywzKSxzYW1wbGUoZ3VpbGRzRGVjaywzKSkubWFwKGM9PmMubmFtZSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhbkJlUGxheWVkOltdLFxuICAgICAgICAgICAgICAgIHBsYXllcnNTdGF0ZTp7XG4gICAgICAgICAgICAgICAgICAgIDE6e2J1aWxkaW5nczpbXSxjb2luczowfSxcbiAgICAgICAgICAgICAgICAgICAgMjp7YnVpbGRpbmdzOltdLGNvaW5zOjB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlICdjaG9vc2VXb25kZXInOiB7XG4gICAgICAgICAgICBjb25zdCB7c2FtcGxlfSA9IHJhbmRvbWl6ZXJzKHN0YXRlLnJhbmRvbVNlZWQpO1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlV29uZGVySURzPXdvbmRlcklkcy5maWx0ZXIod2lkID0+ICFbLi4uc3RhdGUud29uZGVyc1sxXSwuLi5zdGF0ZS53b25kZXJzWzJdLCBhY3Rpb24ud29uZGVyXS5pbmNsdWRlcyh3aWQpKVxuICAgICAgICAgICAgaW52YXJpYW50KHN0YXRlLnBsYXllciAhPT0gbnVsbClcbiAgICAgICAgICAgIGNvbnN0IG1lID0gc3RhdGUucGxheWVyO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXIgPSBvdGhlclBsYXllcihzdGF0ZS5wbGF5ZXIpXG4gICAgICAgICAgICBjb25zdCB3b25kZXJzID0gKCgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgdz1hY3Rpb24ud29uZGVyXG4gICAgICAgICAgICAgICAgY29uc3Qgd3M9c3RhdGUud29uZGVyc1xuICAgICAgICAgICAgICAgIGlmKG1lPT09MSAmJiBvdGhlcj09PTIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgW21lXTpbLi4ud3NbbWVdLHddLFxuICAgICAgICAgICAgICAgICAgICAgICAgW290aGVyXTp3c1tvdGhlcl1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihtZT09PTIgJiYgb3RoZXI9PT0xKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFttZV06Wy4uLndzW21lXSx3XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtvdGhlcl06d3Nbb3RoZXJdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW1wb3NzaWJsZSFcIilcbiAgICAgICAgICAgIH0pKClcbiAgICAgICAgICAgIGNvbnN0IGVuZE9mQ2hvc2luZ1dvbmRlcnM9d29uZGVyc1sxXS5sZW5ndGggPT09IDQgJiYgd29uZGVyc1syXS5sZW5ndGg9PT00XG4gICAgICAgICAgICBjb25zdCB3b25kZXJzVG9DaG9zZUZyb209KCgpPT57XG4gICAgICAgICAgICAgICAgaWYoZW5kT2ZDaG9zaW5nV29uZGVycyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihzdGF0ZS53b25kZXJzVG9DaG9zZUZyb20/Lmxlbmd0aD09PTEgfHwgc3RhdGUud29uZGVyc1RvQ2hvc2VGcm9tPT09bnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzYW1wbGUoYXZhaWxhYmxlV29uZGVySURzLDQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS53b25kZXJzVG9DaG9zZUZyb20/LmZpbHRlcih3aWQ9PndpZCE9PWFjdGlvbi53b25kZXIpO1xuICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByYW5kb21TZWVkOnN0YXRlLnJhbmRvbVNlZWQsXG4gICAgICAgICAgICAgICAgcGxheWVyOm90aGVyLFxuICAgICAgICAgICAgICAgIHdvbmRlcnMsXG4gICAgICAgICAgICAgICAgd29uZGVyc1RvQ2hvc2VGcm9tLFxuICAgICAgICAgICAgICAgIGFnZTplbmRPZkNob3NpbmdXb25kZXJzPzE6bnVsbCxcbiAgICAgICAgICAgICAgICBkZWNrczpzdGF0ZS5kZWNrcyxcbiAgICAgICAgICAgICAgICBjYW5CZVBsYXllZDppbnRpYWxDYW5CZVBsYXllZFN0YXRlc1sxXSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJzU3RhdGU6e1xuICAgICAgICAgICAgICAgICAgICAxOntidWlsZGluZ3M6W10sY29pbnM6MH0sXG4gICAgICAgICAgICAgICAgICAgIDI6e2J1aWxkaW5nczpbXSxjb2luczowfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnYnVpbGQnOntcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclN0YXRlPXtcbiAgICAgICAgICAgICAgICBjb2luczpzdGF0ZS5wbGF5ZXJzU3RhdGVbc3RhdGUucGxheWVyXS5jb2lucyxcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6Wy4uLnN0YXRlLnBsYXllcnNTdGF0ZVtzdGF0ZS5wbGF5ZXJdLmJ1aWxkaW5ncyxhY3Rpb24uY2FyZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBsYXllcnNTdGF0ZT17XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUucGxheWVyc1N0YXRlLFxuICAgICAgICAgICAgICAgIFtzdGF0ZS5wbGF5ZXJdOnBsYXllclN0YXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlQWZ0ZXJQaWNraW5nVXBDYXJkKHN0YXRlLGFjdGlvbi5jYXJkKSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJzU3RhdGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnZGlzY2FyZCc6e1xuICAgICAgICAgICAgY29uc3QgcGxheWVyU3RhdGU9e1xuICAgICAgICAgICAgICAgIGNvaW5zOnN0YXRlLnBsYXllcnNTdGF0ZVtzdGF0ZS5wbGF5ZXJdLmNvaW5zKzMsXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOnN0YXRlLnBsYXllcnNTdGF0ZVtzdGF0ZS5wbGF5ZXJdLmJ1aWxkaW5nc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGxheWVyc1N0YXRlPXtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5wbGF5ZXJzU3RhdGUsXG4gICAgICAgICAgICAgICAgW3N0YXRlLnBsYXllcl06cGxheWVyU3RhdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGVBZnRlclBpY2tpbmdVcENhcmQoc3RhdGUsYWN0aW9uLmNhcmQpLFxuICAgICAgICAgICAgICAgIHBsYXllcnNTdGF0ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCAiZnVuY3Rpb24gYXJyYXlTaXplPFQ+KHNpemU6bnVtYmVyLGluaXRpYWxpemVyOihpbmRleDpudW1iZXIpPT5UKTpUW117XG4gICAgcmV0dXJuIG5ldyBBcnJheShzaXplKS5maWxsKDApLm1hcCgoX3ZhbHVlLGluZGV4KT0+aW5pdGlhbGl6ZXIoaW5kZXgpKVxufVxuZnVuY3Rpb24gc3VtKGFycmF5Om51bWJlcltdKTpudW1iZXJ7XG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSxiKT0+YStiLDApXG59XG4vKipcbiAqIGxheW91dFtpXSA9IGFycmF5IG9mIGNhcmQgaW5kZXhlcyB0aGF0IGNvdmVyIGlcbiAqL1xuY29uc3QgbGF5b3V0QWdlT25lOm51bWJlcltdW109KCgpPT57XG4gICAgY29uc3Qgcm93U2l6ZXMgPSBbMiwzLDQsNSw2XVxuICAgIGNvbnN0IHJvd1N0YXJ0SW5kZXhlcyA9IGFycmF5U2l6ZShyb3dTaXplcy5sZW5ndGgsKGluZGV4KT0+c3VtKHJvd1NpemVzLnNsaWNlKDAsaW5kZXgpKSlcbiAgICByZXR1cm4gcm93U2l6ZXMuZmxhdE1hcCgocm93U2l6ZSxyb3dJbmRleCkgPT4gYXJyYXlTaXplKHJvd1NpemUsKGluZGV4SW5Sb3cpPT5yb3dJbmRleD09PTU/W106W1xuICAgICAgICByb3dTdGFydEluZGV4ZXNbcm93SW5kZXgrMV0raW5kZXhJblJvdyxcbiAgICAgICAgcm93U3RhcnRJbmRleGVzW3Jvd0luZGV4KzFdK2luZGV4SW5Sb3crMSxcbiAgICBdKVxuICAgIClcbn0pKClcblxuY29uc3QgbGF5b3V0QWdlVHdvOm51bWJlcltdW109KCgpPT57XG4gICAgY29uc3Qgcm93U2l6ZXMgPSBbNiw1LDQsMywyXVxuICAgIGNvbnN0IHJvd1N0YXJ0SW5kZXhlcyA9IGFycmF5U2l6ZShyb3dTaXplcy5sZW5ndGgsKGluZGV4KT0+c3VtKHJvd1NpemVzLnNsaWNlKDAsaW5kZXgpKSlcbiAgICByZXR1cm4gcm93U2l6ZXMuZmxhdE1hcCgocm93U2l6ZSxyb3dJbmRleCkgPT4gYXJyYXlTaXplKHJvd1NpemUsKGluZGV4SW5Sb3cpPT57XG4gICAgICAgIGlmKHJvd0luZGV4PT09NSkgcmV0dXJuIFtdXG4gICAgICAgIGlmKGluZGV4SW5Sb3c9PT0wKSByZXR1cm4gW3Jvd1N0YXJ0SW5kZXhlc1tyb3dJbmRleCsxXV1cbiAgICAgICAgaWYoaW5kZXhJblJvdz09PXJvd1NpemUtMSkgcmV0dXJuIFtyb3dTdGFydEluZGV4ZXNbcm93SW5kZXgrMV0rcm93U2l6ZXNbcm93SW5kZXgrMV0tMV1cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHJvd1N0YXJ0SW5kZXhlc1tyb3dJbmRleCsxXStpbmRleEluUm93LFxuICAgICAgICAgICAgcm93U3RhcnRJbmRleGVzW3Jvd0luZGV4KzFdK2luZGV4SW5Sb3ctMSxcbiAgICAgICAgXVxuICAgIH0pXG4gICAgKVxufSkoKVxuXG5jb25zdCBsYXlvdXRBZ2VUaHJlZTpudW1iZXJbXVtdPVtcbiAgICAgICAgWzIsM10sIFszLDRdLFxuICAgIFs1LDZdLCBbNiw3XSwgWzcsOF0sXG4gICAgIFs5XSxbOV0sWzEwXSxbMTBdLFxuICAgICAgICBbMTEsMTJdLCBbMTMsMTRdLFxuICAgIFsxNV0sIFsxNSwxNl0sIFsxNiwxN10sIFsxN10sXG4gICAgWzE4XSwgWzE4LDE5XSwgWzE5XSxcbiAgICBbXSxbXVxuXVxuXG5cbmZ1bmN0aW9uIGNhbkJlUGxheWVkKGxheW91dDpudW1iZXJbXVtdLGluR2FtZTpib29sZWFuW10scmVtb3ZlZEluZGV4Om51bWJlcixpbml0aWFsQ2FuQmVQbGF5ZWQ6Ym9vbGVhbltdKXtcbiAgICBjb25zdCBuZXdUcnVlcz1sYXlvdXRcbiAgICAubWFwKChjb3ZlcmVycyxpbmRleCk9Pih7Y292ZXJlcnMsaW5kZXh9KSlcbiAgICAuZmlsdGVyKCh7Y292ZXJlcnN9KT0+Y292ZXJlcnMuaW5jbHVkZXMocmVtb3ZlZEluZGV4KSlcbiAgICAuZmlsdGVyKCh7Y292ZXJlcnN9KT0+Y292ZXJlcnMuZXZlcnkoY292ZXJlciA9PiAhaW5HYW1lW2NvdmVyZXJdIHx8IGNvdmVyZXI9PT1yZW1vdmVkSW5kZXgpKVxuICAgIC5tYXAoKHtpbmRleH0pPT5pbmRleClcbiAgICBjb25zb2xlLmxvZyh7bmV3VHJ1ZXN9KVxuICAgIHJldHVybiBpbml0aWFsQ2FuQmVQbGF5ZWQubWFwKChpbml0aWFsVmFsdWUsaW5kZXgpPT5pbml0aWFsVmFsdWUgfHwgbmV3VHJ1ZXMuaW5jbHVkZXMoaW5kZXgpKVxufVxuXG5mdW5jdGlvbiBjYW5CZVBsYXllZEZvckxheW91dChsYXlvdXQ6bnVtYmVyW11bXSl7XG4gICAgcmV0dXJuIChpbkdhbWU6Ym9vbGVhbltdLHJlbW92ZWRJbmRleDpudW1iZXIsaW5pdGlhbENhbkJlUGxheWVkOmJvb2xlYW5bXSk9PmNhbkJlUGxheWVkKGxheW91dCxpbkdhbWUscmVtb3ZlZEluZGV4LGluaXRpYWxDYW5CZVBsYXllZClcbn1cblxuZXhwb3J0IGNvbnN0IGxheW91dHMgPSB7XG4gICAgMTpjYW5CZVBsYXllZEZvckxheW91dChsYXlvdXRBZ2VPbmUpLFxuICAgIDI6Y2FuQmVQbGF5ZWRGb3JMYXlvdXQobGF5b3V0QWdlVHdvKSxcbiAgICAzOmNhbkJlUGxheWVkRm9yTGF5b3V0KGxheW91dEFnZVRocmVlKSxcbn1cblxuZnVuY3Rpb24gdHJ1ZXMobjpudW1iZXIpOmJvb2xlYW5bXXtcbiAgICByZXR1cm4gbmV3IEFycmF5KG4pLmZpbGwodHJ1ZSlcbn1cblxuZnVuY3Rpb24gZmFsc2VzKG46bnVtYmVyKTpib29sZWFuW117XG4gICAgcmV0dXJuIG5ldyBBcnJheShuKS5maWxsKGZhbHNlKVxufVxuXG5jb25zdCBlbXB0eTpib29sZWFuW109W11cblxuZXhwb3J0IGNvbnN0IGludGlhbENhbkJlUGxheWVkU3RhdGVzID0ge1xuICAgIDE6ZW1wdHkuY29uY2F0KGZhbHNlcygxNCksdHJ1ZXMoNikpLFxuICAgIDI6ZW1wdHkuY29uY2F0KGZhbHNlcygxOCksdHJ1ZXMoMikpLFxuICAgIDM6ZW1wdHkuY29uY2F0KGZhbHNlcygxOCksdHJ1ZXMoMikpXG59XG5cbmV4cG9ydCBjb25zdCBpbnRpYWxGYWNlVXBTdGF0ZXMgPSB7XG4gICAgMTplbXB0eS5jb25jYXQodHJ1ZXMoMiksZmFsc2VzKDMpLHRydWVzKDQpLGZhbHNlcyg1KSx0cnVlcyg2KSksXG4gICAgMjplbXB0eS5jb25jYXQodHJ1ZXMoNiksZmFsc2VzKDUpLHRydWVzKDQpLGZhbHNlcygzKSx0cnVlcygyKSksXG4gICAgMzplbXB0eS5jb25jYXQodHJ1ZXMoMiksZmFsc2VzKDMpLHRydWVzKDQpLGZhbHNlcygyKSx0cnVlcyg0KSxmYWxzZXMoMyksdHJ1ZXMoMikpLFxufSIsICJleHBvcnQgY29uc3QgYmFzaWNSZXNvdXJjZXMgPSBbJ3N0b25lJywnY2xheScsJ3dvb2QnXSBhcyBjb25zdFxuZXhwb3J0IHR5cGUgQmFzaWNSZXNvdXJjZT10eXBlb2YgYmFzaWNSZXNvdXJjZXNbbnVtYmVyXTtcbmV4cG9ydCBjb25zdCBlbGFib3JhdGVSZXNvdXJjZXMgPSBbJ3BhcHlydXMnLCdnbGFzcyddIGFzIGNvbnN0XG5leHBvcnQgdHlwZSBFbGFib3JhdGVSZXNvdXJjZT10eXBlb2YgZWxhYm9yYXRlUmVzb3VyY2VzW251bWJlcl07XG5leHBvcnQgY29uc3QgcmVzb3VyY2VzID0gWyAuLi5iYXNpY1Jlc291cmNlcywgLi4uZWxhYm9yYXRlUmVzb3VyY2VzXVxuZXhwb3J0IHR5cGUgUmVzb3VyY2UgPSB0eXBlb2YgcmVzb3VyY2VzW251bWJlcl07IiwgImltcG9ydCB7IENvbXBsZXhFZmZlY3QsIEVmZmVjdCwgU2NpZW5jZSwgVW5sb2NrU3ltYm9sIH0gZnJvbSBcIi4vQ2FyZHMvQ2FyZFR5cGVcIjtcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSBcIi4vUmVzb3VyY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0aW9uRWZmZWN0e1xuICAgIHByb2R1Y2VPbmVPZjpyZWFkb25seSBSZXNvdXJjZVtdXG59XG5cbmV4cG9ydCB0eXBlIFNpbmdsZUVmZmVjdCA9IFxufCBQcm9kdWN0aW9uRWZmZWN0XG58IHtnZXRDb2luOm51bWJlcn1cbnwge3ZpY3RvcnlQb2ludHM6bnVtYmVyfVxufCB7c2hpZWxkczpudW1iZXJ9XG58IHt0cmFkZU9uZTpyZWFkb25seSBSZXNvdXJjZVtdfVxufCB7c2NpZW5jZTpTY2llbmNlfVxufCB7Y29tcGxleDpDb21wbGV4RWZmZWN0fVxufCB7c3ltYm9sOlVubG9ja1N5bWJvbH1cblxuZnVuY3Rpb24gZXh0cmFjdFJlc291cmNlKGVmZmVjdDpFZmZlY3QscmV0OlNpbmdsZUVmZmVjdFtdLHJlc291cmNlOlJlc291cmNlKXtcbiAgICBpZihlZmZlY3RbcmVzb3VyY2VdKSB7XG4gICAgICAgIG5ldyBBcnJheShlZmZlY3RbcmVzb3VyY2VdKVxuICAgICAgICAuZmlsbCgwKVxuICAgICAgICAuZm9yRWFjaCgoKT0+cmV0LnB1c2goe3Byb2R1Y2VPbmVPZjpbcmVzb3VyY2VdfSkpXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RFZmZlY3RzKGVmZmVjdDpFZmZlY3QpOlNpbmdsZUVmZmVjdFtde1xuICAgIGNvbnN0IHJldDpTaW5nbGVFZmZlY3RbXT1bXVxuICAgIGNvbnN0IGV4dHJhY3RSZXM9KHJlc291cmNlOlJlc291cmNlKT0+ZXh0cmFjdFJlc291cmNlKGVmZmVjdCxyZXQscmVzb3VyY2UpXG4gICAgXG4gICAgZXh0cmFjdFJlcygnY2xheScpXG4gICAgZXh0cmFjdFJlcygnZ2xhc3MnKVxuICAgIGV4dHJhY3RSZXMoJ3BhcHlydXMnKVxuICAgIGV4dHJhY3RSZXMoJ3N0b25lJylcbiAgICBleHRyYWN0UmVzKCd3b29kJylcblxuICAgIGlmKGVmZmVjdC5jb2luKSByZXQucHVzaCh7Z2V0Q29pbjplZmZlY3QuY29pbn0pXG4gICAgaWYoZWZmZWN0LmNvbXBsZXgpIHJldC5wdXNoKHtjb21wbGV4OmVmZmVjdC5jb21wbGV4fSlcbiAgICBpZihlZmZlY3QucHJvZHVjZU9uZU9mKSByZXQucHVzaCh7cHJvZHVjZU9uZU9mOmVmZmVjdC5wcm9kdWNlT25lT2Z9KVxuXG4gICAgaWYoZWZmZWN0LnNjaWVuY2UpIHJldC5wdXNoKHtzY2llbmNlOmVmZmVjdC5zY2llbmNlfSlcbiAgICBpZihlZmZlY3Quc2hpZWxkcykgcmV0LnB1c2goe3NoaWVsZHM6ZWZmZWN0LnNoaWVsZHN9KVxuICAgIGlmKGVmZmVjdC5zeW1ib2wpIHJldC5wdXNoKHtzeW1ib2w6ZWZmZWN0LnN5bWJvbH0pXG4gICAgaWYoZWZmZWN0LnRyYWRlT25lKSByZXQucHVzaCh7dHJhZGVPbmU6ZWZmZWN0LnRyYWRlT25lfSlcbiAgICBpZihlZmZlY3QudmljdG9yeVBvaW50cykgcmV0LnB1c2goe3ZpY3RvcnlQb2ludHM6ZWZmZWN0LnZpY3RvcnlQb2ludHN9KVxuXG4gICAgcmV0dXJuIHJldDtcbn0iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBhc3NlcnRJc1dvbmRlcklkLCBHYW1lQWN0aW9uLCBHYW1lU3RhdGUsIHJlZHVjZSB9IGZyb20gXCJ+L2xvZ2ljL0dhbWVTdGF0ZVwiXG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcblxuZnVuY3Rpb24gZ2V0U3RhdGUocmVxdWVzdDpSZXF1ZXN0KTpHYW1lU3RhdGV7XG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXMuZ2V0KFwic3RhdGVcIik7XG4gICAgaW52YXJpYW50KHN0YXRlICE9PSBudWxsLCBcIlN0YXRlIG11c3QgZXhpc3RcIilcbiAgICByZXR1cm4gSlNPTi5wYXJzZSggc3RhdGUgKSBhcyBHYW1lU3RhdGVcbn1cblxuZnVuY3Rpb24gZ2V0T3JGYWlsKGtleTpzdHJpbmcsZGF0YTpGb3JtRGF0YSk6c3RyaW5ne1xuICAgIGNvbnN0IHJldCA9IGRhdGEuZ2V0KGtleSlcbiAgICBpbnZhcmlhbnQocmV0LGBObyB2YWx1ZSBpbiB0aGUgZm9ybSBmb3IgJHtrZXl9IGApXG4gICAgaW52YXJpYW50KHR5cGVvZiByZXQgPT09ICdzdHJpbmcnLFwidmFsdWUgZm9yICR7a2V5fSBpcyBub3QgYSBzdHJpbmcsIGl0IGlzOiBcIityZXQudG9TdHJpbmcoKSlcbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBnZXRBY3Rpb24oYWN0aW9uVHlwZTpzdHJpbmcsZGF0YTpGb3JtRGF0YSk6R2FtZUFjdGlvbntcbiAgICBzd2l0Y2goYWN0aW9uVHlwZSl7XG4gICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTonc3RhcnQnLFxuICAgICAgICAgICAgICAgIHNlZWQ6cGFyc2VJbnQoZ2V0T3JGYWlsKFwic2VlZFwiLGRhdGEpKVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdjaG9vc2VXb25kZXInOlxuICAgICAgICAgICAgY29uc3Qgd29uZGVyID1nZXRPckZhaWwoXCJ3b25kZXJcIixkYXRhKVxuICAgICAgICAgICAgYXNzZXJ0SXNXb25kZXJJZCh3b25kZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOidjaG9vc2VXb25kZXInLFxuICAgICAgICAgICAgICAgIHdvbmRlclxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdidWlsZCc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6J2J1aWxkJyxcbiAgICAgICAgICAgICAgICBjYXJkOmdldE9yRmFpbChcImNhcmRcIixkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdkaXNjYXJkJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTonZGlzY2FyZCcsXG4gICAgICAgICAgICAgICAgY2FyZDpnZXRPckZhaWwoXCJjYXJkXCIsZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gZ2FtZSBhY3Rpb25cIik7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOkFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHtyZXF1ZXN0LHBhcmFtc30pID0+IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG4gICAgY29uc3QgYWN0aW9uVHlwZSA9IHBhcmFtc1tcIipcIl07XG4gICAgaW52YXJpYW50KHR5cGVvZiBhY3Rpb25UeXBlID09PSAnc3RyaW5nJywnQWN0aW9uIFR5cGUgc2hvdWxkIGJlIGEgc3RyaW5nJylcbiAgICBjb25zdCBzdGF0ZSA9IGFjdGlvblR5cGU9PT0nc3RhcnQnP3t9IGFzIGFueTpnZXRTdGF0ZShyZXF1ZXN0KVxuICAgIGNvbnN0IG5ld1N0YXRlID0gcmVkdWNlKHN0YXRlLGdldEFjdGlvbihhY3Rpb25UeXBlLGJvZHkpKVxuICAgIHJldHVybiByZWRpcmVjdCgnL2dhbWU/c3RhdGU9JytKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSkpXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6TG9hZGVyRnVuY3Rpb24gPSAoKT0+e1xuICAgIGNvbnNvbGUubG9nKFwiVGhpcyBzaG91bGQgbm90IHJlbmRlclwiKVxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICBZb3UgZG9udCBzZWUgdGhpc1xuICAgIDwvZGl2PlxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNa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QUFDO0FBQUE7QUFBQSxFQUNyQjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSyxFQUFFLE1BQUs7QUFBQSxJQUNaLFFBQU87QUFBQSxNQUNILFNBQVE7QUFBQSxNQUNSLFFBQU87QUFBQTtBQUFBO0FBQUEsRUFFYjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSyxFQUFDLE1BQUs7QUFBQSxJQUNYLFFBQU87QUFBQSxNQUNILFNBQVE7QUFBQSxNQUNSLFFBQU87QUFBQTtBQUFBO0FBQUEsRUFFYjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSyxFQUFDLE1BQUs7QUFBQSxJQUNYLFFBQU8sRUFBQyxTQUFRO0FBQUE7QUFBQSxFQUNsQjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSyxFQUFDLE1BQUs7QUFBQSxJQUNYLFFBQU87QUFBQSxNQUNILFFBQU87QUFBQSxNQUNQLFNBQVE7QUFBQTtBQUFBO0FBQUEsRUFFZDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSyxFQUFDLE1BQUs7QUFBQSxJQUNYLFFBQU87QUFBQSxNQUNILFFBQU87QUFBQSxNQUNQLFNBQVE7QUFBQTtBQUFBO0FBQUEsRUFFZDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLE1BQ0gsZUFBYztBQUFBLE1BQ2QsUUFBTztBQUFBO0FBQUEsSUFFWCxNQUFLO0FBQUE7QUFBQSxFQUNQO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxRQUFPO0FBQUEsTUFDSCxlQUFjO0FBQUEsTUFDZCxRQUFPO0FBQUE7QUFBQSxJQUVYLE1BQUs7QUFBQTtBQUFBLEVBQ1A7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUssRUFBQyxPQUFNO0FBQUEsSUFDWixRQUFPO0FBQUEsTUFDSCxlQUFjO0FBQUEsTUFDZCxRQUFPO0FBQUE7QUFBQTtBQUFBLEVBRWI7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFFBQU87QUFBQSxNQUNILE1BQUs7QUFBQTtBQUFBLElBRVQsTUFBSztBQUFBO0FBQUE7OztBQzdLYjtBQUFPLElBQU0sU0FBUztBQUFBLEVBQ2xCO0FBQUEsSUFDSSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLLEVBQUMsTUFBSztBQUFBLElBQ1gsUUFBTztBQUFBLE1BQ0gsTUFBSztBQUFBO0FBQUE7QUFBQSxFQUVYO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLLEVBQUMsTUFBSztBQUFBLElBQ1gsUUFBTyxFQUFDLE1BQUs7QUFBQTtBQUFBLEVBQ2Y7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUssRUFBQyxNQUFLO0FBQUEsSUFDWCxRQUFPLEVBQUMsT0FBTTtBQUFBO0FBQUEsRUFDaEI7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFFBQU8sRUFBQyxPQUFNO0FBQUE7QUFBQSxFQUNoQjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsUUFBTyxFQUFDLFNBQVE7QUFBQTtBQUFBLEVBQ2xCO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLLEVBQUMsT0FBTTtBQUFBLElBQ1osUUFBTyxFQUFDLFNBQVE7QUFBQTtBQUFBLEVBQ2xCO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsTUFDRCxNQUFLO0FBQUEsTUFDTCxNQUFLO0FBQUE7QUFBQSxJQUVULFFBQU87QUFBQSxNQUNILGNBQWEsQ0FBQyxTQUFRO0FBQUE7QUFBQTtBQUFBLEVBRTVCO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEs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
