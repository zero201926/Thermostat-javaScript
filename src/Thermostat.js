'use strict';
function Thermostat() {

  this._min_temp = 10;
  this._temp = 20;
  this._power_saving_mode = true;
}

Thermostat.prototype.power_saving_button = function() {
  if(this._power_saving_mode == true) {
    this._power_saving_mode = false;
  } else {
    this._power_saving_mode = true;
  };
};

Thermostat.prototype.max_temp = function() {
  if(this._power_saving_mode == true){
    return 25;
  } else {
    return 32;
  };
};

Thermostat.prototype.current_temp = function() {
  return this._temp;
};

Thermostat.prototype.up = function() {
  ++this._temp
  //return this.temp;
};

Thermostat.prototype.down = function() {
  --this._temp
  //return this.temp;
};

Thermostat.prototype.reset= function() {
  this._temp = 20;
};
