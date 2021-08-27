import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import classNames from 'classnames';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Button = function (_a) {
    var primary = _a.primary, backgroundColor = _a.backgroundColor, size = _a.size, label = _a.label, props = __rest(_a, ["primary", "backgroundColor", "size", "label"]);
    var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (jsx("button", __assign({ type: "button", className: ['storybook-button', "storybook-button--" + size, mode].join(' '), style: { backgroundColor: backgroundColor } }, props, { children: label }), void 0));
};
Button.defaultProps = {
    backgroundColor: undefined,
    primary: false,
    size: 'medium',
};

var Input = function (_a) {
    var type = _a.type, label = _a.label, placeholder = _a.placeholder, className = _a.className; _a.error; var field = _a.field, _b = _a.form, touched = _b.touched, errors = _b.errors; __rest(_b, ["touched", "errors"]); var props = __rest(_a, ["type", "label", "placeholder", "className", "error", "field", "form"]);
    return (jsxs("div", __assign({ className: classNames("form-group", className, {
            error: touched[field.name] && errors[field.name],
        }) }, { children: [label && (jsx("label", __assign({ className: "form-label", htmlFor: field.name }, { children: label }), void 0)), jsx("input", __assign({ type: type, className: classNames("form-control", {
                    "is-invalid": touched[field.name] && errors[field.name],
                }), placeholder: placeholder }, field, props), void 0), touched[field.name] && errors[field.name] && (jsx("div", __assign({ className: "invalid-feedback" }, { children: errors[field.name] }), void 0))] }), void 0));
};

export { Button, Input };
