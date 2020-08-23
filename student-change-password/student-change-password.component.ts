import { Component, OnInit , Input, Output, EventEmitter, SimpleChange, OnChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.less']
})

export class StudentChangePasswordComponent implements OnInit {
  @Input() password:String
  @Input() MinimumLength = 8;
  @Input() MaximumLength = 128;
  @Output() strengthChange = new EventEmitter<number>();
  private colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];
  y:any;




  constructor(private route:ActivatedRoute)  {

  }
  ngOnInit() {
  }

}
