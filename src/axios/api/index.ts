import articleClass from './articleClass';
import comment from './comment';
import article from './article';
import tags from './tags';


const apiList = {
    // 分模块
    ...articleClass,
    ...comment,
    ...article,
    ...tags
};
export default apiList;
