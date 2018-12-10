import { Component } from "@angular/core";
import { templateSourceUrl } from "@angular/compiler";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
    clicked = "No click Yet";
    names:string[] ;
    myClick(){
        this.names = ['ad','ada','ada'];
    }
}