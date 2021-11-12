var display = "";
var result = "";

let clearing = () => {
  display = "";
  document.getElementById("hasil").innerHTML = "0";
};

let numb1 = () => {
  display += "1";
  document.getElementById("hasil").innerHTML = display;
};

let numb2 = () => {
  display += "2";
  document.getElementById("hasil").innerHTML = display;
};

let numb3 = () => {
  display += "3";
  document.getElementById("hasil").innerHTML = display;
};

let numb4 = () => {
  display += "4";
  document.getElementById("hasil").innerHTML = display;
};

let numb5 = () => {
  display += "5";
  document.getElementById("hasil").innerHTML = display;
};

let numb6 = () => {
  display += "6";
  document.getElementById("hasil").innerHTML = display;
};

let numb7 = () => {
  display += "7";
  document.getElementById("hasil").innerHTML = display;
};

let numb8 = () => {
  display += "8";
  document.getElementById("hasil").innerHTML = display;
};

let numb9 = () => {
  display += "9";
  document.getElementById("hasil").innerHTML = display;
};

let numb0 = () => {
  display += "0";
  document.getElementById("hasil").innerHTML = display;
};

let Coma = () => {
  display += ".";
  document.getElementById("hasil").innerHTML = display;
};

let Delete = () => {
  display = display.substring(0, display.length - 1);
  if (display === "") {
    display = "0";
  }
  document.getElementById("hasil").innerHTML = display;
};

let Divide = () => {
  display += "/";
  document.getElementById("hasil").innerHTML = display;
};

let Times = () => {
  display += "*";
  document.getElementById("hasil").innerHTML = display;
};

let Min = () => {
  display += "-";
  document.getElementById("hasil").innerHTML = display;
};

let Plus = () => {
  display += "+";
  document.getElementById("hasil").innerHTML = display;
};

let Equal = () => {
  try {
    result = eval(display);
    document.getElementById("hasil").innerHTML = result;
    display = "";
  } catch (error) {
    document.getElementById("hasil").innerHTML = "Masukkan Angka Yang Benar";
    display = "";
  }
};

let KurungKiri = () => {
  display += "(";
  document.getElementById("hasil").innerHTML = display;
};

let KurungKanan = () => {
  display += ")";
  document.getElementById("hasil").innerHTML = display;
};
