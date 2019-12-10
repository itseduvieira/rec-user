import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  logged = false;
  phone = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  accept() {
    this.router.navigateByUrl('/card')
    .then(resolved => {
      
    });
  }

  check() {
    this.logged = true;
  }

  blurPhone() {
    this.phone = this.phone.trim().length < 18 ? '' : this.phone;
  }

  focusPhone() {
    this.phone = this.phone.trim() === '' ? '+55 (' : this.phone;
  }

  digitOnly(e) {
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || 
      (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
      (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
      (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
      (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
      (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
    ) {
      return;  // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105) || this.phone.length === 19
    ) {
      e.preventDefault();
    }
  }

  mask(e) {
    if(e.keyCode === 13) {
      this.check();
    } else if(this.phone.length === 7 && e.keyCode !== 8) {
      this.phone += ') ';
    } else if(this.phone.length === 13 && e.keyCode !== 8) {
      this.phone += ' ';
    } else if(this.phone.length === 19 && e.keyCode !== 8) {
      let newPhone = this.phone.replace(/\s/g,'');
      newPhone = newPhone.substring(0, 3) + ' ' + newPhone.substring(3, newPhone.length);
      newPhone = newPhone.substring(0, 8) + ' ' + newPhone.substring(8, newPhone.length);
      newPhone = newPhone.substring(0, 14) + ' ' + newPhone.substring(14, newPhone.length);
      this.phone = newPhone;
    } else if(this.phone.length === 18 && e.keyCode === 8) {
      let newPhone = this.phone.replace(/\s/g,'');
      newPhone = newPhone.substring(0, 3) + ' ' + newPhone.substring(3, newPhone.length);
      newPhone = newPhone.substring(0, 8) + ' ' + newPhone.substring(8, newPhone.length);
      newPhone = newPhone.substring(0, 13) + ' ' + newPhone.substring(13, newPhone.length);
      this.phone = newPhone;
    }
  }

}
