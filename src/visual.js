"use strict";
/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//"use strict";
class Visual {
    constructor(options) {
        /// PBI Custom Visual Standard Example
        console.log("Just trying to set this up..");
        console.log('Visual constructor', options);
        this.target = options.element;
        this.updateCount = 0;
        if (typeof document !== "undefined") {
            const new_p = document.createElement("p");
            new_p.appendChild(document.createTextNode("Update count:"));
            const new_em = document.createElement("em");
            this.textNode = document.createTextNode(this.updateCount.toString());
            new_em.appendChild(this.textNode);
            new_p.appendChild(new_em);
            this.target.appendChild(new_p);
        }
    }
    update(options) {
        /// PBI Custom Visual Standard Example
        console.log("Just trying to set this up..");
        //this.settings = Visual.parseSettings(options && options.dataViews && options.dataViews[0]);
        //console.log('Visual update', options);
        //if (typeof this.textNode !== "undefined") {
        //    this.textNode.textContent = (this.updateCount++).toString();
        //}
    }
}
exports.Visual = Visual;
//# sourceMappingURL=visual.js.map