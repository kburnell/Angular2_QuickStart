/*
 This is the root of the application
 Hosts the client user experience
 Components are main building blocks of Angular apps
 A Component controls a portion of the screen - a view - through it's associated template
*/
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
/*
Conventionally named 'AppComponent'
 */
export class AppComponent { }
