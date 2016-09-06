import { Component, AfterViewInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements AfterViewInit{
    public counter: number = 16;

    constructor(private http : Http){

    }

    ngAfterViewInit(){
      this.TestHttp();
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
        return this.http.get(url)
          .map(this.extractData)
          .catch(this.handleError)
          .subscribe((data) => {
            console.log(data);
          });  
    }  
  
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
    
   private handleError(error: Response) {        
        console.log('Error'+error);
        return Observable.throw(error.json() || 'Server error');
    }
    
}
