import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Employee} from 'src/app/models/employee.model'
import { EmployeeService } from 'src/app/services/employee.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn , Validators, RequiredValidator } from '@angular/forms';
import PhoneNumber from 'awesome-phonenumber';
import {ISO_3166_1_CODES} from './country-codes';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  header:string; 
  employee: Employee = {
    id:0, 
    name: 'name',
    email:'email',
    phone: 0
  
  }

  profileForm = this.fb.group({
    phone: this.fb.group({
        country: ['US'],
        number: []
    }, {validators: phoneValidator}),
    id : ['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    name:['',[Validators.required,Validators.minLength(2)]]
   });
  
  
   id = this.profileForm.get('id').value;
   
 
  constructor( private router: Router , private route: ActivatedRoute, private employeeService: EmployeeService , private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.id =  +this.route.snapshot.paramMap.get("id");
    this.header = this.id === 0 ? "Add employee" : "Edit employee ";
    if(this.id !=0){
      this.employee = this.employeeService.onGetEmployee(this.id);
    }
  }
 
  getErrorMessageId() {
    if (this.profileForm.get('id').hasError('required')) {
      return 'You must enter a value';
    }
  }

  getErrorMessageName() {
    if (this.profileForm.get('name').hasError('required')) {
      return 'You must enter a value';
    }
  }

  getErrorMessage() {
    if (this.profileForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }
    return this.profileForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  


  
  onSubmit(form: NgForm){
    let employee: Employee = {
      id: form.value.id,
      name: form.value.name,
      email: form.value.email, 
      phone: form.value.phone.number,
    }
    console.log(this.id);
    
    if(this.id === 0){
      this.employeeService.onAdd(employee);
    }else {
      this.employeeService.onUpdate(employee);
    }
      this.router.navigateByUrl('');
    
  }
  

  countyCodes = ISO_3166_1_CODES;

  phoneErrorMatcher = new PhoneErrorMatcher();


  get phoneGroup() {
      return this.profileForm.get('phone') as FormControl;
  }

  get phoneCountryControl() {
      return this.profileForm.get('phone.country') as FormControl;
  }

  get phoneNumberControl() {
      return this.profileForm.get('phone.number') as FormControl;
  }

  get phoneNumberDigits(): string {
      return this.phoneNumberControl.value.replace(/\D/g, '');
  }

  get phoneNumber(): PhoneNumber {
      return new PhoneNumber(this.phoneNumberDigits, this.phoneCountryControl.value);
  }

  get phoneHint(): string {
      return PhoneNumber.getExample(this.phoneCountryControl.value).getNumber('national');
  }

  get phoneE164(): string {
      return this.phoneNumber.getNumber('e164');
  }

  formatNumber() {
      const natNum = this.phoneNumber.getNumber('national');
      this.phoneNumberControl.setValue((natNum) ? natNum : this.phoneNumberDigits);
  }
}

export const phoneValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const num = control.get('number');
  const country = control.get('country');
  if (num?.value && country?.value && !(new PhoneNumber(num.value, country.value).isValid())) {
      return {invalidPhone: true};
  } else {
      return null;
  }
};

export class PhoneErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      return !!(control.value && control.touched && !control?.parent?.valid);
  }
}
