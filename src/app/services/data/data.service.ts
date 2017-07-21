import { Injectable } from '@angular/core';

interface FileData {
    name:string;
    data:Array<any>;
    headers: Array<string>;
}

@Injectable()
export class DataService {
  filesData;
  constructor() {
      this.filesData = new Array<FileData>();
  }
}
