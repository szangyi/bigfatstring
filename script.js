"use strict";

window.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
  document.querySelector("#generate").addEventListener("click", readOptVal);
}

function readOptVal() {
  const readInput = document.querySelector("#input").value;

  const operatorInput = document.querySelector("#operator");
  const firstSpace = readInput.indexOf(" ");
  const lastSpace = readInput.indexOf(" ");
  const lastPng = readInput.lastIndexOf(".");
  const lastJpg = readInput.lastIndexOf(".");
  const isPng = readInput.substring(lastPng + 1);
  const isJpg = readInput.substring(lastJpg + 1);
  const hiddenPass = "*";
  const firstAfter = readInput.indexOf("-");

  let outputResult = "";

  if (operatorInput.value === "option1") {
    outputResult = readInput.substring(0, 1).toUpperCase() + readInput.substring(1);
    showOutput();
  } else if (operatorInput.value === "option2") {
    outputResult = readInput.substring(0, firstSpace);
    showOutput();
  } else if (operatorInput.value === "option3") {
    outputResult = readInput.substring(0, firstSpace).length;
    showOutput();
  } else if (operatorInput.value === "option4") {
    outputResult = readInput.substring(firstSpace + 1, lastSpace).trim();
    showOutput();
  } else if (operatorInput.value === "option5") {
    if (isJpg === "jpg" || isPng === "png") {
      console.log("true");
      outputResult = readInput;
    } else {
      outputResult = "WRONG WRONG WRONG";
      console.log(outputResult);
    }
    showOutput();
  } else if (operatorInput.value === "option6") {
    outputResult = hiddenPass.repeat(readInput.length);
    showOutput();
  } else if (operatorInput.value === "option7") {
    const caplet = readInput.substring(0, 2).toLowerCase();
    const lowlet = readInput[2].toUpperCase();
    const rest = readInput.substring(3).toLowerCase();

    outputResult = caplet + lowlet + rest;
    showOutput();
  } else {
    outputResult = readInput.substring(0, 1).toUpperCase() + readInput.substring(1);
  }
  console.log(outputResult);

  function showOutput() {
    console.log(showOutput);
    document.querySelector("#output").value = outputResult.toString();
  }
}
