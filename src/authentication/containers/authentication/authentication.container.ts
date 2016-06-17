import {Component} from "@angular/core";
import {Panel} from "../../../common/components/panel/panel.component";
import {Account} from "../../types/Account";
import {Credentials} from "../../types/Credentials";
import {AuthenticationService} from "../../services/authentication.service";
import {Register} from "../../components/register/register.component";
import {Login} from "../../components/login/login.component";
@Component({
    selector: "authentication",
    directives: [Panel, Login, Register],
    providers: [AuthenticationService],
    template: `
    <div class="container">
        <panel [header]="'You are not authenticated!'">
            <button class="btn btn-danger" (click)="logout()">Logout</button>
            <login *ngIf="curTab === 0" (authenticate)="login($event)"></login>
            <register *ngIf="curTab === 1" (authenticate)="register($event)"></register>
            <a href="javascript:void(0)" (click)="enableTab(1)" *ngIf="curTab===0">I don't have an account yet</a>
            <a href="javascript:void(0)" (click)="enableTab(0)" *ngIf="curTab===1">I have an account already</a>
        </panel>
    </div>
      `
})
export class Authentication {
    public curTab: number = 0;

    constructor(private authenticationService: AuthenticationService) {
    }

    public enableTab(tabIndex: number): void {
        this.curTab = tabIndex;
    }

    public login(credentials: Credentials): void {
        this.authenticationService.authenticate(credentials);
    }

    public register(account: Account): void {
        this.authenticationService.register(account);
    }

    public logout(): void {
        this.authenticationService.logout();
    }
}