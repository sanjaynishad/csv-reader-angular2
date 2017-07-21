import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CSVtoJSON } from '../../csv-to-json';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Output() uploaded = new EventEmitter<any>();
    
  constructor(private cSVtoJSON:CSVtoJSON) { }

  ngOnInit() {
  }
  
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 5) {
        alert("Maximum 5 files allowed at a time.");
        return;
    }
    if(fileList.length > 0) {
        for(let i = 0; i< fileList.length; i++) {
            let file: File = fileList[i];
            this.cSVtoJSON.Convert(file).then(data=>{
                this.uploaded.emit({
                    name: file.name,
                    data: data.json,
                    headers: data.headers
                });    
            }, err=>{
            });
        }
    }
  }
}
