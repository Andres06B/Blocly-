import { Routes } from '@angular/router';
import { Welcome } from './features/notes/pages/welcome/welcome';
import { Home } from './features/notes/pages/home/home';

export const routes: Routes = [

    // Define the routes for the application
    {   // Default route
        path: '',
        component: Welcome
    },

    {   // Route for the home page
        path:'home',
        component:Home
    }, 
    {
        path: '**', // Wildcard route for a 404 page
        redirectTo: '' // Redirect to the default route
    }
]; 
