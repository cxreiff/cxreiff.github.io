function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire3b68;n.register("bCSQh",function(r,i){Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),t(r.exports,"default",()=>h);var o=n("eiFRM"),l=n("hvI8U"),a=n("g4uyC"),u=n("hTxeE"),s=n("ee91V"),c=n("la7Ay"),p=n("cqg0o"),f=n("5gZKO"),d=n("b6AxM"),h=()=>{let{id:t=""}=(0,l.useParams)(),{content:n,data:{title:r,date:i}}=f.default[t],h=(0,u.useAppSelector)(e=>e.theme.theme);return/*#__PURE__*/(0,o.jsxs)("section",{children:[/*#__PURE__*/(0,o.jsx)(c.Card,{primary:r,secondary:/*#__PURE__*/(0,o.jsx)("time",{children:new Date(i).toDateString()})}),/*#__PURE__*/(0,o.jsx)(a.ReactMarkdown,{className:/*@__PURE__*/e(d).posts_content,children:n,components:{code({inline:t,className:n,children:r,...i}){let l=/language-(\w+)/.exec(n||"");return/*#__PURE__*/(0,o.jsx)(p.SyntaxHighlighter,{className:/*@__PURE__*/e(d).posts_content_code,children:String(r).replace(/\n$/,""),language:!t&&l?l[1]:"text",...i,style:h===s.Theme.DARKMODE?p.styleDark:p.styleLight})}}})]})}}),n.register("g4uyC",function(r,i){t(r.exports,"ReactMarkdown",()=>m);/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('react').ReactElement<{}>} ReactElement
 * @typedef {import('unified').PluggableList} PluggableList
 * @typedef {import('hast').Root} Root
 * @typedef {import('./rehype-filter.js').Options} FilterOptions
 * @typedef {import('./ast-to-react.js').Options} TransformOptions
 *
 * @typedef CoreOptions
 * @property {string} children
 *
 * @typedef PluginOptions
 * @property {PluggableList} [remarkPlugins=[]]
 * @property {PluggableList} [rehypePlugins=[]]
 * @property {import('remark-rehype').Options | undefined} [remarkRehypeOptions={}]
 *
 * @typedef LayoutOptions
 * @property {string} [className]
 *
 * @typedef {CoreOptions & PluginOptions & LayoutOptions & FilterOptions & TransformOptions} ReactMarkdownOptions
 *
 * @typedef Deprecation
 * @property {string} id
 * @property {string} [to]
 */var o=n("3TwHq"),l=n("8EANy"),a=n("27vyP"),u=n("73kRC"),s=n("kJTlh"),c=n("4RND8"),p=n("aY292"),f=n("1p9m5"),d=n("hM85M");let h={}.hasOwnProperty,g={plugins:{to:"remarkPlugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function m(e){for(let t in g)if(h.call(g,t)&&h.call(e,t)){let e=g[t];console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:"remove"} \`${t}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${e.id}> for more info)`),delete g[t]}let t=(0,a.unified)().use(u.default).use(e.remarkPlugins||[]).use(s.default,{...e.remarkRehypeOptions,allowDangerousHtml:!0}).use(e.rehypePlugins||[]).use(f.default,e),n=new l.VFile;"string"==typeof e.children?n.value=e.children:void 0!==e.children&&null!==e.children&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);let r=t.runSync(t.parse(n),n);if("root"!==r.type)throw TypeError("Expected a `root` node");/** @type {ReactElement} */let i=(0,o.default).createElement(o.default.Fragment,{},(0,d.childrenToReact)({options:e,schema:p.html,listDepth:0},r));return e.className&&(i=(0,o.default).createElement("div",{className:e.className},i)),i}m.propTypes={// Core options:
children:/*@__PURE__*/e(c).string,// Layout options:
className:/*@__PURE__*/e(c).string,// Filter options:
allowElement:/*@__PURE__*/e(c).func,allowedElements:/*@__PURE__*/e(c).arrayOf(/*@__PURE__*/e(c).string),disallowedElements:/*@__PURE__*/e(c).arrayOf(/*@__PURE__*/e(c).string),unwrapDisallowed:/*@__PURE__*/e(c).bool,// Plugin options:
remarkPlugins:/*@__PURE__*/e(c).arrayOf(/*@__PURE__*/e(c).oneOfType([/*@__PURE__*/e(c).object,/*@__PURE__*/e(c).func,/*@__PURE__*/e(c).arrayOf(/*@__PURE__*/e(c).oneOfType([/*@__PURE__*/e(c).bool,/*@__PURE__*/e(c).string,/*@__PURE__*/e(c).object,/*@__PURE__*/e(c).func,/*@__PURE__*/e(c).arrayOf(/*@__PURE__*/e(c).any)]))])),rehypePlugins:/*@__PURE__*/e(c).arrayOf(/*@__PURE__*/e(c).oneOfType([/*@__PURE__*/e(c).object,/*@__PURE__*/e(c).func,/*@__PURE__*/e(c).arrayOf(/*@__PURE__*/e(c).oneOfType([/*@__PURE__*/e(c).bool,/*@__PURE__*/e(c).string,/*@__PURE__*/e(c).object,/*@__PURE__*/e(c).func,/*@__PURE__*/e(c).arrayOf(/*@__PURE__*/e(c).any)]))])),// Transform options:
sourcePos:/*@__PURE__*/e(c).bool,rawSourcePos:/*@__PURE__*/e(c).bool,skipHtml:/*@__PURE__*/e(c).bool,includeElementIndex:/*@__PURE__*/e(c).bool,transformLinkUri:/*@__PURE__*/e(c).oneOfType([/*@__PURE__*/e(c).func,/*@__PURE__*/e(c).bool]),linkTarget:/*@__PURE__*/e(c).oneOfType([/*@__PURE__*/e(c).func,/*@__PURE__*/e(c).string]),transformImageUri:/*@__PURE__*/e(c).func,components:/*@__PURE__*/e(c).object}}),n.register("8EANy",function(r,i){t(r.exports,"VFile",()=>f);/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 * @typedef {import('./minurl.shared.js').URL} URL
 * @typedef {import('../index.js').Data} Data
 * @typedef {import('../index.js').Value} Value
 *//**
 * @typedef {Record<string, unknown> & {type: string, position?: Position | undefined}} NodeLike
 *
 * @typedef {'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex'} BufferEncoding
 *   Encodings supported by the buffer class.
 *
 *   This is a copy of the types from Node, copied to prevent Node globals from
 *   being needed.
 *   Copied from: <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/90a4ec8/types/node/buffer.d.ts#L170>
 *
 * @typedef {Options | URL | Value | VFile} Compatible
 *   Things that can be passed to the constructor.
 *
 * @typedef VFileCoreOptions
 *   Set multiple values.
 * @property {Value | null | undefined} [value]
 *   Set `value`.
 * @property {string | null | undefined} [cwd]
 *   Set `cwd`.
 * @property {Array<string> | null | undefined} [history]
 *   Set `history`.
 * @property {URL | string | null | undefined} [path]
 *   Set `path`.
 * @property {string | null | undefined} [basename]
 *   Set `basename`.
 * @property {string | null | undefined} [stem]
 *   Set `stem`.
 * @property {string | null | undefined} [extname]
 *   Set `extname`.
 * @property {string | null | undefined} [dirname]
 *   Set `dirname`.
 * @property {Data | null | undefined} [data]
 *   Set `data`.
 *
 * @typedef Map
 *   Raw source map.
 *
 *   See:
 *   <https://github.com/mozilla/source-map/blob/58819f0/source-map.d.ts#L15-L23>.
 * @property {number} version
 *   Which version of the source map spec this map is following.
 * @property {Array<string>} sources
 *   An array of URLs to the original source files.
 * @property {Array<string>} names
 *   An array of identifiers which can be referenced by individual mappings.
 * @property {string | undefined} [sourceRoot]
 *   The URL root from which all sources are relative.
 * @property {Array<string> | undefined} [sourcesContent]
 *   An array of contents of the original source files.
 * @property {string} mappings
 *   A string of base64 VLQs which contain the actual mappings.
 * @property {string} file
 *   The generated file this source map is associated with.
 *
 * @typedef {{[key: string]: unknown} & VFileCoreOptions} Options
 *   Configuration.
 *
 *   A bunch of keys that will be shallow copied over to the new file.
 *
 * @typedef {Record<string, unknown>} ReporterSettings
 *   Configuration for reporters.
 *//**
 * @template {ReporterSettings} Settings
 *   Options type.
 * @callback Reporter
 *   Type for a reporter.
 * @param {Array<VFile>} files
 *   Files to report.
 * @param {Settings} options
 *   Configuration.
 * @returns {string}
 *   Report.
 */var o=n("1Tv42"),l=n("c9gcl"),a=n("acHbX"),u=n("cz21B");n("guBlg");var s=n("jfDid"),c=n("guBlg");/**
 * Order of setting (least specific to most), we need this because otherwise
 * `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
 * stem can be set.
 *
 * @type {Array<'basename' | 'dirname' | 'extname' | 'history' | 'path' | 'stem'>}
 */let p=["history","path","basename","stem","extname","dirname"];class f{/**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Buffer` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */constructor(t){let n,r;n=t?"string"==typeof t||/*@__PURE__*/e(o)(t)?{value:t}:(0,s.isUrl)(t)?{path:t}:t:{},/**
     * Place to store custom information (default: `{}`).
     *
     * It’s OK to store custom data directly on the file but moving it to
     * `data` is recommended.
     *
     * @type {Data}
     */this.data={},/**
     * List of messages associated with the file.
     *
     * @type {Array<VFileMessage>}
     */this.messages=[],/**
     * List of filepaths the file moved between.
     *
     * The first is the original path and the last is the current path.
     *
     * @type {Array<string>}
     */this.history=[],/**
     * Base of `path` (default: `process.cwd()` or `'/'` in browsers).
     *
     * @type {string}
     */this.cwd=(0,u.proc).cwd(),/* eslint-disable no-unused-expressions *//**
     * Raw value.
     *
     * @type {Value}
     */this.value,// The below are non-standard, they are “well-known”.
// As in, used in several tools.
/**
     * Whether a file was saved to disk.
     *
     * This is used by vfile reporters.
     *
     * @type {boolean}
     */this.stored,/**
     * Custom, non-string, compiled, representation.
     *
     * This is used by unified to store non-string results.
     * One example is when turning markdown into React nodes.
     *
     * @type {unknown}
     */this.result,/**
     * Source map.
     *
     * This type is equivalent to the `RawSourceMap` type from the `source-map`
     * module.
     *
     * @type {Map | null | undefined}
     */this.map;/* eslint-enable no-unused-expressions */// Set path related properties in the correct order.
let i=-1;for(;++i<p.length;){let e=p[i];e in n&&void 0!==n[e]&&null!==n[e]&&(this[e]="history"===e?[...n[e]]:n[e])}// Set non-path related properties.
for(r in n)p.includes(r)||(this[r]=n[r])}/**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   */get path(){return this.history[this.history.length-1]}/**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {string | URL} path
   */set path(e){(0,s.isUrl)(e)&&(e=(0,c.urlToPath)(e)),h(e,"path"),this.path!==e&&this.history.push(e)}/**
   * Get the parent path (example: `'~'`).
   */get dirname(){return"string"==typeof this.path?(0,a.path).dirname(this.path):void 0}/**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   */set dirname(e){g(this.basename,"dirname"),this.path=(0,a.path).join(e||"",this.basename)}/**
   * Get the basename (including extname) (example: `'index.min.js'`).
   */get basename(){return"string"==typeof this.path?(0,a.path).basename(this.path):void 0}/**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */set basename(e){h(e,"basename"),d(e,"basename"),this.path=(0,a.path).join(this.dirname||"",e)}/**
   * Get the extname (including dot) (example: `'.js'`).
   */get extname(){return"string"==typeof this.path?(0,a.path).extname(this.path):void 0}/**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   */set extname(e){if(d(e,"extname"),g(this.dirname,"extname"),e){if(46/* `.` */!==e.charCodeAt(0))throw Error("`extname` must start with `.`");if(e.includes(".",1))throw Error("`extname` cannot contain multiple dots")}this.path=(0,a.path).join(this.dirname,this.stem+(e||""))}/**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   */get stem(){return"string"==typeof this.path?(0,a.path).basename(this.path,this.extname):void 0}/**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */set stem(e){h(e,"stem"),d(e,"stem"),this.path=(0,a.path).join(this.dirname||"",e+(this.extname||""))}/**
   * Serialize the file.
   *
   * @param {BufferEncoding | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Buffer`
   *   (default: `'utf8'`).
   * @returns {string}
   *   Serialized file.
   */toString(e){return(this.value||"").toString(e||void 0)}/**
   * Create a warning message associated with the file.
   *
   * Its `fatal` is set to `false` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */message(e,t,n){let r=new l.VFileMessage(e,t,n);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}/**
   * Create an info message associated with the file.
   *
   * Its `fatal` is set to `null` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */info(e,t,n){let r=this.message(e,t,n);return r.fatal=null,r}/**
   * Create a fatal error associated with the file.
   *
   * Its `fatal` is set to `true` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * > 👉 **Note**: a fatal error means that a file is no longer processable.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Message.
   * @throws {VFileMessage}
   *   Message.
   */fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}}/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string | null | undefined} part
 *   File path part.
 * @param {string} name
 *   Part name.
 * @returns {void}
 *   Nothing.
 */function d(e,t){if(e&&e.includes(a.path.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+a.path.sep+"`")}/**
 * Assert that `part` is not empty.
 *
 * @param {string | undefined} part
 *   Thing.
 * @param {string} name
 *   Part name.
 * @returns {asserts part is string}
 *   Nothing.
 */function h(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}/**
 * Assert `path` exists.
 *
 * @param {string | undefined} path
 *   Path.
 * @param {string} name
 *   Dependency name.
 * @returns {asserts path is string}
 *   Nothing.
 */function g(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}}),n.register("1Tv42",function(e,t){/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}}),n.register("c9gcl",function(e,r){t(e.exports,"VFileMessage",()=>o);/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 * @typedef {object & {type: string, position?: Position | undefined}} NodeLike
 */var i=n("gHjNW");class o extends Error{/**
   * Create a message for `reason` at `place` from `origin`.
   *
   * When an error is passed in as `reason`, the `stack` is copied.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   *
   *   > 👉 **Note**: you should use markdown.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */// To do: next major: expose `undefined` everywhere instead of `null`.
constructor(e,t,n){/** @type {[string | null, string | null]} */let r=[null,null],o={// @ts-expect-error: we always follows the structure of `position`.
start:{line:null,column:null},// @ts-expect-error: "
end:{line:null,column:null}};if(super(),"string"==typeof t&&(n=t,t=void 0),"string"==typeof n){let e=n.indexOf(":");-1===e?r[1]=n:(r[0]=n.slice(0,e),r[1]=n.slice(e+1))}t&&("type"in t||"position"in t?t.position&&// @ts-expect-error: looks like a position.
(o=t.position):"start"in t||"end"in t?// To do: next major: deep clone.
o=t:("line"in t||"column"in t)&&(o.start=t)),// Fields from `Error`.
/**
     * Serialized positional info of error.
     *
     * On normal errors, this would be something like `ParseError`, buit in
     * `VFile` messages we use this space to show where an error happened.
     */this.name=(0,i.stringifyPosition)(t)||"1:1",/**
     * Reason for message.
     *
     * @type {string}
     */this.message="object"==typeof e?e.message:e,/**
     * Stack of message.
     *
     * This is used by normal errors to show where something happened in
     * programming code, irrelevant for `VFile` messages,
     *
     * @type {string}
     */this.stack="","object"==typeof e&&e.stack&&(this.stack=e.stack),/**
     * Reason for message.
     *
     * > 👉 **Note**: you should use markdown.
     *
     * @type {string}
     */this.reason=this.message,/* eslint-disable no-unused-expressions *//**
     * State of problem.
     *
     * * `true` — marks associated file as no longer processable (error)
     * * `false` — necessitates a (potential) change (warning)
     * * `null | undefined` — for things that might not need changing (info)
     *
     * @type {boolean | null | undefined}
     */this.fatal,/**
     * Starting line of error.
     *
     * @type {number | null}
     */this.line=o.start.line,/**
     * Starting column of error.
     *
     * @type {number | null}
     */this.column=o.start.column,/**
     * Full unist position.
     *
     * @type {Position | null}
     */this.position=o,/**
     * Namespace of message (example: `'my-package'`).
     *
     * @type {string | null}
     */this.source=r[0],/**
     * Category of message (example: `'my-rule'`).
     *
     * @type {string | null}
     */this.ruleId=r[1],/**
     * Path of a file (used throughout the `VFile` ecosystem).
     *
     * @type {string | null}
     */this.file,// The following fields are “well known”.
// Not standard.
// Feel free to add other non-standard fields to your messages.
/**
     * Specify the source value that’s being reported, which is deemed
     * incorrect.
     *
     * @type {string | null}
     */this.actual,/**
     * Suggest acceptable values that can be used instead of `actual`.
     *
     * @type {Array<string> | null}
     */this.expected,/**
     * Link to docs for the message.
     *
     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`
     * > to `new URL(x)`.
     *
     * @type {string | null}
     */this.url,/**
     * Long form description of the message (you should use markdown).
     *
     * @type {string | null}
     */this.note;/* eslint-enable no-unused-expressions */}}o.prototype.file="",o.prototype.name="",o.prototype.reason="",o.prototype.message="",o.prototype.stack="",o.prototype.fatal=null,o.prototype.column=null,o.prototype.line=null,o.prototype.source=null,o.prototype.ruleId=null,o.prototype.position=null}),n.register("gHjNW",function(e,n){/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 *//**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 *//**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Position | PositionLike | Point | PointLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */function r(e){return(// Nothing.
e&&"object"==typeof e?"position"in e||"type"in e?o(e.position):"start"in e||"end"in e?o(e):"line"in e||"column"in e?i(e):"":"")}/**
 * @param {Point | PointLike | null | undefined} point
 * @returns {string}
 */function i(e){return l(e&&e.line)+":"+l(e&&e.column)}/**
 * @param {Position | PositionLike | null | undefined} pos
 * @returns {string}
 */function o(e){return i(e&&e.start)+"-"+i(e&&e.end)}/**
 * @param {number | null | undefined} value
 * @returns {number}
 */function l(e){return e&&"number"==typeof e?e:1}t(e.exports,"stringifyPosition",()=>r)}),n.register("acHbX",function(e,n){t(e.exports,"path",()=>r);// A derivative work based on:
// <https://github.com/browserify/path-browserify>.
// Which is licensed:
//
// MIT License
//
// Copyright (c) 2013 James Halliday
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// A derivative work based on:
//
// Parts of that are extracted from Node’s internal `path` module:
// <https://github.com/nodejs/node/blob/master/lib/path.js>.
// Which is licensed:
//
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
let r={basename:/* eslint-disable max-depth, complexity *//**
 * Get the basename from a path.
 *
 * @param {string} path
 *   File path.
 * @param {string | undefined} [ext]
 *   Extension to strip.
 * @returns {string}
 *   Stem or basename.
 */function(e,t){let n;if(void 0!==t&&"string"!=typeof t)throw TypeError('"ext" argument must be a string');i(e);let r=0,o=-1,l=e.length;if(void 0===t||0===t.length||t.length>e.length){for(;l--;)if(47/* `/` */===e.charCodeAt(l)){if(n){r=l+1;break}}else o<0&&(// We saw the first non-path separator, mark this as the end of our
// path component.
n=!0,o=l+1);return o<0?"":e.slice(r,o)}if(t===e)return"";let a=-1,u=t.length-1;for(;l--;)if(47/* `/` */===e.charCodeAt(l)){if(n){r=l+1;break}}else a<0&&(// We saw the first non-path separator, remember this index in case
// we need it if the extension ends up not matching.
n=!0,a=l+1),u>-1&&(e.charCodeAt(l)===t.charCodeAt(u--)?u<0&&// component
(o=l):(// Extension does not match, so our result is the entire path
// component
u=-1,o=a));return r===o?o=a:o<0&&(o=e.length),e.slice(r,o)},dirname:/**
 * Get the dirname from a path.
 *
 * @param {string} path
 *   File path.
 * @returns {string}
 *   File path.
 */function(e){let t;if(i(e),0===e.length)return".";let n=-1,r=e.length;// Prefix `--` is important to not run on `0`.
for(;--r;)if(47/* `/` */===e.charCodeAt(r)){if(t){n=r;break}}else t||(t=!0);return n<0?47/* `/` */===e.charCodeAt(0)?"/":".":1===n&&47/* `/` */===e.charCodeAt(0)?"//":e.slice(0,n)},extname:/**
 * Get an extname from a path.
 *
 * @param {string} path
 *   File path.
 * @returns {string}
 *   Extname.
 */function(e){let t;i(e);let n=e.length,r=-1,o=0,l=-1,a=0;for(;n--;){let i=e.charCodeAt(n);if(47/* `/` */===i){// If we reached a path separator that was not part of a set of path
// separators at the end of the string, stop now.
if(t){o=n+1;break}continue}r<0&&(// We saw the first non-path separator, mark this as the end of our
// extension.
t=!0,r=n+1),46/* `.` */===i?l<0?l=n:1!==a&&(a=1):l>-1&&// have a good chance at having a non-empty extension.
(a=-1)}return l<0||r<0||// We saw a non-dot character immediately before the dot.
0===a||// The (right-most) trimmed path component is exactly `..`.
1===a&&l===r-1&&l===o+1?"":e.slice(l,r)},join:/**
 * Join segments from a path.
 *
 * @param {Array<string>} segments
 *   Path segments.
 * @returns {string}
 *   File path.
 */function(...e){let t,n=-1;for(;++n<e.length;)i(e[n]),e[n]&&(t=void 0===t?e[n]:t+"/"+e[n]);return void 0===t?".":/**
 * Normalize a basic file path.
 *
 * @param {string} path
 *   File path.
 * @returns {string}
 *   File path.
 */// Note: `normalize` is not exposed as `path.normalize`, so some code is
// manually removed from it.
function(e){i(e);let t=47/* `/` */===e.charCodeAt(0),n=/**
 * Resolve `.` and `..` elements in a path with directory names.
 *
 * @param {string} path
 *   File path.
 * @param {boolean} allowAboveRoot
 *   Whether `..` can move above root.
 * @returns {string}
 *   File path.
 */function(e,t){let n,r,i="",o=0,l=-1,a=0,u=-1;for(;++u<=e.length;){if(u<e.length)n=e.charCodeAt(u);else if(47/* `/` */===n)break;else n=47/* `/` */;if(47/* `/` */===n){if(l===u-1||1===a);else if(l!==u-1&&2===a){if(i.length<2||2!==o||46/* `.` */!==i.charCodeAt(i.length-1)||46/* `.` */!==i.charCodeAt(i.length-2)){if(i.length>2){if((r=i.lastIndexOf("/"))!==i.length-1){r<0?(i="",o=0):o=(i=i.slice(0,r)).length-1-i.lastIndexOf("/"),l=u,a=0;continue}}else if(i.length>0){i="",o=0,l=u,a=0;continue}}t&&(i=i.length>0?i+"/..":"..",o=2)}else i.length>0?i+="/"+e.slice(l+1,u):i=e.slice(l+1,u),o=u-l-1;l=u,a=0}else 46/* `.` */===n&&a>-1?a++:a=-1}return i}(e,!t);return 0!==n.length||t||(n="."),n.length>0&&47/* / */===e.charCodeAt(e.length-1)&&(n+="/"),t?"/"+n:n}(t)},sep:"/"};/**
 * Make sure `path` is a string.
 *
 * @param {string} path
 *   File path.
 * @returns {asserts path is string}
 *   Nothing.
 */function i(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}/* eslint-enable max-depth, complexity */}),n.register("cz21B",function(e,n){t(e.exports,"proc",()=>r);// Somewhat based on:
// <https://github.com/defunctzombie/node-process/blob/master/browser.js>.
// But I don’t think one tiny line of code can be copyrighted. 😅
let r={cwd:function(){return"/"}}}),n.register("guBlg",function(e,r){t(e.exports,"urlToPath",()=>o),t(e.exports,"isUrl",()=>n("jfDid").isUrl);/// <reference lib="dom" />
var i=n("jfDid");function o(e){if("string"==typeof e)e=new URL(e);else if(!(0,i.isUrl)(e)){/** @type {NodeJS.ErrnoException} */let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if("file:"!==e.protocol){/** @type {NodeJS.ErrnoException} */let e=TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return(/**
 * Get a path from a POSIX URL.
 *
 * @param {URL} url
 *   URL.
 * @returns {string}
 *   File path.
 */function(e){if(""!==e.hostname){/** @type {NodeJS.ErrnoException} */let e=TypeError('File URL host must be "localhost" or empty on darwin');throw e.code="ERR_INVALID_FILE_URL_HOST",e}let t=e.pathname,n=-1;for(;++n<t.length;)if(37/* `%` */===t.charCodeAt(n)&&50/* `2` */===t.charCodeAt(n+1)){let e=t.charCodeAt(n+2);if(70/* `F` */===e||102/* `f` */===e){/** @type {NodeJS.ErrnoException} */let e=TypeError("File URL path must not include encoded / characters");throw e.code="ERR_INVALID_FILE_URL_PATH",e}}return decodeURIComponent(t)}(e))}}),n.register("jfDid",function(e,n){t(e.exports,"isUrl",()=>r);/**
 * @typedef URL
 * @property {string} hash
 * @property {string} host
 * @property {string} hostname
 * @property {string} href
 * @property {string} origin
 * @property {string} password
 * @property {string} pathname
 * @property {string} port
 * @property {string} protocol
 * @property {string} search
 * @property {any} searchParams
 * @property {string} username
 * @property {() => string} toString
 * @property {() => string} toJSON
 *//**
 * Check if `fileUrlOrPath` looks like a URL.
 *
 * @param {unknown} fileUrlOrPath
 *   File path or URL.
 * @returns {fileUrlOrPath is URL}
 *   Whether it’s a URL.
 */// From: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js#L1501>
function r(e){return null!==e&&"object"==typeof e&&// @ts-expect-error: indexable.
e.href&&// @ts-expect-error: indexable.
e.origin}}),n.register("27vyP",function(r,i){t(r.exports,"unified",()=>p);/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('vfile').VFileCompatible} VFileCompatible
 * @typedef {import('vfile').VFileValue} VFileValue
 * @typedef {import('..').Processor} Processor
 * @typedef {import('..').Plugin} Plugin
 * @typedef {import('..').Preset} Preset
 * @typedef {import('..').Pluggable} Pluggable
 * @typedef {import('..').PluggableList} PluggableList
 * @typedef {import('..').Transformer} Transformer
 * @typedef {import('..').Parser} Parser
 * @typedef {import('..').Compiler} Compiler
 * @typedef {import('..').RunCallback} RunCallback
 * @typedef {import('..').ProcessCallback} ProcessCallback
 *
 * @typedef Context
 * @property {Node} tree
 * @property {VFile} file
 */var o=n("dEvVi"),l=n("1Tv42"),a=n("eWaCG"),u=n("4ld8y"),s=n("gpg7e"),c=n("8EANy");let p=// Function to create the first processor.
/**
 * @returns {Processor}
 */(function t(){let n;let r=(0,s.trough)(),i=[],c={},p=-1;// Expose.
return(// Data management.
// @ts-expect-error: overloads are handled.
k.data=/**
   * @param {string|Record<string, unknown>} [key]
   * @param {unknown} [value]
   * @returns {unknown}
   */function(e,t){return"string"==typeof e?// Set `key`.
2==arguments.length?(m("data",n),c[e]=t,k):f.call(c,e)&&c[e]||null:// Set space.
e?(m("data",n),c=e,k):c},k.Parser=void 0,k.Compiler=void 0,// Lock.
k.freeze=/** @type {Processor['freeze']} */function(){if(n)return k;for(;++p<i.length;){let[e,...t]=i[p];if(!1===t[0])continue;!0===t[0]&&(t[0]=void 0);/** @type {Transformer|void} */let n=e.call(k,...t);"function"==typeof n&&r.use(n)}return n=!0,p=Number.POSITIVE_INFINITY,k},// Plugins.
k.attachers=i,// @ts-expect-error: overloads are handled.
k.use=/**
   * @param {Pluggable|null|undefined} [value]
   * @param {...unknown} options
   * @returns {Processor}
   */function(t,...r){/** @type {Record<string, unknown>|undefined} */let o;if(m("use",n),null==t);else if("function"==typeof t)p(t,...r);else if("object"==typeof t)Array.isArray(t)?s(t):l(t);else throw TypeError("Expected usable value, not `"+t+"`");return o&&(c.settings=Object.assign(c.settings||{},o)),k;/**
     * @param {Preset} result
     * @returns {void}
     */function l(e){s(e.plugins),e.settings&&(o=Object.assign(o||{},e.settings))}/**
     * @param {PluggableList|null|undefined} [plugins]
     * @returns {void}
     */function s(e){let t=-1;if(null==e);else if(Array.isArray(e))for(;++t<e.length;){let n=e[t];!/**
     * @param {import('..').Pluggable<unknown[]>} value
     * @returns {void}
     */function(e){if("function"==typeof e)p(e);else if("object"==typeof e){if(Array.isArray(e)){let[t,...n]=e;p(t,...n)}else l(e)}else throw TypeError("Expected usable value, not `"+e+"`")}(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}/**
     * @param {Plugin} plugin
     * @param {...unknown} [value]
     * @returns {void}
     */function p(t,n){let r,o=-1;for(;++o<i.length;)if(i[o][0]===t){r=i[o];break}r?((0,u.default)(r[1])&&(0,u.default)(n)&&(n=/*@__PURE__*/e(a)(!0,r[1],n)),r[1]=n):i.push([...arguments])}},// API.
k.parse=/** @type {Processor['parse']} */function(e){k.freeze();let t=x(e),n=k.Parser;return(h("parse",n),d(n,"parse"))?new n(String(t),t).parse():n(String(t),t)// eslint-disable-line new-cap
},k.stringify=/** @type {Processor['stringify']} */function(e,t){k.freeze();let n=x(t),r=k.Compiler;return(g("stringify",r),y(e),d(r,"compile"))?new r(e,n).compile():r(e,n)// eslint-disable-line new-cap
},// @ts-expect-error: overloads are handled.
k.run=/**
   * @param {Node} node
   * @param {VFileCompatible|RunCallback} [doc]
   * @param {RunCallback} [callback]
   * @returns {Promise<Node>|void}
   */function(e,t,n){if(y(e),k.freeze(),n||"function"!=typeof t||(n=t,t=void 0),!n)return new Promise(i);/**
     * @param {null|((node: Node) => void)} resolve
     * @param {(error: Error) => void} reject
     * @returns {void}
     */function i(i,o){// @ts-expect-error: `doc` can’t be a callback anymore, we checked.
r.run(e,x(t),/**
       * @param {Error|null} error
       * @param {Node} tree
       * @param {VFile} file
       * @returns {void}
       */function(t,r,l){r=r||e,t?o(t):i?i(r):n(null,r,l)})}i(null,n)},k.runSync=/** @type {Processor['runSync']} */function(e,t){/** @type {Node|undefined} */let n,r;// @ts-expect-error: we either bailed on an error or have a tree.
return k.run(e,t,/**
     * @param {Error|null} [error]
     * @param {Node} [tree]
     * @returns {void}
     */function(e,t){(0,o.bail)(e),n=t,r=!0}),b("runSync","run",r),n},// @ts-expect-error: overloads are handled.
k.process=/**
   * @param {VFileCompatible} doc
   * @param {ProcessCallback} [callback]
   * @returns {Promise<VFile>|undefined}
   */function(t,n){if(k.freeze(),h("process",k.Parser),g("process",k.Compiler),!n)return new Promise(r);/**
     * @param {null|((file: VFile) => void)} resolve
     * @param {(error?: Error|null|undefined) => void} reject
     * @returns {void}
     */function r(r,i){let o=x(t);/**
       * @param {Error|null|undefined} [error]
       * @param {VFile|undefined} [file]
       * @returns {void}
       */function a(e,t){e||!t?i(e):r?r(t):n(null,t)}k.run(k.parse(o),o,(t,n,r)=>{if(!t&&n&&r){/** @type {unknown} */let i=k.stringify(n,r);null==i||("string"==typeof i||/*@__PURE__*/e(l)(i)?r.value=i:r.result=i),a(t,r)}else a(t)})}r(null,n)},k.processSync=/** @type {Processor['processSync']} */function(e){let t;k.freeze(),h("processSync",k.Parser),g("processSync",k.Compiler);let n=x(e);return k.process(n,/**
     * @param {Error|null|undefined} [error]
     * @returns {void}
     */function(e){t=!0,(0,o.bail)(e)}),b("processSync","process",t),n},k);// Create a new processor based on the processor in the current scope.
/** @type {Processor} */function k(){let n=t(),r=-1;for(;++r<i.length;)n.use(...i[r]);return n.data(/*@__PURE__*/e(a)(!0,{},c)),n}})().freeze(),f={}.hasOwnProperty;/**
 * Check if `value` is a constructor.
 *
 * @param {unknown} value
 * @param {string} name
 * @returns {boolean}
 */function d(e,t){return"function"==typeof e&&// Prototypes do exist.
// type-coverage:ignore-next-line
e.prototype&&// A function with keys in its prototype is probably a constructor.
// Classes’ prototype methods are not enumerable, so we check if some value
// exists in the prototype.
// type-coverage:ignore-next-line
(/**
 * Check if `value` is an object with keys.
 *
 * @param {Record<string, unknown>} value
 * @returns {boolean}
 */function(e){/** @type {string} */let t;for(t in e)if(f.call(e,t))return!0;return!1}(e.prototype)||t in e.prototype)}/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */function h(e,t){if("function"!=typeof t)throw TypeError("Cannot `"+e+"` without `Parser`")}/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */function g(e,t){if("function"!=typeof t)throw TypeError("Cannot `"+e+"` without `Compiler`")}/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */function m(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */function y(e){// `isPlainObj` unfortunately uses `any` instead of `unknown`.
// type-coverage:ignore-next-line
if(!(0,u.default)(e)||"string"!=typeof e.type)throw TypeError("Expected node, got `"+e+"`")}/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */function b(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}/**
 * @param {VFileCompatible} [value]
 * @returns {VFile}
 */function x(e){return e&&"object"==typeof e&&"message"in e&&"messages"in e?e:new c.VFile(e)}}),n.register("dEvVi",function(e,n){t(e.exports,"bail",()=>r);/**
 * Throw a given error.
 *
 * @param {Error|null|undefined} [error]
 *   Maybe error.
 * @returns {asserts error is null|undefined}
 */function r(e){if(e)throw e}}),n.register("eWaCG",function(e,t){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===r.call(e)},a=function(e){if(!e||"[object Object]"!==r.call(e))return!1;var t,i=n.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,"isPrototypeOf");// Not own constructor property must be Object
if(e.constructor&&!i&&!o)return!1;for(t in e);return void 0===t||n.call(e,t)},u=function(e,t){i&&"__proto__"===t.name?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},s=function(e,t){if("__proto__"===t){if(!n.call(e,t))return;if(o)// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
return o(e,t).value}return e[t]};e.exports=function e(){var t,n,r,i,o,c,p=arguments[0],f=1,d=arguments.length,h=!1;for("boolean"==typeof p&&(h=p,p=arguments[1]||{},// skip the boolean and the target
f=2),(null==p||"object"!=typeof p&&"function"!=typeof p)&&(p={});f<d;++f)// Only deal with non-null/undefined values
if(t=arguments[f],null!=t)for(n in t)r=s(p,n),p!==(i=s(t,n))&&(h&&i&&(a(i)||(o=l(i)))?(o?(o=!1,c=r&&l(r)?r:[]):c=r&&a(r)?r:{},// Never move original objects, clone them
u(p,{name:n,newValue:e(h,c,i)})):void 0!==i&&u(p,{name:n,newValue:i}));// Return the modified object
return p}}),n.register("4ld8y",function(e,n){t(e.exports,"default",()=>r);function r(e){if("object"!=typeof e||null===e)return!1;let t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}}),n.register("gpg7e",function(e,n){/**
 * @typedef {(error?: Error|null|undefined, ...output: Array<any>) => void} Callback
 * @typedef {(...input: Array<any>) => any} Middleware
 *
 * @typedef {(...input: Array<any>) => void} Run
 *   Call all middleware.
 * @typedef {(fn: Middleware) => Pipeline} Use
 *   Add `fn` (middleware) to the list.
 * @typedef {{run: Run, use: Use}} Pipeline
 *   Middleware.
 *//**
 * Create new middleware.
 *
 * @returns {Pipeline}
 */function r(){/** @type {Array<Middleware>} */let e=[],t={run:/** @type {Run} */function(...t){let n=-1,r=t.pop();if("function"!=typeof r)throw TypeError("Expected function as last argument, not "+r);/**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error|null|undefined} error
     * @param {Array<any>} output
     */(function i(o,...l){let a=e[++n],u=-1;if(o){r(o);return}// Copy non-nullish input into values.
for(;++u<t.length;)(null===l[u]||void 0===l[u])&&(l[u]=t[u]);// Save the newly created `output` for the next call.
t=l,a?(function(e,t){/** @type {boolean} */let n;return(/**
   * Call `middleware`.
   * @this {any}
   * @param {Array<any>} parameters
   * @returns {void}
   */function(...t){let o;let l=e.length>t.length;l&&t.push(r);try{o=e.apply(this,t)}catch(e){// Well, this is quite the pickle.
// `middleware` received a callback and called it synchronously, but that
// threw an error.
// The only thing left to do is to throw the thing instead.
if(l&&n)throw /** @type {Error} */e;return r(e)}l||(o instanceof Promise?o.then(i,r):o instanceof Error?r(o):i(o))});/**
   * Call `callback`, only once.
   * @type {Callback}
   */function r(e,...i){n||(n=!0,t(e,...i))}/**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */function i(e){r(null,e)}})(a,i)(...l):r(null,...l)})(null,...t)},use:/** @type {Use} */function(n){if("function"!=typeof n)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}};return t}t(e.exports,"trough",()=>r)}),n.register("73kRC",function(e,r){t(e.exports,"default",()=>i);var i=n("dMaXS").default}),n.register("dMaXS",function(e,r){t(e.exports,"default",()=>o);/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').Options} Options
 */var i=n("1YdnK");function o(e){Object.assign(this,{Parser:t=>{// Assume options.
let n=/** @type {Options} */this.data("settings");return(0,i.fromMarkdown)(t,Object.assign({},n,e,{// Note: these options are not in the readme.
// The goal is for them to be set by plugins on `data` instead of being
// passed by users.
extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))}})}}),n.register("1YdnK",function(e,r){t(e.exports,"fromMarkdown",()=>h);/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Value} Value
 *
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist').Point} Point
 *
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').StaticPhrasingContent} StaticPhrasingContent
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').Break} Break
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('mdast').Code} Code
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('mdast').Text} Text
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('mdast').ReferenceType} ReferenceType
 * @typedef {import('../index.js').CompileData} CompileData
 *//**
 * @typedef {Root | Content} Node
 * @typedef {Extract<Node, UnistParent>} Parent
 *
 * @typedef {Omit<UnistParent, 'type' | 'children'> & {type: 'fragment', children: Array<PhrasingContent>}} Fragment
 *//**
 * @callback Transform
 *   Extra transform, to change the AST afterwards.
 * @param {Root} tree
 *   Tree to transform.
 * @returns {Root | undefined | null | void}
 *   New tree or nothing (in which case the current tree is used).
 *
 * @callback Handle
 *   Handle a token.
 * @param {CompileContext} this
 *   Context.
 * @param {Token} token
 *   Current token.
 * @returns {void}
 *   Nothing.
 *
 * @typedef {Record<string, Handle>} Handles
 *   Token types mapping to handles
 *
 * @callback OnEnterError
 *   Handle the case where the `right` token is open, but it is closed (by the
 *   `left` token) or because we reached the end of the document.
 * @param {Omit<CompileContext, 'sliceSerialize'>} this
 *   Context.
 * @param {Token | undefined} left
 *   Left token.
 * @param {Token} right
 *   Right token.
 * @returns {void}
 *   Nothing.
 *
 * @callback OnExitError
 *   Handle the case where the `right` token is open but it is closed by
 *   exiting the `left` token.
 * @param {Omit<CompileContext, 'sliceSerialize'>} this
 *   Context.
 * @param {Token} left
 *   Left token.
 * @param {Token} right
 *   Right token.
 * @returns {void}
 *   Nothing.
 *
 * @typedef {[Token, OnEnterError | undefined]} TokenTuple
 *   Open token on the stack, with an optional error handler for when
 *   that token isn’t closed properly.
 *//**
 * @typedef Config
 *   Configuration.
 *
 *   We have our defaults, but extensions will add more.
 * @property {Array<string>} canContainEols
 *   Token types where line endings are used.
 * @property {Handles} enter
 *   Opening handles.
 * @property {Handles} exit
 *   Closing handles.
 * @property {Array<Transform>} transforms
 *   Tree transforms.
 *
 * @typedef {Partial<Config>} Extension
 *   Change how markdown tokens from micromark are turned into mdast.
 *
 * @typedef CompileContext
 *   mdast compiler context.
 * @property {Array<Node | Fragment>} stack
 *   Stack of nodes.
 * @property {Array<TokenTuple>} tokenStack
 *   Stack of tokens.
 * @property {<Key extends keyof CompileData>(key: Key) => CompileData[Key]} getData
 *   Get data from the key/value store.
 * @property {<Key extends keyof CompileData>(key: Key, value?: CompileData[Key]) => void} setData
 *   Set data into the key/value store.
 * @property {(this: CompileContext) => void} buffer
 *   Capture some of the output data.
 * @property {(this: CompileContext) => string} resume
 *   Stop capturing and access the output data.
 * @property {<Kind extends Node>(this: CompileContext, node: Kind, token: Token, onError?: OnEnterError) => Kind} enter
 *   Enter a token.
 * @property {(this: CompileContext, token: Token, onError?: OnExitError) => Node} exit
 *   Exit a token.
 * @property {TokenizeContext['sliceSerialize']} sliceSerialize
 *   Get the string value of a token.
 * @property {Config} config
 *   Configuration.
 *
 * @typedef FromMarkdownOptions
 *   Configuration for how to build mdast.
 * @property {Array<Extension | Array<Extension>> | null | undefined} [mdastExtensions]
 *   Extensions for this utility to change how tokens are turned into a tree.
 *
 * @typedef {ParseOptions & FromMarkdownOptions} Options
 *   Configuration.
 */// To do: micromark: create a registry of tokens?
// To do: next major: don’t return given `Node` from `enter`.
// To do: next major: remove setter/getter.
var i=n("2lcqI"),o=n("cTtHt"),l=n("lw7ce"),a=n("3gGaD"),u=n("gZtaX"),s=n("8OH7a"),c=n("3ac70"),p=n("3HEPL"),f=n("gHjNW");let d={}.hasOwnProperty,h=/**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options | null | undefined) => Root) &
   *   ((value: Value, options?: Options | null | undefined) => Root)
   * )}
   *//**
   * @param {Value} value
   * @param {Encoding | Options | null | undefined} [encoding]
   * @param {Options | null | undefined} [options]
   * @returns {Root}
   */function(e,t,n){return"string"!=typeof t&&(n=t,t=void 0),/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options | null | undefined} [options]
 */(function(e){/** @type {Config} */let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(L),autolinkProtocol:k,autolinkEmail:k,atxHeading:l(E),blockQuote:l(//
// Creaters.
//
/** @returns {Blockquote} */function(){return{type:"blockquote",children:[]}}),characterEscape:k,characterReference:k,codeFenced:l(S),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:l(S,a),codeText:l(/** @returns {InlineCode} */function(){return{type:"inlineCode",value:""}},a),codeTextData:k,data:k,codeFlowValue:k,definition:l(/** @returns {Definition} */function(){return{type:"definition",identifier:"",label:null,title:null,url:""}}),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:l(/** @returns {Emphasis} */function(){return{type:"emphasis",children:[]}}),hardBreakEscape:l(A),hardBreakTrailing:l(A),htmlFlow:l(C,a),htmlFlowData:k,htmlText:l(C,a),htmlTextData:k,image:l(/** @returns {Image} */function(){return{type:"image",title:null,url:"",alt:null}}),label:a,link:l(L),listItem:l(/**
   * @param {Token} token
   * @returns {ListItem}
   */function(e){return{type:"listItem",// @ts-expect-error Patched.
spread:e._spread,checked:null,children:[]}}),listItemValue:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){if(n.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),n.expectingFirstListItemValue=void 0}},listOrdered:l(T,//
// Handlers.
//
/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){n.expectingFirstListItemValue=!0}),listUnordered:l(T),paragraph:l(/** @returns {Paragraph} */function(){return{type:"paragraph",children:[]}}),reference:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){n.referenceType="collapsed"},referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:l(E),strong:l(/** @returns {Strong} */function(){return{type:"strong",children:[]}}),thematicBreak:l(/** @returns {ThematicBreak} */function(){return{type:"thematicBreak"}})},exit:{atxHeading:y(),atxHeadingSequence:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let t=this.stack[this.stack.length-1];if(!t.depth){let n=this.sliceSerialize(e).length;t.depth=n}},autolink:y(),autolinkEmail:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){v.call(this,e);let t=this.stack[this.stack.length-1];t.url="mailto:"+this.sliceSerialize(e)},autolinkProtocol:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){v.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)},blockQuote:y(),characterEscapeValue:v,characterReferenceMarkerHexadecimal:w,characterReferenceMarkerNumeric:w,characterReferenceValue:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let t;let r=this.sliceSerialize(e),i=n.characterReferenceType;if(i)t=(0,u.decodeNumericCharacterReference)(r,"characterReferenceMarkerNumeric"===i?10:16),n.characterReferenceType=void 0;else{let e=(0,p.decodeNamedCharacterReference)(r);t=e}let o=this.stack.pop();o.value+=t,o.position.end=g(e.end)},codeFenced:y(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),n.flowCodeInside=void 0}),codeFencedFence:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){!n.flowCodeInside&&(this.buffer(),n.flowCodeInside=!0)},codeFencedFenceInfo:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e},codeFencedFenceMeta:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e},codeFlowValue:v,codeIndented:y(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,"")}),codeText:y(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}),codeTextData:v,data:v,definition:y(),definitionDestinationString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e},definitionLabelString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,c.normalizeIdentifier)(this.sliceSerialize(e)).toLowerCase()},definitionTitleString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e},emphasis:y(),hardBreakEscape:y(D),hardBreakTrailing:y(D),htmlFlow:y(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}),htmlFlowData:v,htmlText:y(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}),htmlTextData:v,image:y(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.stack[this.stack.length-1];// Note: there are also `identifier` and `label` fields on this link node!
// These are used / cleaned here.
// To do: clean.
if(n.inReference){/** @type {ReferenceType} */let t=n.referenceType||"shortcut";e.type+="Reference",// @ts-expect-error: mutate.
e.referenceType=t,// @ts-expect-error: mutate.
delete e.url,delete e.title}else // @ts-expect-error: mutate.
delete e.identifier,// @ts-expect-error: mutate.
delete e.label;n.referenceType=void 0}),label:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.stack[this.stack.length-1],t=this.resume(),r=this.stack[this.stack.length-1];if(n.inReference=!0,"link"===r.type){/** @type {Array<StaticPhrasingContent>} */// @ts-expect-error: Assume static phrasing content.
let t=e.children;r.children=t}else r.alt=t},labelText:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];// @ts-expect-error: stash this on the node, as it might become a reference
// later.
n.label=(0,s.decodeString)(t),// @ts-expect-error: same as above.
n.identifier=(0,c.normalizeIdentifier)(t).toLowerCase()},lineEnding:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let r=this.stack[this.stack.length-1];// If we’re at a hard break, include the line ending in there.
if(n.atHardBreak){let t=r.children[r.children.length-1];t.position.end=g(e.end),n.atHardBreak=void 0;return}!n.setextHeadingSlurpLineEnding&&t.canContainEols.includes(r.type)&&(k.call(this,e),v.call(this,e))},link:y(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.stack[this.stack.length-1];// Note: there are also `identifier` and `label` fields on this link node!
// These are used / cleaned here.
// To do: clean.
if(n.inReference){/** @type {ReferenceType} */let t=n.referenceType||"shortcut";e.type+="Reference",// @ts-expect-error: mutate.
e.referenceType=t,// @ts-expect-error: mutate.
delete e.url,delete e.title}else // @ts-expect-error: mutate.
delete e.identifier,// @ts-expect-error: mutate.
delete e.label;n.referenceType=void 0}),listItem:y(),listOrdered:y(),listUnordered:y(),paragraph:y(),referenceString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let t=this.resume(),r=this.stack[this.stack.length-1];// @ts-expect-error: stash this on the node, as it might become a reference
// later.
r.label=t,// @ts-expect-error: same as above.
r.identifier=(0,c.normalizeIdentifier)(this.sliceSerialize(e)).toLowerCase(),n.referenceType="full"},resourceDestinationString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e},resourceTitleString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e},resource:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){n.inReference=void 0},setextHeading:y(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){n.setextHeadingSlurpLineEnding=void 0}),setextHeadingLineSequence:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let t=this.stack[this.stack.length-1];t.depth=61===this.sliceSerialize(e).charCodeAt(0)?1:2},setextHeadingText:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){n.setextHeadingSlurpLineEnding=!0},strong:y(),thematicBreak:y()}};/**
 * @param {Config} combined
 * @param {Array<Extension | Array<Extension>>} extensions
 * @returns {void}
 */(function e(t,n){let r=-1;for(;++r<n.length;){let i=n[r];Array.isArray(i)?e(t,i):/**
 * @param {Config} combined
 * @param {Extension} extension
 * @returns {void}
 */function(e,t){/** @type {keyof Extension} */let n;for(n in t)if(d.call(t,n)){if("canContainEols"===n){let r=t[n];r&&e[n].push(...r)}else if("transforms"===n){let r=t[n];r&&e[n].push(...r)}else if("enter"===n||"exit"===n){let r=t[n];r&&Object.assign(e[n],r)}}}(t,i)}})(t,(e||{}).mdastExtensions||[]);/** @type {CompileData} */let n={};return(/**
   * Turn micromark events into an mdast tree.
   *
   * @param {Array<Event>} events
   *   Events.
   * @returns {Root}
   *   mdast tree.
   */function(e){/** @type {Root} */let n={type:"root",children:[]},i={stack:[n],tokenStack:[],config:t,enter:h,exit:b,buffer:a,resume:x,setData:r,getData:o},l=[],u=-1;for(;++u<e.length;)// items the list itself are spread out.
if("listOrdered"===e[u][1].type||"listUnordered"===e[u][1].type){if("enter"===e[u][0])l.push(u);else{let t=l.pop();u=/**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */function(e,t,n){let r,i,o,l,a=t-1,u=-1,s=!1;for(;++a<=n;){let t=e[a];if("listUnordered"===t[1].type||"listOrdered"===t[1].type||"blockQuote"===t[1].type?("enter"===t[0]?u++:u--,l=void 0):"lineEndingBlank"===t[1].type?"enter"===t[0]&&(!r||l||u||o||(o=a),l=void 0):"linePrefix"===t[1].type||"listItemValue"===t[1].type||"listItemMarker"===t[1].type||"listItemPrefix"===t[1].type||"listItemPrefixWhitespace"===t[1].type||(l=void 0),!u&&"enter"===t[0]&&"listItemPrefix"===t[1].type||-1===u&&"exit"===t[0]&&("listUnordered"===t[1].type||"listOrdered"===t[1].type)){if(r){let l=a;for(i=void 0;l--;){let t=e[l];if("lineEnding"===t[1].type||"lineEndingBlank"===t[1].type){if("exit"===t[0])continue;i&&(e[i][1].type="lineEndingBlank",s=!0),t[1].type="lineEnding",i=l}else if("linePrefix"===t[1].type||"blockQuotePrefix"===t[1].type||"blockQuotePrefixWhitespace"===t[1].type||"blockQuoteMarker"===t[1].type||"listItemIndent"===t[1].type);else break}o&&(!i||o<i)&&(r._spread=!0),// Fix position.
r.end=Object.assign({},i?e[i][1].start:t[1].end),e.splice(i||a,0,["exit",r,t[2]]),a++,n++}"listItemPrefix"===t[1].type&&(r={type:"listItem",// @ts-expect-error Patched
_spread:!1,start:Object.assign({},t[1].start)},// @ts-expect-error: `listItem` is most definitely defined, TS...
e.splice(a,0,["enter",r,t[2]]),a++,n++,o=void 0,l=!0)}}return(// @ts-expect-error Patched.
e[t][1]._spread=s,n)}(e,t,u)}}for(u=-1;++u<e.length;){let n=t[e[u][0]];d.call(n,e[u][1].type)&&n[e[u][1].type].call(Object.assign({sliceSerialize:e[u][2].sliceSerialize},i),e[u][1])}// Handle tokens still being open.
if(i.tokenStack.length>0){let e=i.tokenStack[i.tokenStack.length-1],t=e[1]||m;t.call(i,void 0,e[0])}for(// Figure out `root` position.
n.position={start:g(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:g(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},// Call transforms.
u=-1;++u<t.transforms.length;)n=t.transforms[u](n)||n;return n});/**
   * Set data.
   *
   * @template {keyof CompileData} Key
   *   Field type.
   * @param {Key} key
   *   Key of field.
   * @param {CompileData[Key]} [value]
   *   New value.
   * @returns {void}
   *   Nothing.
   */function r(e,t){n[e]=t}/**
   * Get data.
   *
   * @template {keyof CompileData} Key
   *   Field type.
   * @param {Key} key
   *   Key of field.
   * @returns {CompileData[Key]}
   *   Value.
   */function o(e){return n[e]}/**
   * Create an opener handle.
   *
   * @param {(token: Token) => Node} create
   *   Create a node.
   * @param {Handle} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */function l(e,t){return(/**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */function(n){h.call(this,e(n),n),t&&t.call(this,n)})}/**
   * @this {CompileContext}
   * @returns {void}
   */function a(){this.stack.push({type:"fragment",children:[]})}/**
   * @template {Node} Kind
   *   Node type.
   * @this {CompileContext}
   *   Context.
   * @param {Kind} node
   *   Node to enter.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnEnterError | undefined} [errorHandler]
   *   Handle the case where this token is open, but it is closed by something else.
   * @returns {Kind}
   *   The given node.
   */function h(e,t,n){let r=this.stack[this.stack.length-1];return(// @ts-expect-error: Assume `Node` can exist as a child of `parent`.
r.children.push(e),this.stack.push(e),this.tokenStack.push([t,n]),// @ts-expect-error: `end` will be patched later.
e.position={start:g(t.start)},e)}/**
   * Create a closer handle.
   *
   * @param {Handle} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */function y(e){return(/**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */function(t){e&&e.call(this,t),b.call(this,t)})}/**
   * @this {CompileContext}
   *   Context.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnExitError | undefined} [onExitError]
   *   Handle the case where another token is open.
   * @returns {Node}
   *   The closed node.
   */function b(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r){if(r[0].type!==e.type){if(t)t.call(this,e,r[0]);else{let t=r[1]||m;t.call(this,e,r[0])}}}else throw Error("Cannot close `"+e.type+"` ("+(0,f.stringifyPosition)({start:e.start,end:e.end})+"): it’s not open");return n.position.end=g(e.end),n}/**
   * @this {CompileContext}
   * @returns {string}
   */function x(){return(0,i.toString)(this.stack.pop())}/**
   * @this {CompileContext}
   * @type {Handle}
   */function k(e){let t=this.stack[this.stack.length-1],n=t.children[t.children.length-1];n&&"text"===n.type||(// @ts-expect-error: we’ll add `end` later.
// Add a new text node.
(n={type:"text",value:""}).position={start:g(e.start)},// @ts-expect-error: Assume `parent` accepts `text`.
t.children.push(n)),this.stack.push(n)}/**
   * @this {CompileContext}
   * @type {Handle}
   */function v(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=g(e.end)}/**
   * @this {CompileContext}
   * @type {Handle}
   */function D(){n.atHardBreak=!0}/**
   * @this {CompileContext}
   * @type {Handle}
   */function w(e){var t;t=e.type,n.characterReferenceType=t}/** @returns {Code} */function S(){return{type:"code",lang:null,meta:null,value:""}}/** @returns {Heading} */function E(){// @ts-expect-error `depth` will be set later.
return{type:"heading",depth:void 0,children:[]}}/** @returns {Break} */function A(){return{type:"break"}}/** @returns {HTML} */function C(){return{type:"html",value:""}}/** @returns {Link} */function L(){return{type:"link",title:null,url:"",children:[]}}/**
   * @param {Token} token
   * @returns {List}
   */function T(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,// @ts-expect-error Patched.
spread:e._spread,children:[]}}})(n)((0,a.postprocess)((0,o.parse)(n).document().write((0,l.preprocess)()(e,t,!0))))};/**
 * Copy a point-like value.
 *
 * @param {Point} d
 *   Point-like value.
 * @returns {Point}
 *   unist point.
 */function g(e){return{line:e.line,column:e.column,offset:e.offset}}/** @type {OnEnterError} */function m(e,t){if(e)throw Error("Cannot close `"+e.type+"` ("+(0,f.stringifyPosition)({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+(0,f.stringifyPosition)({start:t.start,end:t.end})+") is open");throw Error("Cannot close document, a token (`"+t.type+"`, "+(0,f.stringifyPosition)({start:t.start,end:t.end})+") is still open")}}),n.register("2lcqI",function(e,n){/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [includeImageAlt=true]
 *   Whether to use `alt` for `image`s.
 *//**
 * Get the text content of a node or list of nodes.
 *
 * Prefers the node’s plain-text fields, otherwise serializes its children,
 * and if the given value is an array, serialize the nodes in it.
 *
 * @param {unknown} value
 *   Thing to serialize, typically `Node`.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {string}
 *   Serialized `value`.
 */function r(e,t){let n=(t||{}).includeImageAlt;return i(e,"boolean"!=typeof n||n)}/**
 * One node or several nodes.
 *
 * @param {unknown} value
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @returns {string}
 *   Serialized node.
 */function i(e,t){return!!(e&&"object"==typeof e)&&("value"in e&&e.value||t&&"alt"in e&&e.alt||"children"in e&&o(e.children,t))||Array.isArray(e)&&o(e,t)||""}/**
 * Serialize a list of nodes.
 *
 * @param {Array<unknown>} values
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @returns {string}
 *   Serialized nodes.
 */function o(e,t){/** @type {Array<string>} */let n=[],r=-1;for(;++r<e.length;)n[r]=i(e[r],t);return n.join("")}t(e.exports,"toString",()=>r)}),n.register("cTtHt",function(e,r){t(e.exports,"parse",()=>p);/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Create} Create
 */var i=n("9UGYc"),o=n("2oNzp"),l=n("lAK8r"),a=n("gxpzI"),u=n("l2tD0"),s=n("8MiTe"),c=n("6HWiY");function p(e={}){/** @type {FullNormalizedExtension} */// @ts-expect-error `defaultConstructs` is full, so the result will be too.
let t=(0,i.combineExtensions)([c].concat(e.extensions||[])),n={defined:[],lazy:{},constructs:t,content:r(o.content),document:r(l.document),flow:r(a.flow),string:r(u.string),text:r(u.text)};return n;/**
   * @param {InitialConstruct} initial
   */function r(e){return /** @type {Create} */function(t){return(0,s.createTokenizer)(n,e,t)}}}}),n.register("9UGYc",function(e,r){t(e.exports,"combineExtensions",()=>l);/**
 * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */var i=n("2Qp1S");let o={}.hasOwnProperty;function l(e){/** @type {NormalizedExtension} */let t={},n=-1;for(;++n<e.length;)/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all Extension to merge into.
 * @param {Extension} extension Extension to merge.
 * @returns {void}
 */(function(e,t){/** @type {string} */let n;for(n in t){let r;let l=o.call(e,n)?e[n]:void 0,a=l||(e[n]={}),u=t[n];for(r in u){o.call(a,r)||(a[r]=[]);let e=u[r];/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {unknown[]} existing
 * @param {unknown[]} list
 * @returns {void}
 */(function(e,t){let n=-1,r=[];for(;++n<t.length;)("after"===t[n].add?e:r).push(t[n]);(0,i.splice)(e,0,0,r)})(a[r],Array.isArray(e)?e:e?[e]:[])}}})(t,e[n]);return t}}),n.register("2Qp1S",function(e,n){/**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {number} start
 * @param {number} remove
 * @param {T[]} items
 * @returns {void}
 */function r(e,t,n,r){let i// Make start between zero and `end` (included).
;let o=e.length,l=0;if(t=t<0?-t>o?0:o+t:t>o?o:t,n=n>0?n:0// No need to chunk the items if there’s only a couple (10k) items.
,r.length<1e4)(i=Array.from(r)).unshift(t,n)// @ts-expect-error Hush, it’s fine.
,[].splice.apply(e,i);else for(n&&[].splice.apply(e,[t,n])// Insert the items in chunks to not cause stack overflows.
;l<r.length;)(i=r.slice(l,l+1e4)).unshift(t,0)// @ts-expect-error Hush, it’s fine.
,[].splice.apply(e,i),l+=1e4,t+=1e4}function i(e,t){return e.length>0?(r(e,e.length,0,t),e):t}t(e.exports,"splice",()=>r),t(e.exports,"push",()=>i)}),n.register("2oNzp",function(e,r){t(e.exports,"content",()=>l);/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */var i=n("jH5RB"),o=n("iUvtM");let l={tokenize:/** @type {Initializer} */function(e){let t;let n=e.attempt(this.parser.constructs.contentInitial,/** @type {State} */function(t){if(null===t){e.consume(t);return}return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,i.factorySpace)(e,n,"linePrefix")},/** @type {State} */function(n){return e.enter("paragraph"),/** @type {State} */function n(r){let i=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=i),t=i,/** @type {State} */function t(r){if(null===r){e.exit("chunkText"),e.exit("paragraph"),e.consume(r);return}return(0,o.markdownLineEnding)(r)?(e.consume(r),e.exit("chunkText"),n):(e.consume(r),t)// Data.
}(r)}(n)});return n}}}),n.register("jH5RB",function(e,r){t(e.exports,"factorySpace",()=>o);/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */var i=n("iUvtM");function o(e,t,n,r){let o=r?r-1:Number.POSITIVE_INFINITY,l=0;return /** @type {State} */function(r){return(0,i.markdownSpace)(r)?(e.enter(n),/** @type {State} */function r(a){return(0,i.markdownSpace)(a)&&l++<o?(e.consume(a),r):(e.exit(n),t(a))}(r)):t(r)}}}),n.register("iUvtM",function(e,r){t(e.exports,"asciiAlpha",()=>o),t(e.exports,"asciiDigit",()=>l),t(e.exports,"asciiHexDigit",()=>a),t(e.exports,"asciiAlphanumeric",()=>u),t(e.exports,"asciiPunctuation",()=>s),t(e.exports,"asciiAtext",()=>c),t(e.exports,"asciiControl",()=>p),t(e.exports,"markdownLineEndingOrSpace",()=>f),t(e.exports,"markdownLineEnding",()=>d),t(e.exports,"markdownSpace",()=>h),t(e.exports,"unicodeWhitespace",()=>g),t(e.exports,"unicodePunctuation",()=>m);/**
 * @typedef {import('micromark-util-types').Code} Code
 */var i=n("7No4A");let o=y(/[A-Za-z]/),l=y(/\d/),a=y(/[\dA-Fa-f]/),u=y(/[\dA-Za-z]/),s=y(/[!-/:-@[-`{-~]/),c=y(/[#-'*+\--9=?A-Z^-~]/);function p(e){return(// character DEL
null!==e&&(e<32||127===e))}function f(e){return null!==e&&(e<0||32===e)}function d(e){return null!==e&&e<-2}function h(e){return -2===e||-1===e||32===e}let g=y(/\s/),m=y(i.unicodePunctuationRegex);/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => code is number}
 */function y(e){return(/**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code Character code
   * @returns {code is number} Whether the character code matches the bound regex
   */function(t){return null!==t&&e.test(String.fromCharCode(t))})}}),n.register("7No4A",function(e,n){t(e.exports,"unicodePunctuationRegex",()=>r);// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
let r=/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/}),n.register("lAK8r",function(e,r){t(e.exports,"document",()=>a);/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Point} Point
 *//**
 * @typedef {Record<string, unknown>} StackState
 * @typedef {[Construct, StackState]} StackItem
 */var i=n("jH5RB"),o=n("iUvtM"),l=n("2Qp1S");let a={tokenize:/** @type {Initializer} */function(e){let t,n,r;let i=this,a=[],s=0;return c;/** @type {State} */function c(t){// First we iterate through the open blocks, starting with the root
// document, and descending through last children down to the last open
// block.
// Each block imposes a condition that the line must satisfy if the block is
// to remain open.
// For example, a block quote requires a `>` character.
// A paragraph requires a non-blank line.
// In this phase we may match all or just some of the open blocks.
// But we cannot close unmatched blocks yet, because we may have a lazy
// continuation line.
if(s<a.length){let n=a[s];return i.containerState=n[1],e.attempt(n[0].continuation,p,f)(t)}// Done.
return f(t)}/** @type {State} */function p(e){// Perhaps a good idea to rename it but it’s already used in the wild by
// extensions.
if(s++// Note: this field is called `_closeFlow` but it also closes containers.
,i.containerState._closeFlow){let n// Find the flow chunk.
;i.containerState._closeFlow=void 0,t&&k();// Note: this algorithm for moving events around is similar to the
// algorithm when dealing with lazy lines in `writeToChild`.
let r=i.events.length,o=r;for(;o--;)if("exit"===i.events[o][0]&&"chunkFlow"===i.events[o][1].type){n=i.events[o][1].end;break}x(s)// Fix positions.
;let a=r;for(;a<i.events.length;)i.events[a][1].end=Object.assign({},n),a++;// Inject the exits earlier (they’re still also at the end).
return(0,l.splice)(i.events,o+1,0,i.events.slice(r))// Discard the duplicate exits.
,i.events.length=a,f(e)}return c(e)}/** @type {State} */function f(n){// Next, after consuming the continuation markers for existing blocks, we
// look for new block starts (e.g. `>` for a block quote).
// If we encounter a new block start, we close any blocks unmatched in
// step 1 before creating the new block as a child of the last matched
// block.
if(s===a.length){// No need to `check` whether there’s a container, of `exitContainers`
// would be moot.
// We can instead immediately `attempt` to parse one.
if(!t)return g(n);// If we have concrete content, such as block HTML or fenced code,
// we can’t have containers “pierce” into them, so we can immediately
// start.
if(t.currentConstruct&&t.currentConstruct.concrete)return y(n);// If we do have flow, it could still be a blank line,
// but we’d be interrupting it w/ a new container if there’s a current
// construct.
i.interrupt=!!(t.currentConstruct&&!t._gfmTableDynamicInterruptHack)}// Check if there is a new container.
return i.containerState={},e.check(u,d,h)(n)}/** @type {State} */function d(e){return t&&k(),x(s),g(e)}/** @type {State} */function h(e){return i.parser.lazy[i.now().line]=s!==a.length,r=i.now().offset,y(e)}/** @type {State} */function g(t){return(// Try new containers.
i.containerState={},e.attempt(u,m,y)(t))}/** @type {State} */function m(e){return s++,a.push([i.currentConstruct,i.containerState])// Try another.
,g(e)}/** @type {State} */function y(r){if(null===r){t&&k(),x(0),e.consume(r);return}return t=t||i.parser.flow(i.now()),e.enter("chunkFlow",{contentType:"flow",previous:n,_tokenizer:t}),/** @type {State} */function t(n){if(null===n){b(e.exit("chunkFlow"),!0),x(0),e.consume(n);return}return(0,o.markdownLineEnding)(n)?(e.consume(n),b(e.exit("chunkFlow"))// Get ready for the next line.
,s=0,i.interrupt=void 0,c):(e.consume(n),t)}(r)}/**
   * @param {Token} token
   * @param {boolean} [eof]
   * @returns {void}
   */function b(e,o){let a=i.sliceStream(e);//
// ```markdown
// > a
// b.
//
// Or:
//
// > ~~~c
// d
//
// Or:
//
// > | e |
// f
// ```
//
// The construct in the second example (fenced code) does not accept lazy
// lines, so it marked itself as done at the end of its first line, and
// then the content construct parses `d`.
// Most constructs in markdown match on the first line: if the first line
// forms a construct, a non-lazy line can’t “unmake” it.
//
// The construct in the third example is potentially a GFM table, and
// those are *weird*.
// It *could* be a table, from the first line, if the following line
// matches a condition.
// In this case, that second line is lazy, which “unmakes” the first line
// and turns the whole into one content block.
//
// We’ve now parsed the non-lazy and the lazy line, and can figure out
// whether the lazy line started a new flow block.
// If it did, we exit the current containers between the two flow blocks.
if(o&&a.push(null),e.previous=n,n&&(n.next=e),n=e,t.defineSkip(e.start),t.write(a)// Alright, so we just added a lazy line:
,i.parser.lazy[e.start.line]){let e,n// Find the previous chunk (the one before the lazy line).
,o=t.events.length;for(;o--;)if(t.events[o][1].start.offset<r&&// …and either is not ended yet…
(!t.events[o][1].end||// …or ends after it.
t.events[o][1].end.offset>r))// part of something.
return;// Note: this algorithm for moving events around is similar to the
// algorithm when closing flow in `documentContinue`.
let a=i.events.length,u=a;for(;u--;)if("exit"===i.events[u][0]&&"chunkFlow"===i.events[u][1].type){if(e){n=i.events[u][1].end;break}e=!0}for(x(s)// Fix positions.
,o=a;o<i.events.length;)i.events[o][1].end=Object.assign({},n),o++;// Inject the exits earlier (they’re still also at the end).
(0,l.splice)(i.events,u+1,0,i.events.slice(a))// Discard the duplicate exits.
,i.events.length=o}}/**
   * @param {number} size
   * @returns {void}
   */function x(t){let n=a.length// Exit open containers.
;for(;n-- >t;){let t=a[n];i.containerState=t[1],t[0].exit.call(i,e)}a.length=t}function k(){t.write([null]),n=void 0,t=void 0,i.containerState._closeFlow=void 0}}},u={tokenize:/** @type {Tokenizer} */function(e,t,n){return(0,i.factorySpace)(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}}}),n.register("gxpzI",function(e,r){t(e.exports,"flow",()=>a);/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 */var i=n("7jf0e"),o=n("iJpmS"),l=n("jH5RB");let a={tokenize:/** @type {Initializer} */function(e){let t=this,n=e.attempt(i.blankLine,/** @type {State} */function(r){if(null===r){e.consume(r);return}return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n},e.attempt(this.parser.constructs.flowInitial,r,(0,l.factorySpace)(e,e.attempt(this.parser.constructs.flow,r,e.attempt(o.content,r)),"linePrefix")));return n;/** @type {State} */function r(r){if(null===r){e.consume(r);return}return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n}}}}),n.register("7jf0e",function(e,r){t(e.exports,"blankLine",()=>l);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */var i=n("jH5RB"),o=n("iUvtM");let l={tokenize:/** @type {Tokenizer} */function(e,t,n){return(0,i.factorySpace)(e,/** @type {State} */function(e){return null===e||(0,o.markdownLineEnding)(e)?t(e):n(e)},"linePrefix")},partial:!0}}),n.register("iJpmS",function(e,r){t(e.exports,"content",()=>a);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */var i=n("jH5RB"),o=n("iUvtM"),l=n("jsYfy");let a={tokenize:/** @type {Tokenizer} */function(e,t){/** @type {Token} */let n;return /** @type {State} */function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(t)};/** @type {State} */function r(t){return null===t?i(t):(0,o.markdownLineEnding)(t)?e.check(u,l,i)(t):(// Data.
e.consume(t),r)}/** @type {State} */function i(n){return e.exit("chunkContent"),e.exit("content"),t(n)}/** @type {State} */function l(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}},resolve:/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */function(e){return(0,l.subtokenize)(e),e}},u={tokenize:/** @type {Tokenizer} */function(e,t,n){let r=this;return /** @type {State} */function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,i.factorySpace)(e,l,"linePrefix")};/** @type {State} */function l(i){if(null===i||(0,o.markdownLineEnding)(i))return n(i);let l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&"linePrefix"===l[1].type&&l[2].sliceSerialize(l[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}},partial:!0}}),n.register("jsYfy",function(e,r){t(e.exports,"subtokenize",()=>o);/**
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Event} Event
 */var i=n("2Qp1S");function o(e){let t,n,r,o,l,a,u;/** @type {Record<string, number>} */let s={},c=-1;for(;++c<e.length;){for(;(c in s);)c=s[c];// is in the first content of a list item.
if(t=e[c]// Add a hook for the GFM tasklist extension, which needs to know if text
,c&&"chunkFlow"===t[1].type&&"listItemPrefix"===e[c-1][1].type&&((r=0)<(a=t[1]._tokenizer.events).length&&"lineEndingBlank"===a[r][1].type&&(r+=2),r<a.length&&"content"===a[r][1].type))for(;++r<a.length&&"content"!==a[r][1].type;)"chunkText"===a[r][1].type&&(a[r][1]._isInFirstContentOfListItem=!0,r++);// Enter.
if("enter"===t[0])t[1].contentType&&(Object.assign(s,/**
 * Tokenize embedded tokens.
 *
 * @param {Event[]} events
 * @param {number} eventIndex
 * @returns {Record<string, number>}
 */function(e,t){let n,r;let o=e[t][1],l=e[t][2],a=t-1,u=[],s=o._tokenizer||l.parser[o.contentType](o.start),c=s.events,p=[],f={},d=-1,h=o,g=0,m=0,y=[m]// Loop forward through the linked tokens to pass them in order to the
;// subtokenizer.
for(;h;){// Find the position of the event for this token.
for(;e[++a][1]!==h;);u.push(a),!h._tokenizer&&(n=l.sliceStream(h),h.next||n.push(null),r&&s.defineSkip(h.start),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(n),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),r=h,h=h.next}// Now, loop back through all events (and linked tokens), to figure out which
for(// parts belong where.
h=o;++d<c.length;)"exit"===c[d][0]&&"enter"===c[d-1][0]&&c[d][1].type===c[d-1][1].type&&c[d][1].start.line!==c[d][1].end.line&&(m=d+1,y.push(m)// Help GC.
,h._tokenizer=void 0,h.previous=void 0,h=h.next);for(// Help GC.
s.events=[]// If there’s one more token (which is the cases for lines that end in an
,h?(// Help GC.
h._tokenizer=void 0,h.previous=void 0):y.pop(),// Now splice the events from the subtokenizer into the current events,
// moving back to front so that splice indices aren’t affected.
d=y.length;d--;){let t=c.slice(y[d],y[d+1]),n=u.pop();p.unshift([n,n+t.length-1]),(0,i.splice)(e,n,2,t)}for(d=-1;++d<p.length;)f[g+p[d][0]]=g+p[d][1],g+=p[d][1]-p[d][0]-1;return f}(e,c)),c=s[c],u=!0);else if(t[1]._container){for(r=c,n=void 0;r--;)if("lineEnding"===(o=e[r])[1].type||"lineEndingBlank"===o[1].type)"enter"===o[0]&&(n&&(e[n][1].type="lineEndingBlank"),o[1].type="lineEnding",n=r);else break;n&&(// Fix position.
t[1].end=Object.assign({},e[n][1].start)// Switch container exit w/ line endings.
,(l=e.slice(n,c)).unshift(t),(0,i.splice)(e,n,c-n+1,l))}}return!u}}),n.register("l2tD0",function(e,n){t(e.exports,"resolver",()=>r),t(e.exports,"string",()=>i),t(e.exports,"text",()=>o);/**
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */let r={resolveAll:a()},i=l("string"),o=l("text");/**
 * @param {'string'|'text'} field
 * @returns {InitialConstruct}
 */function l(e){return{tokenize:/** @type {Initializer} */function(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,o,l);return o;/** @type {State} */function o(e){return u(e)?i(e):l(e)}/** @type {State} */function l(e){if(null===e){t.consume(e);return}return t.enter("data"),t.consume(e),a}/** @type {State} */function a(e){return u(e)?(t.exit("data"),i(e)):(t.consume(e),a)// Data.
}/**
     * @param {Code} code
     * @returns {boolean}
     */function u(e){if(null===e)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}},resolveAll:a("text"===e?u:void 0)}}/**
 * @param {Resolver} [extraResolver]
 * @returns {Resolver}
 */function a(e){return /** @type {Resolver} */function(t,n){let r// A rather boring computation (to merge adjacent `data` events) which
,i=-1;// improves mm performance by 29%.
for(;++i<=t.length;)void 0===r?t[i]&&"data"===t[i][1].type&&(r=i,i++):t[i]&&"data"===t[i][1].type||(i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),i=r+2),r=void 0);return e?e(t,n):t}}/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */function u(e,t){let n=0// Skip first.
;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){let r;let i=e[n-1][1],o=t.sliceStream(i),l=o.length,a=-1,u=0;for(;l--;){let e=o[l];if("string"==typeof e){for(a=e.length;32===e.charCodeAt(a-1);)u++,a--;if(a)break;a=-1}else if(-2===e)r=!0,u++;else if(-1===e);else{// Replacement character, exit.
l++;break}}if(u){let o={type:n===e.length||r||u<2?"lineSuffix":"hardBreakTrailing",start:{line:i.end.line,column:i.end.column-u,offset:i.end.offset-u,_index:i.start._index+l,_bufferIndex:l?a:i.start._bufferIndex+a},end:Object.assign({},i.end)};i.end=Object.assign({},o.start),i.start.offset===i.end.offset?Object.assign(i,o):(e.splice(n,0,["enter",o,t],["exit",o,t]),n+=2)}n++}return e}}),n.register("8MiTe",function(e,r){t(e.exports,"createTokenizer",()=>a);/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 *//**
 * @typedef Info
 * @property {() => void} restore
 * @property {number} from
 *
 * @callback ReturnHandle
 *   Handle a successful run.
 * @param {Construct} construct
 * @param {Info} info
 * @returns {void}
 */var i=n("iUvtM"),o=n("2Qp1S"),l=n("km4eF");function a(e,t,n){/** @type {Point} */let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1}),a={},u=[],s=[],c=[],p={consume:/** @type {Effects['consume']} */function(e){(0,i.markdownLineEnding)(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,x()):-1!==e&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++// At end of string chunk.
,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),f.previous=e// Mark as consumed.
},enter:/** @type {Effects['enter']} */function(e,t){/** @type {Token} */// @ts-expect-error Patch instead of assign required fields to help GC.
let n=t||{};return n.type=e,n.start=g(),f.events.push(["enter",n,f]),c.push(n),n},exit:/** @type {Effects['exit']} */function(e){let t=c.pop();return t.end=g(),f.events.push(["exit",t,f]),t},attempt:y(/**
   * Use results.
   *
   * @type {ReturnHandle}
   */function(e,t){b(e,t.from)}),check:y(m),interrupt:y(m,{interrupt:!0})},f={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:h,sliceSerialize:// Tools.
//
/** @type {TokenizeContext['sliceSerialize']} */function(e,t){return(/**
 * Get the string value of a slice of chunks.
 *
 * @param {Array<Chunk>} chunks
 * @param {boolean} [expandTabs=false]
 * @returns {string}
 */function(e,t){let n,r=-1,i=[];for(;++r<e.length;){let o;let l=e[r];if("string"==typeof l)o=l;else switch(l){case -5:o="\r";break;case -4:o="\n";break;case -3:o="\r\n";break;case -2:o=t?" ":"	";break;case -1:if(!t&&n)continue;o=" ";break;default:// Currently only replacement character.
o=String.fromCharCode(l)}n=-2===l,i.push(o)}return i.join("")}(h(e),t))},now:g,defineSkip:/** @type {TokenizeContext['defineSkip']} */function(e){a[e.line]=e.column,x()}//
,write:/** @type {TokenizeContext['write']} */function(e){return(s=(0,o.push)(s,e),// State management.
//
/**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {void}
   */function(){/** @type {number} */let e;for(;r._index<s.length;){var t;let n=s[r._index]// If we’re in a buffer chunk, loop through it.
;if("string"==typeof n)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<n.length;)t=n.charCodeAt(r._bufferIndex),d=d(t);else d=d(n)}}()// Exit if we’re not done, resolve might change stuff.
,null!==s[s.length-1])?[]:(b(t,0)// Otherwise, resolve, and exit.
,f.events=(0,l.resolveAll)(u,f.events,f),f.events)}//
},d=t.tokenize.call(f,p);return t.resolveAll&&u.push(t),f;/** @type {TokenizeContext['sliceStream']} */function h(e){return(/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Array<Chunk>} chunks
 * @param {Pick<Token, 'start'|'end'>} token
 * @returns {Array<Chunk>}
 */function(e,t){let n;let r=t.start._index,i=t.start._bufferIndex,o=t.end._index,l=t.end._bufferIndex;return r===o?n=[e[r].slice(i,l)]:(n=e.slice(r,o),i>-1&&(n[0]=n[0].slice(i)),l>0&&n.push(e[o].slice(0,l))),n}(s,e))}/** @type {TokenizeContext['now']} */function g(){return Object.assign({},r)}/**
   * Discard results.
   *
   * @type {ReturnHandle}
   */function m(e,t){t.restore()}/**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {Record<string, unknown>} [fields]
   */function y(e,t){return(/**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Construct|Array<Construct>|ConstructRecord} constructs
     * @param {State} returnState
     * @param {State} [bogusState]
     * @returns {State}
     */function(n,i,o){/** @type {Array<Construct>} */let l,a,u,s;return Array.isArray(n)?/* c8 ignore next 1 */d(n):"tokenize"in n// @ts-expect-error Looks like a construct.
?d([n]):/** @type {State} */function(e){let t=null!==e&&n[e],r=null!==e&&n.null,i=[// To do: add more extension tests.
/* c8 ignore next 2 */...Array.isArray(t)?t:t?[t]:[],...Array.isArray(r)?r:r?[r]:[]];return d(i)(e)};/**
       * Handle a list of construct.
       *
       * @param {Array<Construct>} list
       * @returns {State}
       */function d(e){return(l=e,a=0,0===e.length)?o:h(e[a])}/**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */function h(e){return /** @type {State} */function(n){return(// To do: not needed to store if there is no bogus state, probably?
// Currently doesn’t work because `inspect` in document does a check
// w/o a bogus, which doesn’t make sense. But it does seem to help perf
// by not storing.
s=/**
   * Store state.
   *
   * @returns {Info}
   */function(){let e=g(),t=f.previous,n=f.currentConstruct,i=f.events.length,o=Array.from(c);return{restore:/**
     * Restore state.
     *
     * @returns {void}
     */function(){r=e,f.previous=t,f.currentConstruct=n,f.events.length=i,c=o,x()},from:i}}(),u=e,e.partial||(f.currentConstruct=e),e.name&&f.parser.constructs.disable.null.includes(e.name))?y(n):e.tokenize.call(// prototype.
// This allows a “live binding”, which is needed for `interrupt`.
t?Object.assign(Object.create(f),t):f,p,m,y)(n)}}/** @type {State} */function m(t){return e(u,s),i}/** @type {State} */function y(e){return(s.restore(),++a<l.length)?h(l[a]):o}})}/**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */function b(e,t){e.resolveAll&&!u.includes(e)&&u.push(e),e.resolve&&(0,o.splice)(f.events,t,f.events.length-t,e.resolve(f.events.slice(t),f)),e.resolveTo&&(f.events=e.resolveTo(f.events,f))}/**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {void}
   */function x(){r.line in a&&r.column<2&&(r.column=a[r.line],r.offset+=a[r.line]-1)}}}),n.register("km4eF",function(e,n){t(e.exports,"resolveAll",()=>r);/**
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 *//**
 * Call all `resolveAll`s.
 *
 * @param {{resolveAll?: Resolver}[]} constructs
 * @param {Event[]} events
 * @param {TokenizeContext} context
 * @returns {Event[]}
 */function r(e,t,n){/** @type {Resolver[]} */let r=[],i=-1;for(;++i<e.length;){let o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}}),n.register("6HWiY",function(e,r){t(e.exports,"document",()=>E),t(e.exports,"contentInitial",()=>A),t(e.exports,"flowInitial",()=>C),t(e.exports,"flow",()=>L),t(e.exports,"string",()=>T),t(e.exports,"text",()=>q),t(e.exports,"insideSpan",()=>P),t(e.exports,"attentionMarkers",()=>F),t(e.exports,"disable",()=>R);/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */var i=n("6nTV3"),o=n("OcEpt"),l=n("gNBbl"),a=n("gEHeN"),u=n("2Qs41"),s=n("gs3o4"),c=n("aqw4N"),p=n("8zB3f"),f=n("bvMUE"),d=n("h2kyO"),h=n("kSTx0"),g=n("4vLKK"),m=n("bgjqA"),y=n("dz9VB"),b=n("8be8Q"),x=n("a9cNg"),k=n("hmr3Q"),v=n("1PP7G"),D=n("jEoWp"),w=n("5jHEg"),S=n("l2tD0");let E={42:v.list,43:v.list,45:v.list,48:v.list,49:v.list,50:v.list,51:v.list,52:v.list,53:v.list,54:v.list,55:v.list,56:v.list,57:v.list,62:l.blockQuote},A={91:f.definition},C={[-2]:c.codeIndented,[-1]:c.codeIndented,32:c.codeIndented},L={35:h.headingAtx,42:w.thematicBreak,45:[D.setextUnderline,w.thematicBreak],60:g.htmlFlow,61:D.setextUnderline,95:w.thematicBreak,96:s.codeFenced,126:s.codeFenced},T={38:u.characterReference,92:a.characterEscape},q={[-5]:k.lineEnding,[-4]:k.lineEnding,[-3]:k.lineEnding,33:b.labelStartImage,38:u.characterReference,42:i.attention,60:[o.autolink,m.htmlText],91:x.labelStartLink,92:[d.hardBreakEscape,a.characterEscape],93:y.labelEnd,95:i.attention,96:p.codeText},P={null:[i.attention,S.resolver]},F={null:[42,95]},R={null:[]}}),n.register("6nTV3",function(e,r){t(e.exports,"attention",()=>a);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Point} Point
 */var i=n("2Qp1S"),o=n("9oBa2"),l=n("km4eF");let a={name:"attention",tokenize:/** @type {Tokenizer} */function(e,t){let n;let r=this.parser.constructs.attentionMarkers.null,i=this.previous,l=(0,o.classifyCharacter)(i);return /** @type {State} */function(a){return e.enter("attentionSequence"),n=a,/** @type {State} */function a(u){if(u===n)return e.consume(u),a;let s=e.exit("attentionSequence"),c=(0,o.classifyCharacter)(u),p=!c||2===c&&l||r.includes(u),f=!l||2===l&&c||r.includes(i);return s._open=!!(42===n?p:p&&(l||!f)),s._close=!!(42===n?f:f&&(c||!p)),t(u)}(a)}},resolveAll:/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */function(e,t){let n,r,o,a,s,c,p,f// Walk through all events.
,d=-1;//
// Note: performance of this is fine on an mb of normal markdown, but it’s
// a bottleneck for malicious stuff.
for(;++d<e.length;)if("enter"===e[d][0]&&"attentionSequence"===e[d][1].type&&e[d][1]._close){for(n=d// Now walk back to find an opener.
;n--;)if("exit"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._open&&// If the markers are the same:
t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[d][1]).charCodeAt(0)){// If the opening can close or the closing can open,
// and the close size *is not* a multiple of three,
// but the sum of the opening and closing size *is* multiple of three,
// then don’t match.
if((e[n][1]._close||e[d][1]._open)&&(e[d][1].end.offset-e[d][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[d][1].end.offset-e[d][1].start.offset)%3))continue;// Number of markers to use from the sequence.
c=e[n][1].end.offset-e[n][1].start.offset>1&&e[d][1].end.offset-e[d][1].start.offset>1?2:1;let h=Object.assign({},e[n][1].end),g=Object.assign({},e[d][1].start);u(h,-c),u(g,c),a={type:c>1?"strongSequence":"emphasisSequence",start:h,end:Object.assign({},e[n][1].end)},s={type:c>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[d][1].start),end:g},o={type:c>1?"strongText":"emphasisText",start:Object.assign({},e[n][1].end),end:Object.assign({},e[d][1].start)},r={type:c>1?"strong":"emphasis",start:Object.assign({},a.start),end:Object.assign({},s.end)},e[n][1].end=Object.assign({},a.start),e[d][1].start=Object.assign({},s.end),p=[]// If there are more markers in the opening, add them before.
,e[n][1].end.offset-e[n][1].start.offset&&(p=(0,i.push)(p,[["enter",e[n][1],t],["exit",e[n][1],t]])),// Opening.
p=(0,i.push)(p,[["enter",r,t],["enter",a,t],["exit",a,t],["enter",o,t]])// Between.
,p=(0,i.push)(p,(0,l.resolveAll)(t.parser.constructs.insideSpan.null,e.slice(n+1,d),t))// Closing.
,p=(0,i.push)(p,[["exit",o,t],["enter",s,t],["exit",s,t],["exit",r,t]])// If there are more markers in the closing, add them after.
,e[d][1].end.offset-e[d][1].start.offset?(f=2,p=(0,i.push)(p,[["enter",e[d][1],t],["exit",e[d][1],t]])):f=0,(0,i.splice)(e,n-1,d-n+3,p),d=n+p.length-f-2;break}}for(// Remove remaining sequences.
d=-1;++d<e.length;)"attentionSequence"===e[d][1].type&&(e[d][1].type="data");return e}};/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 * @param {number} offset
 * @returns {void}
 */function u(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}}),n.register("9oBa2",function(e,r){t(e.exports,"classifyCharacter",()=>o);/**
 * @typedef {import('micromark-util-types').Code} Code
 */var i=n("iUvtM");function o(e){return null===e||(0,i.markdownLineEndingOrSpace)(e)||(0,i.unicodeWhitespace)(e)?1:(0,i.unicodePunctuation)(e)?2:void 0}}),n.register("OcEpt",function(e,r){t(e.exports,"autolink",()=>o);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */var i=n("iUvtM");let o={name:"autolink",tokenize:/** @type {Tokenizer} */function(e,t,n){let r=1;return /** @type {State} */function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o};/** @type {State} */function o(t){return(0,i.asciiAlpha)(t)?(e.consume(t),l):(0,i.asciiAtext)(t)?u(t):n(t)}/** @type {State} */function l(t){return 43===t||45===t||46===t||(0,i.asciiAlphanumeric)(t)?/** @type {State} */function t(n){return 58===n?(e.consume(n),a):(43===n||45===n||46===n||(0,i.asciiAlphanumeric)(n))&&r++<32?(e.consume(n),t):u(n)}(t):u(t)}/** @type {State} */function a(t){return 62===t?(e.exit("autolinkProtocol"),c(t)):null===t||32===t||60===t||(0,i.asciiControl)(t)?n(t):(e.consume(t),a)}/** @type {State} */function u(t){return 64===t?(e.consume(t),r=0,s):(0,i.asciiAtext)(t)?(e.consume(t),u):n(t)}/** @type {State} */function s(t){return(0,i.asciiAlphanumeric)(t)?/** @type {State} */function t(o){return 46===o?(e.consume(o),r=0,s):62===o?(// Exit, then change the type.
e.exit("autolinkProtocol").type="autolinkEmail",c(o)):/** @type {State} */function o(l){return(45===l||(0,i.asciiAlphanumeric)(l))&&r++<63?(e.consume(l),45===l?o:t):n(l)}(o)}(t):n(t)}/** @type {State} */function c(n){return e.enter("autolinkMarker"),e.consume(n),e.exit("autolinkMarker"),e.exit("autolink"),t}}}}),n.register("gNBbl",function(e,r){t(e.exports,"blockQuote",()=>l);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 */var i=n("jH5RB"),o=n("iUvtM");let l={name:"blockQuote",tokenize:/** @type {Tokenizer} */function(e,t,n){let r=this;return /** @type {State} */function(t){if(62===t){let n=r.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),i}return n(t)};/** @type {State} */function i(n){return(0,o.markdownSpace)(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}},continuation:{tokenize:/** @type {Tokenizer} */function(e,t,n){return(0,i.factorySpace)(e,e.attempt(l,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}},exit:/** @type {Exiter} */function(e){e.exit("blockQuote")}}}),n.register("gEHeN",function(e,r){t(e.exports,"characterEscape",()=>o);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */var i=n("iUvtM");let o={name:"characterEscape",tokenize:/** @type {Tokenizer} */function(e,t,n){return /** @type {State} */function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),r};/** @type {State} */function r(r){return(0,i.asciiPunctuation)(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}}}),n.register("2Qs41",function(e,r){t(e.exports,"characterReference",()=>l);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */var i=n("3HEPL"),o=n("iUvtM");let l={name:"characterReference",tokenize:/** @type {Tokenizer} */function(e,t,n){let r,l;let a=this,u=0;return /** @type {State} */function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),s};/** @type {State} */function s(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),r=31,l=o.asciiAlphanumeric,p(t))}/** @type {State} */function c(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),r=6,l=o.asciiHexDigit,p):(e.enter("characterReferenceValue"),r=7,l=o.asciiDigit,p(t))}/** @type {State} */function p(s){/** @type {Token} */let c;return 59===s&&u?(c=e.exit("characterReferenceValue"),l!==o.asciiAlphanumeric||(0,i.decodeNamedCharacterReference)(a.sliceSerialize(c)))?(e.enter("characterReferenceMarker"),e.consume(s),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(s):l(s)&&u++<r?(e.consume(s),p):n(s)}}}}),n.register("3HEPL",function(e,r){t(e.exports,"decodeNamedCharacterReference",()=>l);var i=n("HyG4B");let o={}.hasOwnProperty;function l(e){return!!o.call(i.characterEntities,e)&&i.characterEntities[e]}}),n.register("HyG4B",function(e,n){t(e.exports,"characterEntities",()=>r);/**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */let r={AElig:"\xc6",AMP:"&",Aacute:"\xc1",Abreve:"Ă",Acirc:"\xc2",Acy:"А",Afr:"\uD835\uDD04",Agrave:"\xc0",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"\uD835\uDD38",ApplyFunction:"⁡",Aring:"\xc5",Ascr:"\uD835\uDC9C",Assign:"≔",Atilde:"\xc3",Auml:"\xc4",Backslash:"∖",Barv:"⫧",Barwed:"⌆",Bcy:"Б",Because:"∵",Bernoullis:"ℬ",Beta:"Β",Bfr:"\uD835\uDD05",Bopf:"\uD835\uDD39",Breve:"˘",Bscr:"ℬ",Bumpeq:"≎",CHcy:"Ч",COPY:"\xa9",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",Cayleys:"ℭ",Ccaron:"Č",Ccedil:"\xc7",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"\xb8",CenterDot:"\xb7",Cfr:"ℭ",Chi:"Χ",CircleDot:"⊙",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",Colon:"∷",Colone:"⩴",Congruent:"≡",Conint:"∯",ContourIntegral:"∮",Copf:"ℂ",Coproduct:"∐",CounterClockwiseContourIntegral:"∳",Cross:"⨯",Cscr:"\uD835\uDC9E",Cup:"⋓",CupCap:"≍",DD:"ⅅ",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",Darr:"↡",Dashv:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",Delta:"Δ",Dfr:"\uD835\uDD07",DiacriticalAcute:"\xb4",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",Diamond:"⋄",DifferentialD:"ⅆ",Dopf:"\uD835\uDD3B",Dot:"\xa8",DotDot:"⃜",DotEqual:"≐",DoubleContourIntegral:"∯",DoubleDot:"\xa8",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",Downarrow:"⇓",Dscr:"\uD835\uDC9F",Dstrok:"Đ",ENG:"Ŋ",ETH:"\xd0",Eacute:"\xc9",Ecaron:"Ě",Ecirc:"\xca",Ecy:"Э",Edot:"Ė",Efr:"\uD835\uDD08",Egrave:"\xc8",Element:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"\uD835\uDD3C",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",Equilibrium:"⇌",Escr:"ℰ",Esim:"⩳",Eta:"Η",Euml:"\xcb",Exists:"∃",ExponentialE:"ⅇ",Fcy:"Ф",Ffr:"\uD835\uDD09",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",Fopf:"\uD835\uDD3D",ForAll:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",GT:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"\uD835\uDD0A",Gg:"⋙",Gopf:"\uD835\uDD3E",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"\uD835\uDCA2",Gt:"≫",HARDcy:"Ъ",Hacek:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",HilbertSpace:"ℋ",Hopf:"ℍ",HorizontalLine:"─",Hscr:"ℋ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacute:"\xcd",Icirc:"\xce",Icy:"И",Idot:"İ",Ifr:"ℑ",Igrave:"\xcc",Im:"ℑ",Imacr:"Ī",ImaginaryI:"ⅈ",Implies:"⇒",Int:"∬",Integral:"∫",Intersection:"⋂",InvisibleComma:"⁣",InvisibleTimes:"⁢",Iogon:"Į",Iopf:"\uD835\uDD40",Iota:"Ι",Iscr:"ℐ",Itilde:"Ĩ",Iukcy:"І",Iuml:"\xcf",Jcirc:"Ĵ",Jcy:"Й",Jfr:"\uD835\uDD0D",Jopf:"\uD835\uDD41",Jscr:"\uD835\uDCA5",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"\uD835\uDD0E",Kopf:"\uD835\uDD42",Kscr:"\uD835\uDCA6",LJcy:"Љ",LT:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Larr:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",LeftRightArrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",Leftarrow:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessLess:"⪡",LessSlantEqual:"⩽",LessTilde:"≲",Lfr:"\uD835\uDD0F",Ll:"⋘",Lleftarrow:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷",LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lopf:"\uD835\uDD43",LowerLeftArrow:"↙",LowerRightArrow:"↘",Lscr:"ℒ",Lsh:"↰",Lstrok:"Ł",Lt:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"\uD835\uDD10",MinusPlus:"∓",Mopf:"\uD835\uDD44",Mscr:"ℳ",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",Nfr:"\uD835\uDD11",NoBreak:"⁠",NonBreakingSpace:"\xa0",Nopf:"ℕ",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",Nscr:"\uD835\uDCA9",Ntilde:"\xd1",Nu:"Ν",OElig:"Œ",Oacute:"\xd3",Ocirc:"\xd4",Ocy:"О",Odblac:"Ő",Ofr:"\uD835\uDD12",Ograve:"\xd2",Omacr:"Ō",Omega:"Ω",Omicron:"Ο",Oopf:"\uD835\uDD46",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",Or:"⩔",Oscr:"\uD835\uDCAA",Oslash:"\xd8",Otilde:"\xd5",Otimes:"⨷",Ouml:"\xd6",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",PartialD:"∂",Pcy:"П",Pfr:"\uD835\uDD13",Phi:"Φ",Pi:"Π",PlusMinus:"\xb1",Poincareplane:"ℌ",Popf:"ℙ",Pr:"⪻",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",Prime:"″",Product:"∏",Proportion:"∷",Proportional:"∝",Pscr:"\uD835\uDCAB",Psi:"Ψ",QUOT:'"',Qfr:"\uD835\uDD14",Qopf:"ℚ",Qscr:"\uD835\uDCAC",RBarr:"⤐",REG:"\xae",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",Rfr:"ℜ",Rho:"Ρ",RightAngleBracket:"⟩",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",Rightarrow:"⇒",Ropf:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",Rscr:"ℛ",Rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"\uD835\uDD16",ShortDownArrow:"↓",ShortLeftArrow:"←",ShortRightArrow:"→",ShortUpArrow:"↑",Sigma:"Σ",SmallCircle:"∘",Sopf:"\uD835\uDD4A",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",Sscr:"\uD835\uDCAE",Star:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Sup:"⋑",Superset:"⊃",SupersetEqual:"⊇",Supset:"⋑",THORN:"\xde",TRADE:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"	",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"\uD835\uDD17",Therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",Topf:"\uD835\uDD4B",TripleDot:"⃛",Tscr:"\uD835\uDCAF",Tstrok:"Ŧ",Uacute:"\xda",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucirc:"\xdb",Ucy:"У",Udblac:"Ű",Ufr:"\uD835\uDD18",Ugrave:"\xd9",Umacr:"Ū",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",Uopf:"\uD835\uDD4C",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",UpEquilibrium:"⥮",UpTee:"⊥",UpTeeArrow:"↥",Uparrow:"⇑",Updownarrow:"⇕",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"\uD835\uDCB0",Utilde:"Ũ",Uuml:"\xdc",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"\uD835\uDD19",Vopf:"\uD835\uDD4D",Vscr:"\uD835\uDCB1",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",Wfr:"\uD835\uDD1A",Wopf:"\uD835\uDD4E",Wscr:"\uD835\uDCB2",Xfr:"\uD835\uDD1B",Xi:"Ξ",Xopf:"\uD835\uDD4F",Xscr:"\uD835\uDCB3",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacute:"\xdd",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"\uD835\uDD1C",Yopf:"\uD835\uDD50",Yscr:"\uD835\uDCB4",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",ZeroWidthSpace:"​",Zeta:"Ζ",Zfr:"ℨ",Zopf:"ℤ",Zscr:"\uD835\uDCB5",aacute:"\xe1",abreve:"ă",ac:"∾",acE:"∾̳",acd:"∿",acirc:"\xe2",acute:"\xb4",acy:"а",aelig:"\xe6",af:"⁡",afr:"\uD835\uDD1E",agrave:"\xe0",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",amp:"&",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"\xc5",angzarr:"⍼",aogon:"ą",aopf:"\uD835\uDD52",ap:"≈",apE:"⩰",apacir:"⩯",ape:"≊",apid:"≋",apos:"'",approx:"≈",approxeq:"≊",aring:"\xe5",ascr:"\uD835\uDCB6",ast:"*",asymp:"≈",asympeq:"≍",atilde:"\xe3",auml:"\xe4",awconint:"∳",awint:"⨑",bNot:"⫭",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",beta:"β",beth:"ℶ",between:"≬",bfr:"\uD835\uDD1F",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"\uD835\uDD53",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxh:"─",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",bprime:"‵",breve:"˘",brvbar:"\xa6",bscr:"\uD835\uDCB7",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",bumpeq:"≏",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",caron:"ˇ",ccaps:"⩍",ccaron:"č",ccedil:"\xe7",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cedil:"\xb8",cemptyv:"⦲",cent:"\xa2",centerdot:"\xb7",cfr:"\uD835\uDD20",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledR:"\xae",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",conint:"∮",copf:"\uD835\uDD54",coprod:"∐",copy:"\xa9",copysr:"℗",crarr:"↵",cross:"✗",cscr:"\uD835\uDCB8",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"\xa4",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dArr:"⇓",dHar:"⥥",dagger:"†",daleth:"ℸ",darr:"↓",dash:"‐",dashv:"⊣",dbkarow:"⤏",dblac:"˝",dcaron:"ď",dcy:"д",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",ddotseq:"⩷",deg:"\xb0",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"\uD835\uDD21",dharl:"⇃",dharr:"⇂",diam:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"\xa8",digamma:"ϝ",disin:"⋲",div:"\xf7",divide:"\xf7",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"\uD835\uDD55",dot:"˙",doteq:"≐",doteqdot:"≑",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",downarrow:"↓",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"\uD835\uDCB9",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eDDot:"⩷",eDot:"≑",eacute:"\xe9",easter:"⩮",ecaron:"ě",ecir:"≖",ecirc:"\xea",ecolon:"≕",ecy:"э",edot:"ė",ee:"ⅇ",efDot:"≒",efr:"\uD835\uDD22",eg:"⪚",egrave:"\xe8",egs:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"\uD835\uDD56",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",equals:"=",equest:"≟",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",erarr:"⥱",escr:"ℯ",esdot:"≐",esim:"≂",eta:"η",eth:"\xf0",euml:"\xeb",euro:"€",excl:"!",exist:"∃",expectation:"ℰ",exponentiale:"ⅇ",fallingdotseq:"≒",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"\uD835\uDD23",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"\uD835\uDD57",forall:"∀",fork:"⋔",forkv:"⫙",fpartint:"⨍",frac12:"\xbd",frac13:"⅓",frac14:"\xbc",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"\xbe",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"\uD835\uDCBB",gE:"≧",gEl:"⪌",gacute:"ǵ",gamma:"γ",gammad:"ϝ",gap:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",ge:"≥",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"\uD835\uDD24",gg:"≫",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",gl:"≷",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"\uD835\uDD58",grave:"`",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",hArr:"⇔",hairsp:" ",half:"\xbd",hamilt:"ℋ",hardcy:"ъ",harr:"↔",harrcir:"⥈",harrw:"↭",hbar:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"\uD835\uDD25",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"\uD835\uDD59",horbar:"―",hscr:"\uD835\uDCBD",hslash:"ℏ",hstrok:"ħ",hybull:"⁃",hyphen:"‐",iacute:"\xed",ic:"⁣",icirc:"\xee",icy:"и",iecy:"е",iexcl:"\xa1",iff:"⇔",ifr:"\uD835\uDD26",igrave:"\xec",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",image:"ℑ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",intcal:"⊺",integers:"ℤ",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iocy:"ё",iogon:"į",iopf:"\uD835\uDD5A",iota:"ι",iprod:"⨼",iquest:"\xbf",iscr:"\uD835\uDCBE",isin:"∈",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",iukcy:"і",iuml:"\xef",jcirc:"ĵ",jcy:"й",jfr:"\uD835\uDD27",jmath:"ȷ",jopf:"\uD835\uDD5B",jscr:"\uD835\uDCBF",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",kcedil:"ķ",kcy:"к",kfr:"\uD835\uDD28",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"\uD835\uDD5C",kscr:"\uD835\uDCC0",lAarr:"⇚",lArr:"⇐",lAtail:"⤛",lBarr:"⤎",lE:"≦",lEg:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",laquo:"\xab",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lceil:"⌈",lcub:"{",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leftarrow:"←",leftarrowtail:"↢",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",leftthreetimes:"⋋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",lessgtr:"≶",lesssim:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"\uD835\uDD29",lg:"≶",lgE:"⪑",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",ll:"≪",llarr:"⇇",llcorner:"⌞",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",longleftrightarrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"\uD835\uDD5D",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"\uD835\uDCC1",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",ltrie:"⊴",ltrif:"◂",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",macr:"\xaf",male:"♂",malt:"✠",maltese:"✠",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",measuredangle:"∡",mfr:"\uD835\uDD2A",mho:"℧",micro:"\xb5",mid:"∣",midast:"*",midcir:"⫰",middot:"\xb7",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"\uD835\uDD5E",mp:"∓",mscr:"\uD835\uDCC2",mstpos:"∾",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nGtv:"≫̸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nLl:"⋘̸",nLt:"≪⃒",nLtv:"≪̸",nRightarrow:"⇏",nVDash:"⊯",nVdash:"⊮",nabla:"∇",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:"\xa0",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",ne:"≠",neArr:"⇗",nearhk:"⤤",nearr:"↗",nearrow:"↗",nedot:"≐̸",nequiv:"≢",nesear:"⤨",nesim:"≂̸",nexist:"∄",nexists:"∄",nfr:"\uD835\uDD2B",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",ngsim:"≵",ngt:"≯",ngtr:"≯",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",nlArr:"⇍",nlE:"≦̸",nlarr:"↚",nldr:"‥",nle:"≰",nleftarrow:"↚",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nlsim:"≴",nlt:"≮",nltri:"⋪",nltrie:"⋬",nmid:"∤",nopf:"\uD835\uDD5F",not:"\xac",notin:"∉",notinE:"⋹̸",notindot:"⋵̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"\uD835\uDCC3",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"\xf1",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",oS:"Ⓢ",oacute:"\xf3",oast:"⊛",ocir:"⊚",ocirc:"\xf4",ocy:"о",odash:"⊝",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"\uD835\uDD2C",ogon:"˛",ograve:"\xf2",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",ominus:"⊖",oopf:"\uD835\uDD60",opar:"⦷",operp:"⦹",oplus:"⊕",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"\xaa",ordm:"\xba",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oscr:"ℴ",oslash:"\xf8",osol:"⊘",otilde:"\xf5",otimes:"⊗",otimesas:"⨶",ouml:"\xf6",ovbar:"⌽",par:"∥",para:"\xb6",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"\uD835\uDD2D",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",plusmn:"\xb1",plussim:"⨦",plustwo:"⨧",pm:"\xb1",pointint:"⨕",popf:"\uD835\uDD61",pound:"\xa3",pr:"≺",prE:"⪳",prap:"⪷",prcue:"≼",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",primes:"ℙ",prnE:"⪵",prnap:"⪹",prnsim:"⋨",prod:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"\uD835\uDCC5",psi:"ψ",puncsp:" ",qfr:"\uD835\uDD2E",qint:"⨌",qopf:"\uD835\uDD62",qprime:"⁗",qscr:"\uD835\uDCC6",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',rAarr:"⇛",rArr:"⇒",rAtail:"⤜",rBarr:"⤏",rHar:"⥤",race:"∽̱",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"\xbb",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rarrw:"↝",ratail:"⤚",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rceil:"⌉",rcub:"}",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"\xae",rfisht:"⥽",rfloor:"⌋",rfr:"\uD835\uDD2F",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",rhov:"ϱ",rightarrow:"→",rightarrowtail:"↣",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",rightthreetimes:"⋌",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"\uD835\uDD63",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",rsaquo:"›",rscr:"\uD835\uDCC7",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",sbquo:"‚",sc:"≻",scE:"⪴",scap:"⪸",scaron:"š",sccue:"≽",sce:"⪰",scedil:"ş",scirc:"ŝ",scnE:"⪶",scnap:"⪺",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",seArr:"⇘",searhk:"⤥",searr:"↘",searrow:"↘",sect:"\xa7",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"\uD835\uDD30",sfrown:"⌢",sharp:"♯",shchcy:"щ",shcy:"ш",shortmid:"∣",shortparallel:"∥",shy:"\xad",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"\uD835\uDD64",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",squarf:"▪",squf:"▪",srarr:"→",sscr:"\uD835\uDCC8",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"\xaf",sub:"⊂",subE:"⫅",subdot:"⪽",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",sum:"∑",sung:"♪",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",sup:"⊃",supE:"⫆",supdot:"⪾",supdsub:"⫘",supe:"⊇",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swarhk:"⤦",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"\xdf",target:"⌖",tau:"τ",tbrk:"⎴",tcaron:"ť",tcedil:"ţ",tcy:"т",tdot:"⃛",telrec:"⌕",tfr:"\uD835\uDD31",there4:"∴",therefore:"∴",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",thinsp:" ",thkap:"≈",thksim:"∼",thorn:"\xfe",tilde:"˜",times:"\xd7",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"\uD835\uDD65",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"\uD835\uDCC9",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uArr:"⇑",uHar:"⥣",uacute:"\xfa",uarr:"↑",ubrcy:"ў",ubreve:"ŭ",ucirc:"\xfb",ucy:"у",udarr:"⇅",udblac:"ű",udhar:"⥮",ufisht:"⥾",ufr:"\uD835\uDD32",ugrave:"\xf9",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",uml:"\xa8",uogon:"ų",uopf:"\uD835\uDD66",uparrow:"↑",updownarrow:"↕",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",upsi:"υ",upsih:"ϒ",upsilon:"υ",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"\uD835\uDCCA",utdot:"⋰",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"\xfc",uwangle:"⦧",vArr:"⇕",vBar:"⫨",vBarv:"⫩",vDash:"⊨",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vcy:"в",vdash:"⊢",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",vert:"|",vfr:"\uD835\uDD33",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"\uD835\uDD67",vprop:"∝",vrtri:"⊳",vscr:"\uD835\uDCCB",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",wedgeq:"≙",weierp:"℘",wfr:"\uD835\uDD34",wopf:"\uD835\uDD68",wp:"℘",wr:"≀",wreath:"≀",wscr:"\uD835\uDCCC",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"\uD835\uDD35",xhArr:"⟺",xharr:"⟷",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"\uD835\uDD69",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",xscr:"\uD835\uDCCD",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"\xfd",yacy:"я",ycirc:"ŷ",ycy:"ы",yen:"\xa5",yfr:"\uD835\uDD36",yicy:"ї",yopf:"\uD835\uDD6A",yscr:"\uD835\uDCCE",yucy:"ю",yuml:"\xff",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeetrf:"ℨ",zeta:"ζ",zfr:"\uD835\uDD37",zhcy:"ж",zigrarr:"⇝",zopf:"\uD835\uDD6B",zscr:"\uD835\uDCCF",zwj:"‍",zwnj:"‌"}}),n.register("gs3o4",function(e,r){t(e.exports,"codeFenced",()=>l);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */var i=n("jH5RB"),o=n("iUvtM");let l={name:"codeFenced",tokenize:/** @type {Tokenizer} */function(e,t,n){let r;let l=this,a={tokenize:/** @type {Tokenizer} */function(e,t,n){let l=0;return(0,i.factorySpace)(e,/** @type {State} */function(t){return e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),/** @type {State} */function t(o){return o===r?(e.consume(o),l++,t):l<p?n(o):(e.exit("codeFencedFenceSequence"),(0,i.factorySpace)(e,a,"whitespace")(o))}(t)},"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4);/** @type {State} */function a(r){return null===r||(0,o.markdownLineEnding)(r)?(e.exit("codeFencedFence"),t(r)):n(r)}},partial:!0},u={tokenize:/** @type {Tokenizer} */function(e,t,n){let r=this;return /** @type {State} */function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i};/** @type {State} */function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0},s=this.events[this.events.length-1],c=s&&"linePrefix"===s[1].type?s[2].sliceSerialize(s[1],!0).length:0,p=0;return /** @type {State} */function(t){return e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),r=t,/** @type {State} */function t(o){return o===r?(e.consume(o),p++,t):(e.exit("codeFencedFenceSequence"),p<3?n(o):(0,i.factorySpace)(e,f,"whitespace")(o))}(t)};/** @type {State} */function f(t){return null===t||(0,o.markdownLineEnding)(t)?h(t):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),/** @type {State} */function t(l){return null===l||(0,o.markdownLineEndingOrSpace)(l)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),(0,i.factorySpace)(e,d,"whitespace")(l)):96===l&&l===r?n(l):(e.consume(l),t)}(t))}/** @type {State} */function d(t){return null===t||(0,o.markdownLineEnding)(t)?h(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),/** @type {State} */function t(i){return null===i||(0,o.markdownLineEnding)(i)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),h(i)):96===i&&i===r?n(i):(e.consume(i),t)}(t))}/** @type {State} */function h(n){return e.exit("codeFencedFence"),l.interrupt?t(n):/** @type {State} */function t(n){return null===n?g(n):(0,o.markdownLineEnding)(n)?e.attempt(u,e.attempt(a,g,c?(0,i.factorySpace)(e,t,"linePrefix",c+1):t),g)(n):(e.enter("codeFlowValue"),/** @type {State} */function n(r){return null===r||(0,o.markdownLineEnding)(r)?(e.exit("codeFlowValue"),t(r)):(e.consume(r),n)}(n))}(n)}/** @type {State} */function g(n){return e.exit("codeFenced"),t(n)}},concrete:!0}}),n.register("aqw4N",function(e,r){t(e.exports,"codeIndented",()=>l);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */var i=n("jH5RB"),o=n("iUvtM");let l={name:"codeIndented",tokenize:/** @type {Tokenizer} */function(e,t,n){let r=this;return /** @type {State} */function(t){return e.enter("codeIndented"),(0,i.factorySpace)(e,l,"linePrefix",5)(t)};/** @type {State} */function l(t){let i=r.events[r.events.length-1];return i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?/** @type {State} */function t(n){return null===n?u(n):(0,o.markdownLineEnding)(n)?e.attempt(a,t,u)(n):(e.enter("codeFlowValue"),/** @type {State} */function n(r){return null===r||(0,o.markdownLineEnding)(r)?(e.exit("codeFlowValue"),t(r)):(e.consume(r),n)}(n))}(t):n(t)}/** @type {State} */function u(n){return e.exit("codeIndented"),t(n)}}},a={tokenize:/** @type {Tokenizer} */function(e,t,n){let r=this;return l;/** @type {State} */function l(t){return(// If this is a lazy line, it can’t be code.
r.parser.lazy[r.now().line]?n(t):(0,o.markdownLineEnding)(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l):(0,i.factorySpace)(e,a,"linePrefix",5)(t))}/** @type {State} */function a(e){let i=r.events[r.events.length-1];return i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?t(e):(0,o.markdownLineEnding)(e)?l(e):n(e)}},partial:!0}}),n.register("8zB3f",function(e,r){t(e.exports,"codeText",()=>o);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */var i=n("iUvtM");let o={name:"codeText",tokenize:/** @type {Tokenizer} */function(e,t,n){let r,o,l=0;return /** @type {State} */function(t){return e.enter("codeText"),e.enter("codeTextSequence"),/** @type {State} */function t(n){return 96===n?(e.consume(n),l++,t):(e.exit("codeTextSequence"),a(n))}(t)};/** @type {State} */function a(s){return(// EOF.
null===s?n(s):96===s?(o=e.enter("codeTextSequence"),r=0,/** @type {State} */function n(i){return(// More.
96===i?(e.consume(i),r++,n):r===l?(e.exit("codeTextSequence"),e.exit("codeText"),t(i)):(o.type="codeTextData",u(i))// Done!
)}(s)):32===s?(e.enter("space"),e.consume(s),e.exit("space"),a):(0,i.markdownLineEnding)(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),a):(e.enter("codeTextData"),u(s)))}// In code.
/** @type {State} */function u(t){return null===t||32===t||96===t||(0,i.markdownLineEnding)(t)?(e.exit("codeTextData"),a(t)):(e.consume(t),u)}// Closing fence.
},resolve:/** @type {Resolver} */function(e){let t,n// If we start and end with an EOL or a space.
,r=e.length-4,i=3;if(("lineEnding"===e[3][1].type||"space"===e[i][1].type)&&("lineEnding"===e[r][1].type||"space"===e[r][1].type)){for(t=i// And we have data.
;++t<r;)if("codeTextData"===e[t][1].type){// Then we have padding.
e[i][1].type="codeTextPadding",e[r][1].type="codeTextPadding",i+=2,r-=2;break}}// Merge adjacent spaces and data.
for(t=i-1,r++;++t<=r;)void 0===n?t!==r&&"lineEnding"!==e[t][1].type&&(n=t):(t===r||"lineEnding"===e[t][1].type)&&(e[n][1].type="codeTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e},previous:/** @type {Previous} */function(e){// If there is a previous code, there will always be a tail.
return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}}}),n.register("bvMUE",function(e,r){t(e.exports,"definition",()=>p);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */var i=n("DVYDN"),o=n("fDPPf"),l=n("jH5RB"),a=n("hFl17"),u=n("e4FUu"),s=n("3ac70"),c=n("iUvtM");let p={name:"definition",tokenize:/** @type {Tokenizer} */function(e,t,n){let r;let a=this;return /** @type {State} */function(t){return e.enter("definition"),(0,o.factoryLabel).call(a,e,p,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)};/** @type {State} */function p(t){return(r=(0,s.normalizeIdentifier)(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),58===t)?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker")// Note: blank lines can’t exist in content.
,(0,u.factoryWhitespace)(e,(0,i.factoryDestination)(e,e.attempt(f,(0,l.factorySpace)(e,d,"whitespace"),(0,l.factorySpace)(e,d,"whitespace")),n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString"))):n(t)}/** @type {State} */function d(i){return null===i||(0,c.markdownLineEnding)(i)?(e.exit("definition"),a.parser.defined.includes(r)||a.parser.defined.push(r),t(i)):n(i)}}},f={tokenize:/** @type {Tokenizer} */function(e,t,n){return /** @type {State} */function(t){return(0,c.markdownLineEndingOrSpace)(t)?(0,u.factoryWhitespace)(e,r)(t):n(t)};/** @type {State} */function r(t){return 34===t||39===t||40===t?(0,a.factoryTitle)(e,(0,l.factorySpace)(e,i,"whitespace"),n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t):n(t)}/** @type {State} */function i(e){return null===e||(0,c.markdownLineEnding)(e)?t(e):n(e)}},partial:!0}}),n.register("DVYDN",function(e,r){t(e.exports,"factoryDestination",()=>o);/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */var i=n("iUvtM");function o(e,t,n,r,o,l,a,u,s){let c=s||Number.POSITIVE_INFINITY,p=0;return /** @type {State} */function(t){return 60===t?(e.enter(r),e.enter(o),e.enter(l),e.consume(t),e.exit(l),f):null===t||41===t||(0,i.asciiControl)(t)?n(t):(e.enter(r),e.enter(a),e.enter(u),e.enter("chunkString",{contentType:"string"}),g(t))};/** @type {State} */function f(n){return 62===n?(e.enter(l),e.consume(n),e.exit(l),e.exit(o),e.exit(r),t):(e.enter(u),e.enter("chunkString",{contentType:"string"}),d(n))}/** @type {State} */function d(t){return 62===t?(e.exit("chunkString"),e.exit(u),f(t)):null===t||60===t||(0,i.markdownLineEnding)(t)?n(t):(e.consume(t),92===t?h:d)}/** @type {State} */function h(t){return 60===t||62===t||92===t?(e.consume(t),d):d(t)}/** @type {State} */function g(o){return 40===o?++p>c?n(o):(e.consume(o),g):41===o?p--?(e.consume(o),g):(e.exit("chunkString"),e.exit(u),e.exit(a),e.exit(r),t(o)):null===o||(0,i.markdownLineEndingOrSpace)(o)?p?n(o):(e.exit("chunkString"),e.exit(u),e.exit(a),e.exit(r),t(o)):(0,i.asciiControl)(o)?n(o):(e.consume(o),92===o?m:g)}/** @type {State} */function m(t){return 40===t||41===t||92===t?(e.consume(t),g):g(t)}}}),n.register("fDPPf",function(e,r){t(e.exports,"factoryLabel",()=>o);/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').State} State
 */var i=n("iUvtM");function o(e,t,n,r,o,l){let a;let u=this,s=0;return /** @type {State} */function(t){return e.enter(r),e.enter(o),e.consume(t),e.exit(o),e.enter(l),c};/** @type {State} */function c(f){return null===f||91===f||93===f&&!a||/* To do: remove in the future once we’ve switched from
       * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
       * which doesn’t need this *//* Hidden footnotes hook *//* c8 ignore next 3 */94===f&&!s&&"_hiddenFootnoteSupport"in u.parser.constructs||s>999?n(f):93===f?(e.exit(l),e.enter(o),e.consume(f),e.exit(o),e.exit(r),t):(0,i.markdownLineEnding)(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),p(f))}/** @type {State} */function p(t){return null===t||91===t||93===t||(0,i.markdownLineEnding)(t)||s++>999?(e.exit("chunkString"),c(t)):(e.consume(t),a=a||!(0,i.markdownSpace)(t),92===t?f:p)}/** @type {State} */function f(t){return 91===t||92===t||93===t?(e.consume(t),s++,p):p(t)}}}),n.register("hFl17",function(e,r){t(e.exports,"factoryTitle",()=>l);/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */var i=n("jH5RB"),o=n("iUvtM");function l(e,t,n,r,l,a){/** @type {NonNullable<Code>} */let u;return /** @type {State} */function(t){return e.enter(r),e.enter(l),e.consume(t),e.exit(l),u=40===t?41:t,s};/** @type {State} */function s(n){return n===u?(e.enter(l),e.consume(n),e.exit(l),e.exit(r),t):(e.enter(a),c(n))}/** @type {State} */function c(t){return t===u?(e.exit(a),s(u)):null===t?n(t):(0,o.markdownLineEnding)(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,i.factorySpace)(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(t))}/** @type {State} */function p(t){return t===u||null===t||(0,o.markdownLineEnding)(t)?(e.exit("chunkString"),c(t)):(e.consume(t),92===t?f:p)}/** @type {State} */function f(t){return t===u||92===t?(e.consume(t),p):p(t)}}}),n.register("e4FUu",function(e,r){t(e.exports,"factoryWhitespace",()=>l);/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */var i=n("jH5RB"),o=n("iUvtM");function l(e,t){/** @type {boolean} */let n;return /** @type {State} */function r(l){return(0,o.markdownLineEnding)(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n=!0,r):(0,o.markdownSpace)(l)?(0,i.factorySpace)(e,r,n?"linePrefix":"lineSuffix")(l):t(l)}}}),n.register("3ac70",function(e,n){t(e.exports,"normalizeIdentifier",()=>r);/**
 * Normalize an identifier (such as used in definitions).
 *
 * @param {string} value
 * @returns {string}
 */function r(e){return e// Collapse Markdown whitespace.
.replace(/[\t\n\r ]+/g," ")// Trim.
.replace(/^ | $/g,"")// Some characters are considered “uppercase”, but if their lowercase
// counterpart is uppercased will result in a different uppercase
// character.
// Hence, to get that form, we perform both lower- and uppercase.
// Upper case makes sure keys will not interact with default prototypal
// methods: no method is uppercase.
.toLowerCase().toUpperCase()}}),n.register("h2kyO",function(e,r){t(e.exports,"hardBreakEscape",()=>o);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */var i=n("iUvtM");let o={name:"hardBreakEscape",tokenize:/** @type {Tokenizer} */function(e,t,n){return /** @type {State} */function(t){return e.enter("hardBreakEscape"),e.enter("escapeMarker"),e.consume(t),r};/** @type {State} */function r(r){return(0,i.markdownLineEnding)(r)?(e.exit("escapeMarker"),e.exit("hardBreakEscape"),t(r)):n(r)}}}}),n.register("kSTx0",function(e,r){t(e.exports,"headingAtx",()=>a);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */var i=n("jH5RB"),o=n("iUvtM"),l=n("2Qp1S");let a={name:"headingAtx",tokenize:/** @type {Tokenizer} */function(e,t,n){let r=this,l=0;return /** @type {State} */function(a){return e.enter("atxHeading"),e.enter("atxHeadingSequence"),/** @type {State} */function a(u){return 35===u&&l++<6?(e.consume(u),a):null===u||(0,o.markdownLineEndingOrSpace)(u)?(e.exit("atxHeadingSequence"),r.interrupt?t(u):/** @type {State} */function n(r){return 35===r?(e.enter("atxHeadingSequence"),/** @type {State} */function t(r){return 35===r?(e.consume(r),t):(e.exit("atxHeadingSequence"),n(r))}(r)):null===r||(0,o.markdownLineEnding)(r)?(e.exit("atxHeading"),t(r)):(0,o.markdownSpace)(r)?(0,i.factorySpace)(e,n,"whitespace")(r):(e.enter("atxHeadingText"),/** @type {State} */function t(r){return null===r||35===r||(0,o.markdownLineEndingOrSpace)(r)?(e.exit("atxHeadingText"),n(r)):(e.consume(r),t)}(r))}(u)):n(u)}(a)}},resolve:/** @type {Resolver} */function(e,t){let n,r// Prefix whitespace, part of the opening.
,i=e.length-2,o=3;return"whitespace"===e[3][1].type&&(o+=2),i-2>o&&"whitespace"===e[i][1].type&&(i-=2),"atxHeadingSequence"===e[i][1].type&&(o===i-1||i-4>o&&"whitespace"===e[i-2][1].type)&&(i-=o+1===i?2:4),i>o&&(n={type:"atxHeadingText",start:e[o][1].start,end:e[i][1].end},r={type:"chunkText",start:e[o][1].start,end:e[i][1].end,// @ts-expect-error Constants are fine to assign.
contentType:"text"},(0,l.splice)(e,o,i-o+1,[["enter",n,t],["enter",r,t],["exit",r,t],["exit",n,t]])),e}}}),n.register("4vLKK",function(e,r){t(e.exports,"htmlFlow",()=>a);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */var i=n("iUvtM"),o=n("gZx53"),l=n("7jf0e");let a={name:"htmlFlow",tokenize:/** @type {Tokenizer} */function(e,t,n){let r,l,a,s,c;let p=this;return /** @type {State} */function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),f};/** @type {State} */function f(o){return 33===o?(e.consume(o),d):47===o?(e.consume(o),m):63===o?(e.consume(o),r=3// While we’re in an instruction instead of a declaration, we’re on a `?`
,p.interrupt?t:O):(0,i.asciiAlpha)(o)?(e.consume(o),a=String.fromCharCode(o),l=!0,y):n(o)}/** @type {State} */function d(o){return 45===o?(e.consume(o),r=2,h):91===o?(e.consume(o),r=5,a="CDATA[",s=0,g):(0,i.asciiAlpha)(o)?(e.consume(o),r=4,p.interrupt?t:O):n(o)}/** @type {State} */function h(r){return 45===r?(e.consume(r),p.interrupt?t:O):n(r)}/** @type {State} */function g(r){return r===a.charCodeAt(s++)?(e.consume(r),s===a.length?p.interrupt?t:C:g):n(r)}/** @type {State} */function m(t){return(0,i.asciiAlpha)(t)?(e.consume(t),a=String.fromCharCode(t),y):n(t)}/** @type {State} */function y(u){return null===u||47===u||62===u||(0,i.markdownLineEndingOrSpace)(u)?47!==u&&l&&(0,o.htmlRawNames).includes(a.toLowerCase())?(r=1,p.interrupt?t(u):C(u)):(0,o.htmlBlockNames).includes(a.toLowerCase())?(r=6,47===u)?(e.consume(u),b):p.interrupt?t(u):C(u):(r=7// Do not support complete HTML when interrupting
,p.interrupt&&!p.parser.lazy[p.now().line]?n(u):l?x(u):/** @type {State} */function t(n){return(0,i.markdownSpace)(n)?(e.consume(n),t):E(n)}(u)):45===u||(0,i.asciiAlphanumeric)(u)?(e.consume(u),a+=String.fromCharCode(u),y):n(u)}/** @type {State} */function b(r){return 62===r?(e.consume(r),p.interrupt?t:C):n(r)}/** @type {State} */function x(t){return 47===t?(e.consume(t),E):58===t||95===t||(0,i.asciiAlpha)(t)?(e.consume(t),k):(0,i.markdownSpace)(t)?(e.consume(t),x):E(t)}/** @type {State} */function k(t){return 45===t||46===t||58===t||95===t||(0,i.asciiAlphanumeric)(t)?(e.consume(t),k):v(t)}/** @type {State} */function v(t){return 61===t?(e.consume(t),D):(0,i.markdownSpace)(t)?(e.consume(t),v):x(t)}/** @type {State} */function D(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),c=t,w):(0,i.markdownSpace)(t)?(e.consume(t),D):(c=null,/** @type {State} */function t(n){return null===n||34===n||39===n||60===n||61===n||62===n||96===n||(0,i.markdownLineEndingOrSpace)(n)?v(n):(e.consume(n),t)}(t))}/** @type {State} */function w(t){return null===t||(0,i.markdownLineEnding)(t)?n(t):t===c?(e.consume(t),S):(e.consume(t),w)}/** @type {State} */function S(e){return 47===e||62===e||(0,i.markdownSpace)(e)?x(e):n(e)}/** @type {State} */function E(t){return 62===t?(e.consume(t),A):n(t)}/** @type {State} */function A(t){return(0,i.markdownSpace)(t)?(e.consume(t),A):null===t||(0,i.markdownLineEnding)(t)?C(t):n(t)}/** @type {State} */function C(t){return 45===t&&2===r?(e.consume(t),q):60===t&&1===r?(e.consume(t),P):62===t&&4===r?(e.consume(t),I):63===t&&3===r?(e.consume(t),O):93===t&&5===r?(e.consume(t),R):(0,i.markdownLineEnding)(t)&&(6===r||7===r)?e.check(u,I,L)(t):null===t||(0,i.markdownLineEnding)(t)?L(t):(e.consume(t),C)}/** @type {State} */function L(t){return e.exit("htmlFlowData"),/** @type {State} */function t(n){return null===n?B(n):(0,i.markdownLineEnding)(n)?e.attempt({tokenize:T,partial:!0},t,B)(n):(e.enter("htmlFlowData"),C(n))}(t)}/** @type {Tokenizer} */function T(e,t,n){return /** @type {State} */function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),r};/** @type {State} */function r(e){return p.parser.lazy[p.now().line]?n(e):t(e)}}/** @type {State} */function q(t){return 45===t?(e.consume(t),O):C(t)}/** @type {State} */function P(t){return 47===t?(e.consume(t),a="",F):C(t)}/** @type {State} */function F(t){return 62===t&&(0,o.htmlRawNames).includes(a.toLowerCase())?(e.consume(t),I):(0,i.asciiAlpha)(t)&&a.length<8?(e.consume(t),a+=String.fromCharCode(t),F):C(t)}/** @type {State} */function R(t){return 93===t?(e.consume(t),O):C(t)}/** @type {State} */function O(t){return 62===t?(e.consume(t),I):45===t&&2===r?(e.consume(t),O):C(t)// More dashes.
}/** @type {State} */function I(t){return null===t||(0,i.markdownLineEnding)(t)?(e.exit("htmlFlowData"),B(t)):(e.consume(t),I)}/** @type {State} */function B(n){return e.exit("htmlFlow"),t(n)}},resolveTo:/** @type {Resolver} */function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););return t>1&&"linePrefix"===e[t-2][1].type&&(// Add the prefix start to the HTML token.
e[t][1].start=e[t-2][1].start// Add the prefix start to the HTML line token.
,e[t+1][1].start=e[t-2][1].start// Remove the line prefix.
,e.splice(t-2,2)),e},concrete:!0},u={tokenize:/** @type {Tokenizer} */function(e,t,n){return /** @type {State} */function(r){return e.exit("htmlFlowData"),e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),e.attempt(l.blankLine,t,n)}},partial:!0}}),n.register("gZx53",function(e,n){t(e.exports,"htmlBlockNames",()=>r),t(e.exports,"htmlRawNames",()=>i);/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result
 * in more relaxed rules (condition 6): because they are known blocks, the
 * HTML-like syntax doesn’t have to be strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 */let r=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],i=["pre","script","style","textarea"]}),n.register("bgjqA",function(e,r){t(e.exports,"htmlText",()=>l);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */var i=n("jH5RB"),o=n("iUvtM");let l={name:"htmlText",tokenize:/** @type {Tokenizer} */function(e,t,n){let r,l,a,u;let s=this;return /** @type {State} */function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),c};/** @type {State} */function c(t){return 33===t?(e.consume(t),p):47===t?(e.consume(t),S):63===t?(e.consume(t),D):(0,o.asciiAlpha)(t)?(e.consume(t),A):n(t)}/** @type {State} */function p(t){return 45===t?(e.consume(t),f):91===t?(e.consume(t),l="CDATA[",a=0,y):(0,o.asciiAlpha)(t)?(e.consume(t),v):n(t)}/** @type {State} */function f(t){return 45===t?(e.consume(t),d):n(t)}/** @type {State} */function d(t){return null===t||62===t?n(t):45===t?(e.consume(t),h):g(t)}/** @type {State} */function h(e){return null===e||62===e?n(e):g(e)}/** @type {State} */function g(t){return null===t?n(t):45===t?(e.consume(t),m):(0,o.markdownLineEnding)(t)?(u=g,R(t)):(e.consume(t),g)}/** @type {State} */function m(t){return 45===t?(e.consume(t),I):g(t)}/** @type {State} */function y(t){return t===l.charCodeAt(a++)?(e.consume(t),a===l.length?b:y):n(t)}/** @type {State} */function b(t){return null===t?n(t):93===t?(e.consume(t),x):(0,o.markdownLineEnding)(t)?(u=b,R(t)):(e.consume(t),b)}/** @type {State} */function x(t){return 93===t?(e.consume(t),k):b(t)}/** @type {State} */function k(t){return 62===t?I(t):93===t?(e.consume(t),k):b(t)}/** @type {State} */function v(t){return null===t||62===t?I(t):(0,o.markdownLineEnding)(t)?(u=v,R(t)):(e.consume(t),v)}/** @type {State} */function D(t){return null===t?n(t):63===t?(e.consume(t),w):(0,o.markdownLineEnding)(t)?(u=D,R(t)):(e.consume(t),D)}/** @type {State} */function w(e){return 62===e?I(e):D(e)}/** @type {State} */function S(t){return(0,o.asciiAlpha)(t)?(e.consume(t),E):n(t)}/** @type {State} */function E(t){return 45===t||(0,o.asciiAlphanumeric)(t)?(e.consume(t),E):/** @type {State} */function t(n){return(0,o.markdownLineEnding)(n)?(u=t,R(n)):(0,o.markdownSpace)(n)?(e.consume(n),t):I(n)}(t)}/** @type {State} */function A(t){return 45===t||(0,o.asciiAlphanumeric)(t)?(e.consume(t),A):47===t||62===t||(0,o.markdownLineEndingOrSpace)(t)?C(t):n(t)}/** @type {State} */function C(t){return 47===t?(e.consume(t),I):58===t||95===t||(0,o.asciiAlpha)(t)?(e.consume(t),L):(0,o.markdownLineEnding)(t)?(u=C,R(t)):(0,o.markdownSpace)(t)?(e.consume(t),C):I(t)}/** @type {State} */function L(t){return 45===t||46===t||58===t||95===t||(0,o.asciiAlphanumeric)(t)?(e.consume(t),L):/** @type {State} */function t(n){return 61===n?(e.consume(n),T):(0,o.markdownLineEnding)(n)?(u=t,R(n)):(0,o.markdownSpace)(n)?(e.consume(n),t):C(n)}(t)}/** @type {State} */function T(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),r=t,q):(0,o.markdownLineEnding)(t)?(u=T,R(t)):(0,o.markdownSpace)(t)?(e.consume(t),T):(e.consume(t),r=void 0,F)}/** @type {State} */function q(t){return t===r?(e.consume(t),P):null===t?n(t):(0,o.markdownLineEnding)(t)?(u=q,R(t)):(e.consume(t),q)}/** @type {State} */function P(e){return 62===e||47===e||(0,o.markdownLineEndingOrSpace)(e)?C(e):n(e)}/** @type {State} */function F(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):62===t||(0,o.markdownLineEndingOrSpace)(t)?C(t):(e.consume(t),F)}// We can’t have blank lines in content, so no need to worry about empty
