import { Component, EventRef, KeymapEventHandler } from "obsidian";

export class PComponent {
    _loaded: boolean;
    /**
     * Load this component and its children
     * @public
     */
    load(): Promise<void>;
    /**
     * Override this to load your component
     * @public
     * @virtual
     */
    onload(): Promise<void> | void;
    /**
     * Unload this component and its children
     * @public
     */
    unload(): Promise<void>;
    /**
     * Override this to unload your component
     * @public
     * @virtual
     */
    onunload(): Promise<void> | void;
    /**
     * Adds a child component, loading it if this component is loaded
     * @public
     */
    addChild<T extends Component | PComponent>(component: T): Promise<T>;
    /**
     * Removes a child component, unloading it
     * @public
     */
    removeChild<T extends Component | PComponent>(component: T): Promise<T>;
    /**
     * Registers a callback to be called when unloading
     * @public
     */
    register(cb: () => any): void;
    /**
     * Registers an event to be detached when unloading
     * @public
     */
    registerEvent(eventRef: EventRef): void;
    /**
     * Registers an DOM event to be detached when unloading
     * @public
     */
    registerDomEvent<K extends keyof WindowEventMap>(el: Window, type: K, callback: (this: HTMLElement, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    /**
     * Registers an DOM event to be detached when unloading
     * @public
     */
    registerDomEvent<K extends keyof DocumentEventMap>(el: Document, type: K, callback: (this: HTMLElement, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    /**
     * Registers an DOM event to be detached when unloading
     * @public
     */
    registerDomEvent<K extends keyof HTMLElementEventMap>(el: HTMLElement, type: K, callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    /**
     * Registers an key event to be detached when unloading
     * @public
     */
    registerScopeEvent(keyHandler: KeymapEventHandler): void;
    /**
     * Registers an interval (from setInterval) to be cancelled when unloading
     * Use {@link window.setInterval} instead of {@link setInterval} to avoid TypeScript confusing between NodeJS vs Browser API
     * @public
     */
    registerInterval(id: number): number;
}