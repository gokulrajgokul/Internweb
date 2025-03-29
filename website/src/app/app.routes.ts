import { Routes } from '@angular/router';
import { RegisterinternComponent } from './registerintern/registerintern.component';
import { AssigntaskComponent } from './assigntask/assigntask.component';
import { InterndetailsComponent } from './interndetails/interndetails.component';
import { PendingtaskComponent } from './pendingtask/pendingtask.component';
import { TaskreportComponent } from './taskreport/taskreport.component';

export const routes: Routes = [
    {path:'',component:RegisterinternComponent},
    {path:'registerintern',component:RegisterinternComponent},
    {path:'interndetails',component:InterndetailsComponent},
    {path:'assigntask',component:AssigntaskComponent},
    {path:'pendingtask',component:PendingtaskComponent},
    {path:'taskreport',component:TaskreportComponent}
];
