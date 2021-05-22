import { OnInit,Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StunalistService } from '../stunalist.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  contactForm: FormGroup;
  optionsSelect: Array<any>;


  constructor(private fb: FormBuilder, private _stunalistServie:StunalistService) {

  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormSubjects': ['', Validators.required],
    'contactFormMessage': ['', Validators.required],
    'contactFormCopy': [''],
    });
  }

  ngOnInit(): void {
  }

  img="src/assets/contactus.png";

  onSubmit() {
    // this._stunalistServie.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
    // }, error => {
    //   console.log('Error', error);
    // });
  }

}
