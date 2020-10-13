import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { UserModel } from '../../models/User.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
    });
  }

  createUser(): void {
    const userModel = new UserModel();
    // userModel.id = this.signupForm.get(id);
    userModel.email = this.signupForm.get('email').value;
    userModel.password = this.signupForm.get('password').value;
    userModel.nom = this.signupForm.get('nom').value;
    userModel.prenom = this.signupForm.get('prenom').value;

    this.authService.createNewUser(userModel)
      .then(() => {
          this.dialog.open(DialogComponent).afterClosed().subscribe(() =>
            this.router.navigate(['/acceuil'])
          );
        },
        (error) => {
          console.error('sign up error', error);
          this.errorMessage = error;
        },
      );
  }

}
