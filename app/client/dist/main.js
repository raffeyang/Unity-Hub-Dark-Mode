!(function (e) {
    function t(t) {
        for (
            var i, s, a = t[0], l = t[1], d = t[2], p = 0, u = [];
            p < a.length;
            p++
        )
            (s = a[p]),
                Object.prototype.hasOwnProperty.call(o, s) &&
                    o[s] &&
                    u.push(o[s][0]),
                (o[s] = 0)
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
        for (c && c(t); u.length; ) u.shift()()
        return r.push.apply(r, d || []), n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], i = !0, a = 1; a < n.length; a++) {
                var l = n[a]
                0 !== o[l] && (i = !1)
            }
            i && (r.splice(t--, 1), (e = s((s.s = n[0]))))
        }
        return e
    }
    var i = {},
        o = { 1: 0 },
        r = []
    function s(t) {
        if (i[t]) return i[t].exports
        var n = (i[t] = { i: t, l: !1, exports: {} })
        return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports
    }
    ;(s.m = e),
        (s.c = i),
        (s.d = function (e, t, n) {
            s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
        }),
        (s.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (s.t = function (e, t) {
            if ((1 & t && (e = s(e)), 8 & t)) return e
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e
            var n = Object.create(null)
            if (
                (s.r(n),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    value: e,
                }),
                2 & t && 'string' != typeof e)
            )
                for (var i in e)
                    s.d(
                        n,
                        i,
                        function (t) {
                            return e[t]
                        }.bind(null, i)
                    )
            return n
        }),
        (s.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default
                      }
                    : function () {
                          return e
                      }
            return s.d(t, 'a', t), t
        }),
        (s.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (s.p = '')
    var a = (window.webpackJsonp = window.webpackJsonp || []),
        l = a.push.bind(a)
    ;(a.push = t), (a = a.slice())
    for (var d = 0; d < a.length; d++) t(a[d])
    var c = l
    r.push([379, 0]), n()
})([
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
        class n {
            constructor(e) {
                if ('string' != typeof e) throw new TypeError()
                const t = n.VERSION_REGEX.exec(e)
                if (null === t || 6 !== t.length)
                    throw new TypeError(
                        'UnityVersion: version argument is not a valid unity version'
                    )
                ;(this.version = e),
                    (this.major = parseInt(t[1], 10)),
                    (this.minor = parseInt(t[2], 10)),
                    (this.update = parseInt(t[3], 10)),
                    (this.channel = t[4]),
                    (this.iteration = parseInt(t[5], 10))
            }
            get branch() {
                return `${this.major}.${this.minor}`
            }
            compare(e) {
                if (e instanceof n != !0)
                    try {
                        e = new n(e)
                    } catch (t) {
                        throw TypeError(
                            `${e} cannot be compared with UnityVersion instance`
                        )
                    }
                return this.major === e.major
                    ? this.minor === e.minor
                        ? this.update === e.update
                            ? this.channel === e.channel
                                ? this.iteration === e.iteration
                                    ? 0
                                    : this.iteration > e.iteration
                                    ? 1
                                    : -1
                                : this.channel > e.channel
                                ? 1
                                : -1
                            : this.update > e.update
                            ? 1
                            : -1
                        : this.minor > e.minor
                        ? 1
                        : -1
                    : this.major > e.major
                    ? 1
                    : -1
            }
            static isOfficial(e) {
                return this._isCorrectChannel(e, 'f')
            }
            static isAlpha(e) {
                return this._isCorrectChannel(e, 'a')
            }
            static isBeta(e) {
                return this._isCorrectChannel(e, 'b')
            }
            static _isCorrectChannel(e, t) {
                return (
                    Boolean(n.VERSION_REGEX.exec(e)) &&
                    n.VERSION_REGEX.exec(e)[4] &&
                    n.VERSION_REGEX.exec(e)[4] === t
                )
            }
            static isValid(e) {
                if ('string' != typeof e) return !1
                const t = n.VERSION_REGEX.exec(e)
                return !(null === t || 6 !== t.length)
            }
        }
        ;(n.VERSION_REGEX = /^(\d+)\.(\d+)\.(\d+)([a|b|f|p|c])(\d+)/),
            (e.exports = n)
    },
    ,
    function (e, t, n) {
        'use strict'
        n.d(t, 'a', function () {
            return i
        })
        class i {
            constructor() {
                this._unregistrationHandlers = []
            }
            addUnregistration(e) {
                this._unregistrationHandlers.push(e)
            }
            $onDestroy() {
                this._unregistrationHandlers.forEach((e) => e())
            }
        }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/app.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<div class="main-layout" ng-cloak>\n    <topbar></topbar>\n    <sidenav layout="column"></sidenav>\n    <div layout="column" class="main-content" ui-view></div>\n</div>'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t, n) {
        n(279), (e.exports = 'ngSanitize')
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/project/project-recent/project-recent.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<div class="recent-projects" layout="column">\n    <div class="headline" layout="row" layout-align="start center" flex="noshrink">\n        <h2 class="md-headline">{{"PROJECT.PROJECTS" | translate}}</h2>\n        <div class="actions" layout="row" flex layout-align="end center">\n            <md-button id="btnAdd" class="md-raised" ng-click="$ctrl.addProject()">{{"PROJECT.ADD" | translate}}</md-button>\n\n            <div class="button-dropdown" layout="row" layout-align="end">\n                <md-button id="btnNew" class="action md-primary md-raised" ng-class="{\'create-new\': !$ctrl.isDebugMode && $ctrl.editors.length > 0}"\n                            ng-click="$ctrl.showNewProjectWindow()">{{"PROJECT.NEW" | translate}}</md-button>\n                <md-menu layout="row" ng-if="!$ctrl.isDebugMode && $ctrl.editors.length > 0">\n                    <md-button id="btnDropDown" flex class="md-primary md-raised" ng-click="$ctrl.openEditorList($mdMenu, $event)">\n                        <md-icon>arrow_drop_down</md-icon>\n                    </md-button>\n                    <md-menu-content width="4">\n                        <md-menu-item ng-repeat="item in $ctrl.editors">\n                            <md-button ng-click="$ctrl.showNewProjectWindow(item);">\n                                {{item.version}}\n                            </md-button>\n                        </md-menu-item>\n                    </md-menu-content>\n                </md-menu>\n            </div>\n        </div>\n    </div>\n    <list-placeholder layout="column" ng-if="$ctrl.projects.length === 0" font-set="unity-icon" icon-name="projects">\n        <placeholder-summary translate="PROJECT.PROJECT.PLACEHOLDER_SUMMARY"></placeholder-summary>\n        <placeholder-details translate="PROJECT.PROJECT.PLACEHOLDER_DETAILS"></placeholder-details>\n    </list-placeholder>\n    <project-list ng-if="$ctrl.projects.length > 0"\n                  layout="column"\n                  editors="$ctrl.editors"\n                  projects="$ctrl.projects"\n                  on-project-click="$ctrl.openProject($event)"\n                  is-debug-mode="$ctrl.isDebugMode"></project-list>\n</div>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/project/project-list/project-list.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-card layout="column" layout-align="start" ng-class= "{\'debug-mode\' : $ctrl.isDebugMode}">\n    <div layout="row" class="project-list-head" layout-align="start center">\n        <md-input-container id="inFilter" class="hide-validation-error filter-input" md-no-float ng-show="$ctrl.showFilter">\n            <input ng-model="$ctrl.filterQuery" placeholder="{{\'PROJECT.FILTER_PROJECTS_PLACEHOLDER\' | translate}}" focus-me="$ctrl.showFilter" aria-label="project filter"/>\n        </md-input-container>\n        <div class="hiddable col-titles" ng-hide="$ctrl.showFilter">\n            <div layout="row" layout-align="start center" ng-repeat="column in $ctrl.columnsInfo"\n                 ng-click="$ctrl.updateCurrentSort(column)"\n                 ng-class="{\'project-col-wide\': column.name === \'title\', \'project-col-small\': column.name === \'lastModified\', \'project-col-medium\': column.name !== \'title\' && column.name !== \'lastModified\', \'sort-column\': $ctrl.currentSort === column}">\n                {{column.label|translate}}\n                <md-button id="btnSort" ng-click="$ctrl.currentSort.ascending = !$ctrl.currentSort.ascending" ng-if="$ctrl.currentSort === column"\n                           class="md-icon-button sort-button" md-no-ink>\n                    <md-icon ng-class="{ascending: column.ascending}">arrow_downward</md-icon>\n                </md-button>\n            </div>\n        </div>\n        <div>\n            <md-button id="btnFilter" class="md-icon-button" ng-hide="$ctrl.showFilter" ng-click="$ctrl.showInputFilter()">\n                <md-icon>search</md-icon>\n            </md-button>\n            <md-button id="btnCloseFilter" class="md-icon-button" ng-show="$ctrl.showFilter" ng-click="$ctrl.hideInputFilter()">\n                <md-icon>close</md-icon>\n            </md-button>\n        </div>\n    </div>\n\n    <div class="project-list-container" layout="column">\n        <div class="project-list-row" layout="row" layout-align="start center"\n             ng-repeat="project in $ctrl.projects |\n                         filter: {title: $ctrl.filterQuery} |\n                         orderBy: $ctrl.currentSort.name: $ctrl.currentSort.ascending: $ctrl.currentSort.comparator"\n             scroll-on-flag="project.isAddedProject" scroll-on-flag-complete="$ctrl.newProjectHighlighted(project)">\n            <project-list-item  ng-class="project.onDisk ? \'local\' : \'remote\'"\n                                ng-click="$ctrl.openProjectCheck(project)"\n                                on-editor-update="$ctrl.updateEditor($event)"\n                                on-platform-update="$ctrl.updateBuildPlatform($event)"\n                                project="project"\n                                editors="$ctrl.editors"\n                                is-debug-mode="$ctrl.isDebugMode"></project-list-item>\n        </div>\n    </div>\n</md-card>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/project/project-list-item/project-list-item.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<div class="cell project-col-wide">\n    <div id="projectTitle">\n        <span>\n            <span class="title">{{$ctrl.title}}</span> <br/>\n            <md-tooltip md-delay="1000" class="project-path-tooltip" id="projectPath" ng-if="$ctrl.project.onDisk === true">{{$ctrl.path}}</md-tooltip>\n            <span class="md-caption" ng-if="$ctrl.path">{{$ctrl.path}} <br/>\n            </span>\n            <md-icon class="collab-icon" md-font-set="unity-icon" ng-if="$ctrl.project.collabEnabled">collaborate <md-tooltip>{{\'PROJECT.PROJECT.COLLAB_PROJECT\' | translate}}</md-tooltip></md-icon>\n            <span class="md-caption">{{ \'PROJECT.PROJECT.VERSION\' | translate}}: {{$ctrl.project.version || \'COMMON.UNAVAILABLE\' | translate}}</span>\n        </span>\n\n        <span ng-if="(!$ctrl.editor || ($ctrl.editors.length === 1 && $ctrl.editor.version != $ctrl.project.version)) && $ctrl.project.onDisk">\n            <md-tooltip>{{\'PROJECT.PROJECT.VERSION_UNAVAILABLE\' | translate}}</md-tooltip>\n            <md-icon class="warn-unavailable">warning</md-icon>\n        </span>\n\n    </div>\n</div>\n<div class="cell project-col-medium" ng-click="$event.stopPropagation();">\n    <md-select ng-if="!$ctrl.isDebugMode && $ctrl.editors && $ctrl.editors.length > 0 && !$ctrl.project.isCustomEditor"\n               id="projectVersion"\n               ng-model="$ctrl.editor"\n               class="md-no-underline"\n               placeholder="{{\'PROJECT.PROJECT.SELECT_VERSION\' | translate}}"\n               ng-change="$ctrl.updateEditor($ctrl.editor)">\n        <md-option ng-value="editor" ng-repeat="editor in $ctrl.editors">\n            {{editor.version}}\n        </md-option>\n    </md-select>\n    <div ng-if="$ctrl.isDebugMode && $ctrl.editors && $ctrl.editors.length > 0">{{ $ctrl.editors[0].version }}</div>\n    <div ng-if="!$ctrl.isDebugMode && $ctrl.project.isCustomEditor" translate="PROJECT.PROJECT.CUSTOM_EDITOR"></div>\n    <div ng-if="!$ctrl.editors || $ctrl.editors.length === 0" translate="PROJECT.PROJECT.NO_EDITOR"></div>\n\n</div>\n<div class="cell project-col-medium" ng-click="$event.stopPropagation();">\n    <md-select  ng-if="$ctrl.platforms && $ctrl.platforms.length > 1"\n                id="projectPlatform"\n                aria-label="{{\'PROJECT.PROJECT.PLATFORM\' | translate}}"\n                ng-model="$ctrl.platform" class="md-no-underline"\n                ng-model-options="{trackBy: \'$value.name\'}"\n                placeholder="{{\'PROJECT.PROJECT.NONE_ASSIGNED\' | translate}}"\n                ng-change="$ctrl.updatePlatform($ctrl.platform)">\n        <md-option ng-value="platform" ng-repeat="platform in $ctrl.platforms">{{platform.name}}</md-option>\n    </md-select>\n    <div ng-if="$ctrl.platforms && $ctrl.platforms.length === 1">{{ $ctrl.platforms[0].name }}</div>\n    <div ng-if="!$ctrl.platforms || $ctrl.platforms.length === 0" translate="PROJECT.PROJECT.CURRENT_PLATFORM"></div>\n</div>\n<div id="projectDate" class="cell project-col-small">{{$ctrl.date}}</div>\n<div id="projectAction" class="action" layout="column" layout-align="center end">\n    <dropdown-menu ng-if="$ctrl.project.menuInfo.options"\n                   model="$ctrl.project"\n                   options="$ctrl.project.menuInfo.options"\n                   icon="$ctrl.project.menuInfo.icon"\n                   icon-class="$ctrl.project.menuInfo.iconClass"></dropdown-menu>\n    <span class="icon-action"\n          ng-if="!$ctrl.project.menuInfo.options"\n          ng-click="$ctrl.iconClicked()">\n        <md-icon>{{ $ctrl.project.menuInfo.icon || \'cloud_download\' }}</md-icon>\n    </span>\n</div>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/common/info-toast/info-toast.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-toast id="toast">\n    <md-icon ng-class="$ctrl.iconClass" ng-if="$ctrl.icon">{{$ctrl.iconValue}}</md-icon>\n    <span id="toastMessage" class="md-toast-text" flex>{{$ctrl.message}}</span>\n    <md-button id="toastDismiss" ng-if="$ctrl.isDefaultAction()"\n               class="md-highlight"\n               ng-click="$ctrl.closeToast()"\n               translate="COMMON.DISMISS"></md-button>\n    <md-button ng-if="!$ctrl.isDefaultAction()"\n               ng-repeat="action in $ctrl.actions"\n               class="md-highlight"\n               ng-click="action.callback(); $ctrl.closeToast()"\n               translate="{{action.message}}"></md-button>\n</md-toast>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t, n) {
        ;(function (e) {
            function n(e, t) {
                for (var n = 0, i = e.length - 1; i >= 0; i--) {
                    var o = e[i]
                    '.' === o
                        ? e.splice(i, 1)
                        : '..' === o
                        ? (e.splice(i, 1), n++)
                        : n && (e.splice(i, 1), n--)
                }
                if (t) for (; n--; n) e.unshift('..')
                return e
            }
            function i(e, t) {
                if (e.filter) return e.filter(t)
                for (var n = [], i = 0; i < e.length; i++)
                    t(e[i], i, e) && n.push(e[i])
                return n
            }
            ;(t.resolve = function () {
                for (
                    var t = '', o = !1, r = arguments.length - 1;
                    r >= -1 && !o;
                    r--
                ) {
                    var s = r >= 0 ? arguments[r] : e.cwd()
                    if ('string' != typeof s)
                        throw new TypeError(
                            'Arguments to path.resolve must be strings'
                        )
                    s && ((t = s + '/' + t), (o = '/' === s.charAt(0)))
                }
                return (
                    (o ? '/' : '') +
                        (t = n(
                            i(t.split('/'), function (e) {
                                return !!e
                            }),
                            !o
                        ).join('/')) || '.'
                )
            }),
                (t.normalize = function (e) {
                    var r = t.isAbsolute(e),
                        s = '/' === o(e, -1)
                    return (
                        (e = n(
                            i(e.split('/'), function (e) {
                                return !!e
                            }),
                            !r
                        ).join('/')) ||
                            r ||
                            (e = '.'),
                        e && s && (e += '/'),
                        (r ? '/' : '') + e
                    )
                }),
                (t.isAbsolute = function (e) {
                    return '/' === e.charAt(0)
                }),
                (t.join = function () {
                    var e = Array.prototype.slice.call(arguments, 0)
                    return t.normalize(
                        i(e, function (e, t) {
                            if ('string' != typeof e)
                                throw new TypeError(
                                    'Arguments to path.join must be strings'
                                )
                            return e
                        }).join('/')
                    )
                }),
                (t.relative = function (e, n) {
                    function i(e) {
                        for (var t = 0; t < e.length && '' === e[t]; t++);
                        for (var n = e.length - 1; n >= 0 && '' === e[n]; n--);
                        return t > n ? [] : e.slice(t, n - t + 1)
                    }
                    ;(e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1))
                    for (
                        var o = i(e.split('/')),
                            r = i(n.split('/')),
                            s = Math.min(o.length, r.length),
                            a = s,
                            l = 0;
                        l < s;
                        l++
                    )
                        if (o[l] !== r[l]) {
                            a = l
                            break
                        }
                    var d = []
                    for (l = a; l < o.length; l++) d.push('..')
                    return (d = d.concat(r.slice(a))).join('/')
                }),
                (t.sep = '/'),
                (t.delimiter = ':'),
                (t.dirname = function (e) {
                    if (('string' != typeof e && (e += ''), 0 === e.length))
                        return '.'
                    for (
                        var t = e.charCodeAt(0),
                            n = 47 === t,
                            i = -1,
                            o = !0,
                            r = e.length - 1;
                        r >= 1;
                        --r
                    )
                        if (47 === (t = e.charCodeAt(r))) {
                            if (!o) {
                                i = r
                                break
                            }
                        } else o = !1
                    return -1 === i
                        ? n
                            ? '/'
                            : '.'
                        : n && 1 === i
                        ? '/'
                        : e.slice(0, i)
                }),
                (t.basename = function (e, t) {
                    var n = (function (e) {
                        'string' != typeof e && (e += '')
                        var t,
                            n = 0,
                            i = -1,
                            o = !0
                        for (t = e.length - 1; t >= 0; --t)
                            if (47 === e.charCodeAt(t)) {
                                if (!o) {
                                    n = t + 1
                                    break
                                }
                            } else -1 === i && ((o = !1), (i = t + 1))
                        return -1 === i ? '' : e.slice(n, i)
                    })(e)
                    return (
                        t &&
                            n.substr(-1 * t.length) === t &&
                            (n = n.substr(0, n.length - t.length)),
                        n
                    )
                }),
                (t.extname = function (e) {
                    'string' != typeof e && (e += '')
                    for (
                        var t = -1,
                            n = 0,
                            i = -1,
                            o = !0,
                            r = 0,
                            s = e.length - 1;
                        s >= 0;
                        --s
                    ) {
                        var a = e.charCodeAt(s)
                        if (47 !== a)
                            -1 === i && ((o = !1), (i = s + 1)),
                                46 === a
                                    ? -1 === t
                                        ? (t = s)
                                        : 1 !== r && (r = 1)
                                    : -1 !== t && (r = -1)
                        else if (!o) {
                            n = s + 1
                            break
                        }
                    }
                    return -1 === t ||
                        -1 === i ||
                        0 === r ||
                        (1 === r && t === i - 1 && t === n + 1)
                        ? ''
                        : e.slice(t, i)
                })
            var o =
                'b' === 'ab'.substr(-1)
                    ? function (e, t, n) {
                          return e.substr(t, n)
                      }
                    : function (e, t, n) {
                          return t < 0 && (t = e.length + t), e.substr(t, n)
                      }
        }.call(this, n(287)))
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/project/advanced-settings/advanced-settings.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<form ng-cloak class="advanced-settings-dialog" layout="column">\n    <md-toolbar layout="row">\n        <div class="md-toolbar-tools">\n            <div class="md-title" translate>PROJECT.ADVANCED_SETTINGS.TITLE</div>\n            <span flex></span>\n            <md-button id="btnClose" class="md-icon-button" ng-click="$ctrl.cancel()">\n                <md-icon>close</md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-dialog-content flex class="settings-container md-dialog-content" layout="row">\n        <cli-args on-args-update="$ctrl.updateArgs($event)" cli-args="$ctrl.args"></cli-args>\n    </md-dialog-content>\n    <md-divider flex-order="1"></md-divider>\n    <md-dialog-actions class="md-dialog-actions" layout="row">\n        <md-button id="btnCancel" ng-click="$ctrl.cancel()">\n            {{ "PROJECT.ADVANCED_SETTINGS.CANCEL" | translate}}\n        </md-button>\n        <span flex></span>\n        <md-button id="btnNext" ng-click="$ctrl.setArgs($ctrl.project)" translate="PROJECT.ADVANCED_SETTINGS.DONE"></md-button>\n    </md-dialog-actions>\n</form>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/project/advanced-settings/cli-args/cli-args.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<div class="cli-args-container">\n<br/>\n<div class="top-text" translate>PROJECT.ADVANCED_SETTINGS.CLI_ARGS_TOP_TXT</div>\n<br/>\n<textarea ng-change="$ctrl.updateArgs($ctrl.cliArgs)" ng-model="$ctrl.cliArgs"  placeholder=\'e.g. "-batchmode -logfile"\' rows="8" cols="81"></textarea>\n<div class="bottom-text" translate>PROJECT.ADVANCED_SETTINGS.CLI_ARGS_BOTTOM_TXT</div>\n</div>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/learn/learn.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<div class="main-container" layout="column">\n    <div class="headline layout-align-start-center layout-row flex-noshrink"><h2 class="md-headline capitalize" translate>LEARN.LEARN</h2></div>\n    <div layout="column">\n      <div class="learn-nav-bar">\n          <md-nav-bar md-selected-nav-item="$ctrl.currentNavItem">\n              <md-nav-item md-nav-click="$ctrl.setSampleProjects()" name="projects">\n                  {{\'LEARN.PROJECTS\' | translate }}\n              </md-nav-item>\n              <md-nav-item md-nav-click="$ctrl.setTutorials()" name="tutorials">\n                  {{\'LEARN.TUTORIALS\' | translate }}\n              </md-nav-item>\n          </md-nav-bar>\n          <div class="learn-url">\n              <span>{{\'LEARN.MORE_RESOURCES_TEXT\' | translate }}</span>\n              <a id="moreResourcesUrl" href="https://learn.unity.com/" target="_blank">\n                  {{\'LEARN.MORE_RESOURCES_URL\' | translate }}\n              </a>\n          </div>\n      </div>\n        <md-content class="learn-page">\n            <learn-top-items elems="$ctrl.topItems" action="$ctrl.triggerAction($event)"></learn-top-items>\n            <learn-items elems="$ctrl.bottomItems" action="$ctrl.triggerAction($event)"></learn-items>\n        </md-content>\n    </div>\n</div>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/learn/learn-items/learn-items.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-content>\n    <md-list class="md-dense">\n        <div ng-repeat="elem in $ctrl.elems">\n            <md-list-item id="learn-item"\n                          class="md-2-line learn-item"\n                          ng-click="$ctrl.learnService.openLearnDialog(elem, $ctrl.action)"\n            >\n                <img ng-src="{{ elem.imageUrl }}"\n                     class="learn-item-img"\n                     ng-class="{ shift: elem.downloadableContent.downloadStatus === \'downloading\' }"/>\n                <div class="md-list-item-text">\n                    <div class="list-item-info">\n                        <h3 id="learn-item-title" class="learn-item-title"> {{ elem.title }} </h3>\n                        <p id="infoLabel" class="learn-item-desc">\n                            <span>{{ elem.categoryTranslationKey | translate }} - </span>\n                            <span>{{ elem.skillLevelTranslationKey | translate }} - </span>\n                            <span>{{ elem.durationDisplayInfo }}</span>\n                        </p>\n                    </div>\n                    <p id="downloadingLabel"\n                       ng-if="elem.downloadable && elem.downloadableContent.downloadStatus === \'downloading\'">\n                        {{ \'LEARN.DOWNLOADING\' | translate:{ progress: elem.downloadableContent.progress } | uppercase }}\n                    </p>\n                    <div ng-if="elem.downloadable && elem.downloadableContent.downloadStatus === \'downloaded\'"\n                         class="learn-item-downloaded">\n                        <i class="learn-item-downloaded-icon material-icons md-12 md-inactive">done</i>\n                        <p id="learn-item-downloaded">\n                            {{ \'LEARN.DOWNLOADED\' | translate | uppercase }}\n                        </p>\n                    </div>\n                </div>\n            </md-list-item>\n            <md-progress-linear md-mode="determinate"\n                                ng-if="elem.downloadableContent.downloadStatus === \'downloading\'"\n                                ng-value="elem.downloadableContent.progress">\n            </md-progress-linear>\n            <md-divider></md-divider>\n        </div>\n    </md-list>\n</md-content>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/learn/learn-top-items/learn-top-items.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-content class="md-padding learn-top-container" layout-xs="column" layout="row">\n    <div ng-repeat="elem in $ctrl.elems" class="learn-top-items">\n        \x3c!-- The ng-click handler is necessary to get the hover effect on the md-card --\x3e\n        <md-list-item id="learn-item"\n                      class="learn-top-item-hover learn-top-item"\n                      ng-click="$ctrl.learnService.openLearnDialog(elem, $ctrl.action)"\n        >\n            <md-card>\n                <img ng-src="{{ elem.imageUrl }}" class="learn-top-item-img"/>\n                <div class="learn-top-item-text"\n                     ng-class="{ shift: elem.downloadableContent.downloadStatus === \'downloading\' }">\n                    <h3 id="learn-item-title" class="learn-top-item-title"> {{ elem.title }} </h3>\n                    <p id="infoLabel"\n                       class="learn-top-item-desc">\n                        <span>{{ elem.categoryTranslationKey | translate }} - </span>\n                        <span>{{ elem.skillLevelTranslationKey | translate }} - </span>\n                        <span>{{ elem.durationDisplayInfo }}</span>\n                    </p>\n                    <p id="downloadingLabel"\n                       class="learn-top-item-desc"\n                       ng-if="elem.downloadable && elem.downloadableContent.downloadStatus === \'downloading\'">\n                        {{ \'LEARN.DOWNLOADING\' | translate:{ progress: elem.downloadableContent.progress } | uppercase }}\n                    </p>\n                    <div class="learn-top-item-downloaded"\n                         ng-if="elem.downloadable && elem.downloadableContent.downloadStatus === \'downloaded\'">\n                        <i class="learn-top-item-downloaded-icon material-icons md-12 md-inactive">done</i>\n                        <p id="learn-item-downloaded"\n                           class="learn-top-item-desc">\n                            {{ \'LEARN.DOWNLOADED\' | translate | uppercase }}\n                        </p>\n                    </div>\n                </div>\n                <md-progress-linear md-mode="determinate"\n                                    ng-if="elem.downloadableContent.downloadStatus === \'downloading\'"\n                                    ng-value="elem.downloadableContent.progress">\n                </md-progress-linear>\n            </md-card>\n        </md-list-item>\n    </div>\n</md-content>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/learn/learn-dialog/learn-dialog.tmpl.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<form ng-cloak>\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2>{{ $ctrl.elem.title }}</h2>\n            <span flex></span>\n            <md-button id="btnClose" class="md-icon-button" ng-click="$ctrl.close()">\n                <md-icon>close</md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-dialog-content class="learn-dialog-scrollable-area">\n        <div class="md-dialog-content learn-dialog-content">\n            <img class="learn-dialog-content-img" alt="" ng-src="{{ $ctrl.elem.imageUrl }}">\n\n            <div class="learn-dialog-content-info">\n                <p id="infoLabel">\n                    <span>{{ $ctrl.elem.categoryTranslationKey | translate }} - </span>\n                    <span>{{ $ctrl.elem.skillLevelTranslationKey | translate }} - </span>\n                    <span>{{ $ctrl.elem.durationDisplayInfo }}</span>\n                </p>\n                <p id="sizeLabel"\n                   ng-if="$ctrl.downloadable && $ctrl.downloadableContent.downloadStatus === \'not_downloaded\'">\n                    {{ \'LEARN.SIZE\' | translate:{ size: $ctrl.size } | uppercase }}\n                </p>\n                <p id="downloadingLabel"\n                   ng-if="$ctrl.downloadable && $ctrl.downloadableContent.downloadStatus === \'downloading\'">\n                    {{ \'LEARN.DOWNLOADING\' | translate:{ progress: $ctrl.downloadableContent.progress } | uppercase }}\n                </p>\n                <div ng-if="$ctrl.downloadable && $ctrl.downloadableContent.downloadStatus === \'downloaded\'"\n                     class="learn-dialog-downloaded">\n                    <i class="learn-dialog-downloaded-icon material-icons md-12 md-inactive">done</i>\n                    <p>\n                        {{ \'LEARN.DOWNLOADED\' | translate | uppercase }}\n                    </p>\n                </div>\n            </div>\n\n            <p>{{ $ctrl.elem.summary }}</p>\n        </div>\n    </md-dialog-content>\n\n    <md-dialog-actions class="learn-dialog-actions" layout="row">\n        <span ng-if="$ctrl.downloadable" flex></span>\n        <md-button id="actionButton"\n                   class="md-primary md-cancel-button md-button ng-scope md-default-theme md-ink-ripple"\n                   ng-if="$ctrl.downloadable"\n                   ng-click="$ctrl.click()"\n                   ng-disabled="!$ctrl.isEditorInstalled && $ctrl.isContentDownloaded">\n            {{ $ctrl.actionTranslationMapping[$ctrl.downloadableContent.downloadStatus] | translate }}\n        </md-button>\n        <span flex></span>\n        <md-button id="viewTutorialButton"\n                   class="md-primary md-cancel-button md-button ng-scope md-default-theme md-ink-ripple"\n                   href="{{ $ctrl.elem.tutorialUrl }}"\n                   target="_blank">\n            {{ $ctrl.viewTutorialTranslationKey | translate | uppercase }}\n        </md-button>\n        <span flex></span>\n    </md-dialog-actions>\n\n    <md-progress-linear class="learn-dialog-progress-bar"\n                        md-mode="determinate"\n                        ng-if="$ctrl.downloadableContent.downloadStatus === \'downloading\'"\n                        ng-value="$ctrl.downloadableContent.progress">\n    </md-progress-linear>\n</form>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t, n) {
        'use strict'
        ;(function (e) {
            var i = n(213),
                o = n.n(i),
                r = n(11)
            class s extends r.a {
                constructor(e, t, n, i, o, r, s, a, l, d) {
                    super(),
                        (this.versionFilter = e('versionFilter')),
                        (this.$log = t),
                        (this.loaded = !1),
                        (this.sce = i),
                        (this.$rootScope = n),
                        (this.errorService = o),
                        (this.$window = r),
                        (this.unityAuthClient = s),
                        (this.localLicenseClient = a),
                        (this.licenseKinds = this.localLicenseClient.licenseKinds),
                        (this.localWindowClient = l),
                        (this.communityClient = d)
                }
                $onInit() {
                    var t = this.communityUrl,
                        n = !1
                    this.communityClient
                        .getLastViewTime()
                        .then(
                            (e) => (
                                (t = `${t}?lastviewed=${e}`), this.getLicense()
                            )
                        )
                        .then(
                            (e) => (
                                e === this.licenseKinds.PLUS
                                    ? ((n = !0), (t = `${t}&license=plus`))
                                    : e === this.licenseKinds.PRO &&
                                      ((n = !0), (t = `${t}&license=pro`)),
                                this.getStopDate()
                            )
                        )
                        .then(
                            (e) => (
                                n && null != e && (t = `${t}&expireTime=${e}`),
                                this.unityAuthClient.getUserInfo()
                            )
                        )
                        .then((n) => {
                            var i = JSON.parse(n).userId
                            if ('' !== i) {
                                const n = e.from(i),
                                    o = encodeURIComponent(n.toString('base64'))
                                t = `${t}&userID=${o}`
                            }
                            ;(this.Url = this.sce.trustAsResourceUrl(t)),
                                this.$rootScope.$apply()
                        })
                        .catch(() => {
                            ;(this.Url = this.sce.trustAsResourceUrl(t)),
                                this.$rootScope.$apply()
                        }),
                        (this.$window.onmessage = (e) => {
                            var t = e.data.toString()
                            0 === t.indexOf('http') &&
                                (this.getHostName(t).endsWith('.unity.com') ||
                                    this.getHostName(t).endsWith(
                                        '.unity3d.com'
                                    ) ||
                                    this.getHostName(t).endsWith('unity.cn')) &&
                                this.localWindowClient.openExternal(t)
                        })
                }
                getHostName(e) {
                    var t = document.createElement('a')
                    return (t.href = e), t.hostname
                }
                async getLicense() {
                    const e = await this.localLicenseClient.getLicenseInfo()
                    return (
                        (this.licenseInfo = JSON.parse(e)),
                        this.licenseInfo.label
                    )
                }
                async getStopDate() {
                    const e = await this.localLicenseClient.getLicenseInfo()
                    return (
                        (this.licenseInfo = JSON.parse(e)),
                        void 0 !== this.licenseInfo.stopDate
                            ? this.licenseInfo.stopDate
                            : null
                    )
                }
                iframeLoadedCallBack() {
                    ;(this.loaded = !0),
                        this.communityClient.setLastViewTime(),
                        this.$rootScope.$apply()
                }
            }
            ;(s.$inject = [
                '$filter',
                '$log',
                '$rootScope',
                '$sce',
                'errorService',
                '$window',
                'unityAuthClient',
                'localLicenseClient',
                'localWindowClient',
                'communityClient',
            ]),
                (t.a = {
                    templateUrl: o(),
                    controller: s,
                    bindings: { communityUrl: '<' },
                })
        }.call(this, n(304).Buffer))
    },
    function (e, t, n) {
        var i =
                '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/community/community.html',
            o =
                '<h1>Unity</h1>'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(i, o)
            },
        ]),
            (e.exports = i)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/install.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<div class="main-container" layout="column">\n    <div class="headline" layout="row" layout-align="start center" flex="noshrink">\n        <h2 class="md-headline capitalize" translate>INSTALL.INSTALLS</h2>\n        <div class="actions" layout="row" flex layout-align="end center">\n            <md-button id="btnLocate" class="md-raised" ng-click="$ctrl.locateEditor($event)" translate="INSTALL.LOCATE"></md-button>\n            <md-button id="btnAdd" ng-disabled="$ctrl.installService.freezeUACActions" class="md-primary md-raised" ng-click="$ctrl.addEditor()" translate="INSTALL.ADD"></md-button>\n        </div>\n    </div>\n    <div layout="column">\n        <list-placeholder layout="column" ng-show="$ctrl.editors.length === 0" font-set="material-icons" icon-name="storage">\n            <placeholder-summary translate="INSTALL.PLACEHOLDER_SUMMARY"></placeholder-summary>\n            <placeholder-details translate="INSTALL.PLACEHOLDER_DETAILS"></placeholder-details> \n        </list-placeholder>\n        <md-content ng-if="$ctrl.editors.length > 0" class="install-list" layout="row" layout-align="start start">\n          <install-entry ng-repeat="editor in $ctrl.editors"\n                         freeze-actions="$ctrl.installService.freezeUACActions"\n                         entry="editor"\n                         progress="editor.progress"\n                         status="editor.status"\n                         menu-options="editor.menuOptions"\n                         modules="editor.modules">\n          </install-entry>\n        </md-content>\n    </div>\n</div>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/install-badges/release-type-badge.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<div ng-if="$ctrl.isReleaseTypeSupported()" class="install-badge" translate>{{$ctrl.type}}</div>'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/install-badges/legacy-badge.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<more-info-button tooltip-message="INSTALL.LIMITED_HUB_SUPPORT"\n                  dialog-info="$ctrl.moreInfoDialogData"\n></more-info-button>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/install-badges/lts-badge.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<div class="install-badge">\n  <span translate>INSTALL.LONG_TERM_SUPPORT_ACRONYM</span>\n  <more-info-button tooltip-message="INSTALL.LONG_TERM_SUPPORT"></more-info-button>\n</div>'
                )
            },
        ]),
            (e.exports = n)
    },
    ,
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/install-entry/install-entry.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-card class="install-entry" md-whiteframe="1" ng-class="{loading: $ctrl.loading()}">\n  <div class="install-progress" ng-if="$ctrl.loading()">\n    <md-progress-linear md-mode="{{$ctrl.progressType}}"\n                        ng-value="$ctrl.progress">\n    </md-progress-linear>\n    <div class="install-status" ng-if="$ctrl.progressFeedback">\n      <span translate="{{$ctrl.progressFeedback}}"></span>\n    </div>\n  </div>\n\n  <md-card-content>\n    <div layout="row">\n      <div flex>\n        <md-icon class="unity-cube" md-font-set="unity-icon">unitycube</md-icon>\n      </div>\n\n      <div flex="10" layout="row" layout-align="end start">\n        <dropdown-menu disabled="$ctrl.freezeActions" model="$ctrl.entry" options="$ctrl.menuOptions"></dropdown-menu>\n      </div>\n    </div>\n\n    <p class="editor-version">\n      <span>\n      {{$ctrl.entry.version}}\n      <md-tooltip ng-if="!$ctrl.loading()" md-direction="bottom">{{$ctrl.entry.location[0]}}</md-tooltip>\n      </span>\n      <span class="badges">\n        <legacy-badge ng-if="$ctrl.entry.legacy"></legacy-badge>\n        <lts-badge ng-if="$ctrl.entry.lts"></lts-badge>\n        <release-type-badge type=\'{{$ctrl.entry.releaseType}}\'>\n        </release-type-badge>\n      </span>\n    </p>\n  </md-card-content>\n\n  <md-card-footer ng-if="$ctrl.platforms.length > 0">\n    \x3c!--TODO: change the expression of md-cols when angularjs-material is upgraded--\x3e\n    <md-grid-list md-cols="{{ $ctrl.cols }}" md-rows="$ctrl.rows" md-row-height="24px" md-gutter="8px">\n      <md-grid-tile ng-repeat="platform in $ctrl.platforms track by $index">\n        <md-tooltip md-direction="bottom">{{platform.label}}</md-tooltip>\n        <hub-icon ng-class="[\'md-icon-\' + platform.icon.name]" data="platform.icon"></hub-icon>\n      </md-grid-tile>\n      <md-grid-tile ng-if="$ctrl.hoveredPlatforms">\n          <md-icon>more_horiz</md-icon>\n          <md-tooltip>{{ $ctrl.getHoveredPlatforms() }}</md-tooltip>\n      </md-grid-tile>\n    </md-grid-list>\n  </md-card-footer>\n</md-card>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        e.exports = './lumin.svg'
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/add-module/add-module.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<form ng-cloak class="add-module-dialog" layout="column">\n    <md-toolbar layout="row">\n        <div class="md-toolbar-tools">\n            <div class="md-title" translate>INSTALL.ADD_MODULES</div>\n            <span flex></span>\n            <md-button id="btnClose" class="md-icon-button" ng-click="$ctrl.cancel()">\n                <md-icon>close</md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-dialog-content flex class="module-table-container md-dialog-content" layout="row">\n        <add-module-layout class="module-table" change="$ctrl.onModuleChange($event)" editor="$ctrl.editor"></add-module-layout>\n    </md-dialog-content>\n    <md-divider flex-order="1"></md-divider>\n    <md-dialog-actions class="md-dialog-actions" layout="row">\n        <md-button id="btnCancel" ng-click="$ctrl.cancel()">\n            {{ "INSTALL.CANCEL" | translate}}\n        </md-button>\n        <span flex></span>\n        <md-button id="btnNext" ng-click="$ctrl.downloadModules()" ng-disabled="$ctrl.modulesToDownload.length === 0"\n                   translate="{{$ctrl.eulaModules.length > 0 ? \'INSTALL.NEXT\' : \'INSTALL.DONE\'}}">\n        </md-button>\n    </md-dialog-actions>\n</form>'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/add-module/add-module-layout/add-module-layout.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<div>\n    <span translate="INSTALL.ADD_MODULES_MESSAGE" translate-values="{ version: $ctrl.editor.version}"></span>\n    <span class="md-caption" translate="INSTALL.TOTAL_SPACE_MESSAGE" translate-values="{ spaceAvailable: $ctrl.spaceAvailable }"></span>\n    <span class="md-caption" translate="INSTALL.REQUIRED_SPACE_MESSAGE" translate-values="{ spaceRequired: $ctrl.totalSpaceRequired }"></span>\n</div>\n<md-list>\n    <md-list-item layout="row" ng-repeat="(category, modules) in $ctrl.currentModules" ng-if="$ctrl.shouldShowCategory(category, modules)">\n        <module-category flex class="module-category"\n                         first="$first" category="category" modules="modules"\n                         module-clicked="$ctrl.clickModule($event)" nested="false">\n        </module-category>\n    </md-list-item>\n</md-list>\n<div class="no-modules-message" ng-show="$ctrl.noModules">\n    <p translate="INSTALL.NO_MODULES_MESSAGE" translate-values="{ version: $ctrl.editor.version}"></p>\n</div>'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/add-module/add-module-layout/no-devtools-dialog.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-dialog class="dialog-no-dev-tools" aria-label="{{"INSTALL.ARIA_NO_DEV_TOOLS_DIALOG" | translate}}">\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h1 class="md-title">{{"INSTALL.NO_DEV_TOOLS_TITLE" | translate}}</h1>\n            <span flex></span>\n            <md-button class="md-icon-button" ng-click="$ctrl.closeDialog()">\n                <md-icon>close</md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content>\n        <div>{{$ctrl.message}}</div>\n    </md-dialog-content>\n    <md-dialog-actions>\n        <div>\n            <md-checkbox ng-model="$ctrl.noMore" ng-change="$ctrl.onClickCheckbox()">{{"COMMON.NO_MORE_MESSAGE" | translate}}</md-checkbox>\n        </div>\n        <md-button ng-click="$ctrl.closeDialog()" class="md-primary">OK</md-button>\n    </md-dialog-actions>\n</md-dialog>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/add-module/module-category/module-category.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-input-container class="module-category-container">\n    <div ng-if="!$ctrl.nested" layout="row" class="md-caption">\n        <div flex="60">{{$ctrl.category}}</div>\n        <div flex="20" ng-show="$ctrl.first" translate>INSTALL.DOWNLOAD_SIZE</div>\n        <div flex="20" ng-show="$ctrl.first" translate>INSTALL.INSTALL_SIZE</div>\n    </div>\n\n    <ul class="selectable-module-category">\n        <li ng-if="!module.parentObject || $ctrl.nested" ng-repeat="module in $ctrl.modules" ng-show="module.visible">\n            <div layout="column">\n                <div flex="auto" layout="row">\n                    <div flex-offset="{{$ctrl.nested ? 10 : 0}}" flex="60">\n                        <md-button class="expand-button">\n                            <md-icon ng-if="module.children" ng-click="$ctrl.onToggle($event, module);">\n                                {{module.collapse ? \'keyboard_arrow_down\' : \'keyboard_arrow_right\'}}\n                            </md-icon>\n                        </md-button>\n\n                        <md-checkbox class="display-inline" id="squaredCheck-{{module.name}}"\n                                     ng-model="module.selected"\n                                     ng-disabled="module.installed || module.disabled"\n                                     ng-change="$ctrl.onModuleClick(module)">\n                        </md-checkbox>\n                        <div class="display-inline">{{module.name}}</div>\n                    </div>\n                    <div ng-if="module.installed" flex="20" translate>INSTALL.INSTALLED</div>\n                    <div ng-if="!module.installed" flex="20">\n                        {{(module.displayDownloadSize ? module.displayDownloadSize : module.downloadSize) | fileSizeFilter}}\n                    </div>\n                    <div flex="20">{{(module.displayInstalledSize ? module.displayInstalledSize : module.installedSize) |\n                        fileSizeFilter}}\n                    </div>\n                </div>\n                <module-category ng-if="module.children && module.children.length > 0"\n                                 flex="auto" ng-show="module.collapse" class="show-hide module-category"\n                                 modules="module.children"\n                                 module-clicked="$ctrl.onModuleClick($event)"\n                                 nested="true">\n                </module-category>\n            </div>\n        </li>\n    </ul>\n</md-input-container>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/add-editor/add-editor.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<form ng-cloak class="add-editor-dialog" layout="column">\n    <md-toolbar layout="row">\n        <div class="md-toolbar-tools">\n            <div class="md-title" translate>INSTALL.ADD_EDITOR</div>\n            <span flex></span>\n            <md-button id="btnClose" class="md-icon-button" ng-click="$ctrl.cancel()">\n                <md-icon>close</md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content flex class="module-table-container md-dialog-content">\n        <md-stepper id="install-stepper" md-mobile-step-text="false" md-vertical="false"\n                    md-linear="true"\n                    md-alternative="false">\n            <md-step layout="column" md-label="{{\'INSTALL.SELECT_UNITY_LABEL\' | translate}}">\n                <md-step-body class="install-step-body">\n                    <div translate>INSTALL.ADD_EDITOR_MESSAGE</div>\n                    <br/>\n                    <div class="category-header">{{\'INSTALL.LATEST_OFFICIAL\' | translate}}</div>\n                    <br/>\n                    <md-radio-group ng-model="$ctrl.editor" class="md-primary">\n                        <md-radio-button\n                                ng-repeat="editor in $ctrl.officialEditors"\n                                ng-value="editor"\n                                ng-disabled="editor.isDisabled"\n                                ng-class="{\'md-align-top-left\': $index==1}">\n                            Unity {{ editor.version }} <span ng-if="editor.lts === true">({{\'INSTALL.LONG_TERM_SUPPORT_ACRONYM\' | translate}})</span>\n                        </md-radio-button>\n                    </md-radio-group>\n                    <div class="category-header">{{\'INSTALL.LATEST_PRE\' | translate}}</div>\n                    <br/>\n                    <md-radio-group ng-if="$ctrl.preEditors.length > 0" ng-model="$ctrl.editor" class="md-primary">\n                        <md-radio-button\n                                ng-repeat="editor in $ctrl.preEditors"\n                                ng-value="editor"\n                                ng-disabled="editor.isDisabled"\n                                ng-class="{\'md-align-top-left\': $index==1}">\n                            Unity {{ editor.version }} <span ng-if="editor.channel === \'ALPHA\'">({{\'INSTALL.ALPHA\' | translate}})</span><span ng-if="editor.channel === \'BETA\'">({{\'INSTALL.BETA\' | translate}})</span>\n                        </md-radio-button>\n                    </md-radio-group>\n                    <div ng-if="$ctrl.preEditors.length === 0">{{\'INSTALL.NO_PRE_RELEASE\' | translate}}</div>\n                </md-step-body>\n            </md-step>\n            <md-step layout="column" md-label="{{\'INSTALL.ADD_MODULE_LABEL\' | translate}}">\n                <md-step-body class="install-step-body">\n                    <add-module-layout class="module-table" change="$ctrl.onModuleChange($event)"\n                                      editor="$ctrl.editor">\n                    </add-module-layout>\n                </md-step-body>\n            </md-step>\n        </md-stepper>\n    </md-dialog-content>\n    <md-divider flex-order="1"></md-divider>\n    <md-dialog-actions class="md-dialog-actions" lauout="row">\n        <md-button id="btnCancel" ng-click="$ctrl.cancel()">{{ "INSTALL.CANCEL" | translate}}</md-button>\n        <span flex></span>\n        <md-button id="btnBack" class="md-primary" ng-click="$ctrl.previousStep()" ng-disabled="$ctrl.step === 0">\n            {{ "INSTALL.BACK" | translate}}\n        </md-button>\n        <md-button id="btnNext" class="md-primary" ng-click="$ctrl.nextStep()" ng-disabled="$ctrl.editor === undefined">\n            {{$ctrl.getNextStepButtonLabel() | translate}}\n        </md-button>\n    </md-dialog-actions>\n\n</form>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/add-custom-editor/add-custom-editor.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<form ng-cloak class="add-custom-editor-dialog" layout="column">\n    <md-toolbar layout="row">\n        <div class="md-toolbar-tools">\n            <div class="md-title" translate>INSTALL.ADD_EDITOR</div>\n            <span flex></span>\n            <md-button id="btnClose" class="md-icon-button" ng-click="$ctrl.cancel()">\n                <md-icon>close</md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content flex class="module-table-container md-dialog-content">\n        <add-module-layout class="module-table" change="$ctrl.onModuleChange($event)"\n                          editor="$ctrl.editor">\n        </add-module-layout>\n    </md-dialog-content>\n    <md-divider flex-order="1"></md-divider>\n    <md-dialog-actions class="md-dialog-actions" lauout="row">\n        <md-button id="btnCancel" ng-click="$ctrl.cancel()">{{ "INSTALL.CANCEL" | translate}}</md-button>\n        <span flex></span>\n        <md-button id="btnInstall" class="md-primary" ng-click="$ctrl.downloadEditor()" translate>\n            INSTALL\n        </md-button>\n    </md-dialog-actions>\n\n</form>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/install/eula-steps/eula-steps.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-dialog-content>\n    <md-toolbar layout="row">\n        <div class="md-toolbar-tools">\n            <div class="md-title" translate>INSTALL.EULA</div>\n            <span flex></span>\n            <md-button class="md-icon-button launch" ng-click="$ctrl.cancel()">\n                <md-icon>close</md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <div class="eula-container">\n        <h3>{{$ctrl.currentModule.eulaLabel1}}</h3>\n        <p>{{$ctrl.currentModule.eulaMessage}}</p>\n        <a ng-if="$ctrl.currentModule.eulaText === \'\'" ng-href="{{ $ctrl.currentModule.eulaUrl1 }}" target="_blank">\n            {{$ctrl.currentModule.eulaUrl1}}\n        </a>\n        <p class="eula-text" ng-if="$ctrl.currentModule.eulaText !== \'\'">{{$ctrl.currentModule.eulaText}}</p>\n    </div>\n    <md-divider></md-divider>\n    <div class="eula-agreement">\n        <md-checkbox ng-model="$ctrl.currentModule.approved" aria-label="Approval checkbox">{{\'INSTALL.EULA_APPROVAL\' | translate}}\n        </md-checkbox>\n    </div>\n</md-dialog-content>\n<md-dialog-actions class="md-dialog-actions">\n    <md-button aria-label="cancel button" ng-click="$ctrl.cancel()">{{ "INSTALL.CANCEL" | translate}}</md-button>\n    <span flex></span>\n    <md-button ng-if="$ctrl.modules.length > 1" aria-label="back button" ng-disabled="!$ctrl.currentModule.prev" class="md-primary"\n               ng-click="$ctrl.back()" translate="INSTALL.BACK"></md-button>\n    <md-button aria-label="next button" ng-if="$ctrl.currentModule.next" class="md-primary" ng-click="$ctrl.next()"\n               translate="INSTALL.NEXT"></md-button>\n    <md-button aria-label="done button" ng-click="$ctrl.done()" ng-if="!$ctrl.currentModule.next"\n               ng-disabled="!$ctrl.agreedAllEulas()" translate="INSTALL.DONE"></md-button>\n</md-dialog-actions>\n\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/common/hub-icon/hub-icon.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-icon class="hub-icon" ng-if="$ctrl.type === $ctrl.iconType.FONT"\n    md-font-set="{{ $ctrl.data.font }}">\n  {{ $ctrl.data.name }}\n</md-icon>\n<img class="hub-icon" ng-if="$ctrl.type === $ctrl.iconType.SVG"\n     ng-src="{{ $ctrl.data.url }}">\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/general-preferences/general-preferences.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<div class="main-container" layout="column">\n    <div class="headline layout-align-start-center layout-row flex-noshrink"><h2 class="md-headline capitalize" translate>GENERAL_PREFERENCES.GENERAL</h2></div>\n    <div class="general-list-container" layout="column">\n        <md-card class="preference-card">\n            <md-card-content layout="column">\n                <div class="md-title" translate>GENERAL_PREFERENCES.EDITOR_LOC_TITLE</div>\n                <p translate>GENERAL_PREFERENCES.EDITOR_LOC_DESC</p>\n                <form name="preferences">\n                    <div name="preferences" class="location-selector" layout="row" layout-align="start end">\n                        <file-location\n                                flex="66"\n                                on-change="$ctrl.onLocationChange($event)"\n                                on-select-file="$ctrl.onFileSelector($event)"\n                                file-location="$ctrl.secondaryLocation"\n                                placeholder="\'GENERAL_PREFERENCES.EDITOR_LOC_PLACEHOLDER\' | translate"\n                                valid-path-check="true"\n                                hub-path-check="true"\n                        />\n                    </div>\n                    <div layout="row" flex layout-align="end end">\n                        <md-button id="savePreferences" ng-disabled="preferences.$invalid" class="md-primary md-raised" type="submit"\n                                   ng-click="$ctrl.onSubmit()" translate="LICENSE.SAVE"></md-button>\n                    </div>\n                </form>\n            </md-card-content>\n        </md-card>\n\n        <md-card class="preference-card">\n            <md-card-content layout="column">\n                <div class="md-title" translate>GENERAL_PREFERENCES.LANGUAGE_TITLE</div>\n                <p translate>GENERAL_PREFERENCES.LANGUAGE_DESC</p>\n                <form name="language-preference">\n                    <div name="language-preference" class="language-selector" layout="row" layout-align="start end">\n                        <md-select ng-model="$ctrl.selectedLanguage" ng-change="$ctrl.onLanguageChange($event)">\n                            <md-option ng-value="language" ng-repeat="language in $ctrl.languages">{{language.name}}</md-option>\n                        </md-select>\n                    </div>\n                </form>\n            </md-card-content>\n        </md-card>\n    </div>\n</div>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    ,
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/license-management/license-management.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<div class="main-container" layout="column">\n  <div class="headline" layout="row" layout-align="start center" flex="noshrink">\n    <h2 class="md-headline capitalize" translate>LICENSE.LICENSE</h2>\n    <div class="actions" layout="row" flex layout-align="end center">\n      <md-button id="activateNewLicense" ng-disabled="!$ctrl.isUserLoggedIn || $ctrl.isLicenseLoading()"\n                 ng-click="$ctrl.activateNewLicense()"\n                 class="md-raised md-primary"\n                 translate="LICENSE.ACTIVATE_NEW_LICENSE"></md-button>\n      <md-button id="manualActivation" class="md-raised md-primary"\n                 ng-disabled="$ctrl.isLicenseLoading()"\n                 ng-click="$ctrl.manualActivation()"\n                 translate="LICENSE.MANUAL_ACTIVATION"></md-button>\n    </div>\n  </div>\n\n  <div ng-if="$ctrl.licenseInfo && $ctrl.licenseInfo.activated" layout="column">\n    <md-card class="license-management-container">\n      <md-progress-linear md-mode="indeterminate" ng-if="$ctrl.isLicenseLoading()">\n      </md-progress-linear>\n      <md-card-content layout="column">\n        <div id="licenseType" class="md-title" translate="{{ $ctrl.licenseTypeKey }}"></div>\n        <p translate="{{ $ctrl.licenseDetailsKey }}"></p>\n\n        <p id="licenseDates">\n          {{\'LICENSE.DATE.ACTIVATION\' | translate}}: {{ $ctrl.licenseInfo.startDate | date: \'yyyy/MM/dd\' }} <br/>\n          {{\'LICENSE.DATE.NEXT_UPDATE\' | translate}}: {{ $ctrl.licenseInfo.updateDate | date: \'yyyy/MM/dd\' }} <br/>\n          <label ng-if="$ctrl.shouldShowExpiration()">{{\'LICENSE.DATE.EXPIRATION\' | translate}}: {{ $ctrl.licenseInfo.displayedStopDate | date: \'yyyy/MM/dd\' }}</label>\n        </p>\n\n        <div layout="row">\n          <div class="license-links" layout="row" flex layout-align="start center">\n            <a ng-if="$ctrl.shouldShowBuyPro()" href="{{\'LICENSE.BUY_PRO_URL\' | translate}}" target="_blank" translate>LICENSE.BUY_PRO</a>\n            <div ng-if="$ctrl.shouldShowBuyPro()" class="separator"></div>\n            <a href="{{\'COMMON.HELP_ACTIVATE_URL\' | translate}}" target="_blank" translate>COMMON.HELP</a>\n            <div class="separator"></div>\n            <a href="{{\'COMMON.FAQ_URL\' | translate}}" target="_blank" translate>COMMON.FAQ</a>\n          </div>\n\n          <div layout="row" layout-align="end end">\n            <md-button id="returnLicense" ng-click="$ctrl.returnLicense()"\n                       ng-disabled="!$ctrl.isUserLoggedIn || $ctrl.isLicenseLoading()"\n                       class="md-raised"\n                       translate="LICENSE.RETURN_LICENSE"></md-button>\n            <md-button id="updateLicense" ng-click="$ctrl.updateLicense()"\n                       ng-disabled="!$ctrl.isUserLoggedIn || $ctrl.isLicenseLoading()"\n                       class="md-primary md-raised"\n                       translate="LICENSE.CHECK_FOR_UPDATES"></md-button>\n          </div>\n        </div>\n      </md-card-content>\n    </md-card>\n  </div>\n  <div ng-show="$ctrl.licenseInfo && !$ctrl.licenseInfo.activated">\n    <md-progress-linear id="licenseProgress" md-mode="indeterminate" ng-if="$ctrl.isLicenseLoading()">\n    </md-progress-linear>\n    <list-placeholder layout="column"  icon-name="insert_drive_file">\n      <placeholder-summary translate="LICENSE.PLACEHOLDER.SUMMARY"></placeholder-summary>\n      <placeholder-details translate="LICENSE.PLACEHOLDER.DETAILS"></placeholder-details>\n    </list-placeholder>\n  </div>\n\n</div>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/license-management/license-selector/licence-selector.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-dialog-content>\n    <md-toolbar layout="row">\n        <div class="md-toolbar-tools">\n            <div class="md-title" translate>LICENSE.NEW_LICENSE_ACTIVATION</div>\n            <span flex></span>\n            <md-button id="closeLicenseSelector" class="md-icon-button" ng-click="$ctrl.cancel()">\n                <md-icon>close</md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <div class="license-selector-container">\n        <h3>{{ \'LICENSE.LICENSE_AGREEMENT\' | translate}}</h3>\n        <p class="intro">{{ \'LICENSE.SELECT_OPTIONS\' | translate}}</p>\n        <md-radio-group ng-model="$ctrl.category" class="options">\n            <md-radio-button id="radioPersonal" ng-click="$ctrl.clickPersonal()" value="personal" ng-disabled="$ctrl.peDisabled">{{\'LICENSE.PERSONAL\' | translate}}</md-radio-button>\n            <div class="nested-radio-group">\n                <md-radio-group ng-show="$ctrl.showPersonal === true" ng-model="$ctrl.subCategory">\n                    <md-radio-button id="radioPersonalOpt1" value="personal1"><span translate="LICENSE.LESS_THAN_100K"></span></md-radio-button>\n                    <md-radio-button id="radioPersonalOpt2" value="personal2"><span translate="LICENSE.NO_PRO"></span></md-radio-button>\n                </md-radio-group>\n            </div>\n            <md-radio-button id="radioPro" ng-click="$ctrl.clickPro()" value="pro">{{\'LICENSE.PLUS_OR_PRO\' | translate}}</md-radio-button>\n            <md-input-container ng-class="{\'ng-hide\': $ctrl.showSerial === false}" class="serial" layout="column" ng-form="serialForm">\n                <input id="serialNumber" required serial-number\n                       ng-model="$ctrl.serialNumber"\n                       name="serialNumber"\n                       placeholder="{{\'LICENSE.SERIAL\' | translate}}">\n                <div id="serialMessage" role="alert"\n                     ng-messages="serialForm.serialNumber.$error"\n                     ng-show="serialForm.serialNumber.$dirty">\n                    <div ng-message="required" translate>ERROR.REQUIRED_FIELD</div>\n                    <div ng-message="serialNumberPattern" translate>ERROR.LICENSE.INVALID_SERIAL_PATTERN</div>\n                    <div ng-message="invalidSerialNumber" translate>ERROR.LICENSE.INVALID_SERIAL</div>\n                    <div ng-message="serverMaintenanceError" translate>ERROR.LICENSE.SERVER.MAINTENANCE</div>\n                    <div ng-message="serverGenericError" translate>ERROR.LICENSE.SERVER.GENERIC</div>\n                </div>\n            </md-input-container>\n            <div class="serial" ng-if="serialForm.serialNumber.$pending" layout="row" >\n                <div class="loading-serial" translate="LICENSE.VALIDATING_SERIAL_NUMBER"></div>\n                <md-progress-circular flex class="md-hue-2" md-diameter="20px"></md-progress-circular>\n            </div>\n\n\n        </md-radio-group>\n    </div>\n\n    <md-dialog-actions layout="row">\n        <div class="links">\n            <a href="https://store.unity.com/products/unity-pro" target="_blank">{{\'LICENSE.BUY_PRO\' | translate}}</a> -\n            <a href="https://docs.unity3d.com/Manual/OnlineActivationGuide.html" target="_blank">{{\'COMMON.HELP\' | translate}}</a> -\n            <a href="https://unity3d.com/unity/faq" target="_blank">{{ \'COMMON.FAQ\' | translate }}</a>\n        </div>\n        <span flex></span>\n        <md-button id="btnDone" ng-click="$ctrl.done()" ng-disabled="$ctrl.isDoneButtonDisabled(serialForm)" class="md-primary md-raised">{{"LICENSE.DONE" | translate }}</md-button>\n    </md-dialog-actions>\n</md-dialog-content>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/components/license-management/manual-license/manual-license.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<form ng-cloak class="manual-license-popup" layout="column" name="licenseForm">\n    <md-toolbar layout="row">\n        <div class="md-toolbar-tools">\n            <div class="md-title" translate>LICENSE.MANUAL_ACTIVATION</div>\n            <span flex></span>\n            <md-button id="closeManualLicense" class="md-icon-button" ng-click="$ctrl.cancel()">\n                <md-icon>close</md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content flex class="module-table-container md-dialog-content">\n        <md-stepper id="manual-license-stepper" md-mobile-step-text="false" md-vertical="false"\n                    md-linear="true"\n                    md-alternative="false">\n            <md-step layout="column" md-label="{{\'LICENSE.SAVE_LICENSE_LABEL\' | translate}}">\n                <md-step-body class="manual-license-step-body">\n                    <div class="license-text" translate>LICENSE.SAVE_LICENSE_MESSAGE_TOP</div>\n                    <div>\n                        <md-button id="saveLicense" ng-click="$ctrl.saveLicense()"\n                                   class="md-primary md-raised save-license-btn"\n                                   translate="LICENSE.SAVE_LICENSE_REQUEST"></md-button>\n                    </div>\n                    <div class="license-text">\n                        <span translate="LICENSE.SAVE_LICENSE_MESSAGE_UNDER"></span>\n                        <a ng-href="https://license.unity.cn/manual" target="_blank">\n                            license.unity.cn/manual\n                        </a>\n                    </div>\n                </md-step-body>\n            </md-step>\n            <md-step layout="column" md-label="{{\'LICENSE.LOAD_LICENSE_LABEL\' | translate}}">\n                <md-step-body class="manual-license-step-body">\n                    <div translate>LICENSE.LOAD_LICENSE_MESSAGE</div>\n                    <div layout="row" layout-align="start end">\n                        <file-location\n                                flex="66"\n                                on-change="$ctrl.onLocationChange($event)"\n                                on-select-file="$ctrl.onFileSelector($event)"\n                                file-location="$ctrl.licenseLocation"\n                                placeholder="\'LICENSE.LOAD_LOC_PLACEHOLDER\' | translate"\n                                valid-path-check="true"\n                                required-check="true"\n                        />\n                    </div>\n                </md-step-body>\n            </md-step>\n        </md-stepper>\n    </md-dialog-content>\n    <md-divider flex-order="1"></md-divider>\n    <md-dialog-actions class="md-dialog-actions" lauout="row">\n        <md-button id="btnCancel" ng-click="$ctrl.cancel()">{{"COMMON.CANCEL" | translate}}</md-button>\n        <span flex></span>\n        <md-button class="md-primary" ng-click="$ctrl.previousStep()" ng-disabled="$ctrl.step === 0">\n            {{"INSTALL.BACK" | translate }}\n        </md-button>\n        <md-button class="md-primary" ng-click="$ctrl.nextStep()"\n                   ng-disabled="$ctrl.step === 1 && licenseForm.$invalid">\n           {{$ctrl.step === 0 ? \'INSTALL.NEXT\' : \'COMMON.CONFIRM\' | translate}}\n        </md-button>\n    </md-dialog-actions>\n\n</form>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/common/sidenav/sidenav.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<um-side-nav exit-debug-mode="$ctrl.exitDebugMode()" is-debug-mode="$ctrl.isDebugMode" flex nav-items="$ctrl.navItems" on-nav-item-select="$ctrl.onNavItemSelect($event)">\n</um-side-nav>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/common/topbar/topbar.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<um-top-nav actions="$ctrl.actions"\n            user="$ctrl.user"\n            supporting-links="$ctrl.supportingLinks"\n            initials="$ctrl.initials"\n            on-logout="$ctrl.logout()"\n            on-login="$ctrl.login()"\n            is-debug-mode="$ctrl.isDebugMode"\n            modal-editor="$ctrl.modalEditor"\n            enable-login="$ctrl.enableLogin">\n</um-top-nav>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/common/list-placeholder/list-placeholder.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-card layout="column" layout-align="center center">\n    <div layout="column" layout-align="center center">\n        <div class="icon-container" layout="column">\n            <md-icon md-font-set="{{$ctrl.fontSet}}">{{$ctrl.iconName}}</md-icon>\n        </div>\n        <h1 ng-transclude="summary"></h1>\n        <div class="details" ng-transclude="details"></div>\n    </div>\n</md-card>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    function (e, t) {
        var n =
            '/Users/bokken/buildslave/uw-hub/build/client/apps/main/common/dropdown-menu/dropdown-menu.html'
        window.angular.module('ng').run([
            '$templateCache',
            function (e) {
                e.put(
                    n,
                    '<md-button ng-disabled="$ctrl.disabled" class="md-icon-button md-small" ng-click="$mdMenu.open($event)" ng-if="$ctrl.options.length === 0">\n  <md-icon ng-class="$ctrl.iconClass" md-menu-origin>{{ $ctrl.icon || \'more_vert\' }}</md-icon>\n</md-button>\n<md-menu md-position-mode="target-right target" ng-if="$ctrl.options.length > 0">\n  <md-button ng-disabled="$ctrl.disabled" class="md-icon-button md-small" ng-click="$mdMenu.open($event)">\n    <md-icon ng-class="$ctrl.iconClass" md-menu-origin>{{ $ctrl.icon || \'more_vert\' }}</md-icon>\n  </md-button>\n  <md-menu-content width="3">\n    <md-menu-item ng-repeat="option in $ctrl.options">\n      <md-button ng-click="option.onClick($ctrl.model)" aria-label="{{option.title}}" translate="{{option.title}}"></md-button>\n    </md-menu-item>\n  </md-menu-content>\n</md-menu>\n'
                )
            },
        ]),
            (e.exports = n)
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
        var n = (function () {
                function e(e, t, n) {
                    ;(this.$mdComponentRegistry = e),
                        (this.$attrs = t),
                        (this.$log = n),
                        (this.labelStep = 'Step'),
                        (this.labelOf = 'of'),
                        (this.steps = []),
                        (this.currentStep = 0)
                }
                return (
                    (e.prototype.$onInit = function () {
                        '' === this.$attrs.mdMobileStepText &&
                            (this.mobileStepText = !0),
                            '' === this.$attrs.mdLinear && (this.linear = !0),
                            '' === this.$attrs.mdAlternative &&
                                (this.alternative = !0)
                    }),
                    (e.prototype.$postLink = function () {
                        this.$attrs.id ||
                            this.$log.warn(
                                'You must set an id attribute to your stepper'
                            ),
                            (this.registeredStepper = this.$mdComponentRegistry.register(
                                this,
                                this.$attrs.id
                            ))
                    }),
                    (e.prototype.$onDestroy = function () {
                        this.registeredStepper && this.registeredStepper()
                    }),
                    (e.prototype.$addStep = function (e) {
                        return this.steps.push(e) - 1
                    }),
                    (e.prototype.next = function () {
                        return (
                            this.currentStep < this.steps.length &&
                            (this.clearError(),
                            this.currentStep++,
                            this.clearFeedback(),
                            !0)
                        )
                    }),
                    (e.prototype.back = function () {
                        return (
                            this.currentStep > 0 &&
                            (this.clearError(),
                            this.currentStep--,
                            this.clearFeedback(),
                            !0)
                        )
                    }),
                    (e.prototype.skip = function () {
                        return (
                            !!this.steps[this.currentStep].optional &&
                            (this.currentStep++, this.clearFeedback(), !0)
                        )
                    }),
                    (e.prototype.error = function (e) {
                        var t = this.steps[this.currentStep]
                        ;(t.hasError = !0),
                            (t.message = e),
                            this.clearFeedback()
                    }),
                    (e.prototype.clearError = function () {
                        this.steps[this.currentStep].hasError = !1
                    }),
                    (e.prototype.goto = function (e) {
                        return (
                            e < this.steps.length &&
                            ((this.currentStep = e), this.clearFeedback(), !0)
                        )
                    }),
                    (e.prototype.showFeedback = function (e) {
                        ;(this.hasFeedback = !0), (this.feedbackMessage = e)
                    }),
                    (e.prototype.clearFeedback = function () {
                        this.hasFeedback = !1
                    }),
                    (e.prototype.isCompleted = function (e) {
                        return this.linear && e < this.currentStep
                    }),
                    (e.prototype.isActiveStep = function (e) {
                        return this.steps.indexOf(e) === this.currentStep
                    }),
                    (e.$inject = ['$mdComponentRegistry', '$attrs', '$log']),
                    e
                )
            })(),
            i = (function () {
                function e(e, t, n) {
                    ;(this.$element = e), (this.$compile = t), (this.$scope = n)
                }
                return (
                    (e.prototype.$postLink = function () {
                        this.stepNumber = this.$stepper.$addStep(this)
                    }),
                    (e.prototype.isActive = function () {
                        return this.$stepper.isActiveStep(this)
                    }),
                    (e.$inject = ['$element', '$compile', '$scope']),
                    e
                )
            })()
        angular
            .module('mdSteppers', ['ngMaterial'])
            .factory('$mdStepper', [
                '$mdComponentRegistry',
                function (e) {
                    return function (t) {
                        var n = e.get(t)
                        return n || e.notFoundError(t), n
                    }
                },
            ])
            .directive('mdStepper', function () {
                return {
                    transclude: !0,
                    scope: {
                        linear: '<?mdLinear',
                        alternative: '<?mdAlternative',
                        vertical: '<?mdVertical',
                        mobileStepText: '<?mdMobileStepText',
                        labelStep: '@?mdLabelStep',
                        labelOf: '@?mdLabelOf',
                    },
                    bindToController: !0,
                    controller: n,
                    controllerAs: 'stepper',
                    templateUrl: 'mdSteppers/mdStepper.tpl.html',
                }
            })
            .directive('mdStep', [
                '$compile',
                function (e) {
                    return {
                        require: '^^mdStepper',
                        transclude: !0,
                        scope: { label: '@mdLabel', optional: '@?mdOptional' },
                        bindToController: !0,
                        controller: i,
                        controllerAs: '$ctrl',
                        link: function (t, n, i, o) {
                            function r() {
                                if (!!!n.find('.md-step-body-overlay')[0]) {
                                    var i = angular.element(
                                        '<div class="md-step-body-overlay"></div>\n                            <div class="md-step-body-loading">\n                                <md-progress-circular md-mode="indeterminate"></md-progress-circular>\n                            </div>'
                                    )
                                    e(i)(t),
                                        n.find('.md-steppers-scope').append(i)
                                }
                            }
                            ;(t.$ctrl.$stepper = o),
                                t.$watch(
                                    function () {
                                        return t.$ctrl.isActive()
                                    },
                                    function (e) {
                                        e
                                            ? (n.addClass('md-active'), r())
                                            : n.removeClass('md-active')
                                    }
                                )
                        },
                        templateUrl: 'mdSteppers/mdStep.tpl.html',
                    }
                },
            ])
            .config([
                '$mdIconProvider',
                function (e) {
                    e.icon('steppers-check', 'mdSteppers/ic_check_24px.svg'),
                        e.icon(
                            'steppers-warning',
                            'mdSteppers/ic_warning_24px.svg'
                        )
                },
            ])
            .run([
                '$templateCache',
                function (e) {
                    e.put(
                        'mdSteppers/ic_check_24px.svg',
                        '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\r\n    <path d="M0 0h24v24H0z" fill="none"/>\r\n    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>\r\n</svg>'
                    ),
                        e.put(
                            'mdSteppers/ic_warning_24px.svg',
                            '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\r\n    <path d="M0 0h24v24H0z" fill="none"/>\r\n    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>\r\n</svg>'
                        )
                },
            ]),
            angular.module('mdSteppers').run([
                '$templateCache',
                function (e) {
                    e.put(
                        'mdSteppers/mdStep.tpl.html',
                        '<div class="md-stepper" ng-class="{ \'md-active\': $ctrl.isActive() }">\r\n    <md-steppers-header class="md-steppers-header md-steppers-vertical">\r\n        <button class="md-stepper-indicator" ng-class="{\r\n                    \'md-active\': $ctrl.stepNumber === $ctrl.$stepper.currentStep,\r\n                    \'md-completed\': $ctrl.$stepper.isCompleted($ctrl.stepNumber),\r\n                    \'md-error\': $ctrl.hasError,\r\n                    \'md-stepper-optional\': $ctrl.optional || $ctrl.hasError\r\n                }" ng-click="$ctrl.$stepper.goto($ctrl.stepNumber)" ng-disabled="$ctrl.$stepper.linear || $ctrl.stepNumber === $ctrl.$stepper.currentStep">\r\n                <div class="md-stepper-indicator-wrapper">\r\n                    <div class="md-stepper-number" ng-hide="$ctrl.hasError">\r\n                    <span ng-if="!$ctrl.$stepper.isCompleted($ctrl.stepNumber)">{{ ::$ctrl.stepNumber+1 }}</span>\r\n                        <md-icon md-svg-icon="steppers-check" class="md-stepper-icon" ng-if="$ctrl.$stepper.isCompleted($ctrl.stepNumber)"></md-icon>\r\n                    </div>\r\n                    <div class="md-stepper-error-indicator" ng-show="$ctrl.hasError">\r\n                        <md-icon md-svg-icon="steppers-warning"></md-icon>\r\n                    </div>\r\n\r\n                    <div class="md-stepper-title">\r\n                        <span>{{ $ctrl.label }}</span>\r\n                        <small ng-if="$ctrl.optional && !$ctrl.hasError">{{ $ctrl.optional }}</small>\r\n                        <small class="md-stepper-error-message" ng-show="$ctrl.hasError">\r\n                            {{ $ctrl.message }}\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n                </button>\r\n        <div class="md-stepper-feedback-message" ng-show="stepper.hasFeedback">\r\n            {{stepper.feedbackMessage}}\r\n        </div>\r\n    </md-steppers-header>\r\n    <md-steppers-scope layout="column" class="md-steppers-scope" ng-if="$ctrl.isActive()" ng-transclude></md-steppers-scope>\r\n</div>'
                    ),
                        e.put(
                            'mdSteppers/mdStepper.tpl.html',
                            '<div flex class="md-steppers" ng-class="{ \r\n    \'md-steppers-linear\': stepper.linear, \r\n    \'md-steppers-alternative\': stepper.alternative,\r\n    \'md-steppers-vertical\': stepper.vertical,\r\n    \'md-steppers-mobile-step-text\': stepper.mobileStepText,\r\n    \'md-steppers-has-feedback\': stepper.hasFeedback\r\n    }">\r\n    <div class="md-steppers-header-region">\r\n        <md-steppers-header class="md-steppers-header md-steppers-horizontal md-whiteframe-1dp">\r\n            <button class="md-stepper-indicator" ng-repeat="(stepNumber, $step) in stepper.steps track by $index" ng-class="{\r\n                \'md-active\': stepNumber === stepper.currentStep,\r\n                \'md-completed\': stepper.isCompleted(stepNumber),\r\n                \'md-error\': $step.hasError,\r\n                \'md-stepper-optional\': $step.optional || $step.hasError\r\n            }" ng-click="stepper.goto(stepNumber)" ng-disabled="stepper.linear || stepNumber === stepper.currentStep">\r\n            <div class="md-stepper-indicator-wrapper">\r\n                <div class="md-stepper-number" ng-hide="$step.hasError">\r\n                    <span ng-if="!stepper.isCompleted(stepNumber)">{{ ::stepNumber+1 }}</span>\r\n                    <md-icon md-svg-icon="steppers-check" class="md-stepper-icon" ng-if="stepper.isCompleted(stepNumber)"></md-icon>\r\n                </div>\r\n\r\n                <div class="md-stepper-error-indicator" ng-show="$step.hasError">\r\n                <md-icon md-svg-icon="steppers-warning"></md-icon>\r\n                </div>\r\n                <div class="md-stepper-title">\r\n                    <span>{{ $step.label }}</span>\r\n                    <small ng-if="$step.optional && !$step.hasError">{{ $step.optional }}</small>\r\n                    <small class="md-stepper-error-message" ng-show="$step.hasError">\r\n                        {{ $step.message }}\r\n                    </small>\r\n                </div>\r\n            </div>\r\n            </button>\r\n           \r\n        </md-steppers-header>\r\n        <md-steppers-mobile-header class="md-steppers-mobile-header">\r\n            <md-toolbar flex="none" class="md-whiteframe-1dp" style="background: #f6f6f6 !important; color: #202020 !important;">\r\n                <div class="md-toolbar-tools">\r\n                    <h3>\r\n                        <span>{{stepper.labelStep}} {{stepper.currentStep+1}} {{stepper.labelOf}} {{stepper.steps.length}}</span>\r\n                    </h3>\r\n                </div>\r\n            </md-toolbar>\r\n        </md-steppers-mobile-header>\r\n        <div class="md-stepper-feedback-message" ng-show="stepper.hasFeedback">\r\n            {{stepper.feedbackMessage}}\r\n        </div>\r\n    </div>\r\n    <md-steppers-content class="md-steppers-content" ng-transclude></md-steppers-content>\r\n    <div class="md-steppers-overlay"></div>\r\n</div>'
                        )
                },
            ])
    },
    function (e, t, n) {
        var i = n(277)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            'md-stepper {\n  display: block; }\n\nmd-step-actions, md-steppers-header, md-steppers-mobile-header {\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  box-sizing: border-box; }\n\n.md-steppers-header-region {\n  z-index: 1; }\n\n@media (max-width: 599px) {\n  md-stepper {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n    flex-direction: row; }\n  md-stepper > div {\n    min-width: 0;\n    -ms-flex: 1;\n    flex: 1; }\n  .md-steppers-content {\n    min-height: 0;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  md-step.md-active, md-step.md-active .md-stepper {\n    min-height: 0;\n    -ms-flex: 1;\n    flex: 1;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  md-step-body, md-steppers-scope {\n    -ms-flex: 1;\n    flex: 1; } }\n\n.md-steppers {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n  flex-flow: column; }\n\n.md-steppers:not(.md-steppers-linear) .md-stepper-indicator.md-editable.md-completed:hover, .md-steppers:not(.md-steppers-linear) .md-stepper-indicator:not(.md-active):not(.md-completed):hover {\n  cursor: pointer; }\n\n.md-steppers:not(.md-steppers-linear) .md-stepper-indicator.md-editable.md-completed:hover, .md-steppers:not(.md-steppers-linear) .md-stepper-indicator.md-editable.md-completed:hover .md-stepper-indicator-wrapper, .md-steppers:not(.md-steppers-linear) .md-stepper-indicator:not(.md-active):not(.md-completed):hover, .md-steppers:not(.md-steppers-linear) .md-stepper-indicator:not(.md-active):not(.md-completed):hover .md-stepper-indicator-wrapper {\n  background-color: #f6f6f6; }\n\n.md-steppers-header {\n  margin: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  border-radius: 0;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.md-steppers-horizontal .md-stepper-indicator {\n  min-height: 72px; }\n\n.md-steppers-horizontal .md-stepper-indicator:first-child .md-stepper-indicator-wrapper {\n  padding-left: 16px; }\n\n.md-steppers-horizontal .md-stepper-indicator:after {\n  width: 999em;\n  height: 1px;\n  margin-top: -1px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: 1;\n  background-color: #e8e8e8;\n  content: " "; }\n\n.md-stepper-indicator {\n  margin: 0;\n  padding: 0 16px;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  -ms-flex-line-pack: start;\n  align-content: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  overflow: hidden;\n  cursor: default;\n  background: none;\n  border: none;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-stepper-indicator:focus {\n  outline: none; }\n\n.md-stepper-indicator.md-active .md-stepper-number, .md-stepper-indicator.md-completed .md-stepper-number {\n  background-color: #2196f3; }\n\n.md-stepper-indicator.md-active .md-stepper-title, .md-stepper-indicator.md-completed .md-stepper-title {\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-stepper-indicator.md-active .md-stepper-title, .md-stepper-indicator.md-editable .md-stepper-title {\n  font-weight: 500; }\n\n.md-stepper-indicator.md-error .md-stepper-title {\n  color: #f44336; }\n\n.md-stepper-indicator:first-child {\n  padding-left: 0; }\n\n.md-stepper-indicator:last-child {\n  padding-right: 0;\n  -ms-flex-pack: end;\n  justify-content: flex-end; }\n\n.md-stepper-indicator:last-child .md-stepper-indicator-wrapper {\n  padding-right: 24px; }\n\n.md-stepper-indicator .md-ripple-container {\n  z-index: 3; }\n\n.md-stepper-indicator-wrapper {\n  padding: 0 8px 0 0;\n  position: relative;\n  z-index: 2;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  background-color: #fff;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-stepper-number {\n  width: 24px;\n  height: 24px;\n  margin: 0 8px;\n  border-radius: 24px;\n  background-color: #bdbdbd;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: #fff;\n  font-size: 12px;\n  line-height: 24px;\n  text-align: center; }\n\n.md-stepper-number.ng-hide {\n  transition: none; }\n\n.md-error .md-stepper-error-indicator {\n  margin: 0 8px;\n  background-color: #fff; }\n\n.md-error .md-stepper-error-indicator md-icon {\n  color: #f44336; }\n\n.md-error .md-stepper-error-message {\n  color: #f44336;\n  font-weight: 400; }\n\n.md-stepper-icon {\n  width: 18px;\n  height: 18px;\n  position: relative;\n  top: -1px;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700; }\n\n.md-stepper-icon.md-stepper-icon-edit {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-stepper-title {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n  flex-flow: column nowrap;\n  position: relative;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  font-size: 14px;\n  line-height: 24px; }\n\n.md-steppers-content {\n  position: relative;\n  -ms-flex: 1;\n  flex: 1; }\n\n.md-stepper {\n  box-sizing: border-box; }\n\n.md-stepper.md-active {\n  position: relative;\n  pointer-events: auto; }\n\n.md-steppers-actions {\n  display: -ms-flexbox;\n  display: flex; }\n\n.md-stepper-optional .md-stepper-title {\n  text-align: left;\n  white-space: nowrap; }\n\n.md-stepper-optional .md-stepper-title small:not(.md-stepper-error-message) {\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-stepper-optional .md-stepper-title small {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  font-size: 12px;\n  line-height: 1em; }\n\n.md-steppers-linear .md-stepper-indicator {\n  cursor: default; }\n\n.md-steppers-linear .md-stepper-indicator.md-editable.md-completed:hover {\n  cursor: pointer; }\n\n.md-steppers-linear .md-stepper-indicator.md-editable.md-completed:hover, .md-steppers-linear .md-stepper-indicator.md-editable.md-completed:hover .md-stepper-indicator-wrapper, .md-steppers-linear .md-stepper-indicator.md-editable.md-completed:hover .md-stepper-number:after, .md-steppers-linear .md-stepper-indicator.md-editable.md-completed:hover .md-stepper-number:before {\n  background-color: #f6f6f6; }\n\n.md-steppers-linear .md-stepper-title, .md-steppers-linear .md-stepper-title small:not(.md-stepper-error-message) {\n  color: rgba(0, 0, 0, 0.26); }\n\n.md-steppers-alternative:not(.md-steppers-linear) .md-stepper-indicator:not(.md-active):not(.md-completed):hover .md-stepper-indicator-wrapper {\n  background: none; }\n\n.md-steppers-alternative:not(.md-steppers-linear) .md-stepper-indicator:not(.md-active):not(.md-completed):hover .md-stepper-number:after, .md-steppers-alternative:not(.md-steppers-linear) .md-stepper-indicator:not(.md-active):not(.md-completed):hover .md-stepper-number:before {\n  background-color: #f6f6f6; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-indicator {\n  min-height: 104px;\n  padding: 24px 16px;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-indicator .md-stepper-indicator-wrapper {\n  padding: 0; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-indicator:first-child {\n  padding-left: 24px; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-indicator:first-child:after {\n  left: 50%; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-indicator:last-child {\n  padding-right: 24px; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-indicator:last-child:after {\n  right: 50%;\n  left: auto; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-indicator:after {\n  margin-top: 0;\n  top: 36px; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-indicator-wrapper {\n  padding: 0 16px;\n  min-height: 50px;\n  -ms-flex-flow: column nowrap;\n  flex-flow: column nowrap;\n  background: none; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-error-indicator, .md-steppers-alternative .md-steppers-horizontal .md-stepper-number {\n  position: relative; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-error-indicator:after, .md-steppers-alternative .md-steppers-horizontal .md-stepper-error-indicator:before, .md-steppers-alternative .md-steppers-horizontal .md-stepper-number:after, .md-steppers-alternative .md-steppers-horizontal .md-stepper-number:before {\n  width: 8px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background-color: #fff;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  content: " "; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-error-indicator:before, .md-steppers-alternative .md-steppers-horizontal .md-stepper-number:before {\n  left: -8px; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-error-indicator:after, .md-steppers-alternative .md-steppers-horizontal .md-stepper-number:after {\n  right: -8px; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-title {\n  margin-top: 16px;\n  line-height: 18px;\n  text-align: center; }\n\n.md-steppers-alternative .md-steppers-horizontal .md-stepper-title small {\n  text-align: center; }\n\n.md-steppers:not(.md-steppers-vertical) .md-steppers-header.md-steppers-vertical {\n  display: none; }\n\n.md-steppers-vertical .md-stepper {\n  padding: 8px 24px; }\n\n.md-steppers-vertical .md-steppers-scope {\n  margin-left: 20px;\n  border-left: 1px solid #e8e8e8;\n  padding-left: 20px; }\n\n.md-stepper-feedback-message, .md-steppers-mobile-header, .md-steppers-vertical .md-steppers-header.md-steppers-horizontal {\n  display: none; }\n\n@media (max-width: 599px) {\n  .md-steppers-mobile-step-text:not(.md-steppers-vertical) .md-stepper {\n    padding: 0; }\n  .md-steppers-mobile-step-text:not(.md-steppers-vertical) .md-steppers-mobile-header {\n    display: block; }\n  .md-steppers-mobile-step-text:not(.md-steppers-vertical) .md-stepper-feedback-message {\n    display: -ms-flexbox;\n    display: flex; }\n  .md-steppers-mobile-step-text:not(.md-steppers-vertical) .md-steppers-header.md-steppers-horizontal {\n    display: none; }\n  .md-steppers-mobile-step-text:not(.md-steppers-vertical) md-step-actions {\n    background: #f6f6f6 !important;\n    color: #202020 !important;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.137255), 0 2px 1px -1px rgba(0, 0, 0, 0.117647); } }\n\n.md-steppers-header-region {\n  position: relative; }\n\n.md-stepper-feedback-message {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #fff;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-left: 10px;\n  z-index: 2;\n  box-sizing: border-box; }\n\n.md-steppers, md-step-body {\n  position: relative; }\n\nmd-step-body {\n  overflow: auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.md-step-body-loading {\n  display: none; }\n\n.md-steppers-has-feedback .md-stepper-feedback-message {\n  display: -ms-flexbox;\n  display: flex; }\n\n.md-steppers-has-feedback .md-steppers-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 4; }\n\n.md-steppers-has-feedback .md-step-body-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 5;\n  opacity: .75;\n  background-color: #fff; }\n\n.md-steppers-has-feedback .md-step-body-loading {\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 6;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  box-sizing: border-box;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  max-width: 100%;\n  -ms-flex-pack: center;\n  justify-content: center; }\n',
            '',
        ])
    },
    function (e, t, n) {
        /**
         * oclazyload - Load modules on demand (lazy load) with angularJS
         * @version v1.0.10
         * @link https://github.com/ocombe/ocLazyLoad
         * @license MIT
         * @author Olivier Combe <olivier.combe@gmail.com>
         */
        !(function (n, i) {
            'use strict'
            var o = ['ng', 'oc.lazyLoad'],
                r = {},
                s = [],
                a = [],
                l = [],
                d = [],
                c = n.noop,
                p = {},
                u = []
            n.module('oc.lazyLoad', ['ng']).provider('$ocLazyLoad', [
                '$controllerProvider',
                '$provide',
                '$compileProvider',
                '$filterProvider',
                '$injector',
                '$animateProvider',
                function (e, t, h, f, v, b) {
                    var E = {},
                        w = {
                            $controllerProvider: e,
                            $compileProvider: h,
                            $filterProvider: f,
                            $provide: t,
                            $injector: v,
                            $animateProvider: b,
                        },
                        y = !1,
                        S = !1,
                        x = [],
                        C = {}
                    ;(x.push = function (e) {
                        ;-1 === this.indexOf(e) &&
                            Array.prototype.push.apply(this, arguments)
                    }),
                        (this.config = function (e) {
                            n.isDefined(e.modules) &&
                                (n.isArray(e.modules)
                                    ? n.forEach(e.modules, function (e) {
                                          E[e.name] = e
                                      })
                                    : (E[e.modules.name] = e.modules)),
                                n.isDefined(e.debug) && (y = e.debug),
                                n.isDefined(e.events) && (S = e.events)
                        }),
                        (this._init = function (e) {
                            if (0 === a.length) {
                                var t = [e],
                                    r = [
                                        'ng:app',
                                        'ng-app',
                                        'x-ng-app',
                                        'data-ng-app',
                                    ],
                                    s = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,
                                    l = function (e) {
                                        return e && t.push(e)
                                    }
                                n.forEach(r, function (t) {
                                    ;(r[t] = !0),
                                        l(document.getElementById(t)),
                                        (t = t.replace(':', '\\:')),
                                        void 0 !== e[0] &&
                                            e[0].querySelectorAll &&
                                            (n.forEach(
                                                e[0].querySelectorAll('.' + t),
                                                l
                                            ),
                                            n.forEach(
                                                e[0].querySelectorAll(
                                                    '.' + t + '\\:'
                                                ),
                                                l
                                            ),
                                            n.forEach(
                                                e[0].querySelectorAll(
                                                    '[' + t + ']'
                                                ),
                                                l
                                            ))
                                }),
                                    n.forEach(t, function (t) {
                                        if (0 === a.length) {
                                            var i = ' ' + e.className + ' ',
                                                o = s.exec(i)
                                            o
                                                ? a.push(
                                                      (o[2] || '').replace(
                                                          /\s+/g,
                                                          ','
                                                      )
                                                  )
                                                : n.forEach(
                                                      t.attributes,
                                                      function (e) {
                                                          0 === a.length &&
                                                              r[e.name] &&
                                                              a.push(e.value)
                                                      }
                                                  )
                                        }
                                    })
                            }
                            0 !== a.length ||
                                ((i.jasmine || i.mocha) &&
                                    n.isDefined(n.mock)) ||
                                console.error(
                                    'No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.'
                                )
                            n.forEach(a, function (e) {
                                !(function e(t) {
                                    if (-1 === o.indexOf(t)) {
                                        o.push(t)
                                        var i = n.module(t)
                                        _(null, i._invokeQueue, t),
                                            _(null, i._configBlocks, t),
                                            n.forEach(i.requires, e)
                                    }
                                })(e)
                            }),
                                (a = []),
                                d.pop()
                        })
                    var L = function (e) {
                            try {
                                return JSON.stringify(e)
                            } catch (i) {
                                var t = []
                                return JSON.stringify(e, function (e, i) {
                                    if (n.isObject(i) && null !== i) {
                                        if (-1 !== t.indexOf(i)) return
                                        t.push(i)
                                    }
                                    return i
                                })
                            }
                        },
                        $ = function (e) {
                            var t,
                                n,
                                i = 0
                            if (0 == e.length) return i
                            for (t = 0, n = e.length; t < n; t++)
                                (i = (i << 5) - i + e.charCodeAt(t)), (i |= 0)
                            return i
                        }
                    function N(e, t, i) {
                        if (t) {
                            var r,
                                s,
                                a,
                                d = []
                            for (r = t.length - 1; r >= 0; r--)
                                if (
                                    ((s = t[r]),
                                    n.isString(s) || (s = A(s)),
                                    s &&
                                        -1 === u.indexOf(s) &&
                                        (!E[s] || -1 !== l.indexOf(s)))
                                ) {
                                    var h = -1 === o.indexOf(s)
                                    if (
                                        ((a = g(s)),
                                        h && (o.push(s), N(e, a.requires, i)),
                                        a._runBlocks.length > 0)
                                    )
                                        for (
                                            p[s] = [];
                                            a._runBlocks.length > 0;

                                        )
                                            p[s].push(a._runBlocks.shift())
                                    n.isDefined(p[s]) &&
                                        (h || i.rerun) &&
                                        (d = d.concat(p[s])),
                                        _(e, a._invokeQueue, s, i.reconfig),
                                        _(e, a._configBlocks, s, i.reconfig),
                                        c(
                                            h
                                                ? 'ocLazyLoad.moduleLoaded'
                                                : 'ocLazyLoad.moduleReloaded',
                                            s
                                        ),
                                        t.pop(),
                                        u.push(s)
                                }
                            var m = e.getInstanceInjector()
                            n.forEach(d, function (e) {
                                m.invoke(e)
                            })
                        }
                    }
                    function T(e, t) {
                        var i = e[2][0],
                            o = e[1],
                            s = !1
                        n.isUndefined(r[t]) && (r[t] = {}),
                            n.isUndefined(r[t][o]) && (r[t][o] = {})
                        var a = function (e, i) {
                            r[t][o].hasOwnProperty(e) || (r[t][o][e] = []),
                                (function (e, t) {
                                    var i,
                                        o = !0
                                    t.length &&
                                        ((i = l(e)),
                                        n.forEach(t, function (e) {
                                            o = o && l(e) !== i
                                        }))
                                    return o
                                })(i, r[t][o][e]) &&
                                    ((s = !0),
                                    r[t][o][e].push(i),
                                    c('ocLazyLoad.componentLoaded', [t, o, e]))
                        }
                        function l(e) {
                            return n.isArray(e)
                                ? $(e.toString())
                                : n.isObject(e)
                                ? $(L(e))
                                : n.isDefined(e) && null !== e
                                ? $(e.toString())
                                : e
                        }
                        if (n.isString(i)) a(i, e[2][1])
                        else {
                            if (!n.isObject(i)) return !1
                            n.forEach(i, function (e, t) {
                                n.isString(e) ? a(e, i[1]) : a(t, e)
                            })
                        }
                        return s
                    }
                    function _(e, t, i, o) {
                        var r, a, l, d
                        if (t)
                            for (r = 0, a = t.length; r < a; r++)
                                if (((l = t[r]), n.isArray(l))) {
                                    if (null !== e) {
                                        if (!e.hasOwnProperty(l[0]))
                                            throw new Error(
                                                'unsupported provider ' + l[0]
                                            )
                                        d = e[l[0]]
                                    }
                                    var c = T(l, i)
                                    if ('invoke' !== l[1])
                                        c &&
                                            n.isDefined(d) &&
                                            d[l[1]].apply(d, l[2])
                                    else {
                                        var p = function (e) {
                                            var t = s.indexOf(i + '-' + e)
                                            ;(-1 === t || o) &&
                                                (-1 === t &&
                                                    s.push(i + '-' + e),
                                                n.isDefined(d) &&
                                                    d[l[1]].apply(d, l[2]))
                                        }
                                        if (n.isFunction(l[2][0])) p(l[2][0])
                                        else if (n.isArray(l[2][0]))
                                            for (
                                                var u = 0, h = l[2][0].length;
                                                u < h;
                                                u++
                                            )
                                                n.isFunction(l[2][0][u]) &&
                                                    p(l[2][0][u])
                                    }
                                }
                    }
                    function A(e) {
                        var t = null
                        return (
                            n.isString(e)
                                ? (t = e)
                                : n.isObject(e) &&
                                  e.hasOwnProperty('name') &&
                                  n.isString(e.name) &&
                                  (t = e.name),
                            t
                        )
                    }
                    function I(e) {
                        if (!n.isString(e)) return !1
                        try {
                            return g(e)
                        } catch (e) {
                            if (
                                /No module/.test(e) ||
                                e.message.indexOf('$injector:nomod') > -1
                            )
                                return !1
                        }
                    }
                    ;(this.$get = [
                        '$log',
                        '$rootElement',
                        '$rootScope',
                        '$cacheFactory',
                        '$q',
                        function (e, t, i, s, l) {
                            var p,
                                h = s('ocLazyLoad')
                            function f(t) {
                                var n = l.defer()
                                return (
                                    e.error(t.message), n.reject(t), n.promise
                                )
                            }
                            return (
                                y ||
                                    (((e = {}).error = n.noop),
                                    (e.warn = n.noop),
                                    (e.info = n.noop)),
                                (w.getInstanceInjector = function () {
                                    return (
                                        p ||
                                        (p =
                                            t.data('$injector') || n.injector())
                                    )
                                }),
                                {
                                    _broadcast: (c = function (t, n) {
                                        S && i.$broadcast(t, n),
                                            y && e.info(t, n)
                                    }),
                                    _$log: e,
                                    _getFilesCache: function () {
                                        return h
                                    },
                                    toggleWatch: function (e) {
                                        e ? d.push(!0) : d.pop()
                                    },
                                    getModuleConfig: function (e) {
                                        if (!n.isString(e))
                                            throw new Error(
                                                'You need to give the name of the module to get'
                                            )
                                        return E[e] ? n.copy(E[e]) : null
                                    },
                                    setModuleConfig: function (e) {
                                        if (!n.isObject(e))
                                            throw new Error(
                                                'You need to give the module config object to set'
                                            )
                                        return (E[e.name] = e), e
                                    },
                                    getModules: function () {
                                        return o
                                    },
                                    isLoaded: function (e) {
                                        var t = function (e) {
                                            var t = o.indexOf(e) > -1
                                            return t || (t = !!I(e)), t
                                        }
                                        if (
                                            (n.isString(e) && (e = [e]),
                                            n.isArray(e))
                                        ) {
                                            var i, r
                                            for (
                                                i = 0, r = e.length;
                                                i < r;
                                                i++
                                            )
                                                if (!t(e[i])) return !1
                                            return !0
                                        }
                                        throw new Error(
                                            'You need to define the module(s) name(s)'
                                        )
                                    },
                                    _getModuleName: A,
                                    _getModule: function (e) {
                                        try {
                                            return g(e)
                                        } catch (t) {
                                            throw (
                                                ((/No module/.test(t) ||
                                                    t.message.indexOf(
                                                        '$injector:nomod'
                                                    ) > -1) &&
                                                    (t.message =
                                                        'The module "' +
                                                        L(e) +
                                                        '" that you are trying to load does not exist. ' +
                                                        t.message),
                                                t)
                                            )
                                        }
                                    },
                                    moduleExists: I,
                                    _loadDependencies: function (e, t) {
                                        var i,
                                            o,
                                            r,
                                            s = [],
                                            a = this
                                        if (null === (e = a._getModuleName(e)))
                                            return l.when()
                                        try {
                                            i = a._getModule(e)
                                        } catch (e) {
                                            return f(e)
                                        }
                                        return (
                                            (o = a.getRequires(i)),
                                            n.forEach(o, function (i) {
                                                if (n.isString(i)) {
                                                    var o = a.getModuleConfig(i)
                                                    if (null === o)
                                                        return void x.push(i)
                                                    ;(i = o), (o.name = void 0)
                                                }
                                                if (a.moduleExists(i.name))
                                                    return (
                                                        0 !==
                                                            (r = i.files.filter(
                                                                function (e) {
                                                                    return (
                                                                        a
                                                                            .getModuleConfig(
                                                                                i.name
                                                                            )
                                                                            .files.indexOf(
                                                                                e
                                                                            ) <
                                                                        0
                                                                    )
                                                                }
                                                            )).length &&
                                                            a._$log.warn(
                                                                'Module "',
                                                                e,
                                                                '" attempted to redefine configuration for dependency. "',
                                                                i.name,
                                                                '"\n Additional Files Loaded:',
                                                                r
                                                            ),
                                                        n.isDefined(
                                                            a.filesLoader
                                                        )
                                                            ? void s.push(
                                                                  a
                                                                      .filesLoader(
                                                                          i,
                                                                          t
                                                                      )
                                                                      .then(
                                                                          function () {
                                                                              return a._loadDependencies(
                                                                                  i
                                                                              )
                                                                          }
                                                                      )
                                                              )
                                                            : f(
                                                                  new Error(
                                                                      'Error: New dependencies need to be loaded from external files (' +
                                                                          i.files +
                                                                          '), but no loader has been defined.'
                                                                  )
                                                              )
                                                    )
                                                if (n.isArray(i)) {
                                                    var l = []
                                                    n.forEach(i, function (e) {
                                                        var t = a.getModuleConfig(
                                                            e
                                                        )
                                                        null === t
                                                            ? l.push(e)
                                                            : t.files &&
                                                              (l = l.concat(
                                                                  t.files
                                                              ))
                                                    }),
                                                        l.length > 0 &&
                                                            (i = { files: l })
                                                } else n.isObject(i) && i.hasOwnProperty('name') && i.name && (a.setModuleConfig(i), x.push(i.name))
                                                if (
                                                    n.isDefined(i.files) &&
                                                    0 !== i.files.length
                                                ) {
                                                    if (
                                                        !n.isDefined(
                                                            a.filesLoader
                                                        )
                                                    )
                                                        return f(
                                                            new Error(
                                                                'Error: the module "' +
                                                                    i.name +
                                                                    '" is defined in external files (' +
                                                                    i.files +
                                                                    '), but no loader has been defined.'
                                                            )
                                                        )
                                                    s.push(
                                                        a
                                                            .filesLoader(i, t)
                                                            .then(function () {
                                                                return a._loadDependencies(
                                                                    i
                                                                )
                                                            })
                                                    )
                                                }
                                            }),
                                            l.all(s)
                                        )
                                    },
                                    inject: function (e) {
                                        var t =
                                                arguments.length <= 1 ||
                                                void 0 === arguments[1]
                                                    ? {}
                                                    : arguments[1],
                                            i =
                                                !(
                                                    arguments.length <= 2 ||
                                                    void 0 === arguments[2]
                                                ) && arguments[2],
                                            o = this,
                                            r = l.defer()
                                        if (n.isDefined(e) && null !== e) {
                                            if (n.isArray(e)) {
                                                var s = []
                                                return (
                                                    n.forEach(e, function (e) {
                                                        s.push(
                                                            o.inject(e, t, i)
                                                        )
                                                    }),
                                                    l.all(s)
                                                )
                                            }
                                            o._addToLoadList(
                                                o._getModuleName(e),
                                                !0,
                                                i
                                            )
                                        }
                                        if (a.length > 0) {
                                            var d = a.slice(),
                                                c = function e(n) {
                                                    x.push(n),
                                                        (C[n] = r.promise),
                                                        o
                                                            ._loadDependencies(
                                                                n,
                                                                t
                                                            )
                                                            .then(
                                                                function () {
                                                                    try {
                                                                        ;(u = []),
                                                                            N(
                                                                                w,
                                                                                x,
                                                                                t
                                                                            )
                                                                    } catch (e) {
                                                                        return (
                                                                            o._$log.error(
                                                                                e.message
                                                                            ),
                                                                            void r.reject(
                                                                                e
                                                                            )
                                                                        )
                                                                    }
                                                                    a.length > 0
                                                                        ? e(
                                                                              a.shift()
                                                                          )
                                                                        : r.resolve(
                                                                              d
                                                                          )
                                                                },
                                                                function (e) {
                                                                    r.reject(e)
                                                                }
                                                            )
                                                }
                                            c(a.shift())
                                        } else {
                                            if (t && t.name && C[t.name])
                                                return C[t.name]
                                            r.resolve()
                                        }
                                        return r.promise
                                    },
                                    getRequires: function (e) {
                                        var t = []
                                        return (
                                            n.forEach(e.requires, function (e) {
                                                ;-1 === o.indexOf(e) &&
                                                    t.push(e)
                                            }),
                                            t
                                        )
                                    },
                                    _invokeQueue: _,
                                    _registerInvokeList: T,
                                    _register: N,
                                    _addToLoadList: m,
                                    _unregister: function (e) {
                                        n.isDefined(e) &&
                                            n.isArray(e) &&
                                            n.forEach(e, function (e) {
                                                r[e] = void 0
                                            })
                                    },
                                }
                            )
                        },
                    ]),
                        this._init(n.element(i.document))
                },
            ])
            var h = n.bootstrap
            n.bootstrap = function (e, t, i) {
                return (
                    (o = ['ng', 'oc.lazyLoad']),
                    (r = {}),
                    (s = []),
                    (a = []),
                    (l = []),
                    (d = []),
                    (c = n.noop),
                    (p = {}),
                    (u = []),
                    n.forEach(t.slice(), function (e) {
                        m(e, !0, !0)
                    }),
                    h(e, t, i)
                )
            }
            var m = function (e, t, i) {
                    ;(d.length > 0 || t) &&
                        n.isString(e) &&
                        -1 === a.indexOf(e) &&
                        (a.push(e), i && l.push(e))
                },
                g = n.module
            ;(n.module = function (e, t, n) {
                return m(e, !1, !0), g(e, t, n)
            }),
                e.exports === t && (e.exports = 'oc.lazyLoad')
        })(angular, window),
            (function (e) {
                'use strict'
                e.module('oc.lazyLoad').directive('ocLazyLoad', [
                    '$ocLazyLoad',
                    '$compile',
                    '$animate',
                    '$parse',
                    '$timeout',
                    function (t, n, i, o, r) {
                        return {
                            restrict: 'A',
                            terminal: !0,
                            priority: 1e3,
                            compile: function (r, s) {
                                var a = r[0].innerHTML
                                return (
                                    r.html(''),
                                    function (r, s, l) {
                                        var d = o(l.ocLazyLoad)
                                        r.$watch(
                                            function () {
                                                return d(r) || l.ocLazyLoad
                                            },
                                            function (o) {
                                                e.isDefined(o) &&
                                                    t.load(o).then(function () {
                                                        i.enter(a, s),
                                                            n(s.contents())(r)
                                                    })
                                            },
                                            !0
                                        )
                                    }
                                )
                            },
                        }
                    },
                ])
            })(angular),
            (function (e) {
                'use strict'
                e.module('oc.lazyLoad').config([
                    '$provide',
                    function (t) {
                        t.decorator('$ocLazyLoad', [
                            '$delegate',
                            '$q',
                            '$window',
                            '$interval',
                            function (t, n, i, o) {
                                var r = !1,
                                    s =
                                        i.document.getElementsByTagName(
                                            'head'
                                        )[0] ||
                                        i.document.getElementsByTagName(
                                            'body'
                                        )[0]
                                return (
                                    (t.buildElement = function (a, l, d) {
                                        var c,
                                            p,
                                            u = n.defer(),
                                            h = t._getFilesCache(),
                                            m = function (e) {
                                                var t = new Date().getTime()
                                                return e.indexOf('?') >= 0
                                                    ? '&' ===
                                                      e.substring(
                                                          0,
                                                          e.length - 1
                                                      )
                                                        ? e + '_dc=' + t
                                                        : e + '&_dc=' + t
                                                    : e + '?_dc=' + t
                                            }
                                        switch (
                                            (e.isUndefined(h.get(l)) &&
                                                h.put(l, u.promise),
                                            a)
                                        ) {
                                            case 'css':
                                                ;((c = i.document.createElement(
                                                    'link'
                                                )).type = 'text/css'),
                                                    (c.rel = 'stylesheet'),
                                                    (c.href =
                                                        !1 === d.cache
                                                            ? m(l)
                                                            : l)
                                                break
                                            case 'js':
                                                ;(c = i.document.createElement(
                                                    'script'
                                                )).src =
                                                    !1 === d.cache ? m(l) : l
                                                break
                                            default:
                                                h.remove(l),
                                                    u.reject(
                                                        new Error(
                                                            'Requested type "' +
                                                                a +
                                                                '" is not known. Could not inject "' +
                                                                l +
                                                                '"'
                                                        )
                                                    )
                                        }
                                        ;(c.onload = c.onreadystatechange = function (
                                            e
                                        ) {
                                            ;(c.readyState &&
                                                !/^c|loade/.test(
                                                    c.readyState
                                                )) ||
                                                p ||
                                                ((c.onload = c.onreadystatechange = null),
                                                (p = 1),
                                                t._broadcast(
                                                    'ocLazyLoad.fileLoaded',
                                                    l
                                                ),
                                                u.resolve(c))
                                        }),
                                            (c.onerror = function () {
                                                h.remove(l),
                                                    u.reject(
                                                        new Error(
                                                            'Unable to load ' +
                                                                l
                                                        )
                                                    )
                                            }),
                                            (c.async = d.serie ? 0 : 1)
                                        var g = s.lastChild
                                        if (d.insertBefore) {
                                            var f = e.element(
                                                e.isDefined(window.jQuery)
                                                    ? d.insertBefore
                                                    : document.querySelector(
                                                          d.insertBefore
                                                      )
                                            )
                                            f && f.length > 0 && (g = f[0])
                                        }
                                        if (
                                            (g.parentNode.insertBefore(c, g),
                                            'css' == a)
                                        ) {
                                            var v = i.navigator.userAgent.toLowerCase()
                                            if (v.indexOf('phantomjs/1.9') > -1)
                                                r = !0
                                            else if (
                                                /iP(hone|od|ad)/.test(
                                                    i.navigator.platform
                                                )
                                            ) {
                                                var b = i.navigator.appVersion.match(
                                                        /OS (\d+)_(\d+)_?(\d+)?/
                                                    ),
                                                    E = parseFloat(
                                                        [
                                                            parseInt(b[1], 10),
                                                            parseInt(b[2], 10),
                                                            parseInt(
                                                                b[3] || 0,
                                                                10
                                                            ),
                                                        ].join('.')
                                                    )
                                                r = E < 6
                                            } else if (
                                                v.indexOf('android') > -1
                                            ) {
                                                var w = parseFloat(
                                                    v.slice(
                                                        v.indexOf('android') + 8
                                                    )
                                                )
                                                r = w < 4.4
                                            } else if (
                                                v.indexOf('safari') > -1
                                            ) {
                                                var y = v.match(
                                                    /version\/([\.\d]+)/i
                                                )
                                                r =
                                                    y &&
                                                    y[1] &&
                                                    parseFloat(y[1]) < 6
                                            }
                                            if (r)
                                                var S = 1e3,
                                                    x = o(function () {
                                                        try {
                                                            c.sheet.cssRules,
                                                                o.cancel(x),
                                                                c.onload()
                                                        } catch (e) {
                                                            --S <= 0 &&
                                                                c.onerror()
                                                        }
                                                    }, 20)
                                        }
                                        return u.promise
                                    }),
                                    t
                                )
                            },
                        ])
                    },
                ])
            })(angular),
            (function (e) {
                'use strict'
                e.module('oc.lazyLoad').config([
                    '$provide',
                    function (t) {
                        t.decorator('$ocLazyLoad', [
                            '$delegate',
                            '$q',
                            function (t, n) {
                                return (
                                    (t.filesLoader = function (i) {
                                        var o =
                                                arguments.length <= 1 ||
                                                void 0 === arguments[1]
                                                    ? {}
                                                    : arguments[1],
                                            r = [],
                                            s = [],
                                            a = [],
                                            l = [],
                                            d = null,
                                            c = t._getFilesCache()
                                        t.toggleWatch(!0), e.extend(o, i)
                                        var p = function (n) {
                                            var i,
                                                p = null
                                            if (
                                                (e.isObject(n) &&
                                                    ((p = n.type),
                                                    (n = n.path)),
                                                (d = c.get(n)),
                                                e.isUndefined(d) ||
                                                    !1 === o.cache)
                                            ) {
                                                if (
                                                    (null !==
                                                        (i = /^(css|less|html|htm|js)?(?=!)/.exec(
                                                            n
                                                        )) &&
                                                        ((p = i[1]),
                                                        (n = n.substr(
                                                            i[1].length + 1,
                                                            n.length
                                                        ))),
                                                    !p)
                                                )
                                                    if (
                                                        null !==
                                                        (i = /[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(
                                                            n
                                                        ))
                                                    )
                                                        p = i[1]
                                                    else {
                                                        if (
                                                            t.jsLoader.hasOwnProperty(
                                                                'ocLazyLoadLoader'
                                                            ) ||
                                                            !t.jsLoader.hasOwnProperty(
                                                                'requirejs'
                                                            )
                                                        )
                                                            return void t._$log.error(
                                                                'File type could not be determined. ' +
                                                                    n
                                                            )
                                                        p = 'js'
                                                    }
                                                ;('css' !== p &&
                                                    'less' !== p) ||
                                                -1 !== r.indexOf(n)
                                                    ? ('html' !== p &&
                                                          'htm' !== p) ||
                                                      -1 !== s.indexOf(n)
                                                        ? 'js' === p ||
                                                          -1 === a.indexOf(n)
                                                            ? a.push(n)
                                                            : t._$log.error(
                                                                  'File type is not valid. ' +
                                                                      n
                                                              )
                                                        : s.push(n)
                                                    : r.push(n)
                                            } else d && l.push(d)
                                        }
                                        if (
                                            (o.serie
                                                ? p(o.files.shift())
                                                : e.forEach(o.files, function (
                                                      e
                                                  ) {
                                                      p(e)
                                                  }),
                                            r.length > 0)
                                        ) {
                                            var u = n.defer()
                                            t.cssLoader(
                                                r,
                                                function (n) {
                                                    e.isDefined(n) &&
                                                    t.cssLoader.hasOwnProperty(
                                                        'ocLazyLoadLoader'
                                                    )
                                                        ? (t._$log.error(n),
                                                          u.reject(n))
                                                        : u.resolve()
                                                },
                                                o
                                            ),
                                                l.push(u.promise)
                                        }
                                        if (s.length > 0) {
                                            var h = n.defer()
                                            t.templatesLoader(
                                                s,
                                                function (n) {
                                                    e.isDefined(n) &&
                                                    t.templatesLoader.hasOwnProperty(
                                                        'ocLazyLoadLoader'
                                                    )
                                                        ? (t._$log.error(n),
                                                          h.reject(n))
                                                        : h.resolve()
                                                },
                                                o
                                            ),
                                                l.push(h.promise)
                                        }
                                        if (a.length > 0) {
                                            var m = n.defer()
                                            t.jsLoader(
                                                a,
                                                function (n) {
                                                    e.isDefined(n) &&
                                                    (t.jsLoader.hasOwnProperty(
                                                        'ocLazyLoadLoader'
                                                    ) ||
                                                        t.jsLoader.hasOwnProperty(
                                                            'requirejs'
                                                        ))
                                                        ? (t._$log.error(n),
                                                          m.reject(n))
                                                        : m.resolve()
                                                },
                                                o
                                            ),
                                                l.push(m.promise)
                                        }
                                        if (0 === l.length) {
                                            var g = n.defer(),
                                                f =
                                                    "Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'."
                                            return (
                                                t._$log.error(f),
                                                g.reject(f),
                                                g.promise
                                            )
                                        }
                                        return o.serie && o.files.length > 0
                                            ? n.all(l).then(function () {
                                                  return t.filesLoader(i, o)
                                              })
                                            : n.all(l).finally(function (e) {
                                                  return t.toggleWatch(!1), e
                                              })
                                    }),
                                    (t.load = function (i) {
                                        var o,
                                            r =
                                                arguments.length <= 1 ||
                                                void 0 === arguments[1]
                                                    ? {}
                                                    : arguments[1],
                                            s = this,
                                            a = null,
                                            l = [],
                                            d = n.defer(),
                                            c = e.copy(i),
                                            p = e.copy(r)
                                        if (e.isArray(c))
                                            return (
                                                e.forEach(c, function (e) {
                                                    l.push(s.load(e, p))
                                                }),
                                                n.all(l).then(
                                                    function (e) {
                                                        d.resolve(e)
                                                    },
                                                    function (e) {
                                                        d.reject(e)
                                                    }
                                                ),
                                                d.promise
                                            )
                                        if (
                                            (e.isString(c)
                                                ? (a = s.getModuleConfig(c)) ||
                                                  (a = { files: [c] })
                                                : e.isObject(c) &&
                                                  (a =
                                                      e.isDefined(c.path) &&
                                                      e.isDefined(c.type)
                                                          ? { files: [c] }
                                                          : s.setModuleConfig(
                                                                c
                                                            )),
                                            null === a)
                                        ) {
                                            var u = s._getModuleName(c)
                                            return (
                                                (o =
                                                    'Module "' +
                                                    (u || 'unknown') +
                                                    '" is not configured, cannot load.'),
                                                t._$log.error(o),
                                                d.reject(new Error(o)),
                                                d.promise
                                            )
                                        }
                                        e.isDefined(a.template) &&
                                            (e.isUndefined(a.files) &&
                                                (a.files = []),
                                            e.isString(a.template)
                                                ? a.files.push(a.template)
                                                : e.isArray(a.template) &&
                                                  a.files.concat(a.template))
                                        var h = e.extend({}, p, a)
                                        return e.isUndefined(a.files) &&
                                            e.isDefined(a.name) &&
                                            t.moduleExists(a.name)
                                            ? t.inject(a.name, h, !0)
                                            : (t.filesLoader(a, h).then(
                                                  function () {
                                                      t.inject(null, h).then(
                                                          function (e) {
                                                              d.resolve(e)
                                                          },
                                                          function (e) {
                                                              d.reject(e)
                                                          }
                                                      )
                                                  },
                                                  function (e) {
                                                      d.reject(e)
                                                  }
                                              ),
                                              d.promise)
                                    }),
                                    t
                                )
                            },
                        ])
                    },
                ])
            })(angular),
            (function (e) {
                'use strict'
                e.module('oc.lazyLoad').config([
                    '$provide',
                    function (t) {
                        t.decorator('$ocLazyLoad', [
                            '$delegate',
                            '$q',
                            function (t, n) {
                                return (
                                    (t.cssLoader = function (i, o, r) {
                                        var s = []
                                        e.forEach(i, function (e) {
                                            s.push(t.buildElement('css', e, r))
                                        }),
                                            n.all(s).then(
                                                function () {
                                                    o()
                                                },
                                                function (e) {
                                                    o(e)
                                                }
                                            )
                                    }),
                                    (t.cssLoader.ocLazyLoadLoader = !0),
                                    t
                                )
                            },
                        ])
                    },
                ])
            })(angular),
            (function (e) {
                'use strict'
                e.module('oc.lazyLoad').config([
                    '$provide',
                    function (t) {
                        t.decorator('$ocLazyLoad', [
                            '$delegate',
                            '$q',
                            function (t, n) {
                                return (
                                    (t.jsLoader = function (i, o, r) {
                                        var s = []
                                        e.forEach(i, function (e) {
                                            s.push(t.buildElement('js', e, r))
                                        }),
                                            n.all(s).then(
                                                function () {
                                                    o()
                                                },
                                                function (e) {
                                                    o(e)
                                                }
                                            )
                                    }),
                                    (t.jsLoader.ocLazyLoadLoader = !0),
                                    t
                                )
                            },
                        ])
                    },
                ])
            })(angular),
            (function (e) {
                'use strict'
                e.module('oc.lazyLoad').config([
                    '$provide',
                    function (t) {
                        t.decorator('$ocLazyLoad', [
                            '$delegate',
                            '$templateCache',
                            '$q',
                            '$http',
                            function (t, n, i, o) {
                                return (
                                    (t.templatesLoader = function (r, s, a) {
                                        var l = [],
                                            d = t._getFilesCache()
                                        return (
                                            e.forEach(r, function (t) {
                                                var r = i.defer()
                                                l.push(r.promise),
                                                    o
                                                        .get(t, a)
                                                        .then(function (i) {
                                                            var o = i.data
                                                            e.isString(o) &&
                                                                o.length > 0 &&
                                                                e.forEach(
                                                                    e.element(
                                                                        o
                                                                    ),
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        'SCRIPT' ===
                                                                            e.nodeName &&
                                                                            'text/ng-template' ===
                                                                                e.type &&
                                                                            n.put(
                                                                                e.id,
                                                                                e.innerHTML
                                                                            )
                                                                    }
                                                                ),
                                                                e.isUndefined(
                                                                    d.get(t)
                                                                ) &&
                                                                    d.put(
                                                                        t,
                                                                        !0
                                                                    ),
                                                                r.resolve()
                                                        })
                                                        .catch(function (e) {
                                                            r.reject(
                                                                new Error(
                                                                    'Unable to load template file "' +
                                                                        t +
                                                                        '": ' +
                                                                        e.data
                                                                )
                                                            )
                                                        })
                                            }),
                                            i.all(l).then(
                                                function () {
                                                    s()
                                                },
                                                function (e) {
                                                    s(e)
                                                }
                                            )
                                        )
                                    }),
                                    (t.templatesLoader.ocLazyLoadLoader = !0),
                                    t
                                )
                            },
                        ])
                    },
                ])
            })(angular),
            Array.prototype.indexOf ||
                (Array.prototype.indexOf = function (e, t) {
                    var n
                    if (null == this)
                        throw new TypeError('"this" is null or not defined')
                    var i = Object(this),
                        o = i.length >>> 0
                    if (0 === o) return -1
                    var r = +t || 0
                    if ((Math.abs(r) === 1 / 0 && (r = 0), r >= o)) return -1
                    for (
                        n = Math.max(r >= 0 ? r : o - Math.abs(r), 0);
                        n < o;

                    ) {
                        if (n in i && i[n] === e) return n
                        n++
                    }
                    return -1
                })
    },
    function (e, t) {
        /**
         * @license AngularJS v1.6.10
         * (c) 2010-2018 Google, Inc. http://angularjs.org
         * License: MIT
         */
        !(function (e, t) {
            'use strict'
            var n,
                i,
                o,
                r,
                s,
                a,
                l,
                d,
                c,
                p,
                u = t.$$minErr('$sanitize')
            t
                .module('ngSanitize', [])
                .provider('$sanitize', function () {
                    var h = !1,
                        m = !1
                    ;(this.$get = [
                        '$$sanitizeUri',
                        function (e) {
                            return (
                                (h = !0),
                                m && i(L, x),
                                function (t) {
                                    var n = []
                                    return (
                                        c(
                                            t,
                                            p(n, function (t, n) {
                                                return !/^unsafe:/.test(e(t, n))
                                            })
                                        ),
                                        n.join('')
                                    )
                                }
                            )
                        },
                    ]),
                        (this.enableSvg = function (e) {
                            return s(e) ? ((m = e), this) : m
                        }),
                        (this.addValidElements = function (e) {
                            return (
                                h ||
                                    (r(e) && (e = { htmlElements: e }),
                                    O(x, e.svgElements),
                                    O(v, e.htmlVoidElements),
                                    O(L, e.htmlVoidElements),
                                    O(L, e.htmlElements)),
                                this
                            )
                        }),
                        (this.addValidAttrs = function (e) {
                            return h || i(_, I(e, !0)), this
                        }),
                        (n = t.bind),
                        (i = t.extend),
                        (o = t.forEach),
                        (r = t.isArray),
                        (s = t.isDefined),
                        (a = t.lowercase),
                        (l = t.noop),
                        (c = function (e, t) {
                            null == e
                                ? (e = '')
                                : 'string' != typeof e && (e = '' + e)
                            var n = R(e)
                            if (!n) return ''
                            var i = 5
                            do {
                                if (0 === i)
                                    throw u(
                                        'uinput',
                                        'Failed to sanitize html because the input is unstable'
                                    )
                                i--, (e = n.innerHTML), (n = R(e))
                            } while (e !== n.innerHTML)
                            var o = n.firstChild
                            for (; o; ) {
                                switch (o.nodeType) {
                                    case 1:
                                        t.start(
                                            o.nodeName.toLowerCase(),
                                            k(o.attributes)
                                        )
                                        break
                                    case 3:
                                        t.chars(o.textContent)
                                }
                                var r
                                if (
                                    !(
                                        (r = o.firstChild) ||
                                        (1 === o.nodeType &&
                                            t.end(o.nodeName.toLowerCase()),
                                        (r = F('nextSibling', o)))
                                    )
                                )
                                    for (
                                        ;
                                        null == r &&
                                        (o = F('parentNode', o)) !== n;

                                    )
                                        (r = F('nextSibling', o)),
                                            1 === o.nodeType &&
                                                t.end(o.nodeName.toLowerCase())
                                o = r
                            }
                            for (; (o = n.firstChild); ) n.removeChild(o)
                        }),
                        (p = function (e, t) {
                            var i = !1,
                                r = n(e, e.push)
                            return {
                                start: function (e, n) {
                                    ;(e = a(e)),
                                        !i && C[e] && (i = e),
                                        i ||
                                            !0 !== L[e] ||
                                            (r('<'),
                                            r(e),
                                            o(n, function (n, i) {
                                                var o = a(i),
                                                    s =
                                                        ('img' === e &&
                                                            'src' === o) ||
                                                        'background' === o
                                                !0 !== _[o] ||
                                                    (!0 === $[o] && !t(n, s)) ||
                                                    (r(' '),
                                                    r(i),
                                                    r('="'),
                                                    r(D(n)),
                                                    r('"'))
                                            }),
                                            r('>'))
                                },
                                end: function (e) {
                                    ;(e = a(e)),
                                        i ||
                                            !0 !== L[e] ||
                                            !0 === v[e] ||
                                            (r('</'), r(e), r('>')),
                                        e == i && (i = !1)
                                },
                                chars: function (e) {
                                    i || r(D(e))
                                },
                            }
                        }),
                        (d =
                            e.Node.prototype.contains ||
                            function (e) {
                                return !!(16 & this.compareDocumentPosition(e))
                            })
                    var g = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                        f = /([^#-~ |!])/g,
                        v = A('area,br,col,hr,img,wbr'),
                        b = A('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
                        E = A('rp,rt'),
                        w = i({}, E, b),
                        y = i(
                            {},
                            b,
                            A(
                                'address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul'
                            )
                        ),
                        S = i(
                            {},
                            E,
                            A(
                                'a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var'
                            )
                        ),
                        x = A(
                            'circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan'
                        ),
                        C = A('script,style'),
                        L = i({}, v, y, S, w),
                        $ = A(
                            'background,cite,href,longdesc,src,xlink:href,xml:base'
                        ),
                        N = A(
                            'abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width'
                        ),
                        T = A(
                            'accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan',
                            !0
                        ),
                        _ = i({}, $, T, N)
                    function A(e, t) {
                        return I(e.split(','), t)
                    }
                    function I(e, t) {
                        var n,
                            i = {}
                        for (n = 0; n < e.length; n++)
                            i[t ? a(e[n]) : e[n]] = !0
                        return i
                    }
                    function O(e, t) {
                        t && t.length && i(e, I(t))
                    }
                    var R = (function (e, t) {
                        var n
                        if (!t || !t.implementation)
                            throw u(
                                'noinert',
                                "Can't create an inert html document"
                            )
                        var i = (
                            (n = t.implementation.createHTMLDocument('inert'))
                                .documentElement || n.getDocumentElement()
                        ).querySelector('body')
                        return (
                            (i.innerHTML =
                                '<svg><g onload="this.parentNode.remove()"></g></svg>'),
                            i.querySelector('svg')
                                ? ((i.innerHTML =
                                      '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                                  i.querySelector('svg img')
                                      ? function (t) {
                                            t = '<remove></remove>' + t
                                            try {
                                                var n = new e.DOMParser().parseFromString(
                                                    t,
                                                    'text/html'
                                                ).body
                                                return n.firstChild.remove(), n
                                            } catch (e) {
                                                return
                                            }
                                        }
                                      : function (e) {
                                            ;(i.innerHTML = e),
                                                t.documentMode && P(i)
                                            return i
                                        })
                                : function (t) {
                                      t = '<remove></remove>' + t
                                      try {
                                          t = encodeURI(t)
                                      } catch (e) {
                                          return
                                      }
                                      var n = new e.XMLHttpRequest()
                                      ;(n.responseType = 'document'),
                                          n.open(
                                              'GET',
                                              'data:text/html;charset=utf-8,' +
                                                  t,
                                              !1
                                          ),
                                          n.send(null)
                                      var i = n.response.body
                                      return i.firstChild.remove(), i
                                  }
                        )
                    })(e, e.document)
                    function k(e) {
                        for (var t = {}, n = 0, i = e.length; n < i; n++) {
                            var o = e[n]
                            t[o.name] = o.value
                        }
                        return t
                    }
                    function D(e) {
                        return e
                            .replace(/&/g, '&amp;')
                            .replace(g, function (e) {
                                return (
                                    '&#' +
                                    (1024 * (e.charCodeAt(0) - 55296) +
                                        (e.charCodeAt(1) - 56320) +
                                        65536) +
                                    ';'
                                )
                            })
                            .replace(f, function (e) {
                                return '&#' + e.charCodeAt(0) + ';'
                            })
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                    }
                    function P(t) {
                        for (; t; ) {
                            if (t.nodeType === e.Node.ELEMENT_NODE)
                                for (
                                    var n = t.attributes, i = 0, o = n.length;
                                    i < o;
                                    i++
                                ) {
                                    var r = n[i],
                                        s = r.name.toLowerCase()
                                    ;('xmlns:ns1' !== s &&
                                        0 !== s.lastIndexOf('ns1:', 0)) ||
                                        (t.removeAttributeNode(r), i--, o--)
                                }
                            var a = t.firstChild
                            a && P(a), (t = F('nextSibling', t))
                        }
                    }
                    function F(e, t) {
                        var n = t[e]
                        if (n && d.call(t, n))
                            throw u(
                                'elclob',
                                'Failed to sanitize html because the element is clobbered: {0}',
                                t.outerHTML || t.outerText
                            )
                        return n
                    }
                })
                .info({ angularVersion: '1.6.10' }),
                t.module('ngSanitize').filter('linky', [
                    '$sanitize',
                    function (e) {
                        var n = /((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
                            i = /^mailto:/i,
                            o = t.$$minErr('linky'),
                            r = t.isDefined,
                            s = t.isFunction,
                            a = t.isObject,
                            d = t.isString
                        return function (t, c, u) {
                            if (null == t || '' === t) return t
                            if (!d(t))
                                throw o(
                                    'notstring',
                                    'Expected string but received: {0}',
                                    t
                                )
                            for (
                                var h,
                                    m,
                                    g,
                                    f = s(u)
                                        ? u
                                        : a(u)
                                        ? function () {
                                              return u
                                          }
                                        : function () {
                                              return {}
                                          },
                                    v = t,
                                    b = [];
                                (h = v.match(n));

                            )
                                (m = h[0]),
                                    h[2] ||
                                        h[4] ||
                                        (m =
                                            (h[3] ? 'http://' : 'mailto:') + m),
                                    (g = h.index),
                                    E(v.substr(0, g)),
                                    w(m, h[0].replace(i, '')),
                                    (v = v.substring(g + h[0].length))
                            return E(v), e(b.join(''))
                            function E(e) {
                                var t, n
                                e &&
                                    b.push(
                                        ((t = e),
                                        p((n = []), l).chars(t),
                                        n.join(''))
                                    )
                            }
                            function w(e, t) {
                                var n,
                                    i = f(e)
                                for (n in (b.push('<a '), i))
                                    b.push(n + '="' + i[n] + '" ')
                                !r(c) ||
                                    'target' in i ||
                                    b.push('target="', c, '" '),
                                    b.push(
                                        'href="',
                                        e.replace(/"/g, '&quot;'),
                                        '">'
                                    ),
                                    E(t),
                                    b.push('</a>')
                            }
                        }
                    },
                ])
        })(window, window.angular)
    },
    function (e, t, n) {
        var i = n(281)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            '.recent-projects .headline .actions .create-new {\n  min-width: 84px; }\n\n.recent-projects .headline .actions .md-menu .md-button {\n  padding: 0 6px;\n  margin-left: 0;\n  min-width: 0; }\n',
            '',
        ])
    },
    ,
    function (e, t, n) {
        var i = n(284)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\nproject-list-item {\n  /* Now that text select has been disabled globally, use this to enable\n  text select for some elements . Ideally these elements should be the ones\n  we think user might want to select and copy paste */\n  user-select: auto;\n  display: flex;\n  flex: 1;\n  border-top: solid 1px #CFCFCF; }\n  project-list-item .warn-unavailable {\n    color: #f7931e;\n    font-size: 16px;\n    height: 16px;\n    min-height: 16px; }\n  project-list-item .cell {\n    padding-left: 16px;\n    display: flex;\n    height: 75px;\n    align-items: center; }\n    project-list-item .cell:focus {\n      outline: none; }\n    project-list-item .cell .md-caption {\n      line-height: 20px; }\n    project-list-item .cell .title {\n      font-weight: bold; }\n    project-list-item .cell .collab-icon {\n      font-size: 12px;\n      height: 13px;\n      width: 12px;\n      min-width: 12px;\n      padding-top: 7px; }\n  project-list-item .action {\n    padding-right: 20px;\n    min-width: 54px; }\n    project-list-item .action .icon-action {\n      cursor: pointer;\n      user-select: none; }\n    project-list-item .action md-icon {\n      color: #CFCFCF; }\n      project-list-item .action md-icon:hover {\n        color: rgba(0, 0, 0, 0.87); }\n    project-list-item .action .warning-icon {\n      height: 18px;\n      width: 18px;\n      min-width: 18px;\n      min-height: 18px;\n      border-radius: 0;\n      font-size: 18px;\n      color: #e88314; }\n  project-list-item .action {\n    padding-right: 20px; }\n  project-list-item md-select {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0;\n    min-height: 62px; }\n    project-list-item md-select .md-select-value {\n      min-height: 0; }\n    project-list-item md-select .md-select-icon {\n      color: #CFCFCF; }\n    project-list-item md-select:hover .md-select-icon {\n      color: rgba(0, 0, 0, 0.87); }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(286)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            'md-toast .ico-error {\n  color: #F99200; }\n\nmd-toast .ico-done {\n  color: #8EBF35; }\n',
            '',
        ])
    },
    function (e, t) {
        var n,
            i,
            o = (e.exports = {})
        function r() {
            throw new Error('setTimeout has not been defined')
        }
        function s() {
            throw new Error('clearTimeout has not been defined')
        }
        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0)
            if ((n === r || !n) && setTimeout)
                return (n = setTimeout), setTimeout(e, 0)
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !(function () {
            try {
                n = 'function' == typeof setTimeout ? setTimeout : r
            } catch (e) {
                n = r
            }
            try {
                i = 'function' == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                i = s
            }
        })()
        var l,
            d = [],
            c = !1,
            p = -1
        function u() {
            c &&
                l &&
                ((c = !1),
                l.length ? (d = l.concat(d)) : (p = -1),
                d.length && h())
        }
        function h() {
            if (!c) {
                var e = a(u)
                c = !0
                for (var t = d.length; t; ) {
                    for (l = d, d = []; ++p < t; ) l && l[p].run()
                    ;(p = -1), (t = d.length)
                }
                ;(l = null),
                    (c = !1),
                    (function (e) {
                        if (i === clearTimeout) return clearTimeout(e)
                        if ((i === s || !i) && clearTimeout)
                            return (i = clearTimeout), clearTimeout(e)
                        try {
                            i(e)
                        } catch (t) {
                            try {
                                return i.call(null, e)
                            } catch (t) {
                                return i.call(this, e)
                            }
                        }
                    })(e)
            }
        }
        function m(e, t) {
            ;(this.fun = e), (this.array = t)
        }
        function g() {}
        ;(o.nextTick = function (e) {
            var t = new Array(arguments.length - 1)
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n]
            d.push(new m(e, t)), 1 !== d.length || c || a(h)
        }),
            (m.prototype.run = function () {
                this.fun.apply(null, this.array)
            }),
            (o.title = 'browser'),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ''),
            (o.versions = {}),
            (o.on = g),
            (o.addListener = g),
            (o.once = g),
            (o.off = g),
            (o.removeListener = g),
            (o.removeAllListeners = g),
            (o.emit = g),
            (o.prependListener = g),
            (o.prependOnceListener = g),
            (o.listeners = function (e) {
                return []
            }),
            (o.binding = function (e) {
                throw new Error('process.binding is not supported')
            }),
            (o.cwd = function () {
                return '/'
            }),
            (o.chdir = function (e) {
                throw new Error('process.chdir is not supported')
            }),
            (o.umask = function () {
                return 0
            })
    },
    function (e, t, n) {
        var i = n(289)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\n.advanced-settings-dialog {\n  width: 640px;\n  height: 460px;\n  margin-bottom: 0; }\n  .advanced-settings-dialog md-toolbar {\n    min-height: 52px; }\n    .advanced-settings-dialog md-toolbar .md-toolbar-tools {\n      height: 52px; }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(291)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            '.bottom-text {\n  margin-top: 90px; }\n',
            '',
        ])
    },
    function (e, t, n) {
        var i = n(293)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\nproject-list {\n  padding-bottom: 1rem; }\n  project-list .debug-mode {\n    border: 2px solid #E78718; }\n  project-list md-card {\n    margin: 0; }\n  project-list .project-list-head {\n    flex: 1 0 auto;\n    min-height: 64px; }\n    project-list .project-list-head .filter-input {\n      margin: 0;\n      flex: 1;\n      padding-left: 16px; }\n    project-list .project-list-head .col-titles {\n      font-size: 12px; }\n      project-list .project-list-head .col-titles .sort-column {\n        font-weight: 500; }\n      project-list .project-list-head .col-titles div:focus {\n        outline: none; }\n      project-list .project-list-head .col-titles div:hover {\n        cursor: pointer; }\n      project-list .project-list-head .col-titles .sort-button {\n        margin: 0;\n        padding: 0;\n        min-height: 18px;\n        height: 18px;\n        width: 26px;\n        line-height: 18px;\n        background-color: transparent; }\n        project-list .project-list-head .col-titles .sort-button md-icon {\n          width: 18px;\n          height: 18px;\n          margin-right: 0;\n          min-width: 18px;\n          min-height: 18px;\n          font-size: 18px;\n          transition: transform 300ms ease-in; }\n        project-list .project-list-head .col-titles .sort-button md-icon.ascending {\n          transform: rotateZ(-180deg); }\n  project-list .project-list-container {\n    overflow: hidden; }\n    project-list .project-list-container:hover {\n      overflow-y: overlay; }\n    project-list .project-list-container::-webkit-scrollbar {\n      background: #ffffff;\n      width: 16px; }\n    project-list .project-list-container::-webkit-scrollbar-track {\n      background: #ffffff; }\n      project-list .project-list-container::-webkit-scrollbar-track:hover {\n        background-color: #F2F3F4; }\n    project-list .project-list-container::-webkit-scrollbar-thumb {\n      background-color: #BABABA;\n      border-radius: 16px;\n      border: 5px solid #ffffff; }\n      project-list .project-list-container::-webkit-scrollbar-thumb:hover {\n        background-color: #747576;\n        border-color: #F2F3F4; }\n    project-list .project-list-container::-webkit-scrollbar-button {\n      display: none; }\n  project-list .project-list-head .col-titles {\n    display: flex;\n    flex-direction: row;\n    flex: auto; }\n    project-list .project-list-head .col-titles div {\n      margin-left: 16px; }\n  project-list .project-col-wide {\n    flex: 1;\n    min-width: 200px;\n    line-height: 22px; }\n    project-list .project-col-wide div {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  project-list .project-col-medium {\n    flex: 0;\n    min-width: 140px; }\n  project-list .project-col-small {\n    flex: 0;\n    min-width: 100px; }\n  project-list .project-list-row {\n    flex: 1 0 auto; }\n    project-list .project-list-row:hover {\n      background-color: #F5F5F5; }\n    project-list .project-list-row.scroll-highlight {\n      animation: scroll-highlight 2000ms ease-out; }\n\n@keyframes scroll-highlight {\n  0% {\n    box-shadow: inset 0px 1px 0px 2px rgba(0, 0, 0, 0), inset 0px 0px 0px 2px rgba(0, 0, 0, 0); }\n  50% {\n    box-shadow: inset 0px 1px 0px 2px #2196f3, inset 0px 0px 0px 2px #2196f3; }\n  100% {\n    box-shadow: inset 0px 1px 0px 2px rgba(0, 0, 0, 0), inset 0px 0px 0px 2px rgba(0, 0, 0, 0); } }\n    project-list .project-list-row .local:hover {\n      cursor: pointer; }\n    project-list .project-list-row .remote {\n      color: #CFCFCF; }\n      project-list .project-list-row .remote md-icon.collab-icon {\n        color: #CFCFCF; }\n    project-list .project-list-row project-list-item:focus {\n      outline: none; }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(295)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            '.learn-page md-list {\n  box-shadow: 0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.2), 0 0.0625rem 0.0625rem 0 rgba(0, 0, 0, 0.14), 0 0.125rem 0.0625rem -0.0625rem rgba(0, 0, 0, 0.12);\n  margin: 1rem;\n  padding: 0; }\n\n.learn-page .remove-margin {\n  margin-bottom: 0.5rem; }\n\n.learn-page .learn-item {\n  background-color: white; }\n  .learn-page .learn-item .learn-item-img {\n    width: 3.5rem;\n    height: 3.5rem;\n    margin: 1rem 1rem 1rem 0;\n    border-radius: 0.1875rem;\n    object-fit: cover; }\n  .learn-page .learn-item .shift {\n    margin-bottom: 0.7rem; }\n  .learn-page .learn-item .md-list-item-inner .md-list-item-text {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 1.5rem; }\n    .learn-page .learn-item .md-list-item-inner .md-list-item-text .learn-item-title {\n      font-weight: 500;\n      font-size: 0.875rem;\n      line-height: 1.5; }\n    .learn-page .learn-item .md-list-item-inner .md-list-item-text .learn-item-desc {\n      font-size: 0.75rem;\n      line-height: 1.5; }\n    .learn-page .learn-item .md-list-item-inner .md-list-item-text .learn-item-downloaded {\n      display: flex;\n      align-items: center; }\n      .learn-page .learn-item .md-list-item-inner .md-list-item-text .learn-item-downloaded .learn-item-downloaded-icon {\n        font-size: 1rem;\n        margin-right: 0.25rem; }\n',
            '',
        ])
    },
    function (e, t, n) {
        var i = n(297)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            '.learn-top-container {\n  padding: 1rem 0 0.5rem 0;\n  margin: 0 0.5rem;\n  display: flex; }\n  .learn-top-container .learn-top-items {\n    min-width: 0;\n    /* This allows a child of the flex child to have ellipses */\n    flex: 33%; }\n    .learn-top-container .learn-top-items .learn-top-item-hover .md-button {\n      padding: 0 !important;\n      line-height: normal;\n      width: 100%;\n      overflow: visible; }\n    .learn-top-container .learn-top-items .learn-top-item-hover md-card {\n      margin: 0.0625rem;\n      width: 100%; }\n    .learn-top-container .learn-top-items .learn-top-item {\n      margin: 0 0.5rem; }\n      .learn-top-container .learn-top-items .learn-top-item .learn-top-item-img {\n        background-size: cover;\n        background-position: center center;\n        width: 100%;\n        height: 14vw;\n        object-fit: cover; }\n      .learn-top-container .learn-top-items .learn-top-item .learn-top-item-text {\n        margin: 1rem;\n        height: 3.4rem; }\n        .learn-top-container .learn-top-items .learn-top-item .learn-top-item-text.shift {\n          height: 3.1rem; }\n        .learn-top-container .learn-top-items .learn-top-item .learn-top-item-text .learn-top-item-title {\n          font-size: 0.875rem;\n          font-weight: 600;\n          line-height: 1.5;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          white-space: nowrap;\n          margin: 0; }\n        .learn-top-container .learn-top-items .learn-top-item .learn-top-item-text .learn-top-item-desc {\n          font-size: 0.75rem;\n          font-weight: 500;\n          margin: 0;\n          line-height: 1.5;\n          color: rgba(0, 0, 0, 0.54); }\n        .learn-top-container .learn-top-items .learn-top-item .learn-top-item-text .learn-top-item-downloaded {\n          margin-top: 0.15rem;\n          display: flex;\n          align-items: center; }\n          .learn-top-container .learn-top-items .learn-top-item .learn-top-item-text .learn-top-item-downloaded .learn-top-item-downloaded-icon {\n            font-size: 1rem;\n            margin-right: 0.25rem; }\n',
            '',
        ])
    },
    function (e, t, n) {
        var i = n(299)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\n.learn-dialog,\n.learn-dialog > form {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden; }\n\n.learn-dialog-scrollable-area {\n  overflow-y: scroll; }\n  .learn-dialog-scrollable-area::-webkit-scrollbar {\n    width: 1rem; }\n  .learn-dialog-scrollable-area::-webkit-scrollbar-thumb {\n    background-color: #C3C3C3;\n    border: 5px solid transparent;\n    border-radius: 11px;\n    background-clip: content-box; }\n  .learn-dialog-scrollable-area::-webkit-scrollbar-thumb:hover {\n    background-color: #7D7D7D; }\n  .learn-dialog-scrollable-area .learn-dialog-content {\n    width: 31.25rem;\n    padding-right: 0.5rem; }\n    .learn-dialog-scrollable-area .learn-dialog-content .learn-dialog-content-img {\n      width: 100%;\n      max-height: 30vh;\n      object-fit: cover; }\n    .learn-dialog-scrollable-area .learn-dialog-content .learn-dialog-content-info {\n      display: flex;\n      justify-content: space-between;\n      color: rgba(0, 0, 0, 0.54);\n      margin: 1rem 0;\n      font-weight: 600; }\n      .learn-dialog-scrollable-area .learn-dialog-content .learn-dialog-content-info .learn-dialog-downloaded {\n        display: flex;\n        align-items: center; }\n        .learn-dialog-scrollable-area .learn-dialog-content .learn-dialog-content-info .learn-dialog-downloaded .learn-dialog-downloaded-icon {\n          font-size: 1rem;\n          margin-right: 0.25rem; }\n    .learn-dialog-scrollable-area .learn-dialog-content p {\n      line-height: 1.5;\n      margin: 0; }\n\n.learn-dialog-actions {\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  padding-top: 0.625rem;\n  max-height: 3rem; }\n\n.learn-dialog-progress-bar {\n  position: absolute;\n  bottom: 4.125rem; }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(301)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\n.item-container.loading img.icon, .item-container.loading .description {\n  opacity: .5; }\n\n.main-layout .main-content > learn {\n  padding-bottom: 0; }\n\n.learn-page {\n  overflow: hidden;\n  margin: 0 -1rem;\n  padding-right: 0.5rem; }\n  .learn-page:hover {\n    overflow-y: overlay; }\n  .learn-page::-webkit-scrollbar {\n    background: #F2F3F4;\n    width: 16px; }\n  .learn-page::-webkit-scrollbar-track {\n    background: #F2F3F4; }\n    .learn-page::-webkit-scrollbar-track:hover {\n      background-color: #F2F3F4; }\n  .learn-page::-webkit-scrollbar-thumb {\n    background-color: #BABABA;\n    border-radius: 16px;\n    border: 5px solid #F2F3F4; }\n    .learn-page::-webkit-scrollbar-thumb:hover {\n      background-color: #747576;\n      border-color: #F2F3F4; }\n  .learn-page::-webkit-scrollbar-button {\n    display: none; }\n\n.learn-nav-bar {\n  position: relative; }\n  .learn-nav-bar .md-nav-item:first-of-type {\n    margin-left: 0; }\n  .learn-nav-bar .learn-url {\n    font-size: 0.75rem;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.54);\n    position: absolute;\n    right: 0;\n    bottom: 1rem;\n    text-align: right; }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(303)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(t = e.exports = n(3)(!1)).push([
            e.i,
            '@import url(https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,500,700&subset=chinese-simplified);',
            '',
        ]),
            t.push([
                e.i,
                '.main-container .loading-wrap {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: center; }\n\n.main-container .loading-wrap * {\n  font-family: "Noto Sans SC", sans-serif; }\n\n.main-container .loading-img {\n  display: flex;\n  align-items: center;\n  border: none; }\n\n.main-container .loading-img img {\n  width: 24px;\n  height: auto;\n  animation-duration: 1s;\n  animation-timing-function: linear;\n  animation-name: animate-loading;\n  animation-iteration-count: infinite; }\n\n@keyframes animate-loading {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n.main-container .loading-text {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  margin-left: 8px; }\n',
                '',
            ])
    },
    function (e, t, n) {
        'use strict'
        ;(function (e) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            var i = n(305),
                o = n(306),
                r = n(307)
            function s() {
                return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function a(e, t) {
                if (s() < t) throw new RangeError('Invalid typed array length')
                return (
                    l.TYPED_ARRAY_SUPPORT
                        ? ((e = new Uint8Array(t)).__proto__ = l.prototype)
                        : (null === e && (e = new l(t)), (e.length = t)),
                    e
                )
            }
            function l(e, t, n) {
                if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
                    return new l(e, t, n)
                if ('number' == typeof e) {
                    if ('string' == typeof t)
                        throw new Error(
                            'If encoding is specified then the first argument must be a string'
                        )
                    return p(this, e)
                }
                return d(this, e, t, n)
            }
            function d(e, t, n, i) {
                if ('number' == typeof t)
                    throw new TypeError('"value" argument must not be a number')
                return 'undefined' != typeof ArrayBuffer &&
                    t instanceof ArrayBuffer
                    ? (function (e, t, n, i) {
                          if ((t.byteLength, n < 0 || t.byteLength < n))
                              throw new RangeError("'offset' is out of bounds")
                          if (t.byteLength < n + (i || 0))
                              throw new RangeError("'length' is out of bounds")
                          t =
                              void 0 === n && void 0 === i
                                  ? new Uint8Array(t)
                                  : void 0 === i
                                  ? new Uint8Array(t, n)
                                  : new Uint8Array(t, n, i)
                          l.TYPED_ARRAY_SUPPORT
                              ? ((e = t).__proto__ = l.prototype)
                              : (e = u(e, t))
                          return e
                      })(e, t, n, i)
                    : 'string' == typeof t
                    ? (function (e, t, n) {
                          ;('string' == typeof n && '' !== n) || (n = 'utf8')
                          if (!l.isEncoding(n))
                              throw new TypeError(
                                  '"encoding" must be a valid string encoding'
                              )
                          var i = 0 | m(t, n),
                              o = (e = a(e, i)).write(t, n)
                          o !== i && (e = e.slice(0, o))
                          return e
                      })(e, t, n)
                    : (function (e, t) {
                          if (l.isBuffer(t)) {
                              var n = 0 | h(t.length)
                              return 0 === (e = a(e, n)).length
                                  ? e
                                  : (t.copy(e, 0, 0, n), e)
                          }
                          if (t) {
                              if (
                                  ('undefined' != typeof ArrayBuffer &&
                                      t.buffer instanceof ArrayBuffer) ||
                                  'length' in t
                              )
                                  return 'number' != typeof t.length ||
                                      (i = t.length) != i
                                      ? a(e, 0)
                                      : u(e, t)
                              if ('Buffer' === t.type && r(t.data))
                                  return u(e, t.data)
                          }
                          var i
                          throw new TypeError(
                              'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                          )
                      })(e, t)
            }
            function c(e) {
                if ('number' != typeof e)
                    throw new TypeError('"size" argument must be a number')
                if (e < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function p(e, t) {
                if (
                    (c(t),
                    (e = a(e, t < 0 ? 0 : 0 | h(t))),
                    !l.TYPED_ARRAY_SUPPORT)
                )
                    for (var n = 0; n < t; ++n) e[n] = 0
                return e
            }
            function u(e, t) {
                var n = t.length < 0 ? 0 : 0 | h(t.length)
                e = a(e, n)
                for (var i = 0; i < n; i += 1) e[i] = 255 & t[i]
                return e
            }
            function h(e) {
                if (e >= s())
                    throw new RangeError(
                        'Attempt to allocate Buffer larger than maximum size: 0x' +
                            s().toString(16) +
                            ' bytes'
                    )
                return 0 | e
            }
            function m(e, t) {
                if (l.isBuffer(e)) return e.length
                if (
                    'undefined' != typeof ArrayBuffer &&
                    'function' == typeof ArrayBuffer.isView &&
                    (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
                )
                    return e.byteLength
                'string' != typeof e && (e = '' + e)
                var n = e.length
                if (0 === n) return 0
                for (var i = !1; ; )
                    switch (t) {
                        case 'ascii':
                        case 'latin1':
                        case 'binary':
                            return n
                        case 'utf8':
                        case 'utf-8':
                        case void 0:
                            return z(e).length
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return 2 * n
                        case 'hex':
                            return n >>> 1
                        case 'base64':
                            return B(e).length
                        default:
                            if (i) return z(e).length
                            ;(t = ('' + t).toLowerCase()), (i = !0)
                    }
            }
            function g(e, t, n) {
                var i = !1
                if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                    return ''
                if (
                    ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                )
                    return ''
                if ((n >>>= 0) <= (t >>>= 0)) return ''
                for (e || (e = 'utf8'); ; )
                    switch (e) {
                        case 'hex':
                            return A(this, t, n)
                        case 'utf8':
                        case 'utf-8':
                            return $(this, t, n)
                        case 'ascii':
                            return T(this, t, n)
                        case 'latin1':
                        case 'binary':
                            return _(this, t, n)
                        case 'base64':
                            return L(this, t, n)
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return I(this, t, n)
                        default:
                            if (i) throw new TypeError('Unknown encoding: ' + e)
                            ;(e = (e + '').toLowerCase()), (i = !0)
                    }
            }
            function f(e, t, n) {
                var i = e[t]
                ;(e[t] = e[n]), (e[n] = i)
            }
            function v(e, t, n, i, o) {
                if (0 === e.length) return -1
                if (
                    ('string' == typeof n
                        ? ((i = n), (n = 0))
                        : n > 2147483647
                        ? (n = 2147483647)
                        : n < -2147483648 && (n = -2147483648),
                    (n = +n),
                    isNaN(n) && (n = o ? 0 : e.length - 1),
                    n < 0 && (n = e.length + n),
                    n >= e.length)
                ) {
                    if (o) return -1
                    n = e.length - 1
                } else if (n < 0) {
                    if (!o) return -1
                    n = 0
                }
                if (('string' == typeof t && (t = l.from(t, i)), l.isBuffer(t)))
                    return 0 === t.length ? -1 : b(e, t, n, i, o)
                if ('number' == typeof t)
                    return (
                        (t &= 255),
                        l.TYPED_ARRAY_SUPPORT &&
                        'function' == typeof Uint8Array.prototype.indexOf
                            ? o
                                ? Uint8Array.prototype.indexOf.call(e, t, n)
                                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                            : b(e, [t], n, i, o)
                    )
                throw new TypeError('val must be string, number or Buffer')
            }
            function b(e, t, n, i, o) {
                var r,
                    s = 1,
                    a = e.length,
                    l = t.length
                if (
                    void 0 !== i &&
                    ('ucs2' === (i = String(i).toLowerCase()) ||
                        'ucs-2' === i ||
                        'utf16le' === i ||
                        'utf-16le' === i)
                ) {
                    if (e.length < 2 || t.length < 2) return -1
                    ;(s = 2), (a /= 2), (l /= 2), (n /= 2)
                }
                function d(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (o) {
                    var c = -1
                    for (r = n; r < a; r++)
                        if (d(e, r) === d(t, -1 === c ? 0 : r - c)) {
                            if ((-1 === c && (c = r), r - c + 1 === l))
                                return c * s
                        } else -1 !== c && (r -= r - c), (c = -1)
                } else
                    for (n + l > a && (n = a - l), r = n; r >= 0; r--) {
                        for (var p = !0, u = 0; u < l; u++)
                            if (d(e, r + u) !== d(t, u)) {
                                p = !1
                                break
                            }
                        if (p) return r
                    }
                return -1
            }
            function E(e, t, n, i) {
                n = Number(n) || 0
                var o = e.length - n
                i ? (i = Number(i)) > o && (i = o) : (i = o)
                var r = t.length
                if (r % 2 != 0) throw new TypeError('Invalid hex string')
                i > r / 2 && (i = r / 2)
                for (var s = 0; s < i; ++s) {
                    var a = parseInt(t.substr(2 * s, 2), 16)
                    if (isNaN(a)) return s
                    e[n + s] = a
                }
                return s
            }
            function w(e, t, n, i) {
                return V(z(t, e.length - n), e, n, i)
            }
            function y(e, t, n, i) {
                return V(
                    (function (e) {
                        for (var t = [], n = 0; n < e.length; ++n)
                            t.push(255 & e.charCodeAt(n))
                        return t
                    })(t),
                    e,
                    n,
                    i
                )
            }
            function S(e, t, n, i) {
                return y(e, t, n, i)
            }
            function x(e, t, n, i) {
                return V(B(t), e, n, i)
            }
            function C(e, t, n, i) {
                return V(
                    (function (e, t) {
                        for (
                            var n, i, o, r = [], s = 0;
                            s < e.length && !((t -= 2) < 0);
                            ++s
                        )
                            (n = e.charCodeAt(s)),
                                (i = n >> 8),
                                (o = n % 256),
                                r.push(o),
                                r.push(i)
                        return r
                    })(t, e.length - n),
                    e,
                    n,
                    i
                )
            }
            function L(e, t, n) {
                return 0 === t && n === e.length
                    ? i.fromByteArray(e)
                    : i.fromByteArray(e.slice(t, n))
            }
            function $(e, t, n) {
                n = Math.min(e.length, n)
                for (var i = [], o = t; o < n; ) {
                    var r,
                        s,
                        a,
                        l,
                        d = e[o],
                        c = null,
                        p = d > 239 ? 4 : d > 223 ? 3 : d > 191 ? 2 : 1
                    if (o + p <= n)
                        switch (p) {
                            case 1:
                                d < 128 && (c = d)
                                break
                            case 2:
                                128 == (192 & (r = e[o + 1])) &&
                                    (l = ((31 & d) << 6) | (63 & r)) > 127 &&
                                    (c = l)
                                break
                            case 3:
                                ;(r = e[o + 1]),
                                    (s = e[o + 2]),
                                    128 == (192 & r) &&
                                        128 == (192 & s) &&
                                        (l =
                                            ((15 & d) << 12) |
                                            ((63 & r) << 6) |
                                            (63 & s)) > 2047 &&
                                        (l < 55296 || l > 57343) &&
                                        (c = l)
                                break
                            case 4:
                                ;(r = e[o + 1]),
                                    (s = e[o + 2]),
                                    (a = e[o + 3]),
                                    128 == (192 & r) &&
                                        128 == (192 & s) &&
                                        128 == (192 & a) &&
                                        (l =
                                            ((15 & d) << 18) |
                                            ((63 & r) << 12) |
                                            ((63 & s) << 6) |
                                            (63 & a)) > 65535 &&
                                        l < 1114112 &&
                                        (c = l)
                        }
                    null === c
                        ? ((c = 65533), (p = 1))
                        : c > 65535 &&
                          ((c -= 65536),
                          i.push(((c >>> 10) & 1023) | 55296),
                          (c = 56320 | (1023 & c))),
                        i.push(c),
                        (o += p)
                }
                return (function (e) {
                    var t = e.length
                    if (t <= N) return String.fromCharCode.apply(String, e)
                    var n = '',
                        i = 0
                    for (; i < t; )
                        n += String.fromCharCode.apply(
                            String,
                            e.slice(i, (i += N))
                        )
                    return n
                })(i)
            }
            ;(t.Buffer = l),
                (t.SlowBuffer = function (e) {
                    ;+e != e && (e = 0)
                    return l.alloc(+e)
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (l.TYPED_ARRAY_SUPPORT =
                    void 0 !== e.TYPED_ARRAY_SUPPORT
                        ? e.TYPED_ARRAY_SUPPORT
                        : (function () {
                              try {
                                  var e = new Uint8Array(1)
                                  return (
                                      (e.__proto__ = {
                                          __proto__: Uint8Array.prototype,
                                          foo: function () {
                                              return 42
                                          },
                                      }),
                                      42 === e.foo() &&
                                          'function' == typeof e.subarray &&
                                          0 === e.subarray(1, 1).byteLength
                                  )
                              } catch (e) {
                                  return !1
                              }
                          })()),
                (t.kMaxLength = s()),
                (l.poolSize = 8192),
                (l._augment = function (e) {
                    return (e.__proto__ = l.prototype), e
                }),
                (l.from = function (e, t, n) {
                    return d(null, e, t, n)
                }),
                l.TYPED_ARRAY_SUPPORT &&
                    ((l.prototype.__proto__ = Uint8Array.prototype),
                    (l.__proto__ = Uint8Array),
                    'undefined' != typeof Symbol &&
                        Symbol.species &&
                        l[Symbol.species] === l &&
                        Object.defineProperty(l, Symbol.species, {
                            value: null,
                            configurable: !0,
                        })),
                (l.alloc = function (e, t, n) {
                    return (function (e, t, n, i) {
                        return (
                            c(t),
                            t <= 0
                                ? a(e, t)
                                : void 0 !== n
                                ? 'string' == typeof i
                                    ? a(e, t).fill(n, i)
                                    : a(e, t).fill(n)
                                : a(e, t)
                        )
                    })(null, e, t, n)
                }),
                (l.allocUnsafe = function (e) {
                    return p(null, e)
                }),
                (l.allocUnsafeSlow = function (e) {
                    return p(null, e)
                }),
                (l.isBuffer = function (e) {
                    return !(null == e || !e._isBuffer)
                }),
                (l.compare = function (e, t) {
                    if (!l.isBuffer(e) || !l.isBuffer(t))
                        throw new TypeError('Arguments must be Buffers')
                    if (e === t) return 0
                    for (
                        var n = e.length,
                            i = t.length,
                            o = 0,
                            r = Math.min(n, i);
                        o < r;
                        ++o
                    )
                        if (e[o] !== t[o]) {
                            ;(n = e[o]), (i = t[o])
                            break
                        }
                    return n < i ? -1 : i < n ? 1 : 0
                }),
                (l.isEncoding = function (e) {
                    switch (String(e).toLowerCase()) {
                        case 'hex':
                        case 'utf8':
                        case 'utf-8':
                        case 'ascii':
                        case 'latin1':
                        case 'binary':
                        case 'base64':
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return !0
                        default:
                            return !1
                    }
                }),
                (l.concat = function (e, t) {
                    if (!r(e))
                        throw new TypeError(
                            '"list" argument must be an Array of Buffers'
                        )
                    if (0 === e.length) return l.alloc(0)
                    var n
                    if (void 0 === t)
                        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length
                    var i = l.allocUnsafe(t),
                        o = 0
                    for (n = 0; n < e.length; ++n) {
                        var s = e[n]
                        if (!l.isBuffer(s))
                            throw new TypeError(
                                '"list" argument must be an Array of Buffers'
                            )
                        s.copy(i, o), (o += s.length)
                    }
                    return i
                }),
                (l.byteLength = m),
                (l.prototype._isBuffer = !0),
                (l.prototype.swap16 = function () {
                    var e = this.length
                    if (e % 2 != 0)
                        throw new RangeError(
                            'Buffer size must be a multiple of 16-bits'
                        )
                    for (var t = 0; t < e; t += 2) f(this, t, t + 1)
                    return this
                }),
                (l.prototype.swap32 = function () {
                    var e = this.length
                    if (e % 4 != 0)
                        throw new RangeError(
                            'Buffer size must be a multiple of 32-bits'
                        )
                    for (var t = 0; t < e; t += 4)
                        f(this, t, t + 3), f(this, t + 1, t + 2)
                    return this
                }),
                (l.prototype.swap64 = function () {
                    var e = this.length
                    if (e % 8 != 0)
                        throw new RangeError(
                            'Buffer size must be a multiple of 64-bits'
                        )
                    for (var t = 0; t < e; t += 8)
                        f(this, t, t + 7),
                            f(this, t + 1, t + 6),
                            f(this, t + 2, t + 5),
                            f(this, t + 3, t + 4)
                    return this
                }),
                (l.prototype.toString = function () {
                    var e = 0 | this.length
                    return 0 === e
                        ? ''
                        : 0 === arguments.length
                        ? $(this, 0, e)
                        : g.apply(this, arguments)
                }),
                (l.prototype.equals = function (e) {
                    if (!l.isBuffer(e))
                        throw new TypeError('Argument must be a Buffer')
                    return this === e || 0 === l.compare(this, e)
                }),
                (l.prototype.inspect = function () {
                    var e = '',
                        n = t.INSPECT_MAX_BYTES
                    return (
                        this.length > 0 &&
                            ((e = this.toString('hex', 0, n)
                                .match(/.{2}/g)
                                .join(' ')),
                            this.length > n && (e += ' ... ')),
                        '<Buffer ' + e + '>'
                    )
                }),
                (l.prototype.compare = function (e, t, n, i, o) {
                    if (!l.isBuffer(e))
                        throw new TypeError('Argument must be a Buffer')
                    if (
                        (void 0 === t && (t = 0),
                        void 0 === n && (n = e ? e.length : 0),
                        void 0 === i && (i = 0),
                        void 0 === o && (o = this.length),
                        t < 0 || n > e.length || i < 0 || o > this.length)
                    )
                        throw new RangeError('out of range index')
                    if (i >= o && t >= n) return 0
                    if (i >= o) return -1
                    if (t >= n) return 1
                    if (this === e) return 0
                    for (
                        var r = (o >>>= 0) - (i >>>= 0),
                            s = (n >>>= 0) - (t >>>= 0),
                            a = Math.min(r, s),
                            d = this.slice(i, o),
                            c = e.slice(t, n),
                            p = 0;
                        p < a;
                        ++p
                    )
                        if (d[p] !== c[p]) {
                            ;(r = d[p]), (s = c[p])
                            break
                        }
                    return r < s ? -1 : s < r ? 1 : 0
                }),
                (l.prototype.includes = function (e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }),
                (l.prototype.indexOf = function (e, t, n) {
                    return v(this, e, t, n, !0)
                }),
                (l.prototype.lastIndexOf = function (e, t, n) {
                    return v(this, e, t, n, !1)
                }),
                (l.prototype.write = function (e, t, n, i) {
                    if (void 0 === t) (i = 'utf8'), (n = this.length), (t = 0)
                    else if (void 0 === n && 'string' == typeof t)
                        (i = t), (n = this.length), (t = 0)
                    else {
                        if (!isFinite(t))
                            throw new Error(
                                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                            )
                        ;(t |= 0),
                            isFinite(n)
                                ? ((n |= 0), void 0 === i && (i = 'utf8'))
                                : ((i = n), (n = void 0))
                    }
                    var o = this.length - t
                    if (
                        ((void 0 === n || n > o) && (n = o),
                        (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
                    )
                        throw new RangeError(
                            'Attempt to write outside buffer bounds'
                        )
                    i || (i = 'utf8')
                    for (var r = !1; ; )
                        switch (i) {
                            case 'hex':
                                return E(this, e, t, n)
                            case 'utf8':
                            case 'utf-8':
                                return w(this, e, t, n)
                            case 'ascii':
                                return y(this, e, t, n)
                            case 'latin1':
                            case 'binary':
                                return S(this, e, t, n)
                            case 'base64':
                                return x(this, e, t, n)
                            case 'ucs2':
                            case 'ucs-2':
                            case 'utf16le':
                            case 'utf-16le':
                                return C(this, e, t, n)
                            default:
                                if (r)
                                    throw new TypeError(
                                        'Unknown encoding: ' + i
                                    )
                                ;(i = ('' + i).toLowerCase()), (r = !0)
                        }
                }),
                (l.prototype.toJSON = function () {
                    return {
                        type: 'Buffer',
                        data: Array.prototype.slice.call(this._arr || this, 0),
                    }
                })
            var N = 4096
            function T(e, t, n) {
                var i = ''
                n = Math.min(e.length, n)
                for (var o = t; o < n; ++o) i += String.fromCharCode(127 & e[o])
                return i
            }
            function _(e, t, n) {
                var i = ''
                n = Math.min(e.length, n)
                for (var o = t; o < n; ++o) i += String.fromCharCode(e[o])
                return i
            }
            function A(e, t, n) {
                var i = e.length
                ;(!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i)
                for (var o = '', r = t; r < n; ++r) o += U(e[r])
                return o
            }
            function I(e, t, n) {
                for (var i = e.slice(t, n), o = '', r = 0; r < i.length; r += 2)
                    o += String.fromCharCode(i[r] + 256 * i[r + 1])
                return o
            }
            function O(e, t, n) {
                if (e % 1 != 0 || e < 0)
                    throw new RangeError('offset is not uint')
                if (e + t > n)
                    throw new RangeError(
                        'Trying to access beyond buffer length'
                    )
            }
            function R(e, t, n, i, o, r) {
                if (!l.isBuffer(e))
                    throw new TypeError(
                        '"buffer" argument must be a Buffer instance'
                    )
                if (t > o || t < r)
                    throw new RangeError('"value" argument is out of bounds')
                if (n + i > e.length) throw new RangeError('Index out of range')
            }
            function k(e, t, n, i) {
                t < 0 && (t = 65535 + t + 1)
                for (var o = 0, r = Math.min(e.length - n, 2); o < r; ++o)
                    e[n + o] =
                        (t & (255 << (8 * (i ? o : 1 - o)))) >>>
                        (8 * (i ? o : 1 - o))
            }
            function D(e, t, n, i) {
                t < 0 && (t = 4294967295 + t + 1)
                for (var o = 0, r = Math.min(e.length - n, 4); o < r; ++o)
                    e[n + o] = (t >>> (8 * (i ? o : 3 - o))) & 255
            }
            function P(e, t, n, i, o, r) {
                if (n + i > e.length) throw new RangeError('Index out of range')
                if (n < 0) throw new RangeError('Index out of range')
            }
            function F(e, t, n, i, r) {
                return r || P(e, 0, n, 4), o.write(e, t, n, i, 23, 4), n + 4
            }
            function M(e, t, n, i, r) {
                return r || P(e, 0, n, 8), o.write(e, t, n, i, 52, 8), n + 8
            }
            ;(l.prototype.slice = function (e, t) {
                var n,
                    i = this.length
                if (
                    ((e = ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
                    (t = void 0 === t ? i : ~~t) < 0
                        ? (t += i) < 0 && (t = 0)
                        : t > i && (t = i),
                    t < e && (t = e),
                    l.TYPED_ARRAY_SUPPORT)
                )
                    (n = this.subarray(e, t)).__proto__ = l.prototype
                else {
                    var o = t - e
                    n = new l(o, void 0)
                    for (var r = 0; r < o; ++r) n[r] = this[r + e]
                }
                return n
            }),
                (l.prototype.readUIntLE = function (e, t, n) {
                    ;(e |= 0), (t |= 0), n || O(e, t, this.length)
                    for (var i = this[e], o = 1, r = 0; ++r < t && (o *= 256); )
                        i += this[e + r] * o
                    return i
                }),
                (l.prototype.readUIntBE = function (e, t, n) {
                    ;(e |= 0), (t |= 0), n || O(e, t, this.length)
                    for (var i = this[e + --t], o = 1; t > 0 && (o *= 256); )
                        i += this[e + --t] * o
                    return i
                }),
                (l.prototype.readUInt8 = function (e, t) {
                    return t || O(e, 1, this.length), this[e]
                }),
                (l.prototype.readUInt16LE = function (e, t) {
                    return (
                        t || O(e, 2, this.length), this[e] | (this[e + 1] << 8)
                    )
                }),
                (l.prototype.readUInt16BE = function (e, t) {
                    return (
                        t || O(e, 2, this.length), (this[e] << 8) | this[e + 1]
                    )
                }),
                (l.prototype.readUInt32LE = function (e, t) {
                    return (
                        t || O(e, 4, this.length),
                        (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                            16777216 * this[e + 3]
                    )
                }),
                (l.prototype.readUInt32BE = function (e, t) {
                    return (
                        t || O(e, 4, this.length),
                        16777216 * this[e] +
                            ((this[e + 1] << 16) |
                                (this[e + 2] << 8) |
                                this[e + 3])
                    )
                }),
                (l.prototype.readIntLE = function (e, t, n) {
                    ;(e |= 0), (t |= 0), n || O(e, t, this.length)
                    for (var i = this[e], o = 1, r = 0; ++r < t && (o *= 256); )
                        i += this[e + r] * o
                    return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
                }),
                (l.prototype.readIntBE = function (e, t, n) {
                    ;(e |= 0), (t |= 0), n || O(e, t, this.length)
                    for (
                        var i = t, o = 1, r = this[e + --i];
                        i > 0 && (o *= 256);

                    )
                        r += this[e + --i] * o
                    return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
                }),
                (l.prototype.readInt8 = function (e, t) {
                    return (
                        t || O(e, 1, this.length),
                        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                    )
                }),
                (l.prototype.readInt16LE = function (e, t) {
                    t || O(e, 2, this.length)
                    var n = this[e] | (this[e + 1] << 8)
                    return 32768 & n ? 4294901760 | n : n
                }),
                (l.prototype.readInt16BE = function (e, t) {
                    t || O(e, 2, this.length)
                    var n = this[e + 1] | (this[e] << 8)
                    return 32768 & n ? 4294901760 | n : n
                }),
                (l.prototype.readInt32LE = function (e, t) {
                    return (
                        t || O(e, 4, this.length),
                        this[e] |
                            (this[e + 1] << 8) |
                            (this[e + 2] << 16) |
                            (this[e + 3] << 24)
                    )
                }),
                (l.prototype.readInt32BE = function (e, t) {
                    return (
                        t || O(e, 4, this.length),
                        (this[e] << 24) |
                            (this[e + 1] << 16) |
                            (this[e + 2] << 8) |
                            this[e + 3]
                    )
                }),
                (l.prototype.readFloatLE = function (e, t) {
                    return t || O(e, 4, this.length), o.read(this, e, !0, 23, 4)
                }),
                (l.prototype.readFloatBE = function (e, t) {
                    return t || O(e, 4, this.length), o.read(this, e, !1, 23, 4)
                }),
                (l.prototype.readDoubleLE = function (e, t) {
                    return t || O(e, 8, this.length), o.read(this, e, !0, 52, 8)
                }),
                (l.prototype.readDoubleBE = function (e, t) {
                    return t || O(e, 8, this.length), o.read(this, e, !1, 52, 8)
                }),
                (l.prototype.writeUIntLE = function (e, t, n, i) {
                    ;((e = +e), (t |= 0), (n |= 0), i) ||
                        R(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                    var o = 1,
                        r = 0
                    for (this[t] = 255 & e; ++r < n && (o *= 256); )
                        this[t + r] = (e / o) & 255
                    return t + n
                }),
                (l.prototype.writeUIntBE = function (e, t, n, i) {
                    ;((e = +e), (t |= 0), (n |= 0), i) ||
                        R(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                    var o = n - 1,
                        r = 1
                    for (this[t + o] = 255 & e; --o >= 0 && (r *= 256); )
                        this[t + o] = (e / r) & 255
                    return t + n
                }),
                (l.prototype.writeUInt8 = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 1, 255, 0),
                        l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                        (this[t] = 255 & e),
                        t + 1
                    )
                }),
                (l.prototype.writeUInt16LE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 2, 65535, 0),
                        l.TYPED_ARRAY_SUPPORT
                            ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                            : k(this, e, t, !0),
                        t + 2
                    )
                }),
                (l.prototype.writeUInt16BE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 2, 65535, 0),
                        l.TYPED_ARRAY_SUPPORT
                            ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                            : k(this, e, t, !1),
                        t + 2
                    )
                }),
                (l.prototype.writeUInt32LE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 4, 4294967295, 0),
                        l.TYPED_ARRAY_SUPPORT
                            ? ((this[t + 3] = e >>> 24),
                              (this[t + 2] = e >>> 16),
                              (this[t + 1] = e >>> 8),
                              (this[t] = 255 & e))
                            : D(this, e, t, !0),
                        t + 4
                    )
                }),
                (l.prototype.writeUInt32BE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 4, 4294967295, 0),
                        l.TYPED_ARRAY_SUPPORT
                            ? ((this[t] = e >>> 24),
                              (this[t + 1] = e >>> 16),
                              (this[t + 2] = e >>> 8),
                              (this[t + 3] = 255 & e))
                            : D(this, e, t, !1),
                        t + 4
                    )
                }),
                (l.prototype.writeIntLE = function (e, t, n, i) {
                    if (((e = +e), (t |= 0), !i)) {
                        var o = Math.pow(2, 8 * n - 1)
                        R(this, e, t, n, o - 1, -o)
                    }
                    var r = 0,
                        s = 1,
                        a = 0
                    for (this[t] = 255 & e; ++r < n && (s *= 256); )
                        e < 0 && 0 === a && 0 !== this[t + r - 1] && (a = 1),
                            (this[t + r] = (((e / s) >> 0) - a) & 255)
                    return t + n
                }),
                (l.prototype.writeIntBE = function (e, t, n, i) {
                    if (((e = +e), (t |= 0), !i)) {
                        var o = Math.pow(2, 8 * n - 1)
                        R(this, e, t, n, o - 1, -o)
                    }
                    var r = n - 1,
                        s = 1,
                        a = 0
                    for (this[t + r] = 255 & e; --r >= 0 && (s *= 256); )
                        e < 0 && 0 === a && 0 !== this[t + r + 1] && (a = 1),
                            (this[t + r] = (((e / s) >> 0) - a) & 255)
                    return t + n
                }),
                (l.prototype.writeInt8 = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 1, 127, -128),
                        l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                        e < 0 && (e = 255 + e + 1),
                        (this[t] = 255 & e),
                        t + 1
                    )
                }),
                (l.prototype.writeInt16LE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 2, 32767, -32768),
                        l.TYPED_ARRAY_SUPPORT
                            ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                            : k(this, e, t, !0),
                        t + 2
                    )
                }),
                (l.prototype.writeInt16BE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 2, 32767, -32768),
                        l.TYPED_ARRAY_SUPPORT
                            ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                            : k(this, e, t, !1),
                        t + 2
                    )
                }),
                (l.prototype.writeInt32LE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 4, 2147483647, -2147483648),
                        l.TYPED_ARRAY_SUPPORT
                            ? ((this[t] = 255 & e),
                              (this[t + 1] = e >>> 8),
                              (this[t + 2] = e >>> 16),
                              (this[t + 3] = e >>> 24))
                            : D(this, e, t, !0),
                        t + 4
                    )
                }),
                (l.prototype.writeInt32BE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 4, 2147483647, -2147483648),
                        e < 0 && (e = 4294967295 + e + 1),
                        l.TYPED_ARRAY_SUPPORT
                            ? ((this[t] = e >>> 24),
                              (this[t + 1] = e >>> 16),
                              (this[t + 2] = e >>> 8),
                              (this[t + 3] = 255 & e))
                            : D(this, e, t, !1),
                        t + 4
                    )
                }),
                (l.prototype.writeFloatLE = function (e, t, n) {
                    return F(this, e, t, !0, n)
                }),
                (l.prototype.writeFloatBE = function (e, t, n) {
                    return F(this, e, t, !1, n)
                }),
                (l.prototype.writeDoubleLE = function (e, t, n) {
                    return M(this, e, t, !0, n)
                }),
                (l.prototype.writeDoubleBE = function (e, t, n) {
                    return M(this, e, t, !1, n)
                }),
                (l.prototype.copy = function (e, t, n, i) {
                    if (
                        (n || (n = 0),
                        i || 0 === i || (i = this.length),
                        t >= e.length && (t = e.length),
                        t || (t = 0),
                        i > 0 && i < n && (i = n),
                        i === n)
                    )
                        return 0
                    if (0 === e.length || 0 === this.length) return 0
                    if (t < 0) throw new RangeError('targetStart out of bounds')
                    if (n < 0 || n >= this.length)
                        throw new RangeError('sourceStart out of bounds')
                    if (i < 0) throw new RangeError('sourceEnd out of bounds')
                    i > this.length && (i = this.length),
                        e.length - t < i - n && (i = e.length - t + n)
                    var o,
                        r = i - n
                    if (this === e && n < t && t < i)
                        for (o = r - 1; o >= 0; --o) e[o + t] = this[o + n]
                    else if (r < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                        for (o = 0; o < r; ++o) e[o + t] = this[o + n]
                    else
                        Uint8Array.prototype.set.call(
                            e,
                            this.subarray(n, n + r),
                            t
                        )
                    return r
                }),
                (l.prototype.fill = function (e, t, n, i) {
                    if ('string' == typeof e) {
                        if (
                            ('string' == typeof t
                                ? ((i = t), (t = 0), (n = this.length))
                                : 'string' == typeof n &&
                                  ((i = n), (n = this.length)),
                            1 === e.length)
                        ) {
                            var o = e.charCodeAt(0)
                            o < 256 && (e = o)
                        }
                        if (void 0 !== i && 'string' != typeof i)
                            throw new TypeError('encoding must be a string')
                        if ('string' == typeof i && !l.isEncoding(i))
                            throw new TypeError('Unknown encoding: ' + i)
                    } else 'number' == typeof e && (e &= 255)
                    if (t < 0 || this.length < t || this.length < n)
                        throw new RangeError('Out of range index')
                    if (n <= t) return this
                    var r
                    if (
                        ((t >>>= 0),
                        (n = void 0 === n ? this.length : n >>> 0),
                        e || (e = 0),
                        'number' == typeof e)
                    )
                        for (r = t; r < n; ++r) this[r] = e
                    else {
                        var s = l.isBuffer(e) ? e : z(new l(e, i).toString()),
                            a = s.length
                        for (r = 0; r < n - t; ++r) this[r + t] = s[r % a]
                    }
                    return this
                })
            var j = /[^+\/0-9A-Za-z-_]/g
            function U(e) {
                return e < 16 ? '0' + e.toString(16) : e.toString(16)
            }
            function z(e, t) {
                var n
                t = t || 1 / 0
                for (var i = e.length, o = null, r = [], s = 0; s < i; ++s) {
                    if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319) {
                                ;(t -= 3) > -1 && r.push(239, 191, 189)
                                continue
                            }
                            if (s + 1 === i) {
                                ;(t -= 3) > -1 && r.push(239, 191, 189)
                                continue
                            }
                            o = n
                            continue
                        }
                        if (n < 56320) {
                            ;(t -= 3) > -1 && r.push(239, 191, 189), (o = n)
                            continue
                        }
                        n = 65536 + (((o - 55296) << 10) | (n - 56320))
                    } else o && (t -= 3) > -1 && r.push(239, 191, 189)
                    if (((o = null), n < 128)) {
                        if ((t -= 1) < 0) break
                        r.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break
                        r.push((n >> 6) | 192, (63 & n) | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break
                        r.push(
                            (n >> 12) | 224,
                            ((n >> 6) & 63) | 128,
                            (63 & n) | 128
                        )
                    } else {
                        if (!(n < 1114112))
                            throw new Error('Invalid code point')
                        if ((t -= 4) < 0) break
                        r.push(
                            (n >> 18) | 240,
                            ((n >> 12) & 63) | 128,
                            ((n >> 6) & 63) | 128,
                            (63 & n) | 128
                        )
                    }
                }
                return r
            }
            function B(e) {
                return i.toByteArray(
                    (function (e) {
                        if (
                            (e = (function (e) {
                                return e.trim
                                    ? e.trim()
                                    : e.replace(/^\s+|\s+$/g, '')
                            })(e).replace(j, '')).length < 2
                        )
                            return ''
                        for (; e.length % 4 != 0; ) e += '='
                        return e
                    })(e)
                )
            }
            function V(e, t, n, i) {
                for (
                    var o = 0;
                    o < i && !(o + n >= t.length || o >= e.length);
                    ++o
                )
                    t[o + n] = e[o]
                return o
            }
        }.call(this, n(37)))
    },
    function (e, t, n) {
        'use strict'
        ;(t.byteLength = function (e) {
            var t = d(e),
                n = t[0],
                i = t[1]
            return (3 * (n + i)) / 4 - i
        }),
            (t.toByteArray = function (e) {
                var t,
                    n,
                    i = d(e),
                    s = i[0],
                    a = i[1],
                    l = new r(
                        (function (e, t, n) {
                            return (3 * (t + n)) / 4 - n
                        })(0, s, a)
                    ),
                    c = 0,
                    p = a > 0 ? s - 4 : s
                for (n = 0; n < p; n += 4)
                    (t =
                        (o[e.charCodeAt(n)] << 18) |
                        (o[e.charCodeAt(n + 1)] << 12) |
                        (o[e.charCodeAt(n + 2)] << 6) |
                        o[e.charCodeAt(n + 3)]),
                        (l[c++] = (t >> 16) & 255),
                        (l[c++] = (t >> 8) & 255),
                        (l[c++] = 255 & t)
                2 === a &&
                    ((t =
                        (o[e.charCodeAt(n)] << 2) |
                        (o[e.charCodeAt(n + 1)] >> 4)),
                    (l[c++] = 255 & t))
                1 === a &&
                    ((t =
                        (o[e.charCodeAt(n)] << 10) |
                        (o[e.charCodeAt(n + 1)] << 4) |
                        (o[e.charCodeAt(n + 2)] >> 2)),
                    (l[c++] = (t >> 8) & 255),
                    (l[c++] = 255 & t))
                return l
            }),
            (t.fromByteArray = function (e) {
                for (
                    var t, n = e.length, o = n % 3, r = [], s = 0, a = n - o;
                    s < a;
                    s += 16383
                )
                    r.push(c(e, s, s + 16383 > a ? a : s + 16383))
                1 === o
                    ? ((t = e[n - 1]),
                      r.push(i[t >> 2] + i[(t << 4) & 63] + '=='))
                    : 2 === o &&
                      ((t = (e[n - 2] << 8) + e[n - 1]),
                      r.push(
                          i[t >> 10] + i[(t >> 4) & 63] + i[(t << 2) & 63] + '='
                      ))
                return r.join('')
            })
        for (
            var i = [],
                o = [],
                r = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
                s =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                a = 0,
                l = s.length;
            a < l;
            ++a
        )
            (i[a] = s[a]), (o[s.charCodeAt(a)] = a)
        function d(e) {
            var t = e.length
            if (t % 4 > 0)
                throw new Error(
                    'Invalid string. Length must be a multiple of 4'
                )
            var n = e.indexOf('=')
            return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)]
        }
        function c(e, t, n) {
            for (var o, r, s = [], a = t; a < n; a += 3)
                (o =
                    ((e[a] << 16) & 16711680) +
                    ((e[a + 1] << 8) & 65280) +
                    (255 & e[a + 2])),
                    s.push(
                        i[((r = o) >> 18) & 63] +
                            i[(r >> 12) & 63] +
                            i[(r >> 6) & 63] +
                            i[63 & r]
                    )
            return s.join('')
        }
        ;(o['-'.charCodeAt(0)] = 62), (o['_'.charCodeAt(0)] = 63)
    },
    function (e, t) {
        ;(t.read = function (e, t, n, i, o) {
            var r,
                s,
                a = 8 * o - i - 1,
                l = (1 << a) - 1,
                d = l >> 1,
                c = -7,
                p = n ? o - 1 : 0,
                u = n ? -1 : 1,
                h = e[t + p]
            for (
                p += u, r = h & ((1 << -c) - 1), h >>= -c, c += a;
                c > 0;
                r = 256 * r + e[t + p], p += u, c -= 8
            );
            for (
                s = r & ((1 << -c) - 1), r >>= -c, c += i;
                c > 0;
                s = 256 * s + e[t + p], p += u, c -= 8
            );
            if (0 === r) r = 1 - d
            else {
                if (r === l) return s ? NaN : (1 / 0) * (h ? -1 : 1)
                ;(s += Math.pow(2, i)), (r -= d)
            }
            return (h ? -1 : 1) * s * Math.pow(2, r - i)
        }),
            (t.write = function (e, t, n, i, o, r) {
                var s,
                    a,
                    l,
                    d = 8 * r - o - 1,
                    c = (1 << d) - 1,
                    p = c >> 1,
                    u = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    h = i ? 0 : r - 1,
                    m = i ? 1 : -1,
                    g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
                for (
                    t = Math.abs(t),
                        isNaN(t) || t === 1 / 0
                            ? ((a = isNaN(t) ? 1 : 0), (s = c))
                            : ((s = Math.floor(Math.log(t) / Math.LN2)),
                              t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                              (t +=
                                  s + p >= 1 ? u / l : u * Math.pow(2, 1 - p)) *
                                  l >=
                                  2 && (s++, (l /= 2)),
                              s + p >= c
                                  ? ((a = 0), (s = c))
                                  : s + p >= 1
                                  ? ((a = (t * l - 1) * Math.pow(2, o)),
                                    (s += p))
                                  : ((a =
                                        t *
                                        Math.pow(2, p - 1) *
                                        Math.pow(2, o)),
                                    (s = 0)));
                    o >= 8;
                    e[n + h] = 255 & a, h += m, a /= 256, o -= 8
                );
                for (
                    s = (s << o) | a, d += o;
                    d > 0;
                    e[n + h] = 255 & s, h += m, s /= 256, d -= 8
                );
                e[n + h - m] |= 128 * g
            })
    },
    function (e, t) {
        var n = {}.toString
        e.exports =
            Array.isArray ||
            function (e) {
                return '[object Array]' == n.call(e)
            }
    },
    function (e, t) {
        e.exports = './loading.png'
    },
    ,
    ,
    function (e, t, n) {
        var i = n(312)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            '.install-badge {\n  display: inline;\n  padding: 5px 14px;\n  border-radius: 12px;\n  font-size: 12px;\n  background: #E0E0E0; }\n  lts-badge .install-badge {\n    padding-right: 7px; }\n',
            '',
        ])
    },
    function (e, t, n) {
        var i = n(314)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            '.install-entry {\n  position: relative;\n  width: 214px;\n  height: 190px;\n  margin: 8px 16px 16px 0; }\n  .install-entry.loading md-card-content, .install-entry.loading md-card-footer {\n    opacity: 0.5; }\n  .install-entry md-progress-linear {\n    position: absolute; }\n  .install-entry .install-progress {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 5px;\n    z-index: 10; }\n    .install-entry .install-progress .install-status {\n      padding: 50px 15px 15px 15px;\n      top: 108px;\n      left: 0;\n      right: 0;\n      background-color: #FFFFFF;\n      position: absolute; }\n      .install-entry .install-progress .install-status span {\n        font-size: 14px;\n        font-weight: 700; }\n  .install-entry .unity-cube {\n    width: 44px;\n    height: 44px;\n    line-height: 52px;\n    font-size: 42px;\n    color: inherit;\n    cursor: default;\n    user-select: none; }\n  .install-entry .editor-version {\n    font-size: 16px; }\n  .install-entry md-card-content {\n    padding: 16px 16px 0px; }\n  .install-entry md-card-footer {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    padding: 12px 8px; }\n    .install-entry md-card-footer hub-icon {\n      cursor: default;\n      min-width: 40px;\n      opacity: 0.8;\n      text-align: center;\n      line-height: 24px;\n      font-size: 18px; }\n      .install-entry md-card-footer hub-icon.md-icon-ios {\n        font-size: 19px; }\n      .install-entry md-card-footer hub-icon.md-icon-oculus {\n        font-size: 21px; }\n      .install-entry md-card-footer hub-icon.md-icon-tvos {\n        font-size: 11px; }\n      .install-entry md-card-footer hub-icon.md-icon-xiaomi {\n        font-size: 19px; }\n      .install-entry md-card-footer hub-icon.md-icon- {\n        height: 24px;\n        padding-top: 5px; }\n      .install-entry md-card-footer hub-icon:hover {\n        opacity: 1; }\n',
            '',
        ])
    },
    function (e, t, n) {
        var i = n(316)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\n.install-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -8px;\n  padding-left: 12px;\n  margin-left: -12px;\n  margin-right: -16px;\n  overflow: hidden; }\n  .install-list:hover {\n    overflow-y: overlay; }\n  .install-list::-webkit-scrollbar {\n    background: #F2F3F4;\n    width: 16px; }\n  .install-list::-webkit-scrollbar-track {\n    background: #F2F3F4; }\n    .install-list::-webkit-scrollbar-track:hover {\n      background-color: #F2F3F4; }\n  .install-list::-webkit-scrollbar-thumb {\n    background-color: #BABABA;\n    border-radius: 16px;\n    border: 5px solid #F2F3F4; }\n    .install-list::-webkit-scrollbar-thumb:hover {\n      background-color: #747576;\n      border-color: #F2F3F4; }\n  .install-list::-webkit-scrollbar-button {\n    display: none; }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(318)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\n.install-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -8px;\n  padding-left: 12px;\n  margin-left: -12px;\n  margin-right: -16px;\n  overflow: hidden; }\n  .install-list:hover {\n    overflow-y: overlay; }\n  .install-list::-webkit-scrollbar {\n    background: #F2F3F4;\n    width: 16px; }\n  .install-list::-webkit-scrollbar-track {\n    background: #F2F3F4; }\n    .install-list::-webkit-scrollbar-track:hover {\n      background-color: #F2F3F4; }\n  .install-list::-webkit-scrollbar-thumb {\n    background-color: #BABABA;\n    border-radius: 16px;\n    border: 5px solid #F2F3F4; }\n    .install-list::-webkit-scrollbar-thumb:hover {\n      background-color: #747576;\n      border-color: #F2F3F4; }\n  .install-list::-webkit-scrollbar-button {\n    display: none; }\n\n.add-module-dialog {\n  width: 640px;\n  height: 460px;\n  margin-bottom: 0; }\n  .add-module-dialog md-toolbar {\n    min-height: 52px; }\n    .add-module-dialog md-toolbar .md-toolbar-tools {\n      height: 52px; }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(320)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\nmd-list-item.md-no-proxy, md-list-item .md-no-style {\n  padding: 0; }\n\n.module-category {\n  width: 100%; }\n\nmd-list {\n  padding-top: 10px; }\n\nmd-dialog-content {\n  display: flex; }\n\n.module-table-container {\n  overflow: hidden; }\n  .module-table-container:hover {\n    overflow-y: overlay; }\n  .module-table-container::-webkit-scrollbar {\n    background: #FFFFFF;\n    width: 16px; }\n  .module-table-container::-webkit-scrollbar-track {\n    background: #FFFFFF; }\n    .module-table-container::-webkit-scrollbar-track:hover {\n      background-color: #F2F3F4; }\n  .module-table-container::-webkit-scrollbar-thumb {\n    background-color: #BABABA;\n    border-radius: 16px;\n    border: 5px solid #FFFFFF; }\n    .module-table-container::-webkit-scrollbar-thumb:hover {\n      background-color: #747576;\n      border-color: #F2F3F4; }\n  .module-table-container::-webkit-scrollbar-button {\n    display: none; }\n\n.dialog-no-dev-tools md-toolbar {\n  min-height: 52px; }\n  .dialog-no-dev-tools md-toolbar .md-toolbar-tools {\n    height: 52px; }\n\n.dialog-no-dev-tools md-dialog-content {\n  padding: 16px; }\n\n.dialog-no-dev-tools md-dialog-actions md-checkbox {\n  margin-bottom: 0px; }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(322)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            '.module-category-container {\n  width: 99%;\n  margin: 0; }\n  .module-category-container .selectable-module-category {\n    padding-left: 0;\n    margin-bottom: 20px;\n    margin-top: 0; }\n    .module-category-container .selectable-module-category > li {\n      list-style-type: none;\n      margin-top: 15px; }\n  .module-category-container .expand-button {\n    min-width: 0;\n    min-height: 0;\n    padding: 0;\n    margin: 0; }\n  .module-category-container .display-inline {\n    display: inline; }\n  .module-category-container .show-hide {\n    transition: all linear 0.5s; }\n  .module-category-container .show-hide.ng-hide {\n    opacity: 0; }\n',
            '',
        ])
    },
    function (e, t, n) {
        var i = n(324)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\n.install-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -8px;\n  padding-left: 12px;\n  margin-left: -12px;\n  margin-right: -16px;\n  overflow: hidden; }\n  .install-list:hover {\n    overflow-y: overlay; }\n  .install-list::-webkit-scrollbar {\n    background: #F2F3F4;\n    width: 16px; }\n  .install-list::-webkit-scrollbar-track {\n    background: #F2F3F4; }\n    .install-list::-webkit-scrollbar-track:hover {\n      background-color: #F2F3F4; }\n  .install-list::-webkit-scrollbar-thumb {\n    background-color: #BABABA;\n    border-radius: 16px;\n    border: 5px solid #F2F3F4; }\n    .install-list::-webkit-scrollbar-thumb:hover {\n      background-color: #747576;\n      border-color: #F2F3F4; }\n  .install-list::-webkit-scrollbar-button {\n    display: none; }\n\n.add-editor-dialog {\n  width: 640px;\n  height: 460px;\n  margin-bottom: 0; }\n  .add-editor-dialog md-toolbar {\n    min-height: 52px; }\n    .add-editor-dialog md-toolbar .md-toolbar-tools {\n      height: 52px; }\n  .add-editor-dialog .md-steppers-header {\n    box-shadow: none; }\n    .add-editor-dialog .md-steppers-header .md-stepper-indicator:first-child .md-stepper-number {\n      margin: 0 8px 0 0px; }\n  .add-editor-dialog .md-steppers-horizontal .md-stepper-indicator:first-child .md-stepper-indicator-wrapper {\n    padding-left: 0; }\n  .add-editor-dialog .md-dialog-content {\n    padding: 0 24px; }\n\n.category-header {\n  font-weight: 500; }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(326)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\n.install-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -8px;\n  padding-left: 12px;\n  margin-left: -12px;\n  margin-right: -16px;\n  overflow: hidden; }\n  .install-list:hover {\n    overflow-y: overlay; }\n  .install-list::-webkit-scrollbar {\n    background: #F2F3F4;\n    width: 16px; }\n  .install-list::-webkit-scrollbar-track {\n    background: #F2F3F4; }\n    .install-list::-webkit-scrollbar-track:hover {\n      background-color: #F2F3F4; }\n  .install-list::-webkit-scrollbar-thumb {\n    background-color: #BABABA;\n    border-radius: 16px;\n    border: 5px solid #F2F3F4; }\n    .install-list::-webkit-scrollbar-thumb:hover {\n      background-color: #747576;\n      border-color: #F2F3F4; }\n  .install-list::-webkit-scrollbar-button {\n    display: none; }\n\n.add-custom-editor-dialog {\n  width: 640px;\n  height: 460px;\n  margin-bottom: 0; }\n  .add-custom-editor-dialog md-toolbar {\n    min-height: 52px; }\n    .add-custom-editor-dialog md-toolbar .md-toolbar-tools {\n      height: 52px; }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(328)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\n.install-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -8px;\n  padding-left: 12px;\n  margin-left: -12px;\n  margin-right: -16px;\n  overflow: hidden; }\n  .install-list:hover {\n    overflow-y: overlay; }\n  .install-list::-webkit-scrollbar {\n    background: #F2F3F4;\n    width: 16px; }\n  .install-list::-webkit-scrollbar-track {\n    background: #F2F3F4; }\n    .install-list::-webkit-scrollbar-track:hover {\n      background-color: #F2F3F4; }\n  .install-list::-webkit-scrollbar-thumb {\n    background-color: #BABABA;\n    border-radius: 16px;\n    border: 5px solid #F2F3F4; }\n    .install-list::-webkit-scrollbar-thumb:hover {\n      background-color: #747576;\n      border-color: #F2F3F4; }\n  .install-list::-webkit-scrollbar-button {\n    display: none; }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\neula-steps .eula-container {\n  padding: 0 16px 0 16px;\n  height: 310px;\n  width: 720px;\n  overflow: auto; }\n  eula-steps .eula-container::-webkit-scrollbar {\n    width: 1rem; }\n  eula-steps .eula-container::-webkit-scrollbar-thumb {\n    background-color: #C3C3C3;\n    border: 5px solid transparent;\n    border-radius: 11px;\n    background-clip: content-box; }\n  eula-steps .eula-container::-webkit-scrollbar-thumb:hover {\n    background-color: #7D7D7D; }\n  eula-steps .eula-container .eula-text {\n    white-space: pre-wrap; }\n\neula-steps .eula-agreement {\n  margin-top: 1rem;\n  margin-left: 1rem;\n  margin-bottom: 1rem; }\n  eula-steps .eula-agreement md-checkbox {\n    margin: 0; }\n\neula-steps md-toolbar {\n  min-height: 52px; }\n  eula-steps md-toolbar .md-toolbar-tools {\n    height: 52px; }\n\neula-steps md-dialog-content {\n  overflow: hidden; }\n\neula-steps md-dialog-actions {\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: rgba(0, 0, 0, 0.12); }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(330)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            'hub-icon md-icon.hub-icon {\n  line-height: inherit;\n  font-size: inherit; }\n\nhub-icon img.hub-icon {\n  height: inherit;\n  width: inherit; }\n',
            '',
        ])
    },
    ,
    ,
    ,
    function (e, t, n) {
        var i = n(335)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            '.general-list-container .preference-card {\n  margin-top: 0;\n  margin-left: 0;\n  margin-right: 0; }\n  .general-list-container .preference-card form {\n    margin-bottom: 0; }\n',
            '',
        ])
    },
    function (e, t, n) {
        var i = n(337)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            'license-selector .license-selector-container {\n  padding: 0 16px 0 16px;\n  height: 340px;\n  width: 640px; }\n  license-selector .license-selector-container .intro {\n    margin-bottom: 20px;\n    color: #757575; }\n  license-selector .license-selector-container .nested-radio-group {\n    padding: 0px 0px 16px 16px;\n    font-size: 12px; }\n  license-selector .license-selector-container .serial {\n    margin-left: 30px;\n    margin-top: 0; }\n  license-selector .license-selector-container .loading-serial {\n    margin-right: 10px; }\n\nlicense-selector md-radio-button:focus {\n  outline: none; }\n',
            '',
        ])
    },
    function (e, t, n) {
        var i = n(339)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #F2F3F4; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400; }\n\n.md-headline {\n  font-size: 27px;\n  /* Override from 24px */\n  font-weight: 500; }\n\n.md-title {\n  font-size: 18px;\n  /* Override from 20px */\n  font-weight: 500; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 500; }\n\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  /* Override from 87% */ }\n\n.md-tooltip {\n  font-size: 12px !important;\n  background-color: rgba(38, 39, 41, 0.8) !important;\n  line-height: 16px;\n  height: auto !important;\n  white-space: normal;\n  max-width: 240px;\n  padding: 6px 8px 6px 8px;\n  overflow-wrap: break-word; }\n\nbody {\n  background: #F2F3F4; }\n\nhtml {\n  background: #F2F3F4; }\n\nmd-content {\n  background: #F2F3F4; }\n\n.unity-icon {\n  font-family: 'unity';\n  line-height: 1;\n  letter-spacing: normal;\n  font-size: 24px;\n  -moz-font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\nmd-radio-button.md-align-top-left > div.md-container {\n  top: 50%; }\n\n.md-dialog-content-body {\n  white-space: pre-wrap;\n  line-height: 1.5; }\n\n.manual-license-popup {\n  width: 640px;\n  height: 340px;\n  margin-bottom: 0; }\n  .manual-license-popup .md-steppers-header {\n    box-shadow: none; }\n    .manual-license-popup .md-steppers-header .md-stepper-indicator:first-child .md-stepper-number {\n      margin: 0 8px 0 0px; }\n  .manual-license-popup .md-steppers-horizontal .md-stepper-indicator:first-child .md-stepper-indicator-wrapper {\n    padding-left: 0; }\n  .manual-license-popup .md-dialog-content {\n    padding: 0 24px; }\n  .manual-license-popup md-toolbar {\n    min-height: 52px; }\n    .manual-license-popup md-toolbar .md-toolbar-tools {\n      height: 52px; }\n  .manual-license-popup .license-text {\n    margin: 10px; }\n  .manual-license-popup .save-license-btn {\n    width: 250px; }\n",
            '',
        ])
    },
    function (e, t, n) {
        var i = n(341)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            'license-management .license-management-container {\n  margin: 0; }\n  license-management .license-management-container .license-links a {\n    font-size: 12px; }\n  license-management .license-management-container .license-links .separator {\n    width: 10px;\n    height: 0;\n    border-top: 1px solid #CFCFCF;\n    margin: 0 8px; }\n',
            '',
        ])
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
        var i = n(357)
        'string' == typeof i && (i = [[e.i, i, '']])
        var o = { hmr: !0, transform: void 0 }
        n(4)(i, o)
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        ;(e.exports = n(3)(!1)).push([
            e.i,
            'list-placeholder {\n  height: 100%; }\n  list-placeholder md-card {\n    height: 100%;\n    margin: 0;\n    text-align: center; }\n    list-placeholder md-card .icon-container {\n      width: 90px;\n      height: 90px;\n      border: solid 1px #ECECEC;\n      background-color: rgba(236, 236, 236, 0.2);\n      border-radius: 4px; }\n      list-placeholder md-card .icon-container md-icon {\n        width: 64px;\n        height: 64px;\n        font-size: 64px;\n        margin-top: auto; }\n    list-placeholder md-card .details {\n      width: 425px; }\n      list-placeholder md-card .details placeholder-details em {\n        color: #0C6CCB;\n        font-style: normal;\n        cursor: pointer; }\n      list-placeholder md-card .details placeholder-details .em-disabled {\n        pointer-events: none;\n        text-decoration: line-through; }\n',
            '',
        ])
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
        'use strict'
        n.r(t)
        var i = n(1),
            o = n.n(i),
            r = n(10),
            s = n.n(r),
            a = n(15),
            l = n.n(a),
            d = (n(72), n(275), n(276), n(278), n(34)),
            c = n(199),
            p = { templateUrl: n.n(c).a },
            u = n(200),
            h = n.n(u),
            m = n(8),
            g = n.n(m),
            f = n(9),
            v = n.n(f)
        var b = class {
            constructor(e) {
                this.$rootScope = e
            }
            on(e, t, n) {
                const i = this.$rootScope.$on(e, t)
                return o.a.isDefined(n) && n.addUnregistration(i), i
            }
        }
        const E = { DOWNGRADE: -1, UPGRADE: 1, NONE: 0 },
            w = { SUCCESS: 0, MIGRATE: 1, PACKAGES_FOLDER_EXISTS: 2 },
            y = {
                SUCCESS: 0,
                COULD_NOT_CREATE_PACKAGES_FOLDER: 1,
                COULD_NOT_MOVE_MANIFEST: 2,
            },
            S = '2018.3.0a1'
        class x extends b {
            constructor(e, t, n, i, o, r, s, a, l) {
                super(r),
                    (this.localProjectClient = e),
                    (this.cloudCollabClient = t),
                    (this.$log = i),
                    (this.errorService = n),
                    (this.projectNotifier = o),
                    (this.$rootScope = r),
                    (this.projectUpdaterService = s),
                    (this.unityAuthClient = a),
                    (this.projects = []),
                    (this.$translate = l)
            }
            async init() {
                this._initRecentProjects(),
                    this._initCurrentPlatformOption(),
                    this.$rootScope.$on('$translateChangeSuccess', () =>
                        this._initCurrentPlatformOption()
                    )
            }
            async _initRecentProjects() {
                await this._updateRecentProjects(),
                    this.projectNotifier.on('updated', async (e, t, n) => {
                        ;(this.projects = JSON.parse(JSON.stringify(t))),
                            n && this._setAddedProjectFlag(n),
                            this.$rootScope.$emit('projects-updated')
                    })
            }
            async _initCurrentPlatformOption() {
                this.currentPlatformOption = await this.$translate(
                    'PROJECT.PROJECT.CURRENT_PLATFORM'
                )
            }
            _setAddedProjectFlag(e) {
                const t = this.projects.find(
                    (t) => this._getPlatformSpecificPath(t.path) === e
                )
                t && (t.isAddedProject = !0)
            }
            _getPlatformSpecificPath(e) {
                return e.replace(
                    new RegExp('/', 'g'),
                    this.localProjectClient.userDefault
                        .platformPathNameSeparator
                )
            }
            getRecentProjects() {
                return this.projects
            }
            async _updateRecentProjects() {
                ;(this.projects = await this.localProjectClient
                    .getRecentProjects()
                    .then((e) => JSON.parse(JSON.stringify(e)))),
                    this.$rootScope.$emit('projects-updated')
            }
            async updateCloudProjectsCache() {
                let e = !1
                try {
                    e = await this.cloudCollabClient.updateCloudCache()
                } catch (e) {
                    try {
                        const t = await this.unityAuthClient.getConnectInfo()
                        !0 === JSON.parse(t).online &&
                            (this.errorService.showError(
                                'ERROR.PROJECT.FAILED_LOADING_CLOUD'
                            ),
                            this.$log.warn(e))
                    } catch (e) {
                        this.errorService.showError(
                            'ERROR.PROJECT.FAILED_LOADING_CLOUD'
                        ),
                            this.$log.warn(e)
                    }
                }
                return e
            }
            async openProject(e) {
                try {
                    if (
                        v.a.isValid(e.selectedVersion) &&
                        v.a.isValid(e.version) &&
                        new v.a(e.selectedVersion).compare(S) > 0
                    ) {
                        const t = await this.localProjectClient.needsManifestRelocation(
                                e.path
                            ),
                            n = t.code !== y.SUCCESS,
                            i = e.version
                                ? new v.a(e.selectedVersion).compare(e.version)
                                : 0
                        await this.projectUpdaterService.updateProject(
                            e,
                            n,
                            i,
                            t
                        )
                    } else
                        await this.localProjectClient.openProject(
                            e.path,
                            e.selectedVersion,
                            { buildPlatform: e.platform, source: 'projects' }
                        )
                } catch (e) {
                    if (angular.isDefined(e)) throw e
                }
            }
            openCloudProject(e, t, n, i, o, r) {
                return this.cloudCollabClient.openProject(e, t, n, i, o, {
                    buildPlatform: r,
                })
            }
            async addProject() {
                await this.localProjectClient.addProject()
            }
            async removeProject(e) {
                await this.localProjectClient.removeProject(e)
            }
            getUnityTeamsUrlForProject(e) {
                return this.cloudCollabClient.getUnityTeamsUrlForProject(e)
            }
            clearAddedProjectFlag(e) {
                const t = this.projects.find((t) => t.path === e.path)
                t && delete t.isAddedProject
            }
        }
        x.$inject = [
            'localProjectClient',
            'cloudCollabClient',
            'errorService',
            '$log',
            'projectNotifier',
            '$rootScope',
            'projectUpdaterService',
            'unityAuthClient',
            '$translate',
        ]
        var C = x,
            L = n(201),
            $ = n.n(L),
            N = n(11)
        class T extends N.a {
            constructor(e, t, n, i, o, r, s, a, l, d, c, p, u) {
                super(),
                    (this.projectService = e),
                    (this.$rootScope = t),
                    (this.localWindowClient = n),
                    (this.localConfigClient = i),
                    (this.localEditorManagerClient = o),
                    (this.cloudCollabClient = r),
                    (this.installService = s),
                    (this.infoToastService = a),
                    (this.unityAuthClient = l),
                    (this.authNotifier = d),
                    (this.errorService = p),
                    (this.$log = c),
                    (this.$window = u),
                    (this.constants = {
                        LOCAL_STORAGE_PREVIOUS_EDITOR_FOR_NEW:
                            'previousEditorUsedForNew',
                    })
            }
            async $onInit() {
                ;(this.projects = []),
                    (this.modalEditor = this.localEditorManagerClient.getModalEditor()),
                    (this.isDebugMode = void 0 !== this.modalEditor),
                    this.isDebugMode
                        ? (this.editors = [this.modalEditor])
                        : (this.editors = this.installService.getInstalledEditors()),
                    this._registerEvents(),
                    this._updateRecentProjects()
                try {
                    const e = await this.unityAuthClient.getConnectInfo()
                    this._connectInfo = JSON.parse(e)
                } catch (e) {
                    this.$log.warn(e)
                }
                void 0 === this._connectInfo ||
                    !0 !== this._connectInfo.loggedIn ||
                    this.localConfigClient.isCloudProjectsDisabled() ||
                    this._getCloudProjects()
            }
            $onDestroy() {
                super.$onDestroy(),
                    this.infoToastService.remove(this.toast),
                    (this.destroyed = !0)
            }
            _getCloudProjects() {
                this._getCloudProjectFromCache(), this._showRefreshCloudToast()
            }
            async _showRefreshCloudToast() {
                const e = await this.projectService.updateCloudProjectsCache()
                !0 !== this.destroyed &&
                    e &&
                    (this.toast = await this.infoToastService.showMessageCode(
                        'PROJECT.PROJECT.CLOUD_AVAILABLE',
                        {},
                        {
                            sticky: !0,
                            actions: [
                                {
                                    message: 'COMMON.REFRESH',
                                    callback: () => {
                                        this._mergeWithLocalProjects(
                                            this.cloudCollabClient.getCache()
                                        )
                                    },
                                },
                            ],
                        }
                    ))
            }
            _getCloudProjectFromCache() {
                !0 === this.cloudCollabClient.hasCache() &&
                    this._mergeWithLocalProjects(
                        this.cloudCollabClient.getCache()
                    )
            }
            _normalizeCloudProjects(e) {
                return (
                    (e.cloudEnabled = !0),
                    (e.collabEnabled = !0),
                    (e.cloudProjectId = e.guid),
                    (e.onDisk = !1),
                    (e.resultorganizationId = e.org_id),
                    (e.title = e.name),
                    (e.version = e.unity_version),
                    (e.selectedVersion = e.version),
                    (e.lastModified = e.updated_at),
                    e
                )
            }
            _mergeWithLocalProjects(e) {
                ;(this.projects = this.projects.filter((e) => !0 === e.onDisk)),
                    this.projects.forEach((t) => {
                        e.find((e) => e.guid === t.cloudProjectId)
                            ? (t.collabEnabled = !0)
                            : (t.collabEnabled = !1)
                    }),
                    (e = e.filter((e) =>
                        angular.isUndefined(
                            this.projects.find(
                                (t) => t.cloudProjectId === e.guid
                            )
                        )
                    )).forEach((e) => this._normalizeCloudProjects(e)),
                    (this.projects = this.projects.concat(e))
            }
            _registerEvents() {
                this.installService.on(
                    'editors-changed',
                    () => {
                        ;(this.editors = this.installService.getInstalledEditors()),
                            this.$rootScope.$apply()
                    },
                    this
                ),
                    this.authNotifier.on(
                        'connectInfoChanged',
                        () => {
                            this._onConnectInfoChanged()
                        },
                        this
                    ),
                    this.projectService.on(
                        'projects-updated',
                        () => {
                            this._updateRecentProjects(),
                                this._connectInfo &&
                                    !0 === this._connectInfo.loggedIn &&
                                    !this.localConfigClient.isCloudProjectsDisabled() &&
                                    this._getCloudProjects(),
                                this.$rootScope.$apply()
                        },
                        this
                    )
            }
            async _onConnectInfoChanged() {
                try {
                    let e = await this.unityAuthClient.getConnectInfo()
                    ;(e = JSON.parse(e)).loggedIn !==
                        this._connectInfo.loggedIn &&
                        ((this._connectInfo = e),
                        !0 === this._connectInfo.loggedIn
                            ? (this.localConfigClient.isCloudProjectsDisabled() ||
                                  this._getCloudProjects(),
                              this.$rootScope.$apply())
                            : this._resetProjectsToLoggedOutState())
                } catch (e) {
                    this.$log.warn(e)
                }
            }
            _resetProjectsToLoggedOutState() {
                ;(this.projects = this.projects.filter((e) => !0 === e.onDisk)),
                    this.projects.forEach((e) => {
                        e.collabEnabled = !1
                    }),
                    this.infoToastService.remove(this.toast)
            }
            async addProject() {
                try {
                    await this.projectService.addProject()
                } catch (e) {
                    this.errorService.showError(e.errorCode, e.params)
                }
            }
            getProjects() {
                return this.projects
            }
            async openEditorList(e, t) {
                0 === this.editors.length
                    ? await this.infoToastService.showMessageCode(
                          'ERROR.NO_EDITOR_NO_NEW_PROJECT'
                      )
                    : e.open(t)
            }
            async showNewProjectWindow(e) {
                0 !== this.editors.length
                    ? (this.isDebugMode && (e = this.modalEditor),
                      e || (e = this._getPreviousEditorForNew()),
                      (e = e || this.editors[0]),
                      this.localWindowClient.showNewProjectWindow(e),
                      this.$window.localStorage.setItem(
                          this.constants.LOCAL_STORAGE_PREVIOUS_EDITOR_FOR_NEW,
                          e.version
                      ))
                    : await this.infoToastService.showMessageCode(
                          'ERROR.NO_EDITOR_NO_NEW_PROJECT'
                      )
            }
            _getPreviousEditorForNew() {
                const e = this.$window.localStorage.getItem(
                    this.constants.LOCAL_STORAGE_PREVIOUS_EDITOR_FOR_NEW
                )
                return this.editors.find((t) => t.version === e)
            }
            _updateRecentProjects() {
                ;(this.projects = this.projectService.getRecentProjects()),
                    this.projects.forEach((e) => {
                        ;(e.onDisk = !0),
                            this.isDebugMode
                                ? (e.selectedVersion = this.modalEditor.version)
                                : (e.selectedVersion = e.version)
                    })
            }
        }
        T.$inject = [
            'projectService',
            '$rootScope',
            'localWindowClient',
            'localConfigClient',
            'localEditorManagerClient',
            'cloudCollabClient',
            'installService',
            'infoToastService',
            'unityAuthClient',
            'authNotifier',
            '$log',
            'errorService',
            '$window',
        ]
        var _ = { templateUrl: $.a, controller: T },
            A =
                (n(280),
                o.a.module('project.recent', []).component('projectRecent', _)
                    .name),
            I = n(202),
            O = n.n(I)
        class R {
            static compareVersion(e, t) {
                return 'string' !== e.type || 'string' !== t.type
                    ? e.index < t.index
                        ? -1
                        : 1
                    : !1 === v.a.isValid(e.value)
                    ? -1
                    : !1 === v.a.isValid(t.value)
                    ? 1
                    : new v.a(e.value).compare(t.value)
            }
            static comparePlatform(e, t) {
                return 'object' !== e.type || angular.isUndefined(e.value.name)
                    ? -1
                    : 'object' !== t.type || angular.isUndefined(t.value.name)
                    ? 1
                    : e.value.name < t.value.name
                    ? -1
                    : 1
            }
        }
        let k
        k = {
            collabOnDisk: {
                options: [
                    {
                        title: 'PLATFORM.SHOW_ITEM_IN_FOLDER',
                        onClick: 'showItemInFolder',
                    },
                    {
                        title: 'PROJECT.ADVANCED_SETTINGS.TITLE',
                        onClick: 'showAdvancedSettings',
                    },
                    {
                        title: 'PROJECT.PROJECT.REMOVE_PROJECT',
                        onClick: 'removeProject',
                    },
                    {
                        title: 'PROJECT.PROJECT.GO_DASHBOARD',
                        onClick: 'showDashboard',
                    },
                ],
            },
            download: { icon: 'cloud_download', onClick: 'openProject' },
            noSeat: {
                icon: 'warning',
                iconClass: 'warning-icon',
                options: [
                    {
                        title: 'PROJECT.GET_UNITY_TEAMS',
                        onClick: 'getUnityTeams',
                    },
                ],
            },
        }
        var D = class {
            static getMenuInfoForProject(e) {
                return e.onDisk
                    ? e.collabEnabled
                        ? k.collabOnDisk
                        : { options: k.collabOnDisk.options.slice(0, 3) }
                    : e.hasSeat
                    ? k.download
                    : k.noSeat
            }
        }
        class P {
            get constants() {
                return {
                    CURRENT_SORT_NAME: 'project-recent.currentSortName',
                    CURRENT_SORT_ASCENDING: 'project-recent.currentSortAsc',
                }
            }
            constructor(e, t, n, i, o, r, s, a, l, d, c) {
                ;(this.$window = e),
                    (this.$mdDialog = t),
                    (this.projectService = n),
                    (this.localWindowClient = i),
                    (this.localProjectClient = o),
                    (this.errorService = r),
                    (this.infoToastService = s),
                    (this.dialogService = c),
                    (this.showFilter = !1),
                    (this.filterQuery = ''),
                    (this.columnsInfo = [
                        {
                            name: 'title',
                            ascending: !1,
                            label: 'PROJECT.PROJECT.NAME',
                        },
                        {
                            name: 'version',
                            ascending: !1,
                            label: 'PROJECT.PROJECT.VERSION',
                            comparator: R.compareVersion,
                        },
                        {
                            name: 'platform',
                            ascending: !1,
                            label: 'PROJECT.PROJECT.PLATFORM',
                            comparator: R.comparePlatform,
                        },
                        {
                            name: 'lastModified',
                            ascending: !0,
                            label: 'PROJECT.PROJECT.DATE',
                        },
                    ]),
                    (this.localEditorManagerClient = a),
                    (this.unityReleasesClient = l),
                    (this.$state = d)
            }
            $onInit() {
                ;(this.currentSort = this._getCurrentSort()),
                    (this.projects = JSON.parse(JSON.stringify(this.projects))),
                    (this.editors = JSON.parse(JSON.stringify(this.editors))),
                    (this.modalEditor = this.localEditorManagerClient.getModalEditor()),
                    (this.isDebugMode = void 0 !== this.modalEditor),
                    this.projects.forEach((e) =>
                        this._associateDropdownMenuToProject(e)
                    )
            }
            _getCurrentSort() {
                const e = this.$window.localStorage.getItem(
                        this.constants.CURRENT_SORT_NAME
                    ),
                    t = this.$window.localStorage.getItem(
                        this.constants.CURRENT_SORT_ASCENDING
                    ),
                    n = e || 'lastModified',
                    i = this.columnsInfo.find((e) => e.name === n)
                return (
                    i && null !== t && (i.ascending = 'true' === t),
                    i || this.columnsInfo[0]
                )
            }
            _associateDropdownMenuToProject(e) {
                const t = D.getMenuInfoForProject(e)
                ;(e.menuInfo = { icon: t.icon, iconClass: t.iconClass }),
                    t.onClick &&
                        (e.menuInfo.onClick = this[t.onClick].bind(this)),
                    t.options &&
                        (e.menuInfo.options = this._bindOptionsWithContext(
                            t.options
                        ))
            }
            _bindOptionsWithContext(e) {
                return e.map((e) => ({
                    title: e.title,
                    onClick: this[e.onClick].bind(this),
                }))
            }
            $onChanges(e) {
                angular.forEach(e, (e, t) => {
                    void 0 !== e.currentValue &&
                        (this[t] = JSON.parse(JSON.stringify(e.currentValue)))
                }),
                    e.projects &&
                        this.projects.forEach((e) =>
                            this._associateDropdownMenuToProject(e)
                        )
            }
            updateCurrentSort(e) {
                ;(this.currentSort = e),
                    this.$window.localStorage.setItem(
                        this.constants.CURRENT_SORT_NAME,
                        e.name
                    ),
                    this.$window.localStorage.setItem(
                        this.constants.CURRENT_SORT_ASCENDING,
                        e.ascending
                    )
            }
            showInputFilter() {
                this.showFilter = !0
            }
            hideInputFilter() {
                ;(this.showFilter = !1), (this.filterQuery = '')
            }
            updateEditor({ project: e, version: t }) {
                e.selectedVersion = t
            }
            updateBuildPlatform({ project: e, platform: t }) {
                e.platform = t
            }
            async openProjectCheck(e) {
                !0 === e.onDisk && this.openProject(e)
            }
            async openProject(e) {
                if (
                    e.isCustomEditor ||
                    this.editors.find((t) => t.version === e.selectedVersion)
                )
                    if (!0 === e.onDisk)
                        try {
                            await this.projectService.openProject(e)
                        } catch (e) {
                            this.errorService.showError(e.errorCode, e.params)
                        }
                    else
                        try {
                            await this.projectService.openCloudProject(
                                e.org_id,
                                e.id,
                                e.title,
                                e.cloudProjectId,
                                e.selectedVersion,
                                e.platform
                            )
                        } catch (e) {
                            this.errorService.showError(e.errorCode, e.params)
                        }
                else
                    e.changeset && e.version
                        ? this.infoToastService.showMessageCode(
                              'PROJECT.PROJECT.VERSION_MISSING_INSTALL',
                              { version: e.version },
                              {
                                  icon: this.infoToastService.icoERROR,
                                  unique: !0,
                                  actions: [
                                      {
                                          message: 'PROJECT.PROJECT.INSTALL',
                                          callback: async () => {
                                              await this.unityReleasesClient.setCustomEditorInfo(
                                                  e.version,
                                                  e.changeset
                                              ),
                                                  this.$state.go('install', {
                                                      custom: !0,
                                                  })
                                          },
                                      },
                                      {
                                          message: 'COMMON.DISMISS',
                                          callback: () => {},
                                      },
                                  ],
                              }
                          )
                        : this.infoToastService.showMessageCode(
                              'PROJECT.PROJECT.VERSION_MISSING',
                              { version: e.version },
                              {
                                  icon: this.infoToastService.icoERROR,
                                  unique: !0,
                              }
                          )
            }
            showItemInFolder(e) {
                this.localWindowClient.showItemInFolder(e.path)
            }
            showAdvancedSettings(e) {
                this.$mdDialog.show({
                    template:
                        '<advanced-settings project="$ctrl.project"></advanced-settings>',
                    plain: !0,
                    bindToController: !0,
                    controllerAs: '$ctrl',
                    controller() {
                        this.project = e
                    },
                })
            }
            async removeProject(e) {
                ;(await this.dialogService.confirm({
                    title: 'PROJECT.PROJECT.REMOVE_PROJECT_TITLE',
                    textContent: 'PROJECT.PROJECT.REMOVE_PROJECT_CONTENT',
                    confirm: 'PROJECT.PROJECT.REMOVE_PROJECT'.toUpperCase(),
                })) &&
                    (this.projectService.removeProject(e.path),
                    await this.localProjectClient.clearProjectInfo(e.path))
            }
            showDashboard(e) {
                this.localWindowClient.openExternal(
                    `https://developer.cloud.unity3d.com/orgs/${e.resultorganizationId}/projects/${e.cloudProjectId}/`,
                    !0
                )
            }
            getUnityTeams(e) {
                const t = this.projectService.getUnityTeamsUrlForProject(e)
                this.localWindowClient.openExternal(t, !0)
            }
            newProjectHighlighted(e) {
                this.projectService.clearAddedProjectFlag(e)
            }
        }
        P.$inject = [
            '$window',
            '$mdDialog',
            'projectService',
            'localWindowClient',
            'localProjectClient',
            'errorService',
            'infoToastService',
            'localEditorManagerClient',
            'unityReleasesClient',
            '$state',
            'dialogService',
        ]
        var F = {
                bindings: { projects: '<', editors: '<', isDebugMode: '<' },
                templateUrl: O.a,
                controller: P,
            },
            M = n(0),
            j = n.n(M),
            U = n(203),
            z = n.n(U)
        class B {
            constructor(e, t, n, i) {
                ;(this.$translate = t),
                    (this.EventEmitter = e),
                    (this.localProjectClient = n),
                    (this.projectService = i)
            }
            $onInit() {
                ;(this.title = this.project.title),
                    this.project.path &&
                        (this.path = this.project.path.replace(
                            new RegExp('/', 'g'),
                            this.localProjectClient.userDefault
                                .platformPathNameSeparator
                        )),
                    !0 === this.project.isCustomEditor &&
                        (this.project.selectedVersion = null),
                    this.isDebugMode && this.editors.length > 0
                        ? ((this.editor = this.editors[0]),
                          (this.project.selectedVersion = this.editors[0].version))
                        : (this.editor = this.editors.find(
                              (e) => e.version === this.project.version
                          )),
                    (this.platform = {}),
                    !1 === this.project.onDisk
                        ? (this.date = this.transToLocal(
                              j()(this.project.updated_at).fromNow()
                          ))
                        : (this.date = this.transToLocal(
                              j()(this.project.lastModified).fromNow()
                          )),
                    (this.platforms = angular.isDefined(this.editor)
                        ? this.editor.buildPlatforms
                        : []),
                    this.defaultPlatformToCurrent()
            }
            transToLocal(e) {
                var t = this.$translate.use()
                if ('zh-CN' === t || 'zh_CN' === t) {
                    var n = e.toUpperCase().split(' ')
                    if ('IN' === n[0]) {
                        var i = n.shift()
                        n.push(i)
                    }
                    if (!this.checkDateFormat(n)) return e
                    var o = ''
                    o =
                        'FEW' === n[1]
                            ? this.$translate.instant('PROJECT.DATE.AFEW')
                            : 'A' === n[0] || 'AN' === n[0]
                            ? '1'
                            : n[0]
                    var r = `PROJECT.DATE.${n[n.length - 2]}`
                    return (
                        (r = r.endsWith('S') ? r.slice(0, r.length - 1) : r),
                        (o += this.$translate.instant(r)),
                        (o += this.$translate.instant(
                            `PROJECT.DATE.${n[n.length - 1]}`
                        ))
                    )
                }
                return e
            }
            checkDateFormat(e) {
                var t = e.length
                return (
                    !(t < 3 || t > 4) &&
                    ('IN' === e[t - 1] || 'AGO' === e[t - 1]) &&
                    (4 !== t || 'FEW' === e[1]) &&
                    !!new Set([
                        'SECOND',
                        'MINUTE',
                        'HOUR',
                        'DAY',
                        'MONTH',
                        'YEAR',
                        'SECONDS',
                        'MINUTES',
                        'HOURS',
                        'DAYS',
                        'MONTHS',
                        'YEARS',
                    ]).has(e[t - 2])
                )
            }
            updateEditor(e) {
                this.onEditorUpdate(
                    this.EventEmitter({
                        version: e.version,
                        project: this.project,
                    })
                ),
                    (this.platforms = e.buildPlatforms),
                    this.defaultPlatformToCurrent()
            }
            defaultPlatformToCurrent() {
                ;(this.platform = {}),
                    this.platforms.length >= 1 &&
                        ((this.platform = {
                            name: this.projectService.currentPlatformOption,
                        }),
                        (this.platforms = [
                            { name: this.projectService.currentPlatformOption },
                            ...this.platforms,
                        ]))
            }
            updatePlatform(e) {
                e.name === this.projectService.currentPlatformOption &&
                    (e = void 0),
                    this.onPlatformUpdate(
                        this.EventEmitter({
                            platform: e,
                            project: this.project,
                        })
                    )
            }
            iconClicked() {
                this.project.menuInfo.onClick &&
                    this.project.menuInfo.onClick(this.project)
            }
        }
        B.$inject = [
            'EventEmitter',
            '$translate',
            'localProjectClient',
            'projectService',
        ]
        var V = {
                bindings: {
                    project: '<',
                    editors: '<',
                    onEditorUpdate: '&',
                    onPlatformUpdate: '&',
                    isDebugMode: '<',
                },
                templateUrl: z.a,
                controller: B,
            },
            G = (n(283), (e) => ({ $event: e })),
            J = o.a
                .module('project.list-item', [g.a])
                .component('projectListItem', V)
                .value('EventEmitter', G)
                .config([
                    '$translatePartialLoaderProvider',
                    (e) => {
                        e.addPart('project')
                    },
                ]).name,
            W = n(13),
            Y = n.n(W),
            q = n(204),
            H = n.n(q)
        n(285)
        class K {
            constructor(e, t, n, i, o) {
                ;(this.$mdToast = e),
                    (this.message = t),
                    (this.actions = n),
                    (this.icon = i),
                    (this.toastInstance = o),
                    (this.iconValue = ''),
                    (this.iconClass = '')
            }
            $onInit() {
                ;(this.toastInstance.controllerInstance = this),
                    angular.isDefined(this.icon) &&
                        ((this.iconValue = this.icon.value),
                        (this.iconClass = this.icon.style))
            }
            isDefaultAction() {
                return !(
                    this.actions &&
                    this.actions instanceof Array &&
                    this.actions.length > 0
                )
            }
            closeToast() {
                this.$mdToast.hide()
            }
        }
        K.$inject = ['$mdToast', 'message', 'actions', 'icon', 'toastInstance']
        var X = K
        const Q = [
            { name: 'DONE', value: 'check_circle', style: 'ico-done' },
            { name: 'ERROR', value: 'warning', style: 'ico-error' },
        ]
        class Z {
            constructor(e, t, n, i) {
                ;(this.$mdToast = e),
                    (this.$translate = t),
                    (this.$log = n),
                    (this.queue = []),
                    (this.isShowing = !1),
                    (this.hideDelay = 5e3),
                    (this.localLicenseClient = i),
                    this._addIconAccessors()
            }
            _addIconAccessors() {
                Q.forEach((e) => {
                    this[`ico${e.name}`] = e
                })
            }
            showMessage(e, t = {}) {
                return this._addToast(e, t)
            }
            async showMessageCode(e, t, n = {}) {
                const i = [
                    'ERROR.LICENSE.NO_VALID_LICENSE',
                    'ERROR.LICENSE.NEAR_EXPIRATION',
                    'ERROR.LAUNCH_EDITOR.LICENSE',
                ]
                try {
                    return this.localLicenseClient.isLicenseEntitlementEnabled() &&
                        i.indexOf(e) > -1
                        ? null
                        : this.showMessage(await this.$translate(e, t), n)
                } catch (t) {
                    return (
                        t === e
                            ? this.$log.warn(
                                  `Message code ${e} was not found in current locale.`
                              )
                            : this.$log.warn('Could not translate message:', t),
                        null
                    )
                }
            }
            remove(e) {
                angular.isDefined(e) &&
                    angular.isDefined(e.controllerInstance) &&
                    angular.isDefined(e.controllerInstance.$mdToast) &&
                    e.controllerInstance.$mdToast.hide()
                const t = this.queue.indexOf(e)
                ;-1 !== t && this.queue.splice(t, 1)
            }
            _addToQueue(e, t) {
                return (
                    !!(
                        !1 === t ||
                        (!0 === t && this._isMessageUnique(e.locals.message))
                    ) && (this.queue.push(e), !0)
                )
            }
            _isMessageUnique(e) {
                return void 0 === this.queue.find((t) => t.locals.message === e)
            }
            _addToast(
                e,
                {
                    hideDelay: t = this.hideDelay,
                    icon: n,
                    unique: i = !1,
                    sticky: o,
                    actions: r,
                } = {}
            ) {
                const s = {
                    templateUrl: H.a,
                    plain: !0,
                    bindToController: !0,
                    controllerAs: '$ctrl',
                    hideDelay: !0 === o ? 0 : t,
                    position: 'bottom right left',
                    locals: { message: e, actions: r, icon: n },
                    controller: X,
                }
                return (
                    (s.locals.toastInstance = s),
                    !0 === this._addToQueue(s, i)
                        ? (this._showToast(), s)
                        : null
                )
            }
            _dismissCurrentToast(e) {
                ;(this.isShowing = !1), this.remove(e)
            }
            async _showToast() {
                if (!1 === this.isShowing && this.queue.length > 0) {
                    const e = this.queue[0]
                    this.isShowing = !0
                    try {
                        await this.$mdToast.show(e),
                            this._dismissCurrentToast(e)
                    } catch (t) {
                        this._dismissCurrentToast(e)
                    }
                    await this._showToast()
                }
            }
        }
        Z.$inject = ['$mdToast', '$translate', '$log', 'localLicenseClient']
        var ee = Z,
            te = o.a
                .module('infoToast', [l.a, Y.a])
                .service('infoToastService', ee).name,
            ne = n(2),
            ie = n.n(ne),
            oe = (() => {
                class e {
                    constructor(e) {
                        ;(this.ipcNotifier = e),
                            (this.events = {
                                userInfoChanged: 'userInfo.changed',
                                connectInfoChanged: 'connectInfo.changed',
                            }),
                            e.registerRemoteEvents(ie.a.values(this.events))
                    }
                    on(e, t, n) {
                        this.ipcNotifier.on(this.events, e, t, n)
                    }
                }
                return (e.$inject = ['ipcNotifier']), e
            })(),
            re = (() => {
                class e {
                    constructor(e) {
                        ;(this.ipcNotifier = e),
                            (this.events = {
                                start: 'download.start',
                                end: 'download.end',
                                'end.editor': 'download.end.editor',
                                'end.cluster': 'download.end.cluster',
                                error: 'download.error',
                                'error.editor': 'download.error.editor',
                                'error.cluster': 'download.error.cluster',
                                'warning.cluster': 'download.warning.cluster',
                                progress: 'download.progress',
                                cancel: 'download.cancel',
                                cancelModule: 'download.cancelModule',
                                nospace: 'download.nospace',
                            }),
                            e.registerRemoteEvents(ie.a.values(this.events))
                    }
                    on(e, t, n) {
                        this.ipcNotifier.on(this.events, e, t, n)
                    }
                }
                return (e.$inject = ['ipcNotifier']), e
            })(),
            se = (() => {
                class e {
                    constructor(e) {
                        ;(this.ipcNotifier = e),
                            (this.events = {
                                updated: 'license.updated',
                                error: 'license.error',
                                initialized: 'license.initialized',
                                survey: 'license.survey',
                                licenseNew: 'license.licenseNew',
                                valid: 'license.valid',
                                invalid: 'license.invalid',
                                maintenance: 'license.maintenance',
                                issued: 'license.issued',
                                returned: 'license.returned',
                            }),
                            e.registerRemoteEvents(ie.a.values(this.events))
                    }
                    on(e, t, n) {
                        this.ipcNotifier.on(this.events, e, t, n)
                    }
                }
                return (e.$inject = ['ipcNotifier']), e
            })(),
            ae = (() => {
                class e {
                    constructor(e) {
                        ;(this.ipcNotifier = e),
                            (this.events = {
                                queued: 'installer.queued',
                                start: 'installer.start',
                                end: 'installer.end',
                                'modules.end': 'installer.modules.end',
                                freezeUACActions: 'installer.freezeUACActions',
                                errorAutoLocate: 'auto.locate.error',
                                availableEditorsChanged:
                                    'available-editors.changed',
                                warning: 'installer.warning',
                            }),
                            e.registerRemoteEvents(ie.a.values(this.events))
                    }
                    on(e, t, n) {
                        this.ipcNotifier.on(this.events, e, t, n)
                    }
                }
                return (e.$inject = ['ipcNotifier']), e
            })()
        class le {
            constructor(e, t, n, i, o, r, s, a) {
                ;(this.infoToastService = e),
                    (this.downloadNotifier = t),
                    (this.licenseNotifier = n),
                    (this.umTopNavService = o),
                    (this.installNotifier = r),
                    (this.authNotifier = s),
                    (this.$state = i),
                    (this.errorsWithAction = {}),
                    (this.offlineErrorIsShown = !1),
                    (this.localLicenseClient = a)
            }
            init() {
                this._registerEvents(), this._initErrorsWithActions()
            }
            _registerEvents() {
                ;[
                    'error',
                    'error.editor',
                    'error.cluster',
                    'warning.cluster',
                    'nospace',
                ].forEach((e) => {
                    this.downloadNotifier.on(e, (e, t, n) =>
                        this.showError(t, n)
                    )
                }),
                    this.licenseNotifier.on('error', (e, t) => {
                        t.errorCode
                            ? this.showError(t.errorCode, t.params)
                            : t.message && this._showErrorMessage(t.message)
                    }),
                    this.installNotifier.on('errorAutoLocate', (e, t) => {
                        t.errorCode
                            ? this.showError(t.errorCode, t.params)
                            : t.message && this._showErrorMessage(t.message)
                    }),
                    this.installNotifier.on('warning', (e, t) => {
                        t.errorCode
                            ? this.showError(t.errorCode, t.params, !0)
                            : t.message && this._showErrorMessage(t.message, !0)
                    }),
                    this.authNotifier.on('connectInfoChanged', (e, t) => {
                        t.online || !1 !== this.offlineErrorIsShown
                            ? t.online && (this.offlineErrorIsShown = !1)
                            : (this.showError('ERROR.SERVER_UNRESPONSIVE'),
                              (this.offlineErrorIsShown = !0))
                    })
            }
            async showError(e, t, n = !1) {
                const i = this._findActions(e)
                ;(t = t ? t.i18n : void 0),
                    await this.infoToastService.showMessageCode(e, t, {
                        actions: i,
                        icon: this.infoToastService.icoERROR,
                        unique: !0,
                        sticky: n,
                    })
            }
            async _showErrorMessage(e, t = !1) {
                await this.infoToastService.showMessage(e, {
                    icon: this.infoToastService.icoERROR,
                    unique: !0,
                    sticky: t,
                })
            }
            _initErrorsWithActions() {
                this.errorsWithAction = {
                    'ERROR.LAUNCH_EDITOR.LICENSE': [
                        {
                            message: 'LICENSE.MANAGE_LICENSE',
                            callback: () => {
                                this.localLicenseClient.isLicenseEntitlementEnabled() ||
                                    this.umTopNavService.push({
                                        title:
                                            'GENERAL_PREFERENCES.PREFERENCES',
                                        state: 'licenseManagement',
                                    })
                            },
                        },
                    ],
                }
            }
            _findActions(e) {
                return this.errorsWithAction[e] || []
            }
        }
        le.$inject = [
            'infoToastService',
            'downloadNotifier',
            'licenseNotifier',
            '$state',
            'umTopNavService',
            'installNotifier',
            'authNotifier',
            'localLicenseClient',
        ]
        var de = le,
            ce = (() => {
                class e {
                    constructor(e) {
                        ;(this.ipcNotifier = e),
                            (this.events = {
                                'plugin.activated': 'plugin.activated',
                                'plugins.resolved': 'plugins.resolved',
                            }),
                            e.registerRemoteEvents(ie.a.values(this.events))
                    }
                    on(e, t, n) {
                        this.ipcNotifier.on(this.events, e, t, n)
                    }
                }
                return (e.$inject = ['ipcNotifier']), e
            })(),
            pe = n(205),
            ue = n.n(pe)
        class he {
            constructor(e, t, n, i, o, r, s, a, l) {
                ;(this.pluginManagerNotifier = e),
                    (this.pluginManagerClient = t),
                    (this.$ocLazyLoad = n),
                    (this.$log = i),
                    (this.$templateCache = o),
                    (this.$rootScope = r),
                    (this.hubFsClient = s),
                    (this.infoToastService = a),
                    (this.hubAutoUpdateClient = l),
                    (this._updateOptions = {
                        actions: [
                            {
                                message: 'COMMON.RESTART_NOW',
                                callback: () => {
                                    this.pluginManagerClient.restart()
                                },
                            },
                            {
                                message: 'COMMON.REMIND_LATER',
                                callback: () => {
                                    this.pluginManagerClient.remindLater()
                                },
                            },
                        ],
                        unique: !0,
                        sticky: !0,
                    })
            }
            init() {
                this._registerEvents(),
                    this._activatePluginsClientSide().then(() => {
                        this.pluginManagerClient.updateAvailable &&
                            this._showUpdate()
                    })
            }
            _registerEvents() {
                this.pluginManagerNotifier.on('plugin.activated', (e, t) =>
                    this.OnPluginActivated(t)
                ),
                    this.pluginManagerNotifier.on('plugins.resolved', () => {
                        this._showUpdate()
                    })
            }
            _showUpdate() {
                this.infoToastService.showMessageCode(
                    'UPDATE.PLUGINSDOWNLOADED',
                    null,
                    this._updateOptions
                )
            }
            async _activatePluginsClientSide() {
                const e = Object.keys(this.pluginManagerClient.pluginRegistry),
                    t = this.pluginManagerClient.pluginRegistry,
                    n = e.map((e) => {
                        const n = t[e]
                        return this._activatePlugin(n)
                    })
                await Promise.all(n)
            }
            async _activatePlugin(e) {
                const t = ue.a.join(e.resolvedPath, 'client/dist/main.js')
                ;(await this.hubFsClient.pathExists(t)) &&
                    '' !== t &&
                    (await this.OnPluginActivated(t))
            }
            async OnPluginActivated(e) {
                try {
                    await this.$ocLazyLoad.load(e, { rerun: !0 })
                } catch (e) {
                    this.$log.error(e)
                }
            }
        }
        he.$inject = [
            'pluginManagerNotifier',
            'pluginManagerClient',
            '$ocLazyLoad',
            '$log',
            '$templateCache',
            '$rootScope',
            'hubFsClient',
            'infoToastService',
            'hubAutoUpdateClient',
        ]
        var me = he
        function ge(e) {
            return {
                restrict: 'A',
                scope: { trigger: '<focusMe' },
                link(t, n) {
                    t.$watch('trigger', (t) => {
                        !0 === t &&
                            e(() => {
                                n[0].focus()
                            })
                    })
                },
            }
        }
        ge.$inject = ['$timeout']
        var fe = ge
        function ve() {
            return {
                restrict: 'A',
                scope: {
                    flag: '<scrollOnFlag',
                    onComplete: '&scrollOnFlagComplete',
                },
                link(e, t) {
                    e.flag &&
                        ((t[0].parentNode.scrollTop =
                            t[0].offsetTop - t[0].parentNode.offsetTop),
                        t.addClass('scroll-highlight'),
                        e.onComplete(),
                        t[0].addEventListener('animationend', () => {
                            t.removeClass('scroll-highlight')
                        }))
                },
            }
        }
        ve.$inject = []
        var be = ve,
            Ee = (() => {
                class e {
                    constructor(e) {
                        this.$rootScope = e
                    }
                    registerRemoteEvents(e) {
                        const t = window.require('electron').ipcRenderer
                        e.forEach((e) => {
                            t.on(e, (...t) => {
                                t.splice(0, 1, e), this.$rootScope.$emit(...t)
                            })
                        })
                    }
                    on(e, t, n, i) {
                        const r = e[t]
                        if (o.a.isUndefined(r))
                            throw new TypeError(`${t} is not a valid event`)
                        const s = this.$rootScope.$on(r, n)
                        return (
                            o.a.isDefined(i) &&
                                o.a.isDefined(i.addUnregistration) &&
                                i.addUnregistration(s),
                            s
                        )
                    }
                }
                return (e.$inject = ['$rootScope']), e
            })(),
            we = n(31)
        class ye {
            constructor(e, t) {
                ;(this.cloudAnalyticsClient = e), (this.$transitions = t)
            }
            init() {
                this.$transitions.onSuccess({}, (e) => {
                    this.cloudAnalyticsClient.addEvent({
                        type: this.cloudAnalyticsClient.eventTypes.PAGE_VIEW,
                        msg: {
                            page: e.to().name,
                            previous_page: e.from().name,
                            window: 'main-window',
                        },
                    })
                })
            }
        }
        ye.$inject = ['cloudAnalyticsClient', '$transitions']
        var Se = ye,
            xe = o.a
                .module('app.core', [te])
                .service('errorService', de)
                .service('authNotifier', oe)
                .service('downloadNotifier', re)
                .service('licenseNotifier', se)
                .service('installNotifier', ae)
                .service('ipcNotifier', Ee)
                .service('umTopNavService', we.a)
                .service('analyticsService', Se)
                .service('pluginManagerNotifier', ce)
                .service('pluginManager', me)
                .directive('focusMe', fe)
                .directive('scrollOnFlag', be).name,
            Ce = n(206),
            Le = n.n(Ce)
        n(288)
        class $e {
            constructor(e, t) {
                ;(this.$mdDialog = e), (this.localProjectClient = t)
            }
            async $onInit() {
                ;(this.projectInfo = await this.localProjectClient.getProjectsInfo()),
                    this.projectInfo &&
                        this.projectInfo[this.project.path] &&
                        this.projectInfo[this.project.path].cliArgs &&
                        (this.args = this.projectInfo[
                            this.project.path
                        ].cliArgs)
            }
            updateArgs({ args: e }) {
                this.args = e
            }
            cancel() {
                this.$mdDialog.hide()
            }
            async setArgs(e) {
                this.projectInfo[e.path]
                    ? (this.projectInfo[e.path].cliArgs = this.args)
                    : (this.projectInfo[e.path] = { cliArgs: this.args }),
                    await this.localProjectClient.setProjectsInfo(
                        Object.assign({}, this.projectInfo)
                    ),
                    this.$mdDialog.hide()
            }
        }
        $e.$inject = ['$mdDialog', 'localProjectClient']
        var Ne = {
                controller: $e,
                templateUrl: Le.a,
                bindings: { project: '<' },
            },
            Te = n(207),
            _e = n.n(Te)
        n(290)
        class Ae {
            constructor(e, t) {
                ;(this.$translate = e), (this.EventEmitter = t)
            }
            updateArgs(e) {
                ;(this.cliArgs = e),
                    this.onArgsUpdate(this.EventEmitter({ args: e }))
            }
        }
        Ae.$inject = ['$translate', 'EventEmitter']
        var Ie = {
                controller: Ae,
                templateUrl: _e.a,
                bindings: { cliArgs: '<', onArgsUpdate: '&' },
            },
            Oe =
                (n(292),
                o.a
                    .module('project.list', [J, xe])
                    .component('projectList', F)
                    .component('advancedSettings', Ne)
                    .component('cliArgs', Ie)
                    .value('EventEmitter', (e) => ({ $event: e })).name)
        const { SKIP_UPGRADE_DIALOG: Re, SKIP_RELOCATION_DIALOG: ke } = {
            SKIP_UPGRADE_DIALOG: '-skipUpgradeDialogs',
            SKIP_RELOCATION_DIALOG: '-upmSkipManifestRelocationDialog',
        }
        class De {
            constructor(e, t, n, i) {
                ;(this.localProjectClient = e),
                    (this.errorService = t),
                    (this.$translate = n),
                    (this.dialogService = i)
            }
            async _confirmProjectDowngrade() {
                return this.dialogService.confirm({
                    title: 'PROJECT.PROJECT.DOWNGRADE_TITLE',
                    textContent: 'PROJECT.PROJECT.DOWNGRADE_CONTENT',
                })
            }
            _downgradeProject(e) {
                return this.localProjectClient.openProject(
                    e.path,
                    e.selectedVersion,
                    {
                        buildPlatform: e.platform,
                        source: 'projects',
                        args: [Re],
                    }
                )
            }
            async _relocateManifest(e) {
                const {
                        SUCCESS: t,
                        COULD_NOT_CREATE_PACKAGES_FOLDER: n,
                        COULD_NOT_MOVE_MANIFEST: i,
                    } = y,
                    o = await this.localProjectClient.relocateManifest(e.path)
                if (o.code !== t)
                    switch (o.code) {
                        case n:
                            this.errorService.showError(
                                'ERROR.CREATE_PACKAGE_FOLDER_FAILED'
                            )
                            break
                        case i:
                            this.errorService.showError(
                                'ERROR.MOVE_MANIFEST_FAILED'
                            )
                            break
                        default:
                            this.errorService.showError(
                                'ERROR.MANIFEST_FAILED_UNKNOWN'
                            )
                    }
                return Promise.resolve()
            }
            async _upgradeProject(e, t) {
                const n = [Re]
                return (
                    !0 === t && (n.push(ke), await this._relocateManifest(e)),
                    this.localProjectClient.openProject(
                        e.path,
                        e.selectedVersion,
                        { buildPlatform: e.platform, args: n }
                    )
                )
            }
            async _confirmProjectUpgrade(e, t) {
                const n = await this.$translate([
                        'PROJECT.PROJECT.UPGRADE_CONTENT',
                        'PROJECT.PROJECT.UPGRADE_CONTENT_MANIFEST',
                        'PROJECT.PROJECT.MANIFEST_RELOCATION_NO_FOLDER',
                        'PROJECT.PROJECT.MANIFEST_RELOCATION_FOLDER_EXISTS',
                    ]),
                    { PACKAGES_FOLDER_EXISTS: i } = w
                let o = n['PROJECT.PROJECT.UPGRADE_CONTENT']
                return (
                    !0 === e &&
                        ((o += n['PROJECT.PROJECT.UPGRADE_CONTENT_MANIFEST']),
                        t.code === i
                            ? (o +=
                                  n[
                                      'PROJECT.PROJECT.MANIFEST_RELOCATION_FOLDER_EXISTS'
                                  ])
                            : (o +=
                                  n[
                                      'PROJECT.PROJECT.MANIFEST_RELOCATION_NO_FOLDER'
                                  ])),
                    this.dialogService.confirm({
                        title: 'PROJECT.PROJECT.UPGRADE_TITLE',
                        textContent: o,
                    })
                )
            }
            async _confirmManifestRelocation(e) {
                const { PACKAGES_FOLDER_EXISTS: t } = w,
                    n = await this.$translate([
                        'PROJECT.PROJECT.MANIFEST_RELOCATION_CONTENT',
                        'PROJECT.PROJECT.MANIFEST_RELOCATION_NO_FOLDER',
                        'PROJECT.PROJECT.MANIFEST_RELOCATION_FOLDER_EXISTS',
                    ])
                let i = n['PROJECT.PROJECT.MANIFEST_RELOCATION_CONTENT']
                return (
                    e.code === t
                        ? (i +=
                              n[
                                  'PROJECT.PROJECT.MANIFEST_RELOCATION_FOLDER_EXISTS'
                              ])
                        : (i +=
                              n[
                                  'PROJECT.PROJECT.MANIFEST_RELOCATION_NO_FOLDER'
                              ]),
                    this.dialogService.confirm({
                        title: 'PROJECT.PROJECT.MANIFEST_RELOCATION_TITLE',
                        textContent: i,
                    })
                )
            }
            async _downgrade(e) {
                return (await this._confirmProjectDowngrade())
                    ? this._downgradeProject(e)
                    : null
            }
            async _upgrade(e, t, n) {
                return (await this._confirmProjectUpgrade(t, n))
                    ? this._upgradeProject(e, t)
                    : null
            }
            async _relocate(e, t) {
                return (await this._confirmManifestRelocation(t))
                    ? this._relocateManifest(e)
                    : null
            }
            async updateProject(e, t, n, i) {
                const { DOWNGRADE: o, UPGRADE: r } = E
                switch (n) {
                    case o:
                        await this._downgrade(e)
                        break
                    case r:
                        await this._upgrade(e, t, i)
                        break
                    default: {
                        const n = []
                        !0 === t && (n.push(ke), await this._relocate(e, i)),
                            await this.localProjectClient.openProject(
                                e.path,
                                e.selectedVersion,
                                { buildPlatform: e.platform, args: n }
                            )
                    }
                }
            }
        }
        De.$inject = [
            'localProjectClient',
            'errorService',
            '$translate',
            'dialogService',
        ]
        var Pe = De,
            Fe = (() => {
                class e {
                    constructor(e) {
                        ;(this.ipcNotifier = e),
                            (this.events = {
                                updated: 'recent-project.updated',
                            }),
                            e.registerRemoteEvents(ie.a.values(this.events))
                    }
                    on(e, t, n) {
                        this.ipcNotifier.on(this.events, e, t, n)
                    }
                }
                return (e.$inject = ['ipcNotifier']), e
            })(),
            Me = o.a
                .module('project', [A, Oe, s.a, g.a, h.a])
                .config([
                    '$stateProvider',
                    (e) => {
                        e.state('project', {
                            url: '/project',
                            component: 'projectRecent',
                        })
                    },
                ])
                .service('projectUpdaterService', Pe)
                .service('projectService', C)
                .service('projectNotifier', Fe)
                .config([
                    '$translatePartialLoaderProvider',
                    (e) => {
                        e.addPart('project')
                    },
                ]).name,
            je = n(208),
            Ue = n.n(je)
        const ze = { PROJECT: 'project', TUTORIAL: 'tutorial' },
            Be = {
                BEGINNER: 'beginner',
                INTERMEDIATE: 'intermediate',
                ADVANCED: 'advanced',
            },
            Ve = { PROJECT: 'Project', TUTORIAL: 'Tutorial' },
            Ge = {
                NOT_DOWNLOADED: 'not_downloaded',
                DOWNLOADING: 'downloading',
                DOWNLOADED: 'downloaded',
            },
            Je = { INSTALLED: 'installed' }
        class We extends N.a {
            constructor(e, t, n, i, o, r, s, a) {
                super(),
                    (this.unityDownloadClient = e),
                    (this.localProjectClient = t),
                    (this.downloadNotifier = n),
                    (this.installNotifier = i),
                    (this.$rootScope = o),
                    (this.errorService = r),
                    (this.localEditorManagerClient = s),
                    (this.installService = a),
                    (this.downloadActions = {
                        downloaded: (e) => {
                            this.launch(e)
                        },
                        downloading: (e) => {
                            this.cancelDownload(e)
                        },
                        not_downloaded: (e) => {
                            this.download(e)
                        },
                    })
            }
            $onInit() {
                ;(this.sampleProjects = o.a.copy(this.learnProjects)),
                    (this.tutorials = o.a.copy(this.learnTutorials)),
                    (this.installedEditors = o.a.copy(
                        this.installService.editors
                    )),
                    (this.editorReleases = this.localEditorManagerClient.getReleases()),
                    this._setupDownloadablesStatus(this.packages),
                    this._registerDownloadEvents(),
                    this._initializeLearnPageItems()
            }
            async launch(e) {
                try {
                    if (
                        !e.downloadableContent.installedEditor ||
                        void 0 === e.downloadableContent.installedEditor.version
                    )
                        return void this.errorService.showError(
                            'ERROR.NO_EDITOR_LEARN'
                        )
                    await this.localProjectClient.createTempProject(
                        [e.package.path],
                        e.downloadableContent.installedEditor.version
                    )
                } catch (e) {
                    this.errorService.showError(e.errorCode, e.params)
                }
            }
            download(e) {
                this.unityDownloadClient.downloadPackage(e.package)
            }
            cancelDownload(e) {
                this.unityDownloadClient.cancelDownload(e.package.id),
                    (e.downloadableContent.downloadStatus = Ge.NOT_DOWNLOADED),
                    (e.downloadableContent.progress = 0)
            }
            triggerAction(e) {
                this.downloadActions[e.downloadableContent.downloadStatus](e)
            }
            setSampleProjects() {
                this._setLearnContent(this.sampleProjects)
            }
            setTutorials() {
                this._setLearnContent(this.tutorials)
            }
            _setLearnContent(e) {
                this._setTopLearnContent(e), this._setBottomLearnContent(e)
            }
            _setTopLearnContent(e) {
                this.topItems = e.slice(0, 3)
            }
            _setBottomLearnContent(e) {
                this.bottomItems = e.slice(3)
            }
            _registerDownloadEvents() {
                this.downloadNotifier.on(
                    'start',
                    (e, t) => {
                        const n = this.sampleProjects.find(
                            (e) => e.downloadable && e.package.id === t
                        )
                        o.a.isUndefined(n) ||
                            ((n.downloadableContent.downloadStatus =
                                Ge.DOWNLOADING),
                            (n.downloadableContent.progress = 0),
                            this.$rootScope.$apply())
                    },
                    this
                ),
                    this.downloadNotifier.on(
                        'error',
                        (e, t) => {
                            const n = this.sampleProjects.find(
                                (e) => e.downloadable && e.package.id === t
                            )
                            o.a.isUndefined(n) ||
                                ((n.downloadableContent.downloadStatus =
                                    Ge.NOT_DOWNLOADED),
                                this.unityDownloadClient.cancelDownload(
                                    n.package.id
                                ),
                                this.$rootScope.$apply())
                        },
                        this
                    ),
                    this.downloadNotifier.on(
                        'end',
                        async (e, t) => {
                            const n = this.sampleProjects.find(
                                (e) => e.downloadable && e.package.id === t
                            )
                            o.a.isUndefined(n) ||
                                ((n.downloadableContent.downloadStatus =
                                    Ge.DOWNLOADED),
                                (n.downloadableContent.progress = 0),
                                this._setupDownloadablesStatus(
                                    await this.localProjectClient.getPackageList()
                                ),
                                this.$rootScope.$apply())
                        },
                        this
                    ),
                    this.downloadNotifier.on(
                        'progress',
                        (e, t, n) => {
                            const i = this.sampleProjects.find(
                                (e) => e.downloadable && e.package.id === t
                            )
                            o.a.isDefined(i) &&
                                ((i.downloadableContent.progress = parseInt(
                                    n.total.completed,
                                    10
                                ).toFixed(0)),
                                this.$rootScope.$apply())
                        },
                        this
                    ),
                    this.installNotifier.on(
                        'end',
                        (e, t) => {
                            this.sampleProjects.forEach((e) => {
                                e.downloadable &&
                                    e.downloadableContent.installedEditor &&
                                    e.downloadableContent.installedEditor
                                        .version === t.toString() &&
                                    ((e.downloadableContent.installedEditor.status =
                                        Je.INSTALLED),
                                    this.$rootScope.$apply())
                            })
                        },
                        this
                    )
            }
            _setupDownloadablesStatus(e) {
                this.sampleProjects.forEach((t) => {
                    if (!t.downloadable) return
                    const n = e.find((e) => e.packageInfo.id === t.package.id)
                    o.a.isDefined(n)
                        ? ((t.downloadableContent.downloadStatus =
                              Ge.DOWNLOADED),
                          (t.package.path = n.path))
                        : this.unityDownloadClient.isInProgress(t.package.id)
                        ? (t.downloadableContent.downloadStatus =
                              Ge.DOWNLOADING)
                        : (t.downloadableContent.downloadStatus =
                              Ge.NOT_DOWNLOADED),
                        (t.downloadableContent.installedEditor = this._getMatchingEditor(
                            t.downloadableContent.supportedEditorBranch,
                            this.installedEditors
                        )),
                        t.downloadableContent.installedEditor ||
                            (t.downloadableContent.editorToInstall = this._getMatchingEditor(
                                t.downloadableContent.supportedEditorBranch,
                                this.editorReleases
                            ))
                })
            }
            _getMatchingEditor(e, t) {
                return t.find((t) => {
                    try {
                        return new v.a(t.version).branch === e
                    } catch (e) {
                        return !1
                    }
                })
            }
            _initializeLearnPageItems() {
                ;(this.currentNavItem = 'projects'), this.setSampleProjects()
            }
        }
        We.$inject = [
            'unityDownloadClient',
            'localProjectClient',
            'downloadNotifier',
            'installNotifier',
            '$rootScope',
            'errorService',
            'localEditorManagerClient',
            'installService',
        ]
        var Ye = {
                templateUrl: Ue.a,
                controller: We,
                bindings: {
                    packages: '<',
                    learnProjects: '<',
                    learnTutorials: '<',
                },
            },
            qe = n(209),
            He = n.n(qe)
        n(294)
        class Ke {
            constructor(e) {
                this.learnService = e
            }
        }
        Ke.$inject = ['learnService']
        var Xe = {
                templateUrl: He.a,
                controller: Ke,
                bindings: { elems: '<', action: '&' },
            },
            Qe = n(210),
            Ze = n.n(Qe)
        n(296)
        class et {
            constructor(e) {
                this.learnService = e
            }
        }
        et.$inject = ['learnService']
        var tt = {
                templateUrl: Ze.a,
                controller: et,
                bindings: { elems: '<', action: '&' },
            },
            nt = n(211),
            it = n.n(nt)
        n(298)
        class ot extends N.a {
            constructor(e, t, n, i, o, r, s, a) {
                super(),
                    (this.$mdDialog = e),
                    (this.EventEmitter = t),
                    (this.infoToastService = n),
                    (this.$state = i),
                    (this.downloadNotifier = o),
                    (this.installNotifier = r),
                    (this.$rootScope = s),
                    (this.$filter = a),
                    (this.cleanupMissingEditorToast = null),
                    (this.actionTranslationMapping = {
                        downloaded: 'LEARN.OPEN_PROJECT',
                        downloading: 'LEARN.CANCEL_DOWNLOAD',
                        not_downloaded: 'LEARN.DOWNLOAD_PROJECT',
                    })
            }
            async $onInit() {
                this._bindNotifiers(),
                    this._setLocalVariables(),
                    this._shouldDisplayMissingEditorToast() &&
                        (await this._displayMissingEditorToast())
            }
            _bindNotifiers() {
                this.installNotifier.on(
                    'end',
                    this.postInstallAction.bind(this),
                    this
                ),
                    this.downloadNotifier.on(
                        'end',
                        this.postDownloadAction.bind(this),
                        this
                    )
            }
            _setLocalVariables() {
                ;(this.downloadable = this.elem.downloadable),
                    (this.downloadableContent = this.elem.downloadableContent),
                    (this.size = this.elem.downloadable
                        ? this.$filter('fileSize')(
                              this.elem.downloadableContent.size
                          )
                        : null),
                    (this.viewTutorialTranslationKey =
                        this.elem.category === ze.PROJECT
                            ? 'LEARN.VIEW_TUTORIALS'
                            : 'LEARN.VIEW_TUTORIAL'),
                    (this.isContentDownloaded =
                        this.elem.downloadable &&
                        this.elem.downloadableContent.downloadStatus ===
                            Ge.DOWNLOADED),
                    (this.isEditorMissing =
                        this.elem.downloadable &&
                        !this.elem.downloadableContent.installedEditor),
                    (this.isEditorInstalled =
                        this.elem.downloadable &&
                        !!this.elem.downloadableContent.installedEditor &&
                        this.elem.downloadableContent.installedEditor.status ===
                            Je.INSTALLED)
            }
            $onDestroy() {
                this.cleanupMissingEditorToast &&
                    this.cleanupMissingEditorToast(),
                    super.$onDestroy()
            }
            close() {
                this.$mdDialog.hide()
            }
            click() {
                this.elem.downloadableContent.downloadStatus ===
                    Ge.DOWNLOADED && this.$mdDialog.hide(),
                    this.action(this.EventEmitter(this.elem))
            }
            postInstallAction(e, t) {
                this.elem.downloadable &&
                    this.elem.downloadableContent.installedEditor &&
                    this.elem.downloadableContent.installedEditor.version ===
                        t &&
                    ((this.isEditorInstalled = !0), this.$rootScope.$apply())
            }
            async postDownloadAction(e, t) {
                this.elem.downloadable &&
                    this.elem.package.id === t &&
                    ((this.isContentDownloaded = !0),
                    this._shouldDisplayMissingEditorToast() &&
                        (await this._displayMissingEditorToast()))
            }
            _shouldDisplayMissingEditorToast() {
                return (
                    this.downloadable &&
                    this.isContentDownloaded &&
                    this.isEditorMissing
                )
            }
            async _displayMissingEditorToast() {
                const e = await this.infoToastService.showMessageCode(
                    ...this._getMissingEditorToastArgs()
                )
                this.cleanupMissingEditorToast = () => {
                    e &&
                        (this.infoToastService.remove(e),
                        (this.cleanupMissingEditorToast = null))
                }
            }
            _getMissingEditorToastArgs() {
                return [
                    'LEARN.PLEASE_INSTALL',
                    {
                        version: this.elem.downloadableContent
                            .supportedEditorBranch,
                    },
                    {
                        icon: this.infoToastService.icoERROR,
                        unique: !0,
                        actions: [
                            { message: 'COMMON.DISMISS' },
                            {
                                message: 'LEARN.INSTALL',
                                callback: () => {
                                    this.$state.go('install', {
                                        editorToInstall: JSON.stringify(
                                            this.elem.downloadableContent
                                                .editorToInstall
                                        ),
                                    })
                                },
                            },
                        ],
                    },
                ]
            }
        }
        ot.$inject = [
            '$mdDialog',
            'EventEmitter',
            'infoToastService',
            '$state',
            'downloadNotifier',
            'installNotifier',
            '$rootScope',
            '$filter',
        ]
        var rt = {
                templateUrl: it.a,
                controller: ot,
                bindings: { elem: '<', action: '&' },
            },
            st = (() => {
                class e {
                    constructor(e, t, n) {
                        ;(this.learnContentClient = e),
                            (this.$mdDialog = t),
                            (this.EventEmitter = n),
                            (this.publisher = 'Unity Technologies')
                    }
                    async getLearnProjects() {
                        return this._formatLearnContent(
                            await this.learnContentClient.getLearnProjects(),
                            ze.PROJECT
                        )
                    }
                    async getLearnTutorials() {
                        return this._formatLearnContent(
                            await this.learnContentClient.getLearnTutorials(),
                            ze.TUTORIAL
                        )
                    }
                    openLearnDialog(e, t) {
                        const n = this.EventEmitter
                        this.$mdDialog.show({
                            template:
                                '<learn-dialog class="learn-dialog" elem="$ctrl.elem" action="$ctrl.action($event)"></learn-dialog>',
                            clickOutsideToClose: !0,
                            bindToController: !0,
                            controllerAs: '$ctrl',
                            controller() {
                                ;(this.elem = e),
                                    (this.action = (e) => {
                                        t(n(e))
                                    })
                            },
                        })
                    }
                    _formatLearnContent(e, t) {
                        return e.map(
                            (e) => (
                                (e.category = t),
                                (e.categoryTranslationKey = this._getCategoryTranslationKey(
                                    e.category
                                )),
                                (e.skillLevelTranslationKey = this._getSkillLevelTranslationKey(
                                    e.skillLevel
                                )),
                                (e.durationDisplayInfo = this._getDurationDisplayInfo(
                                    e.duration
                                )),
                                (e.downloadable = this._isContentDownloadable(
                                    e
                                )),
                                e.downloadable &&
                                    ((e.downloadableContent.supportedEditorBranch = new v.a(
                                        e.downloadableContent.supportedEditorVersion
                                    ).branch),
                                    (e.package = this._getDownloadPackageInfo(
                                        e,
                                        t
                                    ))),
                                e
                            )
                        )
                    }
                    _getCategoryTranslationKey(e) {
                        switch (e) {
                            case ze.PROJECT:
                                return 'LEARN.PROJECT'
                            case ze.TUTORIAL:
                                return 'LEARN.TUTORIAL'
                            default:
                                return 'LEARN.PROJECT'
                        }
                    }
                    _getSkillLevelTranslationKey(e) {
                        switch (e) {
                            case Be.BEGINNER:
                                return 'LEARN.BEGINNER'
                            case Be.INTERMEDIATE:
                                return 'LEARN.INTERMEDIATE'
                            case Be.ADVANCED:
                                return 'LEARN.ADVANCED'
                            default:
                                return 'LEARN.BEGINNER'
                        }
                    }
                    _getDurationDisplayInfo(e) {
                        const t = e % 60,
                            n = (e - t) / 60
                        return n ? `${n}h ${t}m` : `${t}m`
                    }
                    _isContentDownloadable(e) {
                        return !!e.downloadableContent
                    }
                    _getDownloadPackageInfo(e, t) {
                        return {
                            id: e.downloadableContent.packageId,
                            filename: this._generateFilenameFromTitle(e.title),
                            publisher: this.publisher,
                            category: this._getCategoryFolderName(t),
                            title: e.title,
                            url: e.downloadableContent.assetUrl,
                        }
                    }
                    _getCategoryFolderName(e) {
                        switch (e) {
                            case ze.PROJECT:
                                return Ve.PROJECT
                            case ze.TUTORIAL:
                                return Ve.TUTORIAL
                            default:
                                return Ve.PROJECT
                        }
                    }
                    _generateFilenameFromTitle(e) {
                        return e
                            .split(' ')
                            .map((e) =>
                                e.toLowerCase().replace(/[^a-z0-9]+/g, '')
                            )
                            .join('-')
                    }
                }
                return (
                    (e.$inject = [
                        'learnContentClient',
                        '$mdDialog',
                        'EventEmitter',
                    ]),
                    e
                )
            })(),
            at =
                (n(300),
                function () {
                    let e = 'version'
                    function t(t, r) {
                        if (o.a.isUndefined(t[e]) || o.a.isUndefined(r[e]))
                            return 0
                        const s = n(t[e]),
                            a = n(r[e]),
                            l = Math.min(s.length, a.length)
                        for (let e = 0; e < l; e++) {
                            const t = i(s[e], a[e])
                            if (0 !== t) return t
                        }
                        return 0
                    }
                    function n(e) {
                        let t = e.split('.')
                        if (3 === t.length) {
                            const e = t.splice(-1, 1)
                            t = t.concat(e[0].split(/(\d+)/).filter(Boolean))
                        }
                        return t
                    }
                    function i(e, t) {
                        return isNaN(e) && isNaN(t)
                            ? t.localeCompare(e)
                            : isNaN(e) || isNaN(t)
                            ? 0
                            : parseInt(t, 10) - parseInt(e, 10)
                    }
                    return {
                        sort: function (n, i) {
                            i && (e = i)
                            const o = n.slice()
                            return o.sort(t), o
                        },
                        compareEditors: t,
                    }
                }),
            lt = function () {
                const e = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                    t = Math.log(1e3)
                return function (n, i) {
                    if (isNaN(parseFloat(n))) return '-'
                    if (n < 1) return '0 B'
                    isNaN(i) && (i = 1)
                    const o = Math.floor(Math.log(n) / t)
                    return `${(n / Math.pow(1e3, o)).toFixed(i)} ${e[o]}`
                }
            },
            dt = o.a
                .module('learn', [s.a, g.a, xe])
                .component('learn', Ye)
                .component('learnItems', Xe)
                .component('learnTopItems', tt)
                .component('learnDialog', rt)
                .service('learnService', st)
                .value('EventEmitter', G)
                .filter('versionFilter', at)
                .filter('fileSize', lt)
                .config([
                    '$translatePartialLoaderProvider',
                    (e) => {
                        e.addPart('learn')
                    },
                ])
                .config([
                    '$stateProvider',
                    (e) => {
                        e.state('learn', {
                            url: '/learn',
                            component: 'learn',
                            resolve: {
                                packages: [
                                    'localProjectClient',
                                    (e) => e.getPackageList(),
                                ],
                                learnProjects: [
                                    'learnService',
                                    (e) => e.getLearnProjects(),
                                ],
                                learnTutorials: [
                                    'learnService',
                                    (e) => e.getLearnTutorials(),
                                ],
                            },
                        })
                    },
                ]).name,
            ct = (n(302), n(212)),
            pt = (() => {
                class e {
                    constructor(e, t, n) {
                        ;(this.$q = e),
                            (this.$http = t),
                            (this.localConfigClient = n)
                    }
                    getCommunityUrl() {
                        return this.localConfigClient.getCommunityUrl()
                    }
                }
                return (e.$inject = ['$q', '$http', 'localConfigClient']), e
            })(),
            ut = o.a
                .module('community', [s.a, g.a, xe])
                .component('community', ct.a)
                .service('communityService', pt)
                .directive('iframeOnload', [
                    () => ({
                        restrict: 'A',
                        scope: { callBack: '&iframeOnload' },
                        link(e, t) {
                            t.on('load', () => e.callBack())
                        },
                    }),
                ])
                .config([
                    '$translatePartialLoaderProvider',
                    (e) => {
                        e.addPart('community')
                    },
                ])
                .config([
                    '$stateProvider',
                    (e) => {
                        e.state('community', {
                            url: '/community',
                            component: 'community',
                            resolve: {
                                communityUrl: [
                                    'communityService',
                                    (e) => e.getCommunityUrl(),
                                ],
                            },
                        })
                    },
                ]).name,
            ht = n(214),
            mt = n.n(ht),
            gt = {
                INSTALLED: 'installed',
                QUEUED_UNINSTALL: 'queued_uninstalling',
                QUEUED: 'queued_installing',
                MODULES_QUEUED: 'modules_queued_installing',
                INSTALLING: 'installing',
                UNINSTALLING: 'uninstalling',
                DOWNLOADING: 'downloading',
                MODULES_DOWNLOADING: 'modules_downloading',
            }
        let ft
        ft = {
            default: [],
            manual: [
                {
                    title: 'PLATFORM.SHOW_ITEM_IN_FOLDER',
                    onClick: 'showItemInFolder',
                },
                { title: 'INSTALL.REMOVE', onClick: 'removeFromHub' },
            ],
            [gt.INSTALLED]: [
                { title: 'INSTALL.ADD_MODULES', onClick: 'addModules' },
                {
                    title: 'PLATFORM.SHOW_ITEM_IN_FOLDER',
                    onClick: 'showItemInFolder',
                },
                { title: 'INSTALL.UNINSTALL', onClick: 'uninstall' },
            ],
            [gt.DOWNLOADING]: [
                { title: 'INSTALL.CANCEL', onClick: 'cancelDownload' },
            ],
            [gt.MODULES_DOWNLOADING]: [
                { title: 'INSTALL.CANCEL', onClick: 'cancelDownload' },
            ],
        }
        var vt = class {
            static getOptionsForEditor(e) {
                return !0 === e.manual
                    ? ft.manual || ft.default
                    : ft[e.status] || ft.default
            }
        }
        class bt extends N.a {
            constructor(e, t, n, i, o, r, s, a, l) {
                super(),
                    (this.$log = e),
                    (this.$rootScope = t),
                    (this.$scope = n),
                    (this.$compile = i),
                    (this.installService = o),
                    (this.$mdDialog = r),
                    (this.localWindowClient = s),
                    (this.unityReleasesClient = a),
                    (this.infoToastService = l)
            }
            $onInit() {
                ;(this.editors = this.installService.editors),
                    this._setupEditors(),
                    this._registerEvents(),
                    this.customInstall &&
                        this._showAddEditorModalForEditor(
                            this.unityReleasesClient.getCustomEditorInfo()
                        ),
                    this.editorToInstall &&
                        ((this.editorToInstall.id = this.editorToInstall.version),
                        this._showAddEditorModalForEditor(
                            this.editorToInstall
                        )),
                    angular.element(document).ready(() => {
                        this._compileInstallPlaceholder()
                    })
            }
            _compileInstallPlaceholder() {
                try {
                    var e = angular.element(
                            document.querySelector('#installAddText')
                        ),
                        t = angular.element(
                            document.querySelector('#installLocateText')
                        )
                    e.attr('ng-click', '$ctrl.addEditor()'),
                        e.attr(
                            'ng-class',
                            '{ "em-disabled": $ctrl.installService.freezeUACActions }'
                        ),
                        t.attr('ng-click', '$ctrl.locateEditor($event)'),
                        this.$compile(e.parent().contents())(this.$scope)
                } catch (e) {}
            }
            _setupEditors() {
                this.editors.forEach((e) => {
                    this._setEditorState(e), this._setBadgeFlags(e)
                })
            }
            _setEditorState(e) {
                e.menuOptions = this._getMenuOptionsForEditor(e)
            }
            _setBadgeFlags(e) {
                let t
                try {
                    ;(t = new v.a(e.version)),
                        (e.legacy = this.installService.isLegacyEditor(t)),
                        (e.releaseType = this.installService.getReleaseTypeFromVersion(
                            t
                        )),
                        (e.lts = this.installService.isLTSEditor(t, e.lts))
                } catch (e) {}
            }
            _getMenuOptionsForEditor(e) {
                const t = vt.getOptionsForEditor(e)
                return this._bindOptionsWithContext(t)
            }
            _bindOptionsWithContext(e) {
                return e.map((e) => ({
                    title: e.title,
                    onClick: this[e.onClick].bind(this),
                }))
            }
            _registerEvents() {
                this.installService.on(
                    'editor-status-changed',
                    (e, { editor: t }) => {
                        this._setEditorState(t), this.$rootScope.$apply()
                    },
                    this
                ),
                    this.installService.on(
                        'editors-changed',
                        () => {
                            ;(this.editors = this.installService.editors),
                                this._setupEditors(),
                                this.$rootScope.$apply()
                        },
                        this
                    )
            }
            async _showAddEditorModalForEditor(e) {
                e &&
                    (this._isEditorPresent(e.version)
                        ? await this.infoToastService.showMessageCode(
                              this._getNotificationMessage(e.version),
                              { version: e.version }
                          )
                        : this.addCustomEditor(e))
            }
            _isEditorPresent(e) {
                const t = this.editors.find((t) => t.version === e)
                return t && Object.values(gt).includes(t.status)
            }
            _getNotificationMessage(e) {
                switch (this.editors.find((t) => t.version === e).status) {
                    case gt.INSTALLED:
                        return 'INSTALL.EDITOR_ALREADY_INSTALLED'
                    case gt.DOWNLOADING:
                        return 'INSTALL.EDITOR_ALREADY_DOWNLOADING'
                    case gt.MODULES_DOWNLOADING:
                    case gt.MODULES_QUEUED:
                        return 'INSTALL.EDITOR_ALREADY_INSTALLING_MODULES'
                    case gt.INSTALLING:
                    case gt.QUEUED:
                        return 'INSTALL.EDITOR_ALREADY_INSTALLING'
                    case gt.UNINSTALLING:
                    case gt.QUEUED_UNINSTALL:
                        return 'INSTALL.EDITOR_ALREADY_UNINSTALLING'
                    default:
                        return 'INSTALL.EDITOR_ALREADY_PRESENT'
                }
            }
            locateEditor(e) {
                const t = e.ctrlKey || e.metaKey
                this.installService.locateEditor(t)
            }
            addEditor() {
                this.$mdDialog.show({
                    template: '<add-editor editor="editor"></add-editor>',
                    plain: !0,
                })
            }
            addCustomEditor(e) {
                this.$mdDialog.show({
                    template:
                        '<add-custom-editor editor="$ctrl.editor"></add-custom-editor>',
                    plain: !0,
                    bindToController: !0,
                    controllerAs: '$ctrl',
                    controller() {
                        this.editor = e
                    },
                })
            }
            createProject() {}
            openProject() {}
            addModules(e) {
                this.$mdDialog.show({
                    template: '<add-module editor="$ctrl.editor"></add-module>',
                    plain: !0,
                    bindToController: !0,
                    controllerAs: '$ctrl',
                    controller() {
                        this.editor = e
                    },
                })
            }
            showItemInFolder(e) {
                this.localWindowClient.showItemInFolder(
                    e.location[0] || e.location || e.path
                )
            }
            uninstall(e) {
                return this.installService.uninstallVersion(e)
            }
            removeFromHub(e) {
                this.installService.removeEditorFromHub(e.version)
            }
            cancelDownload(e) {
                this.installService.cancelDownload(e),
                    e.status === gt.MODULES_DOWNLOADING
                        ? ((e.status = gt.INSTALLED),
                          this._setEditorState(e),
                          this.$rootScope.$apply())
                        : this.installService.removeEditorFromTheList(e.version)
            }
        }
        bt.$inject = [
            '$log',
            '$rootScope',
            '$scope',
            '$compile',
            'installService',
            '$mdDialog',
            'localWindowClient',
            'unityReleasesClient',
            'infoToastService',
        ]
        var Et = {
                templateUrl: mt.a,
                controller: bt,
                bindings: { customInstall: '<', editorToInstall: '<' },
            },
            wt = n(215),
            yt = {
                PATCH: 'INSTALL.PATCH',
                ALPHA: 'INSTALL.ALPHA',
                BETA: 'INSTALL.BETA',
                OFFICIAL: 'INSTALL.OFFICIAL',
                EXPERIMENTAL: 'INSTALL.EXPERIMENTAL',
                PREVIEW: 'INSTALL.PREVIEW',
                UNKNOWN: 'INSTALL.UNKNOWN',
            }
        var St = {
                controller: class {
                    constructor() {
                        this.supportedTypes = [
                            yt.ALPHA,
                            yt.BETA,
                            yt.PREVIEW,
                            yt.EXPERIMENTAL,
                        ]
                    }
                    isReleaseTypeSupported() {
                        return this.supportedTypes.includes(this.type)
                    }
                },
                templateUrl: n.n(wt).a,
                bindings: { type: '@' },
            },
            xt = n(216)
        var Ct = {
                controller: class {
                    constructor() {
                        this.moreInfoDialogData = {
                            title: '',
                            message: 'INSTALL.LEGACY_EDITOR_MESSAGE',
                        }
                    }
                },
                templateUrl: n.n(xt).a,
            },
            Lt = n(217),
            $t = { templateUrl: n.n(Lt).a },
            Nt = n(35),
            Tt = (n(311), n(219)),
            _t = n.n(Tt),
            At = (n(313), n(220))
        let It
        class Ot {
            static get defaultIcon() {
                return 'unitycube'
            }
            static getIconForPlatform(e) {
                return It[e]
                    ? It[e].isSVG
                        ? { svgUrl: It[e].icon }
                        : { name: It[e], fontFamily: 'unity-icon' }
                    : { name: Ot.defaultIcon, fontFamily: 'unity-icon' }
            }
        }
        It = {
            android: 'android',
            appletv: 'tvos',
            hololens: 'hololens',
            'facebook-games': 'facebook',
            ios: 'ios',
            linux: 'linux',
            'linux-mono': 'linux',
            linux64: 'linux',
            linuxuniversal: 'linux',
            'mac-il2cpp': 'macos',
            'mac-mono': 'macos',
            n3ds: '',
            oculus: 'oculus',
            osxintel: '',
            osxintel64: '',
            osxuniversal: '',
            playstation: 'playstation',
            ps3: 'playstation',
            ps4: 'playstation',
            psm: 'playstation',
            psp2: 'playstation',
            psvita: 'playstation',
            samsungtv: '',
            switch: 'nintendoswitch',
            tizen: '',
            tvos: 'tvos',
            web: '',
            webgl: 'htmlfive',
            webstreamed: '',
            wiiu: '',
            windows: 'windows',
            win: 'windows',
            win64: 'windows',
            windowsstoreapps: 'windows',
            'windows-il2cpp': 'windows',
            'windows-mono': 'windows',
            'universal-windows-platform': 'windows',
            xbox: 'xbox',
            xbox360: 'xbox',
            xboxone: 'xbox',
            xiaomi: 'xiaomi',
            lumin: { isSVG: !0, icon: n.n(At).a },
        }
        var Rt = Ot
        let kt
        kt = {
            [gt.QUEUED_UNINSTALL]: 'INSTALL.QUEUED_UNINSTALLING',
            [gt.QUEUED]: 'INSTALL.QUEUED_INSTALLING',
            [gt.MODULES_QUEUED]: 'INSTALL.MODULES_QUEUED_INSTALLING',
            [gt.INSTALLING]: 'INSTALL.INSTALLING',
            [gt.UNINSTALLING]: 'INSTALL.UNINSTALLING',
        }
        var Dt = class {
                static getFeedbackForStatus(e) {
                    return kt[e]
                }
            },
            Pt = { DETERMINATE: 'determinate', INDETERMINATE: 'indeterminate' }
        var Ft = {
                controller: class {
                    $onInit() {
                        ;(this.cols = 5),
                            (this.rows = 2),
                            this._setupPlatforms()
                    }
                    $onChanges(e) {
                        e.status && this._setState(),
                            e.modules && this._setupPlatforms()
                    }
                    _setupPlatforms() {
                        this.loading() ||
                            ((this.platforms = []),
                            this.modules &&
                                this.modules.forEach((e) => {
                                    !e.sync &&
                                        e.selected &&
                                        e.visible &&
                                        'Platforms' === e.category &&
                                        this.platforms.push({
                                            label: e.name,
                                            icon: Rt.getIconForPlatform(e.id),
                                        })
                                }),
                            this.platforms.length > this.rows * this.cols &&
                                ((this.hoveredPlatforms = this.platforms.slice(
                                    this.rows * this.cols - 1
                                )),
                                (this.platforms = this.platforms.slice(
                                    0,
                                    this.rows * this.cols - 1
                                ))))
                    }
                    _setState() {
                        this.status !== gt.INSTALLED &&
                            ((this.progressFeedback = Dt.getFeedbackForStatus(
                                this.status
                            )),
                            this.status === gt.DOWNLOADING ||
                            this.status === gt.MODULES_DOWNLOADING
                                ? (this.progressType = Pt.DETERMINATE)
                                : (this.progressType = Pt.INDETERMINATE))
                    }
                    loading() {
                        return this.status !== gt.INSTALLED
                    }
                    getHoveredPlatforms() {
                        const e = []
                        return (
                            this.hoveredPlatforms.forEach((t) =>
                                e.push(t.label)
                            ),
                            e.join(', ')
                        )
                    }
                },
                templateUrl: _t.a,
                bindings: {
                    entry: '<',
                    status: '<',
                    progress: '<',
                    menuOptions: '<',
                    modules: '<',
                    freezeActions: '<',
                },
            },
            Mt = (() => {
                class e extends b {
                    constructor(e, t, n, i, o, r, s, a, l, d) {
                        super(a),
                            (this.localEditorManagerClient = e),
                            (this.unityDownloadClient = t),
                            (this.downloadNotifier = o),
                            (this.installNotifier = r),
                            (this.uninstallNotifier = s),
                            (this.versionFilter = n('versionFilter')),
                            (this.errorService = i),
                            (this.$rootScope = a),
                            (this.infoToastService = l),
                            (this.osPlatform = d.osPlatform()),
                            (this.FIRST_VERSION_SUPPORTED_BY_HUB = new v.a(
                                '2017.2.0a1'
                            )),
                            (this.FIRST_LINUX_PREVIEW_VERSION = new v.a(
                                '2019.1.0a1'
                            )),
                            (this.FIRST_LINUX_OFFICIAL_VERSION = new v.a(
                                '2019.3.0a1'
                            ))
                    }
                    async init() {
                        ;(this.freezeUACActions = !1),
                            this._registerEvents(),
                            (this.editors = this._initEditorsList())
                    }
                    get latestStableEditor() {
                        let e
                        if (this.editors && 0 !== this.editors.length)
                            return (
                                this.editors.length > 1 &&
                                    (e =
                                        this._findLatestEditorByChannel('f') ||
                                        this._findLatestEditorByChannel('b') ||
                                        this._findLatestEditorByChannel('a')),
                                e || this.editors[0]
                            )
                    }
                    _findLatestEditorByChannel(e) {
                        return this.editors.find((t) => {
                            try {
                                return new v.a(t.version).channel === e
                            } catch (e) {
                                return !1
                            }
                        })
                    }
                    _registerEvents() {
                        const e = []
                        e.push(this._generateDownloadEvents()),
                            e.push(this._generateInstallEvents()),
                            e.push(this._generateUninstallEvents()),
                            this.downloadNotifier.on(
                                'error.editor',
                                (e, t, n) => {
                                    o.a.isDefined(n.id) &&
                                        this.removeEditorFromTheList(n.id)
                                }
                            ),
                            this._bootstrapEvents(e)
                    }
                    _generateDownloadEvents() {
                        return {
                            notifier: this.downloadNotifier,
                            events: [
                                {
                                    names: ['start'],
                                    callback: this._onDownloadStart,
                                    custom: !0,
                                },
                                {
                                    names: ['progress'],
                                    callback: (e, t) => {
                                        e.progress = t.total.completed
                                    },
                                },
                                {
                                    names: ['cancel'],
                                    callback: (e) =>
                                        this.removeEditorFromTheList(e, !0),
                                    custom: !0,
                                },
                            ],
                        }
                    }
                    _generateInstallEvents() {
                        return {
                            notifier: this.installNotifier,
                            events: [
                                {
                                    names: ['start'],
                                    callback: (e) => {
                                        e.status = gt.INSTALLING
                                    },
                                },
                                {
                                    names: ['queued'],
                                    callback: (e) => {
                                        e.status =
                                            e.status === gt.MODULES_DOWNLOADING
                                                ? gt.MODULES_QUEUED
                                                : gt.QUEUED
                                    },
                                },
                                {
                                    names: ['end'],
                                    callback: (e, t) =>
                                        this._onInstallEnd(e, t, !0),
                                },
                                {
                                    names: ['modules.end'],
                                    callback: (e, t) =>
                                        this._onInstallEnd(e, t, !1),
                                },
                                {
                                    names: ['freezeUACActions'],
                                    callback: (e) => {
                                        this.freezeUACActions = e
                                    },
                                    custom: !0,
                                },
                                {
                                    names: ['availableEditorsChanged'],
                                    callback: () => {
                                        ;(this.editors = this._initEditorsList()),
                                            this.$rootScope.$emit(
                                                'editors-changed'
                                            )
                                    },
                                    custom: !0,
                                },
                            ],
                        }
                    }
                    _generateUninstallEvents() {
                        return {
                            notifier: this.uninstallNotifier,
                            events: [
                                {
                                    names: ['start'],
                                    callback: (e) => {
                                        e.status = gt.UNINSTALLING
                                    },
                                },
                                {
                                    names: ['queued'],
                                    callback: (e) => {
                                        e.status = gt.QUEUED_UNINSTALL
                                    },
                                },
                                {
                                    names: ['cancel'],
                                    callback: (e) => {
                                        e.status = gt.INSTALLED
                                    },
                                },
                            ],
                        }
                    }
                    _bootstrapEvents(e) {
                        e.forEach((e) => {
                            e.events.forEach((t) => {
                                t.names.forEach((n) => {
                                    e.notifier.on(n, (e, n, ...i) => {
                                        if (t.custom)
                                            t.callback.bind(this)(n, ...i)
                                        else {
                                            const e = ie.a.find(this.editors, [
                                                'version',
                                                n,
                                            ])
                                            if (o.a.isDefined(e)) {
                                                const n = e.status
                                                t.callback.bind(this)(e, ...i),
                                                    e.status !== n
                                                        ? this.$rootScope.$emit(
                                                              'editor-status-changed',
                                                              { editor: e }
                                                          )
                                                        : this.$rootScope.$apply()
                                            }
                                        }
                                    })
                                })
                            })
                        })
                    }
                    _onDownloadStart(e) {
                        let t = ie.a.find(this.editors, {
                            version: e,
                            status: gt.INSTALLED,
                        })
                        if (o.a.isUndefined(t)) {
                            if (
                                ((t = ie.a.find(
                                    this.getEditorReleases(),
                                    (t) => t.version === e
                                )),
                                o.a.isUndefined(t))
                            )
                                return
                            t.status = gt.DOWNLOADING
                        } else t.status = gt.MODULES_DOWNLOADING
                        ;(t.progress = 0),
                            t.status === gt.DOWNLOADING
                                ? (this.editors.push(t),
                                  (this.editors = this.sortEditors()))
                                : this.$rootScope.$emit(
                                      'editor-status-changed',
                                      { editor: t }
                                  )
                    }
                    async _onInstallEnd(e, t, n) {
                        if (!t.cancelled) {
                            if (n) {
                                if (t.error)
                                    return void this.removeEditorFromTheList(
                                        e.version
                                    )
                                e.location = [t.editorPath]
                            }
                            t.restartRequired &&
                                this.infoToastService.showMessageCode(
                                    'INSTALL.RESTART_NEEDED'
                                ),
                                (e.status = gt.INSTALLED),
                                (e.modules = t.updatedModules
                                    ? JSON.parse(
                                          JSON.stringify(t.updatedModules)
                                      )
                                    : void 0),
                                (e.buildPlatforms = t.buildPlatforms
                                    ? JSON.parse(
                                          JSON.stringify(t.buildPlatforms)
                                      )
                                    : void 0),
                                this.$rootScope.$emit('editors-changed')
                        }
                    }
                    removeEditorFromTheList(e) {
                        ie.a.remove(this.editors, (t) => t.version === e) &&
                            this.$rootScope.$emit('editors-changed')
                    }
                    _initEditorsList() {
                        const e = this._initInstalledEditors(),
                            t = this.localEditorManagerClient.getJobsInProgress(),
                            n = this._getInProgressDownloads(e),
                            i = [].concat(e, t, n),
                            o = JSON.parse(JSON.stringify(i.filter(Boolean)))
                        return this.versionFilter.sort(o)
                    }
                    _getInProgressDownloads(e) {
                        return this.getEditorReleases()
                            .filter(
                                (t) =>
                                    void 0 ===
                                    ie.a.find(e, { version: t.version })
                            )
                            .filter((e) =>
                                this.unityDownloadClient.isInProgress(e.version)
                            )
                            .map(
                                (e) => (
                                    (e.progress = this.unityDownloadClient.getDownloadProgress(
                                        e.version
                                    )),
                                    (e.status = gt.DOWNLOADING),
                                    e
                                )
                            )
                    }
                    getDefaultReleasesModules(e) {
                        const t = ie.a.find(
                            this.localEditorManagerClient.getReleases(),
                            { version: e }
                        )
                        return t ? t.modules : []
                    }
                    getEditorReleases() {
                        return JSON.parse(
                            JSON.stringify(
                                this.localEditorManagerClient.getReleases()
                            )
                        )
                    }
                    getDiskSpaceAvailable(e) {
                        return e && e.location
                            ? this.localEditorManagerClient.getDiskSpaceAvailable(
                                  e.location[0]
                              )
                            : this.localEditorManagerClient.getDiskSpaceAvailable()
                    }
                    isVisualStudioInstalled() {
                        return this.localEditorManagerClient.isVisualStudioInstalled()
                    }
                    downloadModules(e, t) {
                        ;(e.id = e.version),
                            (e.progress = 0),
                            this.localEditorManagerClient.downloadEditorModules(
                                e,
                                t
                            )
                    }
                    cancelDownload(e) {
                        this.localEditorManagerClient.cancelDownload(e)
                    }
                    downloadEditor(e, t, n) {
                        ;(e.id = e.version),
                            (e.progress = 0),
                            !0 === n &&
                                this.localEditorManagerClient.rememberSelectedModules(
                                    t
                                ),
                            this.localEditorManagerClient.downloadUnityEditor(
                                e,
                                t
                            )
                    }
                    async locateEditor(e) {
                        try {
                            await this.localEditorManagerClient.chooseAndAddEditor(
                                e
                            )
                        } catch (e) {
                            void 0 !== e &&
                                this.infoToastService.showMessageCode(
                                    e.errorCode,
                                    e.params
                                )
                        }
                    }
                    isLegacyEditor(e) {
                        return (
                            this.FIRST_VERSION_SUPPORTED_BY_HUB.compare(e) > 0
                        )
                    }
                    getReleaseTypeFromVersion(e) {
                        if ('linux' === this.osPlatform) {
                            if (
                                -1 ===
                                e.compare(this.FIRST_LINUX_PREVIEW_VERSION)
                            )
                                return yt.EXPERIMENTAL
                            if (
                                -1 ===
                                e.compare(this.FIRST_LINUX_OFFICIAL_VERSION)
                            )
                                return yt.PREVIEW
                        }
                        switch (e.channel) {
                            case 'b':
                                return yt.BETA
                            case 'a':
                                return yt.ALPHA
                            case 'f':
                                return yt.OFFICIAL
                            case 'p':
                                return yt.PATCH
                            default:
                                return yt.UNKNOWN
                        }
                    }
                    isLTSEditor(e, t) {
                        return !0 === t || 4 === e.minor
                    }
                    uninstallVersion(e) {
                        return this.localEditorManagerClient
                            .isEditorRunning(e)
                            .then((t) =>
                                t
                                    ? (this.errorService.showError(
                                          'ERROR.UNINSTALL.APP_IS_RUNNING',
                                          { version: e.version }
                                      ),
                                      Promise.resolve({ cancelled: !0 }))
                                    : ((e.status = gt.UNINSTALLING),
                                      this.$rootScope.$emit(
                                          'editor-status-changed',
                                          { editor: e }
                                      ),
                                      this.localEditorManagerClient.uninstallEditor(
                                          e.version
                                      ))
                            )
                            .then((t) => {
                                t && (t.cancelled || t.error)
                                    ? ((e.status = gt.INSTALLED),
                                      this.$rootScope.$emit(
                                          'editor-status-changed',
                                          { editor: e }
                                      ))
                                    : this.removeEditorFromTheList(e.version)
                            })
                            .catch(() => {
                                ;(e.status = gt.INSTALLED),
                                    this.$rootScope.$emit(
                                        'editor-status-changed',
                                        { editor: e }
                                    )
                            })
                    }
                    async removeEditorFromHub(e) {
                        await this.localEditorManagerClient.removeEditor(e),
                            this.removeEditorFromTheList(e)
                    }
                    sortEditors() {
                        return (
                            (this.editors = this.versionFilter.sort(
                                this.editors
                            )),
                            this.$rootScope.$emit('editors-changed'),
                            this.editors
                        )
                    }
                    getInstalledEditors() {
                        return ie.a.filter(this.editors, {
                            status: gt.INSTALLED,
                        })
                    }
                    _initInstalledEditors() {
                        const e = Object.values(
                            this.localEditorManagerClient.availableEditors
                        )
                        return (
                            e.forEach((e) => {
                                this.unityDownloadClient.isInProgress(e.version)
                                    ? ((e.status = gt.MODULES_DOWNLOADING),
                                      (e.progress = this.unityDownloadClient.getDownloadProgress(
                                          e.version
                                      )))
                                    : (e.status = gt.INSTALLED)
                            }),
                            e
                        )
                    }
                    applyPersistedSelection(e) {
                        return this.localEditorManagerClient
                            .getPersistedModuleSelection()
                            .then((t) => {
                                null !== t &&
                                    ie()(e)
                                        .values()
                                        .flatten()
                                        .filter({ installed: !1 })
                                        .each((e) => {
                                            e.selected =
                                                !!ie.a.includes(t, e.id) ||
                                                e.installed
                                        })
                            })
                    }
                }
                return (
                    (e.$inject = [
                        'localEditorManagerClient',
                        'unityDownloadClient',
                        '$filter',
                        'errorService',
                        'downloadNotifier',
                        'installNotifier',
                        'uninstallNotifier',
                        '$rootScope',
                        'infoToastService',
                        'localSystemInfoClient',
                    ]),
                    e
                )
            })(),
            jt = (() => {
                class e {
                    constructor(e) {
                        ;(this.ipcNotifier = e),
                            (this.events = {
                                start: 'editor-uninstall.start',
                                queued: 'editor-uninstall.queued',
                                cancel: 'editor-uninstall.cancel',
                            }),
                            e.registerRemoteEvents(ie.a.values(this.events))
                    }
                    on(e, t, n) {
                        this.ipcNotifier.on(this.events, e, t, n)
                    }
                }
                return (e.$inject = ['ipcNotifier']), e
            })(),
            Ut = (n(315), n(221)),
            zt = n.n(Ut)
        n(317)
        class Bt {
            constructor(e, t, n) {
                ;(this.$mdDialog = e),
                    (this.installService = t),
                    (this.eulaService = n),
                    (this.eulaModules = [])
            }
            $onInit() {
                this.modulesToDownload = []
            }
            onModuleChange({ selectedModules: e }) {
                ;(this.modulesToDownload = e),
                    (this.eulaModules = this.eulaService.getEulaModules(e))
            }
            _complete() {
                this.installService.downloadModules(
                    this.editor,
                    this.modulesToDownload
                ),
                    this.$mdDialog.hide()
            }
            downloadModules() {
                this.modulesToDownload &&
                    this.modulesToDownload.length > 0 &&
                    (0 === this.eulaModules.length
                        ? this._complete()
                        : this.eulaService
                              .showEula(this.eulaModules)
                              .then((e) => {
                                  !0 === e && this._complete()
                              }))
            }
            cancel() {
                this.$mdDialog.hide()
            }
        }
        Bt.$inject = ['$mdDialog', 'installService', 'eulaService']
        var Vt = {
                controller: Bt,
                templateUrl: zt.a,
                bindings: { editor: '<' },
            },
            Gt = n(222),
            Jt = n.n(Gt),
            Wt = (n(319), n(223)),
            Yt = n.n(Wt)
        class qt {
            constructor(e, t, n, i, o, r, s, a) {
                ;(this.EventEmitter = e),
                    (this.installService = t),
                    (this.$filter = n),
                    (this.$rootScope = i),
                    (this.$mdDialog = o),
                    (this.$window = r),
                    (this.$translate = s),
                    (this.localConfigClient = a),
                    (this.constants = {
                        NO_MORE_DIALOG: 'install.noMoreDevTools',
                        DEV_TOOLS_CATEGORY: 'Dev tools',
                        VISUAL_STUDIO: {
                            MODULE_IDS: {
                                VS: 'visualstudio',
                                PRO: 'visualstudioprofessionalunityworkload',
                                ENTERPRISE:
                                    'visualstudioenterpriseunityworkload',
                            },
                            VERSIONS: {
                                PRO: 'Professional',
                                ENTERPRISE: 'Enterprise',
                            },
                        },
                    })
            }
            async $onInit() {
                ;(this.vsDisabled = this.localConfigClient.isVSDisabled()),
                    await this._initModules(this.editor),
                    this.$rootScope.$apply()
            }
            clickModule(e) {
                e.installed && (e.selected = !0),
                    e.category === this.constants.DEV_TOOLS_CATEGORY &&
                        null ===
                            this.$window.localStorage.getItem(
                                this.constants.NO_MORE_DIALOG
                            ) &&
                        this._validateDevTools(),
                    e.children &&
                        ((e.collapse = e.selected),
                        e.children.forEach((t) => {
                            ;(t.selected = e.selected),
                                this._syncSelectedComponents(t)
                        })),
                    e.parentObject &&
                        !0 === e.selected &&
                        (e.parentObject.selected = !0),
                    this._syncSelectedComponents(e),
                    this._setTotalSpaceRequired(),
                    this._emitModuleChangeEvent(!0)
            }
            async _initModules(e) {
                e.modules && e.modules.length > 0
                    ? ((this._visualStudioState = await this.installService.isVisualStudioInstalled()),
                      (this.currentModules = ie.a
                          .chain(e.modules)
                          .cloneDeep()
                          .each((e) => {
                              this._fixModuleStates(e)
                          })
                          .groupBy('category')
                          .value()))
                    : (this.currentModules = ie.a
                          .chain(
                              this.installService.getDefaultReleasesModules(
                                  e.version
                              )
                          )
                          .groupBy('category')
                          .value()),
                    await this.installService.applyPersistedSelection(
                        this.currentModules
                    ),
                    ie.a
                        .chain(this.currentModules)
                        .values()
                        .flatten()
                        .each((e) => {
                            this._syncSelectedComponents(e)
                        })
                        .value(),
                    this._setChildrenAndSync(),
                    this._setTotalSpaceRequired()
                const t = await this.installService.getDiskSpaceAvailable(e)
                ;(this.spaceAvailable = this.$filter('fileSizeFilter')(
                    t.available
                )),
                    (this.noModules = ie.a.isEmpty(this.currentModules)),
                    this._emitModuleChangeEvent(!1)
            }
            _isCurrentEditorInstalled() {
                return this.editor.status === gt.INSTALLED
            }
            _fixModuleStates(e) {
                this._isModuleVisualStudio(e)
                    ? ((e.installed = this._visualStudioState.isInstalled),
                      e.installed
                          ? ((e.selected = !1), (e.visible = !1))
                          : this.vsDisabled && this._disableVS(e))
                    : this._isVisualStudioInstalled() &&
                      !this._isVisualStudioWorkloadInstalled() &&
                      (this._isModuleVisualStudioProAndIsInstalled(e) ||
                          this._isModuleVisualStudioEnterpriseAndIsInstalled(e))
                    ? ((e.visible = !0),
                      (e.selected = !0),
                      (e.installed = !1),
                      this.vsDisabled && this._disableVS(e))
                    : (e.installed =
                          !!this._isCurrentEditorInstalled() && e.selected),
                    void 0 === e.visible && (e.visible = !0)
            }
            _disableVS(e) {
                ;(e.selected = !1), (e.disabled = !0)
            }
            _isVisualStudioInstalled() {
                return this._visualStudioState.isInstalled
            }
            _isVisualStudioWorkloadInstalled() {
                return this._visualStudioState.workloadIsInstalled
            }
            _isModuleVisualStudio(e) {
                return e.id === this.constants.VISUAL_STUDIO.MODULE_IDS.VS
            }
            _isModuleVisualStudioProAndIsInstalled(e) {
                return (
                    e.id === this.constants.VISUAL_STUDIO.MODULE_IDS.PRO &&
                    this._visualStudioState.version ===
                        this.constants.VISUAL_STUDIO.VERSIONS.PRO
                )
            }
            _isModuleVisualStudioEnterpriseAndIsInstalled(e) {
                return (
                    e.id ===
                        this.constants.VISUAL_STUDIO.MODULE_IDS.ENTERPRISE &&
                    this._visualStudioState.version ===
                        this.constants.VISUAL_STUDIO.VERSIONS.ENTERPRISE
                )
            }
            _setChildrenAndSync() {
                ie.a
                    .chain(this.currentModules)
                    .values()
                    .flatten()
                    .each((e) => {
                        ie.a
                            .chain(this.currentModules)
                            .values()
                            .flatten()
                            .each((t) => {
                                t.parent &&
                                    t.parent === e.id &&
                                    (e.children || (e.children = []),
                                    e.children.push(t),
                                    (t.parentObject = e)),
                                    t.sync &&
                                        t.sync === e.id &&
                                        (e.displayDownloadSize ||
                                            (e.displayDownloadSize =
                                                e.downloadSize),
                                        e.displayInstalledSize ||
                                            (e.displayInstalledSize =
                                                e.installedSize),
                                        (e.displayDownloadSize +=
                                            t.downloadSize),
                                        (e.displayInstalledSize +=
                                            t.installedSize))
                            })
                            .value()
                    })
                    .value()
            }
            _syncSelectedComponents(e) {
                ie.a
                    .chain(this.currentModules)
                    .values()
                    .flatten()
                    .filter({ visible: !1, installed: !1 })
                    .each((t) => {
                        t.sync === e.id && (t.selected = e.selected)
                    })
                    .value()
            }
            _setTotalSpaceRequired() {
                let e = 0
                this._isCurrentEditorInstalled() ||
                    (e +=
                        parseInt(this.editor.downloadSize, 10) +
                        parseInt(this.editor.installedSize, 10)),
                    ie.a
                        .chain(this.currentModules)
                        .values()
                        .flatten()
                        .filter({ selected: !0, installed: !1 })
                        .each((t) => {
                            e +=
                                parseInt(t.downloadSize, 10) +
                                parseInt(t.installedSize, 10)
                        })
                        .value(),
                    (this.totalSpaceRequired = this.$filter('fileSizeFilter')(
                        e
                    ))
            }
            _validateDevTools() {
                if (this.editor.version.startsWith('2017.1')) return
                const e = []
                for (const t in this.currentModules)
                    if ('Dev tools' === t) {
                        for (
                            let n = 0;
                            n < this.currentModules[t].length;
                            n++
                        ) {
                            const i = this.currentModules[t][n]
                            if ((e.push(i.name), i.installed || i.selected))
                                return
                        }
                        break
                    }
                this._diplayDevToolDialog(e)
            }
            async _diplayDevToolDialog(e) {
                const t = await this._buildDevToolMessage(e),
                    n = this.constants.NO_MORE_DIALOG
                this.$mdDialog.show({
                    templateUrl: Yt.a,
                    locals: { message: t },
                    controller(e, t) {
                        ;(this.noMore = !1),
                            (this.onClickCheckbox = function () {
                                !0 === this.noMore
                                    ? e.localStorage.setItem(n, this.noMore)
                                    : e.localStorage.removeItem(n)
                            }),
                            (this.closeDialog = () => {
                                t.hide()
                            })
                    },
                    bindToController: !0,
                    controllerAs: '$ctrl',
                    multiple: !0,
                })
            }
            async _buildDevToolMessage(e) {
                if (2 === e.length)
                    return this.$translate(
                        'INSTALL.RECOMMEND_MULTIPLE_DEV_TOOLS'
                    )
                let t
                return (
                    (t =
                        1 === e.length
                            ? e[0]
                            : await this.$translate(
                                  'INSTALL.GENERIC_DEV_TOOL'
                              )),
                    this.$translate('INSTALL.RECOMMEND_DEV_TOOL', {
                        toolName: t,
                    })
                )
            }
            _emitModuleChangeEvent(e) {
                const t = ie.a
                    .chain(this.currentModules)
                    .values()
                    .flatten()
                    .each((e) => {
                        void 0 === e.installed && (e.installed = !1),
                            void 0 === e.visible && (e.visible = !0)
                    })
                    .filter({ selected: !0, installed: !1 })
                    .value()
                this.change(
                    this.EventEmitter({ selectedModules: t, doneByUser: e })
                )
            }
            shouldShowCategory(e, t) {
                if (t.length > 0) {
                    if (ie.a.filter(t, { category: e, visible: !0 }).length > 0)
                        return !0
                }
                return !1
            }
        }
        qt.$inject = [
            'EventEmitter',
            'installService',
            '$filter',
            '$rootScope',
            '$mdDialog',
            '$window',
            '$translate',
            'localConfigClient',
        ]
        var Ht = {
                controller: qt,
                templateUrl: Jt.a,
                bindings: { editor: '<', change: '&' },
            },
            Kt = n(224),
            Xt = n.n(Kt)
        n(321)
        class Qt {
            constructor(e, t) {
                ;(this.EventEmitter = e), (this.localConfigClient = t)
            }
            onModuleClick(e) {
                this.moduleClicked(this.EventEmitter(e))
            }
            onToggle(e, t) {
                e.stopPropagation(), (t.collapse = !t.collapse)
            }
        }
        Qt.$inject = ['EventEmitter']
        var Zt = {
                templateUrl: Xt.a,
                controller: Qt,
                bindings: {
                    category: '<',
                    modules: '<',
                    first: '<',
                    nested: '<',
                    moduleClicked: '&',
                },
            },
            en = n(225),
            tn = n.n(en)
        n(323)
        class nn {
            constructor(e, t, n, i, o, r, s) {
                ;(this.$mdDialog = e),
                    (this.installService = t),
                    (this.eulaService = s),
                    (this.$mdStepper = n),
                    (this.$rootScope = i),
                    (this.versionFilter = o('versionFilter')),
                    (this.$log = r),
                    (this.moduleSelectionChanged = !1),
                    (this.eulaModules = []),
                    (this.stepCount = 2)
            }
            $onInit() {
                ;(this.editors = this._getEditorReleases()),
                    (this.officialEditors = this.editors.filter(
                        (e) => 'official' === e.releaseType
                    )),
                    (this.preEditors = this.editors.filter(
                        (e) => 'beta' === e.releaseType
                    )),
                    (this.editor = ie.a.find(this.officialEditors, {
                        isDisabled: !1,
                    })),
                    this.editor ||
                        (this.editor = ie.a.find(this.preEditors, {
                            isDisabled: !1,
                        })),
                    this.preEditors.forEach((e) => {
                        v.a.isAlpha(e.version) && (e.channel = 'ALPHA'),
                            v.a.isBeta(e.version) && (e.channel = 'BETA')
                    }),
                    (this.modulesToDownload = []),
                    (this.step = 0)
            }
            nextStep() {
                const e = this.$mdStepper('install-stepper')
                switch (e.currentStep) {
                    case 0:
                        this.step++, e.next()
                        break
                    case 1:
                        0 === this.eulaModules.length
                            ? (this.downloadEditor(this.moduleSelectionChanged),
                              this.$mdDialog.hide())
                            : this.eulaService
                                  .showEula(this.eulaModules)
                                  .then((e) => {
                                      !0 === e &&
                                          (this.downloadEditor(
                                              this.moduleSelectionChanged
                                          ),
                                          this.$mdDialog.hide())
                                  })
                        break
                    default:
                        this.$log.info('invalid install step')
                }
            }
            previousStep() {
                const e = this.$mdStepper('install-stepper')
                switch (e.currentStep) {
                    case 0:
                        break
                    case 1:
                        this.step--, e.back()
                        break
                    default:
                        this.$log.info('invalid install step')
                }
            }
            onModuleChange({ selectedModules: e, doneByUser: t }) {
                ;(this.modulesToDownload = e),
                    (this.moduleSelectionChanged = t),
                    (this.eulaModules = this.eulaService.getEulaModules(e))
            }
            downloadEditor(e) {
                this.editor &&
                    this.installService.downloadEditor(
                        this.editor,
                        this.modulesToDownload,
                        e
                    ),
                    this.$mdDialog.hide()
            }
            cancel() {
                this.$mdDialog.hide()
            }
            _getEditorReleases() {
                const e = this.installService.getEditorReleases(),
                    t = this.installService.editors
                return (
                    e.forEach((e) => {
                        e.isDisabled =
                            void 0 !== ie.a.find(t, { version: e.version })
                    }),
                    this.versionFilter.sort(e)
                )
            }
            getNextStepButtonLabel() {
                return this.eulaModules.length > 0 ||
                    this.step < this.stepCount - 1
                    ? 'INSTALL.NEXT'
                    : 'INSTALL.DONE'
            }
        }
        nn.$inject = [
            '$mdDialog',
            'installService',
            '$mdStepper',
            '$rootScope',
            '$filter',
            '$log',
            'eulaService',
        ]
        var on = { controller: nn, templateUrl: tn.a },
            rn = n(226),
            sn = n.n(rn)
        n(325)
        class an {
            constructor(e, t) {
                ;(this.$mdDialog = e),
                    (this.installService = t),
                    (this.moduleSelectionChanged = !1)
            }
            $onInit() {
                this.modulesToDownload = []
            }
            onModuleChange({ selectedModules: e, doneByUser: t }) {
                ;(this.modulesToDownload = e), (this.moduleSelectionChanged = t)
            }
            downloadEditor() {
                this.editor &&
                    this.installService.downloadEditor(
                        this.editor,
                        this.modulesToDownload,
                        this.moduleSelectionChanged
                    ),
                    this.$mdDialog.hide()
            }
            cancel() {
                this.$mdDialog.hide()
            }
        }
        an.$inject = ['$mdDialog', 'installService']
        var ln = {
                controller: an,
                templateUrl: sn.a,
                bindings: { editor: '<' },
            },
            dn = n(227),
            cn = n.n(dn)
        n(327)
        class pn {
            constructor(e, t) {
                ;(this.$mdDialog = e), (this.$rootScope = t)
            }
            $onInit() {
                ;(this.modules = JSON.parse(
                    JSON.stringify(this.modules, [
                        'eulaMessage',
                        'eulaLabel1',
                        'id',
                        'eulaUrl1',
                        'name',
                        'eulaText',
                    ])
                )),
                    (this.currentModule = this.modules[0]),
                    this._linkModules()
            }
            _linkModules() {
                this.modules.forEach((e, t) => {
                    t < this.modules.length - 1 &&
                        (e.next = this.modules[t + 1]),
                        0 !== t && (e.prev = this.modules[t - 1])
                })
            }
            agreedAllEulas() {
                let e = this.modules[0],
                    t = !!e.approved
                for (; angular.isDefined(e.next) && !0 === t; )
                    (e = e.next), (t = t && e.approved)
                return t
            }
            cancel() {
                this.$mdDialog.hide(!1)
            }
            back() {
                this.currentModule = this.currentModule.prev
            }
            next() {
                this.currentModule = this.currentModule.next
            }
            done() {
                this.$mdDialog.hide(!0)
            }
        }
        pn.$inject = ['$mdDialog', '$rootScope']
        var un = {
                controller: pn,
                templateUrl: cn.a,
                bindings: { modules: '<' },
            },
            hn = (() => {
                class e {
                    constructor(e, t) {
                        ;(this.localEditorManagerClient = e),
                            (this.$mdDialog = t)
                    }
                    getEulaModules(e) {
                        return e.filter(
                            (e) =>
                                !!e.eulaUrl1 &&
                                !!e.eulaLabel1 &&
                                !!e.eulaMessage
                        )
                    }
                    async fetchEulaContent(e) {
                        const t = []
                        for (const n of e)
                            angular.isUndefined(n.eulaText) &&
                                t.push(
                                    this.localEditorManagerClient
                                        .getEulaText(n)
                                        .then((e) => {
                                            n.eulaText = e
                                        })
                                )
                        await Promise.all(t)
                    }
                    async showEula(e) {
                        return (
                            await this.fetchEulaContent(e),
                            this.$mdDialog.show({
                                template:
                                    '<eula-steps modules="$ctrl.modules"></eula-steps>',
                                multiple: !0,
                                bindToController: !0,
                                controllerAs: '$ctrl',
                                controller() {
                                    this.modules = e
                                },
                            })
                        )
                    }
                }
                return (
                    (e.$inject = ['localEditorManagerClient', '$mdDialog']), e
                )
            })(),
            mn = n(228),
            gn = n.n(mn)
        class fn {
            constructor(e) {
                this.$log = e
            }
            get iconType() {
                return { FONT: 'font', SVG: 'svg' }
            }
            get defaultFontFamily() {
                return 'material-icons'
            }
            $onInit() {
                this.iconData && this._spreadIconData(),
                    this.name
                        ? this._setFontData()
                        : this.svgUrl
                        ? this._setSVGData()
                        : this.$log.warn(
                              'Icon missing information to be displayed.'
                          )
            }
            _spreadIconData() {
                ;(this.name = this.iconData.name),
                    (this.fontFamily = this.iconData.fontFamily),
                    (this.svgUrl = this.iconData.svgUrl)
            }
            _setFontData() {
                ;(this.type = this.iconType.FONT),
                    (this.data = {
                        name: this.name,
                        font: this.fontFamily || this.defaultFontFamily,
                    })
            }
            _setSVGData() {
                ;(this.type = this.iconType.SVG),
                    (this.data = { url: this.svgUrl })
            }
        }
        fn.$inject = ['$log']
        var vn = {
                controller: fn,
                templateUrl: gn.a,
                bindings: {
                    fontFamily: '@?',
                    name: '@?',
                    svgUrl: '@?',
                    iconData: '<?data',
                },
            },
            bn =
                (n(329),
                o.a.module('hubIcon', []).component('hubIcon', vn).name),
            En = o.a
                .module('install', [s.a, g.a, l.a, Nt.a, xe, bn])
                .component('install', Et)
                .component('releaseTypeBadge', St)
                .component('legacyBadge', Ct)
                .component('ltsBadge', $t)
                .component('installEntry', Ft)
                .component('addModule', Vt)
                .component('addModuleLayout', Ht)
                .component('moduleCategory', Zt)
                .component('addEditor', on)
                .component('addCustomEditor', ln)
                .component('eulaSteps', un)
                .service('installService', Mt)
                .service('eulaService', hn)
                .service('infoToastService', ee)
                .service('ipcNotifier', Ee)
                .service('downloadNotifier', re)
                .service('installNotifier', ae)
                .service('uninstallNotifier', jt)
                .filter('versionFilter', at)
                .filter('fileSizeFilter', lt)
                .value('EventEmitter', G)
                .config([
                    '$translatePartialLoaderProvider',
                    (e) => {
                        e.addPart('install')
                    },
                ])
                .config([
                    '$stateProvider',
                    (e) => {
                        e.state('install', {
                            url: '/install?custom&editorToInstall',
                            component: 'install',
                            resolve: {
                                customInstall: [
                                    '$transition$',
                                    (e) => 'true' === e.params().custom,
                                ],
                                editorToInstall: [
                                    '$transition$',
                                    (e) => {
                                        const t = e.params().editorToInstall
                                        return t ? JSON.parse(t) : void 0
                                    },
                                ],
                            },
                        })
                    },
                ]).name,
            wn = n(229),
            yn = n.n(wn)
        class Sn {
            constructor(e, t, n, i, o) {
                ;(this.localEditorManagerClient = e),
                    (this.i18nConfigClient = t),
                    (this.$rootScope = n),
                    (this.$log = i),
                    (this.$translate = o)
            }
            $onInit() {
                ;(this.secondaryLocation = this.localEditorManagerClient.getSecondaryInstallLocation()),
                    this.setupLanguageSettings()
            }
            async setupLanguageSettings() {
                this.languages = this.i18nConfigClient.getAvailableLanguages()
                const e = await this.i18nConfigClient.getLanguage()
                if (e)
                    this.selectedLanguage ||
                        (this.selectedLanguage = this.languages.find(
                            (t) => t.code === e
                        ))
                else {
                    const e = this.$translate.preferredLanguage()
                    ;(this.selectedLanguage = this.languages.find(
                        (t) => t.code === e
                    )),
                        this.i18nConfigClient.setLanguage(e)
                }
            }
            onLocationChange(e) {
                this.secondaryLocation = e
            }
            async onSubmit() {
                try {
                    await this.localEditorManagerClient.setSecondaryInstallLocation(
                        this.secondaryLocation
                    )
                } catch (e) {
                    this.$log.info(e)
                }
            }
            async onLanguageChange() {
                this.$translate.use(this.selectedLanguage.code),
                    await this.i18nConfigClient.setLanguage(
                        this.selectedLanguage.code
                    )
            }
            async onFileSelector() {
                return await this.localEditorManagerClient.chooseSecondaryInstallLocation()
            }
        }
        Sn.$inject = [
            'localEditorManagerClient',
            'i18nConfigClient',
            '$rootScope',
            '$log',
            '$translate',
        ]
        var xn = { templateUrl: yn.a, controller: Sn },
            Cn = n(36),
            Ln =
                (n(334),
                o.a
                    .module('generalPreferences', [s.a, g.a, Cn.a])
                    .component('generalPreferences', xn)
                    .config([
                        '$translatePartialLoaderProvider',
                        (e) => {
                            e.addPart('general-preferences')
                        },
                    ])
                    .config([
                        '$stateProvider',
                        (e) => {
                            e.state('generalPreferences', {
                                url: '/generalPreferences',
                                component: 'generalPreferences',
                            })
                        },
                    ]).name),
            $n = n(21),
            Nn = n.n($n),
            Tn = n(231),
            _n = n.n(Tn)
        const An = {
            infoChanged: 'licenseInfoChanged',
            licenseLoading: 'licenseLoading',
        }
        class In extends N.a {
            constructor(e, t, n, i, o, r, s, a, l, d, c) {
                super(),
                    (this.$rootScope = e),
                    (this.$scope = t),
                    (this.$compile = n),
                    (this.$mdDialog = i),
                    (this.localLicenseClient = o),
                    (this.localWindowClient = r),
                    (this.unityAuthClient = s),
                    (this.authNotifier = a),
                    (this.infoToastService = l),
                    (this.licenseService = d),
                    (this.dialogService = c),
                    (this.licenseKinds = this.localLicenseClient.licenseKinds),
                    (this.labelMapping = {
                        [this.licenseKinds.PERSONAL]: 'PERSONAL',
                        [this.licenseKinds.PLUS]: 'PLUS',
                        [this.licenseKinds.PRO]: 'PRO',
                        [this.licenseKinds.EDU]: 'EDUCATION',
                        [this.licenseKinds.TRIAL]: 'TRIAL',
                        [this.licenseKinds.UNKNOWN]: 'UNKNOWN',
                    })
            }
            async $onInit() {
                this._registerEvents(),
                    await this._updateUserLoggedIn(await this._getUserInfo()),
                    await this._getLicenseInfo(),
                    this.$rootScope.$apply(),
                    angular.element(document).ready(() => {
                        this._compileLicensePlaceholder()
                    })
            }
            $onDestroy() {
                super.$onDestroy(),
                    this.infoToastService.remove(this._notLoggedInToast)
            }
            _compileLicensePlaceholder() {
                try {
                    var e = angular.element(
                            document.querySelector('#activateNewText')
                        ),
                        t = angular.element(
                            document.querySelector('#manualActivateText')
                        )
                    e.attr('ng-click', '$ctrl.activateNewLicense()'),
                        e.attr(
                            'ng-class',
                            '{ "em-disabled": !$ctrl.isUserLoggedIn || $ctrl.isLicenseLoading() }'
                        ),
                        t.attr('ng-click', '$ctrl.manualActivation()'),
                        t.attr(
                            'ng-class',
                            '{ "em-disabled": $ctrl.isLicenseLoading() }'
                        ),
                        this.$compile(e.parent().contents())(this.$scope)
                } catch (e) {}
            }
            activateNewLicense() {
                return this.$mdDialog
                    .show({ template: '<license-selector></license-selector>' })
                    .catch(() => {
                        this.licenseService.resetLicenseState()
                    })
            }
            updateLicense() {
                this.licenseService.updateLicense()
            }
            async returnLicense() {
                ;(await this.dialogService.confirm({
                    title: 'LICENSE.RETURN_DIALOG_TITLE',
                    textContent: 'LICENSE.RETURN_DIALOG_CONTENT',
                })) && this.licenseService.returnLicense()
            }
            openLink(e) {
                this.localWindowClient.openExternal(e)
            }
            _registerEvents() {
                this.authNotifier.on(
                    'userInfoChanged',
                    async (e, t) => {
                        await this._updateUserLoggedIn(t),
                            this.$rootScope.$apply()
                    },
                    this
                ),
                    this.licenseService.on(
                        An.infoChanged,
                        async () => {
                            const e = Object.assign({}, this.licenseInfo)
                            await this._getLicenseInfo(),
                                ie.a.isEqual(e, this.licenseInfo) ||
                                    this.$rootScope.$apply()
                        },
                        this
                    ),
                    this.licenseService.on(
                        An.licenseLoading,
                        (e, { isLoading: t, forceRootScopeApply: n = !1 }) => {
                            ;(this.licenseInfo.isLicenseActionInProgress = t),
                                n && this.$rootScope.$apply()
                        },
                        this
                    )
            }
            async _updateUserLoggedIn(e) {
                ;(this.isUserLoggedIn = '' !== e.userId),
                    this.isUserLoggedIn
                        ? this._notLoggedInToast &&
                          this.infoToastService.remove(this._notLoggedInToast)
                        : (this._notLoggedInToast = await this._showNotLoggedInToast())
            }
            async _getUserInfo() {
                const e = await this.unityAuthClient.getUserInfo()
                return JSON.parse(e)
            }
            async _getLicenseInfo() {
                ;(this.licenseInfo = await this.licenseService.getLicenseInfo()),
                    (this.licenseTypeKey = `LICENSE.TYPES.${
                        this.labelMapping[this.licenseInfo.label]
                    }`),
                    (this.licenseDetailsKey = `LICENSE.DETAILS.${
                        this.labelMapping[this.licenseInfo.label]
                    }`)
            }
            _showNotLoggedInToast() {
                return this.infoToastService.showMessageCode(
                    'ERROR.LICENSE.NOT_LOGGED_IN',
                    {},
                    {
                        icon: this.infoToastService.icoERROR,
                        unique: !0,
                        sticky: !0,
                        actions: [
                            {
                                message: 'LICENSE.LOGIN',
                                callback: () => {
                                    this.localWindowClient.showSignInWindow()
                                },
                            },
                            { message: 'COMMON.DISMISS', callback: () => {} },
                        ],
                    }
                )
            }
            isLicenseLoading() {
                return (
                    this.licenseInfo &&
                    this.licenseInfo.isLicenseActionInProgress
                )
            }
            shouldShowBuyPro() {
                return (
                    this.licenseInfo.label !== this.licenseKinds.PRO &&
                    this.licenseInfo.label !== this.licenseKinds.PLUS
                )
            }
            shouldShowExpiration() {
                return (
                    this.licenseInfo.canExpire &&
                    this.licenseInfo.label !== this.licenseKinds.PERSONAL
                )
            }
            manualActivation() {
                this.$mdDialog.show({
                    template: '<manual-license></manual-license>',
                    plain: !0,
                })
            }
        }
        In.$inject = [
            '$rootScope',
            '$scope',
            '$compile',
            '$mdDialog',
            'localLicenseClient',
            'localWindowClient',
            'unityAuthClient',
            'authNotifier',
            'infoToastService',
            'licenseService',
            'dialogService',
        ]
        var On = { templateUrl: _n.a, controller: In },
            Rn = n(232),
            kn = n.n(Rn)
        n(336)
        class Dn extends N.a {
            constructor(e, t, n) {
                super(),
                    (this.$mdDialog = e),
                    (this.licenseService = t),
                    (this.localConfigClient = n)
            }
            $onInit() {
                ;(this.category = ''),
                    (this.subCategory = ''),
                    (this.showPersonal = !1),
                    (this.showSerial = !1),
                    (this.serialNumber = ''),
                    (this.peDisabled = this.localConfigClient.isPEDisabled()),
                    this.licenseService.startNewActivation(),
                    this.peDisabled &&
                        ((this.category = 'pro'), this.clickPro())
            }
            cancel() {
                this.$mdDialog.cancel()
            }
            clickPersonal() {
                this.peDisabled ||
                    ((this.showSerial = !1), (this.showPersonal = !0))
            }
            clickPro() {
                ;(this.showPersonal = !1),
                    (this.showSerial = !0),
                    (this.subCategory = '')
            }
            isDoneButtonDisabled(e) {
                return (
                    (!0 === this.showPersonal && '' === this.subCategory) ||
                    '' === this.category ||
                    (!0 === this.showSerial && !e.$valid)
                )
            }
            done() {
                'pro' === this.category || 'pro' === this.subCategory
                    ? this.licenseService.submitLicense(this.serialNumber)
                    : this.licenseService.submitLicense(),
                    this.$mdDialog.hide()
            }
        }
        Dn.$inject = ['$mdDialog', 'licenseService', 'localConfigClient']
        var Pn = { templateUrl: kn.a, controller: Dn },
            Fn = n(233),
            Mn = n.n(Fn)
        n(338)
        class jn {
            constructor(e, t, n, i, o) {
                ;(this.$mdDialog = e),
                    (this.licenseService = t),
                    (this.$mdStepper = n),
                    (this.$rootScope = i),
                    (this.$log = o),
                    (this.stepCount = 2),
                    (this.loadLicenseLocation = '')
            }
            $onInit() {
                this.step = 0
            }
            nextStep() {
                const e = this.$mdStepper('manual-license-stepper')
                switch (e.currentStep) {
                    case 0:
                        this.step++, e.next()
                        break
                    case 1:
                        this.licenseService.loadLicense(
                            this.loadLicenseLocation
                        ),
                            this.$mdDialog.hide()
                        break
                    default:
                        this.$log.info('invalid manual license step')
                }
            }
            previousStep() {
                const e = this.$mdStepper('manual-license-stepper')
                switch (e.currentStep) {
                    case 0:
                        break
                    case 1:
                        this.step--, e.back()
                        break
                    default:
                        this.$log.info('invalid manual license step')
                }
            }
            cancel() {
                this.$mdDialog.hide()
            }
            saveLicense() {
                this.licenseService.saveLicense()
            }
            onLocationChange(e) {
                this.loadLicenseLocation = e
            }
            onFileSelector() {
                return this.licenseService.chooseLicenseDirectory()
            }
        }
        jn.$inject = [
            '$mdDialog',
            'licenseService',
            '$mdStepper',
            '$rootScope',
            '$log',
        ]
        var Un = { controller: jn, templateUrl: Mn.a }
        class zn extends b {
            constructor(e, t, n, i, o) {
                super(e),
                    (this.licenseNotifier = n),
                    (this.$rootScope = e),
                    (this.infoToastService = i),
                    (this.localLicenseClient = t),
                    (this.umTopNavService = o),
                    (this.licenseNearExpirationTime = 6048e5),
                    (this.manageLicenseOptions = {
                        actions: [
                            {
                                message: 'LICENSE.MANAGE_LICENSE',
                                callback: () => {
                                    this.umTopNavService.push({
                                        title:
                                            'GENERAL_PREFERENCES.PREFERENCES',
                                        state: 'licenseManagement',
                                    })
                                },
                            },
                            { message: 'COMMON.DISMISS', callback: () => {} },
                        ],
                        sticky: !0,
                        unique: !0,
                    })
            }
            init() {
                this._registerEvents(), this._checkLicenseWillExpire()
            }
            _registerEvents() {
                this.licenseNotifier.on('updated', () => {
                    this.infoToastService.showMessageCode(
                        'LICENSE.LICENSE_UPDATED',
                        {},
                        { icon: this.infoToastService.icoDONE }
                    ),
                        this._checkLicenseWillExpire(),
                        this.$rootScope.$emit(An.infoChanged)
                }),
                    this.licenseNotifier.on('returned', () => {
                        this.infoToastService.showMessageCode(
                            'LICENSE.RETURN_SUCCESS',
                            {},
                            { icon: this.infoToastService.icoDONE }
                        ),
                            this._checkLicenseWillExpire(),
                            this.$rootScope.$emit(An.infoChanged)
                    }),
                    this.licenseNotifier.on('valid', () => {
                        this._checkLicenseWillExpire(),
                            this.$rootScope.$emit(An.infoChanged)
                    }),
                    this.licenseNotifier.on('initialized', () => {
                        this._checkLicenseWillExpire()
                    }),
                    this.licenseNotifier.on('issued', () => {
                        this._checkLicenseWillExpire(),
                            this.infoToastService.showMessageCode(
                                'LICENSE.LICENSE_ACTIVATED'
                            ),
                            this.$rootScope.$emit(An.infoChanged)
                    }),
                    this.licenseNotifier.on('invalid', (e, t) => {
                        t &&
                            this.infoToastService.showMessageCode(
                                t,
                                {},
                                { icon: this.infoToastService.icoERROR }
                            ),
                            this.$rootScope.$emit(An.infoChanged)
                    })
            }
            updateLicense() {
                return (
                    this.$rootScope.$emit(An.licenseLoading, {
                        isLoading: !0,
                        forceRootScopeApply: !1,
                    }),
                    this.localLicenseClient.refreshLicense()
                )
            }
            returnLicense() {
                return (
                    this.$rootScope.$emit(An.licenseLoading, {
                        isLoading: !0,
                        forceRootScopeApply: !0,
                    }),
                    this.localLicenseClient.returnLicense()
                )
            }
            async _checkLicenseWillExpire() {
                const e = await this.getLicenseInfo(),
                    t = e.stopDate,
                    n = new Date(),
                    i = Math.pow(2, 31) - 1,
                    o = this.localLicenseClient.isLicenseValid()
                this._toastExpiration &&
                    (!angular.isDefined(t) ||
                        t - this.licenseNearExpirationTime - n > 0) &&
                    (this.infoToastService.remove(this._toastExpiration),
                    (this._toastExpiration = void 0)),
                    this._toastNoLicense &&
                        o &&
                        (this.infoToastService.remove(this._toastNoLicense),
                        (this._toastNoLicense = void 0)),
                    this._toastNoLicense || o
                        ? o &&
                          e.canExpire &&
                          angular.isDefined(t) &&
                          (t - this.licenseNearExpirationTime - n > i
                              ? setTimeout(
                                    this._checkLicenseWillExpire.bind(this),
                                    i
                                )
                              : setTimeout(async () => {
                                    await this.infoToastService.showMessageCode(
                                        'ERROR.LICENSE.NEAR_EXPIRATION',
                                        {},
                                        this.manageLicenseOptions
                                    )
                                }, this._validateTimeout(t - this.licenseNearExpirationTime - n)))
                        : this.localLicenseClient.isLicenseEntitlementEnabled()
                        ? (this._toastNoLicense = await this.infoToastService.showMessageCode(
                              'ERROR.LICENSE.NO_VALID_LICENSE_ENTITLEMENTS'
                          ))
                        : (this._toastNoLicense = await this.infoToastService.showMessageCode(
                              'ERROR.LICENSE.NO_VALID_LICENSE',
                              {},
                              this.manageLicenseOptions
                          ))
            }
            _validateTimeout(e) {
                return e >= 0 ? e : 0
            }
            startNewActivation() {
                this.localLicenseClient.activateNewLicense()
            }
            resetLicenseState() {
                this.localLicenseClient.resetLicenseState()
            }
            async validateSerialNumber(e) {
                return await this.localLicenseClient.validateSerialNumber(e)
            }
            async submitLicense(e) {
                try {
                    this.$rootScope.$emit(An.licenseLoading, {
                        isLoading: !0,
                        forceRootScopeApply: !1,
                    }),
                        await this.localLicenseClient.submitLicense(e)
                } catch (e) {
                    this.infoToastService.showMessageCode(e.message)
                }
            }
            async getLicenseInfo() {
                const e = await this.localLicenseClient.getLicenseInfo()
                let t = JSON.parse(e)
                return (t = this._setDatesFromUTCToLocal(t))
            }
            _setDatesFromUTCToLocal(e) {
                return (
                    [
                        'startDate',
                        'updateDate',
                        'stopDate',
                        'displayedStopDate',
                    ].forEach((t) => {
                        e[t] && (e[t] = new Date(e[t]))
                    }),
                    e
                )
            }
            async saveLicense() {
                const e = await this.localLicenseClient.saveLicense()
                !1 === e.succeeded &&
                    angular.isDefined(e.errorCode) &&
                    this.infoToastService.showMessageCode(
                        e.errorCode,
                        {},
                        { icon: this.infoToastService.icoERROR }
                    )
            }
            chooseLicenseDirectory() {
                return this.localLicenseClient.chooseLicenseFileToLoad()
            }
            async loadLicense(e) {
                this.$rootScope.$emit(An.licenseLoading, {
                    isLoading: !0,
                    forceRootScopeApply: !1,
                })
                const t = await this.localLicenseClient.loadLicense(e)
                !1 === t.succeeded &&
                    angular.isDefined(t.errorCode) &&
                    (this.infoToastService.showMessageCode(
                        t.errorCode,
                        {},
                        { icon: this.infoToastService.icoERROR }
                    ),
                    this.$rootScope.$emit(An.infoChanged))
            }
        }
        zn.$inject = [
            '$rootScope',
            'localLicenseClient',
            'licenseNotifier',
            'infoToastService',
            'umTopNavService',
        ]
        var Bn = zn,
            Vn = n(33),
            Gn =
                (n(340),
                o.a
                    .module('licenseManagement', [s.a, g.a, xe, Vn.a, te, Nn.a])
                    .component('licenseManagement', On)
                    .component('licenseSelector', Pn)
                    .component('manualLicense', Un)
                    .service('licenseNotifier', se)
                    .service('licenseService', Bn)
                    .service('authNotifier', oe)
                    .config([
                        '$translatePartialLoaderProvider',
                        (e) => {
                            e.addPart('license-management')
                        },
                    ])
                    .config([
                        '$stateProvider',
                        '$urlRouterProvider',
                        (e, t) => {
                            t.when('/manage', '/licenseManagement'),
                                e.state('licenseManagement', {
                                    url: '/licenseManagement',
                                    component: 'licenseManagement',
                                })
                        },
                    ]).name),
            Jn = (() => {
                class e {
                    constructor(e) {
                        ;(this.ipcNotifier = e),
                            (this.events = {
                                downloaded: 'auto-update.update-available',
                            }),
                            e.registerRemoteEvents(ie.a.values(this.events))
                    }
                    on(e, t, n) {
                        this.ipcNotifier.on(this.events, e, t, n)
                    }
                }
                return (e.$inject = ['ipcNotifier']), e
            })()
        class Wn extends b {
            get constants() {
                return { WELCOME_DISMISS: 'welcome.dismiss' }
            }
            constructor(e, t, n, i, o, r) {
                super(e),
                    (this.$rootScope = e),
                    (this.infoToastService = i),
                    (this.hubAutoUpdateClient = r),
                    (this.autoUpdateNotifier = o),
                    (this.$window = t),
                    (this.localWindowClient = n),
                    (this._updateOptions = {
                        actions: [
                            {
                                message: 'COMMON.RESTART_NOW',
                                callback: () => {
                                    this.hubAutoUpdateClient.restart()
                                },
                            },
                            {
                                message: 'COMMON.REMIND_LATER',
                                callback: () => {
                                    this.hubAutoUpdateClient.remindLater()
                                },
                            },
                        ],
                        unique: !0,
                        sticky: !0,
                    })
            }
            init() {
                this._registerEvents(),
                    this._showUpdate(),
                    this._showReleaseNotesToast()
            }
            _registerEvents() {
                this.autoUpdateNotifier.on('downloaded', () => {
                    this._showUpdate()
                })
            }
            _showUpdate() {
                if (this.hubAutoUpdateClient.updateAvailable) {
                    const e = this.hubAutoUpdateClient.availableVersion
                    e
                        ? this.infoToastService.showMessageCode(
                              'UPDATE.DOWNLOADED',
                              { version: e },
                              this._updateOptions
                          )
                        : this.infoToastService.showMessageCode(
                              'UPDATE.DOWNLOADED_NO_VERISON_NUMBER',
                              {},
                              this._updateOptions
                          )
                }
            }
            _shouldShowTheReleaseNotesToast() {
                return (
                    this.$window.localStorage.getItem(
                        this.constants.WELCOME_DISMISS
                    ) !== this.hubAutoUpdateClient.currentVersion
                )
            }
            _showReleaseNotesToast() {
                this._shouldShowTheReleaseNotesToast() &&
                    this.infoToastService.showMessageCode(
                        'UPDATE.WELCOME',
                        {},
                        {
                            sticky: !0,
                            actions: [
                                {
                                    message: 'UPDATE.KNOW_MORE',
                                    callback: () => {
                                        this.$window.localStorage.setItem(
                                            this.constants.WELCOME_DISMISS,
                                            this.hubAutoUpdateClient
                                                .currentVersion
                                        ),
                                            this.localWindowClient.openExternal(
                                                'https://unity3d.com/hub/whats-new'
                                            )
                                    },
                                },
                                {
                                    message: 'COMMON.DISMISS',
                                    callback: () => {
                                        this.$window.localStorage.setItem(
                                            this.constants.WELCOME_DISMISS,
                                            this.hubAutoUpdateClient
                                                .currentVersion
                                        )
                                    },
                                },
                            ],
                        }
                    )
            }
        }
        Wn.$inject = [
            '$rootScope',
            '$window',
            'localWindowClient',
            'infoToastService',
            'autoUpdateNotifier',
            'hubAutoUpdateClient',
        ]
        var Yn = Wn,
            qn = o.a
                .module('autoUpdate', [g.a, xe, te])
                .service('autoUpdateNotifier', Jn)
                .service('autoUpdateService', Yn)
                .config([
                    '$translatePartialLoaderProvider',
                    (e) => {
                        e.addPart('auto-update')
                    },
                ]).name,
            Hn = o.a.module('app.components', [Me, dt, ut, En, Ln, Gn, qn])
                .name,
            Kn = n(22),
            Xn = n(239)
        const Qn = {
            templateUrl: n.n(Xn).a,
            controller: class extends N.a {
                constructor(e, t, n, i, o) {
                    super(),
                        (this.$state = e),
                        (this.$transitions = t),
                        (this.sideNavService = n),
                        (this.localEditorManagerClient = i),
                        (this.localWindowClient = o)
                }
                $onInit() {
                    this.$transitions.onFinish({}, (e) => {
                        this._activateState(e)
                    }),
                        this.sideNavService.on(
                            'items-changed',
                            (e, { list: t, transition: n }) => {
                                ;(this.navItems = t), this._activateState(n)
                            }
                        ),
                        (this.modalEditor = this.localEditorManagerClient.getModalEditor()),
                        (this.isDebugMode = void 0 !== this.modalEditor)
                }
                exitDebugMode() {
                    this.localEditorManagerClient.clearModalEditor(),
                        this.localWindowClient.exitDebugMode()
                }
                onNavItemSelect(e) {
                    this.$state.go(`${e.uiSref}`)
                }
                _activateState(e) {
                    if ('' !== e.from().name) {
                        const t = ie.a.find(this.navItems, {
                            uiSref: e.from().name,
                        })
                        o.a.isDefined(t) && (t.isActive = !1)
                    }
                    const t = ie.a.find(this.navItems, { uiSref: e.to().name })
                    o.a.isDefined(t) && (t.isActive = !0)
                }
            },
            $inject: [
                '$state',
                '$transitions',
                'sideNavService',
                'localEditorManagerClient',
                'localWindowClient',
            ],
        }
        var Zn = Qn
        const ei = {
                PROJECT_TAB: {
                    name: 'PROJECT.PROJECTS',
                    iconName: 'projects',
                    fontSet: 'unity-icon',
                    isLink: !0,
                    uiSref: 'project',
                    isActive: !1,
                    isOpen: !1,
                },
                LEARN_TAB: {
                    name: 'LEARN.LEARN',
                    iconName: 'school',
                    fontSet: 'material-icons',
                    isLink: !0,
                    uiSref: 'learn',
                    isActive: !1,
                    isOpen: !1,
                },
                INSTALL_TAB: {
                    name: 'INSTALL.INSTALLS',
                    iconName: 'storage',
                    fontSet: 'material-icons',
                    isLink: !0,
                    uiSref: 'install',
                    isActive: !1,
                    isOpen: !1,
                },
                COMMUNITY_TAB: {
                    name: 'COMMUNITY.COMMUNITY',
                    iconName: 'group',
                    fontSet: 'material-icons',
                    isLink: !0,
                    uiSref: 'community',
                    isActive: !1,
                    isOpen: !1,
                },
            },
            ti = {
                GENERAL_PREFERENCES: {
                    name: 'GENERAL_PREFERENCES.GENERAL',
                    iconName: 'settings',
                    uiSref: 'generalPreferences',
                    isLink: !0,
                },
                LICENSE_MANAGEMENT: {
                    name: 'LICENSE.LICENSE_MANAGEMENT',
                    iconName: 'insert_drive_file',
                    uiSref: 'licenseManagement',
                    isLink: !0,
                },
            }
        class ni extends b {
            constructor(e, t, n, i, o, r) {
                super(t),
                    (this.$state = n),
                    (this.localConfigClient = i),
                    (this.communityClient = o),
                    (this.localLicenseClient = r),
                    (this.mainNavItems = []),
                    // this.localConfigClient.isLearnDisabled()
                    //     ? this.mainNavItems.push(ei.PROJECT_TAB, ei.INSTALL_TAB)
                    //     : this.mainNavItems.push(
                    //           ei.PROJECT_TAB,
                    //           ei.LEARN_TAB,
                    //           ei.INSTALL_TAB
                    //       ),
                    this.localConfigClient.isLearnDisabled()
                        ? this.mainNavItems.push(ei.PROJECT_TAB, ei.INSTALL_TAB)
                        : this.mainNavItems.push(
                        ei.PROJECT_TAB,
                        ei.INSTALL_TAB
                        ),
                    this.communityClient.getShowCommunity() &&
                        this.mainNavItems.splice(0, 0, ei.COMMUNITY_TAB),
                    this.localLicenseClient.isLicenseEntitlementEnabled()
                        ? (this.prefNavItems = [ti.GENERAL_PREFERENCES])
                        : (this.prefNavItems = [
                              ti.GENERAL_PREFERENCES,
                              ti.LICENSE_MANAGEMENT,
                          ]),
                    e.onSuccess({}, (e) => {
                        this._shouldShowPreferItems(e)
                            ? t.$emit('items-changed', {
                                  list: this.prefNavItems,
                                  transition: e,
                              })
                            : this._shouldShowMainItems(e) &&
                              t.$emit('items-changed', {
                                  list: this.mainNavItems,
                                  transition: e,
                              })
                    })
            }
            _shouldShowMainItems(e) {
                try {
                    return (
                        (this._containsState(
                            this.prefNavItems,
                            e.from().name
                        ) ||
                            '' === e.from().name) &&
                        this._containsState(this.mainNavItems, e.to().name)
                    )
                } catch (e) {
                    return !1
                }
            }
            _shouldShowPreferItems(e) {
                try {
                    return (
                        (this._containsState(
                            this.mainNavItems,
                            e.from().name
                        ) ||
                            '' === e.from().name) &&
                        this._containsState(this.prefNavItems, e.to().name)
                    )
                } catch (e) {
                    return !1
                }
            }
            _containsState(e, t) {
                try {
                    return void 0 !== e.find((e) => e.uiSref === t)
                } catch (e) {
                    return !1
                }
            }
        }
        ni.$inject = [
            '$transitions',
            '$rootScope',
            '$state',
            'localConfigClient',
            'communityClient',
            'localLicenseClient',
        ]
        var ii = ni,
            oi = o.a
                .module('sidenav', [Kn.a])
                .component('sidenav', Zn)
                .service('sideNavService', ii).name,
            ri = n(240),
            si = n.n(ri)
        class ai extends N.a {
            constructor(e, t, n, i, o, r, s, a, l, d) {
                super(),
                    (this.$state = e),
                    (this.$rootScope = t),
                    (this.umTopNavService = n),
                    (this.authNotifier = i),
                    (this.unityAuthClient = o),
                    (this.localWindowClient = r),
                    (this.hubBugReporterClient = s),
                    (this.localEditorManagerClient = a),
                    (this.localLicenseClient = l),
                    (this.localConfigClient = d),
                    (this.enableLogin = !d.isSignInDisabled()),
                    (this.actions = [
                        {
                            icon: 'settings',
                            handle: () => {
                                this.umTopNavService.push({
                                    title: 'GENERAL_PREFERENCES.PREFERENCES',
                                    state: 'generalPreferences',
                                })
                            },
                        },
                    ]),
                    (this.userInfo = { userId: '' })
            }
            $onInit() {
                this._fetchInfo(),
                    (this.modalEditor = this.localEditorManagerClient.getModalEditor()),
                    (this.isDebugMode = void 0 !== this.modalEditor)
            }
            async _fetchInfo() {
                const [e, t] = await Promise.all([
                    this.unityAuthClient.getConnectInfo(),
                    this.unityAuthClient.getUserInfo(),
                ])
                ;(this.online = JSON.parse(e).online),
                    (this.userInfo = JSON.parse(t)),
                    this._updateUserinfo(this.userInfo),
                    this._registerEvents()
            }
            _registerEvents() {
                this.authNotifier.on(
                    'userInfoChanged',
                    (e, t) => {
                        this._updateUserinfo(t)
                    },
                    this
                ),
                    this.authNotifier.on(
                        'connectInfoChanged',
                        (e, t) => {
                            this._onNetworkStatusChanged(t)
                        },
                        this
                    )
            }
            _updateUserinfo(e) {
                '' === e.userId
                    ? ((this.user = null),
                      (this.initials = null),
                      (this.supportingLinks = [
                          {
                              title: 'TOP_NAV.HELP',
                              onClick: () => {
                                  this.localWindowClient.openExternal(
                                      'https://support.unity3d.com/hc/en-us/sections/201104779-Accounts-UDN-'
                                  )
                              },
                          },
                          {
                              title: 'TOP_NAV.TROUBLESHOOTING',
                              submenu: [
                                  {
                                      title: 'TOP_NAV.RELEASE_NOTES',
                                      onClick: () => {
                                          this.localWindowClient.openExternal(
                                              'https://unity3d.com/hub/whats-new'
                                          )
                                      },
                                  },
                                  {
                                      title: 'TOP_NAV.HUB_DOCUMENTATION',
                                      onClick: () => {
                                          this.localWindowClient.openExternal(
                                              'https://docs.unity3d.com/Manual/GettingStartedUnityHub.html'
                                          )
                                      },
                                  },
                                  {
                                      title: 'TOP_NAV.OPEN_LOG_DIRECTORY',
                                      onClick: () => {
                                          this.localWindowClient.showLogDirectory()
                                      },
                                  },
                                  {
                                      title: 'TOP_NAV.REPORT_BUG',
                                      onClick: () => {
                                          this.hubBugReporterClient.showBugReporter()
                                      },
                                  },
                              ],
                          },
                      ]))
                    : ((this.user = {
                          id: e.userId,
                          name: e.displayName,
                          email: e.name,
                          accountOnClick: () => {
                              this.localWindowClient.openExternal(
                                  'https://id.unity.cn/en/account/edit',
                                  !0
                              )
                          },
                      }),
                      (this.initials = this._buildInitials(e)),
                      (this.supportingLinks = [
                          {
                              title: 'TOP_NAV.GO_DASHBOARD',
                              onClick: () => {
                                  this.localWindowClient.openExternal(
                                      'https://developer.cloud.unity3d.com/projects',
                                      !0
                                  )
                              },
                          },
                          {
                              title: 'TOP_NAV.MANAGE_ORGS',
                              onClick: () => {
                                  this.localWindowClient.openExternal(
                                      'https://id.unity.cn/organizations',
                                      !0
                                  )
                              },
                          },
                          {
                              title: 'TOP_NAV.HELP',
                              onClick: () => {
                                  this.localWindowClient.openExternal(
                                      'https://support.unity3d.com/hc/en-us/sections/201104779-Accounts-UDN-'
                                  )
                              },
                          },
                          {
                              title: 'TOP_NAV.TROUBLESHOOTING',
                              submenu: [
                                  {
                                      title: 'TOP_NAV.RELEASE_NOTES',
                                      onClick: () => {
                                          this.localWindowClient.openExternal(
                                              'https://unity3d.com/hub/whats-new'
                                          )
                                      },
                                  },
                                  {
                                      title: 'TOP_NAV.HUB_DOCUMENTATION',
                                      onClick: () => {
                                          this.localWindowClient.openExternal(
                                              'https://docs.unity3d.com/Manual/GettingStartedUnityHub.html'
                                          )
                                      },
                                  },
                                  {
                                      title: 'TOP_NAV.OPEN_LOG_DIRECTORY',
                                      onClick: () => {
                                          this.localWindowClient.showLogDirectory()
                                      },
                                  },
                                  {
                                      title: 'TOP_NAV.REPORT_BUG',
                                      onClick: () => {
                                          this.hubBugReporterClient.showBugReporter()
                                      },
                                  },
                              ],
                          },
                      ]),
                      this.localLicenseClient.isLicenseEntitlementEnabled() ||
                          this.supportingLinks.splice(1, 0, {
                              title: 'TOP_NAV.MANAGE_LICENSE',
                              onClick: () => {
                                  this.umTopNavService.push({
                                      title: 'GENERAL_PREFERENCES.PREFERENCES',
                                      state: 'licenseManagement',
                                  })
                              },
                          })),
                    this.$rootScope.$apply()
            }
            _buildInitials(e) {
                const t = (e.displayName ? e.displayName : '').split(' ')
                return t.length > 0
                    ? t.length > 1
                        ? `${t[0].substr(0, 1)}${t[1].substr(0, 1)}`
                        : t[0].substr(0, 2)
                    : ''
            }
            _onUserinfoChanged(e) {
                ;(this.userInfo = e), this._updateUserinfo(e)
            }
            _onNetworkStatusChanged(e) {
                this.online = e.online
            }
            logout() {
                this.unityAuthClient.logout()
            }
            login() {
                this.localWindowClient.showSignInWindow()
            }
            onNavItemSelect(e) {
                this.$state.go(`#${e}`)
            }
        }
        ai.$inject = [
            '$state',
            '$rootScope',
            'umTopNavService',
            'authNotifier',
            'unityAuthClient',
            'localWindowClient',
            'hubBugReporterClient',
            'localEditorManagerClient',
            'localLicenseClient',
            'localConfigClient',
        ]
        var li = { templateUrl: si.a, controller: ai },
            di = o.a
                .module('topbar', [s.a, Kn.a, g.a])
                .component('topbar', li)
                .service('ipcNotifier', Ee)
                .service('authNotifier', oe)
                .config([
                    '$translatePartialLoaderProvider',
                    (e) => {
                        e.addPart('top-nav')
                    },
                ]).name,
            ci = n(241)
        var pi = {
                controller: class {},
                templateUrl: n.n(ci).a,
                bindings: { iconName: '@', fontSet: '@' },
                transclude: {
                    summary: 'placeholderSummary',
                    details: 'placeholderDetails',
                },
            },
            ui =
                (n(356),
                o.a
                    .module('list-placeholder', [])
                    .component('listPlaceholder', pi).name),
            hi = n(242),
            mi = {
                templateUrl: n.n(hi).a,
                bindings: {
                    model: '<',
                    options: '<',
                    disabled: '<?',
                    icon: '<?',
                    iconClass: '<?',
                },
            },
            gi = o.a
                .module('app.common', [oi, di, te, ui, xe])
                .component('dropdownMenu', mi).name,
            fi = n(32)
        n(198)
        const vi = o.a.module('template.runner', []).name
        var bi = o.a
            .module('app', [
                d.a,
                vi,
                Hn,
                gi,
                xe,
                s.a,
                l.a,
                'mdSteppers',
                fi.a,
                'oc.lazyLoad',
            ])
            .component('app', p)
            .config([
                '$stateProvider',
                '$urlRouterProvider',
                (e, t) => {
                    e.state('app', { redirectTo: 'project', url: '/' }),
                        t.otherwise('/')
                },
            ])
            .config(['$mdAriaProvider', (e) => e.disableWarnings()])
            .config([
                '$provide',
                (e) => {
                    const t = new Map([
                        [
                            'cloudAnalyticsClient',
                            './src/services/cloudAnalytics/cloudAnalytics',
                        ],
                        [
                            'cloudCollabClient',
                            './src/services/cloudCollab/cloudCollab',
                        ],
                        [
                            'cloudConfigClient',
                            './src/services/cloudConfig/cloudConfig',
                        ],
                        [
                            'localConfigClient',
                            './src/services/localConfig/localConfig',
                        ],
                        [
                            'localEditorManagerClient',
                            './src/services/editorManager/editorManager',
                        ],
                        [
                            'localLicenseClient',
                            './src/services/licenseService/licenseClientProxy',
                        ],
                        [
                            'communityClient',
                            './src/services/community/communityService',
                        ],
                        [
                            'localProjectClient',
                            './src/services/localProject/localProject',
                        ],
                        [
                            'localSystemInfoClient',
                            './src/services/localSystemInfo/systemInfo',
                        ],
                        [
                            'localWindowClient',
                            './src/services/localWindow/window',
                        ],
                        [
                            'hubAutoUpdateClient',
                            './src/services/hubAutoUpdate/auto-updater',
                        ],
                        [
                            'hubBugReporterClient',
                            './src/services/hubBugReporter/bug-reporter',
                        ],
                        ['unityAuthClient', './src/services/localAuth/auth'],
                        [
                            'unityDownloadClient',
                            './src/services/localDownload/unityDownload',
                        ],
                        [
                            'unityReleasesClient',
                            './src/services/editorManager/unityReleaseService',
                        ],
                        [
                            'pluginManagerClient',
                            './src/services/pluginManager/pluginManagerLight',
                        ],
                        [
                            'learnContentClient',
                            './src/services/learnContent/learnContentService',
                        ],
                        [
                            'i18nConfigClient',
                            './src/services/i18nConfig/i18nConfig',
                        ],
                    ])
                    for (const [n, i] of t)
                        e.value(n, window.require('electron').remote.require(i))
                },
            ])
            .run([
                'pluginManager',
                'errorService',
                'installService',
                'projectService',
                'licenseService',
                'autoUpdateService',
                'analyticsService',
                (e, t, n, i, o, r, s) => {
                    e.init(),
                        t.init(),
                        n.init(),
                        i.init(),
                        o.init(),
                        r.init(),
                        s.init()
                },
            ]).name
        o.a.bootstrap(document, [bi])
    },
])
