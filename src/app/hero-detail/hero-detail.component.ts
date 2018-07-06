import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states } from '../data-model';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private _fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.createForm();
  }

  heroForm: FormGroup;
  states = states;

  createForm() {
    this.heroForm = this._fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(4)]),
      street: '',
      city: '',
      state: '', zip: '', power: '', sidekick: ''
    });
  }
}
