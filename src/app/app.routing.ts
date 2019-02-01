import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MixComponent } from './mix/mix.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SurfaceComponent } from './surface/surface.component';
import { WindowsComponent} from './windows/windows.component';
import { ContactsComponent} from './contacts/contacts.component';
import { AdminComponent} from './admin/admin.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';



const appRoutes: Routes = [
    {
        path: '',
        component:MixComponent
    },
    {
        path: 'office',
        component:WelcomeComponent
    },
    {
        path:'windows',
        component:WindowsComponent
    },
    {
        path:'contacts',
        component:ContactsComponent   
     },
     {
        path:'surface',
        component:SurfaceComponent   
     },
     {
        path:'admin',
        component:AdminComponent   
     },
     {
         path: 'contact/:id',
         component: ContactDetailsComponent
     }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);