import { Component } from "obsidian";

export class PComponent extends Component {
    async load() {
        if (!this._loaded) {
            this._loaded = !0,
            await this.onload();
            for (var e = 0, t = this._children.slice(); e < t.length; e++) {
               await t[e].load()
            }
        }
    }
    async unload() {
        if (this._loaded) {
            this._loaded = !1;
            for (var e = this._children, t = this._events; e.length > 0; ) {
                await e.pop().unload()
            }
            for (; t.length > 0; ) {
                t.pop()()
            }
            await this.onunload()
        }
    }
    async addChild(e) {
        return this._children.push(e),
        this._loaded && (await e.load()),
        e
    }
    async removeChild(e) {
        var t = this._children
          , n = t.indexOf(e);
        return -1 !== n && (t.splice(n, 1),
        (await e.unload())),
        e
    }
}
