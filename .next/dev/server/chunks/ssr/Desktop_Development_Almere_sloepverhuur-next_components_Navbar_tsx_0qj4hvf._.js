module.exports = [
"[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/Almere/sloepverhuur-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/Almere/sloepverhuur-next/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/Almere/sloepverhuur-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/Almere/sloepverhuur-next/lib/LanguageContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const LANGS = [
    {
        code: 'nl',
        label: 'NL'
    },
    {
        code: 'en',
        label: 'EN'
    },
    {
        code: 'de',
        label: 'DE'
    }
];
function Navbar() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [langOpen, setLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { lang, setLang, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const current = LANGS.find((l)=>l.code === lang);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            background: '#fff',
            borderBottom: '3px solid #2a9e26',
            position: 'sticky',
            top: 0,
            zIndex: 9999,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1248,
                    margin: '0 auto',
                    padding: '0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 100
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://www.sloepverhuuralmere.nl/wp-content/uploads/2020/05/Logo_SloepverhuurAlmere_199x96.png",
                            alt: "Sloepverhuur Almere",
                            style: {
                                height: 80,
                                width: 'auto'
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 28
                        },
                        children: [
                            [
                                {
                                    label: t.nav.home,
                                    href: '/'
                                },
                                {
                                    label: t.nav.routes,
                                    href: '/routes'
                                },
                                {
                                    label: t.nav.tarieven,
                                    href: '/tarieven'
                                },
                                {
                                    label: t.nav.bootinstructies,
                                    href: '/bootinstructies'
                                },
                                {
                                    label: t.nav.contact,
                                    href: '/contact'
                                }
                            ].map(({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    style: {
                                        color: '#333',
                                        textDecoration: 'none',
                                        fontSize: 13,
                                        fontWeight: 700,
                                        letterSpacing: '0.5px',
                                        fontFamily: 'Montserrat, Arial, sans-serif'
                                    },
                                    children: label
                                }, href, false, {
                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/boeken",
                                style: {
                                    background: '#2a9e26',
                                    color: '#fff',
                                    padding: '10px 18px',
                                    borderRadius: 3,
                                    textDecoration: 'none',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    fontFamily: 'Montserrat, Arial, sans-serif',
                                    whiteSpace: 'nowrap'
                                },
                                children: t.nav.reserveren
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative',
                                    borderLeft: '1px solid #e0e0e0',
                                    paddingLeft: 20,
                                    marginLeft: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLangOpen((v)=>!v),
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6,
                                            background: 'none',
                                            border: '1px solid #ddd',
                                            borderRadius: 4,
                                            padding: '6px 10px',
                                            cursor: 'pointer',
                                            fontSize: 12,
                                            fontWeight: 700,
                                            color: '#333',
                                            fontFamily: 'Montserrat, Arial, sans-serif'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: `https://www.sloepverhuuralmere.nl/wp-content/plugins/sitepress-multilingual-cms/res/flags/${current.code}.png`,
                                                alt: current.label,
                                                style: {
                                                    width: 20,
                                                    height: 14,
                                                    objectFit: 'cover',
                                                    borderRadius: 2
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            current.label,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    color: '#888',
                                                    marginLeft: 2
                                                },
                                                children: "▼"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    langOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 'calc(100% + 8px)',
                                            right: 0,
                                            background: '#fff',
                                            border: '1px solid #e0e0e0',
                                            borderRadius: 6,
                                            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                                            overflow: 'hidden',
                                            minWidth: 110,
                                            zIndex: 10000
                                        },
                                        children: LANGS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setLang(l.code);
                                                    setLangOpen(false);
                                                },
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 10,
                                                    width: '100%',
                                                    padding: '10px 14px',
                                                    background: l.code === lang ? '#f0f8f0' : 'transparent',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    fontSize: 13,
                                                    fontWeight: l.code === lang ? 700 : 400,
                                                    color: l.code === lang ? '#2a9e26' : '#333',
                                                    fontFamily: 'Montserrat, Arial, sans-serif',
                                                    textAlign: 'left'
                                                },
                                                onMouseEnter: (e)=>{
                                                    if (l.code !== lang) e.currentTarget.style.background = '#f5f5f5';
                                                },
                                                onMouseLeave: (e)=>{
                                                    if (l.code !== lang) e.currentTarget.style.background = 'transparent';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `https://www.sloepverhuuralmere.nl/wp-content/plugins/sitepress-multilingual-cms/res/flags/${l.code}.png`,
                                                        alt: l.label,
                                                        style: {
                                                            width: 22,
                                                            height: 15,
                                                            objectFit: 'cover',
                                                            borderRadius: 2
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this),
                                                    l.code === 'nl' ? 'Nederlands' : l.code === 'en' ? 'English' : 'Deutsch',
                                                    l.code === lang && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            marginLeft: 'auto',
                                                            color: '#2a9e26'
                                                        },
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, l.code, true, {
                                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            langOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setLangOpen(false),
                style: {
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9998
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_Development_Almere_sloepverhuur-next_components_Navbar_tsx_0qj4hvf._.js.map