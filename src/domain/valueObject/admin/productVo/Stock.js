import { ResponseError } from "../../../../error/ResponseError.js";

export default class Stock {
  constructor(stock){
    if(stock === undefined || stock === null){
      throw new ResponseError(400, 'Stock is required');
    }
    if(typeof stock !== 'number'){
      throw new ResponseError(400, 'Stock must be a number');
    }
    if(!Number.isInteger(stock)){
      throw new ResponseError(400, 'Stock must be an integer');
    }
    if(stock < 0){
      throw new ResponseError(400, 'Stock must be greater than or equal to 0');
    }
    this.stock = stock;
  }
}