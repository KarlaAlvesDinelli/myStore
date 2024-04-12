import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private messageService: MessageService,
    private router: Router
  ) {}
  loginForm!: FormGroup;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      role: ['admin'],
    });
  }

  login() {
    this.isLoading = true;
    this.service.login(this.loginForm.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Logged in Successfully',
        });
        this.router.navigate(['/products']);
        this.isLoading = false;
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Incorrect user name or password',
        });
        this.isLoading = false;
      }
    );
  }
}
