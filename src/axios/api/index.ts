import user from './user';
import comment from './comment';
import article from './article';
import tags from './tags';


const apiList = {
    // 分模块
    ...user,
    ...comment,
    ...article,
    ...tags
};
export default apiList;
