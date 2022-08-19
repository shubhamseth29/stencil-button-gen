/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { User } from "./components/user-list/user-list";
export namespace Components {
    interface MyComponent {
        "first": string;
        "last": string;
        "middle": string;
    }
    interface UserList {
        "users": User[];
    }
}
export interface MyComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyComponentElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLUserListElement extends Components.UserList, HTMLStencilElement {
    }
    var HTMLUserListElement: {
        prototype: HTMLUserListElement;
        new (): HTMLUserListElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "user-list": HTMLUserListElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        "first"?: string;
        "last"?: string;
        "middle"?: string;
        "onButtonEvent"?: (event: MyComponentCustomEvent<any>) => void;
    }
    interface UserList {
        "users"?: User[];
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "user-list": UserList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "user-list": LocalJSX.UserList & JSXBase.HTMLAttributes<HTMLUserListElement>;
        }
    }
}
