import { Component, OnInit } from '@angular/core';
import { Compte } from '../models/compte'

@Component({
  selector: 'app-formulaire-compte',
  templateUrl: './formulaire-compte.component.html',
  styleUrls: ['./formulaire-compte.component.less']
})
export class FormulaireCompteComponent implements OnInit {

  account:Compte = new Compte();
  passwordConfirmation:string;
  validated:boolean = false;

  onSubmit(): void
  {
    alert('Form Submitted succesfully!');
    console.table(this.account);
    this.validated = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
