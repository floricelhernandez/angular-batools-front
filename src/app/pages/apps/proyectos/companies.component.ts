import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Companies } from './companies.model';
import {AuthenticationService} from '../../../core/services/auth.service';
import { ProyectoService } from './proyecto.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})

/**
 * Companies component - handling the proyectos with navbar and content
 */
export class CompaniesComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  // proyectos data
  companiesData: Companies[];
  nuevoProyecto: Companies;

  // form submition
  submitted: boolean;

  // validation form
  validationform: FormGroup;

  // chart data
  companyChart: {};

  constructor(private modalService: NgbModal, public formBuilder: FormBuilder,
              private authenticationService: AuthenticationService, private  proyectoService: ProyectoService) { }


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Batools', path: '/' }, { label: 'Apps', path: '/' }, { label: 'Proyectos', path: '/', active: true }];

    /**
     * Model data validation
     */
    this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      about: ['', [Validators.required]],
    });

    /**
     * Fetches data
     */
    this._fetchdata();
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }

  /**
   * Modal Open for adding new company data
   * @param content modal content
   */
  openModal(content: string) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * Modal data save
   */
  saveData() {

    if (this.validationform.valid) {
      const nombre = this.validationform.get('name').value;
      const descripcion = this.validationform.get('about').value;
      const categoria = this.validationform.get('location').value;
      if (!(nombre === '' || descripcion === '' || categoria === '')) {
        this.nuevoProyecto = {
          nombre,
          descripcion,
          categoria
        };
        this.proyectoService.setProyecto(this.nuevoProyecto)
            .subscribe((data: any) => {
              console.log(data);
              this.companiesData.push(data);
            });
        // Model value reset
        this.validationform = this.formBuilder.group({
          name: null,
          location: null,
          about: null,
        });
        this.validationform.get('name').setValue('');
        this.validationform.get('about').setValue('');
        this.validationform.get('location').setValue('');
        this.modalService.dismissAll();
      } else {
        console.log('nombre vacio');
      }
    }
    this.submitted = true;
  }

  /**
   * Fetches Companies data
   */
  private _fetchdata() {
     this.proyectoService.getProyectos()
        .subscribe((data: any) => {
          this.companiesData = data;
        });
  }
}
