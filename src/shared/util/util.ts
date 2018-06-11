export default class Util {

  mask(v:string = '', mask:string):string {
    const i = v.length;
    const output = mask.substring(1,0);
    const text = mask.substring(i)
    if (text.substring(0,1) != output){
      v += text.substring(0,1);
    }
    return v;
  }
}
