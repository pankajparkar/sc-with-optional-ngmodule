import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RoleDetailsComponent } from "./details/details.component";
import { RolesComponent } from "./roles.component";

const routes = [{
    path: '',
    component: RolesComponent
}, {
    path: 'details/:id',
    component: RoleDetailsComponent
}];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class RolesRoutingModule { }