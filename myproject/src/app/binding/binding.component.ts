import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  message = 'This is a demo';
  constructor() { }

  ngOnInit(): void {
  }


  mylogo = "/assets/download.jpg"
  imageheight = 100

  employee = {
    name: "baba",
    city: "eluru"
  }

  disabled = "ture"

  //event binding
  show = () => {
    this.message = `message changed ${this.username}`
  }
  
  greetUser = (name: string) => this.message = `Good Day ${name}`

  headerClass = 'header'
  footerClass = 'footer'
  applyClass = true

  headerText = 'lowercase'
  headerColor = 'orange'

  username = 'harsha'
  
  greetMessage:string='';
  
  greetCustomer=(CusName:string)=>{
    this.greetMessage=`Good day ${CusName}`
  }
}

