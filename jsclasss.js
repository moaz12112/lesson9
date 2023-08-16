class stu{
constructor(id,fname,lname){
    this.id=id;
    this.fname=fname;
    this.lname=lname;
    this.year=0;

}

setYear(year){
    this.year=year;

}
getYear(year){
   return this.year;
}
}


let s1=new stu(2,"ahmad","yasser");
let s2=new stu(2,"ammar","waled");

s1.setYear(2);

document.getElementById("stu").innerHTML=s1.getYear();
