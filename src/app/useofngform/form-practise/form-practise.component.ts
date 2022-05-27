import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-practise',
  templateUrl: './form-practise.component.html',
  styleUrls: ['./form-practise.component.css']
})
export class FormPractiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveData(testForm: NgForm) {
    console.log("testForm.value.email ", testForm.value.email)
    console.log("testForm.value.pwd ", testForm.value.pwd)
  }

}
