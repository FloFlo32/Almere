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
                            src: "/images/logo.png",
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn",
                                target: "_blank",
                                rel: "noopener",
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
                                                src: `/images/flag-${current.code}.png`,
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
                                                        src: `/images/flag-${l.code}.png`,
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
"[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/Almere/sloepverhuur-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/Almere/sloepverhuur-next/lib/LanguageContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function Footer() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: '#f9f9f9',
            borderTop: '1px solid #eee',
            padding: '60px 24px 30px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1248,
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 40
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/logo.png",
                                alt: "Sloepverhuur Almere",
                                style: {
                                    height: 60,
                                    marginBottom: 16
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#666',
                                    fontSize: 14
                                },
                                children: t.footer.tagline
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#666',
                                    fontSize: 14,
                                    marginTop: 12
                                },
                                children: t.footer.open
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#666',
                                    fontSize: 14,
                                    marginTop: 8
                                },
                                children: "KVK: 75634139"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: '#2a9e26',
                                    fontWeight: 700,
                                    marginBottom: 16,
                                    fontSize: 14
                                },
                                children: t.footer.nav
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
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
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 8
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.href,
                                        style: {
                                            color: '#666',
                                            textDecoration: 'none',
                                            fontSize: 14
                                        },
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: '#2a9e26',
                                    fontWeight: 700,
                                    marginBottom: 16,
                                    fontSize: 14
                                },
                                children: t.footer.locations
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            t.locations.items.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#666',
                                        fontSize: 14,
                                        marginBottom: 8
                                    },
                                    children: loc.name
                                }, loc.name, false, {
                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: '#2a9e26',
                                    fontWeight: 700,
                                    marginBottom: 16,
                                    fontSize: 14
                                },
                                children: t.footer.contact
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#666',
                                    fontSize: 14,
                                    marginBottom: 8
                                },
                                children: "info@sloepverhuuralmere.nl"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 12,
                                    marginTop: 16
                                },
                                children: [
                                    'facebook',
                                    'instagram',
                                    'linkedin'
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        style: {
                                            color: '#2a9e26',
                                            fontSize: 18
                                        },
                                        children: "●"
                                    }, s, false, {
                                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1248,
                    margin: '40px auto 0',
                    borderTop: '1px solid #eee',
                    paddingTop: 20,
                    textAlign: 'center',
                    color: '#999',
                    fontSize: 13
                },
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Sloepverhuur Almere · ",
                    t.footer.privacy,
                    " · ",
                    t.footer.cookies
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/Almere/sloepverhuur-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/Almere/sloepverhuur-next/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/Almere/sloepverhuur-next/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/Almere/sloepverhuur-next/lib/LanguageContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const YETTI_BOOK = 'https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn';
const LOCATION_IMGS = [
    '/images/loetje-card.jpg',
    '/images/strand22-card.jpg'
];
const MEDIA_IMGS = [
    '/images/ns-logo.png',
    '/images/visit-almere.jpg',
    '/images/visit-flevoland.jpg'
];
function Home() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    borderRadius: 8,
                    overflow: 'hidden',
                    margin: '40px auto',
                    maxWidth: 1248,
                    minHeight: 500
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundImage: 'url(/images/hero.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: 400
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#2a9e26',
                            padding: '60px 48px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#fff',
                                    fontSize: 18,
                                    marginBottom: 12
                                },
                                children: t.hero.subtitle
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    color: '#fff',
                                    fontSize: 46,
                                    fontFamily: 'Mansalva, serif',
                                    lineHeight: 1.3,
                                    marginBottom: 24
                                },
                                children: t.hero.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#fff',
                                    marginBottom: 32
                                },
                                children: t.hero.body
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: YETTI_BOOK,
                                style: {
                                    display: 'inline-block',
                                    background: 'transparent',
                                    border: '2px solid #fff',
                                    color: '#fff',
                                    padding: '14px 28px',
                                    borderRadius: 4,
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    marginBottom: 16,
                                    fontSize: 14
                                },
                                children: t.hero.cta1
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: YETTI_BOOK,
                                style: {
                                    display: 'inline-block',
                                    background: 'transparent',
                                    border: '2px solid #fff',
                                    color: '#fff',
                                    padding: '14px 28px',
                                    borderRadius: 4,
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    fontSize: 14
                                },
                                children: t.hero.cta2
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '80px 24px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1248,
                        margin: '0 auto'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                textAlign: 'center',
                                fontSize: 40,
                                marginBottom: 16
                            },
                            children: t.locations.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                textAlign: 'center',
                                color: '#666',
                                maxWidth: 700,
                                margin: '0 auto 60px'
                            },
                            children: t.locations.subtitle
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, minmax(0, 480px))',
                                gap: 32,
                                justifyContent: 'center'
                            },
                            children: t.locations.items.map((loc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        border: '2px solid #2a9e26',
                                        borderRadius: 8,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 25px rgba(0,0,0,0.07)',
                                        background: '#fff'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: LOCATION_IMGS[i],
                                            alt: loc.name,
                                            style: {
                                                width: '100%',
                                                height: 200,
                                                objectFit: 'cover',
                                                display: 'block'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '24px 28px 28px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: 16,
                                                        fontWeight: 600,
                                                        color: '#555',
                                                        marginBottom: 12
                                                    },
                                                    children: loc.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: '#666',
                                                        fontSize: 14,
                                                        lineHeight: 1.6,
                                                        marginBottom: 20
                                                    },
                                                    children: loc.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: YETTI_BOOK,
                                                    style: {
                                                        display: 'block',
                                                        textAlign: 'center',
                                                        background: '#2a9e26',
                                                        color: '#fff',
                                                        padding: '12px',
                                                        borderRadius: 4,
                                                        textDecoration: 'none',
                                                        fontWeight: 700,
                                                        fontSize: 13
                                                    },
                                                    children: t.locations.cta
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '60px 24px',
                    background: '#f5f5f5'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1248,
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 32,
                        textAlign: 'center'
                    },
                    children: t.stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 80,
                                        fontWeight: 700,
                                        color: '#333',
                                        lineHeight: 1
                                    },
                                    children: s.num
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#2a9e26',
                                        fontWeight: 700,
                                        fontSize: 16,
                                        marginTop: 8
                                    },
                                    children: s.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this),
                                'sub' in s && s.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#2a9e26',
                                        fontSize: 14
                                    },
                                    children: s.sub
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, s.label, true, {
                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    backgroundImage: 'linear-gradient(rgba(0,7,21,0.5), rgba(0,1,2,0.6)), url(/images/hero-cta.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '120px 24px',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: '#fff',
                            fontSize: 48,
                            marginBottom: 40,
                            whiteSpace: 'pre-line'
                        },
                        children: t.cta.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 16,
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: YETTI_BOOK,
                                style: {
                                    background: '#fff',
                                    color: '#333',
                                    padding: '16px 32px',
                                    borderRadius: 4,
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    fontSize: 15
                                },
                                children: t.cta.book
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/routes",
                                style: {
                                    background: 'transparent',
                                    border: '2px solid #fff',
                                    color: '#fff',
                                    padding: '16px 32px',
                                    borderRadius: 4,
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    fontSize: 15
                                },
                                children: t.cta.routes
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '80px 24px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1248,
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gap: 48
                    },
                    children: t.about.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: 28,
                                        marginBottom: 16,
                                        color: '#333'
                                    },
                                    children: s.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#666',
                                        lineHeight: 1.8
                                    },
                                    children: s.text
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.title, true, {
                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '60px 24px',
                    background: '#f9f9f9'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1248,
                        margin: '0 auto'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                textAlign: 'center',
                                fontSize: 36,
                                marginBottom: 48
                            },
                            children: t.reviews.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: 24
                            },
                            children: t.reviews.items.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#fff',
                                        borderRadius: 8,
                                        padding: 28,
                                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: '#fbbc04',
                                                fontSize: 18,
                                                marginBottom: 12
                                            },
                                            children: "★★★★★"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#555',
                                                fontSize: 14,
                                                lineHeight: 1.7,
                                                marginBottom: 16
                                            },
                                            children: [
                                                '"',
                                                r.text,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: '#333',
                                                fontSize: 14
                                            },
                                            children: r.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, r.name, true, {
                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '60px 24px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1248,
                        margin: '0 auto'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                textAlign: 'center',
                                fontSize: 36,
                                marginBottom: 48
                            },
                            children: t.media.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 80,
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            },
                            children: t.media.items.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: MEDIA_IMGS[i],
                                            alt: m.alt,
                                            style: {
                                                height: 50,
                                                objectFit: 'contain',
                                                display: 'block',
                                                margin: '0 auto 12px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#2a9e26',
                                                fontSize: 14,
                                                fontWeight: 600
                                            },
                                            children: m.label
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, m.alt, true, {
                                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$Almere$2f$sloepverhuur$2d$next$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Development/Almere/sloepverhuur-next/app/page.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Desktop_Development_Almere_sloepverhuur-next_094.7by._.js.map