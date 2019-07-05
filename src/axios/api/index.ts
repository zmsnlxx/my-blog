import user from './user';
import comment from './comment';


const apiList = {
    // 分模块
    ...user,
    ...comment,
};
export default apiList;
