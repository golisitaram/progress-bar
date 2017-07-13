import { Component, OnInit } from '@angular/core';
import { Http, JsonpModule } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http){};
  data:any = {
    limit : '',
    bars : [],
    buttons : []
  }
  selectedOpt :any = 0 ;
  getDynamicData(){
    this.http.get('http://pb-api.herokuapp.com/bars')
    .subscribe(
      (res) =>{
        this.data = res.json();
        this.selectedOpt = 0;
      }
    )
  };
  ngOnInit() {
    this.getDynamicData()
  }
  

  updateProgress(b){
    this.data.bars[this.selectedOpt] = (this.data.bars[this.selectedOpt] + b > this.data.limit) ? this.data.limit : this.data.bars[this.selectedOpt] + b;
  }
  onChange(v:number){
    this.selectedOpt = v;
  }
}
