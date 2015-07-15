/*!
* jsonformatter
* 
 * Version: 0.2.7 - 2014-12-21T20:19:06.891Z
* License: MIT
*/
"use strict";
var app = angular.module("jsonFormatter", ["RecursionHelper"]);

app.directive("jsonFormatter", ["RecursionHelper", function(n) {
    var array = [];
    var path = [];
    var array12 = [];
    var klen = 0;
    var jk = 0;
    function e(n) {
        return n.replace('"', '"')
    }
    n.setflag = 0;
    
    function t(n) {
        if (void 0 === n) return "";
        if (null === n) return "Object";
        if ("object" == typeof n && !n.constructor) return "Object";
        var e = /function (.{1,})\(/,
            t = e.exec(n.constructor.toString());
        return t && t.length > 1 ? t[1] : ""
    }

    function s(n) {
        return null === n ? "null" : typeof n
    }

    function r(n) {
        n.isArray = function() {
            return Array.isArray(n.json)
        }, n.isObject = function() {
            return n.json && "object" == typeof n.json
        }, n.getKeys = function() {
            return n.isObject() ? Object.keys(n.json).map(function(n) {
                return "" === n ? '""' : n;
            }) : void 0
        }, n.type = s(n.json), n.hasKey = "undefined" != typeof n.key, n.getConstructorName = function() {
            return t(n.json)
        }, "string" === n.type && ("Invalid Date" !== new Date(n.json).toString() && (n.isDate = !0), 0 === n.json.indexOf("http") && (n.isUrl = !0)), n.isEmptyObject = function() {
            return n.getKeys() && !n.getKeys().length && n.isOpen && !n.isArray()
        }, n.isOpen = !!n.open, n.toggleOpen = function() {
            n.isOpen = !n.isOpen
        }, n.childrenOpen = function() {
            return n.open > 1 ? n.open - 1 : 0
        }, n.openLink = function(e) {
            e && (window.location.href = n.json)
        }, n.parseValue = function(t) {
            return n.type = s(n.json), "null" === n.type ? "null" : "undefined" === n.type ? "" : ("string" === n.type && (t = '"' + e(t) + '"'), "function" === n.type ? n.json.toString().replace(/\n/g, "").replace(/\{.+?\}/, "") + "{ ... }" : t)
        }
    }
    return {
        templateUrl: "json-formatter.html",
        restrict: "E",
        replace: !0,
     
        scope: {
            
            json: "=",
            key: "=",
            open: "="
            
            
            
        },
      
        compile: function(e) {
            return n.compile(e, r)
        }

    }
}]), angular.module("RecursionHelper", []).factory("RecursionHelper", ["$compile", function(n) {
    return {
        compile: function(e, t) {
            angular.isFunction(t) && (t = {
                post: t
            });
            var s, r = e.contents().remove();
            return {
                
                pre: t && t.pre ? t.pre : null,
                post: function(e, o) {
                   s || (s = n(r)), s(e, function(n) {
                        o.append(n)
                    }), t && t.post && t.post.apply(null, arguments)
                }
                
            }
        }
        
        }
}]), angular.module("jsonFormatter").run(["$templateCache", function(n) {
    n.put("json-formatter.html", '<div ng-init="isOpen = open && open > 0" class="json-formatter-row"><a ng-click="toggleOpen()"><i  class="fa toggler {{isOpen ? \'open\' : \'\'}}" ng-if="isObject()"></i> <span class="jsonKey" ng-if="hasKey">{{key}}:</span> <span class="value"><span ng-if="isArray()"><span class="bracket">[</span><span class="number">{{json.length}}</span><span class="bracket">]</span></span> </span><span ng-if="!isObject()" ng-click="openLink(isUrl)" class="{{type}}" ng-class="{date: isDate, url: isUrl}">{{parseValue(json)}}</span></span></a><div class="children" ng-if="getKeys().length && isOpen"><json-formatter ng-repeat="key in getKeys()" json="json[key]" key="key" open="childrenOpen()"></json-formatter></div><div class="children empty object" ng-if="isEmptyObject()"></div><div class="children empty array" ng-if="getKeys() && !getKeys().length && isOpen && isArray()"></div></div>')
}]);
