import {Component, AfterViewInit} from "@angular/core";
import {Http, Headers, Response, } from "@angular/http";
import {Observable} from "rxjs";


@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements AfterViewInit{
    public counter: number = 16;
        private headers: Headers;

    constructor(private http : Http){
         this.headers = new Headers();
         this.headers.append('Content-Type', 'application/json');
    }

    ngAfterViewInit(){
        this.TestHttp()
    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }

    private TestHttp(){      
        console.log("calling http get");
        var url = "http://servicetest.picpollapp.com/PollService.svc/rest/Test/nitheen";        
        return this.http.get(url, {headers:  this.headers})
        .map(res =>{ 
                console.log(res);
               return res;
            })
        .catch(this.handleError)    
        .subscribe((data) =>{
            console.log(data);
        })    
    }        
    
    handleError(error: Response) {        
        console.log('Error'+error);
        return Observable.throw(error.json() || 'Server error');
    }
    
}
