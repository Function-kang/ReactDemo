import Mock from "mockjs";

const arr = [1, 2, 3];
const testData = Mock.mock({
  list: arr,
  total: arr.length,
});
Mock.mock("/test", "get", testData);
