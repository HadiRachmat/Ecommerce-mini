export default class Phone {
  constructor (phone){
    if( typeof phone !== 'string'){
      throw new ResponseError(400, 'Phone must be a string');
    }
    if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
      throw new ResponseError(400, 'Phone number is not valid');
    }
    this.phone = phone;
  }
}