import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';


@Injectable()
export class CSVtoJSON {
        
  constructor(private http: Http) { }
  
  private fromUrl(file:string):Promise<any>{
      let _this = this;
      let promise = new Promise<any>((resolve, reject) => {
          _this.http.get(file).subscribe(data => {
              let text = data['_body'] || '';
              resolve(_this.toJson(text));
          }, err => {
             console.log(err);
             if(err.status == 404) {
                 reject("File not found");
             }
             reject(err); 
          });
      });
      return promise;
  }
  
  private fromFile(file:any):Promise<any> {
      let _this = this;
      let promise = new Promise<any>((resolve, reject) => {
          if(!file) {
              reject("Please pass file or URL.");
          }
          let reader = new FileReader();
          reader.onload = (e:any) => {
             let text = e.target.result;
             if(e.target.result) {
                 resolve(_this.toJson(text));
             } else {
                 reject("Data not found");
             }
          }
          reader.readAsText(file);
      });
      return promise;
  }
  
  private toJson(text:string):any {
      let lines = text.split(/\r\n|\n/);
      let headers = lines[0].split(',');
      
      let data = [];
      for(let i = 1; i < lines.length; i++) {
          let line = lines[i].split(',');
          if(line.length == headers.length) {
              let json = {};
              for(let j = 0; j< headers.length; j++) {
                  let col = headers[j];
                  json[col] = line[j];
              }
              data.push(json);
          }
      }
      return {json: data, headers: headers};
  }
    
  Convert(file:any):Promise<any> {
      if(typeof file == 'string') {
          return this.fromUrl(file);
      } else {
          return this.fromFile(file);
      }
  }
}