import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    ) { 
      
    this  .formularioLogin =  this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    });
  }

  ngOnInit() {
  }
  async ingresar() {
    var f = this.formularioLogin.value;
  
    var usuarioString = localStorage.getItem('usuario');
  
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
  
      if (usuario.nombre === f.nombre && usuario.password === f.password) {
        console.log('Ingresado', 'true');
  
        const alert = await this.alertController.create({
          header: 'Ingreso exitoso',
          message: '¡Bienvenido!',
          buttons: ['Aceptar']
        });
  
        await alert.present();
        this.navCtrl.navigateRoot('app');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });
  
        await alert.present();
      }
    } else {
      // Maneja el caso cuando el valor 'usuario' es nulo
    }
  }
  
  
  
}

