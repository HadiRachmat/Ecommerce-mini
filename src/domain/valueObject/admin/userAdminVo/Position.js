import * as CONSTANT from '../../../../configuration/constant.js';
import { ResponseError } from '../../../../error/ResponseError.js';

export default class Position {
  constructor(position){
    const validatePosition = [ CONSTANT.BASE_POSITION_SUPERADMIN];
    if( typeof position !== 'number'){
      throw new ResponseError(400, 'Position must be a number');
    }
    if( !validatePosition.includes(position)){
      throw new ResponseError(400, `Position must be one of the following values: ${validatePosition.join(', ')}`);
    }
    this.position = position;
  }
}