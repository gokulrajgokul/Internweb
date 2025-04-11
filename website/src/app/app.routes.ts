import { Routes } from '@angular/router';
import { RegisterinternComponent } from './registerintern/registerintern.component';
import { AssigntaskComponent } from './assigntask/assigntask.component';
import { InterndetailsComponent } from './interndetails/interndetails.component';
import { PendingtaskComponent } from './pendingtask/pendingtask.component';
import { TaskreportComponent } from './taskreport/taskreport.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
    {path:'registerintern',component:RegisterinternComponent},
    {path:'registerintern',component:RegisterinternComponent},
    {path:'interndetails',component:InterndetailsComponent},
    {path:'assigntask',component:AssigntaskComponent},
    {path:'pendingtask',component:PendingtaskComponent},
    {path:'taskreport',component:TaskreportComponent},
    {path:'sidebar',component:SidebarComponent},
    {path:'header',component:HeaderComponent},
    {path:'footer',component:FooterComponent},
    {path:'adminhome',component:AdminhomeComponent},
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'payment',component:PaymentComponent},
 
];
