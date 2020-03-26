import { Component, OnInit } from '@angular/core';
import { Major } from '../major.class';
import { MajorService } from '../major.service';

@Component({
  selector: 'app-major-code',
  templateUrl: './major-code.component.html',
  styleUrls: ['./major-code.component.css']
})
export class MajorCodeComponent implements OnInit {
 major : Major = new Major();""
 message: string = "";
 

  check(): void {
    this.majorsvc.majorCode(this.major.code).subscribe(
      res => {
        this.major = res;
        this.message = this.major.name;
        console.debug("Major:", res);
      },
      err => {
        this.message = "Not found";
        console.debug("Not found:", err)
;      }
    )
  }
  constructor(
    private majorsvc: MajorService
  ) { }

  ngOnInit(): void {
  }

}
