import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MixComponent } from './mix/mix.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WindowsComponent} from './windows/windows.component';

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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);