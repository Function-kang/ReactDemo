import { createInterface } from "./interface";
import { examDataType } from "./dataType";

interface type {
  name: String;
  code: Number;
  massage: String;
}

export const examList = createInterface<void, examDataType[]>('GET', '/exam/paper/allList');
export const examTest = createInterface<void, type>('GET', '/api/exam/test');
export const test = createInterface<void, any>("GET", "/test");

