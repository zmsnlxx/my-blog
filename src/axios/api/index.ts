import user from './user';
import comment from './comment';
import article from './article';


const apiList = {
    // 分模块
    ...user,
    ...comment,
    ...article,
};
export default apiList;
