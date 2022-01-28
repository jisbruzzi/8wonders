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
var app_default = "/build/_assets/app-D6C3G3U5.css";

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
function Submit({ text }) {
  const { player } = useGameState();
  return /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: text,
    className: `p-2 m-2 bg-red-200 rounded-sm ${player === 1 ? "hover:bg-blue-200" : "hover:bg-green-200"} transition-colors`
  });
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
function productionEffects(state, player) {
  const builtCards = allCards.filter((card) => state.playersState[player].buildings.includes(card.name));
  return builtCards.flatMap((card) => extractEffects(card.effect)).flatMap((singleEffect) => "produceOneOf" in singleEffect ? [singleEffect] : []);
}
function productionsCover(resourcesNeeded, productions) {
  console.log({ resourcesNeeded, productions });
  const someResourceIsNeded = resources.some((resName) => resourcesNeeded == null ? void 0 : resourcesNeeded[resName]);
  if (!someResourceIsNeded) {
    console.log("No resources needed!");
    return true;
  }
  if (productions.length === 0) {
    console.log("No more productions!");
    return false;
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
  return production.produceOneOf.some((producedResource) => productionsCover(resourcesWithOneLessOf(producedResource), otherProductions));
}
function canBuild(state, player, cardName) {
  var _a;
  const card = allCards.find((c) => c.name === cardName);
  (0, import_tiny_invariant3.default)(card, "Card should be a card");
  const coinCost = ((_a = card.cost) == null ? void 0 : _a.coin) ?? 0;
  const currentCoins = state.playersState[player].coins;
  if (coinCost > currentCoins)
    return false;
  return productionsCover(card.cost, productionEffects(state, player));
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
  }), /* @__PURE__ */ import_react.default.createElement(Submit, {
    text: "Choose"
  })));
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
    className: "absolute flex flex-row pt-4"
  }, canBeBuilt && /* @__PURE__ */ import_react.default.createElement(import_remix6.Form, {
    action: selectCardLink,
    method: "post"
  }, /* @__PURE__ */ import_react.default.createElement(Submit, {
    text: "Build"
  }), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "hidden",
    value: name,
    name: "card"
  })), /* @__PURE__ */ import_react.default.createElement(import_remix6.Form, {
    action: discardCardLink,
    method: "post"
  }, /* @__PURE__ */ import_react.default.createElement(Submit, {
    text: "Discard"
  }), /* @__PURE__ */ import_react.default.createElement("input", {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2pvc2UvOHdvbmRlcnMvYXBwL3Jvb3QudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9qb3NlLzh3b25kZXJzL2FwcC9yb3V0ZXMvd29uZGVycy8kd29uZGVySWQudHN4IiwgIi4uL2FwcC9sb2dpYy9Xb25kZXJzLnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzL3dvbmRlcnMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1dvbmRlckltYWdlLnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzL2dhbWUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1N1Ym1pdC50c3giLCAiLi4vYXBwL2hvb2tzLnRzIiwgIi4uL2FwcC9sb2dpYy9DYXJkcy9pbmRleC50cyIsICIuLi9hcHAvbG9naWMvQ2FyZHMvQWdlT25lLnRzIiwgIi4uL2FwcC9sb2dpYy9DYXJkcy9BZ2VUd28udHMiLCAiLi4vYXBwL2xvZ2ljL0NhcmRzL0FnZVRocmVlLnRzIiwgIi4uL2FwcC9sb2dpYy9DYXJkcy9HdWlsZHMudHMiLCAiLi4vYXBwL2xvZ2ljL0dhbWVTdGF0ZS50cyIsICIuLi9hcHAvbG9naWMvbGF5b3V0cy50cyIsICIuLi9hcHAvbG9naWMvUmVzb3VyY2UudHMiLCAiLi4vYXBwL2xvZ2ljL1NpbmdsZUVmZmVjdC50cyIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzLyQudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9qb3NlLzh3b25kZXJzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2pvc2UvOHdvbmRlcnMvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL2pvc2UvOHdvbmRlcnMvYXBwL3JvdXRlcy93b25kZXJzLyR3b25kZXJJZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzL3dvbmRlcnMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL2pvc2UvOHdvbmRlcnMvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvam9zZS84d29uZGVycy9hcHAvcm91dGVzL2dhbWUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9ob21lL2pvc2UvOHdvbmRlcnMvYXBwL3JvdXRlcy8kLnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvd29uZGVycy8kd29uZGVySWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy93b25kZXJzLyR3b25kZXJJZFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIndvbmRlcnMvOndvbmRlcklkXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvd29uZGVycy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3dvbmRlcnMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJ3b25kZXJzXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9nYW1lXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZ2FtZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImdhbWVcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy8kXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvJFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIipcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2FwcC5jc3NcIlxuXG5leHBvcnQgY29uc3QgbGlua3M6TGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAge1xuICAgIHJlbDpcInN0eWxlc2hlZXRcIixcbiAgICBocmVmOnN0eWxlcyxcbiAgfVxuXVxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWF4LXctNnhsXCI+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQgeyB3b25kZXJzIH0gZnJvbSBcIn4vbG9naWMvV29uZGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb25kZXJFeHBsYW5hdGlvbigpe1xuICAgIGNvbnN0IHt3b25kZXJJZH0gPSB1c2VQYXJhbXMoKTtcbiAgICBjb25zdCB3b25kZXIgPSB3b25kZXJzLmZpbmQodz0+dy5pZD09PXdvbmRlcklkKVxuICAgIGludmFyaWFudCh3b25kZXIpXG4gICAgY29uc3QgeyBuYW1lLCBpbWFnZSwgY29zdCwgZWZmZWN0IH0gPSB3b25kZXJcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtY2VudGVyIHAtNFwiPntuYW1lfTwvaDE+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGxcIj5Db3N0OjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhjb3N0KS5tYXAoKFtrLHZdKT0+PGxpPntrfTp7dn08L2xpPil9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+RWZmZWN0OjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhlZmZlY3QpLm1hcCgoW2ssdl0pPT48bGk+e2t9Ont2fTwvbGk+KX1cbiAgICAgICAgPC91bD5cblxuICAgIDwvPlxufSIsICJpbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gXCIuL1Jlc291cmNlXCJcblxudHlwZSBOdW1lcmljRWZmZWN0VHlwZT0ndmljdG9yeVBvaW50cyd8J3Rha2VDb2lucyd8J3JlbW92ZUNvaW5zJ3wnc2hpZWxkcydcbnR5cGUgQm9vbGVhbkVmZmVjdFR5cGU9J3NlY29uZFR1cm4nfCdwbGF5RGlzY2FyZGVkQ29pbnMnfCdwbGF5RGlzY2FyZGVkQ2FyZCd8J2Rlc3Ryb3lCcm93bkNhcmQnfCdkZXN0cm95R3JleUNhcmQnXG50eXBlIEVmZmVjdFR5cGU9TnVtZXJpY0VmZmVjdFR5cGV8Qm9vbGVhbkVmZmVjdFR5cGV8J3Byb2R1Y2UnXG5leHBvcnQgaW50ZXJmYWNlIFdvbmRlciB7XG4gICAgaWQ6V29uZGVySWRcbiAgICBjb3N0OlBhcnRpYWw8UmVjb3JkPFJlc291cmNlLG51bWJlcj4+LFxuICAgIG5hbWU6c3RyaW5nLFxuICAgIGltYWdlOnN0cmluZyxcbiAgICBlZmZlY3Q6UGFydGlhbDxSZWNvcmQ8TnVtZXJpY0VmZmVjdFR5cGUsbnVtYmVyPiAmIFJlY29yZDxCb29sZWFuRWZmZWN0VHlwZSx0cnVlPiAmIHsncHJvZHVjZSc6UmVzb3VyY2VbXX0+XG59XG5cblxuY29uc3Qgd29uZGVyc0RhdGEgPSBbXG4gICAge1xuICAgICAgICBpZDoncHlyYW1pZHMnLFxuICAgICAgICBuYW1lOidUaGUgUGlyYW15ZHMnLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvODI1MjZENUItNDcxOC00MTIxLTgwNTgtNzlFMEJCQjMwN0UyLmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgcGFweXJ1czoxLFxuICAgICAgICAgICAgc3RvbmU6MyxcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6OVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOidhcHBpYW4nLFxuICAgICAgICBuYW1lOidUaGUgQXBwaWFuIFdheScsXG4gICAgICAgIGltYWdlOidodHRwczovL2NhcmRib2FyZG1vdW50YWluLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9BMkRBQzEzOC02NjY3LTQwOTQtQUIxMS0yNEY5NTE2RDhDMkUuanBnJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBwYXB5cnVzOjEsXG4gICAgICAgICAgICBjbGF5OjIsXG4gICAgICAgICAgICBzdG9uZToyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjMsXG4gICAgICAgICAgICB0YWtlQ29pbnM6MyxcbiAgICAgICAgICAgIHJlbW92ZUNvaW5zOjMsXG4gICAgICAgICAgICBzZWNvbmRUdXJuOnRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDonYXJ0ZW1pcycsXG4gICAgICAgIG5hbWU6J1RoZSB0ZWhtcGxlIG9mIGFydGVtaXMnLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvMEVGQzg0NDUtOUIyMC00NTc5LTkwMTItNTAzQTAwQ0U0NjE5LmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgcGFweXJ1czoxLFxuICAgICAgICAgICAgZ2xhc3M6MSxcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICB3b29kOjEsXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB0YWtlQ29pbnM6MTIsXG4gICAgICAgICAgICBzZWNvbmRUdXJuOnRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDoncGlyYWV1cycsXG4gICAgICAgIG5hbWU6XCJQaXJhZXVzXCIsXG4gICAgICAgIGltYWdlOidodHRwczovL2NhcmRib2FyZG1vdW50YWluLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9FNkNGRDRCRC01QjRDLTRFRDgtOTk5MC1DREJEQjlCODFENTAuanBnJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICBzdG9uZToxLFxuICAgICAgICAgICAgd29vZDoyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBwcm9kdWNlOlsncGFweXJ1cycsJ2dsYXNzJ10sXG4gICAgICAgICAgICBzZWNvbmRUdXJuOnRydWUsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjIsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6J2dhcmRlbnMnLFxuICAgICAgICBuYW1lOlwiVGhlIGhhbmdpbmcgZ2FyZGVuc1wiLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvRkU3RDQ0NjEtODk3RC00Qzg1LUE5ODktM0U0MURGNTg1OURELmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgcGFweXJ1czoxLFxuICAgICAgICAgICAgZ2xhc3M6MSxcbiAgICAgICAgICAgIHdvb2Q6MlxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdGFrZUNvaW5zOjYsXG4gICAgICAgICAgICBzZWNvbmRUdXJuOnRydWUsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjNcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBpZDonc3BoaW54JyxcbiAgICAgICAgbmFtZTpcIlRoZSBzcGhpbnhcIixcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2FyZGJvYXJkbW91bnRhaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExL0Y3RDgxNDNBLTRFMDAtNDFCRi1CQzc3LTMzNkUwNzAxODZBMi5qcGcnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGdsYXNzOjIsXG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICBzdG9uZToxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzZWNvbmRUdXJuOnRydWUsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjZcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBpZDonbGlicmFyeScsXG4gICAgICAgIG5hbWU6J1RoZSBHcmVhdCBMaWJyYXJ5JyxcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2FyZGJvYXJkbW91bnRhaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExLzJBNkQyQkE4LTUyNTYtNDQ0NS1CNTk3LUI1NURDNzlBOEQxNi5qcGcnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHBhcHlydXM6MSxcbiAgICAgICAgICAgIGdsYXNzOjEsXG4gICAgICAgICAgICB3b29kOjNcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHBsYXlEaXNjYXJkZWRDb2luczp0cnVlLFxuICAgICAgICAgICAgdmljdG9yeVBvaW50czo0XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgaWQ6J2xpZ2hob3VzZScsXG4gICAgICAgIG5hbWU6J1RoZSBncmVhdCBsaWdodGhvdXNlJyxcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2FyZGJvYXJkbW91bnRhaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExLzY4MTBCRDUyLTZDN0MtNEEwMS1CRkRFLTI4QjJEQjkwOTJCQi5qcGcnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHBhcHlydXM6MixcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICB3b29kOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHByb2R1Y2U6Wyd3b29kJywnc3RvbmUnLCdjbGF5J10sXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjQsXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgaWQ6J21hdXNvbGV1bScsXG4gICAgICAgIG5hbWU6J1RoZSBNYXVzb2xldW0nLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvOTlBMDEzNkItN0ExQi00M0U4LTg3MDEtMjNCMTFCMkY0QTA5LmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgcGFweXJ1czoxLFxuICAgICAgICAgICAgZ2xhc3M6MixcbiAgICAgICAgICAgIGNsYXk6MixcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHBsYXlEaXNjYXJkZWRDYXJkOnRydWUsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjJcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBpZDonY2lyY3VzJyxcbiAgICAgICAgbmFtZTonQ2lyY3VzIE1heGltdXMnLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvNTg3NjMzQ0UtMTZGOC00NTBFLUFBQjEtNjEwQzI4RTdBNUJFLmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgZ2xhc3M6MSxcbiAgICAgICAgICAgIHdvb2Q6MSxcbiAgICAgICAgICAgIHN0b25lOjIsXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBkZXN0cm95R3JleUNhcmQ6dHJ1ZSxcbiAgICAgICAgICAgIHNoaWVsZHM6MSxcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6M1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIGlkOid6ZXVzJyxcbiAgICAgICAgbmFtZTonVGhlIHN0YXR1ZSBvZiBaZXVzJyxcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2FyZGJvYXJkbW91bnRhaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExLzU3NjI5REE4LThDRUItNDFEQy04RUFFLUYyM0MwNTM1NEU3NS5qcGcnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHBhcHlydXM6MixcbiAgICAgICAgICAgIGNsYXk6MSxcbiAgICAgICAgICAgIHdvb2Q6MSxcbiAgICAgICAgICAgIHN0b25lOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIGRlc3Ryb3lCcm93bkNhcmQ6dHJ1ZSxcbiAgICAgICAgICAgIHNoaWVsZHM6MSxcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6M1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIGlkOidjb2xsb3N1cycsXG4gICAgICAgIG5hbWU6J1RoZSBjb2xsb3NzdXMnLFxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9jYXJkYm9hcmRtb3VudGFpbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvN0ZFOTgyQjItOUYxNC00QTU1LUI0OTQtREU4NjJBM0RGMkNCLmpwZycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgZ2xhc3M6MSxcbiAgICAgICAgICAgIGNsYXk6M1xuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2hpZWxkczoyLFxuICAgICAgICAgICAgdmljdG9yeVBvaW50czozXG4gICAgICAgIH1cbiAgICB9XG5dIGFzIGNvbnN0XG5cbmV4cG9ydCB0eXBlIFdvbmRlcklkID0gKHR5cGVvZiB3b25kZXJzRGF0YVtudW1iZXJdKVtcImlkXCJdXG5cblxuZXhwb3J0IGNvbnN0IHdvbmRlcnMgPSB3b25kZXJzRGF0YSBhcyByZWFkb25seSBXb25kZXJbXSIsICJpbXBvcnQgV29uZGVySW1hZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9Xb25kZXJJbWFnZVwiO1xuaW1wb3J0IHsgd29uZGVycyB9IGZyb20gXCJ+L2xvZ2ljL1dvbmRlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29uZGVycygpe1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC1jZW50ZXIgcC00XCI+V29uZGVyIGNhcmRzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7d29uZGVycy5tYXAodz0+PGRpdiBjbGFzc05hbWU9XCJwLTRcIj48V29uZGVySW1hZ2Ugd29uZGVyPXt3fS8+PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59IiwgImltcG9ydCB7IFdvbmRlciB9IGZyb20gXCJ+L2xvZ2ljL1dvbmRlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29uZGVySW1hZ2Uoe3dvbmRlcn06e3dvbmRlcjpXb25kZXJ9KXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmUgZGVjb3JhdGlvbi1zbGF0ZS02MDBcIj5cbiAgICAgICAgPGEgaHJlZj17YC93b25kZXJzLyR7d29uZGVyLmlkfWB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtY2VudGVyIHBiLTFcIj57d29uZGVyLm5hbWV9PC9oMj5cbiAgICAgICAgPGltZyBzcmM9e3dvbmRlci5pbWFnZX0gY2xhc3NOYW1lPVwidy02MCBtZDp3LTk2XCIvPlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG59IiwgImltcG9ydCB7IEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiPjggd29uZGVyczwvaDE+XG4gICAgICAgIDxwPkEgZ2FtZSB0aGF0IGlzIG5vdCBmYW1pbGlhciBhdCBhbGwgdG8geW91LjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvcm0gYWN0aW9uPVwiL3N0YXJ0XCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VlZFwiIHR5cGU9XCJudW1iZXJcIiBkZWZhdWx0VmFsdWU9XCIxMFwiLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiRW1wZXphclwiIGNsYXNzTmFtZT1cInAtMiBtLTIgYmctcmVkLTIwMCByb3VuZGVkLXNtXCIvPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0LCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCBTdWJtaXQgZnJvbSBcIn4vY29tcG9uZW50cy9TdWJtaXRcIjtcbmltcG9ydCBXb25kZXJJbWFnZSBmcm9tIFwifi9jb21wb25lbnRzL1dvbmRlckltYWdlXCI7XG5pbXBvcnQgeyB1c2VHYW1lU3RhdGUsIHVzZUdhbWVTdGF0ZVNlYXJjaFVybCB9IGZyb20gXCJ+L2hvb2tzXCI7XG5pbXBvcnQgeyBhZ2VPbmVEZWNrLCBhZ2VUaHJlZURlY2ssIGFnZVR3b0RlY2ssIGd1aWxkc0RlY2sgfSBmcm9tIFwifi9sb2dpYy9DYXJkc1wiO1xuaW1wb3J0IHsgY2FuQnVpbGQgfSBmcm9tIFwifi9sb2dpYy9HYW1lU3RhdGVcIjtcbmltcG9ydCB7IGludGlhbEZhY2VVcFN0YXRlcyB9IGZyb20gXCJ+L2xvZ2ljL2xheW91dHNcIjtcbmltcG9ydCB7IFdvbmRlciwgd29uZGVycyB9IGZyb20gXCJ+L2xvZ2ljL1dvbmRlcnNcIjtcblxuZnVuY3Rpb24gV29uZGVyQ2FyZCh7d29uZGVyfTp7d29uZGVyOldvbmRlcn0pe1xuICAgIGNvbnN0IGNob29zZVdvbmRlckxpbmsgPSB1c2VHYW1lU3RhdGVTZWFyY2hVcmwoXCIvY2hvb3NlV29uZGVyXCIpXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgPFdvbmRlckltYWdlIHdvbmRlcj17d29uZGVyfS8+XG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIiBhY3Rpb249e2Nob29zZVdvbmRlckxpbmt9IG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3dvbmRlci5pZH0gbmFtZT1cIndvbmRlclwiLz5cbiAgICAgICAgICAgIDxTdWJtaXQgdGV4dD1cIkNob29zZVwiLz5cbiAgICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxufVxuXG5mdW5jdGlvbiBDaG9zZW5Xb25kZXJzTGlzdEZvclBsYXllcih7cGxheWVyfTp7cGxheWVyOjF8Mn0pe1xuICAgIGNvbnN0IHt3b25kZXJzOnNlbGVjdGVkV29uZGVyc30gPSB1c2VHYW1lU3RhdGUoKTtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2B3LTEvMiBtLTQgcC0yIHJvdW5kZWQtc20gJHtwbGF5ZXI9PT0xPydiZy1ibHVlLTIwMCc6J2JnLWdyZWVuLTIwMCd9YH0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake3BsYXllcj09PTE/J3RleHQtbGVmdCc6J3RleHQtcmlnaHQnfSB0ZXh0LXhsIHB4LTFgfT5cbiAgICAgICAgICAgIFBsYXllciB7cGxheWVyfSB3b25kZXJzXG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4ICR7cGxheWVyPT09MT8nZmxleC1yb3cnOidmbGV4LXJvdy1yZXZlcnNlJ30gZmxleC13cmFwYH0+XG4gICAgICAgICAgICB7c2VsZWN0ZWRXb25kZXJzW3BsYXllcl1cbiAgICAgICAgICAgICAgICAubWFwKHdpZD0+PGltZyBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt3b25kZXJzLmZpbmQodz0+dy5pZD09PXdpZCk/LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTMyIG0tMVwiXG4gICAgICAgICAgICAvPil9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufVxuXG5mdW5jdGlvbiBDaG9zZW5Xb25kZXJzTGlzdCgpe1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxDaG9zZW5Xb25kZXJzTGlzdEZvclBsYXllciBwbGF5ZXI9ezF9Lz5cbiAgICAgICAgPENob3NlbldvbmRlcnNMaXN0Rm9yUGxheWVyIHBsYXllcj17Mn0vPlxuICAgIDwvZGl2PlxufVxuXG5mdW5jdGlvbiBXb25kZXJTZWxlY3Rpb24oKXtcbiAgICBjb25zdCB7IHdvbmRlcnNUb0Nob3NlRnJvbSB9ID0gdXNlR2FtZVN0YXRlKCk7XG4gICAgcmV0dXJuIDw+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBTZWxlY3RpbmcgdGhlIHdvbmRlcnNcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAge3dvbmRlcnNUb0Nob3NlRnJvbT8ubWFwKHdvbmRlcklkID0+IHdvbmRlcnMuZmluZCh3PT53LmlkPT09d29uZGVySWQpKS5tYXAod29uZGVyID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29uZGVyICYmIDxXb25kZXJDYXJkIHdvbmRlcj17d29uZGVyfSBrZXk9e3dvbmRlci5pZH0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufVxuXG5mdW5jdGlvbiBzaXplc0FuZEJlZ2lubmluZ3MoYWdlOjF8MnwzKXtcbiAgICBjb25zdCB6SW5kZXhlcz1bMSwyLDMsNCw1XVxuICAgIHN3aXRjaChhZ2Upe1xuICAgICAgICBjYXNlIDE6e1xuICAgICAgICAgICAgY29uc3Qgc2l6ZXM9WzIsMyw0LDUsNl1cbiAgICAgICAgICAgIGNvbnN0IGJlZ2dpbmluZ3M9WzUsNCwzLDIsMV1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICAgICAgYmVnZ2luaW5ncyxcbiAgICAgICAgICAgICAgICB6SW5kZXhlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgMjp7XG4gICAgICAgICAgICBjb25zdCBzaXplcz1bNiw1LDQsMywyXVxuICAgICAgICAgICAgY29uc3QgYmVnZ2luaW5ncz1bMSwyLDMsNCw1XVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgICBiZWdnaW5pbmdzLFxuICAgICAgICAgICAgICAgIHpJbmRleGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAzOntcbiAgICAgICAgICAgIGNvbnN0IHNpemVzPVsyLDMsNCwyLDQsMywyXVxuICAgICAgICAgICAgY29uc3QgYmVnZ2luaW5ncz1bMywyLDEsMiwxLDIsM11cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICAgICAgYmVnZ2luaW5ncyxcbiAgICAgICAgICAgICAgICB6SW5kZXhlczpbMSwyLDMsNCw1LDYsN11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuZnVuY3Rpb24gRGVja0xheW91dCh7YWdlLGNoaWxkcmVufTp7YWdlOjF8MnwzLGNoaWxkcmVuOlJlYWN0Tm9kZVtdfSl7XG4gICAgY29uc3QgeyBzaXplcywgYmVnZ2luaW5ncywgekluZGV4ZXMgfSA9IHNpemVzQW5kQmVnaW5uaW5ncyhhZ2UpO1xuICAgIGZ1bmN0aW9uIHN1bShhOm51bWJlcltdKXtcbiAgICAgICAgcmV0dXJuIGEucmVkdWNlKChhLGIpPT5hK2IsMClcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hpbGRyZW5JblJvdyhyb3c6bnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuLnNsaWNlKFxuICAgICAgICAgICAgc3VtKHNpemVzLnNsaWNlKDAscm93KSksIFxuICAgICAgICAgICAgc3VtKHNpemVzLnNsaWNlKDAscm93KSkrc2l6ZXNbcm93XVxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1yb3dzLTQgbXktNlwiPlxuICAgICAgICB7c2l6ZXMubWFwKChfLGkpPT48ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgLW15LTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVuSW5Sb3coaSkubWFwKChjaGlsZCxpbmRleCk9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRDb2x1bW5TdGFydDppbmRleD09PTA/YmVnZ2luaW5nc1tpXTooXG4gICAgICAgICAgICAgICAgICAgICAgICBpPT09MyAmJiBpbmRleD09PTEgJiYgYWdlPT09M1xuICAgICAgICAgICAgICAgICAgICApPzY6J2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6Y2hpbGQ/ekluZGV4ZXNbaV06MFxuICAgICAgICAgICAgICAgIH19PntjaGlsZH08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICAgIFxuICAgIDwvZGl2PlxufVxuXG5mdW5jdGlvbiBGYWNlRG93bkNhcmQoKXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbWQgc2hhZG93LWdyYXktNDAwIGgtMjQgYmctcGluay02MDAgcC0xIFwiLz5cbn1cbmZ1bmN0aW9uIENhcmQoe25hbWUsIGNhbkJlUGxheWVkfTp7bmFtZTpzdHJpbmcsIGNhbkJlUGxheWVkOmJvb2xlYW59KXtcbiAgICBjb25zdCBjYXJkID0gWy4uLmFnZU9uZURlY2ssIC4uLmFnZVR3b0RlY2ssIC4uLmFnZVRocmVlRGVjaywgLi4uZ3VpbGRzRGVja10uZmluZChjPT5jLm5hbWU9PT1uYW1lKVxuICAgIGludmFyaWFudChjYXJkLFwiQSBjYXJkIHdpdGggdGhpcyBuYW1lIG11cyBleGlzdFwiKVxuICAgIGNvbnN0IHsgdHlwZSB9ID0gY2FyZDtcbiAgICBjb25zdCBzZWxlY3RDYXJkTGluayA9IHVzZUdhbWVTdGF0ZVNlYXJjaFVybChcIi9idWlsZFwiKVxuICAgIGNvbnN0IGRpc2NhcmRDYXJkTGluayA9IHVzZUdhbWVTdGF0ZVNlYXJjaFVybChcIi9kaXNjYXJkXCIpXG4gICAgY29uc3Qgc3RhdGUgPSB1c2VHYW1lU3RhdGUoKTtcbiAgICBjb25zdCBjYW5CZUJ1aWx0ID0gY2FuQnVpbGQoc3RhdGUsc3RhdGUucGxheWVyLG5hbWUpXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGEgaHJlZj17YC9jYXJkcy8ke25hbWV9YH0gY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7e1xuICAgICAgICAgICAgICAgICdibHVlJzonYmctYmx1ZS0yMDAnLFxuICAgICAgICAgICAgICAgICdicm93bic6J2JnLWFtYmVyLTYwMCcsXG4gICAgICAgICAgICAgICAgJ3llbGxvdyc6J2JnLXllbGxvdy0zMDAnLFxuICAgICAgICAgICAgICAgICdncmF5JzonYmctZ3JheS00MDAnLFxuICAgICAgICAgICAgICAgICdncmVlbic6J2JnLWdyZWVuLTMwMCcsXG4gICAgICAgICAgICAgICAgJ3B1cnBsZSc6J2JnLXB1cnBsZS00MDAnLFxuICAgICAgICAgICAgICAgICdyZWQnOidiZy1yZWQtNDAwJ1xuICAgICAgICAgICAgfVt0eXBlXX0gdGV4dC14cyB0ZXh0LWNlbnRlciBoLTI0IHAtMSByb3VuZGVkLXNtICR7XG4gICAgICAgICAgICAgICAgY2FuQmVQbGF5ZWQ/J3NoYWRvdy0yeGwgc2hhZG93LWJsdWUtNTAwJzonc2hhZG93LW1kIHNoYWRvdy1ncmF5LTQwMCdcbiAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgICAge2NhbkJlUGxheWVkICYmIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBmbGV4LXJvdyBwdC00XCI+XG4gICAgICAgICAgICB7Y2FuQmVCdWlsdCAmJiA8Rm9ybSBhY3Rpb249e3NlbGVjdENhcmRMaW5rfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPFN1Ym1pdCB0ZXh0PVwiQnVpbGRcIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e25hbWV9IG5hbWU9XCJjYXJkXCIvPlxuICAgICAgICAgICAgPC9Gb3JtPn1cbiAgICAgICAgICAgIDxGb3JtIGFjdGlvbj17ZGlzY2FyZENhcmRMaW5rfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPFN1Ym1pdCB0ZXh0PVwiRGlzY2FyZFwiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17bmFtZX0gbmFtZT1cImNhcmRcIi8+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2Pn1cbiAgICA8L2Rpdj5cbn1cblxuZnVuY3Rpb24gR2FtZVBsYXkoKXtcbiAgICBjb25zdCB7IGFnZSwgZGVja3MsIGNhbkJlUGxheWVkIH0gPSB1c2VHYW1lU3RhdGUoKTtcbiAgICBpbnZhcmlhbnQoYWdlIT09bnVsbCxcImFnZSBzaG91bGQgbm90IGJlIG51bGxcIilcbiAgICBjb25zdCBkZWNrID0gZGVja3NbYWdlXTtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyXCI+Q2hvb3NlIGEgY2FyZDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHBiLTE2XCI+XG4gICAgICAgICAgICA8RGVja0xheW91dCBhZ2U9e2FnZX0+XG4gICAgICAgICAgICAgICAge2RlY2subWFwKChjYXJkTmFtZSwgaW5kZXgpPT4oXG4gICAgICAgICAgICAgICAgICAgIGNhcmROYW1lICYmIFxuICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2FuQmVQbGF5ZWRbaW5kZXhdIHx8IGludGlhbEZhY2VVcFN0YXRlc1thZ2VdW2luZGV4XSk/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBuYW1lPXtjYXJkTmFtZX0gY2FuQmVQbGF5ZWQ9e2NhbkJlUGxheWVkW2luZGV4XX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2VEb3duQ2FyZC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvRGVja0xheW91dD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSgpe1xuICAgIGNvbnN0IHsgd29uZGVyc1RvQ2hvc2VGcm9tIH0gPSB1c2VHYW1lU3RhdGUoKTtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAge1xuICAgICAgICAgICAgKHdvbmRlcnNUb0Nob3NlRnJvbT09PW51bGwpP1xuICAgICAgICAgICAgPEdhbWVQbGF5Lz5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIDxXb25kZXJTZWxlY3Rpb24vPlxuICAgICAgICB9XG4gICAgICAgIDxDaG9zZW5Xb25kZXJzTGlzdC8+XG4gICAgPC9kaXY+XG59IiwgImltcG9ydCB7IHVzZUdhbWVTdGF0ZSB9IGZyb20gXCJ+L2hvb2tzXCJcblxuaW50ZXJmYWNlIFN1Ym1pdFByb3Bze1xuICAgIHRleHQ6c3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pdCh7dGV4dH06U3VibWl0UHJvcHMpe1xuICAgIGNvbnN0IHsgcGxheWVyIH0gPSB1c2VHYW1lU3RhdGUoKTtcbiAgICByZXR1cm4gPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17dGV4dH0gY2xhc3NOYW1lPXtcbiAgICAgICAgYHAtMiBtLTIgYmctcmVkLTIwMCByb3VuZGVkLXNtICR7cGxheWVyPT09MT9cImhvdmVyOmJnLWJsdWUtMjAwXCI6XCJob3ZlcjpiZy1ncmVlbi0yMDBcIn0gdHJhbnNpdGlvbi1jb2xvcnNgXG4gICAgfS8+XG59IiwgImltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL2xvZ2ljL0dhbWVTdGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlVGV4dCgpOnN0cmluZyB7XG4gICAgbGV0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gICAgY29uc3QgcyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJzdGF0ZVwiKVxuICAgIGludmFyaWFudChzIT09bnVsbCxcIlRoZSBzdGF0ZSBtdXN0IGJlIGluY2x1ZGVkIGluIHRoZSB1cmwhXCIpXG4gICAgcmV0dXJuIHM7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKCk6R2FtZVN0YXRle1xuICAgIGNvbnN0IHMgPSB1c2VHYW1lU3RhdGVUZXh0KCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uocyk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlU2VhcmNoVXJsKHVybDpzdHJpbmcpOnN0cmluZ3tcbiAgICBjb25zdCBzID0gdXNlR2FtZVN0YXRlVGV4dCgpO1xuICAgIHJldHVybiBgJHt1cmx9P3N0YXRlPSR7c31gXG59XG4iLCAiaW1wb3J0IHsgQWdlT25lIH0gZnJvbSBcIi4vQWdlT25lXCI7XG5pbXBvcnQgeyBBZ2VUd28gfSBmcm9tIFwiLi9BZ2VUd29cIjtcbmltcG9ydCB7IEFnZVRocmVlIH0gZnJvbSBcIi4vQWdlVGhyZWVcIjtcbmltcG9ydCB7IEd1aWxkcyB9IGZyb20gXCIuL0d1aWxkc1wiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL0NhcmRUeXBlXCI7XG5leHBvcnQgdHlwZSB7IENhcmROYW1lLCBhc3NlcnRJc0NhcmROYW1lIH0gZnJvbSBcIi4vQ2FyZE5hbWVUeXBlXCI7XG5cbmV4cG9ydCBjb25zdCBhZ2VPbmVEZWNrID0gQWdlT25lIGFzIHJlYWRvbmx5IENhcmRbXTtcbmV4cG9ydCBjb25zdCBhZ2VUd29EZWNrID0gQWdlVHdvIGFzIHJlYWRvbmx5IENhcmRbXTtcbmV4cG9ydCBjb25zdCBhZ2VUaHJlZURlY2sgPSBBZ2VUaHJlZSBhcyByZWFkb25seSBDYXJkW107XG5leHBvcnQgY29uc3QgZ3VpbGRzRGVjayA9IEd1aWxkcyBhcyByZWFkb25seSBDYXJkW107XG5cbmV4cG9ydCBjb25zdCBhbGxDYXJkcyA9IFtcbiAgICAuLi5hZ2VPbmVEZWNrLFxuICAgIC4uLmFnZVR3b0RlY2ssXG4gICAgLi4uYWdlVGhyZWVEZWNrLFxuICAgIC4uLmd1aWxkc0RlY2ssXG5dIGFzIHJlYWRvbmx5IENhcmRbXSIsICJleHBvcnQgY29uc3QgQWdlT25lID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTonTHVtYmVyIFlhcmQnLFxuICAgICAgICB0eXBlOidicm93bicsXG4gICAgICAgIGNvc3Q6e30sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB3b29kOjFcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidMb2dnaW5nIENhbXAnLFxuICAgICAgICB0eXBlOidicm93bicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY29pbjoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB3b29kOjFcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidDbGF5IHBvb2wnLFxuICAgICAgICB0eXBlOidicm93bicsXG4gICAgICAgIGNvc3Q6e30sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBjbGF5OjFcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidDbGF5IFBpdCcsXG4gICAgICAgIHR5cGU6J2Jyb3duJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjb2luOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIGNsYXk6MVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1F1YXJyeScsXG4gICAgICAgIHR5cGU6J2Jyb3duJyxcbiAgICAgICAgY29zdDp7fSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHN0b25lOjFcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidTdG9uZSBwaXQnLFxuICAgICAgICB0eXBlOidicm93bicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY29pbjoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzdG9uZToxXG4gICAgICAgIH0sXG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0dsYXNzd29ya3MnLFxuICAgICAgICB0eXBlOidncmF5JyxcbiAgICAgICAgY29zdDp7IGNvaW46MSB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgZ2xhc3M6MVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1ByZXNzJyxcbiAgICAgICAgdHlwZTonZ3JheScsXG4gICAgICAgIGNvc3Q6eyBjb2luOiAxIH0sXG4gICAgICAgIGVmZmVjdDp7IHBhcHlydXM6MX1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonR3VhcmQgVG93ZXInLFxuICAgICAgICB0eXBlOidyZWQnLFxuICAgICAgICBjb3N0Ont9LFxuICAgICAgICBlZmZlY3Q6eyBzaGllbGRzOjEgfSxcbiAgICB9LHtcbiAgICAgICAgbmFtZTonV29ya3Nob3AnLFxuICAgICAgICB0eXBlOidncmVlbicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgcGFweXJ1czoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjEsXG4gICAgICAgICAgICBzY2llbmNlOidBJ1xuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOidBcG90aGVjYXJ5JyxcbiAgICAgICAgdHlwZTonZ3JlZW4nLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHBhcHlydXM6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2NpZW5jZTonTycsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjFcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidTdG9uZSBSZXNlcnZlJyxcbiAgICAgICAgdHlwZToneWVsbG93JyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjb2luOjNcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHRyYWRlT25lOlsnc3RvbmUnXVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0NsYXkgUmVzZXJ2ZScsXG4gICAgICAgIHR5cGU6J3llbGxvdycsXG4gICAgICAgIGNvc3Q6eyBjb2luOiAzIH0sXG4gICAgICAgIGVmZmVjdDp7IHRyYWRlT25lOlsnY2xheSddIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonV29vZCBSZXNlcnZlJyxcbiAgICAgICAgdHlwZToneWVsbG93JyxcbiAgICAgICAgY29zdDp7IGNvaW46MyB9LFxuICAgICAgICBlZmZlY3Q6eyB0cmFkZU9uZTpbJ3dvb2QnXSB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1N0YWJsZScsXG4gICAgICAgIHR5cGU6J3JlZCcsXG4gICAgICAgIGNvc3Q6eyB3b29kOjEgfSxcbiAgICAgICAgZWZmZWN0OnsgXG4gICAgICAgICAgICBzaGllbGRzOjEsXG4gICAgICAgICAgICBzeW1ib2w6J2hvcnNlJ1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0dhcnJpc29uJyxcbiAgICAgICAgdHlwZToncmVkJyxcbiAgICAgICAgY29zdDp7Y2xheToxfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHNoaWVsZHM6MSxcbiAgICAgICAgICAgIHN5bWJvbDonc3dvcmQnXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonUGFsaXNhZGUnLFxuICAgICAgICB0eXBlOidyZWQnLFxuICAgICAgICBjb3N0Ontjb2luOjJ9LFxuICAgICAgICBlZmZlY3Q6e3NoaWVsZHM6MX1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonU2NyaXB0b3JpdW0nLFxuICAgICAgICB0eXBlOidncmVlbicsXG4gICAgICAgIGNvc3Q6e2NvaW46Mn0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzeW1ib2w6J2Jvb2snLFxuICAgICAgICAgICAgc2NpZW5jZToncGVuY2lsJ1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1BoYXJtYWNpc3QnLFxuICAgICAgICB0eXBlOidncmVlbicsXG4gICAgICAgIGNvc3Q6e2NvaW46Mn0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzeW1ib2w6J2NvZycsXG4gICAgICAgICAgICBzY2llbmNlOidzbWFzaGVyJ1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1RoZWF0ZXInLFxuICAgICAgICBjb3N0Ont9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czozLFxuICAgICAgICAgICAgc3ltYm9sOidtYXNrJ1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOidibHVlJ1xuICAgIH0se1xuICAgICAgICBuYW1lOidBbHRhcicsXG4gICAgICAgIGNvc3Q6e30sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjMsXG4gICAgICAgICAgICBzeW1ib2w6J21vb24nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6J2JsdWUnXG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0JhdGhzJyxcbiAgICAgICAgdHlwZTonYmx1ZScsXG4gICAgICAgIGNvc3Q6e3N0b25lOjF9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czozLFxuICAgICAgICAgICAgc3ltYm9sOid3YXRlcidcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidUYXZlcm4nLFxuICAgICAgICBjb3N0Ont9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgY29pbjo0XG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6J3llbGxvdydcbiAgICB9XG5dIGFzIGNvbnN0O1xuIiwgImV4cG9ydCBjb25zdCBBZ2VUd28gPSBbXG4gICAge1xuICAgICAgICBuYW1lOidTYXdtaWxsJyxcbiAgICAgICAgdHlwZTonYnJvd24nLFxuICAgICAgICBjb3N0Ontjb2luOjJ9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgd29vZDoyXG4gICAgICAgIH0sXG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0JyaWNreWFyZCcsXG4gICAgICAgIHR5cGU6J2Jyb3duJyxcbiAgICAgICAgY29zdDp7Y29pbjoyfSxcbiAgICAgICAgZWZmZWN0OntjbGF5OjJ9LFxuICAgIH0se1xuICAgICAgICBuYW1lOidTaGVsZiBRdWFycnknLFxuICAgICAgICB0eXBlOidicm93bicsXG4gICAgICAgIGNvc3Q6e2NvaW46Mn0sXG4gICAgICAgIGVmZmVjdDp7c3RvbmU6Mn1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonR2xhc3MtQmxvd2VyJyxcbiAgICAgICAgdHlwZTonZ3JheScsXG4gICAgICAgIGNvc3Q6e30sXG4gICAgICAgIGVmZmVjdDp7Z2xhc3M6MX1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonRHJ5aW5nIHJvb20nLFxuICAgICAgICB0eXBlOidncmF5JyxcbiAgICAgICAgY29zdDp7fSxcbiAgICAgICAgZWZmZWN0OntwYXB5cnVzOjF9LFxuICAgIH0se1xuICAgICAgICBuYW1lOidXYWxscycsXG4gICAgICAgIHR5cGU6J3JlZCcsXG4gICAgICAgIGNvc3Q6e3N0b25lOjJ9LFxuICAgICAgICBlZmZlY3Q6e3NoaWVsZHM6Mn1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonRm9ydW0nLFxuICAgICAgICB0eXBlOid5ZWxsb3cnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNvaW46MyxcbiAgICAgICAgICAgIGNsYXk6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgcHJvZHVjZU9uZU9mOlsnZ2xhc3MnLFwicGFweXJ1c1wiXVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0NhcmF2YW5zZXJ5JyxcbiAgICAgICAgdHlwZToneWVsbG93JyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjb2luOjIsXG4gICAgICAgICAgICBnbGFzczoxLFxuICAgICAgICAgICAgcGFweXJ1czoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBwcm9kdWNlT25lT2Y6WydjbGF5Jywnd29vZCcsJ3N0b25lJ11cbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidDdXN0b21zIEhvdXNlJyxcbiAgICAgICAgdHlwZToneWVsbG93JyxcbiAgICAgICAgY29zdDp7Y29pbjo0fSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHRyYWRlT25lOlsncGFweXJ1cycsJ2dsYXNzJ11cbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidUcmlidW5hbCcsXG4gICAgICAgIHR5cGU6J2JsdWUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHdvb2Q6MixcbiAgICAgICAgICAgIGdsYXNzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6NVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0hvcnNlIEJyZWVkZXJzJyxcbiAgICAgICAgdHlwZToncmVkJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICB3b29kOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHNoaWVsZHM6MVxuICAgICAgICB9LFxuICAgICAgICB1bmxvY2tlZEJ5Oidob3JzZSdcbiAgICB9LHtcbiAgICAgICAgbmFtZTonQmFycmFja3MnLFxuICAgICAgICB0eXBlOidyZWQnLFxuICAgICAgICBjb3N0OnsgY29pbjozIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzaGllbGRzOjFcbiAgICAgICAgfSxcbiAgICAgICAgdW5sb2NrZWRCeTonc3dvcmQnXG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0FyY2hlcnkgUmFuZ2UnLFxuICAgICAgICB0eXBlOidyZWQnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICB3b29kOjEsXG4gICAgICAgICAgICBwYXB5cnVzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHNoaWVsZHM6MixcbiAgICAgICAgICAgIHN5bWJvbDondGFyZ2V0J1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1BhcmFkZSBHcm91bmQnLFxuICAgICAgICB0eXBlOidyZWQnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNsYXk6MixcbiAgICAgICAgICAgIGdsYXNzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHNoaWVsZHM6MixcbiAgICAgICAgICAgIHN5bWJvbDonc29sZGllcidcbiAgICAgICAgfSxcbiAgICB9LHtcbiAgICAgICAgbmFtZTonTGlicmFyeScsXG4gICAgICAgIHR5cGU6J2dyZWVuJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBzdG9uZToxLFxuICAgICAgICAgICAgd29vZDoxLFxuICAgICAgICAgICAgZ2xhc3M6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2NpZW5jZToncGVuY2lsJyxcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MlxuICAgICAgICB9LFxuICAgICAgICB1bmxvY2tlZEJ5Oidib29rJ1xuICAgIH0se1xuICAgICAgICBuYW1lOidEaXNwZW5zYXJ5JyxcbiAgICAgICAgdHlwZTonZ3JlZW4nLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNsYXk6MixcbiAgICAgICAgICAgIHN0b25lOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHNjaWVuY2U6J3NtYXNoZXInLFxuICAgICAgICAgICAgdmljdG9yeVBvaW50czoyXG4gICAgICAgIH0sXG4gICAgICAgIHVubG9ja2VkQnk6J2NvZydcbiAgICB9LHtcbiAgICAgICAgbmFtZTonU2Nob29sJyxcbiAgICAgICAgdHlwZTonZ3JlZW4nLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHdvb2Q6MSxcbiAgICAgICAgICAgIHBhcHlydXM6MlxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2NpZW5jZTonTycsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjEsXG4gICAgICAgICAgICBzeW1ib2w6J211c2ljJ1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0xhYm9yYXRvcnknLFxuICAgICAgICB0eXBlOidncmVlbicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgd29vZDoxLFxuICAgICAgICAgICAgZ2xhc3M6MlxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2NpZW5jZTonQScsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjEsXG4gICAgICAgICAgICBzeW1ib2w6J2xhbXAnXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonU3RhdHVlJyxcbiAgICAgICAgdHlwZTonYmx1ZScsXG4gICAgICAgIGNvc3Q6eyBjbGF5OjIgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6NCxcbiAgICAgICAgICAgIHN5bWJvbDonY29sdW1uJ1xuICAgICAgICB9LFxuICAgICAgICB1bmxvY2tlZEJ5OidtYXNrJ1xuICAgIH0se1xuICAgICAgICBuYW1lOidUZW1wbGUnLFxuICAgICAgICB0eXBlOidibHVlJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICB3b29kOjEsXG4gICAgICAgICAgICBwYXB5cnVzOjFcbiAgICAgICAgfSxcbiAgICAgICAgdW5sb2NrZWRCeTonbW9vbicsXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjQsXG4gICAgICAgICAgICBzeW1ib2w6J3N1bidcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidBcXVlZHVjdCcsXG4gICAgICAgIHR5cGU6J2JsdWUnLFxuICAgICAgICB1bmxvY2tlZEJ5Oid3YXRlcicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgc3RvbmU6M1xuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czo1XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonUm9zdHJ1bScsXG4gICAgICAgIHR5cGU6J2JsdWUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICB3b29kOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6NCxcbiAgICAgICAgICAgIHN5bWJvbDondGVtcGxlJ1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0JyZXdlcnknLFxuICAgICAgICB0eXBlOid5ZWxsb3cnLFxuICAgICAgICBjb3N0Ont9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgY29pbjo2LFxuICAgICAgICAgICAgc3ltYm9sOidiYXJyZWwnXG4gICAgICAgIH1cbiAgICB9XG5dIGFzIGNvbnN0XG4iLCAiZXhwb3J0IGNvbnN0IEFnZVRocmVlPVtcbiAgICB7XG4gICAgICAgIG5hbWU6J0Fyc2VuYWwnLFxuICAgICAgICB0eXBlOidyZWQnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNsYXk6MyxcbiAgICAgICAgICAgIHdvb2Q6MlxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6eyBzaGllbGRzOjMgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidDb3VydGhvdXNlJyxcbiAgICAgICAgdHlwZToncmVkJyxcbiAgICAgICAgY29zdDp7Y29pbjo4fSxcbiAgICAgICAgZWZmZWN0OntzaGllbGRzOjN9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0FjYWRlbXknLFxuICAgICAgICB0eXBlOidncmVlbicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgc3RvbmU6MSxcbiAgICAgICAgICAgIHdvb2Q6MSxcbiAgICAgICAgICAgIGdsYXNzOjJcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHNjaWVuY2U6J0knLFxuICAgICAgICAgICAgdmljdG9yeVBvaW50czozXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonU3R1ZHknLFxuICAgICAgICB0eXBlOidibHVlJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICB3b29kOjIsXG4gICAgICAgICAgICBnbGFzczoxLFxuICAgICAgICAgICAgcGFweXJ1czoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzY2llbmNlOidJJyxcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6M1xuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0NoYW1iZXIgb2YgY29tbWVyY2UnLFxuICAgICAgICB0eXBlOid5ZWxsb3cnLFxuICAgICAgICBjb3N0OnsgcGFweXJ1czoyIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjMsXG4gICAgICAgICAgICBjb21wbGV4OntcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpbJ2dyYXknXSxcbiAgICAgICAgICAgICAgICBjb2luc05vdzozLFxuICAgICAgICAgICAgICAgIG92ZXI6J21lJyxcbiAgICAgICAgICAgICAgICB2aWN0b3J5UG9pbnRzTGF0ZXI6MFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1BvcnQnLFxuICAgICAgICB0eXBlOid5ZWxsb3cnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHdvb2Q6MSxcbiAgICAgICAgICAgIGdsYXNzOjEsXG4gICAgICAgICAgICBwYXB5cnVzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MyxcbiAgICAgICAgICAgIGNvbXBsZXg6e1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlsnYnJvd24nXSxcbiAgICAgICAgICAgICAgICBjb2luc05vdzoyLFxuICAgICAgICAgICAgICAgIG92ZXI6J21lJyxcbiAgICAgICAgICAgICAgICB2aWN0b3J5UG9pbnRzTGF0ZXI6M1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0FybW9yeScsXG4gICAgICAgIHR5cGU6J3llbGxvdycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgc3RvbmU6MixcbiAgICAgICAgICAgIGdsYXNzOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MyxcbiAgICAgICAgICAgIGNvbXBsZXg6e1xuICAgICAgICAgICAgICAgIGNvaW5zTm93OjEsXG4gICAgICAgICAgICAgICAgb3ZlcjonbWUnLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlsncmVkJ10sXG4gICAgICAgICAgICAgICAgdmljdG9yeVBvaW50c0xhdGVyOjBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidQYWxhY2UnLFxuICAgICAgICB0eXBlOidibHVlJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICBzdG9uZToxLFxuICAgICAgICAgICAgd29vZDoxLFxuICAgICAgICAgICAgZ2xhc3M6MlxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czo3XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonVG93biBIYWxsJyxcbiAgICAgICAgdHlwZTonYmx1ZScsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgc3RvbmU6MyxcbiAgICAgICAgICAgIHdvb2Q6MlxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgdmljdG9yeVBvaW50czo3XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonT2JlbGlzaycsXG4gICAgICAgIHR5cGU6J2JsdWUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHN0b25lOjIsXG4gICAgICAgICAgICBnbGFzczoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjVcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidGb3J0aWZpY2F0aW9ucycsXG4gICAgICAgIHR5cGU6J3JlZCcsXG4gICAgICAgIHVubG9ja2VkQnk6J3Rvd2VyJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBzdG9uZToyLFxuICAgICAgICAgICAgY2xheToxLFxuICAgICAgICAgICAgcGFweXJ1czoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzaGllbGRzOjJcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidTaWVnZSBXb3Jrc2hvcCcsXG4gICAgICAgIHVubG9ja2VkQnk6J3RhcmdldCcsXG4gICAgICAgIHR5cGU6J3JlZCcsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgd29vZDozLFxuICAgICAgICAgICAgZ2xhc3M6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2hpZWxkczoyXG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonQ2lyY3VzJyxcbiAgICAgICAgdHlwZToncmVkJyxcbiAgICAgICAgdW5sb2NrZWRCeTonc29sZGllcicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY2xheToyLCBzdG9uZToyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzaGllbGRzOjJcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidVbml2ZXJzaXR5JyxcbiAgICAgICAgdHlwZTonZ3JlZW4nLFxuICAgICAgICB1bmxvY2tlZEJ5OidtdXNpYycsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY2xheToxLFxuICAgICAgICAgICAgZ2xhc3M6MSxcbiAgICAgICAgICAgIHBhcHlydXM6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgc2NpZW5jZTonUScsXG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjJcbiAgICAgICAgfSxcbiAgICB9LHtcbiAgICAgICAgbmFtZTonT2JzZXJ2YXRvcnknLFxuICAgICAgICB1bmxvY2tlZEJ5OidsYW1wJyxcbiAgICAgICAgdHlwZTonZ3JlZW4nLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICBwYXB5cnVzOjIsXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBzY2llbmNlOidPJyxcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MlxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J0dhcmRlbnMnLFxuICAgICAgICB1bmxvY2tlZEJ5Oidjb2x1bW4nLFxuICAgICAgICB0eXBlOidibHVlJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjbGF5OjIsXG4gICAgICAgICAgICB3b29kOjJcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6NlxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1BhbnRoZW9uJyxcbiAgICAgICAgdHlwZTonYmx1ZScsXG4gICAgICAgIHVubG9ja2VkQnk6J3N1bicsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY2xheToxLFxuICAgICAgICAgICAgd29vZDoxLFxuICAgICAgICAgICAgcGFweXJ1czoyXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjZcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidTZW5hdGUnLFxuICAgICAgICB0eXBlOidibHVlJyxcbiAgICAgICAgdW5sb2NrZWRCeTondGVtcGxlJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjbGF5OjIsXG4gICAgICAgICAgICBzdG9uZToxLFxuICAgICAgICAgICAgcGFweXJ1czoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjVcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidMaWdodGhvdXNlJyxcbiAgICAgICAgdHlwZToneWVsbG93JyxcbiAgICAgICAgdW5sb2NrZWRCeTonamFyJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBjbGF5OjIsXG4gICAgICAgICAgICBnbGFzczoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICB2aWN0b3J5UG9pbnRzOjMsXG4gICAgICAgICAgICBjb21wbGV4OntcbiAgICAgICAgICAgICAgICBjb2luc05vdzoxLFxuICAgICAgICAgICAgICAgIG92ZXI6J21lJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpbJ3llbGxvdyddLFxuICAgICAgICAgICAgICAgIHZpY3RvcnlQb2ludHNMYXRlcjowXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonQXJlbmEnLFxuICAgICAgICB0eXBlOid5ZWxsb3cnLFxuICAgICAgICB1bmxvY2tlZEJ5OidiYXJyZWwnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNsYXk6MSxcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICB3b29kOjFcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OntcbiAgICAgICAgICAgIHZpY3RvcnlQb2ludHM6MyxcbiAgICAgICAgICAgIGNvbXBsZXg6e1xuICAgICAgICAgICAgICAgIGNvaW5zTm93OjIsXG4gICAgICAgICAgICAgICAgb3ZlcjonbWUnLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlsnd29uZGVycyddLFxuICAgICAgICAgICAgICAgIHZpY3RvcnlQb2ludHNMYXRlcjowXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5dXG5cbiIsICJleHBvcnQgY29uc3QgR3VpbGRzPVtcbiAgICB7XG4gICAgICAgIG5hbWU6J01lcmNoYW50cyBHdWlsZCcsXG4gICAgICAgIHR5cGU6J3B1cnBsZScsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgY2xheToxLFxuICAgICAgICAgICAgd29vZDoxLFxuICAgICAgICAgICAgZ2xhc3M6MSxcbiAgICAgICAgICAgIHBhcHlydXM6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgY29tcGxleDp7XG4gICAgICAgICAgICAgICAgY29pbnNOb3c6MSxcbiAgICAgICAgICAgICAgICBvdmVyOidwbGF5ZXJXaXRoTW9zdCcsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6Wyd5ZWxsb3cnXSxcbiAgICAgICAgICAgICAgICB2aWN0b3J5UG9pbnRzTGF0ZXI6MVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1NoaXBvd25lcnMgR3VpbGQnLFxuICAgICAgICB0eXBlOidwdXJwbGUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNsYXk6MSxcbiAgICAgICAgICAgIHN0b25lOjEsXG4gICAgICAgICAgICBnbGFzczoxLFxuICAgICAgICAgICAgcGFweXJ1czoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBjb21wbGV4OntcbiAgICAgICAgICAgICAgICBjb2luc05vdzoxLFxuICAgICAgICAgICAgICAgIG92ZXI6J3BsYXllcldpdGhNb3N0JyxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpbJ2Jyb3duJywnZ3JheSddLFxuICAgICAgICAgICAgICAgIHZpY3RvcnlQb2ludHNMYXRlcjoxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonQnVpbGRlcnMgR3VpbGQnLFxuICAgICAgICB0eXBlOidwdXJwbGUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIHN0b25lOjIsXG4gICAgICAgICAgICBjbGF5OjEsXG4gICAgICAgICAgICB3b29kOjEsXG4gICAgICAgICAgICBnbGFzczoxLFxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgY29tcGxleDp7XG4gICAgICAgICAgICAgICAgb3ZlcjoncGxheWVyV2l0aE1vc3QnLFxuICAgICAgICAgICAgICAgIGNvaW5zTm93OjAsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6Wyd3b25kZXJzJ10sXG4gICAgICAgICAgICAgICAgdmljdG9yeVBvaW50c0xhdGVyOjJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICBuYW1lOidNYWdpc3RyYXRlcyBHdWlsZCcsXG4gICAgICAgIHR5cGU6J3B1cnBsZScsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgd29vZDoyLFxuICAgICAgICAgICAgY2xheToxLFxuICAgICAgICAgICAgcGFweXJ1czoxXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDp7XG4gICAgICAgICAgICBjb21wbGV4OntcbiAgICAgICAgICAgICAgICBjb2luc05vdzoxLFxuICAgICAgICAgICAgICAgIG92ZXI6J3BsYXllcldpdGhNb3N0JyxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpbJ2JsdWUnXSxcbiAgICAgICAgICAgICAgICB2aWN0b3J5UG9pbnRzTGF0ZXI6MVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIG5hbWU6J1NjaWVudGlzdHMgR3VpbGQnLFxuICAgICAgICB0eXBlOidwdXJwbGUnLFxuICAgICAgICBjb3N0OntcbiAgICAgICAgICAgIGNsYXk6MixcbiAgICAgICAgICAgIHdvb2Q6MlxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgY29tcGxleDp7XG4gICAgICAgICAgICAgICAgY29pbnNOb3c6MSxcbiAgICAgICAgICAgICAgICBvdmVyOidwbGF5ZXJXaXRoTW9zdCcsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6WydncmVlbiddLFxuICAgICAgICAgICAgICAgIHZpY3RvcnlQb2ludHNMYXRlcjoxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonTW9uZXlsZW5kZXJzIEd1aWxkJyxcbiAgICAgICAgdHlwZToncHVycGxlJyxcbiAgICAgICAgY29zdDp7XG4gICAgICAgICAgICBzdG9uZToyLFxuICAgICAgICAgICAgd29vZDoyLFxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgY29tcGxleDp7XG4gICAgICAgICAgICAgICAgdmljdG9yeVBvaW50c0xhdGVyOjEsXG4gICAgICAgICAgICAgICAgY29pbnNOb3c6MCxcbiAgICAgICAgICAgICAgICBvdmVyOidwbGF5ZXJXaXRoTW9zdCcsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6W1wiM2NvaW5zXCJdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LHtcbiAgICAgICAgbmFtZTonVGFjdGljaWFucyBHdWlsZCcsXG4gICAgICAgIHR5cGU6J3B1cnBsZScsXG4gICAgICAgIGNvc3Q6e1xuICAgICAgICAgICAgc3RvbmU6MixcbiAgICAgICAgICAgIGNsYXk6MSxcbiAgICAgICAgICAgIHBhcHlydXM6MVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6e1xuICAgICAgICAgICAgY29tcGxleDp7XG4gICAgICAgICAgICAgICAgY29pbnNOb3c6MSxcbiAgICAgICAgICAgICAgICBvdmVyOidwbGF5ZXJXaXRoTW9zdCcsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6WydyZWQnXSxcbiAgICAgICAgICAgICAgICB2aWN0b3J5UG9pbnRzTGF0ZXI6MVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXSBhcyBjb25zdCIsICJpbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiXG5pbXBvcnQgeyBhZ2VPbmVEZWNrLCBhZ2VUaHJlZURlY2ssIGFnZVR3b0RlY2ssIGFsbENhcmRzLCBDYXJkTmFtZSwgZ3VpbGRzRGVjayB9IGZyb20gXCIuL0NhcmRzXCJcbmltcG9ydCB7IGludGlhbENhbkJlUGxheWVkU3RhdGVzLCBsYXlvdXRzIH0gZnJvbSBcIi4vbGF5b3V0c1wiXG5pbXBvcnQgeyBSZXNvdXJjZSwgcmVzb3VyY2VzIGFzIHJlc291cmNlc0xpc3QgfSBmcm9tIFwiLi9SZXNvdXJjZVwiXG5pbXBvcnQgeyBleHRyYWN0RWZmZWN0cywgUHJvZHVjdGlvbkVmZmVjdCB9IGZyb20gXCIuL1NpbmdsZUVmZmVjdFwiXG5pbXBvcnQgeyBXb25kZXJJZCwgd29uZGVycyB9IGZyb20gXCIuL1dvbmRlcnNcIlxuXG50eXBlIFBsYXllciA9IDF8MlxudHlwZSBBZ2U9MXwyfDNcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZVN0YXRle1xuICAgIHJhbmRvbVNlZWQ6bnVtYmVyXG4gICAgd29uZGVyczpSZWNvcmQ8UGxheWVyLFdvbmRlcklkW10+LFxuICAgIHdvbmRlcnNUb0Nob3NlRnJvbTpXb25kZXJJZFtdfG51bGwsXG4gICAgcGxheWVyOlBsYXllcixcbiAgICBhZ2U6QWdlfG51bGwsXG4gICAgZGVja3M6UmVjb3JkPEFnZSwoQ2FyZE5hbWV8bnVsbClbXT4sXG4gICAgY2FuQmVQbGF5ZWQ6Ym9vbGVhbltdLFxuICAgIHBsYXllcnNTdGF0ZTpSZWNvcmQ8UGxheWVyLHtidWlsZGluZ3M6Q2FyZE5hbWVbXSxjb2luczpudW1iZXJ9PlxufVxuZXhwb3J0IHR5cGUgR2FtZUFjdGlvbj17XG4gICAgdHlwZTonc3RhcnQnLFxuICAgIHNlZWQ6bnVtYmVyXG59fHtcbiAgICB0eXBlOidjaG9vc2VXb25kZXInLFxuICAgIHdvbmRlcjpXb25kZXJJZCBcbn18e1xuICAgIHR5cGU6J2J1aWxkJyxcbiAgICBjYXJkOkNhcmROYW1lXG59fHtcbiAgICB0eXBlOidkaXNjYXJkJyxcbiAgICBjYXJkOkNhcmROYW1lXG59XG5cbmZ1bmN0aW9uIHJhbmRvbWl6ZXJzPFQ+KHJhbmRvbVNlZWQ6bnVtYmVyKXtcbiAgICBmdW5jdGlvbiBzYW1wbGU8VD4oYXJyYXk6IHJlYWRvbmx5IFRbXSxxdWFudGl0eTpudW1iZXIpOlRbXXtcbiAgICAgICAgY29uc3QgY29weT1bLi4uYXJyYXldXG4gICAgICAgIGNvbnN0IHJldDpUW109W11cbiAgICAgICAgbmV3IEFycmF5KHF1YW50aXR5KS5maWxsKDApLmZvckVhY2goKF8saW5kZXgpPT57XG4gICAgICAgICAgICBjb25zdCByYW5kb21JbmRleD0ocmFuZG9tU2VlZCppbmRleCklY29weS5sZW5ndGhcbiAgICAgICAgICAgIHJldC5wdXNoKGNvcHlbcmFuZG9tSW5kZXhdKVxuICAgICAgICAgICAgY29weS5zcGxpY2UocmFuZG9tSW5kZXgsMSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNodWZmbGU8VD4oYTpyZWFkb25seSBUW10sYjogcmVhZG9ubHkgVFtdKTpUW117XG4gICAgICAgIHJldHVybiBzYW1wbGUoWy4uLmEsLi4uYl0sYS5sZW5ndGgrYi5sZW5ndGgpXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNhbXBsZVJlbW92ZTxUPihhcnJheTpyZWFkb25seSBUW10scmVtb3ZlUXVhbnRpdHk6bnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIHNhbXBsZShhcnJheSxhcnJheS5sZW5ndGgtcmVtb3ZlUXVhbnRpdHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2FtcGxlLHNodWZmbGUsc2FtcGxlUmVtb3ZlXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIG90aGVyUGxheWVyKHA6UGxheWVyKXtcbiAgICBpZihwPT09MSl7XG4gICAgICAgIHJldHVybiAyO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5jb25zdCB3b25kZXJJZHMgPSB3b25kZXJzLm1hcCh3PT53LmlkKVxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydElzV29uZGVySWQoc3RyOnN0cmluZyk6YXNzZXJ0cyBzdHIgaXMgV29uZGVySWR7XG4gICAgaWYoISh3b25kZXJJZHMgYXMgc3RyaW5nW10pLmluY2x1ZGVzKHN0cikpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub29vb1wiKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TmV4dEFnZShhZ2U6QWdlKXtcbiAgICBzd2l0Y2goYWdlKXtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gMjtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gMztcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuZnVuY3Rpb24gc3RhdGVBZnRlclBpY2tpbmdVcENhcmQoc3RhdGU6R2FtZVN0YXRlLGNhcmQ6Q2FyZE5hbWUpOkdhbWVTdGF0ZXtcbiAgICBpbnZhcmlhbnQoc3RhdGUuYWdlIT09bnVsbCxcIkFnZSBtdXN0IG5vdCBiZSBudWxsXCIpXG4gICAgY29uc3QgY3VycmVudERlY2s9c3RhdGUuZGVja3Nbc3RhdGUuYWdlXVxuICAgIGNvbnN0IG5ld0RlY2tGb3JUaGlzQWdlPWN1cnJlbnREZWNrLm1hcChjPT5jPT09Y2FyZD9udWxsOmMpO1xuICAgIGNvbnN0IGFnZT1uZXdEZWNrRm9yVGhpc0FnZS5ldmVyeShjYXJkPT5jYXJkPT09bnVsbCk/Z2V0TmV4dEFnZShzdGF0ZS5hZ2UpOnN0YXRlLmFnZVxuICAgIGNvbnN0IGRlY2tzPXtcbiAgICAgICAgLi4uc3RhdGUuZGVja3MsXG4gICAgICAgIFtzdGF0ZS5hZ2VdOm5ld0RlY2tGb3JUaGlzQWdlXG4gICAgfVxuICAgIGNvbnN0IG5ld0NhbkJlUGxheWVkPWxheW91dHNbc3RhdGUuYWdlXShcbiAgICAgICAgc3RhdGUuZGVja3Nbc3RhdGUuYWdlXS5tYXAoYz0+YyE9PW51bGwpLFxuICAgICAgICBjdXJyZW50RGVjay5pbmRleE9mKGNhcmQpLFxuICAgICAgICBzdGF0ZS5jYW5CZVBsYXllZFxuICAgIClcblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZWNrcyxcbiAgICAgICAgYWdlLFxuICAgICAgICBwbGF5ZXI6b3RoZXJQbGF5ZXIoc3RhdGUucGxheWVyKSxcbiAgICAgICAgY2FuQmVQbGF5ZWQ6KGFnZT09PW51bGwpP1tdOiggKGFnZT09PXN0YXRlLmFnZSk/bmV3Q2FuQmVQbGF5ZWQ6aW50aWFsQ2FuQmVQbGF5ZWRTdGF0ZXNbYWdlXSApXG4gICAgfVxufVxuZnVuY3Rpb24gcHJvZHVjdGlvbkVmZmVjdHMoc3RhdGU6R2FtZVN0YXRlLHBsYXllcjpQbGF5ZXIpOlByb2R1Y3Rpb25FZmZlY3RbXSB7XG4gICAgY29uc3QgYnVpbHRDYXJkcyA9IGFsbENhcmRzLmZpbHRlcihjYXJkID0+IHN0YXRlLnBsYXllcnNTdGF0ZVtwbGF5ZXJdLmJ1aWxkaW5ncy5pbmNsdWRlcyhjYXJkLm5hbWUpKVxuICAgIHJldHVybiBidWlsdENhcmRzXG4gICAgICAgIC5mbGF0TWFwKGNhcmQ9PmV4dHJhY3RFZmZlY3RzKGNhcmQuZWZmZWN0KSlcbiAgICAgICAgLmZsYXRNYXAoc2luZ2xlRWZmZWN0ID0+IChcInByb2R1Y2VPbmVPZlwiIGluIHNpbmdsZUVmZmVjdCk/W3NpbmdsZUVmZmVjdF06W10pXG59XG5mdW5jdGlvbiBwcm9kdWN0aW9uc0NvdmVyKHJlc291cmNlc05lZWRlZDpQYXJ0aWFsPFJlY29yZDxSZXNvdXJjZSxudW1iZXI+Pixwcm9kdWN0aW9uczpQcm9kdWN0aW9uRWZmZWN0W10pOmJvb2xlYW57XG4gICAgY29uc29sZS5sb2coe3Jlc291cmNlc05lZWRlZCxwcm9kdWN0aW9uc30pXG4gICAgY29uc3Qgc29tZVJlc291cmNlSXNOZWRlZCA9IHJlc291cmNlc0xpc3Quc29tZShyZXNOYW1lID0+IHJlc291cmNlc05lZWRlZD8uW3Jlc05hbWVdKVxuICAgIGlmKCFzb21lUmVzb3VyY2VJc05lZGVkKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyByZXNvdXJjZXMgbmVlZGVkIVwiKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYocHJvZHVjdGlvbnMubGVuZ3RoPT09MCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbW9yZSBwcm9kdWN0aW9ucyFcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IFtwcm9kdWN0aW9uLC4uLm90aGVyUHJvZHVjdGlvbnNdID0gcHJvZHVjdGlvbnNcbiAgICBmdW5jdGlvbiByZXNvdXJjZXNXaXRoT25lTGVzc09mKHJlc291cmNlOlJlc291cmNlKXtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSByZXNvdXJjZXNOZWVkZWRbcmVzb3VyY2VdO1xuICAgICAgICBpZihxdWFudGl0eSl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnJlc291cmNlc05lZWRlZCxcbiAgICAgICAgICAgICAgICBbcmVzb3VyY2VdOk1hdGgubWF4KHF1YW50aXR5LTEsMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VzTmVlZGVkXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb2R1Y3Rpb24ucHJvZHVjZU9uZU9mLnNvbWUocHJvZHVjZWRSZXNvdXJjZSA9PiBwcm9kdWN0aW9uc0NvdmVyKHJlc291cmNlc1dpdGhPbmVMZXNzT2YocHJvZHVjZWRSZXNvdXJjZSksb3RoZXJQcm9kdWN0aW9ucykpXG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBjYW5CdWlsZChzdGF0ZTpHYW1lU3RhdGUscGxheWVyOlBsYXllcixjYXJkTmFtZTpDYXJkTmFtZSk6Ym9vbGVhbntcbiAgICBjb25zdCBjYXJkID0gYWxsQ2FyZHMuZmluZChjPT5jLm5hbWU9PT1jYXJkTmFtZSlcbiAgICBpbnZhcmlhbnQoY2FyZCxcIkNhcmQgc2hvdWxkIGJlIGEgY2FyZFwiKVxuICAgIGNvbnN0IGNvaW5Db3N0ID0gY2FyZC5jb3N0Py5jb2luID8/IDBcbiAgICBjb25zdCBjdXJyZW50Q29pbnMgPSBzdGF0ZS5wbGF5ZXJzU3RhdGVbcGxheWVyXS5jb2lucztcbiAgICBpZihjb2luQ29zdCA+IGN1cnJlbnRDb2lucykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBwcm9kdWN0aW9uc0NvdmVyKGNhcmQuY29zdCxwcm9kdWN0aW9uRWZmZWN0cyhzdGF0ZSxwbGF5ZXIpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlKHN0YXRlOkdhbWVTdGF0ZSxhY3Rpb246R2FtZUFjdGlvbik6R2FtZVN0YXRle1xuICAgIFxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgJ3N0YXJ0Jzp7XG4gICAgICAgICAgICBjb25zdCB7c2FtcGxlLHNodWZmbGUsc2FtcGxlUmVtb3ZlfSA9IHJhbmRvbWl6ZXJzKGFjdGlvbi5zZWVkKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmFuZG9tU2VlZDphY3Rpb24uc2VlZCxcbiAgICAgICAgICAgICAgICB3b25kZXJzOnsxOltdLDI6W119LFxuICAgICAgICAgICAgICAgIHdvbmRlcnNUb0Nob3NlRnJvbTogc2FtcGxlKHdvbmRlcklkcyw0KSxcbiAgICAgICAgICAgICAgICBwbGF5ZXI6MSxcbiAgICAgICAgICAgICAgICBhZ2U6bnVsbCxcbiAgICAgICAgICAgICAgICBkZWNrczp7XG4gICAgICAgICAgICAgICAgICAgIDE6c2FtcGxlUmVtb3ZlKGFnZU9uZURlY2ssMykubWFwKGM9PmMubmFtZSksXG4gICAgICAgICAgICAgICAgICAgIDI6c2FtcGxlUmVtb3ZlKGFnZVR3b0RlY2ssMykubWFwKGM9PmMubmFtZSksXG4gICAgICAgICAgICAgICAgICAgIDM6c2h1ZmZsZShzYW1wbGVSZW1vdmUoYWdlVGhyZWVEZWNrLDMpLHNhbXBsZShndWlsZHNEZWNrLDMpKS5tYXAoYz0+Yy5uYW1lKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FuQmVQbGF5ZWQ6W10sXG4gICAgICAgICAgICAgICAgcGxheWVyc1N0YXRlOntcbiAgICAgICAgICAgICAgICAgICAgMTp7YnVpbGRpbmdzOltdLGNvaW5zOjB9LFxuICAgICAgICAgICAgICAgICAgICAyOntidWlsZGluZ3M6W10sY29pbnM6MH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2Nob29zZVdvbmRlcic6IHtcbiAgICAgICAgICAgIGNvbnN0IHtzYW1wbGV9ID0gcmFuZG9taXplcnMoc3RhdGUucmFuZG9tU2VlZCk7XG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXb25kZXJJRHM9d29uZGVySWRzLmZpbHRlcih3aWQgPT4gIVsuLi5zdGF0ZS53b25kZXJzWzFdLC4uLnN0YXRlLndvbmRlcnNbMl0sIGFjdGlvbi53b25kZXJdLmluY2x1ZGVzKHdpZCkpXG4gICAgICAgICAgICBpbnZhcmlhbnQoc3RhdGUucGxheWVyICE9PSBudWxsKVxuICAgICAgICAgICAgY29uc3QgbWUgPSBzdGF0ZS5wbGF5ZXI7XG4gICAgICAgICAgICBjb25zdCBvdGhlciA9IG90aGVyUGxheWVyKHN0YXRlLnBsYXllcilcbiAgICAgICAgICAgIGNvbnN0IHdvbmRlcnMgPSAoKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCB3PWFjdGlvbi53b25kZXJcbiAgICAgICAgICAgICAgICBjb25zdCB3cz1zdGF0ZS53b25kZXJzXG4gICAgICAgICAgICAgICAgaWYobWU9PT0xICYmIG90aGVyPT09Mil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbbWVdOlsuLi53c1ttZV0sd10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3RoZXJdOndzW290aGVyXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKG1lPT09MiAmJiBvdGhlcj09PTEpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgW21lXTpbLi4ud3NbbWVdLHddLFxuICAgICAgICAgICAgICAgICAgICAgICAgW290aGVyXTp3c1tvdGhlcl1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbXBvc3NpYmxlIVwiKVxuICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgY29uc3QgZW5kT2ZDaG9zaW5nV29uZGVycz13b25kZXJzWzFdLmxlbmd0aCA9PT0gNCAmJiB3b25kZXJzWzJdLmxlbmd0aD09PTRcbiAgICAgICAgICAgIGNvbnN0IHdvbmRlcnNUb0Nob3NlRnJvbT0oKCk9PntcbiAgICAgICAgICAgICAgICBpZihlbmRPZkNob3NpbmdXb25kZXJzKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHN0YXRlLndvbmRlcnNUb0Nob3NlRnJvbT8ubGVuZ3RoPT09MSB8fCBzdGF0ZS53b25kZXJzVG9DaG9zZUZyb209PT1udWxsKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNhbXBsZShhdmFpbGFibGVXb25kZXJJRHMsNClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLndvbmRlcnNUb0Nob3NlRnJvbT8uZmlsdGVyKHdpZD0+d2lkIT09YWN0aW9uLndvbmRlcik7XG4gICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJhbmRvbVNlZWQ6c3RhdGUucmFuZG9tU2VlZCxcbiAgICAgICAgICAgICAgICBwbGF5ZXI6b3RoZXIsXG4gICAgICAgICAgICAgICAgd29uZGVycyxcbiAgICAgICAgICAgICAgICB3b25kZXJzVG9DaG9zZUZyb20sXG4gICAgICAgICAgICAgICAgYWdlOmVuZE9mQ2hvc2luZ1dvbmRlcnM/MTpudWxsLFxuICAgICAgICAgICAgICAgIGRlY2tzOnN0YXRlLmRlY2tzLFxuICAgICAgICAgICAgICAgIGNhbkJlUGxheWVkOmludGlhbENhbkJlUGxheWVkU3RhdGVzWzFdLFxuICAgICAgICAgICAgICAgIHBsYXllcnNTdGF0ZTp7XG4gICAgICAgICAgICAgICAgICAgIDE6e2J1aWxkaW5nczpbXSxjb2luczowfSxcbiAgICAgICAgICAgICAgICAgICAgMjp7YnVpbGRpbmdzOltdLGNvaW5zOjB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlICdidWlsZCc6e1xuICAgICAgICAgICAgY29uc3QgcGxheWVyU3RhdGU9e1xuICAgICAgICAgICAgICAgIGNvaW5zOnN0YXRlLnBsYXllcnNTdGF0ZVtzdGF0ZS5wbGF5ZXJdLmNvaW5zLFxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczpbLi4uc3RhdGUucGxheWVyc1N0YXRlW3N0YXRlLnBsYXllcl0uYnVpbGRpbmdzLGFjdGlvbi5jYXJkXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGxheWVyc1N0YXRlPXtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5wbGF5ZXJzU3RhdGUsXG4gICAgICAgICAgICAgICAgW3N0YXRlLnBsYXllcl06cGxheWVyU3RhdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGVBZnRlclBpY2tpbmdVcENhcmQoc3RhdGUsYWN0aW9uLmNhcmQpLFxuICAgICAgICAgICAgICAgIHBsYXllcnNTdGF0ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdkaXNjYXJkJzp7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJTdGF0ZT17XG4gICAgICAgICAgICAgICAgY29pbnM6c3RhdGUucGxheWVyc1N0YXRlW3N0YXRlLnBsYXllcl0uY29pbnMrMyxcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6c3RhdGUucGxheWVyc1N0YXRlW3N0YXRlLnBsYXllcl0uYnVpbGRpbmdzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJzU3RhdGU9e1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnBsYXllcnNTdGF0ZSxcbiAgICAgICAgICAgICAgICBbc3RhdGUucGxheWVyXTpwbGF5ZXJTdGF0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZUFmdGVyUGlja2luZ1VwQ2FyZChzdGF0ZSxhY3Rpb24uY2FyZCksXG4gICAgICAgICAgICAgICAgcGxheWVyc1N0YXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufSIsICJmdW5jdGlvbiBhcnJheVNpemU8VD4oc2l6ZTpudW1iZXIsaW5pdGlhbGl6ZXI6KGluZGV4Om51bWJlcik9PlQpOlRbXXtcbiAgICByZXR1cm4gbmV3IEFycmF5KHNpemUpLmZpbGwoMCkubWFwKChfdmFsdWUsaW5kZXgpPT5pbml0aWFsaXplcihpbmRleCkpXG59XG5mdW5jdGlvbiBzdW0oYXJyYXk6bnVtYmVyW10pOm51bWJlcntcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhLGIpPT5hK2IsMClcbn1cbi8qKlxuICogbGF5b3V0W2ldID0gYXJyYXkgb2YgY2FyZCBpbmRleGVzIHRoYXQgY292ZXIgaVxuICovXG5jb25zdCBsYXlvdXRBZ2VPbmU6bnVtYmVyW11bXT0oKCk9PntcbiAgICBjb25zdCByb3dTaXplcyA9IFsyLDMsNCw1LDZdXG4gICAgY29uc3Qgcm93U3RhcnRJbmRleGVzID0gYXJyYXlTaXplKHJvd1NpemVzLmxlbmd0aCwoaW5kZXgpPT5zdW0ocm93U2l6ZXMuc2xpY2UoMCxpbmRleCkpKVxuICAgIHJldHVybiByb3dTaXplcy5mbGF0TWFwKChyb3dTaXplLHJvd0luZGV4KSA9PiBhcnJheVNpemUocm93U2l6ZSwoaW5kZXhJblJvdyk9PnJvd0luZGV4PT09NT9bXTpbXG4gICAgICAgIHJvd1N0YXJ0SW5kZXhlc1tyb3dJbmRleCsxXStpbmRleEluUm93LFxuICAgICAgICByb3dTdGFydEluZGV4ZXNbcm93SW5kZXgrMV0raW5kZXhJblJvdysxLFxuICAgIF0pXG4gICAgKVxufSkoKVxuXG5jb25zdCBsYXlvdXRBZ2VUd286bnVtYmVyW11bXT0oKCk9PntcbiAgICBjb25zdCByb3dTaXplcyA9IFs2LDUsNCwzLDJdXG4gICAgY29uc3Qgcm93U3RhcnRJbmRleGVzID0gYXJyYXlTaXplKHJvd1NpemVzLmxlbmd0aCwoaW5kZXgpPT5zdW0ocm93U2l6ZXMuc2xpY2UoMCxpbmRleCkpKVxuICAgIHJldHVybiByb3dTaXplcy5mbGF0TWFwKChyb3dTaXplLHJvd0luZGV4KSA9PiBhcnJheVNpemUocm93U2l6ZSwoaW5kZXhJblJvdyk9PntcbiAgICAgICAgaWYocm93SW5kZXg9PT01KSByZXR1cm4gW11cbiAgICAgICAgaWYoaW5kZXhJblJvdz09PTApIHJldHVybiBbcm93U3RhcnRJbmRleGVzW3Jvd0luZGV4KzFdXVxuICAgICAgICBpZihpbmRleEluUm93PT09cm93U2l6ZS0xKSByZXR1cm4gW3Jvd1N0YXJ0SW5kZXhlc1tyb3dJbmRleCsxXStyb3dTaXplc1tyb3dJbmRleCsxXS0xXVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgcm93U3RhcnRJbmRleGVzW3Jvd0luZGV4KzFdK2luZGV4SW5Sb3csXG4gICAgICAgICAgICByb3dTdGFydEluZGV4ZXNbcm93SW5kZXgrMV0raW5kZXhJblJvdy0xLFxuICAgICAgICBdXG4gICAgfSlcbiAgICApXG59KSgpXG5cbmNvbnN0IGxheW91dEFnZVRocmVlOm51bWJlcltdW109W1xuICAgICAgICBbMiwzXSwgWzMsNF0sXG4gICAgWzUsNl0sIFs2LDddLCBbNyw4XSxcbiAgICAgWzldLFs5XSxbMTBdLFsxMF0sXG4gICAgICAgIFsxMSwxMl0sIFsxMywxNF0sXG4gICAgWzE1XSwgWzE1LDE2XSwgWzE2LDE3XSwgWzE3XSxcbiAgICBbMThdLCBbMTgsMTldLCBbMTldLFxuICAgIFtdLFtdXG5dXG5cblxuZnVuY3Rpb24gY2FuQmVQbGF5ZWQobGF5b3V0Om51bWJlcltdW10saW5HYW1lOmJvb2xlYW5bXSxyZW1vdmVkSW5kZXg6bnVtYmVyLGluaXRpYWxDYW5CZVBsYXllZDpib29sZWFuW10pe1xuICAgIGNvbnN0IG5ld1RydWVzPWxheW91dFxuICAgIC5tYXAoKGNvdmVyZXJzLGluZGV4KT0+KHtjb3ZlcmVycyxpbmRleH0pKVxuICAgIC5maWx0ZXIoKHtjb3ZlcmVyc30pPT5jb3ZlcmVycy5pbmNsdWRlcyhyZW1vdmVkSW5kZXgpKVxuICAgIC5maWx0ZXIoKHtjb3ZlcmVyc30pPT5jb3ZlcmVycy5ldmVyeShjb3ZlcmVyID0+ICFpbkdhbWVbY292ZXJlcl0gfHwgY292ZXJlcj09PXJlbW92ZWRJbmRleCkpXG4gICAgLm1hcCgoe2luZGV4fSk9PmluZGV4KVxuICAgIGNvbnNvbGUubG9nKHtuZXdUcnVlc30pXG4gICAgcmV0dXJuIGluaXRpYWxDYW5CZVBsYXllZC5tYXAoKGluaXRpYWxWYWx1ZSxpbmRleCk9PmluaXRpYWxWYWx1ZSB8fCBuZXdUcnVlcy5pbmNsdWRlcyhpbmRleCkpXG59XG5cbmZ1bmN0aW9uIGNhbkJlUGxheWVkRm9yTGF5b3V0KGxheW91dDpudW1iZXJbXVtdKXtcbiAgICByZXR1cm4gKGluR2FtZTpib29sZWFuW10scmVtb3ZlZEluZGV4Om51bWJlcixpbml0aWFsQ2FuQmVQbGF5ZWQ6Ym9vbGVhbltdKT0+Y2FuQmVQbGF5ZWQobGF5b3V0LGluR2FtZSxyZW1vdmVkSW5kZXgsaW5pdGlhbENhbkJlUGxheWVkKVxufVxuXG5leHBvcnQgY29uc3QgbGF5b3V0cyA9IHtcbiAgICAxOmNhbkJlUGxheWVkRm9yTGF5b3V0KGxheW91dEFnZU9uZSksXG4gICAgMjpjYW5CZVBsYXllZEZvckxheW91dChsYXlvdXRBZ2VUd28pLFxuICAgIDM6Y2FuQmVQbGF5ZWRGb3JMYXlvdXQobGF5b3V0QWdlVGhyZWUpLFxufVxuXG5mdW5jdGlvbiB0cnVlcyhuOm51bWJlcik6Ym9vbGVhbltde1xuICAgIHJldHVybiBuZXcgQXJyYXkobikuZmlsbCh0cnVlKVxufVxuXG5mdW5jdGlvbiBmYWxzZXMobjpudW1iZXIpOmJvb2xlYW5bXXtcbiAgICByZXR1cm4gbmV3IEFycmF5KG4pLmZpbGwoZmFsc2UpXG59XG5cbmNvbnN0IGVtcHR5OmJvb2xlYW5bXT1bXVxuXG5leHBvcnQgY29uc3QgaW50aWFsQ2FuQmVQbGF5ZWRTdGF0ZXMgPSB7XG4gICAgMTplbXB0eS5jb25jYXQoZmFsc2VzKDE0KSx0cnVlcyg2KSksXG4gICAgMjplbXB0eS5jb25jYXQoZmFsc2VzKDE4KSx0cnVlcygyKSksXG4gICAgMzplbXB0eS5jb25jYXQoZmFsc2VzKDE4KSx0cnVlcygyKSlcbn1cblxuZXhwb3J0IGNvbnN0IGludGlhbEZhY2VVcFN0YXRlcyA9IHtcbiAgICAxOmVtcHR5LmNvbmNhdCh0cnVlcygyKSxmYWxzZXMoMyksdHJ1ZXMoNCksZmFsc2VzKDUpLHRydWVzKDYpKSxcbiAgICAyOmVtcHR5LmNvbmNhdCh0cnVlcyg2KSxmYWxzZXMoNSksdHJ1ZXMoNCksZmFsc2VzKDMpLHRydWVzKDIpKSxcbiAgICAzOmVtcHR5LmNvbmNhdCh0cnVlcygyKSxmYWxzZXMoMyksdHJ1ZXMoNCksZmFsc2VzKDIpLHRydWVzKDQpLGZhbHNlcygzKSx0cnVlcygyKSksXG59IiwgImV4cG9ydCBjb25zdCBiYXNpY1Jlc291cmNlcyA9IFsnc3RvbmUnLCdjbGF5Jywnd29vZCddIGFzIGNvbnN0XG5leHBvcnQgdHlwZSBCYXNpY1Jlc291cmNlPXR5cGVvZiBiYXNpY1Jlc291cmNlc1tudW1iZXJdO1xuZXhwb3J0IGNvbnN0IGVsYWJvcmF0ZVJlc291cmNlcyA9IFsncGFweXJ1cycsJ2dsYXNzJ10gYXMgY29uc3RcbmV4cG9ydCB0eXBlIEVsYWJvcmF0ZVJlc291cmNlPXR5cGVvZiBlbGFib3JhdGVSZXNvdXJjZXNbbnVtYmVyXTtcbmV4cG9ydCBjb25zdCByZXNvdXJjZXMgPSBbIC4uLmJhc2ljUmVzb3VyY2VzLCAuLi5lbGFib3JhdGVSZXNvdXJjZXNdXG5leHBvcnQgdHlwZSBSZXNvdXJjZSA9IHR5cGVvZiByZXNvdXJjZXNbbnVtYmVyXTsiLCAiaW1wb3J0IHsgQ29tcGxleEVmZmVjdCwgRWZmZWN0LCBTY2llbmNlLCBVbmxvY2tTeW1ib2wgfSBmcm9tIFwiLi9DYXJkcy9DYXJkVHlwZVwiO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tIFwiLi9SZXNvdXJjZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3Rpb25FZmZlY3R7XG4gICAgcHJvZHVjZU9uZU9mOnJlYWRvbmx5IFJlc291cmNlW11cbn1cblxuZXhwb3J0IHR5cGUgU2luZ2xlRWZmZWN0ID0gXG58IFByb2R1Y3Rpb25FZmZlY3Rcbnwge2dldENvaW46bnVtYmVyfVxufCB7dmljdG9yeVBvaW50czpudW1iZXJ9XG58IHtzaGllbGRzOm51bWJlcn1cbnwge3RyYWRlT25lOnJlYWRvbmx5IFJlc291cmNlW119XG58IHtzY2llbmNlOlNjaWVuY2V9XG58IHtjb21wbGV4OkNvbXBsZXhFZmZlY3R9XG58IHtzeW1ib2w6VW5sb2NrU3ltYm9sfVxuXG5mdW5jdGlvbiBleHRyYWN0UmVzb3VyY2UoZWZmZWN0OkVmZmVjdCxyZXQ6U2luZ2xlRWZmZWN0W10scmVzb3VyY2U6UmVzb3VyY2Upe1xuICAgIGlmKGVmZmVjdFtyZXNvdXJjZV0pIHtcbiAgICAgICAgbmV3IEFycmF5KGVmZmVjdFtyZXNvdXJjZV0pXG4gICAgICAgIC5maWxsKDApXG4gICAgICAgIC5mb3JFYWNoKCgpPT5yZXQucHVzaCh7cHJvZHVjZU9uZU9mOltyZXNvdXJjZV19KSlcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEVmZmVjdHMoZWZmZWN0OkVmZmVjdCk6U2luZ2xlRWZmZWN0W117XG4gICAgY29uc3QgcmV0OlNpbmdsZUVmZmVjdFtdPVtdXG4gICAgY29uc3QgZXh0cmFjdFJlcz0ocmVzb3VyY2U6UmVzb3VyY2UpPT5leHRyYWN0UmVzb3VyY2UoZWZmZWN0LHJldCxyZXNvdXJjZSlcbiAgICBcbiAgICBleHRyYWN0UmVzKCdjbGF5JylcbiAgICBleHRyYWN0UmVzKCdnbGFzcycpXG4gICAgZXh0cmFjdFJlcygncGFweXJ1cycpXG4gICAgZXh0cmFjdFJlcygnc3RvbmUnKVxuICAgIGV4dHJhY3RSZXMoJ3dvb2QnKVxuXG4gICAgaWYoZWZmZWN0LmNvaW4pIHJldC5wdXNoKHtnZXRDb2luOmVmZmVjdC5jb2lufSlcbiAgICBpZihlZmZlY3QuY29tcGxleCkgcmV0LnB1c2goe2NvbXBsZXg6ZWZmZWN0LmNvbXBsZXh9KVxuICAgIGlmKGVmZmVjdC5wcm9kdWNlT25lT2YpIHJldC5wdXNoKHtwcm9kdWNlT25lT2Y6ZWZmZWN0LnByb2R1Y2VPbmVPZn0pXG5cbiAgICBpZihlZmZlY3Quc2NpZW5jZSkgcmV0LnB1c2goe3NjaWVuY2U6ZWZmZWN0LnNjaWVuY2V9KVxuICAgIGlmKGVmZmVjdC5zaGllbGRzKSByZXQucHVzaCh7c2hpZWxkczplZmZlY3Quc2hpZWxkc30pXG4gICAgaWYoZWZmZWN0LnN5bWJvbCkgcmV0LnB1c2goe3N5bWJvbDplZmZlY3Quc3ltYm9sfSlcbiAgICBpZihlZmZlY3QudHJhZGVPbmUpIHJldC5wdXNoKHt0cmFkZU9uZTplZmZlY3QudHJhZGVPbmV9KVxuICAgIGlmKGVmZmVjdC52aWN0b3J5UG9pbnRzKSByZXQucHVzaCh7dmljdG9yeVBvaW50czplZmZlY3QudmljdG9yeVBvaW50c30pXG5cbiAgICByZXR1cm4gcmV0O1xufSIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IGFzc2VydElzV29uZGVySWQsIEdhbWVBY3Rpb24sIEdhbWVTdGF0ZSwgcmVkdWNlIH0gZnJvbSBcIn4vbG9naWMvR2FtZVN0YXRlXCJcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG5mdW5jdGlvbiBnZXRTdGF0ZShyZXF1ZXN0OlJlcXVlc3QpOkdhbWVTdGF0ZXtcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnNlYXJjaFBhcmFtcy5nZXQoXCJzdGF0ZVwiKTtcbiAgICBpbnZhcmlhbnQoc3RhdGUgIT09IG51bGwsIFwiU3RhdGUgbXVzdCBleGlzdFwiKVxuICAgIHJldHVybiBKU09OLnBhcnNlKCBzdGF0ZSApIGFzIEdhbWVTdGF0ZVxufVxuXG5mdW5jdGlvbiBnZXRPckZhaWwoa2V5OnN0cmluZyxkYXRhOkZvcm1EYXRhKTpzdHJpbmd7XG4gICAgY29uc3QgcmV0ID0gZGF0YS5nZXQoa2V5KVxuICAgIGludmFyaWFudChyZXQsYE5vIHZhbHVlIGluIHRoZSBmb3JtIGZvciAke2tleX0gYClcbiAgICBpbnZhcmlhbnQodHlwZW9mIHJldCA9PT0gJ3N0cmluZycsXCJ2YWx1ZSBmb3IgJHtrZXl9IGlzIG5vdCBhIHN0cmluZywgaXQgaXM6IFwiK3JldC50b1N0cmluZygpKVxuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGlvbihhY3Rpb25UeXBlOnN0cmluZyxkYXRhOkZvcm1EYXRhKTpHYW1lQWN0aW9ue1xuICAgIHN3aXRjaChhY3Rpb25UeXBlKXtcbiAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOidzdGFydCcsXG4gICAgICAgICAgICAgICAgc2VlZDpwYXJzZUludChnZXRPckZhaWwoXCJzZWVkXCIsZGF0YSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2Nob29zZVdvbmRlcic6XG4gICAgICAgICAgICBjb25zdCB3b25kZXIgPWdldE9yRmFpbChcIndvbmRlclwiLGRhdGEpXG4gICAgICAgICAgICBhc3NlcnRJc1dvbmRlcklkKHdvbmRlcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6J2Nob29zZVdvbmRlcicsXG4gICAgICAgICAgICAgICAgd29uZGVyXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2J1aWxkJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTonYnVpbGQnLFxuICAgICAgICAgICAgICAgIGNhcmQ6Z2V0T3JGYWlsKFwiY2FyZFwiLGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2Rpc2NhcmQnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOidkaXNjYXJkJyxcbiAgICAgICAgICAgICAgICBjYXJkOmdldE9yRmFpbChcImNhcmRcIixkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBnYW1lIGFjdGlvblwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246QWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3QscGFyYW1zfSkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcbiAgICBjb25zdCBhY3Rpb25UeXBlID0gcGFyYW1zW1wiKlwiXTtcbiAgICBpbnZhcmlhbnQodHlwZW9mIGFjdGlvblR5cGUgPT09ICdzdHJpbmcnLCdBY3Rpb24gVHlwZSBzaG91bGQgYmUgYSBzdHJpbmcnKVxuICAgIGNvbnN0IHN0YXRlID0gYWN0aW9uVHlwZT09PSdzdGFydCc/e30gYXMgYW55OmdldFN0YXRlKHJlcXVlc3QpXG4gICAgY29uc3QgbmV3U3RhdGUgPSByZWR1Y2Uoc3RhdGUsZ2V0QWN0aW9uKGFjdGlvblR5cGUsYm9keSkpXG4gICAgcmV0dXJuIHJlZGlyZWN0KCcvZ2FtZT9zdGF0ZT0nK0pTT04uc3RyaW5naWZ5KG5ld1N0YXRlKSlcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjpMb2FkZXJGdW5jdGlvbiA9ICgpPT57XG4gICAgY29uc29sZS5sb2coXCJUaGlzIHNob3VsZCBub3QgcmVuZGVyXCIpXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIFlvdSBkb250IHNlZSB0aGlzXG4gICAgPC9kaXY+XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQzVJbEM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3BEMUM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDaENqQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksU0FBUztBQUNiLFFBQUksU0FBUztBQUNiLFFBQUksV0FBVztBQUlmLFdBQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO0FBQ3hDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFHbkMsV0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUduQyxXQUFPLEtBQUssVUFBVSxRQUFRLFNBQVUsR0FBRztBQUMxQyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDbkNyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBR2IsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUU87Ozs7OztBQUlBLElBQU0sUUFBc0IsTUFBTTtBQUFBLEVBQ3ZDO0FBQUEsSUFDRSxLQUFJO0FBQUEsSUFDSixNQUFLO0FBQUE7QUFBQTtBQUdGLElBQU0sT0FBcUIsTUFBTTtBQUN0QyxTQUFPLEVBQUUsT0FBTztBQUFBO0FBR0gsZUFBZTtBQUM1QixTQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxLQUNULG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsTUFDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBVyxTQUFRO0FBQUEsTUFDOUIsb0NBQUMsb0JBQUQsT0FDQSxvQ0FBQyxxQkFBRCxRQUVGLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxzQkFBRCxRQUVGLG9DQUFDLGlDQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDMkMsb0NBQUMsMEJBQUQ7QUFBQTs7O0FDckNuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTBCO0FBQzFCLDRCQUFzQjs7O0FDRHRCO0FBY0EsSUFBTSxjQUFjO0FBQUEsRUFDaEI7QUFBQSxJQUNJLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLE1BQUs7QUFBQSxNQUNELFNBQVE7QUFBQSxNQUNSLE9BQU07QUFBQTtBQUFBLElBRVYsUUFBTztBQUFBLE1BQ0gsZUFBYztBQUFBO0FBQUE7QUFBQSxFQUd0QjtBQUFBLElBQ0ksSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sTUFBSztBQUFBLE1BQ0QsU0FBUTtBQUFBLE1BQ1IsTUFBSztBQUFBLE1BQ0wsT0FBTTtBQUFBO0FBQUEsSUFFVixRQUFPO0FBQUEsTUFDSCxlQUFjO0FBQUEsTUFDZCxXQUFVO0FBQUEsTUFDVixhQUFZO0FBQUEsTUFDWixZQUFXO0FBQUE7QUFBQTtBQUFBLEVBR25CO0FBQUEsSUFDSSxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixNQUFLO0FBQUEsTUFDRCxTQUFRO0FBQUEsTUFDUixPQUFNO0FBQUEsTUFDTixPQUFNO0FBQUEsTUFDTixNQUFLO0FBQUE7QUFBQSxJQUVULFFBQU87QUFBQSxNQUNILFdBQVU7QUFBQSxNQUNWLFlBQVc7QUFBQTtBQUFBO0FBQUEsRUFHbkI7QUFBQSxJQUNJLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLE1BQUs7QUFBQSxNQUNELE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNOLE1BQUs7QUFBQTtBQUFBLElBRVQsUUFBTztBQUFBLE1BQ0gsU0FBUSxDQUFDLFdBQVU7QUFBQSxNQUNuQixZQUFXO0FBQUEsTUFDWCxlQUFjO0FBQUE7QUFBQTtBQUFBLEVBR3RCO0FBQUEsSUFDSSxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixNQUFLO0FBQUEsTUFDRCxTQUFRO0FBQUEsTUFDUixPQUFNO0FBQUEsTUFDTixNQUFLO0FBQUE7QUFBQSxJQUVULFFBQU87QUFBQSxNQUNILFdBQVU7QUFBQSxNQUNWLFlBQVc7QUFBQSxNQUNYLGVBQWM7QUFBQTtBQUFBO0FBQUEsRUFFcEI7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLE1BQUs7QUFBQSxNQUNELE9BQU07QUFBQSxNQUNOLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQTtBQUFBLElBRVYsUUFBTztBQUFBLE1BQ0gsWUFBVztBQUFBLE1BQ1gsZUFBYztBQUFBO0FBQUE7QUFBQSxFQUVwQjtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sTUFBSztBQUFBLE1BQ0QsU0FBUTtBQUFBLE1BQ1IsT0FBTTtBQUFBLE1BQ04sTUFBSztBQUFBO0FBQUEsSUFFVCxRQUFPO0FBQUEsTUFDSCxvQkFBbUI7QUFBQSxNQUNuQixlQUFjO0FBQUE7QUFBQTtBQUFBLEVBRXBCO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixNQUFLO0FBQUEsTUFDRCxTQUFRO0FBQUEsTUFDUixPQUFNO0FBQUEsTUFDTixNQUFLO0FBQUE7QUFBQSxJQUVULFFBQU87QUFBQSxNQUNILFNBQVEsQ0FBQyxRQUFPLFNBQVE7QUFBQSxNQUN4QixlQUFjO0FBQUE7QUFBQTtBQUFBLEVBRXBCO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixNQUFLO0FBQUEsTUFDRCxTQUFRO0FBQUEsTUFDUixPQUFNO0FBQUEsTUFDTixNQUFLO0FBQUE7QUFBQSxJQUVULFFBQU87QUFBQSxNQUNILG1CQUFrQjtBQUFBLE1BQ2xCLGVBQWM7QUFBQTtBQUFBO0FBQUEsRUFFcEI7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLE1BQUs7QUFBQSxNQUNELE9BQU07QUFBQSxNQUNOLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQTtBQUFBLElBRVYsUUFBTztBQUFBLE1BQ0gsaUJBQWdCO0FBQUEsTUFDaEIsU0FBUTtBQUFBLE1BQ1IsZUFBYztBQUFBO0FBQUE7QUFBQSxFQUVwQjtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sTUFBSztBQUFBLE1BQ0QsU0FBUTtBQUFBLE1BQ1IsTUFBSztBQUFBLE1BQ0wsTUFBSztBQUFBLE1BQ0wsT0FBTTtBQUFBO0FBQUEsSUFFVixRQUFPO0FBQUEsTUFDSCxrQkFBaUI7QUFBQSxNQUNqQixTQUFRO0FBQUEsTUFDUixlQUFjO0FBQUE7QUFBQTtBQUFBLEVBRXBCO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixNQUFLO0FBQUEsTUFDRCxPQUFNO0FBQUEsTUFDTixNQUFLO0FBQUE7QUFBQSxJQUVULFFBQU87QUFBQSxNQUNILFNBQVE7QUFBQSxNQUNSLGVBQWM7QUFBQTtBQUFBO0FBQUE7QUFRbkIsSUFBTSxVQUFVOzs7QUR0TFIsNkJBQTRCO0FBQ3ZDLFFBQU0sRUFBQyxhQUFZO0FBQ25CLFFBQU0sU0FBUyxRQUFRLEtBQUssT0FBRyxFQUFFLE9BQUs7QUFDdEMscUNBQVU7QUFDVixRQUFNLEVBQUUsTUFBTSxPQUFPLE1BQU0sV0FBVztBQUN0QyxTQUFPLDBEQUNILG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUE0QixPQUMxQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsTUFDVixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBVSxVQUN4QixvQ0FBQyxNQUFELE1BQ0ssT0FBTyxRQUFRLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRSxPQUFLLG9DQUFDLE1BQUQsTUFBSyxHQUFFLEtBQUUsTUFFaEQsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQVUsWUFDeEIsb0NBQUMsTUFBRCxNQUNLLE9BQU8sUUFBUSxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUUsT0FBSyxvQ0FBQyxNQUFELE1BQUssR0FBRSxLQUFFO0FBQUE7OztBRWxCMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFFZSxxQkFBcUIsRUFBQyxVQUF3QjtBQUN6RCxTQUFPLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNsQixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFNLFlBQVksT0FBTztBQUFBLElBQU0sV0FBVTtBQUFBLEtBQzVDLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUE0QixPQUFPLE9BQ2pELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUssT0FBTztBQUFBLElBQU8sV0FBVTtBQUFBO0FBQUE7OztBREgzQixtQkFBa0I7QUFDN0IsU0FBTyxvQ0FBQyxPQUFELE1BQ0gsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQTJCLGlCQUN6QyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxRQUFRLElBQUksT0FBRyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBTSxvQ0FBQyxhQUFEO0FBQUEsSUFBYSxRQUFRO0FBQUE7QUFBQTs7O0FFUGxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBcUI7QUFFTixpQkFBaUI7QUFDOUIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBVyxjQUN6QixvQ0FBQyxLQUFELE1BQUcsZ0RBRUwsb0NBQUMsT0FBRCxNQUNFLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsSUFBUyxRQUFPO0FBQUEsS0FDM0Isb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsY0FBYTtBQUFBLE1BQzlDLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFTLE9BQU07QUFBQSxJQUFVLFdBQVU7QUFBQTtBQUFBOzs7QUNaekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFpQztBQUNqQyxvQkFBZ0Y7QUFDaEYsNkJBQXNCOzs7QUNGdEI7OztBQ0FBO0FBQUEsb0JBQWdDO0FBQ2hDLDZCQUFzQjtBQUdmLDRCQUFtQztBQUN0QyxNQUFJLENBQUMsZ0JBQWdCO0FBQ3JCLFFBQU0sSUFBSSxhQUFhLElBQUk7QUFDM0Isc0NBQVUsTUFBSSxNQUFLO0FBQ25CLFNBQU87QUFBQTtBQUVKLHdCQUFpQztBQUNwQyxRQUFNLElBQUk7QUFDVixTQUFPLEtBQUssTUFBTTtBQUFBO0FBRWYsK0JBQStCLEtBQWtCO0FBQ3BELFFBQU0sSUFBSTtBQUNWLFNBQU8sR0FBRyxhQUFhO0FBQUE7OztBRFZaLGdCQUFnQixFQUFDLFFBQWtCO0FBQzlDLFFBQU0sRUFBRSxXQUFXO0FBQ25CLFNBQU8sb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsT0FBTztBQUFBLElBQU0sV0FDckMsaUNBQWlDLFdBQVMsSUFBRSxzQkFBb0I7QUFBQTtBQUFBOzs7QUVUeEU7OztBQ0FBO0FBQU8sSUFBTSxTQUFTO0FBQUEsRUFDbEI7QUFBQSxJQUNJLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFFBQU87QUFBQSxNQUNILE1BQUs7QUFBQTtBQUFBO0FBQUEsRUFFWDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLE1BQ0QsTUFBSztBQUFBO0FBQUEsSUFFVCxRQUFPO0FBQUEsTUFDSCxNQUFLO0FBQUE7QUFBQTtBQUFBLEVBRVg7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFFBQU87QUFBQSxNQUNILE1BQUs7QUFBQTtBQUFBO0FBQUEsRUFFWDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLE1BQ0QsTUFBSztBQUFBO0FBQUEsSUFFVCxRQUFPO0FBQUEsTUFDSCxNQUFLO0FBQUE7QUFBQTtBQUFBLEVBRVg7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFFBQU87QUFBQSxNQUNILE9BQU07QUFBQTtBQUFBO0FBQUEsRUFFWjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLE1BQ0QsTUFBSztBQUFBO0FBQUEsSUFFVCxRQUFPO0FBQUEsTUFDSCxPQUFNO0FBQUE7QUFBQTtBQUFBLEVBRVo7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUssRUFBRSxNQUFLO0FBQUEsSUFDWixRQUFPO0FBQUEsTUFDSCxPQUFNO0FBQUE7QUFBQTtBQUFBLEVBRVo7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUssRUFBRSxNQUFNO0FBQUEsSUFDYixRQUFPLEVBQUUsU0FBUTtBQUFBO0FBQUEsRUFDbkI7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFFBQU8sRUFBRSxTQUFRO0FBQUE7QUFBQSxFQUNuQjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLE1BQ0QsU0FBUTtBQUFBO0FBQUEsSUFFWixRQUFPO0FBQUEsTUFDSCxlQUFjO0FBQUEsTUFDZCxTQUFRO0FBQUE7QUFBQTtBQUFBLEVBR2hCO0FBQUEsSUFDSSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsTUFDRCxTQUFRO0FBQUE7QUFBQSxJQUVaLFFBQU87QUFBQSxNQUNILFNBQVE7QUFBQSxNQUNSLGVBQWM7QUFBQTtBQUFBO0FBQUEsRUFFcEI7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxNQUNELE1BQUs7QUFBQTtBQUFBLElBRVQsUUFBTztBQUFBLE1BQ0gsVUFBUyxDQUFDO0FBQUE7QUFBQTtBQUFBLEVBRWhCO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLLEVBQUUsTUFBTTtBQUFBLElBQ2IsUUFBTyxFQUFFLFVBQVMsQ0FBQztBQUFBO0FBQUEsRUFDckI7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUssRUFBRSxNQUFLO0FBQUEsSUFDWixRQUFPLEVBQUUsVUFBUyxDQUFDO0FBQUE7QUFBQSxFQUNyQjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSyxFQUFFLE1BQUs7QUFBQSxJQUNaLFFBQU87QUFBQSxNQUNILFNBQVE7QUFBQSxNQUNSLFFBQU87QUFBQTtBQUFBO0FBQUEsRUFFYjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSyxFQUFDLE1BQUs7QUFBQSxJQUNYLFFBQU87QUFBQSxNQUNILFNBQVE7QUFBQSxNQUNSLFFBQU87QUFBQTtBQUFBO0FBQUEsRUFFYjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSyxFQUFDLE1BQUs7QUFBQSxJQUNYLFFBQU8sRUFBQyxTQUFRO0FBQUE7QUFBQSxFQUNsQjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSyxFQUFDLE1BQUs7QUFBQSxJQUNYLFFBQU87QUFBQSxNQUNILFFBQU87QUFBQSxNQUNQLFNBQVE7QUFBQTtBQUFBO0FBQUEsRUFFZDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSyxFQUFDLE1BQUs7QUFBQSxJQUNYLFFBQU87QUFBQSxNQUNILFFBQU87QUFBQSxNQUNQLFNBQVE7QUFBQTtBQUFBO0FBQUEsRUFFZDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLE1BQ0gsZUFBYztBQUFBLE1BQ2QsUUFBTztBQUFBO0FBQUEsSUFFWCxNQUFLO0FBQUE7QUFBQSxFQUNQO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxRQUFPO0FBQUEsTUFDSCxlQUFjO0FBQUEsTUFDZCxRQUFPO0FBQUE7QUFBQSxJQUVYLE1BQUs7QUFBQTtBQUFBLEVBQ1A7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUssRUFBQyxPQUFNO0FBQUEsSUFDWixRQUFPO0FBQUEsTUFDSCxlQUFjO0FBQUEsTUFDZCxRQUFPO0FBQUE7QUFBQTtBQUFBLEVBRWI7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFFBQU87QUFBQSxNQUNILE1BQUs7QUFBQTtBQUFBLElBRVQsTUFBSztBQUFBO0FBQUE7OztBQzdLYjtBQUFPLElBQU0sU0FBUztBQUFBLEVBQ2xCO0FBQUEsSUFDSSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLLEVBQUMsTUFBSztBQUFBLElBQ1gsUUFBTztBQUFBLE1BQ0gsTUFBSztBQUFBO0FBQUE7QUFBQSxFQUVYO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLLEVBQUMsTUFBSztBQUFBLElBQ1gsUUFBTyxFQUFDLE1BQUs7QUFBQTtBQUFBLEVBQ2Y7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUssRUFBQyxNQUFLO0FBQUEsSUFDWCxRQUFPLEVBQUMsT0FBTTtBQUFBO0FBQUEsRUFDaEI7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFFBQU8sRUFBQyxPQUFNO0FBQUE7QUFBQSxFQUNoQjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsUUFBTyxFQUFDLFNBQVE7QUFBQTtBQUFBLEVBQ2xCO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLLEVBQUMsT0FBTTtBQUFBLElBQ1osUUFBTyxFQUFDLFNBQVE7QUFBQTtBQUFBLEVBQ2xCO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsTUFDRCxNQUFLO0FBQUEsTUFDTCxNQUFLO0FBQUE7QUFBQSxJQUVULFFBQU87QUFBQSxNQUNILGNBQWEsQ0FBQyxTQUFRO0FBQUE7QUFBQTtBQUFBLEVBRTVCO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsTUFDRCxNQUFLO0FBQUEsTUFDTCxPQUFNO0FBQUEsTUFDTixTQUFRO0FBQUE7QUFBQSxJQUVaLFFBQU87QUFBQSxNQUNILGNBQWEsQ0FBQyxRQUFPLFFBQU87QUFBQTtBQUFBO0FBQUEsRUFFbEM7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUssRUFBQyxNQUFLO0FBQUEsSUFDWCxRQUFPO0FBQUEsTUFDSCxVQUFTLENBQUMsV0FBVTtBQUFBO0FBQUE7QUFBQSxFQUUxQjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLE1BQ0QsTUFBSztBQUFBLE1BQ0wsT0FBTTtBQUFBO0FBQUEsSUFFVixRQUFPO0FBQUEsTUFDSCxlQUFjO0FBQUE7QUFBQTtBQUFBLEVBRXBCO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsTUFDRCxNQUFLO0FBQUEsTUFDTCxNQUFL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
