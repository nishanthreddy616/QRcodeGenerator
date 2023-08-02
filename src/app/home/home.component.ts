import { Component, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  @ViewChild('qrCode', { static: false }) qrCode!: ElementRef;

  show=false;
  url:any;
  imageurl: string='';
  generateQRCode(text: string): void {
    QRCode.toCanvas(this.qrCode.nativeElement, text, (error) => {
      if (error) {
        console.error('Error generating QR code:', error);
      }
      else{
        this.show=true;
      }
    });
  }

  download(){
QRCode.toDataURL(this.url,(error,Durl)=>{
  if(error){
  console.log("error at download function error: ", error);
  }
  else{
    this.imageurl=Durl;
  }
})
  }


  generate(): void {
    this.generateQRCode(this.url); // Replace this URL with your desired content
  }
}



