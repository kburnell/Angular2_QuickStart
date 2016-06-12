//Angular's browser bootstrap function
//Boostrapping isn't in @angular/core because there isn't a single way to boostrap an app.
//could be browser or mobile device which requires a different kind of bootstrapping function which would be imported from a different library.
import { bootstrap }    from '@angular/platform-browser-dynamic';
//Application's root component
import { AppComponent } from './app.component';

//Bootstrap application
bootstrap(AppComponent);
