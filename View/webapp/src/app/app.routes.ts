import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path: 'friend',component:FriendComponent},
    {path: 'profile',component:ProfileComponent}
];
