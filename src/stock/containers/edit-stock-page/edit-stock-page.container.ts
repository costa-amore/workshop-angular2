import {Component, OnDestroy} from "@angular/core";
import {Main} from "../../../common/components/main/main.component";
import {DefaultPage} from "../../../common/components/default-page/default-page.component";
import {ROUTER_DIRECTIVES, RouteParams, Router} from "@angular/router-deprecated";
import {DetailWineForm} from "../../components/detail-wine-form/detail-wine-form.component";
import {Wine} from "../../entities/Wine";
import {Observable} from "rxjs/Rx";
import {EditStockPageSandbox} from "../../sandboxes/edit-stock-page.sandbox";
import {StockService} from "../../services/stock.service";
@Component({
    selector: "edit-stock-page",
    providers: [EditStockPageSandbox, StockService],
    directives: [ROUTER_DIRECTIVES, DetailWineForm, DefaultPage, Main],
    template: `
    <default-page>
        <main>
            <div class="row">
                <div class="col-sm-12">
                    <h1><i class="fa fa-pencil"></i>&nbsp;Edit wine</h1>
                </div>
             </div>
             <div class="row">
                <detail-wine-form [wine]="editWine$|async" *ngIf="editWine$|async" (onSave)="onSave($event)"></detail-wine-form>
            </div>
        </main>
    </default-page>
     `
})
export class EditStockPage implements OnDestroy {
    public get id(): string {
        return this.routeParams.get("id");
    }

    public editWine$: Observable<Wine> = this.sb.editWine$;

    constructor(public sb: EditStockPageSandbox,
                private routeParams: RouteParams,
                private router: Router) {
        this.sb.fetchWine(this.id).subscribe(wine => this.sb.setWine(wine));
    }

    public onSave(wine: Wine): void {
        this.sb.updateWine(this.id, wine);
        this.router.navigateByUrl("/stock");
    }

    public ngOnDestroy(): void {
        this.sb.clearWine();
    }
}