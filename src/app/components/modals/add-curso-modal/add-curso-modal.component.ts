import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AlumnosService } from 'src/app/services/alumnos.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-curso-modal',
  templateUrl: './add-curso-modal.component.html',
  styleUrls: ['./add-curso-modal.component.scss']
})
export class AddCursoModalComponent implements OnInit {
  isLoading: boolean = false;
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  addForm: FormGroup;
  postCursosSub:Subscription;

  constructor (
    public dialogRef: MatDialogRef<AddCursoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialog,
    private alumnoService: AlumnosService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required]),
      'middleName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'curso': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.isLoading = true;
    let alumno = this.addForm?.value;
    this.postCursosSub = this.alumnoService.postAlumno(alumno)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.toastr.success('Refresca la tabla de alumnos para ver el nuevo registro', 'Alumno Agregado');
          this.isLoading = false;
          this.addForm.reset();
          this.dialogRef.close();
        },
        error: (error) => {
          this.toastr.error(error);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      })
  }

  ngOnDestroy(): void {
    this.postCursosSub.unsubscribe();
  }

}
