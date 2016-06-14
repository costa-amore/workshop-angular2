import {Component} from "@angular/core";
@Component({
    selector: "panel",
    styles: [require("./panel.component.scss")],
    template: `
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Fake header</h3>
            </div>
            <div class="panel-body">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class Panel {
}