import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductComponent } from "./product.component";

const routes = [
    { path: '', component: ProductComponent },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class ProductRoutingModule { }