// tokens.
/** @type {State} */function R(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,i.factorySpace)(e,O,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}/** @type {State} */function O(t){return e.enter("htmlTextData"),u(t)}/** @type {State} */function I(r){return 62===r?(e.consume(r),e.exit("htmlTextData"),e.exit("htmlText"),t):n(r)}}}}),n.register("dz9VB",function(e,r){t(e.exports,"labelEnd",()=>f);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */var i=n("DVYDN"),o=n("fDPPf"),l=n("hFl17"),a=n("e4FUu"),u=n("iUvtM"),s=n("2Qp1S"),c=n("3ac70"),p=n("km4eF");let f={name:"labelEnd",tokenize:/** @type {Tokenizer} */function(e,t,n){let r,i// Find an opening.
;let o=this,l=o.events.length;for(;l--;)if(("labelImage"===o.events[l][1].type||"labelLink"===o.events[l][1].type)&&!o.events[l][1]._balanced){r=o.events[l][1];break}return /** @type {State} */function(t){return r?r._inactive?u(t):(i=o.parser.defined.includes((0,c.normalizeIdentifier)(o.sliceSerialize({start:r.end,end:o.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),a):n(t)};/** @type {State} */function a(n){return(// Resource: `[asd](fgh)`.
40===n?e.attempt(d,t,i?t:u)(n):91===n?e.attempt(h,t,i?e.attempt(g,t,u):u)(n):i?t(n):u(n))}/** @type {State} */function u(e){return r._balanced=!0,n(e)}},resolveTo:/** @type {Resolver} */function(e,t){let n,r,i,o// Find an opening.
,l=e.length,a=0;for(;l--;)if(n=e[l][1],r){// If we see another link, or inactive link label, we’ve been here before.
if("link"===n.type||"labelLink"===n.type&&n._inactive)break;"enter"===e[l][0]&&"labelLink"===n.type&&(n._inactive=!0)}else if(i){if("enter"===e[l][0]&&("labelImage"===n.type||"labelLink"===n.type)&&!n._balanced&&(r=l,"labelLink"!==n.type)){a=2;break}}else"labelEnd"===n.type&&(i=l);let u={type:"labelLink"===e[r][1].type?"link":"image",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[r][1].start),end:Object.assign({},e[i][1].end)},f={type:"labelText",start:Object.assign({},e[r+a+2][1].end),end:Object.assign({},e[i-2][1].start)};return o=[["enter",u,t],["enter",c,t]]// Opening marker.
,o=(0,s.push)(o,e.slice(r+1,r+a+3))// Text open.
,o=(0,s.push)(o,[["enter",f,t]])// Between.
,o=(0,s.push)(o,(0,p.resolveAll)(t.parser.constructs.insideSpan.null,e.slice(r+a+4,i-3),t))// Text close, marker close, label close.
,o=(0,s.push)(o,[["exit",f,t],e[i-2],e[i-1],["exit",c,t]])// Reference, resource, or so.
,o=(0,s.push)(o,e.slice(i+1))// Media close.
,o=(0,s.push)(o,[["exit",u,t]]),(0,s.splice)(e,r,e.length,o),e},resolveAll:/** @type {Resolver} */function(e){let t,n=-1;for(;++n<e.length;)("labelImage"===(t=e[n][1]).type||"labelLink"===t.type||"labelEnd"===t.type)&&(// Remove the marker.
e.splice(n+1,"labelImage"===t.type?4:2),t.type="data",n++);return e}},d={tokenize:/** @type {Tokenizer} */function(e,t,n){return /** @type {State} */function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),(0,a.factoryWhitespace)(e,r)};/** @type {State} */function r(t){return 41===t?c(t):(0,i.factoryDestination)(e,o,n,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}/** @type {State} */function o(t){return(0,u.markdownLineEndingOrSpace)(t)?(0,a.factoryWhitespace)(e,s)(t):c(t)}/** @type {State} */function s(t){return 34===t||39===t||40===t?(0,l.factoryTitle)(e,(0,a.factoryWhitespace)(e,c),n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):c(t)}/** @type {State} */function c(r){return 41===r?(e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),e.exit("resource"),t):n(r)}}},h={tokenize:/** @type {Tokenizer} */function(e,t,n){let r=this;return /** @type {State} */function(t){return(0,o.factoryLabel).call(r,e,i,n,"reference","referenceMarker","referenceString")(t)};/** @type {State} */function i(e){return r.parser.defined.includes((0,c.normalizeIdentifier)(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}}},g={tokenize:/** @type {Tokenizer} */function(e,t,n){return /** @type {State} */function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),r};/** @type {State} */function r(r){return 93===r?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}}}),n.register("8be8Q",function(e,r){t(e.exports,"labelStartImage",()=>o);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */var i=n("dz9VB");let o={name:"labelStartImage",tokenize:/** @type {Tokenizer} */function(e,t,n){let r=this;return /** @type {State} */function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),i};/** @type {State} */function i(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),o):n(t)}/** @type {State} */function o(e){/* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this *//* Hidden footnotes hook *//* c8 ignore next 3 */return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:i.labelEnd.resolveAll}}),n.register("a9cNg",function(e,r){t(e.exports,"labelStartLink",()=>o);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */var i=n("dz9VB");let o={name:"labelStartLink",tokenize:/** @type {Tokenizer} */function(e,t,n){let r=this;return /** @type {State} */function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),i};/** @type {State} */function i(e){/* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this *//* Hidden footnotes hook. *//* c8 ignore next 3 */return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:i.labelEnd.resolveAll}}),n.register("hmr3Q",function(e,r){t(e.exports,"lineEnding",()=>o);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */var i=n("jH5RB");let o={name:"lineEnding",tokenize:/** @type {Tokenizer} */function(e,t){return /** @type {State} */function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),(0,i.factorySpace)(e,t,"linePrefix")}}}}),n.register("1PP7G",function(e,r){t(e.exports,"list",()=>u);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 *//**
 * @typedef {Record<string, unknown> & {marker: Code, type: string, size: number}} ListContainerState
 * @typedef {TokenizeContext & {containerState: ListContainerState}} TokenizeContextWithState
 */var i=n("jH5RB"),o=n("iUvtM"),l=n("7jf0e"),a=n("5jHEg");let u={name:"list",tokenize:/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */function(e,t,n){let r=this,i=r.events[r.events.length-1],u=i&&"linePrefix"===i[1].type?i[2].sliceSerialize(i[1],!0).length:0,c=0;return /** @type {State} */function(t){let i=r.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===i?!r.containerState.marker||t===r.containerState.marker:(0,o.asciiDigit)(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),"listUnordered"===i)return e.enter("listItemPrefix"),42===t||45===t?e.check(a.thematicBreak,n,p)(t):p(t);if(!r.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),/** @type {State} */function t(i){return(0,o.asciiDigit)(i)&&++c<10?(e.consume(i),t):(!r.interrupt||c<2)&&(r.containerState.marker?i===r.containerState.marker:41===i||46===i)?(e.exit("listItemValue"),p(i)):n(i)}(t)}return n(t)};/**
   * @type {State}
   **/function p(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||t,e.check(l.blankLine,r.interrupt?n:f,e.attempt(s,h,d))}/** @type {State} */function f(e){return r.containerState.initialBlankLine=!0,u++,h(e)}/** @type {State} */function d(t){return(0,o.markdownSpace)(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),h):n(t)}/** @type {State} */function h(n){return r.containerState.size=u+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}},continuation:{tokenize:/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */function(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(l.blankLine,/** @type {State} */function(n){// Still, try to consume at most the items size.
return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine// We have a blank line.
,(0,i.factorySpace)(e,t,"listItemIndent",r.containerState.size+1)(n)},/** @type {State} */function(n){return r.containerState.furtherBlankLines||!(0,o.markdownSpace)(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(c,t,a)(n))});/** @type {State} */function a(o){return(// While we do continue, we signal that the flow should be closed.
r.containerState._closeFlow=!0// As we’re closing flow, we’re no longer interrupting.
,r.interrupt=void 0,(0,i.factorySpace)(e,e.attempt(u,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o))}}},exit:/**
 * @type {Exiter}
 * @this {TokenizeContextWithState}
 */function(e){e.exit(this.containerState.type)}},s={tokenize:/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */function(e,t,n){let r=this;return(0,i.factorySpace)(e,/** @type {State} */function(e){let i=r.events[r.events.length-1];return!(0,o.markdownSpace)(e)&&i&&"listItemPrefixWhitespace"===i[1].type?t(e):n(e)},"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5)},partial:!0},c={tokenize:/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */function(e,t,n){let r=this;return(0,i.factorySpace)(e,/** @type {State} */function(e){let i=r.events[r.events.length-1];return i&&"listItemIndent"===i[1].type&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)},"listItemIndent",r.containerState.size+1)},partial:!0}}),n.register("5jHEg",function(e,r){t(e.exports,"thematicBreak",()=>l);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */var i=n("jH5RB"),o=n("iUvtM");let l={name:"thematicBreak",tokenize:/** @type {Tokenizer} */function(e,t,n){let r,l=0;return /** @type {State} */function(a){return e.enter("thematicBreak"),r=a,/** @type {State} */function a(u){return u===r?(e.enter("thematicBreakSequence"),/** @type {State} */function t(n){return n===r?(e.consume(n),l++,t):(e.exit("thematicBreakSequence"),a(n))}(u)):(0,o.markdownSpace)(u)?(0,i.factorySpace)(e,a,"whitespace")(u):l<3||null!==u&&!(0,o.markdownLineEnding)(u)?n(u):(e.exit("thematicBreak"),t(u))}(a)}}}}),n.register("jEoWp",function(e,r){t(e.exports,"setextUnderline",()=>l);/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */var i=n("jH5RB"),o=n("iUvtM");let l={name:"setextUnderline",tokenize:/** @type {Tokenizer} */function(e,t,n){let r,l// Find an opening.
;let a=this,u=a.events.length;for(;u--;)// We can now either have a definition or a paragraph.
if("lineEnding"!==a.events[u][1].type&&"linePrefix"!==a.events[u][1].type&&"content"!==a.events[u][1].type){l="paragraph"===a.events[u][1].type;break}return /** @type {State} */function(t){return!a.parser.lazy[a.now().line]&&(a.interrupt||l)?(e.enter("setextHeadingLine"),e.enter("setextHeadingLineSequence"),r=t,/** @type {State} */function t(n){return n===r?(e.consume(n),t):(e.exit("setextHeadingLineSequence"),(0,i.factorySpace)(e,s,"lineSuffix")(n))}(t)):n(t)};/** @type {State} */function s(r){return null===r||(0,o.markdownLineEnding)(r)?(e.exit("setextHeadingLine"),t(r)):n(r)}},resolveTo:/** @type {Resolver} */function(e,t){let n,r,i// Find the opening of the content.
,o=e.length;// It’ll always exist: we don’t tokenize if it isn’t there.
for(;o--;)if("enter"===e[o][0]){if("content"===e[o][1].type){n=o;break}"paragraph"===e[o][1].type&&(r=o)}else"content"===e[o][1].type&&e.splice(o,1),i||"definition"!==e[o][1].type||(i=o);let l={type:"setextHeading",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)}// Change the paragraph to setext heading text.
;return e[r][1].type="setextHeadingText"// If we have definitions in the content, we’ll keep on having content,
,i?(e.splice(r,0,["enter",l,t]),e.splice(i+1,0,["exit",e[n][1],t]),e[n][1].end=Object.assign({},e[i][1].end)):e[n][1]=l,// Add the heading exit at the end.
e.push(["exit",l,t]),e}}}),n.register("lw7ce",function(e,n){t(e.exports,"preprocess",()=>i);/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 *//**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding} [encoding]
 * @param {boolean} [end=false]
 * @returns {Array<Chunk>}
 */let r=/[\0\t\n\r]/g;function i(){let e,t=1,n="",i=!0;return /** @type {Preprocessor} */function(o,l,a){let u,s,c,p,f// @ts-expect-error `Buffer` does allow an encoding.
;/** @type {Array<Chunk>} */let d=[];for(o=n+o.toString(l),c=0,n="",i&&(65279===o.charCodeAt(0)&&c++,i=void 0);c<o.length;){if(r.lastIndex=c,p=(u=r.exec(o))&&void 0!==u.index?u.index:o.length,f=o.charCodeAt(p),!u){n=o.slice(c);break}if(10===f&&c===p&&e)d.push(-3),e=void 0;else switch(e&&(d.push(-5),e=void 0),c<p&&(d.push(o.slice(c,p)),t+=p-c),f){case 0:d.push(65533),t++;break;case 9:for(s=4*Math.ceil(t/4),d.push(-2);t++<s;)d.push(-1);break;case 10:d.push(-4),t=1;break;default:e=!0,t=1}c=p+1}return a&&(e&&d.push(-5),n&&d.push(n),d.push(null)),d}}}),n.register("3gGaD",function(e,r){t(e.exports,"postprocess",()=>o);/**
 * @typedef {import('micromark-util-types').Event} Event
 */var i=n("jsYfy");function o(e){for(;!(0,i.subtokenize)(e););return e}}),n.register("gZtaX",function(e,n){t(e.exports,"decodeNumericCharacterReference",()=>r);/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 */function r(e,t){let n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||// Control character (DEL) of the basic block and C1 controls.
n>126&&n<160||// Lone high surrogates and low surrogates.
n>55295&&n<57344||// Noncharacters.
n>64975&&n<65008||(65535&n)==65535||(65535&n)==65534||// Out of range
n>1114111?"�":String.fromCharCode(n)}}),n.register("8OH7a",function(e,r){t(e.exports,"decodeString",()=>a);var i=n("3HEPL"),o=n("gZtaX");let l=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function a(e){return e.replace(l,u)}/**
 * @param {string} $0
 * @param {string} $1
 * @param {string} $2
 * @returns {string}
 */function u(e,t,n){if(t)return t;// Reference.
let r=n.charCodeAt(0);if(35===r){let e=n.charCodeAt(1),t=120===e||88===e;return(0,o.decodeNumericCharacterReference)(n.slice(t?2:1),t?16:10)}return(0,i.decodeNamedCharacterReference)(n)||e}}),n.register("kJTlh",function(e,r){t(e.exports,"default",()=>o);/**
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('mdast-util-to-hast').Options} Options
 * @typedef {import('unified').Processor<any, any, any, any>} Processor
 *
 * @typedef {import('mdast-util-to-hast')} DoNotTouchAsThisImportIncludesRawInTree
 */var i=n("82jGJ"),o=/** @type {(import('unified').Plugin<[Processor, Options?]|[null|undefined, Options?]|[Options]|[], MdastRoot>)} */function(e,t){var n;return e&&"run"in e?(n,r,o)=>{e.run((0,i.toHast)(n,t),r,e=>{o(e)})}:(n=e||t,e=>(0,i.toHast)(e,n))}}),n.register("82jGJ",function(e,r){t(e.exports,"toHast",()=>l);/**
 * @typedef {import('hast').Content} HastContent
 * @typedef {import('hast').Root} HastRoot
 *
 * @typedef {import('mdast').Content} MdastContent
 * @typedef {import('mdast').Root} MdastRoot
 *
 * @typedef {import('./state.js').Options} Options
 *//**
 * @typedef {HastRoot | HastContent} HastNodes
 * @typedef {MdastRoot | MdastContent} MdastNodes
 */var i=n("1j7pP"),o=n("56qaC");function l(e,t){let n=(0,o.createState)(e,t),r=n.one(e,null),l=(0,i.footer)(n);// To do: next major: always return root?
return l&&// content.
// So assume `node` is a parent node.
r.children.push({type:"text",value:"\n"},l),Array.isArray(r)?{type:"root",children:r}:r}}),n.register("1j7pP",function(e,r){t(e.exports,"footer",()=>o);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 *
 * @typedef {import('./state.js').State} State
 */var i=n("eznPp");function o(e){/** @type {Array<ElementContent>} */let t=[],n=-1;for(;++n<e.footnoteOrder.length;){let r=e.footnoteById[e.footnoteOrder[n]];if(!r)continue;let o=e.all(r),l=String(r.identifier).toUpperCase(),a=(0,i.normalizeUri)(l.toLowerCase()),u=0,s=[];for(;++u<=e.footnoteCounts[l];){/** @type {Element} */let t={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+a+(u>1?"-"+u:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"↩"}]};u>1&&t.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(u)}]}),s.length>0&&s.push({type:"text",value:" "}),s.push(t)}let c=o[o.length-1];if(c&&"element"===c.type&&"p"===c.tagName){let e=c.children[c.children.length-1];e&&"text"===e.type?e.value+=" ":c.children.push({type:"text",value:" "}),c.children.push(...s)}else o.push(...s);/** @type {Element} */let p={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+a},children:e.wrap(o,!0)};e.patch(r,p),t.push(p)}if(0!==t.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:{// To do: use structured clone.
...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),id:"footnote-label"},children:[{type:"text",value:e.footnoteLabel}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:e.wrap(t,!0)},{type:"text",value:"\n"}]}}}),n.register("eznPp",function(e,r){t(e.exports,"normalizeUri",()=>o);var i=n("iUvtM");function o(e){/** @type {Array<string>} */let t=[],n=-1,r=0,o=0;for(;++n<e.length;){let l=e.charCodeAt(n),a=""// A correct percent encoded value.
;if(37===l&&(0,i.asciiAlphanumeric)(e.charCodeAt(n+1))&&(0,i.asciiAlphanumeric)(e.charCodeAt(n+2)))o=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(a=String.fromCharCode(l));else if(l>55295&&l<57344){let t=e.charCodeAt(n+1)// A correct surrogate pair.
;l<56320&&t>56319&&t<57344?(a=String.fromCharCode(l,t),o=1):a="�"}else a=String.fromCharCode(l);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+o+1,a=""),o&&(n+=o,o=0)}return t.join("")+e.slice(r)}n("f9Avt")}),n.register("f9Avt",function(e,n){t(e.exports,"encode",()=>i);let r={'"':"quot","&":"amp","<":"lt",">":"gt"};function i(e){return e.replace(/["&<>]/g,/**
   * @param {string} value
   * @returns {string}
   */function(e){// @ts-expect-error Hush, it’s fine.
return"&"+r[e]+";"})}}),n.register("56qaC",function(e,r){t(e.exports,"createState",()=>c);/**
 * @typedef {import('hast').Content} HastContent
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('hast').ElementContent} HastElementContent
 * @typedef {import('hast').Properties} HastProperties
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('hast').Text} HastText
 *
 * @typedef {import('mdast').Content} MdastContent
 * @typedef {import('mdast').Definition} MdastDefinition
 * @typedef {import('mdast').FootnoteDefinition} MdastFootnoteDefinition
 * @typedef {import('mdast').Parent} MdastParent
 * @typedef {import('mdast').Root} MdastRoot
 *//**
 * @typedef {HastRoot | HastContent} HastNodes
 * @typedef {MdastRoot | MdastContent} MdastNodes
 * @typedef {Extract<MdastNodes, MdastParent>} MdastParents
 *
 * @typedef EmbeddedHastFields
 *   hast fields.
 * @property {string | null | undefined} [hName]
 *   Generate a specific element with this tag name instead.
 * @property {HastProperties | null | undefined} [hProperties]
 *   Generate an element with these properties instead.
 * @property {Array<HastElementContent> | null | undefined} [hChildren]
 *   Generate an element with this content instead.
 *
 * @typedef {Record<string, unknown> & EmbeddedHastFields} MdastData
 *   mdast data with embedded hast fields.
 *
 * @typedef {MdastNodes & {data?: MdastData | null | undefined}} MdastNodeWithData
 *   mdast node with embedded hast data.
 *
 * @typedef PointLike
 *   Point-like value.
 * @property {number | null | undefined} [line]
 *   Line.
 * @property {number | null | undefined} [column]
 *   Column.
 * @property {number | null | undefined} [offset]
 *   Offset.
 *
 * @typedef PositionLike
 *   Position-like value.
 * @property {PointLike | null | undefined} [start]
 *   Point-like value.
 * @property {PointLike | null | undefined} [end]
 *   Point-like value.
 *
 * @callback Handler
 *   Handle a node.
 * @param {State} state
 *   Info passed around.
 * @param {any} node
 *   mdast node to handle.
 * @param {MdastParents | null | undefined} parent
 *   Parent of `node`.
 * @returns {HastElementContent | Array<HastElementContent> | null | undefined}
 *   hast node.
 *
 * @callback HFunctionProps
 *   Signature of `state` for when props are passed.
 * @param {MdastNodes | PositionLike | null | undefined} node
 *   mdast node or unist position.
 * @param {string} tagName
 *   HTML tag name.
 * @param {HastProperties} props
 *   Properties.
 * @param {Array<HastElementContent> | null | undefined} [children]
 *   hast content.
 * @returns {HastElement}
 *   Compiled element.
 *
 * @callback HFunctionNoProps
 *   Signature of `state` for when no props are passed.
 * @param {MdastNodes | PositionLike | null | undefined} node
 *   mdast node or unist position.
 * @param {string} tagName
 *   HTML tag name.
 * @param {Array<HastElementContent> | null | undefined} [children]
 *   hast content.
 * @returns {HastElement}
 *   Compiled element.
 *
 * @typedef HFields
 *   Info on `state`.
 * @property {boolean} dangerous
 *   Whether HTML is allowed.
 * @property {string} clobberPrefix
 *   Prefix to use to prevent DOM clobbering.
 * @property {string} footnoteLabel
 *   Label to use to introduce the footnote section.
 * @property {string} footnoteLabelTagName
 *   HTML used for the footnote label.
 * @property {HastProperties} footnoteLabelProperties
 *   Properties on the HTML tag used for the footnote label.
 * @property {string} footnoteBackLabel
 *   Label to use from backreferences back to their footnote call.
 * @property {(identifier: string) => MdastDefinition | null} definition
 *   Definition cache.
 * @property {Record<string, MdastFootnoteDefinition>} footnoteById
 *   Footnote definitions by their identifier.
 * @property {Array<string>} footnoteOrder
 *   Identifiers of order when footnote calls first appear in tree order.
 * @property {Record<string, number>} footnoteCounts
 *   Counts for how often the same footnote was called.
 * @property {Handlers} handlers
 *   Applied handlers.
 * @property {Handler} unknownHandler
 *   Handler for any none not in `passThrough` or otherwise handled.
 * @property {(from: MdastNodes, node: HastNodes) => void} patch
 *   Copy a node’s positional info.
 * @property {<Type extends HastNodes>(from: MdastNodes, to: Type) => Type | HastElement} applyData
 *   Honor the `data` of `from`, and generate an element instead of `node`.
 * @property {(node: MdastNodes, parent: MdastParents | null | undefined) => HastElementContent | Array<HastElementContent> | null | undefined} one
 *   Transform an mdast node to hast.
 * @property {(node: MdastNodes) => Array<HastElementContent>} all
 *   Transform the children of an mdast parent to hast.
 * @property {<Type extends HastContent>(nodes: Array<Type>, loose?: boolean | null | undefined) => Array<Type | HastText>} wrap
 *   Wrap `nodes` with line endings between each node, adds initial/final line endings when `loose`.
 * @property {(left: MdastNodeWithData | PositionLike | null | undefined, right: HastElementContent) => HastElementContent} augment
 *   Like `state` but lower-level and usable on non-elements.
 *   Deprecated: use `patch` and `applyData`.
 * @property {Array<string>} passThrough
 *   List of node types to pass through untouched (except for their children).
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [allowDangerousHtml=false]
 *   Whether to persist raw HTML in markdown in the hast tree.
 * @property {string | null | undefined} [clobberPrefix='user-content-']
 *   Prefix to use before the `id` attribute on footnotes to prevent it from
 *   *clobbering*.
 * @property {string | null | undefined} [footnoteBackLabel='Back to content']
 *   Label to use from backreferences back to their footnote call (affects
 *   screen readers).
 * @property {string | null | undefined} [footnoteLabel='Footnotes']
 *   Label to use for the footnotes section (affects screen readers).
 * @property {HastProperties | null | undefined} [footnoteLabelProperties={className: ['sr-only']}]
 *   Properties to use on the footnote label (note that `id: 'footnote-label'`
 *   is always added as footnote calls use it with `aria-describedby` to
 *   provide an accessible label).
 * @property {string | null | undefined} [footnoteLabelTagName='h2']
 *   Tag name to use for the footnote label.
 * @property {Handlers | null | undefined} [handlers]
 *   Extra handlers for nodes.
 * @property {Array<string> | null | undefined} [passThrough]
 *   List of custom mdast node types to pass through (keep) in hast (note that
 *   the node itself is passed, but eventual children are transformed).
 * @property {Handler | null | undefined} [unknownHandler]
 *   Handler for all unknown nodes.
 *
 * @typedef {Record<string, Handler>} Handlers
 *   Handle nodes.
 *
 * @typedef {HFunctionProps & HFunctionNoProps & HFields} State
 *   Info passed around.
 */var i=n("ei8wA"),o=n("40w8i"),l=n("8bjnJ"),a=n("kCihy"),u=n("1u0y6");let s={}.hasOwnProperty;function c(e,t){let n=t||{},r=n.allowDangerousHtml||!1,c={};// @ts-expect-error Hush, it’s fine!
return(// To do: next major: add `options` to state, remove:
// `dangerous`, `clobberPrefix`, `footnoteLabel`, `footnoteLabelTagName`,
// `footnoteLabelProperties`, `footnoteBackLabel`, `passThrough`,
// `unknownHandler`.
// To do: next major: move to `state.options.allowDangerousHtml`.
y.dangerous=r,// To do: next major: move to `state.options`.
y.clobberPrefix=void 0===n.clobberPrefix||null===n.clobberPrefix?"user-content-":n.clobberPrefix,// To do: next major: move to `state.options`.
y.footnoteLabel=n.footnoteLabel||"Footnotes",// To do: next major: move to `state.options`.
y.footnoteLabelTagName=n.footnoteLabelTagName||"h2",// To do: next major: move to `state.options`.
y.footnoteLabelProperties=n.footnoteLabelProperties||{className:["sr-only"]},// To do: next major: move to `state.options`.
y.footnoteBackLabel=n.footnoteBackLabel||"Back to content",// To do: next major: move to `state.options`.
y.unknownHandler=n.unknownHandler,// To do: next major: move to `state.options`.
y.passThrough=n.passThrough,y.handlers={...u.handlers,...n.handlers},// To do: next major: replace utility with `definitionById` object, so we
// only walk once (as we need footnotes too).
y.definition=(0,a.definitions)(e),y.footnoteById=c,/** @type {Array<string>} */y.footnoteOrder=[],/** @type {Record<string, number>} */y.footnoteCounts={},y.patch=p,y.applyData=f,y.one=/* c8 ignore stop *//**
   * Transform an mdast node into a hast node.
   *
   * @param {MdastNodes} node
   *   mdast node.
   * @param {MdastParents | null | undefined} [parent]
   *   Parent of `node`.
   * @returns {HastElementContent | Array<HastElementContent> | null | undefined}
   *   Resulting hast node.
   */function(e,t){// @ts-expect-error: that’s a state :)
return d(y,e,t)},y.all=/**
   * Transform the children of an mdast node into hast nodes.
   *
   * @param {MdastNodes} parent
   *   mdast node to compile
   * @returns {Array<HastElementContent>}
   *   Resulting hast nodes.
   */function(e){// @ts-expect-error: that’s a state :)
return h(y,e)},y.wrap=g,// To do: next major: remove `augment`.
y.augment=m,(0,i.visit)(e,"footnoteDefinition",e=>{let t=String(e.identifier).toUpperCase();s.call(c,t)||(c[t]=e)}),y);/**
   * Finalise the created `right`, a hast node, from `left`, an mdast node.
   *
   * @param {MdastNodeWithData | PositionLike | null | undefined} left
   * @param {HastElementContent} right
   * @returns {HastElementContent}
   *//* c8 ignore start */// To do: next major: remove.
function m(e,t){// Handle `data.hName`, `data.hProperties, `data.hChildren`.
if(e&&"data"in e&&e.data){/** @type {MdastData} */let n=e.data;n.hName&&("element"!==t.type&&(t={type:"element",tagName:"",properties:{},children:[]}),t.tagName=n.hName),"element"===t.type&&n.hProperties&&(t.properties={...t.properties,...n.hProperties}),"children"in t&&t.children&&n.hChildren&&(t.children=n.hChildren)}if(e){let n="type"in e?e:{position:e};(0,l.generated)(n)||(t.position={start:(0,o.pointStart)(n),end:(0,o.pointEnd)(n)})}return t}/* c8 ignore stop *//**
   * Create an element for `node`.
   *
   * @type {HFunctionProps}
   *//* c8 ignore start */// To do: next major: remove.
function y(e,t,n,r){// @ts-expect-error augmenting an element yields an element.
return Array.isArray(n)&&(r=n,n={}),m(e,{type:"element",tagName:t,properties:n||{},children:r||[]})}}/**
 * Copy a node’s positional info.
 *
 * @param {MdastNodes} from
 *   mdast node to copy from.
 * @param {HastNodes} to
 *   hast node to copy into.
 * @returns {void}
 *   Nothing.
 */function p(e,t){e.position&&(t.position=(0,o.position)(e))}/**
 * Honor the `data` of `from` and maybe generate an element instead of `to`.
 *
 * @template {HastNodes} Type
 *   Node type.
 * @param {MdastNodes} from
 *   mdast node to use data from.
 * @param {Type} to
 *   hast node to change.
 * @returns {Type | HastElement}
 *   Nothing.
 */function f(e,t){/** @type {Type | HastElement} */let n=t;// Handle `data.hName`, `data.hProperties, `data.hChildren`.
if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;"string"==typeof t&&("element"===n.type?n.tagName=t:n={type:"element",tagName:t,properties:{},children:[]}),"element"===n.type&&i&&(n.properties={...n.properties,...i}),"children"in n&&n.children&&null!=r&&(n.children=r)}return n}function d(e,t,n){let r=t&&t.type;// Fail on non-nodes.
if(!r)throw Error("Expected node, got `"+t+"`");return s.call(e.handlers,r)?e.handlers[r](e,t,n):e.passThrough&&e.passThrough.includes(r)?"children"in t?{...t,children:h(e,t)}:t:e.unknownHandler?e.unknownHandler(e,t,n):/**
 * Transform an unknown node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastNodes} node
 *   Unknown mdast node.
 * @returns {HastText | HastElement}
 *   Resulting hast node.
 */function(e,t){let n=t.data||{},r="value"in t&&!(s.call(n,"hProperties")||s.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:h(e,t)};return e.patch(t,r),e.applyData(t,r)}(e,t)}function h(e,t){/** @type {Array<HastElementContent>} */let n=[];if("children"in t){let r=t.children,i=-1;for(;++i<r.length;){let o=d(e,r[i],t);// To do: see if we van clean this? Can we merge texts?
if(o){if(i&&"break"===r[i-1].type&&(Array.isArray(o)||"text"!==o.type||(o.value=o.value.replace(/^\s+/,"")),!Array.isArray(o)&&"element"===o.type)){let e=o.children[0];e&&"text"===e.type&&(e.value=e.value.replace(/^\s+/,""))}Array.isArray(o)?n.push(...o):n.push(o)}}}return n}function g(e,t){/** @type {Array<Type | HastText>} */let n=[],r=-1;for(t&&n.push({type:"text",value:"\n"});++r<e.length;)r&&n.push({type:"text",value:"\n"}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:"\n"}),n}}),n.register("ei8wA",function(e,r){t(e.exports,"visit",()=>o);/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 *//**
 * Check if `Child` can be a child of `Ancestor`.
 *
 * Returns the ancestor when `Child` can be a child of `Ancestor`, or returns
 * `never`.
 *
 * @template {Node} Ancestor
 *   Node type.
 * @template {Node} Child
 *   Node type.
 * @typedef {(
 *   Ancestor extends Parent
 *     ? Child extends Ancestor['children'][number]
 *       ? Ancestor
 *       : never
 *     : never
 * )} ParentsOf
 *//**
 * @template {Node} [Visited=Node]
 *   Visited node type.
 * @template {Parent} [Ancestor=Parent]
 *   Ancestor type.
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform `parent`.
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of `parent` still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Visited extends Node ? number | null : never} index
 *   Index of `node` in `parent`.
 * @param {Ancestor extends Node ? Ancestor | null : never} parent
 *   Parent of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 *//**
 * Build a typed `Visitor` function from a node and all possible parents.
 *
 * It will infer which values are passed as `node` and which as `parent`.
 *
 * @template {Node} Visited
 *   Node type.
 * @template {Parent} Ancestor
 *   Parent type.
 * @typedef {Visitor<Visited, ParentsOf<Ancestor, Visited>>} BuildVisitorFromMatch
 *//**
 * Build a typed `Visitor` function from a list of descendants and a test.
 *
 * It will infer which values are passed as `node` and which as `parent`.
 *
 * @template {Node} Descendant
 *   Node type.
 * @template {Test} Check
 *   Test type.
 * @typedef {(
 *   BuildVisitorFromMatch<
 *     import('unist-util-visit-parents/complex-types.js').Matches<Descendant, Check>,
 *     Extract<Descendant, Parent>
 *   >
 * )} BuildVisitorFromDescendants
 *//**
 * Build a typed `Visitor` function from a tree and a test.
 *
 * It will infer which values are passed as `node` and which as `parent`.
 *
 * @template {Node} [Tree=Node]
 *   Node type.
 * @template {Test} [Check=string]
 *   Test type.
 * @typedef {(
 *   BuildVisitorFromDescendants<
 *     import('unist-util-visit-parents/complex-types.js').InclusiveDescendant<Tree>,
 *     Check
 *   >
 * )} BuildVisitor
 */var i=n("7xAT4");let o=/**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   *//**
     * @param {Node} tree
     * @param {Test} test
     * @param {Visitor} visitor
     * @param {boolean | null | undefined} [reverse]
     * @returns {void}
     */function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null),(0,i.visitParents)(e,t,/**
       * @param {Node} node
       * @param {Array<Parent>} parents
       */function(e,t){let r=t[t.length-1];return n(e,r?r.children.indexOf(e):null,r)},r)}}),n.register("7xAT4",function(e,r){t(e.exports,"visitParents",()=>l);/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 *//**
 * @typedef {boolean | 'skip'} Action
 *   Union of the action types.
 *
 * @typedef {number} Index
 *   Move to the sibling at `index` next (after node itself is completely
 *   traversed).
 *
 *   Useful if mutating the tree, such as removing the node the visitor is
 *   currently on, or any of its previous siblings.
 *   Results less than 0 or greater than or equal to `children.length` stop
 *   traversing the parent.
 *
 * @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple
 *   List with one or two values, the first an action, the second an index.
 *
 * @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult
 *   Any value that can be returned from a visitor.
 *//**
 * @template {Node} [Visited=Node]
 *   Visited node type.
 * @template {Parent} [Ancestor=Parent]
 *   Ancestor type.
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform the parent of node (the last of `ancestors`).
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of an ancestor still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Array<Ancestor>} ancestors
 *   Ancestors of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 *//**
 * @template {Node} [Tree=Node]
 *   Tree type.
 * @template {Test} [Check=string]
 *   Test type.
 * @typedef {Visitor<import('./complex-types.js').Matches<import('./complex-types.js').InclusiveDescendant<Tree>, Check>, Extract<import('./complex-types.js').InclusiveDescendant<Tree>, Parent>>} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parents`.
 */var i=n("cXrlj"),o=n("dwwhP");let l=/**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   *//**
     * @param {Node} tree
     * @param {Test} test
     * @param {Visitor<Node>} visitor
     * @param {boolean | null | undefined} [reverse]
     * @returns {void}
     */function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,// @ts-expect-error no visitor given, so `visitor` is test.
n=t,t=null);let l=(0,i.convert)(t),a=r?-1:1;/**
       * @param {Node} node
       * @param {number | undefined} index
       * @param {Array<Parent>} parents
       */(function e(i,u,s){/** @type {Record<string, unknown>} */// @ts-expect-error: hush
let c=i&&"object"==typeof i?i:{};if("string"==typeof c.type){let e="string"==typeof c.tagName?c.tagName:"string"==typeof c.name?c.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(0,o.color)(i.type+(e?"<"+e+">":""))+")"})}return p;function p(){var o;/** @type {ActionTuple} */let c,p,f,d=[];if((!t||l(i,u,s[s.length-1]||null))&&!1===(d=Array.isArray(o=n(i,s))?o:"number"==typeof o?[!0,o]:[o])[0])return d;// @ts-expect-error looks like a parent.
if(i.children&&"skip"!==d[0])// @ts-expect-error looks like a parent.
for(// @ts-expect-error looks like a parent.
p=(r?i.children.length:-1)+a,// @ts-expect-error looks like a parent.
f=s.concat(i);p>-1&&p<i.children.length;){if(!1===// @ts-expect-error looks like a parent.
(c=e(i.children[p],p,f)())[0])return c;p="number"==typeof c[1]?c[1]:p+a}return d}})(e,void 0,[])()}}),n.register("cXrlj",function(e,n){t(e.exports,"convert",()=>r);let r=/**
   * @type {(
   *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   *//**
     * @param {Test} [test]
     * @returns {AssertAnything}
     */function(e){if(null==e)return o;if("string"==typeof e)return i(/**
   * @param {Node} node
   */function(t){return t&&t.type===e});if("object"==typeof e)return Array.isArray(e)?/**
 * @param {Array<string | Props | TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */function(e){/** @type {Array<AssertAnything>} */let t=[],n=-1;for(;++n<e.length;)t[n]=r(e[n]);return i(/**
   * @this {unknown}
   * @param {Array<unknown>} parameters
   * @returns {boolean}
   */function(...e){let n=-1;for(;++n<t.length;)if(t[n].call(this,...e))return!0;return!1})}(e):i(/**
   * @param {Node} node
   * @returns {boolean}
   */function(t){/** @type {string} */let n;for(n in e)// @ts-expect-error: hush, it sure works as an index.
if(t[n]!==e[n])return!1;return!0});if("function"==typeof e)return i(e);throw Error("Expected function, string, or object as test")};/**
 * Turn a custom test into a test for a node that passes that test.
 *
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */function i(e){return(/**
   * @this {unknown}
   * @param {unknown} node
   * @param {Array<unknown>} parameters
   * @returns {boolean}
   */function(t,...n){return!!(t&&"object"==typeof t&&"type"in t&&e.call(this,t,...n))})}function o(){return!0}}),n.register("dwwhP",function(e,n){t(e.exports,"color",()=>r);/**
 * @param {string} d
 * @returns {string}
 */function r(e){return e}}),n.register("40w8i",function(e,n){t(e.exports,"pointStart",()=>r),t(e.exports,"pointEnd",()=>i),t(e.exports,"position",()=>o);/**
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 *//**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 *//**
 * Get the starting point of `node`.
 *
 * @param node
 *   Node.
 * @returns
 *   Point.
 */let r=l("start"),i=l("end");function o(e){return{start:r(e),end:i(e)}}/**
 * Get the positional info of `node`.
 *
 * @param {'start' | 'end'} type
 *   Side.
 * @returns
 *   Getter.
 */function l(e){return(/**
   * Get the point info of `node` at a bound side.
   *
   * @param {NodeLike | Node | null | undefined} [node]
   * @returns {Point}
   */function(t){let n=t&&t.position&&t.position[e]||{};// To do: next major: don’t return points when invalid.
return{// @ts-expect-error: in practice, null is allowed.
line:n.line||null,// @ts-expect-error: in practice, null is allowed.
column:n.column||null,// @ts-expect-error: in practice, null is allowed.
offset:n.offset>-1?n.offset:null}})}}),n.register("8bjnJ",function(e,n){t(e.exports,"generated",()=>r);/**
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef NodeLike
 * @property {PositionLike | null | undefined} [position]
 *//**
 * Check if `node` is generated.
 *
 * @param {NodeLike | null | undefined} [node]
 *   Node to check.
 * @returns {boolean}
 *   Whether `node` is generated (does not have positional info).
 */function r(e){return!e||!e.position||!e.position.start||!e.position.start.line||!e.position.start.column||!e.position.end||!e.position.end.line||!e.position.end.column}}),n.register("kCihy",function(e,r){t(e.exports,"definitions",()=>l);/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').Definition} Definition
 *//**
 * @typedef {Root | Content} Node
 *
 * @callback GetDefinition
 *   Get a definition by identifier.
 * @param {string | null | undefined} [identifier]
 *   Identifier of definition.
 * @returns {Definition | null}
 *   Definition corresponding to `identifier` or `null`.
 */var i=n("ei8wA");let o={}.hasOwnProperty;function l(e){/** @type {Record<string, Definition>} */let t=Object.create(null);if(!e||!e.type)throw Error("mdast-util-definitions expected node");return(0,i.visit)(e,"definition",e=>{let n=a(e.identifier);n&&!o.call(t,n)&&(t[n]=e)}),/** @type {GetDefinition} */function(e){let n=a(e);// To do: next major: return `undefined` when not found.
return n&&o.call(t,n)?t[n]:null}}/**
 * @param {string | null | undefined} [value]
 * @returns {string}
 */function a(e){return String(e||"").toUpperCase()}}),n.register("1u0y6",function(e,r){t(e.exports,"handlers",()=>L);var i=n("bBTWt"),o=n("gAkBB"),l=n("aQ0We"),a=n("1eNIu"),u=n("6Pou9"),s=n("lzRR1"),c=n("4R9bv"),p=n("g6bry"),f=n("2ude9"),d=n("luOdh"),h=n("3ONqI"),g=n("ginya"),m=n("jcqku"),y=n("lTpT2"),b=n("lhaRl"),x=n("aA78B"),k=n("kaiJ7"),v=n("9TBfz"),D=n("d1czY"),w=n("84G49"),S=n("auLC5"),E=n("bEKLo"),A=n("ksz7P"),C=n("Sxzp6");let L={blockquote:i.blockquote,break:o.hardBreak,code:l.code,delete:a.strikethrough,emphasis:u.emphasis,footnoteReference:s.footnoteReference,footnote:c.footnote,heading:p.heading,html:f.html,imageReference:d.imageReference,image:h.image,inlineCode:g.inlineCode,linkReference:m.linkReference,link:y.link,listItem:b.listItem,list:x.list,paragraph:k.paragraph,root:v.root,strong:D.strong,table:w.table,tableCell:E.tableCell,tableRow:S.tableRow,text:A.text,thematicBreak:C.thematicBreak,toml:T,yaml:T,definition:T,footnoteDefinition:T};// Return nothing for nodes that are ignored.
function T(){// To do: next major: return `undefined`.
return null}}),n.register("bBTWt",function(e,n){t(e.exports,"blockquote",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('../state.js').State} State
 *//**
 * Turn an mdast `blockquote` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Blockquote} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */function r(e,t){/** @type {Element} */let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}}),n.register("gAkBB",function(e,n){t(e.exports,"hardBreak",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').Break} Break
 * @typedef {import('../state.js').State} State
 *//**
 * Turn an mdast `break` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Break} node
 *   mdast node.
 * @returns {Array<Element | Text>}
 *   hast element content.
 */function r(e,t){/** @type {Element} */let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:"\n"}]}}),n.register("aQ0We",function(e,n){t(e.exports,"code",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Code} Code
 * @typedef {import('../state.js').State} State

 *//**
 * Turn an mdast `code` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Code} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */function r(e,t){let n=t.value?t.value+"\n":"",r=t.lang?t.lang.match(/^[^ \t]+(?=[ \t]|$)/):null,i={};r&&(i.className=["language-"+r]);// Create `<code>`.
/** @type {Element} */let o={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),// Create `<pre>`.
o={type:"element",tagName:"pre",properties:{},children:[o=e.applyData(t,o)]},e.patch(t,o),o}}),n.register("1eNIu",function(e,n){t(e.exports,"strikethrough",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Delete} Delete
 * @typedef {import('../state.js').State} State

 *//**
 * Turn an mdast `delete` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Delete} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */function r(e,t){/** @type {Element} */let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}}),n.register("6Pou9",function(e,n){t(e.exports,"emphasis",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('../state.js').State} State
 *//**
 * Turn an mdast `emphasis` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Emphasis} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */function r(e,t){/** @type {Element} */let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}}),n.register("lzRR1",function(e,r){t(e.exports,"footnoteReference",()=>o);/**
 * @typedef {import('mdast').FootnoteReference} FootnoteReference
 * @typedef {import('hast').Element} Element
 * @typedef {import('../state.js').State} State
 */var i=n("eznPp");function o(e,t){let n;let r=String(t.identifier).toUpperCase(),o=(0,i.normalizeUri)(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);-1===l?(e.footnoteOrder.push(r),e.footnoteCounts[r]=1,n=e.footnoteOrder.length):(e.footnoteCounts[r]++,n=l+1);let a=e.footnoteCounts[r],u={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fn-"+o,id:e.clobberPrefix+"fnref-"+o+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(n)}]};e.patch(t,u);/** @type {Element} */let s={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,s),e.applyData(t,s)}}),n.register("4R9bv",function(e,r){t(e.exports,"footnote",()=>o);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Footnote} Footnote
 * @typedef {import('../state.js').State} State
 */var i=n("lzRR1");function o(e,t){let n=e.footnoteById,r=1;for(;(r in n);)r++;let o=String(r);return n[o]={type:"footnoteDefinition",identifier:o,children:[{type:"paragraph",children:t.children}],position:t.position},(0,i.footnoteReference)(e,{type:"footnoteReference",identifier:o,position:t.position})}}),n.register("g6bry",function(e,n){t(e.exports,"heading",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../state.js').State} State
 *//**
 * Turn an mdast `heading` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Heading} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */function r(e,t){/** @type {Element} */let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}}),n.register("2ude9",function(e,n){t(e.exports,"html",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').HTML} Html
 * @typedef {import('../state.js').State} State
 * @typedef {import('../../index.js').Raw} Raw
 *//**
 * Turn an mdast `html` node into hast (`raw` node in dangerous mode, otherwise
 * nothing).
 *
 * @param {State} state
 *   Info passed around.
 * @param {Html} node
 *   mdast node.
 * @returns {Raw | Element | null}
 *   hast node.
 */function r(e,t){if(e.dangerous){/** @type {Raw} */let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}// To do: next major: return `undefined`.
return null}}),n.register("luOdh",function(e,r){t(e.exports,"imageReference",()=>l);/**
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('../state.js').State} State
 */var i=n("eznPp"),o=n("3Hi5O");function l(e,t){let n=e.definition(t.identifier);if(!n)return(0,o.revert)(e,t);/** @type {Properties} */let r={src:(0,i.normalizeUri)(n.url||""),alt:t.alt};null!==n.title&&void 0!==n.title&&(r.title=n.title);/** @type {Element} */let l={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,l),e.applyData(t,l)}}),n.register("3Hi5O",function(e,n){t(e.exports,"revert",()=>r);/**
 * @typedef {import('hast').ElementContent} ElementContent
 *
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').Reference} Reference
 * @typedef {import('mdast').Root} Root
 *
 * @typedef {import('./state.js').State} State
 *//**
 * @typedef {Root | Content} Nodes
 * @typedef {Extract<Nodes, Reference>} References
 */// To do: next major: always return array.
/**
 * Return the content of a reference without definition as plain text.
 *
 * @param {State} state
 *   Info passed around.
 * @param {References} node
 *   Reference node (image, link).
 * @returns {ElementContent | Array<ElementContent>}
 *   hast content.
 */function r(e,t){let n=t.referenceType,r="]";if("collapsed"===n?r+="[]":"full"===n&&(r+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type)return{type:"text",value:"!["+t.alt+r};let i=e.all(t),o=i[0];o&&"text"===o.type?o.value="["+o.value:i.unshift({type:"text",value:"["});let l=i[i.length-1];return l&&"text"===l.type?l.value+=r:i.push({type:"text",value:r}),i}}),n.register("3ONqI",function(e,r){t(e.exports,"image",()=>o);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Image} Image
 * @typedef {import('../state.js').State} State
 */var i=n("eznPp");function o(e,t){/** @type {Properties} */let n={src:(0,i.normalizeUri)(t.url)};null!==t.alt&&void 0!==t.alt&&(n.alt=t.alt),null!==t.title&&void 0!==t.title&&(n.title=t.title);/** @type {Element} */let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}}),n.register("ginya",function(e,n){t(e.exports,"inlineCode",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('../state.js').State} State
 *//**
 * Turn an mdast `inlineCode` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {InlineCode} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */function r(e,t){/** @type {Text} */let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);/** @type {Element} */let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}}),n.register("jcqku",function(e,r){t(e.exports,"linkReference",()=>l);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('../state.js').State} State
 */var i=n("eznPp"),o=n("3Hi5O");function l(e,t){let n=e.definition(t.identifier);if(!n)return(0,o.revert)(e,t);/** @type {Properties} */let r={href:(0,i.normalizeUri)(n.url||"")};null!==n.title&&void 0!==n.title&&(r.title=n.title);/** @type {Element} */let l={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)}}),n.register("lTpT2",function(e,r){t(e.exports,"link",()=>o);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Link} Link
 * @typedef {import('../state.js').State} State
 */var i=n("eznPp");function o(e,t){/** @type {Properties} */let n={href:(0,i.normalizeUri)(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);/** @type {Element} */let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}}),n.register("lhaRl",function(e,n){/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Parent} Parent
 * @typedef {import('mdast').Root} Root
 * @typedef {import('../state.js').State} State
 *//**
 * @typedef {Root | Content} Nodes
 * @typedef {Extract<Nodes, Parent>} Parents
 *//**
 * Turn an mdast `listItem` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {ListItem} node
 *   mdast node.
 * @param {Parents | null | undefined} parent
 *   Parent of `node`.
 * @returns {Element}
 *   hast node.
 */function r(e,t,n){let r=e.all(t),o=n?/**
 * @param {Parents} node
 * @return {Boolean}
 */function(e){let t=!1;if("list"===e.type){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=i(n[r])}return t}(n):i(t),l={},a=[];if("boolean"==typeof t.checked){let e;let n=r[0];n&&"element"===n.type&&"p"===n.tagName?e=n:(e={type:"element",tagName:"p",properties:{},children:[]},r.unshift(e)),e.children.length>0&&e.children.unshift({type:"text",value:" "}),e.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),// According to github-markdown-css, this class hides bullet.
// See: <https://github.com/sindresorhus/github-markdown-css>.
l.className=["task-list-item"]}let u=-1;for(;++u<r.length;){let e=r[u];(o||0!==u||"element"!==e.type||"p"!==e.tagName)&&a.push({type:"text",value:"\n"}),"element"!==e.type||"p"!==e.tagName||o?a.push(e):a.push(...e.children)}let s=r[r.length-1];s&&(o||"element"!==s.type||"p"!==s.tagName)&&a.push({type:"text",value:"\n"});/** @type {Element} */let c={type:"element",tagName:"li",properties:l,children:a};return e.patch(t,c),e.applyData(t,c)}/**
 * @param {ListItem} node
 * @return {Boolean}
 */function i(e){let t=e.spread;return null==t?e.children.length>1:t}t(e.exports,"listItem",()=>r)}),n.register("aA78B",function(e,n){t(e.exports,"list",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').List} List
 * @typedef {import('../state.js').State} State
 *//**
 * Turn an mdast `list` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {List} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */function r(e,t){/** @type {Properties} */let n={},r=e.all(t),i=-1;// Like GitHub, add a class for custom styling.
for("number"==typeof t.start&&1!==t.start&&(n.start=t.start);++i<r.length;){let e=r[i];if("element"===e.type&&"li"===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}/** @type {Element} */let o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}}),n.register("kaiJ7",function(e,n){t(e.exports,"paragraph",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('../state.js').State} State
 *//**
 * Turn an mdast `paragraph` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Paragraph} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */function r(e,t){/** @type {Element} */let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}}),n.register("9TBfz",function(e,n){t(e.exports,"root",()=>r);/**
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('../state.js').State} State
 *//**
 * Turn an mdast `root` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastRoot} node
 *   mdast node.
 * @returns {HastRoot | HastElement}
 *   hast node.
 */function r(e,t){/** @type {HastRoot} */let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}}),n.register("d1czY",function(e,n){t(e.exports,"strong",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('../state.js').State} State
 *//**
 * Turn an mdast `strong` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Strong} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */function r(e,t){/** @type {Element} */let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}}),n.register("84G49",function(e,r){t(e.exports,"table",()=>o);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Table} Table
 * @typedef {import('../state.js').State} State
 */var i=n("40w8i");function o(e,t){let n=e.all(t),r=n.shift(),o=[];if(r){/** @type {Element} */let n={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),o.push(n)}if(n.length>0){/** @type {Element} */let r={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=(0,i.pointStart)(t.children[1]),a=(0,i.pointEnd)(t.children[t.children.length-1]);l.line&&a.line&&(r.position={start:l,end:a}),o.push(r)}/** @type {Element} */let l={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,l),e.applyData(t,l)}}),n.register("auLC5",function(e,n){t(e.exports,"tableRow",()=>r);/**
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').Parent} Parent
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').TableRow} TableRow
 * @typedef {import('../state.js').State} State
 *//**
 * @typedef {Root | Content} Nodes
 * @typedef {Extract<Nodes, Parent>} Parents
 *//**
 * Turn an mdast `tableRow` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {TableRow} node
 *   mdast node.
 * @param {Parents | null | undefined} parent
 *   Parent of `node`.
 * @returns {Element}
 *   hast node.
 */function r(e,t,n){let r=n?n.children:void 0,i=r?r.indexOf(t):1,o=0===i?"th":"td",l=n&&"table"===n.type?n.align:void 0,a=l?l.length:t.children.length,u=-1,s=[];for(;++u<a;){// Note: can also be undefined.
let n=t.children[u],r={},i=l?l[u]:void 0;i&&(r.align=i);/** @type {Element} */let a={type:"element",tagName:o,properties:r,children:[]};n&&(a.children=e.all(n),e.patch(n,a),a=e.applyData(t,a)),s.push(a)}/** @type {Element} */let c={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,c),e.applyData(t,c)}}),n.register("bEKLo",function(e,n){t(e.exports,"tableCell",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('../state.js').State} State
 *//**
 * Turn an mdast `tableCell` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {TableCell} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */function r(e,t){// Note: this function is normally not called: see `table-row` for how rows
// and their cells are compiled.
/** @type {Element} */let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}}),n.register("ksz7P",function(e,r){t(e.exports,"text",()=>o);/**
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('hast').Text} HastText
 * @typedef {import('mdast').Text} MdastText
 * @typedef {import('../state.js').State} State
 */var i=n("4AQW1");function o(e,t){/** @type {HastText} */let n={type:"text",value:(0,i.trimLines)(String(t.value))};return e.patch(t,n),e.applyData(t,n)}}),n.register("4AQW1",function(e,n){function r(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),o=0,l=[];for(;r;)l.push(i(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return l.push(i(t.slice(o),o>0,!1)),l.join("")}/**
 * @param {string} value
 *   Line to trim.
 * @param {boolean} start
 *   Whether to trim the start of the line.
 * @param {boolean} end
 *   Whether to trim the end of the line.
 * @returns {string}
 *   Trimmed line.
 */function i(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;9/* `\t` */===t||32/* ` ` */===t;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;9===t||32===t;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}t(e.exports,"trimLines",()=>r)}),n.register("Sxzp6",function(e,n){t(e.exports,"thematicBreak",()=>r);/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('../state.js').State} State
 *//**
 * Turn an mdast `thematicBreak` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {ThematicBreak} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */function r(e,t){/** @type {Element} */let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}}),n.register("4RND8",function(e,t){// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
e.exports=n("dflA0")()}),n.register("dflA0",function(e,t){var r=n("lNqgI");function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,l){if(l!==r){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}}),n.register("lNqgI",function(e,t){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}),n.register("aY292",function(e,r){t(e.exports,"html",()=>p),t(e.exports,"svg",()=>f);/**
 * @typedef {import('./lib/util/info.js').Info} Info
 * @typedef {import('./lib/util/schema.js').Schema} Schema
 */var i=n("8K29K"),o=n("cXEVp"),l=n("2mSAN"),a=n("8TXBj"),u=n("7ejLl"),s=n("cwo9C"),c=n("lF5RX");n("8e8kD"),n("j3JRp");let p=(0,i.merge)([l.xml,o.xlink,a.xmlns,u.aria,s.html],"html"),f=(0,i.merge)([l.xml,o.xlink,a.xmlns,u.aria,c.svg],"svg")}),n.register("8K29K",function(e,r){t(e.exports,"merge",()=>o);/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 */var i=n("2V6iF");function o(e,t){/** @type {Properties} */let n={},r={},o=-1;for(;++o<e.length;)Object.assign(n,e[o].property),Object.assign(r,e[o].normal);return new i.Schema(n,r,t)}}),n.register("2V6iF",function(e,n){t(e.exports,"Schema",()=>r);/**
 * @typedef {import('./info.js').Info} Info
 * @typedef {Record<string, Info>} Properties
 * @typedef {Record<string, string>} Normal
 */class r{/**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */constructor(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}}/** @type {Properties} */r.prototype.property={},/** @type {Normal} */r.prototype.normal={},/** @type {string|null} */r.prototype.space=null}),n.register("cXEVp",function(e,r){t(e.exports,"xlink",()=>o);var i=n("jbPNJ");let o=(0,i.create)({space:"xlink",transform:(e,t)=>"xlink:"+t.slice(5).toLowerCase(),properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})}),n.register("jbPNJ",function(e,r){t(e.exports,"create",()=>u);/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 *
 * @typedef {Record<string, string>} Attributes
 *
 * @typedef {Object} Definition
 * @property {Record<string, number|null>} properties
 * @property {(attributes: Attributes, property: string) => string} transform
 * @property {string} [space]
 * @property {Attributes} [attributes]
 * @property {Array<string>} [mustUseProperty]
 */var i=n("4GEAW"),o=n("2V6iF"),l=n("lqZ1V");let a={}.hasOwnProperty;function u(e){let t;/** @type {Properties} */let n={},r={};for(t in e.properties)if(a.call(e.properties,t)){let o=e.properties[t],a=new l.DefinedInfo(t,e.transform(e.attributes||{},t),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),n[t]=a,r[(0,i.normalize)(t)]=t,r[(0,i.normalize)(a.attribute)]=t}return new o.Schema(n,r,e.space)}}),n.register("4GEAW",function(e,n){t(e.exports,"normalize",()=>r);/**
 * @param {string} value
 * @returns {string}
 */function r(e){return e.toLowerCase()}}),n.register("lqZ1V",function(e,r){t(e.exports,"DefinedInfo",()=>a);var i=n("imkUs"),o=n("bhH9I");/** @type {Array<keyof types>} */// @ts-expect-error: hush.
let l=Object.keys(o);class a extends i.Info{/**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */constructor(e,t,n,r){var i,a;let u=-1;if(super(e,t),r&&(this.space=r),"number"==typeof n)for(;++u<l.length;){let e=l[u];i=l[u],(a=(n&o[e])===o[e])&&(this[i]=a)}}}a.prototype.defined=!0}),n.register("imkUs",function(e,n){t(e.exports,"Info",()=>r);class r{/**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */constructor(e,t){/** @type {string} */this.property=e,/** @type {string} */this.attribute=t}}/** @type {string|null} */r.prototype.space=null,r.prototype.boolean=!1,r.prototype.booleanish=!1,r.prototype.overloadedBoolean=!1,r.prototype.number=!1,r.prototype.commaSeparated=!1,r.prototype.spaceSeparated=!1,r.prototype.commaOrSpaceSeparated=!1,r.prototype.mustUseProperty=!1,r.prototype.defined=!1}),n.register("bhH9I",function(e,n){t(e.exports,"boolean",()=>i),t(e.exports,"booleanish",()=>o),t(e.exports,"overloadedBoolean",()=>l),t(e.exports,"number",()=>a),t(e.exports,"spaceSeparated",()=>u),t(e.exports,"commaSeparated",()=>s),t(e.exports,"commaOrSpaceSeparated",()=>c);let r=0,i=p(),o=p(),l=p(),a=p(),u=p(),s=p(),c=p();function p(){return 2**++r}}),n.register("2mSAN",function(e,r){t(e.exports,"xml",()=>o);var i=n("jbPNJ");let o=(0,i.create)({space:"xml",transform:(e,t)=>"xml:"+t.slice(3).toLowerCase(),properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})}),n.register("8TXBj",function(e,r){t(e.exports,"xmlns",()=>l);var i=n("jbPNJ"),o=n("4PxUO");let l=(0,i.create)({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:o.caseInsensitiveTransform,properties:{xmlns:null,xmlnsXLink:null}})}),n.register("4PxUO",function(e,r){t(e.exports,"caseInsensitiveTransform",()=>o);var i=n("5rtXf");function o(e,t){return(0,i.caseSensitiveTransform)(e,t.toLowerCase())}}),n.register("5rtXf",function(e,n){t(e.exports,"caseSensitiveTransform",()=>r);/**
 * @param {Record<string, string>} attributes
 * @param {string} attribute
 * @returns {string}
 */function r(e,t){return t in e?e[t]:t}}),n.register("7ejLl",function(e,r){t(e.exports,"aria",()=>l);var i=n("bhH9I"),o=n("jbPNJ");let l=(0,o.create)({transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:i.booleanish,ariaAutoComplete:null,ariaBusy:i.booleanish,ariaChecked:i.booleanish,ariaColCount:i.number,ariaColIndex:i.number,ariaColSpan:i.number,ariaControls:i.spaceSeparated,ariaCurrent:null,ariaDescribedBy:i.spaceSeparated,ariaDetails:null,ariaDisabled:i.booleanish,ariaDropEffect:i.spaceSeparated,ariaErrorMessage:null,ariaExpanded:i.booleanish,ariaFlowTo:i.spaceSeparated,ariaGrabbed:i.booleanish,ariaHasPopup:null,ariaHidden:i.booleanish,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:i.spaceSeparated,ariaLevel:i.number,ariaLive:null,ariaModal:i.booleanish,ariaMultiLine:i.booleanish,ariaMultiSelectable:i.booleanish,ariaOrientation:null,ariaOwns:i.spaceSeparated,ariaPlaceholder:null,ariaPosInSet:i.number,ariaPressed:i.booleanish,ariaReadOnly:i.booleanish,ariaRelevant:null,ariaRequired:i.booleanish,ariaRoleDescription:i.spaceSeparated,ariaRowCount:i.number,ariaRowIndex:i.number,ariaRowSpan:i.number,ariaSelected:i.booleanish,ariaSetSize:i.number,ariaSort:null,ariaValueMax:i.number,ariaValueMin:i.number,ariaValueNow:i.number,ariaValueText:null,role:null}})}),n.register("cwo9C",function(e,r){t(e.exports,"html",()=>a);var i=n("bhH9I"),o=n("jbPNJ"),l=n("4PxUO");let a=(0,o.create)({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:l.caseInsensitiveTransform,mustUseProperty:["checked","multiple","muted","selected"],properties:{// Standard Properties.
abbr:null,accept:i.commaSeparated,acceptCharset:i.spaceSeparated,accessKey:i.spaceSeparated,action:null,allow:null,allowFullScreen:i.boolean,allowPaymentRequest:i.boolean,allowUserMedia:i.boolean,alt:null,as:null,async:i.boolean,autoCapitalize:null,autoComplete:i.spaceSeparated,autoFocus:i.boolean,autoPlay:i.boolean,capture:i.boolean,charSet:null,checked:i.boolean,cite:null,className:i.spaceSeparated,cols:i.number,colSpan:null,content:null,contentEditable:i.booleanish,controls:i.boolean,controlsList:i.spaceSeparated,coords:i.number|i.commaSeparated,crossOrigin:null,data:null,dateTime:null,decoding:null,default:i.boolean,defer:i.boolean,dir:null,dirName:null,disabled:i.boolean,download:i.overloadedBoolean,draggable:i.booleanish,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:i.boolean,formTarget:null,headers:i.spaceSeparated,height:i.number,hidden:i.boolean,high:i.number,href:null,hrefLang:null,htmlFor:i.spaceSeparated,httpEquiv:i.spaceSeparated,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:i.boolean,itemId:null,itemProp:i.spaceSeparated,itemRef:i.spaceSeparated,itemScope:i.boolean,itemType:i.spaceSeparated,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:i.boolean,low:i.number,manifest:null,max:null,maxLength:i.number,media:null,method:null,min:null,minLength:i.number,multiple:i.boolean,muted:i.boolean,name:null,nonce:null,noModule:i.boolean,noValidate:i.boolean,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:i.boolean,optimum:i.number,pattern:null,ping:i.spaceSeparated,placeholder:null,playsInline:i.boolean,poster:null,preload:null,readOnly:i.boolean,referrerPolicy:null,rel:i.spaceSeparated,required:i.boolean,reversed:i.boolean,rows:i.number,rowSpan:i.number,sandbox:i.spaceSeparated,scope:null,scoped:i.boolean,seamless:i.boolean,selected:i.boolean,shape:null,size:i.number,sizes:null,slot:null,span:i.number,spellCheck:i.booleanish,src:null,srcDoc:null,srcLang:null,srcSet:null,start:i.number,step:null,style:null,tabIndex:i.number,target:null,title:null,translate:null,type:null,typeMustMatch:i.boolean,useMap:null,value:i.booleanish,width:i.number,wrap:null,// Legacy.
// See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
align:null,aLink:null,archive:i.spaceSeparated,axis:null,background:null,bgColor:null,border:i.number,borderColor:null,bottomMargin:i.number,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:i.boolean,declare:i.boolean,event:null,face:null,frame:null,frameBorder:null,hSpace:i.number,leftMargin:i.number,link:null,longDesc:null,lowSrc:null,marginHeight:i.number,marginWidth:i.number,noResize:i.boolean,noHref:i.boolean,noShade:i.boolean,noWrap:i.boolean,object:null,profile:null,prompt:null,rev:null,rightMargin:i.number,rules:null,scheme:null,scrolling:i.booleanish,standby:null,summary:null,text:null,topMargin:i.number,valueType:null,version:null,vAlign:null,vLink:null,vSpace:i.number,// Non-standard Properties.
allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:i.boolean,disableRemotePlayback:i.boolean,prefix:null,property:null,results:i.number,security:null,unselectable:null}})}),n.register("lF5RX",function(e,r){t(e.exports,"svg",()=>a);var i=n("bhH9I"),o=n("jbPNJ"),l=n("5rtXf");let a=(0,o.create)({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",// These were camelcased in Tiny. Now lowercased in SVG 2
playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:l.caseSensitiveTransform,properties:{about:i.commaOrSpaceSeparated,accentHeight:i.number,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:i.number,amplitude:i.number,arabicForm:null,ascent:i.number,attributeName:null,attributeType:null,azimuth:i.number,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:i.number,by:null,calcMode:null,capHeight:i.number,className:i.spaceSeparated,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:i.number,diffuseConstant:i.number,direction:null,display:null,dur:null,divisor:i.number,dominantBaseline:null,download:i.boolean,dx:null,dy:null,edgeMode:null,editable:null,elevation:i.number,enableBackground:null,end:null,event:null,exponent:i.number,externalResourcesRequired:null,fill:null,fillOpacity:i.number,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:i.commaSeparated,g2:i.commaSeparated,glyphName:i.commaSeparated,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:i.number,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:i.number,horizOriginX:i.number,horizOriginY:i.number,id:null,ideographic:i.number,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:i.number,k:i.number,k1:i.number,k2:i.number,k3:i.number,k4:i.number,kernelMatrix:i.commaOrSpaceSeparated,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:i.number,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:i.number,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:i.number,overlineThickness:i.number,paintOrder:null,panose1:null,path:null,pathLength:i.number,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:i.spaceSeparated,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:i.number,pointsAtY:i.number,pointsAtZ:i.number,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:i.commaOrSpaceSeparated,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:i.commaOrSpaceSeparated,rev:i.commaOrSpaceSeparated,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:i.commaOrSpaceSeparated,requiredFeatures:i.commaOrSpaceSeparated,requiredFonts:i.commaOrSpaceSeparated,requiredFormats:i.commaOrSpaceSeparated,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:i.number,specularExponent:i.number,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:i.number,strikethroughThickness:i.number,string:null,stroke:null,strokeDashArray:i.commaOrSpaceSeparated,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:i.number,strokeOpacity:i.number,strokeWidth:null,style:null,surfaceScale:i.number,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:i.commaOrSpaceSeparated,tabIndex:i.number,tableValues:null,target:null,targetX:i.number,targetY:i.number,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:i.commaOrSpaceSeparated,to:null,transform:null,u1:null,u2:null,underlinePosition:i.number,underlineThickness:i.number,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:i.number,values:null,vAlphabetic:i.number,vMathematical:i.number,vectorEffect:null,vHanging:i.number,vIdeographic:i.number,version:null,vertAdvY:i.number,vertOriginX:i.number,vertOriginY:i.number,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:i.number,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}})}),n.register("8e8kD",function(e,r){t(e.exports,"find",()=>c);/**
 * @typedef {import('./util/schema.js').Schema} Schema
 */var i=n("4GEAW"),o=n("lqZ1V"),l=n("imkUs");let a=/^data[-\w.:]+$/i,u=/-[a-z]/g,s=/[A-Z]/g;function c(e,t){let n=(0,i.normalize)(t),r=t,c=l.Info;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&a.test(t)){// Attribute or property.
if("-"===t.charAt(4)){// Turn it into a property.
let e=t.slice(5).replace(u,f);r="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{// Turn it into an attribute.
let e=t.slice(4);if(!u.test(e)){let n=e.replace(s,p);"-"!==n.charAt(0)&&(n="-"+n),t="data"+n}}c=o.DefinedInfo}return new c(r,t)}/**
 * @param {string} $0
 * @returns {string}
 */function p(e){return"-"+e.toLowerCase()}/**
 * @param {string} $0
 * @returns {string}
 */function f(e){return e.charAt(1).toUpperCase()}}),n.register("j3JRp",function(e,n){t(e.exports,"hastToReact",()=>r);/**
 * `hast` is close to `React`, but differs in a couple of cases.
 *
 * To get a React property from a hast property, check if it is in
 * `hastToReact`, if it is, then use the corresponding value,
 * otherwise, use the hast property.
 *
 * @type {Record<string, string>}
 */let r={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"}}),n.register("1p9m5",function(e,r){t(e.exports,"default",()=>o);var i=n("ei8wA");function o(e){if(e.allowedElements&&e.disallowedElements)throw TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{(0,i.visit)(t,"element",(t,n,r)=>{let i;if(e.allowedElements?i=!e.allowedElements.includes(t.tagName):e.disallowedElements&&(i=e.disallowedElements.includes(t.tagName)),!i&&e.allowElement&&"number"==typeof n&&(i=!e.allowElement(t,n,/** @type {Element|Root} */r)),i&&"number"==typeof n)return e.unwrapDisallowed&&t.children?r.children.splice(n,1,...t.children):r.children.splice(n,1),n})}}}),n.register("hM85M",function(r,i){t(r.exports,"childrenToReact",()=>function t(n,r){let i;/** @type {Array<ReactNode>} */let x=[],k=-1;for(;++k<r.children.length;)"element"===(i=r.children[k]).type?x.push(/**
 * @param {Context} context
 * @param {Element} node
 * @param {number} index
 * @param {Element|Root} parent
 */function(n,r,i,a){let m;let x=n.options,k=void 0===x.transformLinkUri?h.uriTransformer:x.transformLinkUri,v=n.schema,D=r.tagName,w={},S=v;if("html"===v.space&&"svg"===D&&(S=c.svg,n.schema=S),r.properties)for(m in r.properties)g.call(r.properties,m)&&/**
 * @param {Record<string, unknown>} props
 * @param {string} prop
 * @param {unknown} value
 * @param {Context} ctx
 */function(e,t,n,r){let i=(0,u.find)(r.schema,t),o=n;null!=o&&o==o&&(Array.isArray(o)&&(o=i.commaSeparated?(0,f.stringify)(o):(0,p.stringify)(o)),"style"===i.property&&"string"==typeof o&&(o=/**
 * @param {string} value
 * @returns {Record<string, string>}
 */function(e){/** @type {Record<string, string>} */let t={};try{(0,d.default)(e,/**
   * @param {string} name
   * @param {string} v
   */function(e,n){let r="-ms-"===e.slice(0,4)?`ms-${e.slice(4)}`:e;t[r.replace(/-([a-z])/g,b)]=n})}catch{// Silent.
    }return t}(o)),i.space&&i.property?e[g.call(s.hastToReact,i.property)?s.hastToReact[i.property]:i.property]=o:i.attribute&&(e[i.attribute]=o))}(w,m,r.properties[m],n);("ol"===D||"ul"===D)&&n.listDepth++;let E=t(n,r);("ol"===D||"ul"===D)&&n.listDepth--,// Restore parent schema.
    n.schema=v;// Nodes created by plugins do not have positional info, in which case we use
    // an object that matches the position interface.
    let A=r.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},C=x.components&&g.call(x.components,D)?x.components[D]:D,L="string"==typeof C||C===o.default.Fragment;if(!/*@__PURE__*/e(l).isValidElementType(C))throw TypeError(`Component for name \`${D}\` not defined or is not renderable`);if(w.key=[D,A.start.line,A.start.column,i].join("-"),"a"===D&&x.linkTarget&&(w.target="function"==typeof x.linkTarget?x.linkTarget(String(w.href||""),r.children,"string"==typeof w.title?w.title:null):x.linkTarget),"a"===D&&k&&(w.href=k(String(w.href||""),r.children,"string"==typeof w.title?w.title:null)),L||"code"!==D||"element"!==a.type||"pre"===a.tagName||(w.inline=!0),L||"h1"!==D&&"h2"!==D&&"h3"!==D&&"h4"!==D&&"h5"!==D&&"h6"!==D||(w.level=Number.parseInt(D.charAt(1),10)),"img"===D&&x.transformImageUri&&(w.src=x.transformImageUri(String(w.src||""),String(w.alt||""),"string"==typeof w.title?w.title:null)),!L&&"li"===D&&"element"===a.type){let e=/**
 * @param {Element|Root} node
 * @returns {Element?}
 */function(e){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if("element"===n.type&&"input"===n.tagName)return n}return null}(r);w.checked=e&&e.properties?!!e.properties.checked:null,w.index=y(a,r),w.ordered="ol"===a.tagName}// Ensure no React warnings are emitted for void elements w/ children.
    return L||"ol"!==D&&"ul"!==D||(w.ordered="ol"===D,w.depth=n.listDepth),"td"!==D&&"th"!==D||(w.align&&(w.style||(w.style={}),// @ts-expect-error assume `style` is an object
    w.style.textAlign=w.align,delete w.align),L||(w.isHeader="th"===D)),L||"tr"!==D||"element"!==a.type||(w.isHeader="thead"===a.tagName),x.sourcePos&&(w["data-sourcepos"]=[A.start.line,":",A.start.column,"-",A.end.line,":",A.end.column].map(String).join("")),!L&&x.rawSourcePos&&(w.sourcePosition=r.position),!L&&x.includeElementIndex&&(w.index=y(a,r),w.siblingCount=y(a)),L||(w.node=r),E.length>0?(0,o.default).createElement(C,w,E):(0,o.default).createElement(C,w)}(n,i,k,r)):"text"===i.type?"element"===r.type&&m.has(r.tagName)&&(0,a.whitespace)(i)||x.push(i.value):"raw"!==i.type||n.options.skipHtml||x.push(i.value);return x});/**
 * @template T
 * @typedef {import('react').ComponentType<T>} ComponentType<T>
 *//**
 * @template T
 * @typedef {import('react').ComponentPropsWithoutRef<T>} ComponentPropsWithoutRef<T>
 *//**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('unist').Position} Position
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Text} Text
 * @typedef {import('hast').Comment} Comment
 * @typedef {import('hast').DocType} Doctype
 * @typedef {import('property-information').Info} Info
 * @typedef {import('property-information').Schema} Schema
 * @typedef {import('./complex-types.js').ReactMarkdownProps} ReactMarkdownProps
 *
 * @typedef Raw
 * @property {'raw'} type
 * @property {string} value
 *
 * @typedef Context
 * @property {Options} options
 * @property {Schema} schema
 * @property {number} listDepth
 *
 * @callback TransformLink
 * @param {string} href
 * @param {Array<ElementContent>} children
 * @param {string?} title
 * @returns {string}
 *
 * @callback TransformImage
 * @param {string} src
 * @param {string} alt
 * @param {string?} title
 * @returns {string}
 *
 * @typedef {import('react').HTMLAttributeAnchorTarget} TransformLinkTargetType
 *
 * @callback TransformLinkTarget
 * @param {string} href
 * @param {Array<ElementContent>} children
 * @param {string?} title
 * @returns {TransformLinkTargetType|undefined}
 *
 * @typedef {keyof JSX.IntrinsicElements} ReactMarkdownNames
 *
 * To do: is `data-sourcepos` typeable?
 *
 * @typedef {ComponentPropsWithoutRef<'code'> & ReactMarkdownProps & {inline?: boolean}} CodeProps
 * @typedef {ComponentPropsWithoutRef<'h1'> & ReactMarkdownProps & {level: number}} HeadingProps
 * @typedef {ComponentPropsWithoutRef<'li'> & ReactMarkdownProps & {checked: boolean|null, index: number, ordered: boolean}} LiProps
 * @typedef {ComponentPropsWithoutRef<'ol'> & ReactMarkdownProps & {depth: number, ordered: true}} OrderedListProps
 * @typedef {ComponentPropsWithoutRef<'td'> & ReactMarkdownProps & {style?: Record<string, unknown>, isHeader: false}} TableDataCellProps
 * @typedef {ComponentPropsWithoutRef<'th'> & ReactMarkdownProps & {style?: Record<string, unknown>, isHeader: true}} TableHeaderCellProps
 * @typedef {ComponentPropsWithoutRef<'tr'> & ReactMarkdownProps & {isHeader: boolean}} TableRowProps
 * @typedef {ComponentPropsWithoutRef<'ul'> & ReactMarkdownProps & {depth: number, ordered: false}} UnorderedListProps
 *
 * @typedef {ComponentType<CodeProps>} CodeComponent
 * @typedef {ComponentType<HeadingProps>} HeadingComponent
 * @typedef {ComponentType<LiProps>} LiComponent
 * @typedef {ComponentType<OrderedListProps>} OrderedListComponent
 * @typedef {ComponentType<TableDataCellProps>} TableDataCellComponent
 * @typedef {ComponentType<TableHeaderCellProps>} TableHeaderCellComponent
 * @typedef {ComponentType<TableRowProps>} TableRowComponent
 * @typedef {ComponentType<UnorderedListProps>} UnorderedListComponent
 *
 * @typedef SpecialComponents
 * @property {CodeComponent|ReactMarkdownNames} code
 * @property {HeadingComponent|ReactMarkdownNames} h1
 * @property {HeadingComponent|ReactMarkdownNames} h2
 * @property {HeadingComponent|ReactMarkdownNames} h3
 * @property {HeadingComponent|ReactMarkdownNames} h4
 * @property {HeadingComponent|ReactMarkdownNames} h5
 * @property {HeadingComponent|ReactMarkdownNames} h6
 * @property {LiComponent|ReactMarkdownNames} li
 * @property {OrderedListComponent|ReactMarkdownNames} ol
 * @property {TableDataCellComponent|ReactMarkdownNames} td
 * @property {TableHeaderCellComponent|ReactMarkdownNames} th
 * @property {TableRowComponent|ReactMarkdownNames} tr
 * @property {UnorderedListComponent|ReactMarkdownNames} ul
 *
 * @typedef {Partial<Omit<import('./complex-types.js').NormalComponents, keyof SpecialComponents> & SpecialComponents>} Components
 *
 * @typedef Options
 * @property {boolean} [sourcePos=false]
 * @property {boolean} [rawSourcePos=false]
 * @property {boolean} [skipHtml=false]
 * @property {boolean} [includeElementIndex=false]
 * @property {null|false|TransformLink} [transformLinkUri]
 * @property {TransformImage} [transformImageUri]
 * @property {TransformLinkTargetType|TransformLinkTarget} [linkTarget]
 * @property {Components} [components]
 */var o=n("3TwHq"),l=n("5EgQh"),a=n("2h0WQ"),u=n("8e8kD"),s=n("j3JRp"),c=n("aY292"),p=n("9LDtD"),f=n("aydpb"),d=n("aKvL7"),h=n("10YAt");let g={}.hasOwnProperty,m=new Set(["table","thead","tbody","tfoot","tr"]);/**
 * @param {Element|Root} parent
 * @param {Element} [node]
 * @returns {number}
 */function y(e,t){let n=-1,r=0;for(;++n<e.children.length&&e.children[n]!==t;)"element"===e.children[n].type&&r++;return r}/**
 * @param {unknown} _
 * @param {string} $1
 */function b(e,t){return t.toUpperCase()}}),n.register("2h0WQ",function(e,n){t(e.exports,"whitespace",()=>r);/**
 * Check if the given value is *inter-element whitespace*.
 *
 * @param {unknown} thing
 *   Thing to check (typically `Node` or `string`).
 * @returns {boolean}
 *   Whether the `value` is inter-element whitespace (`boolean`): consisting of
 *   zero or more of space, tab (`\t`), line feed (`\n`), carriage return
 *   (`\r`), or form feed (`\f`).
 *   If a node is passed it must be a `Text` node, whose `value` field is
 *   checked.
 */function r(e){/** @type {string} */let t=e&&"object"==typeof e&&"text"===e.type?e.value||"":e;// HTML whitespace expression.
// See <https://infra.spec.whatwg.org/#ascii-whitespace>.
return"string"==typeof t&&""===t.replace(/[ \t\n\f\r]/g,"")}}),n.register("9LDtD",function(e,n){t(e.exports,"stringify",()=>r);function r(e){return e.join(" ").trim()}}),n.register("aydpb",function(e,n){t(e.exports,"stringify",()=>r);function r(e,t){let n=t||{},r=""===e[e.length-1]?[...e,""]:e;return r.join((n.padRight?" ":"")+","+(!1===n.padLeft?"":" ")).trim()}}),n.register("aKvL7",function(r,i){t(r.exports,"default",()=>o);var o=/*@__PURE__*/e(n("7eE9J"))}),n.register("7eE9J",function(e,t){var r=n("c2Dp1");/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */function i(e,t){var n,i,o,l=null;if(!e||"string"!=typeof e)return l;for(var a=r(e),u="function"==typeof t,s=0,c=a.length;s<c;s++)i=(n=a[s]).property,o=n.value,u?t(i,o,n):o&&(l||(l={}),l[i]=o);return l}e.exports=i,e.exports.default=i}),n.register("c2Dp1",function(e,t){// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,l=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,s=/^\s+|\s+$/g;/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */function c(e){return e?e.replace(s,""):""}/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */e.exports=function(e,t){if("string"!=typeof e)throw TypeError("First argument must be a string");if(!e)return[];t=t||{};/**
   * Positional.
   */var s=1,p=1;/**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */function f(e){var t=e.match(r);t&&(s+=t.length);var n=e.lastIndexOf("\n");p=~n?e.length-n:p+e.length}/**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */function d(){var e={line:s,column:p};return function(t){return t.position=new h(e),y(i),t}}/**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */function h(e){this.start=e,this.end={line:s,column:p},this.source=t.source}/**
   * Non-enumerable source string.
   */h.prototype.content=e;var g=[];/**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */function m(n){var r=Error(t.source+":"+s+":"+p+": "+n);if(r.reason=n,r.filename=t.source,r.line=s,r.column=p,r.source=e,t.silent)g.push(r);else throw r}/**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */function y(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}/**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */function b(e){var t;for(e=e||[];t=x();)!1!==t&&e.push(t);return e}/**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */function x(){var t=d();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;""!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,""===e.charAt(n-1))return m("End of comment missing");var r=e.slice(2,n-2);return p+=2,f(r),e=e.slice(n),p+=2,t({type:"comment",comment:r})}}return y(i),/**
   * Parse declarations.
   *
   * @return {Object[]}
   */function(){var e,t=[];for(b(t);e=/**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */function(){var e=d(),t=y(o);if(t){// :
if(x(),!y(l))return m("property missing ':'");// val
var r=y(a),i=e({type:"declaration",property:c(t[0].replace(n,"")),value:r?c(r[0].replace(n,"")):""});return(// ;
y(u),i)}}();)!1!==e&&(t.push(e),b(t));return t}()}}),n.register("10YAt",function(e,n){t(e.exports,"uriTransformer",()=>i);let r=["http","https","mailto","tel"];function i(e){let t=(e||"").trim(),n=t.charAt(0);if("#"===n||"/"===n)return t;let i=t.indexOf(":");if(-1===i)return t;let o=-1;for(;++o<r.length;){let e=r[o];if(i===e.length&&t.slice(0,e.length).toLowerCase()===e)return t}return -1!==(o=t.indexOf("?"))&&i>o||-1!==(o=t.indexOf("#"))&&i>o?t:"javascript:void(0)"}}),n.register("b6AxM",function(e,n){var r,i;t(e.exports,"posts_content",()=>r,e=>r=e),t(e.exports,"posts_content_code",()=>i,e=>i=e),r="_postsContent-module__posts_content",i="_postsContent-module__posts_content_code"});//# sourceMappingURL=postsContent.component.9600151c.js.map

//# sourceMappingURL=postsContent.component.9600151c.js.map
