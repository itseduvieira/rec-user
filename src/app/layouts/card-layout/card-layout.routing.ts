import { Routes } from '@angular/router';

import { WelcomeComponent } from '../../pages/welcome/welcome.component';
import { CardComponent } from '../../pages/card/card.component';

export const CardLayoutRoutes: Routes = [
    { path: 'welcome',      component: WelcomeComponent },
    { path: 'card',      component: CardComponent }
];
