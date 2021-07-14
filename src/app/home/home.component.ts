import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// function addSnt(num: number){
//   let sum: number = 0;
//   sum += num;
//   return num;
// }

// buoc 1 check 1 so co la  so nguyen to khong?
 public checkSNT(snt:number){
   if(snt <= -1)
    return false;
    else if(snt == 2 || snt == 3)
      return true;

    for (let i = 2; i <= Math.sqrt(snt); i++) {
      if(snt % i == 0)
        return false;
    }
    return true;
 }

// buoc 2 tinh tong 30 so snt dau tien

public sum30Snt(){
  let count: number =0;
  let check = 0;
  let max = 30; // thu vs snt = 3 => ket qua laf  2+3+5 =10 // ok test thanh cong
  for(let i = 2;check < max; i++){
    if(this.checkSNT(i)) {
      count += i;
      check ++;
    }
  }
  return count; // tra ve 
}
  constructor() { }

  ngOnInit(): void {
  }

}

